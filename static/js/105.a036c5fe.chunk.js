(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[105,176],{1172:function(t,a,e){"use strict";e.r(a);var n=e(77),r=e(71),o=e(72),i=e(74),s=e(73),l=e(0),c=e.n(l),u=e(464),m=e.n(u),d=e(467),p=e.n(d),h=e(466),g=e.n(h),b=e(178),k=e(28),f=e(19),v=e.n(f),E=e(289),S=e(16),T=e(155),N=e(56),y=e.n(N),O=e(493),F=e(461),x=e(173),j=e.n(x),A=e(36),B=Object(l.lazy)((function(){return Promise.all([e.e(4),e.e(116),e.e(152)]).then(e.bind(null,1130))})),C=Object(l.lazy)((function(){return Promise.all([e.e(2),e.e(6)]).then(e.bind(null,495))})),L=d.Search.SearchBar,P=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,R=function(t){Object(i.a)(e,t);var a=Object(s.a)(e);function e(t){var o;return Object(r.a)(this,e),(o=a.call(this,t)).changeInput=function(t){return function(a){o.setState(Object(n.a)({},t,a.target.value))}},o.state={jenisBarang:"RONGSOK",listLokasi:[],columns:[{dataField:"kodeJenis",text:"Kode",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarCetak",text:"Kadar",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"gross",text:"Gross (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"pkg",text:"Pkg (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"bruto",text:"Berat (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarTransaksi",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"netto",text:"Netto (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"rp",text:"Ongkos (Rp)",sort:!0,headerStyle:function(){return{width:"25%"}}}],data:[{tanggal:"2020-11-10"}]},o}return Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.props.dispatch(Object(T.d)()),this.props.dispatch(Object(b.b)()),this.props.dispatch(Object(S.l)("totalanTimbangan")),this.props.dispatch(Object(S.o)("totalanTimbangan")),this.props.dispatch(Object(S.q)("totalanTimbangan")),this.props.dispatch(Object(S.m)("totalanTimbangan")),this.props.dispatch(Object(S.s)("totalanTimbangan")),this.props.dispatch(Object(S.r)("totalanTimbangan")),y.a.get("https://147.139.193.169:3759/api/v1/storages2?tipeData=LOKASI").then((function(a){return t.setState({listLokasi:a.data})})).catch((function(t){return console.log(t)}))}},{key:"handleSubmit",value:function(t){var a=(t.kodeBarang?t.kodeBarang:"DEFAULT|DEFUALT|DEFAULT|DEFAULT").split("|"),e={nettoDiscGlobalExt:0,gross:parseFloat(t.gross),kodeJenis:a[0],pkg:parseFloat(t.pkg),noBarcode:"-",qty:1,k:0,kadarCetak:a[1],kodeKategori:"-",p:0,nettoDiscGlobal:0,discGlobalPr:0,discGlobalGr:0,kadarTransaksi:parseFloat(t.kadarTransaksi),noFaktur:t.noFaktur,bruto:parseFloat(t.gross)-parseFloat(t.pkg),netto:parseFloat(t.netto),rp:parseFloat(t.rp),keterangan:t.keterangan},n=JSON.parse(localStorage.getItem("totalanTimbangan"))||[];n.push(e),localStorage.setItem("totalanTimbangan",JSON.stringify(n)),v.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}),this.props.dispatch(Object(E.a)("FormModalTimbangan")),this.props.dispatch(Object(T.d)())}},{key:"simpanTotalanTimbang",value:function(){var t=this;if(void 0===this.state.tanggal)return v.a.fire({position:"top-end",icon:"error",text:"Silahkan Isi Tanggal",showConfirmButton:!1,timer:1500}),!1;if(void 0===this.state.lokasi)return v.a.fire({position:"top-end",icon:"error",text:"Silahkan Isi Lokasi",showConfirmButton:!1,timer:1500}),!1;if(null===localStorage.getItem("totalanTimbangan"))return v.a.fire({position:"top-end",icon:"error",text:"Data Masih Kosong, Silahkan tambah data",showConfirmButton:!1,timer:1500}),!1;var a={tipeFaktur:this.state.jenisBarang,noFaktur:this.props.noFaktur,noBon:this.props.noFaktur,tanggal:this.state.tanggal,noValid:"-",kodeLokasi:this.state.kodeLokasi,barangDetails:JSON.parse(localStorage.getItem("totalanTimbangan")),footerItem:{totalP:0,totalGross:this.props.sumGross,totalpkg:this.props.sumPkg,totalQty:this.props.sumQty,totalK:0,totalRp:this.props.sumRp,totalBruto:this.props.sumBruto,totalNetto:this.props.sumNetto,totalNettoExt:0}};this.props.dispatch(Object(S.t)());var e=[];(JSON.parse(localStorage.getItem("totalanTimbangan"))||[]).forEach((function(t,a){var n=[a++,t.kodeJenis,t.gross,t.pkg,t.bruto,t.kadarTransaksi,t.netto,t.rp];e.push(n)})),console.log(e);var n=["No","Kode Barang","Gross (Gr)","Pkg (Gr)","Bruto (Gr)","Harga (%)","Netto (Gr)","Ongkos (Rp)"];y.a.post(P+"item/dc/totalantimbang",a).then((function(){return v.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}).then((function(){return t.props.dispatch(Object(S.k)())})).then((function(){return Object(O.a)("Tanggal",t.state.tanggal,"Lokasi",t.state.tanggal,"No Timbang",t.props.noFaktur,"","","","","",n,"STOCK OPNAME TIMBANG SALES",e)})).then((function(){return localStorage.removeItem("totalanTimbangan")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(b.b)())})).then((function(){return t.props.dispatch(Object(T.d)())})).then((function(){return t.setState({tanggal:"",lokasi:""})}))})).catch((function(t){return v.a.fire({position:"top-right",icon:"error",text:"Sepertinya ada kesalahan di server, mohon periksa koneksi dan ulangi transaksi",timer:1500,showConfirmButton:!1}).then((function(){return console.log(t)}))}))}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement(F.default,{title:"Totalan Timbangan"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 mb-3"},c.a.createElement("label",{htmlFor:""},"Jenis Barang"),c.a.createElement("select",{name:"jenisBarang",id:"JenisBarang",className:"form-control",onChange:function(a){return t.setState({jenisBarang:a.target.value})}},c.a.createElement("option",{value:"RONGSOK",key:"RONGSOK"},"RONGSOK"),c.a.createElement("option",{value:"PERHIASAN",key:"PERHIASAN"},"PERHIASAN"))),c.a.createElement("div",{className:"col-lg-8 mb-3"}),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",name:"tanggal",label:"tanggal",className:"form-control",onChange:this.changeInput("tanggal")}))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Lokasi"),c.a.createElement("select",{name:"lokasi",label:"lokasi",className:"form-control",onChange:this.changeInput("lokasi")},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listLokasi.map((function(t){return c.a.createElement("option",{value:t.kodeLokasi,key:t.kodeLokasi},t.namaLokasi)}))))),c.a.createElement("div",{className:"col-lg-12 mt-3 mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return t.simpanTotalanTimbang()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.props.dispatch(Object(A.j)())}},"Tambah Data",c.a.createElement("i",{className:"fa fa-plus ml-3"})))))),c.a.createElement("div",{className:"col-lg-12"},this.props.totalanTimbangan?c.a.createElement(p.a,{keyField:"kodeKelompok",data:this.props.totalanTimbangan,columns:this.state.columns,search:!0},(function(t){return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"text-right mt-5 mb-3"},c.a.createElement(L,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),c.a.createElement(m.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:g()()})))})):c.a.createElement(m.a,{keyField:"kodeKelompok",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"}))))),c.a.createElement(C,{content:c.a.createElement(l.Suspense,{fallback:c.a.createElement(j.a,{width:"100%",height:50,count:5})},c.a.createElement(B,{noFaktur:this.props.noFaktur,jenisBarang:this.state.jenisBarang,onSubmit:function(a){return t.handleSubmit(a)}})),title:""}))}}]),e}(l.Component);a.default=Object(k.b)((function(t){return{totalanTimbangan:t.provinsi.totalanTimbangan,noFaktur:t.provinsi.noFaktur,listTotalanTimbangan:t.provinsi.listTotalanTimbangan,sumBruto:t.perhitungan.sumBruto,sumNetto:t.perhitungan.sumNetto,sumGross:t.perhitungan.sumGross,sumPkg:t.perhitungan.sumPkg,sumQty:t.perhitungan.sumQty,sumRp:t.perhitungan.sumRp,onSend:t.provinsi.onSend}}),null)(R)},289:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var n=e(17),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},461:function(t,a,e){"use strict";e.r(a);var n=e(71),r=e(72),o=e(74),i=e(73),s=e(0),l=e.n(s),c=function(t){Object(o.a)(e,t);var a=Object(i.a)(e);function e(){return Object(n.a)(this,e),a.apply(this,arguments)}return Object(r.a)(e,[{key:"render",value:function(){return l.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),e}(s.Component);a.default=c},493:function(t,a,e){"use strict";var n=e(496);e(498);a.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],p=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,g=new n.default;g.autoTable(d,h,{startY:40});var b=g.lastAutoTable.finalY+10;g.text(p,14,15),g.setFontSize(10),g.text(t,14,25),g.text(":",37,25),g.text(a,40,25),g.text(e,120,25),g.text(":",141,25),g.text(r,145,25),g.text(o,14,30),g.text(":",37,30),g.text(i,40,30),g.text(s,120,30),g.text(":",141,30),g.text(l,145,30),g.text("User",160,b+10),g.text(":",168,b+10),g.text(c,170,b+10),g.text("Cetak",160,b+15),g.text(":",168,b+15),g.text(u,170,b+15),g.text("Valid",160,b+20),g.text(":",168,b+20),g.text(m,170,b+20);var k=g.output("datauristring"),f="<embed width='100%' height='100%' src='"+k+"'/>",v=window.open();v.document.open(),v.document.write(f),v.document.close()}}}]);
//# sourceMappingURL=105.a036c5fe.chunk.js.map