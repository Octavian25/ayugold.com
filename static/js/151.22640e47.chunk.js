(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[151],{1235:function(e,t,a){"use strict";a.r(t);var n=a(35),r=a(36),l=a(38),o=a(37),i=a(0),s=a.n(i),c=a(478),m=a.n(c),d=a(504),u=a.n(d),h=a(503),p=a.n(h),b=a(18),k=a(69),E=a(47),g=a(467),f=a(468),v=a(68),N=a.n(v),S=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,l=e.readOnly,o=e.meta,i=o.touched,c=o.error,m=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},a),s.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:l})),i&&(c&&s.a.createElement("p",{className:"invalid-feedback"},c)||m&&s.a.createElement("p",null,m)))},y=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).onChange=function(e){return function(t){r.setState(Object(E.a)({},e,t.target.value))}},r.state={listLokasi:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("http://192.168.1.27:7001/api/v1/storages2?tipeData=LOKASI").then((function(t){return e.setState({listLokasi:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement(g.a,{name:"tanggal",label:"Tanggal",component:S,type:"date"}))),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Lokasi"),s.a.createElement(g.a,{name:"lokasi",component:"select",className:"form-control"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listLokasi.map((function(e){return s.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)}))))),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Kriteria"),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",{className:"mr-3"},s.a.createElement(g.a,{id:"kodeJenis",name:"kriteria",type:"radio",value:"Kode Jenis",className:"mr-2",component:"input"}),"Kode Jenis"),s.a.createElement("label",null,s.a.createElement(g.a,{id:"kadar",name:"kriteria",type:"radio",value:"Kadar",className:"mr-2",component:"input"}),"Kadar")))),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Detail Data"),s.a.createElement(g.a,{name:"detailData",id:"detailData",className:"form-control",component:"select",defaultValue:"SEMUA"},s.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA"),s.a.createElement("option",{value:"KOSONG",key:"KOSONG"},"KOSONG")))),s.a.createElement("div",{className:"col-lg-12 mt-3"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Lihat Data")))))}}]),a}(i.Component);y=Object(f.a)({form:"FormSelisih",enableReinitialize:!0})(y);var F=Object(b.b)()(y),O=a(184),D=d.Search.SearchBar,j=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={columns:[{dataField:"kodeJenis",text:"Kode",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarCetak",text:"Kadar",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadarTransaksi",text:"%",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"nettoData",text:"Data Netto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"brutoData",text:"Data Bruto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"brutoSelisih",text:"Selisih Bruto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"nettoSelisih",text:"Selisih Netto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"brutoTimbang",text:"Timbang Bruto(Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"nettoTimbang",text:"Timbang Netto(Rp)",sort:!0,headerStyle:function(){return{width:"25%"}}}],data:[{noFaktur:"-",kodeKategori:"-",kadarCetak:0,kadarTransaksi:0,kodeJenis:"-",noUrut:"-",brutoSelisih:0,nettoTimbang:0,nettoData:0,brutoTimbang:0,nettoSelisih:0,brutoData:0}],listLokasi:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(k.b)())}},{key:"handleSubmit",value:function(e){console.log(e);var t={noFaktur:this.props.noFaktur,noBon:this.props.noFaktur,tanggal:e.tanggal,kodeLokasi:e.detailData,barangdetail:this.state.data,footerItem:{totalSelisihNetto:0,totalTimbangNetto:0,totalTimbangBruto:0,totalSelisihBruto:0,totalDataBruto:0,totalDataNetto:0}};console.log(t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"card"},s.a.createElement(O.default,{title:"Selisih Timbangan"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(F,{noFaktur:this.props.noFaktur,onSubmit:function(t){return e.handleSubmit(t)}})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(u.a,{keyField:"kodeKelompok",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"text-right mt-5 mb-3"},s.a.createElement(D,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),s.a.createElement(m.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:p()()})))}))))))}}]),a}(i.Component);t.default=Object(b.b)((function(e){return{noFaktur:e.provinsi.noFaktur}}),null)(j)}}]);
//# sourceMappingURL=151.22640e47.chunk.js.map