(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[43,6,174],{1244:function(e,t,a){"use strict";a.r(t);var n=a(77),r=a(71),i=a(72),o=a(74),s=a(73),c=a(0),u=a.n(c),l=a(496),d=a.n(l),p=a(556),m=a(51),f=a.n(m),h=a(523),v=(a(514),a(515),a(27)),b=a(155),g=a(465),k=a(458),E=a(538),y=a(469),O=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={response:"",status:"AKTIF"},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.kode,t=this.props.nama;return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-2"},u.a.createElement(g.a,{name:e.replace(/\s/g,""),type:"text",normalize:function(e){return e&&e.toUpperCase()},component:y.a,readOnly:!0,label:this.props.kode})),u.a.createElement("div",{className:"col-md-4"},u.a.createElement(g.a,{name:t.replace(/\s/g,""),type:"text",normalize:function(e){return e&&e.toUpperCase()},component:y.a,label:this.props.nama})),u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{type:"submit",id:"simpan",className:"btn btn-primary",disabled:this.props.submitting},"Submit"))))))}}]),a}(c.Component);O=Object(k.a)({form:"ProvinsiEdit",validate:E.a,enableReinitialize:!0})(O);var j=Object(v.b)((function(e){return{initialValues:{NamaProvinsi:e.provinsi.editProvinsi.namaProvinsi,KodeProvinsi:e.provinsi.editProvinsi.kodeProvinsi,status:e.provinsi.editProvinsi.statusAktif}}}),null)(O),P=a(288),D=a(173),N=a.n(D),S=a(5),w=a(466),x=a(499),C=a(35),K=a(464),B=a(503);var F=[{dataField:"kodeProvinsi",order:"asc"}],T=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).updateStatus=function(e){console.log(e),i.setState({response:e}),i.props.dispatch(Object(b.d)())},i.edit=function(e){return function(t){i.setState(Object(n.a)({},e,t.target.value))}},i.openTour=function(){i.setState({isTourOpen:!0})},i.closeTour=function(){i.setState({isTourOpen:!1})},i.state={provinsi:[],provinsi_array:[],response:"",namaProvinsi:"",kodeProvinsi:"",columns:[{dataField:"kode_provinsi",text:"Kode Provinsi",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"nama_provinsi",text:"Nama Provinsi",sort:!0},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){var a={namaProvinsi:t.nama_provinsi,kodeProvinsi:t.kode_provinsi,statusAktif:t.statusAktif};return u.a.createElement("div",{className:"text-center"},u.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return e=i.props.dispatch,a=t.kode_provinsi,void f.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&Object(S.a)("provinsi/delete/"+a).then((function(e){return Object(w.b)("Data Berhasil Dihapus")})).then((function(){return e(Object(b.d)())})).catch((function(e){return Object(w.c)("Data Gagal Dihapus")}))}));var e,a},"data-tut":"reactour_3"},u.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),u.a.createElement("button",{className:"btn btn-warning mr-2","data-toggle":"modal","data-target":"#editModal",onClick:function(){return i.editModal(a)},"data-tut":"reactour_4"},u.a.createElement("i",{className:"fa fa-edit mr-1"}),"Edit"))}}],showModal:!0},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(b.d)())}},{key:"handleSubmit",value:function(e){var t=this,a={nama_provinsi:e.NamaProvinsi,kode_provinsi:e.KodeProvinsi};Object(S.c)("provinsi/add",a).then((function(){return t.props.dispatch(Object(C.g)())})).then((function(e){return Object(w.b)("Data Berhasil Disimpan").then((function(){return Object(w.a)("Berhasil Menambahkan Data Provinsi",a)}))})).catch((function(n){return t.handleReactive(n,e.KodeProvinsi,a)})).then((function(){return t.props.dispatch(Object(b.d)())})).then((function(){return t.props.dispatch(Object(P.a)("Provinsi"))}))}},{key:"handleEdit",value:function(e){var t=this,a={statusAktif:e.status?e.status:"AKTIF",nama_provinsi:e.NamaProvinsi,kode_provinsi:e.KodeProvinsi};Object(S.d)("provinsi/edit/"+e.KodeProvinsi,{nama_provinsi:e.NamaProvinsi}).then((function(){return t.props.dispatch(Object(C.g)())})).then((function(e){return Object(w.b)("Data Berhasil Diperbaharui").then((function(){return Object(w.a)("Berhasil Edit Data Provinsi",a)})).then((function(){return t.props.dispatch(Object(b.d)())}))})).catch((function(e){return Object(w.c)("Data Gagal Ditambahkan").then((function(){return Object(w.a)("Gagal Edit Data Provinsi",a,e)}))}))}},{key:"handleReactive",value:function(e,t,a){var n=this;this.props.dispatch(Object(C.g)()),e.response.data.includes(t)?Object(w.d)(e,t,"provinsi/reactive/",a).then((function(){return n.props.dispatch(Object(b.d)())})):Object(w.c)("Data Gagal Ditambahkan").then((function(){return Object(w.a)("Gagal Menambahkan Data provinsi",a,e)}))}},{key:"tambahModal",value:function(){this.props.dispatch(Object(C.j)()),this.setState({isEdit:!1})}},{key:"editModal",value:function(e){this.props.dispatch(Object(C.j)()),this.props.dispatch(Object(b.c)(e)),this.setState({isEdit:!0})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"container-fluid",style:{color:"black"}},u.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},u.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},u.a.createElement("span",{"aria-hidden":"true"},"\xd7")),u.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),u.a.createElement(B.a,{tourConfig:["Untuk Menambahkan Data Provinsi, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah data provinsi yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih","Ini adalah tombol untuk mengubah data pada baris yang dipilih"]}),u.a.createElement(x.default,{content:this.state.isEdit?u.a.createElement(j,{nama:"Nama Provinsi",kode:"Kode Provinsi",from:"provinsi",edit:this.edit,updateStatus:this.updateStatus,onSubmit:function(t){return e.handleEdit(t)}}):u.a.createElement(p.a,{nama:"Nama Provinsi",isiNama:this.state.namaProvinsi,kode:"Kode Provinsi",isikode:this.state.kodeProvinsi,status:this.state.status,from:"provinsi",edit:this.edit,updateStatus:this.updateStatus,onSubmit:function(t){return e.handleSubmit(t)},showModal:this.state.showModal}),title:this.state.isEdit?"Edit Data Provinsi":"Tambah Data Provinsi"}),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"card"},u.a.createElement(K.default,{title:"Data Provinsi"}),u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{name:"simpan",id:"simpan",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data Provinsi"))),u.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5","data-tut":"reactour_2"},this.props.provinsiList?u.a.createElement(h.a,{columns:this.state.columns,data:this.props.provinsiList,defaultSorted:F,namaKey:"kodeProvinsi"}):u.a.createElement("div",null,this.props.error?u.a.createElement("div",{className:"text-center"},u.a.createElement("img",{src:d.a,style:{width:"30%"},alt:"NOT RESPOND"}),u.a.createElement("br",null),u.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):u.a.createElement(N.a,{width:1100,height:180}))))))))}}]),a}(c.Component);t.default=Object(v.b)((function(e){return{provinsiList:e.provinsi.provinsi,alert:e.provinsi.alert,error:e.provinsi.error,status:e.provinsi.status}}),null)(T)},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(16),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},464:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),i=a(74),o=a(73),s=a(0),c=a.n(s),u=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(s.Component);t.default=u},465:function(e,t,a){"use strict";var n=a(11),r=a.n(n),i=a(175),o=a.n(i),s=a(36),c=a.n(s),u=a(0),l=a.n(u),d=a(2),p=a.n(d),m=a(52),f=a.n(m),h=a(26),v=a.n(h),b=a(27),g=function(e,t,a,n){var i=t.value;return"checkbox"===e?r()({},t,{checked:!!i}):"radio"===e?r()({},t,{checked:n(i,a),value:a}):"select-multiple"===e?r()({},t,{value:i||[]}):"file"===e?r()({},t,{value:i||void 0}):t};var k=a(172),E=function(e,t){if(Object(k.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,i=n.value,o=n.checked,s=n.files,c=a.dataTransfer;return"checkbox"===r?!!o:"file"===r?s||c&&c.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):i}return e},y="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,O=function(e,t){var a=t.name,n=t.parse,r=t.normalize,i=E(e,y);return n&&(i=n(i,a)),r&&(i=r(a,i)),i},j=a(10),P=a(76),D=function(e,t,a){return Object(P.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},N=["_reduxForm"],S=function(e){return e&&"object"===typeof e},w=function(e){return e&&"function"===typeof e},x=function(e){S(e)&&w(e.preventDefault)&&e.preventDefault()},C=function(e,t){if(S(e)&&S(e.dataTransfer)&&w(e.dataTransfer.getData))return e.dataTransfer.getData(t)},K=function(e,t,a){S(e)&&S(e.dataTransfer)&&w(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var B=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))||this).ref=l.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.parse,s=a.normalize,c=a.onChange,u=a._reduxForm,l=a.value,d=O(t,{name:n,parse:o,normalize:s}),p=!1;if(c)if(!y&&Object(k.a)(t))c(r()({},t,{preventDefault:function(){return p=!0,x(t)}}),d,l,n);else{var m=c(t,d,l,n);y&&(p=m)}p||(i(u.change(n,d)),u.asyncValidate&&u.asyncValidate(n,d,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.onFocus,s=a._reduxForm,c=!1;o&&(y?c=o(t,n):o(r()({},t,{preventDefault:function(){return c=!0,x(t)}}),n)),c||i(s.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.parse,s=a.normalize,c=a.onBlur,u=a._reduxForm,l=a._value,d=a.value,p=O(t,{name:n,parse:o,normalize:s});p===l&&void 0!==l&&(p=d);var m=!1;c&&(y?m=c(t,p,d,n):c(r()({},t,{preventDefault:function(){return m=!0,x(t)}}),p,d,n)),m||(i(u.blur(n,p)),u.asyncValidate&&u.asyncValidate(n,p,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,i=a.value;K(t,"text",null==i?"":i),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.onDrop,s=a._reduxForm,c=a.value,u=C(t,"text"),l=!1;o&&o(r()({},t,{preventDefault:function(){return l=!0,x(t)}}),u,c,n),l||(i(s.change(n,u)),x(t))},e}c()(n,a);var i=n.prototype;return i.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~N.indexOf(n)&&!t(a.props[n],e[n])})))},i.getRenderedComponent=function(){return this.ref.current},i.render=function(){var t=this.props,a=t.component,n=t.forwardRef,i=t.name,o=t._reduxForm,s=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,v()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),c=function(e,t,a){var n=e.getIn,i=e.toJS,o=e.deepEqual,s=a.asyncError,c=a.asyncValidating,u=a.onBlur,l=a.onChange,d=a.onDrop,p=a.onDragStart,m=a.dirty,f=a.dispatch,h=a.onFocus,b=a.form,k=a.format,E=a.initial,y=(a.parse,a.pristine),O=a.props,j=a.state,P=a.submitError,D=a.submitFailed,N=a.submitting,S=a.syncError,w=a.syncWarning,x=(a.validate,a.value),C=a._value,K=(a.warn,v()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),B=S||s||P,F=w,T=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(x,k);return{input:g(K.type,{name:t,onBlur:u,onChange:l,onDragStart:p,onDrop:d,onFocus:h,value:T},C,o),meta:r()({},i(j),{active:!(!j||!n(j,"active")),asyncValidating:c,autofilled:!(!j||!n(j,"autofilled")),dirty:m,dispatch:f,error:B,form:b,initial:E,warning:F,invalid:!!B,pristine:y,submitting:!!N,submitFailed:!!D,touched:!(!j||!n(j,"touched")),valid:!B,visited:!(!j||!n(j,"visited"))}),custom:r()({},K,{},O)}}(e,i,r()({},s,{form:o.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),l=c.custom,d=v()(c,["custom"]);if(n&&(l.ref=this.ref),"string"===typeof a){var p=d.input;d.meta;return Object(u.createElement)(a,r()({},p,{},l))}return Object(u.createElement)(a,r()({},d,{},l))},n}(u.Component);return n.propTypes={component:D,props:p.a.object},Object(b.b)((function(e,n){var r=n.name,i=n._reduxForm,o=i.initialValues,s=(0,i.getFormState)(e),c=a(s,"initial."+r),u=void 0!==c?c:o&&a(o,r),l=a(s,"values."+r),d=a(s,"submitting"),p=function(e,t){var a=j.a.getIn(e,t);return a&&a._error?a._error:a}(a(s,"syncErrors"),r),m=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(s,"syncWarnings"),r),f=t(l,u);return{asyncError:a(s,"asyncErrors."+r),asyncValidating:a(s,"asyncValidating")===r,dirty:!f,pristine:f,state:a(s,"fields."+r),submitError:a(s,"submitErrors."+r),submitFailed:a(s,"submitFailed"),submitting:d,syncError:p,syncWarning:m,initial:u,value:l,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},F=a(176),T=a.n(F),_=function(e,t,a,n,r,i){if(i)return e===t},A=function(e,t,a){var n=T()(e.props,t,_),r=T()(e.state,a,_);return!n||!r},R=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},z=a(106);var L=function(e){var t=B(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=l.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var i=n.props._reduxForm.getValues();return r(t,n.value,a(i,e,t),i,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}c()(n,e);var i=n.prototype;return i.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},i.shouldComponentUpdate=function(e,t){return A(this,e,t)},i.UNSAFE_componentWillReceiveProps=function(e){var t=R(this.props,this.props.name),a=R(e,e.name);t===a&&j.a.deepEqual(this.props.validate,e.validate)&&j.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},i.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},i.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},i.render=function(){return Object(u.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},o()(n,[{key:"name",get:function(){return R(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(u.Component);return n.propTypes={name:p.a.string.isRequired,component:D,format:p.a.func,normalize:p.a.func,onBlur:p.a.func,onChange:p.a.func,onFocus:p.a.func,onDragStart:p.a.func,onDrop:p.a.func,parse:p.a.func,props:p.a.object,validate:p.a.oneOfType([p.a.func,p.a.arrayOf(p.a.func)]),warn:p.a.oneOfType([p.a.func,p.a.arrayOf(p.a.func)]),forwardRef:p.a.bool,immutableProps:p.a.arrayOf(p.a.string),_reduxForm:p.a.object},Object(z.b)(n)};t.a=L(j.a)},466:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return l}));var n=a(51),r=a.n(n),i=a(5),o=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},s=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},c=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(e){return a(e)}))}))},u=function(e,t,a,n){return new Promise((function(o,c){r.a.fire({title:"Oopps..",text:e.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(e){e.isConfirmed&&Object(i.d)(a+t,n).then((function(){return s("Data Berhasil Dikembalikan")})).then((function(){return o("Berhasil")})).catch((function(e){return c("Gagal")}))}))}))},l=function(e,t,a){var n=(new Date).toLocaleDateString(),r=JSON.parse(localStorage.getItem("LogWebsite"))||[],i={tanggal:n,keterangan:e,data:t,error:a};r.push(i),localStorage.setItem("LogWebsite",JSON.stringify(r))}},469:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n),i=a(178),o=function(e){var t=e.input,a=e.label,n=e.type,i=e.limit,o=e.readOnly,s=e.meta,c=s.touched,u=s.error,l=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",maxLength:i,readOnly:o,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),c&&(u&&r.a.createElement("p",{className:"invalid-feedback"},u)||l&&r.a.createElement("p",null,l)))},s=function(e){var t=e.input,a=e.label,n=e.options,o=(e.placeholder,e.disabled),s=(e.value,e.meta),c=s.touched,u=s.error,l=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement(i.a,Object.assign({},t,{options:n,search:!0,emptyMessage:"Tidak Ada Data",placeholder:"Silahkan Pilih",disabled:o,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),c&&(u&&r.a.createElement("p",{className:"invalid-feedback"},u)||l&&r.a.createElement("p",null,l)))}},496:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"},499:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),i=a(74),o=a(73),s=a(1208),c=a(0),u=a.n(c),l=a(27),d=a(35),p=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement(s.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(d.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},u.a.createElement(s.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},u.a.createElement(s.a.Title,null,this.props.title||"")),u.a.createElement(s.a.Body,null,this.props.content||""))}}]),a}(c.Component);t.default=Object(l.b)((function(e){return{show:e.modal.show}}),null)(p)},503:function(e,t,a){"use strict";var n=a(71),r=a(72),i=a(74),o=a(73),s=a(0),c=a.n(s),u=a(27),l=a(35),d=a(524),p=a(522),m=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).disableBody=function(e){return Object(p.a)(e)},r.enableBody=function(e){return Object(p.b)(e)},r.state={},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tourConfig.map((function(e,t){return{selector:'[data-tut="reactour_'+ ++t+'"]',content:e}}));return console.log(t),c.a.createElement(d.a,{onRequestClose:function(){return e.props.dispatch(Object(l.f)())},steps:t,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),a}(s.Component);t.a=Object(u.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(m)},514:function(e,t,a){e.exports=a.p+"static/media/active.1c1b1ba9.png"},515:function(e,t,a){e.exports=a.p+"static/media/nonactive.ca911de0.png"},523:function(e,t,a){"use strict";var n=a(71),r=a(72),i=a(74),o=a(73),s=a(0),c=a.n(s),u=a(468),l=a.n(u),d=a(471),p=a.n(d),m=a(470),f=a.n(m),h=a(27),v=d.Search.SearchBar,b=d.CSVExport.ExportCSVButton,g=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).rowStyle=function(e,t){e.index=t;var a={};return a.backgroundColor=t%2===0?"transparent":"#DEDEDE",a.borderTop="none",a},r.state={},r}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(p.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.props.data,columns:this.props.columns,defaultSorted:this.props.defaultSorted,search:!0},(function(e){return c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},c.a.createElement("div",{className:"text-right"},c.a.createElement(v,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),c.a.createElement(l.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:f()()})),c.a.createElement(b,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))}))}}]),a}(s.Component);t.a=Object(h.b)()(g)},538:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){var t={};return e.KodeProvinsi?e.KodeProvinsi.length>5&&(t.KodeProvinsi="Tidak Boleh Lebih Dari 5 Karakter"):t.KodeProvinsi="Tidak Boleh kosong",e.NamaProvinsi||(t.NamaProvinsi="Tidak Boleh kosong"),e.KodeKota?e.KodeKota.length>5&&(t.KodeKota="Tidak Boleh Lebih Dari 5 Karakter"):t.KodeKota="Tidak Boleh kosong",e.kodeProvinsi?"DEFAULT"===e.kodeProvinsi&&(t.kodeProvinsi="Silahkan Pilih Provinsi"):t.kodeProvinsi="Tidak Boleh Kosong",e.NamaKota||(t.NamaKota="Tidak Boleh Kosong"),e.KodeArea?e.KodeArea.length>5&&(t.KodeArea="Tidak Boleh Lebih Dari 5 Karakter"):t.KodeArea="Tidak Boleh kosong",e.kodeKota?"DEFAULT"===e.kodeKota&&(t.kodeKota="Silahkan Pilih Provinsi"):t.kodeKota="Tidak Boleh Kosong",e.NamaArea||(t.NamaArea="Tidak Boleh Kosong"),e.KodeLokasi?e.KodeLokasi.length>5&&(t.KodeLokasi="Tidak Boleh Lebih Dari 5 Karakter"):t.KodeLokasi="Tidak Boleh kosong",e.NamaLokasi||(t.NamaLokasi="Tidak Boleh kosong"),t}},556:function(e,t,a){"use strict";var n=a(71),r=a(72),i=a(74),o=a(73),s=a(0),c=a.n(s),u=a(27),l=a(465),d=a(458),p=a(538),m=a(469),f=a(5),h=a(466),v=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={response:"",status:"AKTIF",listProvinsi:[],listKota:[],isiNama:"",isikode:""},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(f.b)("provinsi/get/all").then((function(t){return e.setState({listProvinsi:t.data})})).catch((function(e){return console.log(e)})),Object(f.b)("kota/get/all").then((function(t){return e.setState({listKota:t.data})})).catch((function(e){return Object(h.a)("Error Get Data Kota")}))}},{key:"render",value:function(){var e=this.props.kode,t=this.props.nama;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-2"},c.a.createElement(l.a,{name:e.replace(/\s/g,""),type:"text",normalize:function(e){return e&&e.toUpperCase()},component:m.a,limit:5,label:this.props.kode})),"kota"===this.props.from?c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement(l.a,{component:m.b,label:this.props.kode_ext,name:"kodeProvinsi",value:this.props.status,normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listProvinsi.map((function(e){return{value:e.kode_provinsi,name:e.nama_provinsi}}))}))):null,"area"===this.props.from?c.a.createElement("div",{className:"col-md-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement(l.a,{component:m.b,label:this.props.kode_ext,name:"kota"===this.props.from?"kodeProvinsi":"kodeKota",value:this.props.status,normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listKota.map((function(e){return{value:e.kode_kota,name:e.nama_kota}}))}))):null,c.a.createElement("div",{className:"col-md-3"},c.a.createElement(l.a,{name:t.replace(/\s/g,""),type:"text",normalize:function(e){return e&&e.toUpperCase()},component:m.a,label:this.props.nama})),"area"===this.props.from?c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(l.a,{name:"kodePos",component:m.a,type:"number",label:"Kode Pos",placeholder:"Masukan Kode Pos"})):null,c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"submit",id:"simpan",className:"btn btn-primary",disabled:this.props.submitting},"Submit"))))))}}]),a}(s.Component);v=Object(d.a)({form:"Provinsi",validate:p.a,enableReinitialize:!0})(v),t.a=Object(u.b)((function(e){return{limit:e.config.limit,error:e.alert.Error,editProvinsi:e.provinsi.editProvinsi}}),null)(v)}}]);
//# sourceMappingURL=43.2a1f434a.chunk.js.map