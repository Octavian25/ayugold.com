(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[74,174],{1185:function(t,e,a){"use strict";a.r(e);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),l=a.n(s),c=a(468),u=a.n(c),d=a(289),p=a(459),m=a(272),h=a(534),f=a(27),k=a.n(f),b=a(28),g=a(178),v=a(23),S=a(46),C=a.n(S),E=a(497),y=a(174),O=a(508),x=a(173),N=a.n(x),B=a(465),F=Object(s.lazy)((function(){return a.e(80).then(a.bind(null,1129))})),j=Object(s.lazy)((function(){return Promise.all([a.e(4),a.e(145),a.e(94)]).then(a.bind(null,1130))})),T=Object(s.lazy)((function(){return Promise.all([a.e(2),a.e(6)]).then(a.bind(null,499))})),A=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://ayu-grosir-api.herokuapp.com/api/v1/",REACT_APP_BACKEND_URL_WEB:"http://147.139.182.75:3759/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,D=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={columns:[{dataField:"kodeJenis",text:"Kode Barang",footer:""},{dataField:"kadarTransaksi",text:"Kat Harga",footer:"Total Bruto"},{dataField:"bruto",text:"Bruto (Gr)",footer:function(t){return t.reduce((function(t,e){return parseFloat(t)+parseFloat(e)}),0).toFixed(3)}},{dataField:"kadarTransaksi",text:"Harga",footer:"Total Netto"},{dataField:"netto",text:"Netto (Gr)",footer:function(t){return t.reduce((function(t,e){return parseFloat(t)+parseFloat(e)}),0).toFixed(3)}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e,a){return l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return Object(O.a)("mutasiCiok",a,r.props.dispatch,Object(m.b)())}},l.a.createElement(h.a,{id:"hapus",type:"dark",effect:"solid"},l.a.createElement("span",null,"Hapus")),l.a.createElement("i",{className:"fa fa-trash mr-1"})),l.a.createElement("br",null))}}]},r}return Object(r.a)(a,[{key:"handleSubmit",value:function(t){var e=this;if(void 0===t.jenisMutasi)return Object(y.e)("Silahkan Pilih jenis Mutasi"),!1;if(void 0===t.keterangan)return Object(y.e)("Silahkan isi keterangan"),!1;if(void 0===t.noBon)return Object(y.e)("Silahkan isi Nomor Bon"),!1;if(void 0===t.tanggal)return Object(y.e)("Silahkan isi tanggal"),!1;if(void 0===t.transaksi)return Object(y.e)("Silahkan pilih jenis Transaksi"),!1;if(null===localStorage.getItem("mutasiCiok"))return Object(y.e)("Mohon Tambahkan Barang Yang akan dipindahkan"),!1;var a={noFaktur:t.noMutasi.toUpperCase(),tanggal:t.tanggal.toUpperCase(),kategoriTransaksi:t.transaksi.toUpperCase(),noBon:t.noBon.toUpperCase(),kodeLokasi:"PUSAT",keterangan:t.keterangan.toUpperCase(),tipeFaktur:t.jenisMutasi.toUpperCase(),barangDetails:JSON.parse(localStorage.getItem("mutasiCiok")),footerItem:{totalP:0,totalK:0,totalBruto:this.props.sumBruto,totalNetto:this.props.sumNetto,totalNettoExt:0,totalQty:this.props.sumQty,totalpkg:0,totalGross:0,totalRp:0},footerDocument:{inputBy:this.props.username}};this.props.dispatch(Object(v.t)());var n=[];JSON.parse(localStorage.getItem("mutasiCiok")).forEach((function(t,e){var a=[e++,t.kodeJenis,t.bruto,t.kadarTransaksi,t.netto];n.push(a)})),console.log(n);var r=["No","Jenis","Bruto","kadar (%)","Netto"];C.a.post(A+"item/dc/mutasilk",a).then((function(){return k.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(v.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return Object(E.a)("Tanggal",t.tanggal.toUpperCase(),"Keterangan",t.keterangan.toUpperCase(),"No Pindah",e.props.noFaktur.toUpperCase(),"","","ADMIN",t.tanggal.toUpperCase(),"",r,"MUTASI BARANG",n)})).then((function(){return localStorage.removeItem("mutasiCiok")})).then((function(){return e.props.dispatch(Object(d.a)("FormHeadMutasiCiok"))})).then((function(){return e.props.dispatch(Object(m.b)())})).then((function(){return e.props.dispatch(Object(g.b)())}))})).catch((function(t){return k.a.fire({position:"top-end",icon:"error",text:"Sepertinya ada kendala, silahkan cek koneksi",showConfirmButton:!1,timer:1500}).then((function(){return console.log(t)})).then((function(){return e.props.dispatch(Object(v.k)())}))}))}},{key:"handleSubmitModal",value:function(t){var e=this,a=(t.kodeBarang?t.kodeBarang:"DEFAULT|DEFAULT|DEFAULT").split("|"),n=JSON.parse(localStorage.getItem("mutasiCiok"))||[],r={kadarTransaksi:parseFloat(t.kadarTransaksi).toFixed(3),qty:1,kodeJenis:a[0],p:0,pkg:0,kodeKategori:"-",noBarcode:"-",k:0,discGlobalPr:0,kadarCetak:parseFloat(a[1]).toFixed(3),gross:0,nettoDiscGlobal:0,discGlobalGr:0,nettoDiscGlobalExt:0,noFaktur:this.props.noFaktur.toUpperCase(),bruto:parseFloat(t.bruto).toFixed(3),netto:parseFloat(t.netto).toFixed(3),keterangan:t.keterangan.toUpperCase(),rp:0};n.push(r),localStorage.setItem("mutasiCiok",JSON.stringify(n)),k.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(d.a)("FormMutasiCiok"))})).then((function(){return e.props.dispatch(Object(m.b)())})).then((function(){return e.props.dispatch(Object(v.k)())}))}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.b)()),this.props.dispatch(Object(g.b)()),this.props.dispatch(Object(v.l)("mutasiCiok")),this.props.dispatch(Object(v.o)("mutasiCiok")),this.props.dispatch(Object(v.r)("mutasiCiok"))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"container-fluid",style:{color:"black"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement(B.default,{title:"Mutasi Ciok & Rosok"}),l.a.createElement("div",{className:"card-body"},l.a.createElement(T,{content:l.a.createElement(s.Suspense,{fallback:l.a.createElement(N.a,{width:"100%",height:50,count:5})},l.a.createElement(j,{onSubmit:function(e){return t.handleSubmitModal(e)},noFaktur:this.props.noFaktur})),title:"Tambah Data Mutasi Ciok"}),l.a.createElement("div",{className:"row"},l.a.createElement(s.Suspense,{fallback:l.a.createElement(N.a,{width:"100%",height:50,count:5})},l.a.createElement(F,{onSubmit:function(e){return t.handleSubmit(e)},noFaktur:this.props.noFaktur,onSend:this.props.onSend})),l.a.createElement("div",{className:"col-md-12 col-lg-12"},this.props.listBarang?l.a.createElement(u.a,{keyField:"id",data:this.props.listBarang,columns:this.state.columns,bordered:!0,headerClasses:"header-table"}):l.a.createElement(u.a,{keyField:"id",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"}))))))),l.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-lg"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},l.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Mutasi Barang"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),l.a.createElement("div",{className:"modal-body"})))))}}]),a}(s.Component);D=Object(p.a)({form:"MutasiCiok",enableReinitialize:!0})(D),e.default=Object(b.b)((function(t){return{listBarang:t.provinsi.mutasiCiok,noFaktur:t.provinsi.noFaktur,username:t.provinsi.username,sumBruto:t.perhitungan.sumBruto,sumNetto:t.perhitungan.sumNetto,sumQty:t.perhitungan.sumQty,onSend:t.provinsi.onSend}}),null)(D)},289:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(16),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},465:function(t,e,a){"use strict";a.r(e);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),l=a.n(s),c=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(s.Component);e.default=c},497:function(t,e,a){"use strict";var n=a(501);a(502);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],m=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,f=new n.default;f.autoTable(p,h,{startY:40});var k=f.lastAutoTable.finalY+10;f.text(m,14,15),f.setFontSize(10),f.text(t,14,25),f.text(":",37,25),f.text(e,40,25),f.text(a,120,25),f.text(":",141,25),f.text(r,145,25),f.text(o,14,30),f.text(":",37,30),f.text(i,40,30),f.text(s,120,30),f.text(":",141,30),f.text(l,145,30),f.text("User",160,k+10),f.text(":",168,k+10),f.text(c,170,k+10),f.text("Cetak",160,k+15),f.text(":",168,k+15),f.text(u,170,k+15),f.text("Valid",160,k+20),f.text(":",168,k+20),f.text(d,170,k+20);var b=f.output("datauristring"),g="<embed width='100%' height='100%' src='"+b+"'/>",v=window.open();v.document.open(),v.document.write(g),v.document.close()}},508:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var n=a(27),r=a.n(n),o=function(t){t.forEach((function(t){localStorage.removeItem(t)}))},i=function(t,e,a,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(t))||[];i.splice(e,1),localStorage.setItem(t,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)}))}}))},s=function(t,e,a,n){return new Promise((function(o,i){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){if(i.isConfirmed){var s=JSON.parse(localStorage.getItem(t))||[];s.splice(e,1),localStorage.setItem(t,JSON.stringify(s)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)})).then(o("Berhasil")).catch("Gagal")}}))}))}}}]);
//# sourceMappingURL=74.787b81ca.chunk.js.map