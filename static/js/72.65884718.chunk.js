(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[72],{1027:function(t,e,a){"use strict";a.r(e);var n=a(90),r=a(39),i=a(40),l=a(42),s=a(41),o=a(0),c=a.n(o),u=a(93),m=a(91),d=a(61),h=a(3),g=a.n(h),p=a(19),f=a(303),k=a.n(f),v=a(305),E=a.n(v),b=a(304),M=a.n(b),A=a(306),S=a.n(A),x=a(88),N=a.n(x),K=a(2),I=a(300),j=a(339),F=v.Search.SearchBar,T=v.CSVExport.ExportCSVButton,y="http://157.245.145.87:9013/",R=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var i;return Object(r.a)(this,a),(i=e.call(this,t)).inputChange=function(t){return function(e){i.setState(Object(n.a)({},t,e.target.value))}},i.pilihSupplier=function(t){return function(t){var e=(t.target.value?t.target.value:"DEFALT | DEFAULT").split("|");i.setState({kodeSupplier:e[0],namaSupplier:e[1]})}},i.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return i.getDetails(e.noFaktur)}},c.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],hasilDataGet:[],jenisMasak:"KIRIM MASAK"},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.props.dispatch(Object(d.d)()),g.a.get("http://157.245.145.87:9011/master/suppliers").then((function(e){return t.setState({listSupplier:e.data})})).catch((function(t){return alert(t)})),this.props.dispatch(Object(m.b)()),this.props.dispatch(Object(u.b)())}},{key:"getDetails",value:function(t){var e=this;"KIRIM MASAK"===this.state.jenisMasak?g.a.get(y+"item/dc/kirimmasak/detail?noFaktur="+t).then((function(t){return e.setLocal(t.data)})).catch((function(){return Object(I.b)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")})):g.a.get(y+"item/dc/terimamasak/detail?noFaktur="+t).then((function(t){return e.setLocal(t.data)})).catch((function(){return Object(I.b)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(t){localStorage.setItem("PrintMasak",JSON.stringify(t.barangDetails)),this.print(t.tanggal,t.noBon)}},{key:"print",value:function(t,e){var a=this,n=[],r=JSON.parse(localStorage.getItem("PrintMasak"));r.forEach((function(t,e){var r=[e++,t.kodeJenis,"KIRIM MASAK"===a.state.jenisMasak?t.bruto:t.brutoTerima,t.kadarTransaksi,"KIRIM MASAK"===a.state.jenisMasak?t.netto:t.nettoTerima,"KIRIM MASAK"===a.state.jenisMasak?null:t.nettoSelisih];n.push(r)}));var i=r.map((function(t){return"KIRIM MASAK"===a.state.jenisMasak?t.bruto:t.brutoTerima})).reduce((function(t,e){return t+e})),l=r.map((function(t){return"KIRIM MASAK"===a.state.jenisMasak?t.netto:t.nettoTerima})).reduce((function(t,e){return t+e})),s=r.map((function(t){return t.nettoSelisih})).reduce((function(t,e){return t+e})),o=["","",parseFloat(i).toFixed(3),"",parseFloat(l).toFixed(3),"KIRIM MASAK"===this.state.jenisMasak?null:parseFloat(s).toFixed(3)];n.push(o),console.log(n);Object(j.a)("Tanggal",t,"","","No Faktur",e,"","","ADMIN",t,"",["No","Kode Jenis","Bruto(Gr)","Kadar","Netto(Gr)","Selisih(Gr)"],"TERIMA MASAK"===this.state.jenisMasak?"BUKTI TERIMA MASAK":"BUKTI KIRIM MASAK",n)}},{key:"caridata",value:function(){var t=this;console.log("PENCARIAN...."),"KIRIM MASAK"===this.state.jenisMasak?g.a.get(y+"item/dc/kirimmasak/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,kodeSupplier:this.state.kodeSupplier}}).then((function(e){return t.setState({hasilDataGet:e.data})})).catch((function(){return Object(I.b)("Data Kosong")})):g.a.get(y+"item/dc/terimamasak/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,kodeSupplier:this.state.kodeSupplier}}).then((function(e){return t.setState({hasilDataGet:e.data})})).catch((function(){return Object(I.b)("Data Kosong")}))}},{key:"render",value:function(){var t=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(K.b,{to:"/ayugold.com/cetakUlangBukti"},c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h2",null,"Cetak Ulang Bukti Masak"),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal Awal"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"text-center"},c.a.createElement("i",{className:"fas fa-exchange-alt"}))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),c.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Jenis Masak"),c.a.createElement("select",{id:"jenisMasak",name:"jenisMasak",className:"form-control",onChange:this.inputChange("jenisMasak")},c.a.createElement("option",{value:"KIRIM MASAK",key:"KIRIM MASAK"},"KIRIM MASAK"),c.a.createElement("option",{value:"TERIMA MASAK",key:"TERIMA MASAK"},"TERIMA MASAK"))),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-left"})),c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.caridata()}},c.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),c.a.createElement("div",{className:"col-lg-12"},this.state.hasilDataGet?c.a.createElement(E.a,{bootstrap4:!0,keyField:this.state.hasilDataGet,data:this.state.hasilDataGet,columns:this.state.columns,search:!0},(function(t){return c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},c.a.createElement("div",{className:"text-right"},c.a.createElement(F,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),c.a.createElement(k.a,Object.assign({},t.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:M()()})),c.a.createElement(T,Object.assign({},t.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):c.a.createElement("div",null,this.props.error?c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:S.a,style:{width:"30%"},alt:"NOT RESPOND"}),c.a.createElement("br",null),c.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):c.a.createElement(N.a,{width:"100%",height:180}))))))))))}}]),a}(o.Component);e.default=Object(p.b)()(R)},300:function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return s}));var n=a(43),r=a.n(n),i=function(t){r.a.fire({position:"top-right",icon:"warning",text:t,timer:2500,showConfirmButton:!1})},l=function(t){r.a.fire({position:"top-right",icon:"success",text:t,timer:2500,showConfirmButton:!1})},s=function(t){r.a.fire({position:"top-right",icon:"error",text:t,timer:2500,showConfirmButton:!1})}},306:function(t,e,a){t.exports=a.p+"static/media/500.c22f1e39.svg"},339:function(t,e,a){"use strict";var n=a(343);a(344);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],h=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",g=arguments.length>13?arguments[13]:void 0,p=new n.default;p.autoTable(d,g,{startY:40});var f=p.lastAutoTable.finalY+10;p.text(h,14,15),p.setFontSize(10),p.text(t,14,25),p.text(":",37,25),p.text(e,40,25),p.text(a,120,25),p.text(":",141,25),p.text(r,145,25),p.text(i,14,30),p.text(":",37,30),p.text(l,40,30),p.text(s,120,30),p.text(":",141,30),p.text(o,145,30),p.text("User",160,f+10),p.text(":",168,f+10),p.text(c,170,f+10),p.text("Cetak",160,f+15),p.text(":",168,f+15),p.text(u,170,f+15),p.text("Valid",160,f+20),p.text(":",168,f+20),p.text(m,170,f+20);var k=p.output("datauristring"),v="<embed width='100%' height='100%' src='"+k+"'/>",E=window.open();E.document.open(),E.document.write(v),E.document.close()}}}]);
//# sourceMappingURL=72.65884718.chunk.js.map