(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[73],{1195:function(e,a,t){"use strict";t.r(a);var l=t(22),n=t(23),r=t(25),c=t(24),m=t(0),o=t.n(m),s=t(646),i=t(647),d=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={},n}return Object(n.a)(t,[{key:"handleSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"col-lg-12 col-d-12"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement(s.a,{onSubmit:function(a){return e.handleSubmit(a)}})))),o.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog modal-lg"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},o.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Lokasi"),o.a.createElement("button",{type:"button",id:"dismiss_modal",name:"dismiss_modal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),o.a.createElement("div",{className:"modal-body"},o.a.createElement(i.a,{onSubmit:function(a){return e.handleSubmit(a)},from:"transfer"})),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close"))))))}}]),t}(m.Component);a.default=d},646:function(e,a,t){"use strict";var l=t(35),n=t(22),r=t(23),c=t(25),m=t(24),o=t(0),s=t.n(o),i=t(15),d=t(468),u=t(470),p=t(478),b=t.n(p),E=t(200),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(l.a)({},e,a.target.value))}},r.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"namaToko",text:"Nama Toko"},{dataField:"noBon",text:"No Bon"},{dataField:"keterangan",text:"Keterangan"},{dataField:"noRekening",text:"Nomor Rekening"},{dataField:"saldoRp",text:"Saldo (Rp)"},{dataField:"link",text:"Aksi",csvExport:!1,formatter:function(e,a){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-success mr-2","data-toggle":"modal","data-target":"#primary-header-modal",onClick:function(){return r.props.dispatch(Object(E.b)(a.saldoRp))}},s.a.createElement("i",{className:"fa fa-check-circle mr-1"}),"VALIDASI"))}}],products:[{tanggal:"001",namaToko:"BANDUNG",noBon:"001",keterangan:"TEst",noRekening:"8888",saldoRp:"1000000"}],searchText:""},r}return Object(r.a)(t,[{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNetto),this.props.change("transferNetto",this.props.transferNetto)}},{key:"searchList",value:function(){console.log(this.state.searchText)}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Kriteria"),s.a.createElement("select",{className:"form-control",id:"kriteria",name:"kriteria",defaultValue:"tanggalJanji"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"Tanggal Janji")))),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Tanggal Janji"),s.a.createElement("input",{type:"date",id:"searchNoBon",onChange:this.inputChange("searchText"),className:"form-control"}))),s.a.createElement("div",{className:"col-lg-1"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-white"},"."),s.a.createElement("button",{type:"button",className:"btn btn-primary form-control",onClick:function(){return e.searchList()}},"Cari"))),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement(b.a,{keyField:"noTransaksi",data:this.state.products,columns:this.state.columns,bordered:!0,headerClasses:"header-table"})),s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),t}(o.Component);g=Object(d.a)({form:"FormValidasiTransferCustomer",enableReinitialize:!0})(g);var h=Object(u.a)("FormValidasiTransferCustomer");a.a=Object(i.b)((function(e){var a=h(e,"harga","cash","transfer"),t=a.harga,l=a.cash,n=a.transfer;return{cashNetto:(parseFloat(l)/parseFloat(t)).toFixed(3),transferNetto:(parseFloat(n)/parseFloat(t)).toFixed(3)}}))(g)},647:function(e,a,t){"use strict";var l=t(22),n=t(23),r=t(25),c=t(24),m=t(0),o=t.n(m),s=t(467),i=t(468),d=t(15),u=function(e){var a=e.input,t=e.label,l=e.type,n=e.limit,r=e.readOnly,c=e.meta,m=c.touched,s=c.error,i=c.warning;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"text-black"},t),o.a.createElement("input",Object.assign({},a,{type:l,className:"form-control",min:"0",step:"0.001",maxLength:n,readOnly:r})),m&&(s&&o.a.createElement("p",{className:"invalid-feedback"},s)||i&&o.a.createElement("p",null,i)))},p=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={},n}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement("form",{onSubmit:this.props.handleSubmit},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"cash",label:"Cash",component:u,type:"number"})),"transfer"===this.props.from?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"transfer",label:"Transfer",component:u,type:"number"})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"tanggal",label:"Tanggal",component:u,type:"date"})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"a/cAsal",label:"A/C Asal",component:u,type:"text"})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement("label",{htmlFor:""},"A/C Tujuan"),o.a.createElement(s.a,{name:"a/cTujuan",component:"select",className:"form-control"},o.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"Silahkan Pilih"))),o.a.createElement("div",{className:"col-lg-4 col-md-4"})):o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"giro",label:"Giro",component:u,type:"number"})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"noGiro",label:"No Giro",component:u,type:"number"})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"bank",label:"Bank",component:u,type:"number"})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"tanggalJ/T",label:"Tanggal Jatuh Tempo",component:u,type:"number"})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"tanggal",label:"Tanggal",component:u,type:"date"})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:""},"A/C Tujuan"),o.a.createElement(s.a,{name:"a/cTujuan",component:"select",className:"form-control"},o.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"Silahkan Pilih")))),o.a.createElement("div",{className:"col-lg-8 col-md-8"},o.a.createElement("div",null))),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"transfer"===this.props.from?"totalBon":"awal",label:"transfer"===this.props.from?"Total Bon":"Awal",component:u,type:"number",readOnly:!0})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"totalBayar",label:"Total Bayar",component:u,type:"number",readOnly:!0})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement(s.a,{name:"transfer"===this.props.from?"sisaBon":"akhir",label:"transfer"===this.props.from?"Sisa Bon":"Akhir",component:u,type:"text",readOnly:!0})),o.a.createElement("div",{className:"col-lg-12 col-md-12"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Tambah"))))))}}]),t}(m.Component);p=Object(i.a)({form:"Validasi",enableReinitialize:!0})(p),a.a=Object(d.b)((function(e){return{initialValues:{totalBon:e.provinsi.totalBon}}}),null)(p)}}]);
//# sourceMappingURL=73.af198de9.chunk.js.map