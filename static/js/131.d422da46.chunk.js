(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[131,174],{1155:function(e,t,a){"use strict";a.r(t);var l=a(77),n=a(71),r=a(72),c=a(74),o=a(73),s=a(0),i=a.n(s),m=a(180),u=a(178),d=a(110),p=a(46),h=a.n(p),g=a(28),E=a(468),b=a.n(E),f=a(471),N=a.n(f),v=a(470),k=a.n(v),C=a(496),T=a.n(C),S=a(173),A=a.n(S),O=a(5),y=a(174),D=a(465),F=f.Search.SearchBar,R=f.CSVExport.ExportCSVButton,x=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://ayu-grosir-api.herokuapp.com/api/v1/",REACT_APP_BACKEND_URL_WEB:"http://147.139.182.75:3759/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,_=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).inputChange=function(e){return function(t){r.setState(Object(l.a)({},e,t.target.value))}},r.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(d.d)()),h.a.get("https://ayu-grosir-api.herokuapp.com/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),h.a.get(x+"cst/dc/rtr/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier}}).then((function(t){return e.setState({hasilDataGet:t.data})})).catch((function(){return Object(y.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container-fluid"},i.a.createElement("ol",{className:"breadcrumb mb-2"},i.a.createElement(O.b,{to:"/cetakUlangBukti"},i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},i.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),i.a.createElement("div",{className:"card"},i.a.createElement(D.default,{title:"Cetak Ulang Bukti Return"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("br",null),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Tanggal Awal"),i.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),i.a.createElement("div",{className:"col-lg-4 col-md-4"},i.a.createElement("div",{className:"text-center"},i.a.createElement("i",{className:"fas fa-exchange-alt"}))),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),i.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Nomor Toko"),i.a.createElement("input",{type:"text",id:"namaToko",name:"namaToko",className:"form-control",onChange:this.inputChange("namaToko")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Nomor Return"),i.a.createElement("input",{type:"text",id:"noReturn",name:"noReturn",className:"form-control",onChange:this.inputChange("noReturn")})),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Sales"),i.a.createElement("select",{type:"text",id:"sales",name:"sales",className:"form-control",onChange:this.inputChange("sales")},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),i.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},i.a.createElement("label",{htmlFor:""},"Kelompok"),i.a.createElement("select",{type:"text",id:"kelompok",name:"kelompok",className:"form-control",onChange:this.inputChange("kelompok")},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),i.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-left"})),i.a.createElement("div",{className:"col-lg-6 col-md-6"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},i.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),i.a.createElement("div",{className:"col-lg-12"},this.state.hasilDataGet?i.a.createElement(N.a,{bootstrap4:!0,keyField:this.state.hasilDataGet,data:this.state.hasilDataGet,columns:this.state.columns,search:!0},(function(e){return i.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},i.a.createElement("div",{className:"text-right"},i.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),i.a.createElement(b.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),i.a.createElement(R,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):i.a.createElement("div",null,this.props.error?i.a.createElement("div",{className:"text-center"},i.a.createElement("img",{src:T.a,style:{width:"30%"},alt:"NOT RESPOND"}),i.a.createElement("br",null),i.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):i.a.createElement(A.a,{width:"100%",height:180}))))))))))}}]),a}(s.Component);t.default=Object(g.b)()(_)},465:function(e,t,a){"use strict";a.r(t);var l=a(71),n=a(72),r=a(74),c=a(73),o=a(0),s=a.n(o),i=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(o.Component);t.default=i},496:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=131.d422da46.chunk.js.map