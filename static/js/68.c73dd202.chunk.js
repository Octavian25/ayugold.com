(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[68],{1015:function(t,e,a){"use strict";a.r(e);var n=a(90),r=a(39),l=a(40),o=a(42),i=a(41),c=a(0),s=a.n(c),u=a(93),m=a(91),d=a(61),g=a(3),h=a.n(g),p=a(19),f=a(303),v=a.n(f),b=a(305),E=a.n(b),N=a(304),x=a.n(N),k=a(306),F=a.n(k),B=a(88),S=a.n(B),y=a(2),C=a(300),w=a(339),O=b.Search.SearchBar,A=b.CSVExport.ExportCSVButton,T=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var l;return Object(r.a)(this,a),(l=e.call(this,t)).inputChange=function(t){return function(e){l.setState(Object(n.a)({},t,e.target.value))}},l.pilihSupplier=function(t){return function(t){var e=(t.target.value?t.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:e[0],namaSupplier:e[1]})}},l.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return l.getDetails(e.noFaktur)}},s.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.props.dispatch(Object(d.d)()),h.a.get("http://157.245.145.87:9011/master/suppliers").then((function(e){return t.setState({listSupplier:e.data})})).catch((function(t){return alert(t)})),this.props.dispatch(Object(m.b)()),this.props.dispatch(Object(u.b)())}},{key:"getDetails",value:function(t){var e=this;h.a.get("http://157.245.145.87:9013/item/dc/mutasibarang/detail?noFaktur="+t).then((function(t){return e.setLocal(t.data)})).catch((function(){return Object(C.b)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(t){localStorage.setItem("mutasiBarang",JSON.stringify(t.barangDetailList)),this.print(t.tanggal,t.noBon)}},{key:"print",value:function(t,e){var a=[],n=JSON.parse(localStorage.getItem("mutasiBarang"));n.forEach((function(t,e){var n=[e++,t.kodeJenis01,t.bruto01,t.kadarTransaksi01,t.netto01,t.kodeJenis02,t.bruto02,t.kadarTransaksi02,t.netto02];a.push(n)}));var r=n.map((function(t){return t.bruto01})).reduce((function(t,e){return t+e})),l=n.map((function(t){return t.netto01})).reduce((function(t,e){return t+e})),o=n.map((function(t){return t.netto02})).reduce((function(t,e){return t+e})),i=n.map((function(t){return t.bruto02})).reduce((function(t,e){return t+e})),c=["","",parseFloat(r).toFixed(3),"",parseFloat(l).toFixed(3),"",parseFloat(i).toFixed(3),"",parseFloat(o).toFixed(3)];a.push(c),console.log(a);Object(w.a)("Tanggal",t,"","","Nomor Bon",e,"","","ADMIN",t,"",["No","Kode Awal","Bruto","Harga (%)","Netto Awal","Kode Tujuan","Harga (%)","Netto Akhir"],"MUTASI BARANG",a)}},{key:"caridata",value:function(){var t=this;console.log("PENCARIAN...."),h.a.get("http://157.245.145.87:9013/item/dc/mutasibarang/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon}}).then((function(e){return t.setState({listPenerimaan:e.data})})).catch((function(){return Object(C.b)("Data Kosong")}))}},{key:"render",value:function(){var t=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(y.b,{to:"/ayugold.com/cetakUlangBukti"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h2",null,"Cetak Ulang Butki Mutasi Barang"),s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Awal"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:"fas fa-exchange-alt"}))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),s.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Bon"),s.a.createElement("input",{type:"text",id:"noBon",name:"noBon",className:"form-control",onChange:this.inputChange("noBon")})),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-left"})),s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.caridata()}},s.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),s.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?s.a.createElement(E.a,{bootstrap4:!0,keyField:this.state.listPenerimaan,data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(t){return s.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},s.a.createElement("div",{className:"text-right"},s.a.createElement(O,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),s.a.createElement(v.a,Object.assign({},t.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:x()()})),s.a.createElement(A,Object.assign({},t.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:F.a,style:{width:"30%"},alt:"NOT RESPOND"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(S.a,{width:"100%",height:180}))))))))))}}]),a}(c.Component);e.default=Object(p.b)()(T)},300:function(t,e,a){"use strict";a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return i}));var n=a(43),r=a.n(n),l=function(t){r.a.fire({position:"top-right",icon:"warning",text:t,timer:2500,showConfirmButton:!1})},o=function(t){r.a.fire({position:"top-right",icon:"success",text:t,timer:2500,showConfirmButton:!1})},i=function(t){r.a.fire({position:"top-right",icon:"error",text:t,timer:2500,showConfirmButton:!1})}},306:function(t,e,a){t.exports=a.p+"static/media/500.c22f1e39.svg"},339:function(t,e,a){"use strict";var n=a(343);a(344);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],g=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,p=new n.default;p.autoTable(d,h,{startY:40});var f=p.lastAutoTable.finalY+10;p.text(g,14,15),p.setFontSize(10),p.text(t,14,25),p.text(":",37,25),p.text(e,40,25),p.text(a,120,25),p.text(":",141,25),p.text(r,145,25),p.text(l,14,30),p.text(":",37,30),p.text(o,40,30),p.text(i,120,30),p.text(":",141,30),p.text(c,145,30),p.text("User",160,f+10),p.text(":",168,f+10),p.text(s,170,f+10),p.text("Cetak",160,f+15),p.text(":",168,f+15),p.text(u,170,f+15),p.text("Valid",160,f+20),p.text(":",168,f+20),p.text(m,170,f+20);var v=p.output("datauristring"),b="<embed width='100%' height='100%' src='"+v+"'/>",E=window.open();E.document.open(),E.document.write(b),E.document.close()}}}]);
//# sourceMappingURL=68.c73dd202.chunk.js.map