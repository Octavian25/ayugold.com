(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[48,6,174],{1224:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),l=a.n(s),c=a(468),u=a.n(c),d=a(471),m=a.n(d),p=a(28),f=a(466),h=a(459),b=a(27),k=a.n(b),v=a(595),g=a(469),E=a(5),y=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).submit=function(){console.log(JSON.stringify(r.state))},r.state={response:"",listPerhiasan:[],listJual:[],listBeli:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(E.b)("rates?tipeKadar=KADAR-CETAK").then((function(t){e.setState({listPerhiasan:t.data})})).catch((function(e){return k.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(E.b)("rates?tipeKadar=KADAR-BELI").then((function(t){e.setState({listBeli:t.data})})).catch((function(e){return k.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(E.b)("rates?tipeKadar=KADAR-JUAL").then((function(t){e.setState({listJual:t.data})})).catch((function(e){return k.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(f.a,{component:g.b,label:"Kode Kategori",name:"kodeKategori",value:this.props.status,normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:[{value:"CK",name:"CIOK"},{value:"RSK",name:"RONGSOK"}]}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(f.a,{name:"kodeJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:g.a,label:"Kode Jenis"})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(f.a,{name:"namaJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:g.a,label:"Nama Jenis"})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(f.a,{component:g.b,label:"Kadar Cetak",name:"kadarCetak",value:"DEFAULT",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listPerhiasan.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(f.a,{component:g.b,label:"Kadar Beli",name:"kadarBeli",value:"DEFAULT",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listBeli.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(f.a,{component:g.b,label:"Kadar Jual",name:"kadarJual",value:"DEFAULT",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listJual.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:this.props.submitting},"Submit")))))}}]),a}(s.Component);y=Object(h.a)({form:"Rosok",enableReinitialize:!0,validate:v.a})(y);var O=Object(p.b)()(y),D=a(151),C=a(496),j=a.n(C),K=a(533),N=a.n(K),B=a(534),F=a.n(B),w=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).submit=function(){console.log(JSON.stringify(r.state))},r.state={response:"",listPerhiasan:[],listJual:[],listBeli:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(E.b)("rates?tipeKadar=KADAR-CETAK").then((function(t){e.setState({listPerhiasan:t.data})})).catch((function(e){return k.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(E.b)("rates?tipeKadar=KADAR-BELI").then((function(t){e.setState({listBeli:t.data})})).catch((function(e){return k.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(E.b)("rates?tipeKadar=KADAR-JUAL").then((function(t){e.setState({listJual:t.data})})).catch((function(e){return k.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},"Kode Kategory"),l.a.createElement(f.a,{name:"kodeKategori",component:"select",className:"form-control",readOnly:!0},l.a.createElement("option",{value:"CK",key:"CK"},"CIOK"),l.a.createElement("option",{value:"RSK",key:"RSK"},"ROSOK")))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(f.a,{name:"kodeJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:g.a,label:"Kode Jenis",readOnly:!0})),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},"Kadar"),l.a.createElement(f.a,{name:"kadarCetak",component:"select",className:"form-control"},this.state.listPerhiasan.map((function(e){return l.a.createElement("option",{value:e.kadar,key:e.kadar},e.kadar)}))))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},"Harga Jual"),l.a.createElement(f.a,{name:"kadarJual",component:"select",className:"form-control"},this.state.listJual.map((function(e){return l.a.createElement("option",{value:e.kadar,key:e.kadar},e.kadar)}))))),l.a.createElement("div",{className:"col-md-2"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"",className:"text-black"},"Harga Beli"),l.a.createElement(f.a,{name:"kadarBeli",component:"select",className:"form-control"},this.state.listBeli.map((function(e){return l.a.createElement("option",{value:e.kadar,key:e.kadar},e.kadar)}))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(f.a,{name:"namaJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:g.a,label:"Nama Jenis"})),l.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:this.props.submitting},"Submit")))))}}]),a}(s.Component);w=Object(h.a)({form:"RosokEdit",validate:v.a,enableReinitialize:!0})(w);var x=Object(p.b)((function(e){return{initialValues:{kodeJenis:e.provinsi.editRosok.kodeJenis,statusAktif:e.provinsi.editRosok.statusAktif,kodeKategori:e.provinsi.editRosok.kodeKategori,namaJenis:e.provinsi.editRosok.namaJenis,kadarBeli:e.provinsi.editRosok.kadarBeli,kadarJual:e.provinsi.editRosok.kadarJual,kadarCetak:e.provinsi.editRosok.kadarCetak}}}),null)(w),J=a(173),R=a.n(J),A=a(470),S=a.n(A),T=a(174),_=a(36),P=a(499),I=a(465),U=a(503),z=d.Search.SearchBar,V=d.CSVExport.ExportCSVButton;function L(e,t){return"AKTIF"===t.statusAktif?l.a.createElement("div",null,l.a.createElement("img",{src:N.a,style:{width:50,height:50},alt:"ACTIVE"})):l.a.createElement("div",null,l.a.createElement("img",{src:F.a,alt:"NON ACTIVE",style:{width:50,height:50}}))}var G=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={Koderosok:[],response:"",display:"none",columns:[{dataField:"kodeKategori",text:"Kode Kategori",headerStyle:function(){return{width:"10%"}}},{dataField:"kodeJenis",text:"Kode Jenis",headerStyle:function(){return{width:"10%"}}},{dataField:"kadarCetak",text:"Kadar Cetak",headerStyle:function(){return{width:"10%"}}},{dataField:"kadarBeli",text:"Kadar Beli",headerStyle:function(){return{width:"10%"}}},{dataField:"kadarJual",text:"Kadar Jual",headerStyle:function(){return{width:"10%"}}},{dataField:"namaJenis",text:"Nama Jenis"},{dataField:"statusAktif",text:"Status",sort:!0,formatter:L,headerStyle:function(){return{width:"10%"}}},{dataField:"link",text:"Aksi",csvExport:!1,formatter:function(e,t){return l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return e=r.props.dispatch,a=t.kodeJenis,void k.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){if(t.isConfirmed){var n={data:{kodeJenis:a}};Object(E.a)("subcategory",n).then((function(t){return Object(T.b)("Data Berhasil Dihapus!").then((function(){return Object(T.a)("Data Berhasil Dihapus Di Kode Rongsok Dan Ciok",n)})).then((function(){return e(Object(D.d)())}))})).catch((function(e){return Object(T.c)("Data Gagal Dihapus!").then((function(){return Object(T.a)('Data Gagal Dihapus Di Kode Rongsok Dan Ciok"',n,e)}))}))}}));var e,a},"data-tut":"reactour_3"},l.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),l.a.createElement("button",{"data-tut":"reactour_4",className:"btn btn-warning",onClick:function(){return r.props.dispatch(Object(D.c)(t.kodeJenis,t.statusAktif,t.kodeKategori,t.namaJenis,t.kadarBeli,t.kadarJual,t.kadarCetak,r.editModal()))}},l.a.createElement("i",{className:"fa fa-edit mr-2"}),"EDIT"))}}]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(D.d)())}},{key:"handleSubit",value:function(e){var t=this,a={kodeKategori:e.kodeKategori,kodeKelompok:"CIOK",kodeJenis:e.kodeJenis,statusAktif:e.statusAktif?e.statusAktif:"AKTIF",kadarCetak:e.kadarCetak,kadarBeli:e.kadarBeli,namaJenis:e.namaJenis,kadarJual:e.kadarJual};Object(E.c)("subcategory",a).then((function(e){return Object(T.b)("Data Berhasil Ditambah!").then((function(){return Object(T.a)("Data Berhasil Ditambah Di Kode Rongosk dan Ciok",a)})).then((function(){return t.props.dispatch(Object(_.g)())})).then((function(){return t.props.dispatch(Object(D.d)())}))})).catch((function(e){return Object(T.c)("Data Gagal Ditambah!").then((function(){return Object(T.a)("Data Gagal Ditambah Di Kode Rongsok dan Ciok",a,e)})).then((function(){return t.props.dispatch(Object(_.g)())}))}))}},{key:"handleEdit",value:function(e){var t=this,a={kodeKategori:e.kodeKategori,kodeKelompok:"CIOK",kodeJenis:e.kodeJenis,statusAktif:e.statusAktif?e.statusAktif:"AKTIF",kadarCetak:e.kadarCetak,kadarBeli:e.kadarBeli,namaJenis:e.namaJenis,kadarJual:e.kadarJual};Object(E.d)("subcategory",a).then((function(e){return Object(T.b)("Data Berhasil Diubah!").then((function(){return Object(T.a)("Data Berhasil Diubah Di Kode Rongsok dan Ciok",a)})).then((function(){return t.props.dispatch(Object(_.g)())})).then((function(){return t.props.dispatch(Object(D.d)())}))})).catch((function(e){return Object(T.c)("Data Gagal Diubah!").then((function(){return Object(T.a)("Data Gagal Diubah Di Kode Rongsok Dan Ciok",a,e)})).then((function(){return t.props.dispatch(Object(_.g)())}))}))}},{key:"tambahModal",value:function(){this.props.dispatch(Object(_.j)()),this.setState({isEdit:!1})}},{key:"editModal",value:function(){this.props.dispatch(Object(_.j)()),this.setState({isEdit:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid",style:{color:"black"}},l.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),l.a.createElement(P.default,{content:this.state.isEdit?l.a.createElement(x,{onSubmit:function(t){return e.handleEdit(t)}}):l.a.createElement(O,{onSubmit:function(t){return e.handleSubit(t)}}),title:this.state.isEdit?"Edit Kode Rongsok Dan Ciok":"Tambah Kode Rongsok Dan Ciok"}),l.a.createElement(U.a,{tourConfig:["Untuk Menambahkan Data Kode Rongsok / Ciok, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah data Kode Rongsok / Ciok yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih","Ini adalah tombol untuk mengubah data pada baris yang dipilih"]}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement(I.default,{title:"Data Kode Rosok Dan Ciok"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{action:"#"},l.a.createElement("div",{className:"form-body"},l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info","data-tut":"reactour_1",onClick:function(){return e.tambahModal()}},"Tambah Data Rosok / Ciok"))))),l.a.createElement("div",{"data-tut":"reactour_2"},this.props.KodeRosokList?l.a.createElement(m.a,{keyField:"id",data:this.props.KodeRosokList,columns:this.state.columns,search:!0},(function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"text-right mt-5 mb-3"},l.a.createElement(z,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),l.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:S()()})),l.a.createElement(V,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):l.a.createElement("div",null,this.props.error?l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:j.a,style:{width:"30%"},alt:"NOT RESPOND"}),l.a.createElement("br",null),l.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):l.a.createElement(R.a,{width:"100%",height:180}))))))))}}]),a}(s.Component);t.default=Object(p.b)((function(e){return{KodeRosokList:e.provinsi.rosok,alert:e.provinsi.alert,error:e.provinsi.error}}),null)(G)},465:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),l=a.n(s),c=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(s.Component);t.default=c},466:function(e,t,a){"use strict";var n=a(11),r=a.n(n),o=a(176),i=a.n(o),s=a(37),l=a.n(s),c=a(0),u=a.n(c),d=a(2),m=a.n(d),p=a(52),f=a.n(p),h=a(26),b=a.n(h),k=a(28),v=function(e,t,a,n){var o=t.value;return"checkbox"===e?r()({},t,{checked:!!o}):"radio"===e?r()({},t,{checked:n(o,a),value:a}):"select-multiple"===e?r()({},t,{value:o||[]}):"file"===e?r()({},t,{value:o||void 0}):t};var g=a(172),E=function(e,t){if(Object(g.a)(e)){if(!t&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(t&&void 0!==e.nativeEvent)return e.nativeEvent.text;var a=e,n=a.target,r=n.type,o=n.value,i=n.checked,s=n.files,l=a.dataTransfer;return"checkbox"===r?!!i:"file"===r?s||l&&l.files:"select-multiple"===r?function(e){var t=[];if(e)for(var a=0;a<e.length;a++){var n=e[a];n.selected&&t.push(n.value)}return t}(e.target.options):o}return e},y="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,O=function(e,t){var a=t.name,n=t.parse,r=t.normalize,o=E(e,y);return n&&(o=n(o,a)),r&&(o=r(a,o)),o},D=a(10),C=a(76),j=function(e,t,a){return Object(C.isValidElementType)(e[t])?null:new Error("Invalid prop `"+t+"` supplied to `"+a+"`.")},K=["_reduxForm"],N=function(e){return e&&"object"===typeof e},B=function(e){return e&&"function"===typeof e},F=function(e){N(e)&&B(e.preventDefault)&&e.preventDefault()},w=function(e,t){if(N(e)&&N(e.dataTransfer)&&B(e.dataTransfer.getData))return e.dataTransfer.getData(t)},x=function(e,t,a){N(e)&&N(e.dataTransfer)&&B(e.dataTransfer.setData)&&e.dataTransfer.setData(t,a)};var J=function(e){var t=e.deepEqual,a=e.getIn,n=function(a){function n(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))||this).ref=u.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,l=a.onChange,c=a._reduxForm,u=a.value,d=O(t,{name:n,parse:i,normalize:s}),m=!1;if(l)if(!y&&Object(g.a)(t))l(r()({},t,{preventDefault:function(){return m=!0,F(t)}}),d,u,n);else{var p=l(t,d,u,n);y&&(m=p)}m||(o(c.change(n,d)),c.asyncValidate&&c.asyncValidate(n,d,"change"))},e.handleFocus=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onFocus,s=a._reduxForm,l=!1;i&&(y?l=i(t,n):i(r()({},t,{preventDefault:function(){return l=!0,F(t)}}),n)),l||o(s.focus(n))},e.handleBlur=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.parse,s=a.normalize,l=a.onBlur,c=a._reduxForm,u=a._value,d=a.value,m=O(t,{name:n,parse:i,normalize:s});m===u&&void 0!==u&&(m=d);var p=!1;l&&(y?p=l(t,m,d,n):l(r()({},t,{preventDefault:function(){return p=!0,F(t)}}),m,d,n)),p||(o(c.blur(n,m)),c.asyncValidate&&c.asyncValidate(n,m,"blur"))},e.handleDragStart=function(t){var a=e.props,n=a.name,r=a.onDragStart,o=a.value;x(t,"text",null==o?"":o),r&&r(t,n)},e.handleDrop=function(t){var a=e.props,n=a.name,o=a.dispatch,i=a.onDrop,s=a._reduxForm,l=a.value,c=w(t,"text"),u=!1;i&&i(r()({},t,{preventDefault:function(){return u=!0,F(t)}}),c,l,n),u||(o(s.change(n,c)),F(t))},e}l()(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(e){var a=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?a.props[n]!==e[n]:!~K.indexOf(n)&&!t(a.props[n],e[n])})))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var t=this.props,a=t.component,n=t.forwardRef,o=t.name,i=t._reduxForm,s=(t.normalize,t.onBlur,t.onChange,t.onFocus,t.onDragStart,t.onDrop,t.immutableProps,b()(t,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),l=function(e,t,a){var n=e.getIn,o=e.toJS,i=e.deepEqual,s=a.asyncError,l=a.asyncValidating,c=a.onBlur,u=a.onChange,d=a.onDrop,m=a.onDragStart,p=a.dirty,f=a.dispatch,h=a.onFocus,k=a.form,g=a.format,E=a.initial,y=(a.parse,a.pristine),O=a.props,D=a.state,C=a.submitError,j=a.submitFailed,K=a.submitting,N=a.syncError,B=a.syncWarning,F=(a.validate,a.value),w=a._value,x=(a.warn,b()(a,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),J=N||s||C,R=B,A=function(e,a){if(null===a)return e;var n=null==e?"":e;return a?a(e,t):n}(F,g);return{input:v(x.type,{name:t,onBlur:c,onChange:u,onDragStart:m,onDrop:d,onFocus:h,value:A},w,i),meta:r()({},o(D),{active:!(!D||!n(D,"active")),asyncValidating:l,autofilled:!(!D||!n(D,"autofilled")),dirty:p,dispatch:f,error:J,form:k,initial:E,warning:R,invalid:!!J,pristine:y,submitting:!!K,submitFailed:!!j,touched:!(!D||!n(D,"touched")),valid:!J,visited:!(!D||!n(D,"visited"))}),custom:r()({},x,{},O)}}(e,o,r()({},s,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),u=l.custom,d=b()(l,["custom"]);if(n&&(u.ref=this.ref),"string"===typeof a){var m=d.input;d.meta;return Object(c.createElement)(a,r()({},m,{},u))}return Object(c.createElement)(a,r()({},d,{},u))},n}(c.Component);return n.propTypes={component:j,props:m.a.object},Object(k.b)((function(e,n){var r=n.name,o=n._reduxForm,i=o.initialValues,s=(0,o.getFormState)(e),l=a(s,"initial."+r),c=void 0!==l?l:i&&a(i,r),u=a(s,"values."+r),d=a(s,"submitting"),m=function(e,t){var a=D.a.getIn(e,t);return a&&a._error?a._error:a}(a(s,"syncErrors"),r),p=function(e,t){var n=a(e,t);return n&&n._warning?n._warning:n}(a(s,"syncWarnings"),r),f=t(u,c);return{asyncError:a(s,"asyncErrors."+r),asyncValidating:a(s,"asyncValidating")===r,dirty:!f,pristine:f,state:a(s,"fields."+r),submitError:a(s,"submitErrors."+r),submitFailed:a(s,"submitFailed"),submitting:d,syncError:m,syncWarning:p,initial:c,value:u,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},R=a(177),A=a.n(R),S=function(e,t,a,n,r,o){if(o)return e===t},T=function(e,t,a){var n=A()(e.props,t,S),r=A()(e.state,a,S);return!n||!r},_=function(e,t){var a=e._reduxForm.sectionPrefix;return a?a+"."+t:t},P=a(106);var I=function(e){var t=J(e),a=e.setIn,n=function(e){function n(t){var n;if((n=e.call(this,t)||this).ref=u.a.createRef(),n.normalize=function(e,t){var r=n.props.normalize;if(!r)return t;var o=n.props._reduxForm.getValues();return r(t,n.value,a(o,e,t),o,e)},!t._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}l()(n,e);var o=n.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},o.shouldComponentUpdate=function(e,t){return T(this,e,t)},o.UNSAFE_componentWillReceiveProps=function(e){var t=_(this.props,this.props.name),a=_(e,e.name);t===a&&D.a.deepEqual(this.props.validate,e.validate)&&D.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(t),this.props._reduxForm.register(a,"Field",(function(){return e.validate}),(function(){return e.warn})))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return f()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(t,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(n,[{key:"name",get:function(){return _(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(c.Component);return n.propTypes={name:m.a.string.isRequired,component:j,format:m.a.func,normalize:m.a.func,onBlur:m.a.func,onChange:m.a.func,onFocus:m.a.func,onDragStart:m.a.func,onDrop:m.a.func,parse:m.a.func,props:m.a.object,validate:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),warn:m.a.oneOfType([m.a.func,m.a.arrayOf(m.a.func)]),forwardRef:m.a.bool,immutableProps:m.a.arrayOf(m.a.string),_reduxForm:m.a.object},Object(P.b)(n)};t.a=I(D.a)},469:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n),o=a(179),i=function(e){var t=e.input,a=e.label,n=e.type,o=e.limit,i=e.readOnly,s=e.meta,l=s.touched,c=s.error,u=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",maxLength:o,readOnly:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),l&&(c&&r.a.createElement("p",{className:"invalid-feedback"},c)||u&&r.a.createElement("p",null,u)))},s=function(e){var t=e.input,a=e.label,n=e.options,i=(e.placeholder,e.disabled),s=(e.value,e.meta),l=s.touched,c=s.error,u=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},a),r.a.createElement(o.a,Object.assign({},t,{options:n,search:!0,emptyMessage:"Tidak Ada Data",placeholder:"Silahkan Pilih",disabled:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),l&&(c&&r.a.createElement("p",{className:"invalid-feedback"},c)||u&&r.a.createElement("p",null,u)))}},496:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"},499:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),s=a(1208),l=a(0),c=a.n(l),u=a(28),d=a(36),m=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(s.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(d.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},c.a.createElement(s.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},c.a.createElement(s.a.Title,null,this.props.title||"")),c.a.createElement(s.a.Body,null,this.props.content||""))}}]),a}(l.Component);t.default=Object(u.b)((function(e){return{show:e.modal.show}}),null)(m)},503:function(e,t,a){"use strict";var n=a(71),r=a(72),o=a(74),i=a(73),s=a(0),l=a.n(s),c=a(28),u=a(36),d=a(522),m=a(520),p=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).disableBody=function(e){return Object(m.a)(e)},r.enableBody=function(e){return Object(m.b)(e)},r.state={},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tourConfig.map((function(e,t){return{selector:'[data-tut="reactour_'+ ++t+'"]',content:e}}));return console.log(t),l.a.createElement(d.a,{onRequestClose:function(){return e.props.dispatch(Object(u.f)())},steps:t,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),a}(s.Component);t.a=Object(c.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(p)},533:function(e,t,a){e.exports=a.p+"static/media/active.1c1b1ba9.png"},534:function(e,t,a){e.exports=a.p+"static/media/nonactive.ca911de0.png"},595:function(e,t,a){"use strict";t.a=function(e){var t={};return e.kodeKategori?"DEFAULT"===e.kodeKategori&&(t.kodeKategori="Pilih Terlebih dahulu"):t.kodeKategori="Tidak Boleh kosong",e.kodeJenis?"DEFAULT"===e.kodeJenis&&(t.kodeJenis="Pilih Terlebih dahulu"):t.kodeJenis="Tidak Boleh kosong",e.kadarBeli?"DEFAULT"===e.kadarBeli&&(t.kadarBeli="Pilih Terlebih dahulu"):t.kadarBeli="Tidak Boleh kosong",e.kadarJual?"DEFAULT"===e.kadarJual&&(t.kadarJual="Pilih Terlebih dahulu"):t.kadarJual="Tidak Boleh kosong",e.kadarCetak?"DEFAULT"===e.kadarCetak&&(t.kadarCetak="Pilih Terlebih dahulu"):t.kadarCetak="Tidak Boleh kosong",t}}}]);
//# sourceMappingURL=48.1330de30.chunk.js.map