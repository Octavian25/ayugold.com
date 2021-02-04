(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[135],{1252:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),u=a.n(s),l=a(4),c=a(77),m=a(27),p=a(465),d=a(458),f=a(467),h=a(468),v=a.n(h),g=a(45),b=a.n(g),y=a(179),E=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,i=e.meta,s=i.touched,l=i.error,c=i.warning;return u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"",className:"text-black"},a),u.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),s&&(l&&u.a.createElement("p",{className:"invalid-feedback"},l)||c&&u.a.createElement("p",null,c)))},F=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).inputChange=function(e){return function(t){r.setState(Object(c.a)({},e,t.target.value))}},r.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"sales",text:"Sales"},{dataField:"noTransaksi",text:"No Transaksi"},{dataField:"noBon",text:"No Bon"},{dataField:"saldoGr",text:"Saldo (Gr)"},{dataField:"saldoRp",text:"Saldo (Rp)"},{dataField:"titipGr",text:"Titip (Gr)"},{dataField:"titipRp",text:"Titip (Rp)"}],products:[{kode_salesman:"001",nama_salesman:"BANDUNG"},{kode_salesman:"002",nama_salesman:"BOGOR"}],searchText:"",listCustomer:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://147.139.182.75:3759/api/v1/customers").then((function(t){return e.setState({listCustomer:t.data})})).catch((function(e){return console.log(e)}))}},{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNetto),this.props.change("transferNetto",this.props.transferNetto)}},{key:"searchList",value:function(){console.log(this.state.searchText)}},{key:"onSubmitToko",value:function(e){var t=e.split("|");this.props.change("kodeToko",t[0]),this.props.change("kodeCustomer",t[1])}},{key:"render",value:function(){var e=this;return u.a.createElement("form",{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement(p.a,{name:"tanggal",label:"Tanggal",type:"date",component:E})),u.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},u.a.createElement(p.a,{name:"kodeToko",component:E,type:"text",label:"Nama Toko"})),u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement("label",{htmlFor:""},"Nama Toko"),u.a.createElement(y.a,{options:this.state.listCustomer.map((function(e){return{value:e.kodeCustomer+"|"+e.namaCustomer,name:e.namaToko}})),search:!0,placeholder:"Silahkan Pilih",onChange:function(t){return e.onSubmitToko(t)}})),u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement(p.a,{name:"kodeCustomer",component:E,type:"text",label:"Nama Customer",readOnly:!0})),u.a.createElement("div",{className:"col-lg-4 mt-5"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:""},"Cari Nomor Bon"),u.a.createElement("input",{type:"text",id:"searchNoBon",onChange:this.inputChange("searchText"),className:"form-control"}))),u.a.createElement("div",{className:"col-lg-1 mt-5"},u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"",className:"text-white"},"."),u.a.createElement("button",{type:"button",className:"btn btn-primary form-control",onClick:function(){return e.searchList()}},"Cari"))),u.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},u.a.createElement(v.a,{keyField:"noTransaksi",data:this.state.products,columns:this.state.columns,bordered:!0,headerClasses:"header-table"})),u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),a}(s.Component);F=Object(d.a)({form:"FormTransferBalance",enableReinitialize:!0})(F);var x=Object(f.a)("FormTransferBalance"),N=Object(m.b)((function(e){var t=x(e,"harga","cash","transfer"),a=t.harga,n=t.cash,r=t.transfer;return{cashNetto:(parseFloat(n)/parseFloat(a)).toFixed(3),transferNetto:(parseFloat(r)/parseFloat(a)).toFixed(3)}}))(F),k=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"handlSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"col-lg-12 col-d-12"},u.a.createElement("ol",{className:"breadcrumb mb-2"},u.a.createElement(l.b,{to:"/KlasifikasiCustomer"},u.a.createElement("button",{type:"button",className:"btn btn-secondary"},u.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-body"},u.a.createElement(N,{onSubmit:function(t){return e.handlSubmit(t)}})))))}}]),a}(s.Component);t.default=k},465:function(e,t,a){"use strict";var n=a(11),r=a.n(n),o=a(176),i=a.n(o),s=a(36),u=a.n(s),l=a(0),c=a.n(l),m=a(2),p=a.n(m),d=a(52),f=a.n(d),h=a(26),v=a.n(h),g=a(27),b=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var y=a(173),E=function(e,t){if(Object(y.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,s=n.files,u=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?s||u&&u.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},F="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,x=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=E(e,F);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},N=a(10),k=a(76),C=function(e,t,a){return Object(k.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},w=["_reduxForm"],O=function(e){return e&&"object"===typeof e},D=function(e){return e&&"function"===typeof e},T=function(e){O(e)&&D(e.preventDefault)&&e.preventDefault()},_=function(e,t){if(O(e)&&O(e.dataTransfer)&&D(e.dataTransfer.getData))return e.dataTransfer.getData(t)},j=function(e,t,a){O(e)&&O(e.dataTransfer)&&D(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var S=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=c.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,u=a.onChange,l=a._reduxForm,c=a.value,m=x(t,{name:n,parse:i,normalize:s}),p=!1;if(u)if(!F&&Object(y.a)(t))u(r()({},t,{preventDefault:function(){return p=!0,T(t)}}),m,c,n);else{var d=u(t,m,c,n);F&&(p=d)}p||(o(l.change(n,m)),l.asyncValidate&&l.asyncValidate(n,m,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,s=a._reduxForm,u=!1;i&&(F?u=i(t,n):i(r()({},t,{preventDefault:function(){return u=!0,T(t)}}),n)),u||o(s.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,u=a.onBlur,l=a._reduxForm,c=a._value,m=a.value,p=x(t,{name:n,parse:i,normalize:s});p===c&&void 0!==c&&(p=m);var d=!1;u&&(F?d=u(t,p,m,n):u(r()({},t,{preventDefault:function(){return d=!0,T(t)}}),p,m,n)),d||(o(l.blur(n,p)),l.asyncValidate&&l.asyncValidate(n,p,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;j(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,s=a._reduxForm,u=a.value,l=_(t,"text"),c=!1;i&&i(r()({},t,{preventDefault:function(){return c=!0,T(t)}}),l,u,n),c||(o(s.change(n,l)),T(t))},e}u()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~w.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,s=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,v()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),u=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,s=a.asyncError,u=a.asyncValidating,l=a.onBlur,c=a.onChange,m=a.onDrop,p=a.onDragStart,d=a.dirty,f=a.dispatch,h=a.onFocus,g=a.form,y=a.format,E=a.initial,F=(a.parse,a.pristine),x=a.props,N=a.state,k=a.submitError,C=a.submitFailed,w=a.submitting,O=a.syncError,D=a.syncWarning,T=(a.validate,a.value),_=a._value,j=(a.warn,v()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),S=O||s||k,R=D,B=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(T,y);return{input:b(j.type,{name:t,onBlur:l,onChange:c,onDragStart:p,onDrop:m,onFocus:h,value:B},_,i),meta:r()({},o(N),{active:!(!N||!n(N,"active")),asyncValidating:u,autofilled:!(!N||!n(N,"autofilled")),dirty:d,dispatch:f,error:S,form:g,initial:E,warning:R,invalid:!!S,pristine:F,submitting:!!w,submitFailed:!!C,touched:!(!N||!n(N,"touched")),valid:!S,visited:!(!N||!n(N,"visited"))}),custom:r()({},j,{},x)}}(e,o,r()({},s,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),c=u.custom,m=v()(u,["custom"]);if(n&&(c.ref=this.ref),"string"===typeof a){var p=m.input;m.meta;return Object(l.createElement)(a,r()({},p,{},c))}return Object(l.createElement)(a,r()({},m,{},c))},n}(l.Component);return n.propTypes={component:C,props:p.a.object},Object(g.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,s=(0,o.getFormState)(e),u=a(s,"initial."+r),l=void 0!==u?u:i&&a(i,r),c=a(s,"values."+r),m=a(s,"submitting"),p=function(e,t){var a=N.a.getIn(e,t);return a&&a._error?a._error:a}(a(s,"syncErrors"),r),d=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(s,"syncWarnings"),r),f=t(c,l);return{asyncError:a(s,"asyncErrors."+r),asyncValidating:a(s,"asyncValidating")===r,dirty:!f,pristine:f,state:a(s,"fields."+r),submitError:a(s,"submitErrors."+r),submitFailed:a(s,"submitFailed"),submitting:m,syncError:p,syncWarning:d,initial:l,value:c,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},R=a(177),B=a.n(R),V=function(e,t,a,n,r,o){if(o)return e===t},z=function(e,t,a){var n=B()(e.props,t,V),r=B()(e.state,a,V);return!n||!r},P=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},G=a(107);var I=function(e){var t=S(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=c.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}u()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return z(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=P(this.props,this.props.name),a=P(e,e.name);t===a&&N.a.deepEqual(this.props.validate,e.validate)&&N.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(l.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return P(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(l.Component);return n.propTypes={name:p.a.string.isRequired,component:C,format:p.a.func,normalize:p.a.func,onBlur:p.a.func,onChange:p.a.func,onFocus:p.a.func,onDragStart:p.a.func,onDrop:p.a.func,parse:p.a.func,props:p.a.object,validate:p.a.oneOfType([p.a.func,p.a.arrayOf(p.a.func)]),warn:p.a.oneOfType([p.a.func,p.a.arrayOf(p.a.func)]),forwardRef:p.a.bool,immutableProps:p.a.arrayOf(p.a.string),_reduxForm:p.a.object},Object(G.b)(n)};t.a=I(N.a)},467:function(e,t,a){"use strict";var n=a(52),r=a.n(n),o=a(10);t.a=function(e){var t=e.getIn;return function(e,a){r()(e,"Form value must be specified");var n=a||function(e){return t(e,"form")};return function(a){for(var i=arguments.length,s=new Array(i>1?i-1:0),u=1;u<i;u++)s[u-1]=arguments[u];return r()(s.length,"No fields specified"),1===s.length?t(n(a),e+".values."+s[0]):s.reduce((function(r,i){var s=t(n(a),e+".values."+i);return void 0===s?r:o.a.setIn(r,i,s)}),{})}}}(o.a)}}]);
//# sourceMappingURL=135.d53b27f1.chunk.js.map