"use strict";const a46_0x15f3=["webpackChunkluna","push","colorType",'Cannot encode tRNS chunk for color type "',"tRNS","3zcijVr","data","999353dDYyjO","palette","2232051pPtGvR","Cannot encode tRNS chunk for indexed image without palette","firstTransparentColor","154733zVjFDf","463861UcATEL","writeUint16","Cannot write tRNS for True color without any transparent colors","Cannot write tRNS for grayscale without any transparent colors","colorSet","916314kQNNod","230070UKaoYl","1232093nTvGoi"],a46_0x52cf=function(t,r){return a46_0x15f3[t-=375]},a46_0x1ecf37=a46_0x52cf;!function(t,r){const n=a46_0x52cf;for(;;)try{if(685977===parseInt(n(377))+parseInt(n(385))+-parseInt(n(391))+-parseInt(n(376))+-parseInt(n(390))*-parseInt(n(383))+parseInt(n(375))+-parseInt(n(387)))break;t.push(t.shift())}catch(r){t.push(t.shift())}}(a46_0x15f3),(self[a46_0x1ecf37(378)]=self[a46_0x1ecf37(378)]||[])[a46_0x1ecf37(379)]([[4232],{4232:(t,r,n)=>{n.r(r),n.d(r,{encodeChunk:()=>o});var e=n(750);function o(t,r){const n=a46_0x52cf;switch(t[n(380)]){case 0:{if(void 0===t[n(389)])throw new Error(n(394));const o=t[n(389)];return(0,e.pU)(n(382),2,(t=>{const e=n;2===r.data.BYTES_PER_ELEMENT?t[e(392)](o>>48&65535):t[e(392)](o>>24&255)}))}case 3:if(!t[n(386)])throw new Error(n(388));return(0,e.pU)(n(382),t[n(386)].size,(r=>{const e=n;for(const n of t[e(395)])r.writeUint8(255&n)}));case 2:{if(void 0===t[n(389)])throw new Error(n(393));const o=t[n(389)];return(0,e.pU)(n(382),6,(t=>{const e=n;2===r[e(384)].BYTES_PER_ELEMENT?(t.writeUint16(o>>48&65535),t[e(392)](o>>32&65535),t[e(392)](o>>16&65535)):(t[e(392)](o>>24&255),t.writeUint16(o>>16&255),t.writeUint16(o>>8&255))}))}default:throw new Error(n(381)+t.colorType+'"')}}}}]);