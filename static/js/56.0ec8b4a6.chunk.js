(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[56],{118:function(a,e,t){"use strict";t.d(e,"a",(function(){return o}));var l=t(21),o=(l.a.arrayInsert,l.a.arrayMove,l.a.arrayPop,l.a.arrayPush,l.a.arrayRemove,l.a.arrayRemoveAll,l.a.arrayShift,l.a.arraySplice,l.a.arraySwap,l.a.arrayUnshift,l.a.autofill,l.a.blur,l.a.change,l.a.clearAsyncError,l.a.clearFields,l.a.clearSubmit,l.a.clearSubmitErrors,l.a.destroy,l.a.focus,l.a.initialize,l.a.registerField,l.a.reset);l.a.resetSection,l.a.setSubmitFailed,l.a.setSubmitSucceeded,l.a.startAsyncValidation,l.a.startSubmit,l.a.stopAsyncValidation,l.a.stopSubmit,l.a.submit,l.a.touch,l.a.unregisterField,l.a.untouch,l.a.updateSyncWarnings,l.a.updateSyncErrors},1228:function(a,e,t){"use strict";t.r(e);var l=t(47),o=t(24),n=t(25),r=t(27),s=t(26),i=t(67),c=t.n(i),m=t(0),d=t.n(m),u=t(478),p=t.n(u),h=t(479),g=t.n(h),b=t(480),E=t.n(b),k=t(20),v=t.n(k),S=t(19),N=t(118),T=t(468),f=t(69),y=t(56),A=t(467),O=t(628),P=t(9),C=t(3),F=function(a){Object(r.a)(t,a);var e=Object(s.a)(t);function t(a){var l;return Object(o.a)(this,t),(l=e.call(this,a)).state={listSupplier:[]},l}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var a=this;Object(C.b)("customers").then((function(e){return a.setState({listSupplier:e.data})})).catch((function(){return Object(y.c)("Sepertinya koneksi bermasalah, mohon periksa koneksi anda")}))}},{key:"render",value:function(){return d.a.createElement("form",{onSubmit:this.props.handleSubmit},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-3"},d.a.createElement("label",{htmlFor:""},"Nama Toko"),d.a.createElement(A.a,{name:"namaToko",component:"select",className:"form-control"},d.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(a){return d.a.createElement("option",{value:a.kodeCustomer+"|"+a.namaToko,key:a.kodeCustomer+"|"+a.namaToko},a.namaToko)})))),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(A.a,{label:"Detail",name:"detail",component:P.a,type:"text"})),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(A.a,{label:"Tanggal Faktur",name:"tglFaktur",component:P.a,type:"date"})),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(A.a,{label:"Nomor Bon",name:"noBon",component:P.a,type:"text"})),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(A.a,{label:"Bruto(Gr)",name:"bruto",component:P.a,type:"text"})),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(A.a,{label:"Netto(Gr)",name:"netto",component:P.a,type:"text"})),d.a.createElement("div",{className:"TITIP"===this.props.tipe?"col-lg-3 d-none":"col-lg-3"},d.a.createElement(A.a,{label:"Saldo(Gr)",name:"totalSaldoGr",component:P.a,type:"text"})),d.a.createElement("div",{className:"TITIP"===this.props.tipe?"col-lg-3 d-none":"col-lg-3"},d.a.createElement(A.a,{label:"saldo(Rp)",name:"totalSaldoRp",component:P.a,type:"text"})),d.a.createElement("div",{className:"HUTANG"===this.props.tipe?"col-lg-3 d-none":"col-lg-3"},d.a.createElement(A.a,{label:"Titip(Rp)",name:"totalTitipRp",component:P.a,type:"text"})),d.a.createElement("div",{className:"HUTANG"===this.props.tipe?"col-lg-3 d-none":"col-lg-3"},d.a.createElement(A.a,{label:"Titip(Gr)",name:"totalTitipGr",component:P.a,type:"text"})),d.a.createElement("div",{className:"col-lg-12"},d.a.createElement("div",{className:"text-right"},d.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),t}(m.Component);F=Object(T.a)({form:"FormSaldoAwalPiutang",enableReinitialize:!0,validate:O.a})(F);var j=Object(S.b)()(F),I=t(505),L=t.n(I),R=t(60),B=t(5),D=t(86),w=b.Search.SearchBar,_=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,x=function(a){Object(r.a)(t,a);var e=Object(s.a)(t);function t(a){var n;return Object(o.a)(this,t),(n=e.call(this,a)).handleChange=function(a){return function(e){n.setState(Object(l.a)({},a,e.target.value))}},n.state={tipeTransksi:"HUTANG",listSales:[],columns:[{dataField:"namaToko",text:"Nama Toko"},{dataField:"noFaktur",text:"Nomor Faktur"},{dataField:"footerItem.totalBruto",text:"Bruto"},{dataField:"footerItem.totalNetto",text:"Netto"},{dataField:"footerItem.totalNettoExt",text:"Barang"},{dataField:"footerItem.totalRp",text:"Rupiah"}]},n}return Object(n.a)(t,[{key:"sendSaldoAwal",value:function(){var a=this;return""===this.state.tanggal?(Object(y.c)("Mohon isi tanggal"),!1):this.state.sales===[]?(Object(y.c)("Mohon isi sales"),!1):null===localStorage.getItem("SaldoAwalPiutangCustomer")?(Object(y.c)("Data masih Kosong, Silahkan tambahkan dahulu"),!1):void c.a.post(_+"cst/dc/pjl",JSON.parse(localStorage.getItem("SaldoAwalPiutangCustomer"))).then((function(){return Object(y.b)("Saldo Awal Berhasil Disimpan")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(f.b)())})).catch((function(){return Object(y.c)("Sepertinya koneksi anda bermasalah, Mohon periksa koneksi anda")}))}},{key:"setTipe",value:function(a){this.setState({tipeTransksi:a.target.value}),this.props.dispatch(Object(N.a)("FormSaldoAwalPiutang"))}},{key:"componentDidMount",value:function(){var a=this;this.props.dispatch(Object(f.b)()),this.props.dispatch(Object(R.g)()),c.a.get("https://147.139.193.169:3759/api/v1/storages2?tipeData=SALES").then((function(e){return a.setState({listSales:e.data})})).catch((function(){return Object(y.c)("Mohon periksa koneksi anda")}))}},{key:"handlerSimpan",value:function(a){if(""===this.state.tanggal)return Object(y.c)("Mohon isi tanggal"),!1;if(this.state.sales===[])return Object(y.c)("Mohon isi sales"),!1;var e=a.namaToko?a.namaToko:"DEFAULT|DEFAULT",t=this.state.sales?this.state.sales:"DEFAULT|DEFAULT",l=e.split("|"),o=t.split("|"),n={kodeLokasi:"-",namaToko:l[1],kodeSales:o[0],kodeCustomer:l[0],noBon:this.props.noFaktur,noFaktur:this.props.noFaktur,tanggal:this.state.tanggal,tipeTransaksi:"SALDO-AWAL-PIUTANG",footerDocument:{inputBy:this.props.username},footerItem:{totalP:0,totalK:0,totalpkg:0,totalNettoExt:void 0===a.totalSaldoGr?a.totalTitipGr:a.totalSaldoGr,totalBruto:a.bruto||0,totalNetto:a.netto||0,totalGross:0,totalQty:0,totalRp:void 0===a.totalSaldoRp?a.totalTitipRp:a.totalSaldoRp}};console.log(JSON.stringify(n));var r=JSON.parse(localStorage.getItem("SaldoAwalPiutangCustomer"))||[];r.push(n),localStorage.setItem("SaldoAwalPiutangCustomer",JSON.stringify(r)),Object(y.b)("Data Tersimpan"),this.props.dispatch(Object(R.g)())}},{key:"render",value:function(){var a=this;return d.a.createElement("div",{className:"container-fluid"},d.a.createElement("ol",{className:"breadcrumb mb-2"},d.a.createElement(B.b,{to:"/saldoawal"},d.a.createElement("button",{type:"button",className:"btn btn-secondary"},d.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-12"},d.a.createElement("div",{className:"card"},d.a.createElement(D.default,{title:"Saldo Awal Piutang Customer"}),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"col-lg-12 mt-3"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-4 mb-3"},d.a.createElement("label",{htmlFor:""},"TIPE TRANSAKSI"),d.a.createElement("select",{className:"form-control",onChange:function(e){return a.setTipe(e)}},d.a.createElement("option",{value:"HUTANG",key:"HUTANG"},"HUTANG"),d.a.createElement("option",{value:"TITIP",key:"TITIP"},"TITIP"))),d.a.createElement("div",{className:"col-lg-8"}),d.a.createElement("div",{className:"col-lg-4"},d.a.createElement("label",{htmlFor:""},"Tanggal"),d.a.createElement("input",{type:"date",className:"form-control",onChange:function(e){return a.handleChange("tanggal")}})),d.a.createElement("div",{className:"col-lg-4"},d.a.createElement("label",{htmlFor:""},"Sales"),d.a.createElement("select",{className:"form-control",onChange:function(e){return a.handleChange("sales")}},d.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIh"),this.state.listSales.map((function(a){return d.a.createElement("option",{value:a.kodeLokasi+"|"+a.namaLokasi,key:a.kodeLokasi+"|"+a.namaLokasi},a.namaLokasi)})))),d.a.createElement("div",{className:"col-lg-12 mt-3"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-6"},d.a.createElement("div",{className:"text-left"},d.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.sendSaldoAwal()}},"Simpan Saldo Awal"))),d.a.createElement("div",{className:"col-lg-6"},d.a.createElement("div",{className:"text-right"},d.a.createElement("button",{className:"btn btn-primary","data-target":"#tambahBarang","data-toggle":"modal"},"Tambah Data"))),d.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.dataSaldoAwalPiutangCustomer?d.a.createElement(E.a,{keyField:"id",data:this.props.dataSaldoAwalPiutangCustomer,columns:this.state.columns,search:!0},(function(a){return d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"text-right mt-5 mb-3"},d.a.createElement(w,Object.assign({},a.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),d.a.createElement(p.a,Object.assign({},a.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:g()()})))})):d.a.createElement("div",null,this.props.error?d.a.createElement("div",{className:"text-center"},d.a.createElement("img",{src:L.a,style:{width:"30%"},alt:"NOT RESPOND"}),d.a.createElement("br",null),d.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):d.a.createElement(v.a,{width:"100%",height:180}))))))))))),d.a.createElement("div",{id:"tambahBarang",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},d.a.createElement("div",{className:"modal-dialog modal-full-width"},d.a.createElement("div",{className:"modal-content"},d.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},d.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Transaksi"),d.a.createElement("button",{id:"dismiss_modal1",name:"dismiss_modal1",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),d.a.createElement("div",{className:"modal-body"},d.a.createElement(j,{onSubmit:function(e){return a.handlerSimpan(e)},tipe:this.state.tipeTransksi})),d.a.createElement("div",{className:"modal-footer"},d.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),t}(m.Component);x=Object(T.a)({form:"SaldoAwalPiutangCustomer",enableReinitialize:!0})(x);e.default=Object(S.b)((function(a){return{noFaktur:a.provinsi.noFaktur,username:a.provinsi.username,dataSaldoAwalPiutangCustomer:a.provinsi.dataSaldoAwalPiutangCustomer}}),null)(x)},505:function(a,e,t){a.exports=t.p+"static/media/500.c22f1e39.svg"},628:function(a,e,t){"use strict";e.a=function(a){var e={};return a.namaToko||(e.namaToko="Tidak Boleh kosong"),a.detail||(e.detail="Tidak Boleh kosong"),a.tglFaktur||(e.tglFaktur="Tidak Boleh kosong"),a.noBon||(e.noBon="Tidak Boleh kosong"),a.bruto||(e.bruto="Tidak Boleh kosong"),a.netto||(e.netto="Tidak Boleh kosong"),a.totalSaldoGr||(e.totalSaldoGr="Tidak Boleh kosong"),a.totalSaldoRp||(e.totalSaldoRp="Tidak Boleh kosong"),e}}}]);
//# sourceMappingURL=56.0ec8b4a6.chunk.js.map