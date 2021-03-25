/*! For license information please see 80.43a1c57b.chunk.js.LICENSE.txt */
(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[80],{1200:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(23),o=a(25),l=a(24),c=a(0),i=a.n(c),s=a(15),u=a(467),m=a(468),p=a(470),f=a(49),d=a.n(f),b=a(90),g=a(692),h=a(512),v=Object(b.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),y=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,l=e.meta,c=l.touched,s=l.error,u=l.warning;return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"",className:"text-black"},a),i.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),c&&(s&&i.a.createElement("p",{className:"invalid-feedback"},s)||u&&i.a.createElement("p",null,u)))},k=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleChange=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");r.setState({kodeJenis:t[0],kadarCetak:t[1],kadarBeli:t[2],kadarJual:t[3],namaJenis:t[4]})}},r.state={listBarang:[],kodeJenis:"",kadarCetak:"",kadarBeli:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://147.139.193.169:3759/api/v1/subcategorys2?kodeKelompok=PERHIASAN").then((function(t){return e.setState({listBarang:t.data})})).catch((function(e){return console.log(e)})),Object(h.a)(this.props.change)}},{key:"setKadar",value:function(){this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli),this.props.change("kadarJual",this.state.kadarJual),this.props.change("keterangan",this.state.namaJenis)}},{key:"setNetto",value:function(){this.props.change("netto","NaN"===this.props.netto?0:this.props.netto)}},{key:"render",value:function(){return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement("label",{htmlFor:""},"Kode Barang"),i.a.createElement(u.a,{name:"kodeBarang",component:"select",className:"form-control",onChange:this.handleChange(),onBlur:this.setKadar()},i.a.createElement("option",{value:"DEFAULT|DEFAULT|DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.props.KodeBarangList.map((function(e){return i.a.createElement("option",{value:e.kode_jenis+"|"+e.kadar_cetak+"|"+e.kadar_beli+"|"+e.kadar_jual+"|"+e.nama_jenis+"|"+e.kode_kategori,key:e.kode_jenis},e.nama_jenis)})))),i.a.createElement("div",{className:"col-md-4 form-group"},i.a.createElement(u.a,{name:"keterangan",label:"Keterangan",component:y,type:"text"})),i.a.createElement("div",{className:"col-md-5"}),i.a.createElement("div",{className:"col-md-2 form-group"},i.a.createElement(u.a,{name:"kadar",label:"Kadar (%)",component:y,type:"text"})),i.a.createElement("div",{className:"col-md-2 form-group"},i.a.createElement(u.a,{name:"pkg",label:"Pkg (Gr)",component:y,type:"text",onBlur:this.setNetto()})),i.a.createElement("div",{className:"col-md-2 form-group"},i.a.createElement(u.a,{name:"bruto",label:"Bruto (Gr)",component:y,type:"text",onBlur:this.setNetto()})),i.a.createElement("div",{className:"col-md-2 form-group"},i.a.createElement(u.a,{name:"kadarTransaksi",label:"Harga (Gr)",component:y,type:"text",readOnly:!0})),i.a.createElement("div",{className:"col-md-2 form-group"},i.a.createElement(u.a,{name:"netto",label:"Netto (Gr)",component:y,type:"text"})),i.a.createElement("div",{className:"col-md-4 form-group"},i.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),i.a.createElement(u.a,Object.assign({name:"ongkos",label:"Ongkos (Rp)",component:"input",type:"telp",className:"form-control",defaultValue:0},v))),i.a.createElement("div",{className:"col-md-12 form-group"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),a}(c.Component);k=Object(m.a)({form:"FormTambahBarang",enableReinitialize:!0,validate:g.a})(k);var E=Object(p.a)("FormTambahBarang");t.default=Object(s.b)((function(e){var t=E(e,"bruto","kadarTransaksi"),a=t.bruto,n=t.kadarTransaksi;return{KodeBarangList:e.provinsi.kodeBarang,netto:(parseFloat(a)*(parseFloat(n)/100)).toFixed(3)}}))(k)},510:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l})),a.d(t,"d",(function(){return c})),a.d(t,"h",(function(){return i})),a.d(t,"e",(function(){return s})),a.d(t,"f",(function(){return u})),a.d(t,"g",(function(){return m}));var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function r(e,t){function a(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}var o=function(){return(o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function l(e,t,a,n){return new(a||(a=Promise))((function(r,o){function l(e){try{i(n.next(e))}catch(t){o(t)}}function c(e){try{i(n.throw(e))}catch(t){o(t)}}function i(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,c)}i((n=n.apply(e,t||[])).next())}))}function c(e,t){var a,n,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(c){o=[6,c],n=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}function i(e){var t="function"===typeof Symbol&&Symbol.iterator,a=t&&e[t],n=0;if(a)return a.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var a="function"===typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,o=a.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)l.push(n.value)}catch(c){r={error:c}}finally{try{n&&!n.done&&(a=o.return)&&a.call(o)}finally{if(r)throw r.error}}return l}function u(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e}function m(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<a;t++)for(var o=arguments[t],l=0,c=o.length;l<c;l++,r++)n[r]=o[l];return n}},512:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return i}));var n=a(535).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),r=localStorage.getItem("namaTimbangan"),o=localStorage.getItem("enableTimbangan"),l=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("bruto",a.nilai),console.log(a.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},c=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("jumlah",a.nilai),console.log(a.nilai);var n=Object.keys(a).map((function(e){return a[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")},i=function(e){o?n.database().ref(r).on("value",(function(t){var a=t.val();e("gross",a.nilai),console.log(a.nilai);var n=Object.keys(a).map((function(e){return a[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")}}}]);
//# sourceMappingURL=80.43a1c57b.chunk.js.map