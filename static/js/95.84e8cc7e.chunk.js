(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[95,174],{1243:function(e,a,t){"use strict";t.r(a);var r=t(71),n=t(72),o=t(74),i=t(73),s=t(0),l=t.n(s),c=t(523),u=t(27),m=t(496),d=t.n(m),p=t(174),f=t.n(p),v=t(465),h=t(458),b=function(e){var a=e.input,t=e.label,r=e.type,n=e.readOnly,o=e.meta,i=o.touched,s=o.error,c=o.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},t),l.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",readOnly:n})),i&&(s&&l.a.createElement("p",{className:"invalid-feedback"},s)||c&&l.a.createElement("p",null,c)))},g=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Jenis Transaksi"),l.a.createElement(v.a,{name:"jenisTransaksi",component:"select",className:"form-control"},l.a.createElement("option",{value:"PEMBAYARAN",key:"PEMBAYARAN"},"PEMBAYARAN"),l.a.createElement("option",{value:"VALIDASI",key:"VALIDASI"},"VALIDASI")))),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(v.a,{name:"dari",label:"Dari",component:b,type:"text"})),l.a.createElement("div",{className:"col-lg-4"},l.a.createElement(v.a,{name:"sampai",label:"Sampai",component:b,type:"text"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"tetx-right"},l.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),t}(s.Component);g=Object(h.a)({form:"DataValidasi",enableReinitialize:!0})(g);var E=Object(u.b)()(g),y=t(188),N=t(4),x=t(464),F=[{dataField:"kode",order:"asc"}],D=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={provinsi:[],provinsi_array:[],response:"",columns:[{dataField:"jenis",text:"Jenis",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"dari",text:"Dari(Gr)",sort:!0},{dataField:"sampai",text:"Sampai(Gr)",sort:!0},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return alert("KLIK HAPUS")}},l.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),l.a.createElement("button",{className:"btn btn-warning mr-2","data-toggle":"modal","data-target":"#primary-header-modal",onClick:function(){return Object(y.b)(a.jenis,a.dari,a.sampai)}},l.a.createElement("i",{className:"fa fa-edit mr-1"}),"EDIT"))}}],data:[{jenis:"001",dari:"1000000",sampai:"1000"}]},n}return Object(n.a)(t,[{key:"handlerSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid",style:{color:"black"}},l.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),l.a.createElement("ol",{className:"breadcrumb mb-2"},l.a.createElement(N.b,{to:"/parameterSupervisory"},l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},l.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement(x.default,{title:"Data Range"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info","data-toggle":"modal","data-target":"#primary-header-modal"},"Tambah Data"))),this.state.data?l.a.createElement(c.a,{data:this.state.data,columns:this.state.columns,defaultSorted:F,namaKey:"jenis"}):l.a.createElement("div",null,this.props.error?l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:d.a,style:{width:"30%"},alt:"ACTIVE"}),l.a.createElement("br",null),l.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):l.a.createElement(f.a,{width:1100,height:180})))))),l.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-lg"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},l.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Harga Emas"),l.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(E,null))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),t}(s.Component);a.default=Object(u.b)((function(e){return{KotaList:e.provinsi.kota,alert:e.provinsi.alert,error:e.provinsi.error}}),null)(D)},464:function(e,a,t){"use strict";t.r(a);var r=t(71),n=t(72),o=t(74),i=t(73),s=t(0),l=t.n(s),c=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),t}(s.Component);a.default=c},465:function(e,a,t){"use strict";var r=t(11),n=t.n(r),o=t(176),i=t.n(o),s=t(36),l=t.n(s),c=t(0),u=t.n(c),m=t(2),d=t.n(m),p=t(52),f=t.n(p),v=t(26),h=t.n(v),b=t(27),g=function(e,a,t,r){var o=a.value;return"checkbox"===e?n()({},a,{checked:!!o}):"radio"===e?n()({},a,{checked:r(o,t),value:t}):"select-multiple"===e?n()({},a,{value:o||[]}):"file"===e?n()({},a,{value:o||void 0}):a};var E=t(173),y=function(e,a){if(Object(E.a)(e)){if(!a&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(a&&void 0!==e.nativeEvent)return e.nativeEvent.text;var t=e,r=t.target,n=r.type,o=r.value,i=r.checked,s=r.files,l=t.dataTransfer;return"checkbox"===n?!!i:"file"===n?s||l&&l.files:"select-multiple"===n?function(e){var a=[];if(e)for(var t=0;t<e.length;t++){var r=e[t];r.selected&&a.push(r.value)}return a}(e.target.options):o}return e},N="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,x=function(e,a){var t=a.name,r=a.parse,n=a.normalize,o=y(e,N);return r&&(o=r(o,t)),n&&(o=n(t,o)),o},F=t(10),D=t(76),j=function(e,a,t){return Object(D.isValidElementType)(e[a])?null:new Error("Invalid prop `"+a+"` supplied to `"+t+"`.")},O=["_reduxForm"],k=function(e){return e&&"object"===typeof e},w=function(e){return e&&"function"===typeof e},S=function(e){k(e)&&w(e.preventDefault)&&e.preventDefault()},C=function(e,a){if(k(e)&&k(e.dataTransfer)&&w(e.dataTransfer.getData))return e.dataTransfer.getData(a)},_=function(e,a,t){k(e)&&k(e.dataTransfer)&&w(e.dataTransfer.setData)&&e.dataTransfer.setData(a,t)};var A=function(e){var a=e.deepEqual,t=e.getIn,r=function(t){function r(){for(var e,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(a){var t=e.props,r=t.name,o=t.dispatch,i=t.parse,s=t.normalize,l=t.onChange,c=t._reduxForm,u=t.value,m=x(a,{name:r,parse:i,normalize:s}),d=!1;if(l)if(!N&&Object(E.a)(a))l(n()({},a,{preventDefault:function(){return d=!0,S(a)}}),m,u,r);else{var p=l(a,m,u,r);N&&(d=p)}d||(o(c.change(r,m)),c.asyncValidate&&c.asyncValidate(r,m,"change"))},e.handleFocus=function(a){var t=e.props,r=t.name,o=t.dispatch,i=t.onFocus,s=t._reduxForm,l=!1;i&&(N?l=i(a,r):i(n()({},a,{preventDefault:function(){return l=!0,S(a)}}),r)),l||o(s.focus(r))},e.handleBlur=function(a){var t=e.props,r=t.name,o=t.dispatch,i=t.parse,s=t.normalize,l=t.onBlur,c=t._reduxForm,u=t._value,m=t.value,d=x(a,{name:r,parse:i,normalize:s});d===u&&void 0!==u&&(d=m);var p=!1;l&&(N?p=l(a,d,m,r):l(n()({},a,{preventDefault:function(){return p=!0,S(a)}}),d,m,r)),p||(o(c.blur(r,d)),c.asyncValidate&&c.asyncValidate(r,d,"blur"))},e.handleDragStart=function(a){var t=e.props,r=t.name,n=t.onDragStart,o=t.value;_(a,"text",null==o?"":o),n&&n(a,r)},e.handleDrop=function(a){var t=e.props,r=t.name,o=t.dispatch,i=t.onDrop,s=t._reduxForm,l=t.value,c=C(a,"text"),u=!1;i&&i(n()({},a,{preventDefault:function(){return u=!0,S(a)}}),c,l,r),u||(o(s.change(r,c)),S(a))},e}l()(r,t);var o=r.prototype;return o.shouldComponentUpdate=function(e){var t=this,r=Object.keys(e),n=Object.keys(this.props);return!!(this.props.children||e.children||r.length!==n.length||r.some((function(r){return~(e.immutableProps||[]).indexOf(r)?t.props[r]!==e[r]:!~O.indexOf(r)&&!a(t.props[r],e[r])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var a=this.props,t=a.component,r=a.forwardRef,o=a.name,i=a._reduxForm,s=(a.normalize,a.onBlur,a.onChange,a.onFocus,a.onDragStart,a.onDrop,a.immutableProps,h()(a,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),l=function(e,a,t){var r=e.getIn,o=e.toJS,i=e.deepEqual,s=t.asyncError,l=t.asyncValidating,c=t.onBlur,u=t.onChange,m=t.onDrop,d=t.onDragStart,p=t.dirty,f=t.dispatch,v=t.onFocus,b=t.form,E=t.format,y=t.initial,N=(t.parse,t.pristine),x=t.props,F=t.state,D=t.submitError,j=t.submitFailed,O=t.submitting,k=t.syncError,w=t.syncWarning,S=(t.validate,t.value),C=t._value,_=(t.warn,h()(t,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),A=k||s||D,R=w,T=function(e,t){if(null===t)return e;var r=null==e?"":e;return t?t(e,a):r}(S,E);return{input:g(_.type,{name:a,onBlur:c,onChange:u,onDragStart:d,onDrop:m,onFocus:v,value:T},C,i),meta:n()({},o(F),{active:!(!F||!r(F,"active")),asyncValidating:l,autofilled:!(!F||!r(F,"autofilled")),dirty:p,dispatch:f,error:A,form:b,initial:y,warning:R,invalid:!!A,pristine:N,submitting:!!O,submitFailed:!!j,touched:!(!F||!r(F,"touched")),valid:!A,visited:!(!F||!r(F,"visited"))}),custom:n()({},_,{},x)}}(e,o,n()({},s,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=l.custom,m=h()(l,["custom"]);if(r&&(u.ref=this.ref),"string"===typeof t){var d=m.input;m.meta;return Object(c.createElement)(t,n()({},d,{},u))}return Object(c.createElement)(t,n()({},m,{},u))},r}(c.Component);return r.propTypes={component:j,props:d.a.object},Object(b.b)((function(e,r){var n=r.name,o=r._reduxForm,i=o.initialValues,s=(0,o.getFormState)(e),l=t(s,"initial."+n),c=void 0!==l?l:i&&t(i,n),u=t(s,"values."+n),m=t(s,"submitting"),d=function(e,a){var t=F.a.getIn(e,a);return t&&t._error?t._error:t}(t(s,"syncErrors"),n),p=function(e,a){var r=t(e,a);return r&&r._warning?r._warning:r}(t(s,"syncWarnings"),n),f=a(u,c);return{asyncError:t(s,"asyncErrors."+n),asyncValidating:t(s,"asyncValidating")===n,dirty:!f,pristine:f,state:t(s,"fields."+n),submitError:t(s,"submitErrors."+n),submitFailed:t(s,"submitFailed"),submitting:m,syncError:d,syncWarning:p,initial:c,value:u,_value:r.value}}),void 0,void 0,{forwardRef:!0})(r)},R=t(177),T=t.n(R),V=function(e,a,t,r,n,o){if(o)return e===a},B=function(e,a,t){var r=T()(e.props,a,V),n=T()(e.state,t,V);return!r||!n},I=function(e,a){var t=e._reduxForm.sectionPrefix;return t?t+"."+a:a},P=t(107);var z=function(e){var a=A(e),t=e.setIn,r=function(e){function r(a){var r;if((r=e.call(this,a)||this).ref=u.a.createRef(),r.normalize=function(e,a){var n=r.props.normalize;if(!n)return a;var o=r.props._reduxForm.getValues();return n(a,r.value,t(o,e,a),o,e)},!a._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return r}l()(r,e);var o=r.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,a){return B(this,e,a)},o.UNSAFE_componentWillReceiveProps=function(e){var a=I(this.props,this.props.name),t=I(e,e.name);a===t&&F.a.deepEqual(this.props.validate,e.validate)&&F.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(a),this.props._reduxForm.register(t,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(a,n()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(r,[{key:"name",get:function(){return I(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),r}(c.Component);return r.propTypes={name:d.a.string.isRequired,component:j,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(P.b)(r)};a.a=z(F.a)},496:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"},523:function(e,a,t){"use strict";var r=t(71),n=t(72),o=t(74),i=t(73),s=t(0),l=t.n(s),c=t(468),u=t.n(c),m=t(471),d=t.n(m),p=t(470),f=t.n(p),v=t(27),h=m.Search.SearchBar,b=m.CSVExport.ExportCSVButton,g=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).rowStyle=function(e,a){e.index=a;var t={};return t.backgroundColor=a%2===0?"transparent":"#DEDEDE",t.borderTop="none",t},n.state={},n}return Object(n.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.props.data,columns:this.props.columns,defaultSorted:this.props.defaultSorted,search:!0},(function(e){return l.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},l.a.createElement("div",{className:"text-right"},l.a.createElement(h,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),l.a.createElement(u.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:f()()})),l.a.createElement(b,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))}))}}]),t}(s.Component);a.a=Object(v.b)()(g)}}]);
//# sourceMappingURL=95.84e8cc7e.chunk.js.map