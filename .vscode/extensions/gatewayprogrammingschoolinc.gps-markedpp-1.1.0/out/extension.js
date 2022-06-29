"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const fs_1 = require("fs");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('"gps-markdpp" is now active.');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand("gps-markdown.transformMarkdown", () => {
        var rootFolder = context.asAbsolutePath(".");
        // The code you place here will be executed every time your command is executed
        if (!vscode.workspace.workspaceFolders) {
            vscode.window.showErrorMessage("No workspace folder.  Defaulting to actual path.");
        }
        else {
            rootFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
        }
        var markedppOptions = new MarkedppOptions();
        markedppOptions
            .initialize(rootFolder)
            .then(result => {
            if (!result) {
                vscode.window.showInformationMessage("Used default configuration.  Check your config file.");
            }
            try {
                if (markedppOptions.rootSourceFiles.length > 0) {
                    markedppOptions.rootSourceFiles.forEach(sourceFile => {
                        var markedpp = require("markedpp"), options = markedppOptions.options;
                        var filename = "";
                        filename = require("path")
                            .join(rootFolder, sourceFile)
                            .toString();
                        sourceFile = require("path").basename(filename);
                        var path = filename.substring(0, filename.length - filename.replace(/^.*[\\\/]/, "").length);
                        options.dirname = path;
                        var destination = "";
                        destination = require("path").join(rootFolder, markedppOptions.outputDirectory);
                        fs_1.readFile(filename, (err, data) => {
                            if (err) {
                                throw err;
                            }
                            markedpp(data.toString(), options, function (err, result) {
                                writeResult(destination, result, sourceFile);
                            });
                        });
                    });
                    // Display a message box to the user
                    vscode.window.showInformationMessage("Transform Complete.");
                }
                else {
                    vscode.window.showWarningMessage("No files to process.");
                }
            }
            catch (err) {
                vscode.window.showErrorMessage("Transformation was unsuccessful.");
            }
        })
            .catch(err => {
            vscode.window.showErrorMessage(err);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
function writeResult(path, result, filename) {
    var file = require("path").join(path, filename.replace(/^.*[\\\/]/, ""));
    var fs = require("fs");
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    fs_1.writeFile(file, result, null, err => {
        if (err !== null) {
            vscode.window.showErrorMessage(err.message);
        }
        console.error(err);
    });
}
class MarkedppOptions {
    constructor() {
        this.rootSourceFiles = new Array();
        this.outputDirectory = ".";
        this.options = {
            gfm: true,
            include: true,
            toc: true,
            numberedheadings: true,
            ref: true,
            breaks: true,
            tags: true,
            level: 3,
            minlevel: 1,
            autonumber: true,
            autoid: true,
            githubid: false // use github convention for heading auto identifiers
        };
    }
    initialize(path) {
        return new Promise((resolve, reject) => {
            //var path =  //context.asAbsolutePath('.gps.markedpp');
            path = require("path").join(path, ".gps.markedpp");
            vscode.workspace.openTextDocument(path).then(document => {
                let text = document.getText();
                var json = null;
                try {
                    json = JSON.parse(text);
                    json.rootSourceFiles.forEach((element) => this.addSourceFile(element));
                    this.outputDirectory = json.outputDirectory || this.outputDirectory;
                    this.options = json.options;
                    resolve(true);
                }
                catch (err) {
                    resolve(false);
                }
                resolve(false);
            }, error => {
                vscode.window.showErrorMessage("Could not process configuration. " + error);
                reject(error);
            });
        });
    }
    addSourceFile(filename) {
        this.rootSourceFiles.push(filename);
    }
}
//# sourceMappingURL=extension.js.map