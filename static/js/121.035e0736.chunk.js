(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[121],{1145:function(e,t,a){"use strict";a.r(t);var l=a(47),n=a(35),r=a(36),c=a(38),s=a(37),i=a(0),o=a.n(i),m=a(187),u=a(69),p=a(87),d=a(68),h=a.n(d),E=a(18),g=a(478),N=a.n(g),b=a(504),v=a.n(b),f=a(503),S=a.n(f),k=a(505),C=a.n(k),A=a(19),T=a.n(A),O=a(5),P=a(56),_=a(184),F=b.Search.SearchBar,x=b.CSVExport.ExportCSVButton,y=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7001/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,D=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).inputChange=function(e){return function(t){r.setState(Object(l.a)({},e,t.target.value))}},r.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return r.getDetails(t.noFaktur)}},o.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(p.f)()),h.a.get("https://147.139.193.169:3759/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),h.a.get(y+"spp/dc/tlkbyr/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier,statusValid:"VALID"}}).then((function(t){return e.setState({listPenerimaan:t.data})})).catch((function(){return Object(P.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("ol",{className:"breadcrumb mb-2"},o.a.createElement(O.b,{to:"/cetakUlangBukti"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},o.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),o.a.createElement("div",{className:"card"},o.a.createElement(_.default,{title:"Cetak Ulang Butki Tolakan Supplier"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Awal"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"fas fa-exchange-alt"}))),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),o.a.createElement("div",{className:"col-lg-4 col-md-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Supplier"),o.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},o.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return o.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),o.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Nomor Transaksi"),o.a.createElement("input",{type:"text",id:"noTransaksi",name:"noTransaksi",className:"form-control",onChange:this.inputChange("noTransaksi")})),o.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Nomor Bon"),o.a.createElement("input",{type:"text",id:"noBon",name:"noBon",className:"form-control",onChange:this.inputChange("noBon")})),o.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-left"})),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},o.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),o.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?o.a.createElement(v.a,{bootstrap4:!0,keyField:this.state.listPenerimaan,data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},o.a.createElement("div",{className:"text-right"},o.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),o.a.createElement(N.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:S()()})),o.a.createElement(x,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):o.a.createElement("div",null,this.props.error?o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:C.a,style:{width:"30%"},alt:"NOT RESPOND"}),o.a.createElement("br",null),o.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):o.a.createElement(T.a,{width:"100%",height:180}))))))))))}}]),a}(i.Component);t.default=Object(E.b)()(D)},505:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=121.035e0736.chunk.js.map