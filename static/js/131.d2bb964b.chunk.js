(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[131],{1170:function(e,a,t){"use strict";t.r(a);var n=t(35),r=t(22),i=t(23),s=t(25),l=t(24),c=t(0),o=t.n(c),u=t(467),m=t(468),d=t(15),p=t(529),h=t.n(p),k=t(478),g=t.n(k),b=t(480),f=t.n(b),E=t(479),v=t.n(E),N=t(71),O=t(57),S=t(49),T=t.n(S),F=t(26),A=t(250),j=t.n(A),B=t(51),y=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,i=e.readOnly,s=e.meta,l=s.touched,c=s.error,u=s.warning;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"text-black"},t),o.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:i})),l&&(c&&o.a.createElement("p",{className:"invalid-feedback"},c)||u&&o.a.createElement("p",null,u)))},D=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,L=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(r.a)(this,t),(i=a.call(this,e)).disabledButton=function(e){e.target.disabled=!0},i.changeTransaksi=function(e){return function(a){switch(i.setState(Object(n.a)({},e,a.target.value)),a.target.value){case"Pindah Barang":i.props.dispatch(Object(N.i)());break;case"MuatasiBarang":i.props.dispatch(Object(N.g)());break;case"MutasiJenisLK":i.props.dispatch(Object(N.h)());break;case"Kirim Masak":i.props.dispatch(Object(N.f)());break;case"Terima Masak":i.props.dispatch(Object(N.j)());break;default:console.log("ERROR")}}},i.nextStep=function(){var e=i.state.step;0===e&&i.setState({step:e+1,step2:"row",step1:"row d-none"}),i.props.dispatch(Object(O.h)())},i.prevStep=function(){var e=i.state.step;1===e&&i.setState({step:e-1,step2:"row d-none",step1:"row"})},i.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"noBon",text:"Nomor Bon"},{dataField:"namaAktor",text:"Nama Aktor"},{dataField:"tujuan",text:"Tujuan"},{dataField:"Gross",text:"Gross(Gr)"},{dataField:"pkg",text:"Pkg(Gr)"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"}],data:[{tanggal:"23/11/2020",noBon:"TESTING-123",noFaktur:"FAKTUR-123"}],step:0,step1:"row",step2:"row d-none",step3:"row d-none",angka:0},i}return Object(i.a)(t,[{key:"updateButton",value:function(e){switch(this.setState({angka:this.state.angka+1}),e){case"Pindah Barang":this.props.dispatch(Object(N.i)());break;case"MuatasiBarang":this.props.dispatch(Object(N.g)());break;case"MutasiJenisLK":this.props.dispatch(Object(N.h)());break;case"Kirim Masak":this.props.dispatch(Object(N.f)());break;case"Terima Masak":this.props.dispatch(Object(N.j)());break;default:console.log("ERROR")}}},{key:"kirimvalidasi",value:function(e){var a=this;console.log("BERHASIL");var t=JSON.parse(localStorage.getItem("FakturTerpilih"))||[];switch(e){case"Kirim Masak":T.a.put(D+"item/dc/kirimmasak",t).then((function(){return Object(F.b)("Berhasil Validasi")})).then((function(){return a.prevStep()})).then((function(){return a.props.dispatch(Object(N.f)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(F.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"Terima Masak":T.a.put(D+"item/dc/terimamasak",t).then((function(){return Object(F.b)("Berhasil Validasi")})).then((function(){return a.prevStep()})).then((function(){return a.props.dispatch(Object(N.j)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(F.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"Pindah Barang":T.a.put(D+"item/dc/pindahbarang",t).then((function(){return Object(F.b)("Berhasil Validasi")})).then((function(){return a.prevStep()})).then((function(){return a.props.dispatch(Object(N.i)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(F.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"MuatasiBarang":T.a.put(D+"item/dc/mutasibarang",t).then((function(){return Object(F.b)("Berhasil Validasi")})).then((function(){return a.prevStep()})).then((function(){return a.props.dispatch(Object(N.g)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(F.c)("Gagal Validasi, Check Koneksi Anda")}));break;case"MutasiJenisLK":T.a.put(D+"item/dc/mutasilk",t).then((function(){return Object(F.b)("Berhasil Validasi")})).then((function(){return a.prevStep()})).then((function(){return a.props.dispatch(Object(N.h)())})).then((function(){return localStorage.removeItem("FakturTerpilih")})).catch((function(){return Object(F.c)("Gagal Validasi, Check Koneksi Anda")}))}}},{key:"render",value:function(){var e=this,a={mode:"checkbox",clickToSelect:!0,onSelect:function(e,a,t,n){console.log(e.noFaktur);var r=JSON.parse(localStorage.getItem("FakturTerpilih"))||[],i={noBon:e.noBon,supplier:e.namaAktor,bruto:e.bruto,netto:e.netto,bonRp:"",titipRp:"",titipGr:"",keterangan:e.keterangan,noFaktur:e.noFaktur,footerDocument:{editBy:"Nagatech",statusValid:"VALID"}};if(a){var s=r.findIndex((function(a,t){return a.noFaktur===e.noFaktur}));s<0?r.push(i):r.splice(s,1),localStorage.setItem("FakturTerpilih",JSON.stringify(r))}else{var l=r.findIndex((function(a,t){return a.noFaktur===e.noFaktur}));r.splice(l,1),localStorage.setItem("FakturTerpilih",JSON.stringify(r))}},onSelectAll:function(e,a,t){var n=[];a.forEach((function(e){var a={tanggal:e.tanggal,noBon:e.noBon,supplier:e.namaAktor,bruto:e.bruto,netto:e.netto,bonRp:"",titipRp:"",titipGr:"",keterangan:e.keterangan,noFaktur:e.noFaktur,footerDocument:{editBy:"Nagatech",statusValid:"VALID"}};n.push(a)})),e?localStorage.setItem("FakturTerpilih",JSON.stringify(n)):localStorage.removeItem("FakturTerpilih")}};return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"card"},o.a.createElement(B.default,{title:"Validasi Barang"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement(h.a,{steps:[{title:"Pilih Data"},{title:"Validasi Data"}],activeStep:this.state.step})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:this.state.step1},o.a.createElement("div",{className:"col-lg-3 col-md-3"},o.a.createElement("label",{htmlFor:""},"Silahkan Pilih Transaksi"),o.a.createElement(u.a,{name:"tipeTransaksi",label:"Dari",component:"select",className:"form-control",onChange:this.changeTransaksi("tipeTransaksi")},o.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),o.a.createElement("option",{value:"Pindah Barang",key:"Pindah Barang"},"Pindah Barang"),o.a.createElement("option",{value:"MuatasiBarang",key:"Muatasi Barang"},"Mutasi Barang"),o.a.createElement("option",{value:"MutasiJenisLK",key:"Mutasi Jenis LK"},"Mutasi Jenis LK"),o.a.createElement("option",{value:"Kirim Masak",key:"Kirim Masak"},"Kirim Masak"),o.a.createElement("option",{value:"Terima Masak",key:"Terima Masak"},"Terima Masak"))),o.a.createElement("div",{className:"col-lg-3 col-md-3"},o.a.createElement("label",{htmlFor:""},"Dari"),o.a.createElement(u.a,{name:"accFrom",label:"Dari",component:"select",className:"form-control"},o.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),o.a.createElement("div",{className:"col-lg-3 col-md-3"},o.a.createElement("label",{htmlFor:""},"Ke"),o.a.createElement(u.a,{name:"accTo",label:"Ke",component:"select",className:"form-control"},o.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),o.a.createElement("div",{className:"col-lg-3 col-md-3"},o.a.createElement(u.a,{name:"tanggal",label:"Tanggal Transaksi",component:y,type:"date"})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary"},o.a.createElement("i",{className:"fa fa-eye"})," Lihat Data"))),o.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listValidasiBarang?o.a.createElement(f.a,{keyField:"noFaktur",data:this.props.listValidasiBarang,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement(g.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:v()(),selectRow:a})))})):o.a.createElement(g.a,{keyField:"noFaktur",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.nextStep()}},"Next",o.a.createElement("i",{className:"fa fa-chevron-right ml-3"}))))),o.a.createElement("div",{className:this.state.step2},o.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.listDataSelectedValidasiSupplier?o.a.createElement(f.a,{keyField:j()(),data:this.props.listDataSelectedValidasiSupplier,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"form-group"},o.a.createElement(g.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:v()()})))})):o.a.createElement(g.a,{keyField:"noFaktur",data:[],columns:this.state.columns,bordered:!0,headerClasses:"header-table",noDataIndication:"Tidak Ada Data"})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.kirimvalidasi(e.state.tipeTransaksi)}},o.a.createElement("i",{className:"fa fa-check mr-3"}),"VALIDASI"))))))))))}}]),t}(c.Component);L=Object(m.a)({form:"validasiBarang",enableReinitialize:!0})(L),a.default=Object(d.b)((function(e){return{listValidasiBarang:e.provinsi.listValidasiBarang,listDataSelectedValidasiSupplier:e.provinsi.listDataSelectedValidasiSupplier}}),null)(L)},529:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,r=t(532),i=(n=r)&&n.__esModule?n:{default:n};a.default=i.default}}]);
//# sourceMappingURL=131.d2bb964b.chunk.js.map