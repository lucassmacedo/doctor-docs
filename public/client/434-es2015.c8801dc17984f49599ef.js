"use strict";(self.webpackChunkbedesk=self.webpackChunkbedesk||[]).push([[434],{13202:function(t,e,i){i.d(e,{R:function(){return c}});var r=i(38583),n=i(51095),l=i(76627),o=i(98097),s=i(76435),a=i(37716);let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[r.ez,s.q,n.ot,l.Ps,o.X]]}),t})()},75811:function(t,e,i){function r(t){return getComputedStyle(t)}function n(t,e){for(var i in e){var r=e[i];"number"==typeof r&&(r+="px"),t.style[i]=r}return t}function l(t){var e=document.createElement("div");return e.className=t,e}i.d(e,{j:function(){return O}});var o="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function s(t,e){if(!o)throw new Error("No element matching method supported");return o.call(t,e)}function a(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function c(t,e){return Array.prototype.filter.call(t.children,function(t){return s(t,e)})}var h=function(t){return"ps__thumb-"+t},u=function(t){return"ps__rail-"+t},d="ps__child--consume",p="ps--focus",f="ps--clicking",b=function(t){return"ps--active-"+t},g=function(t){return"ps--scrolling-"+t},v={x:null,y:null};function m(t,e){var i=t.element.classList,r=g(e);i.contains(r)?clearTimeout(v[e]):i.add(r)}function Y(t,e){v[e]=setTimeout(function(){return t.isAlive&&t.element.classList.remove(g(e))},t.settings.scrollingThreshold)}var w=function(t){this.element=t,this.handlers={}},X={isEmpty:{configurable:!0}};w.prototype.bind=function(t,e){void 0===this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},w.prototype.unbind=function(t,e){var i=this;this.handlers[t]=this.handlers[t].filter(function(r){return!(!e||r===e)||(i.element.removeEventListener(t,r,!1),!1)})},w.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},X.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every(function(e){return 0===t.handlers[e].length})},Object.defineProperties(w.prototype,X);var y=function(){this.eventElements=[]};function L(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function W(t,e,i,r,n){var l;if(void 0===r&&(r=!0),void 0===n&&(n=!1),"top"===e)l=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");l=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,i,r,n){var l=i[0],o=i[1],s=i[2],a=i[3],c=i[4],h=i[5];void 0===r&&(r=!0),void 0===n&&(n=!1);var u=t.element;t.reach[a]=null,u[s]<1&&(t.reach[a]="start"),u[s]>t[l]-t[o]-1&&(t.reach[a]="end"),e&&(u.dispatchEvent(L("ps-scroll-"+a)),e<0?u.dispatchEvent(L("ps-scroll-"+c)):e>0&&u.dispatchEvent(L("ps-scroll-"+h)),r&&function(t,e){m(t,e),Y(t,e)}(t,a)),t.reach[a]&&(e||n)&&u.dispatchEvent(L("ps-"+a+"-reach-"+t.reach[a]))}(t,i,l,r,n)}function T(t){return parseInt(t,10)||0}y.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return e||(e=new w(t),this.eventElements.push(e)),e},y.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},y.prototype.unbind=function(t,e,i){var r=this.eventElement(t);r.unbind(e,i),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},y.prototype.unbindAll=function(){this.eventElements.forEach(function(t){return t.unbindAll()}),this.eventElements=[]},y.prototype.once=function(t,e,i){var r=this.eventElement(t),n=function(t){r.unbind(e,n),i(t)};r.bind(e,n)};var S={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function R(t){var e=t.element,i=Math.floor(e.scrollTop),r=e.getBoundingClientRect();t.containerWidth=Math.round(r.width),t.containerHeight=Math.round(r.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(c(e,u("x")).forEach(function(t){return a(t)}),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(c(e,u("y")).forEach(function(t){return a(t)}),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=E(t,T(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=T((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=E(t,T(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=T(i*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),function(t,e){var i={width:e.railXWidth},r=Math.floor(t.scrollTop);i.left=e.isRtl?e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:t.scrollLeft,e.isScrollbarXUsingBottom?i.bottom=e.scrollbarXBottom-r:i.top=e.scrollbarXTop+r,n(e.scrollbarXRail,i);var l={top:r,height:e.railYHeight};e.isScrollbarYUsingRight?l.right=e.isRtl?e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:e.scrollbarYRight-t.scrollLeft:l.left=e.isRtl?e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:e.scrollbarYLeft+t.scrollLeft,n(e.scrollbarYRail,l),n(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),n(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}(e,t),t.scrollbarXActive?e.classList.add(b("x")):(e.classList.remove(b("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(b("y")):(e.classList.remove(b("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function E(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function H(t,e){var i=e[0],r=e[1],n=e[2],l=e[3],o=e[4],s=e[5],a=e[6],c=e[7],h=e[8],u=t.element,d=null,p=null,b=null;function g(e){e.touches&&e.touches[0]&&(e[n]=e.touches[0].pageY),u[a]=d+b*(e[n]-p),m(t,c),R(t),e.stopPropagation(),e.preventDefault()}function v(){Y(t,c),t[h].classList.remove(f),t.event.unbind(t.ownerDocument,"mousemove",g)}function w(e,o){d=u[a],o&&e.touches&&(e[n]=e.touches[0].pageY),p=e[n],b=(t[r]-t[i])/(t[l]-t[s]),o?t.event.bind(t.ownerDocument,"touchmove",g):(t.event.bind(t.ownerDocument,"mousemove",g),t.event.once(t.ownerDocument,"mouseup",v),e.preventDefault()),t[h].classList.add(f),e.stopPropagation()}t.event.bind(t[o],"mousedown",function(t){w(t)}),t.event.bind(t[o],"touchstart",function(t){w(t,!0)})}var A={"click-rail":function(t){t.event.bind(t.scrollbarY,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarYRail,"mousedown",function(e){var i=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top;t.element.scrollTop+=(i>t.scrollbarYTop?1:-1)*t.containerHeight,R(t),e.stopPropagation()}),t.event.bind(t.scrollbarX,"mousedown",function(t){return t.stopPropagation()}),t.event.bind(t.scrollbarXRail,"mousedown",function(e){var i=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left;t.element.scrollLeft+=(i>t.scrollbarXLeft?1:-1)*t.containerWidth,R(t),e.stopPropagation()})},"drag-thumb":function(t){H(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),H(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var e=t.element;t.event.bind(t.ownerDocument,"keydown",function(i){if(!(i.isDefaultPrevented&&i.isDefaultPrevented()||i.defaultPrevented)&&(s(e,":hover")||s(t.scrollbarX,":focus")||s(t.scrollbarY,":focus"))){var r=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(r){if("IFRAME"===r.tagName)r=r.contentDocument.activeElement;else for(;r.shadowRoot;)r=r.shadowRoot.activeElement;if(function(t){return s(t,"input,[contenteditable]")||s(t,"select,[contenteditable]")||s(t,"textarea,[contenteditable]")||s(t,"button,[contenteditable]")}(r))return}var n=0,l=0;switch(i.which){case 37:n=i.metaKey?-t.contentWidth:i.altKey?-t.containerWidth:-30;break;case 38:l=i.metaKey?t.contentHeight:i.altKey?t.containerHeight:30;break;case 39:n=i.metaKey?t.contentWidth:i.altKey?t.containerWidth:30;break;case 40:l=i.metaKey?-t.contentHeight:i.altKey?-t.containerHeight:-30;break;case 32:l=i.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:l=t.containerHeight;break;case 34:l=-t.containerHeight;break;case 36:l=t.contentHeight;break;case 35:l=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==n||t.settings.suppressScrollY&&0!==l||(e.scrollTop-=l,e.scrollLeft+=n,R(t),function(i,r){var n=Math.floor(e.scrollTop);if(0===i){if(!t.scrollbarYActive)return!1;if(0===n&&r>0||n>=t.contentHeight-t.containerHeight&&r<0)return!t.settings.wheelPropagation}var l=e.scrollLeft;if(0===r){if(!t.scrollbarXActive)return!1;if(0===l&&i<0||l>=t.contentWidth-t.containerWidth&&i>0)return!t.settings.wheelPropagation}return!0}(n,l)&&i.preventDefault())}})},wheel:function(t){var e=t.element;function i(i){var n=function(t){var e=t.deltaX,i=-1*t.deltaY;return(void 0===e||void 0===i)&&(e=-1*t.wheelDeltaX/6,i=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,i*=10),e!=e&&i!=i&&(e=0,i=t.wheelDelta),t.shiftKey?[-i,-e]:[e,i]}(i),l=n[0],o=n[1];if(!function(t,i,n){if(!S.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(t))return!1;for(var l=t;l&&l!==e;){if(l.classList.contains(d))return!0;var o=r(l);if(n&&o.overflowY.match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&(l.scrollTop>0&&n<0||l.scrollTop<s&&n>0))return!0}if(i&&o.overflowX.match(/(scroll|auto)/)){var a=l.scrollWidth-l.clientWidth;if(a>0&&(l.scrollLeft>0&&i<0||l.scrollLeft<a&&i>0))return!0}l=l.parentNode}return!1}(i.target,l,o)){var s=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(o?e.scrollTop-=o*t.settings.wheelSpeed:e.scrollTop+=l*t.settings.wheelSpeed,s=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(l?e.scrollLeft+=l*t.settings.wheelSpeed:e.scrollLeft-=o*t.settings.wheelSpeed,s=!0):(e.scrollTop-=o*t.settings.wheelSpeed,e.scrollLeft+=l*t.settings.wheelSpeed),R(t),(s=s||function(i,r){var n=Math.floor(e.scrollTop),l=0===e.scrollTop,o=n+e.offsetHeight===e.scrollHeight,s=0===e.scrollLeft,a=e.scrollLeft+e.offsetWidth===e.scrollWidth;return!(Math.abs(r)>Math.abs(i)?l||o:s||a)||!t.settings.wheelPropagation}(l,o))&&!i.ctrlKey&&(i.stopPropagation(),i.preventDefault())}}void 0!==window.onwheel?t.event.bind(e,"wheel",i):void 0!==window.onmousewheel&&t.event.bind(e,"mousewheel",i)},touch:function(t){if(S.supportsTouch||S.supportsIePointer){var e=t.element,i={},n=0,l={},o=null;S.supportsTouch?(t.event.bind(e,"touchstart",h),t.event.bind(e,"touchmove",u),t.event.bind(e,"touchend",p)):S.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",h),t.event.bind(e,"pointermove",u),t.event.bind(e,"pointerup",p)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",h),t.event.bind(e,"MSPointerMove",u),t.event.bind(e,"MSPointerUp",p)))}function s(i,r){e.scrollTop-=r,e.scrollLeft-=i,R(t)}function a(t){return t.targetTouches?t.targetTouches[0]:t}function c(t){return!(t.pointerType&&"pen"===t.pointerType&&0===t.buttons||!(t.targetTouches&&1===t.targetTouches.length||t.pointerType&&"mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE))}function h(t){if(c(t)){var e=a(t);i.pageX=e.pageX,i.pageY=e.pageY,n=(new Date).getTime(),null!==o&&clearInterval(o)}}function u(o){if(c(o)){var h=a(o),u={pageX:h.pageX,pageY:h.pageY},p=u.pageX-i.pageX,f=u.pageY-i.pageY;if(function(t,i,n){if(!e.contains(t))return!1;for(var l=t;l&&l!==e;){if(l.classList.contains(d))return!0;var o=r(l);if(n&&o.overflowY.match(/(scroll|auto)/)){var s=l.scrollHeight-l.clientHeight;if(s>0&&(l.scrollTop>0&&n<0||l.scrollTop<s&&n>0))return!0}if(i&&o.overflowX.match(/(scroll|auto)/)){var a=l.scrollWidth-l.clientWidth;if(a>0&&(l.scrollLeft>0&&i<0||l.scrollLeft<a&&i>0))return!0}l=l.parentNode}return!1}(o.target,p,f))return;s(p,f),i=u;var b=(new Date).getTime(),g=b-n;g>0&&(l.x=p/g,l.y=f/g,n=b),function(i,r){var n=Math.floor(e.scrollTop),l=e.scrollLeft,o=Math.abs(i),s=Math.abs(r);if(s>o){if(r<0&&n===t.contentHeight-t.containerHeight||r>0&&0===n)return 0===window.scrollY&&r>0&&S.isChrome}else if(o>s&&(i<0&&l===t.contentWidth-t.containerWidth||i>0&&0===l))return!0;return!0}(p,f)&&o.preventDefault()}}function p(){t.settings.swipeEasing&&(clearInterval(o),o=setInterval(function(){t.isInitialized?clearInterval(o):l.x||l.y?Math.abs(l.x)<.01&&Math.abs(l.y)<.01?clearInterval(o):t.element?(s(30*l.x,30*l.y),l.x*=.8,l.y*=.8):clearInterval(o):clearInterval(o)},10))}}},M=function(t,e){var i=this;if(void 0===e&&(e={}),"string"==typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var o in this.element=t,t.classList.add("ps"),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},e)this.settings[o]=e[o];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s,a,c=function(){return t.classList.add(p)},d=function(){return t.classList.remove(p)};this.isRtl="rtl"===r(t).direction,!0===this.isRtl&&t.classList.add("ps__rtl"),this.isNegativeScroll=(a=t.scrollLeft,t.scrollLeft=-1,s=t.scrollLeft<0,t.scrollLeft=a,s),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new y,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=l(u("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=l(h("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",c),this.event.bind(this.scrollbarX,"blur",d),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var f=r(this.scrollbarXRail);this.scrollbarXBottom=parseInt(f.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=T(f.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=T(f.borderLeftWidth)+T(f.borderRightWidth),n(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=T(f.marginLeft)+T(f.marginRight),n(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=l(u("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=l(h("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",c),this.event.bind(this.scrollbarY,"blur",d),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var b=r(this.scrollbarYRail);this.scrollbarYRight=parseInt(b.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=T(b.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(t){var e=r(t);return T(e.width)+T(e.paddingLeft)+T(e.paddingRight)+T(e.borderLeftWidth)+T(e.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=T(b.borderTopWidth)+T(b.borderBottomWidth),n(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=T(b.marginTop)+T(b.marginBottom),n(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach(function(t){return A[t](i)}),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",function(t){return i.onScroll(t)}),R(this)};M.prototype.update=function(){!this.isAlive||(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,n(this.scrollbarXRail,{display:"block"}),n(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=T(r(this.scrollbarXRail).marginLeft)+T(r(this.scrollbarXRail).marginRight),this.railYMarginHeight=T(r(this.scrollbarYRail).marginTop)+T(r(this.scrollbarYRail).marginBottom),n(this.scrollbarXRail,{display:"none"}),n(this.scrollbarYRail,{display:"none"}),R(this),W(this,"top",0,!1,!0),W(this,"left",0,!1,!0),n(this.scrollbarXRail,{display:""}),n(this.scrollbarYRail,{display:""}))},M.prototype.onScroll=function(t){!this.isAlive||(R(this),W(this,"top",this.element.scrollTop-this.lastScrollTop),W(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},M.prototype.destroy=function(){!this.isAlive||(this.event.unbindAll(),a(this.scrollbarX),a(this.scrollbarY),a(this.scrollbarXRail),a(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},M.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter(function(t){return!t.match(/^ps([-_].+|)$/)}).join(" ")};var x=M,P=i(79765),C=i(37716);const k=new C.OlP("SUPPORTS_NATIVE_SCROLLBAR_STYLING",{providedIn:"root",factory:()=>{if(-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>-1)return!1;const t=document.createElement("div");t.className="__sb-test",t.style.overflow="scroll",t.style.width="40px";const e=document.createElement("style");e.innerHTML=".__sb-test::-webkit-scrollbar { width: 0px; }",t.appendChild(e),document.body.appendChild(t);const i=40==t.scrollWidth;return document.body.removeChild(t),i}});var N=i(96605),D=i(18553),B=i(34673);let O=(()=>{class t{constructor(t,e,i,r,n,l,o){this.el=t,this.renderer=e,this.breakpoints=i,this.ngZone=r,this.mutationObserverFactory=n,this.config=l,this.supportsNativeStyling=o,this.subscriptions=[],this.minLength=100,this.suppressX=!0,this.scrollTop=0,this.native=!0,this.debouncer=new P.xQ}ngAfterViewInit(){this.renderer.addClass(this.el.nativeElement,this.suppressX?"scroll-container":"scroll-container-x"),!this.shouldUseNative()&&(this.scrollbar=new x(this.el.nativeElement,{minScrollbarLength:this.minLength,suppressScrollX:this.suppressX,useBothWheelAxes:!this.suppressX,wheelSpeed:2}),this.native=!1,this.bindToContentChange())}update(){this.native||this.scrollbar.update()}setScrollTop(t=0){this.el.nativeElement.scrollTop=t,this.scrollTop=this.el.nativeElement.scrollTop,this.update()}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe()),this.subscriptions=[],this.native||this.scrollbar.destroy(),this.debouncer.complete(),this.observer&&this.observer.disconnect()}shouldUseNative(){return!this.config.get("vebto.forceCustomScrollbar")&&!/Edge/.test(navigator.userAgent)&&(!!this.breakpoints.isMobile$.value||this.supportsNativeStyling)}bindToContentChange(){this.observer=this.ngZone.runOutsideAngular(()=>this.mutationObserverFactory.create(t=>{this.debouncer.next(t)})),this.observer.observe(this.el.nativeElement,{childList:!0,subtree:!0}),this.ngZone.runOutsideAngular(()=>{this.debouncer.subscribe(t=>this.update())})}}return t.\u0275fac=function(e){return new(e||t)(C.Y36(C.SBq),C.Y36(C.Qsj),C.Y36(N.S),C.Y36(C.R0b),C.Y36(D.QL),C.Y36(B.Z),C.Y36(k))},t.\u0275dir=C.lG2({type:t,selectors:[["","customScrollbar",""]],inputs:{minLength:["customScrollbarMinLength","minLength"],suppressX:"suppressX"}}),t})()},16450:function(t,e,i){i.d(e,{m:function(){return n}});var r=i(37716);let n=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({}),t})()},76435:function(t,e,i){i.d(e,{q:function(){return d}});var r=i(38583),n=i(44291),l=i(87636),o=i(51095),s=i(43389),a=i(7964),c=i(37989),h=i(49866),u=i(37716);let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({providers:[a.T,c.T,{provide:n.f,useClass:n.o}],imports:[[r.ez,h.N,l.eL,o.ot,s.p]]}),t})()}}]);