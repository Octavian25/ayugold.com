(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[40,11,12,15,16,17,18],{1201:function(e,a,t){"use strict";t.r(a);var r=t(35),l=t(36),n=t(38),o=t(37),c=t(0),s=t.n(c),i=t(18),m=t(467),p=t(468),h=t(470),d=t(67),u=t.n(d),g=t(619),N=t(618),b=t(568),f=t(569),E=t(33),v=t(10),y=t.n(v),k=t(578),O=t(579),S=t(185),F=Object(S.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),j="http://192.168.1.27:7002/api/v1/",B=function(e){var a=e.input,t=e.label,r=e.type,l=e.limit,n=e.readOnly,o=e.meta,c=o.touched,i=o.error,m=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:n})),c&&(i&&s.a.createElement("p",{className:"invalid-feedback"},i)||m&&s.a.createElement("p",null,m)))},T=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={listSupplier:[],listLokasi:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=new Date,t="".concat(a.getFullYear(),"-").concat(a.getMonth()+1,"-").concat(a.getDate());this.props.change("tanggal",t),u.a.get(j+"customers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return console.log(e)})),u.a.get(j+"storages2?tipeData=LOKASI").then((function(a){return e.setState({listLokasi:a.data})})).catch((function(){return console.log("GAGAL MENGAMBIL DATA")})),this.setCiok(),this.setRongsok(),this.props.change("noFaktur",this.props.noFaktur)}},{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNetto),this.props.change("transferNetto",this.props.transferNetto)}},{key:"setCiok",value:function(){this.props.change("ciokBrutto",this.props.totalBrutoCiok),this.props.change("ciokNetto",this.props.totalCiok)}},{key:"setRongsok",value:function(){this.props.change("rongsokBruto",this.props.totalBrutoRongsok),this.props.change("rongsokNetto",this.props.totalRongsok),this.props.change("noTitip",this.props.noFaktur)}},{key:"handleSubmitCash",value:function(e){var a={tunaiRp:e.cash,tunaiKurs:e.harga,tunaiTipe:"BON GR",tunaiNetto:e.cashNetto},t=JSON.parse(localStorage.getItem("cashTemp"))||[];t.push(a),localStorage.setItem("cashTemp",JSON.stringify(t));var r=JSON.parse(localStorage.getItem("alatBayarTunai"))||[];r.push(a),localStorage.setItem("alatBayarTunai",JSON.stringify(r)),this.props.dispatch(Object(E.i)()),y.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayar",this.props.totalBayar)}},{key:"handleSubmitCashRp",value:function(e){var a={tunaiRp:e.cash,tunaiKurs:e.harga,tunaiTipe:"BON GR",tunaiNetto:e.cashNetto},t=JSON.parse(localStorage.getItem("cashTempRp"))||[];t.push(a),localStorage.setItem("cashTempRp",JSON.stringify(t));var r=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))||[];r.push(a),localStorage.setItem("alatBayarTunaiRp",JSON.stringify(r)),this.props.dispatch(Object(E.i)()),y.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"handleSubmitTransfer",value:function(e){var a={transferKurs:e.harga,transferNetto:e.transferNetto,transferRp:e.transfer,transferTipe:e.kriteria,accFrom:e.supplier,accTo:e.tujuan,transferTanggalJanji:e.tanggal},t=JSON.parse(localStorage.getItem("transferTemp"))||[];t.push(a),localStorage.setItem("transferTemp",JSON.stringify(t));var r=JSON.parse(localStorage.getItem("alatBayarTrf"))||[];r.push(a),localStorage.setItem("alatBayarTrf",JSON.stringify(r)),this.props.dispatch(Object(E.l)()),y.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayar",this.props.totalBayar)}},{key:"handleSubmitTransferRp",value:function(e){var a={transferKurs:e.harga,transferNetto:e.transferNetto,transferRp:e.transfer,transferTipe:e.kriteria,accFrom:e.supplier,accTo:e.tujuan,transferTanggalJanji:e.tanggal},t=JSON.parse(localStorage.getItem("transferTempRp"))||[];t.push(a),localStorage.setItem("transferTempRp",JSON.stringify(t));var r=JSON.parse(localStorage.getItem("alatBayarTrfRp"))||[];r.push(a),localStorage.setItem("alatBayarTrfRp",JSON.stringify(r)),this.props.dispatch(Object(E.l)()),y.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"setTotal",value:function(){this.props.change("totalBayar",this.props.totalBayar),this.props.change("totalBayarCash",this.props.totalBayarRp)}},{key:"setToko",value:function(e){var a=(e.target.value||"DEFAULT|DEFAULT").split("|");this.props.change("kodeCustomer",a[0]),this.props.change("namaToko",a[1])}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},"rupiah"===this.props.from?s.a.createElement(s.a.Fragment,null,s.a.createElement(g.default,{onSubmit:function(a){return e.handleSubmitCash(a)}}),s.a.createElement(N.default,{onSubmit:function(a){return e.handleSubmitTransfer(a)}}),s.a.createElement(b.default,{totalCiok:this.props.totalCiok,totalBrutoCiok:this.props.totalBrutoCiok}),s.a.createElement(f.default,{totalRongsok:this.props.totalRongsok,totalBrutoRongsok:this.props.totalBrutoRongsok})):s.a.createElement(s.a.Fragment,null,s.a.createElement(k.default,{onSubmit:function(a){return e.handleSubmitCashRp(a)}}),s.a.createElement(O.default,{onSubmit:function(a){return e.handleSubmitTransferRp(a)}}))),s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement(m.a,{name:"noFaktur",component:B,type:"text",label:"No Faktur",readOnly:!0})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(m.a,{name:"tanggal",label:"Tanggal",type:"date",component:B})),s.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},s.a.createElement(m.a,{name:"kodeCustomer",label:"Tanggal",type:"text",component:B})),s.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},s.a.createElement(m.a,{name:"namaToko",label:"Tanggal",type:"date",component:B})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Nama Toko"),s.a.createElement(m.a,{name:"supplier",className:"form-control",component:"select",onChange:function(a){return e.setToko(a)}},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),this.state.listSupplier.map((function(e){return s.a.createElement("option",{value:e.kodeCustomer+"|"+e.namaToko,key:e.kodeCustomer},e.namaToko)})))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement("label",{htmlFor:""},"Lokasi"),s.a.createElement(m.a,{name:"lokasi",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listLokasi.map((function(e){return s.a.createElement("option",{value:e.kodeLokasi,key:e.kodeLokasi},e.namaLokasi)})))),s.a.createElement("div",{className:"col-lg-6"}),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"row p-3"},s.a.createElement("div",{className:"rupiah"===this.props.from?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},s.a.createElement("div",{className:"form-group"},s.a.createElement(m.a,{name:"totalBayar",label:"Total Gram",type:"number",component:B,onBlur:this.setTotal()}))),s.a.createElement("div",{className:"rupiah"!==this.props.from?"col-lg-4 col-md-4":"col-lg-4 col-md-4 d-none"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Total Bayar Rp"),s.a.createElement(m.a,Object.assign({name:"totalBayarCash",label:"Total Rp",type:"telp",component:"input",className:"form-control",onBlur:this.setTotal()},F))))))),s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))}}]),t}(c.Component);T=Object(p.a)({form:"FormBayarPerBon",enableReinitialize:!0})(T);var C=Object(h.a)("FormBayarPerBon");a.default=Object(i.b)((function(e){var a=C(e,"harga","cash","transfer"),t=a.harga,r=a.cash,l=a.transfer,n=JSON.parse(localStorage.getItem("alatBayarTrf"))?JSON.parse(localStorage.getItem("alatBayarTrf")):0,o=JSON.parse(localStorage.getItem("alatBayarTunai"))?JSON.parse(localStorage.getItem("alatBayarTunai")):0,c=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):0,s=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))?JSON.parse(localStorage.getItem("alatBayarTunaiRp")):0,i=JSON.parse(localStorage.getItem("totalCiok"))?JSON.parse(localStorage.getItem("totalCiok")):0,m=JSON.parse(localStorage.getItem("totalRongsok"))?JSON.parse(localStorage.getItem("totalRongsok")):0,p=void 0===o[0]?0:o[0].tunaiNetto,h=void 0===n[0]?0:n[0].transferNetto,d=void 0===s[0]?0:s[0].tunaiNetto,u=void 0===c[0]?0:c[0].transferNetto;return{cashNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),transferNetto:(parseFloat(l)/parseFloat(t)).toFixed(3),totalBayar:(parseFloat(p)+parseFloat(h)+parseFloat(i)+parseFloat(m)).toFixed(3),totalBayarRp:(parseFloat(d)+parseFloat(u)).toFixed(3)}}))(T)},568:function(e,a,t){"use strict";t.r(a);var r=t(35),l=t(36),n=t(38),o=t(37),c=t(0),s=t.n(c),i=t(467),m=t(468),p=t(470),h=t(18),d=t(46),u=function(e){var a=e.input,t=e.label,r=e.type,l=e.limit,n=e.readOnly,o=e.meta,c=o.touched,i=o.error,m=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:n})),c&&(i&&s.a.createElement("p",{className:"invalid-feedback"},i)||m&&s.a.createElement("p",null,m)))},g=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"setCiok",value:function(){this.props.change("ciokBrutto",this.props.totalBrutoCiok),this.props.change("ciokNetto",parseFloat(this.props.totalCiok).toFixed(3))}},{key:"showModalCiok",value:function(){this.props.dispatch(Object(d.h)("CIOK")),this.props.dispatch(Object(d.j)())}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseCiok","aria-expanded":"true","aria-controls":"collapseCiok",onClick:function(){return e.setCiok()}},"Ciok",s.a.createElement("span",{className:"float-right"},s.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(i.a,{name:"ciokNetto",type:"number",component:"input",className:"form-control",readOnly:!0})))),s.a.createElement("div",{id:"collapseCiok",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-2"},s.a.createElement("label",{htmlFor:""},"."),s.a.createElement("button",{className:"btn btn-primary btn-block",type:"button",onClick:function(){return e.showModalCiok()}},"+")),(this.props.totalCiok,s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-lg-5 col-md-5"},s.a.createElement(i.a,{name:"ciokBrutto",label:"Bruto",type:"number",component:u,readOnly:!0,onBlur:this.setCiok()})),s.a.createElement("div",{className:"col-lg-5 col-md-5"},s.a.createElement(i.a,{name:"ciokNetto",label:"Netto",type:"number",component:u,readOnly:!0,onBlur:this.setCiok()}))))))))))}}]),t}(c.Component);g=Object(m.a)({form:"AccordCiok",enableReinitialize:!0})(g);var N=Object(p.a)("AccordCiok");a.default=Object(h.b)((function(e){var a=N(e,"harga","cash"),t=a.harga,r=a.cash;return{cashNetto:(parseFloat(r)/parseFloat(t)).toFixed(3)}}))(g)},569:function(e,a,t){"use strict";t.r(a);var r=t(35),l=t(36),n=t(38),o=t(37),c=t(0),s=t.n(c),i=t(467),m=t(468),p=t(470),h=t(18),d=t(46),u=function(e){var a=e.input,t=e.label,r=e.type,l=e.limit,n=e.readOnly,o=e.meta,c=o.touched,i=o.error,m=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:n})),c&&(i&&s.a.createElement("p",{className:"invalid-feedback"},i)||m&&s.a.createElement("p",null,m)))},g=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.change("rongsokBruto",parseFloat(this.props.totalBrutoRongsok).toFixed(3)),this.props.change("rongsokNetto",parseFloat(this.props.totalRongsok).toFixed(3))}},{key:"setRongsok",value:function(){this.props.change("rongsokBruto",parseFloat(this.props.totalBrutoRongsok).toFixed(3)),this.props.change("rongsokNetto",parseFloat(this.props.totalRongsok).toFixed(3))}},{key:"showRongsokModal",value:function(){this.props.dispatch(Object(d.h)("RONGSOK")),this.props.dispatch(Object(d.j)())}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseRongsok","aria-expanded":"true","aria-controls":"collapseRongsok"},"Rongsok",s.a.createElement("span",{className:"float-right"},s.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(i.a,{name:"rongsokNetto",type:"number",component:"input",className:"form-control",readOnly:!0})))),s.a.createElement("div",{id:"collapseRongsok",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-2"},s.a.createElement("label",{htmlFor:""},"."),s.a.createElement("button",{className:"btn btn-primary btn-block",type:"button",onClick:function(){return e.showRongsokModal()}},"+")),s.a.createElement("div",{className:"col-lg-5 col-md-5"},s.a.createElement(i.a,{name:"rongsokBruto",label:"Brutto",type:"number",component:u,readOnly:!0,onBlur:this.setRongsok()})),s.a.createElement("div",{className:"col-lg-5 col-md-5"},s.a.createElement(i.a,{name:"rongsokNetto",label:"Netto",type:"number",component:u,readOnly:!0,onBlur:this.setRongsok()}))))))," "))}}]),t}(c.Component);g=Object(m.a)({form:"AccordRongsok",enableReinitialize:!0})(g);var N=Object(p.a)("AccordRongsok");a.default=Object(h.b)((function(e){var a=N(e,"harga","cash"),t=a.harga,r=a.cash;return{cashNetto:(parseFloat(r)/parseFloat(t)).toFixed(3)}}))(g)},578:function(e,a,t){"use strict";t.r(a);var r=t(35),l=t(36),n=t(38),o=t(37),c=t(0),s=t.n(c),i=t(185),m=t(467),p=t(468),h=t(470),d=t(18),u=Object(i.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),g=function(e){var a=e.input,t=e.label,r=e.type,l=e.limit,n=e.readOnly,o=e.meta,c=o.touched,i=o.error,m=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:n})),c&&(i&&s.a.createElement("p",{className:"invalid-feedback"},i)||m&&s.a.createElement("p",null,m)))},N=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=0,a=0,t=0,r=JSON.parse(localStorage.getItem("alatBayarTunaiRp"))?JSON.parse(localStorage.getItem("alatBayarTunaiRp")):"kosong";"kosong"===r?(e=0,a=0,t=0):(e=r[0].cash_rp,a=r[0].harg_emas,t=r[0].cash_netto),this.props.change("cash",e),this.props.change("harga",a),this.props.change("cashNetto",t)}},{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNettoMurni)}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-6 mt-3"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header ",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseCash","aria-expanded":"true","aria-controls":"collapseCash"},"Cash"))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(m.a,Object.assign({name:"cashNetto",type:"telp",component:"input",className:"form-control",readOnly:!0},u))))),s.a.createElement("div",{id:"collapseCash",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Cash"),s.a.createElement(m.a,Object.assign({name:"cash",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},u))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Harga "),s.a.createElement("div",{className:"form-gorup"},s.a.createElement(m.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange(),readOnly:!0},u)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(m.a,Object.assign({name:"cashNetto",label:"Netto",type:"telp",component:g,readOnly:!0},u))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Simpan"))))))))))}}]),t}(c.Component);N=Object(p.a)({form:"AccordCashMurni",enableReinitialize:!0})(N);var b=Object(h.a)("AccordCashMurni");a.default=Object(d.b)((function(e){var a=b(e,"harga","cash"),t=a.harga,r=a.cash;return{cashNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),cashNettoMurni:parseFloat(r)}}))(N)},579:function(e,a,t){"use strict";t.r(a);var r=t(35),l=t(36),n=t(38),o=t(37),c=t(0),s=t.n(c),i=t(185),m=t(467),p=t(468),h=t(470),d=t(18),u=t(120),g=Object(i.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),N=function(e){var a=e.input,t=e.label,r=e.type,l=e.limit,n=e.readOnly,o=e.meta,c=o.touched,i=o.error,m=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:n})),c&&(i&&s.a.createElement("p",{className:"invalid-feedback"},i)||m&&s.a.createElement("p",null,m)))},b=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={listBank:[]},l}return Object(l.a)(t,[{key:"onChange",value:function(){this.props.change("transferNetto",this.props.transferNettoMurni)}},{key:"getlocal",value:function(){var e=0,a=0,t=0,r="",l="",n="",o=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):"kosong";"kosong"===o?(e=0,a=0,t=0,r="",l="",n=""):(e=o[0].transfer_rp,a=o[0].harga_emas,t=o[0].transfer_netto,r=o[0].acc_to,l=o[0].acc_from,n=o[0].tanggal_transfer),this.props.change("transfer",e),this.props.change("harga",a),this.props.change("transferNetto",t),this.props.change("tanggal",n),this.props.change("tujuan",r),this.props.change("supplier",l)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.d)()),this.getlocal()}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-6 mt-3"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseTransfer","aria-expanded":"true","aria-controls":"collapseTransfer"},"Transfer",s.a.createElement("span",{className:"float-right"},s.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(m.a,Object.assign({name:"transferNetto",type:"telp",component:"input",className:"form-control",readOnly:!0},g))))),s.a.createElement("div",{id:"collapseTransfer",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Transfer"),s.a.createElement(m.a,Object.assign({name:"transfer",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},g)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Harga "),s.a.createElement("div",{className:"form-gorup"},s.a.createElement(m.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange(),readOnly:!0},g)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Netto "),s.a.createElement(m.a,Object.assign({name:"transferNetto",label:"Netto",type:"tel",className:"form-control",component:"input",readOnly:!0},g))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(m.a,{name:"tujuan",label:"A/C Tujuan",type:"text",component:N})),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement("label",{htmlFor:""},"A/C Asal"),s.a.createElement(m.a,{name:"supplier",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),this.props.rekening.map((function(e){return s.a.createElement("option",{value:e.no_rekening,key:e.no_rekening},e.atas_nama)})))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(m.a,{name:"tanggal",label:"Tanggal",type:"date",component:N})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))))))}}]),t}(c.Component);b=Object(p.a)({form:"AccordTransferMurni",enableReinitialize:!0})(b);var f=Object(h.a)("AccordTransferMurni");a.default=Object(d.b)((function(e){var a=f(e,"harga","transfer"),t=a.harga,r=a.transfer;return{transferNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),transferNettoMurni:parseFloat(r),rekening:e.provinsi.rekening}}))(b)},618:function(e,a,t){"use strict";t.r(a);var r=t(35),l=t(36),n=t(38),o=t(37),c=t(0),s=t.n(c),i=t(185),m=t(467),p=t(468),h=t(470),d=t(18),u=t(120),g=Object(i.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),N=function(e){var a=e.input,t=e.label,r=e.type,l=e.limit,n=e.readOnly,o=e.meta,c=o.touched,i=o.error,m=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:n})),c&&(i&&s.a.createElement("p",{className:"invalid-feedback"},i)||m&&s.a.createElement("p",null,m)))},b=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={listBank:[]},l}return Object(l.a)(t,[{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNetto),this.props.change("transferNetto",this.props.transferNetto)}},{key:"getlocal",value:function(){var e=0,a=0,t=0,r="",l="",n="",o=JSON.parse(localStorage.getItem("alatBayarTrf"))?JSON.parse(localStorage.getItem("alatBayarTrf")):"kosong";"kosong"===o?(e=0,a=0,t=0,r="",l="",n=""):(e=o[0].transfer_rp,a=o[0].harga_emas,t=o[0].transfer_netto,r=o[0].acc_to,l=o[0].acc_from,n=o[0].tanggal_transfer),this.props.change("transfer",e),this.props.change("harga",a),this.props.change("transferNetto",t),this.props.change("tanggal",n),this.props.change("tujuan",r),this.props.change("supplier",l)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.d)()),this.getlocal()}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-6 mt-3"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseTransfer","aria-expanded":"true","aria-controls":"collapseTransfer"},"Transfer",s.a.createElement("span",{className:"float-right"},s.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(m.a,{name:"transferNetto",type:"number",component:"input",className:"form-control",readOnly:!0})))),s.a.createElement("div",{id:"collapseTransfer",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Transfer"),s.a.createElement(m.a,Object.assign({name:"transfer",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},g))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Harga "),s.a.createElement("div",{className:"form-gorup"},s.a.createElement(m.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},g)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(m.a,{name:"transferNetto",label:"Netto",type:"number",component:N,readOnly:!0})),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(m.a,{name:"tujuan",label:"A/C Tujuan",type:"text",component:N})),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement("label",{htmlFor:""},"A/C Asal"),s.a.createElement(m.a,{name:"supplier",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),this.props.rekening.map((function(e){return s.a.createElement("option",{value:e.no_rekening,key:e.no_rekening},e.atas_nama)})))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(m.a,{name:"tanggal",label:"Tanggal",type:"date",component:N})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))))))}}]),t}(c.Component);b=Object(p.a)({form:"AccordTrannsfer",enableReinitialize:!0})(b);var f=Object(h.a)("AccordTrannsfer");a.default=Object(d.b)((function(e){var a=f(e,"harga","transfer"),t=a.harga,r=a.transfer;return{transferNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),rekening:e.provinsi.rekening}}))(b)},619:function(e,a,t){"use strict";t.r(a);var r=t(35),l=t(36),n=t(38),o=t(37),c=t(0),s=t.n(c),i=t(185),m=t(467),p=t(468),h=t(470),d=t(18),u=function(e){var a={};return e.cash||(a.cash="Tidak Boleh kosong"),e.harga||(a.harga="Tidak Boleh kosong"),a},g=Object(i.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),N=function(e){var a=e.input,t=e.label,r=e.type,l=e.limit,n=e.readOnly,o=e.meta,c=o.touched,i=o.error,m=o.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:n})),c&&(i&&s.a.createElement("p",{className:"invalid-feedback"},i)||m&&s.a.createElement("p",null,m)))},b=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=0,a=0,t=0,r=JSON.parse(localStorage.getItem("alatBayarTunai"))?JSON.parse(localStorage.getItem("alatBayarTunai")):"kosong";"kosong"===r?(e=0,a=0,t=0):(e=r[0].cash_rp,a=r[0].harga_emas,t="murni"===this.props.type?r[0].harga_emas:r[0].cash_netto),this.props.change("cash",e),this.props.change("harga",a),this.props.change("cashNetto",t)}},{key:"onChange",value:function(){this.props.change("cashNetto","murni"===this.props.type?this.props.cashNettoMurni:this.props.cashNetto),this.props.change("transferNetto",this.props.transferNetto)}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-6 mt-3"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header ",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseCash","aria-expanded":"true","aria-controls":"collapseCash"},"Cash"))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(m.a,{name:"cashNetto",type:"number",component:"input",className:"form-control",readOnly:!0})))),s.a.createElement("div",{id:"collapseCash",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Cash"),s.a.createElement(m.a,Object.assign({name:"cash",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},g))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Harga "),s.a.createElement("div",{className:"form-gorup"},s.a.createElement(m.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},g)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(m.a,{name:"cashNetto",label:"Netto",type:"number",component:N,readOnly:!0})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Simpan"))))))))))}}]),t}(c.Component);b=Object(p.a)({form:"AccordCash",enableReinitialize:!0,validate:u})(b);var f=Object(h.a)("AccordCash");a.default=Object(d.b)((function(e){var a=f(e,"harga","cash"),t=a.harga,r=a.cash;return{cashNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),cashNettoMurni:parseFloat(r)}}))(b)}}]);
//# sourceMappingURL=40.f91a8fc2.chunk.js.map