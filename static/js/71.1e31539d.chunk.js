(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[71],{1230:function(a,e,t){"use strict";t.r(e);var n=t(32),l=t(15),r=t(16),i=t(18),s=t(17),c=t(0),o=t.n(c),m=t(149),u=t(33),d=t(102),p=t(116),h=t.n(p),b=t(14),g=t(254),k=t.n(g),E=t(148),v=t.n(E),f=t(147),N=t.n(f),O=t(633),j=t.n(O),_=t(21),A=t.n(_),y=t(8),L=t(11),P=t(53),S=t(35),T=t(39),C=t(183),x=t(6),B=function(a){Object(i.a)(t,a);var e=Object(s.a)(t);function t(a){var n;return Object(l.a)(this,t),(n=e.call(this,a)).state={},n}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.f)()),this.props.dispatch(Object(d.e)())}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.props.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(T.a,{name:"tanggalAwal",component:x.a,type:"date",label:"Tanggal Awal ",placeholder:"Masukan Tanggal Awal "})),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(T.a,{name:"tanggalAkhir",component:x.a,type:"date",label:"Tanggal Akhir ",placeholder:"Masukan Tanggal Akhir "})),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(T.a,{name:"lokasi_asal",component:x.b,options:this.props.dataLokasiPindah.map((function(a){return{value:a.kode_lokasi,name:a.nama_lokasi}})),type:"text",label:"Lokasi Asal",placeholder:"Masukan Lokasi Asal"})),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement(T.a,{name:"lokasi_tujuan",component:x.b,options:this.props.dataLokasiPindah.map((function(a){return{value:a.kode_lokasi,name:a.nama_lokasi}})),type:"text",label:"Lokasi Tujuan",placeholder:"Masukan Lokasi Tujuan"})),o.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary"},o.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data")))))))}}]),t}(c.Component);B=Object(C.a)({form:"FormLaporanPindahBarangHead",enableReinitialize:!0})(B);var D=Object(b.b)((function(a){return{supplier:a.provinsi.supplier,dataLokasiPindah:a.provinsi.dataLokasiPindah}}))(B),R=t(5),K=t(70),w=E.Search.SearchBar,F=E.CSVExport.ExportCSVButton,M=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,U=function(a){Object(i.a)(t,a);var e=Object(s.a)(t);function t(a){var r;return Object(l.a)(this,t),(r=e.call(this,a)).inputChange=function(a){return function(e){r.setState(Object(n.a)({},a,e.target.value))}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"lokasi_asal",text:"Lokasi Asal"},{dataField:"lokasi_tujuan",text:"Lokasi Tujuan"},{dataField:"keterangan",text:"Keterangan"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(a,e){return o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return r.print(e)}},o.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[],listPenerimaan:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.f)()),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"getDetails",value:function(a){var e=this;h.a.get(M+"item/dc/pindahbarang/detail?noFaktur="+a).then((function(a){return e.setLocal(a.data)})).catch((function(){return Object(L.c)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(a){localStorage.setItem("pindahBarang",JSON.stringify(a.barangDetails)),this.print(a.tanggal,a.kodeLokasiAsal,a.kodeLokasiTujuan,a.noBon)}},{key:"print",value:function(a){var e=[];a.detail_barang.forEach((function(a,t){var n=[t++,a.kode_jenis,a.nama_jenis,a.kadar_jual,a.bruto,a.netto,a.ongkos_rp];e.push(n)}));Object(P.a)("Tanggal",a.tanggal,"Lokasi",a.lokasi_asal+" - "+a.lokasi_tujuan,"Nomor Bon",a.no_bon,"","","ADMIN",Object(K.b)(),"",["No","Kode Jenis","Nama Jenis","Kadar Jual","Bruto","Netto","Ongkos (Rp)"],"PINDAH BARANG",e)}},{key:"getData",value:function(a){var e=this;Object(R.b)("report/pindah-barang/ALL&ALL&".concat(a.tanggalAwal,"&").concat(a.tanggalAkhir)).then((function(a){return e.setState({listPenerimaan:a.data})})).catch((function(){return Object(L.c)("Sepertinya ada gangguan, tidak bisa mengambil data dari server")}))}},{key:"render",value:function(){var a=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("ol",{className:"breadcrumb mb-2"},o.a.createElement(y.b,{to:"/cetakUlangBukti"},o.a.createElement("button",{type:"button",className:"btn btn-secondary"},o.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),o.a.createElement("div",{className:"card"},o.a.createElement(S.default,{title:"Cetak Ulang Bukti Pindah Barang"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(D,{onSubmit:function(e){return a.getData(e)}})),o.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?o.a.createElement(v.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(a){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},o.a.createElement("div",{className:"text-right"},o.a.createElement(w,Object.assign({},a.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),o.a.createElement(k.a,Object.assign({},a.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:N()()})),o.a.createElement(F,Object.assign({},a.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):o.a.createElement("div",null,this.props.error?o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:j.a,style:{width:"30%"},alt:"NOT RESPOND"}),o.a.createElement("br",null),o.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):o.a.createElement(A.a,{width:"100%",height:180}))))))))}}]),t}(c.Component);e.default=Object(b.b)()(U)},633:function(a,e,t){a.exports=t.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=71.1e31539d.chunk.js.map