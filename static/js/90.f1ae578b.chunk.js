(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[90],{1179:function(t,a,e){"use strict";e.r(a);var n=e(22),r=e(23),o=e(25),i=e(24),s=e(0),l=e.n(s),c=e(478),u=e.n(c),d=e(120),p=e(468),m=e(283),h=e(538),k=e(8),f=e.n(k),b=e(15),g=e(39),S=e(9),C=e(49),E=e.n(C),v=e(64),y=e(26),O=e(513),B=e(16),N=e.n(B),F=e(51),j=Object(s.lazy)((function(){return e.e(101).then(e.bind(null,1125))})),A=Object(s.lazy)((function(){return Promise.all([e.e(4),e.e(59)]).then(e.bind(null,1126))})),T=Object(s.lazy)((function(){return Promise.all([e.e(2),e.e(5)]).then(e.bind(null,506))})),x=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,D=function(t){Object(o.a)(e,t);var a=Object(i.a)(e);function e(t){var r;return Object(n.a)(this,e),(r=a.call(this,t)).state={columns:[{dataField:"kodeJenis",text:"Kode Barang",footer:""},{dataField:"kadarTransaksi",text:"Kat Harga",footer:"Total Bruto"},{dataField:"bruto",text:"Bruto (Gr)",footer:function(t){return t.reduce((function(t,a){return parseFloat(t)+parseFloat(a)}),0).toFixed(3)}},{dataField:"kadarTransaksi",text:"Harga",footer:"Total Netto"},{dataField:"netto",text:"Netto (Gr)",footer:function(t){return t.reduce((function(t,a){return parseFloat(t)+parseFloat(a)}),0).toFixed(3)}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,a,e){return l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return Object(O.a)("mutasiCiok",e,r.props.dispatch,Object(m.b)())}},l.a.createElement(h.a,{id:"hapus",type:"dark",effect:"solid"},l.a.createElement("span",null,"Hapus")),l.a.createElement("i",{className:"fa fa-trash mr-1"})),l.a.createElement("br",null))}}]},r}return Object(r.a)(e,[{key:"handleSubmit",value:function(t){var a=this;if(void 0===t.jenisMutasi)return Object(y.e)("Silahkan Pilih jenis Mutasi"),!1;if(void 0===t.keterangan)return Object(y.e)("Silahkan isi keterangan"),!1;if(void 0===t.noBon)return Object(y.e)("Silahkan isi Nomor Bon"),!1;if(void 0===t.tanggal)return Object(y.e)("Silahkan isi tanggal"),!1;if(void 0===t.transaksi)return Object(y.e)("Silahkan pilih jenis Transaksi"),!1;if(null===localStorage.getItem("mutasiCiok"))return Object(y.e)("Mohon Tambahkan Barang Yang akan dipindahkan"),!1;var e={noFaktur:t.noMutasi.toUpperCase(),tanggal:t.tanggal.toUpperCase(),kategoriTransaksi:t.transaksi.toUpperCase(),noBon:t.noBon.toUpperCase(),kodeLokasi:"PUSAT",keterangan:t.keterangan.toUpperCase(),tipeFaktur:t.jenisMutasi.toUpperCase(),barangDetails:JSON.parse(localStorage.getItem("mutasiCiok")),footerItem:{totalP:0,totalK:0,totalBruto:this.props.sumBruto,totalNetto:this.props.sumNetto,totalNettoExt:0,totalQty:this.props.sumQty,totalpkg:0,totalGross:0,totalRp:0},footerDocument:{inputBy:this.props.username}};this.props.dispatch(Object(S.t)());var n=[];JSON.parse(localStorage.getItem("mutasiCiok")).forEach((function(t,a){var e=[a++,t.kodeJenis,t.bruto,t.kadarTransaksi,t.netto];n.push(e)})),console.log(n);var r=["No","Jenis","Bruto","kadar (%)","Netto"];E.a.post(x+"item/dc/mutasilk",e).then((function(){return f.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(S.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return Object(v.a)("Tanggal",t.tanggal.toUpperCase(),"Keterangan",t.keterangan.toUpperCase(),"No Pindah",a.props.noFaktur.toUpperCase(),"","","ADMIN",t.tanggal.toUpperCase(),"",r,"MUTASI BARANG",n)})).then((function(){return localStorage.removeItem("mutasiCiok")})).then((function(){return a.props.dispatch(Object(d.a)("FormHeadMutasiCiok"))})).then((function(){return a.props.dispatch(Object(m.b)())})).then((function(){return a.props.dispatch(Object(g.b)())}))})).catch((function(t){return f.a.fire({position:"top-end",icon:"error",text:"Sepertinya ada kendala, silahkan cek koneksi",showConfirmButton:!1,timer:1500}).then((function(){return console.log(t)})).then((function(){return a.props.dispatch(Object(S.k)())}))}))}},{key:"handleSubmitModal",value:function(t){var a=this,e=(t.kodeBarang?t.kodeBarang:"DEFAULT|DEFAULT|DEFAULT").split("|"),n=JSON.parse(localStorage.getItem("mutasiCiok"))||[],r={kadarTransaksi:parseFloat(t.kadarTransaksi).toFixed(3),qty:1,kodeJenis:e[0],p:0,pkg:0,kodeKategori:"-",noBarcode:"-",k:0,discGlobalPr:0,kadarCetak:parseFloat(e[1]).toFixed(3),gross:0,nettoDiscGlobal:0,discGlobalGr:0,nettoDiscGlobalExt:0,noFaktur:this.props.noFaktur.toUpperCase(),bruto:parseFloat(t.bruto).toFixed(3),netto:parseFloat(t.netto).toFixed(3),keterangan:t.keterangan.toUpperCase(),rp:0};n.push(r),localStorage.setItem("mutasiCiok",JSON.stringify(n)),f.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(d.a)("FormMutasiCiok"))})).then((function(){return a.props.dispatch(Object(m.b)())})).then((function(){return a.props.dispatch(Object(S.k)())}))}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.b)()),this.props.dispatch(Object(g.b)()),this.props.dispatch(Object(S.l)("mutasiCiok")),this.props.dispatch(Object(S.o)("mutasiCiok")),this.props.dispatch(Object(S.r)("mutasiCiok"))}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"container-fluid",style:{color:"black"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement(F.default,{title:"Mutasi Ciok & Rosok"}),l.a.createElement("div",{className:"card-body"},l.a.createElement(T,{content:l.a.createElement(s.Suspense,{fallback:l.a.createElement(N.a,{width:"100%",height:50,count:5})},l.a.createElement(A,{onSubmit:function(a){return t.handleSubmitModal(a)},noFaktur:this.props.noFaktur})),title:"Tambah Data Mutasi Ciok"}),l.a.createElement("div",{className:"row"},l.a.createElement(s.Suspense,{fallback:l.a.createElement(N.a,{width:"100%",height:50,count:5})},l.a.createElement(j,{onSubmit:function(a){return t.handleSubmit(a)},noFaktur:this.props.noFaktur,onSend:this.props.onSend})),l.a.createElement("div",{className:"col-md-12 col-lg-12"},this.props.listBarang?l.a.createElement(u.a,{keyField:"id",data:this.props.listBarang,columns:this.state.columns,bordered:!0,headerClasses:"header-table"}):l.a.createElement(u.a,{keyField:"id",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"}))))))),l.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-lg"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},l.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Mutasi Barang"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),l.a.createElement("div",{className:"modal-body"})))))}}]),e}(s.Component);D=Object(p.a)({form:"MutasiCiok",enableReinitialize:!0})(D),a.default=Object(b.b)((function(t){return{listBarang:t.provinsi.mutasiCiok,noFaktur:t.provinsi.noFaktur,username:t.provinsi.username,sumBruto:t.perhitungan.sumBruto,sumNetto:t.perhitungan.sumNetto,sumQty:t.perhitungan.sumQty,onSend:t.provinsi.onSend}}),null)(D)},120:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var n=e(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},513:function(t,a,e){"use strict";e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return s}));var n=e(8),r=e.n(n),o=function(t){t.forEach((function(t){localStorage.removeItem(t)}))},i=function(t,a,e,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(t))||[];i.splice(a,1),localStorage.setItem(t,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return e(n)}))}}))},s=function(t,a,e,n){return new Promise((function(o,i){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){if(i.isConfirmed){var s=JSON.parse(localStorage.getItem(t))||[];s.splice(a,1),localStorage.setItem(t,JSON.stringify(s)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return e(n)})).then(o("Berhasil")).catch("Gagal")}}))}))}}}]);
//# sourceMappingURL=90.f1ae578b.chunk.js.map