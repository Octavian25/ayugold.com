(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[98,174],{1152:function(e,t,a){"use strict";a.r(t);var n=a(77),l=a(71),r=a(72),i=a(74),o=a(73),s=a(0),c=a.n(s),m=a(180),u=a(178),d=a(110),p=a(46),g=a.n(p),h=a(28),E=a(468),v=a.n(E),f=a(471),b=a.n(f),N=a(470),k=a.n(N),x=a(496),S=a.n(x),A=a(173),C=a.n(A),O=a(5),y=a(174),T=a(497),j=a(465),F=f.Search.SearchBar,P=f.CSVExport.ExportCSVButton,D=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.182.75:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,B=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).inputChange=function(e){return function(t){r.setState(Object(n.a)({},e,t.target.value))}},r.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return r.getDetails(t.noFaktur)}},c.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[],listPenerimaan:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(d.d)()),g.a.get("https://147.139.182.75:3759/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"getDetails",value:function(e){var t=this;g.a.get(D+"item/dc/pindahbarang/detail?noFaktur="+e).then((function(e){return t.setLocal(e.data)})).catch((function(){return Object(y.c)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(e){localStorage.setItem("pindahBarang",JSON.stringify(e.barangDetails)),this.print(e.tanggal,e.kodeLokasiAsal,e.kodeLokasiTujuan,e.noBon)}},{key:"print",value:function(e,t,a,n){var l=[];JSON.parse(localStorage.getItem("pindahBarang")).forEach((function(e,t){var a=[t++,e.kodeJenis,e.bruto,e.kadarTransaksi,e.netto,e.pkg,e.gross,e.rp,e.qty];l.push(a)})),console.log(l);Object(T.a)("Tanggal",e,"Lokasi",t+" - "+a,"Nomor Bon",n,"","","ADMIN",e,"",["No","Kode Jenis","Bruto (Gr)","Harga (%)","Netto (Gr)","Pkg (Gr)","Gross (Gr)","Ongkos (Rp)","Qty"],"PINDAH BARANG",l)}},{key:"getData",value:function(){var e=this;g.a.get(D+"item/dc/pindahbarang/heads?",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,kodeLokasiFrom:this.state.asal,kodeLokasiTo:this.state.tujuan}}).then((function(t){return e.setState({listPenerimaan:t.data})})).catch((function(){return Object(y.c)("Sepertinya ada gangguan, tidak bisa mengambil data dari server")}))}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(O.b,{to:"/cetakUlangBukti"},c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),c.a.createElement("div",{className:"card"},c.a.createElement(j.default,{title:"Cetak Ulang Butki Pindah Barang"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal Awal"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"text-center"},c.a.createElement("i",{className:"fas fa-exchange-alt"}))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),c.a.createElement("div",{className:"col-lg-4 col-md-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Kelompok"),c.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return c.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Asal"),c.a.createElement("input",{type:"text",id:"asal",name:"asal",className:"form-control",onChange:this.inputChange("asal")})),c.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Tujuan"),c.a.createElement("input",{type:"text",id:"tujuan",name:"tujuan",className:"form-control",onChange:this.inputChange("tujuan")})),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-left"})),c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.getData()}},c.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),c.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?c.a.createElement(b.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},c.a.createElement("div",{className:"text-right"},c.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),c.a.createElement(v.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),c.a.createElement(P,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):c.a.createElement("div",null,this.props.error?c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:S.a,style:{width:"30%"},alt:"NOT RESPOND"}),c.a.createElement("br",null),c.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):c.a.createElement(C.a,{width:"100%",height:180}))))))))))}}]),a}(s.Component);t.default=Object(h.b)()(B)},465:function(e,t,a){"use strict";a.r(t);var n=a(71),l=a(72),r=a(74),i=a(73),o=a(0),s=a.n(o),c=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(o.Component);t.default=c},496:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"},497:function(e,t,a){"use strict";var n=a(501);a(502);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",m=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",u=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],p=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",g=arguments.length>13?arguments[13]:void 0,h=new n.default;h.autoTable(d,g,{startY:40});var E=h.lastAutoTable.finalY+10;h.text(p,14,15),h.setFontSize(10),h.text(e,14,25),h.text(":",37,25),h.text(t,40,25),h.text(a,120,25),h.text(":",141,25),h.text(l,145,25),h.text(r,14,30),h.text(":",37,30),h.text(i,40,30),h.text(o,120,30),h.text(":",141,30),h.text(s,145,30),h.text("User",160,E+10),h.text(":",168,E+10),h.text(c,170,E+10),h.text("Cetak",160,E+15),h.text(":",168,E+15),h.text(m,170,E+15),h.text("Valid",160,E+20),h.text(":",168,E+20),h.text(u,170,E+20);var v=h.output("datauristring"),f="<embed width='100%' height='100%' src='"+v+"'/>",b=window.open();b.document.open(),b.document.write(f),b.document.close()}}}]);
//# sourceMappingURL=98.fcbc8abb.chunk.js.map