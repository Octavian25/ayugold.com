(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[149],{1165:function(e,a,t){"use strict";t.r(a);var r=t(35),l=t(36),n=t(38),o=t(37),s=t(0),i=t.n(s),c=t(478),m=t.n(c),d=t(480),u=t.n(d),h=t(479),g=t.n(h),E=t(67),k=t.n(E),p=t(56),f=t(184),v=d.Search.SearchBar,N=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={columns:[{dataField:"kode",text:"Kode",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"harga",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"kadar",text:"Kadar",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"gross",text:"Gross (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"pkg",text:"Pkg (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"berat",text:"Berat (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"harga",text:"Harga",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"netto",text:"Netto (Gr)",sort:!0,headerStyle:function(){return{width:"10%"}}},{dataField:"ongkos",text:"Ongkos (Rp)",sort:!0,headerStyle:function(){return{width:"25%"}}}],data:[{tanggal:"2020-11-10"}],listLokasi:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://192.168.1.27:7002/api/v1/storages2?tipeData=LOKASI").then((function(a){return e.setState({listLokasi:a.data})})).catch((function(e){return Object(p.c)("Gagal Mengambil Data")}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"card"},i.a.createElement(f.default,{title:"Selisih Timbang Rosok"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Tanggal"),i.a.createElement("input",{type:"date",name:"tanggal",label:"tanggal",className:"form-control"}))),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Lokasi"),i.a.createElement("select",{name:"tanggal",label:"tanggal",className:"form-control"},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listLokasi.map((function(e){return i.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)}))))),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Kriteria"),i.a.createElement("div",{className:"form-control-transparant"},i.a.createElement("label",{className:"mr-3"},i.a.createElement("input",{id:"kodeJenis",name:"kriteria",type:"radio",value:"Kode Jenis",className:"mr-2"}),"Kode Jenis"),i.a.createElement("label",null,i.a.createElement("input",{id:"kadar",name:"kriteria",type:"radio",value:"Kadar",className:"mr-2"}),"Kadar")))),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Detail Data"),i.a.createElement("select",{name:"detailData",id:"detailData",className:"form-control"},i.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA"),this.state.listLokasi.map((function(e){return i.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)}))))),i.a.createElement("div",{className:"col-lg-12 mt-3"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary"},"Lihat Data"))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(u.a,{keyField:"kodeKelompok",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement("div",{className:"text-right mt-5 mb-3"},i.a.createElement(v,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),i.a.createElement(m.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:g()()})))})))))))}}]),t}(s.Component);a.default=N}}]);
//# sourceMappingURL=149.1726d5a4.chunk.js.map