(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[155],{1190:function(t,e,a){"use strict";a.r(e);var n=a(47),r=a(35),o=a(36),s=a(38),l=a(37),i=a(68),c=a.n(i),u=a(0),m=a.n(u),p=a(478),d=a.n(p),g=a(503),h=a.n(g),k=a(504),v=a.n(k),f=a(19),b=a.n(f),E=a(88),N=a(174),S=a(56),F=a(18),B=a(532),O=a.n(B),R=a(69),C=a(184),D=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7001/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,A=k.Search.SearchBar,P=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var o;return Object(r.a)(this,a),(o=e.call(this,t)).disabledButton=function(t){t.target.disabled=!0},o.onChange=function(t){return function(e){o.setState(Object(n.a)({},t,e.target.value))}},o.nextStep=function(){var t=o.state.step;0===t&&o.setState({step:t+1,step2:"row",step1:"row d-none"}),o.props.dispatch(Object(N.c)())},o.prevStep=function(){var t=o.state.step;1===t&&o.setState({step:t-1,step2:"row d-none",step1:"row"})},o.state={step:0,step1:"row",step2:"row d-none",step3:"row d-none",listCustomer:[],listDataRekapBon:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Aktor"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"}],columns2:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Aktor"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"}]},o}return Object(o.a)(a,[{key:"getListClose",value:function(){var t=this;c.a.get(D+"cst/dc/pjl/heads",{params:{statusValid:"VALID"}}).then((function(e){return t.setState({listDataRekapBon:e.data})}))}},{key:"componentDidMount",value:function(){var t=this;c.a.get("https://147.139.193.169:3759/api/v1/customers").then((function(e){return t.setState({listCustomer:e.data})})).catch((function(){return Object(S.c)("Mohon periksa koneksi anda, gagal komunikasi dengan server")})),this.getListClose(),this.props.dispatch(Object(R.b)())}},{key:"setGabung",value:function(t){var e=this,a=JSON.parse(localStorage.getItem("FakturRekapBon"))||[],n=a.sort((function(t,e){return new Date(t.tanggal)-new Date(e.tanggal)})),r={fakturList:a,footerDocument:{inputBy:this.props.username,statusValid:"VALID"},noFaktur:this.props.noFaktur,tanggal:(new Date).toISOString().slice(0,10),noBon:this.props.noFaktur,tipeTransaksi:"REKAP-BON",keterangan:n[0].noFakturPilih};console.log(JSON.stringify(r)),c.a.post(D+"cst/dc/byr",r).then((function(){return Object(S.b)("Penggabungan berhasil",e.props.dispatch(Object(R.b)()))})).then((function(){return localStorage.removeItem("FakturRekapBon")})).then((function(){return e.props.dispatch(Object(R.b)())})).then((function(){return e.prevStep()})).catch((function(){return Object(S.c)("Penggabungan gagal, Mohon periksa koneksi anda")}))}},{key:"setToko",value:function(t){this.setFilterCustomer(t),this.setState({namaToko:t})}},{key:"setFilterCustomer",value:function(t){var e=this;c.a.get(D+"cst/dc/pjl/heads",{params:{statusValid:"OPEN"}}).then((function(t){return e.setState({listDataRekapBon:t.data})})).then((function(){var a=e.state.listDataRekapBon.filter((function(e){return e.kodeAktor===t.toUpperCase()}));e.setState({listDataRekapBon:a})}))}},{key:"setFilterTanggal",value:function(t){var e=this;c.a.get(D+"cst/dc/pjl/heads",{params:{statusValid:"OPEN"}}).then((function(t){return e.setState({listDataRekapBon:t.data})})).then((function(){var a=e.state.listDataRekapBon.filter((function(e){return e.tanggal===t}));e.setState({listDataRekapBon:a})}))}},{key:"render",value:function(){var t=this,e={mode:"checkbox",clickToSelect:!0,onSelect:function(t,e,a,n){console.log(t.noFaktur);var r=JSON.parse(localStorage.getItem("FakturRekapBon"))||[],o={tanggal:t.tanggal,noFakturPilih:t.noFaktur,namaAktor:t.namaAktor,bruto:t.bruto,netto:t.netto,rp:t.rp};if(e)r.push(o),localStorage.setItem("FakturRekapBon",JSON.stringify(r));else{var s=r.findIndex((function(e,a){return e.noFaktur===t.noFaktur}));r.splice(s,1),localStorage.setItem("FakturRekapBon",JSON.stringify(r))}},onSelectAll:function(t,e,a){var n=[];e.forEach((function(t){var e={tanggal:t.tanggal,noFakturPilih:t.noFaktur,namaAktor:t.namaAktor,bruto:t.bruto,netto:t.netto,rp:t.rp};n.push(e)})),t?localStorage.setItem("FakturRekapBon",JSON.stringify(n)):localStorage.removeItem("FakturRekapBon")}};return m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"col-lg-12 col-md-12"},m.a.createElement("div",{className:"card"},m.a.createElement(C.default,{title:"Rekap Bon Customer - Penjualan"}),m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"row m-2"},m.a.createElement("div",{className:"col-lg-12 col-md-12 mb-5"},m.a.createElement(O.a,{steps:[{title:"Pilih Data"},{title:"Rekap Data"}],activeStep:this.state.step})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:this.state.step1},m.a.createElement("div",{className:"col-lg-4 col-md-4"},m.a.createElement("label",{htmlFor:""},"Tanggal"),m.a.createElement("input",{type:"date",name:"tanggal",className:"form-control",onChange:this.onChange("tanggal")})),m.a.createElement("div",{className:"col-lg-4 col-md-4"},m.a.createElement("label",{htmlFor:""},"Nama Toko"),m.a.createElement(E.a,{options:this.state.listCustomer.map((function(t){return{value:t.kodeCustomer,name:t.namaToko}})),search:!0,placeholder:"Silahkan Pilih",onChange:function(e){return t.setToko(e)}})),m.a.createElement("div",{className:"col-lg-12 mt-5"},this.state.listDataRekapBon?m.a.createElement(v.a,{keyField:"noFaktur",data:this.state.listDataRekapBon,columns:this.state.columns,search:!0},(function(t){return m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"text-right"},m.a.createElement(A,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),m.a.createElement(d.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:h()(),selectRow:e})))})):m.a.createElement(d.a,{keyField:"noFaktur",data:[],columns:this.state.columns,striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.nextStep()}},"Next",m.a.createElement("i",{className:"fa fa-chevron-right ml-3"}))))),m.a.createElement("div",{className:this.state.step2},m.a.createElement("div",{className:"col-lg-12 mt-5"},this.state.listDataRekapBon?m.a.createElement(v.a,{keyField:"noFaktur",data:JSON.parse(localStorage.getItem("FakturRekapBon"))||[],columns:this.state.columns,search:!0},(function(t){return m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"text-right"},m.a.createElement(A,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),m.a.createElement(d.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:h()()})))})):m.a.createElement(b.a,{width:"100%",height:100})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.setGabung()}},"Gabung Bon"))))))))))}}]),a}(u.Component);e.default=Object(F.b)((function(t){return{listDataRekapBon:t.provinsi.listDataRekapBon,username:t.provinsi.username,noFaktur:t.provinsi.noFaktur}}),null)(P)}}]);
//# sourceMappingURL=155.f7a2e957.chunk.js.map