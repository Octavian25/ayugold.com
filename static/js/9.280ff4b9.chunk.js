(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[9],{294:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(342),a=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},298:function(e,t,r){"use strict";var n=r(33),a=r.n(n),o=r(337),i=r.n(o),u=r(156),s=r.n(u),c=r(0),l=r.n(c),p=r(27),f=r.n(p),m=r(302),d=r.n(m),v=r(60),h=r.n(v),g=r(19),y=function(e,t,r,n){var o=t.value;return"checkbox"===e?a()({},t,{checked:!!o}):"radio"===e?a()({},t,{checked:n(o,r),value:r}):"select-multiple"===e?a()({},t,{value:o||[]}):"file"===e?a()({},t,{value:o||void 0}):t};var b=r(299),F=function(e,t){if(Object(b.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var r=e,n=r.target,a=n.type,o=n.value,i=n.checked,u=n.files,s=r.dataTransfer;return"checkbox"===a?!!i:"file"===a?u||s&&s.files:"select-multiple"===a?function(e){var t=[];if(e)for(var r=0;r<e.length;r++){var n=e[r];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},E="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,w=function(e,t){var r=t.name,n=t.parse,a=t.normalize,o=F(e,E);return n&&(o=n(o,r)),a&&(o=a(r,o)),o},x=r(13),S=r(44),D=function(e,t,r){return Object(S.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+r+"`.")},O=["_reduxForm"],j=function(e){return e&&"object"===typeof e},k=function(e){return e&&"function"===typeof e},_=function(e){j(e)&&k(e.preventDefault)&&e.preventDefault()},C=function(e,t){if(j(e)&&j(e.dataTransfer)&&k(e.dataTransfer.getData))return e.dataTransfer.getData(t)},N=function(e,t,r){j(e)&&j(e.dataTransfer)&&k(e.dataTransfer.setData)&&e.dataTransfer.setData(t,r)};var R=function(e){var t=e.deepEqual,r=e.getIn,n=function(r){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))||this).ref=l.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var r=e.props,n=r.name,o=r.dispatch,i=r.parse,u=r.normalize,s=r.onChange,c=r._reduxForm,l=r.value,p=w(t,{name:n,parse:i,normalize:u}),f=!1;if(s)if(!E&&Object(b.a)(t))s(a()({},t,{preventDefault:function(){return f=!0,_(t)}}),p,l,n);else{var m=s(t,p,l,n);E&&(f=m)}f||(o(c.change(n,p)),c.asyncValidate&&c.asyncValidate(n,p,"change"))},e.handleFocus=function(t){var r=e.props,n=r.name,o=r.dispatch,i=r.onFocus,u=r._reduxForm,s=!1;i&&(E?s=i(t,n):i(a()({},t,{preventDefault:function(){return s=!0,_(t)}}),n)),s||o(u.focus(n))},e.handleBlur=function(t){var r=e.props,n=r.name,o=r.dispatch,i=r.parse,u=r.normalize,s=r.onBlur,c=r._reduxForm,l=r._value,p=r.value,f=w(t,{name:n,parse:i,normalize:u});f===l&&void 0!==l&&(f=p);var m=!1;s&&(E?m=s(t,f,p,n):s(a()({},t,{preventDefault:function(){return m=!0,_(t)}}),f,p,n)),m||(o(c.blur(n,f)),c.asyncValidate&&c.asyncValidate(n,f,"blur"))},e.handleDragStart=function(t){var r=e.props,n=r.name,a=r.onDragStart,o=r.value;N(t,"text",null==o?"":o),a&&a(t,n)},e.handleDrop=function(t){var r=e.props,n=r.name,o=r.dispatch,i=r.onDrop,u=r._reduxForm,s=r.value,c=C(t,"text"),l=!1;i&&i(a()({},t,{preventDefault:function(){return l=!0,_(t)}}),c,s,n),l||(o(u.change(n,c)),_(t))},e}s()(n,r);var o=n.prototype;return o.shouldComponentUpdate=function(e){var r=this,n=Object.keys(e),a=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==a.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?r.props[n]!==e[n]:!~O.indexOf(n)&&!t(r.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,r=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,u=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,h()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),s=function(e,t,r){var n=e.getIn,o=e.toJS,i=e.deepEqual,u=r.asyncError,s=r.asyncValidating,c=r.onBlur,l=r.onChange,p=r.onDrop,f=r.onDragStart,m=r.dirty,d=r.dispatch,v=r.onFocus,g=r.form,b=r.format,F=r.initial,E=(r.parse,r.pristine),w=r.props,x=r.state,S=r.submitError,D=r.submitFailed,O=r.submitting,j=r.syncError,k=r.syncWarning,_=(r.validate,r.value),C=r._value,N=(r.warn,h()(r,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),R=j||u||S,V=k,B=function(e,r){if(null===r)return e;var n=null==e?"":e;return r?r(e,t):n}(_,b);return{input:y(N.type,{name:t,onBlur:c,onChange:l,onDragStart:f,onDrop:p,onFocus:v,value:B},C,i),meta:a()({},o(x),{active:!(!x||!n(x,"active")),asyncValidating:s,autofilled:!(!x||!n(x,"autofilled")),dirty:m,dispatch:d,error:R,form:g,initial:F,warning:V,invalid:!!R,pristine:E,submitting:!!O,submitFailed:!!D,touched:!(!x||!n(x,"touched")),valid:!R,visited:!(!x||!n(x,"visited"))}),custom:a()({},N,{},w)}}(e,o,a()({},u,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),l=s.custom,p=h()(s,["custom"]);if(n&&(l.ref=this.ref),"string"===typeof r){var f=p.input;p.meta;return Object(c.createElement)(r,a()({},f,{},l))}return Object(c.createElement)(r,a()({},p,{},l))},n}(c.Component);return n.propTypes={component:D,props:f.a.object},Object(g.b)((function(e,n){var a=n.name,o=n._reduxForm,i=o.initialValues,u=(0,o.getFormState)(e),s=r(u,"initial."+a),c=void 0!==s?s:i&&r(i,a),l=r(u,"values."+a),p=r(u,"submitting"),f=function(e,t){var r=x.a.getIn(e,t);return r&&r._error?r._error:r}(r(u,"syncErrors"),a),m=function(e,t){var n=r(e,t);return n&&n._warning?n._warning:n}(r(u,"syncWarnings"),a),d=t(l,c);return{asyncError:r(u,"asyncErrors."+a),asyncValidating:r(u,"asyncValidating")===a,dirty:!d,pristine:d,state:r(u,"fields."+a),submitError:r(u,"submitErrors."+a),submitFailed:r(u,"submitFailed"),submitting:p,syncError:f,syncWarning:m,initial:c,value:l,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},V=r(89),B=r.n(V),z=function(e,t,r,n,a,o){if(o)return e===t},T=function(e,t,r){var n=B()(e.props,t,z),a=B()(e.state,r,z);return!n||!a},I=function(e,t){var r=e._reduxForm.sectionPrefix;return r?r+"."+t:t},P=r(297);var A=function(e){var t=R(e),r=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=l.a.createRef(),n.normalize=function(e,t){var a=n.props.normalize;if(!a)return t;var o=n.props._reduxForm.getValues();return a(t,n.value,r(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}s()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return T(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=I(this.props,this.props.name),r=I(e,e.name);t===r&&x.a.deepEqual(this.props.validate,e.validate)&&x.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(r,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return d()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(t,a()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return I(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(c.Component);return n.propTypes={name:f.a.string.isRequired,component:D,format:f.a.func,normalize:f.a.func,onBlur:f.a.func,onChange:f.a.func,onFocus:f.a.func,onDragStart:f.a.func,onDrop:f.a.func,parse:f.a.func,props:f.a.object,validate:f.a.oneOfType([f.a.func,f.a.arrayOf(f.a.func)]),warn:f.a.oneOfType([f.a.func,f.a.arrayOf(f.a.func)]),forwardRef:f.a.bool,immutableProps:f.a.arrayOf(f.a.string),_reduxForm:f.a.object},Object(P.b)(n)};t.a=A(x.a)},300:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return u}));var n=r(43),a=r.n(n),o=function(e){a.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1})},i=function(e){a.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1})},u=function(e){a.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1})}},301:function(e,t,r){"use strict";var n=r(302),a=r.n(n),o=r(13);t.a=function(e){var t=e.getIn;return function(e,r){a()(e,"Form value must be specified");var n=r||function(e){return t(e,"form")};return function(r){for(var i=arguments.length,u=new Array(i>1?i-1:0),s=1;s<i;s++)u[s-1]=arguments[s];return a()(u.length,"No fields specified"),1===u.length?t(n(r),e+".values."+u[0]):u.reduce((function(a,i){var u=t(n(r),e+".values."+i);return void 0===u?a:o.a.setIn(a,i,u)}),{})}}}(o.a)},537:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(43),r(300);var n=function(e,t){return(JSON.parse(localStorage.getItem(e))||[]).findIndex((function(e,r){return e.noFaktur===t}))}},538:function(e,t,r){"use strict";var n=r(39),a=r(40),o=r(42),i=r(41),u=r(0),s=r.n(u),c=r(19),l=r(298),p=r(312),f=r(301),m=function(e){var t=e.input,r=e.label,n=e.type,a=e.limit,o=e.readOnly,i=e.meta,u=i.touched,c=i.error,l=i.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},r),s.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",maxLength:a,readOnly:o})),u&&(c&&s.a.createElement("p",{className:"invalid-feedback"},c)||l&&s.a.createElement("p",null,l)))},d=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={},a}return Object(a.a)(r,[{key:"componentDidMount",value:function(){this.setData()}},{key:"setData",value:function(){this.props.change("bruto",this.props.bruto),this.props.change("noFaktur",this.props.noFaktur)}},{key:"setSisa",value:function(e){this.props.change("sisa",this.props.sisaHutang)}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(l.a,{name:"bruto",label:"Bruto (Gr)",type:"text",component:m,value:"100",readOnly:!0,onBlur:this.setData()})),s.a.createElement("div",{className:"col-lg-4 d-none"},s.a.createElement(l.a,{name:"noFaktur",label:"Netto (Gr)",type:"text",component:m,value:"100",readOnly:!0})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(l.a,{name:"jumlah",label:"Jumlah Bayar (Gr)",type:"text",component:m,onChange:this.setSisa()})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(l.a,{name:"sisa",label:"Sisa Hutang (Gr)",type:"text",component:m})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))}}]),r}(u.Component);d=Object(p.a)({form:"FormModalValidasiStok",enableReinitialize:!0})(d);var v=Object(f.a)("FormModalValidasiStok");t.a=Object(c.b)((function(e){var t=v(e,"jumlah","bruto"),r=t.jumlah,n=t.bruto;return{sisaHutang:(parseFloat(n||0)-parseFloat(r||0)).toFixed(3)}}))(d)}}]);
//# sourceMappingURL=9.280ff4b9.chunk.js.map