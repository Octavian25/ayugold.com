(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[53,5],{120:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},1225:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(23),o=t(25),c=t(24),i=t(0),s=t.n(i),l=t(478),u=t.n(l),m=t(480),d=t.n(m),p=t(15),b=t(8),h=t.n(b),f=t(280),k=t(4),v=t(467),g=t(468),E=function(e){var a={};return e.kodeKelompok||(a.kodeKelompok="Tidak Boleh kosong"),e.keterangan||(a.keterangan="Tidak Boleh kosong"),a},y=t(11),O=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={response:"",kategori:""},r}return Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement(v.a,{name:"kodeKelompok",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:y.a,label:"Kode Kelompok"})),s.a.createElement("div",{className:"col-md-6"},s.a.createElement(v.a,{name:"keterangan",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:y.a,label:"Keterangan"})),s.a.createElement("div",{className:"col-md-12 col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:this.props.onSend},this.props.onSend?s.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Submit",s.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),t}(i.Component);O=Object(g.a)({form:"KelompokTambah",validate:E,enableReinitialize:!0})(O);var j=Object(p.b)()(O),N=t(120),S=t(479),C=t.n(S),K=t(3),B=t(26),D=t(50),w=t(506),x=t(16),T=t.n(x),_=t(51),A=t(508),F=t(9),G=m.Search.SearchBar,I=m.CSVExport.ExportCSVButton;var P=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={Kelompok:[],response:"",columns:[{dataField:"kode_group",text:"Kode Kelompok"},{dataField:"nama_group",text:"Nama Group"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-danger mr-2","data-tut":"reactour_3",onClick:function(){return e=r.props.dispatch,t=a.kode_group,void h.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&Object(K.a)("group/delete/by-kode-group/"+t).then((function(a){return Object(B.b)("Data Berhasil Dihapus!").then((function(){return e(Object(f.b)())}))})).catch((function(e){return Object(B.c)("Data Gagal Dihapus!")}))}));var e,t}},s.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"))},headerStyle:function(){return{width:"20%"}}}]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.b)())}},{key:"handleSubmit",value:function(e){var a=this,t={kode_group:e.kodeKelompok,nama_group:e.keterangan};this.props.dispatch(Object(F.t)()),Object(K.c)("group/add",t).then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(D.g)())})).then((function(e){return Object(B.b)("Data Berhasil Ditambah!").then((function(){return a.props.dispatch(Object(f.b)())})).then((function(){return a.props.dispatch(Object(N.a)("KelompokTambah"))}))})).catch((function(t){return a.handleReactive(t,e.kodeKelompok,{nama_group:e.keterangan},a.props.dispatch(Object(D.g)()),a.props.dispatch(Object(F.k)()))}))}},{key:"handleReactive",value:function(e,a,t){var n=this;this.props.dispatch(Object(D.g)()),e.response.data.includes("DELETED")?Object(B.d)(e,a,"group/reactive/by-kode-group/",t,"group/edit/by-kode-group/").then((function(){return n.props.dispatch(Object(f.b)())})):Object(B.c)("Data Gagal Ditambahkan")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid",style:{color:"black"}},s.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},s.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")),s.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(k.b,{to:"/KlasifikasiBarang"},s.a.createElement("button",{type:"button",className:"btn btn-secondary","data-tut":"reactour_4"},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),s.a.createElement(A.a,{tourConfig:["Untuk Menambahkan Data Kelompok, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah Data Kelompok yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih","Ini adalah tombol navigasi untuk kembali"]}),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"card"},s.a.createElement(_.default,{title:"Data Kelompok"}),s.a.createElement("div",{className:"card-body"},s.a.createElement(w.default,{content:s.a.createElement(j,{onSubmit:function(a){return e.handleSubmit(a)},onSend:this.props.onSend}),title:"Tambah Data Kelompok"}),s.a.createElement("form",{action:"#"},s.a.createElement("div",{className:"form-body"},s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{name:"simpan",id:"simpan","data-tut":"reactour_1",type:"button",className:"btn btn-info",onClick:function(){return e.props.dispatch(Object(D.j)())}},"Tambah Data Kelompok"))))),s.a.createElement("div",{"data-tut":"reactour_2"},this.props.listKelompok?s.a.createElement(d.a,{keyField:"kode_kelompok",data:this.props.listKelompok,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"text-right mt-5 mb-3"},s.a.createElement(G,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),s.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:C()()})),s.a.createElement(I,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement(T.a,{width:"100%",height:180})))))))}}]),t}(i.Component);a.default=Object(p.b)((function(e){return{listKelompok:e.provinsi.Kelompok,alert:e.provinsi.alert,error:e.provinsi.error,onSend:e.provinsi.onSend}}),null)(P)},506:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(23),o=t(25),c=t(24),i=t(1203),s=t(0),l=t.n(s),u=t(15),m=t(50),d=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(i.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(m.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},l.a.createElement(i.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},l.a.createElement(i.a.Title,null,this.props.title||"")),l.a.createElement(i.a.Body,null,this.props.content||""))}}]),t}(s.Component);a.default=Object(u.b)((function(e){return{show:e.modal.show}}),null)(d)},508:function(e,a,t){"use strict";var n=t(22),r=t(23),o=t(25),c=t(24),i=t(0),s=t.n(i),l=t(15),u=t(50),m=t(526),d=t(524),p=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).disableBody=function(e){return Object(d.a)(e)},r.enableBody=function(e){return Object(d.b)(e)},r.state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.props.tourConfig.map((function(e,a){return{selector:'[data-tut="reactour_'+ ++a+'"]',content:e}}));return console.log(a),s.a.createElement(m.a,{onRequestClose:function(){return e.props.dispatch(Object(u.f)())},steps:a,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),t}(i.Component);a.a=Object(l.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(p)}}]);
//# sourceMappingURL=53.bbf7aa36.chunk.js.map