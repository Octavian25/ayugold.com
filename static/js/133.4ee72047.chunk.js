(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[133],{1219:function(e,t,a){"use strict";a.r(t);var n=a(31),o=a(15),l=a(16),r=a(18),c=a(17),s=a(40),i=a.n(s),m=a(0),u=a.n(m),p=a(12),d=a(4),b=a(304),k=a(29),g=a(21),v=a(43),h=a(52),f=a(3),E=a(11),S=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={listSupplier:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(f.b)("subcategorys2?kodeKelompok=CIOK").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(){return Object(g.c)("Sepertinya koneksi bermasalah, mohon periksa koneksi anda")}))}},{key:"render",value:function(){return u.a.createElement("form",{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(h.a,{label:"Tanggal",name:"tanggal",component:E.a,type:"date"})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement("label",{htmlFor:""},"Kode Barang"),u.a.createElement(h.a,{label:"Kode Barang",name:"kodeKategori",component:"select",className:"form-control"},u.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return u.a.createElement("option",{value:e.kodeJenis,key:e.kodeKategori},e.namaJenis)})))),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(h.a,{label:"Netto",name:"netto",component:E.a,type:"number"})),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement(h.a,{label:"Bruto",name:"bruto",component:E.a,type:"number"})),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),a}(m.Component);S=Object(b.a)({form:"FormSaldoAwalCT",enableReinitialize:!0})(S);var N=Object(p.b)()(S),y=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(o.a)(this,a),(l=t.call(this,e)).handleChange=function(e){return function(t){l.setState(Object(n.a)({},e,t.target.value))}},l.state={tipeTransksi:"HUTANG",listSales:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(k.b)()),i.a.get("https://147.139.193.169:3759/api/v1/storages2?tipeData=SALES").then((function(t){return e.setState({listSales:t.data})})).catch((function(){return Object(g.c)("Mohon periksa koneksi anda")}))}},{key:"handlerSimpan",value:function(e){console.log(e);var t={kodeLokasi:"-",namaToko:"-",kodeSales:"-",kodeCustomer:"-",noBon:this.props.noFaktur,noFaktur:this.props.noFaktur,tanggal:e.tanggal,tipeTransaksi:"SALDO-AWAL-CK/RSK",footerDocument:{inputBy:this.props.username},footerItem:{totalP:0,totalK:0,totalpkg:0,totalNettoExt:0,totalBruto:e.bruto||0,totalNetto:e.netto||0,totalGross:0,totalQty:0,totalRp:0}};console.log(JSON.stringify(t));var a=JSON.parse(localStorage.getItem("SaldoAwalCT"))||[];a.push(t),localStorage.setItem("SaldoAwalCT",JSON.stringify(a))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"container-fluid"},u.a.createElement("ol",{className:"breadcrumb mb-2"},u.a.createElement(d.b,{to:"/saldoawal"},u.a.createElement("button",{type:"button",className:"btn btn-secondary"},u.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"card"},u.a.createElement(v.default,{title:"Saldo Awal Piutang Customer"}),u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"col-lg-12 mt-3"},u.a.createElement(N,{onSubmit:function(t){return e.handlerSimpan(t)}})))))))}}]),a}(m.Component);y=Object(b.a)({form:"SaldoAwalCT",enableReinitialize:!0})(y);t.default=Object(p.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username}}),null)(y)}}]);
//# sourceMappingURL=133.4ee72047.chunk.js.map