(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[61],{1088:function(e,a,t){"use strict";t.r(a);var n=t(90),r=t(39),i=t(40),o=t(42),s=t(41),l=t(0),c=t.n(l),u=t(303),m=t.n(u),d=t(304),p=t.n(d),f=t(305),g=t.n(f),h=t(88),v=t.n(h),b=t(19),y=t(351),k=t(294),E=t(312),F=t(43),B=t.n(F),D=t(142),N=function(e){var a={};return e.kodeBarang||(a.kodeBarang="Tidak Boleh kosong"),a},S=t(94),T=t(3),x=t.n(T),O=t(298),w=t(301),j=t(375),C=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,i=e.readOnly,o=e.meta,s=o.touched,l=o.error,u=o.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:i})),s&&(l&&c.a.createElement("p",{className:"invalid-feedback"},l)||u&&c.a.createElement("p",null,u)))},_=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).pilihBarang=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");n.setState({kodeJenis:a[0],namaJenis:a[1],kadarCetak:a[2],kadarJual:a[3]})}},n.onclick1=n.onclick1.bind(Object(S.a)(n)),n.state={kodeBarang:[],DataSupplier:[],status:""},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://157.245.145.87:9011/master/subcategorys").then((function(a){return e.setState({kodeBarang:a.data})})).catch((function(e){return console.log(e)}))}},{key:"onclick1",value:function(){this.props.change("murni",this.props.murni)}},{key:"setKadar",value:function(){this.props.change("keterangan",this.state.namaJenis),this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarJual",this.state.kadarJual),this.props.change("revaluasi",this.props.revaluasi)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("label",{htmlFor:""},"Kode Barang"),c.a.createElement(O.a,{name:"kodeBarang",component:"select",className:"form-control",onChange:this.pilihBarang(),onBlur:this.setKadar()},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.kodeBarang===[]?c.a.createElement("option",null,"TIDAK ADA DATA"):this.state.kodeBarang.map((function(e){return c.a.createElement("option",{value:e.kodeJenis+"|"+e.namaJenis+"|"+e.kadarCetak+"|"+e.kadarJual,key:e.kodeJenis},e.namaJenis)})))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement(O.a,{name:"keterangan",label:"Keterangan",type:"text",component:C,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(O.a,{name:"kadar",label:"Kadar (%)",type:"number",component:C})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(O.a,{name:"pkg",label:"Bungkus (Gr)",type:"number",component:C})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(O.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:C,onBlur:function(){return e.props.change("murni",e.props.murni)}})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(O.a,{name:"kadarJual",label:"Harga Jual",type:"number",component:C})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(O.a,{name:"revaluasi",label:"Revaluasi",type:"number",component:C})),c.a.createElement("div",{className:"col-md-12 form-group mt-3"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan")))))}}]),t}(l.Component);_=Object(E.a)({form:"FormTransaksiTimbangbarang",validate:j.a,enableReinitialize:!0})(_);var A=Object(w.a)("FormTransaksiTimbangbarang"),J=Object(b.b)((function(e){var a=A(e,"bruto","kadarJual"),t=a.bruto,n=a.kadarJual;return{revaluasi:(parseFloat(t)*(parseFloat(n)/100)).toFixed(3)}}))(_),R=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var i;return Object(r.a)(this,t),(i=a.call(this,e)).inputChange=function(e){return function(a){i.setState(Object(n.a)({},e,a.target.value))}},i.state={columns:[{dataField:"kodeBarang",text:"Kode Barang"},{dataField:"keterangan",text:"Keterangan"},{dataField:"kadar",text:"Kadar(%)"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"kadarJual",text:"Harga(%)"},{dataField:"revaluasi",text:"Netto(Gr)",footerClasses:"sum-netto-terima-supplier"}]},i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(D.b)())}},{key:"handleSubmit",value:function(e){var a=(e.kodeBarang?e.kodeBarang:"DEFUALT|DEFAULT|DEFAULT|DEFAULT").split("|"),t={bruto:e.bruto,kadar:e.kadar,kadarJual:e.kadarJual,keterangan:a[1],kodeBarang:a[0],pkg:e.pkg,revaluasi:e.revaluasi},n=JSON.parse(localStorage.getItem("timbangBarang"))||[];n.push(t),localStorage.setItem("timbangBarang",JSON.stringify(n)),B.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.dispatch(Object(D.b)()),document.getElementById("dismissModal").click(),this.props.dispatch(Object(k.a)("FormTransaksiTimbangbarang"))}},{key:"timbangBarangSubmit",value:function(){var e={tanggal:this.state.tanggal,namaToko:this.state.namaToko,detail:this.state.detail,barang:JSON.parse(localStorage.getItem("timbangBarang"))};console.log(e)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{name:"tanggal",id:"tanggal",type:"date",className:"form-control",onChange:this.inputChange("tanggal")})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Nama Toko"),c.a.createElement(y.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Detail"),c.a.createElement("input",{name:"detail",id:"detail",type:"text",className:"form-control",onChange:this.inputChange("detail")})),c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary mr-3",onClick:function(){return e.timbangBarangSubmit()}},"Simpan",c.a.createElement("i",{class:"fa fa-paper-plane ml-2","aria-hidden":"true"})))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary","data-target":"#primary-header-modal","data-toggle":"modal"},"Tambah Data",c.a.createElement("i",{class:"fa fa-plus ml-2","aria-hidden":"true"})))))),c.a.createElement("div",{className:"col-lg-12 mt-5"},this.props.timbangBarang?c.a.createElement(g.a,{keyField:"id",data:this.props.timbangBarang,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement(m.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:p()()})))})):c.a.createElement(v.a,{width:"100%",height:100})))))),c.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Transaksi Timbang Barang"),c.a.createElement("button",{type:"button",id:"dismissModal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(J,{onSubmit:function(a){return e.handleSubmit(a)}}))))))}}]),t}(l.Component);R=Object(E.a)({form:"TransaksiTimbangBarang",enableReinitialize:!0,validate:N})(R);a.default=Object(b.b)((function(e){return{timbangBarang:e.provinsi.timbangBarang}}),null)(R)},294:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(342),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},298:function(e,a,t){"use strict";var n=t(33),r=t.n(n),i=t(337),o=t.n(i),s=t(156),l=t.n(s),c=t(0),u=t.n(c),m=t(27),d=t.n(m),p=t(302),f=t.n(p),g=t(60),h=t.n(g),v=t(19),b=function(e,a,t,n){var i=a.value;return"checkbox"===e?r()({},a,{checked:!!i}):"radio"===e?r()({},a,{checked:n(i,t),value:t}):"select-multiple"===e?r()({},a,{value:i||[]}):"file"===e?r()({},a,{value:i||void 0}):a};var y=t(299),k=function(e,a){if(Object(y.a)(e)){if(!a&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(a&&void 0!==e.nativeEvent)return e.nativeEvent.text;var t=e,n=t.target,r=n.type,i=n.value,o=n.checked,s=n.files,l=t.dataTransfer;return"checkbox"===r?!!o:"file"===r?s||l&&l.files:"select-multiple"===r?function(e){var a=[];if(e)for(var t=0;t<e.length;t++){var n=e[t];n.selected&&a.push(n.value)}return a}(e.target.options):i}return e},E="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,a){var t=a.name,n=a.parse,r=a.normalize,i=k(e,E);return n&&(i=n(i,t)),r&&(i=r(t,i)),i},B=t(12),D=t(44),N=function(e,a,t){return Object(D.isValidElementType)(e[a])?null:new Error("Invalid prop `"+a+"` supplied to `"+t+"`.")},S=["_reduxForm"],T=function(e){return e&&"object"===typeof e},x=function(e){return e&&"function"===typeof e},O=function(e){T(e)&&x(e.preventDefault)&&e.preventDefault()},w=function(e,a){if(T(e)&&T(e.dataTransfer)&&x(e.dataTransfer.getData))return e.dataTransfer.getData(a)},j=function(e,a,t){T(e)&&T(e.dataTransfer)&&x(e.dataTransfer.setData)&&e.dataTransfer.setData(a,t)};var C=function(e){var a=e.deepEqual,t=e.getIn,n=function(t){function n(){for(var e,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(a){var t=e.props,n=t.name,i=t.dispatch,o=t.parse,s=t.normalize,l=t.onChange,c=t._reduxForm,u=t.value,m=F(a,{name:n,parse:o,normalize:s}),d=!1;if(l)if(!E&&Object(y.a)(a))l(r()({},a,{preventDefault:function(){return d=!0,O(a)}}),m,u,n);else{var p=l(a,m,u,n);E&&(d=p)}d||(i(c.change(n,m)),c.asyncValidate&&c.asyncValidate(n,m,"change"))},e.handleFocus=function(a){var t=e.props,n=t.name,i=t.dispatch,o=t.onFocus,s=t._reduxForm,l=!1;o&&(E?l=o(a,n):o(r()({},a,{preventDefault:function(){return l=!0,O(a)}}),n)),l||i(s.focus(n))},e.handleBlur=function(a){var t=e.props,n=t.name,i=t.dispatch,o=t.parse,s=t.normalize,l=t.onBlur,c=t._reduxForm,u=t._value,m=t.value,d=F(a,{name:n,parse:o,normalize:s});d===u&&void 0!==u&&(d=m);var p=!1;l&&(E?p=l(a,d,m,n):l(r()({},a,{preventDefault:function(){return p=!0,O(a)}}),d,m,n)),p||(i(c.blur(n,d)),c.asyncValidate&&c.asyncValidate(n,d,"blur"))},e.handleDragStart=function(a){var t=e.props,n=t.name,r=t.onDragStart,i=t.value;j(a,"text",null==i?"":i),r&&r(a,n)},e.handleDrop=function(a){var t=e.props,n=t.name,i=t.dispatch,o=t.onDrop,s=t._reduxForm,l=t.value,c=w(a,"text"),u=!1;o&&o(r()({},a,{preventDefault:function(){return u=!0,O(a)}}),c,l,n),u||(i(s.change(n,c)),O(a))},e}l()(n,t);var i=n.prototype;return i.shouldComponentUpdate=function(e){var t=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?t.props[n]!==e[n]:!~S.indexOf(n)&&!a(t.props[n],e[n])})))},i.getRenderedComponent=function(){return this.ref.current},i.render=function(){var a=this.props,t=a.component,n=a.forwardRef,i=a.name,o=a._reduxForm,s=(a.normalize,a.onBlur,a.onChange,a.onFocus,a.onDragStart,a.onDrop,a.immutableProps,h()(a,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),l=function(e,a,t){var n=e.getIn,i=e.toJS,o=e.deepEqual,s=t.asyncError,l=t.asyncValidating,c=t.onBlur,u=t.onChange,m=t.onDrop,d=t.onDragStart,p=t.dirty,f=t.dispatch,g=t.onFocus,v=t.form,y=t.format,k=t.initial,E=(t.parse,t.pristine),F=t.props,B=t.state,D=t.submitError,N=t.submitFailed,S=t.submitting,T=t.syncError,x=t.syncWarning,O=(t.validate,t.value),w=t._value,j=(t.warn,h()(t,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),C=T||s||D,_=x,A=function(e,t){if(null===t)return e;var n=null==e?"":e;return t?t(e,a):n}(O,y);return{input:b(j.type,{name:a,onBlur:c,onChange:u,onDragStart:d,onDrop:m,onFocus:g,value:A},w,o),meta:r()({},i(B),{active:!(!B||!n(B,"active")),asyncValidating:l,autofilled:!(!B||!n(B,"autofilled")),dirty:p,dispatch:f,error:C,form:v,initial:k,warning:_,invalid:!!C,pristine:E,submitting:!!S,submitFailed:!!N,touched:!(!B||!n(B,"touched")),valid:!C,visited:!(!B||!n(B,"visited"))}),custom:r()({},j,{},F)}}(e,i,r()({},s,{form:o.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=l.custom,m=h()(l,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof t){var d=m.input;m.meta;return Object(c.createElement)(t,r()({},d,{},u))}return Object(c.createElement)(t,r()({},m,{},u))},n}(c.Component);return n.propTypes={component:N,props:d.a.object},Object(v.b)((function(e,n){var r=n.name,i=n._reduxForm,o=i.initialValues,s=(0,i.getFormState)(e),l=t(s,"initial."+r),c=void 0!==l?l:o&&t(o,r),u=t(s,"values."+r),m=t(s,"submitting"),d=function(e,a){var t=B.a.getIn(e,a);return t&&t._error?t._error:t}(t(s,"syncErrors"),r),p=function(e,a){var n=t(e,a);return n&&n._warning?n._warning:n}(t(s,"syncWarnings"),r),f=a(u,c);return{asyncError:t(s,"asyncErrors."+r),asyncValidating:t(s,"asyncValidating")===r,dirty:!f,pristine:f,state:t(s,"fields."+r),submitError:t(s,"submitErrors."+r),submitFailed:t(s,"submitFailed"),submitting:m,syncError:d,syncWarning:p,initial:c,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},_=t(89),A=t.n(_),J=function(e,a,t,n,r,i){if(i)return e===a},R=function(e,a,t){var n=A()(e.props,a,J),r=A()(e.state,t,J);return!n||!r},I=function(e,a){var t=e._reduxForm.sectionPrefix;return t?t+"."+a:a},z=t(297);var U=function(e){var a=C(e),t=e.setIn,n=function(e){function n(a){var n;if((n=e.call(this,a)||this).ref=u.a.createRef(),n.normalize=function(e,a){var r=n.props.normalize;if(!r)return a;var i=n.props._reduxForm.getValues();return r(a,n.value,t(i,e,a),i,e)},!a._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}l()(n,e);var i=n.prototype;return i.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},i.shouldComponentUpdate=function(e,a){return R(this,e,a)},i.UNSAFE_componentWillReceiveProps=function(e){var a=I(this.props,this.props.name),t=I(e,e.name);a===t&&B.a.deepEqual(this.props.validate,e.validate)&&B.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(a),this.props._reduxForm.register(t,"Field",(function(){return e.validate}),(function(){return e.warn})))},i.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},i.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},i.render=function(){return Object(c.createElement)(a,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},o()(n,[{key:"name",get:function(){return I(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(c.Component);return n.propTypes={name:d.a.string.isRequired,component:N,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(z.b)(n)};a.a=U(B.a)},301:function(e,a,t){"use strict";var n=t(302),r=t.n(n),i=t(12);a.a=function(e){var a=e.getIn;return function(e,t){r()(e,"Form value must be specified");var n=t||function(e){return a(e,"form")};return function(t){for(var o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];return r()(s.length,"No fields specified"),1===s.length?a(n(t),e+".values."+s[0]):s.reduce((function(r,o){var s=a(n(t),e+".values."+o);return void 0===s?r:i.a.setIn(r,o,s)}),{})}}}(i.a)},375:function(e,a,t){"use strict";a.a=function(e){var a={};return e.kodeBarang||(a.kodeBarang="Tidak Boleh kosong, silahkan isi"),e.pkg||(a.pkg="Tidak Boleh kosong, silahkan isi"),e.p||(a.p="Tidak Boleh kosong, silahkan isi"),e.k||(a.k="Tidak Boleh kosong, silahkan isi"),e.bruto||(a.bruto="Tidak Boleh kosong, silahkan isi"),a}}}]);
//# sourceMappingURL=61.c35bd723.chunk.js.map