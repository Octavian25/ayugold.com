(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[134,176],{1160:function(e,a,t){"use strict";t.r(a);var l=t(77),n=t(71),r=t(72),c=t(74),s=t(73),o=t(0),i=t.n(o),m=t(180),d=t(178),u=t(110),p=t(56),h=t.n(p),g=t(28),E=t(464),b=t.n(E),f=t(467),N=t.n(f),v=t(466),y=t.n(v),k=t(492),C=t.n(k),x=t(173),O=t.n(x),S=t(5),j=t(461),F=f.Search.SearchBar,T=f.CSVExport.ExportCSVButton,A=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(l.a)({},e,a.target.value))}},r.pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:a[0],namaSupplier:a[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(u.d)()),h.a.get("https://147.139.193.169:3759/api/v1/suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(m.b)())}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("ol",{className:"breadcrumb mb-2"},i.a.createElement(S.b,{to:"/cetakUlangBukti"},i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},i.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),i.a.createElement("div",{className:"card"},i.a.createElement(j.default,{title:"Cetak Ulang Bukti Pembayaran Piutang Customer"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Tanggal Awal"),i.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggalAwal")})),i.a.createElement("div",{className:"col-lg-4 col-md-4"},i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:"fas fa-exchange-alt"}))),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),i.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggalAkhir")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Nama Toko"),i.a.createElement("input",{type:"text",id:"namaToko",name:"namaToko",className:"form-control",onChange:this.inputChange("namaToko")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Nomor Bayar"),i.a.createElement("input",{type:"text",id:"noBayar",name:"noBayar",className:"form-control",onChange:this.inputChange("noBayar")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Nomor Nota"),i.a.createElement("input",{type:"text",id:"noNota",name:"noNota",className:"form-control",onChange:this.inputChange("noNota")})),i.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-left"})),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#primary-header-modal"},i.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),i.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?i.a.createElement(N.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return i.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},i.a.createElement("div",{className:"text-right"},i.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),i.a.createElement(b.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:y()()})),i.a.createElement(T,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):i.a.createElement("div",null,this.props.error?i.a.createElement("div",{className:"text-center"},i.a.createElement("img",{src:C.a,style:{width:"30%"},alt:"NOT RESPOND"}),i.a.createElement("br",null),i.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):i.a.createElement(O.a,{width:"100%",height:180}))))))))))}}]),t}(o.Component);a.default=Object(g.b)()(A)},461:function(e,a,t){"use strict";t.r(a);var l=t(71),n=t(72),r=t(74),c=t(73),s=t(0),o=t.n(s),i=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),t}(s.Component);a.default=i},492:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=134.cfe0de1d.chunk.js.map