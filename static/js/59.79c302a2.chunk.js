(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[59,176],{1227:function(e,t,a){"use strict";a.r(t);var n=a(77),r=a(71),o=a(72),i=a(74),s=a(73),u=a(0),l=a.n(u),c=a(464),d=a.n(c),p=a(271),m=a(19),f=a.n(m),g=a(28),h=a(289),v=a(178),b=a(528),k=a(16),E=a(56),y=a.n(E),F=a(493),x=a(174),B=a(504),S=a(462),N=a(455),T=a(4),O=a(512),A=a(465),j=function(e){var t={};return e.tanggal||(t.tanggal="Tidak Boleh kosong"),e.noMutasi||(t.noMutasi="Tidak Boleh kosong"),e.bonMutasi||(t.bonMutasi="Tidak Boleh kosong"),e.kategori||(t.kategori="Tidak Boleh kosong"),e.lokasi||(t.lokasi="Tidak Boleh kosong"),t},D=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={lokasi:!1,listKategori:[{nama:"AMBIL BARANG"},{nama:"KEMBALI STOK"},{nama:"KOREKSI STOK"},{nama:"MUTASI BAHAN"},{nama:"PENGAMBILAN SALES"},{nama:"PINDAH"},{nama:"PINDAH GUDANG REPARASI"},{nama:"RETURN SALES"},{nama:"SALAH INPUT"},{nama:"SALAH PINDAH"},{nama:"STOK AWAL"},{nama:"TAMBAH BARANG"}]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(T.b)("storages2?tipeData=LOKASI").then((function(t){return e.setState({lokasi:t.data})})).catch((function(e){return console.log(e)})),this.props.change("tanggal",O.b),this.props.change("noMutasi",localStorage.getItem("noFaktur"))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 form-group"},l.a.createElement(S.a,{component:A.a,normalize:function(e){return e&&e.toUpperCase()},label:"Nomor Mutasi",type:"text",name:"noMutasi",className:"form-control",readOnly:!0})),l.a.createElement("div",{className:"col-md-4 form-group"},l.a.createElement(S.a,{type:"date",label:"Tanggal",id:"tanggal",name:"tanggal",component:A.a})),l.a.createElement("div",{className:"col-md-4 form-group"},l.a.createElement(S.a,{component:A.a,normalize:function(e){return e&&e.toUpperCase()},label:"Bon Mutasi",type:"text",id:"bonMutasi",name:"bonMutasi"})),l.a.createElement("div",{className:"col-md-4 form-group"},l.a.createElement(S.a,{id:"kategori",label:"Kategori",name:"kategori",component:A.b,normalize:function(e){return e&&e.toUpperCase()},options:this.state.listKategori.map((function(e){return{value:e.nama,name:e.nama}}))})),l.a.createElement("div",{className:"col-md-4 form-group"},l.a.createElement(S.a,{component:A.a,normalize:function(e){return e&&e.toUpperCase()},label:"Keterangan",type:"text",id:"keterangan",name:"keterangan"})),l.a.createElement("div",{className:"col-md-4 form-group"},this.state.lokasi?l.a.createElement(S.a,{label:"Lokasi",component:A.b,normalize:function(e){return e&&e.toUpperCase()},type:"text",id:"lokasi",name:"lokasi",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},options:this.state.lokasi.map((function(e){return{value:e.kodeLokasi,name:e.namaLokasi}}))}):l.a.createElement(O.a,{label:"Lokasi"})),l.a.createElement("div",{className:"col-lg-4 col-md-4 mb-3"},l.a.createElement("div",{className:"text-left"},l.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,type:"button",onClick:this.props.handleSubmit},this.props.onSend?l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"SIMPAN",l.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),a}(u.Component);D=Object(N.a)({form:"HeadMutasiBarang",enableReinitialize:!0,validate:j})(D);var C=Object(g.b)()(D),w=a(173),_=a.n(w),R=a(36),I=a(461),M=Object(u.lazy)((function(){return Promise.all([a.e(4),a.e(96)]).then(a.bind(null,1257))})),P=Object(u.lazy)((function(){return Promise.all([a.e(2),a.e(6)]).then(a.bind(null,495))})),L={renderer:function(e){return l.a.createElement("div",null,l.a.createElement("p",null,"Tujuan"),l.a.createElement("p",null,"Kode Tujuan : ".concat(e.kodeJenis02," | Keterangan : ").concat(e.keteranganTujuan," | Kat Harga : ").concat(e.kadarTransaksi02," | Kadar : ").concat(e.kadarCetak02," | Pkg(Gr): ").concat(e.pkg02)),l.a.createElement("p",null,"Bruto(Gr) : ".concat(e.bruto02," | Harga Tujuan : ").concat(e.kadarTransaksi02," | Netto : ").concat(e.netto02)))}},K=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,U=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).onChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.state={lokasi:[],kodeJenis:"",kodeJenisTujuan:"",noMutasi:"",kodeLokasi:"",tanggal:"",keterangan:"",kategori:"",noBon:"",columns:[{dataField:"Lihat Detail",isDummyField:!0,text:"Lihat Detail",formatter:function(e){return l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-chevron-down"}))}},{dataField:"kodeJenis01",text:"Kode Barang"},{dataField:"keterangan",text:"Keterangan"},{dataField:"kadarTransaksi01",text:"Kat Harga"},{dataField:"kadarCetak01",text:"Kadar"},{dataField:"pkg01",text:"Pkg (Gr)"},{dataField:"bruto01",text:"Bruto (Gr)"},{dataField:"kadarTransaksi01",text:"Harga"},{dataField:"netto01",text:"Netto (Gr)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t,a){return l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger",onClick:function(){return Object(B.a)("mutasiBarang",a,o.props.dispatch,Object(p.b)())}},l.a.createElement(b.a,{id:"hapus",type:"dark",effect:"solid"},l.a.createElement("span",null,"Hapus")),l.a.createElement("i",{className:"fa fa-trash"})),l.a.createElement("br",null))}}]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(p.b)()),this.props.dispatch(Object(v.b)()),this.props.dispatch(Object(k.l)("mutasiBarang")),this.props.dispatch(Object(k.o)("mutasiBarang")),this.props.dispatch(Object(k.q)("mutasiBarang")),this.props.dispatch(Object(k.r)("mutasiBarang")),this.props.dispatch(Object(k.m)("mutasiBarang"))}},{key:"handleSubmit",value:function(e){var t=this,a=(e.kodeBarang?e.kodeBarang:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");this.setState({kodeJenis:a[0]});var n=(e.kodeBarangTujuan?e.kodeBarangTujuan:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");this.setState({kodeJenisTujuan:n[0]});var r=JSON.parse(localStorage.getItem("mutasiBarang"))||[],o={noFaktur:this.props.noFaktur.toUpperCase(),bruto01:parseFloat(e.bruto).toFixed(3),bruto02:parseFloat(e.brutoTujuan).toFixed(3),kadarCetak01:parseFloat(e.kadar).toFixed(3),kadarCetak02:parseFloat(e.kadarTujuan).toFixed(3),kadarTransaksi01:parseFloat(e.kadarTransaksi).toFixed(3),kadarTransaksi02:parseFloat(e.kadarTransaksiTujuan).toFixed(3),keterangan:e.keterangan,keteranganTujuan:e.keteranganTujuan,netto01:parseFloat(e.netto).toFixed(3),netto02:parseFloat(e.nettoTujuan).toFixed(3),pkg01:parseFloat(e.pkg).toFixed(3),pkg02:parseFloat(e.pkgTujuan).toFixed(3),qty01:1,qty02:1,gross01:(parseFloat(e.bruto)+parseFloat(e.pkg)).toFixed(3),gross02:(parseFloat(e.brutoTujuan)+parseFloat(e.pkgTujuan)).toFixed(3),kodeJenis01:a[0].toUpperCase(),kodeJenis02:n[0].toUpperCase(),kodeKategori01:"-",kodeKategori02:"-",k01:0,k02:0,p01:0,p02:0};r.push(o),localStorage.setItem("mutasiBarang",JSON.stringify(r)),f.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(h.a)("FormMutasiBarang"))})).then((function(){return t.props.dispatch(Object(p.b)())}))}},{key:"submitMutasiBarang",value:function(e){var t=this;if(null===localStorage.getItem("mutasiBarang"))return Object(x.e)("Mohon Tambahkan Barang Yang akan dipindahkan"),!1;var a={tanggal:e.tanggal,noFaktur:this.props.noFaktur,noBon:e.noBon,kategoriTransaksi:e.kategori,keterangan:e.keterangan,kodeLokasi:e.kodeLokasi,tipeFaktur:"-",barangDetailList:JSON.parse(localStorage.getItem("mutasiBarang")),footerItem:{totalBruto:0,totalNetto:0,totalQty:0,totalGross:0,totalK:0,totalP:0,totalpkg:0,totalNettoExt:0,totalRp:0},footerDocument:{inputBy:this.props.username}};console.log(JSON.stringify(a)),this.props.dispatch(Object(k.t)());var n=[];JSON.parse(localStorage.getItem("mutasiBarang")).forEach((function(e,t){var a=[t++,e.kodeJenis01,e.bruto01,e.kadarTransaksi01,e.netto01,e.kodeJenis02,e.bruto02,e.kadarTransaksi02,e.netto02];n.push(a)})),console.log(n);var r=["No","Kode Awal","Bruto","Harga (%)","Netto Awal","Kode Tujuan","Harga (%)","Netto Akhir"];y.a.post(K+"item/dc/mutasibarang",a).then((function(){return f.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(k.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(h.a)("HeadMutasiBarang"))})).then((function(){return Object(F.a)("Tanggal",e.tanggal,"","","Nomor Bon",e.noBon,"","","ADMIN",e.tanggal,"",r,"MUTASI BARANG",n)})).then((function(){return localStorage.removeItem("mutasiBarang")})).then((function(){return t.props.dispatch(Object(p.b)())})).then((function(){return t.props.dispatch(Object(v.b)())})).then((function(){return t.setState({kodeJenis:"",kodeJenisTujuan:"",noMutasi:"",kodeLokasi:"",tanggal:"",keterangan:"",kategori:"",noBon:""})})).then((function(){return t.forceUpdate()}))})).catch((function(e){return f.a.fire({position:"top-end",icon:"error",text:"Sepertinya ada kendala, silahkan cek koneksi",showConfirmButton:!1,timer:1500}).then((function(){return console.log(e)})).then((function(){return t.props.dispatch(Object(k.k)())}))})),this.props.dispatch(Object(p.b)())}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid",style:{color:"black"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement(I.default,{title:"Mutasi Barang"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(C,{onSubmit:function(t){return e.submitMutasiBarang(t)},onSend:this.props.onSend,noFaktur:this.props.noFaktur})),l.a.createElement("div",{className:"col-lg-4"}),l.a.createElement("div",{className:"col-lg-4 col-md-4 mb-3"},l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal",disabled:!0},"BARCODE (+)"),l.a.createElement("button",{className:"btn btn-primary ml-2","data-toggle":"modal",disabled:!0},"BARCODE (-)"))),l.a.createElement("div",{className:"col-lg-4 col-md-4 mb-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.dispatch(Object(R.j)())}},"TAMBAH BARANG",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("div",{className:"col-lg-12"},this.props.listBarang?l.a.createElement(d.a,{keyField:"id",data:this.props.listBarang,columns:this.state.columns,bordered:!0,headerClasses:"header-table",expandRow:L}):l.a.createElement(d.a,{keyField:"id",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",expandRow:L,noDataIndication:"Tidak Ada Data"}))))))),l.a.createElement(P,{content:l.a.createElement(u.Suspense,{fallback:l.a.createElement(_.a,{width:"100%",height:50,count:5})},l.a.createElement(M,{onSubmit:function(t){return e.handleSubmit(t)}})),title:"Tambah Data Mutasi Barang"}))}}]),a}(u.Component);t.default=Object(g.b)((function(e){return{listBarang:e.provinsi.mutasiBarang,noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,sumBruto:e.perhitungan.sumBruto,sumNetto:e.perhitungan.sumBruto,sumPkg:e.perhitungan.sumPkg,sumQty:e.perhitungan.sumQty,sumGross:e.perhitungan.sumGross,onSend:e.provinsi.onSend}}),null)(U)},289:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(17),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},461:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),u=a.n(s),l=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(s.Component);t.default=l},462:function(e,t,a){"use strict";var n=a(11),r=a.n(n),o=a(176),i=a.n(o),s=a(37),u=a.n(s),l=a(0),c=a.n(l),d=a(2),p=a.n(d),m=a(51),f=a.n(m),g=a(27),h=a.n(g),v=a(28),b=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var k=a(172),E=function(e,t){if(Object(k.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,s=n.files,u=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?s||u&&u.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},y="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=E(e,y);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},x=a(10),B=a(76),S=function(e,t,a){return Object(B.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},N=["_reduxForm"],T=function(e){return e&&"object"===typeof e},O=function(e){return e&&"function"===typeof e},A=function(e){T(e)&&O(e.preventDefault)&&e.preventDefault()},j=function(e,t){if(T(e)&&T(e.dataTransfer)&&O(e.dataTransfer.getData))return e.dataTransfer.getData(t)},D=function(e,t,a){T(e)&&T(e.dataTransfer)&&O(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var C=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=c.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,u=a.onChange,l=a._reduxForm,c=a.value,d=F(t,{name:n,parse:i,normalize:s}),p=!1;if(u)if(!y&&Object(k.a)(t))u(r()({},t,{preventDefault:function(){return p=!0,A(t)}}),d,c,n);else{var m=u(t,d,c,n);y&&(p=m)}p||(o(l.change(n,d)),l.asyncValidate&&l.asyncValidate(n,d,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,s=a._reduxForm,u=!1;i&&(y?u=i(t,n):i(r()({},t,{preventDefault:function(){return u=!0,A(t)}}),n)),u||o(s.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,u=a.onBlur,l=a._reduxForm,c=a._value,d=a.value,p=F(t,{name:n,parse:i,normalize:s});p===c&&void 0!==c&&(p=d);var m=!1;u&&(y?m=u(t,p,d,n):u(r()({},t,{preventDefault:function(){return m=!0,A(t)}}),p,d,n)),m||(o(l.blur(n,p)),l.asyncValidate&&l.asyncValidate(n,p,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;D(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,s=a._reduxForm,u=a.value,l=j(t,"text"),c=!1;i&&i(r()({},t,{preventDefault:function(){return c=!0,A(t)}}),l,u,n),c||(o(s.change(n,l)),A(t))},e}u()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~N.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,s=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,h()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),u=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,s=a.asyncError,u=a.asyncValidating,l=a.onBlur,c=a.onChange,d=a.onDrop,p=a.onDragStart,m=a.dirty,f=a.dispatch,g=a.onFocus,v=a.form,k=a.format,E=a.initial,y=(a.parse,a.pristine),F=a.props,x=a.state,B=a.submitError,S=a.submitFailed,N=a.submitting,T=a.syncError,O=a.syncWarning,A=(a.validate,a.value),j=a._value,D=(a.warn,h()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),C=T||s||B,w=O,_=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(A,k);return{input:b(D.type,{name:t,onBlur:l,onChange:c,onDragStart:p,onDrop:d,onFocus:g,value:_},j,i),meta:r()({},o(x),{active:!(!x||!n(x,"active")),asyncValidating:u,autofilled:!(!x||!n(x,"autofilled")),dirty:m,dispatch:f,error:C,form:v,initial:E,warning:w,invalid:!!C,pristine:y,submitting:!!N,submitFailed:!!S,touched:!(!x||!n(x,"touched")),valid:!C,visited:!(!x||!n(x,"visited"))}),custom:r()({},D,{},F)}}(e,o,r()({},s,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),c=u.custom,d=h()(u,["custom"]);if(n&&(c.ref=this.ref),"string"===typeof a){var p=d.input;d.meta;return Object(l.createElement)(a,r()({},p,{},c))}return Object(l.createElement)(a,r()({},d,{},c))},n}(l.Component);return n.propTypes={component:S,props:p.a.object},Object(v.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,s=(0,o.getFormState)(e),u=a(s,"initial."+r),l=void 0!==u?u:i&&a(i,r),c=a(s,"values."+r),d=a(s,"submitting"),p=function(e,t){var a=x.a.getIn(e,t);return a&&a._error?a._error:a}(a(s,"syncErrors"),r),m=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(s,"syncWarnings"),r),f=t(c,l);return{asyncError:a(s,"asyncErrors."+r),asyncValidating:a(s,"asyncValidating")===r,dirty:!f,pristine:f,state:a(s,"fields."+r),submitError:a(s,"submitErrors."+r),submitFailed:a(s,"submitFailed"),submitting:d,syncError:p,syncWarning:m,initial:l,value:c,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},w=a(177),_=a.n(w),R=function(e,t,a,n,r,o){if(o)return e===t},I=function(e,t,a){var n=_()(e.props,t,R),r=_()(e.state,a,R);return!n||!r},M=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},P=a(106);var L=function(e){var t=C(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=c.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}u()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return I(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=M(this.props,this.props.name),a=M(e,e.name);t===a&&x.a.deepEqual(this.props.validate,e.validate)&&x.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(l.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return M(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(l.Component);return n.propTypes={name:p.a.string.isRequired,component:S,format:p.a.func,normalize:p.a.func,onBlur:p.a.func,onChange:p.a.func,onFocus:p.a.func,onDragStart:p.a.func,onDrop:p.a.func,parse:p.a.func,props:p.a.object,validate:p.a.oneOfType([p.a.func,p.a.arrayOf(p.a.func)]),warn:p.a.oneOfType([p.a.func,p.a.arrayOf(p.a.func)]),forwardRef:p.a.bool,immutableProps:p.a.arrayOf(p.a.string),_reduxForm:p.a.object},Object(P.b)(n)};t.a=L(x.a)},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n),o=a(179),i=function(e){var t=e.input,a=e.label,n=e.type,o=e.limit,i=e.readOnly,s=e.meta,u=s.touched,l=s.error,c=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",maxLength:o,readOnly:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),u&&(l&&r.a.createElement("p",{className:"invalid-feedback"},l)||c&&r.a.createElement("p",null,c)))},s=function(e){var t=e.input,a=e.label,n=e.options,i=(e.placeholder,e.disabled),s=(e.value,e.meta),u=s.touched,l=s.error,c=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement(o.a,Object.assign({},t,{options:n,search:!0,emptyMessage:"Tidak Ada Data",placeholder:"Silahkan Pilih",disabled:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),u&&(l&&r.a.createElement("p",{className:"invalid-feedback"},l)||c&&r.a.createElement("p",null,c)))}},493:function(e,t,a){"use strict";var n=a(496);a(498);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",d=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],m=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",f=arguments.length>13?arguments[13]:void 0,g=new n.default;g.autoTable(p,f,{startY:40});var h=g.lastAutoTable.finalY+10;g.text(m,14,15),g.setFontSize(10),g.text(e,14,25),g.text(":",37,25),g.text(t,40,25),g.text(a,120,25),g.text(":",141,25),g.text(r,145,25),g.text(o,14,30),g.text(":",37,30),g.text(i,40,30),g.text(s,120,30),g.text(":",141,30),g.text(u,145,30),g.text("User",160,h+10),g.text(":",168,h+10),g.text(l,170,h+10),g.text("Cetak",160,h+15),g.text(":",168,h+15),g.text(c,170,h+15),g.text("Valid",160,h+20),g.text(":",168,h+20),g.text(d,170,h+20);var v=g.output("datauristring"),b="<embed width='100%' height='100%' src='"+v+"'/>",k=window.open();k.document.open(),k.document.write(b),k.document.close()}},504:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(19),r=a.n(n),o=function(e){e.forEach((function(e){localStorage.removeItem(e)}))},i=function(e,t,a,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(e))||[];i.splice(t,1),localStorage.setItem(e,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)}))}}))},s=function(e,t,a,n){return new Promise((function(o,i){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){if(i.isConfirmed){var s=JSON.parse(localStorage.getItem(e))||[];s.splice(t,1),localStorage.setItem(e,JSON.stringify(s)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)})).then(o("Berhasil")).catch("Gagal")}}))}))}},512:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(173),i=a.n(o),s=function(){return(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)},u=function(e){var t=e.label;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," ",t," "),r.a.createElement(i.a,{className:"form-control"}))}}}]);
//# sourceMappingURL=59.79c302a2.chunk.js.map