"use strict";(self.webpackChunkluna=self.webpackChunkluna||[]).push([[14],{56:(e,t,n)=>{n.r(t),n.d(t,{parseChunk:()=>i});var r=n(6),a=n(47);function i(e,t,n){(0,r.assertChunkPrecedes)(e,n,"IDAT");const i=n.offset+4+4;let s=i;const o=s+n.dataLength,c=new TextDecoder("latin1"),h=(0,a.readText)(e,n,c,void 0,s,o,!0);s+=h.bytesRead;const d=h.text,u=e.view.getUint8(s++),f=16===u?2:1,l=4*f+2,g=n.dataLength-(s-i),w=g/l;if(w%1!=0)throw(0,r.createChunkDecodeWarning)(n,`Invalid data length: ${g} should be divisible by entry size ${l}`,s);const p=[];for(let t=0;t<w;t++){const t=[];for(let n=0;n<4;n++)t.push(2===f?e.view.getUint16(s):e.view.getUint8(s)),s+=f;const n=e.view.getUint16(s);s+=2,p.push({red:t[0],green:t[1],blue:t[2],alpha:t[3],frequency:n})}return{type:"sPLT",name:d,sampleDepth:u,entries:p}}},47:(e,t,n)=>{n.r(t),n.d(t,{readText:()=>i});var r=n(25),a=n(6);function i(e,t,n,i,s,o,c,h){const d=[];let u=0,f=0;for(;(void 0===i||f<i)&&(c||s!==o);f++){try{u=e.view.getUint8(s)}catch(e){if(e instanceof Error&&"Offset is outside the bounds of the DataView"===e.message)throw(0,a.createChunkDecodeWarning)(t,"EOF while reading text",s);throw e}if(!h&&0===u)break;s++,d.push(u)}if(c&&0!==e.view.getUint8(s))throw(0,a.createChunkDecodeWarning)(t,"No null character after text",s);let l=new Uint8Array(d);if(h){const e=new r.Inflate;if(e.push(l),e.err)throw(0,a.createChunkDecodeWarning)(t,`Inflate error: ${e.msg}`,s);l=e.result}return{text:n?n.decode(l):String.fromCharCode(...d),bytesRead:f+1}}}}]);