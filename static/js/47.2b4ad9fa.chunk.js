(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[47,5],{1220:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(23),o=t(25),i=t(24),s=t(0),l=t.n(s),c=t(478),d=t.n(c),u=t(480),m=t.n(u),k=t(15),p=t(467),h=t(468),b=t(602),f=t(11),v=t(3),g=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).submit=function(){console.log(JSON.stringify(r.state))},r.state={response:"",listPerhiasan:[],listJual:[],listBeli:[],listKategori:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(v.b)("kadar/get/by-type/kadar-cetak").then((function(a){e.setState({listPerhiasan:a.data})})).catch((function(e){return console.log(e)})),Object(v.b)("kadar/get/by-type/kadar-beli").then((function(a){e.setState({listBeli:a.data})})).catch((function(e){return console.log(e)})),Object(v.b)("kadar/get/by-type/kadar-jual").then((function(a){e.setState({listJual:a.data})})).catch((function(e){return console.log(e)})),Object(v.b)("kategori/get/all").then((function(a){e.setState({listKategori:a.data}),console.log(a.data)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(p.a,{component:f.b,label:"Kode Kategori",name:"kodeKategori",value:this.props.status,normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listKategori.map((function(e){return{value:"".concat(e.kode_kategori,"||").concat(e.kode_group),name:e.nama_kategori}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(p.a,{name:"kodeJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Kode Jenis"})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(p.a,{name:"namaJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Nama Jenis"})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(p.a,{component:f.b,label:"Kadar Cetak",name:"kadarCetak",value:"DEFAULT",className:"form-control",options:this.state.listPerhiasan.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(p.a,{component:f.b,label:"Kadar Beli",name:"kadarBeli",value:"DEFAULT",className:"form-control",options:this.state.listBeli.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(p.a,{component:f.b,label:"Kadar Jual",name:"kadarJual",value:"DEFAULT",className:"form-control",options:this.state.listJual.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:this.props.onSend},this.props.onSend?l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Submit")))))}}]),t}(s.Component);g=Object(h.a)({form:"Rosok",enableReinitialize:!0,validate:b.a})(g);var E=Object(k.b)()(g),j=t(126),O=t(505),N=t.n(O),y=t(8),C=t.n(y),J=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).submit=function(){console.log(JSON.stringify(r.state))},r.state={response:"",listPerhiasan:[],listJual:[],listBeli:[],listKategori:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(v.b)("kadar/get/by-type/kadar-cetak").then((function(a){e.setState({listPerhiasan:a.data})})).catch((function(e){return console.log(e)})),Object(v.b)("kadar/get/by-type/kadar-beli").then((function(a){e.setState({listBeli:a.data})})).catch((function(e){return console.log(e)})),Object(v.b)("kadar/get/by-type/kadar-jual").then((function(a){e.setState({listJual:a.data})})).catch((function(e){return console.log(e)})),Object(v.b)("kategori/get/all").then((function(a){e.setState({listKategori:a.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(p.a,{component:f.b,label:"Kode Kategori",name:"kodeKategori",value:this.props.status,normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:this.state.listKategori.map((function(e){return{value:e.kode_kategori,name:e.nama_kategori}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement(p.a,{name:"kodeJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Kode Jenis"})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(p.a,{name:"namaJenis",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Nama Jenis"})),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(p.a,{component:f.b,label:"Kadar Cetak",name:"kadarCetak",value:"DEFAULT",className:"form-control",options:this.state.listPerhiasan.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(p.a,{component:f.b,label:"Kadar Beli",name:"kadarBeli",value:"DEFAULT",className:"form-control",options:this.state.listBeli.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-md-3"},l.a.createElement("div",{className:"form-group"},l.a.createElement(p.a,{component:f.b,label:"Kadar Jual",name:"kadarJual",value:"DEFAULT",className:"form-control",options:this.state.listJual.map((function(e){return{value:e.kadar,name:e.kadar}}))}))),l.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:this.props.onSend},this.props.onSend?l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Submit")))))}}]),t}(s.Component);J=Object(h.a)({form:"RosokEdit",validate:b.a,enableReinitialize:!0})(J);var K=Object(k.b)((function(e){return{initialValues:{kodeJenis:e.provinsi.editRosok.kodeJenis,statusAktif:e.provinsi.editRosok.statusAktif,kodeKategori:e.provinsi.editRosok.kodeKategori,namaJenis:e.provinsi.editRosok.namaJenis,kadarBeli:e.provinsi.editRosok.kadarBeli,kadarJual:e.provinsi.editRosok.kadarJual,kadarCetak:e.provinsi.editRosok.kadarCetak}}}),null)(J),S=t(16),_=t.n(S),B=t(479),D=t.n(B),T=t(26),R=t(50),x=t(506),w=t(51),A=t(508),F=t(9),U=u.Search.SearchBar,P=u.CSVExport.ExportCSVButton;var L=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={Koderosok:[],response:"",display:"none",columns:[{dataField:"kode_kategori",text:"Kode Kategori",headerStyle:function(){return{width:"10%"}}},{dataField:"kode_jenis",text:"Kode Jenis",headerStyle:function(){return{width:"10%"}}},{dataField:"kadar_cetak",text:"Kadar Cetak",headerStyle:function(){return{width:"10%"}}},{dataField:"kadar_beli",text:"Kadar Beli",headerStyle:function(){return{width:"10%"}}},{dataField:"kadar_jual",text:"Kadar Jual",headerStyle:function(){return{width:"10%"}}},{dataField:"nama_jenis",text:"Nama Jenis"},{dataField:"link",text:"Aksi",csvExport:!1,formatter:function(e,a){return l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return e=r.props.dispatch,t=a.kode_jenis,void C.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&Object(v.a)("jenis/delete/by-kode-jenis/"+t).then((function(a){return Object(T.b)("Data Berhasil Dihapus!").then((function(){return e(Object(j.d)())}))})).catch((function(e){return Object(T.c)("Data Gagal Dihapus!")}))}));var e,t},"data-tut":"reactour_3"},l.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),l.a.createElement("button",{"data-tut":"reactour_4",className:"btn btn-warning",onClick:function(){return r.props.dispatch(Object(j.c)(a.kode_jenis,a.kode_kategori,a.nama_jenis,a.kadar_beli,a.kadar_jual,a.kadar_cetak,r.editModal()))}},l.a.createElement("i",{className:"fa fa-edit mr-2"}),"EDIT"))}}]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(j.d)()),Object(v.b)("jenis/get/all").then((function(a){return e.setState({listRongsok:a.data.filter((function(e){return"CIOK"===e.kode_kelompok||"RONGSOK"===e.kode_kelompok}))})}))}},{key:"handleSubit",value:function(e){var a=this,t={kode_kategori:e.kodeKategori.split("||")[0],kode_kelompok:e.kodeKategori.split("||")[1],kode_jenis:e.kodeJenis,kadar_cetak:e.kadarCetak,kadar_beli:e.kadarBeli,nama_jenis:e.namaJenis,kadar_jual:e.kadarJual},n={kode_kategori:e.kodeKategori.split("||")[0],kode_kelompok:e.kodeKategori.split("||")[1],kadar_cetak:e.kadarCetak,kadar_beli:e.kadarBeli,nama_jenis:e.namaJenis,kadar_jual:e.kadarJual};this.props.dispatch(Object(F.t)()),Object(v.c)("jenis/add",t).then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(R.g)())})).then((function(e){return Object(T.b)("Data Berhasil Ditambah!").then((function(){return a.props.dispatch(Object(j.d)())}))})).catch((function(t){return a.handleReactive(t,e.kodeJenis,n,a.props.dispatch(Object(F.k)()),a.props.dispatch(Object(R.g)()))}))}},{key:"handleEdit",value:function(e){var a=this,t={kode_kategori:e.kodeKategori,kode_kelompok:"CIOK",kadar_cetak:e.kadarCetak,kadar_beli:e.kadarBeli,nama_jenis:e.namaJenis,kadar_jual:e.kadarJual};this.props.dispatch(Object(F.t)()),Object(v.d)("jenis/edit/by-kode-jenis/"+e.kodeJenis,t).then((function(){return a.props.dispatch(Object(F.k)())})).then((function(){return a.props.dispatch(Object(R.g)())})).then((function(e){return Object(T.b)("Data Berhasil Diubah!").then((function(){return a.props.dispatch(Object(j.d)())}))})).catch((function(e){return Object(T.c)("Data Gagal Diubah!").then((function(){return a.props.dispatch(Object(R.g)())}))}))}},{key:"tambahModal",value:function(){this.props.dispatch(Object(R.j)()),this.setState({isEdit:!1})}},{key:"editModal",value:function(){this.props.dispatch(Object(R.j)()),this.setState({isEdit:!0})}},{key:"handleReactive",value:function(e,a,t){var n=this;this.props.dispatch(Object(R.g)()),e.response.data.includes("Deleted")?Object(T.d)(e,a,"jenis/reactive/by-kode-jenis/",t,"jenis/edit/by-kode-jenis/").then((function(){return n.props.dispatch(Object(j.d)())})):Object(T.c)("Data Gagal Ditambahkan")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container-fluid",style:{color:"black"}},l.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7")),l.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),l.a.createElement(x.default,{content:this.state.isEdit?l.a.createElement(K,{onSubmit:function(a){return e.handleEdit(a)},onSend:this.props.onSend}):l.a.createElement(E,{onSubmit:function(a){return e.handleSubit(a)},onSend:this.props.onSend}),title:this.state.isEdit?"Edit Kode Rongsok Dan Ciok":"Tambah Kode Rongsok Dan Ciok"}),l.a.createElement(A.a,{tourConfig:["Untuk Menambahkan Data Kode Rongsok / Ciok, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah data Kode Rongsok / Ciok yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih","Ini adalah tombol untuk mengubah data pada baris yang dipilih"]}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement(w.default,{title:"Data Kode Rosok Dan Ciok"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{action:"#"},l.a.createElement("div",{className:"form-body"},l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info","data-tut":"reactour_1",onClick:function(){return e.tambahModal()}},"Tambah Data Rosok / Ciok"))))),l.a.createElement("div",{"data-tut":"reactour_2"},this.props.KodeRosokList?l.a.createElement(m.a,{keyField:"id",data:this.state.listRongsok||[],columns:this.state.columns,search:!0},(function(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"text-right mt-5 mb-3"},l.a.createElement(U,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),l.a.createElement(d.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:D()()})),l.a.createElement(P,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):l.a.createElement("div",null,this.props.error?l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:N.a,style:{width:"30%"},alt:"NOT RESPOND"}),l.a.createElement("br",null),l.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):l.a.createElement(_.a,{width:"100%",height:180}))))))))}}]),t}(s.Component);a.default=Object(k.b)((function(e){return{KodeRosokList:e.provinsi.rosok,alert:e.provinsi.alert,error:e.provinsi.error,onSend:e.provinsi.onSend}}),null)(L)},505:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"},506:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(23),o=t(25),i=t(24),s=t(1203),l=t(0),c=t.n(l),d=t(15),u=t(50),m=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(s.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(u.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},c.a.createElement(s.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},c.a.createElement(s.a.Title,null,this.props.title||"")),c.a.createElement(s.a.Body,null,this.props.content||""))}}]),t}(l.Component);a.default=Object(d.b)((function(e){return{show:e.modal.show}}),null)(m)},508:function(e,a,t){"use strict";var n=t(22),r=t(23),o=t(25),i=t(24),s=t(0),l=t.n(s),c=t(15),d=t(50),u=t(526),m=t(524),k=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).disableBody=function(e){return Object(m.a)(e)},r.enableBody=function(e){return Object(m.b)(e)},r.state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this,a=this.props.tourConfig.map((function(e,a){return{selector:'[data-tut="reactour_'+ ++a+'"]',content:e}}));return console.log(a),l.a.createElement(u.a,{onRequestClose:function(){return e.props.dispatch(Object(d.f)())},steps:a,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),t}(s.Component);a.a=Object(c.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(k)},602:function(e,a,t){"use strict";a.a=function(e){var a={};return e.kodeKategori?"DEFAULT"===e.kodeKategori&&(a.kodeKategori="Pilih Terlebih dahulu"):a.kodeKategori="Tidak Boleh kosong",e.kodeJenis?"DEFAULT"===e.kodeJenis&&(a.kodeJenis="Pilih Terlebih dahulu"):a.kodeJenis="Tidak Boleh kosong",e.kadarBeli?"DEFAULT"===e.kadarBeli&&(a.kadarBeli="Pilih Terlebih dahulu"):a.kadarBeli="Tidak Boleh kosong",e.kadarJual?"DEFAULT"===e.kadarJual&&(a.kadarJual="Pilih Terlebih dahulu"):a.kadarJual="Tidak Boleh kosong",e.kadarCetak?"DEFAULT"===e.kadarCetak&&(a.kadarCetak="Pilih Terlebih dahulu"):a.kadarCetak="Tidak Boleh kosong",a}}}]);
//# sourceMappingURL=47.2b4ad9fa.chunk.js.map