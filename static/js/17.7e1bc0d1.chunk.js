/*! For license information please see 17.7e1bc0d1.chunk.js.LICENSE.txt */
(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[17],{512:function(e,a,n){"use strict";n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return i})),n.d(a,"d",(function(){return l})),n.d(a,"h",(function(){return c})),n.d(a,"e",(function(){return s})),n.d(a,"f",(function(){return u})),n.d(a,"g",(function(){return p}));var t=function(e,a){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var n in a)a.hasOwnProperty(n)&&(e[n]=a[n])})(e,a)};function r(e,a){function n(){this.constructor=e}t(e,a),e.prototype=null===a?Object.create(a):(n.prototype=a.prototype,new n)}var o=function(){return(o=Object.assign||function(e){for(var a,n=1,t=arguments.length;n<t;n++)for(var r in a=arguments[n])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)};function i(e,a,n,t){return new(n||(n=Promise))((function(r,o){function i(e){try{c(t.next(e))}catch(a){o(a)}}function l(e){try{c(t.throw(e))}catch(a){o(a)}}function c(e){var a;e.done?r(e.value):(a=e.value,a instanceof n?a:new n((function(e){e(a)}))).then(i,l)}c((t=t.apply(e,a||[])).next())}))}function l(e,a){var n,t,r,o,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,t&&(r=2&o[0]?t.return:o[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,o[1])).done)return r;switch(t=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=a.call(e,i)}catch(l){o=[6,l],t=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}function c(e){var a="function"===typeof Symbol&&Symbol.iterator,n=a&&e[a],t=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,a){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,r,o=n.call(e),i=[];try{for(;(void 0===a||a-- >0)&&!(t=o.next()).done;)i.push(t.value)}catch(l){r={error:l}}finally{try{t&&!t.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return i}function u(){for(var e=[],a=0;a<arguments.length;a++)e=e.concat(s(arguments[a]));return e}function p(){for(var e=0,a=0,n=arguments.length;a<n;a++)e+=arguments[a].length;var t=Array(e),r=0;for(a=0;a<n;a++)for(var o=arguments[a],i=0,l=o.length;i<l;i++,r++)t[r]=o[i];return t}},513:function(e,a,n){"use strict";n.d(a,"a",(function(){return i})),n.d(a,"c",(function(){return l})),n.d(a,"b",(function(){return c}));var t=n(534).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),r=localStorage.getItem("namaTimbangan"),o=localStorage.getItem("enableTimbangan"),i=function(e){o?t.database().ref(r).on("value",(function(a){var n=a.val();e("bruto",n.nilai),console.log(n.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},l=function(e){o?t.database().ref(r).on("value",(function(a){var n=a.val();e("jumlah",n.nilai),console.log(n.nilai);var t=Object.keys(n).map((function(e){return n[e]}));console.log(t)})):console.log("TIMBANGAN TIDAK AKTIF")},c=function(e){o?t.database().ref(r).on("value",(function(a){var n=a.val();e("gross",n.nilai),console.log(n.nilai);var t=Object.keys(n).map((function(e){return n[e]}));console.log(t)})):console.log("TIMBANGAN TIDAK AKTIF")}},542:function(e,a,n){"use strict";a.a=function(e){var a={};return e.kodeBarang||(a.kodeBarang="Tidak Boleh kosong, silahkan isi"),e.pkg||(a.pkg="Tidak Boleh kosong, silahkan isi"),e.p||(a.p="Tidak Boleh kosong, silahkan isi"),e.k||(a.k="Tidak Boleh kosong, silahkan isi"),e.bruto||(a.bruto="Tidak Boleh kosong, silahkan isi"),a}},672:function(e,a,n){"use strict";n.r(a);var t=n(15),r=n(16),o=n(197),i=n(18),l=n(17),c=n(0),s=n.n(c),u=n(52),p=n(304),m=n(305),f=n(12),d=n(542),b=n(54),g=n(513),h=n(11),k=n(3),v=Object(b.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),y=function(e){Object(i.a)(n,e);var a=Object(l.a)(n);function n(e){var r;return Object(t.a)(this,n),(r=a.call(this,e)).onclick1=r.onclick1.bind(Object(o.a)(r)),r.state={kodeBarang:[],DataSupplier:[],kode_barang:"",keterangan:"INI KETERANGAN",kadar:"",P:"",K:"",bungkus:"",berat:"",harga:"",murni:"",ongkos:"",status:"",kadarCetak:"",kadarBeli:"",namaJenis:"",kodeJenis:""},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(k.b)("jenis/get/by-kode-kelompok/PERHIASAN").then((function(a){return e.setState({kodeBarang:a.data})})).catch((function(e){return console.log(e)})),Object(g.a)(this.props.change)}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto),this.props.change("noFaktur",this.props.noFaktur),this.props.change("gross",this.props.gross)}},{key:"pilihBarang",value:function(e){var a=(e||"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");this.setState({kodeJenis:a[0],namaJenis:a[1],kadarCetak:a[2],kadarBeli:a[3]})}},{key:"setKadar",value:function(){this.props.change("keterangan",this.state.namaJenis),this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli)}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 col-lg-12 d-none"},s.a.createElement(u.a,{name:"noFaktur",label:this.props.noFaktur,type:"text",readOnly:!0,component:h.a,defaultValue:this.props.noFaktur,normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-4 form-group"},s.a.createElement(u.a,{label:"Kode Barang",name:"kodeJenis",component:h.b,options:this.state.kodeBarang.map((function(e){return{value:e.kode_jenis+"|"+e.nama_jenis+"|"+e.kadar_cetak+"|"+e.kadar_beli,name:e.nama_jenis}})),onChange:function(a){return e.pilihBarang(a)},onBlur:this.setKadar(),placeholder:"Silahkan Pilih"})),s.a.createElement("div",{className:"col-md-8 form-group",style:"terima"===this.props.from?null:{visibility:"hidden"}},s.a.createElement(u.a,{name:"keterangan",label:"Keterangan",type:"text",component:h.a,normalize:function(e){return e&&e.toUpperCase()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"kadar",label:"Kadar (%)",type:"number",component:h.a,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"p",label:"P",type:"number",component:h.a})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"k",label:"K",type:"number",component:h.a})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"pkg",label:"Bungkus (Gr)",type:"number",component:h.a,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:h.a,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:h.a,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"gross",label:"Gross (Gr)",type:"number",component:h.a,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(u.a,{name:"netto",label:"Murni (Gr)",type:"number",component:h.a,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),s.a.createElement(u.a,Object.assign({name:"rp",component:"input",type:"tel",className:"form-control"},v))),s.a.createElement("div",{className:"col-md-12 form-group mt-3"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan")))))}}]),n}(c.Component);y=Object(p.a)({form:"TerimaSupplier",validate:d.a,enableReinitialize:!0})(y);var E=Object(m.a)("TerimaSupplier");a.default=Object(f.b)((function(e){var a=E(e,"bruto","kadarTransaksi","pkg"),n=a.bruto,t=a.kadarTransaksi,r=a.pkg;return{netto:(parseFloat(n)*(parseFloat(t)/100)).toFixed(3),gross:parseFloat(n)+parseFloat(r)}}))(y)}}]);
//# sourceMappingURL=17.7e1bc0d1.chunk.js.map