(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[113],{1147:function(e,a,t){"use strict";t.r(a);var n=t(47),l=t(35),r=t(36),s=t(38),i=t(37),c=t(0),o=t.n(c),m=t(187),u=t(69),d=t(87),p=t(68),g=t.n(p),h=t(18),E=t(478),N=t.n(E),b=t(504),v=t.n(b),f=t(503),k=t.n(f),S=t(505),A=t.n(S),C=t(19),O=t.n(C),y=t(5),T=t(56),P=t(186),D=t(184),F=b.Search.SearchBar,_=b.CSVExport.ExportCSVButton,j=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7001/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,B=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(n.a)({},e,a.target.value))}},r.pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:a[0],namaSupplier:a[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return r.getDetails(a.noFaktur)}},o.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[],listPenerimaan:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(d.f)()),g.a.get("https://147.139.193.169:3759/api/v1/suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"getDetails",value:function(e){var a=this;g.a.get(j+"item/dc/pindahbarang/detail?noFaktur="+e).then((function(e){return a.setLocal(e.data)})).catch((function(){return Object(T.c)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(e){localStorage.setItem("pindahBarang",JSON.stringify(e.barangDetails)),this.print(e.tanggal,e.kodeLokasiAsal,e.kodeLokasiTujuan,e.noBon)}},{key:"print",value:function(e,a,t,n){var l=[];JSON.parse(localStorage.getItem("pindahBarang")).forEach((function(e,a){var t=[a++,e.kodeJenis,e.bruto,e.kadarTransaksi,e.netto,e.pkg,e.gross,e.rp,e.qty];l.push(t)})),console.log(l);Object(P.a)("Tanggal",e,"Lokasi",a+" - "+t,"Nomor Bon",n,"","","ADMIN",e,"",["No","Kode Jenis","Bruto (Gr)","Harga (%)","Netto (Gr)","Pkg (Gr)","Gross (Gr)","Ongkos (Rp)","Qty"],"PINDAH BARANG",l)}},{key:"getData",value:function(){var e=this;g.a.get(j+"item/dc/pindahbarang/heads?",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,kodeLokasiFrom:this.state.asal,kodeLokasiTo:this.state.tujuan}}).then((function(a){return e.setState({listPenerimaan:a.data})})).catch((function(){return Object(T.c)("Sepertinya ada gangguan, tidak bisa mengambil data dari server")}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("ol",{className:"breadcrumb mb-2"},o.a.createElement(y.b,{to:"/cetakUlangBukti"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},o.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),o.a.createElement("div",{className:"card"},o.a.createElement(D.default,{title:"Cetak Ulang Butki Pindah Barang"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Awal"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"fas fa-exchange-alt"}))),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),o.a.createElement("div",{className:"col-lg-4 col-md-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Kelompok"),o.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},o.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return o.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),o.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Asal"),o.a.createElement("input",{type:"text",id:"asal",name:"asal",className:"form-control",onChange:this.inputChange("asal")})),o.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Tujuan"),o.a.createElement("input",{type:"text",id:"tujuan",name:"tujuan",className:"form-control",onChange:this.inputChange("tujuan")})),o.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-left"})),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.getData()}},o.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),o.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?o.a.createElement(v.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},o.a.createElement("div",{className:"text-right"},o.a.createElement(F,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),o.a.createElement(N.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),o.a.createElement(_,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):o.a.createElement("div",null,this.props.error?o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:A.a,style:{width:"30%"},alt:"NOT RESPOND"}),o.a.createElement("br",null),o.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):o.a.createElement(O.a,{width:"100%",height:180}))))))))))}}]),t}(c.Component);a.default=Object(h.b)()(B)},505:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=113.7f1d864b.chunk.js.map