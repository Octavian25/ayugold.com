(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[107],{1032:function(e,t,a){"use strict";a.r(t);var r=a(39),n=a(40),l=a(42),o=a(41),i=a(0),s=a.n(i),c=a(303),m=a.n(c),d=a(305),u=a.n(d),h=a(304),g=a.n(h),f=a(3),p=a.n(f),E=a(300),k=d.Search.SearchBar,v=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={columns:[{dataField:"kode",text:"Kode",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"harga",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadar",text:"Kadar",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"gross",text:"Gross (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"pkg",text:"Pkg (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"berat",text:"Berat (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"harga",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"netto",text:"Netto (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"ongkos",text:"Ongkos (Rp)",sort:!0,headerStyle:function(){return{width:"25%"}}}],data:[{tanggal:"2020-11-10"}],listLokasi:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("http://157.245.145.87:9011/master/storages2?tipeData=LOKASI").then((function(t){return e.setState({listLokasi:t.data})})).catch((function(e){return Object(E.b)("Gagal Mengambil Data")}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Tanggal"),s.a.createElement("input",{type:"date",name:"tanggal",label:"tanggal",className:"form-control"}))),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Lokasi"),s.a.createElement("select",{name:"tanggal",label:"tanggal",className:"form-control"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listLokasi.map((function(e){return s.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)}))))),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Kriteria"),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",{className:"mr-3"},s.a.createElement("input",{id:"kodeJenis",name:"kriteria",type:"radio",value:"Kode Jenis",className:"mr-2"}),"Kode Jenis"),s.a.createElement("label",null,s.a.createElement("input",{id:"kadar",name:"kriteria",type:"radio",value:"Kadar",className:"mr-2"}),"Kadar")))),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Detail Data"),s.a.createElement("select",{name:"detailData",id:"detailData",className:"form-control"},s.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA"),this.state.listLokasi.map((function(e){return s.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)}))))),s.a.createElement("div",{className:"col-lg-12 mt-3"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Lihat Data"))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(u.a,{keyField:"kodeKelompok",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"text-right mt-5 mb-3"},s.a.createElement(k,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),s.a.createElement(m.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:g()()})))})))))))}}]),a}(i.Component);t.default=v},300:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return i}));var r=a(43),n=a.n(r),l=function(e){n.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1})},o=function(e){n.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1})},i=function(e){n.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1})}}}]);
//# sourceMappingURL=107.d39aa896.chunk.js.map