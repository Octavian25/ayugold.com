(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[139],{1127:function(a,t,e){"use strict";e.r(t);var r=e(47),o=e(35),n=e(36),l=e(38),s=e(37),i=e(0),c=e.n(i),p=e(18),m=e(28),h=e(10),u=e.n(h),g=e(467),d=e(468),f=e(470),b=e(185),S=e(33),y=e(22),k=e(19),N=e.n(k),v=e(198),B=e(190),E=e(11),O=e(87),T=(e(3),Object(i.lazy)((function(){return Promise.all([e.e(2),e.e(8)]).then(e.bind(null,506))}))),R=Object(i.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(9)]).then(e.bind(null,667))})),I=Object(i.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(10)]).then(e.bind(null,668))})),C=Object(i.lazy)((function(){return e.e(15).then(e.bind(null,619))})),j=Object(i.lazy)((function(){return e.e(17).then(e.bind(null,618))})),F=Object(i.lazy)((function(){return e.e(11).then(e.bind(null,568))})),J=Object(i.lazy)((function(){return e.e(12).then(e.bind(null,569))})),_=Object(i.lazy)((function(){return e.e(16).then(e.bind(null,578))})),D=Object(i.lazy)((function(){return e.e(18).then(e.bind(null,579))})),w=Object(b.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),P=function(a){Object(l.a)(e,a);var t=Object(s.a)(e);function e(a){var n;Object(o.a)(this,e),(n=t.call(this,a)).setTotal=function(a){return function(t){localStorage.setItem([a],t.target.value),n.setTotalBayar()}},n.changeInput=function(a){return function(t){n.setState(Object(r.a)({},a,t.target.value))}};var l=new Date,s="".concat(l.getFullYear(),"-").concat(l.getMonth()+1,"-").concat(l.getDate());return n.state={listSupplier:[],tanggal:s,bonBayar:"",detail:"",tanggalInvoice:"",noPembayaran:"",supplier:"",hutangnya:[]},n}return Object(n.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(O.f)()),this.props.dispatch(Object(m.e)()),this.props.dispatch(Object(m.f)()),this.props.change("tanggal",B.b),this.props.change("totalBayar",this.props.totalBayar),this.props.change("totalBayarCash",this.props.totalBayarRp),this.setTotalBayar()}},{key:"handleSubmit",value:function(a){var t=this,e={kode_jenis:a.kodeBarang.split("|")[0],netto:a.netto,bruto:a.bruto,kadar_transaksi:a.kadarTransaksi},r={jenis:"CIOK",gross:a.bruto,harga:"-",kadar:a.kadarTransaksi,netto:parseFloat(a.netto).toFixed(3),pkg:"",gwpkg:""};this.props.dispatch(Object(E.t)());var o=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];o.push(r),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(o));var n=JSON.parse(localStorage.getItem("ciokTemp"))||[];n.push(e),localStorage.setItem("ciokTemp",JSON.stringify(n));var l=JSON.parse(localStorage.getItem("alatBayarCiok"))||[];l.push(e),localStorage.setItem("alatBayarCiok",JSON.stringify(l)),this.props.dispatch(Object(m.e)()),this.setTotalBayar(),u.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(E.k)())}))}},{key:"handleSubmit2",value:function(a){var t=this,e={kode_jenis:a.kodeBarang.split("|")[0],netto:a.netto,bruto:a.bruto,kadar_transaksi:a.kadarTransaksi},r={jenis:"RONGSOK",gross:a.bruto,harga:"-",kadar:a.kadarTransaksi,netto:parseFloat(a.netto).toFixed(3),pkg:"",gwpkg:""};this.props.dispatch(Object(E.t)());var o=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];o.push(r),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(o));var n=JSON.parse(localStorage.getItem("rongsokTemp"))||[];n.push(e),localStorage.setItem("rongsokTemp",JSON.stringify(n));var l=JSON.parse(localStorage.getItem("alatBayarRosok"))||[];l.push(e),localStorage.setItem("alatBayarRosok",JSON.stringify(l)),this.props.dispatch(Object(m.f)()),this.setTotalBayar(),u.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(E.k)())}))}},{key:"setCiok",value:function(){this.props.change("ciokBrutto",this.props.totalCiok),this.props.change("ciokNetto",this.props.totalCiok),this.setTotalBayar()}},{key:"setRongsok",value:function(){this.props.change("rongsokBruto",this.props.totalRongsok),this.props.change("rongsokNetto",this.props.totalRongsok),this.props.change("totalBayar",this.props.totalBayar)}},{key:"handleSubmitCash",value:function(a){var t=[],e={cash_rp:a.cash,harga_emas:a.harga,cash_netto:a.cashNetto},r={jenis:"TUNAI",gross:a.cash,harga:a.harga,kadar:"",netto:parseFloat(a.cashNetto).toFixed(3),pkg:"",gwpkg:""},o=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];o.push(r),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(o)),t.push(e),localStorage.setItem("totalTunaiRp",a.cashNetto),localStorage.setItem("alatBayarTunai",JSON.stringify(t)),this.setTotalBayar(),u.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Disimpan",showConfirmButton:!1,timer:1500})}},{key:"handleSubmitCashRp",value:function(a){var t={cash_rp:a.cash,harga_emas:a.harga,cash_netto:a.cashNetto},e=JSON.parse(localStorage.getItem("cashTempRp"))||[];e.push(t),localStorage.setItem("cashTempRp",JSON.stringify(e));var r=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))||[];r.push(t),localStorage.setItem("alatBayarTunaiRp",JSON.stringify(r)),this.props.dispatch(Object(S.i)()),u.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"handleSubmitTransfer",value:function(a){var t=[],e={harga_emas:a.harga,transfer_netto:a.transferNetto,transfer_rp:a.transfer,acc_from:a.supplier,acc_to:a.tujuan,tanggal_transfer:a.tanggal},r={jenis:"TRANSFER",gross:a.transfer,harga:a.harga,kadar:"",netto:parseFloat(a.transferNetto).toFixed(3),pkg:"",gwpkg:""},o=JSON.parse(localStorage.getItem("PrintPembayaranSupplier"))||[];o.push(r),localStorage.setItem("PrintPembayaranSupplier",JSON.stringify(o)),t.push(e),localStorage.setItem("totalTrfRp",a.transferNetto),localStorage.setItem("alatBayarTrf",JSON.stringify(t)),this.setTotalBayar(),u.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Disimpan",showConfirmButton:!1,timer:1500})}},{key:"handleSubmitTransferRp",value:function(a){console.log(a);var t={harga_emas:a.harga,transfer_netto:a.transferNetto,transfer_rp:a.transfer,acc_from:a.supplier,acc_to:a.tujuan,tanggal_transfer:a.tanggal},e=JSON.parse(localStorage.getItem("transferTempRp"))||[];e.push(t),localStorage.setItem("transferTempRp",JSON.stringify(e));var r=JSON.parse(localStorage.getItem("alatBayarTrfRp"))||[];r.push(t),localStorage.setItem("alatBayarTrfRp",JSON.stringify(r)),this.props.dispatch(Object(S.l)()),u.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"setTotalBayar",value:function(){var a=localStorage.getItem("totalTunaiRp")||0,t=localStorage.getItem("totalTrfRp")||0,e=localStorage.getItem("totalCiok")||0,r=localStorage.getItem("totalRongsok")||0,o=this.props.tambahan||0;this.props.change("totalCash",a),this.props.change("totalTransfer",t),this.props.change("totalCiok",e),this.props.change("totalRongsok",r),this.props.change("totalBayar",(parseFloat(a)+parseFloat(t)+parseFloat(e)+parseFloat(r)+o).toFixed(3)),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"col-lg-12",style:{color:"black"}},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},"BARANG"===this.props.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement(i.Suspense,{fallback:c.a.createElement(N.a,{width:"100%",height:50})},c.a.createElement(C,{onSubmit:function(t){return a.handleSubmitCash(t)}}),c.a.createElement(j,{onSubmit:function(t){return a.handleSubmitTransfer(t)}})),c.a.createElement(i.Suspense,{fallback:c.a.createElement(N.a,{width:"100%",height:50})},c.a.createElement(F,{totalCiok:this.props.totalCiok,totalBrutoCiok:this.props.totalBrutoCiok})),c.a.createElement(i.Suspense,{fallback:c.a.createElement(N.a,{width:"100%",height:50})},c.a.createElement(J,{totalRongsok:this.props.totalRongsok,totalBrutoRongsok:this.props.totalBrutoRongsok}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(i.Suspense,{fallback:c.a.createElement(N.a,{width:"100%",height:50})},c.a.createElement(_,{onSubmit:function(t){return a.handleSubmitCashRp(t)}}),c.a.createElement(D,{onSubmit:function(t){return a.handleSubmitTransferRp(t)}}))))),c.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(g.a,{name:"tanggal",label:"Tanggal",type:"date",component:y.a,defaultValue:this.state.tanggal,onChange:this.changeInput("tanggalInvoice")})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(g.a,{name:"supplier",label:"Supplier",className:"form-control",component:y.b,options:this.props.supplier.map((function(a){return{value:a.kode_supplier,name:a.nama_supplier}})),defaultValue:"DEFAULT | DEFAULT"})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(g.a,{name:"noBon",label:"Bon Titip",type:"txt",component:y.a,onChange:this.changeInput("noPembayaran")})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(g.a,{name:"detail",label:"Detail",type:"text",component:y.a})),"BARANG"===this.props.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"row p-3"},c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalCash",label:"Denda",type:"number",component:y.a}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalTransfer",label:"Denda",type:"number",component:y.a}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalCiok",label:"Denda",type:"number",component:y.a}))),c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalRongsok",label:"Denda",type:"number",component:y.a}))))))):null,c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"row p-3"},c.a.createElement("div",{className:"BARANG"===this.props.jenisTransaksi?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(g.a,{name:"totalBayar",label:"Total Titip",type:"number",component:y.a}))),c.a.createElement("div",{className:"BARANG"!==this.props.jenisTransaksi?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Total Bayar Rp"),c.a.createElement(g.a,Object.assign({name:"totalBayarCash",label:"Total Titip Rp",type:"telp",component:"input",className:"form-control",onBlur:this.props.change("totalBayarCash",this.props.totalBayarRp)},w))))))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"})),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))),c.a.createElement(T,{content:"CIOK"===this.props.tipeBayarModal?c.a.createElement(i.Suspense,{fallback:c.a.createElement(N.a,{width:"100%",height:50,count:5})},c.a.createElement(R,{onSubmit:function(t){return a.handleSubmit(t)},from:"CK",data:this.props.tampungCiok,onSend:this.props.onSend})):c.a.createElement(i.Suspense,{fallback:c.a.createElement(N.a,{width:"100%",height:50,count:5})},c.a.createElement(I,{onSubmit:function(t){return a.handleSubmit2(t)},from:"RSK",data:this.props.tampungRongsok,onSend:this.props.onSend})),title:"CIOK"===this.props.tipeBayarModal?"Tambah Data Ciok":"Tambah Data Rongsok"}))}}]),e}(i.Component);P=Object(d.a)({form:"TitipanSupplierHead",enableReinitialize:!0,validate:v.a})(P);var x=Object(f.a)("TitipanSupplierHead");t.default=Object(p.b)((function(a){var t=x(a,"harga","cash","transfer","totalCash","totalTransfer","totalCiok","totalRongsok","tanggal"),e=t.harga,r=t.cash,o=t.transfer,n=t.totalCash,l=t.totalTransfer,s=t.totalCiok,i=t.totalRongsok,c=t.tanggal,p=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):0,m=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))?JSON.parse(localStorage.getItem("alatBayarTunaiRp")):0,h=void 0===m[0]?0:m[0].cash_netto,u=void 0===p[0]?0:p[0].transfer_netto;return{tanggal:c,supplier:a.provinsi.supplier,tipeBayarModal:a.provinsi.tipeBayarModal,onSend:a.provinsi.onSend,cashNetto:(parseFloat(r)/parseFloat(e)).toFixed(3),transferNetto:(parseFloat(o)/parseFloat(e)).toFixed(3),totalBayar:(parseFloat(n)+parseFloat(l)+parseFloat(s)+parseFloat(i)).toFixed(3),totalBayarRp:parseFloat(h)+parseFloat(u),dataHutangSupplier:a.provinsi.dataHutangSupplier}}))(P)}}]);
//# sourceMappingURL=139.1db8b7ae.chunk.js.map