(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[46,5],{1206:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),o=a(18),i=a(17),c=a(0),s=a.n(c),l=a(481),u=a.n(l),d=a(507),m=a.n(d),p=a(506),b=a.n(p),h=a(12),f=a(173),g=a(508),k=a.n(g),v=a(7),E=a.n(v),O=a(52),j=a(304),y=function(e){var t={};return e.kodeKategori||(t.kodeKategori="Tidak Boleh kosong"),t},N=a(11),K=a(3),S=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={listKelompok:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(K.b)("group/get/all").then((function(t){return e.setState({listKelompok:t.data})}))}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(O.a,{name:"kodeKategori",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:N.a,label:"Kode Kategori",limit:10})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(O.a,{component:N.b,label:"Kode Group",name:"kodeGroup",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listKelompok.map((function(e){return{value:e.kode_group,name:e.kode_group}}))})),s.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},s.a.createElement(O.a,{name:"kodeIntern",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:N.a,label:"Kode Intern"})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(O.a,{name:"keterangan",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:N.a,label:"Keterangan"})),s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,type:"submit"},this.props.onSend?s.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",s.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),a}(c.Component),C=S=Object(j.a)({form:"Kategori",validate:y,enableReinitialize:!0})(S),x=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={listKelompok:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(K.b)("group/get/all").then((function(t){return e.setState({listKelompok:t.data})}))}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(O.a,{name:"kodeKategori",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:N.a,label:"Kode Kategori",readOnly:!0,limit:10})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(O.a,{component:N.b,label:"Kode Group",name:"kodeGroup",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listKelompok.map((function(e){return{value:e.kode_group,name:e.nama_group}}))})),s.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},s.a.createElement(O.a,{name:"kodeIntern",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:N.a,label:"Kode Intern"})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(O.a,{name:"keterangan",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:N.a,label:"Keterangan"})),s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.onSend?s.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",s.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),a}(c.Component);x=Object(j.a)({form:"KategoriEdit",validate:y,enableReinitialize:!0})(x);var D=Object(h.b)((function(e){return{initialValues:{kodeKategori:e.provinsi.editKategori.kodeKategori,kodeGroup:e.provinsi.editKategori.kodeGroup,keterangan:e.provinsi.editKategori.keterangan}}}),null)(x),_=a(4),G=a(75),B=a(14),w=a.n(B),A=a(21),R=a(51),T=a(509),z=a(43),I=a(511),U=a(9),F=d.Search.SearchBar,M=d.CSVExport.ExportCSVButton;var P=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={columns:[{dataField:"kode_kategori",text:"Kode Kategori"},{dataField:"nama_kategori",text:"Nama Kategori"},{dataField:"kode_group",text:"Kode Group"},{dataField:"link",text:"Aksi",csvExport:!1,formatter:function(e,t){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-danger mr-2","data-tut":"reactour_3",onClick:function(){return e=r.props.dispatch,a=t.kode_kategori,void E.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.isConfirmed&&Object(K.a)("kategori/delete/"+a).then((function(t){return Object(A.b)("Data Berhasil Dihapus!").then((function(){return e(Object(f.d)())}))})).catch((function(e){return Object(A.c)("Data Gagal Dihapus!")}))}));var e,a}},s.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return r.props.dispatch(Object(f.c)(t.kode_kategori,t.nama_kategori,t.kode_group,r.editModal()))}},s.a.createElement("i",{className:"fa fa-edit mr-1"}),"Edit"))}}]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.d)())}},{key:"handleSubmit",value:function(e){var t=this,a={kode_kategori:e.kodeKategori,nama_kategori:e.keterangan,kode_group:e.kodeGroup};this.props.dispatch(Object(U.t)()),Object(K.c)("kategori/add",a).then((function(){return t.props.dispatch(Object(U.k)())})).then((function(){return t.props.dispatch(Object(R.g)())})).then((function(e){return Object(A.b)("Data Berhasil Ditambah!").then((function(){return t.props.dispatch(Object(f.d)())})).then((function(){return t.props.dispatch(Object(G.a)("Kategori"))}))})).catch((function(a){return t.handleReactive(a,e.kodeKategori,{nama_kategori:e.keterangan,kode_group:e.kodeGroup},t.props.dispatch(Object(U.k)()))}))}},{key:"handleEdit",value:function(e){var t=this,a={nama_kategori:e.keterangan,kode_group:e.kodeGroup};this.props.dispatch(Object(U.t)()),Object(K.d)("kategori/update/by-kode-kategori/"+e.kodeKategori,a).then((function(){return t.props.dispatch(Object(U.k)())})).then((function(){return t.props.dispatch(Object(R.g)())})).then((function(e){return Object(A.b)("Data Berhasil Diubah!").then((function(){return t.props.dispatch(Object(f.d)())}))})).catch((function(e){return Object(A.c)("Data Gagal Diubah!").then((function(){return t.props.dispatch(Object(U.k)())})).then((function(){return t.props.dispatch(Object(R.g)())}))}))}},{key:"handleReactive",value:function(e,t,a){var n=this;this.props.dispatch(Object(R.g)()),e.response.data.includes("hapus")?Object(A.d)(e,t,"kategori/reactive/",a,"kategori/update/by-kode-kategori/").then((function(){return n.props.dispatch(Object(f.d)())})):Object(A.c)("Data Gagal Ditambahkan")}},{key:"tambahModal",value:function(){this.props.dispatch(Object(R.j)()),this.setState({isEdit:!1})}},{key:"editModal",value:function(){this.props.dispatch(Object(R.j)()),this.setState({isEdit:!0})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid",style:{color:"black"}},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(_.b,{to:"/KlasifikasiBarang"},s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-tut":"reactour_4"},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),s.a.createElement(I.a,{tourConfig:["Untuk Menambahkan Data Kategori, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah Data Kategori yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih","Ini adalah tombol navigasi untuk kembali"]}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"card"},s.a.createElement(z.default,{title:"Kategori"}),s.a.createElement("div",{className:"card-body"},s.a.createElement(T.default,{content:this.state.isEdit?s.a.createElement(D,{onSubmit:function(t){return e.handleEdit(t)},onSend:this.props.onSend}):s.a.createElement(C,{onSubmit:function(t){return e.handleSubmit(t)},onSend:this.props.onSend}),title:this.state.isEdit?"Edit Data Kategori":"Tambah Data Kategori"}),s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data Kategori"))),s.a.createElement("div",{"data-tut":"reactour_2"},this.props.kategoriList?s.a.createElement(m.a,{keyField:"kodeKategori",data:this.props.kategoriList,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"form-group mt-5 mb-3"},s.a.createElement("div",{className:"text-right"},s.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),s.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()()})),s.a.createElement(M,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:k.a,style:{width:"30%"},alt:"ERROR GET DATA"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(w.a,{width:"100%",height:180}))))))))}}]),a}(c.Component);t.default=Object(h.b)((function(e){return{kategoriList:e.provinsi.kategori,alert:e.provinsi.alert,error:e.provinsi.error,onSend:e.provinsi.onSend}}),null)(P)},508:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"},509:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a(16),o=a(18),i=a(17),c=a(1195),s=a(0),l=a.n(s),u=a(12),d=a(51),m=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(c.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(d.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},l.a.createElement(c.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},l.a.createElement(c.a.Title,null,this.props.title||"")),l.a.createElement(c.a.Body,null,this.props.content||""))}}]),a}(s.Component);t.default=Object(u.b)((function(e){return{show:e.modal.show}}),null)(m)},511:function(e,t,a){"use strict";var n=a(15),r=a(16),o=a(18),i=a(17),c=a(0),s=a.n(c),l=a(12),u=a(51),d=a(531),m=a(529),p=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).disableBody=function(e){return Object(m.a)(e)},r.enableBody=function(e){return Object(m.b)(e)},r.state={},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tourConfig.map((function(e,t){return{selector:'[data-tut="reactour_'+ ++t+'"]',content:e}}));return console.log(t),s.a.createElement(d.a,{onRequestClose:function(){return e.props.dispatch(Object(u.f)())},steps:t,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),a}(c.Component);t.a=Object(l.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(p)},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors}}]);
//# sourceMappingURL=46.27bf7365.chunk.js.map