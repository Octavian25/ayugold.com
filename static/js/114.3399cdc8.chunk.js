(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[114],{1150:function(e,t,a){"use strict";a.r(t);var l=a(47),n=a(35),r=a(36),c=a(38),s=a(37),o=a(0),i=a.n(o),m=a(187),d=a(69),u=a(87),p=a(68),h=a.n(p),E=a(18),g=a(478),N=a.n(g),v=a(504),b=a.n(v),f=a(503),k=a.n(f),C=a(505),A=a.n(C),T=a(19),S=a.n(T),D=a(5),F=a(56),O=a(184),y=v.Search.SearchBar,_=v.CSVExport.ExportCSVButton,R=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://192.168.1.27:7001/api/v1/",REACT_APP_BACKEND_URLLOCAL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,x=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).inputChange=function(e){return function(t){r.setState(Object(l.a)({},e,t.target.value))}},r.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(u.f)()),h.a.get("http://192.168.1.27:7001/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(m.b)())}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),h.a.get(R+"cst/dc/rtr/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier}}).then((function(t){return e.setState({hasilDataGet:t.data})})).catch((function(){return Object(F.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("ol",{className:"breadcrumb mb-2"},i.a.createElement(D.b,{to:"/cetakUlangBukti"},i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},i.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),i.a.createElement("div",{className:"card"},i.a.createElement(O.default,{title:"Cetak Ulang Bukti Return"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Tanggal Awal"),i.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),i.a.createElement("div",{className:"col-lg-4 col-md-4"},i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:"fas fa-exchange-alt"}))),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),i.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Nomor Toko"),i.a.createElement("input",{type:"text",id:"namaToko",name:"namaToko",className:"form-control",onChange:this.inputChange("namaToko")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Nomor Return"),i.a.createElement("input",{type:"text",id:"noReturn",name:"noReturn",className:"form-control",onChange:this.inputChange("noReturn")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Sales"),i.a.createElement("select",{type:"text",id:"sales",name:"sales",className:"form-control",onChange:this.inputChange("sales")},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Kelompok"),i.a.createElement("select",{type:"text",id:"kelompok",name:"kelompok",className:"form-control",onChange:this.inputChange("kelompok")},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),i.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-left"})),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},i.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),i.a.createElement("div",{className:"col-lg-12"},this.state.hasilDataGet?i.a.createElement(b.a,{bootstrap4:!0,keyField:this.state.hasilDataGet,data:this.state.hasilDataGet,columns:this.state.columns,search:!0},(function(e){return i.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},i.a.createElement("div",{className:"text-right"},i.a.createElement(y,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),i.a.createElement(N.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),i.a.createElement(_,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):i.a.createElement("div",null,this.props.error?i.a.createElement("div",{className:"text-center"},i.a.createElement("img",{src:A.a,style:{width:"30%"},alt:"NOT RESPOND"}),i.a.createElement("br",null),i.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):i.a.createElement(S.a,{width:"100%",height:180}))))))))))}}]),a}(o.Component);t.default=Object(E.b)()(x)},505:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=114.3399cdc8.chunk.js.map