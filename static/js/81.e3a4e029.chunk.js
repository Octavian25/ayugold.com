/*! For license information please see 81.e3a4e029.chunk.js.LICENSE.txt */
(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[81],{1126:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),o=a(18),l=a(17),c=a(40),i=a.n(c),s=a(0),u=a.n(s),m=a(12),p=a(52),f=a(304),d=a(305),g=a(54),b=a(513),h=Object(g.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),v=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,l=e.meta,c=l.touched,i=l.error,s=l.warning;return u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"",className:"text-black"},a),u.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",maxLength:r,readOnly:o})),c&&(i&&u.a.createElement("p",{className:"invalid-feedback"},i)||s&&u.a.createElement("p",null,s)))},y="https://147.139.193.169:3759/api/v1/",k=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChange=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");r.setState({kodeJenis:t[0],kadarCetak:t[1],kadarJual:t[2]}),r.props.change("kadarTransaksi",t[2]),r.props.change("keterangan",t[3])}},r.state={listBarang:[],listBarangPerhiasan:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;i.a.get(y+"subcategorys2?kodeKelompok=CIOK").then((function(t){return e.setState({listBarang:t.data})})).catch((function(e){return console.log(e)})),i.a.get(y+"subcategorys2?kodeKelompok=PERHIASAN").then((function(t){return e.setState({listBarangPerhiasan:t.data})})).catch((function(e){return console.log(e)})),Object(b.b)(this.props.change)}},{key:"setNetto",value:function(){this.props.change("netto","NaN"===this.props.netto?0:this.props.netto)}},{key:"render",value:function(){var e=this;return u.a.createElement("form",{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-3"},u.a.createElement("label",{htmlFor:""},"Kode barang"),u.a.createElement(p.a,{name:"kodeBarang",className:"form-control",component:"select",onChange:this.handleChange()},u.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),"RONGSOK"===this.props.jenisBarang?this.state.listBarang.map((function(e){return u.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarJual+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})):this.state.listBarangPerhiasan.map((function(e){return u.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarJual+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})))),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement(p.a,{name:"keterangan",label:"Keterangan",type:"text",component:v,readOnly:!0})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(p.a,{name:"kadarTransaksi",label:"Kadar(%)",type:"text",component:v,readOnly:!0,onChange:this.setNetto()})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(p.a,{name:"gross",label:"Gross(Gr)",type:"text",component:v,onChange:this.setNetto()})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(p.a,{name:"pkg",label:"Package(Gr)",type:"text",component:v,onChange:this.setNetto()})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(p.a,{name:"netto",label:"Netto",type:"text",component:v,readOnly:!0})),u.a.createElement("div",{className:"col-lg-3 d-none"},u.a.createElement(p.a,{name:"noFaktur",label:"Netto",type:"text",component:v,readOnly:!0,onLoad:function(){return e.props.change("noFaktur",e.props.noFaktur)}})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),u.a.createElement(p.a,Object.assign({name:"rp",type:"telp",className:"form-control",component:"input"},h))),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))}}]),a}(s.Component);k=Object(f.a)({form:"FormModalTimbangan",enableReinitialize:!0})(k);var E=Object(d.a)("FormModalTimbangan");t.default=Object(m.b)((function(e){var t=E(e,"gross","kadarTransaksi","pkg"),a=t.gross,n=t.kadarTransaksi,r=t.pkg;return{netto:(parseFloat(a||0)-parseFloat(r||0)*(parseFloat(n)/100)).toFixed(3)}}))(k)},512:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return c})),a.d(t,"h",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return m}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function r(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function l(e,t,a,n){return new(a||(a=Promise))((function(r,o){function l(e){try{i(n.next(e))}catch(t){o(t)}}function c(e){try{i(n.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}i((n=n.apply(e,t||[])).next())}))}function c(e,t){var a,n,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(c){o=[6,c],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function i(e){var t="function"===typeof Symbol&&Symbol.iterator,a=t&&e[t],n=0;if(a)return a.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var a="function"===typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,o=a.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)l.push(n.value)}catch(c){r={error:c}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return l}function u(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}function m(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var o=arguments[t],l=0,c=o.length;l<c;l++,r++)n[r]=o[l];return n}},513:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i}));var n=a(534).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),r=localStorage.getItem("namaTimbangan"),o=localStorage.getItem("enableTimbangan"),l=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("bruto",a.nilai),console.log(a.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},c=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("jumlah",a.nilai),console.log(a.nilai);var n=Object.keys(a).map((function(e){return a[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")},i=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("gross",a.nilai),console.log(a.nilai);var n=Object.keys(a).map((function(e){return a[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")}}}]);
//# sourceMappingURL=81.e3a4e029.chunk.js.map