(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[68],{1165:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(15),i=a(16),l=a(18),c=a(17),s=a(0),o=a.n(s),u=a(52),m=a(304),d=a(12),p=a(535),h=a.n(p),k=a(481),g=a.n(k),b=a(507),f=a.n(b),v=a(506),E=a.n(v),S=a(74),_=a(61),O=a(40),N=a.n(O),T=a(21),F=a(255),j=a.n(F),x=a(43),I=a(3),B=a(511),y=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,A=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).disabledButton=function(e){e.target.disabled=!0},i.changeTransaksi=function(e){return function(t){switch(i.setState(Object(n.a)({},e,t.target.value)),t.target.value){case"Pindah Barang":i.props.dispatch(Object(S.i)());break;case"MuatasiBarang":i.props.dispatch(Object(S.g)());break;case"MutasiJenisLK":i.props.dispatch(Object(S.h)());break;case"Kirim Masak":i.props.dispatch(Object(S.f)());break;case"Terima Masak":i.props.dispatch(Object(S.j)());break;default:console.log("ERROR")}}},i.nextStep=function(){var e=i.state.step;0===e&&i.setState({step:e+1,step2:"row",step1:"row d-none"}),i.props.dispatch(Object(_.h)())},i.prevStep=function(){var e=i.state.step;1===e&&i.setState({step:e-1,step2:"row d-none",step1:"row"})},i.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"no_trx",text:"Nomor Transaksi"},{dataField:"total_bruto",text:"Total Bruto(Gr)"},{dataField:"total_netto",text:"Total Netto(Gr)"},{dataField:"keterangan",text:"Keterangan"}],data:[{tanggal:"23/11/2020",noBon:"TESTING-123",noFaktur:"FAKTUR-123"}],step:0,step1:"row",step2:"row d-none",step3:"row d-none",angka:0},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.setItem("FakturTerpilih","[]"),localStorage.setItem("FakturTerpilih_kirim","[]")}},{key:"updateButton",value:function(e){switch(this.setState({angka:this.state.angka+1}),e){case"Pindah Barang":this.props.dispatch(Object(S.i)());break;case"MuatasiBarang":this.props.dispatch(Object(S.g)());break;case"MutasiJenisLK":this.props.dispatch(Object(S.h)());break;case"Kirim Masak":this.props.dispatch(Object(S.f)());break;case"Terima Masak":this.props.dispatch(Object(S.j)());break;default:console.log("ERROR")}}},{key:"kirimvalidasi",value:function(e){var t=this;console.log("BERHASIL");var a={trx_stock:JSON.parse(localStorage.getItem("FakturTerpilih_kirim"))};switch(e){case"Kirim Masak":Object(I.d)("validate-stock/validate",a).then((function(){return Object(T.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(S.f)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(){return Object(T.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"Terima Masak":N.a.put(y+"item/dc/terimamasak",a).then((function(){return Object(T.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(S.j)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(){return Object(T.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"Pindah Barang":Object(I.d)("validate-stock/validate",a).then((function(){return Object(T.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(S.i)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(){return Object(T.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"MuatasiBarang":Object(I.d)("validate-stock/validate",a).then((function(){return Object(T.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(S.f)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("FakturTerpilih_kirim")})).catch((function(){return Object(T.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"MutasiJenisLK":N.a.put(y+"item/dc/mutasilk",a).then((function(){return Object(T.b)("Berhasil Validasi")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(S.h)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(T.c)("Gagal Validasi, Check Koneksi Anda")}))}}},{key:"render",value:function(){var e=this,t={mode:"checkbox",clickToSelect:!0,onSelect:function(e,t,a,n){console.log(e.noFaktur);var r=JSON.parse(localStorage.getItem("FakturTerpilih"))||[],i=JSON.parse(localStorage.getItem("FakturTerpilih_kirim"))||[],l={tanggal:e.tanggal,no_bon:e.no_bon,total_bruto:e.total_bruto,total_netto:e.total_netto,keterangan:e.keterangan,no_trx:e.no_trx},c={no_trx:e.no_trx,keterangan:e.keterangan};if(t){var s=r.findIndex((function(t,a){return t.noFaktur===e.noFaktur})),o=i.findIndex((function(t,a){return t.no_bon===e.no_bon}));s<0?(r.push(l),i.push(c)):(r.splice(s,1),i.splice(o,1)),localStorage.setItem("FakturTerpilih",JSON.stringify(r)),localStorage.setItem("FakturTerpilih_kirim",JSON.stringify(i))}else{var u=r.findIndex((function(t,a){return t.noFaktur===e.noFaktur})),m=r.findIndex((function(t,a){return t.no_bon===e.no_bon}));r.splice(u,1),i.splice(m,1),localStorage.setItem("FakturTerpilih",JSON.stringify(r)),localStorage.setItem("FakturTerpilih_kirim",JSON.stringify(r))}},onSelectAll:function(e,t,a){var n=[],r=[];t.forEach((function(e){var t={tanggal:e.tanggal,no_bon:e.no_bon,total_bruto:e.total_bruto,total_netto:e.total_netto,keterangan:e.keterangan,no_trx:e.no_trx},a={no_trx:e.no_trx,keterangan:e.keterangan};n.push(t),r.push(a)})),e?(localStorage.setItem("FakturTerpilih",JSON.stringify(n)),localStorage.setItem("FakturTerpilih_kirim",JSON.stringify(r))):(localStorage.removeItem("FakturTerpilih"),localStorage.removeItem("FakturTerpilih_kirim"))}};return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"card"},o.a.createElement(x.default,{title:"Validasi Barang"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement(h.a,{steps:[{title:"Pilih Data"},{title:"Validasi Data"}],activeStep:this.state.step})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:this.state.step1},o.a.createElement("div",{className:"col-lg-3 col-md-3"},o.a.createElement("label",{htmlFor:""},"Silahkan Pilih Transaksi"),o.a.createElement(u.a,{name:"tipeTransaksi",label:"Dari",component:"select",className:"form-control",onChange:this.changeTransaksi("tipeTransaksi")},o.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),o.a.createElement("option",{value:"Pindah Barang",key:"Pindah Barang"},"Pindah Barang"),o.a.createElement("option",{value:"MuatasiBarang",key:"Muatasi Barang"},"Mutasi Barang"),o.a.createElement("option",{value:"MutasiJenisLK",key:"Mutasi Jenis LK"},"Mutasi Jenis LK"),o.a.createElement("option",{value:"Kirim Masak",key:"Kirim Masak"},"Kirim Masak"),o.a.createElement("option",{value:"Terima Masak",key:"Terima Masak"},"Terima Masak"))),o.a.createElement("div",{className:"col-lg-12 mt-3"},o.a.createElement(B.a,{keyField:"no_bon",data:this.props.listValidasiBarang,columns:this.state.columns,search:!0,striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:E()(),selectRow:t})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.nextStep()}},"Next",o.a.createElement("i",{className:"fa fa-chevron-right ml-3"}))))),o.a.createElement("div",{className:this.state.step2},o.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listDataSelectedValidasiSupplier?o.a.createElement(f.a,{keyField:j()(),data:this.props.listDataSelectedValidasiSupplier,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement(g.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:E()()})))})):o.a.createElement(g.a,{keyField:"noFaktur",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:" col-lg-6 text-left"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.prevStep()}},o.a.createElement("i",{className:"fa fa-chevron-left mr-3"}),"BACK")),o.a.createElement("div",{className:" col-lg-6 text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.kirimvalidasi(e.state.tipeTransaksi)}},o.a.createElement("i",{className:"fa fa-check mr-3"}),"VALIDASI")))))))))))}}]),a}(s.Component);A=Object(m.a)({form:"validasiBarang",enableReinitialize:!0})(A),t.default=Object(d.b)((function(e){return{listValidasiBarang:e.provinsi.listValidasiBarang,listDataSelectedValidasiSupplier:e.provinsi.listDataSelectedValidasiSupplier}}),null)(A)},511:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(481),l=a.n(i),c=a(507),s=a.n(c),o=a(506),u=a.n(o),m=a(514),d=a.n(m);var p=function(e){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:d.a,width:"250",height:"250",alt:"Empty"}),r.a.createElement("h5",null,e.text)))},h=c.Search.SearchBar,k=c.CSVExport.ExportCSVButton;t.a=function(e){var t=e.textEmpty,a=e.handleClick,n=e.tambahData,i=e.expandRow,c=e.selectRow,o=e.exportCSV;return r.a.createElement(s.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-left"},r.a.createElement(h,e.searchProps))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-right"},n&&r.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",r.a.createElement("i",{className:"fa fa-plus ml-3"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"col-12"},r.a.createElement(l.a,Object.assign({pagination:u()(),selectRow:c,expandRow:i},e.baseProps,{striped:!0,noDataIndication:r.a.createElement(p,{text:t||"Tidak Ada Data"})})),r.a.createElement("br",null),o&&r.a.createElement(k,e.csvProps,"Export CSV!!")))}))}},514:function(e,t,a){e.exports=a.p+"static/media/emptyTable.ffc2d7dc.svg"},535:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(542),i=(n=r)&&n.__esModule?n:{default:n};t.default=i.default}}]);
//# sourceMappingURL=68.c58113f9.chunk.js.map