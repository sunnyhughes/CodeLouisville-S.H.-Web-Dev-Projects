/*var fields={};

document.addEventListener("DOMContentLoaded", function() {
    fields.fullName = document.getElementById('fullName');
    fields.email = document.getElementById('email');
    fields.question = document.getElementById('question');
   })

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

validationFunction(field.value)

if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }

    function isValid() {
        var valid = true;
        
        valid &= fieldValidation(fields.fullName, isNotEmpty);
        valid &= fieldValidation(fields.email, isEmail);
        valid &= fieldValidation(fields.subject, isNotEmpty);
       
        return valid;
       }

       class User {
        constructor(fullName, email, subject, message) {
        this.fullName = fullName;
        this.email = email;
        this.subject = subject;
        this.message = message;
        }
       }

       function sendContact() {
        field.email = getEmail();

        if (isValid()) {
            let usr = new User(fullName.value, email.value, subject.value, message.value);

            alert('${usr.fullName} thanks for contact')

        }   else{
            alert("There was an error")
        }
       }
       // I'm trying the js format above//


const formInfo = document.getElementById ("formInfo");

function showMessage(message) {
    formInfo.innerHTML="<p>"+ message + "</p>";
}

function clearMessage () {
    formInfo.innerHTML="";
}

const contactForm=document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event){
event.preventDefault();
const contact=new ContactForm(contactForm);
contact.send();
});

send() {
    console.info(this.formatMessage)();
    showMessage("");
}

formatMessage() {
    return()to:${}
}
emailSubject: $(this.Subject){
}

*/