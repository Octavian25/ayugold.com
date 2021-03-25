/*! For license information please see 79.151dc02f.chunk.js.LICENSE.txt */
(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[79],{1250:function(e,a,t){"use strict";t.r(a);var n=t(35),r=t(22),o=t(23),l=t(25),u=t(24),c=t(0),i=t.n(c),s=t(467),m=t(468),d=t(470),p=t(15),f=t(49),g=t.n(f),h=t(512),k=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,o=e.readOnly,l=e.meta,u=l.touched,c=l.error,s=l.warning;return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"",className:"text-black"},t),i.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),u&&(c&&i.a.createElement("p",{className:"invalid-feedback"},c)||s&&i.a.createElement("p",null,s)))},b=function(e){Object(l.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(r.a)(this,t),(o=a.call(this,e)).inputChange=function(e){return function(a){o.setState(Object(n.a)({},e,a.target.value))}},o.submit=function(){console.log(JSON.stringify(o.state))},o.handleChange=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");o.setState({kodeJenis:a[0],kadarCetak:a[1],kadarBeli:a[2],namaJenis:a[3]}),o.props.change("kadar",a[1]),o.props.change("kadarTransaksi",a[2]),o.props.change("keterangan",a[3])}},o.handleChangeTujuan=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");o.setState({kodeJenisTujuan:a[0],kadarCetakTujuan:a[1],kadarBeliTujuan:a[2],namaJenisTujuan:a[3]}),o.props.change("kadarTujuan",a[1]),o.props.change("kadarTransaksiTujuan",a[2]),o.props.change("keteranganTujuan",a[3])}},o.setNetto=function(e){o.props.change("netto","NaN"===o.props.netto?0:o.props.netto),o.props.change("nettoTujuan","NaN"===o.props.nettoTujuan?0:o.props.nettoTujuan)},o.setPkg=function(e){return function(e){o.props.change("pkgTujuan",e.target.value)}},o.setBruto=function(e){return function(e){o.props.change("brutoTujuan",e.target.value)}},o.state={listBarang:[],kode_asal:"",nama_asal:"",kadar_asal:"",pkg_asal:"",kotor_asal:"",harga_asal:"",murni_asal:"",kode_tujuan:"",nama_tujuan:"",kadar_tujuan:"",pkg_tujuan:"",kotor_tujuan:"",harga_tujuan:"",murni_tujuan:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://147.139.193.169:3759/api/v1/subcategorys2?kodeKelompok=PERHIASAN").then((function(a){return e.setState({listBarang:a.data})})).catch((function(e){return console.log("ERROR GET DATA")})),Object(h.a)(this.props.change)}},{key:"setKadar",value:function(){this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTujuan",this.state.kadarCetakTujuan),this.props.change("kadarTransaksi",this.state.kadarBeli),this.props.change("kadarTransaksiTujuan",this.state.kadarBeliTujuan),this.props.change("keterangan",this.state.namaJenis),this.props.change("keteranganTujuan",this.state.namaJenisTujuan)}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement("label",{htmlFor:""},"Kode Asal"),i.a.createElement(s.a,{name:"kodeBarang",component:"select",className:"form-control",onChange:this.handleChange(),onBlur:function(){return e.setKadar()}},i.a.createElement("option",{value:"DEFAULT|DEFAULT|DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listBarang.map((function(e){return i.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarJual+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement(s.a,{name:"keterangan",label:"Keterangan",component:k,type:"text"})),i.a.createElement("div",{className:"col-md-4 col-lg-4"}),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"kadar",label:"Kadar (%)",component:k,type:"text"})),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"pkg",label:"Pkg (Gr)",component:k,type:"text",onBlur:function(){return e.setNetto()},onChange:this.setPkg()})),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"bruto",label:"Bruto (Gr)",component:k,type:"text",onBlur:function(){return e.setNetto()},onChange:this.setBruto()})),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"kadarTransaksi",label:"Harga (Gr)",component:k,type:"text",readOnly:!0})),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"netto",label:"Netto (Gr)",component:k,type:"text"})),i.a.createElement("div",{className:"col-lg-12 col-md-12 text-center mt-2 mb-2"},i.a.createElement("div",{style:{transform:"rotate(90deg)",fontSize:24}},i.a.createElement("i",{className:"fa fa-exchange-alt"}))),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement("label",{htmlFor:""},"Kode Tujuan"),i.a.createElement(s.a,{name:"kodeBarangTujuan",component:"select",className:"form-control",onChange:this.handleChangeTujuan(),onBlur:function(){return e.setKadar()}},i.a.createElement("option",{value:"DEFAULT|DEFAULT|DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listBarang.map((function(e){return i.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarBeli+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement(s.a,{name:"keteranganTujuan",label:"Keterangan",component:k,type:"text",readOnly:!0})),i.a.createElement("div",{className:"col-md-4 col-lg-4"}),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"kadarTujuan",label:"Kadar (%)",component:k,type:"text",readOnly:!0})),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"pkgTujuan",label:"Pkg (Gr)",component:k,type:"text",onBlur:function(){return e.setNetto()},readOnly:!0})),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"brutoTujuan",label:"Bruto (Gr)",component:k,type:"text",onBlur:function(){return e.setNetto()},readOnly:!0})),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"kadarTransaksiTujuan",label:"Harga (Gr)",component:k,type:"text",onBlur:this.setNetto(),onChange:function(){return e.setNetto()}})),i.a.createElement("div",{className:"col-md-3 mt-1"},i.a.createElement(s.a,{name:"nettoTujuan",label:"Netto (Gr)",component:k,type:"text",readOnly:!0})),i.a.createElement("div",{className:"col-lg-12 col-md-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",onClick:this.submit},"Simpan")))))}}]),t}(c.Component);b=Object(m.a)({form:"FormMutasiBarang",enableReinitialize:!0,validate:function(e){var a={};return e.kadarTransaksiTujuan||(a.kadarTransaksiTujuan="Tidak Boleh kosong"),e.kodeBarangTujuan||(a.kodeBarangTujuan="Tidak Boleh kosong"),e.pkg||(a.pkg="Tidak Boleh kosong"),e.bruto||(a.bruto="Tidak Boleh kosong"),a}})(b);var v=Object(d.a)("FormMutasiBarang");a.default=Object(p.b)((function(e){var a=v(e,"bruto","kadarTransaksi","kadarTransaksiTujuan"),t=a.bruto,n=a.kadarTransaksi,r=a.kadarTransaksiTujuan;return{netto:(parseFloat(t)*(parseFloat(n)/100)).toFixed(3),nettoTujuan:(parseFloat(t)*(parseFloat(r)/100)).toFixed(3)}}))(b)},510:function(e,a,t){"use strict";t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return l})),t.d(a,"d",(function(){return u})),t.d(a,"h",(function(){return c})),t.d(a,"e",(function(){return i})),t.d(a,"f",(function(){return s})),t.d(a,"g",(function(){return m}));var n=function(e,a){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,a){e.__proto__=a}||function(e,a){for(var t in a)a.hasOwnProperty(t)&&(e[t]=a[t])})(e,a)};function r(e,a){function t(){this.constructor=e}n(e,a),e.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}var o=function(){return(o=Object.assign||function(e){for(var a,t=1,n=arguments.length;t<n;t++)for(var r in a=arguments[t])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)};function l(e,a,t,n){return new(t||(t=Promise))((function(r,o){function l(e){try{c(n.next(e))}catch(a){o(a)}}function u(e){try{c(n.throw(e))}catch(a){o(a)}}function c(e){var a;e.done?r(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(l,u)}c((n=n.apply(e,a||[])).next())}))}function u(e,a){var t,n,r,o,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(r=(r=l.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){l=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){l.label=o[1];break}if(6===o[0]&&l.label<r[1]){l.label=r[1],r=o;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(o);break}r[2]&&l.ops.pop(),l.trys.pop();continue}o=a.call(e,l)}catch(u){o=[6,u],n=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function c(e){var a="function"===typeof Symbol&&Symbol.iterator,t=a&&e[a],n=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(a?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(e,a){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,r,o=t.call(e),l=[];try{for(;(void 0===a||a-- >0)&&!(n=o.next()).done;)l.push(n.value)}catch(u){r={error:u}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return l}function s(){for(var e=[],a=0;a<arguments.length;a++)e=e.concat(i(arguments[a]));return e}function m(){for(var e=0,a=0,t=arguments.length;a<t;a++)e+=arguments[a].length;var n=Array(e),r=0;for(a=0;a<t;a++)for(var o=arguments[a],l=0,u=o.length;l<u;l++,r++)n[r]=o[l];return n}},512:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"c",(function(){return u})),t.d(a,"b",(function(){return c}));var n=t(535).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),r=localStorage.getItem("namaTimbangan"),o=localStorage.getItem("enableTimbangan"),l=function(e){o?n.database().ref(r).on("value",(function(a){var t=a.val();e("bruto",t.nilai),console.log(t.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},u=function(e){o?n.database().ref(r).on("value",(function(a){var t=a.val();e("jumlah",t.nilai),console.log(t.nilai);var n=Object.keys(t).map((function(e){return t[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")},c=function(e){o?n.database().ref(r).on("value",(function(a){var t=a.val();e("gross",t.nilai),console.log(t.nilai);var n=Object.keys(t).map((function(e){return t[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")}}}]);
//# sourceMappingURL=79.151dc02f.chunk.js.map