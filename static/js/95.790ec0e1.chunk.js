(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[95],{1157:function(t,e,a){"use strict";a.r(e);var n=a(15),r=a(16),o=a(18),l=a(17),i=a(0),s=a.n(i),c=a(12),m=a(631),u=a(481),d=a.n(u),p=a(507),h=a.n(p),f=a(506),b=a.n(f),g=a(542),E=a.n(g),N=a(14),y=a.n(N),v=a(40),S=a.n(v),B=a(21),k=a(29),O=a(518),T=a(43),P=a(51),C=Object(i.lazy)((function(){return a.e(19).then(a.bind(null,747))})),A=p.Search.SearchBar,L=p.CSVExport.ExportCSVButton,j=Object(i.lazy)((function(){return Promise.all([a.e(2),a.e(5)]).then(a.bind(null,509))})),w=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,x=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).disabledButton=function(t){t.target.disabled=!0},r.nextStep=function(){var t=r.state.step;0===t?r.setState({step:t+1,step2:"row",step1:"row d-none"}):1===t&&r.setState({step:t+1,step2:"row d-none",step3:"row"})},r.prevStep=function(){var t=r.state.step;1===t?r.setState({step:t-1,step2:"row d-none",step1:"row"}):2===t&&r.setState({step:t-1,step3:"row d-none",step2:"row"})},r.state={listSupplier:[],step:0,step1:"row",step2:"row d-none",columns:[{dataField:"tanggal",text:"Tanggal",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"namaAktor",text:"Nama Toko",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"noBon",text:"Nomor Bon",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"rp",text:"Bon (Rp)",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"bruto",text:"Bon (Gr)",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"aksi",text:"Aksi",csvExport:!1,formatter:function(t,e){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(t){return r.klikPilih(e)}},s.a.createElement("i",{className:"fa fa-check-circle mr-2"}),"PILIH"))},headerStyle:function(){return{width:"9%"}}}],data:[{tanggal:"2020-11-10",noBon:"FAKTUR2020",totalBayar:3e7}],listValidasiBarang:[]},r}return Object(r.a)(a,[{key:"klikPilih",value:function(t){this.props.dispatch(Object(P.j)()),this.setState({totalBon:t.rp,noBon:t.noFaktur})}},{key:"handleSubmitPembayaran",value:function(t){var e=this,a=JSON.parse(localStorage.getItem("alatBayarGiroLM")),n=JSON.parse(localStorage.getItem("alatBayarTunaiLM")),r=JSON.parse(localStorage.getItem("alatBayarTrfLM")),o=null===a?0:a[0].giroNetto,l=null===n?0:n[0].tunaiNetto,i=null===r?0:r[0].transferRp,s={alatBayarTunai:JSON.parse(localStorage.getItem("alatBayarTunaiLM")),alatBayarTrf:JSON.parse(localStorage.getItem("alatBayarTrfLM")),alatBayarGiro:JSON.parse(localStorage.getItem("alatBayarGiroLM")),footerDocument:{inputBy:"ADMIN"},noFaktur:this.props.noFaktur,noBon:this.props.noFaktur,tipeTransaksi:"PELUNASAN-JUAL-LM",totalAlatBayar:{totalTrfRp:l,totalTunaiRp:i,totalCt:0,totalRsk:0,totalGiroRp:o,totalPutusRp:0,totalPutusGr:0,tipeData:"-"},fakturList:[{rp:0,netto:0,noFakturPilih:t.noBon}]};console.log(JSON.stringify(s)),S.a.post(w+"cst/dc/byr",s).then((function(){return e.props.dispatch(Object(P.g)())})).then((function(){return Object(B.b)("Pembayaran berhasil")})).then((function(){return Object(O.c)(["cashLM","alatBayarTunaiLM","alatBayarTrfLM","giroLM","alatBayarGiroLM","transferLM"])})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return e.props.dispatch(k.b)})).catch((function(){return Object(B.c)("Pembayaran Gagal, Mohon periksa kembali koneksi anda")}))}},{key:"componentDidMount",value:function(){this.getData(),this.props.dispatch(Object(k.b)())}},{key:"getData",value:function(){var t=this;S.a.get(w+"cst/dc/lm/heads?statusValid=VALID").then((function(e){return t.setState({listValidasiBarang:e.data.filter((function(t){return"JUAL LM"===t.tipeTransaksi}))})}))}},{key:"render",value:function(){var t=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"card"},s.a.createElement(T.default,{title:"Pembayaran Penjualan LM"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("br",null),s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement(E.a,{steps:[{title:"Pilih Data"},{title:"Konfirmasi"}],activeStep:this.state.step})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:this.state.step1},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(m.a,null)),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement(h.a,{keyField:"kodeKelompok",data:this.state.listValidasiBarang,columns:this.state.columns,search:!0},(function(t){return s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"text-right mt-5 mb-3"},s.a.createElement(A,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),s.a.createElement(d.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()()})))}))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.nextStep()}},"Next")))),s.a.createElement("div",{className:this.state.step2},s.a.createElement(h.a,{keyField:"kodeKelompok",data:this.state.data,columns:this.state.columns,search:!0},(function(t){return s.a.createElement("div",{className:"form-group"},s.a.createElement("div",{className:"text-right mt-5 mb-3"},s.a.createElement(A,Object.assign({},t.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),s.a.createElement(d.a,Object.assign({},t.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()()})),s.a.createElement(L,Object.assign({},t.csvProps,{className:"btn btn-primary"}),"Export CSV"))})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-left"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.prevStep()},type:"button"},"Back"))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))))),s.a.createElement(j,{content:s.a.createElement(i.Suspense,{fallback:s.a.createElement(y.a,{width:"100%",height:50,count:5})},s.a.createElement(C,{onSubmit:function(e){return t.handleSubmitPembayaran(e)},totalBon:this.state.totalBon,sumTotalBayar:this.props.sumTotalBayar,noBon:this.state.noBon})),title:"Tambah Data Pembayaran"})))}}]),a}(i.Component);e.default=Object(c.b)((function(t){return{sumTotalBayar:t.provinsi.sumTotalBayar,noFaktur:t.provinsi.noFaktur}}),null)(x)},518:function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return i}));var n=a(7),r=a.n(n),o=function(t){t.forEach((function(t){localStorage.removeItem(t)}))},l=function(t,e,a,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var l=JSON.parse(localStorage.getItem(t))||[];l.splice(e,1),localStorage.setItem(t,JSON.stringify(l)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)}))}}))},i=function(t,e,a,n){return new Promise((function(o,l){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(l){if(l.isConfirmed){var i=JSON.parse(localStorage.getItem(t))||[];i.splice(e,1),localStorage.setItem(t,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)})).then(o("Berhasil")).catch("Gagal")}}))}))}},631:function(t,e,a){"use strict";var n=a(15),r=a(16),o=a(18),l=a(17),i=a(0),s=a.n(i),c=a(12),m=a(52),u=a(304),d=a(95),p=function(t){var e=t.input,a=t.label,n=t.type,r=t.limit,o=t.readOnly,l=t.meta,i=l.touched,c=l.error,m=l.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},a),s.a.createElement("input",Object.assign({},e,{type:n,className:"form-control",maxLength:r,readOnly:o})),i&&(c&&s.a.createElement("p",{className:"invalid-feedback"},c)||m&&s.a.createElement("p",null,m)))},h=function(t){Object(o.a)(a,t);var e=Object(l.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(m.a,{label:"Tanggal",name:"tanggal",type:"date",component:p})),s.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},s.a.createElement(m.a,{label:"Nama Toko",name:"namaToko",type:"text",component:p})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Nama Toko"),s.a.createElement(d.a,{options:this.state.items,search:!0,placeholder:"Select your country"})))}}]),a}(i.Component);h=Object(u.a)({form:"PembayaranPenjualanLM",enableReinitialize:!0})(h),e.a=Object(c.b)()(h)}}]);
//# sourceMappingURL=95.790ec0e1.chunk.js.map