"use strict";(self.webpackChunkluna=self.webpackChunkluna||[]).push([[11],{48:(e,t,r)=>{r.r(t),r.d(t,{parseChunk:()=>o});var n=r(6),a=r(47);function o(e,t,r){(0,n.assertChunkDataLengthGte)(e,r,6);let o=r.offset+4+4;const s=o+r.dataLength,i=new TextDecoder("utf8");let d;d=(0,a.readText)(e,r,i,79,o,s,!0),o+=d.bytesRead;const c=d.text,h=1===e.view.getUint8(o++),u=e.view.getUint8(o);h&&(0,n.assertChunkCompressionMethod)(e,r,u,o),o++,d=(0,a.readText)(e,r,i,void 0,o,s,!0),o+=d.bytesRead;const f=d.text;d=(0,a.readText)(e,r,i,void 0,o,s,!0),o+=d.bytesRead;const w=d.text;return d=(0,a.readText)(e,r,i,void 0,o,s,!1,h),o+=d.bytesRead,{type:"iTXt",keyword:c,languageTag:f,translatedKeyword:w,text:d.text}}},47:(e,t,r)=>{r.r(t),r.d(t,{readText:()=>o});var n=r(25),a=r(6);function o(e,t,r,o,s,i,d,c){const h=[];let u=0,f=0;for(;(void 0===o||f<o)&&(d||s!==i);f++){try{u=e.view.getUint8(s)}catch(e){if(e instanceof Error&&"Offset is outside the bounds of the DataView"===e.message)throw(0,a.createChunkDecodeWarning)(t,"EOF while reading text",s);throw e}if(!c&&0===u)break;s++,h.push(u)}if(d&&0!==e.view.getUint8(s))throw(0,a.createChunkDecodeWarning)(t,"No null character after text",s);let w=new Uint8Array(h);if(c){const e=new n.Inflate;if(e.push(w),e.err)throw(0,a.createChunkDecodeWarning)(t,`Inflate error: ${e.msg}`,s);w=e.result}return{text:r?r.decode(w):String.fromCharCode(...h),bytesRead:f+1}}}}]);