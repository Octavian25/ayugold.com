(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[117],{1152:function(e,a,t){"use strict";t.r(a);var l=t(47),n=t(35),r=t(36),c=t(38),s=t(37),m=t(0),i=t.n(m),o=t(187),d=t(69),u=t(87),p=t(68),g=t.n(p),h=t(18),E=t(478),b=t.n(E),N=t(504),f=t.n(N),v=t(503),y=t.n(v),C=t(505),k=t.n(C),S=t(19),x=t.n(S),O=t(5),F=t(184),j=N.Search.SearchBar,A=N.CSVExport.ExportCSVButton,B=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(l.a)({},e,a.target.value))}},r.pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:a[0],namaSupplier:a[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(u.f)()),g.a.get("https://147.139.193.169:3759/api/v1/suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(o.b)())}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("ol",{className:"breadcrumb mb-2"},i.a.createElement(O.b,{to:"/cetakUlangBukti"},i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},i.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),i.a.createElement("div",{className:"card"},i.a.createElement(F.default,{title:"Cetak Ulang Bukti Setoran Customer"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Tanggal Awal"),i.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggalAwal")})),i.a.createElement("div",{className:"col-lg-4 col-md-4"},i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:"fas fa-exchange-alt"}))),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),i.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggalAkhir")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Nama Customer"),i.a.createElement("input",{type:"text",id:"namaCustomer",name:"namaCustomer",className:"form-control",onChange:this.inputChange("namaCustomer")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Nomor Bayar"),i.a.createElement("input",{type:"text",id:"noBayar",name:"noBayar",className:"form-control",onChange:this.inputChange("noBayar")})),i.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-left"})),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#primary-header-modal"},i.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),i.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?i.a.createElement(f.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return i.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},i.a.createElement("div",{className:"text-right"},i.a.createElement(j,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),i.a.createElement(b.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:y()()})),i.a.createElement(A,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):i.a.createElement("div",null,this.props.error?i.a.createElement("div",{className:"text-center"},i.a.createElement("img",{src:k.a,style:{width:"30%"},alt:"NOT RESPOND"}),i.a.createElement("br",null),i.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):i.a.createElement(x.a,{width:"100%",height:180}))))))))))}}]),t}(m.Component);a.default=Object(h.b)()(B)},505:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=117.57600325.chunk.js.map