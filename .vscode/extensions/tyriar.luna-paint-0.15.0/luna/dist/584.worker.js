"use strict";const a7_0x4324=["update"," x ","98642xdLXoT","pow","isInteger","277421bpOmIe",'" dimensions differ',"height","152631XDCRRu","ceil","selection",'" and "',"1UZYVFw","push",'": ',"5ObGlpV","length","right","color","round","830871bGZElC",'Invalid dimensions for image "',"bottom","width","841803bQYaVJ","blendMode","202247yWxqvn","subarray","Unrecognized array type","tolerance",'Range "',"targetImage","min",'Images "',"SharedArrayBuffer"," must be contained within ","set","floor","top","buffer","449590vjfMOj","data","max","abs","left",")->("],a7_0xae41=function(t,n){return a7_0x4324[t-=383]},a7_0x15fb92=a7_0xae41;!function(t,n){const r=a7_0xae41;for(;;)try{if(502069===-parseInt(r(410))+parseInt(r(396))+-parseInt(r(424))+parseInt(r(421))*-parseInt(r(428))+parseInt(r(394))+parseInt(r(385))*-parseInt(r(418))+parseInt(r(390)))break;t.push(t.shift())}catch(n){t.push(t.shift())}}(a7_0x4324),(self.webpackChunkluna=self.webpackChunkluna||[])[a7_0x15fb92(383)]([[584],{584:(t,n,r)=>{r.r(n),r.d(n,{run:()=>f});var e=r(371),a=r(3),o=r(742),i=r(517);const f=async(t,n,r)=>{const f=a7_0xae41;(0,o.ap)(r,f(401));const u=r.targetImage[f(411)],h=r.targetImage[f(393)],l=r[f(401)][f(423)],x=r.x,d=r.y,m=4*(d*h+x),p=u[f(397)](m,m+4),w=r[f(399)]*r[f(399)]*4,y=(0,e.X$)(h*l*2,Math[f(412)](h,l));let M=0;y[M++]=x,y[M++]=d;const g=new Uint8Array(h*l);g[d*h+x]=1;const _=(0,e.X$)(h*l,h*l*4,!0);let b=0;const A=(0,a.Re)(x,d),I=(0,a.DI)(h,l),B=r[f(426)]||I;let U=0,R=0,v=0,k=0;for(;M>0;)R=y[--M],U=y[--M],v=R*h+U,k=4*v,C=u,D=k,q=p,((E=w)>0?(c[0]=q[0]-C[D],c[1]=q[1]-C[D+1],c[2]=q[2]-C[D+2],c[3]=q[3]-C[D+3],c[4]=(1+c[0]*c[0])*q[3]/256+(1+c[1]*c[1])*q[3]/256+(1+c[2]*c[2])*q[3]/256+c[3]*c[3],c[4]<=E):C[D]===q[0]&&C[D+1]===q[1]&&C[D+2]===q[2]&&C[D+3]===q[3])&&(_[b++]=k,(0,a.Hv)(A,U,R),(0,a.RB)(I,U+1,R)&&0===g[v+1]&&((0,a.RB)(B,U+1,R)&&(y[M++]=U+1,y[M++]=R),g[v+1]=1),(0,a.RB)(I,U-1,R)&&0===g[v-1]&&((0,a.RB)(B,U-1,R)&&(y[M++]=U-1,y[M++]=R),g[v-1]=1),(0,a.RB)(I,U,R+1)&&0===g[v+h]&&((0,a.RB)(B,U,R+1)&&(y[M++]=U,y[M++]=R+1),g[v+h]=1),(0,a.RB)(I,U,R-1)&&0===g[v-h]&&((0,a.RB)(B,U,R-1)&&(y[M++]=U,y[M++]=R-1),g[v-h]=1));var C,D,q,E;const O=_[f(397)](0,b);n[f(416)](.25);const S=s(u,O);n[f(416)](.5),function(t,n,r,e){const a=a7_0xae41;let o=0;for(let f=0;f<n[a(386)];f++)o=n[f],(0,i.B)(e,t,o,r,0)}(u,O,r[f(388)],r[f(395)]),n[f(416)](.75);const X=s(u,O);return n.update(1),{indexList:O,undoColorData:S,redoColorData:X,range:A}},c=new Int32Array(5);function s(t,n){const r=a7_0xae41,e=new Uint8Array(new SharedArrayBuffer(4*n[r(386)]));for(let a=0;a<n[r(386)];a++)e[4*a]=t[n[a]],e[4*a+1]=t[n[a]+1],e[4*a+2]=t[n[a]+2],e[4*a+3]=t[n[a]+3];return e}},742:(t,n,r)=>{r.d(n,{ap:()=>a,TO:()=>o,zg:()=>i});var e=r(3);function a(t,n){const r=a7_0xae41,e=t[n];if(e[r(393)]<1||e[r(423)]<1)throw new Error(r(391)+n+r(384)+e[r(393)]+r(417)+e[r(423)])}function o(t,n,r){const e=a7_0xae41,a=t[n],o=t[r];if(a[e(393)]===o[e(393)]&&a[e(423)]===o[e(423)])throw new Error(e(403)+n+e(427)+r+'" dimensions are equal')}function i(t,n,r){const a=a7_0xae41,o=t[n];if(!(0,e.ur)(r,o))throw new Error(a(400)+n+'" '+(0,e.PW)(o)+a(405)+(0,e.PW)(r))}},371:(t,n,r)=>{function e(t,n=2*t.length){const r=a7_0xae41;let e;if(t instanceof Float32Array)e=new Float32Array(n);else if(t instanceof Uint8Array)e=new Uint8Array(n);else if(t instanceof Uint16Array)e=new Uint16Array(n);else{if(!(t instanceof Uint32Array))throw new Error(r(398));e=new Uint32Array(n)}return e[r(406)](t),e}function a(t,n,r=!1){const e=a7_0xae41;return n<Math[e(419)](2,8)?r?new Uint8Array(new SharedArrayBuffer(t)):new Uint8Array(t):n<Math[e(419)](2,16)?r?new Uint16Array(new SharedArrayBuffer(2*t)):new Uint16Array(t):r?new Uint32Array(new SharedArrayBuffer(4*t)):new Uint32Array(t)}function o(t,n,r,e){t[n]=r[e],t[n+1]=r[e+1],t[n+2]=r[e+2],t[n+3]=r[e+3]}r.d(n,{Rs:()=>e,X$:()=>a,Yr:()=>o})},517:(t,n,r)=>{const e=a7_0x15fb92;r.d(n,{B:()=>c});var a=r(371);const o=new Float32Array(6);let i;const f={normal:(t,n)=>n,darken:(t,n)=>Math[e(402)](t,n),multiply:(t,n)=>t*n,linearBurn:(t,n)=>Math[e(412)](t+n-1,0),lighten:(t,n)=>Math[e(412)](t,n),screen:(t,n)=>1-(1-t)*(1-n),linearDodgeAdd:(t,n)=>Math.min(t+n,1),overlay:(t,n)=>t<.5?2*t*n:1-2*(1-t)*(1-n),softLight:(t,n)=>n<.5?2*t*n+t*t*(1-2*n):Math.sqrt(t)*(2*n-1)+2*t*(1-n),difference:(t,n)=>Math[e(413)](t-n),exclusion:(t,n)=>t+n-2*t*n};function c(t,n,r,c,u,h=n,l=r){const x=e;if("replace"!==t){if(o[0]=c[u+3]/255,0===o[0])return n[r]=h[l],n[r+1]=h[l+1],n[r+2]=h[l+2],void(n[r+3]=h[l+3]);if(o[1]=h[l+3]/255,0===o[1])return n[r]=c[u],n[r+1]=c[u+1],n[r+2]=c[u+2],void(n[r+3]=c[u+3]);i=f[t],o[3]=i(h[l]/255,c[u]/255),o[4]=i(h[l+1]/255,c[u+1]/255),o[5]=i(h[l+2]/255,c[u+2]/255),o[2]=o[0]+o[1]*(1-o[0]),n[r]=Math[x(389)](s(h[l]/255,o[1],c[u]/255,o[0],o[3])/o[2]*255),n[r+1]=Math[x(389)](s(h[l+1]/255,o[1],c[u+1]/255,o[0],o[4])/o[2]*255),n[r+2]=Math[x(389)](s(h[l+2]/255,o[1],c[u+2]/255,o[0],o[5])/o[2]*255),n[r+3]=Math[x(389)](255*o[2])}else(0,a.Yr)(n,r,c,u)}function s(t,n,r,e,a){return(n-n*e)*t+(e-n*e)*r+n*e*a}},3:(t,n,r)=>{function e(t){const n=a7_0xae41;if(t)return{left:t[n(414)],top:t[n(408)],right:t.right,bottom:t[n(392)]}}function a(t,n){return{left:t,top:n,right:t+1,bottom:n+1}}function o(t,n){return{left:0,top:0,right:t,bottom:n}}function i(t,n,r,e){const a=a7_0xae41,o=function(t){const n=a7_0xae41;if(t[n(414)]>t[n(387)]){const r=t[n(387)];t.right=t[n(414)],t.left=r}if(t[n(408)]>t[n(392)]){const r=t[n(392)];t[n(392)]=t[n(408)],t[n(408)]=r}if(t[n(387)]<t[n(414)]){const r=t.left;t.left=t[n(387)],t.right=r}if(t[n(392)]<t.top){const r=t[n(408)];t[n(408)]=t[n(392)],t[n(392)]=r}return t}({left:t,top:n,right:r,bottom:e});return o[a(387)]++,o[a(392)]++,o}function f(t,n){const r=a7_0xae41;return t[r(414)]=Math[r(402)](Math[r(412)](t[r(414)],n[r(414)]),n[r(387)]),t[r(408)]=Math[r(402)](Math[r(412)](t[r(408)],n[r(408)]),n.bottom),t[r(387)]=Math.max(Math[r(402)](t[r(387)],n[r(387)]),n[r(414)]),t.bottom=Math[r(412)](Math.min(t[r(392)],n.bottom),n[r(408)]),t}function c(t){const n=a7_0xae41;return t[n(414)]=Math[n(407)](t.left),t[n(387)]=Math[n(425)](t[n(387)]),t[n(408)]=Math[n(407)](t[n(408)]),t[n(392)]=Math[n(425)](t.bottom),t}function s(t,n,r){const e=a7_0xae41;if(function(t){const n=a7_0xae41;return t[n(414)]===t[n(387)]||t[n(408)]===t[n(392)]}(t))return t.left=n,t.right=n+1,t[e(408)]=r,void(t.bottom=r+1);t[e(414)]=Math[e(402)](t.left,n),t[e(408)]=Math[e(402)](t[e(408)],r),t[e(387)]=Math.max(t[e(387)],n+1),t.bottom=Math.max(t[e(392)],r+1)}function u(t,n,r){const e=a7_0xae41;return n>=t[e(414)]&&n<t.right&&r>=t[e(408)]&&r<t[e(392)]}function h(t,n){const r=a7_0xae41;return n[r(414)]>=t[r(414)]&&n[r(387)]<=t[r(387)]&&n.top>=t.top&&n.bottom<=t[r(392)]}function l(t){const n=a7_0xae41;return"("+t[n(414)]+","+t[n(408)]+n(415)+t[n(387)]+","+t.bottom+")"}function x(t){return t[a7_0xae41(387)]-t.left}function d(t){const n=a7_0xae41;return t[n(392)]-t[n(408)]}r.d(n,{BN:()=>e,Re:()=>a,DI:()=>o,tH:()=>i,l$:()=>f,kq:()=>c,Hv:()=>s,RB:()=>u,ur:()=>h,PW:()=>l,Oq:()=>x,rY:()=>d})}}]);