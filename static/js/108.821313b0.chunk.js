(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[108,174],{1150:function(e,t,a){"use strict";a.r(t);var n=a(77),r=a(71),l=a(72),i=a(74),c=a(73),o=a(0),s=a.n(o),m=a(179),u=a(177),d=a(110),p=a(45),h=a.n(p),f=a(27),g=a(468),E=a.n(g),b=a(471),N=a.n(b),v=a(470),k=a.n(v),S=a(496),C=a.n(S),x=a(173),B=a.n(x),O=a(4),y=a(466),F=a(464),T=b.Search.SearchBar,w=b.CSVExport.ExportCSVButton,A=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(r.a)(this,a),(l=t.call(this,e)).inputChange=function(e){return function(t){l.setState(Object(n.a)({},e,t.target.value))}},l.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},l.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return l.getDetails(t.noFaktur)}},s.a.createElement("i",{className:"fa fa-print mr-1"}),"Print"))}}],data:[{tanggal:"2020-11-12"}],listPenerimaan:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(d.d)()),h.a.get("http://147.139.182.75:3759/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(m.b)())}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),h.a.get("http://157.245.145.87:9013/spp/dc/tlkbyr/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier,statusValid:"VALID"}}).then((function(t){return e.setState({listPenerimaan:t.data})})).catch((function(){return Object(y.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(O.b,{to:"/cetakUlangBukti"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement(F.default,{title:"Cetak Ulang Butki Tolakan Supplier"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Awal"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:"fas fa-exchange-alt"}))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),s.a.createElement("div",{className:"col-lg-4 col-md-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Supplier"),s.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},s.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return s.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),s.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Transaksi"),s.a.createElement("input",{type:"text",id:"noTransaksi",name:"noTransaksi",className:"form-control",onChange:this.inputChange("noTransaksi")})),s.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Nomor Bon"),s.a.createElement("input",{type:"text",id:"noBon",name:"noBon",className:"form-control",onChange:this.inputChange("noBon")})),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-left"})),s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},s.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),s.a.createElement("div",{className:"col-lg-12"},this.state.listPenerimaan?s.a.createElement(N.a,{bootstrap4:!0,keyField:this.state.listPenerimaan,data:this.state.listPenerimaan,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},s.a.createElement("div",{className:"text-right"},s.a.createElement(T,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),s.a.createElement(E.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),s.a.createElement(w,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:C.a,style:{width:"30%"},alt:"NOT RESPOND"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(B.a,{width:"100%",height:180}))))))))))}}]),a}(o.Component);t.default=Object(f.b)()(A)},464:function(e,t,a){"use strict";a.r(t);var n=a(71),r=a(72),l=a(74),i=a(73),c=a(0),o=a.n(c),s=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(c.Component);t.default=s},466:function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return m}));var n=a(51),r=a.n(n),l=a(5),i=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},c=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(){return a("Gagal")}))}))},o=function(e){return new Promise((function(t,a){r.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1}).then((function(){return t("Berhasil")})).catch((function(e){return a(e)}))}))},s=function(e,t,a,n){return new Promise((function(i,o){r.a.fire({title:"Oopps..",text:e.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(e){e.isConfirmed&&Object(l.d)(a+t,n).then((function(){return c("Data Berhasil Dikembalikan")})).then((function(){return i("Berhasil")})).catch((function(e){return o("Gagal")}))}))}))},m=function(e,t,a){var n=(new Date).toLocaleDateString(),r=JSON.parse(localStorage.getItem("LogWebsite"))||[],l={tanggal:n,keterangan:e,data:t,error:a};r.push(l),localStorage.setItem("LogWebsite",JSON.stringify(r))}},496:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=108.821313b0.chunk.js.map