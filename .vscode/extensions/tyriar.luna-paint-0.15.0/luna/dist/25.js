"use strict";(self.webpackChunkluna=self.webpackChunkluna||[]).push([[25],{63:(t,r,n)=>{n.r(r),n.d(r,{encodeChunk:()=>o});var e=n(34);function o(t,r){switch(t.colorType){case 0:{if(void 0===t.firstTransparentColor)throw new Error("Cannot write tRNS for grayscale without any transparent colors");const n=t.firstTransparentColor;return(0,e.writeChunkDataFn)("tRNS",2,(t=>{2===r.data.BYTES_PER_ELEMENT?t.writeUint16(n>>48&65535):t.writeUint16(n>>24&255)}))}case 3:if(!t.palette)throw new Error("Cannot encode tRNS chunk for indexed image without palette");return(0,e.writeChunkDataFn)("tRNS",t.palette.size,(r=>{for(const n of t.colorSet)r.writeUint8(255&n)}));case 2:{if(void 0===t.firstTransparentColor)throw new Error("Cannot write tRNS for True color without any transparent colors");const n=t.firstTransparentColor;return(0,e.writeChunkDataFn)("tRNS",6,(t=>{2===r.data.BYTES_PER_ELEMENT?(t.writeUint16(n>>48&65535),t.writeUint16(n>>32&65535),t.writeUint16(n>>16&65535)):(t.writeUint16(n>>24&255),t.writeUint16(n>>16&255),t.writeUint16(n>>8&255))}))}default:throw new Error(`Cannot encode tRNS chunk for color type "${t.colorType}"`)}}}}]);