(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[24],{744:function(e,a,t){"use strict";t.r(a);var n=t(35),l=t(36),o=t(38),c=t(37),r=t(68),m=t.n(r),s=t(0),i=t.n(s),p=t(18),u=t(467),d=t(468),g=t(185),b=t(11),h=t(46),E=t(56),v=t(190),N=t(22),f=Object(g.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),k=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:a[0],namaSupplier:a[1]}),localStorage.setItem("namaSupplier",a[0]),localStorage.setItem("kodeSupplier",a[1])}},l.state={listSupplier:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://192.168.1.27:7001/api/v1/customers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return Object(E.c)("Mohon periksa koneksi anda")})),this.props.dispatch(Object(b.o)("TransaksiPenjualanLM")),this.props.change("totalNW",this.props.sumNetto),this.props.change("tanggal_invoice",v.b),this.props.change("tanggalBarang",v.b)}},{key:"setCustomer",value:function(e){var a=(e||"DEFAULT|DEFAULT").split("|");this.props.change("kodeCustomer",a[0]),this.props.change("namaToko",a[1])}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4 col-md-4"},i.a.createElement(u.a,{label:"Customer",name:"customer",id:"kodeCustomer",className:"form-control",component:N.b,onChange:function(a){return e.setCustomer(a)},options:this.state.listSupplier.map((function(e){return{value:e.kodeCustomer+"|"+e.namaToko,name:e.namaToko}}))})),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Tanggal invoice",name:"tanggal_invoice",component:N.a})),i.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},i.a.createElement(u.a,{type:"text",label:"Tanggal invoice",name:"kodeCustomer",component:N.a})),i.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},i.a.createElement(u.a,{type:"text",label:"Tanggal invoice",name:"namaToko",component:N.a})),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Tanggal Barang",name:"tanggalBarang",component:N.a})),i.a.createElement("div",{className:"col-md-3 col-lg-3 mt-3"},i.a.createElement(u.a,{type:"text",label:"Keterangan",name:"keterangan",component:N.a})),i.a.createElement("div",{className:"col-md-3 col-lg-3 mt-3"},i.a.createElement(u.a,{type:"text",label:"Nomor bon",name:"noBon",component:N.a})),i.a.createElement("div",{className:"col-md-3 col-lg-3 mt-3"},i.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),i.a.createElement(u.a,Object.assign({type:"telp",label:"Ongkos (Rp)",name:"ongkos",className:"form-control",component:"input"},f))),i.a.createElement("div",{className:"col-lg-3 mt-3"},i.a.createElement("label",{htmlFor:""},"Total NW Ext"),i.a.createElement(u.a,{type:"number",label:"Total NW Ext",name:"totalNW",className:"form-control",component:"input",onBlur:this.props.change("totalNW",this.props.sumNetto)})),i.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-left"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend,"data-tut":"reactour_3"},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",i.a.createElement("i",{className:"fa fa-paper-plane  ml-3"})))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.props.dispatch(Object(h.j)())},"data-tut":"reactour_1"},"Tambah Data",i.a.createElement("i",{className:"fa fa-plus ml-3"})))))))))}}]),t}(s.Component);k=Object(d.a)({form:"FormHeadPenjualanLM",enableReinitialize:!0})(k),a.default=Object(p.b)((function(e){return{sumNetto:e.perhitungan.sumNetto}}),null)(k)}}]);
//# sourceMappingURL=24.7bb75ba6.chunk.js.map