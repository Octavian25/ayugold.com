/*! For license information please see 19.cbb60a48.chunk.js.LICENSE.txt */
(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[19],{509:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return i})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return f}));var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function l(e,t,n,a){return new(n||(n=Promise))((function(r,o){function l(e){try{c(a.next(e))}catch(t){o(t)}}function i(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((a=a.apply(e,t||[])).next())}))}function i(e,t){var n,a,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(i){o=[6,i],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}function c(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,o=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)l.push(a.value)}catch(i){r={error:i}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return l}function s(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e}function f(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var o=arguments[t],l=0,i=o.length;l<i;l++,r++)a[r]=o[l];return a}},512:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(534).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),r=localStorage.getItem("namaTimbangan"),o=localStorage.getItem("enableTimbangan"),l=function(e){o?a.database().ref(r).on("value",(function(t){var n=t.val();e("bruto",n.nilai),console.log(n.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},i=function(e){o?a.database().ref(r).on("value",(function(t){var n=t.val();e("jumlah",n.nilai),console.log(n.nilai);var a=Object.keys(n).map((function(e){return n[e]}));console.log(a)})):console.log("TIMBANGAN TIDAK AKTIF")},c=function(e){o?a.database().ref(r).on("value",(function(t){var n=t.val();e("gross",n.nilai),console.log(n.nilai);var a=Object.keys(n).map((function(e){return n[e]}));console.log(a)})):console.log("TIMBANGAN TIDAK AKTIF")}},742:function(e,t,n){"use strict";n.r(t);var a=n(35),r=n(36),o=n(38),l=n(37),i=n(0),c=n.n(i),u=n(18),s=n(466),f=n(467),p=n(469),m=n(512),b=function(e){var t=e.input,n=e.label,a=e.type,r=e.limit,o=e.readOnly,l=e.meta,i=l.touched,u=l.error,s=l.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},n),c.a.createElement("input",Object.assign({},t,{type:a,className:"form-control",maxLength:r,readOnly:o})),i&&(u&&c.a.createElement("p",{className:"invalid-feedback"},u)||s&&c.a.createElement("p",null,s)))},d=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.setData(),Object(m.c)(this.props.change)}},{key:"setData",value:function(){this.props.change("bruto",this.props.bruto),this.props.change("noFaktur",this.props.noFaktur)}},{key:"setSisa",value:function(e){this.props.change("sisa",this.props.sisaHutang)}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(s.a,{name:"bruto",label:"Bruto (Gr)",type:"text",component:b,value:"100",readOnly:!0,onBlur:this.setData()})),c.a.createElement("div",{className:"col-lg-4 d-none"},c.a.createElement(s.a,{name:"noFaktur",label:"Netto (Gr)",type:"text",component:b,value:"100",readOnly:!0})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(s.a,{name:"jumlah",label:"Jumlah Bayar (Gr)",type:"text",component:b,onChange:this.setSisa()})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(s.a,{name:"sisa",label:"Sisa Hutang (Gr)",type:"text",component:b})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))}}]),n}(i.Component);d=Object(f.a)({form:"FormModalValidasiStok",enableReinitialize:!0})(d);var h=Object(p.a)("FormModalValidasiStok");t.default=Object(u.b)((function(e){var t=h(e,"jumlah","bruto"),n=t.jumlah,a=t.bruto;return{sisaHutang:(parseFloat(a||0)-parseFloat(n||0)).toFixed(3)}}))(d)}}]);
//# sourceMappingURL=19.cbb60a48.chunk.js.map