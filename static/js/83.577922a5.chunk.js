(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[83,174],{1149:function(t,e,a){"use strict";a.r(e);var n=a(77),r=a(71),l=a(72),o=a(74),i=a(73),c=a(0),s=a.n(c),u=a(179),m=a(177),d=a(110),p=a(45),h=a.n(p),g=a(27),f=a(468),v=a.n(f),b=a(471),E=a.n(b),N=a(470),k=a.n(N),x=a(496),S=a.n(x),C=a(173),B=a.n(C),F=a(4),O=a(466),y=a(497),D=a(464),w=b.Search.SearchBar,A=b.CSVExport.ExportCSVButton,T=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var l;return Object(r.a)(this,a),(l=e.call(this,t)).inputChange=function(t){return function(e){l.setState(Object(n.a)({},t,e.target.value))}},l.pilihSupplier=function(t){return function(t){var e=(t.target.value?t.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:e[0],namaSupplier:e[1]})}},l.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"namaAktor",text:"Supplier"},{dataField:"noBon",text:"No Nota"},{dataField:"noFaktur",text:"No Retur"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return l.getDetails(e.noFaktur)}},s.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada",hasilDataGet:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.props.dispatch(Object(d.d)()),h.a.get("http://147.139.182.75:3759/api/v1/suppliers").then((function(e){return t.setState({listSupplier:e.data})})).catch((function(t){return alert(t)})),this.props.dispatch(Object(m.b)()),this.props.dispatch(Object(u.b)())}},{key:"getDetails",value:function(t){var e=this;h.a.get("http://157.245.145.87:9013/spp/dc/rtr/detail?noFaktur="+t).then((function(t){return e.setLocal(t.data)})).catch((function(){return Object(O.c)("Sepertinya ada kesalahan, Mohon Periksa Koneksi anda")}))}},{key:"setLocal",value:function(t){localStorage.setItem("ReturnSupplierTable",JSON.stringify(t.barangDetails)),this.print(t.tanggal,t.noBon,t.noFaktur,t.kodeSupplier)}},{key:"print",value:function(t,e,a,n){var r=[],l=JSON.parse(localStorage.getItem("ReturnSupplierTable"));l.forEach((function(t,e){var a=[e++,t.kodeJenis,t.kadarCetak,t.p,t.k,t.pkg,t.bruto,t.kadarTransaksi,t.netto,t.rp];r.push(a)}));var o=l.map((function(t){return t.bruto})).reduce((function(t,e){return t+e})),i=l.map((function(t){return t.netto})).reduce((function(t,e){return t+e})),c=l.map((function(t){return t.rp})).reduce((function(t,e){return t+e})),s=["","","","","","",parseFloat(o).toFixed(3),"",parseFloat(i).toFixed(3),parseFloat(c).toLocaleString("id-ID")];r.push(s),console.log(JSON.stringify(r));Object(y.a)("no Return",a,"Tanggal",t,"No Bon",e,"Supplier",n,"ADMIN",t,"",["No","Kode Barang","Kadar Cetak (%)","P","K","Bungkus(Gr)","Berat(Gr)","Harga(Gr)","Murni(Gr)","Ongkos(Rp)"],"Return Barang Supplier",r)}},{key:"caridata",value:function(){var t=this;console.log("PENCARIAN...."),h.a.get("http://157.245.145.87:9013/spp/dc/rtr/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier,statusValid:"VALID"}}).then((function(e){return t.setState({hasilDataGet:e.data})})).catch((function(){return Object(O.c)("Data Kosong")}))}},{key:"render",value:function(){var t=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(F.b,{to:"/cetakUlangBukti"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement(D.default,{title:"Cetak Ulang Butki Return Supplier"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Awal"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:"fas fa-exchange-alt"}))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),s.a.createElement("div",{className:"col-lg-4 col-md-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Supplier"),s.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},s.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(t){return s.a.createElement("option",{value:t.kodeSupplier+"|"+t.namaSupplier},t.namaSupplier)})))),s.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Return"),s.a.createElement("input",{type:"text",id:"noReturn",name:"noReturn",className:"form-control",onChange:this.inputChange("noReturn")})),s.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Bon"),s.a.createElement("input",{type:"text",id:"noBon",name:"noBon",className:"form-control",onChange:this.inputChange("noBon")})),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-left"})),s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.caridata()}},s.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),s.a.createElement("div",{className:"col-lg-12"},this.state.hasilDataGet?s.a.createElement(E.a,{bootstrap4:!0,keyField:this.state.hasilDataGet,data:this.state.hasilDataGet,columns:this.state.columns,search:!0},(function(t){return s.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},s.a.createElement("div",{className:"text-right"},s.a.createElement(w,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),s.a.createElement(v.a,Object.assign({},t.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),s.a.createElement(A,Object.assign({},t.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:S.a,style:{width:"30%"},alt:"NOT RESPOND"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(B.a,{width:"100%",height:180}))))))))))}}]),a}(c.Component);e.default=Object(g.b)()(T)},464:function(t,e,a){"use strict";a.r(e);var n=a(71),r=a(72),l=a(74),o=a(73),i=a(0),c=a.n(i),s=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(i.Component);e.default=s},466:function(t,e,a){"use strict";a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return u}));var n=a(51),r=a.n(n),l=a(5),o=function(t){return new Promise((function(e,a){r.a.fire({position:"top-right",icon:"warning",text:t,timer:2500,showConfirmButton:!1}).then((function(){return e("Berhasil")})).catch((function(){return a("Gagal")}))}))},i=function(t){return new Promise((function(e,a){r.a.fire({position:"top-right",icon:"success",text:t,timer:2500,showConfirmButton:!1}).then((function(){return e("Berhasil")})).catch((function(){return a("Gagal")}))}))},c=function(t){return new Promise((function(e,a){r.a.fire({position:"top-right",icon:"error",text:t,timer:2500,showConfirmButton:!1}).then((function(){return e("Berhasil")})).catch((function(t){return a(t)}))}))},s=function(t,e,a,n){return new Promise((function(o,c){r.a.fire({title:"Oopps..",text:t.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(t){t.isConfirmed&&Object(l.d)(a+e,n).then((function(){return i("Data Berhasil Dikembalikan")})).then((function(){return o("Berhasil")})).catch((function(t){return c("Gagal")}))}))}))},u=function(t,e,a){var n=(new Date).toLocaleDateString(),r=JSON.parse(localStorage.getItem("LogWebsite"))||[],l={tanggal:n,keterangan:t,data:e,error:a};r.push(l),localStorage.setItem("LogWebsite",JSON.stringify(r))}},496:function(t,e,a){t.exports=a.p+"static/media/500.c22f1e39.svg"},497:function(t,e,a){"use strict";var n=a(501);a(502);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"",s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",m=arguments.length>10&&void 0!==arguments[10]?arguments[10]:"",d=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],p=arguments.length>12&&void 0!==arguments[12]?arguments[12]:"",h=arguments.length>13?arguments[13]:void 0,g=new n.default;g.autoTable(d,h,{startY:40});var f=g.lastAutoTable.finalY+10;g.text(p,14,15),g.setFontSize(10),g.text(t,14,25),g.text(":",37,25),g.text(e,40,25),g.text(a,120,25),g.text(":",141,25),g.text(r,145,25),g.text(l,14,30),g.text(":",37,30),g.text(o,40,30),g.text(i,120,30),g.text(":",141,30),g.text(c,145,30),g.text("User",160,f+10),g.text(":",168,f+10),g.text(s,170,f+10),g.text("Cetak",160,f+15),g.text(":",168,f+15),g.text(u,170,f+15),g.text("Valid",160,f+20),g.text(":",168,f+20),g.text(m,170,f+20);var v=g.output("datauristring"),b="<embed width='100%' height='100%' src='"+v+"'/>",E=window.open();E.document.open(),E.document.write(b),E.document.close()}}}]);
//# sourceMappingURL=83.577922a5.chunk.js.map