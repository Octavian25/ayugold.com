(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[102,174],{1249:function(e,t,n){"use strict";n.r(t);var a=n(71),r=n(72),o=n(74),i=n(73),l=n(45),c=n.n(l),s=n(0),u=n.n(s),m=n(51),h=n.n(m),p=n(178),d=n(27),f=n(465),g=n(458),v=n(498),b=Object(v.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),k=function(e){var t=e.input,n=e.label,a=e.type,r=e.limit,o=e.readOnly,i=e.meta,l=i.touched,c=i.error,s=i.warning;return u.a.createElement("div",{className:"form-group"},u.a.createElement("label",{htmlFor:"",className:"text-black"},n),u.a.createElement("input",Object.assign({},t,{type:a,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),l&&(c&&u.a.createElement("p",{className:"invalid-feedback"},c)||s&&u.a.createElement("p",null,s)))},E="http://147.139.182.75:3759/api/v1/",j=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={listKategori:[],listRekening:[]},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new Date;this.props.change("tanggal","".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())),c.a.get(E+"parameteruangs").then((function(t){return e.setState({listKategori:t.data})})).catch((function(e){return console.log(e)})),c.a.get(E+"banks").then((function(t){return e.setState({listRekening:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return u.a.createElement("form",{onSubmit:this.props.handleSubmit},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-md-3 col-lg-3"},u.a.createElement(f.a,{name:"tanggal",label:"Tanggal",type:"date",value:this.state.thisDay,component:k,normalize:function(e){return e&&e.toUpperCase()}})),u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement("label",{htmlFor:""},"Asal"),u.a.createElement(f.a,{name:"asal",component:"select",value:"CASH",className:"form-control"},u.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),u.a.createElement("option",{value:"CASH",key:"CASH"},"CASH"),this.state.listRekening.map((function(e){return u.a.createElement("option",{value:e.noRekening,key:e.noRekening},e.atasNama)})))),u.a.createElement("div",{className:"col-md-1 text-center"},u.a.createElement("label",{htmlFor:"",className:"text-white"},"."),u.a.createElement("h3",null,u.a.createElement("i",{className:"fa fa-exchange-alt"}))),u.a.createElement("div",{className:"col-md-4 col-lg-4"},u.a.createElement("label",{htmlFor:""},"Tujuan"),u.a.createElement(f.a,{name:"tujuan",component:"select",value:"CASH",className:"form-control",normalize:function(e){return e&&e.toUpperCase()}},u.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),u.a.createElement("option",{value:"CASH",key:"CASH"},"CASH"),this.state.listRekening.map((function(e){return u.a.createElement("option",{value:e.noRekening,key:e.noRekening},e.atasNama)})))),u.a.createElement("div",{className:"col-lg-4 col-md-4"},u.a.createElement("label",{htmlFor:""},"Jumlah"),u.a.createElement(f.a,Object.assign({name:"jumlah",component:"input",type:"tel",className:"form-control"},b))),u.a.createElement("div",{className:"col-md-8 col-lg-8"},u.a.createElement(f.a,{name:"keterangan",label:"Keterangan",type:"text",component:k,normalize:function(e){return e&&e.toUpperCase()}})),u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"text-right"},u.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?u.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",u.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),n}(s.Component);j=Object(g.a)({form:"FormMutasiCashDanBank",enableReinitialize:!0})(j);var N=Object(d.b)()(j),x=n(497),O=n(466),S=n(292),y=n(23),C=n(464),A=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(e){var r;Object(a.a)(this,n);var o=new Date,i="".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate());return(r=t.call(this,e)).state={thisDay:i},r}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(p.b)())}},{key:"handleSubmit",value:function(e){var t=this;if(void 0===e.tanggal)return Object(O.e)("Mohon isi tanggal"),!1;if(void 0===e.jumlah)return Object(O.e)("Mohon isi Jumlah"),!1;if(void 0===e.asal)return Object(O.e)("Mohon isi Asal"),!1;if(void 0===e.tujuan)return Object(O.e)("Mohon isi Tujuan"),!1;var n={alatBayarTunai:[{tunaiKurs:0,tunaiRp:parseFloat(e.jumlah),tunaiNetto:0,tunaiTipe:"-"}],alatBayarTrf:[{transferTanggalJanji:"-",transferRp:parseFloat(e.jumlah),transferTipe:"-",accFrom:e.asal,accTo:e.tujuan,transferKurs:0,transferNetto:0}],noBon:this.props.noFaktur,tanggal:e.tanggal,noFaktur:this.props.noFaktur,tipeFaktur:"AMBIL UANG TUNAI",keterangan:e.keterangan,footerDocument:{inputBy:this.props.username}};console.log(n),this.props.dispatch(Object(y.t)());var a=[],r=["1",e.tanggal,parseFloat(e.jumlah).toLocaleString("id-ID"),e.asal,e.tujuan,parseFloat(e.jumlah).toLocaleString("id-ID"),e.keterangan];a.push(r),console.log(a);var o=["No","Tanggal Janji","Transfer nominal","Nomor Rekening Asal","Nomor Rekening Tujuan","Transfer Netto","Keperluan"];c.a.post("http://157.245.145.87:9013/fico/dc/fico",n).then((function(n){return h.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(y.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return t.props.dispatch(Object(p.b)())})).then((function(){return Object(x.a)("Tanggal",e.tanggal,"","","Nomor Bon",t.props.noFaktur,"","","ADMIN",e.tanggal,"",o,"MUTASI CASH DAN BANK",a)})).then((function(){return t.props.dispatch(Object(S.a)("FormMutasiCashDanBank"))}))})).catch((function(e){return h.a.fire({position:"top-end",icon:"error",text:"Sepertinya terjadi kesalahan, silahkan check koneksi anda dan ulangi lagi transaksi",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(y.k)())}))}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"container-fluid"},u.a.createElement("div",{className:"col-lg-12 col-md-12"},u.a.createElement("div",{className:"card"},u.a.createElement(C.default,{title:"Mutasi Cash Dan Bank"}),u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement(N,{onSubmit:function(t){return e.handleSubmit(t)},onSend:this.props.onSend}))))))}}]),n}(s.Component);t.default=Object(d.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,onSend:e.provinsi.onSend}}),null)(A)},464:function(e,t,n){"use strict";n.r(t);var a=n(71),r=n(72),o=n(74),i=n(73),l=n(0),c=n.n(l),s=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),n}(l.Component);t.default=s},466:function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return u}));var a=n(51),r=n.n(a),o=n(5),i=function(e){return new Promise((function(t,n){r.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return n("Gagal")}))}))},l=function(e){return new Promise((function(t,n){r.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return n("Gagal")}))}))},c=function(e){return new Promise((function(t,n){r.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(e){return n(e)}))}))},s=function(e,t,n,a){return new Promise((function(i,c){r.a.fire({title:"Oopps..",text:e.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(e){e.isConfirmed&&Object(o.d)(n+t,a).then((function(){return l("Data Berhasil Dikembalikan")})).then((function(){return i("Berhasil")})).catch((function(e){return c("Gagal")}))}))}))},u=function(e,t,n){var a=(new Date).toLocaleDateString(),r=JSON.parse(localStorage.getItem("LogWebsite"))||[],o={tanggal:a,keterangan:e,data:t,error:n};r.push(o),localStorage.setItem("LogWebsite",JSON.stringify(r))}},497:function(e,t,n){"use strict";var a=n(501);n(502);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",h=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],p=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",d=arguments.length>13?arguments[13]:void 0,f=new a.default;f.autoTable(h,d,{startY:40});var g=f.lastAutoTable.finalY+10;f.text(p,14,15),f.setFontSize(10),f.text(e,14,25),f.text(":",37,25),f.text(t,40,25),f.text(n,120,25),f.text(":",141,25),f.text(r,145,25),f.text(o,14,30),f.text(":",37,30),f.text(i,40,30),f.text(l,120,30),f.text(":",141,30),f.text(c,145,30),f.text("User",160,g+10),f.text(":",168,g+10),f.text(s,170,g+10),f.text("Cetak",160,g+15),f.text(":",168,g+15),f.text(u,170,g+15),f.text("Valid",160,g+20),f.text(":",168,g+20),f.text(m,170,g+20);var v=f.output("datauristring"),b="<embed width='100%' height='100%' src='"+v+"'/>",k=window.open();k.document.open(),k.document.write(b),k.document.close()}}}]);
//# sourceMappingURL=102.f9e2124e.chunk.js.map