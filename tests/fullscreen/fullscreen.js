!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("bp_fullscreen",[],t):"object"==typeof exports?exports.bp_fullscreen=t():e.bp_fullscreen=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{fullscreen:()=>s});class n{constructor(){this.touchStartY=0,this.div=document.createElement("div"),this.addElement(),this.addEventListeners()}addElement(){const e=document.createElement("style");e.innerHTML="\n      .shared-iphone {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: transparent;\n        z-index: 9999;\n        pointer-events: none;\n      }\n      .minimized-iphone {\n        height: 120vh;\n      }\n      .fullscreen-iphone {\n        height: 100vh;\n      }\n    ",this.div.classList.add("shared-iphone","minimized-iphone"),document.head.appendChild(e),document.body.insertBefore(this.div,document.body.firstChild),document.body.style.height="120vh",document.body.style.overflowY="scroll"}addEventListeners(){document.addEventListener("touchstart",this.handleTouchStart.bind(this)),document.addEventListener("touchend",this.handleTouchEnd.bind(this)),document.addEventListener("orientationchange",this.handleOrientationChange)}handleOrientationChange(){setTimeout((()=>{this.div.classList.remove("fullscreen-iphone"),this.div.classList.add("minimized-iphone"),document.body.style.height="120vh",document.body.style.overflowY="scroll",window.scrollTo(0,1)}),0)}handleTouchStart(e){1===e.touches.length&&(this.touchStartY=e.touches[0].clientY)}handleTouchEnd(e){if(1===e.changedTouches.length){e.changedTouches[0].clientY;this.touchStartY,this.div.classList.remove("minimized-iphone"),this.div.classList.add("fullscreen-iphone"),document.body.style.height="100vh",document.body.style.overflowY="hidden",window.scrollTo(0,1)}}isFullscreen(){return this.div.classList.contains("fullscreen-iphone")}}class o{constructor(){this.addEventListeners()}addEventListeners(){document.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.isFullscreen()||document.documentElement.requestFullscreen()}isFullscreen(){return!!document.fullscreenElement}}class i{isFullscreen(){return!1}}const s=(()=>{const e=navigator.userAgent;return/android/i.test(e)?new o:/iPhone|iPod/.test(e)?new n:new i})();return t})()));