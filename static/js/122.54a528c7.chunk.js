(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[122],{1095:function(e,t,a){"use strict";a.r(t);var r=a(39),n=a(40),o=a(42),i=a(41),l=a(0),s=a.n(l),c=a(303),u=a.n(c),d=a(305),m=a.n(d),p=a(304),f=a.n(p),h=a(19),v=a(298),g=a(312),b=function(e){var t=e.input,a=e.label,r=e.type,n=e.limit,o=e.readOnly,i=e.meta,l=i.touched,c=i.error,u=i.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},a),s.a.createElement("input",Object.assign({},t,{type:r,className:"form-control",maxLength:n,readOnly:o})),l&&(c&&s.a.createElement("p",{className:"invalid-feedback"},c)||u&&s.a.createElement("p",null,u)))},y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Kode barang"),s.a.createElement(v.a,{name:"kodeBarang",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(v.a,{name:"kadar",label:"Kadar(%)",type:"text",component:b})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(v.a,{name:"bruto",label:"Bruto(Gr)",type:"text",component:b})))))}}]),a}(l.Component);y=Object(g.a)({form:"FormModalTimbangRosok",enableReinitialize:!0})(y);var E=Object(h.b)()(y),F=d.Search.SearchBar,w=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={columns:[{dataField:"kode",text:"Kode",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"harga",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadar",text:"Kadar",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"gross",text:"Gross (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"pkg",text:"Pkg (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"berat",text:"Berat (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"harga",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"netto",text:"Netto (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"ongkos",text:"Ongkos (Rp)",sort:!0,headerStyle:function(){return{width:"25%"}}}],data:[{tanggal:"2020-11-10"}]},n}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Tanggal"),s.a.createElement("input",{type:"date",name:"tanggal",label:"tanggal",className:"form-control"}))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary","data-target":"#tambahModal","data-toggle":"modal"},"Tambah Data"))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(m.a,{keyField:"kodeKelompok",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"text-right mt-5 mb-3"},s.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),s.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:f()()})))})))))),s.a.createElement("div",{id:"tambahModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog modal-lg"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},s.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Timbang Rongsok"),s.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),s.a.createElement("div",{className:"modal-body"},s.a.createElement(E,null)),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),a}(l.Component);t.default=w},298:function(e,t,a){"use strict";var r=a(33),n=a.n(r),o=a(337),i=a.n(o),l=a(156),s=a.n(l),c=a(0),u=a.n(c),d=a(27),m=a.n(d),p=a(302),f=a.n(p),h=a(60),v=a.n(h),g=a(19),b=function(e,t,a,r){var o=t.value;return"checkbox"===e?n()({},t,{checked:!!o}):"radio"===e?n()({},t,{checked:r(o,a),value:a}):"select-multiple"===e?n()({},t,{value:o||[]}):"file"===e?n()({},t,{value:o||void 0}):t};var y=a(299),E=function(e,t){if(Object(y.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,r=a.target,n=r.type,o=r.value,i=r.checked,l=r.files,s=a.dataTransfer;return"checkbox"===n?!!i:"file"===n?l||s&&s.files:"select-multiple"===n?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var r=e[a];r.selected&&t.push(r.value)}return t}(e.target.options):o}return e},F="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,w=function(e,t){var a=t.name,r=t.parse,n=t.normalize,o=E(e,F);return r&&(o=r(o,a)),n&&(o=n(a,o)),o},x=a(12),N=a(44),D=function(e,t,a){return Object(N.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},O=["_reduxForm"],k=function(e){return e&&"object"===typeof e},_=function(e){return e&&"function"===typeof e},j=function(e){k(e)&&_(e.preventDefault)&&e.preventDefault()},S=function(e,t){if(k(e)&&k(e.dataTransfer)&&_(e.dataTransfer.getData))return e.dataTransfer.getData(t)},C=function(e,t,a){k(e)&&k(e.dataTransfer)&&_(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var T=function(e){var t=e.deepEqual,a=e.getIn,r=function(a){function r(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,r=a.name,o=a.dispatch,i=a.parse,l=a.normalize,s=a.onChange,c=a._reduxForm,u=a.value,d=w(t,{name:r,parse:i,normalize:l}),m=!1;if(s)if(!F&&Object(y.a)(t))s(n()({},t,{preventDefault:function(){return m=!0,j(t)}}),d,u,r);else{var p=s(t,d,u,r);F&&(m=p)}m||(o(c.change(r,d)),c.asyncValidate&&c.asyncValidate(r,d,"change"))},e.handleFocus=function(t){var a=e.props,r=a.name,o=a.dispatch,i=a.onFocus,l=a._reduxForm,s=!1;i&&(F?s=i(t,r):i(n()({},t,{preventDefault:function(){return s=!0,j(t)}}),r)),s||o(l.focus(r))},e.handleBlur=function(t){var a=e.props,r=a.name,o=a.dispatch,i=a.parse,l=a.normalize,s=a.onBlur,c=a._reduxForm,u=a._value,d=a.value,m=w(t,{name:r,parse:i,normalize:l});m===u&&void 0!==u&&(m=d);var p=!1;s&&(F?p=s(t,m,d,r):s(n()({},t,{preventDefault:function(){return p=!0,j(t)}}),m,d,r)),p||(o(c.blur(r,m)),c.asyncValidate&&c.asyncValidate(r,m,"blur"))},e.handleDragStart=function(t){var a=e.props,r=a.name,n=a.onDragStart,o=a.value;C(t,"text",null==o?"":o),n&&n(t,r)},e.handleDrop=function(t){var a=e.props,r=a.name,o=a.dispatch,i=a.onDrop,l=a._reduxForm,s=a.value,c=S(t,"text"),u=!1;i&&i(n()({},t,{preventDefault:function(){return u=!0,j(t)}}),c,s,r),u||(o(l.change(r,c)),j(t))},e}s()(r,a);var o=r.prototype;return o.shouldComponentUpdate=function(e){var a=this,r=Object.keys(e),n=Object.keys(this.props);return!!(this.props.children||e.children||r.length!==n.length||r.some((function(r){return~(e.immutableProps||[]).indexOf(r)?a.props[r]!==e[r]:!~O.indexOf(r)&&!t(a.props[r],e[r])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,r=t.forwardRef,o=t.name,i=t._reduxForm,l=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,v()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),s=function(e,t,a){var r=e.getIn,o=e.toJS,i=e.deepEqual,l=a.asyncError,s=a.asyncValidating,c=a.onBlur,u=a.onChange,d=a.onDrop,m=a.onDragStart,p=a.dirty,f=a.dispatch,h=a.onFocus,g=a.form,y=a.format,E=a.initial,F=(a.parse,a.pristine),w=a.props,x=a.state,N=a.submitError,D=a.submitFailed,O=a.submitting,k=a.syncError,_=a.syncWarning,j=(a.validate,a.value),S=a._value,C=(a.warn,v()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),T=k||l||N,R=_,B=function(e,a){if(null===a)return e;var r=null==e?"":e;return a?a(e,t):r}(j,y);return{input:b(C.type,{name:t,onBlur:c,onChange:u,onDragStart:m,onDrop:d,onFocus:h,value:B},S,i),meta:n()({},o(x),{active:!(!x||!r(x,"active")),asyncValidating:s,autofilled:!(!x||!r(x,"autofilled")),dirty:p,dispatch:f,error:T,form:g,initial:E,warning:R,invalid:!!T,pristine:F,submitting:!!O,submitFailed:!!D,touched:!(!x||!r(x,"touched")),valid:!T,visited:!(!x||!r(x,"visited"))}),custom:n()({},C,{},w)}}(e,o,n()({},l,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=s.custom,d=v()(s,["custom"]);if(r&&(u.ref=this.ref),"string"===typeof a){var m=d.input;d.meta;return Object(c.createElement)(a,n()({},m,{},u))}return Object(c.createElement)(a,n()({},d,{},u))},r}(c.Component);return r.propTypes={component:D,props:m.a.object},Object(g.b)((function(e,r){var n=r.name,o=r._reduxForm,i=o.initialValues,l=(0,o.getFormState)(e),s=a(l,"initial."+n),c=void 0!==s?s:i&&a(i,n),u=a(l,"values."+n),d=a(l,"submitting"),m=function(e,t){var a=x.a.getIn(e,t);return a&&a._error?a._error:a}(a(l,"syncErrors"),n),p=function(e,t){var r=a(e,t);return r&&r._warning?r._warning:r}(a(l,"syncWarnings"),n),f=t(u,c);return{asyncError:a(l,"asyncErrors."+n),asyncValidating:a(l,"asyncValidating")===n,dirty:!f,pristine:f,state:a(l,"fields."+n),submitError:a(l,"submitErrors."+n),submitFailed:a(l,"submitFailed"),submitting:d,syncError:m,syncWarning:p,initial:c,value:u,_value:r.value}}),void 0,void 0,{forwardRef:!0})(r)},R=a(89),B=a.n(R),V=function(e,t,a,r,n,o){if(o)return e===t},z=function(e,t,a){var r=B()(e.props,t,V),n=B()(e.state,a,V);return!r||!n},P=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},I=a(297);var U=function(e){var t=T(e),a=e.setIn,r=function(e){function r(t){var r;if((r=e.call(this,t)||this).ref=u.a.createRef(),r.normalize=function(e,t){var n=r.props.normalize;if(!n)return t;var o=r.props._reduxForm.getValues();return n(t,r.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return r}s()(r,e);var o=r.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return z(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=P(this.props,this.props.name),a=P(e,e.name);t===a&&x.a.deepEqual(this.props.validate,e.validate)&&x.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(t,n()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(r,[{key:"name",get:function(){return P(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),r}(c.Component);return r.propTypes={name:m.a.string.isRequired,component:D,format:m.a.func,normalize:m.a.func,onBlur:m.a.func,onChange:m.a.func,onFocus:m.a.func,onDragStart:m.a.func,onDrop:m.a.func,parse:m.a.func,props:m.a.object,validate:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),warn:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),forwardRef:m.a.bool,immutableProps:m.a.arrayOf(m.a.string),_reduxForm:m.a.object},Object(I.b)(r)};t.a=U(x.a)}}]);
//# sourceMappingURL=122.54a528c7.chunk.js.map