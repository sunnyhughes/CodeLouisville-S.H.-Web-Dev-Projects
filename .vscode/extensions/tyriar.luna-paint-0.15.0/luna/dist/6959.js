"use strict";const a5_0x6e11=["toRGBA","subarray","bitmapHeight","slice",") color depth (","error","10TPGAcd","Cannot open .icos containing 32-bit bitmaps with palettes yet (color count=","setUint16","Unsupported .ico image entry color depth (","bitsPerPixel","10cNrTRX","toBGRA","colorCount","2057671sqdlOc","dataSize","Warning","push","problems","width","byteOffset","pow","byteLength","info","getUint8","length","59400fiEYcD","6291pfzlve","all","image","BITMAPINFOHEADER color plane count must be 1","bitness","floor","height","image/bmp","Not enough bytes in file for png signature (","message","join","Not enough pixel data (","1294608zwcKFd","byteSize","_offset","_colorCount","resource","534KpWvGW","_data",") and BMP pixel data don`t have matching dimensions (","image/png","1839213IVJxuK","379201AVdhsP","paletteColorCount",") was not expected value of ","Error","Cannot parse .ico files with > 1 color planes yet (","getUint32",") to decode image, expected ","isArray","Assertion failure: ","severity","bitmapWidth","set","isReady","fromCharCode",'Unexpected bitmap type "',"Info","headerSize","getUint16","buffer","dataOffset","toString","Problems parsing file:"," !== ","lambda ","get","from","data","warn","then","Unexpected bpp ","3014lXXxQw","map","mimeType","webpackChunkluna","readyPromise"],a5_0x5207=function(t,e){return a5_0x6e11[t-=493]},a5_0x54b985=a5_0x5207;!function(t,e){const n=a5_0x5207;for(;;)try{if(939701===-parseInt(n(496))+-parseInt(n(538))*-parseInt(n(559))+parseInt(n(571))+parseInt(n(497))+parseInt(n(543))*parseInt(n(558))+parseInt(n(527))*-parseInt(n(576))+parseInt(n(546)))break;t.push(t.shift())}catch(e){t.push(t.shift())}}(a5_0x6e11),(self[a5_0x54b985(530)]=self[a5_0x54b985(530)]||[])[a5_0x54b985(549)]([[6959],{9094:(t,e,n)=>{var r,i;n.d(e,{P:()=>r,V:()=>i}),(r||(r={})).toRGBA=function(t,e){let n=0;const r=4*e;for(let e=0;e<r;e+=4)n=t[e],t[e]=t[e+2],t[e+2]=n},(i||(i={}))[a5_0x5207(544)]=function(t,e){return r.toRGBA(t,e)}},4085:(t,e,n)=>{function r(t,e){return Math.ceil(t/e)*e}n.d(e,{g:()=>r})},6959:(t,e,n)=>{const r=a5_0x54b985;n.r(e),n.d(e,{openIco:()=>d,parseDirectory:()=>b,parseHeader:()=>w,verifyIcoSignature:()=>g});class i extends Error{constructor(t){const e=a5_0x5207;super(Array[e(504)](t)?t[e(528)]((t=>function(t){const e=a5_0x5207;return t[e(506)]+": "+t[e(568)]}(t)))[e(569)]("\n"):t[e(568)]),this[e(550)]=t}}const o={[r(512)]:()=>console[r(555)],[r(548)]:()=>console[r(524)],[r(500)]:()=>console[r(537)]};function s(t){const e=r;t[e(557)]>0&&console[e(555)](e(518));for(const n of t)o[n[e(506)]]()(n[e(568)])}class a{constructor(t,e){const n=r;this[n(493)]=t,this[n(573)]=14+e[n(513)],this[n(574)]=n(498)in e?e[n(498)]:0,0===this[n(574)]&&(this[n(574)]=Math[n(553)](2,e[n(542)]))}get[r(572)](){return 4*this._colorCount}get[r(545)](){return this[r(574)]}[r(521)](t){const e=r;return new Uint8Array([this._data[this[e(573)]+4*t+2],this[e(493)][this[e(573)]+4*t+1],this[e(493)][this._offset+4*t],this._data[this._offset+4*t+3]])}}var c=n(9094);function h(t,e,n){const i=r;if(t[i(556)](e)!==n)throw u(t.getUint8(e)+i(519)+n)}function f(t,e,n){const i=r;if(t[i(514)](e,!0)!==n)throw u(t[i(514)](e,!0)+" !== "+n)}function u(t){const e=r;return new i({message:e(505)+t,severity:e(500)})}var l=n(4085),p=n(6815);async function d(t){const e=r,n=[],i=new DataView(t.buffer);try{const o=function(t,e,n){const i=r,o=[];for(const r of e){const e=t[i(535)](r[i(516)],r.dataOffset+r[i(547)]);let s;const a=new Promise((t=>s=t)),c={width:r[i(551)],height:r[i(565)],data:new Uint8Array(0),mimeType:void 0,bitness:32},h={resource:c,readyPromise:a,isReady:!1};y(r,e,n)[i(525)]((t=>{const e=i;c[e(523)]=t[e(523)],c[e(551)]=t[e(551)],c.height=t[e(565)],c[e(529)]=t[e(529)],c[e(563)]=t[e(563)],(0!==r[e(551)]&&r[e(551)]!==c.width||0!==r.height&&r[e(565)]!==c.height)&&n&&n.push({message:"ICO entry ("+r.width+"x"+r[e(565)]+e(494)+h[e(575)][e(551)]+"x"+h[e(575)][e(565)]+")",severity:e(548)}),s(h[e(575)]),h[e(509)]=!0})),o.push(h)}return o}(t,b(i,w(i),n),n);return Promise[e(560)](o[e(528)]((t=>t[e(531)])))[e(525)]((()=>s(n))),o}catch(t){throw s(n),t}}function g(t){const e=r;if(t[e(554)]<4)throw new i({message:e(567)+t[e(554)]+")",severity:e(500)});if(0!==t.getUint8(0)||0!==t[e(556)](1)||1!==t[e(556)](2)||0!==t[e(556)](3)){const n=m(Array[e(522)](new Uint8Array(t.buffer)[e(535)](t[e(552)],t[e(552)]+4))),r=m([0,0,1,0]);throw new i({message:"Ico signature is not correct ("+n+" != "+r+")",severity:"Error"})}}function m(t){const e=r;return"0x"+t[e(528)]((t=>t[e(517)](16).padStart(2,"0")))[e(569)]("")}function w(t){const e=r;return g(t),f(t,0,0),f(t,2,1),function(t,e,n){const i=r;if(!(t.getUint16(4,!0)>0))throw u(i(520)+t[i(514)](4,!0))}(t),{imageCount:t[e(514)](4,!0)}}function b(t,e,n){const o=r,s=[];let a,c,f,u=0,l=0,p=0,d=0,g=6,m=6+16*e.imageCount;for(;s[o(557)]<e.imageCount;){if(u=t[o(556)](g),l=t[o(556)](g+1),p=t[o(556)](g+2),h(t,g+3,0),d=t[o(514)](g+4,!0),d>1)throw new i({message:o(501)+d+")",severity:"Error"});if(a=t[o(514)](g+6,!0),2===a||16===a)throw new i({message:o(541)+a+"-bit)",severity:"Error"});0!==a&&1!==a&&4!==a&&8!==a&&24!==a&&32!==a&&(n&&n[o(549)]({message:"Invalid .ico image entry (index "+s[o(557)]+o(536)+a+"-bit), attempting to proceed with a value of 0",severity:"Warning"}),a=0),c=t[o(502)](g+8,!0),f=t[o(502)](g+12,!0),n&&m!==f&&n[o(549)]({message:"Offset ("+f+o(499)+(6+16*e.imageCount),severity:o(548)}),m+=c,s[o(549)]({width:u,height:l,paletteColorCount:p,colorPlanes:d,bitsPerPixel:a,dataSize:c,dataOffset:f}),g+=16}return s}async function y(t,e,n){const o=r;try{const t=await(0,p.dX)(e,{force32:!0});return{data:t[o(561)][o(523)],width:t[o(561)].width,height:t[o(561)][o(565)],mimeType:o(495),bitness:32}}catch(s){try{return await async function(t,e,n){const o=r,s=new Uint8Array(14+t.length);s[o(508)](t,14);const h=new DataView(s[o(515)]),f=function(t,e=14){const n=r,o=t[n(514)](e,!0);switch(o){case 40:return function(t,e){const n=r,o=t[n(514)](e+12,!0);if(1!==o)throw new i({message:n(562),severity:n(500)});return{type:1,headerSize:40,bitmapWidth:t[n(502)](e+4,!0),bitmapHeight:t.getUint32(e+8,!0),colorPlaneCount:o,bitsPerPixel:t[n(514)](e+14,!0),compression:t[n(502)](e+16,!0),imageSize:t[n(502)](e+20,!0),horizontalResolution:t[n(502)](e+24,!0),verticalResolution:t[n(502)](e+28,!0),paletteColorCount:t[n(502)](e+32,!0),importantColorCount:t[n(502)](e+36,!0)}}(t,e);case 12:case 16:case 52:case 56:case 64:case 108:case 124:throw new i({message:"Cannot parse bitmap DIB header of size "+o+" yet",severity:n(500)});default:throw new i({message:"Unexpected .bmp header size ("+o+")",severity:n(500)})}}(h);f[o(534)]===2*f[o(507)]&&h[o(540)](22,f[o(507)],!0);const u=f[o(542)]/8,p=f.bitmapWidth*(f.bitmapHeight/2),d=p*u;if(t[o(557)]<f[o(513)]+d)throw new i({message:"Not enough pixel data ("+t[o(557)]+o(503)+(f[o(513)]+d),severity:o(500)});let g;switch(f[o(542)]){case 1:case 4:case 8:g=function(t,e){const n=r,o=e[n(507)]*(e[n(534)]/2),s=(0,l.g)(e[n(507)]*e.bitsPerPixel,32),c=s/8,h=e[n(534)]/2*c;if(t[n(557)]<e[n(513)]+h)throw new i({message:n(570)+t.length+n(503)+(e.headerSize+h),severity:n(500)});const f=new a(t,e),u=t.subarray(14+e[n(513)]+f[n(572)],14+e[n(513)]+f[n(572)]+h),p=new Uint8Array(4*o);let d=0,g=0,m=0;for(let t=0;t<e[n(534)]/2;t++){m=(e[n(534)]/2-t-1)*e[n(507)]*4;for(let r=0;r<e[n(507)];r++){switch(e.bitsPerPixel){case 1:g=t*s+r;const i=7-g%8;d=u[Math[n(564)](g/8)]>>i&1;break;case 4:g=t*s/e[n(542)]+r,d=g%2==0?u[g/2]>>4:15&u[Math.floor(g/2)];break;case 8:g=t*c+r,d=u[g]}p[n(508)](f[n(521)](d),m+4*r)}}return x(t,p,e,14+e[n(513)]+f[n(572)]+h),{data:p,width:e[n(507)],height:e[n(534)]/2}}(s,f);break;case 24:g=function(t,e,n,i){const o=r,s=t[o(533)](14+e[o(513)],14+e[o(513)]+i),a=new Uint8Array(4*n);let c=0,h=0;for(let t=0;t<e[o(534)]/2;t++){h=(e.bitmapHeight/2-t-1)*e[o(507)]*4;for(let n=0;n<e[o(507)];n++)c=3*(t*e[o(507)]+n),a[h+4*n]=s[c+2],a[h+4*n+1]=s[c+1],a[h+4*n+2]=s[c]}return x(t,a,e,14+e[o(513)]+i),{data:a,width:e.bitmapWidth,height:e.bitmapHeight/2}}(s,f,p,d);break;case 32:g=function(t,e,n,o){const s=r,a="paletteColorCount"in e?e[s(498)]:0;if(a)throw new i({message:s(539)+a+")",severity:"Error"});const h=t[s(533)](14+e.headerSize,14+e[s(513)]+o);32===e[s(542)]&&c.P[s(532)](h,e[s(507)]*(e.bitmapHeight/2));const f=new Uint8Array(h),u=e[s(507)]*n;let l=0;for(let t=0;t<e[s(534)]/2;t++)l=e[s(534)]/2-(t+1),f[s(508)](h[s(533)](l*u,(l+1)*u),t*u);return{data:f,width:e[s(507)],height:e.bitmapHeight/2}}(s,f,u,d);break;default:throw new Error(o(526)+f.bitsPerPixel)}return function(t){const e=r;let n=0;for(let r=0;r<t[e(565)];r++)for(let i=0;i<t[e(565)];i++)n=4*(r*t[e(551)]+i),0===t[e(523)][n+3]&&(t[e(523)][n]=0,t[e(523)][n+1]=0,t[e(523)][n+2]=0)}(g),{...g,mimeType:o(566),bitness:f[o(542)]}}(e)}catch(e){return n&&n[o(549)]({message:t[o(551)]+"x"+t[o(565)]+" failed to decode as bmp: "+(e instanceof Error?e[o(568)]:e),severity:o(500)}),{data:new Uint8Array(4),width:1,height:1,bitness:-1}}}}function x(t,e,n,i){const o=r,s=(0,l.g)(n[o(507)],32),a=t[o(533)](i,i+s*n[o(534)]/2);let c=0,h=0;for(let t=0;t<n[o(534)]/2;t++){const r=s*t/8;for(let i=0;i<n.bitmapWidth;i++){const s=7-i%8;c=a[r+Math.floor(i/8)]>>s&1,0===c&&(h=(n[o(534)]/2-t-1)*n.bitmapWidth*4,e[h+4*i+3]=255)}}}}}]);