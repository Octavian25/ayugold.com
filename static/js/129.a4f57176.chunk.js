(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[129],{1189:function(t,e,a){"use strict";a.r(e);var n=a(47),r=a(35),o=a(36),s=a(38),l=a(37),i=a(0),c=a.n(i),u=a(18),m=a(182),p=a(468),d=a(68),h=a.n(d),g=a(88),b=a(69),f=a(10),k=a.n(f),E=a(504),N=a.n(E),v=a(478),S=a.n(v),F=a(538),G=a(503),j=a.n(G),C=a(11),O=a(165),P=a(56),y=a(186),T=a(19),x=a.n(T),B=a(46),D=a(184),A=Object(i.lazy)((function(){return Promise.all([a.e(2),a.e(5)]).then(a.bind(null,506))})),I=Object(i.lazy)((function(){return a.e(25).then(a.bind(null,747))})),R="http://192.168.1.27:7001/api/v1/",L=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://192.168.1.27:7001/api/v1/",REACT_APP_BACKEND_URLLOCAL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,_=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var o;return Object(r.a)(this,a),(o=e.call(this,t)).inputChange=function(t){return function(e){o.setState(Object(n.a)({},t,e.target.value))}},o.discount=function(t){return function(t){var e=parseFloat(t.target.value)/100*parseFloat(localStorage.getItem("GrandTotalNetto"));o.setState({discGlobalGr:e.toFixed(3),discGlobalPr:t.target.value,GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto"))-e.toFixed(3)).toFixed(3)})}},o.state={listLokasi:[],listSales:[],listCustomer:[],columns:[{dataField:"kodeJenis",text:"Kode Barang"},{dataField:"kadarCetak",text:"Kadar Cetak(%)"},{dataField:"p",text:"P"},{dataField:"k",text:"K"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"kadarTransaksi",text:"Harga(%)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"discGlobalPr",text:"%",footerClasses:"sum-netto-terima-supplier"},{dataField:"discGlobalGr",text:"Disc (Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"nettoDiscGlobalExt",text:"Netto Disc(Gr)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return o.deleteRow(a,e.nettoDiscGlobalExt)}},c.a.createElement(F.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash mr-1"})),c.a.createElement("br",null))}}],discGlobalGr:0,discGlobalPr:0,totalNWExt:0,noBon:"",namaCustomer:"",lokasi:"",sales:"",namaToko:"",tanggal:""},o}return Object(o.a)(a,[{key:"deleteRow",value:function(t,e){var a=this;k.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){if(n.isConfirmed){var r=JSON.parse(localStorage.getItem("returnPenjualan"))||[];r.splice(t,1),localStorage.setItem("returnPenjualan",JSON.stringify(r));var o=localStorage.getItem("GrandTotalNetto"),s=parseFloat(o)-parseFloat(e);localStorage.setItem("GrandTotalNetto",parseFloat(s).toFixed(3)),k.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a.props.dispatch(Object(O.d)())})).then((function(){return a.props.dispatch(Object(O.c)())})).then((function(){return a.setState({GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto")||0)-0).toFixed(3)})}))}}))}},{key:"componentDidMount",value:function(){var t=this;h.a.get(R+"storages2?tipeData=LOKASI").then((function(e){return t.setState({listLokasi:e.data})})),h.a.get(R+"storages2?tipeData=SALES").then((function(e){return t.setState({listSales:e.data})})),h.a.get(R+"customers").then((function(e){return t.setState({listCustomer:e.data})})),this.props.dispatch(Object(b.b)()),this.props.dispatch(Object(O.d)()),this.props.dispatch(Object(O.c)()),this.props.dispatch(Object(C.l)("returnPenjualan")),this.props.dispatch(Object(C.o)("returnPenjualan")),this.props.dispatch(Object(C.q)("returnPenjualan")),this.props.dispatch(Object(C.s)("returnPenjualan")),this.props.dispatch(Object(C.m)("returnPenjualan")),this.props.dispatch(Object(C.p)("returnPenjualan")),this.props.dispatch(Object(C.n)("returnPenjualan")),this.props.dispatch(Object(C.r)("returnPenjualan")),this.setState({GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto")||0)-0).toFixed(3)})}},{key:"handleSubmit",value:function(t){var e=(t.kodeBarang?t.kodeBarang:"DEFAULT|DEFAULT|DEFAULT|DEFAULT").split("|"),a={noFaktur:this.props.noFaktur,nettoDiscGlobalExt:t.nettoDiscGlobalExt,gross:parseFloat(t.gross),netto:parseFloat(t.netto),qty:1,k:parseFloat(t.k),rp:parseFloat(void 0===t.rp?0:t.rp),kadarCetak:e[2].toUpperCase(),keterangan:t.keterangan.toUpperCase(),discGlobalPr:t.discGlobalPr,kodeKategori:"-",kadarTransaksi:parseFloat(t.kadarTransaksi),kodeJenis:e[0].toUpperCase(),noBarcode:"-",p:parseFloat(t.p),discGlobalGr:t.discGlobalGr,pkg:parseFloat(t.pkg),bruto:parseFloat(t.bruto),nettoDiscGlobal:0},n=JSON.parse(localStorage.getItem("returnPenjualan"))||[];n.push(a);var r=n.map((function(t){return parseFloat(t.nettoDiscGlobalExt)})).reduce((function(t,e){return t+e}),0).toFixed(3);localStorage.setItem("GrandTotalNetto",r),localStorage.setItem("returnPenjualan",JSON.stringify(n)),k.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.dispatch(Object(O.c)()),this.props.dispatch(Object(O.d)()),this.props.dispatch(Object(m.a)("FormTransaksiPenjualan")),document.getElementById("dismissModal").click(),this.setState({discGlobalGr:parseFloat(0)/100*parseFloat(localStorage.getItem("GrandTotalNetto")),discGlobalPr:0,GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto"))-0).toFixed(3)})}},{key:"transaksiPenjualanSubmit",value:function(){var t=this;if(null===localStorage.getItem("returnPenjualan"))return Object(P.e)("Barang masih kosong, Silahkan tambah barang"),!1;if(""===this.state.noBon)return Object(P.e)("Mohon isi Nomor bon"),!1;if(""===this.state.lokasi)return Object(P.e)("Mohon pilih lokasi"),!1;if(""===this.state.sales)return Object(P.e)("Mohon pilih Sales"),!1;if(""===this.state.namaToko)return Object(P.e)("Mohon pilih toko"),!1;if(""===this.state.discGlobalPr)return Object(P.e)("Mohon isi Discount"),!1;if(""===this.state.discGlobalGr)return Object(P.e)("Mohon isi Discount Gr"),!1;if(0===this.state.totalNWExt)return Object(P.e)("Mohon isi Grand Total"),!1;if(""===this.state.tanggal)return Object(P.e)("Mohon isi Tanggal"),!1;var e={totalNettoExt:this.state.totalNWExt,totalNettoFaktur:this.props.gross,discPr:this.state.discGlobalPr,discGr:this.state.discGlobalGr,totalNettoAkhir:parseFloat(this.props.gross)-parseFloat(this.state.discGlobalGr)},a={totalBruto:this.props.sumBruto,totalNetto:this.props.sumNetto,totalNettoExt:0,totalGross:this.props.sumGross,totalRp:this.props.sumRp,totalQty:this.props.sumQty,totalK:this.props.sumK,totalP:this.props.sumP,totalpkg:this.props.sumPkg},n={noBon:this.state.noBon.toUpperCase(),noFaktur:this.props.noFaktur.toUpperCase(),tanggal:this.state.tanggal,kodeLokasi:this.state.lokasi,kodeSales:this.state.sales,namaToko:this.state.kodeSupplier,kodeCustomer:this.state.namaSupplier,barangDetails:JSON.parse(localStorage.getItem("returnPenjualan")),headDiscount:e,footerItem:a,footerDocument:{inputBy:this.props.username}};console.log(JSON.stringify(n)),this.props.dispatch(Object(C.t)());var r=[],o=JSON.parse(localStorage.getItem("returnPenjualan"));o.forEach((function(t,e){var a=[e++,t.kadarCetak,t.kodeJenis,t.keterangan,parseFloat(t.bruto).toFixed(3),t.kadarTransaksi,t.discGlobalGr,parseFloat(t.netto).toFixed(3),t.pkg,t.qty,"Rp. "+parseFloat(t.rp).toLocaleString("id-ID")];r.push(a)}));var s=["","","","",o.map((function(t){return parseFloat(t.bruto)})).reduce((function(t,e){return t+e}),0).toFixed(3),"",o.map((function(t){return parseFloat(t.discGlobalGr)})).reduce((function(t,e){return t+e}),0).toFixed(3),o.map((function(t){return parseFloat(t.netto)})).reduce((function(t,e){return t+e}),0).toFixed(3),o.map((function(t){return parseFloat(t.pkg)})).reduce((function(t,e){return t+e}),0),o.map((function(t){return parseFloat(t.qty)})).reduce((function(t,e){return t+e}),0),"Rp. "+o.map((function(t){return parseFloat(t.rp)})).reduce((function(t,e){return t+e}),0).toLocaleString("id-ID")];r.push(s),console.log(JSON.stringify(r));var l=["No","Kadar","Kode","Keterangan","Bruto (Gr)","Harga(%)","Diskon","Netto(Gr)","Pkg","Qty","Ongkos(Rp)"];h.a.post(L+"cst/dc/rtr",n).then((function(){return k.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return Object(y.a)("no Return",t.props.noFaktur.toUpperCase(),"Tanggal",t.state.tanggal,"No Bon",t.state.noBon.toUpperCase(),"Sales",t.state.sales.toUpperCase(),"ADMIN",t.state.tanggal,"",l,"Return Penjualan",r)})).then((function(){return t.props.dispatch(Object(C.k)())})).then((function(){return localStorage.removeItem("returnPenjualan")})).then((function(){return localStorage.removeItem("GrandTotalNetto")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(b.b)())})).then((function(){return t.props.dispatch(Object(O.d)())})).then((function(){return t.props.dispatch(Object(O.c)())})).then((function(){return document.getElementById("myForm").reset()})).then((function(){return t.setState({discGlobalGr:0,discGlobalPr:0,totalNWExt:0,noBon:"",namaCustomer:"",lokasi:"",sales:"",namaToko:"",tanggal:"",GrandTotalNetto:0,toko:""})}))})).catch((function(e){return k.a.fire({position:"top-end",icon:"error",text:"Data Gagal Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(C.k)())}))})),console.log(n)}},{key:"onSubmit",value:function(t,e){this.setState(Object(n.a)({},e,t))}},{key:"onSubmitToko",value:function(t,e){var a=t.split("|");this.setState({kodeCustomer:a[0],namaCustomer:a[1],namaToko:a[2],toko:t})}},{key:"render",value:function(){var t=this,e=this.state.listCustomer.map((function(t){return{value:t.kodeCustomer+"|"+t.namaCustomer,name:t.namaToko}})),a=this.state.listSales.map((function(t){return{value:t.kodeLokasi,name:t.namaLokasi}})),n=this.state.listLokasi.map((function(t){return{value:t.kodeLokasi,name:t.namaLokasi}}));return console.log(e),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement(D.default,{title:"Return Penjualan"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("form",{id:"myForm",onKeyDown:function(t){return"Enter"!==t.key}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{name:"tanggal",type:"date",label:"Tanggal",className:"form-control",onChange:this.inputChange("tanggal"),value:this.state.tanggal}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"No Bon"),c.a.createElement("input",{name:"noBon",type:"text",label:"No Bon",className:"form-control",onChange:this.inputChange("noBon"),value:this.state.noBon}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"}),c.a.createElement("div",{className:"col-lg-3 col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Lokasi"),c.a.createElement(g.a,{options:n,search:!0,placeholder:"Silahkan Pilih",onChange:function(e){return t.onSubmit(e,"lokasi")},value:this.state.lokasi}))),c.a.createElement("div",{className:"col-lg-3 col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Sales"),c.a.createElement(g.a,{options:a,search:!0,placeholder:"Silahkan Pilih",onChange:function(e){return t.onSubmit(e,"sales")},value:this.state.sales}))),c.a.createElement("div",{className:"col-lg-3 col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Nama Toko"),c.a.createElement(g.a,{options:e,search:!0,placeholder:"Silahkan Pilih",onChange:function(e){return t.onSubmitToko(e,"namaToko")},value:this.state.toko}))),c.a.createElement("div",{className:"col-lg-3 col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Customer"),c.a.createElement("input",{name:"customer",type:"text",className:"form-control",label:"Customer",onChange:this.inputChange("customer"),defaultValue:this.state.namaCustomer}))),c.a.createElement("div",{className:"col-lg-3 mb-3"},c.a.createElement("label",{htmlFor:""},"Total NW"),c.a.createElement("input",{name:"totalNW",type:"number",className:"form-control",min:0,step:.01,label:"totalNW",value:this.props.totalNW,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Disc Global (%)"),c.a.createElement("input",{name:"discGlobal",type:"number",className:"form-control",min:0,step:.01,label:"discGlobal",onChange:this.discount("discGlobal"),value:this.state.discGlobalPr})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Disc (Gr)"),c.a.createElement("input",{name:"discGlobal",type:"number",className:"form-control",label:"discGlobal",value:this.state.discGlobalGr,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Grand Total Netto"),c.a.createElement("input",{name:"totalNW",type:"number",className:"form-control",label:"totalNW",value:this.state.GrandTotalNetto,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Grand Total Netto Ext"),c.a.createElement("input",{name:"totalNWExt",type:"text",className:"form-control",label:"totalNWExt",onChange:this.inputChange("totalNWExt"),value:this.state.totalNWExt}))))),c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"}),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.props.dispatch(Object(B.j)())}},"Tambah Barang",c.a.createElement("i",{class:"fa fa-plus ml-3","aria-hidden":"true"})))))),c.a.createElement("div",{className:"col-lg-12 mt-5"},this.props.returnPenjualan?c.a.createElement(N.a,{keyField:"id",data:this.props.returnPenjualan,columns:this.state.columns,search:!0},(function(t){return c.a.createElement("div",{className:"form-group"},c.a.createElement(S.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:j()()})))})):c.a.createElement(N.a,{keyField:"id",data:[],columns:this.state.columns,search:!0},(function(t){return c.a.createElement("div",{className:"form-group"},c.a.createElement(S.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:j()(),noDataIndication:"Tidak Ada Data"})))})),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return t.transaksiPenjualanSubmit()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{class:"fa fa-paper-plane ml-3","aria-hidden":"true"})))))))),c.a.createElement(A,{content:c.a.createElement(i.Suspense,{fallback:c.a.createElement(x.a,{width:"100%",height:50,count:5})},c.a.createElement(I,{onSubmit:function(e){return t.handleSubmit(e)}})),title:"Tambah Barang"}))}}]),a}(i.Component);_=Object(p.a)({form:"ReturnPenjualan",enableReinitialize:!0})(_),e.default=Object(u.b)((function(t){return{noFaktur:t.provinsi.noFaktur,username:t.provinsi.username,returnPenjualan:t.provinsi.returnPenjualan,listCustomer:t.provinsi.customer,listLokasi:t.provinsi.lokasi,listSales:t.provinsi.salesman,totalNW:t.provinsi.totalNW,sumNetto:t.perhitungan.sumNetto,sumBruto:t.perhitungan.sumBruto,sumPkg:t.perhitungan.sumPkg,sumP:t.perhitungan.sumP,sumK:t.perhitungan.sumK,sumQty:t.perhitungan.sumNetto,sumGross:t.perhitungan.sumGross,sumRp:t.perhitungan.sumRp,onSend:t.provinsi.onSend}}),null)(_)},182:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(20),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors}}]);
//# sourceMappingURL=129.a4f57176.chunk.js.map