(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[138,174],{1162:function(e,a,t){"use strict";t.r(a);var l=t(77),n=t(71),r=t(72),c=t(74),s=t(73),i=t(0),o=t.n(i),m=t(180),d=t(178),u=t(111),p=t(45),g=t.n(p),h=t(27),b=t(468),E=t.n(b),f=t(471),v=t.n(f),N=t(470),k=t.n(N),y=t(496),O=t.n(y),S=t(174),j=t.n(S),x=t(4),C=t(464),F=f.Search.SearchBar,A=f.CSVExport.ExportCSVButton,w=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(l.a)({},e,a.target.value))}},r.pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:a[0],namaSupplier:a[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(u.d)()),g.a.get("http://147.139.182.75:3759/api/v1/suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(m.b)())}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("ol",{className:"breadcrumb mb-2"},o.a.createElement(x.b,{to:"/cetakUlangBukti"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},o.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),o.a.createElement("div",{className:"card"},o.a.createElement(C.default,{title:"Cetak Ulang Bayar Beli LM"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Awal"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggalAwal")})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"fas fa-exchange-alt"}))),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggalAkhir")})),o.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-left"})),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#primary-header-modal"},o.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),o.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?o.a.createElement(v.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},o.a.createElement("div",{className:"text-right"},o.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),o.a.createElement(E.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),o.a.createElement(A,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):o.a.createElement("div",null,this.props.error?o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:O.a,style:{width:"30%"},alt:"NOT RESPOND"}),o.a.createElement("br",null),o.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):o.a.createElement(j.a,{width:"100%",height:180}))))))))))}}]),t}(i.Component);a.default=Object(h.b)()(w)},464:function(e,a,t){"use strict";t.r(a);var l=t(71),n=t(72),r=t(74),c=t(73),s=t(0),i=t.n(s),o=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),t}(s.Component);a.default=o},496:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=138.a3a0e11b.chunk.js.map