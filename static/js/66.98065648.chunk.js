(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[66,174],{1220:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),c=a.n(s),u=a(464),l=a(279),p=a(27),d=a(465),m=a(458),f=a(469),h=function(e){var t={};return e.new_password?e.new_password.length<6&&(t.new_password="Password kurang dari 6"):t.new_password="Tidak Boleh kosong",e.retype_new_password?e.retype_new_password.length<6?t.retype_new_password="Password kurang dari 6":e.retype_new_password!==e.new_password&&(t.retype_new_password="Password tidak sama"):t.retype_new_password="Tidak Boleh kosong",t},v=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={isShow:!1},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("form",null,c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(d.a,{component:f.a,label:"Password Lama",name:"password",type:this.state.isShow?"text":"password"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(d.a,{component:f.a,label:"Password Baru",name:"new_password",type:this.state.isShow?"text":"password"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(d.a,{component:f.a,label:"Retype Password Baru",name:"retype_new_password",type:this.state.isShow?"text":"password"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"form-control-transparant"},c.a.createElement("label",null,c.a.createElement(d.a,{name:"StatusTitipan",component:"input",type:"checkbox",value:"Open",className:"mr-2",onClick:function(){return e.setState({isShow:!e.state.isShow})}}),"Show Password"))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:this.props.handleSubmit},c.a.createElement("i",{className:"fa fa-paper-plane mr-3"})," Simpan")))))}}]),a}(s.Component);v=Object(m.a)({form:"EditPassword",enableReinitialize:!0,validate:h})(v);var g=Object(p.b)()(v),b=a(5),w=a(466),y=a(292),E=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={isShow:!1},r}return Object(r.a)(a,[{key:"handleChangePassword",value:function(e){var t=this,a={password:e.password,new_password:e.new_password,retype_new_password:e.retype_new_password};Object(b.d)("users/change-password",a).then((function(){return Object(w.b)("Berhasil Mengganti Password")})).then((function(){return t.props.dispatch(Object(y.a)("EditPassword"))})).catch((function(){return Object(w.c)("Sepertinya ada kesalahan, silahkan ulangi beberapa saat lagi")}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"card"},c.a.createElement(u.default,{title:"Profile"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(l.a,{color:"#5F76E8",name:this.props.username,round:!0})),c.a.createElement("div",{className:"col-lg-8"},c.a.createElement("h3",{style:{fontWeight:600}},this.props.username),c.a.createElement("h5",null,"OWNER"))))))),c.a.createElement("div",{className:"col-lg-8"},c.a.createElement("div",{className:"card"},c.a.createElement(u.default,{title:"Edit Password"}),c.a.createElement("div",{className:"card-body"},c.a.createElement(g,{onSubmit:function(t){return e.handleChangePassword(t)}}))))))}}]),a}(s.Component);t.default=Object(p.b)((function(e){return{username:e.provinsi.username}}),null)(E)},292:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(16),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},464:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),c=a.n(s),u=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(s.Component);t.default=u},465:function(e,t,a){"use strict";var n=a(11),r=a.n(n),o=a(176),i=a.n(o),s=a(36),c=a.n(s),u=a(0),l=a.n(u),p=a(2),d=a.n(p),m=a(52),f=a.n(m),h=a(26),v=a.n(h),g=a(27),b=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var w=a(173),y=function(e,t){if(Object(w.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,s=n.files,c=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?s||c&&c.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},E="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,_=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=y(e,E);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},S=a(10),O=a(76),F=function(e,t,a){return Object(O.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},k=["_reduxForm"],x=function(e){return e&&"object"===typeof e},D=function(e){return e&&"function"===typeof e},j=function(e){x(e)&&D(e.preventDefault)&&e.preventDefault()},N=function(e,t){if(x(e)&&x(e.dataTransfer)&&D(e.dataTransfer.getData))return e.dataTransfer.getData(t)},C=function(e,t,a){x(e)&&x(e.dataTransfer)&&D(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var P=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=l.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,c=a.onChange,u=a._reduxForm,l=a.value,p=_(t,{name:n,parse:i,normalize:s}),d=!1;if(c)if(!E&&Object(w.a)(t))c(r()({},t,{preventDefault:function(){return d=!0,j(t)}}),p,l,n);else{var m=c(t,p,l,n);E&&(d=m)}d||(o(u.change(n,p)),u.asyncValidate&&u.asyncValidate(n,p,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,s=a._reduxForm,c=!1;i&&(E?c=i(t,n):i(r()({},t,{preventDefault:function(){return c=!0,j(t)}}),n)),c||o(s.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,c=a.onBlur,u=a._reduxForm,l=a._value,p=a.value,d=_(t,{name:n,parse:i,normalize:s});d===l&&void 0!==l&&(d=p);var m=!1;c&&(E?m=c(t,d,p,n):c(r()({},t,{preventDefault:function(){return m=!0,j(t)}}),d,p,n)),m||(o(u.blur(n,d)),u.asyncValidate&&u.asyncValidate(n,d,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;C(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,s=a._reduxForm,c=a.value,u=N(t,"text"),l=!1;i&&i(r()({},t,{preventDefault:function(){return l=!0,j(t)}}),u,c,n),l||(o(s.change(n,u)),j(t))},e}c()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~k.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,s=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,v()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),c=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,s=a.asyncError,c=a.asyncValidating,u=a.onBlur,l=a.onChange,p=a.onDrop,d=a.onDragStart,m=a.dirty,f=a.dispatch,h=a.onFocus,g=a.form,w=a.format,y=a.initial,E=(a.parse,a.pristine),_=a.props,S=a.state,O=a.submitError,F=a.submitFailed,k=a.submitting,x=a.syncError,D=a.syncWarning,j=(a.validate,a.value),N=a._value,C=(a.warn,v()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),P=x||s||O,B=D,R=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(j,w);return{input:b(C.type,{name:t,onBlur:u,onChange:l,onDragStart:d,onDrop:p,onFocus:h,value:R},N,i),meta:r()({},o(S),{active:!(!S||!n(S,"active")),asyncValidating:c,autofilled:!(!S||!n(S,"autofilled")),dirty:m,dispatch:f,error:P,form:g,initial:y,warning:B,invalid:!!P,pristine:E,submitting:!!k,submitFailed:!!F,touched:!(!S||!n(S,"touched")),valid:!P,visited:!(!S||!n(S,"visited"))}),custom:r()({},C,{},_)}}(e,o,r()({},s,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),l=c.custom,p=v()(c,["custom"]);if(n&&(l.ref=this.ref),"string"===typeof a){var d=p.input;p.meta;return Object(u.createElement)(a,r()({},d,{},l))}return Object(u.createElement)(a,r()({},p,{},l))},n}(u.Component);return n.propTypes={component:F,props:d.a.object},Object(g.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,s=(0,o.getFormState)(e),c=a(s,"initial."+r),u=void 0!==c?c:i&&a(i,r),l=a(s,"values."+r),p=a(s,"submitting"),d=function(e,t){var a=S.a.getIn(e,t);return a&&a._error?a._error:a}(a(s,"syncErrors"),r),m=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(s,"syncWarnings"),r),f=t(l,u);return{asyncError:a(s,"asyncErrors."+r),asyncValidating:a(s,"asyncValidating")===r,dirty:!f,pristine:f,state:a(s,"fields."+r),submitError:a(s,"submitErrors."+r),submitFailed:a(s,"submitFailed"),submitting:p,syncError:d,syncWarning:m,initial:u,value:l,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},B=a(177),R=a.n(B),T=function(e,t,a,n,r,o){if(o)return e===t},V=function(e,t,a){var n=R()(e.props,t,T),r=R()(e.state,a,T);return!n||!r},z=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},W=a(107);var A=function(e){var t=P(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=l.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}c()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return V(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=z(this.props,this.props.name),a=z(e,e.name);t===a&&S.a.deepEqual(this.props.validate,e.validate)&&S.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(u.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return z(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(u.Component);return n.propTypes={name:d.a.string.isRequired,component:F,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(W.b)(n)};t.a=A(S.a)},466:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return l}));var n=a(51),r=a.n(n),o=a(5),i=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},s=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},c=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(e){return a(e)}))}))},u=function(e,t,a,n){return new Promise((function(i,c){r.a.fire({title:"Oopps..",text:e.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(e){e.isConfirmed&&Object(o.d)(a+t,n).then((function(){return s("Data Berhasil Dikembalikan")})).then((function(){return i("Berhasil")})).catch((function(e){return c("Gagal")}))}))}))},l=function(e,t,a){var n=(new Date).toLocaleDateString(),r=JSON.parse(localStorage.getItem("LogWebsite"))||[],o={tanggal:n,keterangan:e,data:t,error:a};r.push(o),localStorage.setItem("LogWebsite",JSON.stringify(r))}},469:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n),o=a(179),i=function(e){var t=e.input,a=e.label,n=e.type,o=e.limit,i=e.readOnly,s=e.meta,c=s.touched,u=s.error,l=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",maxLength:o,readOnly:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),c&&(u&&r.a.createElement("p",{className:"invalid-feedback"},u)||l&&r.a.createElement("p",null,l)))},s=function(e){var t=e.input,a=e.label,n=e.options,i=(e.placeholder,e.disabled),s=(e.value,e.meta),c=s.touched,u=s.error,l=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement(o.a,Object.assign({},t,{options:n,search:!0,emptyMessage:"Tidak Ada Data",placeholder:"Silahkan Pilih",disabled:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),c&&(u&&r.a.createElement("p",{className:"invalid-feedback"},u)||l&&r.a.createElement("p",null,l)))}}}]);
//# sourceMappingURL=66.98065648.chunk.js.map