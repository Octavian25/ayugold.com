(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[112],{1142:function(t,e,a){"use strict";a.r(e);var n=a(71),r=a(72),o=a(74),i=a(73),c=a(0),s=a.n(c),l=a(470),u=a.n(l),d=a(471),m=a.n(d),p=a(174),f=a.n(p),h=a(465),g=a(458),v=a(27),b=a(468),y=a.n(b),k=a(496),E=a.n(k),S=a(45),F=a.n(S),w=a(466),B=a(84),x=d.Search.SearchBar,O=function(t){var e=t.input,a=t.label,n=t.type,r=t.limit,o=t.readOnly,i=t.meta,c=i.touched,l=i.error,u=i.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},a),s.a.createElement("input",Object.assign({},e,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),c&&(l&&s.a.createElement("p",{className:"invalid-feedback"},l)||u&&s.a.createElement("p",null,u)))},D="http://157.245.145.87:9013/",N=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).from=t.match.params.from,r.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Aktor"},{dataField:"ke",text:"Ke"},{dataField:"bruto",text:"Bruto"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e){return s.a.createElement("div",null,s.a.createElement("button",{className:"btn btn-warning",onClick:function(){return r.simpanEditBarang(e.noFaktur)}},s.a.createElement("i",{className:"fa fa-edit mr-3"}),"EDIT"))}}],listPindahBarang:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=this;switch(this.from){case"pindahBarang":F.a.get(D+"item/dc/pindahbarang/heads?statusValid=OPEN").then((function(e){return t.setState({listPindahBarang:e.data})})).catch((function(t){return console.log(t)}));break;case"terimaSupplier":F.a.get(D+"spp/dc/trm/details?tglFrom=2020-12-01&tglTo=2021-01-30&statusValid=OPEN").then((function(e){return t.setState({listPindahBarang:e.data})})).catch((function(t){return console.log(t)}));break;case"transaksiPenjualan":F.a.get(D+"cst/dc/pjl/heads?statusValid=OPEN").then((function(e){return t.setState({listPindahBarang:e.data})})).catch((function(t){return console.log(t)}));break;case"returnSupplier":F.a.get(D+"spp/dc/rtr/details",{params:{tglFrom:"2020-01-01",tglTo:"2022-01-01",statusValid:"OPEN"}}).then((function(e){return t.setState({listPindahBarang:e.data})})).catch((function(t){return console.log(t)}))}}},{key:"simpanEditBarang",value:function(t){var e=this;switch(this.from){case"pindahBarang":F.a.get(D+"item/dc/pindahbarang/detail?noFaktur="+t).then((function(t){return e.tambahLocal(t)})).then((function(t){return Object(w.b)("Berhasil")})).then((function(){return window.history.back()})).catch((function(){return Object(w.c)("Ambil Data Gagal, Mohon Periksa Koneksi Anda")}));break;case"transaksiPenjualan":F.a.get(D+"cst/dc/pjl/details?noFaktur="+t).then((function(t){return e.tambahLocal(t)})).then((function(){return Object(w.b)("Berhasil")})).then((function(){return window.history.back()})).catch((function(){return Object(w.c)("Ambil data Gagal, Mohon Periksa Koneksi Anda")}));break;case"terimaSupplier":F.a.get(D+"spp/dc/trm/detail?noFaktur="+t).then((function(t){return e.tambahLocal(t)})).then((function(){return Object(w.b)("Berhasil")})).then((function(){return window.history.back()})).catch((function(){return Object(w.c)("Ambil data Gagal, Mohon Periksa Koneksi Anda")}));break;case"returnSupplier":F.a.get(D+"spp/dc/rtr/detail?noFaktur="+t).then((function(t){return e.tambahLocal(t)})).then((function(){return Object(w.b)("Berhasil")})).then((function(){return window.history.back()})).catch((function(){return Object(w.c)("Ambil data Gagal, Mohon Periksa Koneksi Anda")}))}}},{key:"tambahLocal",value:function(t){switch(this.from){case"pindahBarang":localStorage.setItem("pindahBarang",JSON.stringify(t.data.barangDetails)),localStorage.setItem("editPindahBarang",JSON.stringify(t.data)),localStorage.setItem("noFaktur",t.data.noFaktur),this.props.dispatch(Object(B.e)());break;case"terimaSupplier":localStorage.setItem("TerimaSupplier",JSON.stringify(t.data.barangDetails)),localStorage.setItem("noFaktur",t.data.noFaktur),localStorage.setItem("tanggalBarang",t.data.tanggalBarang),localStorage.setItem("tanggal",t.data.tanggal),localStorage.setItem("totalNW",t.data.footerItem.totalNettoExt),localStorage.setItem("kodeSupplier",t.data.kodeSupplier),localStorage.setItem("noBon",t.data.noBon),this.props.dispatch(Object(B.e)());break;case"transaksiPenjualan":localStorage.setItem("transaksiPenjualan",JSON.stringify(t.data.barangDetails)),localStorage.setItem("noFaktur",t.data.noFaktur),localStorage.setItem("noBon",t.data.noBon),localStorage.setItem("lokasi",t.data.kodeLokasi),localStorage.setItem("namaToko",t.data.namaToko),localStorage.setItem("kodeSales",t.data.kodeSales),localStorage.setItem("kodeCustomer",t.data.kodeCustomer),localStorage.setItem("tanggal",t.data.tanggal),localStorage.setItem("discPr",t.data.headDiscount.discPr),localStorage.setItem("discGr",t.data.headDiscount.discGr),localStorage.setItem("totalNettoExt",t.data.headDiscount.totalNettoExt);break;case"returnSupplier":localStorage.setItem("ReturnSupplier",JSON.stringify(t.data.barangDetails)),localStorage.setItem("noBon",t.data.noBon)}}},{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return window.history.back()}},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back")),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"col-lg-12 mb-3"},s.a.createElement("h1",null,"Pilih Data Edit")),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(h.a,{name:"tanggal",label:"Tanggal",type:"date",component:O})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(h.a,{name:"dari",label:"Dari",type:"text",component:O})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(h.a,{name:"ke",label:"Ke",type:"text",component:O})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(h.a,{name:"noBon",label:"Nomor Bon",type:"text",component:O})),s.a.createElement("div",{className:"col-lg-12"},this.state.listPindahBarang?s.a.createElement(m.a,{keyField:"id",data:this.state.listPindahBarang,columns:this.state.columns,search:!0},(function(t){return s.a.createElement("div",{className:"text-left mb-3"},s.a.createElement("div",{className:"text-right"},s.a.createElement(x,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),s.a.createElement("hr",null),s.a.createElement(y.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:u()()})))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:E.a,style:{width:"30%"},alt:"Not Respond"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(f.a,{width:"100%",height:250}))))))))}}]),a}(c.Component);N=Object(g.a)({form:"EditForm",enableReinitialize:!0})(N),e.default=Object(v.b)()(N)},465:function(t,e,a){"use strict";var n=a(11),r=a.n(n),o=a(176),i=a.n(o),c=a(36),s=a.n(c),l=a(0),u=a.n(l),d=a(2),m=a.n(d),p=a(52),f=a.n(p),h=a(26),g=a.n(h),v=a(27),b=function(t,e,a,n){var o=e.value;return"checkbox"===t?r()({},e,{checked:!!o}):"radio"===t?r()({},e,{checked:n(o,a),value:a}):"select-multiple"===t?r()({},e,{value:o||[]}):"file"===t?r()({},e,{value:o||void 0}):e};var y=a(173),k=function(t,e){if(Object(y.a)(t)){if(!e&&t.nativeEvent&&void 0!==t.nativeEvent.text)return t.nativeEvent.text;if(e&&void 0!==t.nativeEvent)return t.nativeEvent.text;var a=t,n=a.target,r=n.type,o=n.value,i=n.checked,c=n.files,s=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?c||s&&s.files:"select-multiple"===r?function(t){var e=[];if(t)for(var a=0;a<t.length;a++){var n=t[a];n.selected&&e.push(n.value)}return e}(t.target.options):o}return t},E="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,S=function(t,e){var a=e.name,n=e.parse,r=e.normalize,o=k(t,E);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},F=a(10),w=a(76),B=function(t,e,a){return Object(w.isValidElementType)(t[e])?null:new Error("Invalid prop `"+e+"` supplied to `"+a+"`.")},x=["_reduxForm"],O=function(t){return t&&"object"===typeof t},D=function(t){return t&&"function"===typeof t},N=function(t){O(t)&&D(t.preventDefault)&&t.preventDefault()},j=function(t,e){if(O(t)&&O(t.dataTransfer)&&D(t.dataTransfer.getData))return t.dataTransfer.getData(e)},P=function(t,e,a){O(t)&&O(t.dataTransfer)&&D(t.dataTransfer.setData)&&t.dataTransfer.setData(e,a)};var I=function(t){var e=t.deepEqual,a=t.getIn,n=function(a){function n(){for(var t,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(t=a.call.apply(a,[this].concat(n))||this).ref=u.a.createRef(),t.isPristine=function(){return t.props.pristine},t.getValue=function(){return t.props.value},t.handleChange=function(e){var a=t.props,n=a.name,o=a.dispatch,i=a.parse,c=a.normalize,s=a.onChange,l=a._reduxForm,u=a.value,d=S(e,{name:n,parse:i,normalize:c}),m=!1;if(s)if(!E&&Object(y.a)(e))s(r()({},e,{preventDefault:function(){return m=!0,N(e)}}),d,u,n);else{var p=s(e,d,u,n);E&&(m=p)}m||(o(l.change(n,d)),l.asyncValidate&&l.asyncValidate(n,d,"change"))},t.handleFocus=function(e){var a=t.props,n=a.name,o=a.dispatch,i=a.onFocus,c=a._reduxForm,s=!1;i&&(E?s=i(e,n):i(r()({},e,{preventDefault:function(){return s=!0,N(e)}}),n)),s||o(c.focus(n))},t.handleBlur=function(e){var a=t.props,n=a.name,o=a.dispatch,i=a.parse,c=a.normalize,s=a.onBlur,l=a._reduxForm,u=a._value,d=a.value,m=S(e,{name:n,parse:i,normalize:c});m===u&&void 0!==u&&(m=d);var p=!1;s&&(E?p=s(e,m,d,n):s(r()({},e,{preventDefault:function(){return p=!0,N(e)}}),m,d,n)),p||(o(l.blur(n,m)),l.asyncValidate&&l.asyncValidate(n,m,"blur"))},t.handleDragStart=function(e){var a=t.props,n=a.name,r=a.onDragStart,o=a.value;P(e,"text",null==o?"":o),r&&r(e,n)},t.handleDrop=function(e){var a=t.props,n=a.name,o=a.dispatch,i=a.onDrop,c=a._reduxForm,s=a.value,l=j(e,"text"),u=!1;i&&i(r()({},e,{preventDefault:function(){return u=!0,N(e)}}),l,s,n),u||(o(c.change(n,l)),N(e))},t}s()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(t){var a=this,n=Object.keys(t),r=Object.keys(this.props);return!!(this.props.children||t.children||n.length!==r.length||n.some((function(n){return~(t.immutableProps||[]).indexOf(n)?a.props[n]!==t[n]:!~x.indexOf(n)&&!e(a.props[n],t[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var e=this.props,a=e.component,n=e.forwardRef,o=e.name,i=e._reduxForm,c=(e.normalize,e.onBlur,e.onChange,e.onFocus,e.onDragStart,e.onDrop,e.immutableProps,g()(e,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),s=function(t,e,a){var n=t.getIn,o=t.toJS,i=t.deepEqual,c=a.asyncError,s=a.asyncValidating,l=a.onBlur,u=a.onChange,d=a.onDrop,m=a.onDragStart,p=a.dirty,f=a.dispatch,h=a.onFocus,v=a.form,y=a.format,k=a.initial,E=(a.parse,a.pristine),S=a.props,F=a.state,w=a.submitError,B=a.submitFailed,x=a.submitting,O=a.syncError,D=a.syncWarning,N=(a.validate,a.value),j=a._value,P=(a.warn,g()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),I=O||c||w,C=D,_=function(t,a){if(null===a)return t;var n=null==t?"":t;return a?a(t,e):n}(N,y);return{input:b(P.type,{name:e,onBlur:l,onChange:u,onDragStart:m,onDrop:d,onFocus:h,value:_},j,i),meta:r()({},o(F),{active:!(!F||!n(F,"active")),asyncValidating:s,autofilled:!(!F||!n(F,"autofilled")),dirty:p,dispatch:f,error:I,form:v,initial:k,warning:C,invalid:!!I,pristine:E,submitting:!!x,submitFailed:!!B,touched:!(!F||!n(F,"touched")),valid:!I,visited:!(!F||!n(F,"visited"))}),custom:r()({},P,{},S)}}(t,o,r()({},c,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=s.custom,d=g()(s,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof a){var m=d.input;d.meta;return Object(l.createElement)(a,r()({},m,{},u))}return Object(l.createElement)(a,r()({},d,{},u))},n}(l.Component);return n.propTypes={component:B,props:m.a.object},Object(v.b)((function(t,n){var r=n.name,o=n._reduxForm,i=o.initialValues,c=(0,o.getFormState)(t),s=a(c,"initial."+r),l=void 0!==s?s:i&&a(i,r),u=a(c,"values."+r),d=a(c,"submitting"),m=function(t,e){var a=F.a.getIn(t,e);return a&&a._error?a._error:a}(a(c,"syncErrors"),r),p=function(t,e){var n=a(t,e);return n&&n._warning?n._warning:n}(a(c,"syncWarnings"),r),f=e(u,l);return{asyncError:a(c,"asyncErrors."+r),asyncValidating:a(c,"asyncValidating")===r,dirty:!f,pristine:f,state:a(c,"fields."+r),submitError:a(c,"submitErrors."+r),submitFailed:a(c,"submitFailed"),submitting:d,syncError:m,syncWarning:p,initial:l,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},C=a(177),_=a.n(C),R=function(t,e,a,n,r,o){if(o)return t===e},T=function(t,e,a){var n=_()(t.props,e,R),r=_()(t.state,a,R);return!n||!r},A=function(t,e){var a=t._reduxForm.sectionPrefix;return a?a+"."+e:e},V=a(107);var z=function(t){var e=I(t),a=t.setIn,n=function(t){function n(e){var n;if((n=t.call(this,e)||this).ref=u.a.createRef(),n.normalize=function(t,e){var r=n.props.normalize;if(!r)return e;var o=n.props._reduxForm.getValues();return r(e,n.value,a(o,t,e),o,t)},!e._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}s()(n,t);var o=n.prototype;return o.componentDidMount=function(){var t=this;this.props._reduxForm.register(this.name,"Field",(function(){return t.props.validate}),(function(){return t.props.warn}))},o.shouldComponentUpdate=function(t,e){return T(this,t,e)},o.UNSAFE_componentWillReceiveProps=function(t){var e=A(this.props,this.props.name),a=A(t,t.name);e===a&&F.a.deepEqual(this.props.validate,t.validate)&&F.a.deepEqual(this.props.warn,t.warn)||(this.props._reduxForm.unregister(e),this.props._reduxForm.register(a,"Field",(function(){return t.validate}),(function(){return t.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(l.createElement)(e,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return A(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(l.Component);return n.propTypes={name:m.a.string.isRequired,component:B,format:m.a.func,normalize:m.a.func,onBlur:m.a.func,onChange:m.a.func,onFocus:m.a.func,onDragStart:m.a.func,onDrop:m.a.func,parse:m.a.func,props:m.a.object,validate:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),warn:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),forwardRef:m.a.bool,immutableProps:m.a.arrayOf(m.a.string),_reduxForm:m.a.object},Object(V.b)(n)};e.a=z(F.a)},466:function(t,e,a){"use strict";a.d(e,"e",(function(){return i})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return u}));var n=a(51),r=a.n(n),o=a(5),i=function(t){return new Promise((function(e,a){r.a.fire({position:"top-right",icon:"warning",text:t,timer:2500,showConfirmButton:!1}).then((function(){return e("Berhasil")})).catch((function(){return a("Gagal")}))}))},c=function(t){return new Promise((function(e,a){r.a.fire({position:"top-right",icon:"success",text:t,timer:2500,showConfirmButton:!1}).then((function(){return e("Berhasil")})).catch((function(){return a("Gagal")}))}))},s=function(t){return new Promise((function(e,a){r.a.fire({position:"top-right",icon:"error",text:t,timer:2500,showConfirmButton:!1}).then((function(){return e("Berhasil")})).catch((function(t){return a(t)}))}))},l=function(t,e,a,n){return new Promise((function(i,s){r.a.fire({title:"Oopps..",text:t.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(t){t.isConfirmed&&Object(o.d)(a+e,n).then((function(){return c("Data Berhasil Dikembalikan")})).then((function(){return i("Berhasil")})).catch((function(t){return s("Gagal")}))}))}))},u=function(t,e,a){var n=(new Date).toLocaleDateString(),r=JSON.parse(localStorage.getItem("LogWebsite"))||[],o={tanggal:n,keterangan:t,data:e,error:a};r.push(o),localStorage.setItem("LogWebsite",JSON.stringify(r))}},496:function(t,e,a){t.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=112.b756f280.chunk.js.map