(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[73,22,23],{1126:function(e,a,t){"use strict";t.r(a);var r=t(35),n=t(36),l=t(38),o=t(37),s=t(0),c=t.n(s),i=t(18),m=t(466),p=t(467),h=t(469),u=t(33),g=t(10),d=t.n(g),f=t(566),N=t(567),b=t(185),E=t(3),y=t(21),v=t(23),S=t.n(v),O=t(190),T=Object(s.lazy)((function(){return t.e(15).then(t.bind(null,618))})),k=Object(s.lazy)((function(){return t.e(16).then(t.bind(null,617))})),B=Object(s.lazy)((function(){return t.e(11).then(t.bind(null,569))})),R=Object(s.lazy)((function(){return t.e(12).then(t.bind(null,570))})),I=Object(b.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),j=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={listSupplier:[]},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=new Date,t="".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate());this.props.change("tanggal",t),Object(E.b)("suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return console.log(e)})),this.setCiok(),this.setRongsok(),this.props.change("tanggal",O.b)}},{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNetto),this.props.change("transferNetto",this.props.transferNetto)}},{key:"setCiok",value:function(){this.props.change("ciokBrutto",this.props.totalBrutoCiok),this.props.change("ciokNetto",this.props.totalCiok)}},{key:"setRongsok",value:function(){this.props.change("rongsokBruto",this.props.totalBrutoRongsok),this.props.change("rongsokNetto",this.props.totalRongsok),this.props.change("noTitip",this.props.noFaktur)}},{key:"handleSubmitCash",value:function(e){var a={tunaiRp:e.cash,tunaiKurs:e.harga,tunaiTipe:"BON GR",tunaiNetto:e.cashNetto},t=JSON.parse(localStorage.getItem("cashTemp"))||[];t.push(a),localStorage.setItem("cashTemp",JSON.stringify(t));var r=JSON.parse(localStorage.getItem("alatBayarTunai"))||[];r.push(a),localStorage.setItem("alatBayarTunai",JSON.stringify(r)),this.props.dispatch(Object(u.i)()),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayar",this.props.totalBayar)}},{key:"handleSubmitCashRp",value:function(e){var a={tunaiRp:e.cash,tunaiKurs:e.harga,tunaiTipe:"BON GR",tunaiNetto:e.cashNetto},t=JSON.parse(localStorage.getItem("cashTempRp"))||[];t.push(a),localStorage.setItem("cashTempRp",JSON.stringify(t));var r=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))||[];r.push(a),localStorage.setItem("alatBayarTunaiRp",JSON.stringify(r)),this.props.dispatch(Object(u.i)()),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"handleSubmitTransfer",value:function(e){var a={transferKurs:e.harga,transferNetto:e.transferNetto,transferRp:e.transfer,transferTipe:e.kriteria,accFrom:e.supplier,accTo:e.tujuan,transferTanggalJanji:e.tanggal},t=JSON.parse(localStorage.getItem("transferTemp"))||[];t.push(a),localStorage.setItem("transferTemp",JSON.stringify(t));var r=JSON.parse(localStorage.getItem("alatBayarTrf"))||[];r.push(a),localStorage.setItem("alatBayarTrf",JSON.stringify(r)),this.props.dispatch(Object(u.l)()),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayar",this.props.totalBayar)}},{key:"handleSubmitTransferRp",value:function(e){var a={transferKurs:e.harga,transferNetto:e.transferNetto,transferRp:e.transfer,transferTipe:e.kriteria,accFrom:e.supplier,accTo:e.tujuan,transferTanggalJanji:e.tanggal},t=JSON.parse(localStorage.getItem("transferTempRp"))||[];t.push(a),localStorage.setItem("transferTempRp",JSON.stringify(t));var r=JSON.parse(localStorage.getItem("alatBayarTrfRp"))||[];r.push(a),localStorage.setItem("alatBayarTrfRp",JSON.stringify(r)),this.props.dispatch(Object(u.l)()),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"setTotal",value:function(){this.props.change("totalBayar",this.props.totalBayar),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},"rupiah"===this.props.from?c.a.createElement(c.a.Fragment,null,c.a.createElement(s.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:100})},c.a.createElement(T,{onSubmit:function(a){return e.handleSubmitCash(a)}})),c.a.createElement(s.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:100})},c.a.createElement(k,{onSubmit:function(a){return e.handleSubmitTransfer(a)}})),c.a.createElement(s.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:100})},c.a.createElement(B,{totalCiok:this.props.totalCiok,totalBrutoCiok:this.props.totalBrutoCiok})),c.a.createElement(s.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:100})},c.a.createElement(R,{totalRongsok:this.props.totalRongsok,totalBrutoRongsok:this.props.totalBrutoRongsok}))):c.a.createElement(c.a.Fragment,null,c.a.createElement(s.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:100})},c.a.createElement(f.default,{onSubmit:function(a){return e.handleSubmitCashRp(a)}})),c.a.createElement(s.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:100})},c.a.createElement(N.default,{onSubmit:function(a){return e.handleSubmitTransferRp(a)}})))),c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4 d-none"},c.a.createElement(m.a,{name:"noTitip",component:y.a,type:"text",label:"No Titip",readOnly:!0})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,{name:"tanggal",label:"Tanggal",type:"date",component:y.a})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,{name:"supplier",className:"form-control",component:y.b,label:"Supplier",options:this.state.listSupplier.map((function(e){return{value:e.kodeSupplier+"|"+e.namaSupplier,name:e.namaSupplier}}))})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,{name:"kriteria",className:"form-control",component:y.b,label:"Kriteria",options:"rupiah"===this.props.from?[{value:"TAMBAH TITIPAN RP",name:"TAMBAH TITIPAN"},{value:"TARIK TITIPAN RP",name:"TARIK TITIPAN"}]:[{value:"TAMBAH TITIPAN GR",name:"TAMBAH TITIPAN"},{value:"TARIK TITIPAN GR",name:"TARIK TITIPAN"}]})),c.a.createElement("div",{className:"rupiah"===this.props.from?"col-lg-4 col-md-4 mt-3":"col-lg-4 col-md-4 mt-3 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement(m.a,{name:"totalBayar",label:"Total Gram",type:"number",component:y.a,onBlur:this.setTotal(),readOnly:!0}))),c.a.createElement("div",{className:"rupiah"!==this.props.from?"col-lg-4 col-md-4 mt-3":"col-lg-4 col-md-4 mt-3 d-none"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Total Bayar Rp"),c.a.createElement(m.a,Object.assign({name:"totalBayarCash",label:"Total Rp",type:"telp",component:"input",readOnly:!0,className:"form-control",onBlur:this.setTotal()},I)))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))))))}}]),t}(s.Component);j=Object(p.a)({form:"TitipanRupiah",enableReinitialize:!0})(j);var F=Object(h.a)("TitipanRupiah");a.default=Object(i.b)((function(e){var a=F(e,"harga","cash","transfer"),t=a.harga,r=a.cash,n=a.transfer,l=JSON.parse(localStorage.getItem("alatBayarTrf"))?JSON.parse(localStorage.getItem("alatBayarTrf")):0,o=JSON.parse(localStorage.getItem("alatBayarTunai"))?JSON.parse(localStorage.getItem("alatBayarTunai")):0,s=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):0,c=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))?JSON.parse(localStorage.getItem("alatBayarTunaiRp")):0,i=JSON.parse(localStorage.getItem("totalCiok"))?JSON.parse(localStorage.getItem("totalCiok")):0,m=JSON.parse(localStorage.getItem("totalRongsok"))?JSON.parse(localStorage.getItem("totalRongsok")):0,p=void 0===o[0]?0:o[0].tunaiNetto,h=void 0===l[0]?0:l[0].transferNetto,u=void 0===c[0]?0:c[0].tunaiNetto,g=void 0===s[0]?0:s[0].transferNetto;return{cashNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),transferNetto:(parseFloat(n)/parseFloat(t)).toFixed(3),totalBayar:(parseFloat(p)+parseFloat(h)+parseFloat(i)+parseFloat(m)).toFixed(3),totalBayarRp:(parseFloat(u)+parseFloat(g)).toFixed(3)}}))(j)},566:function(e,a,t){"use strict";t.r(a);var r=t(35),n=t(36),l=t(38),o=t(37),s=t(0),c=t.n(s),i=t(185),m=t(466),p=t(467),h=t(469),u=t(18),g=Object(i.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),d=function(e){var a=e.input,t=e.label,r=e.type,n=e.limit,l=e.readOnly,o=e.meta,s=o.touched,i=o.error,m=o.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:n,readOnly:l})),s&&(i&&c.a.createElement("p",{className:"invalid-feedback"},i)||m&&c.a.createElement("p",null,m)))},f=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=0,a=0,t=0,r=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))?JSON.parse(localStorage.getItem("alatBayarTunaiRp")):"kosong";"kosong"===r?(e=0,a=0,t=0):(e=r[0].cash_rp,a=r[0].harg_emas,t=r[0].cash_netto),this.props.change("cash",e),this.props.change("harga",a),this.props.change("cashNetto",t)}},{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNettoMurni)}},{key:"render",value:function(){return c.a.createElement("div",{className:"col-lg-6 mt-3"},c.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},c.a.createElement("div",{className:"card mb-0 bg-dark"},c.a.createElement("div",{className:"card-header ",id:"headingOne"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8"},c.a.createElement("h5",{className:"m-0"},c.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseCash","aria-expanded":"true","aria-controls":"collapseCash"},"Cash"))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),c.a.createElement(m.a,Object.assign({name:"cashNetto",type:"telp",component:"input",className:"form-control",readOnly:!0},g))))),c.a.createElement("div",{id:"collapseCash",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},c.a.createElement("div",{className:"card-body bg-white"},c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Cash"),c.a.createElement(m.a,Object.assign({name:"cash",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},g))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Harga "),c.a.createElement("div",{className:"form-gorup"},c.a.createElement(m.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange(),readOnly:!0},g)))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(m.a,Object.assign({name:"cashNetto",label:"Netto",type:"telp",component:d,readOnly:!0},g))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Simpan"))))))))))}}]),t}(s.Component);f=Object(p.a)({form:"AccordCashMurni",enableReinitialize:!0})(f);var N=Object(h.a)("AccordCashMurni");a.default=Object(u.b)((function(e){var a=N(e,"harga","cash"),t=a.harga,r=a.cash;return{cashNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),cashNettoMurni:parseFloat(r)}}))(f)},567:function(e,a,t){"use strict";t.r(a);var r=t(35),n=t(36),l=t(38),o=t(37),s=t(0),c=t.n(s),i=t(185),m=t(466),p=t(467),h=t(469),u=t(18),g=(t(61),t(120)),d=Object(i.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),f=function(e){var a=e.input,t=e.label,r=e.type,n=e.limit,l=e.readOnly,o=e.meta,s=o.touched,i=o.error,m=o.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:n,readOnly:l})),s&&(i&&c.a.createElement("p",{className:"invalid-feedback"},i)||m&&c.a.createElement("p",null,m)))},N=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={listBank:[]},n}return Object(n.a)(t,[{key:"onChange",value:function(){this.props.change("transferNetto",this.props.transferNettoMurni)}},{key:"getlocal",value:function(){var e=0,a=0,t=0,r="",n="",l="",o=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):"kosong";"kosong"===o?(e=0,a=0,t=0,r="",n="",l=""):(e=o[0].transfer_rp,a=o[0].harga_emas,t=o[0].transfer_netto,r=o[0].acc_to,n=o[0].acc_from,l=o[0].tanggal_transfer),this.props.change("transfer",e),this.props.change("harga",a),this.props.change("transferNetto",t),this.props.change("tanggal",l),this.props.change("tujuan",r),this.props.change("supplier",n)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(g.d)()),this.getlocal()}},{key:"render",value:function(){return c.a.createElement("div",{className:"col-lg-6 mt-3"},c.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},c.a.createElement("div",{className:"card mb-0 bg-dark"},c.a.createElement("div",{className:"card-header",id:"headingOne"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-md-8"},c.a.createElement("h5",{className:"m-0"},c.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseTransfer","aria-expanded":"true","aria-controls":"collapseTransfer"},"Transfer",c.a.createElement("span",{className:"float-right"},c.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),c.a.createElement(m.a,Object.assign({name:"transferNetto",type:"telp",component:"input",className:"form-control",readOnly:!0},d))))),c.a.createElement("div",{id:"collapseTransfer",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},c.a.createElement("div",{className:"card-body bg-white"},c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Transfer"),c.a.createElement(m.a,Object.assign({name:"transfer",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},d)))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Harga "),c.a.createElement("div",{className:"form-gorup"},c.a.createElement(m.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange(),readOnly:!0},d)))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Netto "),c.a.createElement(m.a,Object.assign({name:"transferNetto",label:"Netto",type:"tel",className:"form-control",component:"input",readOnly:!0},d))),c.a.createElement("div",{className:"col-md-6 col-lg-6"},c.a.createElement(m.a,{name:"tujuan",label:"A/C Tujuan",type:"text",component:f})),c.a.createElement("div",{className:"col-md-6 col-lg-6"},c.a.createElement("label",{htmlFor:""},"A/C Asal"),c.a.createElement(m.a,{name:"supplier",className:"form-control",component:"select"},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),this.props.rekening.map((function(e){return c.a.createElement("option",{value:e.no_rekening,key:e.no_rekening},e.atas_nama)})))),c.a.createElement("div",{className:"col-md-6 col-lg-6"},c.a.createElement(m.a,{name:"tanggal",label:"Tanggal",type:"date",component:f})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))))))}}]),t}(s.Component);N=Object(p.a)({form:"AccordTransferMurni",enableReinitialize:!0})(N);var b=Object(h.a)("AccordTransferMurni");a.default=Object(u.b)((function(e){var a=b(e,"harga","transfer"),t=a.harga,r=a.transfer;return{transferNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),transferNettoMurni:parseFloat(r),rekening:e.provinsi.rekening}}))(N)}}]);
//# sourceMappingURL=73.ab2ce101.chunk.js.map