(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[65,174],{1235:function(e,t,a){"use strict";a.r(t);var n=a(77),o=a(71),r=a(72),l=a(74),i=a(73),s=a(45),c=a.n(s),m=a(0),d=a.n(m),u=a(468),h=a.n(u),p=a(470),g=a.n(p),f=a(471),b=a.n(f),k=a(173),v=a.n(k),E=a(27),S=a(288),N=a(458),y=a(177),O=a(466),j=a(496),A=a.n(j),w=a(465),T=a(620),B=a(469),F=a(5),L=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={listSupplier:[]},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(F.b)("subcategorys2?kodeKelompok=PERHIASAN").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(){return Object(O.c)("Sepertinya koneksi bermasalah, mohon periksa koneksi anda")}))}},{key:"setKodeBarang",value:function(e){var t=(e.target.value||"DEFAULT|DEFAULT|DEFAULT").split("|");this.props.change("kadar",t[2])}},{key:"render",value:function(){var e=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-3"},d.a.createElement("label",{htmlFor:""},"Kode Barang"),d.a.createElement(w.a,{name:"namaToko",component:"select",className:"form-control",onChange:function(t){return e.setKodeBarang(t)}},d.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return d.a.createElement("option",{value:e.kodeJenis+"|"+e.namaJenis+"|"+e.kadarCetak,key:e.kodeJenis+"|"+e.namaJenis},e.namaJenis)})))),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(w.a,{label:"Kadar (%)",name:"kadar",component:B.a,type:"text"})),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(w.a,{label:"Netto(Gr)",name:"netto",component:B.a,type:"text"}))),d.a.createElement("div",{className:"col-lg-12"},d.a.createElement("div",{className:"text-right"},d.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))}}]),a}(m.Component);L=Object(N.a)({form:"FormSaldoAwalStok",enableReinitialize:!0,validate:T.a})(L);var D=Object(E.b)()(L),C=a(50),x=a(799),I=a.n(x),P=a(4),J=a(464),K=f.Search.SearchBar,R=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).handleChange=function(e){return function(t){r.setState(Object(n.a)({},e,t.target.value))}},r.state={tipeTransksi:"HUTANG",listSales:[],columns:[{dataField:"noFaktur",text:"Nomor Faktur"},{dataField:"footerItem.kadar",text:"Kadar"},{dataField:"footerItem.totalNetto",text:"Netto"}],tanggal:"",sales:"",loading:!1},r}return Object(r.a)(a,[{key:"sendSaldoAwal",value:function(){var e=this;return""===this.state.tanggal?(Object(O.c)("Mohon isi tanggal"),!1):""===this.state.sales?(Object(O.c)("Mohon isi sales"),!1):null===localStorage.getItem("SaldoAwalStok")?(Object(O.c)("Data masih Kosong, Silahkan tambahkan dahulu"),!1):(this.setState({loading:!0}),void c.a.post("http://157.245.145.87:9013/cst/dc/pjl",JSON.parse(localStorage.getItem("SaldoAwalStok"))).then((function(){return e.setState({loading:!1})})).then((function(){return Object(O.b)("Saldo Awal Berhasil Disimpan")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return e.props.dispatch(Object(y.b)())})).catch((function(){return Object(O.c)("Sepertinya ada gangguan, Mohon periksa koneksi anda",e.setState({loading:!1}))})))}},{key:"setTipe",value:function(e){this.setState({tipeTransksi:e.target.value}),this.props.dispatch(Object(S.a)("FormSaldoAwalPiutang"))}},{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(y.b)()),this.props.dispatch(Object(C.h)()),c.a.get("http://147.139.182.75:3759/api/v1/storages2?tipeData=LOKASI").then((function(t){return e.setState({listSales:t.data})})).catch((function(){return Object(O.c)("Mohon periksa koneksi anda")}))}},{key:"handlerSimpan",value:function(e){if(""===this.state.tanggal)return Object(O.c)("Mohon isi tanggal"),!1;if(""===this.state.sales)return Object(O.c)("Mohon isi sales"),!1;var t={kodeLokasi:"-",namaToko:"-",kodeSales:this.state.sales,kodeCustomer:"-",noBon:this.props.noFaktur,noFaktur:this.props.noFaktur,tanggal:this.state.tanggal,tipeTransaksi:"SALDO-AWAL-PIUTANG",footerDocument:{inputBy:this.props.username},footerItem:{totalP:0,totalK:0,totalpkg:0,totalNettoExt:0,totalBruto:0,totalNetto:e.netto||0,totalGross:0,totalQty:0,totalRp:0,kadar:e.kadar}};console.log(JSON.stringify(t));var a=JSON.parse(localStorage.getItem("SaldoAwalStok"))||[];a.push(t),localStorage.setItem("SaldoAwalStok",JSON.stringify(a)),Object(O.b)("Data Tersimpan"),this.props.dispatch(Object(C.h)())}},{key:"render",value:function(){var e=this;return!0===this.state.loading?d.a.createElement("div",{className:"d-flex no-block justify-content-center align-items-center position-relative",style:{width:"100%",height:"90vh"}},d.a.createElement("div",null,d.a.createElement(I.a,{type:"Oval",color:"#00BFFF",height:70,width:70}))):d.a.createElement("div",{className:"container-fluid"},d.a.createElement("ol",{className:"breadcrumb mb-2"},d.a.createElement(P.b,{to:"/saldoawal"},d.a.createElement("button",{type:"button",className:"btn btn-secondary"},d.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-12"},d.a.createElement("div",{className:"card"},d.a.createElement(J.default,{title:"Saldo Awal Piutang Customer"}),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"col-lg-12 mt-3"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-4"},d.a.createElement("label",{htmlFor:""},"Tanggal"),d.a.createElement("input",{type:"date",className:"form-control",onChange:this.handleChange("tanggal")})),d.a.createElement("div",{className:"col-lg-4"},d.a.createElement("label",{htmlFor:""},"Nama Lokasi"),d.a.createElement("select",{className:"form-control",onChange:this.handleChange("sales")},d.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIh"),this.state.listSales.map((function(e){return d.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)})))),d.a.createElement("div",{className:"col-lg-12 mt-3"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-6"},d.a.createElement("div",{className:"text-left"},d.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.sendSaldoAwal()}},"Simpan Saldo Awal"))),d.a.createElement("div",{className:"col-lg-6"},d.a.createElement("div",{className:"text-right"},d.a.createElement("button",{className:"btn btn-primary","data-target":"#tambahBarang","data-toggle":"modal"},"Tambah Data"))),d.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.dataSaldoAwalStok?d.a.createElement(b.a,{keyField:"id",data:this.props.dataSaldoAwalStok,columns:this.state.columns,search:!0},(function(e){return d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"text-right mt-5 mb-3"},d.a.createElement(K,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),d.a.createElement(h.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:g()()})))})):d.a.createElement("div",null,this.props.error?d.a.createElement("div",{className:"text-center"},d.a.createElement("img",{src:A.a,style:{width:"30%"},alt:"NOT RESPOND"}),d.a.createElement("br",null),d.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):d.a.createElement(v.a,{width:"100%",height:180}))))))))))),d.a.createElement("div",{id:"tambahBarang",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},d.a.createElement("div",{className:"modal-dialog modal-lg"},d.a.createElement("div",{className:"modal-content"},d.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},d.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Transaksi"),d.a.createElement("button",{id:"dismiss_modal1",name:"dismiss_modal1",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),d.a.createElement("div",{className:"modal-body"},d.a.createElement(D,{onSubmit:function(t){return e.handlerSimpan(t)},tipe:this.state.tipeTransksi})),d.a.createElement("div",{className:"modal-footer"},d.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),a}(m.Component);R=Object(N.a)({form:"SaldoAwalStok",enableReinitialize:!0})(R);t.default=Object(E.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,dataSaldoAwalStok:e.provinsi.dataSaldoAwalStok}}),null)(R)},464:function(e,t,a){"use strict";a.r(t);var n=a(71),o=a(72),r=a(74),l=a(73),i=a(0),s=a.n(i),c=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(i.Component);t.default=c},466:function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return m}));var n=a(51),o=a.n(n),r=a(5),l=function(e){return new Promise((function(t,a){o.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},i=function(e){return new Promise((function(t,a){o.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},s=function(e){return new Promise((function(t,a){o.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(e){return a(e)}))}))},c=function(e,t,a,n){return new Promise((function(l,s){o.a.fire({title:"Oopps..",text:e.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(e){e.isConfirmed&&Object(r.d)(a+t,n).then((function(){return i("Data Berhasil Dikembalikan")})).then((function(){return l("Berhasil")})).catch((function(e){return s("Gagal")}))}))}))},m=function(e,t,a){var n=(new Date).toLocaleDateString(),o=JSON.parse(localStorage.getItem("LogWebsite"))||[],r={tanggal:n,keterangan:e,data:t,error:a};o.push(r),localStorage.setItem("LogWebsite",JSON.stringify(o))}},469:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i}));var n=a(0),o=a.n(n),r=a(178),l=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,l=e.readOnly,i=e.meta,s=i.touched,c=i.error,m=i.warning;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"text-black"},a),o.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",maxLength:r,readOnly:l,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),s&&(c&&o.a.createElement("p",{className:"invalid-feedback"},c)||m&&o.a.createElement("p",null,m)))},i=function(e){var t=e.input,a=e.label,n=e.options,l=(e.placeholder,e.disabled),i=(e.value,e.meta),s=i.touched,c=i.error,m=i.warning;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"text-black"},a),o.a.createElement(r.a,Object.assign({},t,{options:n,search:!0,emptyMessage:"Tidak Ada Data",placeholder:"Silahkan Pilih",disabled:l,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),s&&(c&&o.a.createElement("p",{className:"invalid-feedback"},c)||m&&o.a.createElement("p",null,m)))}},496:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"},620:function(e,t,a){"use strict";t.a=function(e){var t={};return e.namaToko||(t.namaToko="Tidak Boleh kosong"),e.detail||(t.detail="Tidak Boleh kosong"),e.tglFaktur||(t.tglFaktur="Tidak Boleh kosong"),e.noBon||(t.noBon="Tidak Boleh kosong"),e.bruto||(t.bruto="Tidak Boleh kosong"),e.netto||(t.netto="Tidak Boleh kosong"),e.totalSaldoGr||(t.totalSaldoGr="Tidak Boleh kosong"),e.totalSaldoRp||(t.totalSaldoRp="Tidak Boleh kosong"),t}}}]);
//# sourceMappingURL=65.d1fe7728.chunk.js.map