(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[77],{1137:function(a,t,e){"use strict";e.r(t);var n=e(35),r=e(36),i=e(38),s=e(37),c=e(61),l=e.n(c),o=e(0),u=e.n(o),d=e(477),m=e.n(d),h=e(502),p=e.n(h),b=e(503),f=e.n(b),E=e(23),k=e.n(E),g=e(18),v=e(182),y=e(69),S=e(46),A=e(56),N=e(628),O=e(184),F=Object(o.lazy)((function(){return Promise.all([e.e(4),e.e(19)]).then(e.bind(null,742))})),_=Object(o.lazy)((function(){return Promise.all([e.e(2),e.e(5)]).then(e.bind(null,505))})),P=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7001/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,j=function(a){Object(i.a)(e,a);var t=Object(s.a)(e);function e(a){var r;return Object(n.a)(this,e),(r=t.call(this,a)).state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Aktor"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(a,t){if(-1===Object(N.a)("FakturTerpilih",t.noFaktur))return u.a.createElement("div",{className:"text-center"},u.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(a){return r.klikPilih(t)}},u.a.createElement("i",{className:"fa fa-check-circle mr-1"}),"Pilih"))}}],listValidasiBarang:[{tanggal:"2020-12-12",noFaktur:"NOFAKTUR-0001",netto:"100"}]},r}return Object(r.a)(e,[{key:"componentDidMount",value:function(){this.getData()}},{key:"klikPilih",value:function(a){this.props.dispatch(Object(S.j)()),this.setState({noFaktur:a.noFaktur,bruto:a.bruto})}},{key:"getData",value:function(){var a=this;l.a.get(P+"cst/dc/lm/heads?statusValid=VALID").then((function(t){return a.setState({listValidasiBarang:t.data.filter((function(a){return"JUAL LM"===a.tipeTransaksi&&a.bruto>0}))})}))}},{key:"handleModal",value:function(a){var t=this,e={noFaktur:a.noFaktur,barangDetails:[{bruto:a.jumlah}],footerDocument:{inputBy:this.props.username}};console.log(JSON.stringify(e)),l.a.put(P+"cst/dc/lmoutstand",e).then((function(){return t.props.dispatch(Object(S.g)())})).then((function(){return Object(A.b)("Validasi Stok berhasil \nTerima kasih")})).then((function(){return t.getData()})).catch((function(){return Object(A.c)("Mohon maaf, Sepertinya koneksi internet sedang bermasalah")})),this.props.dispatch(Object(v.a)("FormModalValidasiStok")),this.props.dispatch(Object(y.b)())}},{key:"render",value:function(){var a=this;return u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"card"},u.a.createElement(O.default,{title:"Validasi Stok Penjualan LM"}),u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:this.state.step1},u.a.createElement("div",{className:"col-lg-12 mt-3"},this.state.listValidasiBarang?u.a.createElement(f.a,{keyField:"id",data:this.state.listValidasiBarang,columns:this.state.columns,search:!0},(function(a){return u.a.createElement("div",{className:"form-group"},u.a.createElement(m.a,Object.assign({},a.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:p()()})))})):u.a.createElement(k.a,{width:"100%",height:50,count:5,className:"mb-1"})),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.kirimvalidasi(a.state.tipeTransaksi)}},u.a.createElement("i",{className:"fa fa-check mr-3"}),"VALIDASI"))))))))),u.a.createElement(_,{content:u.a.createElement(o.Suspense,{fallback:u.a.createElement(k.a,{width:"100%",height:50,count:5})},u.a.createElement(F,{onSubmit:function(t){return a.handleModal(t)},noFaktur:this.state.noFaktur,bruto:this.state.bruto})),title:""}))}}]),e}(o.Component);t.default=Object(g.b)((function(a){return{username:a.provinsi.username}}),null)(j)},182:function(a,t,e){"use strict";e.d(t,"a",(function(){return r}));var n=e(19),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},628:function(a,t,e){"use strict";e.d(t,"a",(function(){return n}));e(10),e(56);var n=function(a,t){return(JSON.parse(localStorage.getItem(a))||[]).findIndex((function(a,e){return a.noFaktur===t}))}}}]);
//# sourceMappingURL=77.f73e8034.chunk.js.map