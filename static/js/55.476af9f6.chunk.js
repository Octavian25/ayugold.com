(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[55],{1071:function(e,a,t){"use strict";t.r(a);var n=t(39),r=t(40),i=t(42),o=t(41),s=t(0),l=t.n(s),c=t(19),m=t(298),u=t(312),d=function(e){var a={};return e.noRekening?e.noRekening.length<8&&(a.noRekening="Sepertinya Norekening Salah"):a.noRekening="Tidak Boleh Kosong",e.namaBank?e.namaBank.length>30&&(a.namaBank="Nama Terlalu Panjang"):a.namaBank="Tidak Boleh Kosong",e.atasNama?e.atasNama>30&&(a.atasNama="Nama Terlalu Panjang"):a.atasNama="Tidak Boleh Kosong","DEFAULT"===e.mataUang&&(a.mataUang="Tidak Boleh Kosong"),a},p=function(e){var a=e.input,t=e.label,n=e.type,r=(e.pattern,e.meta),i=r.touched,o=r.error,s=r.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},t),l.a.createElement("input",Object.assign({},a,{type:n,className:"form-control"})),i&&(o&&l.a.createElement("p",{className:"invalid-feedback"},o)||s&&l.a.createElement("p",{className:"invalid-feedback"},s)))},f=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={response:"",no_rekening:"",nama_bank:"",atas_nama:"",mata_uang:"RUPIAH"},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement(m.a,{name:"noRekening",type:"tel",component:p,label:"Nomor Rekening",onChange:function(){return e.props.change("mataUang","DEFAULT")}})),l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement(m.a,{name:"namaBank",type:"telp",normalize:function(e){return e&&e.toUpperCase()},component:p,label:"Nama Bank"})),l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement(m.a,{name:"atasNama",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:p,label:"Atas Nama"})),l.a.createElement("div",{className:"col-md-12 col-lg-12 mt-5"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:this.props.submitting},"Simpan"))))))}}]),t}(s.Component);f=Object(u.a)({form:"DataRekening",validate:d,enableReinitialize:!0})(f);var h=Object(c.b)()(f),g=t(377),v=t(3),b=t.n(v),E=t(306),y=t.n(E),k=t(77),N=t(43),D=t.n(N),R=function(e){var a=e.input,t=e.label,n=e.type,r=e.readOnly,i=e.meta,o=i.touched,s=i.error,c=i.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},t),l.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",readOnly:r})),o&&(s&&l.a.createElement("p",{style:{color:"#ff4f70"}},s)||c&&l.a.createElement("p",{style:{color:"#ff4f70"}},c)))},x=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={response:""},r}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement(m.a,{name:"noRekening",type:"tel",component:R,label:"Nomor Rekening",readOnly:!0})),l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement(m.a,{name:"namaBank",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:R,label:"Nama Bank"})),l.a.createElement("div",{className:"col-lg-4 col-md-4"},l.a.createElement(m.a,{name:"atasNama",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:R,label:"Atas Nama"})),l.a.createElement("div",{className:"col-md-12 col-lg-12 mt-5"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:this.props.submitting},"Simpan"))))))}}]),t}(s.Component);x=Object(u.a)({form:"FormRekeningEdit",validate:d,enableReinitialize:!0})(x);var F=Object(c.b)((function(e){return{initialValues:{noRekening:e.provinsi.editDataRekening.noRekening,atasNama:e.provinsi.editDataRekening.atasNama,namaBank:e.provinsi.editDataRekening.namaBank,mataUang:e.provinsi.editDataRekening.mataUang}}}),null)(x),S=t(294),O=t(88),j=t.n(O);var w=[{dataField:"nomorRekening",order:"asc"}],B="http://157.245.145.87:9011/master/",C=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).updateStatus=function(e){console.log(e),r.setState({response:e}),r.props.dispatch(Object(k.d)())},r.state={Rekening:[],response:"",columns:[{dataField:"noRekening",text:"Nomor Rekening"},{dataField:"namaBank",text:"Nama Bank"},{dataField:"atasNama",text:"Atas Nama"},{dataField:"mataUang",text:"Mata Uang"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return e=r.props.dispatch,t=a.noRekening,void D.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&b.a.delete(B+"bank",{data:{noRekening:t}}).then((function(e){return D.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Dihapus!",showConfirmButton:!1,timer:1500})})).catch((function(e){return D.a.fire({position:"top-end",icon:"error",text:"Data Gagal Dihapus!",showConfirmButton:!1,timer:1500})})).then((function(){return e(Object(k.d)())}))}));var e,t}},l.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),l.a.createElement("button",{className:"btn btn-warning","data-toggle":"modal","data-target":"#editModal",onClick:function(){return r.props.dispatch(Object(k.c)(a.noRekening,a.atasNama,a.namaBank,a.mataUang))}},l.a.createElement("i",{className:"fa fa-edit mr-2"}),"EDIT"))}}]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(k.d)())}},{key:"handleSubmit",value:function(e){var a=this,t={statusAktif:"AKTIF",atasNama:e.atasNama,namaBank:e.namaBank,noRekening:e.noRekening,mataUang:"RUPIAH"};console.log(t),b.a.post(B+"bank",t).then((function(e){return D.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Disimpan!",showConfirmButton:!1,timer:1500})}),document.getElementById("dismiss_modal").click()).catch((function(e){return D.a.fire({position:"top-end",icon:"success",text:"Data Gagal Disimpan!",showConfirmButton:!1,timer:1500})})).then((function(){return a.props.dispatch(Object(k.d)())})).then((function(){return a.props.dispatch(Object(S.a)("DataRekening"))}))}},{key:"handleEdit",value:function(e){var a=this,t={statusAktif:"AKTIF",atasNama:e.atasNama,namaBank:e.namaBank,noRekening:e.noRekening,mataUang:"RUPIAH"};console.log(t),b.a.put(B+"bank",t).then((function(e){return D.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Diubah!",showConfirmButton:!1,timer:1500})}),document.getElementById("dismiss_modal1").click()).catch((function(e){return D.a.fire({position:"top-end",icon:"error",text:"Data Gagal Diubah!",showConfirmButton:!1,timer:1500})})).then((function(){return a.props.dispatch(Object(k.d)())}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid",style:{color:"black"}},l.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title mb-3",style:{fontSize:30}},"Data Rekening"),l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info","data-toggle":"modal","data-target":"#primary-header-modal"},"Tambah Data Rekening"))),this.props.daftarList?l.a.createElement(g.a,{data:this.props.daftarList,columns:this.state.columns,defaultSorted:w,namaKey:"noRekening"}):l.a.createElement("div",null,this.props.error?l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:y.a,style:{width:"30%"},alt:"ERROR GET DATA"}),l.a.createElement("br",null),l.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):l.a.createElement(j.a,{width:1100,height:180})))))),l.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-lg"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},l.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Rekening"),l.a.createElement("button",{type:"button",id:"dismiss_modal",nama:"dismiss_modal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement(h,{updateStatus:this.updateStatus,onSubmit:function(a){return e.handleSubmit(a)}})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close"))))),l.a.createElement("div",{id:"editModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-lg"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},l.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Edit Data Rekening"),l.a.createElement("button",{type:"button",id:"dismiss_modal1",nama:"dismiss_modal1",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement(F,{updateStatus:this.updateStatus,onSubmit:function(a){return e.handleEdit(a)}})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close"))))))}}]),t}(s.Component);a.default=Object(c.b)((function(e){return{daftarList:e.provinsi.rekening,alert:e.provinsi.alert,error:e.provinsi.error}}),null)(C)},294:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(342),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},298:function(e,a,t){"use strict";var n=t(33),r=t.n(n),i=t(337),o=t.n(i),s=t(156),l=t.n(s),c=t(0),m=t.n(c),u=t(27),d=t.n(u),p=t(302),f=t.n(p),h=t(60),g=t.n(h),v=t(19),b=function(e,a,t,n){var i=a.value;return"checkbox"===e?r()({},a,{checked:!!i}):"radio"===e?r()({},a,{checked:n(i,t),value:t}):"select-multiple"===e?r()({},a,{value:i||[]}):"file"===e?r()({},a,{value:i||void 0}):a};var E=t(299),y=function(e,a){if(Object(E.a)(e)){if(!a&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(a&&void 0!==e.nativeEvent)return e.nativeEvent.text;var t=e,n=t.target,r=n.type,i=n.value,o=n.checked,s=n.files,l=t.dataTransfer;return"checkbox"===r?!!o:"file"===r?s||l&&l.files:"select-multiple"===r?function(e){var a=[];if(e)for(var t=0;t<e.length;t++){var n=e[t];n.selected&&a.push(n.value)}return a}(e.target.options):i}return e},k="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,N=function(e,a){var t=a.name,n=a.parse,r=a.normalize,i=y(e,k);return n&&(i=n(i,t)),r&&(i=r(t,i)),i},D=t(12),R=t(44),x=function(e,a,t){return Object(R.isValidElementType)(e[a])?null:new Error("Invalid prop `"+a+"` supplied to `"+t+"`.")},F=["_reduxForm"],S=function(e){return e&&"object"===typeof e},O=function(e){return e&&"function"===typeof e},j=function(e){S(e)&&O(e.preventDefault)&&e.preventDefault()},w=function(e,a){if(S(e)&&S(e.dataTransfer)&&O(e.dataTransfer.getData))return e.dataTransfer.getData(a)},B=function(e,a,t){S(e)&&S(e.dataTransfer)&&O(e.dataTransfer.setData)&&e.dataTransfer.setData(a,t)};var C=function(e){var a=e.deepEqual,t=e.getIn,n=function(t){function n(){for(var e,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).ref=m.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(a){var t=e.props,n=t.name,i=t.dispatch,o=t.parse,s=t.normalize,l=t.onChange,c=t._reduxForm,m=t.value,u=N(a,{name:n,parse:o,normalize:s}),d=!1;if(l)if(!k&&Object(E.a)(a))l(r()({},a,{preventDefault:function(){return d=!0,j(a)}}),u,m,n);else{var p=l(a,u,m,n);k&&(d=p)}d||(i(c.change(n,u)),c.asyncValidate&&c.asyncValidate(n,u,"change"))},e.handleFocus=function(a){var t=e.props,n=t.name,i=t.dispatch,o=t.onFocus,s=t._reduxForm,l=!1;o&&(k?l=o(a,n):o(r()({},a,{preventDefault:function(){return l=!0,j(a)}}),n)),l||i(s.focus(n))},e.handleBlur=function(a){var t=e.props,n=t.name,i=t.dispatch,o=t.parse,s=t.normalize,l=t.onBlur,c=t._reduxForm,m=t._value,u=t.value,d=N(a,{name:n,parse:o,normalize:s});d===m&&void 0!==m&&(d=u);var p=!1;l&&(k?p=l(a,d,u,n):l(r()({},a,{preventDefault:function(){return p=!0,j(a)}}),d,u,n)),p||(i(c.blur(n,d)),c.asyncValidate&&c.asyncValidate(n,d,"blur"))},e.handleDragStart=function(a){var t=e.props,n=t.name,r=t.onDragStart,i=t.value;B(a,"text",null==i?"":i),r&&r(a,n)},e.handleDrop=function(a){var t=e.props,n=t.name,i=t.dispatch,o=t.onDrop,s=t._reduxForm,l=t.value,c=w(a,"text"),m=!1;o&&o(r()({},a,{preventDefault:function(){return m=!0,j(a)}}),c,l,n),m||(i(s.change(n,c)),j(a))},e}l()(n,t);var i=n.prototype;return i.shouldComponentUpdate=function(e){var t=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?t.props[n]!==e[n]:!~F.indexOf(n)&&!a(t.props[n],e[n])})))},i.getRenderedComponent=function(){return this.ref.current},i.render=function(){var a=this.props,t=a.component,n=a.forwardRef,i=a.name,o=a._reduxForm,s=(a.normalize,a.onBlur,a.onChange,a.onFocus,a.onDragStart,a.onDrop,a.immutableProps,g()(a,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),l=function(e,a,t){var n=e.getIn,i=e.toJS,o=e.deepEqual,s=t.asyncError,l=t.asyncValidating,c=t.onBlur,m=t.onChange,u=t.onDrop,d=t.onDragStart,p=t.dirty,f=t.dispatch,h=t.onFocus,v=t.form,E=t.format,y=t.initial,k=(t.parse,t.pristine),N=t.props,D=t.state,R=t.submitError,x=t.submitFailed,F=t.submitting,S=t.syncError,O=t.syncWarning,j=(t.validate,t.value),w=t._value,B=(t.warn,g()(t,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),C=S||s||R,_=O,T=function(e,t){if(null===t)return e;var n=null==e?"":e;return t?t(e,a):n}(j,E);return{input:b(B.type,{name:a,onBlur:c,onChange:m,onDragStart:d,onDrop:u,onFocus:h,value:T},w,o),meta:r()({},i(D),{active:!(!D||!n(D,"active")),asyncValidating:l,autofilled:!(!D||!n(D,"autofilled")),dirty:p,dispatch:f,error:C,form:v,initial:y,warning:_,invalid:!!C,pristine:k,submitting:!!F,submitFailed:!!x,touched:!(!D||!n(D,"touched")),valid:!C,visited:!(!D||!n(D,"visited"))}),custom:r()({},B,{},N)}}(e,i,r()({},s,{form:o.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),m=l.custom,u=g()(l,["custom"]);if(n&&(m.ref=this.ref),"string"===typeof t){var d=u.input;u.meta;return Object(c.createElement)(t,r()({},d,{},m))}return Object(c.createElement)(t,r()({},u,{},m))},n}(c.Component);return n.propTypes={component:x,props:d.a.object},Object(v.b)((function(e,n){var r=n.name,i=n._reduxForm,o=i.initialValues,s=(0,i.getFormState)(e),l=t(s,"initial."+r),c=void 0!==l?l:o&&t(o,r),m=t(s,"values."+r),u=t(s,"submitting"),d=function(e,a){var t=D.a.getIn(e,a);return t&&t._error?t._error:t}(t(s,"syncErrors"),r),p=function(e,a){var n=t(e,a);return n&&n._warning?n._warning:n}(t(s,"syncWarnings"),r),f=a(m,c);return{asyncError:t(s,"asyncErrors."+r),asyncValidating:t(s,"asyncValidating")===r,dirty:!f,pristine:f,state:t(s,"fields."+r),submitError:t(s,"submitErrors."+r),submitFailed:t(s,"submitFailed"),submitting:u,syncError:d,syncWarning:p,initial:c,value:m,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},_=t(89),T=t.n(_),A=function(e,a,t,n,r,i){if(i)return e===a},U=function(e,a,t){var n=T()(e.props,a,A),r=T()(e.state,t,A);return!n||!r},z=function(e,a){var t=e._reduxForm.sectionPrefix;return t?t+"."+a:a},P=t(297);var V=function(e){var a=C(e),t=e.setIn,n=function(e){function n(a){var n;if((n=e.call(this,a)||this).ref=m.a.createRef(),n.normalize=function(e,a){var r=n.props.normalize;if(!r)return a;var i=n.props._reduxForm.getValues();return r(a,n.value,t(i,e,a),i,e)},!a._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}l()(n,e);var i=n.prototype;return i.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},i.shouldComponentUpdate=function(e,a){return U(this,e,a)},i.UNSAFE_componentWillReceiveProps=function(e){var a=z(this.props,this.props.name),t=z(e,e.name);a===t&&D.a.deepEqual(this.props.validate,e.validate)&&D.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(a),this.props._reduxForm.register(t,"Field",(function(){return e.validate}),(function(){return e.warn})))},i.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},i.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},i.render=function(){return Object(c.createElement)(a,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},o()(n,[{key:"name",get:function(){return z(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(c.Component);return n.propTypes={name:d.a.string.isRequired,component:x,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(P.b)(n)};a.a=V(D.a)},306:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"},377:function(e,a,t){"use strict";var n=t(39),r=t(40),i=t(42),o=t(41),s=t(0),l=t.n(s),c=t(303),m=t.n(c),u=t(305),d=t.n(u),p=t(304),f=t.n(p),h=t(19),g=u.Search.SearchBar,v=u.CSVExport.ExportCSVButton,b=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).rowStyle=function(e,a){e.index=a;var t={};return t.backgroundColor=a%2===0?"transparent":"#DEDEDE",t.borderTop="none",t},r.state={},r}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.props.data,columns:this.props.columns,defaultSorted:this.props.defaultSorted,search:!0},(function(e){return l.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},l.a.createElement("div",{className:"text-right"},l.a.createElement(g,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),l.a.createElement(m.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:f()()})),l.a.createElement(v,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))}))}}]),t}(s.Component);a.a=Object(h.b)()(b)}}]);
//# sourceMappingURL=55.476af9f6.chunk.js.map