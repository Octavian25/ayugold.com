(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[19],{469:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return c}));var n=t(0),l=t.n(n),r=t(179),o=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,o=e.readOnly,c=e.meta,s=c.touched,m=c.error,i=c.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},t),l.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",maxLength:r,readOnly:o,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),s&&(m&&l.a.createElement("p",{className:"invalid-feedback"},m)||i&&l.a.createElement("p",null,i)))},c=function(e){var a=e.input,t=e.label,n=e.options,o=(e.placeholder,e.disabled),c=(e.value,e.meta),s=c.touched,m=c.error,i=c.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},t),l.a.createElement(r.a,Object.assign({},a,{options:n,search:!0,emptyMessage:"Tidak Ada Data",placeholder:"Silahkan Pilih",disabled:o,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),s&&(m&&l.a.createElement("p",{className:"invalid-feedback"},m)||i&&l.a.createElement("p",null,i)))}},518:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n=function(){return(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)}},736:function(e,a,t){"use strict";t.r(a);var n=t(71),l=t(72),r=t(74),o=t(73),c=t(45),s=t.n(c),m=t(0),i=t.n(m),p=t(27),u=t(465),d=t(458),g=t(498),b=t(23),h=t(35),E=t(466),v=t(518),f=t(469),N=Object(g.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),k=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:a[0],namaSupplier:a[1]}),localStorage.setItem("namaSupplier",a[0]),localStorage.setItem("kodeSupplier",a[1])}},l.state={listSupplier:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.get("http://147.139.182.75:3759/api/v1/customers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return Object(E.c)("Mohon periksa koneksi anda")})),this.props.dispatch(Object(b.o)("TransaksiPenjualanLM")),this.props.change("totalNW",this.props.sumNetto),this.props.change("tanggal_invoice",v.a),this.props.change("tanggalBarang",v.a)}},{key:"setCustomer",value:function(e){var a=(e||"DEFAULT|DEFAULT").split("|");this.props.change("kodeCustomer",a[0]),this.props.change("namaToko",a[1])}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4 col-md-4"},i.a.createElement(u.a,{label:"Customer",name:"customer",id:"kodeCustomer",className:"form-control",component:f.b,onChange:function(a){return e.setCustomer(a)},options:this.state.listSupplier.map((function(e){return{value:e.kodeCustomer+"|"+e.namaToko,name:e.namaToko}}))})),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Tanggal invoice",name:"tanggal_invoice",component:f.a})),i.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},i.a.createElement(u.a,{type:"text",label:"Tanggal invoice",name:"kodeCustomer",component:f.a})),i.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},i.a.createElement(u.a,{type:"text",label:"Tanggal invoice",name:"namaToko",component:f.a})),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Tanggal Barang",name:"tanggalBarang",component:f.a})),i.a.createElement("div",{className:"col-md-3 col-lg-3 mt-3"},i.a.createElement(u.a,{type:"text",label:"Keterangan",name:"keterangan",component:f.a})),i.a.createElement("div",{className:"col-md-3 col-lg-3 mt-3"},i.a.createElement(u.a,{type:"text",label:"Nomor bon",name:"noBon",component:f.a})),i.a.createElement("div",{className:"col-md-3 col-lg-3 mt-3"},i.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),i.a.createElement(u.a,Object.assign({type:"telp",label:"Ongkos (Rp)",name:"ongkos",className:"form-control",component:"input"},N))),i.a.createElement("div",{className:"col-lg-3 mt-3"},i.a.createElement("label",{htmlFor:""},"Total NW Ext"),i.a.createElement(u.a,{type:"number",label:"Total NW Ext",name:"totalNW",className:"form-control",component:"input",onBlur:this.props.change("totalNW",this.props.sumNetto)})),i.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-left"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend,"data-tut":"reactour_3"},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",i.a.createElement("i",{className:"fa fa-paper-plane  ml-3"})))),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.props.dispatch(Object(h.j)())},"data-tut":"reactour_1"},"Tambah Data",i.a.createElement("i",{className:"fa fa-plus ml-3"})))))))))}}]),t}(m.Component);k=Object(d.a)({form:"FormHeadPenjualanLM",enableReinitialize:!0})(k),a.default=Object(p.b)((function(e){return{sumNetto:e.perhitungan.sumNetto}}),null)(k)}}]);
//# sourceMappingURL=19.57d1fada.chunk.js.map