(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[136,174],{1160:function(e,t,a){"use strict";a.r(t);var l=a(77),n=a(71),r=a(72),c=a(74),s=a(73),i=a(0),o=a.n(i),m=a(180),d=a(178),u=a(110),h=a(46),p=a.n(h),g=a(28),E=a(468),b=a.n(E),f=a(471),v=a.n(f),N=a(470),k=a.n(N),S=a(496),y=a.n(S),O=a(173),C=a.n(O),F=a(4),j=a(174),x=a(465),T=f.Search.SearchBar,D=f.CSVExport.ExportCSVButton,A=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).inputChange=function(e){return function(t){r.setState(Object(l.a)({},e,t.target.value))}},r.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(u.d)()),p.a.get("http://147.139.182.75:3759/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(m.b)())}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),p.a.get("http://157.245.145.87:9013/item/dc/totalantimbang/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier}}).then((function(t){return e.setState({hasilDataGet:t.data})})).catch((function(){return Object(j.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("ol",{className:"breadcrumb mb-2"},o.a.createElement(F.b,{to:"/cetakUlangBukti"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},o.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),o.a.createElement("div",{className:"card"},o.a.createElement(x.default,{title:"Cetak Ulang Bukti Tolakan Timbangan"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Awal"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"fas fa-exchange-alt"}))),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),o.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Lokasi"),o.a.createElement("select",{type:"text",id:"lokasi",name:"lokasi",className:"form-control",onChange:this.inputChange("lokasi")},o.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),o.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-left"})),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},o.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),o.a.createElement("div",{className:"col-lg-12"},this.state.hasilDataGet?o.a.createElement(v.a,{bootstrap4:!0,keyField:this.state.hasilDataGet,data:this.state.hasilDataGet,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},o.a.createElement("div",{className:"text-right"},o.a.createElement(T,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),o.a.createElement(b.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),o.a.createElement(D,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):o.a.createElement("div",null,this.props.error?o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:y.a,style:{width:"30%"},alt:"NOT RESPOND"}),o.a.createElement("br",null),o.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):o.a.createElement(C.a,{width:"100%",height:180}))))))))))}}]),a}(i.Component);t.default=Object(g.b)()(A)},465:function(e,t,a){"use strict";a.r(t);var l=a(71),n=a(72),r=a(74),c=a(73),s=a(0),i=a.n(s),o=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),a}(s.Component);t.default=o},496:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=136.b7f0af60.chunk.js.map