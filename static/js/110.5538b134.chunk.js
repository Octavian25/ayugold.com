(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[110],{1166:function(t,a,e){"use strict";e.r(a);var n=e(77),r=e(71),o=e(72),i=e(74),s=e(73),l=e(0),u=e.n(l),c=e(28),p=e(110),d=e(178),h=e(468),m=e.n(h),g=e(471),b=e.n(g),k=e(470),f=e.n(k),j=e(289),v=e(27),O=e.n(v),S=e(41),T=e(174),y=e(497),F=e(23),M=e(51),P=e(173),x=e.n(P),B=e(5),L=e(503),E=Object(l.lazy)((function(){return Promise.all([e.e(27),e.e(19)]).then(e.bind(null,736))})),N=Object(l.lazy)((function(){return e.e(174).then(e.bind(null,465))})),D=Object(l.lazy)((function(){return Promise.all([e.e(4),e.e(20),e.e(123)]).then(e.bind(null,655))})),C=Object(l.lazy)((function(){return Promise.all([e.e(2),e.e(6)]).then(e.bind(null,499))})),G=function(t){Object(i.a)(e,t);var a=Object(s.a)(e);function e(t){var o;Object(r.a)(this,e),(o=a.call(this,t)).inputChange=function(t){return function(a){o.setState(Object(n.a)({},t,a.target.value)),localStorage.setItem([t],a.target.value)}};var i=new Date,s="".concat(i.getFullYear(),"-").concat(i.getMonth()+1,"-").concat(i.getDate());return o.state={listSupplier:[],columns:[{dataField:"kodeJenis",text:"Kode Barang"},{dataField:"kadarCetak",text:"Kadar Cetak(%)"},{dataField:"p",text:"P"},{dataField:"k",text:"K"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"kadarTransaksi",text:"Harga(%)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"}],tanggal_invoice:s,tanggal_barang:s,noBon:"",totalNW:0,totalBruto:0,totalPkg:0,totalGross:0,totalOngkir:0,kodeSupplier:"",namaSupplier:"",keterangan:"",startingDate:s,tampungBarang:[],tampungBarangLocal:[],urutan:localStorage.getItem("urutan")||0},o}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(p.d)()),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(S.i)()),this.props.dispatch(Object(F.o)("TransaksiPenjualanLM")),this.props.dispatch(Object(F.l)("TransaksiPenjualanLM")),this.props.dispatch(Object(F.q)("TransaksiPenjualanLM")),this.props.dispatch(Object(F.m)("TransaksiPenjualanLM")),this.props.dispatch(Object(F.s)("TransaksiPenjualanLM")),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(M.j)())}},{key:"handleSubmit",value:function(t){var a=this,e=(t.kodeJenis?t.kodeJenis:"DEFALT | DEFAULT").split("|"),n={noFaktur:this.props.noFaktur,nettoDiscGlobalExt:parseFloat(t.totalHargaLM),gross:parseFloat(t.gross),netto:parseFloat(t.netto),qty:0,tipeTransaksi:"JUAL LM",k:parseFloat(t.k),rp:parseFloat(t.harga),kadarCetak:e[2],keterangan:t.keterangan,discGlobalPr:0,kodeKategori:"-",kadarTransaksi:parseFloat(t.kadarTransaksi),kodeJenis:e[0],noBarcode:"-",p:parseFloat(t.p),discGlobalGr:0,pkg:parseFloat(t.pkg),bruto:parseFloat(t.bruto),nettoDiscGlobal:0},r=JSON.parse(localStorage.getItem("TransaksiPenjualanLM"))||[];r.push(n),localStorage.setItem("TransaksiPenjualanLM",JSON.stringify(r)),this.props.dispatch(Object(S.i)()),O.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(j.a)("TerimaSupplier"))})).then((function(){return a.props.dispatch(Object(S.i)())})).then((function(){return a.props.dispatch(Object(F.o)("TransaksiPenjualanLM"))})).then((function(){return a.props.dispatch(Object(F.l)("TransaksiPenjualanLM"))})).then((function(){return a.props.dispatch(Object(F.q)("TransaksiPenjualanLM"))})).then((function(){return a.props.dispatch(Object(F.m)("TransaksiPenjualanLM"))})).then((function(){return a.props.dispatch(Object(F.s)("TransaksiPenjualanLM"))})).then((function(){return a.props.dispatch(Object(M.j)())}))}},{key:"kirimData",value:function(t){var a=this;if(void 0===t.customer)return Object(T.e)("Mohon pilih Supplier"),!1;if(void 0===t.keterangan)return Object(T.e)("Mohon isi Keterangan"),!1;if(void 0===t.noBon)return Object(T.e)("Mohon Isi nomor Bon"),!1;if(null===localStorage.getItem("TransaksiPenjualanLM"))return Object(T.e)("Barang masih kosong, mohon tambahkan barang"),!1;var e={noFaktur:this.props.noFaktur.toUpperCase(),tanggal:t.tanggal_invoice||"2020-01-01",noBon:t.noBon.toUpperCase()||"-",kodeCustomer:t.kodeCustomer||"-",namaToko:t.namaToko||"-",tanggalBarang:t.tanggal_barang||"2020-01-01",tipeTransaksi:"JUAL LM",barangDetails:JSON.parse(localStorage.getItem("TransaksiPenjualanLM")),footerDocument:{inputBy:this.props.username}};console.log(JSON.stringify(e)),this.props.dispatch(Object(F.t)());var n=[];JSON.parse(localStorage.getItem("TransaksiPenjualanLM")).forEach((function(t,a){var e=[++a,t.kodeJenis,t.kadarCetak,t.p,t.k,t.pkg,t.bruto,t.kadarTransaksi,t.netto,parseFloat(t.rp).toLocaleString("id-ID")];n.push(e)})),console.log(JSON.stringify(n));var r=["No","Kode Barang","Kadar Cetak (%)","P","K","Bungkus(Gr)","Berat(Gr)","Harga(Gr)","Murni(Gr)","Ongkos(Rp)"];Object(B.f)("cst/dc/lm",e).then((function(e){return O.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(j.a)("FormHeadPenjualanLM"))})).then((function(){return localStorage.removeItem("TransaksiPenjualanLM")})).then((function(){return localStorage.removeItem("FakturRekapBon")})).then((function(){return a.props.dispatch(Object(S.i)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(d.b)())})).then((function(){return a.props.dispatch(Object(F.o)("TransaksiPenjualanLM"))})).then((function(){return Object(y.a)("No Faktur",a.props.noFaktur,"Tanggal",a.state.tanggal_invoice,"No Bon",t.noBon.toUpperCase(),"Customer",t.namaToko,"ADMIN",a.state.tanggal,"",r,"Transaksi Penjualan LM",n)}))})).catch((function(t){return O.a.fire({position:"top-end",icon:"error",text:"Data Gagal Ditambahkan",showConfirmButton:!1,timer:1500})}))}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"container-fluid",style:{color:"black"}},u.a.createElement("div",{className:"row"},u.a.createElement(L.a,{tourConfig:["Untuk Menambahkan Data LM, Tekan Tombol ini Dan Isi kolom yang disediakan","Isi seluruh kolom ini untuk bisa melanjutkan ke proses penyimpanan data","klik tombol ini untuk menyimpan data"]}),u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"card"},u.a.createElement(N,{title:"Transaksi Penjualan LM"}),u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-9"}),u.a.createElement("div",{className:"col-lg-3"},u.a.createElement("div",{className:"text-right"})),u.a.createElement("br",null),u.a.createElement("div",{"data-tut":"reactour_2"},u.a.createElement(E,{onSubmit:function(a){return t.kirimData(a)},onSend:this.props.onSend}))),this.props.listDataTablePenjualanLM?u.a.createElement(b.a,{keyField:"id",data:this.props.listDataTablePenjualanLM,columns:this.state.columns,search:!0},(function(t){return u.a.createElement("div",{className:"form-group mt-2"},u.a.createElement(m.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:f()()})))})):null))))),u.a.createElement(C,{content:u.a.createElement(l.Suspense,{fallback:u.a.createElement(x.a,{width:"100%",height:50,count:5})},u.a.createElement(D,{from:"terima",onSubmit:function(a){return t.handleSubmit(a)},noFaktur:this.props.noFaktur})),title:"Tambah Data Barang"}))}}]),e}(l.Component);a.default=Object(c.b)((function(t){return{supplierList:t.provinsi.supplier,tampungBarang:t.provinsi.terimaSupplierTemp,noFaktur:t.provinsi.noFaktur,username:t.provinsi.username,alert:t.provinsi.alert,error:t.provinsi.error,totalNW:t.provinsi.totalNW,listDataTablePenjualanLM:t.provinsi.listDataTablePenjualanLM,sumNetto:t.perhitungan.sumNetto,sumBruto:t.perhitungan.sumBruto,sumPkg:t.perhitungan.sumPkg,sumRp:t.perhitungan.sumRp,sumGross:t.perhitungan.sumGross,onSend:t.provinsi.onSend}}),null)(G)},289:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var n=e(16),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},497:function(t,a,e){"use strict";var n=e(501);e(502);a.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",p=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],h=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",m=arguments.length>13?arguments[13]:void 0,g=new n.default;g.autoTable(d,m,{startY:40});var b=g.lastAutoTable.finalY+10;g.text(h,14,15),g.setFontSize(10),g.text(t,14,25),g.text(":",37,25),g.text(a,40,25),g.text(e,120,25),g.text(":",141,25),g.text(r,145,25),g.text(o,14,30),g.text(":",37,30),g.text(i,40,30),g.text(s,120,30),g.text(":",141,30),g.text(l,145,30),g.text("User",160,b+10),g.text(":",168,b+10),g.text(u,170,b+10),g.text("Cetak",160,b+15),g.text(":",168,b+15),g.text(c,170,b+15),g.text("Valid",160,b+20),g.text(":",168,b+20),g.text(p,170,b+20);var k=g.output("datauristring"),f="<embed width='100%' height='100%' src='"+k+"'/>",j=window.open();j.document.open(),j.document.write(f),j.document.close()}},503:function(t,a,e){"use strict";var n=e(71),r=e(72),o=e(74),i=e(73),s=e(0),l=e.n(s),u=e(28),c=e(36),p=e(522),d=e(520),h=function(t){Object(o.a)(e,t);var a=Object(i.a)(e);function e(t){var r;return Object(n.a)(this,e),(r=a.call(this,t)).disableBody=function(t){return Object(d.a)(t)},r.enableBody=function(t){return Object(d.b)(t)},r.state={},r}return Object(r.a)(e,[{key:"render",value:function(){var t=this,a=this.props.tourConfig.map((function(t,a){return{selector:'[data-tut="reactour_'+ ++a+'"]',content:t}}));return console.log(a),l.a.createElement(p.a,{onRequestClose:function(){return t.props.dispatch(Object(c.f)())},steps:a,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),e}(s.Component);a.a=Object(u.b)((function(t){return{showTourGuide:t.provinsi.showTourGuide}}),null)(h)}}]);
//# sourceMappingURL=110.5538b134.chunk.js.map