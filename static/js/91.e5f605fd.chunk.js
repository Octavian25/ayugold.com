(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[91,176],{1199:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),l=a(56),c=a.n(l),s=a(0),u=a.n(s),m=a(19),p=a.n(m),d=a(178),h=a(493),g=a(632),f=a(28),b=a(174),v=a(16),k=a(289),N=a(461),E=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,j=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.b)())}},{key:"handleSubmitTambah",value:function(e){var t=this;if(void 0===e.tanggal)return Object(b.e)("Mohon isi tanggal"),!1;if(void 0===e.jumlah)return Object(b.e)("Mohon isi Jumlah"),!1;if(void 0===e.kategori)return Object(b.e)("Mohon isi Kategori"),!1;if(void 0===e.keperluan)return Object(b.e)("Mohon isi Keperluan"),!1;var a={alatBayarTunai:[{tunaiKurs:0,tunaiRp:parseFloat(e.jumlah),tunaiNetto:0,tunaiTipe:"-"}],alatBayarTrf:[{transferTanggalJanji:"-",transferRp:0,transferTipe:"-",accFrom:"-",accTo:"-",transferKurs:0,transferNetto:0}],noBon:this.props.noFaktur,tanggal:e.tanggal,noFaktur:this.props.noFaktur,tipeFaktur:"TAMBAH UANG TUNAI",keterangan:e.keperluan,footerDocument:{inputBy:this.props.username}};console.log(a),this.props.dispatch(Object(v.t)());var n=[],r=["1",parseFloat(e.jumlah).toLocaleString("id-ID"),e.keperluan];n.push(r),console.log(n);var o=["No","Nominal","Keperluan"];c.a.post(E+"fico/dc/fico",a).then((function(){return p.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(v.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(d.b)())})).then((function(){return Object(h.a)("Tanggal",e.tanggal,"","","Nomor Bon",t.props.noFaktur,"","","ADMIN",e.tanggal,"",o,"TAMBAH UANG TUNAI",n)})).then((function(){return t.props.dispatch(Object(k.a)("FormKelolaUangBank"))}))})).catch((function(){return p.a.fire({position:"top-end",icon:"error",text:"Sepertinya terjadi kesalahan, silahkan check koneksi anda dan ulangi lagi transaksi",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(v.k)())}))}))}},{key:"handleSubmitAmbil",value:function(e){var t=this;if(void 0===e.tanggal)return Object(b.e)("Mohon isi tanggal"),!1;if(void 0===e.jumlah)return Object(b.e)("Mohon isi Jumlah"),!1;if(void 0===e.kategori)return Object(b.e)("Mohon isi Kategori"),!1;if(void 0===e.keperluan)return Object(b.e)("Mohon isi Keperluan"),!1;var a={alatBayarTunai:[{tunaiKurs:0,tunaiRp:parseFloat(e.jumlah),tunaiNetto:0,tunaiTipe:"-"}],alatBayarTrf:[{transferTanggalJanji:"-",transferRp:0,transferTipe:"-",accFrom:"-",accTo:"-",transferKurs:0,transferNetto:0}],noBon:this.props.noFaktur,tanggal:e.tanggal,noFaktur:this.props.noFaktur,tipeFaktur:"AMBIL UANG TUNAI",keterangan:e.keperluan,footerDocument:{inputBy:this.props.username}};console.log(a),this.props.dispatch(Object(v.t)());var n=[],r=["1",parseFloat(e.jumlah).toLocaleString("id-ID"),e.keperluan];n.push(r),console.log(n);var o=["No","Nominal","Keperluan"];c.a.post(E+"fico/dc/fico",a).then((function(a){return p.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(v.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(d.b)())})).then((function(){return Object(h.a)("Tanggal",e.tanggal,"","","Nomor Bon",t.props.noFaktur,"","","ADMIN",e.tanggal,"",o,"AMBIL UANG TUNAI",n)})).then((function(){return t.props.dispatch(Object(k.a)("FormKelolaUangBank"))}))})).catch((function(e){return p.a.fire({position:"top-end",icon:"error",text:"Sepertinya terjadi kesalahan, silahkan check koneksi anda dan ulangi lagi transaksi",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(v.k)())}))}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"card"},u.a.createElement(N.default,{title:"Kelola Uang Kas"}),u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("ul",{className:"nav nav-pills bg-nav-pills nav-justified mb-3"},u.a.createElement("li",{className:"nav-item"},u.a.createElement("a",{href:"#tambah-uang-bank","data-toggle":"tab","aria-expanded":"true",className:"nav-link active"},u.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),u.a.createElement("span",{className:"d-none d-lg-block"},"Tambah Uang Tunai"))),u.a.createElement("li",{className:"nav-item"},u.a.createElement("a",{href:"#ambil-uang-bank","data-toggle":"tab","aria-expanded":"false",className:"nav-link "},u.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),u.a.createElement("span",{className:"d-none d-lg-block"},"Ambil Uang Tunai")))),u.a.createElement("div",{className:"tab-content"},u.a.createElement("div",{className:"tab-pane show active",id:"tambah-uang-bank"},u.a.createElement(g.a,{onSubmit:function(t){return e.handleSubmitTambah(t)},from:"kas",onSend:this.props.onSend})),u.a.createElement("div",{className:"tab-pane ",id:"ambil-uang-bank"},u.a.createElement(g.a,{onSubmit:function(t){return e.handleSubmitAmbil(t)},from:"kas",onSend:this.props.onSend})))))))))}}]),a}(s.Component);t.default=Object(f.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,onSend:e.provinsi.onSend}}),null)(j)},461:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),o=a(74),i=a(73),l=a(0),c=a.n(l),s=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(l.Component);t.default=s},493:function(e,t,a){"use strict";var n=a(496);a(498);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],d=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,g=new n.default;g.autoTable(p,h,{startY:40});var f=g.lastAutoTable.finalY+10;g.text(d,14,15),g.setFontSize(10),g.text(e,14,25),g.text(":",37,25),g.text(t,40,25),g.text(a,120,25),g.text(":",141,25),g.text(r,145,25),g.text(o,14,30),g.text(":",37,30),g.text(i,40,30),g.text(l,120,30),g.text(":",141,30),g.text(c,145,30),g.text("User",160,f+10),g.text(":",168,f+10),g.text(s,170,f+10),g.text("Cetak",160,f+15),g.text(":",168,f+15),g.text(u,170,f+15),g.text("Valid",160,f+20),g.text(":",168,f+20),g.text(m,170,f+20);var b=g.output("datauristring"),v="<embed width='100%' height='100%' src='"+b+"'/>",k=window.open();k.document.open(),k.document.write(v),k.document.close()}},632:function(e,t,a){"use strict";var n=a(71),r=a(72),o=a(74),i=a(73),l=a(56),c=a.n(l),s=a(0),u=a.n(s),m=a(28),p=a(462),d=a(455),h=a(494),g=Object(h.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),f=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,o=e.readOnly,i=e.meta,l=i.touched,c=i.error,s=i.warning;return u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"",className:"text-black"},a),u.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),l&&(c&&u.a.createElement("p",{className:"invalid-feedback"},c)||s&&u.a.createElement("p",null,s)))},b="https://147.139.193.169:3759/api/v1/",v=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={listKategori:[],listRekening:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;c.a.get(b+"parameteruangs").then((function(t){return e.setState({listKategori:t.data})})).catch((function(e){return console.log(e)})),c.a.get(b+"banks").then((function(t){return e.setState({listRekening:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return u.a.createElement("form",{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement(p.a,{name:"tanggal",label:"Tanggal",type:"date",component:f})),"bank"===this.props.from?u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement("label",{htmlFor:""},"Rekening"),u.a.createElement(p.a,{name:"rekening",className:"form-control",component:"select"},u.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),this.state.listRekening.map((function(e){return u.a.createElement("option",{value:e.noRekening,key:e.noRekening},e.atasNama)})))):u.a.createElement("div",{className:"col-md-4 col-lg-4"}),u.a.createElement("div",{className:"col-md-4 col-lg-4"}),u.a.createElement("div",{className:"col-lg-4 col-md-4"},u.a.createElement("label",{htmlFor:""},"Jumlah"),u.a.createElement(p.a,Object.assign({name:"jumlah",component:"input",type:"tel",className:"form-control"},g))),u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement("label",{htmlFor:""},"Kategori"),u.a.createElement(p.a,{name:"kategori",className:"form-control",component:"select"},u.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),this.state.listKategori.map((function(e){return u.a.createElement("option",{value:e.kodeParameter,key:e.kodeParameter},e.kodeParameter)})))),u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement(p.a,{name:"keperluan",label:"Untuk Keperluan",type:"text",component:f})),u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?u.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",u.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),a}(s.Component);v=Object(d.a)({form:"FormKelolaUangBank",enableReinitialize:!0})(v),t.a=Object(m.b)()(v)}}]);
//# sourceMappingURL=91.e5f605fd.chunk.js.map