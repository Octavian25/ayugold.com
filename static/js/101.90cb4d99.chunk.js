(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[101],{1125:function(e,a,t){"use strict";t.r(a);var n=t(22),l=t(23),o=t(25),r=t(24),m=t(0),s=t.n(m),c=t(15),i=t(467),p=t(468),u=t(50),d=t(191),b=t(11),E=t(670),g=function(e){var a=e.input,t=e.label,n=e.type,l=e.limit,o=e.readOnly,r=e.meta,m=r.touched,c=r.error,i=r.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:o})),m&&(c&&s.a.createElement("p",{className:"invalid-feedback"},c)||i&&s.a.createElement("p",null,i)))},N=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.change("tanggal",d.b)}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(i.a,{name:"noMutasi",label:"Nomor Mutasi",component:g,type:"text",onLoad:this.props.change("noMutasi",this.props.noFaktur),readOnly:!0})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(i.a,{name:"tanggal",label:"Tanggal",component:g,type:"date"})),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(i.a,{component:b.b,label:"Transaksi",name:"transaksi",options:[{value:"AMBIL",name:"AMBIL"},{value:"BUANG",name:"BUANG"}]})),s.a.createElement("div",{className:"col-lg-3 col-md-3"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"."),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("label",{className:"mr-3"},s.a.createElement(i.a,{name:"jenisMutasi",component:"input",type:"radio",value:"mutasiCiok",className:"mr-2"}),"Mutasi Ciok")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("label",null,s.a.createElement(i.a,{name:"jenisMutasi",component:"input",type:"radio",value:"kirimBahanProduksi",className:"mr-2"}),"Kirim Bahan Produksi")))))),s.a.createElement("div",{className:"col-md-3 form-group"},s.a.createElement(i.a,{name:"noBon",label:"Nomor Bon",component:g,type:"text"})),s.a.createElement("div",{className:"col-md-6 form-group"},s.a.createElement(i.a,{name:"keterangan",label:"Keterangan",component:g,type:"text"})),s.a.createElement("div",{className:"col-lg-12 col-md-12 mb-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-left"},s.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?s.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",s.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.dispatch(Object(u.j)())},type:"button"},"Tambah Barang",s.a.createElement("i",{className:"fa fa-plus ml-3"})))))))))}}]),t}(m.Component);N=Object(p.a)({form:"FormHeadMutasiCiok",enableReinitialize:!0,validate:E.a})(N),a.default=Object(c.b)()(N)},670:function(e,a,t){"use strict";a.a=function(e){var a={};return e.bruto||(a.bruto="Tidak Boleh kosong"),e.netto||(a.netto="Tidak Boleh kosong"),e.noBon||(a.noBon="Tidak Boleh kosong"),e.noBon||(a.noBon="Tidak Boleh kosong"),e.transaksi||(a.transaksi="Tidak Boleh kosong"),e.tanggal||(a.tanggal="Tidak Boleh kosong"),a}}}]);
//# sourceMappingURL=101.90cb4d99.chunk.js.map