(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[118],{1134:function(t,a,e){"use strict";e.r(a);var n=e(71),o=e(72),r=e(74),i=e(73),l=e(0),s=e.n(l),u=e(173),p=e.n(u),c=e(28),h=e(19),d=e.n(h),m=e(56),g=e.n(m),k=e(289),f=e(455),b=e(178),v=e(493),S=e(174),T=e(504),B=e(16),y=["totalTransfer","alatBayarBarang","totalBrutoCiok","totalCiok","ciokTemp","TotalTunai","alatBayarTunai","transferTemp","alatBayarTrf","cashTemp","cashTempRp","alatBayarTunaiRp","transferTempRp","alatBayarTrfRp"],R=Object(l.lazy)((function(){return Promise.all([e.e(147),e.e(74)]).then(e.bind(null,1135))})),E=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,O=function(t){Object(r.a)(e,t);var a=Object(i.a)(e);function e(t){var o;return Object(n.a)(this,e),(o=a.call(this,t)).state={listSupplier:[]},o}return Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(b.b)())}},{key:"handleSubmitGr",value:function(t){var a=this,e=JSON.parse(localStorage.getItem("alatBayarTrf")),n=JSON.parse(localStorage.getItem("alatBayarTunai")),o=(t.supplier?t.supplier:"DEFAULT | DEFUALT").split("|"),r={alatBayarBarang:null,alatBayarTunai:n,alatBayarTrf:e,alatBayarGiro:null,totalFakutrTrx:null,totalAlatBayar:{totalRsk:this.props.totalRongsok,totalCt:this.props.totalCiok,totalTunaiRp:null!==n?parseFloat(n[0].tunaiNetto):0,totalTrfRp:null!==e?parseFloat(e[0].transferNetto):0,totalPutusGr:0,tipeData:"-",totalPutusRp:0},kodeSupplier:o[0],namaSupplier:o[1],noBon:this.props.noFaktur,noFaktur:this.props.noFaktur,tanggal:t.tanggal,tipeTransaksi:this.state.tipeTransaksi,keterangan:t.kriteria,footerDocument:{inputBy:this.props.username}};console.log(r),this.props.dispatch(Object(B.t)());var i=[[o[1],"BARANG",parseFloat(t.totalBayarCash).toLocaleString("id-ID"),"0"]];console.log(i);var l=["Kode Supplier","Jenis Titipan","Jumlah Titipan Rp","Jumlah Titipan Gr"];g.a.post(E+"/spp/dc/ttp",r).then((function(e){return d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(B.k)())})).then((function(){return Object(T.c)(y)})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(b.b)())})).then((function(){return localStorage.setItem("isLogin",!0)})).then((function(){return a.props.dispatch(Object(k.a)("TitipanRupiah"))})).then((function(){return Object(v.a)("Tanggal",t.tanggal,"","","No Titip",a.props.noFaktur,"","","ADMIN",t.tanggal,"",l,"NOTA TITIP SUPPLIER",i)})).then((function(){return window.history.back()}))})).catch((function(t){return d.a.fire({position:"top-end",icon:"error",text:t,showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(B.k)())}))}))}},{key:"handleSubmitRp",value:function(t){var a=this;if(void 0===t.supplier)return Object(S.e)("Mohon Pilih Supplier"),!1;if(void 0===t.tanggal)return Object(S.e)("Mohon Pilih tanggal"),!1;if(void 0===t.kriteria)return Object(S.e)("Mohon Pilih Kriteria"),!1;var e=JSON.parse(localStorage.getItem("alatBayarBarang")),n=JSON.parse(localStorage.getItem("alatBayarTrf")),o=JSON.parse(localStorage.getItem("alatBayarTunai")),r=(t.supplier?t.supplier:"DEFAULT | DEFUALT").split("|"),i={alatBayarBarang:e,alatBayarTunai:o,alatBayarTrf:n,alatBayarGiro:null,totalFakutrTrx:null,keterangan:"-",totalAlatBayar:{totalRsk:this.props.totalRongsok,totalCt:this.props.totalCiok,totalTunaiRp:null!==o?parseFloat(o[0].tunaiNetto):0,totalTrfRp:null!==n?parseFloat(n[0].transferNetto):0,totalPutusGr:0,tipeData:"-",totalPutusRp:0},kodeSupplier:r[0],namaSupplier:r[1],noBon:t.noBon,noFaktur:this.props.noFaktur,tanggal:t.tanggal,tipeTransaksi:t.kriteria,footerDocument:{inputBy:this.props.username}};console.log(i),this.props.dispatch(Object(B.t)());var l=[[r[1],"RUPIAH","0",parseFloat(t.totalBayar).toLocaleString("id-ID")]];console.log(l);var s=["Kode Supplier","Jenis Titipan","Jumlah Titipan Rp","Jumlah Titipan Gr"];g.a.post(E+"/spp/dc/ttp",i).then((function(e){return d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(B.k)())})).then((function(){return Object(T.c)(y)})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(b.b)())})).then((function(){return a.props.dispatch(Object(k.a)("TitipanRupiah"))})).then((function(){return Object(v.a)("Tanggal",t.tanggal,"","","No Titip",a.props.noFaktur,"","","ADMIN",t.tanggal,"",s,"NOTA TITIP SUPPLIER",l)})).then((function(){return localStorage.setItem("isLogin",!0)})).then((function(){return window.history.back()}))})).catch((function(t){return d.a.fire({position:"top-end",icon:"error",text:t,showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(B.k)())}))}))}},{key:"render",value:function(){var t=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("ul",{className:"nav nav-pills bg-nav-pills nav-justified mb-3"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#rupiah","data-toggle":"tab","aria-expanded":"false",className:"nav-link rounded-0 active",onClick:function(){return t.setState({tipeTransaksi:"BARANG"})}},s.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Gram"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#gram","data-toggle":"tab","aria-expanded":"true",className:"nav-link rounded-0 ",onClick:function(){return t.setState({tipeTransaksi:"RUPIAH"})}},s.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Rupiah")))),s.a.createElement("div",{className:"tab-content"},s.a.createElement("div",{className:"tab-pane show active",id:"rupiah"},s.a.createElement(l.Suspense,{fallback:s.a.createElement(p.a,{width:"100%",height:200})},s.a.createElement(R,{from:"rupiah",noFaktur:this.props.noFaktur,totalCiok:this.props.totalCiok,totalRongsok:this.props.totalRongsok,totalBrutoCiok:this.props.totalBrutoCiok,totalBrutoRongsok:this.props.totalBrutoRongsok,onSubmit:function(a){return t.handleSubmitRp(a)},onSend:this.props.onSend}))),s.a.createElement("div",{className:"tab-pane",id:"gram"},s.a.createElement(l.Suspense,{fallback:s.a.createElement(p.a,{width:"100%",height:200})},s.a.createElement(R,{from:"gram",noFaktur:this.props.noFaktur,totalCiok:this.props.totalCiok,totalRongsok:this.props.totalRongsok,totalBrutoCiok:this.props.totalBrutoCiok,totalBrutoRongsok:this.props.totalBrutoRongsok,onSubmit:function(a){return t.handleSubmitGr(a)},onSend:this.props.onSend})))))}}]),e}(l.Component);O=Object(f.a)({form:"FormTitipanSupplier",enableReinitialize:!0})(O),a.default=Object(c.b)((function(t){return{totalCiok:t.provinsi.totalCiok,totalRongsok:t.provinsi.totalRongsok,totalBrutoCiok:t.provinsi.totalBrutoCiok,totalBrutoRongsok:t.provinsi.totalBrutoRongsok,noFaktur:t.provinsi.noFaktur,username:t.provinsi.username,onSend:t.provinsi.onSend}}),null)(O)},289:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));var n=e(17),o=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},493:function(t,a,e){"use strict";var n=e(496);e(498);a.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",p=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",c=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",h=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],d=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",m=arguments.length>13?arguments[13]:void 0,g=new n.default;g.autoTable(h,m,{startY:40});var k=g.lastAutoTable.finalY+10;g.text(d,14,15),g.setFontSize(10),g.text(t,14,25),g.text(":",37,25),g.text(a,40,25),g.text(e,120,25),g.text(":",141,25),g.text(o,145,25),g.text(r,14,30),g.text(":",37,30),g.text(i,40,30),g.text(l,120,30),g.text(":",141,30),g.text(s,145,30),g.text("User",160,k+10),g.text(":",168,k+10),g.text(u,170,k+10),g.text("Cetak",160,k+15),g.text(":",168,k+15),g.text(p,170,k+15),g.text("Valid",160,k+20),g.text(":",168,k+20),g.text(c,170,k+20);var f=g.output("datauristring"),b="<embed width='100%' height='100%' src='"+f+"'/>",v=window.open();v.document.open(),v.document.write(b),v.document.close()}}}]);
//# sourceMappingURL=118.47839aa7.chunk.js.map