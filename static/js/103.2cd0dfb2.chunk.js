(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[103],{1148:function(e,a,t){"use strict";t.r(a);var l=t(47),n=t(35),r=t(36),c=t(38),o=t(37),s=t(0),m=t.n(s),i=t(187),d=t(69),u=t(87),p=t(67),h=t.n(p),g=t(18),E=t(478),N=t.n(E),v=t(480),b=t.n(v),f=t(479),C=t.n(f),k=t(505),S=t.n(k),A=t(19),T=t.n(A),O=t(5),y=t(56),D=t(184),F=v.Search.SearchBar,P=v.CSVExport.ExportCSVButton,_=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URLLOCAL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,x=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(l.a)({},e,a.target.value))}},r.pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:a[0],namaSupplier:a[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(u.f)()),h.a.get("http://192.168.1.27:7002/api/v1/suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(i.b)())}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),h.a.get(_+"cst/dc/pjl/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier}}).then((function(a){return e.setState({hasilDataGet:a.data})})).catch((function(){return Object(y.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container-fluid"},m.a.createElement("ol",{className:"breadcrumb mb-2"},m.a.createElement(O.b,{to:"/cetakUlangBukti"},m.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},m.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),m.a.createElement("div",{className:"card"},m.a.createElement(D.default,{title:"Cetak Ulang Butki Penjualan"}),m.a.createElement("div",{className:"card-body"},m.a.createElement("br",null),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-4 col-lg-4"},m.a.createElement("label",{htmlFor:""},"Tanggal Awal"),m.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),m.a.createElement("div",{className:"col-lg-4 col-md-4"},m.a.createElement("div",{className:"text-center"},m.a.createElement("i",{className:"fas fa-exchange-alt"}))),m.a.createElement("div",{className:"col-md-4 col-lg-4"},m.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),m.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),m.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},m.a.createElement("label",{htmlFor:""},"Nomor Toko"),m.a.createElement("input",{type:"text",id:"namaToko",name:"namaToko",className:"form-control",onChange:this.inputChange("namaToko")})),m.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},m.a.createElement("label",{htmlFor:""},"Sales"),m.a.createElement("input",{type:"text",id:"sales",name:"sales",className:"form-control",onChange:this.inputChange("sales")})),m.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},m.a.createElement("label",{htmlFor:""},"Nomor Penjualan"),m.a.createElement("input",{type:"text",id:"noPenjualan",name:"noPenjualan",className:"form-control",onChange:this.inputChange("noPenjualan")})),m.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},m.a.createElement("label",{htmlFor:""},"Nomor Nota"),m.a.createElement("input",{type:"text",id:"nomorNota",name:"nomorNota",className:"form-control",onChange:this.inputChange("nomorNota")})),m.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},m.a.createElement("label",{htmlFor:""},"Kelompok Barang"),m.a.createElement("select",{type:"text",id:"kelompokBarang",name:"kelompokBarang",className:"form-control",onChange:this.inputChange("kelompokBarang")},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),m.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"text-left"})),m.a.createElement("div",{className:"col-lg-6 col-md-6"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},m.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),m.a.createElement("div",{className:"col-lg-12"},this.state.hasilDataGet?m.a.createElement(b.a,{bootstrap4:!0,keyField:this.state.hasilDataGet,data:this.state.hasilDataGet,columns:this.state.columns,search:!0},(function(e){return m.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},m.a.createElement("div",{className:"text-right"},m.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),m.a.createElement(N.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:C()()})),m.a.createElement(P,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):m.a.createElement("div",null,this.props.error?m.a.createElement("div",{className:"text-center"},m.a.createElement("img",{src:S.a,style:{width:"30%"},alt:"NOT RESPOND"}),m.a.createElement("br",null),m.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):m.a.createElement(T.a,{width:"100%",height:180}))))))))))}}]),t}(s.Component);a.default=Object(g.b)()(x)},505:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=103.2cd0dfb2.chunk.js.map