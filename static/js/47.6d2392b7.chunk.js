(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[47,5],{1209:function(e,a,t){"use strict";t.r(a);var n=t(35),r=t(36),s=t(38),i=t(37),l=t(0),o=t.n(l),c=t(477),u=t.n(c),d=t(503),m=t.n(d),p=t(47),h=t(466),b=t(467),f=t(18),S=function(e){var a={};return e.kodeExt||(a.kodeExt="Tidak Boleh Kosong"),e.kodeSales?e.kodeSales.length>5&&(a.kodeSales="Kode Maksimal 5"):a.kodeSales="Tidak Boleh Kosong",e.namaSales?e.namaSales>30&&(a.namaSales="Nama Terlalu Panjang"):a.namaSales="Tidak Boleh Kosong",a},E=t(21),v=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(p.a)({},e,a.target.value))}},r.state={response:"",kode_salesman:"",nama_salesman:"",rekening_rp:"",rekening_usd:"",plafond:"",kodeExt:"",status:"AKTIF"},r}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement("form",{onSubmit:this.props.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement(h.a,{name:"kodeSales",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:E.a,label:"Kode Salesman",limit:5})),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement(h.a,{name:"namaSales",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:E.a,label:"Nama Salesman"})),o.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?o.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",o.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))}}]),t}(l.Component);v=Object(b.a)({form:"Salesman",validate:S,enableReinitialize:!0})(v);var k=Object(f.b)()(v),O=t(124),j=t(504),g=t.n(j),y=t(10),N=t.n(y),D=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={response:"",kode_salesman:"",nama_salesman:"",rekening_rp:"",rekening_usd:"",plafond:"",kodeExt:"",status:"AKTIF"},r}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement("form",{onSubmit:this.props.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement(h.a,{name:"kodeSales",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:E.a,label:"Kode Salesman",readOnly:!0,limit:5})),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement(h.a,{name:"namaSales",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:E.a,label:"Nama Salesman"})),o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?o.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",o.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))}}]),t}(l.Component);D=Object(b.a)({form:"SalesmanEdit",validate:S,enableReinitialize:!0})(D);var C=Object(f.b)((function(e){return{initialValues:{tipeData:e.provinsi.editSalesman.tipeData,namaSales:e.provinsi.editSalesman.namaLokasi,kodeSales:e.provinsi.editSalesman.kodeLokasi,kodeExt:e.provinsi.editSalesman.kodeExt}}}),null)(D),x=t(182),_=t(23),B=t.n(_),w=t(502),T=t.n(w),A=t(3),R=t(56),F=t(46),G=t(505),I=t(184),M=t(507),K=t(11),P=d.Search.SearchBar,z=d.CSVExport.ExportCSVButton;var U=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).updateStatus=function(e){console.log(e),r.setState({response:e}),r.props.dispatch(Object(O.d)())},r.state={Salesman:[],response:"",isEdit:!1,columns:[{dataField:"kode_sales",text:"Kode Salesman",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"nama_sales",text:"Nama Salesman"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return e=r.props.dispatch,t=a.kode_sales,void N.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&Object(A.a)("sales/delete/"+t).then((function(){return e(Object(F.g)())})).then((function(a){return Object(R.b)("Data Berhasil Dihapus!").then((function(){return e(Object(O.d)())}))})).catch((function(e){return Object(R.c)("Data Gagal Dihapus!")}))}));var e,t},"data-tut":"reactour_3"},o.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),o.a.createElement("button",{className:"btn btn-warning","data-tut":"reactour_4",onClick:function(){return r.props.dispatch(Object(O.c)(a.kode_sales,a.nama_sales,r.editModal()))}},o.a.createElement("i",{className:"fa fa-edit mr-2"}),"EDIT"))}}]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(O.d)())}},{key:"handleSubmit",value:function(e){var a=this,t={kode_sales:e.kodeSales,nama_sales:e.namaSales};this.props.dispatch(Object(K.t)()),Object(A.c)("sales/add",t).then((function(){return a.props.dispatch(Object(K.k)())})).then((function(){return a.props.dispatch(Object(F.g)())})).then((function(e){return Object(R.b)("Data Berhasil Ditambah!").then((function(){return Object(R.a)("Data Berhasil Ditambah Di Salesman",t)})).then((function(){return a.props.dispatch(Object(O.d)())})).then((function(){return a.props.dispatch(Object(x.a)("Salesman"))}))})).catch((function(t){return a.handleReactive(t,e.kodeSales,{nama_sales:e.namaSales})}))}},{key:"handleReactive",value:function(e,a,t){var n=this;this.props.dispatch(Object(F.g)()),e.response.data.includes("deleted")?Object(R.d)(e,a,"sales/reactive/",t,"sales/edit/").then((function(){return n.props.dispatch(Object(O.d)())})):Object(R.c)("Data Gagal Ditambahkan")}},{key:"handleEdit",value:function(e){var a=this,t={nama_sales:e.namaSales};this.props.dispatch(Object(K.t)()),Object(A.d)("sales/edit/"+e.kodeSales,t).then((function(){return a.props.dispatch(Object(K.k)())})).then((function(){return a.props.dispatch(Object(F.g)())})).then((function(e){return Object(R.b)("Data Berhasil Diubah!").then((function(){return Object(R.a)("Data Berhasil Diubah Di Salesman",t)})).then((function(){return a.props.dispatch(Object(O.d)())}))})).catch((function(e){return Object(R.c)("Data Gagal Diubah!").then((function(){return Object(R.a)("Data Gagal Diubah Di Salesman",t,e)})).then((function(){return a.props.dispatch(Object(F.g)())}))}))}},{key:"editModal",value:function(){this.props.dispatch(Object(F.j)()),this.setState({isEdit:!0})}},{key:"tambahModal",value:function(){this.props.dispatch(Object(F.j)()),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid",style:{color:"black"}},o.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},o.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")),o.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),o.a.createElement(M.a,{tourConfig:["Untuk Menambahkan Data Salesman , Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah data Salesman  yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih","Ini adalah tombol untuk mengubah data pada baris yang dipilih"]}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"card"},o.a.createElement(I.default,{title:"Data Salesman"}),o.a.createElement("div",{className:"card-body"},o.a.createElement(G.default,{content:this.state.isEdit?o.a.createElement(C,{updateStatus:this.updateStatus,onSubmit:function(a){return e.handleEdit(a)},onSend:this.props.onSend}):o.a.createElement(k,{updateStatus:this.updateStatus,onSubmit:function(a){return e.handleSubmit(a)},onSend:this.props.onSend}),title:this.state.isEdit?"Edit Data Salesman":"Tambah Data Salesman"}),o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data Salesman"))),o.a.createElement("div",{className:"col-lg-12","data-tut":"reactour_2"},this.props.salemanList?o.a.createElement(m.a,{keyField:"kodeLokasi",data:this.props.salemanList,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"form-group mt-5 mb-3"},o.a.createElement("div",{className:"text-right"},o.a.createElement(P,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),o.a.createElement("hr",null),o.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:T()()})),o.a.createElement(z,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):o.a.createElement("div",null,this.props.error?o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{alt:"ERROR GET DATA",src:g.a,style:{width:"30%"}}),o.a.createElement("br",null),o.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):o.a.createElement(B.a,{width:"100%",height:300}))))))))}}]),t}(l.Component);a.default=Object(f.b)((function(e){return{salemanList:e.provinsi.salesman,alert:e.provinsi.alert,error:e.provinsi.error,onSend:e.provinsi.onSend}}),null)(U)},182:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(19),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},504:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"},505:function(e,a,t){"use strict";t.r(a);var n=t(35),r=t(36),s=t(38),i=t(37),l=t(1201),o=t(0),c=t.n(o),u=t(18),d=t(46),m=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(l.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(d.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},c.a.createElement(l.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},c.a.createElement(l.a.Title,null,this.props.title||"")),c.a.createElement(l.a.Body,null,this.props.content||""))}}]),t}(o.Component);a.default=Object(u.b)((function(e){return{show:e.modal.show}}),null)(m)},507:function(e,a,t){"use strict";var n=t(35),r=t(36),s=t(38),i=t(37),l=t(0),o=t.n(l),c=t(18),u=t(46),d=t(525),m=t(523),p=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).disableBody=function(e){return Object(m.a)(e)},r.enableBody=function(e){return Object(m.b)(e)},r.state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.props.tourConfig.map((function(e,a){return{selector:'[data-tut="reactour_'+ ++a+'"]',content:e}}));return console.log(a),o.a.createElement(d.a,{onRequestClose:function(){return e.props.dispatch(Object(u.f)())},steps:a,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),t}(l.Component);a.a=Object(c.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(p)}}]);
//# sourceMappingURL=47.6d2392b7.chunk.js.map