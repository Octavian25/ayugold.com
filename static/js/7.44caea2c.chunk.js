(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[7],{536:function(t,e,o){"use strict";var r=o(0),n=o.n(r),i=o(2),a=o.n(i),s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),l=new Uint8Array(16);function p(){if(!s)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(l)}for(var u=[],c=0;c<256;++c)u[c]=(c+256).toString(16).substr(1);var d=function(t,e){var o=e||0,r=u;return[r[t[o++]],r[t[o++]],r[t[o++]],r[t[o++]],"-",r[t[o++]],r[t[o++]],"-",r[t[o++]],r[t[o++]],"-",r[t[o++]],r[t[o++]],"-",r[t[o++]],r[t[o++]],r[t[o++]],r[t[o++]],r[t[o++]],r[t[o++]]].join("")};var f=function(t,e,o){var r=e&&o||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var n=(t=t||{}).random||(t.rng||p)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e)for(var i=0;i<16;++i)e[r+i]=n[i];return e||d(n)};function h(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e,o){return e&&h(t.prototype,e),o&&h(t,o),t}function v(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}function m(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?m(Object(o),!0).forEach((function(e){v(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var x={HIDE:"__react_tooltip_hide_event",REBUILD:"__react_tooltip_rebuild_event",SHOW:"__react_tooltip_show_event"},_=function(t,e){var o;"function"===typeof window.CustomEvent?o=new window.CustomEvent(t,{detail:e}):(o=document.createEvent("Event")).initEvent(t,!1,!0,e),window.dispatchEvent(o)};var L=function(t,e){var o=this.state.show,r=this.props.id,n=this.isCapture(e.currentTarget),i=e.currentTarget.getAttribute("currentItem");n||e.stopPropagation(),o&&"true"===i?t||this.hideTooltip(e):(e.currentTarget.setAttribute("currentItem","true"),O(e.currentTarget,this.getTargetArray(r)),this.showTooltip(e))},O=function(t,e){for(var o=0;o<e.length;o++)t!==e[o]?e[o].setAttribute("currentItem","false"):e[o].setAttribute("currentItem","true")},C={id:"9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",set:function(t,e,o){this.id in t?t[this.id][e]=o:Object.defineProperty(t,this.id,{configurable:!0,value:v({},e,o)})},get:function(t,e){var o=t[this.id];if(void 0!==o)return o[e]}};var k=function(t,e,o){var r=e.respectEffect,n=void 0!==r&&r,i=e.customEvent,a=void 0!==i&&i,s=this.props.id,l=o.target.getAttribute("data-tip")||null,p=o.target.getAttribute("data-for")||null,u=o.target;if(!this.isCustomEvent(u)||a){var c=null==s&&null==p||p===s;if(null!=l&&(!n||"float"===this.getEffect(u))&&c){var d=function(t){var e={};for(var o in t)"function"===typeof t[o]?e[o]=t[o].bind(t):e[o]=t[o];return e}(o);d.currentTarget=u,t(d)}}},S=function(t,e){var o={};return t.forEach((function(t){var r=t.getAttribute(e);r&&r.split(" ").forEach((function(t){return o[t]=!0}))})),o},A=function(){return document.getElementsByTagName("body")[0]};function R(t,e,o,r,n,i,a){for(var s=P(o),l=s.width,p=s.height,u=P(e),c=u.width,d=u.height,f=H(t,e,i),h=f.mouseX,b=f.mouseY,v=j(i,c,d,l,p),g=B(a),m=g.extraOffsetX,y=g.extraOffsetY,w=window.innerWidth,T=window.innerHeight,E=I(o),x=E.parentTop,_=E.parentLeft,L=function(t){var e=v[t].l;return h+e+m},O=function(t){var e=v[t].t;return b+e+y},C=function(t){return function(t){var e=v[t].r;return h+e+m}(t)>w},k=function(t){return function(t){var e=v[t].b;return b+e+y}(t)>T},S=function(t){return function(t){return L(t)<0}(t)||C(t)||function(t){return O(t)<0}(t)||k(t)},A=function(t){return!S(t)},R=["top","bottom","left","right"],D=[],M=0;M<4;M++){var W=R[M];A(W)&&D.push(W)}var N,U=!1,z=n!==r;return A(n)&&z?(U=!0,N=n):D.length>0&&S(n)&&S(r)&&(U=!0,N=D[0]),U?{isNewState:!0,newState:{place:N}}:{isNewState:!1,position:{left:parseInt(L(r)-_,10),top:parseInt(O(r)-x,10)}}}var P=function(t){var e=t.getBoundingClientRect(),o=e.height,r=e.width;return{height:parseInt(o,10),width:parseInt(r,10)}},H=function(t,e,o){var r=e.getBoundingClientRect(),n=r.top,i=r.left,a=P(e),s=a.width,l=a.height;return"float"===o?{mouseX:t.clientX,mouseY:t.clientY}:{mouseX:i+s/2,mouseY:n+l/2}},j=function(t,e,o,r,n){var i,a,s,l;return"float"===t?(i={l:-r/2,r:r/2,t:-(n+3+2),b:-3},s={l:-r/2,r:r/2,t:15,b:n+3+2+12},l={l:-(r+3+2),r:-3,t:-n/2,b:n/2},a={l:3,r:r+3+2,t:-n/2,b:n/2}):"solid"===t&&(i={l:-r/2,r:r/2,t:-(o/2+n+2),b:-o/2},s={l:-r/2,r:r/2,t:o/2,b:o/2+n+2},l={l:-(r+e/2+2),r:-e/2,t:-n/2,b:n/2},a={l:e/2,r:r+e/2+2,t:-n/2,b:n/2}),{top:i,bottom:s,left:l,right:a}},B=function(t){var e=0,o=0;for(var r in"[object String]"===Object.prototype.toString.apply(t)&&(t=JSON.parse(t.toString().replace(/'/g,'"'))),t)"top"===r?o-=parseInt(t[r],10):"bottom"===r?o+=parseInt(t[r],10):"left"===r?e-=parseInt(t[r],10):"right"===r&&(e+=parseInt(t[r],10));return{extraOffsetX:e,extraOffsetY:o}},I=function(t){for(var e=t;e;){var o=window.getComputedStyle(e);if("none"!==o.getPropertyValue("transform")||"transform"===o.getPropertyValue("will-change"))break;e=e.parentElement}return{parentTop:e&&e.getBoundingClientRect().top||0,parentLeft:e&&e.getBoundingClientRect().left||0}};function D(t,e,o,r){if(e)return e;if(void 0!==o&&null!==o)return o;if(null===o)return null;var i=/<br\s*\/?>/;return r&&"false"!==r&&i.test(t)?t.split(i).map((function(t,e){return n.a.createElement("span",{key:e,className:"multi-line"},t)})):t}function M(t){var e={};return Object.keys(t).filter((function(t){return/(^aria-\w+$|^role$)/.test(t)})).forEach((function(o){e[o]=t[o]})),e}function W(t){var e=t.length;return t.hasOwnProperty?Array.prototype.slice.call(t):new Array(e).fill().map((function(e){return t[e]}))}var N,U,z,F={dark:{text:"#fff",background:"#222",border:"transparent",arrow:"#222"},success:{text:"#fff",background:"#8DC572",border:"transparent",arrow:"#8DC572"},warning:{text:"#fff",background:"#F0AD4E",border:"transparent",arrow:"#F0AD4E"},error:{text:"#fff",background:"#BE6464",border:"transparent",arrow:"#BE6464"},info:{text:"#fff",background:"#337AB7",border:"transparent",arrow:"#337AB7"},light:{text:"#222",background:"#fff",border:"transparent",arrow:"#fff"}};function V(t,e,o,r){return function(t,e){var o=e.text,r=e.background,n=e.border,i=e.arrow;return"\n  \t.".concat(t," {\n\t    color: ").concat(o,";\n\t    background: ").concat(r,";\n\t    border: 1px solid ").concat(n,";\n  \t}\n\n  \t.").concat(t,".place-top {\n        margin-top: -10px;\n    }\n    .").concat(t,".place-top::before {\n        border-top: 8px solid ").concat(n,";\n    }\n    .").concat(t,".place-top::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-top-color: ").concat(i,";\n        border-top-style: solid;\n        border-top-width: 6px;\n    }\n\n    .").concat(t,".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(t,".place-bottom::before {\n        border-bottom: 8px solid ").concat(n,";\n    }\n    .").concat(t,".place-bottom::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        top: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-bottom-color: ").concat(i,";\n        border-bottom-style: solid;\n        border-bottom-width: 6px;\n    }\n\n    .").concat(t,".place-left {\n        margin-left: -10px;\n    }\n    .").concat(t,".place-left::before {\n        border-left: 8px solid ").concat(n,";\n    }\n    .").concat(t,".place-left::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        right: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-left-color: ").concat(i,";\n        border-left-style: solid;\n        border-left-width: 6px;\n    }\n\n    .").concat(t,".place-right {\n        margin-left: 10px;\n    }\n    .").concat(t,".place-right::before {\n        border-right: 8px solid ").concat(n,";\n    }\n    .").concat(t,".place-right::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        left: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-right-color: ").concat(i,";\n        border-right-style: solid;\n        border-right-width: 6px;\n    }\n  ")}(t,function(t,e,o){var r=t.text,n=t.background,i=t.border,a=t.arrow?t.arrow:t.background,s=function(t){return F[t]?y({},F[t]):void 0}(e);r&&(s.text=r);n&&(s.background=n);o&&(s.border=i||("light"===e?"black":"white"));a&&(s.arrow=a);return s}(e,o,r))}var X,Y=function(t){t.hide=function(t){_(x.HIDE,{target:t})},t.rebuild=function(){_(x.REBUILD)},t.show=function(t){_(x.SHOW,{target:t})},t.prototype.globalRebuild=function(){this.mount&&(this.unbindListener(),this.bindListener())},t.prototype.globalShow=function(t){if(this.mount){var e=!!(t&&t.detail&&t.detail.target);this.showTooltip({currentTarget:e&&t.detail.target},!0)}},t.prototype.globalHide=function(t){if(this.mount){var e=!!(t&&t.detail&&t.detail.target);this.hideTooltip({currentTarget:e&&t.detail.target},e)}}}(N=function(t){t.prototype.bindWindowEvents=function(t){window.removeEventListener(x.HIDE,this.globalHide),window.addEventListener(x.HIDE,this.globalHide,!1),window.removeEventListener(x.REBUILD,this.globalRebuild),window.addEventListener(x.REBUILD,this.globalRebuild,!1),window.removeEventListener(x.SHOW,this.globalShow),window.addEventListener(x.SHOW,this.globalShow,!1),t&&(window.removeEventListener("resize",this.onWindowResize),window.addEventListener("resize",this.onWindowResize,!1))},t.prototype.unbindWindowEvents=function(){window.removeEventListener(x.HIDE,this.globalHide),window.removeEventListener(x.REBUILD,this.globalRebuild),window.removeEventListener(x.SHOW,this.globalShow),window.removeEventListener("resize",this.onWindowResize)},t.prototype.onWindowResize=function(){this.mount&&this.hideTooltip()}}(N=function(t){t.prototype.isCustomEvent=function(t){return this.state.event||!!t.getAttribute("data-event")},t.prototype.customBindListener=function(t){var e=this,o=this.state,r=o.event,n=o.eventOff,i=t.getAttribute("data-event")||r,a=t.getAttribute("data-event-off")||n;i.split(" ").forEach((function(o){t.removeEventListener(o,C.get(t,o));var r=L.bind(e,a);C.set(t,o,r),t.addEventListener(o,r,!1)})),a&&a.split(" ").forEach((function(o){t.removeEventListener(o,e.hideTooltip),t.addEventListener(o,e.hideTooltip,!1)}))},t.prototype.customUnbindListener=function(t){var e=this.state,o=e.event,r=e.eventOff,n=o||t.getAttribute("data-event"),i=r||t.getAttribute("data-event-off");t.removeEventListener(n,C.get(t,o)),i&&t.removeEventListener(i,this.hideTooltip)}}(N=function(t){t.prototype.isCapture=function(t){return t&&"true"===t.getAttribute("data-iscapture")||this.props.isCapture||!1}}(N=function(t){t.prototype.getEffect=function(t){return t.getAttribute("data-effect")||this.props.effect||"float"}}(N=function(t){t.prototype.isBodyMode=function(){return!!this.props.bodyMode},t.prototype.bindBodyListener=function(t){var e=this,o=this.state,r=o.event,n=o.eventOff,i=o.possibleCustomEvents,a=o.possibleCustomEventsOff,s=A(),l=S(t,"data-event"),p=S(t,"data-event-off");null!=r&&(l[r]=!0),null!=n&&(p[n]=!0),i.split(" ").forEach((function(t){return l[t]=!0})),a.split(" ").forEach((function(t){return p[t]=!0})),this.unbindBodyListener(s);var u=this.bodyModeListeners={};for(var c in null==r&&(u.mouseover=k.bind(this,this.showTooltip,{}),u.mousemove=k.bind(this,this.updateTooltip,{respectEffect:!0}),u.mouseout=k.bind(this,this.hideTooltip,{})),l)u[c]=k.bind(this,(function(t){var o=t.currentTarget.getAttribute("data-event-off")||n;L.call(e,o,t)}),{customEvent:!0});for(var d in p)u[d]=k.bind(this,this.hideTooltip,{customEvent:!0});for(var f in u)s.addEventListener(f,u[f])},t.prototype.unbindBodyListener=function(t){t=t||A();var e=this.bodyModeListeners;for(var o in e)t.removeEventListener(o,e[o])}}((z=U=function(t){function e(t){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=E(this,w(e).call(this,t))).state={uuid:t.uuid||"t"+f(),place:t.place||"top",desiredPlace:t.place||"top",type:"dark",effect:"float",show:!1,border:!1,customColors:{},offset:{},extraClass:"",html:!1,delayHide:0,delayShow:0,event:t.event||null,eventOff:t.eventOff||null,currentEvent:null,currentTarget:null,ariaProps:M(t),isEmptyTip:!1,disable:!1,possibleCustomEvents:t.possibleCustomEvents||"",possibleCustomEventsOff:t.possibleCustomEventsOff||"",originTooltip:null,isMultiline:!1},o.bind(["showTooltip","updateTooltip","hideTooltip","hideTooltipOnScroll","getTooltipContent","globalRebuild","globalShow","globalHide","onWindowResize","mouseOnToolTip"]),o.mount=!0,o.delayShowLoop=null,o.delayHideLoop=null,o.delayReshow=null,o.intervalUpdateContent=null,o}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(e,t),b(e,null,[{key:"propTypes",get:function(){return{uuid:a.a.string,children:a.a.any,place:a.a.string,type:a.a.string,effect:a.a.string,offset:a.a.object,multiline:a.a.bool,border:a.a.bool,textColor:a.a.string,backgroundColor:a.a.string,borderColor:a.a.string,arrowColor:a.a.string,insecure:a.a.bool,class:a.a.string,className:a.a.string,id:a.a.string,html:a.a.bool,delayHide:a.a.number,delayUpdate:a.a.number,delayShow:a.a.number,event:a.a.string,eventOff:a.a.string,isCapture:a.a.bool,globalEventOff:a.a.string,getContent:a.a.any,afterShow:a.a.func,afterHide:a.a.func,overridePosition:a.a.func,disable:a.a.bool,scrollHide:a.a.bool,resizeHide:a.a.bool,wrapper:a.a.string,bodyMode:a.a.bool,possibleCustomEvents:a.a.string,possibleCustomEventsOff:a.a.string,clickable:a.a.bool}}}]),b(e,[{key:"bind",value:function(t){var e=this;t.forEach((function(t){e[t]=e[t].bind(e)}))}},{key:"componentDidMount",value:function(){var t=this.props,e=(t.insecure,t.resizeHide);this.bindListener(),this.bindWindowEvents(e),this.injectStyles()}},{key:"componentWillUnmount",value:function(){this.mount=!1,this.clearTimer(),this.unbindListener(),this.removeScrollListener(this.state.currentTarget),this.unbindWindowEvents()}},{key:"injectStyles",value:function(){var t=this.props.id,e=this.getTargetArray(t),o=[];if(e.forEach((function(t){for(var e=t.parentNode;e.parentNode&&!e.host;)e=e.parentNode;var r=e.querySelector("head");o.push(r||e)})),o.length){var r=document.createElement("style");r.textContent='.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}',r.setAttribute("data-react-tooltip","true"),o.filter((function(t,e,o){return o.indexOf(t)===e})).forEach((function(t){t.querySelector("style[data-react-tooltip]")||t.appendChild(r)}))}}},{key:"mouseOnToolTip",value:function(){return!(!this.state.show||!this.tooltipRef)&&(this.tooltipRef.matches||(this.tooltipRef.msMatchesSelector?this.tooltipRef.matches=this.tooltipRef.msMatchesSelector:this.tooltipRef.matches=this.tooltipRef.mozMatchesSelector),this.tooltipRef.matches(":hover"))}},{key:"getTargetArray",value:function(t){var e,o=[];if(t){var r=t.replace(/\\/g,"\\\\").replace(/"/g,'\\"');e='[data-tip][data-for="'.concat(r,'"]')}else e="[data-tip]:not([data-for])";return W(document.getElementsByTagName("*")).filter((function(t){return t.shadowRoot})).forEach((function(t){o=o.concat(W(t.shadowRoot.querySelectorAll(e)))})),o.concat(W(document.querySelectorAll(e)))}},{key:"bindListener",value:function(){var t=this,e=this.props,o=e.id,r=e.globalEventOff,n=e.isCapture,i=this.getTargetArray(o);i.forEach((function(e){null===e.getAttribute("currentItem")&&e.setAttribute("currentItem","false"),t.unbindBasicListener(e),t.isCustomEvent(e)&&t.customUnbindListener(e)})),this.isBodyMode()?this.bindBodyListener(i):i.forEach((function(e){var o=t.isCapture(e),r=t.getEffect(e);t.isCustomEvent(e)?t.customBindListener(e):(e.addEventListener("mouseenter",t.showTooltip,o),"float"===r&&e.addEventListener("mousemove",t.updateTooltip,o),e.addEventListener("mouseleave",t.hideTooltip,o))})),r&&(window.removeEventListener(r,this.hideTooltip),window.addEventListener(r,this.hideTooltip,n)),this.bindRemovalTracker()}},{key:"unbindListener",value:function(){var t=this,e=this.props,o=e.id,r=e.globalEventOff;this.isBodyMode()?this.unbindBodyListener():this.getTargetArray(o).forEach((function(e){t.unbindBasicListener(e),t.isCustomEvent(e)&&t.customUnbindListener(e)})),r&&window.removeEventListener(r,this.hideTooltip),this.unbindRemovalTracker()}},{key:"unbindBasicListener",value:function(t){var e=this.isCapture(t);t.removeEventListener("mouseenter",this.showTooltip,e),t.removeEventListener("mousemove",this.updateTooltip,e),t.removeEventListener("mouseleave",this.hideTooltip,e)}},{key:"getTooltipContent",value:function(){var t,e=this.props,o=e.getContent,r=e.children;return o&&(t=Array.isArray(o)?o[0]&&o[0](this.state.originTooltip):o(this.state.originTooltip)),D(this.state.originTooltip,r,t,this.state.isMultiline)}},{key:"isEmptyTip",value:function(t){return"string"===typeof t&&""===t||null===t}},{key:"showTooltip",value:function(t,e){if(this.tooltipRef){if(e&&!this.getTargetArray(this.props.id).some((function(e){return e===t.currentTarget})))return;var o=this.props,r=o.multiline,n=o.getContent,i=t.currentTarget.getAttribute("data-tip"),a=t.currentTarget.getAttribute("data-multiline")||r||!1,s=t instanceof window.FocusEvent||e,l=!0;t.currentTarget.getAttribute("data-scroll-hide")?l="true"===t.currentTarget.getAttribute("data-scroll-hide"):null!=this.props.scrollHide&&(l=this.props.scrollHide);var p=t.currentTarget.getAttribute("data-place")||this.props.place||"top",u=s?"solid":this.getEffect(t.currentTarget),c=t.currentTarget.getAttribute("data-offset")||this.props.offset||{},d=R(t,t.currentTarget,this.tooltipRef,p,p,u,c);d.position&&this.props.overridePosition&&(d.position=this.props.overridePosition(d.position,t,t.currentTarget,this.tooltipRef,p,p,u,c));var f=d.isNewState?d.newState.place:p;this.clearTimer();var h=t.currentTarget,b=this.state.show?h.getAttribute("data-delay-update")||this.props.delayUpdate:0,v=this,g=function(){v.setState({originTooltip:i,isMultiline:a,desiredPlace:p,place:f,type:h.getAttribute("data-type")||v.props.type||"dark",customColors:{text:h.getAttribute("data-text-color")||v.props.textColor||null,background:h.getAttribute("data-background-color")||v.props.backgroundColor||null,border:h.getAttribute("data-border-color")||v.props.borderColor||null,arrow:h.getAttribute("data-arrow-color")||v.props.arrowColor||null},effect:u,offset:c,html:(h.getAttribute("data-html")?"true"===h.getAttribute("data-html"):v.props.html)||!1,delayShow:h.getAttribute("data-delay-show")||v.props.delayShow||0,delayHide:h.getAttribute("data-delay-hide")||v.props.delayHide||0,delayUpdate:h.getAttribute("data-delay-update")||v.props.delayUpdate||0,border:(h.getAttribute("data-border")?"true"===h.getAttribute("data-border"):v.props.border)||!1,extraClass:h.getAttribute("data-class")||v.props.class||v.props.className||"",disable:(h.getAttribute("data-tip-disable")?"true"===h.getAttribute("data-tip-disable"):v.props.disable)||!1,currentTarget:h},(function(){l&&v.addScrollListener(v.state.currentTarget),v.updateTooltip(t),n&&Array.isArray(n)&&(v.intervalUpdateContent=setInterval((function(){if(v.mount){var t=v.props.getContent,e=D(i,"",t[0](),a),o=v.isEmptyTip(e);v.setState({isEmptyTip:o}),v.updatePosition()}}),n[1]))}))};b?this.delayReshow=setTimeout(g,b):g()}}},{key:"updateTooltip",value:function(t){var e=this,o=this.state,r=o.delayShow,n=o.disable,i=this.props.afterShow,a=this.getTooltipContent(),s=parseInt(r,10),l=t.currentTarget||t.target;if(!this.mouseOnToolTip()&&!this.isEmptyTip(a)&&!n){var p=function(){if(Array.isArray(a)&&a.length>0||a){var o=!e.state.show;e.setState({currentEvent:t,currentTarget:l,show:!0},(function(){e.updatePosition(),o&&i&&i(t)}))}};clearTimeout(this.delayShowLoop),r?this.delayShowLoop=setTimeout(p,s):p()}}},{key:"listenForTooltipExit",value:function(){this.state.show&&this.tooltipRef&&this.tooltipRef.addEventListener("mouseleave",this.hideTooltip)}},{key:"removeListenerForTooltipExit",value:function(){this.state.show&&this.tooltipRef&&this.tooltipRef.removeEventListener("mouseleave",this.hideTooltip)}},{key:"hideTooltip",value:function(t,e){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isScroll:!1},n=this.state.disable,i=r.isScroll,a=i?0:this.state.delayHide,s=this.props.afterHide,l=this.getTooltipContent();if(this.mount&&!this.isEmptyTip(l)&&!n){if(e){var p=this.getTargetArray(this.props.id),u=p.some((function(e){return e===t.currentTarget}));if(!u||!this.state.show)return}var c=function(){var e=o.state.show;o.mouseOnToolTip()?o.listenForTooltipExit():(o.removeListenerForTooltipExit(),o.setState({show:!1},(function(){o.removeScrollListener(o.state.currentTarget),e&&s&&s(t)})))};this.clearTimer(),a?this.delayHideLoop=setTimeout(c,parseInt(a,10)):c()}}},{key:"hideTooltipOnScroll",value:function(t,e){this.hideTooltip(t,e,{isScroll:!0})}},{key:"addScrollListener",value:function(t){var e=this.isCapture(t);window.addEventListener("scroll",this.hideTooltipOnScroll,e)}},{key:"removeScrollListener",value:function(t){var e=this.isCapture(t);window.removeEventListener("scroll",this.hideTooltipOnScroll,e)}},{key:"updatePosition",value:function(){var t=this,e=this.state,o=e.currentEvent,r=e.currentTarget,n=e.place,i=e.desiredPlace,a=e.effect,s=e.offset,l=this.tooltipRef,p=R(o,r,l,n,i,a,s);if(p.position&&this.props.overridePosition&&(p.position=this.props.overridePosition(p.position,o,r,l,n,i,a,s)),p.isNewState)return this.setState(p.newState,(function(){t.updatePosition()}));l.style.left=p.position.left+"px",l.style.top=p.position.top+"px"}},{key:"clearTimer",value:function(){clearTimeout(this.delayShowLoop),clearTimeout(this.delayHideLoop),clearTimeout(this.delayReshow),clearInterval(this.intervalUpdateContent)}},{key:"hasCustomColors",value:function(){var t=this;return Boolean(Object.keys(this.state.customColors).find((function(e){return"border"!==e&&t.state.customColors[e]}))||this.state.border&&this.state.customColors.border)}},{key:"render",value:function(){var t=this,o=this.state,r=o.extraClass,i=o.html,a=o.ariaProps,s=o.disable,l=this.getTooltipContent(),p=this.isEmptyTip(l),u=V(this.state.uuid,this.state.customColors,this.state.type,this.state.border),c="__react_component_tooltip"+" ".concat(this.state.uuid)+(!this.state.show||s||p?"":" show")+(this.state.border?" border":"")+" place-".concat(this.state.place)+" type-".concat(this.hasCustomColors()?"custom":this.state.type)+(this.props.delayUpdate?" allow_hover":"")+(this.props.clickable?" allow_click":""),d=this.props.wrapper;e.supportedWrappers.indexOf(d)<0&&(d=e.defaultProps.wrapper);var f=[c,r].filter(Boolean).join(" ");if(i){var h="".concat(l,"\n<style>").concat(u,"</style>");return n.a.createElement(d,g({className:"".concat(f),id:this.props.id,ref:function(e){return t.tooltipRef=e}},a,{"data-id":"tooltip",dangerouslySetInnerHTML:{__html:h}}))}return n.a.createElement(d,g({className:"".concat(f),id:this.props.id},a,{ref:function(e){return t.tooltipRef=e},"data-id":"tooltip"}),n.a.createElement("style",{dangerouslySetInnerHTML:{__html:u}}),l)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var o=e.ariaProps,r=M(t);return Object.keys(r).some((function(t){return r[t]!==o[t]}))?y({},e,{ariaProps:r}):null}}]),e}(n.a.Component),v(U,"defaultProps",{insecure:!0,resizeHide:!0,wrapper:"div",clickable:!1}),v(U,"supportedWrappers",["div","span"]),v(U,"displayName","ReactTooltip"),(X=N=z).prototype.bindRemovalTracker=function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(null!=e){var o=new e((function(e){for(var o=0;o<e.length;o++)for(var r=e[o],n=0;n<r.removedNodes.length;n++)if(r.removedNodes[n]===t.state.currentTarget)return void t.hideTooltip()}));o.observe(window.document,{childList:!0,subtree:!0}),this.removalTracker=o}},N=void(X.prototype.unbindRemovalTracker=function(){this.removalTracker&&(this.removalTracker.disconnect(),this.removalTracker=null)})||N))||N)||N)||N)||N)||N)||N;e.a=Y}}]);
//# sourceMappingURL=7.44caea2c.chunk.js.map