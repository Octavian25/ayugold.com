(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[101,13,136],{298:function(e,t,n){"use strict";var r=n(33),a=n.n(r),o=n(337),i=n.n(o),u=n(156),s=n.n(u),c=n(0),l=n.n(c),p=n(27),d=n.n(p),m=n(302),f=n.n(m),v=n(60),h=n.n(v),g=n(19),b=function(e,t,n,r){var o=t.value;return"checkbox"===e?a()({},t,{checked:!!o}):"radio"===e?a()({},t,{checked:r(o,n),value:n}):"select-multiple"===e?a()({},t,{value:o||[]}):"file"===e?a()({},t,{value:o||void 0}):t};var y=n(299),E=function(e,t){if(Object(y.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var n=e,r=n.target,a=r.type,o=r.value,i=r.checked,u=r.files,s=n.dataTransfer;return"checkbox"===a?!!i:"file"===a?u||s&&s.files:"select-multiple"===a?function(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r=e[n];r.selected&&t.push(r.value)}return t}(e.target.options):o}return e},k="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,t){var n=t.name,r=t.parse,a=t.normalize,o=E(e,k);return r&&(o=r(o,n)),a&&(o=a(n,o)),o},D=n(12),w=n(44),x=function(e,t,n){return Object(w.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+n+"`.")},O=["_reduxForm"],B=function(e){return e&&"object"===typeof e},C=function(e){return e&&"function"===typeof e},T=function(e){B(e)&&C(e.preventDefault)&&e.preventDefault()},_=function(e,t){if(B(e)&&B(e.dataTransfer)&&C(e.dataTransfer.getData))return e.dataTransfer.getData(t)},j=function(e,t,n){B(e)&&B(e.dataTransfer)&&C(e.dataTransfer.setData)&&e.dataTransfer.setData(t,n)};var N=function(e){var t=e.deepEqual,n=e.getIn,r=function(n){function r(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).ref=l.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var n=e.props,r=n.name,o=n.dispatch,i=n.parse,u=n.normalize,s=n.onChange,c=n._reduxForm,l=n.value,p=F(t,{name:r,parse:i,normalize:u}),d=!1;if(s)if(!k&&Object(y.a)(t))s(a()({},t,{preventDefault:function(){return d=!0,T(t)}}),p,l,r);else{var m=s(t,p,l,r);k&&(d=m)}d||(o(c.change(r,p)),c.asyncValidate&&c.asyncValidate(r,p,"change"))},e.handleFocus=function(t){var n=e.props,r=n.name,o=n.dispatch,i=n.onFocus,u=n._reduxForm,s=!1;i&&(k?s=i(t,r):i(a()({},t,{preventDefault:function(){return s=!0,T(t)}}),r)),s||o(u.focus(r))},e.handleBlur=function(t){var n=e.props,r=n.name,o=n.dispatch,i=n.parse,u=n.normalize,s=n.onBlur,c=n._reduxForm,l=n._value,p=n.value,d=F(t,{name:r,parse:i,normalize:u});d===l&&void 0!==l&&(d=p);var m=!1;s&&(k?m=s(t,d,p,r):s(a()({},t,{preventDefault:function(){return m=!0,T(t)}}),d,p,r)),m||(o(c.blur(r,d)),c.asyncValidate&&c.asyncValidate(r,d,"blur"))},e.handleDragStart=function(t){var n=e.props,r=n.name,a=n.onDragStart,o=n.value;j(t,"text",null==o?"":o),a&&a(t,r)},e.handleDrop=function(t){var n=e.props,r=n.name,o=n.dispatch,i=n.onDrop,u=n._reduxForm,s=n.value,c=_(t,"text"),l=!1;i&&i(a()({},t,{preventDefault:function(){return l=!0,T(t)}}),c,s,r),l||(o(u.change(r,c)),T(t))},e}s()(r,n);var o=r.prototype;return o.shouldComponentUpdate=function(e){var n=this,r=Object.keys(e),a=Object.keys(this.props);return!!(this.props.children||e.children||r.length!==a.length||r.some((function(r){return~(e.immutableProps||[]).indexOf(r)?n.props[r]!==e[r]:!~O.indexOf(r)&&!t(n.props[r],e[r])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,n=t.component,r=t.forwardRef,o=t.name,i=t._reduxForm,u=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,h()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),s=function(e,t,n){var r=e.getIn,o=e.toJS,i=e.deepEqual,u=n.asyncError,s=n.asyncValidating,c=n.onBlur,l=n.onChange,p=n.onDrop,d=n.onDragStart,m=n.dirty,f=n.dispatch,v=n.onFocus,g=n.form,y=n.format,E=n.initial,k=(n.parse,n.pristine),F=n.props,D=n.state,w=n.submitError,x=n.submitFailed,O=n.submitting,B=n.syncError,C=n.syncWarning,T=(n.validate,n.value),_=n._value,j=(n.warn,h()(n,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),N=B||u||w,R=C,S=function(e,n){if(null===n)return e;var r=null==e?"":e;return n?n(e,t):r}(T,y);return{input:b(j.type,{name:t,onBlur:c,onChange:l,onDragStart:d,onDrop:p,onFocus:v,value:S},_,i),meta:a()({},o(D),{active:!(!D||!r(D,"active")),asyncValidating:s,autofilled:!(!D||!r(D,"autofilled")),dirty:m,dispatch:f,error:N,form:g,initial:E,warning:R,invalid:!!N,pristine:k,submitting:!!O,submitFailed:!!x,touched:!(!D||!r(D,"touched")),valid:!N,visited:!(!D||!r(D,"visited"))}),custom:a()({},j,{},F)}}(e,o,a()({},u,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),l=s.custom,p=h()(s,["custom"]);if(r&&(l.ref=this.ref),"string"===typeof n){var d=p.input;p.meta;return Object(c.createElement)(n,a()({},d,{},l))}return Object(c.createElement)(n,a()({},p,{},l))},r}(c.Component);return r.propTypes={component:x,props:d.a.object},Object(g.b)((function(e,r){var a=r.name,o=r._reduxForm,i=o.initialValues,u=(0,o.getFormState)(e),s=n(u,"initial."+a),c=void 0!==s?s:i&&n(i,a),l=n(u,"values."+a),p=n(u,"submitting"),d=function(e,t){var n=D.a.getIn(e,t);return n&&n._error?n._error:n}(n(u,"syncErrors"),a),m=function(e,t){var r=n(e,t);return r&&r._warning?r._warning:r}(n(u,"syncWarnings"),a),f=t(l,c);return{asyncError:n(u,"asyncErrors."+a),asyncValidating:n(u,"asyncValidating")===a,dirty:!f,pristine:f,state:n(u,"fields."+a),submitError:n(u,"submitErrors."+a),submitFailed:n(u,"submitFailed"),submitting:p,syncError:d,syncWarning:m,initial:c,value:l,_value:r.value}}),void 0,void 0,{forwardRef:!0})(r)},R=n(89),S=n.n(R),A=function(e,t,n,r,a,o){if(o)return e===t},V=function(e,t,n){var r=S()(e.props,t,A),a=S()(e.state,n,A);return!r||!a},z=function(e,t){var n=e._reduxForm.sectionPrefix;return n?n+"."+t:t},U=n(297);var I=function(e){var t=N(e),n=e.setIn,r=function(e){function r(t){var r;if((r=e.call(this,t)||this).ref=l.a.createRef(),r.normalize=function(e,t){var a=r.props.normalize;if(!a)return t;var o=r.props._reduxForm.getValues();return a(t,r.value,n(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return r}s()(r,e);var o=r.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return V(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=z(this.props,this.props.name),n=z(e,e.name);t===n&&D.a.deepEqual(this.props.validate,e.validate)&&D.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(n,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(t,a()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(r,[{key:"name",get:function(){return z(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),r}(c.Component);return r.propTypes={name:d.a.string.isRequired,component:x,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(U.b)(r)};t.a=I(D.a)},301:function(e,t,n){"use strict";var r=n(302),a=n.n(r),o=n(12);t.a=function(e){var t=e.getIn;return function(e,n){a()(e,"Form value must be specified");var r=n||function(e){return t(e,"form")};return function(n){for(var i=arguments.length,u=new Array(i>1?i-1:0),s=1;s<i;s++)u[s-1]=arguments[s];return a()(u.length,"No fields specified"),1===u.length?t(r(n),e+".values."+u[0]):u.reduce((function(a,i){var u=t(r(n),e+".values."+i);return void 0===u?a:o.a.setIn(a,i,u)}),{})}}}(o.a)},412:function(e,t,n){"use strict";n.r(t);var r=n(39),a=n(40),o=n(42),i=n(41),u=n(0),s=n.n(u),c=n(298),l=n(312),p=n(301),d=n(19),m=n(3),f=n.n(m),v=n(303),h=n.n(v),g=n(305),b=n.n(g),y=n(304),E=n.n(y),k=function(e){var t=e.input,n=e.label,r=e.type,a=e.limit,o=e.readOnly,i=e.meta,u=i.touched,c=i.error,l=i.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},n),s.a.createElement("input",Object.assign({},t,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:a,readOnly:o})),u&&(c&&s.a.createElement("p",{className:"invalid-feedback"},c)||l&&s.a.createElement("p",null,l)))},F=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).pilihBarang=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");a.setState({kodeJenis:t[0],kadarCetak:t[1],kadarBeli:t[2]})}},a.state={kodeBarang:[],kodeJenis:"",namaJenis:"",kadarCetak:"",kadarBeli:"",columns:[{dataField:"kodeBarang",text:"Kode Barang"},{dataField:"bruto",text:"Bruto"},{dataField:"kadarTransaksi",text:"Harga (%)"},{dataField:"netto",text:"Netto(Gr)"}],tampungRongsok:[]},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.get("http://157.245.145.87:9011/master/subcategorys2?kodeKelompok=CIOK").then((function(t){return e.setState({kodeBarang:t.data})})).catch((function(e){return console.log(e)}))}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto)}},{key:"setKadar",value:function(){this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli)}},{key:"render",value:function(){var e=this,t=this.state.kodeBarang.filter((function(e){return"RSK"===e.kodeKategori}));return s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4 mb-3"},s.a.createElement("label",{htmlFor:""},"Kode Barang"),s.a.createElement(c.a,{name:"kodeBarang",className:"form-control",component:"select",onChange:this.pilihBarang(),onBlur:this.setKadar()},s.a.createElement("option",{value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),t.map((function(e){return s.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarBeli,key:e.kodeJenis},e.namaJenis)})))),s.a.createElement("div",{className:"col-lg-8"}),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(c.a,{name:"kadar",label:"Kadar (%)",type:"number",component:k,readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(c.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:k,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(c.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:k,onBlur:function(){return e.onclick1()}})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(c.a,{name:"netto",label:"Murni (Gr)",type:"number",component:k,readOnly:!0})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan"))),this.props.data?s.a.createElement(b.a,{keyField:"id",data:this.props.data,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"form-group"},s.a.createElement(h.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:E()()})))})):null)))}}]),n}(u.Component);F=Object(l.a)({form:"FormRongsok",enableReinitialize:!0})(F);var D=Object(p.a)("FormRongsok");t.default=Object(d.b)((function(e){var t=D(e,"bruto","kadarTransaksi"),n=t.bruto,r=t.kadarTransaksi;return{netto:(parseFloat(n)*(parseFloat(r)/100)).toFixed(3)}}))(F)}}]);
//# sourceMappingURL=101.1c3fdd6f.chunk.js.map