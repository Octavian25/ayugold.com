(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[107],{1147:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a(35),l=a(36),c=a(38),o=a(37),i=a(0),s=a.n(i),m=a(187),u=a(69),d=a(87),g=a(67),p=a.n(g),h=a(18),E=a(478),f=a.n(E),N=a(480),b=a.n(N),v=a(479),k=a.n(v),A=a(505),C=a.n(A),S=a(19),O=a.n(S),B=a(5),F=a(56),T=a(186),P=a(184),x=N.Search.SearchBar,y=N.CSVExport.ExportCSVButton,_=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URLLOCAL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,D=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).inputChange=function(e){return function(t){l.setState(Object(n.a)({},e,t.target.value))}},l.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},l.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return l.getDetails(t.noFaktur)}},s.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(d.f)()),p.a.get("http://192.168.1.27:7002/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"getDetails",value:function(e){var t=this;p.a.get(_+"item/dc/mutasibarang/detail?noFaktur="+e).then((function(e){return t.setLocal(e.data)})).catch((function(){return Object(F.c)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(e){localStorage.setItem("mutasiBarang",JSON.stringify(e.barangDetailList)),this.print(e.tanggal,e.noBon)}},{key:"print",value:function(e,t){var a=[],n=JSON.parse(localStorage.getItem("mutasiBarang"));n.forEach((function(e,t){var n=[t++,e.kodeJenis01,e.bruto01,e.kadarTransaksi01,e.netto01,e.kodeJenis02,e.bruto02,e.kadarTransaksi02,e.netto02];a.push(n)}));var r=n.map((function(e){return e.bruto01})).reduce((function(e,t){return e+t})),l=n.map((function(e){return e.netto01})).reduce((function(e,t){return e+t})),c=n.map((function(e){return e.netto02})).reduce((function(e,t){return e+t})),o=n.map((function(e){return e.bruto02})).reduce((function(e,t){return e+t})),i=["","",parseFloat(r).toFixed(3),"",parseFloat(l).toFixed(3),"",parseFloat(o).toFixed(3),"",parseFloat(c).toFixed(3)];a.push(i),console.log(a);Object(T.a)("Tanggal",e,"","","Nomor Bon",t,"","","ADMIN",e,"",["No","Kode Awal","Bruto","Harga (%)","Netto Awal","Kode Tujuan","Harga (%)","Netto Akhir"],"MUTASI BARANG",a)}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),p.a.get(_+"item/dc/mutasibarang/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon}}).then((function(t){return e.setState({listPenerimaan:t.data})})).catch((function(){return Object(F.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(B.b,{to:"/cetakUlangBukti"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement(P.default,{title:"Cetak Ulang Butki Mutasi Barang"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Awal"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:"fas fa-exchange-alt"}))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),s.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Bon"),s.a.createElement("input",{type:"text",id:"noBon",name:"noBon",className:"form-control",onChange:this.inputChange("noBon")})),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-left"})),s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},s.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),s.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?s.a.createElement(b.a,{bootstrap4:!0,keyField:this.state.listPenerimaan,data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},s.a.createElement("div",{className:"text-right"},s.a.createElement(x,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),s.a.createElement(f.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),s.a.createElement(y,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:C.a,style:{width:"30%"},alt:"NOT RESPOND"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(O.a,{width:"100%",height:180}))))))))))}}]),a}(i.Component);t.default=Object(h.b)()(D)},505:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=107.af39b864.chunk.js.map