(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[70],{1190:function(e,a,n){"use strict";n.r(a);var t=n(22),r=n(23),i=n(25),o=n(24),l=n(0),c=n.n(l),s=n(39),m=n(644),u=n(15),p=n(8),d=n.n(p),g=n(64),h=n(26),b=n(120),k=n(9),f=n(51),v=n(3),j=function(e){Object(i.a)(n,e);var a=Object(o.a)(n);function n(e){var r;return Object(t.a)(this,n),(r=a.call(this,e)).state={listKategori:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(s.b)())}},{key:"handleSubmitTambah",value:function(e){var a=this;if(void 0===e.tanggal)return Object(h.e)("Mohon isi tanggal"),!1;if(void 0===e.rekening)return Object(h.e)("Mohon isi Rekening"),!1;if(void 0===e.jumlah)return Object(h.e)("Mohon isi Jumlah"),!1;if(void 0===e.kategori)return Object(h.e)("Mohon isi Kategori"),!1;if(void 0===e.keperluan)return Object(h.e)("Mohon isi Keperluan"),!1;var n={tanggal:e.tanggal,no_rek:e.rekening,nominal:parseFloat(e.jumlah),keterangan:e.kategori,deskripsi:e.keperluan};console.log(n),this.props.dispatch(Object(k.t)());var t=[],r=["1",e.tanggal,parseFloat(e.jumlah).toLocaleString("id-ID"),e.rekening,parseFloat(e.jumlah).toLocaleString("id-ID"),e.keperluan];t.push(r),console.log(t);var i=["No","Tanggal Janji","Transfer nominal","Nomor Rekening","Transfer Netto","Keperluan"];Object(v.c)("uang-bank/tambah",n).then((function(){return d.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(k.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(s.b)())})).then((function(){return Object(g.a)("Tanggal",e.tanggal,"","","Nomor Bon",a.props.noFaktur,"","","ADMIN",e.tanggal,"",i,"TAMBAH UANG BANK",t)})).then((function(){return a.props.dispatch(Object(b.a)("FormKelolaUangBank"))}))})).catch((function(){return d.a.fire({position:"top-end",icon:"error",text:"Sepertinya terjadi kesalahan, silahkan check koneksi anda dan ulangi lagi transaksi",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(k.k)())}))}))}},{key:"handleSubmitAmbil",value:function(e){var a=this;if(void 0===e.tanggal)return Object(h.e)("Mohon isi tanggal"),!1;if(void 0===e.rekening)return Object(h.e)("Mohon isi Rekening"),!1;if(void 0===e.jumlah)return Object(h.e)("Mohon isi Jumlah"),!1;if(void 0===e.kategori)return Object(h.e)("Mohon isi Kategori"),!1;if(void 0===e.keperluan)return Object(h.e)("Mohon isi Keperluan"),!1;var n={tanggal:e.tanggal,no_rek:e.rekening,nominal:parseFloat(e.jumlah),keterangan:e.kategori,deskripsi:e.keperluan};console.log(n),this.props.dispatch(Object(k.t)());var t=[],r=["1",e.tanggal,parseFloat(e.jumlah).toLocaleString("id-ID"),e.rekening,parseFloat(e.jumlah).toLocaleString("id-ID"),e.keperluan];t.push(r),console.log(t);var i=["No","Tanggal Janji","Transfer nominal","Nomor Rekening","Transfer Netto","Keperluan"];Object(v.c)("uang-bank/ambil",n).then((function(n){return d.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(k.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return a.props.dispatch(Object(s.b)())})).then((function(){return Object(g.a)("Tanggal",e.tanggal,"","","Nomor Bon",a.props.noFaktur,"","","ADMIN",e.tanggal,"",i,"AMBIL UANG BANK",t)})).then((function(){return a.props.dispatch(Object(b.a)("FormKelolaUangBank"))}))})).catch((function(e){return d.a.fire({position:"top-end",icon:"error",text:"Sepertinya terjadi kesalahan, silahkan check koneksi anda dan ulangi lagi transaksi",showConfirmButton:!1,timer:1500})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"card"},c.a.createElement(f.default,{title:"Kelola Uang Bank"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("ul",{className:"nav nav-pills bg-nav-pills nav-justified mb-3"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"#tambah-uang-bank","data-toggle":"tab","aria-expanded":"true",className:"nav-link active"},c.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),c.a.createElement("span",{className:"d-none d-lg-block"},"Tambah Uang Bank"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"#ambil-uang-bank","data-toggle":"tab","aria-expanded":"false",className:"nav-link "},c.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),c.a.createElement("span",{className:"d-none d-lg-block"},"Ambil Uang Bank")))),c.a.createElement("div",{className:"tab-content"},c.a.createElement("div",{className:"tab-pane show active",id:"tambah-uang-bank"},c.a.createElement(m.a,{onSubmit:function(a){return e.handleSubmitTambah(a)},from:"bank",onSend:this.props.onSend})),c.a.createElement("div",{className:"tab-pane ",id:"ambil-uang-bank"},c.a.createElement(m.a,{onSubmit:function(a){return e.handleSubmitAmbil(a)},from:"bank",onSend:this.props.onSend})))))))))}}]),n}(l.Component);a.default=Object(u.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,onSend:e.provinsi.onSend}}),null)(j)},120:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t=n(27),r=(t.a.arrayInsert,t.a.arrayMove,t.a.arrayPop,t.a.arrayPush,t.a.arrayRemove,t.a.arrayRemoveAll,t.a.arrayShift,t.a.arraySplice,t.a.arraySwap,t.a.arrayUnshift,t.a.autofill,t.a.blur,t.a.change,t.a.clearAsyncError,t.a.clearFields,t.a.clearSubmit,t.a.clearSubmitErrors,t.a.destroy,t.a.focus,t.a.initialize,t.a.registerField,t.a.reset);t.a.resetSection,t.a.setSubmitFailed,t.a.setSubmitSucceeded,t.a.startAsyncValidation,t.a.startSubmit,t.a.stopAsyncValidation,t.a.stopSubmit,t.a.submit,t.a.touch,t.a.unregisterField,t.a.untouch,t.a.updateSyncWarnings,t.a.updateSyncErrors},644:function(e,a,n){"use strict";var t=n(22),r=n(23),i=n(25),o=n(24),l=n(0),c=n.n(l),s=n(15),m=n(467),u=n(468),p=n(90),d=n(196),g=n(125),h=n(11),b=Object(p.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),k=function(e){Object(i.a)(n,e);var a=Object(o.a)(n);function n(e){var r;return Object(t.a)(this,n),(r=a.call(this,e)).state={listKategori:[],listRekening:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(g.d)())}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,{name:"tanggal",label:"Tanggal",type:"date",component:h.a})),"bank"===this.props.from?c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Rekening"),c.a.createElement(m.a,{name:"rekening",className:"form-control",component:"select"},c.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),this.props.rekening.map((function(e){return c.a.createElement("option",{value:e.no_rekening,key:e.no_rekening},e.atas_nama)})))):c.a.createElement("div",{className:"col-md-4 col-lg-4"}),c.a.createElement("div",{className:"col-md-4 col-lg-4"}),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Jumlah"),c.a.createElement(m.a,Object.assign({name:"jumlah",component:"input",type:"tel",className:"form-control"},b))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Kategori"),c.a.createElement(m.a,{name:"kategori",className:"form-control",component:"select"},c.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),this.props.parameter.map((function(e){return c.a.createElement("option",{value:e.kategori_transaksi,key:e.kategori_transaksi},e.kategori_transaksi)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,{name:"keperluan",label:"Untuk Keperluan",type:"text",component:h.a})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),n}(l.Component);k=Object(u.a)({form:"FormKelolaUangBank",enableReinitialize:!0})(k),a.a=Object(s.b)((function(e){return{parameter:e.provinsi.parameterTransaksi,rekening:e.provinsi.rekening}}))(k)}}]);
//# sourceMappingURL=70.1865ad64.chunk.js.map