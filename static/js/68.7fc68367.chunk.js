(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[68],{1230:function(e,a,t){"use strict";t.r(a);var n=t(47),l=t(35),o=t(36),r=t(38),s=t(37),i=t(67),c=t.n(i),m=t(0),d=t.n(m),u=t(478),h=t.n(u),p=t(479),g=t.n(p),k=t(480),b=t.n(k),E=t(19),v=t.n(E),S=t(18),N=t(182),f=t(468),A=t(69),O=t(56),y=t(505),T=t.n(y),j=t(467),F=t(628),L=t(22),B=t(3),w=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={listSupplier:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(B.b)("subcategorys2?kodeKelompok=PERHIASAN").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(){return Object(O.c)("Sepertinya koneksi bermasalah, mohon periksa koneksi anda")}))}},{key:"setKodeBarang",value:function(e){var a=(e.target.value||"DEFAULT|DEFAULT|DEFAULT").split("|");this.props.change("kadar",a[2])}},{key:"render",value:function(){var e=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-3"},d.a.createElement("label",{htmlFor:""},"Kode Barang"),d.a.createElement(j.a,{name:"namaToko",component:"select",className:"form-control",onChange:function(a){return e.setKodeBarang(a)}},d.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return d.a.createElement("option",{value:e.kodeJenis+"|"+e.namaJenis+"|"+e.kadarCetak,key:e.kodeJenis+"|"+e.namaJenis},e.namaJenis)})))),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(j.a,{label:"Kadar (%)",name:"kadar",component:L.a,type:"text"})),d.a.createElement("div",{className:"col-lg-3"},d.a.createElement(j.a,{label:"Netto(Gr)",name:"netto",component:L.a,type:"text"}))),d.a.createElement("div",{className:"col-lg-12"},d.a.createElement("div",{className:"text-right"},d.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))}}]),t}(m.Component);w=Object(f.a)({form:"FormSaldoAwalStok",enableReinitialize:!0,validate:F.a})(w);var C=Object(S.b)()(w),D=t(60),_=t(807),P=t.n(_),I=t(5),R=t(184),K=k.Search.SearchBar,U=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URLLOCAL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,x=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=a.call(this,e)).handleChange=function(e){return function(a){o.setState(Object(n.a)({},e,a.target.value))}},o.state={tipeTransksi:"HUTANG",listSales:[],columns:[{dataField:"noFaktur",text:"Nomor Faktur"},{dataField:"footerItem.kadar",text:"Kadar"},{dataField:"footerItem.totalNetto",text:"Netto"}],tanggal:"",sales:"",loading:!1},o}return Object(o.a)(t,[{key:"sendSaldoAwal",value:function(){var e=this;return""===this.state.tanggal?(Object(O.c)("Mohon isi tanggal"),!1):""===this.state.sales?(Object(O.c)("Mohon isi sales"),!1):null===localStorage.getItem("SaldoAwalStok")?(Object(O.c)("Data masih Kosong, Silahkan tambahkan dahulu"),!1):(this.setState({loading:!0}),void c.a.post(U+"cst/dc/pjl",JSON.parse(localStorage.getItem("SaldoAwalStok"))).then((function(){return e.setState({loading:!1})})).then((function(){return Object(O.b)("Saldo Awal Berhasil Disimpan")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return e.props.dispatch(Object(A.b)())})).catch((function(){return Object(O.c)("Sepertinya ada gangguan, Mohon periksa koneksi anda",e.setState({loading:!1}))})))}},{key:"setTipe",value:function(e){this.setState({tipeTransksi:e.target.value}),this.props.dispatch(Object(N.a)("FormSaldoAwalPiutang"))}},{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(A.b)()),this.props.dispatch(Object(D.h)()),c.a.get("http://192.168.1.27:7002/api/v1/storages2?tipeData=LOKASI").then((function(a){return e.setState({listSales:a.data})})).catch((function(){return Object(O.c)("Mohon periksa koneksi anda")}))}},{key:"handlerSimpan",value:function(e){if(""===this.state.tanggal)return Object(O.c)("Mohon isi tanggal"),!1;if(""===this.state.sales)return Object(O.c)("Mohon isi sales"),!1;var a={kodeLokasi:"-",namaToko:"-",kodeSales:this.state.sales,kodeCustomer:"-",noBon:this.props.noFaktur,noFaktur:this.props.noFaktur,tanggal:this.state.tanggal,tipeTransaksi:"SALDO-AWAL-PIUTANG",footerDocument:{inputBy:this.props.username},footerItem:{totalP:0,totalK:0,totalpkg:0,totalNettoExt:0,totalBruto:0,totalNetto:e.netto||0,totalGross:0,totalQty:0,totalRp:0,kadar:e.kadar}};console.log(JSON.stringify(a));var t=JSON.parse(localStorage.getItem("SaldoAwalStok"))||[];t.push(a),localStorage.setItem("SaldoAwalStok",JSON.stringify(t)),Object(O.b)("Data Tersimpan"),this.props.dispatch(Object(D.h)())}},{key:"render",value:function(){var e=this;return!0===this.state.loading?d.a.createElement("div",{className:"d-flex no-block justify-content-center align-items-center position-relative",style:{width:"100%",height:"90vh"}},d.a.createElement("div",null,d.a.createElement(P.a,{type:"Oval",color:"#00BFFF",height:70,width:70}))):d.a.createElement("div",{className:"container-fluid"},d.a.createElement("ol",{className:"breadcrumb mb-2"},d.a.createElement(I.b,{to:"/saldoawal"},d.a.createElement("button",{type:"button",className:"btn btn-secondary"},d.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-12"},d.a.createElement("div",{className:"card"},d.a.createElement(R.default,{title:"Saldo Awal Piutang Customer"}),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"col-lg-12 mt-3"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-4"},d.a.createElement("label",{htmlFor:""},"Tanggal"),d.a.createElement("input",{type:"date",className:"form-control",onChange:this.handleChange("tanggal")})),d.a.createElement("div",{className:"col-lg-4"},d.a.createElement("label",{htmlFor:""},"Nama Lokasi"),d.a.createElement("select",{className:"form-control",onChange:this.handleChange("sales")},d.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIh"),this.state.listSales.map((function(e){return d.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)})))),d.a.createElement("div",{className:"col-lg-12 mt-3"},d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-lg-6"},d.a.createElement("div",{className:"text-left"},d.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.sendSaldoAwal()}},"Simpan Saldo Awal"))),d.a.createElement("div",{className:"col-lg-6"},d.a.createElement("div",{className:"text-right"},d.a.createElement("button",{className:"btn btn-primary","data-target":"#tambahBarang","data-toggle":"modal"},"Tambah Data"))),d.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.dataSaldoAwalStok?d.a.createElement(b.a,{keyField:"id",data:this.props.dataSaldoAwalStok,columns:this.state.columns,search:!0},(function(e){return d.a.createElement("div",{className:"form-group"},d.a.createElement("div",{className:"text-right mt-5 mb-3"},d.a.createElement(K,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),d.a.createElement(h.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:g()()})))})):d.a.createElement("div",null,this.props.error?d.a.createElement("div",{className:"text-center"},d.a.createElement("img",{src:T.a,style:{width:"30%"},alt:"NOT RESPOND"}),d.a.createElement("br",null),d.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):d.a.createElement(v.a,{width:"100%",height:180}))))))))))),d.a.createElement("div",{id:"tambahBarang",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},d.a.createElement("div",{className:"modal-dialog modal-lg"},d.a.createElement("div",{className:"modal-content"},d.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},d.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Transaksi"),d.a.createElement("button",{id:"dismiss_modal1",name:"dismiss_modal1",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),d.a.createElement("div",{className:"modal-body"},d.a.createElement(C,{onSubmit:function(a){return e.handlerSimpan(a)},tipe:this.state.tipeTransksi})),d.a.createElement("div",{className:"modal-footer"},d.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),t}(m.Component);x=Object(f.a)({form:"SaldoAwalStok",enableReinitialize:!0})(x);a.default=Object(S.b)((function(e){return{noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,dataSaldoAwalStok:e.provinsi.dataSaldoAwalStok}}),null)(x)},505:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"},628:function(e,a,t){"use strict";a.a=function(e){var a={};return e.namaToko||(a.namaToko="Tidak Boleh kosong"),e.detail||(a.detail="Tidak Boleh kosong"),e.tglFaktur||(a.tglFaktur="Tidak Boleh kosong"),e.noBon||(a.noBon="Tidak Boleh kosong"),e.bruto||(a.bruto="Tidak Boleh kosong"),e.netto||(a.netto="Tidak Boleh kosong"),e.totalSaldoGr||(a.totalSaldoGr="Tidak Boleh kosong"),e.totalSaldoRp||(a.totalSaldoRp="Tidak Boleh kosong"),a}}}]);
//# sourceMappingURL=68.7fc68367.chunk.js.map