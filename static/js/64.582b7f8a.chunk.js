/*! For license information please see 64.582b7f8a.chunk.js.LICENSE.txt */
(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[64],{1129:function(e,t,n){"use strict";n.r(t);var a=n(31),r=n(15),o=n(16),i=n(18),l=n(17),c=n(0),u=n.n(c),s=n(52),p=n(304),f=n(305),m=n(12),d=n(40),h=n.n(d),g=n(671),b=n(515),k=n(11),v=function(e){var t=e.input,n=e.label,a=e.type,r=e.limit,o=e.readOnly,i=e.meta,l=i.touched,c=i.error,s=i.warning;return u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"",className:"text-black"},n),u.a.createElement("input",Object.assign({},t,{type:a,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),l&&(c&&u.a.createElement("p",{className:"invalid-feedback"},c)||s&&u.a.createElement("p",null,s)))},y=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(a.a)({},e,t.target.value))}},o.state={listBarang:[]},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://192.168.1.27:7002/api/v1/subcategorys2?kodeKelompok=PERHIASAN").then((function(t){return e.setState({listBarang:t.data})})).catch((function(e){return console.log(e)})),Object(b.a)(this.props.change)}},{key:"handleChange",value:function(e){var t=(e||"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");this.setState({kodeJenis:t[0],kadarCetak:t[1],kadarBeli:t[2],namaJenis:t[3]}),this.props.change("kadar",t[1]),this.props.change("kadarTransaksi",t[2]),this.props.change("keterangan",t[3]),this.props.change("noFaktur",this.props.noFaktur)}},{key:"setKadar",value:function(){this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli),this.props.change("keterangan",this.state.namaJenis)}},{key:"setNetto",value:function(){this.props.change("netto","NaN"===this.props.netto?0:this.props.netto)}},{key:"render",value:function(){var e=this;return u.a.createElement("form",{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(s.a,{label:"Kode Barang",name:"kodeBarang",component:k.b,onChange:function(t){return e.handleChange(t)},onBlur:function(){return e.setKadar()},options:this.state.listBarang.map((function(e){return{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarBeli+"|"+e.namaJenis,name:e.namaJenis}}))})),u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(s.a,{name:"bruto",label:"Bruto (Gr)",component:v,type:"text",onBlur:this.setNetto()})),u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(s.a,{name:"kadarTransaksi",label:"Harga (Gr)",component:v,type:"text"})),u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(s.a,{name:"netto",label:"Netto (Gr)",component:v,type:"text",readOnly:!0})),u.a.createElement("div",{className:"col-md-3 form-group d-none"},u.a.createElement(s.a,{name:"keterangan",label:"Netto (Gr)",component:v,type:"text",readOnly:!0})),u.a.createElement("div",{className:"col-md-3 form-group d-none"},u.a.createElement(s.a,{name:"noFaktur",label:"Nomor Faktur",component:v,type:"text",readOnly:!0})),u.a.createElement("div",{className:"col-md-12 col-lg-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),n}(c.Component);y=Object(p.a)({form:"FormMutasiCiok",enableReinitialize:!0,validate:g.a})(y);var E=Object(f.a)("FormMutasiCiok");t.default=Object(m.b)((function(e){var t=E(e,"bruto","kadarTransaksi"),n=t.bruto,a=t.kadarTransaksi;return{netto:(parseFloat(n)*(parseFloat(a)/100)).toFixed(3)}}))(y)},513:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return p}));var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function r(e,t){function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function i(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{c(a.next(e))}catch(t){o(t)}}function l(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))}function l(e,t){var n,a,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(r=2&o[0]?a.return:o[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;switch(a=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],a=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function c(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)i.push(a.value)}catch(l){r={error:l}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return i}function s(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e}function p(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,r++)a[r]=o[i];return a}},515:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c}));var a=n(532).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),r=localStorage.getItem("namaTimbangan"),o=localStorage.getItem("enableTimbangan"),i=function(e){o?a.database().ref(r).on("value",(function(t){var n=t.val();e("bruto",n.nilai),console.log(n.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},l=function(e){o?a.database().ref(r).on("value",(function(t){var n=t.val();e("jumlah",n.nilai),console.log(n.nilai);var a=Object.keys(n).map((function(e){return n[e]}));console.log(a)})):console.log("TIMBANGAN TIDAK AKTIF")},c=function(e){o?a.database().ref(r).on("value",(function(t){var n=t.val();e("gross",n.nilai),console.log(n.nilai);var a=Object.keys(n).map((function(e){return n[e]}));console.log(a)})):console.log("TIMBANGAN TIDAK AKTIF")}},671:function(e,t,n){"use strict";t.a=function(e){var t={};return e.bruto||(t.bruto="Tidak Boleh kosong"),e.netto||(t.netto="Tidak Boleh kosong"),e.noBon||(t.noBon="Tidak Boleh kosong"),e.noBon||(t.noBon="Tidak Boleh kosong"),e.transaksi||(t.transaksi="Tidak Boleh kosong"),e.tanggal||(t.tanggal="Tidak Boleh kosong"),t}}}]);
//# sourceMappingURL=64.582b7f8a.chunk.js.map