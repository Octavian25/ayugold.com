(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[109],{1143:function(e,t,a){"use strict";a.r(t);var n=a(47),l=a(35),r=a(36),c=a(38),i=a(37),s=a(0),o=a.n(s),m=a(187),u=a(69),p=a(87),d=a(68),g=a.n(d),h=a(18),E=a(478),N=a.n(E),b=a(504),v=a.n(b),f=a(503),S=a.n(f),k=a(505),A=a.n(k),C=a(19),y=a.n(C),F=a(5),O=a(56),P=a(184),D=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7001/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,B=b.Search.SearchBar,T=b.CSVExport.ExportCSVButton,_=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).inputChange=function(e){return function(t){r.setState(Object(n.a)({},e,t.target.value))}},r.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"namaAktor",text:"Supplier"},{dataField:"noBon",text:"No Bon"},{dataField:"noFaktur",text:"No Bayar"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return r.getDetails(t.noFaktur)}},o.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(p.f)()),g.a.get("https://147.139.193.169:3759/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"getDetails",value:function(e){var t=this;g.a.get(D+"spp/dc/byr/detail?noFaktur="+e).then((function(e){return t.setLocal(e.data)})).catch((function(){return Object(O.c)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(e){localStorage.setItem("mutasiBarang",JSON.stringify(e.barangDetailList)),this.print(e.tanggal,e.noBon)}},{key:"getData",value:function(){var e=this;console.log("PENCARIAN...."),g.a.get(D+"spp/dc/byr/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,noFaktur:this.state.noFaktur,kodeSupplier:this.state.kodeSupplier,statusValid:"VALID"}}).then((function(t){return e.setState({listPenerimaan:t.data})})).catch((function(){return Object(O.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("ol",{className:"breadcrumb mb-2"},o.a.createElement(F.b,{to:"/cetakUlangBukti"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},o.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),o.a.createElement("div",{className:"card"},o.a.createElement(P.default,{title:"Cetak Ulang Butki Pembayaran Hutang Supplier"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Awal"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"fas fa-exchange-alt"}))),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),o.a.createElement("div",{className:"col-lg-4 col-md-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Supplier"),o.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},o.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return o.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),o.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Nomor Bayar"),o.a.createElement("input",{type:"text",id:"noBayar",name:"noBayar",className:"form-control",onChange:this.inputChange("noFaktur")})),o.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Nomor Nota"),o.a.createElement("input",{type:"text",id:"noNota",name:"noNota",className:"form-control",onChange:this.inputChange("noBon")})),o.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-left"})),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.getData()}},o.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),o.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?o.a.createElement(v.a,{bootstrap4:!0,keyField:this.state.listPenerimaan,data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},o.a.createElement("div",{className:"text-right"},o.a.createElement(B,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),o.a.createElement(N.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:S()()})),o.a.createElement(T,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):o.a.createElement("div",null,this.props.error?o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:A.a,style:{width:"30%"},alt:"NOT RESPOND"}),o.a.createElement("br",null),o.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):o.a.createElement(y.a,{width:"100%",height:180}))))))))))}}]),a}(s.Component);t.default=Object(h.b)()(_)},505:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=109.baf14692.chunk.js.map