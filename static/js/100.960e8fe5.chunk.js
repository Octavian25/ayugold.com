(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[100],{1166:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),i=a(22),s=a(21),o=a(0),c=a.n(o),l=a(32),u=a(150),p=a(16),m=a(630),d=a.n(m),h=a(226),b=a.n(h),k=a(115),E=a.n(k),g=a(227),N=a.n(g),A=a(92),f=a.n(A),v=a(117),O=a(69),_=a(18),T=a(75),S=a(51),R=a(5),j=a(45),C=a(229),P=function(e){var t=e.input,a=e.label,n=e.type,r=e.limit,i=e.readOnly,s=e.meta,o=s.touched,l=s.error,u=s.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},a),c.a.createElement("input",Object.assign({},t,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:i})),o&&(l&&c.a.createElement("p",{className:"invalid-feedback"},l)||u&&c.a.createElement("p",null,u)))},I=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,L=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).disabledButton=function(e){e.target.disabled=!0},r.nextStep=function(){var e=r.state.step;0===e&&r.setState({step:e+1,step2:"row",step1:"row d-none"}),r.props.dispatch(Object(T.h)())},r.prevStep=function(){var e=r.state.step;1===e&&r.setState({step:e-1,step2:"row d-none",step1:"row"})},r.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"kode_customer",text:"Customer"},{dataField:"keterangan",text:"Keterangan"},{dataField:"total_bruto",text:"Total Bruto"},{dataField:"total_netto",text:"Total Netto"},{dataField:"bon_rp",text:"Bon RP"},{dataField:"titip_gr",text:"Titip Gr"},{dataField:"titip_rp",text:"Titip Rp"}],data:[{tanggal:"23/11/2020"}],step:0,step1:"row",step2:"row d-none",step3:"row d-none",listSales:[],listCustomer:[]},r}return Object(r.a)(a,[{key:"updateButton",value:function(e){switch(e){case"PENJUALAN":this.props.dispatch(Object(O.l)());break;case"RETURN PENJUALAN":this.props.dispatch(Object(O.m)());break;case"PEMBAYARAN PER BON":this.props.dispatch(Object(O.j)());break;case"TOLAKAN CUSTOMER":this.props.dispatch(Object(O.o)());break;case"TITIP GR CUSTOMER":this.props.dispatch(Object(O.n)());break;case"PENJUALAN LM":this.props.dispatch(Object(O.i)());break;case"PEMBELIAN LM":this.props.dispatch(Object(O.k)());break;default:console.log("ERROR")}}},{key:"kirimvalidasi",value:function(e){var t=this;console.log("BERHASIL");var a={trx_customer:JSON.parse(localStorage.getItem("FakturTerpilih_kirim"))||[]};switch(e){case"PENJUALAN":Object(R.d)("validate-customer/validate",a).then((function(){return Object(_.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(O.l)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(e){return Object(_.c)("Gagal Validasi, Check Koneksi Anda, Detial : ".concat(e.response.data))}));break;case"RETURN PENJUALAN":Object(R.d)("validate-customer/validate",a).then((function(){return Object(_.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(O.m)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(_.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"PEMBAYARAN PER BON":Object(R.d)("validate-customer/validate",a).then((function(){return Object(_.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(O.j)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(_.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"TOLAKAN PEMBAYARAN CUSTOMER":Object(R.d)("validate-customer/validate",a).then((function(){return Object(_.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(O.m)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(_.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"TITIP GR CUSTOMER":Object(R.d)("validate-customer/validate",a).then((function(){return Object(_.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(O.n)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(e){return Object(_.c)("Gagal Validasi, Check Koneksi Anda, Detial : ".concat(e.response.data))}));break;case"PENJUALAN LM":f.a.put(I+"cst/dc/lm",a).then((function(){return Object(_.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(O.i)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(_.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"PEMBELIAN LM":f.a.put(I+"cst/dc/lm",a).then((function(){return Object(_.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(O.k)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(_.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"TRANSFER BALANCE":Object(R.d)("validate-customer/validate",a).then((function(){return Object(_.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(O.q)(t.state.kode_customer,t.state.tanggal))})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(e){return Object(_.c)("Gagal Validasi, Check Koneksi Anda, Detial : ".concat(e.response.data))}));break;default:console.log("ERROR")}}},{key:"changeTransaksi",value:function(){switch(this.state.tipeTransaksi){case"PENJUALAN":this.props.dispatch(Object(O.l)(this.state.kode_customer,this.state.tanggal));break;case"RETURN PENJUALAN":this.props.dispatch(Object(O.m)(this.state.kode_customer,this.state.tanggal));break;case"PEMBAYARAN PER BON":this.props.dispatch(Object(O.j)(this.state.kode_customer,this.state.tanggal));break;case"TOLAKAN PEMBAYARAN CUSTOMER":this.props.dispatch(Object(O.o)(this.state.kode_customer,this.state.tanggal));break;case"TOLAKAN RETURN CUSTOMER":this.props.dispatch(Object(O.p)());break;case"TITIP GR CUSTOMER":this.props.dispatch(Object(O.n)(this.state.kode_customer,this.state.tanggal));break;case"PENJUALAN LM":this.props.dispatch(Object(O.i)());break;case"PEMBELIAN LM":this.props.dispatch(Object(O.k)());break;case"TRANSFER BALANCE":this.props.dispatch(Object(O.q)(this.state.kode_customer,this.state.tanggal));break;default:console.log("ERROR")}}},{key:"componentDidMount",value:function(){localStorage.setItem("FakturTerpilih_kirim","[]"),localStorage.setItem("FakturTerpilih","[]"),this.props.dispatch(Object(j.h)())}},{key:"onSubmitToko",value:function(e){this.props.change("namaToko",e)}},{key:"render",value:function(){var e=this,t=this.props.listCustomer.map((function(e){return{value:e.kode_customer,name:e.nama_customer}})),a={mode:"checkbox",clickToSelect:!0,onSelect:function(e,t,a,n){console.log(e.noFaktur);var r=JSON.parse(localStorage.getItem("FakturTerpilih"))||[],i=JSON.parse(localStorage.getItem("FakturTerpilih_kirim"))||[],s={tanggal:e.tanggal,no_bon:e.no_bon,no_trx:e.no_trx,kode_customer:e.kode_customer,keterangan:e.keterangan,total_bruto:e.total_bruto,total_netto:e.total_netto,bon_rp:e.bon_rp,titip_gr:e.titip_gr,titip_rp:e.titip_rp},o={no_trx:e.no_trx,keterangan:e.keterangan};if(t){var c=r.findIndex((function(t,a){return t.no_bon===e.no_bon})),l=i.findIndex((function(t,a){return t.no_bon===e.no_bon}));c<0?(r.push(s),i.push(o)):(r.splice(c,1),i.splice(l,1)),localStorage.setItem("FakturTerpilih",JSON.stringify(r)),localStorage.setItem("FakturTerpilih_kirim",JSON.stringify(i))}else{var u=r.findIndex((function(t,a){return t.no_bon===e.no_bon})),p=r.findIndex((function(t,a){return t.no_bon===e.no_bon}));r.splice(u,1),i.splice(p,1),localStorage.setItem("FakturTerpilih",JSON.stringify(r)),localStorage.setItem("FakturTerpilih_kirim",JSON.stringify(r))}},onSelectAll:function(e,t,a){var n=[],r=[];t.forEach((function(e){var t={tanggal:e.tanggal,no_bon:e.no_bon,no_trx:e.no_trx,kode_customer:e.kode_customer,keterangan:e.keterangan,total_bruto:e.total_bruto,total_netto:e.total_netto,bon_rp:e.bon_rp,titip_gr:e.titip_gr,titip_rp:e.titip_rp},a={no_trx:e.no_trx,keterangan:e.keterangan};n.push(t),r.push(a)})),e?(localStorage.setItem("FakturTerpilih",JSON.stringify(n)),localStorage.setItem("FakturTerpilih_kirim",JSON.stringify(r))):(localStorage.removeItem("FakturTerpilih"),localStorage.removeItem("FakturTerpilih_kirim"))}};return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement(S.default,{title:"Validasi Customer"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(d.a,{steps:[{title:"Pilih Data"},{title:"Validasi Data"}],activeStep:this.state.step})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step1},c.a.createElement("div",{className:"col-lg-3 mb-3"},c.a.createElement("label",{htmlFor:""},"Jenis Transaksi"),c.a.createElement(l.a,{name:"tipeTransaksi",label:"Dari",component:"select",className:"form-control",onChange:function(t){return e.setState({tipeTransaksi:t.target.value})}},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),c.a.createElement("option",{value:"PENJUALAN",key:"PENJUALAN"},"PENJUALAN"),c.a.createElement("option",{value:"RETURN PENJUALAN",key:"RETURN PENJUALAN"},"RETURN PENJUALAN"),c.a.createElement("option",{value:"PEMBAYARAN PER BON",key:"PEMBAYARAN PER BON"},"PEMBAYARAN PER BON"),c.a.createElement("option",{value:"TOLAKAN PEMBAYARAN CUSTOMER",key:"TOLAKAN PEMBAYARAN CUSTOMER"},"TOLAKAN PEMBAYARAN CUSTOMER"),c.a.createElement("option",{value:"TITIP GR CUSTOMER",key:"TITIP GR CUSTOMER"},"TITIP CUSTOMER"),c.a.createElement("option",{value:"TRANSFER BALANCE",key:"TRANSFER BALANCE"},"TRANSFER BALANCE"))),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Nama Customer"),c.a.createElement(v.a,{options:t,search:!0,placeholder:"Silahkan Pilih",onChange:function(t){return e.setState({kode_customer:t})}})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(l.a,{name:"tanggal",label:"Tanggal Transaksi",component:P,type:"date",onChange:function(t){return e.setState({tanggal:t.target.value})}})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.changeTransaksi()}},c.a.createElement("i",{className:"fa fa-eye"})," Lihat Data"))),c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement(C.a,{keyField:"no_bon",data:this.props.listValidasiCustomer,columns:this.state.columns,search:!0,striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:N()(),selectRow:a})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.nextStep()}},"Next",c.a.createElement("i",{className:"fa fa-chevron-right ml-3"}))))),c.a.createElement("div",{className:this.state.step2},c.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listDataSelectedValidasiSupplier?c.a.createElement(E.a,{keyField:"noFaktur",data:this.props.listDataSelectedValidasiSupplier,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement(b.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:N()()})))})):c.a.createElement(b.a,{keyField:"noFaktur",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.prevStep()}},c.a.createElement("i",{className:"fa fa-chevron-left mr-3"}),"Kembali"))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.kirimvalidasi(e.state.tipeTransaksi)}},c.a.createElement("i",{className:"fa fa-check mr-3"}),"VALIDASI"))))))))))))}}]),a}(o.Component);L=Object(u.a)({form:"validasiCustomer",enableReinitialize:!0})(L),t.default=Object(p.b)((function(e){return{listValidasiCustomer:e.provinsi.listValidasiCustomer,listDataSelectedValidasiSupplier:e.provinsi.listDataSelectedValidasiSupplier,listCustomer:e.provinsi.customer}}),null)(L)},630:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(637),i=(n=r)&&n.__esModule?n:{default:n};t.default=i.default}}]);
//# sourceMappingURL=100.960e8fe5.chunk.js.map