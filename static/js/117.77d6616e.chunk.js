(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[117,25,29],{465:function(e,n,t){"use strict";var r=t(11),a=t.n(r),o=t(175),i=t.n(o),s=t(36),u=t.n(s),l=t(0),c=t.n(l),p=t(2),d=t.n(p),m=t(52),f=t.n(m),v=t(26),h=t.n(v),g=t(27),b=function(e,n,t,r){var o=n.value;return"checkbox"===e?a()({},n,{checked:!!o}):"radio"===e?a()({},n,{checked:r(o,t),value:t}):"select-multiple"===e?a()({},n,{value:o||[]}):"file"===e?a()({},n,{value:o||void 0}):n};var y=t(172),E=function(e,n){if(Object(y.a)(e)){if(!n&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(n&&void 0!==e.nativeEvent)return e.nativeEvent.text;var t=e,r=t.target,a=r.type,o=r.value,i=r.checked,s=r.files,u=t.dataTransfer;return"checkbox"===a?!!i:"file"===a?s||u&&u.files:"select-multiple"===a?function(e){var n=[];if(e)for(var t=0;t<e.length;t++){var r=e[t];r.selected&&n.push(r.value)}return n}(e.target.options):o}return e},k="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,n){var t=n.name,r=n.parse,a=n.normalize,o=E(e,k);return r&&(o=r(o,t)),a&&(o=a(t,o)),o},D=t(10),w=t(76),x=function(e,n,t){return Object(w.isValidElementType)(e[n])?null:new Error("Invalid prop `"+n+"` supplied to `"+t+"`.")},O=["_reduxForm"],N=function(e){return e&&"object"===typeof e},j=function(e){return e&&"function"===typeof e},C=function(e){N(e)&&j(e.preventDefault)&&e.preventDefault()},_=function(e,n){if(N(e)&&N(e.dataTransfer)&&j(e.dataTransfer.getData))return e.dataTransfer.getData(n)},B=function(e,n,t){N(e)&&N(e.dataTransfer)&&j(e.dataTransfer.setData)&&e.dataTransfer.setData(n,t)};var S=function(e){var n=e.deepEqual,t=e.getIn,r=function(t){function r(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).ref=c.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(n){var t=e.props,r=t.name,o=t.dispatch,i=t.parse,s=t.normalize,u=t.onChange,l=t._reduxForm,c=t.value,p=F(n,{name:r,parse:i,normalize:s}),d=!1;if(u)if(!k&&Object(y.a)(n))u(a()({},n,{preventDefault:function(){return d=!0,C(n)}}),p,c,r);else{var m=u(n,p,c,r);k&&(d=m)}d||(o(l.change(r,p)),l.asyncValidate&&l.asyncValidate(r,p,"change"))},e.handleFocus=function(n){var t=e.props,r=t.name,o=t.dispatch,i=t.onFocus,s=t._reduxForm,u=!1;i&&(k?u=i(n,r):i(a()({},n,{preventDefault:function(){return u=!0,C(n)}}),r)),u||o(s.focus(r))},e.handleBlur=function(n){var t=e.props,r=t.name,o=t.dispatch,i=t.parse,s=t.normalize,u=t.onBlur,l=t._reduxForm,c=t._value,p=t.value,d=F(n,{name:r,parse:i,normalize:s});d===c&&void 0!==c&&(d=p);var m=!1;u&&(k?m=u(n,d,p,r):u(a()({},n,{preventDefault:function(){return m=!0,C(n)}}),d,p,r)),m||(o(l.blur(r,d)),l.asyncValidate&&l.asyncValidate(r,d,"blur"))},e.handleDragStart=function(n){var t=e.props,r=t.name,a=t.onDragStart,o=t.value;B(n,"text",null==o?"":o),a&&a(n,r)},e.handleDrop=function(n){var t=e.props,r=t.name,o=t.dispatch,i=t.onDrop,s=t._reduxForm,u=t.value,l=_(n,"text"),c=!1;i&&i(a()({},n,{preventDefault:function(){return c=!0,C(n)}}),l,u,r),c||(o(s.change(r,l)),C(n))},e}u()(r,t);var o=r.prototype;return o.shouldComponentUpdate=function(e){var t=this,r=Object.keys(e),a=Object.keys(this.props);return!!(this.props.children||e.children||r.length!==a.length||r.some((function(r){return~(e.immutableProps||[]).indexOf(r)?t.props[r]!==e[r]:!~O.indexOf(r)&&!n(t.props[r],e[r])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var n=this.props,t=n.component,r=n.forwardRef,o=n.name,i=n._reduxForm,s=(n.normalize,n.onBlur,n.onChange,n.onFocus,n.onDragStart,n.onDrop,n.immutableProps,h()(n,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),u=function(e,n,t){var r=e.getIn,o=e.toJS,i=e.deepEqual,s=t.asyncError,u=t.asyncValidating,l=t.onBlur,c=t.onChange,p=t.onDrop,d=t.onDragStart,m=t.dirty,f=t.dispatch,v=t.onFocus,g=t.form,y=t.format,E=t.initial,k=(t.parse,t.pristine),F=t.props,D=t.state,w=t.submitError,x=t.submitFailed,O=t.submitting,N=t.syncError,j=t.syncWarning,C=(t.validate,t.value),_=t._value,B=(t.warn,h()(t,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),S=N||s||w,T=j,R=function(e,t){if(null===t)return e;var r=null==e?"":e;return t?t(e,n):r}(C,y);return{input:b(B.type,{name:n,onBlur:l,onChange:c,onDragStart:d,onDrop:p,onFocus:v,value:R},_,i),meta:a()({},o(D),{active:!(!D||!r(D,"active")),asyncValidating:u,autofilled:!(!D||!r(D,"autofilled")),dirty:m,dispatch:f,error:S,form:g,initial:E,warning:T,invalid:!!S,pristine:k,submitting:!!O,submitFailed:!!x,touched:!(!D||!r(D,"touched")),valid:!S,visited:!(!D||!r(D,"visited"))}),custom:a()({},B,{},F)}}(e,o,a()({},s,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),c=u.custom,p=h()(u,["custom"]);if(r&&(c.ref=this.ref),"string"===typeof t){var d=p.input;p.meta;return Object(l.createElement)(t,a()({},d,{},c))}return Object(l.createElement)(t,a()({},p,{},c))},r}(l.Component);return r.propTypes={component:x,props:d.a.object},Object(g.b)((function(e,r){var a=r.name,o=r._reduxForm,i=o.initialValues,s=(0,o.getFormState)(e),u=t(s,"initial."+a),l=void 0!==u?u:i&&t(i,a),c=t(s,"values."+a),p=t(s,"submitting"),d=function(e,n){var t=D.a.getIn(e,n);return t&&t._error?t._error:t}(t(s,"syncErrors"),a),m=function(e,n){var r=t(e,n);return r&&r._warning?r._warning:r}(t(s,"syncWarnings"),a),f=n(c,l);return{asyncError:t(s,"asyncErrors."+a),asyncValidating:t(s,"asyncValidating")===a,dirty:!f,pristine:f,state:t(s,"fields."+a),submitError:t(s,"submitErrors."+a),submitFailed:t(s,"submitFailed"),submitting:p,syncError:d,syncWarning:m,initial:l,value:c,_value:r.value}}),void 0,void 0,{forwardRef:!0})(r)},T=t(176),R=t.n(T),V=function(e,n,t,r,a,o){if(o)return e===n},z=function(e,n,t){var r=R()(e.props,n,V),a=R()(e.state,t,V);return!r||!a},P=function(e,n){var t=e._reduxForm.sectionPrefix;return t?t+"."+n:n},A=t(106);var I=function(e){var n=S(e),t=e.setIn,r=function(e){function r(n){var r;if((r=e.call(this,n)||this).ref=c.a.createRef(),r.normalize=function(e,n){var a=r.props.normalize;if(!a)return n;var o=r.props._reduxForm.getValues();return a(n,r.value,t(o,e,n),o,e)},!n._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return r}u()(r,e);var o=r.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,n){return z(this,e,n)},o.UNSAFE_componentWillReceiveProps=function(e){var n=P(this.props,this.props.name),t=P(e,e.name);n===t&&D.a.deepEqual(this.props.validate,e.validate)&&D.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(n),this.props._reduxForm.register(t,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(l.createElement)(n,a()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(r,[{key:"name",get:function(){return P(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),r}(l.Component);return r.propTypes={name:d.a.string.isRequired,component:x,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(A.b)(r)};n.a=I(D.a)},467:function(e,n,t){"use strict";var r=t(52),a=t.n(r),o=t(10);n.a=function(e){var n=e.getIn;return function(e,t){a()(e,"Form value must be specified");var r=t||function(e){return n(e,"form")};return function(t){for(var i=arguments.length,s=new Array(i>1?i-1:0),u=1;u<i;u++)s[u-1]=arguments[u];return a()(s.length,"No fields specified"),1===s.length?n(r(t),e+".values."+s[0]):s.reduce((function(a,i){var s=n(r(t),e+".values."+i);return void 0===s?a:o.a.setIn(a,i,s)}),{})}}}(o.a)},469:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r),o=t(178),i=function(e){var n=e.input,t=e.label,r=e.type,o=e.limit,i=e.readOnly,s=e.meta,u=s.touched,l=s.error,c=s.warning;return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"",className:"text-black"},t),a.a.createElement("input",Object.assign({},n,{type:r,className:"form-control",maxLength:o,readOnly:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),u&&(l&&a.a.createElement("p",{className:"invalid-feedback"},l)||c&&a.a.createElement("p",null,c)))},s=function(e){var n=e.input,t=e.label,r=e.options,i=(e.placeholder,e.disabled),s=(e.value,e.meta),u=s.touched,l=s.error,c=s.warning;return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"",className:"text-black"},t),a.a.createElement(o.a,Object.assign({},n,{options:r,search:!0,emptyMessage:"Tidak Ada Data",placeholder:"Silahkan Pilih",disabled:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),u&&(l&&a.a.createElement("p",{className:"invalid-feedback"},l)||c&&a.a.createElement("p",null,c)))}},657:function(e,n,t){"use strict";t.r(n);var r=t(71),a=t(72),o=t(74),i=t(73),s=t(0),u=t.n(s),l=t(465),c=t(458),p=t(467),d=t(27),m=t(468),f=t.n(m),v=t(471),h=t.n(v),g=t(470),b=t.n(g),y=t(5),E=t(469),k=function(e){Object(o.a)(t,e);var n=Object(i.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).state={kodeBarang:[],kodeJenis:"",namaJenis:"",kadarCetak:"",kadarBeli:"",columns:[{dataField:"kodeBarang",text:"Kode Barang"},{dataField:"bruto",text:"Bruto"},{dataField:"kadarTransaksi",text:"Harga (%)"},{dataField:"netto",text:"Netto(Gr)"}],tampungRongsok:[]},a}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(y.b)("subcategorys2?kodeKelompok=CIOK").then((function(n){return e.setState({kodeBarang:n.data})})).catch((function(e){return console.log(e)}))}},{key:"pilihBarang",value:function(e){var n=(e||"DEFAULT | DEFAULT | DEFAULT | ").split("|");this.props.change("kadar",n[1]),this.props.change("kadarTransaksi",n[2])}},{key:"setNetto",value:function(){this.props.change("netto",this.props.netto)}},{key:"render",value:function(){var e=this,n=this.state.kodeBarang.filter((function(e){return"RSK"===e.kodeKategori}));return u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("form",{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-4 mb-3"},u.a.createElement("label",{htmlFor:""},"Kode Barang"),u.a.createElement(l.a,{name:"kodeBarang",className:"form-control",component:E.b,onChange:function(n){return e.pilihBarang(n)},options:n.map((function(e){return{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarBeli,name:e.namaJenis}}))})),u.a.createElement("div",{className:"col-lg-8"}),u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(l.a,{name:"kadar",label:"Kadar (%)",type:"number",component:E.a,readOnly:!0})),u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(l.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:E.a,onChange:this.setNetto()})),u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(l.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:E.a})),u.a.createElement("div",{className:"col-md-3 form-group"},u.a.createElement(l.a,{name:"netto",label:"Murni (Gr)",type:"number",component:E.a,readOnly:!0})),u.a.createElement("div",{className:"col-lg-12 mb-3"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?u.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",u.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))),this.props.data?u.a.createElement(h.a,{keyField:"id",data:this.props.data,columns:this.state.columns,search:!0},(function(e){return u.a.createElement("div",{className:"form-group"},u.a.createElement(f.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()()})))})):null)))}}]),t}(s.Component);k=Object(c.a)({form:"FormRongsok",enableReinitialize:!0})(k);var F=Object(p.a)("FormRongsok");n.default=Object(d.b)((function(e){var n=F(e,"bruto","kadarTransaksi"),t=n.bruto,r=n.kadarTransaksi;return{netto:(parseFloat(t)*parseFloat(r)/100).toFixed(3)}}))(k)}}]);
//# sourceMappingURL=117.77d6616e.chunk.js.map