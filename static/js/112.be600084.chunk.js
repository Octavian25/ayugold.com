(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[112],{1100:function(e,a,t){"use strict";t.r(a);var n=t(39),r=t(40),l=t(42),o=t(41),c=t(0),s=t.n(c),m=t(19),i=t(298),u=t(312),d=function(e){var a=e.input,t=e.label,n=e.type,r=e.meta,l=r.touched,o=r.error,c=r.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:n,className:"form-control"})),l&&(o&&s.a.createElement("p",{className:"invalid-feedback"},o)||c&&s.a.createElement("p",null,c)))},p=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){switch(this.props.from){case"transaksi":return s.a.createElement("form",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"."),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",{className:"mr-3"},s.a.createElement(i.a,{name:"jenisPenjualan",component:"input",type:"radio",value:"penjualan",className:"mr-2"}),"Penjualan"),s.a.createElement("label",null,s.a.createElement(i.a,{name:"jenisPenjualan",component:"input",type:"radio",value:"discount",className:"mr-2"}),"Discount Penjualan")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-g"},s.a.createElement("label",{htmlFor:""},"Salesman"),s.a.createElement(i.a,{name:"salesman",component:"select",className:"form-control"},s.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"startDate",label:"Tanggal Awal",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"endDate",label:"Sampai Dengan",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-12 mt-2"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print")))));case"close":return s.a.createElement("form",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-g"},s.a.createElement("label",{htmlFor:""},"Salesman"),s.a.createElement(i.a,{name:"salesman",component:"select",className:"form-control"},s.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"startDate",label:"Tanggal Awal",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"endDate",label:"Sampai Dengan",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-12 mt-2"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print")))));case"perFaktur":return s.a.createElement("form",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-g"},s.a.createElement("label",{htmlFor:""},"Salesman"),s.a.createElement(i.a,{name:"salesman",component:"select",className:"form-control"},s.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA")))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Sortir Berdasarkan"),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",{className:"mr-3"},s.a.createElement(i.a,{name:"sortBy",component:"input",type:"radio",value:"tanggal",className:"mr-2"}),"Tanggal"),s.a.createElement("label",null,s.a.createElement(i.a,{name:"sortBy",component:"input",type:"radio",value:"discopelangganunt",className:"mr-2"}),"Pelanggan")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"startDate",label:"Tanggal Awal",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"endDate",label:"Sampai Dengan",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-12 mt-2"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print")))));case"perCustomer":return s.a.createElement("form",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-g"},s.a.createElement("label",{htmlFor:""},"Salesman"),s.a.createElement(i.a,{name:"salesman",component:"select",className:"form-control"},s.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA")))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-g"},s.a.createElement("label",{htmlFor:""},"Area"),s.a.createElement(i.a,{name:"area",component:"select",className:"form-control"},s.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"startDate",label:"Tanggal Awal",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"endDate",label:"Sampai Dengan",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-12 mt-2"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print")))));case"perBarang":return s.a.createElement("form",null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-g"},s.a.createElement("label",{htmlFor:""},"Salesman"),s.a.createElement(i.a,{name:"salesman",component:"select",className:"form-control"},s.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA")))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"form-g"},s.a.createElement("label",{htmlFor:""},"Kadar"),s.a.createElement(i.a,{name:"kadar",component:"select",className:"form-control"},s.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"startDate",label:"Tanggal Awal",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(i.a,{name:"endDate",label:"Sampai Dengan",className:"form-control",component:d,type:"date"})),s.a.createElement("div",{className:"col-lg-12 mt-2"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print")))))}}}]),t}(c.Component);p=Object(u.a)({form:"FormSalesman",enableReinitialize:!0})(p);var f=Object(m.b)()(p),v=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("ul",{className:"nav nav-tabs nav-justified nav-bordered mb-3"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#transaksi-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link active"},s.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Transaksi Penjualan"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#close-tab","data-toggle":"tab","aria-expanded":"true",className:"nav-link "},s.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Close Penjualan"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#perFaktur-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Omzet Per Faktur"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#perCustomer-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Omzet Per Customer"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#perBarang-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Omzet Per Barang")))),s.a.createElement("div",{className:"tab-content"},s.a.createElement("div",{className:"tab-pane show active",id:"transaksi-tab"},s.a.createElement(f,{from:"transaksi"})),s.a.createElement("div",{className:"tab-pane",id:"close-tab"},s.a.createElement(f,{from:"close"})),s.a.createElement("div",{className:"tab-pane",id:"perFaktur-tab"},s.a.createElement(f,{from:"perFaktur"})),s.a.createElement("div",{className:"tab-pane",id:"perCustomer-tab"},s.a.createElement(f,{from:"perCustomer"})),s.a.createElement("div",{className:"tab-pane",id:"perBarang-tab"},s.a.createElement(f,{from:"perBarang"}))))))))}}]),t}(c.Component);a.default=v},298:function(e,a,t){"use strict";var n=t(33),r=t.n(n),l=t(337),o=t.n(l),c=t(156),s=t.n(c),m=t(0),i=t.n(m),u=t(27),d=t.n(u),p=t(302),f=t.n(p),v=t(60),E=t.n(v),g=t(19),b=function(e,a,t,n){var l=a.value;return"checkbox"===e?r()({},a,{checked:!!l}):"radio"===e?r()({},a,{checked:n(l,t),value:t}):"select-multiple"===e?r()({},a,{value:l||[]}):"file"===e?r()({},a,{value:l||void 0}):a};var h=t(299),N=function(e,a){if(Object(h.a)(e)){if(!a&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(a&&void 0!==e.nativeEvent)return e.nativeEvent.text;var t=e,n=t.target,r=n.type,l=n.value,o=n.checked,c=n.files,s=t.dataTransfer;return"checkbox"===r?!!o:"file"===r?c||s&&s.files:"select-multiple"===r?function(e){var a=[];if(e)for(var t=0;t<e.length;t++){var n=e[t];n.selected&&a.push(n.value)}return a}(e.target.options):l}return e},y="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,a){var t=a.name,n=a.parse,r=a.normalize,l=N(e,y);return n&&(l=n(l,t)),r&&(l=r(t,l)),l},k=t(13),D=t(44),S=function(e,a,t){return Object(D.isValidElementType)(e[a])?null:new Error("Invalid prop `"+a+"` supplied to `"+t+"`.")},w=["_reduxForm"],x=function(e){return e&&"object"===typeof e},j=function(e){return e&&"function"===typeof e},O=function(e){x(e)&&j(e.preventDefault)&&e.preventDefault()},A=function(e,a){if(x(e)&&x(e.dataTransfer)&&j(e.dataTransfer.getData))return e.dataTransfer.getData(a)},C=function(e,a,t){x(e)&&x(e.dataTransfer)&&j(e.dataTransfer.setData)&&e.dataTransfer.setData(a,t)};var U=function(e){var a=e.deepEqual,t=e.getIn,n=function(t){function n(){for(var e,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))||this).ref=i.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(a){var t=e.props,n=t.name,l=t.dispatch,o=t.parse,c=t.normalize,s=t.onChange,m=t._reduxForm,i=t.value,u=F(a,{name:n,parse:o,normalize:c}),d=!1;if(s)if(!y&&Object(h.a)(a))s(r()({},a,{preventDefault:function(){return d=!0,O(a)}}),u,i,n);else{var p=s(a,u,i,n);y&&(d=p)}d||(l(m.change(n,u)),m.asyncValidate&&m.asyncValidate(n,u,"change"))},e.handleFocus=function(a){var t=e.props,n=t.name,l=t.dispatch,o=t.onFocus,c=t._reduxForm,s=!1;o&&(y?s=o(a,n):o(r()({},a,{preventDefault:function(){return s=!0,O(a)}}),n)),s||l(c.focus(n))},e.handleBlur=function(a){var t=e.props,n=t.name,l=t.dispatch,o=t.parse,c=t.normalize,s=t.onBlur,m=t._reduxForm,i=t._value,u=t.value,d=F(a,{name:n,parse:o,normalize:c});d===i&&void 0!==i&&(d=u);var p=!1;s&&(y?p=s(a,d,u,n):s(r()({},a,{preventDefault:function(){return p=!0,O(a)}}),d,u,n)),p||(l(m.blur(n,d)),m.asyncValidate&&m.asyncValidate(n,d,"blur"))},e.handleDragStart=function(a){var t=e.props,n=t.name,r=t.onDragStart,l=t.value;C(a,"text",null==l?"":l),r&&r(a,n)},e.handleDrop=function(a){var t=e.props,n=t.name,l=t.dispatch,o=t.onDrop,c=t._reduxForm,s=t.value,m=A(a,"text"),i=!1;o&&o(r()({},a,{preventDefault:function(){return i=!0,O(a)}}),m,s,n),i||(l(c.change(n,m)),O(a))},e}s()(n,t);var l=n.prototype;return l.shouldComponentUpdate=function(e){var t=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?t.props[n]!==e[n]:!~w.indexOf(n)&&!a(t.props[n],e[n])})))},l.getRenderedComponent=function(){return this.ref.current},l.render=function(){var a=this.props,t=a.component,n=a.forwardRef,l=a.name,o=a._reduxForm,c=(a.normalize,a.onBlur,a.onChange,a.onFocus,a.onDragStart,a.onDrop,a.immutableProps,E()(a,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),s=function(e,a,t){var n=e.getIn,l=e.toJS,o=e.deepEqual,c=t.asyncError,s=t.asyncValidating,m=t.onBlur,i=t.onChange,u=t.onDrop,d=t.onDragStart,p=t.dirty,f=t.dispatch,v=t.onFocus,g=t.form,h=t.format,N=t.initial,y=(t.parse,t.pristine),F=t.props,k=t.state,D=t.submitError,S=t.submitFailed,w=t.submitting,x=t.syncError,j=t.syncWarning,O=(t.validate,t.value),A=t._value,C=(t.warn,E()(t,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),U=x||c||D,_=j,P=function(e,t){if(null===t)return e;var n=null==e?"":e;return t?t(e,a):n}(O,h);return{input:b(C.type,{name:a,onBlur:m,onChange:i,onDragStart:d,onDrop:u,onFocus:v,value:P},A,o),meta:r()({},l(k),{active:!(!k||!n(k,"active")),asyncValidating:s,autofilled:!(!k||!n(k,"autofilled")),dirty:p,dispatch:f,error:U,form:g,initial:N,warning:_,invalid:!!U,pristine:y,submitting:!!w,submitFailed:!!S,touched:!(!k||!n(k,"touched")),valid:!U,visited:!(!k||!n(k,"visited"))}),custom:r()({},C,{},F)}}(e,l,r()({},c,{form:o.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),i=s.custom,u=E()(s,["custom"]);if(n&&(i.ref=this.ref),"string"===typeof t){var d=u.input;u.meta;return Object(m.createElement)(t,r()({},d,{},i))}return Object(m.createElement)(t,r()({},u,{},i))},n}(m.Component);return n.propTypes={component:S,props:d.a.object},Object(g.b)((function(e,n){var r=n.name,l=n._reduxForm,o=l.initialValues,c=(0,l.getFormState)(e),s=t(c,"initial."+r),m=void 0!==s?s:o&&t(o,r),i=t(c,"values."+r),u=t(c,"submitting"),d=function(e,a){var t=k.a.getIn(e,a);return t&&t._error?t._error:t}(t(c,"syncErrors"),r),p=function(e,a){var n=t(e,a);return n&&n._warning?n._warning:n}(t(c,"syncWarnings"),r),f=a(i,m);return{asyncError:t(c,"asyncErrors."+r),asyncValidating:t(c,"asyncValidating")===r,dirty:!f,pristine:f,state:t(c,"fields."+r),submitError:t(c,"submitErrors."+r),submitFailed:t(c,"submitFailed"),submitting:u,syncError:d,syncWarning:p,initial:m,value:i,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},_=t(89),P=t.n(_),M=function(e,a,t,n,r,l){if(l)return e===a},T=function(e,a,t){var n=P()(e.props,a,M),r=P()(e.state,t,M);return!n||!r},B=function(e,a){var t=e._reduxForm.sectionPrefix;return t?t+"."+a:a},z=t(297);var R=function(e){var a=U(e),t=e.setIn,n=function(e){function n(a){var n;if((n=e.call(this,a)||this).ref=i.a.createRef(),n.normalize=function(e,a){var r=n.props.normalize;if(!r)return a;var l=n.props._reduxForm.getValues();return r(a,n.value,t(l,e,a),l,e)},!a._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}s()(n,e);var l=n.prototype;return l.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},l.shouldComponentUpdate=function(e,a){return T(this,e,a)},l.UNSAFE_componentWillReceiveProps=function(e){var a=B(this.props,this.props.name),t=B(e,e.name);a===t&&k.a.deepEqual(this.props.validate,e.validate)&&k.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(a),this.props._reduxForm.register(t,"Field",(function(){return e.validate}),(function(){return e.warn})))},l.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},l.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},l.render=function(){return Object(m.createElement)(a,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},o()(n,[{key:"name",get:function(){return B(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(m.Component);return n.propTypes={name:d.a.string.isRequired,component:S,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(z.b)(n)};a.a=R(k.a)}}]);
//# sourceMappingURL=112.be600084.chunk.js.map