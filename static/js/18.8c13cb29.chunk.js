(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[18,22,23],{566:function(e,a,t){"use strict";t.r(a);var n=t(35),r=t(36),l=t(38),o=t(37),c=t(0),s=t.n(c),m=t(185),i=t(466),p=t(467),u=t(469),d=t(18),g=Object(m.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),h=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,l=e.readOnly,o=e.meta,c=o.touched,m=o.error,i=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:l})),c&&(m&&s.a.createElement("p",{className:"invalid-feedback"},m)||i&&s.a.createElement("p",null,i)))},b=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=0,a=0,t=0,n=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))?JSON.parse(localStorage.getItem("alatBayarTunaiRp")):"kosong";"kosong"===n?(e=0,a=0,t=0):(e=n[0].cash_rp,a=n[0].harg_emas,t=n[0].cash_netto),this.props.change("cash",e),this.props.change("harga",a),this.props.change("cashNetto",t)}},{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNettoMurni)}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-6 mt-3"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header ",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseCash","aria-expanded":"true","aria-controls":"collapseCash"},"Cash"))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(i.a,Object.assign({name:"cashNetto",type:"telp",component:"input",className:"form-control",readOnly:!0},g))))),s.a.createElement("div",{id:"collapseCash",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Cash"),s.a.createElement(i.a,Object.assign({name:"cash",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},g))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Harga "),s.a.createElement("div",{className:"form-gorup"},s.a.createElement(i.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange(),readOnly:!0},g)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(i.a,Object.assign({name:"cashNetto",label:"Netto",type:"telp",component:h,readOnly:!0},g))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Simpan"))))))))))}}]),t}(c.Component);b=Object(p.a)({form:"AccordCashMurni",enableReinitialize:!0})(b);var N=Object(u.a)("AccordCashMurni");a.default=Object(d.b)((function(e){var a=N(e,"harga","cash"),t=a.harga,n=a.cash;return{cashNetto:(parseFloat(n)/parseFloat(t)).toFixed(3),cashNettoMurni:parseFloat(n)}}))(b)},567:function(e,a,t){"use strict";t.r(a);var n=t(35),r=t(36),l=t(38),o=t(37),c=t(0),s=t.n(c),m=t(185),i=t(466),p=t(467),u=t(469),d=t(18),g=(t(61),t(120)),h=Object(m.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),b=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,l=e.readOnly,o=e.meta,c=o.touched,m=o.error,i=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:l})),c&&(m&&s.a.createElement("p",{className:"invalid-feedback"},m)||i&&s.a.createElement("p",null,i)))},N=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={listBank:[]},r}return Object(r.a)(t,[{key:"onChange",value:function(){this.props.change("transferNetto",this.props.transferNettoMurni)}},{key:"getlocal",value:function(){var e=0,a=0,t=0,n="",r="",l="",o=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):"kosong";"kosong"===o?(e=0,a=0,t=0,n="",r="",l=""):(e=o[0].transfer_rp,a=o[0].harga_emas,t=o[0].transfer_netto,n=o[0].acc_to,r=o[0].acc_from,l=o[0].tanggal_transfer),this.props.change("transfer",e),this.props.change("harga",a),this.props.change("transferNetto",t),this.props.change("tanggal",l),this.props.change("tujuan",n),this.props.change("supplier",r)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(g.d)()),this.getlocal()}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-6 mt-3"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseTransfer","aria-expanded":"true","aria-controls":"collapseTransfer"},"Transfer",s.a.createElement("span",{className:"float-right"},s.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(i.a,Object.assign({name:"transferNetto",type:"telp",component:"input",className:"form-control",readOnly:!0},h))))),s.a.createElement("div",{id:"collapseTransfer",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Transfer"),s.a.createElement(i.a,Object.assign({name:"transfer",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},h)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Harga "),s.a.createElement("div",{className:"form-gorup"},s.a.createElement(i.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange(),readOnly:!0},h)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Netto "),s.a.createElement(i.a,Object.assign({name:"transferNetto",label:"Netto",type:"tel",className:"form-control",component:"input",readOnly:!0},h))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(i.a,{name:"tujuan",label:"A/C Tujuan",type:"text",component:b})),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement("label",{htmlFor:""},"A/C Asal"),s.a.createElement(i.a,{name:"supplier",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),this.props.rekening.map((function(e){return s.a.createElement("option",{value:e.no_rekening,key:e.no_rekening},e.atas_nama)})))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(i.a,{name:"tanggal",label:"Tanggal",type:"date",component:b})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))))))}}]),t}(c.Component);N=Object(p.a)({form:"AccordTransferMurni",enableReinitialize:!0})(N);var f=Object(u.a)("AccordTransferMurni");a.default=Object(d.b)((function(e){var a=f(e,"harga","transfer"),t=a.harga,n=a.transfer;return{transferNetto:(parseFloat(n)/parseFloat(t)).toFixed(3),transferNettoMurni:parseFloat(n),rekening:e.provinsi.rekening}}))(N)},745:function(e,a,t){"use strict";t.r(a);var n=t(35),r=t(36),l=t(38),o=t(37),c=t(0),s=t.n(c),m=t(185),i=t(466),p=t(467),u=t(469),d=t(18),g=t(566),h=t(567),b=t(61),N=t.n(b),f=Object(m.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),E=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,l=e.readOnly,o=e.meta,c=o.touched,m=o.error,i=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:l})),c&&(m&&s.a.createElement("p",{className:"invalid-feedback"},m)||i&&s.a.createElement("p",null,i)))},v=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={listBank:[]},r}return Object(r.a)(t,[{key:"onChange",value:function(){this.props.change("giroNetto",this.props.transferNettoMurni)}},{key:"getlocal",value:function(){var e=0,a=0,t=0,n="",r="",l="",o=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):"kosong";"kosong"===o?(e=0,a=0,t=0,n="",r="",l=""):(e=o[0].transferRp,a=o[0].transferKurs,t=o[0].transferKurs,n=o[0].accTo,r=o[0].accFrom,l=o[0].transferTanggalJanji),this.props.change("giro",e),this.props.change("harga",a),this.props.change("giroNetto",t),this.props.change("tanggal",l),this.props.change("tujuan",n),this.props.change("supplier",r)}},{key:"componentDidMount",value:function(){var e=this;N.a.get("https://147.139.193.169:3759/api/v1/banks").then((function(a){return e.setState({listBank:a.data})})).catch((function(e){return console.log(e)})).then((function(){return e.getlocal()}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-6 mt-3"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseGiroMurni","aria-expanded":"true","aria-controls":"collapseGiroMurni"},"Transfer",s.a.createElement("span",{className:"float-right"},s.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(i.a,Object.assign({name:"giroNetto",type:"telp",component:"input",className:"form-control",readOnly:!0},f))))),s.a.createElement("div",{id:"collapseGiroMurni",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Jumlah Giro"),s.a.createElement(i.a,Object.assign({name:"giro",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},f))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Harga "),s.a.createElement("div",{className:"form-gorup"},s.a.createElement(i.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange(),readOnly:!0},f)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Netto "),s.a.createElement(i.a,Object.assign({name:"giroNetto",label:"Netto",type:"tel",className:"form-control",component:"input",readOnly:!0},f))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(i.a,{name:"noGiro",label:"Nomor Giro",type:"text",component:E})),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(i.a,{name:"bankGiro",label:"Nama Bank Giro",type:"text",component:E})),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement("label",{htmlFor:""},"A/C Tujuan"),s.a.createElement(i.a,{name:"kodeBank",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),this.state.listBank.map((function(e){return s.a.createElement("option",{value:e.noRekening,key:e.noRekening},e.namaBank)})))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(i.a,{name:"tanggal",label:"Tanggal",type:"date",component:E})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))))))}}]),t}(c.Component);v=Object(p.a)({form:"AccordGiroMurni",enableReinitialize:!0})(v);var y=Object(u.a)("AccordGiroMurni"),O=Object(d.b)((function(e){var a=y(e,"harga","giro"),t=a.harga,n=a.giro;return{transferNetto:(parseFloat(n)/parseFloat(t)).toFixed(3),transferNettoMurni:parseFloat(n)}}))(v),k=t(10),j=t.n(k),B=t(60),S=Object(m.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),T=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"setCash",value:function(e){var a=this,t={tunaiRp:e.cash,tunaiNetto:e.cashNetto,tunaiKurs:0,tunaiTipe:"RUPIAH"},n=[];n.push(t),localStorage.setItem("cashLM",e.cashNetto),localStorage.setItem("alatBayarTunaiLM",JSON.stringify(n)),j.a.fire({position:"top-right",icon:"success",text:"Pembayaran berhasil",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(B.k)())}))}},{key:"setTransfer",value:function(e){var a=this,t={transferRp:e.transfer,transferNetto:e.transfernetto,transferKurs:0,transferTanggalJanji:e.tanggal,transferTipe:"-",accFrom:e.kodebank,accTo:e.tujuan},n=[];n.push(t),localStorage.setItem("alatBayarTrfLM",JSON.stringify(n)),localStorage.setItem("transferLM",e.transfernetto),j.a.fire({position:"top-right",icon:"success",text:"Pembayaran berhasil",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(B.k)())}))}},{key:"setGiro",value:function(e){var a=this,t={girorRp:e.giro,giroNetto:e.giroNetto,giroKurs:0,giroTanggalJanji:e.tanggal,giroBank:e.bankGiro,giroTipe:"-"},n=[];n.push(t),localStorage.setItem("giroLM",e.giroNetto),localStorage.setItem("alatBayarGiroLM",JSON.stringify(n)),j.a.fire({position:"top-right",icon:"success",text:"Pembayaran berhasil",showConfirmButton:!1,timer:1500}).then((function(){return a.props.dispatch(Object(B.k)())}))}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=JSON.parse(localStorage.getItem("alatBayarGiroLM")),a=JSON.parse(localStorage.getItem("alatBayarTunaiLM")),t=JSON.parse(localStorage.getItem("alatBayarTrfLM")),n=null===e?0:e[0].giroNetto,r=null===a?0:a[0].tunaiNetto,l=null===t?0:t[0].transferRp;this.props.change("totalBayar",n+r+l)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"row"},s.a.createElement(g.default,{onSubmit:function(a){return e.setCash(a)}}),s.a.createElement(h.default,{onSubmit:function(a){return e.setTransfer(a)}}),s.a.createElement(O,{onSubmit:function(a){return e.setGiro(a)}}),s.a.createElement("div",{className:"col-lg-6"}),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Total Bon (Rp)"),s.a.createElement(i.a,Object.assign({name:"totalBon",label:"Total Bon (Rp)",component:"input",type:"telp",className:"form-control"},S,{onBlur:this.props.change("totalBon",this.props.totalBon)}))),s.a.createElement("div",{className:"col-lg-4 d-none"},s.a.createElement("label",{htmlFor:""},"Total Bon (Rp)"),s.a.createElement(i.a,Object.assign({name:"noBon",label:"Total Bon (Rp)",component:"input",type:"telp",className:"form-control"},S,{onBlur:this.props.change("noBon",this.props.noBon)}))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Total Bayar (Rp)"),s.a.createElement(i.a,Object.assign({name:"totalBayar",label:"Total Bayar (Rp)",component:"input",type:"telp",className:"form-control"},S,{onBlur:this.update()}))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Total Bon (Rp)"),s.a.createElement(i.a,Object.assign({name:"sisaBon",label:"Sisa Bon (Rp)",component:"input",type:"telp",className:"form-control"},S,{onBlur:this.props.change("sisaBon",this.props.sisaBon)}))),s.a.createElement("div",{className:"col-lg-12 mt-4"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Simpan")))))))))}}]),t}(c.Component);T=Object(p.a)({form:"FormModalPembayaranPembelianLM",enableReinitialize:!0})(T);var F=Object(u.a)("FormModalPembayaranPembelianLM");a.default=Object(d.b)((function(e){var a=F(e,"totalBon","totalBayar"),t=a.totalBon,n=a.totalBayar;return{sisaBon:parseFloat(t)-parseFloat(n)}}))(T)}}]);
//# sourceMappingURL=18.8c13cb29.chunk.js.map