(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[125],{1159:function(a,t,e){"use strict";e.r(t);var n=e(31),r=e(15),o=e(16),s=e(18),i=e(17),l=e(0),c=e.n(l),u=e(481),m=e.n(u),p=e(507),d=e.n(p),h=e(506),g=e.n(h),b=e(29),k=e(12),f=e(7),E=e.n(f),S=e(75),v=e(9),N=e(175),T=e(40),O=e.n(T),y=e(53),F=e(43),A=e(14),j=e.n(A),B=e(51),C=Object(l.lazy)((function(){return Promise.all([e.e(3),e.e(86)]).then(e.bind(null,1126))})),L=Object(l.lazy)((function(){return Promise.all([e.e(2),e.e(5)]).then(e.bind(null,509))})),P=p.Search.SearchBar,G=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,I=function(a){Object(s.a)(e,a);var t=Object(i.a)(e);function e(a){var o;return Object(r.a)(this,e),(o=t.call(this,a)).changeInput=function(a){return function(t){o.setState(Object(n.a)({},a,t.target.value))}},o.state={jenisBarang:"RONGSOK",listLokasi:[],columns:[{dataField:"kodeJenis",text:"Kode",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarCetak",text:"Kadar",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"gross",text:"Gross (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"pkg",text:"Pkg (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"bruto",text:"Berat (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarTransaksi",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"netto",text:"Netto (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"rp",text:"Ongkos (Rp)",sort:!0,headerStyle:function(){return{width:"25%"}}}],data:[{tanggal:"2020-11-10"}]},o}return Object(o.a)(e,[{key:"componentDidMount",value:function(){var a=this;this.props.dispatch(Object(N.d)()),this.props.dispatch(Object(b.b)()),this.props.dispatch(Object(v.l)("totalanTimbangan")),this.props.dispatch(Object(v.o)("totalanTimbangan")),this.props.dispatch(Object(v.q)("totalanTimbangan")),this.props.dispatch(Object(v.m)("totalanTimbangan")),this.props.dispatch(Object(v.s)("totalanTimbangan")),this.props.dispatch(Object(v.r)("totalanTimbangan")),O.a.get("https://147.139.193.169:3759/api/v1/storages2?tipeData=LOKASI").then((function(t){return a.setState({listLokasi:t.data})})).catch((function(a){return console.log(a)}))}},{key:"handleSubmit",value:function(a){var t=(a.kodeBarang?a.kodeBarang:"DEFAULT|DEFUALT|DEFAULT|DEFAULT").split("|"),e={nettoDiscGlobalExt:0,gross:parseFloat(a.gross),kodeJenis:t[0],pkg:parseFloat(a.pkg),noBarcode:"-",qty:1,k:0,kadarCetak:t[1],kodeKategori:"-",p:0,nettoDiscGlobal:0,discGlobalPr:0,discGlobalGr:0,kadarTransaksi:parseFloat(a.kadarTransaksi),noFaktur:a.noFaktur,bruto:parseFloat(a.gross)-parseFloat(a.pkg),netto:parseFloat(a.netto),rp:parseFloat(a.rp),keterangan:a.keterangan},n=JSON.parse(localStorage.getItem("totalanTimbangan"))||[];n.push(e),localStorage.setItem("totalanTimbangan",JSON.stringify(n)),E.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}),this.props.dispatch(Object(S.a)("FormModalTimbangan")),this.props.dispatch(Object(N.d)())}},{key:"simpanTotalanTimbang",value:function(){var a=this;if(void 0===this.state.tanggal)return E.a.fire({position:"top-end",icon:"error",text:"Silahkan Isi Tanggal",showConfirmButton:!1,timer:1500}),!1;if(void 0===this.state.lokasi)return E.a.fire({position:"top-end",icon:"error",text:"Silahkan Isi Lokasi",showConfirmButton:!1,timer:1500}),!1;if(null===localStorage.getItem("totalanTimbangan"))return E.a.fire({position:"top-end",icon:"error",text:"Data Masih Kosong, Silahkan tambah data",showConfirmButton:!1,timer:1500}),!1;var t={tipeFaktur:this.state.jenisBarang,noFaktur:this.props.noFaktur,noBon:this.props.noFaktur,tanggal:this.state.tanggal,noValid:"-",kodeLokasi:this.state.kodeLokasi,barangDetails:JSON.parse(localStorage.getItem("totalanTimbangan")),footerItem:{totalP:0,totalGross:this.props.sumGross,totalpkg:this.props.sumPkg,totalQty:this.props.sumQty,totalK:0,totalRp:this.props.sumRp,totalBruto:this.props.sumBruto,totalNetto:this.props.sumNetto,totalNettoExt:0}};this.props.dispatch(Object(v.t)());var e=[];(JSON.parse(localStorage.getItem("totalanTimbangan"))||[]).forEach((function(a,t){var n=[t++,a.kodeJenis,a.gross,a.pkg,a.bruto,a.kadarTransaksi,a.netto,a.rp];e.push(n)})),console.log(e);var n=["No","Kode Barang","Gross (Gr)","Pkg (Gr)","Bruto (Gr)","Harga (%)","Netto (Gr)","Ongkos (Rp)"];O.a.post(G+"item/dc/totalantimbang",t).then((function(){return E.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}).then((function(){return a.props.dispatch(Object(v.k)())})).then((function(){return Object(y.a)("Tanggal",a.state.tanggal,"Lokasi",a.state.tanggal,"No Timbang",a.props.noFaktur,"","","","","",n,"STOCK OPNAME TIMBANG SALES",e)})).then((function(){return localStorage.removeItem("totalanTimbangan")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(b.b)())})).then((function(){return a.props.dispatch(Object(N.d)())})).then((function(){return a.setState({tanggal:"",lokasi:""})}))})).catch((function(a){return E.a.fire({position:"top-right",icon:"error",text:"Sepertinya ada kesalahan di server, mohon periksa koneksi dan ulangi transaksi",timer:1500,showConfirmButton:!1}).then((function(){return console.log(a)}))}))}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement(F.default,{title:"Totalan Timbangan"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 mb-3"},c.a.createElement("label",{htmlFor:""},"Jenis Barang"),c.a.createElement("select",{name:"jenisBarang",id:"JenisBarang",className:"form-control",onChange:function(t){return a.setState({jenisBarang:t.target.value})}},c.a.createElement("option",{value:"RONGSOK",key:"RONGSOK"},"RONGSOK"),c.a.createElement("option",{value:"PERHIASAN",key:"PERHIASAN"},"PERHIASAN"))),c.a.createElement("div",{className:"col-lg-8 mb-3"}),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",name:"tanggal",label:"tanggal",className:"form-control",onChange:this.changeInput("tanggal")}))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Lokasi"),c.a.createElement("select",{name:"lokasi",label:"lokasi",className:"form-control",onChange:this.changeInput("lokasi")},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listLokasi.map((function(a){return c.a.createElement("option",{value:a.kodeLokasi,key:a.kodeLokasi},a.namaLokasi)}))))),c.a.createElement("div",{className:"col-lg-12 mt-3 mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return a.simpanTotalanTimbang()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.props.dispatch(Object(B.j)())}},"Tambah Data",c.a.createElement("i",{className:"fa fa-plus ml-3"})))))),c.a.createElement("div",{className:"col-lg-12"},this.props.totalanTimbangan?c.a.createElement(d.a,{keyField:"kodeKelompok",data:this.props.totalanTimbangan,columns:this.state.columns,search:!0},(function(a){return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"text-right mt-5 mb-3"},c.a.createElement(P,Object.assign({},a.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),c.a.createElement(m.a,Object.assign({},a.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:g()()})))})):c.a.createElement(m.a,{keyField:"kodeKelompok",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"}))))),c.a.createElement(L,{content:c.a.createElement(l.Suspense,{fallback:c.a.createElement(j.a,{width:"100%",height:50,count:5})},c.a.createElement(C,{noFaktur:this.props.noFaktur,jenisBarang:this.state.jenisBarang,onSubmit:function(t){return a.handleSubmit(t)}})),title:""}))}}]),e}(l.Component);t.default=Object(k.b)((function(a){return{totalanTimbangan:a.provinsi.totalanTimbangan,noFaktur:a.provinsi.noFaktur,listTotalanTimbangan:a.provinsi.listTotalanTimbangan,sumBruto:a.perhitungan.sumBruto,sumNetto:a.perhitungan.sumNetto,sumGross:a.perhitungan.sumGross,sumPkg:a.perhitungan.sumPkg,sumQty:a.perhitungan.sumQty,sumRp:a.perhitungan.sumRp,onSend:a.provinsi.onSend}}),null)(I)},75:function(a,t,e){"use strict";e.d(t,"a",(function(){return r}));var n=e(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors}}]);
//# sourceMappingURL=125.f02474c1.chunk.js.map