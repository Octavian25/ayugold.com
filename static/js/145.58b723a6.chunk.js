(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[145,174],{1239:function(e,t,a){"use strict";a.r(t);var r=a(71),n=a(72),o=a(74),i=a(73),s=a(0),l=a.n(s),u=a(468),c=a.n(u),d=a(471),m=a.n(d),p=a(470),f=a.n(p),h=a(27),v=a(178),g=a(77),b=a(465),y=a(458),E=a(45),k=a.n(E),F=function(e){var t=e.input,a=e.label,r=e.type,n=e.limit,o=e.readOnly,i=e.meta,s=i.touched,u=i.error,c=i.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},a),l.a.createElement("input",Object.assign({},t,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:n,readOnly:o})),s&&(u&&l.a.createElement("p",{className:"invalid-feedback"},u)||c&&l.a.createElement("p",null,c)))},S=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onChange=function(e){return function(t){n.setState(Object(g.a)({},e,t.target.value))}},n.state={listLokasi:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://147.139.182.75:3759/api/v1/storages2?tipeData=LOKASI").then((function(t){return e.setState({listLokasi:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(b.a,{name:"tanggal",label:"Tanggal",component:F,type:"date"}))),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Lokasi"),l.a.createElement(b.a,{name:"lokasi",component:"select",className:"form-control"},l.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listLokasi.map((function(e){return l.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)}))))),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Kriteria"),l.a.createElement("div",{className:"form-control-transparant"},l.a.createElement("label",{className:"mr-3"},l.a.createElement(b.a,{id:"kodeJenis",name:"kriteria",type:"radio",value:"Kode Jenis",className:"mr-2",component:"input"}),"Kode Jenis"),l.a.createElement("label",null,l.a.createElement(b.a,{id:"kadar",name:"kriteria",type:"radio",value:"Kadar",className:"mr-2",component:"input"}),"Kadar")))),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:""},"Detail Data"),l.a.createElement(b.a,{name:"detailData",id:"detailData",className:"form-control",component:"select",defaultValue:"SEMUA"},l.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA"),l.a.createElement("option",{value:"KOSONG",key:"KOSONG"},"KOSONG")))),l.a.createElement("div",{className:"col-lg-12 mt-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},"Lihat Data")))))}}]),a}(s.Component);S=Object(y.a)({form:"FormSelisih",enableReinitialize:!0})(S);var D=Object(h.b)()(S),O=a(464),N=d.Search.SearchBar,w=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={columns:[{dataField:"kodeJenis",text:"Kode",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarCetak",text:"Kadar",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarTransaksi",text:"%",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"nettoData",text:"Data Netto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"brutoData",text:"Data Bruto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"brutoSelisih",text:"Selisih Bruto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"nettoSelisih",text:"Selisih Netto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"brutoTimbang",text:"Timbang Bruto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"nettoTimbang",text:"Timbang Netto(Rp)",sort:!0,headerStyle:function(){return{width:"25%"}}}],data:[{noFaktur:"-",kodeKategori:"-",kadarCetak:0,kadarTransaksi:0,kodeJenis:"-",noUrut:"-",brutoSelisih:0,nettoTimbang:0,nettoData:0,brutoTimbang:0,nettoSelisih:0,brutoData:0}],listLokasi:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(v.b)())}},{key:"handleSubmit",value:function(e){console.log(e);var t={noFaktur:this.props.noFaktur,noBon:this.props.noFaktur,tanggal:e.tanggal,kodeLokasi:e.detailData,barangdetail:this.state.data,footerItem:{totalSelisihNetto:0,totalTimbangNetto:0,totalTimbangBruto:0,totalSelisihBruto:0,totalDataBruto:0,totalDataNetto:0}};console.log(t)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"card"},l.a.createElement(O.default,{title:"Selisih Timbangan"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(D,{noFaktur:this.props.noFaktur,onSubmit:function(t){return e.handleSubmit(t)}})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement(m.a,{keyField:"kodeKelompok",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"text-right mt-5 mb-3"},l.a.createElement(N,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),l.a.createElement(c.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:f()()})))}))))))}}]),a}(s.Component);t.default=Object(h.b)((function(e){return{noFaktur:e.provinsi.noFaktur}}),null)(w)},464:function(e,t,a){"use strict";a.r(t);var r=a(71),n=a(72),o=a(74),i=a(73),s=a(0),l=a.n(s),u=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return l.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(s.Component);t.default=u},465:function(e,t,a){"use strict";var r=a(11),n=a.n(r),o=a(176),i=a.n(o),s=a(36),l=a.n(s),u=a(0),c=a.n(u),d=a(2),m=a.n(d),p=a(52),f=a.n(p),h=a(26),v=a.n(h),g=a(27),b=function(e,t,a,r){var o=t.value;return"checkbox"===e?n()({},t,{checked:!!o}):"radio"===e?n()({},t,{checked:r(o,a),value:a}):"select-multiple"===e?n()({},t,{value:o||[]}):"file"===e?n()({},t,{value:o||void 0}):t};var y=a(173),E=function(e,t){if(Object(y.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,r=a.target,n=r.type,o=r.value,i=r.checked,s=r.files,l=a.dataTransfer;return"checkbox"===n?!!i:"file"===n?s||l&&l.files:"select-multiple"===n?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var r=e[a];r.selected&&t.push(r.value)}return t}(e.target.options):o}return e},k="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,t){var a=t.name,r=t.parse,n=t.normalize,o=E(e,k);return r&&(o=r(o,a)),n&&(o=n(a,o)),o},S=a(10),D=a(76),O=function(e,t,a){return Object(D.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},N=["_reduxForm"],w=function(e){return e&&"object"===typeof e},x=function(e){return e&&"function"===typeof e},j=function(e){w(e)&&x(e.preventDefault)&&e.preventDefault()},T=function(e,t){if(w(e)&&w(e.dataTransfer)&&x(e.dataTransfer.getData))return e.dataTransfer.getData(t)},C=function(e,t,a){w(e)&&w(e.dataTransfer)&&x(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var _=function(e){var t=e.deepEqual,a=e.getIn,r=function(a){function r(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))||this).ref=c.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,r=a.name,o=a.dispatch,i=a.parse,s=a.normalize,l=a.onChange,u=a._reduxForm,c=a.value,d=F(t,{name:r,parse:i,normalize:s}),m=!1;if(l)if(!k&&Object(y.a)(t))l(n()({},t,{preventDefault:function(){return m=!0,j(t)}}),d,c,r);else{var p=l(t,d,c,r);k&&(m=p)}m||(o(u.change(r,d)),u.asyncValidate&&u.asyncValidate(r,d,"change"))},e.handleFocus=function(t){var a=e.props,r=a.name,o=a.dispatch,i=a.onFocus,s=a._reduxForm,l=!1;i&&(k?l=i(t,r):i(n()({},t,{preventDefault:function(){return l=!0,j(t)}}),r)),l||o(s.focus(r))},e.handleBlur=function(t){var a=e.props,r=a.name,o=a.dispatch,i=a.parse,s=a.normalize,l=a.onBlur,u=a._reduxForm,c=a._value,d=a.value,m=F(t,{name:r,parse:i,normalize:s});m===c&&void 0!==c&&(m=d);var p=!1;l&&(k?p=l(t,m,d,r):l(n()({},t,{preventDefault:function(){return p=!0,j(t)}}),m,d,r)),p||(o(u.blur(r,m)),u.asyncValidate&&u.asyncValidate(r,m,"blur"))},e.handleDragStart=function(t){var a=e.props,r=a.name,n=a.onDragStart,o=a.value;C(t,"text",null==o?"":o),n&&n(t,r)},e.handleDrop=function(t){var a=e.props,r=a.name,o=a.dispatch,i=a.onDrop,s=a._reduxForm,l=a.value,u=T(t,"text"),c=!1;i&&i(n()({},t,{preventDefault:function(){return c=!0,j(t)}}),u,l,r),c||(o(s.change(r,u)),j(t))},e}l()(r,a);var o=r.prototype;return o.shouldComponentUpdate=function(e){var a=this,r=Object.keys(e),n=Object.keys(this.props);return!!(this.props.children||e.children||r.length!==n.length||r.some((function(r){return~(e.immutableProps||[]).indexOf(r)?a.props[r]!==e[r]:!~N.indexOf(r)&&!t(a.props[r],e[r])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,r=t.forwardRef,o=t.name,i=t._reduxForm,s=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,v()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),l=function(e,t,a){var r=e.getIn,o=e.toJS,i=e.deepEqual,s=a.asyncError,l=a.asyncValidating,u=a.onBlur,c=a.onChange,d=a.onDrop,m=a.onDragStart,p=a.dirty,f=a.dispatch,h=a.onFocus,g=a.form,y=a.format,E=a.initial,k=(a.parse,a.pristine),F=a.props,S=a.state,D=a.submitError,O=a.submitFailed,N=a.submitting,w=a.syncError,x=a.syncWarning,j=(a.validate,a.value),T=a._value,C=(a.warn,v()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),_=w||s||D,R=x,B=function(e,a){if(null===a)return e;var r=null==e?"":e;return a?a(e,t):r}(j,y);return{input:b(C.type,{name:t,onBlur:u,onChange:c,onDragStart:m,onDrop:d,onFocus:h,value:B},T,i),meta:n()({},o(S),{active:!(!S||!r(S,"active")),asyncValidating:l,autofilled:!(!S||!r(S,"autofilled")),dirty:p,dispatch:f,error:_,form:g,initial:E,warning:R,invalid:!!_,pristine:k,submitting:!!N,submitFailed:!!O,touched:!(!S||!r(S,"touched")),valid:!_,visited:!(!S||!r(S,"visited"))}),custom:n()({},C,{},F)}}(e,o,n()({},s,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),c=l.custom,d=v()(l,["custom"]);if(r&&(c.ref=this.ref),"string"===typeof a){var m=d.input;d.meta;return Object(u.createElement)(a,n()({},m,{},c))}return Object(u.createElement)(a,n()({},d,{},c))},r}(u.Component);return r.propTypes={component:O,props:m.a.object},Object(g.b)((function(e,r){var n=r.name,o=r._reduxForm,i=o.initialValues,s=(0,o.getFormState)(e),l=a(s,"initial."+n),u=void 0!==l?l:i&&a(i,n),c=a(s,"values."+n),d=a(s,"submitting"),m=function(e,t){var a=S.a.getIn(e,t);return a&&a._error?a._error:a}(a(s,"syncErrors"),n),p=function(e,t){var r=a(e,t);return r&&r._warning?r._warning:r}(a(s,"syncWarnings"),n),f=t(c,u);return{asyncError:a(s,"asyncErrors."+n),asyncValidating:a(s,"asyncValidating")===n,dirty:!f,pristine:f,state:a(s,"fields."+n),submitError:a(s,"submitErrors."+n),submitFailed:a(s,"submitFailed"),submitting:d,syncError:m,syncWarning:p,initial:u,value:c,_value:r.value}}),void 0,void 0,{forwardRef:!0})(r)},R=a(177),B=a.n(R),L=function(e,t,a,r,n,o){if(o)return e===t},K=function(e,t,a){var r=B()(e.props,t,L),n=B()(e.state,a,L);return!r||!n},V=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},z=a(107);var A=function(e){var t=_(e),a=e.setIn,r=function(e){function r(t){var r;if((r=e.call(this,t)||this).ref=c.a.createRef(),r.normalize=function(e,t){var n=r.props.normalize;if(!n)return t;var o=r.props._reduxForm.getValues();return n(t,r.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return r}l()(r,e);var o=r.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return K(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=V(this.props,this.props.name),a=V(e,e.name);t===a&&S.a.deepEqual(this.props.validate,e.validate)&&S.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(u.createElement)(t,n()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(r,[{key:"name",get:function(){return V(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),r}(u.Component);return r.propTypes={name:m.a.string.isRequired,component:O,format:m.a.func,normalize:m.a.func,onBlur:m.a.func,onChange:m.a.func,onFocus:m.a.func,onDragStart:m.a.func,onDrop:m.a.func,parse:m.a.func,props:m.a.object,validate:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),warn:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),forwardRef:m.a.bool,immutableProps:m.a.arrayOf(m.a.string),_reduxForm:m.a.object},Object(z.b)(r)};t.a=A(S.a)}}]);
//# sourceMappingURL=145.58b723a6.chunk.js.map