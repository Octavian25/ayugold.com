(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[17],{1134:function(a,e,t){"use strict";t.r(e);var n=t(77),r=t(71),o=t(72),l=t(74),s=t(73),i=t(0),c=t.n(i),p=t(27),m=t(79),u=t(51),h=t.n(u),g=t(465),d=t(458),f=t(467),b=t(498),S=t(46),y=t(469),k=t(45),N=t.n(k),v=t(173),E=t.n(v),B=function(a){var e={};return a.tanggal||(e.tanggal="Tidak Boleh kosong"),a.supplier||(e.supplier="Tidak Boleh kosong"),a.noBon||(e.noBon="Tidak Boleh kosong"),e},T=t(518),O=t(23),R=Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(11)]).then(t.bind(null,499))})),I=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(28)]).then(t.bind(null,656))})),C=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(29)]).then(t.bind(null,657))})),j=Object(i.lazy)((function(){return t.e(30).then(t.bind(null,662))})),F=Object(i.lazy)((function(){return t.e(31).then(t.bind(null,658))})),D=Object(i.lazy)((function(){return t.e(12).then(t.bind(null,596))})),J=Object(i.lazy)((function(){return t.e(13).then(t.bind(null,597))})),w=Object(i.lazy)((function(){return t.e(170).then(t.bind(null,572))})),P=Object(i.lazy)((function(){return t.e(171).then(t.bind(null,573))})),x=Object(b.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),A=function(a){Object(l.a)(t,a);var e=Object(s.a)(t);function t(a){var o;Object(r.a)(this,t),(o=e.call(this,a)).setTotal=function(a){return function(e){localStorage.setItem([a],e.target.value),o.setTotalBayar()}},o.changeInput=function(a){return function(e){o.setState(Object(n.a)({},a,e.target.value))}};var l=new Date,s="".concat(l.getFullYear(),"-").concat(l.getMonth()+1,"-").concat(l.getDate());return o.state={listSupplier:[],tanggal:s,bonBayar:"",detail:"",tanggalInvoice:"",noPembayaran:"",supplier:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var a=this;this.props.dispatch(Object(m.d)()),this.props.dispatch(Object(m.e)()),N.a.get("http://147.139.182.75:3759/api/v1/suppliers").then((function(e){return a.setState({listSupplier:e.data})})).catch((function(a){return console.log(a)})),this.props.change("tanggal",T.a),this.props.change("totalBayar",this.props.totalBayar),this.props.change("totalBayarCash",this.props.totalBayarRp),this.setTotalBayar()}},{key:"handleSubmit",value:function(a){var e=this,t={kodeBarang:a.kodeBarang.split("|")[0],netto:a.netto,bruto:a.bruto,kadarTransaksi:a.kadarTransaksi},n={jenis:"CIOK",gross:a.bruto,harga:"-",kadar:a.kadarTransaksi,netto:parseFloat(a.netto).toFixed(3),pkg:"",gwpkg:""};this.props.dispatch(Object(O.t)());var r=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];r.push(n),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(r));var o=JSON.parse(localStorage.getItem("ciokTemp"))||[];o.push(t),localStorage.setItem("ciokTemp",JSON.stringify(o));var l=JSON.parse(localStorage.getItem("alatBayarBarang"))||[];l.push(t),localStorage.setItem("alatBayarBarang",JSON.stringify(l)),this.props.dispatch(Object(m.d)()),this.setTotalBayar(),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(O.k)())}))}},{key:"handleSubmit2",value:function(a){var e=this,t={kodeBarang:a.kodeBarang.split("|")[0],netto:a.netto,bruto:a.bruto,kadarTransaksi:a.kadarTransaksi},n={jenis:"RONGSOK",gross:a.bruto,harga:"-",kadar:a.kadarTransaksi,netto:parseFloat(a.netto).toFixed(3),pkg:"",gwpkg:""};this.props.dispatch(Object(O.t)());var r=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];r.push(n),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(r));var o=JSON.parse(localStorage.getItem("rongsokTemp"))||[];o.push(t),localStorage.setItem("rongsokTemp",JSON.stringify(o));var l=JSON.parse(localStorage.getItem("alatBayarBarang"))||[];l.push(t),localStorage.setItem("alatBayarBarang",JSON.stringify(l)),this.props.dispatch(Object(m.e)()),this.setTotalBayar(),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(O.k)())}))}},{key:"setCiok",value:function(){this.props.change("ciokBrutto",this.props.totalCiok),this.props.change("ciokNetto",this.props.totalCiok),this.setTotalBayar()}},{key:"setRongsok",value:function(){this.props.change("rongsokBruto",this.props.totalRongsok),this.props.change("rongsokNetto",this.props.totalRongsok),this.props.change("totalBayar",this.props.totalBayar)}},{key:"handleSubmitCash",value:function(a){var e=[],t={tunaiRp:a.cash,tunaiKurs:a.harga,tunaiTipe:"BON GR",tunaiNetto:a.cashNetto},n={jenis:"TUNAI",gross:a.cash,harga:a.harga,kadar:"",netto:parseFloat(a.cashNetto).toFixed(3),pkg:"",gwpkg:""},r=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];r.push(n),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(r)),e.push(t),localStorage.setItem("totalTunaiRp",a.cashNetto),localStorage.setItem("alatBayarTunai",JSON.stringify(e)),this.setTotalBayar(),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Disimpan",showConfirmButton:!1,timer:1500})}},{key:"handleSubmitCashRp",value:function(a){var e={tunaiRp:a.cash,tunaiKurs:a.harga,tunaiTipe:"BON GR",tunaiNetto:a.cashNetto},t=JSON.parse(localStorage.getItem("cashTempRp"))||[];t.push(e),localStorage.setItem("cashTempRp",JSON.stringify(t));var n=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))||[];n.push(e),localStorage.setItem("alatBayarTunaiRp",JSON.stringify(n)),this.props.dispatch(Object(S.i)()),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"handleSubmitTransfer",value:function(a){var e=[],t={transferKurs:a.harga,transferNetto:a.transferNetto,transferRp:a.transfer,transferTipe:"BON GR",accFrom:a.supplier,accTo:a.tujuan,transferTanggalJanji:a.tanggal},n={jenis:"TRANSFER",gross:a.transfer,harga:a.harga,kadar:"",netto:parseFloat(a.transferNetto).toFixed(3),pkg:"",gwpkg:""},r=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];r.push(n),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(r)),e.push(t),localStorage.setItem("totalTrfRp",a.transferNetto),localStorage.setItem("alatBayarTrf",JSON.stringify(e)),this.setTotalBayar(),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Disimpan",showConfirmButton:!1,timer:1500})}},{key:"handleSubmitTransferRp",value:function(a){var e={transferKurs:a.harga,transferNetto:a.transferNetto,transferRp:a.transfer,transferTipe:a.kriteria,accFrom:a.supplier,accTo:a.tujuan,transferTanggalJanji:a.tanggal},t=JSON.parse(localStorage.getItem("transferTempRp"))||[];t.push(e),localStorage.setItem("transferTempRp",JSON.stringify(t));var n=JSON.parse(localStorage.getItem("alatBayarTrfRp"))||[];n.push(e),localStorage.setItem("alatBayarTrfRp",JSON.stringify(n)),this.props.dispatch(Object(S.l)()),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"setTotalBayar",value:function(){var a=localStorage.getItem("totalTunaiRp")||0,e=localStorage.getItem("totalTrfRp")||0,t=localStorage.getItem("totalCiok")||0,n=localStorage.getItem("totalRongsok")||0,r=this.props.tambahan||0;this.props.change("totalCash",a),this.props.change("totalTransfer",e),this.props.change("totalCiok",t),this.props.change("totalRongsok",n),this.props.change("totalBayar",(parseFloat(a)+parseFloat(e)+parseFloat(t)+parseFloat(n)+r).toFixed(3)),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"col-lg-12",style:{color:"black"}},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},"BARANG"===this.props.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement(i.Suspense,{fallback:c.a.createElement(E.a,{width:"100%",height:50})},c.a.createElement(j,{onSubmit:function(e){return a.handleSubmitCash(e)}}),c.a.createElement(F,{onSubmit:function(e){return a.handleSubmitTransfer(e)}})),c.a.createElement(i.Suspense,{fallback:c.a.createElement(E.a,{width:"100%",height:50})},c.a.createElement(D,{totalCiok:this.props.totalCiok,totalBrutoCiok:this.props.totalBrutoCiok})),c.a.createElement(i.Suspense,{fallback:c.a.createElement(E.a,{width:"100%",height:50})},c.a.createElement(J,{totalRongsok:this.props.totalRongsok,totalBrutoRongsok:this.props.totalBrutoRongsok}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(i.Suspense,{fallback:c.a.createElement(E.a,{width:"100%",height:50})},c.a.createElement(w,{onSubmit:function(e){return a.handleSubmitCashRp(e)}}),c.a.createElement(P,{onSubmit:function(e){return a.handleSubmitTransferRp(e)}}))))),c.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(g.a,{name:"tanggal",label:"Tanggal",type:"date",component:y.a,defaultValue:this.state.tanggal,onChange:this.changeInput("tanggalInvoice")})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(g.a,{name:"supplier",label:"Supplier",className:"form-control",component:y.b,options:this.state.listSupplier.map((function(a){return{value:a.kodeSupplier,name:a.namaSupplier}})),defaultValue:"DEFAULT | DEFAULT",onChange:function(e){return a.setState({supplier:e})}})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(g.a,{name:"noBon",label:"Bon Bayar",type:"txt",component:y.a,onChange:this.changeInput("noPembayaran")})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(g.a,{name:"detail",label:"Detail",type:"text",component:y.a})),"BARANG"===this.props.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"row p-3"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"discount",label:"Discount",type:"number",component:y.a,defaultValue:0,onChange:this.setTotal("discount"),onBlur:this.setTotal("discount")}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"bonus",label:"Bonus",type:"number",component:y.a,defaultValue:0,onChange:this.setTotal("bonus"),onBlur:this.setTotal("bonus")}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"denda",label:"Denda",type:"number",component:y.a,defaultValue:0,onChange:this.setTotal("denda"),onBlur:this.setTotal("denda")}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalCash",label:"Denda",type:"number",component:y.a}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalTransfer",label:"Denda",type:"number",component:y.a}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalCiok",label:"Denda",type:"number",component:y.a}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalRongsok",label:"Denda",type:"number",component:y.a}))))))):null,c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"row p-3"},c.a.createElement("div",{className:"BARANG"===this.props.jenisTransaksi?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalBayar",label:"Total Bayar",type:"number",component:y.a}))),c.a.createElement("div",{className:"BARANG"!==this.props.jenisTransaksi?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Total Bayar Rp"),c.a.createElement(g.a,Object.assign({name:"totalBayarCash",label:"Total Rp",type:"telp",component:"input",className:"form-control",onBlur:this.props.change("totalBayarCash",this.props.totalBayarRp)},x))))))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"})),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))),c.a.createElement(R,{content:"CIOK"===this.props.tipeBayarModal?c.a.createElement(i.Suspense,{fallback:c.a.createElement(E.a,{width:"100%",height:50,count:5})},c.a.createElement(I,{onSubmit:function(e){return a.handleSubmit(e)},from:"CK",data:this.props.tampungCiok,onSend:this.props.onSend})):c.a.createElement(i.Suspense,{fallback:c.a.createElement(E.a,{width:"100%",height:50,count:5})},c.a.createElement(C,{onSubmit:function(e){return a.handleSubmit2(e)},from:"RSK",data:this.props.tampungRongsok,onSend:this.props.onSend})),title:"CIOK"===this.props.tipeBayarModal?"Tambah Data Ciok":"Tambah Data Rongsok"}))}}]),t}(i.Component);A=Object(d.a)({form:"PembayaranSupplierSimpan",enableReinitialize:!0,validate:B})(A);var K=Object(f.a)("PembayaranSupplierSimpan");e.default=Object(p.b)((function(a){var e=K(a,"harga","cash","transfer","discount","bonus","denda","totalCash","totalTransfer","totalCiok","totalRongsok"),t=e.harga,n=e.cash,r=e.transfer,o=e.discount,l=e.bonus,s=e.denda,i=e.totalCash,c=e.totalTransfer,p=e.totalCiok,m=e.totalRongsok,u=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):0,h=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))?JSON.parse(localStorage.getItem("alatBayarTunaiRp")):0,g=void 0===l?0:l,d=void 0===s?0:s,f=parseFloat(void 0===o?0:o)+parseFloat(g)-parseFloat(d),b=void 0===h[0]?0:h[0].tunaiNetto,S=void 0===u[0]?0:u[0].transferNetto;return console.log(f),{tipeBayarModal:a.provinsi.tipeBayarModal,onSend:a.provinsi.onSend,cashNetto:(parseFloat(n)/parseFloat(t)).toFixed(3),transferNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),totalBayar:(parseFloat(i)+parseFloat(c)+parseFloat(p)+parseFloat(m)+parseFloat(f)).toFixed(3),tambahan:f,totalBayarRp:parseFloat(b)+parseFloat(S)}}))(A)},469:function(a,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return s}));var n=t(0),r=t.n(n),o=t(178),l=function(a){var e=a.input,t=a.label,n=a.type,o=a.limit,l=a.readOnly,s=a.meta,i=s.touched,c=s.error,p=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},t),r.a.createElement("input",Object.assign({},e,{type:n,className:"form-control",maxLength:o,readOnly:l,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}})),i&&(c&&r.a.createElement("p",{className:"invalid-feedback"},c)||p&&r.a.createElement("p",null,p)))},s=function(a){var e=a.input,t=a.label,n=a.options,l=(a.placeholder,a.disabled),s=(a.value,a.meta),i=s.touched,c=s.error,p=s.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},t),r.a.createElement(o.a,Object.assign({},e,{options:n,search:!0,emptyMessage:"Tidak Ada Data",placeholder:"Silahkan Pilih",disabled:l,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}})),i&&(c&&r.a.createElement("p",{className:"invalid-feedback"},c)||p&&r.a.createElement("p",null,p)))}},518:function(a,e,t){"use strict";t.d(e,"a",(function(){return n}));var n=function(){return(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)}}}]);
//# sourceMappingURL=17.c67a8f84.chunk.js.map