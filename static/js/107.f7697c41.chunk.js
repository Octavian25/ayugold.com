(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[107,174],{1176:function(e,t,a){"use strict";a.r(t);var n=a(77),r=a(71),i=a(72),o=a(74),s=a(73),c=a(0),l=a.n(c),u=a(466),p=a(459),d=a(28),m=a(525),f=a.n(m),h=a(468),g=a.n(h),v=a(471),b=a.n(v),k=a(470),E=a.n(k),y=a(56),F=a(43),O=a(46),S=a.n(O),j=a(174),D=a(268),T=a.n(D),N=a(465),x=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,i=e.readOnly,o=e.meta,s=o.touched,c=o.error,u=o.warning;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},a),l.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:i})),s&&(c&&l.a.createElement("p",{className:"invalid-feedback"},c)||u&&l.a.createElement("p",null,u)))},B="http://157.245.145.87:9013/",w=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).disabledButton=function(e){e.target.disabled=!0},i.changeTransaksi=function(e){return function(t){switch(i.setState(Object(n.a)({},e,t.target.value)),t.target.value){case"Pindah Barang":i.props.dispatch(Object(y.i)());break;case"MuatasiBarang":i.props.dispatch(Object(y.g)());break;case"MutasiJenisLK":i.props.dispatch(Object(y.h)());break;case"Kirim Masak":i.props.dispatch(Object(y.f)());break;case"Terima Masak":i.props.dispatch(Object(y.j)());break;default:console.log("ERROR")}}},i.nextStep=function(){var e=i.state.step;0===e&&i.setState({step:e+1,step2:"row",step1:"row d-none"}),i.props.dispatch(Object(F.h)())},i.prevStep=function(){var e=i.state.step;1===e&&i.setState({step:e-1,step2:"row d-none",step1:"row"})},i.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Aktor"},{dataField:"tujuan",text:"Tujuan"},{dataField:"Gross",text:"Gross(Gr)"},{dataField:"pkg",text:"Pkg(Gr)"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"}],data:[{tanggal:"23/11/2020",noBon:"TESTING-123",noFaktur:"FAKTUR-123"}],step:0,step1:"row",step2:"row d-none",step3:"row d-none",angka:0},i}return Object(i.a)(a,[{key:"updateButton",value:function(e){switch(this.setState({angka:this.state.angka+1}),e){case"Pindah Barang":this.props.dispatch(Object(y.i)());break;case"MuatasiBarang":this.props.dispatch(Object(y.g)());break;case"MutasiJenisLK":this.props.dispatch(Object(y.h)());break;case"Kirim Masak":this.props.dispatch(Object(y.f)());break;case"Terima Masak":this.props.dispatch(Object(y.j)());break;default:console.log("ERROR")}}},{key:"kirimvalidasi",value:function(e){var t=this;console.log("BERHASIL");var a=JSON.parse(localStorage.getItem("FakturTerpilih"))||[];switch(e){case"Kirim Masak":S.a.put(B+"item/dc/kirimmasak",a).then((function(){return Object(j.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(y.f)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(j.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"Terima Masak":S.a.put(B+"item/dc/terimamasak",a).then((function(){return Object(j.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(y.j)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(j.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"Pindah Barang":S.a.put(B+"item/dc/pindahbarang",a).then((function(){return Object(j.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(y.i)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(j.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"MuatasiBarang":S.a.put(B+"item/dc/mutasibarang",a).then((function(){return Object(j.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(y.g)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(j.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"MutasiJenisLK":S.a.put(B+"item/dc/mutasilk",a).then((function(){return Object(j.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(y.h)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(j.c)("Gagal Validasi, Check Koneksi Anda")}))}}},{key:"render",value:function(){var e=this,t={mode:"checkbox",clickToSelect:!0,onSelect:function(e,t,a,n){console.log(e.noFaktur);var r=JSON.parse(localStorage.getItem("FakturTerpilih"))||[],i={noBon:e.noBon,supplier:e.namaAktor,bruto:e.bruto,netto:e.netto,bonRp:"",titipRp:"",titipGr:"",keterangan:e.keterangan,noFaktur:e.noFaktur,footerDocument:{editBy:"Nagatech",statusValid:"VALID"}};if(t){var o=r.findIndex((function(t,a){return t.noFaktur===e.noFaktur}));o<0?r.push(i):r.splice(o,1),localStorage.setItem("FakturTerpilih",JSON.stringify(r))}else{var s=r.findIndex((function(t,a){return t.noFaktur===e.noFaktur}));r.splice(s,1),localStorage.setItem("FakturTerpilih",JSON.stringify(r))}},onSelectAll:function(e,t,a){var n=[];t.forEach((function(e){var t={tanggal:e.tanggal,noBon:e.noBon,supplier:e.namaAktor,bruto:e.bruto,netto:e.netto,bonRp:"",titipRp:"",titipGr:"",keterangan:e.keterangan,noFaktur:e.noFaktur,footerDocument:{editBy:"Nagatech",statusValid:"VALID"}};n.push(t)})),e?localStorage.setItem("FakturTerpilih",JSON.stringify(n)):localStorage.removeItem("FakturTerpilih")}};return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"card"},l.a.createElement(N.default,{title:"Validasi Barang"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement(f.a,{steps:[{title:"Pilih Data"},{title:"Validasi Data"}],activeStep:this.state.step})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:this.state.step1},l.a.createElement("div",{className:"col-lg-3 col-md-3"},l.a.createElement("label",{htmlFor:""},"Silahkan Pilih Transaksi"),l.a.createElement(u.a,{name:"tipeTransaksi",label:"Dari",component:"select",className:"form-control",onChange:this.changeTransaksi("tipeTransaksi")},l.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),l.a.createElement("option",{value:"Pindah Barang",key:"Pindah Barang"},"Pindah Barang"),l.a.createElement("option",{value:"MuatasiBarang",key:"Muatasi Barang"},"Mutasi Barang"),l.a.createElement("option",{value:"MutasiJenisLK",key:"Mutasi Jenis LK"},"Mutasi Jenis LK"),l.a.createElement("option",{value:"Kirim Masak",key:"Kirim Masak"},"Kirim Masak"),l.a.createElement("option",{value:"Terima Masak",key:"Terima Masak"},"Terima Masak"))),l.a.createElement("div",{className:"col-lg-3 col-md-3"},l.a.createElement("label",{htmlFor:""},"Dari"),l.a.createElement(u.a,{name:"accFrom",label:"Dari",component:"select",className:"form-control"},l.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),l.a.createElement("div",{className:"col-lg-3 col-md-3"},l.a.createElement("label",{htmlFor:""},"Ke"),l.a.createElement(u.a,{name:"accTo",label:"Ke",component:"select",className:"form-control"},l.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),l.a.createElement("div",{className:"col-lg-3 col-md-3"},l.a.createElement(u.a,{name:"tanggal",label:"Tanggal Transaksi",component:x,type:"date"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary"},l.a.createElement("i",{className:"fa fa-eye"})," Lihat Data"))),l.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listValidasiBarang?l.a.createElement(b.a,{keyField:"noFaktur",data:this.props.listValidasiBarang,columns:this.state.columns,search:!0},(function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement(g.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:E()(),selectRow:t})))})):l.a.createElement(g.a,{keyField:"noFaktur",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.nextStep()}},"Next",l.a.createElement("i",{className:"fa fa-chevron-right ml-3"}))))),l.a.createElement("div",{className:this.state.step2},l.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listDataSelectedValidasiSupplier?l.a.createElement(b.a,{keyField:T()(),data:this.props.listDataSelectedValidasiSupplier,columns:this.state.columns,search:!0},(function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement(g.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:E()()})))})):l.a.createElement(g.a,{keyField:"noFaktur",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.kirimvalidasi(e.state.tipeTransaksi)}},l.a.createElement("i",{className:"fa fa-check mr-3"}),"VALIDASI"))))))))))}}]),a}(c.Component);w=Object(p.a)({form:"validasiBarang",enableReinitialize:!0})(w),t.default=Object(d.b)((function(e){return{listValidasiBarang:e.provinsi.listValidasiBarang,listDataSelectedValidasiSupplier:e.provinsi.listDataSelectedValidasiSupplier}}),null)(w)},465:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),i=a(74),o=a(73),s=a(0),c=a.n(s),l=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(s.Component);t.default=l},466:function(e,t,a){"use strict";var n=a(11),r=a.n(n),i=a(176),o=a.n(i),s=a(37),c=a.n(s),l=a(0),u=a.n(l),p=a(2),d=a.n(p),m=a(52),f=a.n(m),h=a(26),g=a.n(h),v=a(28),b=function(e,t,a,n){var i=t.value;return"checkbox"===e?r()({},t,{checked:!!i}):"radio"===e?r()({},t,{checked:n(i,a),value:a}):"select-multiple"===e?r()({},t,{value:i||[]}):"file"===e?r()({},t,{value:i||void 0}):t};var k=a(172),E=function(e,t){if(Object(k.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,i=n.value,o=n.checked,s=n.files,c=a.dataTransfer;return"checkbox"===r?!!o:"file"===r?s||c&&c.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):i}return e},y="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,F=function(e,t){var a=t.name,n=t.parse,r=t.normalize,i=E(e,y);return n&&(i=n(i,a)),r&&(i=r(a,i)),i},O=a(10),S=a(76),j=function(e,t,a){return Object(S.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},D=["_reduxForm"],T=function(e){return e&&"object"===typeof e},N=function(e){return e&&"function"===typeof e},x=function(e){T(e)&&N(e.preventDefault)&&e.preventDefault()},B=function(e,t){if(T(e)&&T(e.dataTransfer)&&N(e.dataTransfer.getData))return e.dataTransfer.getData(t)},w=function(e,t,a){T(e)&&T(e.dataTransfer)&&N(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var V=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.parse,s=a.normalize,c=a.onChange,l=a._reduxForm,u=a.value,p=F(t,{name:n,parse:o,normalize:s}),d=!1;if(c)if(!y&&Object(k.a)(t))c(r()({},t,{preventDefault:function(){return d=!0,x(t)}}),p,u,n);else{var m=c(t,p,u,n);y&&(d=m)}d||(i(l.change(n,p)),l.asyncValidate&&l.asyncValidate(n,p,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.onFocus,s=a._reduxForm,c=!1;o&&(y?c=o(t,n):o(r()({},t,{preventDefault:function(){return c=!0,x(t)}}),n)),c||i(s.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.parse,s=a.normalize,c=a.onBlur,l=a._reduxForm,u=a._value,p=a.value,d=F(t,{name:n,parse:o,normalize:s});d===u&&void 0!==u&&(d=p);var m=!1;c&&(y?m=c(t,d,p,n):c(r()({},t,{preventDefault:function(){return m=!0,x(t)}}),d,p,n)),m||(i(l.blur(n,d)),l.asyncValidate&&l.asyncValidate(n,d,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,i=a.value;w(t,"text",null==i?"":i),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,i=a.dispatch,o=a.onDrop,s=a._reduxForm,c=a.value,l=B(t,"text"),u=!1;o&&o(r()({},t,{preventDefault:function(){return u=!0,x(t)}}),l,c,n),u||(i(s.change(n,l)),x(t))},e}c()(n,a);var i=n.prototype;return i.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~D.indexOf(n)&&!t(a.props[n],e[n])})))},i.getRenderedComponent=function(){return this.ref.current},i.render=function(){var t=this.props,a=t.component,n=t.forwardRef,i=t.name,o=t._reduxForm,s=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,g()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),c=function(e,t,a){var n=e.getIn,i=e.toJS,o=e.deepEqual,s=a.asyncError,c=a.asyncValidating,l=a.onBlur,u=a.onChange,p=a.onDrop,d=a.onDragStart,m=a.dirty,f=a.dispatch,h=a.onFocus,v=a.form,k=a.format,E=a.initial,y=(a.parse,a.pristine),F=a.props,O=a.state,S=a.submitError,j=a.submitFailed,D=a.submitting,T=a.syncError,N=a.syncWarning,x=(a.validate,a.value),B=a._value,w=(a.warn,g()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),V=T||s||S,I=N,A=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(x,k);return{input:b(w.type,{name:t,onBlur:l,onChange:u,onDragStart:d,onDrop:p,onFocus:h,value:A},B,o),meta:r()({},i(O),{active:!(!O||!n(O,"active")),asyncValidating:c,autofilled:!(!O||!n(O,"autofilled")),dirty:m,dispatch:f,error:V,form:v,initial:E,warning:I,invalid:!!V,pristine:y,submitting:!!D,submitFailed:!!j,touched:!(!O||!n(O,"touched")),valid:!V,visited:!(!O||!n(O,"visited"))}),custom:r()({},w,{},F)}}(e,i,r()({},s,{form:o.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=c.custom,p=g()(c,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof a){var d=p.input;p.meta;return Object(l.createElement)(a,r()({},d,{},u))}return Object(l.createElement)(a,r()({},p,{},u))},n}(l.Component);return n.propTypes={component:j,props:d.a.object},Object(v.b)((function(e,n){var r=n.name,i=n._reduxForm,o=i.initialValues,s=(0,i.getFormState)(e),c=a(s,"initial."+r),l=void 0!==c?c:o&&a(o,r),u=a(s,"values."+r),p=a(s,"submitting"),d=function(e,t){var a=O.a.getIn(e,t);return a&&a._error?a._error:a}(a(s,"syncErrors"),r),m=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(s,"syncWarnings"),r),f=t(u,l);return{asyncError:a(s,"asyncErrors."+r),asyncValidating:a(s,"asyncValidating")===r,dirty:!f,pristine:f,state:a(s,"fields."+r),submitError:a(s,"submitErrors."+r),submitFailed:a(s,"submitFailed"),submitting:p,syncError:d,syncWarning:m,initial:l,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},I=a(177),A=a.n(I),C=function(e,t,a,n,r,i){if(i)return e===t},R=function(e,t,a){var n=A()(e.props,t,C),r=A()(e.state,a,C);return!n||!r},_=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},M=a(106);var L=function(e){var t=V(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=u.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var i=n.props._reduxForm.getValues();return r(t,n.value,a(i,e,t),i,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}c()(n,e);var i=n.prototype;return i.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},i.shouldComponentUpdate=function(e,t){return R(this,e,t)},i.UNSAFE_componentWillReceiveProps=function(e){var t=_(this.props,this.props.name),a=_(e,e.name);t===a&&O.a.deepEqual(this.props.validate,e.validate)&&O.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},i.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},i.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},i.render=function(){return Object(l.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},o()(n,[{key:"name",get:function(){return _(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(l.Component);return n.propTypes={name:d.a.string.isRequired,component:j,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(M.b)(n)};t.a=L(O.a)},525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(529),i=(n=r)&&n.__esModule?n:{default:n};t.default=i.default}}]);
//# sourceMappingURL=107.f7697c41.chunk.js.map