(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[121],{120:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));var n=t(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},1234:function(a,e,t){"use strict";t.r(e);var n=t(35),r=t(22),o=t(23),s=t(25),l=t(24),i=t(0),c=t.n(i),m=t(478),d=t.n(m),u=t(480),p=t.n(u),h=t(479),g=t.n(h),k=t(39),b=t(15),E=t(8),f=t.n(E),v=t(120),N=t(9),y=t(171),S=t(49),O=t.n(S),B=t(64),T=t(467),F=t(468),A=t(470),L=function(a){var e=a.input,t=a.label,n=a.type,r=a.limit,o=a.readOnly,s=a.meta,l=s.touched,i=s.error,m=s.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},e,{type:n,className:"form-control",maxLength:r,readOnly:o})),l&&(i&&c.a.createElement("p",{className:"invalid-feedback"},i)||m&&c.a.createElement("p",null,m)))},C="https://147.139.193.169:3759/api/v1/",j=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(a){var n;return Object(r.a)(this,t),(n=e.call(this,a)).handleChange=function(a){return function(a){var e=(a.target.value?a.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");n.setState({kodeJenis:e[0],kadarCetak:e[1],kadarJual:e[2]}),n.props.change("kadarTransaksi",e[2]),n.props.change("keterangan",e[3])}},n.state={listBarang:[],listBarangPerhiasan:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var a=this;O.a.get(C+"subcategorys2?kodeKelompok=CIOK").then((function(e){return a.setState({listBarang:e.data})})).catch((function(a){return console.log(a)})),O.a.get(C+"subcategorys2?kodeKelompok=PERHIASAN").then((function(e){return a.setState({listBarangPerhiasan:e.data})})).catch((function(a){return console.log(a)}))}},{key:"setNetto",value:function(){this.props.change("netto","NaN"===this.props.netto?0:this.props.netto)}},{key:"render",value:function(){var a=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Kode barang"),c.a.createElement(T.a,{name:"kodeBarang",className:"form-control",component:"select",onChange:this.handleChange()},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),"RONGSOK"===this.props.jenisBarang?this.state.listBarang.map((function(a){return c.a.createElement("option",{value:a.kodeJenis+"|"+a.kadarCetak+"|"+a.kadarJual+"|"+a.namaJenis,key:a.kodeJenis},a.namaJenis)})):this.state.listBarangPerhiasan.map((function(a){return c.a.createElement("option",{value:a.kodeJenis+"|"+a.kadarCetak+"|"+a.kadarJual+"|"+a.namaJenis,key:a.kodeJenis},a.namaJenis)})))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement(T.a,{name:"keterangan",label:"Keterangan",type:"text",component:L,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(T.a,{name:"kadarTransaksi",label:"Kadar(%)",type:"text",component:L,readOnly:!0,onChange:this.setNetto()})),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("label",{htmlFor:"employed"},"Manual"),c.a.createElement("div",null,c.a.createElement(T.a,{name:"manual",id:"employed",component:"input",type:"checkbox",value:"MANUAL",defaultChecked:!0}))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement(T.a,{name:"barcode",label:"Barcode",type:"text",component:L,readOnly:this.props.manual})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(T.a,{name:"gross",label:"Gross(Gr)",type:"text",readOnly:!this.props.manual,component:L,onChange:this.setNetto()})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(T.a,{name:"pkg",label:"Package(Gr)",type:"text",readOnly:!this.props.manual,component:L,onChange:this.setNetto()})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(T.a,{name:"netto",label:"Netto",type:"text",component:L,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3 d-none"},c.a.createElement(T.a,{name:"noFaktur",label:"Netto",type:"text",component:L,readOnly:!0,onLoad:function(){return a.props.change("noFaktur",a.props.noFaktur)}})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))}}]),t}(i.Component);j=Object(F.a)({form:"FormModalTimbanganBarcode",enableReinitialize:!0})(j);var x=Object(A.a)("FormModalTimbanganBarcode"),D=Object(b.b)((function(a){var e=x(a,"gross","kadarTransaksi","pkg","manual"),t=e.gross,n=e.kadarTransaksi,r=e.pkg,o=e.manual;return{netto:(parseFloat(t||0)-parseFloat(r||0)*(parseFloat(n)/100)).toFixed(3),manual:o||!1}}))(j),P=t(51),K=u.Search.SearchBar,G=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,I=function(a){Object(s.a)(t,a);var e=Object(l.a)(t);function t(a){var o;return Object(r.a)(this,t),(o=e.call(this,a)).changeInput=function(a){return function(e){o.setState(Object(n.a)({},a,e.target.value))}},o.state={jenisBarang:"RONGSOK",listLokasi:[],columns:[{dataField:"kodeJenis",text:"Kode",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarCetak",text:"Kadar",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"gross",text:"Gross (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"pkg",text:"Pkg (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"bruto",text:"Berat (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarTransaksi",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"netto",text:"Netto (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}}],data:[{tanggal:"2020-11-10"}],tanggal:"",lokasi:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var a=this;this.props.dispatch(Object(y.c)()),this.props.dispatch(Object(k.b)()),this.props.dispatch(Object(N.l)("totalanBarcode")),this.props.dispatch(Object(N.o)("totalanBarcode")),this.props.dispatch(Object(N.q)("totalanBarcode")),this.props.dispatch(Object(N.m)("totalanBarcode")),this.props.dispatch(Object(N.s)("totalanBarcode")),this.props.dispatch(Object(N.r)("totalanBarcode")),O.a.get("https://147.139.193.169:3759/api/v1/storages2?tipeData=LOKASI").then((function(e){return a.setState({listLokasi:e.data})})).catch((function(a){return console.log(a)}))}},{key:"handleSubmit",value:function(a){var e=(a.kodeBarang?a.kodeBarang:"DEFAULT|DEFUALT|DEFAULT|DEFAULT").split("|"),t={nettoDiscGlobalExt:0,gross:parseFloat(a.gross),kodeJenis:e[0],pkg:parseFloat(a.pkg),noBarcode:a.barcode,qty:1,k:0,kadarCetak:e[1],kodeKategori:"-",p:0,nettoDiscGlobal:0,discGlobalPr:0,discGlobalGr:0,kadarTransaksi:parseFloat(a.kadarTransaksi),noFaktur:a.noFaktur,bruto:parseFloat(a.gross)-parseFloat(a.pkg),netto:parseFloat(a.netto),rp:0,keterangan:a.keterangan},n=JSON.parse(localStorage.getItem("totalanBarcode"))||[];n.push(t),localStorage.setItem("totalanBarcode",JSON.stringify(n)),f.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}),this.props.dispatch(Object(v.a)("FormModalTimbanganBarcode")),this.props.dispatch(Object(y.c)())}},{key:"simpanTotalanTimbang",value:function(){var a=this;if(void 0===this.state.tanggal)return f.a.fire({position:"top-end",icon:"error",text:"Silahkan Isi Tanggal",showConfirmButton:!1,timer:1500}),!1;if(void 0===this.state.lokasi)return f.a.fire({position:"top-end",icon:"error",text:"Silahkan Isi Lokasi",showConfirmButton:!1,timer:1500}),!1;if(null===localStorage.getItem("totalanBarcode"))return f.a.fire({position:"top-end",icon:"error",text:"Data Masih Kosong, Silahkan tambah data",showConfirmButton:!1,timer:1500}),!1;var e={tipeFaktur:this.state.jenisBarang,noFaktur:this.props.noFaktur,noBon:this.props.noFaktur,tanggal:this.state.tanggal,noValid:"-",kodeLokasi:this.state.kodeLokasi,barangDetails:JSON.parse(localStorage.getItem("totalanBarcode")),footerItem:{totalP:0,totalGross:this.props.sumGross,totalpkg:this.props.sumPkg,totalQty:this.props.sumQty,totalK:0,totalRp:this.props.sumRp,totalBruto:this.props.sumBruto,totalNetto:this.props.sumNetto,totalNettoExt:0}};this.props.dispatch(Object(N.t)());var t=[];(JSON.parse(localStorage.getItem("totalanBarcode"))||[]).forEach((function(a,e){var n=[e++,a.kodeJenis,a.gross,a.pkg,a.bruto,a.kadarTransaksi,a.netto,a.rp];t.push(n)})),console.log(t);var n=["No","Kode Barang","Gross (Gr)","Pkg (Gr)","Bruto (Gr)","Harga (%)","Netto (Gr)","Ongkos (Rp)"];O.a.post(G+"item/dc/totalantimbang",e).then((function(){return f.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}).then((function(){return a.props.dispatch(Object(N.k)())})).then((function(){return Object(B.a)("Tanggal",a.state.tanggal,"Lokasi",a.state.tanggal,"No Timbang",a.props.noFaktur,"","","","","",n,"STOCK OPNAME TIMBANG SALES",t)})).then((function(){return localStorage.removeItem("totalanBarcode")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(k.b)())})).then((function(){return a.props.dispatch(Object(y.c)())})).then((function(){return a.setState({tanggal:"",lokasi:""})}))})).catch((function(e){return f.a.fire({position:"top-right",icon:"error",text:"Sepertinya ada kesalahan di server, mohon periksa koneksi dan ulangi transaksi",timer:1500,showConfirmButton:!1}).then((function(){return console.log(e)})).then((function(){return a.props.dispatch(Object(N.k)())}))}))}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement(P.default,{title:"Totalan Barcode"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",name:"tanggal",label:"tanggal",className:"form-control",onChange:this.changeInput("tanggal"),value:this.state.tanggal}))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Lokasi"),c.a.createElement("select",{name:"lokasi",label:"lokasi",className:"form-control",onChange:this.changeInput("lokasi"),value:this.state.lokasi},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listLokasi.map((function(a){return c.a.createElement("option",{value:a.kodeLokasi,key:a.kodeLokasi},a.namaLokasi)}))))),c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.simpanTotalanTimbang()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary","data-target":"#tambahModal","data-toggle":"modal"},"Tambah Data",c.a.createElement("i",{className:"fa fa-plus ml-3"})))))),c.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listTableTotalanBarcode?c.a.createElement(p.a,{keyField:"kodeKelompok",data:this.props.listTableTotalanBarcode,columns:this.state.columns,search:!0},(function(a){return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"text-right mt-5 mb-3"},c.a.createElement(K,Object.assign({},a.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),c.a.createElement(d.a,Object.assign({},a.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:g()()})))})):c.a.createElement(d.a,{keyField:"kodeKelompok",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"}))))),c.a.createElement("div",{id:"tambahModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Totalan"),c.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(D,{noFaktur:this.props.noFaktur,jenisBarang:this.state.jenisBarang,onSubmit:function(e){return a.handleSubmit(e)}})),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),t}(i.Component);e.default=Object(b.b)((function(a){return{totalanBarcode:a.provinsi.totalanBarcode,noFaktur:a.provinsi.noFaktur,listTableTotalanBarcode:a.provinsi.listTableTotalanBarcode,sumBruto:a.perhitungan.sumBruto,sumNetto:a.perhitungan.sumNetto,sumGross:a.perhitungan.sumGross,sumPkg:a.perhitungan.sumPkg,sumQty:a.perhitungan.sumQty,sumRp:a.perhitungan.sumRp,onSend:a.provinsi.onSend}}),null)(I)}}]);
//# sourceMappingURL=121.fc2ee19d.chunk.js.map