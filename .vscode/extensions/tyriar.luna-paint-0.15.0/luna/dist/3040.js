"use strict";const a20_0x2683=["181xaPTug","_refreshActionEnabledState","4241xAgjdI","187602JNdRpf","_originX","left","keyDown","sign","shiftKey","type","imageService","Crop to Selection","pointerDownMove","event","Rectangle Selection","name","range","getCoordsFromEvent","validate","107251zNuzFj","_enabled","35426BPhwOQ","Deselect","keyUp","selectionService","_originY","1753jtFkba","abs","_onUpdate","webpackChunkluna","isSelectionTool","onUpdate","_targetY","push","_cropToSelectionAction","height","right","974yaggiG","top","fire","10FzZrXC","5LEjwJX","pointerDown","register","enabled","_updateSelection","width","actions","crop-to-selection","selection","bottom","_targetX","_sc","commit","125820yOjuxX","12ThMERB","viewportService"],a20_0x1817=function(t,i){return a20_0x2683[t-=445]},a20_0x2fde36=a20_0x1817;!function(t,i){const s=a20_0x1817;for(;;)try{if(113891===-parseInt(s(485))*parseInt(s(481))-parseInt(s(486))-parseInt(s(480))+-parseInt(s(467))*-parseInt(s(447))+-parseInt(s(463))*-parseInt(s(483))+parseInt(s(452))*parseInt(s(466))+parseInt(s(445)))break;t.push(t.shift())}catch(i){t.push(t.shift())}}(a20_0x2683),(self[a20_0x2fde36(455)]=self[a20_0x2fde36(455)]||[])[a20_0x2fde36(459)]([[3040],{6173:(t,i,s)=>{const e=a20_0x2fde36;s.d(i,{f:()=>n});var o=s(1815),h=s(5120);class n extends h.JT{constructor(t,i,s){const e=a20_0x1817;super(),this[e(498)]=t,this[e(492)]=i,this[e(446)]=s,this[e(454)]=this.register(new o.v),this[e(457)]=this[e(454)][e(496)]}get[e(470)](){return this._enabled}set[e(470)](t){const i=e;this[i(446)]!==t&&(this[i(446)]=t,this[i(454)][i(465)]())}}},3040:(t,i,s)=>{const e=a20_0x2fde36;s.r(i),s.d(i,{default:()=>c});var o=s(5120),h=s(2939),n=s(1003),a=s(6173);class r extends o.JT{constructor(t){const i=a20_0x1817;super(),this._sc=t,this.id=i(475),this[i(456)]=!0,this[i(487)]=0,this[i(451)]=0,this[i(460)]=new a.f(i(494),i(474),!1),this[i(473)]=[this[i(460)]],this[i(469)](this[i(478)][i(450)].onUpdate((()=>this[i(484)]()))),this[i(484)]()}[e(489)](t,i){this[e(471)](t,i)}[e(449)](t,i){this[e(471)](t,i)}[e(468)](t){const i=e;(this._sc[i(450)][i(499)]||void 0!==this._targetX||void 0!==this[i(458)])&&(this[i(477)]=void 0,this[i(458)]=void 0,this[i(478)].selectionService[i(499)]=void 0),[this._originX,this[i(451)]]=this[i(478)][i(482)].getCoordsFromEvent(t)}pointerUp(t,i){const s=e;if(i||void 0===this._targetX||void 0===this._targetY){this._sc[s(450)].range=void 0;const t=void 0===this[s(478)][s(450)].range?s(448):"Rectangle Selection";return void this._sc[s(450)][s(479)](t)}this[s(471)](t,!1);const o=void 0===this[s(478)][s(450)][s(499)]?s(448):s(497);this[s(478)][s(450)][s(479)](o)}[e(495)](t){const i=e;[this[i(477)],this._targetY]=this._sc[i(482)][i(500)](t),this[i(471)](t,!0)}_updateSelection(t,i){const s=e;if(!i||void 0===this[s(477)]||void 0===this[s(458)])return;let o=this._targetX-this._originX,a=this[s(458)]-this[s(451)];t[s(491)]&&(Math[s(453)](o)>Math[s(453)](a)?o=a*(Math[s(490)](o)!==Math.sign(a)?-1:1):a=o*(Math.sign(o)!==Math[s(490)](a)?-1:1));const r=this[s(478)][s(493)][s(472)],c=this[s(478)][s(493)][s(461)],_=(0,n.Pq)();a<0?(_[s(464)]=(0,h.u)(this[s(451)]+a,c),_.bottom=(0,h.u)(this._originY+1+(t.altKey?-a:0),c)):(_[s(476)]=(0,h.u)(this._originY+a+1,c),_.top=(0,h.u)(this._originY+(t.altKey?-a:0),c)),o<0?(_[s(488)]=(0,h.u)(this[s(487)]+o,r),_[s(462)]=(0,h.u)(this[s(487)]+1+(t.altKey?-o:0),r)):(_.right=(0,h.u)(this[s(487)]+o+1,r),_[s(488)]=(0,h.u)(this[s(487)]+(t.altKey?-o:0),r)),this[s(478)][s(450)][s(499)]=_,this[s(478)][s(450)][s(501)](r,c)}[e(484)](){const t=e,i=this[t(478)][t(450)][t(499)];this[t(460)][t(470)]=!(!i||0===i[t(488)]&&0===i.top&&i[t(462)]===this[t(478)][t(493)][t(472)]&&i.bottom===this[t(478)][t(493)][t(461)])}}const c=r}}]);