(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[117],{1148:function(e,a,t){"use strict";t.r(a);var l=t(31),n=t(15),r=t(16),c=t(18),s=t(17),i=t(0),m=t.n(i),o=t(196),d=t(29),u=t(94),p=t(40),g=t.n(p),h=t(12),E=t(481),b=t.n(E),v=t(507),N=t.n(v),f=t(506),k=t.n(f),y=t(508),S=t.n(y),x=t(14),F=t.n(x),A=t(4),C=t(43),O=v.Search.SearchBar,j=v.CSVExport.ExportCSVButton,w=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(l.a)({},e,a.target.value))}},r.pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:a[0],namaSupplier:a[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(u.f)()),g.a.get("http://192.168.1.27:7002/api/v1/suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(o.b)())}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container-fluid"},m.a.createElement("ol",{className:"breadcrumb mb-2"},m.a.createElement(A.b,{to:"/cetakUlangBukti"},m.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},m.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),m.a.createElement("div",{className:"card"},m.a.createElement(C.default,{title:"Cetak Ulang Bukti Saldo Awal"}),m.a.createElement("div",{className:"card-body"},m.a.createElement("br",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-4 col-lg-4"},m.a.createElement("label",{htmlFor:""},"Tanggal Awal"),m.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggalAwal")})),m.a.createElement("div",{className:"col-lg-4 col-md-4"},m.a.createElement("div",{className:"text-center"},m.a.createElement("i",{className:"fas fa-exchange-alt"}))),m.a.createElement("div",{className:"col-md-4 col-lg-4"},m.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),m.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggalAkhir")})),m.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},m.a.createElement("label",{htmlFor:""},"Lokasi"),m.a.createElement("select",{type:"text",id:"lokasi",name:"lokasi",className:"form-control",onChange:this.inputChange("lokasi")},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),m.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"text-left"})),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#primary-header-modal"},m.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),m.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?m.a.createElement(N.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return m.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},m.a.createElement("div",{className:"text-right"},m.a.createElement(O,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),m.a.createElement(b.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),m.a.createElement(j,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):m.a.createElement("div",null,this.props.error?m.a.createElement("div",{className:"text-center"},m.a.createElement("img",{src:S.a,style:{width:"30%"},alt:"NOT RESPOND"}),m.a.createElement("br",null),m.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):m.a.createElement(F.a,{width:"100%",height:180}))))))))))}}]),t}(i.Component);a.default=Object(h.b)()(w)},508:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=117.a1c24ed8.chunk.js.map