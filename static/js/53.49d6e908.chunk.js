(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[53,5],{1240:function(e,a,t){"use strict";t.r(a);var r=t(35),n=t(36),s=t(38),o=t(37),i=t(0),c=t.n(i),l=t(477),u=t.n(l),m=t(503),d=t.n(m),p=t(18),b=t(466),h=t(467),f=t(21),k=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={response:"",kategori:""},n}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3 col-md-3"}),c.a.createElement("div",{className:"col-md-6 text-center"},c.a.createElement(b.a,{name:"kodeParameter",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Kode Parameter"})),c.a.createElement("div",{className:"col-lg-3 col-md-3"}),c.a.createElement("div",{className:"col-md-12 col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:this.props.onSend},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Submit",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),t}(i.Component);k=Object(h.a)({form:"Parameter",validationkodeParameter:function(e){var a={};return e.kodeParameter||(a.kodeParameter="Tidak Boleh kosong"),a},enableReinitialize:!0})(k);var v=Object(p.b)()(k),E=t(194),y=t(10),O=t.n(y),j=t(182),g=t(502),S=t.n(g),N=t(56),P=t(3),C=t(46),T=t(505),D=t(184),B=t(507),w=t(11),x=m.Search.SearchBar,A=m.CSVExport.ExportCSVButton;var F=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={ParameterTransaksi:[],response:"",columns:[{dataField:"kategori_transaksi",text:"Kode Parameter Transaksi"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-danger mr-2","data-tut":"reactour_3",onClick:function(){return e=n.props.dispatch,t=a.kategori_transaksi,void O.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&Object(P.a)("transaksi-kas/delete/"+t).then((function(a){return Object(N.b)("Data Berhasil Dihapus!").then((function(){return e(Object(E.b)())}))})).catch((function(e){return Object(N.c)("Data Gagal Dihapus!")}))}));var e,t}},c.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"))},headerStyle:function(){return{width:"10%"}}}]},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(E.b)())}},{key:"handleSubmit",value:function(e){var a=this,t={kategori_transaksi:e.kodeParameter};this.props.dispatch(Object(w.t)()),Object(P.c)("transaksi-kas/add",t).then((function(){return a.props.dispatch(Object(w.k)())})).then((function(){return a.props.dispatch(Object(C.g)())})).then((function(e){return Object(N.b)("Data Berhasil Ditambah!").then((function(){return a.props.dispatch(Object(E.b)())})).then((function(){return a.props.dispatch(Object(j.a)("Parameter"))}))})).catch((function(e){return Object(N.c)("Data Gagal Ditambah!").then((function(){return Object(N.a)("Data Gagal Ditambah Di Parameter Transaksi",t,e)})).then((function(){return a.props.dispatch(Object(C.g)())}))}))}},{key:"tambahModal",value:function(){this.props.dispatch(Object(C.j)()),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},c.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")),c.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),c.a.createElement(B.a,{tourConfig:["Untuk Menambahkan Data Parameter Transaksi, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah data Parameter Transaksi yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih"]}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(D.default,{title:" Data ParameterTransaksi"}),c.a.createElement("div",{className:"card-body"},c.a.createElement(T.default,{content:c.a.createElement(v,{onSubmit:function(a){return e.handleSubmit(a)},onSend:this.props.onSend}),title:"Tambah Data Parameter Transaksi"}),c.a.createElement("form",{action:"#"},c.a.createElement("div",{className:"form-body"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data Parameter"))))),c.a.createElement("div",{"data-tut":"reactour_2"},this.props.kodeParameter?c.a.createElement(d.a,{keyField:"kodeParameter",data:this.props.kodeParameter,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"text-right mt-5 mb-3"},c.a.createElement(x,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),c.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:S()()})),c.a.createElement(A,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):null))))))}}]),t}(i.Component);a.default=Object(p.b)((function(e){return{kodeParameter:e.provinsi.parameterTransaksi,alert:e.provinsi.alert,error:e.provinsi.error,onSend:e.provinsi.onSend}}),null)(F)},182:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var r=t(19),n=(r.a.arrayInsert,r.a.arrayMove,r.a.arrayPop,r.a.arrayPush,r.a.arrayRemove,r.a.arrayRemoveAll,r.a.arrayShift,r.a.arraySplice,r.a.arraySwap,r.a.arrayUnshift,r.a.autofill,r.a.blur,r.a.change,r.a.clearAsyncError,r.a.clearFields,r.a.clearSubmit,r.a.clearSubmitErrors,r.a.destroy,r.a.focus,r.a.initialize,r.a.registerField,r.a.reset);r.a.resetSection,r.a.setSubmitFailed,r.a.setSubmitSucceeded,r.a.startAsyncValidation,r.a.startSubmit,r.a.stopAsyncValidation,r.a.stopSubmit,r.a.submit,r.a.touch,r.a.unregisterField,r.a.untouch,r.a.updateSyncWarnings,r.a.updateSyncErrors},505:function(e,a,t){"use strict";t.r(a);var r=t(35),n=t(36),s=t(38),o=t(37),i=t(1201),c=t(0),l=t.n(c),u=t(18),m=t(46),d=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(i.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(m.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},l.a.createElement(i.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},l.a.createElement(i.a.Title,null,this.props.title||"")),l.a.createElement(i.a.Body,null,this.props.content||""))}}]),t}(c.Component);a.default=Object(u.b)((function(e){return{show:e.modal.show}}),null)(d)},507:function(e,a,t){"use strict";var r=t(35),n=t(36),s=t(38),o=t(37),i=t(0),c=t.n(i),l=t(18),u=t(46),m=t(525),d=t(523),p=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).disableBody=function(e){return Object(d.a)(e)},n.enableBody=function(e){return Object(d.b)(e)},n.state={},n}return Object(n.a)(t,[{key:"render",value:function(){var e=this,a=this.props.tourConfig.map((function(e,a){return{selector:'[data-tut="reactour_'+ ++a+'"]',content:e}}));return console.log(a),c.a.createElement(m.a,{onRequestClose:function(){return e.props.dispatch(Object(u.f)())},steps:a,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),t}(i.Component);a.a=Object(l.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(p)}}]);
//# sourceMappingURL=53.49d6e908.chunk.js.map