(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[98],{1244:function(e,a,t){"use strict";t.r(a);var n=t(15),l=t(16),r=t(18),o=t(17),s=t(0),c=t.n(s),i=t(12),m=t(7),d=t.n(m),u=t(175),p=t(21),h=t(3),g=t(43),f=t(31),b=t(304),E=t(305),v=t(481),N=t.n(v),y=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).inputChange=function(e){return function(a){l.setState(Object(f.a)({},e,a.target.value))}},l.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"rek_asal",text:"Rekening Asal"},{dataField:"rek_tujuan",text:"Rekening Tujuan"},{dataField:"saldo_rp",text:"Saldo RP"},{dataField:"keterangan",text:"Keterangan"},{dataField:"link",text:"Aksi",csvExport:!1,formatter:function(e,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{type:"button",className:"btn btn-success mr-2","data-toggle":"modal","data-target":"#primary-header-modal",onClick:function(){return l.props.dispatch(Object(u.c)(a))}},c.a.createElement("i",{className:"fa fa-check-circle mr-1"}),"VALIDASI"))}}],searchText:""},l}return Object(l.a)(t,[{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNetto),this.props.change("transferNetto",this.props.transferNetto)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.d)())}},{key:"searchList",value:function(){console.log(this.state.searchText)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Kriteria"),c.a.createElement("select",{className:"form-control",id:"kriteria",name:"kriteria",defaultValue:"tanggalJanji"},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"Tanggal Janji")))),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal Janji"),c.a.createElement("input",{type:"date",id:"searchNoBon",onChange:this.inputChange("searchText"),className:"form-control"}))),c.a.createElement("div",{className:"col-lg-1"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-white"},"."),c.a.createElement("button",{type:"button",className:"btn btn-primary form-control",onClick:function(){return e.searchList()}},"Cari"))),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},c.a.createElement(N.a,{keyField:"noTransaksi",data:this.props.listValidasiTransfer,columns:this.state.columns,bordered:!0,headerClasses:"header-table"}))))}}]),t}(s.Component);y=Object(b.a)({form:"FormValidasiTransferCustomer",enableReinitialize:!0})(y);var k=Object(E.a)("FormValidasiTransferCustomer"),T=Object(i.b)((function(e){var a=k(e,"harga","cash","transfer"),t=a.harga,n=a.cash,l=a.transfer;return{cashNetto:(parseFloat(n)/parseFloat(t)).toFixed(3),transferNetto:(parseFloat(l)/parseFloat(t)).toFixed(3),listValidasiTransfer:e.provinsi.listValidasiTransfer,rekening:e.provinsi.rekening}}))(y),j=t(643),F=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"handleSubmit",value:function(e){var a=this,t={cash_rp:e.cash,transfer_rp:e.transfer,tanggal_transfer:e.tanggal,rek_asal:e.rekening_asal,rek_tujuan:e.rekening_tujuan,total_transfer:e.totalBon,total_bayar:parseFloat(e.cash||0)+parseFloat(e.transfer||0),sisa_transfer:e.sisaBon};Object(h.c)("validate-bank-outstand-transfer/validate/".concat(String(e.no_trx).toLowerCase()),t).then((function(){return d.a.fire({position:"top-end",icon:"success",text:"Berhasil Validasi Data!",showConfirmButton:!1,timer:1500}).then((function(){document.getElementById("dismiss_modal").click()})).then((function(){a.props.dispatch(Object(u.d)())}))})).catch((function(e){return Object(p.c)("Gagal Validasi Transfer , Detial : ".concat(e))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"col-lg-12 col-d-12"},c.a.createElement("div",{className:"card"},c.a.createElement(g.default,{title:"Validasi Transfer"}),c.a.createElement("div",{className:"card-body"},c.a.createElement(T,{onSubmit:function(a){return e.handleSubmit(a)}})))),c.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Validasi Transfer"),c.a.createElement("button",{type:"button",id:"dismiss_modal",name:"dismiss_modal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(j.a,{onSubmit:function(a){return e.handleSubmit(a)},from:"transfer"}))))))}}]),t}(s.Component);a.default=Object(i.b)()(F)},643:function(e,a,t){"use strict";var n=t(15),l=t(16),r=t(18),o=t(17),s=t(0),c=t.n(s),i=t(52),m=t(304),d=t(305),u=t(12),p=t(11),h=t(64),g=t(54),f=function(e){return 0===e||"0"===e?void 0:"Tidak Boleh Lebih Dari Total"},b=Object(g.createNumberMask)({prefix:"Rp. ",locale:"id-ID"}),E=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(h.d)())}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"cash",label:"Cash",component:p.a,type:"number",onChange:function(){e.props.change("sisaBon",e.props.totalBayar)},onBlur:function(){return e.props.change("sisaBon",e.props.totalBayar)}})),"transfer"===this.props.from?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"transfer",label:"Transfer",component:p.a,type:"number",onChange:function(){return e.props.change("sisaBon",e.props.totalBayar)},onBlur:function(){return e.props.change("sisaBon",e.props.totalBayar)}})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"tanggal",label:"Tanggal",component:p.a,type:"date"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"rekening_asal",label:"A/C Asal",component:p.a,type:"text"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"A/C Tujuan"),c.a.createElement(i.a,{name:"rekening_tujuan",component:"select",className:"form-control"},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.props.rekening.map((function(e){return c.a.createElement("option",{value:e.atas_nama},e.atas_nama)})))),c.a.createElement("div",{className:"col-lg-4 col-md-4"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"giro",label:"Giro",component:p.a,type:"number"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"noGiro",label:"No Giro",component:p.a,type:"number"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"bank",label:"Bank",component:p.a,type:"number"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"tanggalJ/T",label:"Tanggal Jatuh Tempo",component:p.a,type:"number"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"tanggal",label:"Tanggal",component:p.a,type:"date"})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"A/C Tujuan"),c.a.createElement(i.a,{name:"a/cTujuan",component:"select",className:"form-control"},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"Silahkan Pilih")))),c.a.createElement("div",{className:"col-lg-8 col-md-8"},c.a.createElement("div",null))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,Object.assign({name:"transfer"===this.props.from?"totalBon":"awal",label:"transfer"===this.props.from?"Total Bon":"Awal",component:p.a,type:"telp",readOnly:!0},b))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,Object.assign({name:"totalBayar",label:"Total Bayar",component:p.a,type:"telp",readOnly:!0},b))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement(i.a,{name:"transfer"===this.props.from?"sisaBon":"akhir",label:"transfer"===this.props.from?"Sisa Bon":"Akhir",component:p.a,type:"telp",readOnly:!0,validate:f})),c.a.createElement("div",{className:"col-lg-3 d-none"},c.a.createElement(i.a,{name:"no_trx",component:p.a,type:"text",label:"Nomor Trx",placeholder:"Masukan Nomor Trx"})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Bayar"))))))}}]),t}(s.Component);E=Object(m.a)({form:"Validasi",enableReinitialize:!0})(E);var v=Object(d.a)("Validasi");a.a=Object(u.b)((function(e){var a=v(e,"cash","transfer","totalBayar"),t=a.cash,n=a.transfer,l=a.totalBayar;return{initialValues:{totalBon:e.provinsi.listValidasiTransferSelected.saldo_rp,tanggal:e.provinsi.listValidasiTransferSelected.tanggal,transfer:e.provinsi.listValidasiTransferSelected.saldo_rp,rekening_asal:e.provinsi.listValidasiTransferSelected.rek_asal,rekening_tujuan:e.provinsi.listValidasiTransferSelected.rek_tujuan,totalBayar:e.provinsi.listValidasiTransferSelected.saldo_rp,no_trx:e.provinsi.listValidasiTransferSelected.no_trx,cash:0,sisaBon:0},rekening:e.provinsi.rekening,totalBayar:parseFloat(l||0)-(parseFloat(t||0)+parseFloat(n||0))}}))(E)}}]);
//# sourceMappingURL=98.7b8307da.chunk.js.map