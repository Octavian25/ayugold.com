(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[105,174],{1193:function(t,e,a){"use strict";a.r(e);var n=a(77),o=a(71),r=a(72),s=a(74),l=a(73),i=a(0),c=a.n(i),u=a(28),m=a(289),p=a(459),d=a(46),h=a.n(d),g=a(179),b=a(178),f=a(27),k=a.n(f),v=a(277),N=a(471),E=a.n(N),F=a(468),S=a.n(F),G=a(470),j=a.n(G),x=a(23),O=a(497),y=a(174),C=a(536),T=a(152),P=a(173),B=a.n(P),D=a(36),I=a(465),w=Object(i.lazy)((function(){return Promise.all([a.e(2),a.e(6)]).then(a.bind(null,499))})),A=Object(i.lazy)((function(){return Promise.all([a.e(4),a.e(16),a.e(18)]).then(a.bind(null,739))})),L="http://147.139.182.75:3759/api/v1/",U=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var r;return Object(o.a)(this,a),(r=e.call(this,t)).inputChange=function(t){return function(e){r.setState(Object(n.a)({},t,e.target.value))}},r.inputGrandTotal=function(t){return function(e){var a=r.props.sumGross-parseFloat(r.state.discGlobalGr),o=e.target.value;return console.log(a+"-"+o),a-o<-1?(Object(y.e)("Selisih lebih dari 1"),e.target.value="",!1):a-o<=1?void r.setState(Object(n.a)({},t,e.target.value)):(Object(y.e)("Selisih lebih dari 1"),e.target.value="",!1)}},r.discount=function(t){return function(t){var e=parseFloat(t.target.value)/100*parseFloat(localStorage.getItem("GrandTotalNetto"));r.setState({discGlobalGr:e.toFixed(3),discGlobalPr:t.target.value,GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto"))-e.toFixed(3)).toFixed(3)})}},r.state={listLokasi:[],listSales:[],listCustomer:[],columns:[{dataField:"kodeJenis",text:"Kode Barang"},{dataField:"kadarCetak",text:"Kadar Cetak(%)"},{dataField:"p",text:"P"},{dataField:"k",text:"K"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"kadarTransaksi",text:"Harga(%)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"discGlobalPr",text:"%",footerClasses:"sum-netto-terima-supplier"},{dataField:"discGlobalGr",text:"Disc (Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"nettoDiscGlobalExt",text:"Netto Disc(Gr)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return r.deleteRow(a,e.nettoDiscGlobalExt)}},c.a.createElement(C.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash mr-1"})),c.a.createElement("br",null))}}],discGlobalGr:0,discGlobalPr:0,totalNWExt:0,noBon:"",namaCustomer:"",lokasi:"",sales:"",namaToko:"",tanggal:"",data:""},r}return Object(r.a)(a,[{key:"deleteRow",value:function(t,e){var a=this;k.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){if(n.isConfirmed){var o=JSON.parse(localStorage.getItem("transaksiPenjualan"))||[];o.splice(t,1),localStorage.setItem("transaksiPenjualan",JSON.stringify(o));var r=localStorage.getItem("GrandTotalNetto"),s=parseFloat(r)-parseFloat(e);localStorage.setItem("GrandTotalNetto",parseFloat(s).toFixed(3)),k.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a.props.dispatch(Object(T.d)())})).then((function(){return a.props.dispatch(Object(T.c)())})).then((function(){return a.setState({GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto")||0)-0).toFixed(3)})}))}}))}},{key:"componentDidMount",value:function(){var t=this;h.a.get(L+"storages2?tipeData=LOKASI").then((function(e){return t.setState({listLokasi:e.data})})),h.a.get(L+"storages2?tipeData=SALES").then((function(e){return t.setState({listSales:e.data})})),h.a.get(L+"customers").then((function(e){return t.setState({listCustomer:e.data})})),this.props.dispatch(Object(b.b)()),this.props.dispatch(Object(v.b)()),this.props.dispatch(Object(T.d)()),this.props.dispatch(Object(x.l)("transaksiPenjualan")),this.props.dispatch(Object(x.o)("transaksiPenjualan")),this.props.dispatch(Object(x.q)("transaksiPenjualan")),this.props.dispatch(Object(x.s)("transaksiPenjualan")),this.props.dispatch(Object(x.m)("transaksiPenjualan")),this.props.dispatch(Object(x.p)("transaksiPenjualan")),this.props.dispatch(Object(x.n)("transaksiPenjualan")),this.props.dispatch(Object(x.r)("transaksiPenjualan")),this.setState({GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto")||0)-0).toFixed(3)})}},{key:"handleSubmit",value:function(t){var e=(t.kodeBarang?t.kodeBarang:"DEFAULT|DEFAULT|DEFAULT|DEFAULT").split("|"),a={noFaktur:this.props.noFaktur,nettoDiscGlobalExt:t.nettoDiscGlobalExt,gross:parseFloat(t.gross),netto:parseFloat(t.netto),qty:1,k:parseFloat(t.k),rp:parseFloat(void 0===t.rp?0:t.rp),kadarCetak:e[2].toUpperCase(),keterangan:t.keterangan.toUpperCase(),discGlobalPr:t.discGlobalPr,kodeKategori:"-",kadarTransaksi:parseFloat(t.kadarTransaksi),kodeJenis:e[0].toUpperCase(),noBarcode:"-",p:parseFloat(t.p),discGlobalGr:t.discGlobalGr,pkg:parseFloat(t.pkg),bruto:parseFloat(t.bruto),nettoDiscGlobal:0},n=JSON.parse(localStorage.getItem("transaksiPenjualan"))||[];n.push(a);var o=n.map((function(t){return parseFloat(t.nettoDiscGlobalExt)})).reduce((function(t,e){return t+e}),0).toFixed(3);localStorage.setItem("GrandTotalNetto",o),localStorage.setItem("transaksiPenjualan",JSON.stringify(n)),k.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.dispatch(Object(v.b)()),this.props.dispatch(Object(T.d)()),this.props.dispatch(Object(m.a)("FormTransaksiPenjualan")),document.getElementById("dismissModal").click(),this.props.dispatch(Object(x.o)("transaksiPenjualan")),this.setState({discGlobalGr:parseFloat(0)/100*parseFloat(localStorage.getItem("GrandTotalNetto")),discGlobalPr:0,GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto"))-0).toFixed(3)})}},{key:"transaksiPenjualanSubmit",value:function(){var t=this;if(null===localStorage.getItem("transaksiPenjualan"))return Object(y.e)("Barang masih kosong, Silahkan tambah barang"),!1;if(""===this.state.noBon)return Object(y.e)("Mohon isi Nomor bon"),!1;if(""===this.state.lokasi)return Object(y.e)("Mohon pilih lokasi"),!1;if(""===this.state.sales)return Object(y.e)("Mohon pilih Sales"),!1;if(""===this.state.namaToko)return Object(y.e)("Mohon pilih toko"),!1;if(""===this.state.discGlobalPr)return Object(y.e)("Mohon isi Discount"),!1;if(""===this.state.discGlobalGr)return Object(y.e)("Mohon isi Discount Gr"),!1;if(0===this.state.totalNWExt)return Object(y.e)("Mohon isi Grand Total"),!1;if(""===this.state.tanggal)return Object(y.e)("Mohon isi Tanggal"),!1;var e={totalNettoExt:this.state.totalNWExt,totalNettoFaktur:this.props.gross,discPr:this.state.discGlobalPr,discGr:this.state.discGlobalGr,totalNettoAkhir:parseFloat(this.props.gross)-parseFloat(this.state.discGlobalGr)},a={totalBruto:this.props.sumBruto,totalNetto:this.props.sumNetto,totalNettoExt:0,totalGross:this.props.sumGross,totalRp:this.props.sumRp,totalQty:this.props.sumQty,totalK:this.props.sumK,totalP:this.props.sumP,totalpkg:this.props.sumPkg},n={noBon:this.state.noBon.toUpperCase(),noFaktur:this.props.noFaktur.toUpperCase(),tanggal:this.state.tanggal,kodeLokasi:this.state.lokasi.toUpperCase(),kodeSales:this.state.sales.toUpperCase(),namaToko:this.state.namaToko.toUpperCase(),kodeCustomer:this.state.kodeCustomer.toUpperCase(),barangDetails:JSON.parse(localStorage.getItem("transaksiPenjualan")),headDiscount:e,footerItem:a,footerDocument:{inputBy:this.props.username}};console.log(JSON.stringify(n)),this.props.dispatch(Object(x.t)());var o=[],r=JSON.parse(localStorage.getItem("transaksiPenjualan"));r.forEach((function(t,e){var a=[++e,t.kadarCetak,t.kodeJenis,t.keterangan,parseFloat(t.bruto).toFixed(3),t.kadarTransaksi,parseFloat(t.discGlobalGr).toFixed(3),parseFloat(t.netto).toFixed(3),t.pkg,t.qty,parseFloat(t.rp).toLocaleString("id-ID"),""];o.push(a)}));var s=["","","","",r.map((function(t){return parseFloat(t.bruto)})).reduce((function(t,e){return t+e}),0).toFixed(3),"",r.map((function(t){return parseFloat(t.discGlobalGr)})).reduce((function(t,e){return t+e}),0).toFixed(3),r.map((function(t){return parseFloat(t.netto)})).reduce((function(t,e){return t+e}),0).toFixed(3),r.map((function(t){return parseFloat(t.pkg)})).reduce((function(t,e){return t+e}),0),r.map((function(t){return parseFloat(t.qty)})).reduce((function(t,e){return t+e}),0),r.map((function(t){return parseFloat(t.rp)})).reduce((function(t,e){return t+e}),0).toLocaleString("id-ID"),this.state.totalNWExt];o.push(s),console.log(JSON.stringify(o));var l=["No","Kadar","Kode","Keterangan","Bruto \n(Gr)","Harga \n(%)","Diskon","Netto \n(Gr)","Pkg","Qty","Ongkos \n(Rp)","Grand Total\nNetto Ext"];h.a.post("http://157.245.145.87:9013/cst/dc/pjl",n).then((function(){return k.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return Object(O.a)("no Trx",t.props.noFaktur.toUpperCase(),"Tanggal",t.state.tanggal,"No Bon",t.state.noBon.toUpperCase(),"Sales",t.state.namaToko.toUpperCase(),"ADMIN",t.state.tanggal,"",l,"Transaksi Penjualan",o)})).then((function(){return t.props.dispatch(Object(x.k)())})).then((function(){return localStorage.removeItem("transaksiPenjualan")})).then((function(){return localStorage.removeItem("GrandTotalNetto")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(b.b)())})).then((function(){return t.props.dispatch(Object(T.d)())})).then((function(){return t.props.dispatch(Object(v.b)())})).then((function(){return t.setState({noBon:"",namaCustomer:"",lokasi:"",sales:"",namaToko:"",tanggal:"",toko:"",GrandTotalNetto:0})})).then((function(){return document.getElementById("myForm").reset()}))})).catch((function(e){return k.a.fire({position:"top-end",icon:"error",text:"Data Gagal Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(x.k)())}))})),console.log(JSON.stringify(n))}},{key:"onSubmit",value:function(t,e){this.setState(Object(n.a)({},e,t))}},{key:"onSubmitToko",value:function(t,e){var a=t.split("|");this.setState({kodeCustomer:a[0],namaCustomer:a[1],namaToko:a[2],toko:t})}},{key:"render",value:function(){var t=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement(I.default,{title:"Transaksi Penjualan"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-9"}),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("br",null)),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("form",{id:"myForm",onKeyDown:function(t){return"Enter"!==t.key}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{name:"tanggal",type:"date",label:"Tanggal",className:"form-control",onChange:this.inputChange("tanggal"),value:this.state.tanggal}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"No Bon"),c.a.createElement("input",{name:"noBon",type:"text",label:"No Bon",className:"form-control",onChange:this.inputChange("noBon"),value:this.state.noBon}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"}),c.a.createElement("div",{className:"col-lg-3 col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Lokasi"),c.a.createElement(g.a,{options:this.state.listLokasi.map((function(t){return{value:t.kodeLokasi,name:t.namaLokasi}})),search:!0,placeholder:"Silahkan Pilih",onChange:function(e){return t.onSubmit(e,"lokasi")},value:this.state.lokasi}))),c.a.createElement("div",{className:"col-lg-3 col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Sales"),c.a.createElement(g.a,{options:this.state.listSales.map((function(t){return{value:t.kodeLokasi,name:t.namaLokasi}})),search:!0,placeholder:"Silahkan Pilih",onChange:function(e){return t.onSubmit(e,"sales")},value:this.state.sales}))),c.a.createElement("div",{className:"col-lg-3 col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Nama Toko"),c.a.createElement(g.a,{options:this.state.listCustomer.map((function(t){return{value:t.kodeCustomer+"|"+t.namaCustomer+"|"+t.namaToko,name:t.namaToko}})),search:!0,placeholder:"Silahkan Pilih",onChange:function(e){return t.onSubmitToko(e,"namaToko")},onBlur:function(e){return t.onSubmit(e,"toko")},value:this.state.toko}))),c.a.createElement("div",{className:"col-lg-3 col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Customer"),c.a.createElement("input",{name:"customer",type:"text",className:"form-control",label:"Customer",onChange:this.inputChange("namaCustomer"),defaultValue:this.state.namaCustomer}))),c.a.createElement("div",{className:"col-lg-3 mb-3"},c.a.createElement("label",{htmlFor:""},"Total NW"),c.a.createElement("input",{name:"totalNW",type:"number",className:"form-control",min:0,step:.01,label:"totalNW",value:this.props.totalNW,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Disc Global (%)"),c.a.createElement("input",{name:"discGlobal",type:"number",className:"form-control",min:0,step:.001,label:"discGlobal",onChange:this.discount("discGlobalPr"),value:this.state.discGlobalPr})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Disc (Gr)"),c.a.createElement("input",{name:"discGlobal",type:"number",className:"form-control",label:"discGlobal",value:this.state.discGlobalGr,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Grand Total Netto"),c.a.createElement("input",{name:"totalNW",type:"number",className:"form-control",label:"totalNW",value:this.state.GrandTotalNetto,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Grand Total Netto Ext"),c.a.createElement("input",{name:"totalNWExt",type:"text",className:"form-control",label:"totalNWExt",onChange:this.inputChange("totalNWExt")}))))),c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"}),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.props.dispatch(Object(D.j)())}},"Tambah Barang",c.a.createElement("i",{class:"fa fa-plus ml-3","aria-hidden":"true"})))))),c.a.createElement("div",{className:"col-lg-12 mt-5"},this.props.transaksiPenjualan?c.a.createElement(E.a,{keyField:"id",data:this.props.transaksiPenjualan,columns:this.state.columns,search:!0},(function(t){return c.a.createElement("div",{className:"form-group"},c.a.createElement(S.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:j()()})))})):c.a.createElement(E.a,{keyField:"id",data:[],columns:this.state.columns,search:!0},(function(t){return c.a.createElement("div",{className:"form-group"},c.a.createElement(S.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:j()(),noDataIndication:"Tidak Ada Data"})))})),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return t.transaksiPenjualanSubmit()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{class:"fa fa-paper-plane ml-3","aria-hidden":"true"})))))))),c.a.createElement(w,{content:c.a.createElement(i.Suspense,{fallback:c.a.createElement(B.a,{width:"100%",height:50,count:4})},c.a.createElement(A,{onSubmit:function(e){return t.handleSubmit(e)}})),title:"Tambah Data"}))}}]),a}(i.Component);U=Object(p.a)({form:"TransaksiPenjualan",enableReinitialize:!0})(U),e.default=Object(u.b)((function(t){return{noFaktur:t.provinsi.noFaktur,transaksiPenjualan:t.provinsi.transaksiPenjualan,listCustomer:t.provinsi.customer,listLokasi:t.provinsi.lokasi,listSales:t.provinsi.salesman,totalNW:t.provinsi.totalNW,sumNetto:t.perhitungan.sumNetto,sumBruto:t.perhitungan.sumBruto,sumPkg:t.perhitungan.sumPkg,sumP:t.perhitungan.sumP,sumK:t.perhitungan.sumK,sumQty:t.perhitungan.sumNetto,sumGross:t.perhitungan.sumGross,sumRp:t.perhitungan.sumRp,username:t.provinsi.username,onSend:t.provinsi.onSend}}),null)(U)},289:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a(16),o=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},465:function(t,e,a){"use strict";a.r(e);var n=a(71),o=a(72),r=a(74),s=a(73),l=a(0),i=a.n(l),c=function(t){Object(r.a)(a,t);var e=Object(s.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(l.Component);e.default=c},497:function(t,e,a){"use strict";var n=a(501);a(502);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",i=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],d=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,g=new n.default;g.autoTable(p,h,{startY:40});var b=g.lastAutoTable.finalY+10;g.text(d,14,15),g.setFontSize(10),g.text(t,14,25),g.text(":",37,25),g.text(e,40,25),g.text(a,120,25),g.text(":",141,25),g.text(o,145,25),g.text(r,14,30),g.text(":",37,30),g.text(s,40,30),g.text(l,120,30),g.text(":",141,30),g.text(i,145,30),g.text("User",160,b+10),g.text(":",168,b+10),g.text(c,170,b+10),g.text("Cetak",160,b+15),g.text(":",168,b+15),g.text(u,170,b+15),g.text("Valid",160,b+20),g.text(":",168,b+20),g.text(m,170,b+20);var f=g.output("datauristring"),k="<embed width='100%' height='100%' src='"+f+"'/>",v=window.open();v.document.open(),v.document.write(k),v.document.close()}}}]);
//# sourceMappingURL=105.6622d594.chunk.js.map