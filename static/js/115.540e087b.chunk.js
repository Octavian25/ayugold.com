(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[115],{1144:function(e,t,a){"use strict";a.r(t);var n=a(47),r=a(35),l=a(36),c=a(38),i=a(37),o=a(0),s=a.n(o),u=a(187),m=a(69),p=a(87),d=a(68),g=a.n(d),h=a(18),E=a(478),N=a.n(E),f=a(504),v=a.n(f),b=a(503),k=a.n(b),S=a(505),C=a.n(S),A=a(19),F=a.n(A),O=a(5),D=a(56),R=a(186),T=a(184),y=f.Search.SearchBar,B=f.CSVExport.ExportCSVButton,x=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"http://192.168.1.27:7001/api/v1/",REACT_APP_BACKEND_URLLOCAL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,_=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).inputChange=function(e){return function(t){l.setState(Object(n.a)({},e,t.target.value))}},l.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},l.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"namaAktor",text:"Supplier"},{dataField:"noBon",text:"No Nota"},{dataField:"noFaktur",text:"No Retur"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return l.getDetails(t.noFaktur)}},s.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada",hasilDataGet:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(p.f)()),g.a.get("http://192.168.1.27:7001/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(m.b)()),this.props.dispatch(Object(u.b)())}},{key:"getDetails",value:function(e){var t=this;g.a.get(x+"spp/dc/rtr/detail?noFaktur="+e).then((function(e){return t.setLocal(e.data)})).catch((function(){return Object(D.c)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(e){localStorage.setItem("ReturnSupplierTable",JSON.stringify(e.barangDetails)),this.print(e.tanggal,e.noBon,e.noFaktur,e.kodeSupplier)}},{key:"print",value:function(e,t,a,n){var r=[],l=JSON.parse(localStorage.getItem("ReturnSupplierTable"));l.forEach((function(e,t){var a=[t++,e.kodeJenis,e.kadarCetak,e.p,e.k,e.pkg,e.bruto,e.kadarTransaksi,e.netto,e.rp];r.push(a)}));var c=l.map((function(e){return e.bruto})).reduce((function(e,t){return e+t})),i=l.map((function(e){return e.netto})).reduce((function(e,t){return e+t})),o=l.map((function(e){return e.rp})).reduce((function(e,t){return e+t})),s=["","","","","","",parseFloat(c).toFixed(3),"",parseFloat(i).toFixed(3),parseFloat(o).toLocaleString("id-ID")];r.push(s),console.log(JSON.stringify(r));Object(R.a)("no Return",a,"Tanggal",e,"No Bon",t,"Supplier",n,"ADMIN",e,"",["No","Kode Barang","Kadar Cetak (%)","P","K","Bungkus(Gr)","Berat(Gr)","Harga(Gr)","Murni(Gr)","Ongkos(Rp)"],"Return Barang Supplier",r)}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),g.a.get(x+"spp/dc/rtr/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier,statusValid:"VALID"}}).then((function(t){return e.setState({hasilDataGet:t.data})})).catch((function(){return Object(D.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(O.b,{to:"/cetakUlangBukti"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement(T.default,{title:"Cetak Ulang Butki Return Supplier"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Awal"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:"fas fa-exchange-alt"}))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),s.a.createElement("div",{className:"col-lg-4 col-md-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Supplier"),s.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},s.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return s.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),s.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Return"),s.a.createElement("input",{type:"text",id:"noReturn",name:"noReturn",className:"form-control",onChange:this.inputChange("noReturn")})),s.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Bon"),s.a.createElement("input",{type:"text",id:"noBon",name:"noBon",className:"form-control",onChange:this.inputChange("noBon")})),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-left"})),s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},s.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),s.a.createElement("div",{className:"col-lg-12"},this.state.hasilDataGet?s.a.createElement(v.a,{bootstrap4:!0,keyField:this.state.hasilDataGet,data:this.state.hasilDataGet,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},s.a.createElement("div",{className:"text-right"},s.a.createElement(y,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),s.a.createElement(N.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),s.a.createElement(B,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:C.a,style:{width:"30%"},alt:"NOT RESPOND"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(F.a,{width:"100%",height:180}))))))))))}}]),a}(o.Component);t.default=Object(h.b)()(_)},505:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=115.540e087b.chunk.js.map