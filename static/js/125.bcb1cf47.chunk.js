(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[125],{1162:function(e,a,t){"use strict";t.r(a);var n=t(35),l=t(36),r=t(38),o=t(37),s=t(0),c=t.n(s),i=t(18),m=t(631),d=t(477),u=t.n(d),p=t(503),b=t.n(p),E=t(502),h=t.n(E),g=t(531),N=t.n(g),y=t(23),v=t.n(y),f=t(61),S=t.n(f),B=t(56),k=t(184),O=Object(s.lazy)((function(){return t.e(18).then(t.bind(null,745))})),T=p.Search.SearchBar,P=p.CSVExport.ExportCSVButton,L=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7001/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,A=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).disabledButton=function(e){e.target.disabled=!0},l.nextStep=function(){var e=l.state.step;0===e?l.setState({step:e+1,step2:"row",step1:"row d-none"}):1===e&&l.setState({step:e+1,step2:"row d-none",step3:"row"})},l.prevStep=function(){var e=l.state.step;1===e?l.setState({step:e-1,step2:"row d-none",step1:"row"}):2===e&&l.setState({step:e-1,step3:"row d-none",step2:"row"})},l.state={listSupplier:[],step:0,step1:"row",step2:"row d-none",columns:[{dataField:"tanggal",text:"Tanggal",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"namaAktor",text:"Nama Toko",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"noBon",text:"Nomor Bon",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"rp",text:"Bon (Rp)",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"bruto",text:"Bon (Gr)",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{type:"button","data-toggle":"modal","data-target":"#pembayaranLM",className:"btn btn-success",onClick:function(e){return l.setState({totalBon:a.rp,noBon:a.noBon})}},c.a.createElement("i",{className:"fa fa-check-circle mr-2"}),"PILIH"))},headerStyle:function(){return{width:"9%"}}}],data:[{tanggal:"2020-11-10",noBon:"FAKTUR2020",totalBayar:3e7}],listValidasiBarang:[]},l}return Object(l.a)(t,[{key:"handleSubmitPembayaran",value:function(e){var a=JSON.parse(localStorage.getItem("alatBayarGiroLM")),t=JSON.parse(localStorage.getItem("alatBayarTunaiLM")),n=JSON.parse(localStorage.getItem("alatBayarTrfLM")),l=null===a?0:a[0].giroNetto,r=null===t?0:t[0].tunaiNetto,o=null===n?0:n[0].transferRp,s={alatBayarTunai:JSON.parse(localStorage.getItem("alatBayarTunaiLM")),alatBayarTrf:JSON.parse(localStorage.getItem("alatBayarTrfLM")),alatBayarGiro:JSON.parse(localStorage.getItem("alatBayarGiroLM")),footerDocument:{inputBy:"ADMIN"},noFaktur:e.noBon,noBon:e.noBon,tipeTransaksi:"PEMBAYARAN-BELI-LM",totalAlatBayar:{totalTrfRp:r,totalTunaiRp:o,totalCt:0,totalRsk:0,totalGiroRp:l,totalPutusRp:0,totalPutusGr:0,tipeData:"-"}};S.a.post(L+"cst/dc/byr",s).then((function(){return Object(B.b)("Pembayaran berhasil")})).catch((function(){return Object(B.c)("Pembayaran Gagal, Mohon periksa kembali koneksi anda")}))}},{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;S.a.get(L+"cst/dc/lm/heads?statusValid=VALID").then((function(a){return e.setState({listValidasiBarang:a.data.filter((function(e){return"BELI LM"===e.tipeTransaksi}))})}))}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement(k.default,{title:"Pembayaran Penjualan LM"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("br",null),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(N.a,{steps:[{title:"Pilih Data"},{title:"Konfirmasi"}],activeStep:this.state.step})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step1},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(m.a,null)),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(b.a,{keyField:"kodeKelompok",data:this.state.listValidasiBarang,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"text-right mt-5 mb-3"},c.a.createElement(T,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),c.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:h()()})))}))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.nextStep()}},"Next")))),c.a.createElement("div",{className:this.state.step2},c.a.createElement(b.a,{keyField:"kodeKelompok",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"text-right mt-5 mb-3"},c.a.createElement(T,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),c.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:h()()})),c.a.createElement(P,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.prevStep()},type:"button"},"Back"))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))))),c.a.createElement("div",{id:"pembayaranLM",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-full-width"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Pembayara Pembelian LM"),c.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(s.Suspense,{fallback:c.a.createElement("div",null,c.a.createElement(v.a,{width:760,height:420}))},c.a.createElement(O,{onSubmit:function(a){return e.handleSubmitPembayaran(a)},totalBon:this.state.totalBon,sumTotalBayar:this.props.sumTotalBayar,noBon:this.state.noBon}))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close")))))))}}]),t}(s.Component);a.default=Object(i.b)((function(e){return{sumTotalBayar:e.provinsi.sumTotalBayar}}),null)(A)},631:function(e,a,t){"use strict";var n=t(35),l=t(36),r=t(38),o=t(37),s=t(0),c=t.n(s),i=t(18),m=t(466),d=t(467),u=t(88),p=function(e){var a=e.input,t=e.label,n=e.type,l=e.limit,r=e.readOnly,o=e.meta,s=o.touched,i=o.error,m=o.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",maxLength:l,readOnly:r})),s&&(i&&c.a.createElement("p",{className:"invalid-feedback"},i)||m&&c.a.createElement("p",null,m)))},b=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,{label:"Tanggal",name:"tanggal",type:"date",component:p})),c.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},c.a.createElement(m.a,{label:"Nama Toko",name:"namaToko",type:"text",component:p})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Nama Toko"),c.a.createElement(u.a,{options:this.state.items,search:!0,placeholder:"Select your country"})))}}]),t}(s.Component);b=Object(d.a)({form:"PembayaranPenjualanLM",enableReinitialize:!0})(b),a.a=Object(i.b)()(b)}}]);
//# sourceMappingURL=125.bcb1cf47.chunk.js.map