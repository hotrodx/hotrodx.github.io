!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("bp_fullscreen",[],t):"object"==typeof exports?exports.bp_fullscreen=t():e.bp_fullscreen=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{fullscreen:()=>o});class n{constructor(){this.touchStartY=0,this.div=document.createElement("div"),this.addElement(),this.addEventListeners()}addElement(){const e=document.createElement("style");e.innerHTML="\n      .shared-iphone {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: transparent;\n        z-index: 9999;\n        pointer-events: none;\n      }\n      .minimized-iphone {\n        height: 110vh;\n      }\n      .fullscreen-iphone {\n        height: 101vh;\n      }\n    ",this.div.classList.add("shared-iphone","minimized-iphone"),document.head.appendChild(e),document.body.insertBefore(this.div,document.body.firstChild)}addEventListeners(){document.addEventListener("touchstart",this.handleTouchStart.bind(this)),document.addEventListener("touchend",this.handleTouchEnd.bind(this))}handleTouchStart(e){1===e.touches.length&&(this.touchStartY=e.touches[0].clientY)}handleTouchEnd(e){if(1===e.changedTouches.length){const t=e.changedTouches[0].clientY;this.touchStartY-t>60&&(window.scrollTo(0,1),this.div.classList.remove("minimized-iphone"),this.div.classList.add("fullscreen-iphone"))}}isFullscreen(){return this.div.classList.contains("fullscreen-iphone")}}class s{constructor(){this.addEventListeners()}addEventListeners(){document.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.isFullscreen()||document.documentElement.requestFullscreen()}isFullscreen(){return!!document.fullscreenElement}}class i{isFullscreen(){return!1}}const o=(()=>{const e=navigator.userAgent;return/android/i.test(e)?new s:/iPhone|iPod/.test(e)?new n:new i})();return t})()));