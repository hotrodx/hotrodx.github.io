!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("bp_fullscreen",[],t):"object"==typeof exports?exports.bp_fullscreen=t():e.bp_fullscreen=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{fullscreen:()=>d});class n{constructor(){this.touchStartY=0,this.dvhValue=0,this.vhValue=0,this.diff=0,this.doMeasurements(),this.div=document.createElement("div"),this.addElement(),this.addEventListeners()}getHeightValue(e){const t=document.createElement("div");t.style.height=e,t.style.position="absolute",t.style.visibility="hidden",document.body.appendChild(t);const n=t.getBoundingClientRect().height;return document.body.removeChild(t),n}doMeasurements(){this.dvhValue=this.getHeightValue("100dvh"),this.vhValue=this.getHeightValue("100vh"),this.diff=Math.abs(this.dvhValue-this.vhValue)}addElement(){const e=document.createElement("style");e.innerHTML="\n      .shared-iphone {\n        position: absolute;\n        background-color: rgba(0,0,0,0.01);\n        z-index: 9999;\n        pointer-events: none;\n      }\n      .minimized-iphone {\n        top: 32px;\n        left 1px;\n        width: 1px;\n        height: 110vh;\n      }\n      .fullscreen-iphone {\n        top: 0px;\n        left: 0px;\n        width: 1px;\n        height: 100dvh;\n      }\n    ",document.head.appendChild(e),this.div.classList.add("shared-iphone","minimized-iphone"),document.body.insertBefore(this.div,document.body.firstChild),this.div.getBoundingClientRect()}addEventListeners(){document.addEventListener("touchstart",this.handleTouchStart.bind(this)),document.addEventListener("touchend",this.handleTouchEnd.bind(this)),screen.orientation.addEventListener("change",this.handleOrientationChange.bind(this))}doFullscreen(){window.scrollTo(0,0),this.div.classList.remove("minimized-iphone"),this.div.classList.add("fullscreen-iphone"),document.body.style.overflowY="hidden",this.div.getBoundingClientRect()}undoFullscreen(){window.scrollTo(0,0),this.div.classList.remove("fullscreen-iphone"),this.div.classList.add("minimized-iphone"),document.body.style.overflowY="scroll",this.div.getBoundingClientRect()}handleOrientationChange(){this.undoFullscreen(),this.doMeasurements()}handleTouchStart(e){1===e.touches.length&&(this.touchStartY=e.touches[0].clientY)}handleTouchEnd(e){if(1===e.changedTouches.length){const t=e.changedTouches[0].clientY;this.touchStartY-t>=this.diff&&(this.doFullscreen(),setTimeout((()=>{this.isFullscreen()||this.undoFullscreen()}),2e3))}}isFullscreen(){return Math.abs(this.dvhValue-window.innerHeight)<=1}}class i{constructor(){this.addEventListeners()}addEventListeners(){document.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.isFullscreen()||document.documentElement.requestFullscreen()}isFullscreen(){return!!document.fullscreenElement}}class s{isFullscreen(){return!1}}const d=(()=>{const e=navigator.userAgent;return/android/i.test(e)?new i:/iPhone|iPod/.test(e)?new n:new s})();return t})()));