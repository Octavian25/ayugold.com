(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[75,174],{1234:function(e,t,n){"use strict";n.r(t);var r=n(77),a=n(71),o=n(72),i=n(74),u=n(73),c=n(45),s=n.n(c),l=n(0),p=n.n(l),m=n(27),f=n(4),d=n(458),h=n(177),v=n(466),g=n(464),b=n(465),y=n(5),E=n(469),k=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={listSupplier:[]},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(y.b)("subcategorys2?kodeKelompok=CIOK").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(){return Object(v.c)("Sepertinya koneksi bermasalah, mohon periksa koneksi anda")}))}},{key:"render",value:function(){return p.a.createElement("form",{onSubmit:this.props.handleSubmit},p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-lg-3"},p.a.createElement(b.a,{label:"Tanggal",name:"tanggal",component:E.a,type:"date"})),p.a.createElement("div",{className:"col-lg-3"},p.a.createElement("label",{htmlFor:""},"Kode Barang"),p.a.createElement(b.a,{label:"Kode Barang",name:"kodeKategori",component:"select",className:"form-control"},p.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return p.a.createElement("option",{value:e.kodeJenis,key:e.kodeKategori},e.namaJenis)})))),p.a.createElement("div",{className:"col-lg-3"},p.a.createElement(b.a,{label:"Netto",name:"netto",component:E.a,type:"number"})),p.a.createElement("div",{className:"col-lg-3"},p.a.createElement(b.a,{label:"Bruto",name:"bruto",component:E.a,type:"number"})),p.a.createElement("div",{className:"col-lg-12"},p.a.createElement("div",{className:"text-right"},p.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),n}(l.Component);k=Object(d.a)({form:"FormSaldoAwalCT",enableReinitialize:!0})(k);var w=Object(m.b)()(k),O=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).handleChange=function(e){return function(t){o.setState(Object(r.a)({},e,t.target.value))}},o.state={tipeTransksi:"HUTANG",listSales:[]},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(h.b)()),s.a.get("http://147.139.182.75:3759/api/v1/storages2?tipeData=SALES").then((function(t){return e.setState({listSales:t.data})})).catch((function(){return Object(v.c)("Mohon periksa koneksi anda")}))}},{key:"handlerSimpan",value:function(e){console.log(e);var t={kodeLokasi:"-",namaToko:"-",kodeSales:"-",kodeCustomer:"-",noBon:this.props.noFaktur,noFaktur:this.props.noFaktur,tanggal:e.tanggal,tipeTransaksi:"SALDO-AWAL-CK/RSK",footerDocument:{inputBy:this.props.username},footerItem:{totalP:0,totalK:0,totalpkg:0,totalNettoExt:0,totalBruto:e.bruto||0,totalNetto:e.netto||0,totalGross:0,totalQty:0,totalRp:0}};console.log(JSON.stringify(t));var n=JSON.parse(localStorage.getItem("SaldoAwalCT"))||[];n.push(t),localStorage.setItem("SaldoAwalCT",JSON.stringify(n))}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"container-fluid"},p.a.createElement("ol",{className:"breadcrumb mb-2"},p.a.createElement(f.b,{to:"/saldoawal"},p.a.createElement("button",{type:"button",className:"btn btn-secondary"},p.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),p.a.createElement("div",{className:"row"},p.a.createElement("div",{className:"col-lg-12"},p.a.createElement("div",{className:"card"},p.a.createElement(g.default,{title:"Saldo Awal Piutang Customer"}),p.a.createElement("div",{className:"card-body"},p.a.createElement("div",{className:"col-lg-12 mt-3"},p.a.createElement(w,{onSubmit:function(t){return e.handlerSimpan(t)}})))))))}}]),n}(l.Component);O=Object(d.a)({form:"SaldoAwalCT",enableReinitialize:!0})(O);t.default=Object(m.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username}}),null)(O)},464:function(e,t,n){"use strict";n.r(t);var r=n(71),a=n(72),o=n(74),i=n(73),u=n(0),c=n.n(u),s=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),n}(u.Component);t.default=s},465:function(e,t,n){"use strict";var r=n(11),a=n.n(r),o=n(175),i=n.n(o),u=n(36),c=n.n(u),s=n(0),l=n.n(s),p=n(2),m=n.n(p),f=n(52),d=n.n(f),h=n(26),v=n.n(h),g=n(27),b=function(e,t,n,r){var o=t.value;return"checkbox"===e?a()({},t,{checked:!!o}):"radio"===e?a()({},t,{checked:r(o,n),value:n}):"select-multiple"===e?a()({},t,{value:o||[]}):"file"===e?a()({},t,{value:o||void 0}):t};var y=n(172),E=function(e,t){if(Object(y.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var n=e,r=n.target,a=r.type,o=r.value,i=r.checked,u=r.files,c=n.dataTransfer;return"checkbox"===a?!!i:"file"===a?u||c&&c.files:"select-multiple"===a?function(e){var t=[];if(e)for(var n=0;n<e.length;n++){var r=e[n];r.selected&&t.push(r.value)}return t}(e.target.options):o}return e},k="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,w=function(e,t){var n=t.name,r=t.parse,a=t.normalize,o=E(e,k);return r&&(o=r(o,n)),a&&(o=a(n,o)),o},O=n(10),S=n(76),F=function(e,t,n){return Object(S.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+n+"`.")},D=["_reduxForm"],C=function(e){return e&&"object"===typeof e},j=function(e){return e&&"function"===typeof e},x=function(e){C(e)&&j(e.preventDefault)&&e.preventDefault()},N=function(e,t){if(C(e)&&C(e.dataTransfer)&&j(e.dataTransfer.getData))return e.dataTransfer.getData(t)},B=function(e,t,n){C(e)&&C(e.dataTransfer)&&j(e.dataTransfer.setData)&&e.dataTransfer.setData(t,n)};var T=function(e){var t=e.deepEqual,n=e.getIn,r=function(n){function r(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))||this).ref=l.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var n=e.props,r=n.name,o=n.dispatch,i=n.parse,u=n.normalize,c=n.onChange,s=n._reduxForm,l=n.value,p=w(t,{name:r,parse:i,normalize:u}),m=!1;if(c)if(!k&&Object(y.a)(t))c(a()({},t,{preventDefault:function(){return m=!0,x(t)}}),p,l,r);else{var f=c(t,p,l,r);k&&(m=f)}m||(o(s.change(r,p)),s.asyncValidate&&s.asyncValidate(r,p,"change"))},e.handleFocus=function(t){var n=e.props,r=n.name,o=n.dispatch,i=n.onFocus,u=n._reduxForm,c=!1;i&&(k?c=i(t,r):i(a()({},t,{preventDefault:function(){return c=!0,x(t)}}),r)),c||o(u.focus(r))},e.handleBlur=function(t){var n=e.props,r=n.name,o=n.dispatch,i=n.parse,u=n.normalize,c=n.onBlur,s=n._reduxForm,l=n._value,p=n.value,m=w(t,{name:r,parse:i,normalize:u});m===l&&void 0!==l&&(m=p);var f=!1;c&&(k?f=c(t,m,p,r):c(a()({},t,{preventDefault:function(){return f=!0,x(t)}}),m,p,r)),f||(o(s.blur(r,m)),s.asyncValidate&&s.asyncValidate(r,m,"blur"))},e.handleDragStart=function(t){var n=e.props,r=n.name,a=n.onDragStart,o=n.value;B(t,"text",null==o?"":o),a&&a(t,r)},e.handleDrop=function(t){var n=e.props,r=n.name,o=n.dispatch,i=n.onDrop,u=n._reduxForm,c=n.value,s=N(t,"text"),l=!1;i&&i(a()({},t,{preventDefault:function(){return l=!0,x(t)}}),s,c,r),l||(o(u.change(r,s)),x(t))},e}c()(r,n);var o=r.prototype;return o.shouldComponentUpdate=function(e){var n=this,r=Object.keys(e),a=Object.keys(this.props);return!!(this.props.children||e.children||r.length!==a.length||r.some((function(r){return~(e.immutableProps||[]).indexOf(r)?n.props[r]!==e[r]:!~D.indexOf(r)&&!t(n.props[r],e[r])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,n=t.component,r=t.forwardRef,o=t.name,i=t._reduxForm,u=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,v()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),c=function(e,t,n){var r=e.getIn,o=e.toJS,i=e.deepEqual,u=n.asyncError,c=n.asyncValidating,s=n.onBlur,l=n.onChange,p=n.onDrop,m=n.onDragStart,f=n.dirty,d=n.dispatch,h=n.onFocus,g=n.form,y=n.format,E=n.initial,k=(n.parse,n.pristine),w=n.props,O=n.state,S=n.submitError,F=n.submitFailed,D=n.submitting,C=n.syncError,j=n.syncWarning,x=(n.validate,n.value),N=n._value,B=(n.warn,v()(n,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),T=C||u||S,_=j,R=function(e,n){if(null===n)return e;var r=null==e?"":e;return n?n(e,t):r}(x,y);return{input:b(B.type,{name:t,onBlur:s,onChange:l,onDragStart:m,onDrop:p,onFocus:h,value:R},N,i),meta:a()({},o(O),{active:!(!O||!r(O,"active")),asyncValidating:c,autofilled:!(!O||!r(O,"autofilled")),dirty:f,dispatch:d,error:T,form:g,initial:E,warning:_,invalid:!!T,pristine:k,submitting:!!D,submitFailed:!!F,touched:!(!O||!r(O,"touched")),valid:!T,visited:!(!O||!r(O,"visited"))}),custom:a()({},B,{},w)}}(e,o,a()({},u,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),l=c.custom,p=v()(c,["custom"]);if(r&&(l.ref=this.ref),"string"===typeof n){var m=p.input;p.meta;return Object(s.createElement)(n,a()({},m,{},l))}return Object(s.createElement)(n,a()({},p,{},l))},r}(s.Component);return r.propTypes={component:F,props:m.a.object},Object(g.b)((function(e,r){var a=r.name,o=r._reduxForm,i=o.initialValues,u=(0,o.getFormState)(e),c=n(u,"initial."+a),s=void 0!==c?c:i&&n(i,a),l=n(u,"values."+a),p=n(u,"submitting"),m=function(e,t){var n=O.a.getIn(e,t);return n&&n._error?n._error:n}(n(u,"syncErrors"),a),f=function(e,t){var r=n(e,t);return r&&r._warning?r._warning:r}(n(u,"syncWarnings"),a),d=t(l,s);return{asyncError:n(u,"asyncErrors."+a),asyncValidating:n(u,"asyncValidating")===a,dirty:!d,pristine:d,state:n(u,"fields."+a),submitError:n(u,"submitErrors."+a),submitFailed:n(u,"submitFailed"),submitting:p,syncError:m,syncWarning:f,initial:s,value:l,_value:r.value}}),void 0,void 0,{forwardRef:!0})(r)},_=n(176),R=n.n(_),A=function(e,t,n,r,a,o){if(o)return e===t},P=function(e,t,n){var r=R()(e.props,t,A),a=R()(e.state,n,A);return!r||!a},z=function(e,t){var n=e._reduxForm.sectionPrefix;return n?n+"."+t:t},I=n(106);var V=function(e){var t=T(e),n=e.setIn,r=function(e){function r(t){var r;if((r=e.call(this,t)||this).ref=l.a.createRef(),r.normalize=function(e,t){var a=r.props.normalize;if(!a)return t;var o=r.props._reduxForm.getValues();return a(t,r.value,n(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return r}c()(r,e);var o=r.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return P(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=z(this.props,this.props.name),n=z(e,e.name);t===n&&O.a.deepEqual(this.props.validate,e.validate)&&O.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(n,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return d()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(s.createElement)(t,a()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(r,[{key:"name",get:function(){return z(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),r}(s.Component);return r.propTypes={name:m.a.string.isRequired,component:F,format:m.a.func,normalize:m.a.func,onBlur:m.a.func,onChange:m.a.func,onFocus:m.a.func,onDragStart:m.a.func,onDrop:m.a.func,parse:m.a.func,props:m.a.object,validate:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),warn:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),forwardRef:m.a.bool,immutableProps:m.a.arrayOf(m.a.string),_reduxForm:m.a.object},Object(I.b)(r)};t.a=V(O.a)},466:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(51),a=n.n(r),o=n(5),i=function(e){return new Promise((function(t,n){a.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return n("Gagal")}))}))},u=function(e){return new Promise((function(t,n){a.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return n("Gagal")}))}))},c=function(e){return new Promise((function(t,n){a.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(e){return n(e)}))}))},s=function(e,t,n,r){return new Promise((function(i,c){a.a.fire({title:"Oopps..",text:e.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(e){e.isConfirmed&&Object(o.d)(n+t,r).then((function(){return u("Data Berhasil Dikembalikan")})).then((function(){return i("Berhasil")})).catch((function(e){return c("Gagal")}))}))}))},l=function(e,t,n){var r=(new Date).toLocaleDateString(),a=JSON.parse(localStorage.getItem("LogWebsite"))||[],o={tanggal:r,keterangan:e,data:t,error:n};a.push(o),localStorage.setItem("LogWebsite",JSON.stringify(a))}},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r),o=n(178),i=function(e){var t=e.input,n=e.label,r=e.type,o=e.limit,i=e.readOnly,u=e.meta,c=u.touched,s=u.error,l=u.warning;return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"",className:"text-black"},n),a.a.createElement("input",Object.assign({},t,{type:r,className:"form-control",maxLength:o,readOnly:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),c&&(s&&a.a.createElement("p",{className:"invalid-feedback"},s)||l&&a.a.createElement("p",null,l)))},u=function(e){var t=e.input,n=e.label,r=e.options,i=(e.placeholder,e.disabled),u=(e.value,e.meta),c=u.touched,s=u.error,l=u.warning;return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"",className:"text-black"},n),a.a.createElement(o.a,Object.assign({},t,{options:r,search:!0,emptyMessage:"Tidak Ada Data",placeholder:"Silahkan Pilih",disabled:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),c&&(s&&a.a.createElement("p",{className:"invalid-feedback"},s)||l&&a.a.createElement("p",null,l)))}}}]);
//# sourceMappingURL=75.81c67c1d.chunk.js.map