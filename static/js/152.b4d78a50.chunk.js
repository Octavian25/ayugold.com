(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[152],{1130:function(e,a,t){"use strict";t.r(a);var n=t(71),o=t(72),r=t(74),l=t(73),s=t(56),c=t.n(s),i=t(0),m=t.n(i),u=t(28),p=t(462),g=t(455),d=t(463),b=t(494),h=t(503),k=Object(b.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),f=function(e){var a=e.input,t=e.label,n=e.type,o=e.limit,r=e.readOnly,l=e.meta,s=l.touched,c=l.error,i=l.warning;return m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"",className:"text-black"},t),m.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",maxLength:o,readOnly:r})),s&&(c&&m.a.createElement("p",{className:"invalid-feedback"},c)||i&&m.a.createElement("p",null,i)))},v="https://147.139.193.169:3759/api/v1/",E=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).handleChange=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");o.setState({kodeJenis:a[0],kadarCetak:a[1],kadarJual:a[2]}),o.props.change("kadarTransaksi",a[2]),o.props.change("keterangan",a[3])}},o.state={listBarang:[],listBarangPerhiasan:[]},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;c.a.get(v+"subcategorys2?kodeKelompok=CIOK").then((function(a){return e.setState({listBarang:a.data})})).catch((function(e){return console.log(e)})),c.a.get(v+"subcategorys2?kodeKelompok=PERHIASAN").then((function(a){return e.setState({listBarangPerhiasan:a.data})})).catch((function(e){return console.log(e)})),Object(h.b)(this.props.change)}},{key:"setNetto",value:function(){this.props.change("netto","NaN"===this.props.netto?0:this.props.netto)}},{key:"render",value:function(){var e=this;return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3"},m.a.createElement("label",{htmlFor:""},"Kode barang"),m.a.createElement(p.a,{name:"kodeBarang",className:"form-control",component:"select",onChange:this.handleChange()},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),"RONGSOK"===this.props.jenisBarang?this.state.listBarang.map((function(e){return m.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarJual+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})):this.state.listBarangPerhiasan.map((function(e){return m.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarJual+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})))),m.a.createElement("div",{className:"col-lg-6"},m.a.createElement(p.a,{name:"keterangan",label:"Keterangan",type:"text",component:f,readOnly:!0})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"kadarTransaksi",label:"Kadar(%)",type:"text",component:f,readOnly:!0,onChange:this.setNetto()})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"gross",label:"Gross(Gr)",type:"text",component:f,onChange:this.setNetto()})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"pkg",label:"Package(Gr)",type:"text",component:f,onChange:this.setNetto()})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"netto",label:"Netto",type:"text",component:f,readOnly:!0})),m.a.createElement("div",{className:"col-lg-3 d-none"},m.a.createElement(p.a,{name:"noFaktur",label:"Netto",type:"text",component:f,readOnly:!0,onLoad:function(){return e.props.change("noFaktur",e.props.noFaktur)}})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),m.a.createElement(p.a,Object.assign({name:"rp",type:"telp",className:"form-control",component:"input"},k))),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))}}]),t}(i.Component);E=Object(g.a)({form:"FormModalTimbangan",enableReinitialize:!0})(E);var N=Object(d.a)("FormModalTimbangan");a.default=Object(u.b)((function(e){var a=N(e,"gross","kadarTransaksi","pkg"),t=a.gross,n=a.kadarTransaksi,o=a.pkg;return{netto:(parseFloat(t||0)-parseFloat(o||0)*(parseFloat(n)/100)).toFixed(3)}}))(E)},503:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"c",(function(){return s})),t.d(a,"b",(function(){return c}));var n=t(524).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),o=localStorage.getItem("namaTimbangan"),r=localStorage.getItem("enableTimbangan"),l=function(e){r?n.database().ref(o).on("value",(function(a){var t=a.val();e("bruto",t.nilai),console.log(t.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},s=function(e){r?n.database().ref(o).on("value",(function(a){var t=a.val();e("jumlah",t.nilai),console.log(t.nilai);var n=Object.keys(t).map((function(e){return t[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")},c=function(e){r?n.database().ref(o).on("value",(function(a){var t=a.val();e("gross",t.nilai),console.log(t.nilai);var n=Object.keys(t).map((function(e){return t[e]}));console.log(n)})):console.log("TIMBANGAN TIDAK AKTIF")}}}]);
//# sourceMappingURL=152.b4d78a50.chunk.js.map