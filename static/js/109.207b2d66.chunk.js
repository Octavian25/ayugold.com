(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[109,174],{1160:function(t,e,a){"use strict";a.r(e);var n=a(77),r=a(71),l=a(72),c=a(74),i=a(73),o=a(0),s=a.n(o),u=a(179),m=a(177),d=a(110),h=a(45),g=a.n(h),f=a(27),p=a(468),b=a.n(p),E=a(471),v=a.n(E),N=a(470),k=a.n(N),C=a(496),S=a.n(C),O=a(173),x=a.n(O),y=a(4),B=a(466),D=a(464),F=E.Search.SearchBar,T=E.CSVExport.ExportCSVButton,j=function(t){Object(c.a)(a,t);var e=Object(i.a)(a);function a(t){var l;return Object(r.a)(this,a),(l=e.call(this,t)).inputChange=function(t){return function(e){l.setState(Object(n.a)({},t,e.target.value))}},l.pilihSupplier=function(t){return function(t){var e=(t.target.value?t.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:e[0],namaSupplier:e[1]})}},l.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.props.dispatch(Object(d.d)()),g.a.get("http://147.139.182.75:3759/api/v1/suppliers").then((function(e){return t.setState({listSupplier:e.data})})).catch((function(t){return alert(t)})),this.props.dispatch(Object(m.b)()),this.props.dispatch(Object(u.b)())}},{key:"caridata",value:function(){var t=this;console.log("PENCARIAN...."),g.a.get("http://157.245.145.87:9013/item/dc/totalantimbang/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier}}).then((function(e){return t.setState({hasilDataGet:e.data})})).catch((function(){return Object(B.c)("Data Kosong")}))}},{key:"render",value:function(){var t=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(y.b,{to:"/cetakUlangBukti"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement(D.default,{title:"Cetak Ulang Bukti Tolakan Timbangan"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Awal"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:"fas fa-exchange-alt"}))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),s.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),s.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Lokasi"),s.a.createElement("select",{type:"text",id:"lokasi",name:"lokasi",className:"form-control",onChange:this.inputChange("lokasi")},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-left"})),s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.caridata()}},s.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),s.a.createElement("div",{className:"col-lg-12"},this.state.hasilDataGet?s.a.createElement(v.a,{bootstrap4:!0,keyField:this.state.hasilDataGet,data:this.state.hasilDataGet,columns:this.state.columns,search:!0},(function(t){return s.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},s.a.createElement("div",{className:"text-right"},s.a.createElement(F,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),s.a.createElement(b.a,Object.assign({},t.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),s.a.createElement(T,Object.assign({},t.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):s.a.createElement("div",null,this.props.error?s.a.createElement("div",{className:"text-center"},s.a.createElement("img",{src:S.a,style:{width:"30%"},alt:"NOT RESPOND"}),s.a.createElement("br",null),s.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):s.a.createElement(x.a,{width:"100%",height:180}))))))))))}}]),a}(o.Component);e.default=Object(f.b)()(j)},464:function(t,e,a){"use strict";a.r(e);var n=a(71),r=a(72),l=a(74),c=a(73),i=a(0),o=a.n(i),s=function(t){Object(l.a)(a,t);var e=Object(c.a)(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(i.Component);e.default=s},466:function(t,e,a){"use strict";a.d(e,"e",(function(){return c})),a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return u}));var n=a(51),r=a.n(n),l=a(5),c=function(t){return new Promise((function(e,a){r.a.fire({position:"top-right",icon:"warning",text:t,timer:2500,showConfirmButton:!1}).then((function(){return e("Berhasil")})).catch((function(){return a("Gagal")}))}))},i=function(t){return new Promise((function(e,a){r.a.fire({position:"top-right",icon:"success",text:t,timer:2500,showConfirmButton:!1}).then((function(){return e("Berhasil")})).catch((function(){return a("Gagal")}))}))},o=function(t){return new Promise((function(e,a){r.a.fire({position:"top-right",icon:"error",text:t,timer:2500,showConfirmButton:!1}).then((function(){return e("Berhasil")})).catch((function(t){return a(t)}))}))},s=function(t,e,a,n){return new Promise((function(c,o){r.a.fire({title:"Oopps..",text:t.response.data,icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Re-Activate",cancelButtonText:"Cancel"}).then((function(t){t.isConfirmed&&Object(l.d)(a+e,n).then((function(){return i("Data Berhasil Dikembalikan")})).then((function(){return c("Berhasil")})).catch((function(t){return o("Gagal")}))}))}))},u=function(t,e,a){var n=(new Date).toLocaleDateString(),r=JSON.parse(localStorage.getItem("LogWebsite"))||[],l={tanggal:n,keterangan:t,data:e,error:a};r.push(l),localStorage.setItem("LogWebsite",JSON.stringify(r))}},496:function(t,e,a){t.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=109.207b2d66.chunk.js.map