(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[63,174],{1238:function(e,t,a){"use strict";a.r(t);var n=a(77),r=a(71),o=a(72),i=a(74),s=a(73),l=a(0),c=a.n(l),u=a(468),d=a.n(u),m=a(471),p=a.n(m),h=a(470),g=a.n(h),f=a(178),v=a(28),b=a(27),k=a.n(b),y=a(289),E=a(23),F=a(153),N=a(46),S=a.n(N),O=a(497),x=a(466),T=a(459),B=a(467),D=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,i=e.meta,s=i.touched,l=i.error,u=i.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},a),c.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",maxLength:r,readOnly:o})),s&&(l&&c.a.createElement("p",{className:"invalid-feedback"},l)||u&&c.a.createElement("p",null,u)))},C="https://ayu-grosir-api.herokuapp.com/api/v1/",j=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");n.setState({kodeJenis:t[0],kadarCetak:t[1],kadarJual:t[2]}),n.props.change("kadarTransaksi",t[2]),n.props.change("keterangan",t[3])}},n.state={listBarang:[],listBarangPerhiasan:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get(C+"subcategorys2?kodeKelompok=CIOK").then((function(t){return e.setState({listBarang:t.data})})).catch((function(e){return console.log(e)})),S.a.get(C+"subcategorys2?kodeKelompok=PERHIASAN").then((function(t){return e.setState({listBarangPerhiasan:t.data})})).catch((function(e){return console.log(e)}))}},{key:"setNetto",value:function(){this.props.change("netto","NaN"===this.props.netto?0:this.props.netto)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Kode barang"),c.a.createElement(x.a,{name:"kodeBarang",className:"form-control",component:"select",onChange:this.handleChange()},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),"RONGSOK"===this.props.jenisBarang?this.state.listBarang.map((function(e){return c.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarJual+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})):this.state.listBarangPerhiasan.map((function(e){return c.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarJual+"|"+e.namaJenis,key:e.kodeJenis},e.namaJenis)})))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement(x.a,{name:"keterangan",label:"Keterangan",type:"text",component:D,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(x.a,{name:"kadarTransaksi",label:"Kadar(%)",type:"text",component:D,readOnly:!0,onChange:this.setNetto()})),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("label",{htmlFor:"employed"},"Manual"),c.a.createElement("div",null,c.a.createElement(x.a,{name:"manual",id:"employed",component:"input",type:"checkbox",value:"MANUAL",defaultChecked:!0}))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement(x.a,{name:"barcode",label:"Barcode",type:"text",component:D,readOnly:this.props.manual})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(x.a,{name:"gross",label:"Gross(Gr)",type:"text",readOnly:!this.props.manual,component:D,onChange:this.setNetto()})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(x.a,{name:"pkg",label:"Package(Gr)",type:"text",readOnly:!this.props.manual,component:D,onChange:this.setNetto()})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(x.a,{name:"netto",label:"Netto",type:"text",component:D,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3 d-none"},c.a.createElement(x.a,{name:"noFaktur",label:"Netto",type:"text",component:D,readOnly:!0,onLoad:function(){return e.props.change("noFaktur",e.props.noFaktur)}})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))}}]),a}(l.Component);j=Object(T.a)({form:"FormModalTimbanganBarcode",enableReinitialize:!0})(j);var w=Object(B.a)("FormModalTimbanganBarcode"),_=Object(v.b)((function(e){var t=w(e,"gross","kadarTransaksi","pkg","manual"),a=t.gross,n=t.kadarTransaksi,r=t.pkg,o=t.manual;return{netto:(parseFloat(a||0)-parseFloat(r||0)*(parseFloat(n)/100)).toFixed(3),manual:o||!1}}))(j),A=a(465),L=m.Search.SearchBar,R=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://ayu-grosir-api.herokuapp.com/api/v1/",REACT_APP_BACKEND_URL_WEB:"http://147.139.182.75:3759/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,P=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).changeInput=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.state={jenisBarang:"RONGSOK",listLokasi:[],columns:[{dataField:"kodeJenis",text:"Kode",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarCetak",text:"Kadar",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"gross",text:"Gross (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"pkg",text:"Pkg (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"bruto",text:"Berat (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarTransaksi",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"netto",text:"Netto (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}}],data:[{tanggal:"2020-11-10"}],tanggal:"",lokasi:""},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(F.c)()),this.props.dispatch(Object(f.b)()),this.props.dispatch(Object(E.l)("totalanBarcode")),this.props.dispatch(Object(E.o)("totalanBarcode")),this.props.dispatch(Object(E.q)("totalanBarcode")),this.props.dispatch(Object(E.m)("totalanBarcode")),this.props.dispatch(Object(E.s)("totalanBarcode")),this.props.dispatch(Object(E.r)("totalanBarcode")),S.a.get("https://ayu-grosir-api.herokuapp.com/api/v1/storages2?tipeData=LOKASI").then((function(t){return e.setState({listLokasi:t.data})})).catch((function(e){return console.log(e)}))}},{key:"handleSubmit",value:function(e){var t=(e.kodeBarang?e.kodeBarang:"DEFAULT|DEFUALT|DEFAULT|DEFAULT").split("|"),a={nettoDiscGlobalExt:0,gross:parseFloat(e.gross),kodeJenis:t[0],pkg:parseFloat(e.pkg),noBarcode:e.barcode,qty:1,k:0,kadarCetak:t[1],kodeKategori:"-",p:0,nettoDiscGlobal:0,discGlobalPr:0,discGlobalGr:0,kadarTransaksi:parseFloat(e.kadarTransaksi),noFaktur:e.noFaktur,bruto:parseFloat(e.gross)-parseFloat(e.pkg),netto:parseFloat(e.netto),rp:0,keterangan:e.keterangan},n=JSON.parse(localStorage.getItem("totalanBarcode"))||[];n.push(a),localStorage.setItem("totalanBarcode",JSON.stringify(n)),k.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}),this.props.dispatch(Object(y.a)("FormModalTimbanganBarcode")),this.props.dispatch(Object(F.c)())}},{key:"simpanTotalanTimbang",value:function(){var e=this;if(void 0===this.state.tanggal)return k.a.fire({position:"top-end",icon:"error",text:"Silahkan Isi Tanggal",showConfirmButton:!1,timer:1500}),!1;if(void 0===this.state.lokasi)return k.a.fire({position:"top-end",icon:"error",text:"Silahkan Isi Lokasi",showConfirmButton:!1,timer:1500}),!1;if(null===localStorage.getItem("totalanBarcode"))return k.a.fire({position:"top-end",icon:"error",text:"Data Masih Kosong, Silahkan tambah data",showConfirmButton:!1,timer:1500}),!1;var t={tipeFaktur:this.state.jenisBarang,noFaktur:this.props.noFaktur,noBon:this.props.noFaktur,tanggal:this.state.tanggal,noValid:"-",kodeLokasi:this.state.kodeLokasi,barangDetails:JSON.parse(localStorage.getItem("totalanBarcode")),footerItem:{totalP:0,totalGross:this.props.sumGross,totalpkg:this.props.sumPkg,totalQty:this.props.sumQty,totalK:0,totalRp:this.props.sumRp,totalBruto:this.props.sumBruto,totalNetto:this.props.sumNetto,totalNettoExt:0}};this.props.dispatch(Object(E.t)());var a=[];(JSON.parse(localStorage.getItem("totalanBarcode"))||[]).forEach((function(e,t){var n=[t++,e.kodeJenis,e.gross,e.pkg,e.bruto,e.kadarTransaksi,e.netto,e.rp];a.push(n)})),console.log(a);var n=["No","Kode Barang","Gross (Gr)","Pkg (Gr)","Bruto (Gr)","Harga (%)","Netto (Gr)","Ongkos (Rp)"];S.a.post(R+"item/dc/totalantimbang",t).then((function(){return k.a.fire({position:"top-right",icon:"success",text:"Transaksi Berhasil",timer:1500,showConfirmButton:!1}).then((function(){return e.props.dispatch(Object(E.k)())})).then((function(){return Object(O.a)("Tanggal",e.state.tanggal,"Lokasi",e.state.tanggal,"No Timbang",e.props.noFaktur,"","","","","",n,"STOCK OPNAME TIMBANG SALES",a)})).then((function(){return localStorage.removeItem("totalanBarcode")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return e.props.dispatch(Object(f.b)())})).then((function(){return e.props.dispatch(Object(F.c)())})).then((function(){return e.setState({tanggal:"",lokasi:""})}))})).catch((function(t){return k.a.fire({position:"top-right",icon:"error",text:"Sepertinya ada kesalahan di server, mohon periksa koneksi dan ulangi transaksi",timer:1500,showConfirmButton:!1}).then((function(){return console.log(t)})).then((function(){return e.props.dispatch(Object(E.k)())}))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement(A.default,{title:"Totalan Barcode"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",name:"tanggal",label:"tanggal",className:"form-control",onChange:this.changeInput("tanggal"),value:this.state.tanggal}))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Lokasi"),c.a.createElement("select",{name:"lokasi",label:"lokasi",className:"form-control",onChange:this.changeInput("lokasi"),value:this.state.lokasi},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listLokasi.map((function(e){return c.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)}))))),c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.simpanTotalanTimbang()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary","data-target":"#tambahModal","data-toggle":"modal"},"Tambah Data",c.a.createElement("i",{className:"fa fa-plus ml-3"})))))),c.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listTableTotalanBarcode?c.a.createElement(p.a,{keyField:"kodeKelompok",data:this.props.listTableTotalanBarcode,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"text-right mt-5 mb-3"},c.a.createElement(L,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),c.a.createElement(d.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:g()()})))})):c.a.createElement(d.a,{keyField:"kodeKelompok",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"}))))),c.a.createElement("div",{id:"tambahModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Totalan"),c.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(_,{noFaktur:this.props.noFaktur,jenisBarang:this.state.jenisBarang,onSubmit:function(t){return e.handleSubmit(t)}})),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),a}(l.Component);t.default=Object(v.b)((function(e){return{totalanBarcode:e.provinsi.totalanBarcode,noFaktur:e.provinsi.noFaktur,listTableTotalanBarcode:e.provinsi.listTableTotalanBarcode,sumBruto:e.perhitungan.sumBruto,sumNetto:e.perhitungan.sumNetto,sumGross:e.perhitungan.sumGross,sumPkg:e.perhitungan.sumPkg,sumQty:e.perhitungan.sumQty,sumRp:e.perhitungan.sumRp,onSend:e.provinsi.onSend}}),null)(P)},289:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(16),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},465:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),l=a.n(s),c=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(s.Component);t.default=c},466:function(e,t,a){"use strict";var n=a(11),r=a.n(n),o=a(176),i=a.n(o),s=a(37),l=a.n(s),c=a(0),u=a.n(c),d=a(2),m=a.n(d),p=a(52),h=a.n(p),g=a(26),f=a.n(g),v=a(28),b=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var k=a(172),y=function(e,t){if(Object(k.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,s=n.files,l=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?s||l&&l.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},E="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=y(e,E);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},N=a(10),S=a(76),O=function(e,t,a){return Object(S.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},x=["_reduxForm"],T=function(e){return e&&"object"===typeof e},B=function(e){return e&&"function"===typeof e},D=function(e){T(e)&&B(e.preventDefault)&&e.preventDefault()},C=function(e,t){if(T(e)&&T(e.dataTransfer)&&B(e.dataTransfer.getData))return e.dataTransfer.getData(t)},j=function(e,t,a){T(e)&&T(e.dataTransfer)&&B(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var w=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,l=a.onChange,c=a._reduxForm,u=a.value,d=F(t,{name:n,parse:i,normalize:s}),m=!1;if(l)if(!E&&Object(k.a)(t))l(r()({},t,{preventDefault:function(){return m=!0,D(t)}}),d,u,n);else{var p=l(t,d,u,n);E&&(m=p)}m||(o(c.change(n,d)),c.asyncValidate&&c.asyncValidate(n,d,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,s=a._reduxForm,l=!1;i&&(E?l=i(t,n):i(r()({},t,{preventDefault:function(){return l=!0,D(t)}}),n)),l||o(s.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,l=a.onBlur,c=a._reduxForm,u=a._value,d=a.value,m=F(t,{name:n,parse:i,normalize:s});m===u&&void 0!==u&&(m=d);var p=!1;l&&(E?p=l(t,m,d,n):l(r()({},t,{preventDefault:function(){return p=!0,D(t)}}),m,d,n)),p||(o(c.blur(n,m)),c.asyncValidate&&c.asyncValidate(n,m,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;j(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,s=a._reduxForm,l=a.value,c=C(t,"text"),u=!1;i&&i(r()({},t,{preventDefault:function(){return u=!0,D(t)}}),c,l,n),u||(o(s.change(n,c)),D(t))},e}l()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~x.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,s=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,f()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),l=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,s=a.asyncError,l=a.asyncValidating,c=a.onBlur,u=a.onChange,d=a.onDrop,m=a.onDragStart,p=a.dirty,h=a.dispatch,g=a.onFocus,v=a.form,k=a.format,y=a.initial,E=(a.parse,a.pristine),F=a.props,N=a.state,S=a.submitError,O=a.submitFailed,x=a.submitting,T=a.syncError,B=a.syncWarning,D=(a.validate,a.value),C=a._value,j=(a.warn,f()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),w=T||s||S,_=B,A=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(D,k);return{input:b(j.type,{name:t,onBlur:c,onChange:u,onDragStart:m,onDrop:d,onFocus:g,value:A},C,i),meta:r()({},o(N),{active:!(!N||!n(N,"active")),asyncValidating:l,autofilled:!(!N||!n(N,"autofilled")),dirty:p,dispatch:h,error:w,form:v,initial:y,warning:_,invalid:!!w,pristine:E,submitting:!!x,submitFailed:!!O,touched:!(!N||!n(N,"touched")),valid:!w,visited:!(!N||!n(N,"visited"))}),custom:r()({},j,{},F)}}(e,o,r()({},s,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=l.custom,d=f()(l,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof a){var m=d.input;d.meta;return Object(c.createElement)(a,r()({},m,{},u))}return Object(c.createElement)(a,r()({},d,{},u))},n}(c.Component);return n.propTypes={component:O,props:m.a.object},Object(v.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,s=(0,o.getFormState)(e),l=a(s,"initial."+r),c=void 0!==l?l:i&&a(i,r),u=a(s,"values."+r),d=a(s,"submitting"),m=function(e,t){var a=N.a.getIn(e,t);return a&&a._error?a._error:a}(a(s,"syncErrors"),r),p=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(s,"syncWarnings"),r),h=t(u,c);return{asyncError:a(s,"asyncErrors."+r),asyncValidating:a(s,"asyncValidating")===r,dirty:!h,pristine:h,state:a(s,"fields."+r),submitError:a(s,"submitErrors."+r),submitFailed:a(s,"submitFailed"),submitting:d,syncError:m,syncWarning:p,initial:c,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},_=a(177),A=a.n(_),L=function(e,t,a,n,r,o){if(o)return e===t},R=function(e,t,a){var n=A()(e.props,t,L),r=A()(e.state,a,L);return!n||!r},P=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},I=a(106);var G=function(e){var t=w(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=u.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}l()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return R(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=P(this.props,this.props.name),a=P(e,e.name);t===a&&N.a.deepEqual(this.props.validate,e.validate)&&N.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return h()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return P(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(c.Component);return n.propTypes={name:m.a.string.isRequired,component:O,format:m.a.func,normalize:m.a.func,onBlur:m.a.func,onChange:m.a.func,onFocus:m.a.func,onDragStart:m.a.func,onDrop:m.a.func,parse:m.a.func,props:m.a.object,validate:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),warn:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),forwardRef:m.a.bool,immutableProps:m.a.arrayOf(m.a.string),_reduxForm:m.a.object},Object(I.b)(n)};t.a=G(N.a)},467:function(e,t,a){"use strict";var n=a(52),r=a.n(n),o=a(10);t.a=function(e){var t=e.getIn;return function(e,a){r()(e,"Form value must be specified");var n=a||function(e){return t(e,"form")};return function(a){for(var i=arguments.length,s=new Array(i>1?i-1:0),l=1;l<i;l++)s[l-1]=arguments[l];return r()(s.length,"No fields specified"),1===s.length?t(n(a),e+".values."+s[0]):s.reduce((function(r,i){var s=t(n(a),e+".values."+i);return void 0===s?r:o.a.setIn(r,i,s)}),{})}}}(o.a)},497:function(e,t,a){"use strict";var n=a(501);a(502);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",m=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],p=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,g=new n.default;g.autoTable(m,h,{startY:40});var f=g.lastAutoTable.finalY+10;g.text(p,14,15),g.setFontSize(10),g.text(e,14,25),g.text(":",37,25),g.text(t,40,25),g.text(a,120,25),g.text(":",141,25),g.text(r,145,25),g.text(o,14,30),g.text(":",37,30),g.text(i,40,30),g.text(s,120,30),g.text(":",141,30),g.text(l,145,30),g.text("User",160,f+10),g.text(":",168,f+10),g.text(c,170,f+10),g.text("Cetak",160,f+15),g.text(":",168,f+15),g.text(u,170,f+15),g.text("Valid",160,f+20),g.text(":",168,f+20),g.text(d,170,f+20);var v=g.output("datauristring"),b="<embed width='100%' height='100%' src='"+v+"'/>",k=window.open();k.document.open(),k.document.write(b),k.document.close()}}}]);
//# sourceMappingURL=63.f697eecb.chunk.js.map