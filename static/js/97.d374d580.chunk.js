(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[97,174],{1147:function(e,t,a){"use strict";a.r(t);var n=a(77),r=a(71),l=a(72),i=a(74),o=a(73),c=a(0),s=a.n(c),m=a(180),u=a(178),d=a(110),p=a(46),g=a.n(p),h=a(28),E=a(468),f=a.n(E),v=a(471),b=a.n(v),N=a(470),k=a.n(N),S=a(496),x=a.n(S),T=a(173),C=a.n(T),O=a(5),A=a(174),F=a(497),y=a(465),P=v.Search.SearchBar,B=v.CSVExport.ExportCSVButton,D=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://ayu-grosir-api.herokuapp.com/api/v1/",REACT_APP_BACKEND_URL_WEB:"http://147.139.182.75:3759/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,j=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).inputChange=function(e){return function(t){l.setState(Object(n.a)({},e,t.target.value))}},l.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},l.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Supplier"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return l.getDetails(t.noFaktur)}},s.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(d.d)()),g.a.get("https://ayu-grosir-api.herokuapp.com/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"getDetails",value:function(e){var t=this;console.log(e),g.a.get(D+"spp/dc/trm/detail?noFaktur="+e).then((function(e){return t.setLocal(e.data)})).catch((function(){return Object(A.c)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(e){localStorage.setItem("TerimaSupplierTable",JSON.stringify(e.barangDetails)),this.print(e.tanggal,e.noBon,e.noFaktur,e.kodeSupplier)}},{key:"print",value:function(e,t,a,n){var r=[],l=JSON.parse(localStorage.getItem("TerimaSupplierTable"));l.forEach((function(e,t){var a=[t++,e.kodeJenis,e.kadarCetak,e.p,e.k,e.pkg,e.bruto,e.kadarTransaksi,e.netto,e.rp];r.push(a)}));var i=l.map((function(e){return e.bruto})).reduce((function(e,t){return e+t})),o=l.map((function(e){return e.netto})).reduce((function(e,t){return e+t})),c=l.map((function(e){return e.rp})).reduce((function(e,t){return e+t})),s=["","","","","","",parseFloat(i).toFixed(3),"",parseFloat(o).toFixed(3),parseFloat(c).toLocaleString("id-ID")];r.push(s),console.log(JSON.stringify(r));Object(F.a)("no Terima",a,"Tanggal",e,"No Bon",t,"Supplier",n,"ADMIN",e,"",["No","Kode Barang","Kadar Cetak (%)","P","K","Bungkus(Gr)","Berat(Gr)","Harga(Gr)","Murni(Gr)","Ongkos(Rp)"],"Terima Barang Supplier",r)}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),g.a.get(D+"spp/dc/trm/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier,statusValid:"VALID"}}).then((function(t){return e.setState({listPenerimaan:t.data})})).catch((function(){return Object(A.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(O.b,{to:"/cetakUlangBukti"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement(y.default,{title:"Cetak Ulang Butki Penerimaan Supplier"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Awal"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:"fas fa-exchange-alt"}))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),s.a.createElement("div",{className:"col-lg-4 col-md-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Supplier"),s.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},s.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return s.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),s.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Terima"),s.a.createElement("input",{type:"text",id:"noTerima",name:"noTerima",className:"form-control",onChange:this.inputChange("noBon")})),s.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Nota"),s.a.createElement("input",{type:"text",id:"noNota",name:"noNota",className:"form-control",onChange:this.inputChange("noBon")})),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-left"})),s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},s.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),s.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?s.a.createElement(b.a,{bootstrap4:!0,keyField:this.state.listPenerimaan,data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},s.a.createElement("div",{className:"text-right"},s.a.createElement(P,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),s.a.createElement(f.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),s.a.createElement(B,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:x.a,style:{width:"30%"},alt:"NOT RESPOND"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(C.a,{width:"100%",height:180}))))))))))}}]),a}(c.Component);t.default=Object(h.b)()(j)},465:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),l=a(74),i=a(73),o=a(0),c=a.n(o),s=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(o.Component);t.default=s},496:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"},497:function(e,t,a){"use strict";var n=a(501);a(502);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",m=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",u=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],p=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",g=arguments.length>13?arguments[13]:void 0,h=new n.default;h.autoTable(d,g,{startY:40});var E=h.lastAutoTable.finalY+10;h.text(p,14,15),h.setFontSize(10),h.text(e,14,25),h.text(":",37,25),h.text(t,40,25),h.text(a,120,25),h.text(":",141,25),h.text(r,145,25),h.text(l,14,30),h.text(":",37,30),h.text(i,40,30),h.text(o,120,30),h.text(":",141,30),h.text(c,145,30),h.text("User",160,E+10),h.text(":",168,E+10),h.text(s,170,E+10),h.text("Cetak",160,E+15),h.text(":",168,E+15),h.text(m,170,E+15),h.text("Valid",160,E+20),h.text(":",168,E+20),h.text(u,170,E+20);var f=h.output("datauristring"),v="<embed width='100%' height='100%' src='"+f+"'/>",b=window.open();b.document.open(),b.document.write(v),b.document.close()}}}]);
//# sourceMappingURL=97.d374d580.chunk.js.map