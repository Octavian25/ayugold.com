(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[45,5],{120:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},1207:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(23),c=t(25),i=t(24),s=t(0),l=t.n(s),o=t(478),d=t.n(o),u=t(480),m=t.n(u),p=t(15),b=t(467),h=t(468),f=function(e){var a={};return e.kadar||(a.kadar="Tidak Boleh kosong"),a},E=t(11),v=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={response:"",kode_perhiasan:""},r}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-lg-10"},l.a.createElement(b.a,{name:"kadar",type:"number",normalize:function(e){return e&&e.toUpperCase()},component:E.a,label:"Kadar Cetak"})),l.a.createElement("div",{className:"col-md-2 col-lg-2"},l.a.createElement("label",{htmlFor:"",className:"text-white"},"Button"),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-info btn-block",disabled:this.props.onSend},this.props.onSend?l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",l.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),t}(s.Component);v=Object(h.a)({form:"kadarPerhiasan",validate:f,enableReinitialize:!0})(v);var k=Object(p.b)()(v),j=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={response:"",kode_perhiasan:""},r}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-lg-10"},l.a.createElement(b.a,{name:"kadar",type:"number",normalize:function(e){return e&&e.toUpperCase()},component:E.a,label:"Kadar Beli"})),l.a.createElement("div",{className:"col-md-2 col-lg-2"},l.a.createElement("label",{htmlFor:"",className:"text-white"},"Button"),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-info btn-block",disabled:this.props.onSend},this.props.onSend?l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",l.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),t}(s.Component);j=Object(h.a)({form:"kadarPembelian",validate:f,enableReinitialize:!0})(j);var O=Object(p.b)()(j),g=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={response:"",kode_perhiasan:""},r}return Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-10 col-lg-10"},l.a.createElement(b.a,{name:"kadar",type:"number",normalize:function(e){return e&&e.toUpperCase()},component:E.a,label:"Kadar Jual"})),l.a.createElement("div",{className:"col-md-2 col-lg-2"},l.a.createElement("label",{htmlFor:"",className:"text-white"},"Button"),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-info btn-block",disabled:this.props.onSend},this.props.onSend?l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",l.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),t}(s.Component);g=Object(h.a)({form:"kadarPenjualan",validate:f,enableReinitialize:!0})(g);var N=Object(p.b)()(g),S=t(177),y=t(8),A=t.n(y),D=t(505),K=t.n(D),C=t(120),_=t(16),B=t.n(_),R=t(479),x=t.n(R),w=t(26),T=t(3),L=t(50),P=t(506),G=t(51),I=t(508),F=t(9),U=u.Search.SearchBar,J=u.CSVExport.ExportCSVButton;var M=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).changeTable=function(e){return function(e){r.props.dispatch(Object(S.c)(e.target.value))}},r.state={Kadar:[],response:"",tipe:"KADAR-CETAK",columns:[{dataField:"kadar",text:"Kadar"},{dataField:"type_kadar",text:"Tipe Kadar"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-danger mr-2","data-tut":"reactour_4",onClick:function(){return e=r.props.dispatch,t=a.kadar,n=a.type_kadar,void A.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){if(a.isConfirmed){var r={data:{kadar:t,type_kadar:n}};Object(T.a)("rate",r).then((function(a){return Object(w.b)("Data Berhasil Dihapus!").then((function(){return e(Object(S.c)(n))}))})).catch((function(e){return Object(w.c)("Data Gagal Dihapus!").then((function(){return Object(w.a)("Data Gagal Dihapus Di Kadar",r,e)}))}))}}));var e,t,n}},l.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"))}}]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(S.c)("KADAR-CETAK"))}},{key:"handleSubmit_perhiasan",value:function(e){var a=this,t={kadar:e.kadar,type_kadar:"KADAR-CETAK"};this.props.dispatch(Object(F.t)()),Object(T.c)("kadar/add",t).then((function(){return a.props.dispatch(Object(L.g)())})).then((function(e){return Object(w.b)("Data Berhasil Ditambah!").then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(S.c)("KADAR-CETAK"))})).then((function(){return a.props.dispatch(Object(C.a)("kadarPerhiasan"))}))})).catch((function(e){return Object(w.c)("Data Gagal Ditambah!").then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())}))}))}},{key:"handleSubmit_perhiasan_edit",value:function(e){var a=this,t={kadar:e.kadar,type_kadar:"KADAR-CETAK"};this.props.dispatch(Object(F.t)()),Object(T.d)("rate",t).then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())})).then((function(e){return Object(w.b)("Data Berhasil Diubah!").then((function(){return a.props.dispatch(Object(S.c)("KADAR-CETAK"))}))})).catch((function(e){return Object(w.c)("Data Gagal Diubah!").then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())}))}))}},{key:"handleSubmit_pembelian",value:function(e){var a=this,t={kadar:e.kadar,type_kadar:"KADAR-BELI"};this.props.dispatch(Object(F.t)()),Object(T.c)("kadar/add",t).then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())})).then((function(e){return Object(w.b)("Data Berhasil Ditambah!").then((function(){return a.props.dispatch(Object(S.c)("KADAR-BELI"))})).then((function(){return a.props.dispatch(Object(C.a)("kadarPembelian"))}))})).catch((function(e){return Object(w.c)("Data Gagal Ditambah!").then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())}))}))}},{key:"handleSubmit_pembelian_edit",value:function(e){var a=this,t={kadar:e.kadar,type_kadar:"KADAR-BELI"};this.props.dispatch(Object(F.t)()),Object(T.d)("rate",t).then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())})).then((function(e){return Object(w.b)("Data Berhasil Diubah!").then((function(){return a.props.dispatch(Object(S.c)("KADAR-BELI"))}))})).catch((function(e){return Object(w.c)("Data Gagal Diubah!").then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())}))}))}},{key:"handleSubmit_penjualan",value:function(e){var a=this,t={kadar:e.kadar,type_kadar:"KADAR-JUAL"};this.props.dispatch(Object(F.t)()),Object(T.c)("kadar/add",t).then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())})).then((function(e){return Object(w.b)("Data Berhasil Ditambah!").then((function(){return a.props.dispatch(Object(S.c)("KADAR-JUAL"))})).then((function(){return a.props.dispatch(Object(C.a)("kadarPenjualan"))}))})).catch((function(e){return Object(w.c)("Data Gagal Ditambah!").then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())}))}))}},{key:"handleSubmit_penjualan_edit",value:function(e){var a=this,t={kadar:e.kadar,type_kadar:"KADAR-JUAL"};this.props.dispatch(Object(F.t)()),Object(T.d)("rate",t).then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())})).then((function(e){return Object(w.b)("Data Berhasil Diubah!").then((function(){return a.props.dispatch(Object(S.c)("KADAR-JUAL"))}))})).catch((function(e){return Object(w.c)("Data Gagal Diubah!").then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(L.g)())}))}))}},{key:"tambahModal",value:function(){this.props.dispatch(Object(L.j)()),this.setState({isEdit:!1})}},{key:"editModal",value:function(){this.props.dispatch(Object(L.j)()),this.setState({isEdit:!0})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid",style:{color:"black"}},l.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),l.a.createElement(I.a,{tourConfig:["Untuk Menambahkan Data Kadar, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah List untuk mengubah data sesuai nama list yang dipilih","Ini adalah Data Kadar yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih"]}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement(G.default,{title:"Data Kadar"}),l.a.createElement("div",{className:"card-body"},l.a.createElement(P.default,{content:this.state.isEdit?l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("ul",{className:"nav nav-tabs nav-justified nav-bordered mb-3"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#hutang-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},l.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),l.a.createElement("span",{className:"d-none d-lg-block"},"Kadar Perhiasan"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#stock-tab","data-toggle":"tab","aria-expanded":"true",className:"nav-link active"},l.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),l.a.createElement("span",{className:"d-none d-lg-block"},"Harga Beli"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#piutang-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},l.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),l.a.createElement("span",{className:"d-none d-lg-block"},"Harga Jual")))),l.a.createElement("div",{className:"tab-content"},l.a.createElement("div",{className:"tab-pane",id:"hutang-tab"},l.a.createElement(k,{onSubmit:function(a){return e.handleSubmit_perhiasan_edit(a)},onSend:this.props.onSend})),l.a.createElement("div",{className:"tab-pane show active",id:"stock-tab"},l.a.createElement(O,{onSubmit:function(a){return e.handleSubmit_pembelian_edit(a)},onSend:this.props.onSend})),l.a.createElement("div",{className:"tab-pane",id:"piutang-tab"},l.a.createElement(N,{onSubmit:function(a){return e.handleSubmit_penjualan_edit(a)},onSend:this.handle.onSend})))):l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("ul",{className:"nav nav-tabs nav-justified nav-bordered mb-3"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#hutang-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},l.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),l.a.createElement("span",{className:"d-none d-lg-block"},"Kadar Cetak"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#stock-tab","data-toggle":"tab","aria-expanded":"true",className:"nav-link active"},l.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),l.a.createElement("span",{className:"d-none d-lg-block"},"Kadar Beli"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"#piutang-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},l.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),l.a.createElement("span",{className:"d-none d-lg-block"},"Kadar Jual")))),l.a.createElement("div",{className:"tab-content"},l.a.createElement("div",{className:"tab-pane",id:"hutang-tab"},l.a.createElement(k,{onSubmit:function(a){return e.handleSubmit_perhiasan(a)},onSend:this.props.onSend})),l.a.createElement("div",{className:"tab-pane show active",id:"stock-tab"},l.a.createElement(O,{onSubmit:function(a){return e.handleSubmit_pembelian(a)},onSend:this.props.onSend})),l.a.createElement("div",{className:"tab-pane",id:"piutang-tab"},l.a.createElement(N,{onSubmit:function(a){return e.handleSubmit_penjualan(a)},onSend:this.props.onSend})))),title:this.state.isEdit?"Edit Data Kadar":"Tambah Data Kadar"}),l.a.createElement("form",{action:"#",className:"mb-5"},l.a.createElement("div",{className:"form-body"},l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data Kadar"))))),l.a.createElement("div",{"data-tut":"reactour_3"},this.props.kadarList?l.a.createElement(m.a,{keyField:"id",data:this.props.kadarList,columns:this.state.columns,search:!0},(function(a){return l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:" col-md-3 col-lg-3 text-left mb-3","data-tut":"reactour_2"},l.a.createElement("select",{className:"form-control",onChange:e.changeTable()},l.a.createElement("option",{value:"KADAR-CETAK"},"KADAR CETAK"),l.a.createElement("option",{value:"KADAR-BELI"},"KADAR BELI"),l.a.createElement("option",{value:"KADAR-JUAL"},"KADAR JUAL"))),l.a.createElement("div",{className:" col-md-9 col-lg-9 text-right mb-3"},l.a.createElement(U,Object.assign({},a.searchProps,{className:"form-control",placeholder:"PENCARIAN",style:{margin:0,top:"50%"}})))),l.a.createElement(d.a,Object.assign({},a.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:x()()})),l.a.createElement(J,Object.assign({},a.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):l.a.createElement("div",null,this.props.error?l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:K.a,style:{width:"30%"},alt:"NOT RESPOND"}),l.a.createElement("br",null),l.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):l.a.createElement(B.a,{width:"100%",height:180}))))))))}}]),t}(s.Component);a.default=Object(p.b)((function(e){return{kadarList:e.provinsi.kadar,alert:e.provinsi.alert,error:e.provinsi.error,onSend:e.provinsi.onSend}}),null)(M)},505:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"},506:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(23),c=t(25),i=t(24),s=t(1203),l=t(0),o=t.n(l),d=t(15),u=t(50),m=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(s.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(u.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},o.a.createElement(s.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},o.a.createElement(s.a.Title,null,this.props.title||"")),o.a.createElement(s.a.Body,null,this.props.content||""))}}]),t}(l.Component);a.default=Object(d.b)((function(e){return{show:e.modal.show}}),null)(m)},508:function(e,a,t){"use strict";var n=t(22),r=t(23),c=t(25),i=t(24),s=t(0),l=t.n(s),o=t(15),d=t(50),u=t(526),m=t(524),p=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).disableBody=function(e){return Object(m.a)(e)},r.enableBody=function(e){return Object(m.b)(e)},r.state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.props.tourConfig.map((function(e,a){return{selector:'[data-tut="reactour_'+ ++a+'"]',content:e}}));return console.log(a),l.a.createElement(u.a,{onRequestClose:function(){return e.props.dispatch(Object(d.f)())},steps:a,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),t}(s.Component);a.a=Object(o.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(p)}}]);
//# sourceMappingURL=45.7bba94c9.chunk.js.map