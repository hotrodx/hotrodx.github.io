!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("bp_fullscreen",[],t):"object"==typeof exports?exports.bp_fullscreen=t():e.bp_fullscreen=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{fullscreen:()=>s});class n{constructor(){this.touchStartY=0,document.body.style.overflowY="scroll",document.body.style.scrollbarWidth="none",this.div=document.createElement("div"),this.addElement(),this.addEventListeners()}addElement(){const e=document.createElement("style");e.innerHTML="\n      .shared-iphone {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        width: 2px;\n        background-color: rgba(0, 0, 0, 0.005);\n        z-index: 9999;\n        pointer-events: none;\n        height: 150vh;\n      }\n    ",document.head.appendChild(e),this.div.classList.add("shared-iphone"),document.body.insertBefore(this.div,document.body.firstChild),document.body.getBoundingClientRect()}addEventListeners(){document.addEventListener("visibilitychange",this.handleVisibilitychange.bind(this)),document.addEventListener("touchstart",this.handleTouchStart.bind(this)),document.addEventListener("touchend",this.handleTouchEnd.bind(this)),screen.orientation.addEventListener("change",this.handleOrientationChange.bind(this))}handleVisibilitychange(){"visible"===document.visibilityState&&(document.body.style.transition="transform 0.1s ease-out",document.body.style.transform="translateY(64px)",setTimeout((()=>{document.body.style.transform="translateY(-64px)"}),150))}handleOrientationChange(){window.scrollTo(0,0)}handleTouchStart(e){1===e.touches.length&&(this.touchStartY=e.touches[0].clientY)}handleTouchEnd(e){if(1===e.changedTouches.length){const t=e.changedTouches[0].clientY,n=this.touchStartY-t;if(Math.abs(n)<=1)return;this.id&&(clearTimeout(this.id),this.id=void 0),this.id=setTimeout((()=>{window.scrollTo(0,0)}),100)}}getHeightValue(e){const t=document.createElement("div");t.style.height=e,t.style.position="absolute",t.style.visibility="hidden",document.body.appendChild(t);const n=t.getBoundingClientRect().height;return document.body.removeChild(t),n}isFullscreen(){const e=this.getHeightValue("100vh"),t=this.getHeightValue("100dvh");return Math.abs(e-t)<=2}}class i{constructor(){document.body.style.overflowY="hidden",this.addEventListeners()}addEventListeners(){document.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.isFullscreen()||document.documentElement.requestFullscreen()}isFullscreen(){return!!document.fullscreenElement}}class o{constructor(){document.body.style.overflowY="hidden"}isFullscreen(){return!1}}const s=(()=>{if(function(){try{return window.self!==window.top}catch(e){return!0}}())return new o;const e=navigator.userAgent;return/android/i.test(e)?new i:/CriOS/.test(e)?new n:new o})();return t})()));