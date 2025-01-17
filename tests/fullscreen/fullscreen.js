!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("bp_fullscreen",[],t):"object"==typeof exports?exports.bp_fullscreen=t():e.bp_fullscreen=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{fullscreen:()=>o});class n{constructor(){this.touchStartY=0,this.startingInnerHeight=0,this.doMeasurements(),this.div=document.createElement("div"),this.addElement(),this.addEventListeners()}doMeasurements(){this.startingInnerHeight=window.innerHeight}addElement(){const e=document.createElement("style");e.innerHTML="\n      .shared-iphone {\n        position: absolute;\n        left: 0px;\n        width: 2px;\n        background-color: rgba(255, 255, 0, 1);\n        z-index: 9999;\n        pointer-events: none;\n      }\n      .minimized-iphone {\n        top: 64px;\n        height: 150vh;\n      }\n      .fullscreen-iphone {\n        top: 0px;\n        height: 100dvh;\n      }\n    ",document.head.appendChild(e),this.div.classList.add("shared-iphone","minimized-iphone"),document.body.insertBefore(this.div,document.body.firstChild),document.body.getBoundingClientRect()}addEventListeners(){document.addEventListener("touchstart",this.handleTouchStart.bind(this)),document.addEventListener("touchend",this.handleTouchEnd.bind(this)),screen.orientation.addEventListener("change",this.handleOrientationChange.bind(this))}doFullscreen(){this.div.classList.remove("minimized-iphone"),this.div.classList.add("fullscreen-iphone"),document.body.style.overflowY="hidden",this.div.getBoundingClientRect()}undoFullscreen(){this.div.classList.remove("fullscreen-iphone"),this.div.classList.add("minimized-iphone"),document.body.style.overflowY="scroll",this.div.getBoundingClientRect()}handleOrientationChange(){this.undoFullscreen(),this.restartInterval(),setTimeout((()=>{window.scrollTo(0,0),this.doMeasurements()}),200)}handleTouchStart(e){1===e.touches.length&&(this.touchStartY=e.touches[0].clientY)}restartInterval(){clearInterval(this.id),this.id=setInterval((()=>{this.isFullscreen()||(this.undoFullscreen(),window.scrollTo(0,0))}),1e3)}handleTouchEnd(e){if(1===e.changedTouches.length){const t=e.changedTouches[0].clientY,n=this.touchStartY-t;Math.abs(n)>1&&window.scrollTo(0,0),n>=32&&(this.doFullscreen(),this.restartInterval())}}isFullscreen(){return window.innerHeight>this.startingInnerHeight}}class i{constructor(){this.addEventListeners()}addEventListeners(){document.addEventListener("click",this.handleClick.bind(this))}handleClick(){this.isFullscreen()||document.documentElement.requestFullscreen()}isFullscreen(){return!!document.fullscreenElement}}class s{isFullscreen(){return!1}}const o=(()=>{!function(){try{return window.self!==window.top}catch(e){return!0}}();const e=navigator.userAgent;return/android/i.test(e)?new i:/iPhone|iPod/.test(e)?new n:new s})();return t})()));