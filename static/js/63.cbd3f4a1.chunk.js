(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[63],{1089:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(40),o=a(42),i=a(41),l=a(3),u=a.n(l),s=a(0),c=a.n(s),p=a(19),m=a(2),d=a(294),f=a(312),v=a(91),h=a(300),g=a(298),b=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,i=e.meta,l=i.touched,u=i.error,s=i.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},a),c.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",maxLength:r,readOnly:o})),l&&(u&&c.a.createElement("p",{className:"invalid-feedback"},u)||s&&c.a.createElement("p",null,s)))},y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={listSupplier:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;u.a.get("http://157.245.145.87:9011/master/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(){return Object(h.b)("Sepertinya koneksi bermasalah, mohon periksa koneksi anda")}))}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(g.a,{label:"Tanggal",name:"tanggal",component:b,type:"date"})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Supplier"),c.a.createElement(g.a,{label:"Supplier",name:"kodeSupplier",component:"select",className:"form-control"},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return c.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier,key:e.kodeSupplier},e.namaSupplier)})))),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(g.a,{label:"Total Bruto",name:"totalBruto",component:b,type:"text"})),c.a.createElement("div",{className:"TITIP"===this.props.tipe?"col-lg-3 d-none":"col-lg-3"},c.a.createElement(g.a,{label:"Total Hutang (Gr)",name:"totalHutangGr",component:b,type:"text"})),c.a.createElement("div",{className:"TITIP"===this.props.tipe?"col-lg-3 d-none":"col-lg-3"},c.a.createElement(g.a,{label:"Total Hutang (Rp)",name:"totalHutangRp",component:b,type:"text"})),c.a.createElement("div",{className:"HUTANG"===this.props.tipe?"col-lg-3 d-none":"col-lg-3"},c.a.createElement(g.a,{label:"Total Titip (Gr)",name:"totalTitipGr",component:b,type:"text"})),c.a.createElement("div",{className:"HUTANG"===this.props.tipe?"col-lg-3 d-none":"col-lg-3"},c.a.createElement(g.a,{label:"Total Titip (Rp)",name:"totalTitipRp",component:b,type:"text"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),a}(s.Component);y=Object(f.a)({form:"FormSaldoAwalHutang",enableReinitialize:!0})(y);var E=Object(p.b)()(y),S=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={tipeTransksi:"HUTANG"},r}return Object(r.a)(a,[{key:"sendData",value:function(e){var t=this,a=(e.kodeSupplier?e.kodeSupplier:"DEFAULT|DEFAULT").split("|"),n={noFaktur:this.props.noFaktur,tanggal:e.tanggal,noBon:this.props.noFaktur,kodeSupplier:a[0],namaSupplier:a[1],tipeTransaksi:"SALDO-AWAL-HUTANG",footerDocument:{inputBy:this.props.username},footerItem:{totalP:0,totalK:0,totalpkg:0,totalNettoExt:void 0===e.totalHutangGr?e.totalTitipGr:e.totalHutangGr,totalBruto:e.totalBruto||0,totalNetto:void 0===e.totalHutangGr?e.totalTitipGr:e.totalHutangGr,totalGross:0,totalQty:0,totalRp:void 0===e.totalHutangRp?e.totalTitipRp:e.totalHutangRp}};u.a.post("http://157.245.145.87:9013/spp/dc/trm",n).then((function(){return Object(h.a)("Saldo Awal Berhasil Disimpan")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(v.b)())})).catch((function(){return Object(h.b)("Sepertinya koneksi anda bermasalah, Mohon periksa koneksi anda")}))}},{key:"setTipe",value:function(e){this.setState({tipeTransksi:e.target.value}),this.props.dispatch(Object(d.a)("FormSaldoAwalHutang"))}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(v.b)())}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(m.b,{to:"/ayugold.com/saldoawal"},c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("h2",null,"Saldo Awal Hutang")),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("label",{htmlFor:""},"TIPE TRANSAKSI"),c.a.createElement("select",{className:"form-control",onChange:function(t){return e.setTipe(t)}},c.a.createElement("option",{value:"HUTANG",key:"HUTANG"},"HUTANG"),c.a.createElement("option",{value:"TITIP",key:"TITIP"},"TITIP"))),c.a.createElement("div",{className:"col-lg-8"}),c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement(E,{onSubmit:function(t){return e.sendData(t)},tipe:this.state.tipeTransksi})))))))}}]),a}(s.Component);S=Object(f.a)({form:"SaldoAwalHutang",enableReinitialize:!0})(S);t.default=Object(p.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username}}),null)(S)},294:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(342),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},298:function(e,t,a){"use strict";var n=a(33),r=a.n(n),o=a(337),i=a.n(o),l=a(156),u=a.n(l),s=a(0),c=a.n(s),p=a(27),m=a.n(p),d=a(302),f=a.n(d),v=a(60),h=a.n(v),g=a(19),b=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var y=a(299),E=function(e,t){if(Object(y.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,l=n.files,u=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?l||u&&u.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},S="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=E(e,S);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},T=a(12),k=a(44),w=function(e,t,a){return Object(k.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},D=["_reduxForm"],N=function(e){return e&&"object"===typeof e},x=function(e){return e&&"function"===typeof e},O=function(e){N(e)&&x(e.preventDefault)&&e.preventDefault()},j=function(e,t){if(N(e)&&N(e.dataTransfer)&&x(e.dataTransfer.getData))return e.dataTransfer.getData(t)},A=function(e,t,a){N(e)&&N(e.dataTransfer)&&x(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var R=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=c.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,u=a.onChange,s=a._reduxForm,c=a.value,p=F(t,{name:n,parse:i,normalize:l}),m=!1;if(u)if(!S&&Object(y.a)(t))u(r()({},t,{preventDefault:function(){return m=!0,O(t)}}),p,c,n);else{var d=u(t,p,c,n);S&&(m=d)}m||(o(s.change(n,p)),s.asyncValidate&&s.asyncValidate(n,p,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,l=a._reduxForm,u=!1;i&&(S?u=i(t,n):i(r()({},t,{preventDefault:function(){return u=!0,O(t)}}),n)),u||o(l.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,l=a.normalize,u=a.onBlur,s=a._reduxForm,c=a._value,p=a.value,m=F(t,{name:n,parse:i,normalize:l});m===c&&void 0!==c&&(m=p);var d=!1;u&&(S?d=u(t,m,p,n):u(r()({},t,{preventDefault:function(){return d=!0,O(t)}}),m,p,n)),d||(o(s.blur(n,m)),s.asyncValidate&&s.asyncValidate(n,m,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;A(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,l=a._reduxForm,u=a.value,s=j(t,"text"),c=!1;i&&i(r()({},t,{preventDefault:function(){return c=!0,O(t)}}),s,u,n),c||(o(l.change(n,s)),O(t))},e}u()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~D.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,l=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,h()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),u=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,l=a.asyncError,u=a.asyncValidating,s=a.onBlur,c=a.onChange,p=a.onDrop,m=a.onDragStart,d=a.dirty,f=a.dispatch,v=a.onFocus,g=a.form,y=a.format,E=a.initial,S=(a.parse,a.pristine),F=a.props,T=a.state,k=a.submitError,w=a.submitFailed,D=a.submitting,N=a.syncError,x=a.syncWarning,O=(a.validate,a.value),j=a._value,A=(a.warn,h()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),R=N||l||k,_=x,C=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(O,y);return{input:b(A.type,{name:t,onBlur:s,onChange:c,onDragStart:m,onDrop:p,onFocus:v,value:C},j,i),meta:r()({},o(T),{active:!(!T||!n(T,"active")),asyncValidating:u,autofilled:!(!T||!n(T,"autofilled")),dirty:d,dispatch:f,error:R,form:g,initial:E,warning:_,invalid:!!R,pristine:S,submitting:!!D,submitFailed:!!w,touched:!(!T||!n(T,"touched")),valid:!R,visited:!(!T||!n(T,"visited"))}),custom:r()({},A,{},F)}}(e,o,r()({},l,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),c=u.custom,p=h()(u,["custom"]);if(n&&(c.ref=this.ref),"string"===typeof a){var m=p.input;p.meta;return Object(s.createElement)(a,r()({},m,{},c))}return Object(s.createElement)(a,r()({},p,{},c))},n}(s.Component);return n.propTypes={component:w,props:m.a.object},Object(g.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,l=(0,o.getFormState)(e),u=a(l,"initial."+r),s=void 0!==u?u:i&&a(i,r),c=a(l,"values."+r),p=a(l,"submitting"),m=function(e,t){var a=T.a.getIn(e,t);return a&&a._error?a._error:a}(a(l,"syncErrors"),r),d=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(l,"syncWarnings"),r),f=t(c,s);return{asyncError:a(l,"asyncErrors."+r),asyncValidating:a(l,"asyncValidating")===r,dirty:!f,pristine:f,state:a(l,"fields."+r),submitError:a(l,"submitErrors."+r),submitFailed:a(l,"submitFailed"),submitting:p,syncError:m,syncWarning:d,initial:s,value:c,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},_=a(89),C=a.n(_),I=function(e,t,a,n,r,o){if(o)return e===t},H=function(e,t,a){var n=C()(e.props,t,I),r=C()(e.state,a,I);return!n||!r},B=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},G=a(297);var P=function(e){var t=R(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=c.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}u()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return H(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=B(this.props,this.props.name),a=B(e,e.name);t===a&&T.a.deepEqual(this.props.validate,e.validate)&&T.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(s.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return B(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(s.Component);return n.propTypes={name:m.a.string.isRequired,component:w,format:m.a.func,normalize:m.a.func,onBlur:m.a.func,onChange:m.a.func,onFocus:m.a.func,onDragStart:m.a.func,onDrop:m.a.func,parse:m.a.func,props:m.a.object,validate:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),warn:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),forwardRef:m.a.bool,immutableProps:m.a.arrayOf(m.a.string),_reduxForm:m.a.object},Object(G.b)(n)};t.a=P(T.a)},300:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(43),r=a.n(n),o=function(e){r.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1})},i=function(e){r.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1})},l=function(e){r.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1})}}}]);
//# sourceMappingURL=63.cbd3f4a1.chunk.js.map