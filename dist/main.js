!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(1);var a=new class{constructor(e){this.spacex="spacex",this._idGenerator=e}init(){JSON.parse(localStorage.getItem("data")).forEach(e=>{if(null!=e){var t=document.createElement("tr"),n=document.createElement("td"),r=document.createElement("td"),a=document.createElement("td"),o=document.createElement("td"),d=document.createElement("button"),i=document.createElement("button");t.setAttribute("id","tr"+e.id),d.setAttribute("id","edit"+e.id),i.setAttribute("id","del"+e.id),d.setAttribute("onclick","edit("+e.id+")"),n.innerHTML=e.id,r.innerHTML=e.name,a.innerHTML=e.created_at,o.innerHTML=e.updated_at,d.innerHTML="Edit",i.innerHTML="Delete",t.append(n),t.append(r),t.append(a),t.append(o),t.append(d),t.append(i),document.getElementById("content").append(t)}})}insert(e){var t=JSON.parse(localStorage.getItem("data"));null==t&&(t=[]);let n={id:this._idGenerator.Get(this.spacex),name:e,created_at:new Date,updated_at:new Date};t[n.id]=n,localStorage.setItem("data",JSON.stringify(t))}}(new r.IdGenerator);a.init(),document.getElementById("btn_add").onclick=function(){var e=document.getElementById("fullname").value;a.insert(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IdGenerator=void 0;t.IdGenerator=class{Get(e){var t=localStorage.getItem(e+"_dataid"),n=0;return n="NaN"===t||null===t||0===parseInt(t)?1:parseInt(t)+1,localStorage.setItem(e+"_dataid",n.toString()),n}}}]);
//# sourceMappingURL=main.js.map