(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[121,176],{1193:function(t,a,e){"use strict";e.r(a);var n=e(77),o=e(71),r=e(72),l=e(74),i=e(73),s=e(0),u=e.n(s),c=e(28),p=e(56),g=e.n(p),m=e(5),d=e(79),h=e(19),k=e.n(h),b=e(178),f=e(493),S=e(174),v=e(173),N=e.n(v),E=e(16),B=e(461),T=Object(s.lazy)((function(){return Promise.all([e.e(23),e.e(19)]).then(e.bind(null,1137))})),R=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,y=function(t){Object(l.a)(e,t);var a=Object(i.a)(e);function e(t){var r;Object(o.a)(this,e),(r=a.call(this,t)).inputChange=function(t){return function(a){r.setState(Object(n.a)({},t,a.target.value))}};var l=new Date,i="".concat(l.getFullYear(),"-").concat(l.getMonth()+1,"-").concat(l.getDate());return r.state={listSupplier:[],tanggal:i,bonBayar:"",detail:"",tipeTransaksi:"BARANG"},r}return Object(r.a)(e,[{key:"componentDidMount",value:function(){var t=this;g.a.get(R+"suppliers").then((function(a){return t.setState({listSupplier:a.data})})).catch((function(t){return console.log(t)})),this.props.dispatch(Object(d.d)()),this.props.dispatch(Object(d.e)()),this.props.dispatch(Object(b.b)())}},{key:"handleSubmit",value:function(t){var a=this;if(void 0===t.noBon)return Object(S.e)("Mohon isi nomor bon"),!1;if(void 0===t.tanggal)return Object(S.e)("Mohon isi Tanggal"),!1;if(void 0===t.supplier)return Object(S.e)("Mohon isi Supplier"),!1;if(null===localStorage.getItem("alatBayarBarang")&&null===localStorage.getItem("alatBayarTrf")&&null===localStorage.getItem("alatBayarTunai")&&null===localStorage.getItem("alatBayarTunaiRp")&&null===localStorage.getItem("alatBayarTrfRp"))return Object(S.e)("Mohon Masukan Alat Pembayaran Paling Tidak 1 Jenis"),!1;var e=JSON.parse(localStorage.getItem("alatBayarBarang"))||null,n=null===JSON.parse(localStorage.getItem("alatBayarTrf"))&&JSON.parse(localStorage.getItem("alatBayarTrf"))||null,o=null===JSON.parse(localStorage.getItem("alatBayarTunai"))&&JSON.parse(localStorage.getItem("alatBayarTunaiRp"))||null,r=(t.supplier?t.supplier:"DEFAULT | DEFUALT").split("|"),l={alatBayarBarang:e,alatBayarTunai:o,alatBayarTrf:n,alatBayarGiro:null,totalFakutrTrx:null,keterangan:"-",totalAlatBayar:{totalRsk:this.props.totalRongsok,totalCt:this.props.totalCiok,totalTunaiRp:null!==o?o[0].tunaiNetto:0,totalTrfRp:null!==n?n[0].transferNetto:0,totalPutusGr:0,tipeData:"BON GR",totalPutusRp:0},kodeSupplier:r[0],namaSupplier:r[1],noBon:t.noBon,noFaktur:this.props.noFaktur,tanggal:t.tanggal,footerDocument:{inputBy:this.props.username}};localStorage.setItem("notaPembayaranSupplier",JSON.stringify(l)),this.props.dispatch(Object(E.t)());var i=[["Tunai","Tunai",parseFloat(null!==o?o[0].tunaiRp:0).toLocaleString("id-ID"),parseFloat(null!==o?o[0].tunaiKurs:0).toLocaleString("id-ID"),"",parseFloat(null!==o?o[0].tunaiNetto:0),"",""],["Transfer","Transfer",parseFloat(null!==n?n[0].transferRp:0).toLocaleString("id-ID"),parseFloat(null!==n?n[0].transferKurs:0).toLocaleString("id-ID"),"",parseFloat(null!==n?n[0].transferNetto:0),"",""]];(JSON.parse(localStorage.getItem("ciokTemp"))||[]).forEach((function(t,a){var e=["Ciok",t.kodeBarang,t.bruto,"",t.kadarTransaksi,t.netto,"",""];i.push(e)})),(JSON.parse(localStorage.getItem("rongsokTemp"))||[]).forEach((function(t,a){var e=["Rongsok",t.kodeBarang,t.bruto,"",t.kadarTransaksi,t.netto,"",""];i.push(e)}));var s=["DISCOUNT","DISCOUNT",null!==localStorage.getItem("discount")?localStorage.getItem("discount"):0,"","",null!==localStorage.getItem("discount")?localStorage.getItem("discount"):0,"",""];i.push(s);var u=["BONUS","BONUS",null!==localStorage.getItem("bonus")?localStorage.getItem("bonus"):0,"","",null!==localStorage.getItem("bonus")?localStorage.getItem("bonus"):0,"",""];i.push(u);var c=["DENDA","DENDA",null!==localStorage.getItem("denda")?localStorage.getItem("denda"):0,"","",null!==localStorage.getItem("denda")?localStorage.getItem("denda"):0,"",""];i.push(c),console.log(JSON.stringify(i));var p=["Jenis \nPembayaran","Nama \nBarang","Gross \nBayar","Harga","Kadar","Netto","Pkg","Gw+Pkg"];g.a.post(R+"/spp/dc/byr",l).then((function(e){return k.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(E.k)())})).then((function(){return localStorage.clear()})).then((function(){return localStorage.setItem("isLogin",!0)})).then((function(){return a.props.dispatch(Object(b.b)())})).then((function(){return a.props.history.push("KlasifikasiSupplier")})).then((function(){return Object(f.a)("Tanggal",t.tanggal,"","","Nomor \nPembayaran",t.noBon,"","","ADMIN",t.tanggal,"",p,"NOTA PEMBAYARAN SUPPLIER",i)})).then((function(){return window.history.back()}))})).catch((function(t){return k.a.fire({position:"top-end",icon:"error",text:t,showConfirmButton:!1,timer:1500})}))}},{key:"render",value:function(){var t=this;return u.a.createElement("div",{className:"container-fluid",style:{color:"black"}},u.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},u.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},u.a.createElement("span",{"aria-hidden":"true"},"\xd7")),u.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),u.a.createElement("ol",{className:"breadcrumb mb-2"},u.a.createElement(m.b,{to:"/KlasifikasiSupplier"},u.a.createElement("button",{type:"button",className:"btn btn-secondary"},u.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"card"},u.a.createElement(B.default,{title:"Pembayaran Hutang Supplier"}),u.a.createElement("div",{className:"card-body"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-12"},u.a.createElement("ul",{className:"nav nav-pills bg-nav-pills nav-justified mb-3"},u.a.createElement("li",{className:"nav-item"},u.a.createElement("a",{href:"#rupiah","data-toggle":"tab","aria-expanded":"false",className:"nav-link rounded-0 active",onClick:function(){return t.setState({tipeTransaksi:"BARANG"})}},u.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),u.a.createElement("span",{className:"d-none d-lg-block"},"Gram"))),u.a.createElement("li",{className:"nav-item"},u.a.createElement("a",{href:"#gram","data-toggle":"tab","aria-expanded":"true",className:"nav-link rounded-0 ",onClick:function(){return t.setState({tipeTransaksi:"RUPIAH"})}},u.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),u.a.createElement("span",{className:"d-none d-lg-block"},"Rupiah")))),u.a.createElement("div",{className:"tab-content"},u.a.createElement("div",{className:"tab-pane show active",id:"rupiah"},u.a.createElement(s.Suspense,{fallback:u.a.createElement(N.a,{width:"100%",height:200})},u.a.createElement(T,{tampungCiok:this.props.tampungCiok,tampungRongsok:this.props.tampungRongsok,totalCiok:this.props.totalCiok,totalRongsok:this.props.totalRongsok,totalBrutoCiok:this.props.totalBrutoCiok,totalBrutoRongsok:this.props.totalBrutoRongsok,onSubmit:function(a){return t.handleSubmit(a)},jenisTransaksi:this.state.tipeTransaksi,onSend:this.props.onSend}))),u.a.createElement("div",{className:"tab-pane",id:"gram"},u.a.createElement(s.Suspense,{fallback:u.a.createElement(N.a,{width:"100%",height:200})},u.a.createElement(T,{tampungCiok:this.props.tampungCiok,tampungRongsok:this.props.tampungRongsok,totalCiok:this.props.totalCiok,totalRongsok:this.props.totalRongsok,totalBrutoCiok:this.props.totalBrutoCiok,totalBrutoRongsok:this.props.totalBrutoRongsok,onSubmit:function(a){return t.handleSubmit(a)},jenisTransaksi:this.state.tipeTransaksi,onSend:this.props.onSend})))))))))))}}]),e}(s.Component);a.default=Object(c.b)((function(t){return{pembayaranSupplierList:t.provinsi.pembayaranSupplier,tampungCiok:t.provinsi.tampungCiok,tampungRongsok:t.provinsi.tampungRongsok,totalCiok:t.provinsi.totalCiok,totalRongsok:t.provinsi.totalRongsok,totalBrutoCiok:t.provinsi.totalBrutoCiok,totalBrutoRongsok:t.provinsi.totalBrutoRongsok,alert:t.provinsi.alert,error:t.provinsi.error,noFaktur:t.provinsi.noFaktur,username:t.provinsi.username,onSend:t.provinsi.onSend}}),null)(y)},461:function(t,a,e){"use strict";e.r(a);var n=e(71),o=e(72),r=e(74),l=e(73),i=e(0),s=e.n(i),u=function(t){Object(r.a)(e,t);var a=Object(l.a)(e);function e(){return Object(n.a)(this,e),a.apply(this,arguments)}return Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),e}(i.Component);a.default=u},493:function(t,a,e){"use strict";var n=e(496);e(498);a.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",p=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",g=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],m=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",d=arguments.length>13?arguments[13]:void 0,h=new n.default;h.autoTable(g,d,{startY:40});var k=h.lastAutoTable.finalY+10;h.text(m,14,15),h.setFontSize(10),h.text(t,14,25),h.text(":",37,25),h.text(a,40,25),h.text(e,120,25),h.text(":",141,25),h.text(o,145,25),h.text(r,14,30),h.text(":",37,30),h.text(l,40,30),h.text(i,120,30),h.text(":",141,30),h.text(s,145,30),h.text("User",160,k+10),h.text(":",168,k+10),h.text(u,170,k+10),h.text("Cetak",160,k+15),h.text(":",168,k+15),h.text(c,170,k+15),h.text("Valid",160,k+20),h.text(":",168,k+20),h.text(p,170,k+20);var b=h.output("datauristring"),f="<embed width='100%' height='100%' src='"+b+"'/>",S=window.open();S.document.open(),S.document.write(f),S.document.close()}}}]);
//# sourceMappingURL=121.cfb33de1.chunk.js.map