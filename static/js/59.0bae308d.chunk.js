/*! For license information please see 59.0bae308d.chunk.js.LICENSE.txt */
(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[59,81],{510:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return l})),t.d(a,"d",(function(){return i})),t.d(a,"h",(function(){return c})),t.d(a,"e",(function(){return s})),t.d(a,"f",(function(){return u})),t.d(a,"g",(function(){return m}));var n=function(e,a){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)a.hasOwnProperty(t)&&(e[t]=a[t])})(e,a)};function r(e,a){function t(){this.constructor=e}n(e,a),e.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}var o=function(){return(o=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)};function l(e,a,t,n){return new(t||(t=Promise))((function(r,o){function l(e){try{c(n.next(e))}catch(a){o(a)}}function i(e){try{c(n.throw(e))}catch(a){o(a)}}function c(e){var a;e.done?r(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(l,i)}c((n=n.apply(e,a||[])).next())}))}function i(e,a){var t,n,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=a.call(e,l)}catch(i){o=[6,i],n=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}function c(e){var a="function"===typeof Symbol&&Symbol.iterator,t=a&&e[a],n=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,a){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,r,o=t.call(e),l=[];try{for(;(void 0===a||a-- >0)&&!(n=o.next()).done;)l.push(n.value)}catch(i){r={error:i}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return l}function u(){for(var e=[],a=0;a<arguments.length;a++)e=e.concat(s(arguments[a]));return e}function m(){for(var e=0,a=0,t=arguments.length;a<t;a++)e+=arguments[a].length;var n=Array(e),r=0;for(a=0;a<t;a++)for(var o=arguments[a],l=0,i=o.length;l<i;l++,r++)n[r]=o[l];return n}},512:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"c",(function(){return i})),t.d(a,"b",(function(){return c}));var n=t(535).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),r=localStorage.getItem("namaTimbangan"),o=localStorage.getItem("enableTimbangan"),l=function(e){o?n.database().ref(r).on("value",(function(a){var t=a.val();e("bruto",t.nilai),console.log(t.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},i=function(e){o?n.database().ref(r).on("value",(function(a){var t=a.val();e("jumlah",t.nilai),console.log(t.nilai);var n=Object.keys(t).map((function(e){return t[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")},c=function(e){o?n.database().ref(r).on("value",(function(a){var t=a.val();e("gross",t.nilai),console.log(t.nilai);var n=Object.keys(t).map((function(e){return t[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")}},543:function(e,a,t){"use strict";a.a=function(e){var a={};return e.kodeBarang||(a.kodeBarang="Tidak Boleh kosong, silahkan isi"),e.pkg||(a.pkg="Tidak Boleh kosong, silahkan isi"),e.p||(a.p="Tidak Boleh kosong, silahkan isi"),e.k||(a.k="Tidak Boleh kosong, silahkan isi"),e.bruto||(a.bruto="Tidak Boleh kosong, silahkan isi"),a}},669:function(e,a,t){"use strict";t.r(a);var n=t(24),r=t(25),o=t(189),l=t(27),i=t(26),c=t(0),s=t.n(c),u=t(67),m=t.n(u),p=t(467),f=t(468),d=t(470),g=t(19),h=t(543),b=t(88),k=t(512),v=Object(b.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),y=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,o=e.readOnly,l=e.meta,i=l.touched,c=l.error,u=l.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),i&&(c&&s.a.createElement("p",{className:"invalid-feedback"},c)||u&&s.a.createElement("p",null,u)))},E=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).pilihBarang=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");r.setState({kodeJenis:a[0],namaJenis:a[1],kadarCetak:a[2],kadarBeli:a[3]})}},r.onclick1=r.onclick1.bind(Object(o.a)(r)),r.state={kodeBarang:[],DataSupplier:[],kode_barang:"",keterangan:"INI KETERANGAN",kadar:"",P:"",K:"",bungkus:"",berat:"",harga:"",murni:"",ongkos:"",status:"",kadarCetak:"",kadarBeli:"",namaJenis:"",kodeJenis:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://147.139.193.169:3759/api/v1/subcategorys2?kodeKelompok=CIOK").then((function(a){return e.setState({kodeBarang:a.data})})).catch((function(e){return console.log(e)})),Object(k.a)(this.props.change)}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto),this.props.change("noFaktur",this.props.noFaktur),this.props.change("gross",this.props.gross)}},{key:"setKadar",value:function(){this.props.change("keterangan",this.state.namaJenis),this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli)}},{key:"setHargaLM",value:function(){var e=this.props.totalHargaLM?this.props.totalHargaLM:0,a=this.props.netto?this.props.netto:0;this.props.change("totalHargaLM",(e*a).toFixed(3))}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 col-lg-12 d-none"},s.a.createElement(p.a,{name:"noFaktur",label:this.props.noFaktur,type:"text",readOnly:!0,component:y,defaultValue:this.props.noFaktur,normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-4 form-group"},s.a.createElement("label",{htmlFor:""},"Kode Barang"),s.a.createElement(p.a,{name:"kodeJenis",component:"select",className:"form-control",onChange:this.pilihBarang(),onBlur:this.setKadar()},s.a.createElement("option",{value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT",key:"DEFAULT"},"Silahkan Pilih"),this.state.kodeBarang===[]?s.a.createElement("option",null,"TIDAK ADA DATA"):this.state.kodeBarang.map((function(e){return s.a.createElement("option",{value:e.kodeJenis+"|"+e.namaJenis+"|"+e.kadarCetak+"|"+e.kadarBeli},e.namaJenis)})))),s.a.createElement("div",{className:"col-md-8 form-group",style:"terima"===this.props.from?null:{visibility:"hidden"}},s.a.createElement(p.a,{name:"keterangan",label:"Keterangan",type:"text",component:y,normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(p.a,{name:"kadar",label:"Kadar (%)",type:"number",component:y,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(p.a,{name:"p",label:"P",type:"number",component:y})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(p.a,{name:"k",label:"K",type:"number",component:y})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(p.a,{name:"pkg",label:"Bungkus (Gr)",type:"number",component:y,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(p.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:y,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(p.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:y,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(p.a,{name:"gross",label:"Gross (Gr)",type:"number",component:y,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(p.a,{name:"netto",label:"Murni (Gr)",type:"number",component:y,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement("label",{htmlFor:""},"Harga (Rp)"),s.a.createElement(p.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onChange:this.setHargaLM()},v))),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement("label",{htmlFor:""},"Total Harga (Rp)"),s.a.createElement(p.a,Object.assign({name:"totalHargaLM",component:"input",type:"tel",className:"form-control"},v))),s.a.createElement("div",{className:"col-md-12 form-group mt-3"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan")))))}}]),t}(c.Component);E=Object(f.a)({form:"TerimaSupplier",validate:h.a,enableReinitialize:!0})(E);var T=Object(d.a)("TerimaSupplier");a.default=Object(g.b)((function(e){var a=T(e,"bruto","kadarTransaksi","pkg","harga"),t=a.bruto,n=a.kadarTransaksi,r=a.pkg,o=a.harga;return{netto:(parseFloat(t)*(parseFloat(n)/100)).toFixed(3),gross:parseFloat(t)+parseFloat(r),totalHargaLM:parseFloat(o)}}))(E)}}]);
//# sourceMappingURL=59.0bae308d.chunk.js.map