(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[86],{1055:function(t,e,a){"use strict";a.r(e);var n=a(90),r=a(39),o=a(40),i=a(42),s=a(41),l=a(3),c=a.n(l),u=a(0),m=a.n(u),p=a(303),d=a.n(p),g=a(304),h=a.n(g),f=a(305),k=a.n(f),b=a(88),N=a.n(b),v=a(351),E=a(83),S=a(300),B=a(19),F=a(408),O=a(371),x=a.n(O),A=a(91),C=f.Search.SearchBar,j=function(t){Object(i.a)(a,t);var e=Object(s.a)(a);function a(t){var o;return Object(r.a)(this,a),(o=e.call(this,t)).disabledButton=function(t){t.target.disabled=!0},o.onChange=function(t){return function(e){o.setState(Object(n.a)({},t,e.target.value))}},o.nextStep=function(){var t=o.state.step;0===t&&o.setState({step:t+1,step2:"row",step1:"row d-none"}),o.props.dispatch(Object(E.d)())},o.prevStep=function(){var t=o.state.step;1===t&&o.setState({step:t-1,step2:"row d-none",step1:"row"})},o.state={step:0,step1:"row",step2:"row d-none",step3:"row d-none",listCustomer:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Aktor"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(t,e){return m.a.createElement("button",{className:"btn btn-warning ",onClick:function(t){return Object(F.c)(e.noFaktur,e.tanggal,e.bruto,e.netto,e.rp,e.namaAktor,o.disabledButton(t))}}," ",m.a.createElement("i",{className:"fa fa-check-circle mr-3"}),"Pilih")}}],columns2:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Aktor"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"}]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;c.a.get("http://157.245.145.87:9011/master/customers").then((function(e){return t.setState({listCustomer:e.data})})).catch((function(){return Object(S.b)("Mohon periksa koneksi anda, gagal komunikasi dengan server")})),this.props.dispatch(Object(E.c)("2020-12-01","2022-12-30")),this.props.dispatch(Object(A.b)())}},{key:"onSubmit",value:function(t,e){this.setState(Object(n.a)({},e,t))}},{key:"setGabung",value:function(t){var e=this,a=JSON.parse(localStorage.getItem("FakturRekapBon"))||[],n=a.sort((function(t,e){return new Date(t.tanggal)-new Date(e.tanggal)})),r={fakturList:a,footerDocument:{inputBy:this.props.username,statusValid:"VALID"},noFaktur:this.props.noFaktur,tanggal:(new Date).toISOString().slice(0,10),noBon:this.props.noFaktur,tipeTransaksi:"REKAP-BON",keterangan:n[0].noFakturPilih};c.a.post("http://157.245.145.87:9013/cst/dc/pjl",r).then((function(){return Object(S.a)("Penggabungan berhasil",e.props.dispatch(Object(A.b)()))})).then((function(){return localStorage.removeItem("FakturRekapBon")})).then((function(){return e.props.dispatch(Object(A.b)())})).then((function(){return e.prevStep()})).catch((function(){return Object(S.b)("Penggabungan gagal, Mohon periksa koneksi anda")}))}},{key:"render",value:function(){var t=this;return m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"col-lg-12 col-md-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"row m-2"},m.a.createElement("div",{className:"col-lg-12 mb-3"},m.a.createElement("h2",null,"Rekap Bon Customer - Penjualan")),m.a.createElement("div",{className:"col-lg-12 col-md-12 mb-5"},m.a.createElement(x.a,{steps:[{title:"Pilih Data"},{title:"Rekap Data"}],activeStep:this.state.step})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:this.state.step1},m.a.createElement("div",{className:"col-lg-4 col-md-4"},m.a.createElement("label",{htmlFor:""},"Tanggal"),m.a.createElement("input",{type:"date",name:"tanggal",className:"form-control",onChange:this.onChange("tanggal")})),m.a.createElement("div",{className:"col-lg-4 col-md-4"},m.a.createElement("label",{htmlFor:""},"Nama Toko"),m.a.createElement(v.a,{options:this.state.listCustomer.map((function(t){return{value:t.kodeCustomer+"|"+t.namaCustomer+"|"+t.namaToko,name:t.namaToko}})),search:!0,placeholder:"Silahkan Pilih",onChange:function(e){return t.onSubmit(e,"lokasi")}})),m.a.createElement("div",{className:"col-md-4 col-lg-4"},m.a.createElement("label",{htmlFor:""},"Customer"),m.a.createElement("input",{type:"text",name:"customer",className:"form-control",onChange:this.onChange("customer")})),m.a.createElement("div",{className:"col-lg-12 mt-5"},this.props.listDataRekapBon?m.a.createElement(k.a,{keyField:"id",data:this.props.listDataRekapBon,columns:this.state.columns,search:!0},(function(t){return m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"text-right"},m.a.createElement(C,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),m.a.createElement(d.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:h()()})))})):m.a.createElement(N.a,{width:"100%",height:100})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.nextStep()}},"Next",m.a.createElement("i",{className:"fa fa-chevron-right ml-3"}))))),m.a.createElement("div",{className:this.state.step2},m.a.createElement("div",{className:"col-lg-12 mt-5"},this.props.listDataRekapBon?m.a.createElement(k.a,{keyField:"id",data:JSON.parse(localStorage.getItem("FakturRekapBon"))||[],columns:this.state.columns,search:!0},(function(t){return m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"text-right"},m.a.createElement(C,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),m.a.createElement(d.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:h()()})))})):m.a.createElement(N.a,{width:"100%",height:100})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.setGabung()}},"Gabung Bon"))))))))))}}]),a}(u.Component);e.default=Object(B.b)((function(t){return{listDataRekapBon:t.provinsi.listDataRekapBon,username:t.provinsi.username,noFaktur:t.provinsi.noFaktur}}),null)(j)},300:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return s}));var n=a(43),r=a.n(n),o=function(t){r.a.fire({position:"top-right",icon:"warning",text:t,timer:2500,showConfirmButton:!1})},i=function(t){r.a.fire({position:"top-right",icon:"success",text:t,timer:2500,showConfirmButton:!1})},s=function(t){r.a.fire({position:"top-right",icon:"error",text:t,timer:2500,showConfirmButton:!1})}},408:function(t,e,a){"use strict";a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"e",(function(){return u}));var n=a(43),r=a.n(n),o=a(300),i=function(t,e){return(JSON.parse(localStorage.getItem(t))||[]).findIndex((function(t,a){return t.noFaktur===e}))},s=function(t,e,a,n,s,l,c,u,m,p,d){var g=JSON.parse(localStorage.getItem("FakturTerpilih"))||[];if(-1===i("FakturTerpilih",t)){var h={tanggal:e,noBon:a,supplier:n,bruto:s,netto:l,bonRp:c,titipRp:u,titipGr:m,keterangan:p,noFaktur:t,footerDocument:{editBy:"Nagatech",statusValid:"VALID"}};g.push(h),localStorage.setItem("FakturTerpilih",JSON.stringify(g)),console.log("BERHASIL TAMBAHKAN : "+t),Object(o.a)("Berhasil Ditambahkan")}else r.a.fire({position:"top-right",icon:"warning",text:"Faktur Sudah Terpilih",showConfirmButton:!1,timer:1500})},l=function(t,e,a,n,s,l,c,u,m,p,d){var g=JSON.parse(localStorage.getItem("closeTransaksiPenjualan"))||[],h=i("closeTransaksiPenjualan",t);if(console.log(h,t),-1===h){var f={tanggal:e,noBon:a,supplier:n,bruto:s,netto:l,bonRp:c,titipRp:u,titipGr:m,keterangan:p,noFaktur:t,footerDocument:{editBy:"Nagatech",statusValid:"CANCEL"}};g.push(f),localStorage.setItem("closeTransaksiPenjualan",JSON.stringify(g)),console.log("BERHASIL TAMBAHKAN : "+t),Object(o.a)("Berhasil Ditambahkan")}else r.a.fire({position:"top-right",icon:"warning",text:"Faktur Sudah Terpilih",showConfirmButton:!1,timer:1500})},c=function(t,e,a,n,s,l){var c,u,m=JSON.parse(localStorage.getItem("FakturRekapBon"))||[];if(i("FakturRekapBon",t)<1)if((c="FakturRekapBon",u=l,(JSON.parse(localStorage.getItem(c))||[]).findIndex((function(t,e){return t.namaAktor===u?t.namaAktor===u:"TIDAK ADA"})))<1){var p={tanggal:e,noFakturPilih:t,namaAktor:l,bruto:a,netto:n,rp:s};m.push(p),localStorage.setItem("FakturRekapBon",JSON.stringify(m)),console.log("BERHASIL TAMBAHKAN : "+t),Object(o.a)("Berhasil Ditambahkan")}else r.a.fire({position:"top-right",icon:"warning",text:"Nama Customer Berbeda",showConfirmButton:!1,timer:1500});else r.a.fire({position:"top-right",icon:"warning",text:"Faktur Sudah Terpilih",showConfirmButton:!1,timer:1500})},u=function(t){var e=JSON.parse(localStorage.getItem("FakturTerpilih"))||[],a=i("FakturTerpilih",t);e.splice(a,1),localStorage.setItem("FakturTerpilih",JSON.stringify(e)),Object(o.a)("berhasil dihapus"),console.log("HASIL TERBARU",JSON.stringify(e))}}}]);
//# sourceMappingURL=86.858a5fde.chunk.js.map