(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[68],{1231:function(e,a,t){"use strict";t.r(a);var n=t(32),l=t(15),r=t(16),c=t(18),i=t(17),o=t(0),s=t.n(o),m=t(149),u=t(33),d=t(102),p=t(116),b=t.n(p),g=t(14),h=t(254),E=t.n(h),v=t(148),N=t.n(v),k=t(147),f=t.n(k),_=t(633),O=t.n(_),A=t(21),j=t.n(A),S=t(8),y=t(11),C=t(53),T=t(35),x=t(39),P=t(183),B=t(118),D=t(6),L=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={},n}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.f)()),this.props.dispatch(Object(B.d)())}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(x.a,{name:"tanggalAwal",component:D.a,type:"date",label:"Tanggal Awal ",placeholder:"Masukan Tanggal Awal "})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(x.a,{name:"tanggalAkhir",component:D.a,type:"date",label:"Tanggal Akhir ",placeholder:"Masukan Tanggal Akhir "})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(x.a,{name:"lokasi",component:D.b,options:this.props.lokasi.map((function(e){return{value:e.kode_lokasi,name:e.nama_lokasi}})),type:"text",label:"Lokasi",placeholder:"Masukan Lokasi"})),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},s.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data")))))))}}]),t}(o.Component);L=Object(P.a)({form:"FormLaporanMutasiBarangHead",enableReinitialize:!0})(L);var F=Object(g.b)((function(e){return{supplier:e.provinsi.supplier,lokasi:e.provinsi.lokasi}}))(L),R=t(5),w=t(70),M=v.Search.SearchBar,K=v.CSVExport.ExportCSVButton,U=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,I=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(n.a)({},e,a.target.value))}},r.pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:a[0],namaSupplier:a[1]})}},r.state={listNota:[],columns:[{dataField:"tgl_mutasi",text:"Tanggal"},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"lokasi_asal",text:"Lokasi"},{dataField:"total_gross",text:"Gross"},{dataField:"total_pkg",text:"Pkg"},{dataField:"total_bruto",text:"Bruto"},{dataField:"total_netto",text:"Netto"},{dataField:"total_netto2",text:"Netto 2"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return r.print(a)}},s.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],listPenerimaan:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.f)()),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"getDetails",value:function(e){var a=this;b.a.get(U+"item/dc/mutasibarang/detail?noFaktur="+e).then((function(e){return a.setLocal(e.data)})).catch((function(){return Object(y.c)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(e){localStorage.setItem("mutasiBarang",JSON.stringify(e.barangDetailList)),this.print(e.tanggal,e.noBon)}},{key:"print",value:function(e){var a=[];e.detail_barang.forEach((function(e,t){var n=[t++,e.kode_jenis,e.bruto,e.kadar_jual,e.netto,"<=====>",e.kode_jenis,e.kadar_jual2,e.netto2];a.push(n)})),console.log(a);Object(C.a)("Tanggal",e.tgl_mutasi,"","","Nomor Bon",e.no_bon,"","","ADMIN",Object(w.b)(),"",["No","Kode Jenis","Bruto","Harga (%)","Netto","<====>","Kode Jenis 2","Harga 2","Netto 2"],"MUTASI BARANG",a)}},{key:"caridata",value:function(e){var a=this;console.log("PENCARIAN...."),Object(R.b)("report/mutasi-stock/".concat(e.lokasi,"&").concat(e.tanggalAwal,"&").concat(e.tanggalAkhir)).then((function(e){return a.setState({listNota:e.data})}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(S.b,{to:"/cetakUlangBukti"},s.a.createElement("button",{type:"button",className:"btn btn-secondary"},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement(T.default,{title:"Cetak Ulang Bukti Mutasi Barang"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(F,{onSubmit:function(a){return e.caridata(a)}})),s.a.createElement("div",{className:"col-lg-12"},this.state.listNota?s.a.createElement(N.a,{bootstrap4:!0,keyField:"no_mutasi",data:this.state.listNota,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},s.a.createElement("div",{className:"text-right"},s.a.createElement(M,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),s.a.createElement(E.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:f()()})),s.a.createElement(K,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:O.a,style:{width:"30%"},alt:"NOT RESPOND"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(j.a,{width:"100%",height:180}))))))))}}]),t}(o.Component);a.default=Object(g.b)()(I)},633:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=68.8296961d.chunk.js.map