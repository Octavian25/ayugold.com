(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[77,174],{1197:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),l=a(45),c=a.n(l),s=a(0),u=a.n(s),m=a(51),p=a.n(m),d=a(177),h=a(497),f=a(632),g=a(27),b=a(466),v=a(23),k=a(288),N=a(464),E=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.b)())}},{key:"handleSubmitTambah",value:function(e){var t=this;if(void 0===e.tanggal)return Object(b.e)("Mohon isi tanggal"),!1;if(void 0===e.jumlah)return Object(b.e)("Mohon isi Jumlah"),!1;if(void 0===e.kategori)return Object(b.e)("Mohon isi Kategori"),!1;if(void 0===e.keperluan)return Object(b.e)("Mohon isi Keperluan"),!1;var a={alatBayarTunai:[{tunaiKurs:0,tunaiRp:parseFloat(e.jumlah),tunaiNetto:0,tunaiTipe:"-"}],alatBayarTrf:[{transferTanggalJanji:"-",transferRp:0,transferTipe:"-",accFrom:"-",accTo:"-",transferKurs:0,transferNetto:0}],noBon:this.props.noFaktur,tanggal:e.tanggal,noFaktur:this.props.noFaktur,tipeFaktur:"TAMBAH UANG TUNAI",keterangan:e.keperluan,footerDocument:{inputBy:this.props.username}};console.log(a),this.props.dispatch(Object(v.t)());var n=[],r=["1",parseFloat(e.jumlah).toLocaleString("id-ID"),e.keperluan];n.push(r),console.log(n);var o=["No","Nominal","Keperluan"];c.a.post("http://157.245.145.87:9013/fico/dc/fico",a).then((function(){return p.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(v.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(d.b)())})).then((function(){return Object(h.a)("Tanggal",e.tanggal,"","","Nomor Bon",t.props.noFaktur,"","","ADMIN",e.tanggal,"",o,"TAMBAH UANG TUNAI",n)})).then((function(){return t.props.dispatch(Object(k.a)("FormKelolaUangBank"))}))})).catch((function(){return p.a.fire({position:"top-end",icon:"error",text:"Sepertinya terjadi kesalahan, silahkan check koneksi anda dan ulangi lagi transaksi",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(v.k)())}))}))}},{key:"handleSubmitAmbil",value:function(e){var t=this;if(void 0===e.tanggal)return Object(b.e)("Mohon isi tanggal"),!1;if(void 0===e.jumlah)return Object(b.e)("Mohon isi Jumlah"),!1;if(void 0===e.kategori)return Object(b.e)("Mohon isi Kategori"),!1;if(void 0===e.keperluan)return Object(b.e)("Mohon isi Keperluan"),!1;var a={alatBayarTunai:[{tunaiKurs:0,tunaiRp:parseFloat(e.jumlah),tunaiNetto:0,tunaiTipe:"-"}],alatBayarTrf:[{transferTanggalJanji:"-",transferRp:0,transferTipe:"-",accFrom:"-",accTo:"-",transferKurs:0,transferNetto:0}],noBon:this.props.noFaktur,tanggal:e.tanggal,noFaktur:this.props.noFaktur,tipeFaktur:"AMBIL UANG TUNAI",keterangan:e.keperluan,footerDocument:{inputBy:this.props.username}};console.log(a),this.props.dispatch(Object(v.t)());var n=[],r=["1",parseFloat(e.jumlah).toLocaleString("id-ID"),e.keperluan];n.push(r),console.log(n);var o=["No","Nominal","Keperluan"];c.a.post("http://157.245.145.87:9013/fico/dc/fico",a).then((function(a){return p.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(v.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(d.b)())})).then((function(){return Object(h.a)("Tanggal",e.tanggal,"","","Nomor Bon",t.props.noFaktur,"","","ADMIN",e.tanggal,"",o,"AMBIL UANG TUNAI",n)})).then((function(){return t.props.dispatch(Object(k.a)("FormKelolaUangBank"))}))})).catch((function(e){return p.a.fire({position:"top-end",icon:"error",text:"Sepertinya terjadi kesalahan, silahkan check koneksi anda dan ulangi lagi transaksi",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(v.k)())}))}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"card"},u.a.createElement(N.default,{title:"Kelola Uang Kas"}),u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("ul",{className:"nav nav-pills bg-nav-pills nav-justified mb-3"},u.a.createElement("li",{className:"nav-item"},u.a.createElement("a",{href:"#tambah-uang-bank","data-toggle":"tab","aria-expanded":"true",className:"nav-link active"},u.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),u.a.createElement("span",{className:"d-none d-lg-block"},"Tambah Uang Tunai"))),u.a.createElement("li",{className:"nav-item"},u.a.createElement("a",{href:"#ambil-uang-bank","data-toggle":"tab","aria-expanded":"false",className:"nav-link "},u.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),u.a.createElement("span",{className:"d-none d-lg-block"},"Ambil Uang Tunai")))),u.a.createElement("div",{className:"tab-content"},u.a.createElement("div",{className:"tab-pane show active",id:"tambah-uang-bank"},u.a.createElement(f.a,{onSubmit:function(t){return e.handleSubmitTambah(t)},from:"kas",onSend:this.props.onSend})),u.a.createElement("div",{className:"tab-pane ",id:"ambil-uang-bank"},u.a.createElement(f.a,{onSubmit:function(t){return e.handleSubmitAmbil(t)},from:"kas",onSend:this.props.onSend})))))))))}}]),a}(s.Component);t.default=Object(g.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,onSend:e.provinsi.onSend}}),null)(E)},464:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),l=a(0),c=a.n(l),s=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(l.Component);t.default=s},466:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return c})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return u}));var n=a(51),r=a.n(n),o=a(5),i=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},l=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},c=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(e){return a(e)}))}))},s=function(e,t,a,n){return new Promise((function(i,c){r.a.fire({title:"Oopps..",text:e.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(e){e.isConfirmed&&Object(o.d)(a+t,n).then((function(){return l("Data Berhasil Dikembalikan")})).then((function(){return i("Berhasil")})).catch((function(e){return c("Gagal")}))}))}))},u=function(e,t,a){var n=(new Date).toLocaleDateString(),r=JSON.parse(localStorage.getItem("LogWebsite"))||[],o={tanggal:n,keterangan:e,data:t,error:a};r.push(o),localStorage.setItem("LogWebsite",JSON.stringify(r))}},497:function(e,t,a){"use strict";var n=a(501);a(502);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],d=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,f=new n.default;f.autoTable(p,h,{startY:40});var g=f.lastAutoTable.finalY+10;f.text(d,14,15),f.setFontSize(10),f.text(e,14,25),f.text(":",37,25),f.text(t,40,25),f.text(a,120,25),f.text(":",141,25),f.text(r,145,25),f.text(o,14,30),f.text(":",37,30),f.text(i,40,30),f.text(l,120,30),f.text(":",141,30),f.text(c,145,30),f.text("User",160,g+10),f.text(":",168,g+10),f.text(s,170,g+10),f.text("Cetak",160,g+15),f.text(":",168,g+15),f.text(u,170,g+15),f.text("Valid",160,g+20),f.text(":",168,g+20),f.text(m,170,g+20);var b=f.output("datauristring"),v="<embed width='100%' height='100%' src='"+b+"'/>",k=window.open();k.document.open(),k.document.write(v),k.document.close()}},632:function(e,t,a){"use strict";var n=a(71),r=a(72),o=a(74),i=a(73),l=a(45),c=a.n(l),s=a(0),u=a.n(s),m=a(27),p=a(465),d=a(458),h=a(498),f=Object(h.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),g=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,i=e.meta,l=i.touched,c=i.error,s=i.warning;return u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"",className:"text-black"},a),u.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),l&&(c&&u.a.createElement("p",{className:"invalid-feedback"},c)||s&&u.a.createElement("p",null,s)))},b="http://147.139.182.75:3759/api/v1/",v=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={listKategori:[],listRekening:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;c.a.get(b+"parameteruangs").then((function(t){return e.setState({listKategori:t.data})})).catch((function(e){return console.log(e)})),c.a.get(b+"banks").then((function(t){return e.setState({listRekening:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return u.a.createElement("form",{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement(p.a,{name:"tanggal",label:"Tanggal",type:"date",component:g})),"bank"===this.props.from?u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement("label",{htmlFor:""},"Rekening"),u.a.createElement(p.a,{name:"rekening",className:"form-control",component:"select"},u.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),this.state.listRekening.map((function(e){return u.a.createElement("option",{value:e.noRekening,key:e.noRekening},e.atasNama)})))):u.a.createElement("div",{className:"col-md-4 col-lg-4"}),u.a.createElement("div",{className:"col-md-4 col-lg-4"}),u.a.createElement("div",{className:"col-lg-4 col-md-4"},u.a.createElement("label",{htmlFor:""},"Jumlah"),u.a.createElement(p.a,Object.assign({name:"jumlah",component:"input",type:"tel",className:"form-control"},f))),u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement("label",{htmlFor:""},"Kategori"),u.a.createElement(p.a,{name:"kategori",className:"form-control",component:"select"},u.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),this.state.listKategori.map((function(e){return u.a.createElement("option",{value:e.kodeParameter,key:e.kodeParameter},e.kodeParameter)})))),u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement(p.a,{name:"keperluan",label:"Untuk Keperluan",type:"text",component:g})),u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?u.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",u.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),a}(s.Component);v=Object(d.a)({form:"FormKelolaUangBank",enableReinitialize:!0})(v),t.a=Object(m.b)()(v)}}]);
//# sourceMappingURL=77.90a95c28.chunk.js.map