(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[125],{1134:function(e,t,a){"use strict";a.r(t);var n=a(35),s=a(22),l=a(23),r=a(25),o=a(24),i=a(0),c=a.n(i),u=a(467),m=a(468),d=a(15),p=a(529),h=a.n(p),g=a(478),k=a.n(g),v=a(480),f=a.n(v),E=a(479),b=a.n(E),C=a(49),T=a.n(C),N=a(92),S=a(8),j=a.n(S),P=a(180),O=a(26),y=a(39),F=a(9),A=a(11),_=a(51),D="https://147.139.193.169:3759/api/v1/",I=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,L=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).disabledButton=function(e){e.target.disabled=!0},l.nextStep=function(){var e=l.state.step;0===e&&l.setState({step:e+1,step2:"row",step1:"row d-none"}),l.props.dispatch(Object(P.d)())},l.prevStep=function(){var e=l.state.step;1===e&&l.setState({step:e-1,step2:"row d-none",step1:"row"})},l.changeTransaksi=function(e){return function(t){l.setState(Object(n.a)({},e,t.target.value))}},l.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Aktor"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"}],data:[{tanggal:"23/11/2020"}],step:0,step1:"row",step2:"row d-none",step3:"row d-none",listSales:[],listCustomer:[],listCloseTransaksiPenjualan:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.a.get(D+"storages2?tipeData=SALES").then((function(t){return e.setState({listSales:t.data})})),T.a.get(D+"customers").then((function(t){return e.setState({listCustomer:t.data})})),this.getListClose()}},{key:"getListClose",value:function(){var e=this;T.a.get(I+"cst/dc/pjl/heads",{params:{statusValid:"OPEN"}}).then((function(t){return e.setState({listCloseTransaksiPenjualan:t.data})}))}},{key:"onSubmitToko",value:function(e){this.props.change("namaToko",e)}},{key:"kirimvalidasi",value:function(){var e=this;this.props.dispatch(Object(F.t)());var t=JSON.parse(localStorage.getItem("closeTransaksiPenjualan"))||[];T.a.put(I+"cst/dc/pjl",t).then((function(){return j.a.fire({text:"Cancel Transaksi berhasil",icon:"success",timer:2e3,showConfirmButton:!1,position:"top-right"}).then((function(){return localStorage.removeItem("closeTransaksiPenjualan")})).then((function(){return e.props.dispatch(Object(y.b)())})).then((function(){return e.props.dispatch(Object(P.c)())})).then((function(){return e.prevStep()})).then((function(){return e.getListClose()})).then((function(){return e.props.dispatch(Object(F.k)())}))})).catch((function(){return Object(O.c)("Cancel gagal, Mohon periksa Koneksi anda",e.props.dispatch(Object(F.k)()))}))}},{key:"getListPenjualan",value:function(e,t,a){this.props.dispatch(Object(P.c)(e,t,a))}},{key:"setToko",value:function(e){this.props.change("namaToko",e),this.setFilterCustomer(e),this.setState({namaToko:e})}},{key:"setFilterCustomer",value:function(e){var t=this;T.a.get(I+"cst/dc/pjl/heads",{params:{statusValid:"OPEN"}}).then((function(e){return t.setState({listCloseTransaksiPenjualan:e.data})})).then((function(){var a=t.state.listCloseTransaksiPenjualan.filter((function(t){return t.kodeAktor===e.toUpperCase()}));t.setState({listCloseTransaksiPenjualan:a})}))}},{key:"setFilterTanggal",value:function(e){var t=this;T.a.get(I+"cst/dc/pjl/heads",{params:{statusValid:"OPEN"}}).then((function(e){return t.setState({listCloseTransaksiPenjualan:e.data})})).then((function(){var a=t.state.listCloseTransaksiPenjualan.filter((function(t){return t.tanggal===e}));t.setState({listCloseTransaksiPenjualan:a})}))}},{key:"render",value:function(){var e=this,t=this.state.listCustomer.map((function(e){return{value:e.kodeCustomer,name:e.namaToko}})),a={mode:"checkbox",clickToSelect:!0,onSelect:function(e,t,a,n){console.log(e.noFaktur);var s=JSON.parse(localStorage.getItem("FakturTerpilih"))||[],l={tanggal:e.tanggal,noBon:e.noBon,supplier:e.supplier,bruto:e.bruto,netto:e.netto,bonRp:e.bonRp,titipRp:e.titipRp,titipGr:e.titipGr,keterangan:e.keterangan,noFaktur:e.noFaktur,footerDocument:{editBy:"Nagatech",statusValid:"CANCEL"}};if(t)s.push(l),localStorage.setItem("closeTransaksiPenjualan",JSON.stringify(s));else{var r=s.findIndex((function(t,a){return t.noFaktur===e.noFaktur}));s.splice(r,1),localStorage.setItem("closeTransaksiPenjualan",JSON.stringify(s))}},onSelectAll:function(e,t,a){var n=[];t.forEach((function(e){var t={tanggal:e.tanggal,noBon:e.noBon,supplier:e.namaAktor,bruto:e.bruto,netto:e.netto,bonRp:"",titipRp:"",titipGr:"",keterangan:e.keterangan,noFaktur:e.noFaktur,footerDocument:{editBy:"Nagatech",statusValid:"VALID"}};n.push(t)})),e?localStorage.setItem("closeTransaksiPenjualan",JSON.stringify(n)):localStorage.removeItem("closeTransaksiPenjualan")}};return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement(_.default,{title:"Close Transaksi Penjualan"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12 mb-3"},c.a.createElement(h.a,{steps:[{title:"Pilih Data"},{title:"Validasi Data"}],activeStep:this.state.step})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step1},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Nama Toko"),c.a.createElement(N.a,{options:t,search:!0,placeholder:"SILAHKAN PILIH",onChange:function(t){return e.setToko(t)}})),c.a.createElement("div",{className:"col-lg-3 d-none"},c.a.createElement(u.a,{name:"namaToko",label:"Nama Toko",type:"text",component:A.a})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(u.a,{name:"tanggal",label:"Tanggal Transaksi",component:A.a,type:"date",onChange:function(t){e.setState({tanggal:t.target.value},e.setFilterTanggal(t.target.value))}})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(u.a,{name:"TipeTransaksi",label:"Tipe Transaksi",component:A.b,className:"form-control",onChange:function(t){return e.setState({TipeTransaksi:t})},options:[{value:"UMUM",name:"UMUM"},{value:"FICO",name:"FICO"}]},c.a.createElement("option",{value:"\r DEFAULT",key:"\r DEFAULT"},"Silahkan PIlih"),c.a.createElement("option",{value:"UMUM",key:"UMUM"},"UMUM"),c.a.createElement("option",{value:"FICO",key:"FICO"},"FICO"))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.getListPenjualan(e.state.tanggal,e.state.tanggal,e.state.kodeCustomer)}},c.a.createElement("i",{className:"fa fa-eye"})," Lihat Data"))),c.a.createElement("div",{className:"col-lg-12 mt-3"},this.state.listCloseTransaksiPenjualan?c.a.createElement(f.a,{keyField:"noFaktur",data:this.state.listCloseTransaksiPenjualan,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement(k.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()(),selectRow:a})))})):c.a.createElement(k.a,{keyField:"noFaktur",data:[],columns:this.state.columns,striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.nextStep()}},"Next",c.a.createElement("i",{className:"fa fa-chevron-right ml-3"}))))),c.a.createElement("div",{className:this.state.step2},c.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listCloseTransaksiPenjualanSelected?c.a.createElement(f.a,{keyField:"id",data:this.props.listCloseTransaksiPenjualanSelected,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement(k.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()()})))})):c.a.createElement(k.a,{keyField:"id",data:[],columns:this.state.columns,striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.prevStep()}},c.a.createElement("i",{className:"fa fa-chevron-left mr-3"}),"Kembali"))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.kirimvalidasi()}},c.a.createElement("i",{className:"fa fa-times-circle mr-3"}),"Batal Transaksi"))))))))))))}}]),a}(i.Component);L=Object(m.a)({form:"CloseTransaksiPenjualan",enableReinitialize:!0})(L),t.default=Object(d.b)((function(e){return{listValidasiCustomer:e.provinsi.listValidasiCustomer,listCloseTransaksiPenjualan:e.provinsi.listCloseTransaksiPenjualan,listCloseTransaksiPenjualanSelected:e.provinsi.listCloseTransaksiPenjualanSelected}}),null)(L)},529:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(532),l=(n=s)&&n.__esModule?n:{default:n};t.default=l.default}}]);
//# sourceMappingURL=125.86026d13.chunk.js.map