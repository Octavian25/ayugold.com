(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[42,5],{1222:function(e,a,t){"use strict";t.r(a);var n=t(35),r=t(36),i=t(38),o=t(37),s=t(0),l=t.n(s),c=t(477),d=t.n(c),u=t(503),m=t.n(u),p=t(18),b=t(466),h=t(467),k=t(10),f=t.n(k),E=t(601),v=t(21),g=t(3),j=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).submit=function(){console.log(JSON.stringify(r.state))},r.state={response:"",listPerhiasan:[],listJual:[],listBeli:[],listKategori:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(g.b)("kadar/get/by-type/kadar-cetak").then((function(a){e.setState({listPerhiasan:a.data})})).catch((function(e){return f.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(g.b)("kadar/get/by-type/kadar-beli").then((function(a){e.setState({listBeli:a.data})})).catch((function(e){return f.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(g.b)("kadar/get/by-type/kadar-jual").then((function(a){e.setState({listJual:a.data})})).catch((function(e){return f.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(g.b)("kategori/get/all").then((function(a){e.setState({listKategori:a.data})})).catch((function(e){return f.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kategori Error",showConfirmButton:!1,timer:1500})}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(b.a,{component:v.b,label:"Kode Kategori",name:"kodeKategori",value:this.props.status,normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listKategori.map((function(e){return{value:e.kode_kategori,name:e.nama_kategori}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(b.a,{name:"kodeJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:v.a,label:"Kode Jenis"})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(b.a,{name:"namaJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:v.a,label:"Nama Jenis"})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(b.a,{component:v.b,label:"Kadar Cetak",name:"kadarCetak",value:"DEFAULT",className:"form-control",options:this.state.listPerhiasan.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(b.a,{component:v.b,label:"Kadar Beli",name:"kadarBeli",value:"DEFAULT",className:"form-control",options:this.state.listBeli.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(b.a,{component:v.b,label:"Kadar Jual",name:"kadarJual",value:"DEFAULT",className:"form-control",options:this.state.listJual.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:this.props.onSend},this.props.onSend?l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Submit")))))}}]),t}(s.Component);j=Object(h.a)({form:"KodeBarang",enableReinitialize:!0,validate:E.a})(j);var y=Object(p.b)()(j),O=t(121),N=t(504),B=t.n(N),S=t(5),K=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={response:"",listPerhiasan:[],listJual:[],listBeli:[],listKategori:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(g.b)("kadar/get/by-type/kadar-cetak").then((function(a){e.setState({listPerhiasan:a.data})})).catch((function(e){return f.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(g.b)("kadar/get/by-type/kadar-beli").then((function(a){e.setState({listBeli:a.data})})).catch((function(e){return f.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(g.b)("kadar/get/by-type/kadar-jual").then((function(a){e.setState({listJual:a.data})})).catch((function(e){return f.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kadar Error",showConfirmButton:!1,timer:1500})})),Object(g.b)("kategori/get/all").then((function(a){e.setState({listKategori:a.data})})).catch((function(e){return f.a.fire({position:"top-end",icon:"error",title:"Ambil Data Kategori Error",showConfirmButton:!1,timer:1500})}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(b.a,{component:v.b,label:"Kode Kategori",name:"kodeKategori",value:this.props.status,normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listKategori.map((function(e){return{value:e.kode_kategori,name:e.kode_kategori}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(b.a,{name:"kodeJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:v.a,label:"Kode Jenis"})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(b.a,{name:"namaJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:v.a,label:"Nama Jenis"})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(b.a,{component:v.b,label:"Kadar Cetak",name:"kadarCetak",value:"DEFAULT",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listPerhiasan.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(b.a,{component:v.b,label:"Kadar Beli",name:"kadarBeli",value:"DEFAULT",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listBeli.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(b.a,{component:v.b,label:"Kadar Jual",name:"kadarJual",value:"DEFAULT",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listJual.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:this.props.onSend},this.props.onSend?l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Submit")))))}}]),t}(s.Component);K=Object(h.a)({form:"KodeBarangEdit",enableReinitialize:!0,validate:E.a})(K);var C=Object(p.b)((function(e){return{initialValues:{kodeJenis:e.provinsi.editRosok.kodeJenis,kodeKategori:e.provinsi.editRosok.kodeKategori,namaJenis:e.provinsi.editRosok.namaJenis,kadarBeli:e.provinsi.editRosok.kadarBeli,kadarJual:e.provinsi.editRosok.kadarJual,kadarCetak:e.provinsi.editRosok.kadarCetak}}}),null)(K),J=t(192),D=t(182),_=t(23),A=t.n(_),T=t(502),w=t.n(T),x=t(56),F=t(46),P=t(505),U=t(184),R=t(507),L=t(11),z=u.Search.SearchBar,I=u.CSVExport.ExportCSVButton;var M=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={KodeBarang:[],response:"",display:"none",columns:[{dataField:"kode_kategori",text:"Kode Kategori",headerStyle:function(){return{width:"10%"}}},{dataField:"kode_jenis",text:"Kode Jenis",headerStyle:function(){return{width:"10%"}}},{dataField:"kadar_cetak",text:"Kadar Cetak",headerStyle:function(){return{width:"10%"}}},{dataField:"kadar_beli",text:"Kadar Beli",headerStyle:function(){return{width:"10%"}}},{dataField:"kadar_jual",text:"Kadar Jual",headerStyle:function(){return{width:"10%"}}},{dataField:"nama_jenis",text:"Nama Jenis"},{dataField:"link",text:"Aksi",csvExport:!1,formatter:function(e,a){return l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return e=r.props.dispatch,t=a.kode_jenis,void f.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&Object(g.a)("jenis/delete/by-kode-jenis/"+t).then((function(a){return Object(x.b)("Data Berhasil Dihapus!").then((function(){return e(Object(J.b)())}))})).catch((function(e){return Object(x.c)("Data Gagal Dihapus!")}))}));var e,t},"data-tut":"reactour_3"},l.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),l.a.createElement("button",{"data-tut":"reactour_4",className:"btn btn-warning",onClick:function(){return r.props.dispatch(Object(O.c)(a.kode_jenis,a.kode_kategori,a.nama_jenis,a.kadar_beli,a.kadar_jual,a.kadar_cetak,r.editModal()))}},l.a.createElement("i",{className:"fa fa-edit mr-2"}),"EDIT"))}}]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(J.b)())}},{key:"handleSubit",value:function(e){var a=this,t={kode_kategori:e.kodeKategori,kode_kelompok:"PERHIASAN",kode_jenis:e.kodeJenis,kadar_cetak:e.kadarCetak,kadar_beli:e.kadarBeli,nama_jenis:e.namaJenis,kadar_jual:e.kadarJual},n={kode_kategori:e.kodeKategori,kode_kelompok:"PERHIASAN",kadar_cetak:e.kadarCetak,kadar_beli:e.kadarBeli,nama_jenis:e.namaJenis,kadar_jual:e.kadarJual};this.props.dispatch(Object(L.t)()),Object(g.c)("jenis/add",t).then((function(){return a.props.dispatch(Object(L.k)())})).then((function(){return a.props.dispatch(Object(F.g)())})).then((function(e){return Object(x.b)("Data Berhasil Ditambah!").then((function(){return Object(x.a)("Data Berhasil Ditambah Di Kode Barang",t)})).then((function(){return a.props.dispatch(Object(J.b)())})).then((function(){return a.props.dispatch(Object(D.a)("KodeBarang"))}))})).catch((function(t){return a.handleReactive(t,e.kodeJenis,n,a.props.dispatch(Object(L.k)()),a.props.dispatch(Object(F.g)()))}))}},{key:"handleEdit",value:function(e){var a=this,t={kode_kategori:e.kodeKategori,kode_kelompok:"PERHIASAN",kode_jenis:e.kodeJenis,kadar_cetak:e.kadarCetak,kadar_beli:e.kadarBeli,nama_jenis:e.namaJenis,kadar_jual:e.kadarJual};this.props.dispatch(Object(L.t)()),Object(g.d)("subcategory",t).then((function(){return a.props.dispatch(Object(L.k)())})).then((function(){return a.props.dispatch(Object(F.g)())})).then((function(e){return Object(x.b)("Data Berhasil Diubah!").then((function(){return a.props.dispatch(Object(J.b)())}))})).catch((function(e){return Object(x.c)("Data Gagal Diubah!").then((function(){return a.props.dispatch(Object(F.g)())}))}))}},{key:"tambahModal",value:function(){this.props.dispatch(Object(F.j)()),this.setState({isEdit:!1})}},{key:"editModal",value:function(){this.props.dispatch(Object(F.j)()),this.setState({isEdit:!0})}},{key:"handleReactive",value:function(e,a,t){var n=this;this.props.dispatch(Object(F.g)()),e.response.data.includes("Deleted")?Object(x.d)(e,a,"jenis/reactive/by-kode-jenis/",t,"jenis/edit/by-kode-jenis/").then((function(){return n.props.dispatch(Object(J.b)())})):Object(x.c)("Data Gagal Ditambahkan")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid",style:{color:"black"}},l.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),l.a.createElement("ol",{className:"breadcrumb mb-2"},l.a.createElement(S.b,{to:"/KlasifikasiBarang"},l.a.createElement("button",{type:"button",className:"btn btn-secondary ","data-tut":"reactour_5"},l.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),l.a.createElement(R.a,{tourConfig:["Untuk Menambahkan Data Kelompok, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah Data Kelompok yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih","Ini adalah tombol untuk mengubah data pada baris yang dipilih","Ini adalah tombol navigasi untuk kembali"]}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement(U.default,{title:" Data Kode Jenis"}),l.a.createElement("div",{className:"card-body"},l.a.createElement(P.default,{content:this.state.isEdit?l.a.createElement(C,{onSubmit:function(a){return e.handleEdit(a)},onSend:this.props.onSend}):l.a.createElement(y,{onSubmit:function(a){return e.handleSubit(a)},onSend:this.props.onSend}),title:this.state.isEdit?"Edit Data Kode Jenis":"Tambah data Kode Jenis"}),l.a.createElement("form",{action:"#"},l.a.createElement("div",{className:"form-body"},l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data",l.a.createElement("i",{className:"fa fa-plus ml-3"})))))),l.a.createElement("div",{"data-tut":"reactour_2"},this.props.KodeBarangList?l.a.createElement(m.a,{keyField:"id",data:this.props.KodeBarangList,columns:this.state.columns,search:!0},(function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"text-right mt-5 mb-3"},l.a.createElement(z,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),l.a.createElement(d.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:w()()})),l.a.createElement(I,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):l.a.createElement("div",null,this.props.error?l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:B.a,style:{width:"30%"},alt:"NOT RESPOND"}),l.a.createElement("br",null),l.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):l.a.createElement(A.a,{width:"100%",height:180}))))))))}}]),t}(s.Component);a.default=Object(p.b)((function(e){return{KodeBarangList:e.provinsi.kodeBarang,alert:e.provinsi.alert,error:e.provinsi.error}}),null)(M)},182:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(19),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors},504:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"},505:function(e,a,t){"use strict";t.r(a);var n=t(35),r=t(36),i=t(38),o=t(37),s=t(1201),l=t(0),c=t.n(l),d=t(18),u=t(46),m=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(s.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(u.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},c.a.createElement(s.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},c.a.createElement(s.a.Title,null,this.props.title||"")),c.a.createElement(s.a.Body,null,this.props.content||""))}}]),t}(l.Component);a.default=Object(d.b)((function(e){return{show:e.modal.show}}),null)(m)},507:function(e,a,t){"use strict";var n=t(35),r=t(36),i=t(38),o=t(37),s=t(0),l=t.n(s),c=t(18),d=t(46),u=t(525),m=t(523),p=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).disableBody=function(e){return Object(m.a)(e)},r.enableBody=function(e){return Object(m.b)(e)},r.state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.props.tourConfig.map((function(e,a){return{selector:'[data-tut="reactour_'+ ++a+'"]',content:e}}));return console.log(a),l.a.createElement(u.a,{onRequestClose:function(){return e.props.dispatch(Object(d.f)())},steps:a,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),t}(s.Component);a.a=Object(c.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(p)},601:function(e,a,t){"use strict";a.a=function(e){var a={};return e.kodeKategori?"DEFAULT"===e.kodeKategori&&(a.kodeKategori="Pilih Terlebih dahulu"):a.kodeKategori="Tidak Boleh kosong",e.kodeJenis?"DEFAULT"===e.kodeJenis&&(a.kodeJenis="Pilih Terlebih dahulu"):a.kodeJenis="Tidak Boleh kosong",e.kadarBeli?"DEFAULT"===e.kadarBeli&&(a.kadarBeli="Pilih Terlebih dahulu"):a.kadarBeli="Tidak Boleh kosong",e.kadarJual?"DEFAULT"===e.kadarJual&&(a.kadarJual="Pilih Terlebih dahulu"):a.kadarJual="Tidak Boleh kosong",e.kadarCetak?"DEFAULT"===e.kadarCetak&&(a.kadarCetak="Pilih Terlebih dahulu"):a.kadarCetak="Tidak Boleh kosong",a}}}]);
//# sourceMappingURL=42.ebd22239.chunk.js.map