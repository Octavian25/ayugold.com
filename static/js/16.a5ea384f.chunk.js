(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[16],{570:function(e,a,t){"use strict";t.r(a);var r=t(22),n=t(23),l=t(25),c=t(24),o=t(0),s=t.n(o),m=t(90),i=t(467),p=t(468),d=t(470),g=t(15),u=t(125),h=Object(m.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),f=function(e){var a=e.input,t=e.label,r=e.type,n=e.limit,l=e.readOnly,c=e.meta,o=c.touched,m=c.error,i=c.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:n,readOnly:l})),o&&(m&&s.a.createElement("p",{className:"invalid-feedback"},m)||i&&s.a.createElement("p",null,i)))},E=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={listBank:[]},n}return Object(n.a)(t,[{key:"onChange",value:function(){this.props.change("transferNetto",this.props.transferNettoMurni)}},{key:"getlocal",value:function(){var e=0,a=0,t=0,r="",n="",l="",c=JSON.parse(localStorage.getItem("alatBayarTrfRp"))?JSON.parse(localStorage.getItem("alatBayarTrfRp")):"kosong";"kosong"===c?(e=0,a=0,t=0,r="",n="",l=""):(e=c[0].transfer_rp,a=c[0].harga_emas,t=c[0].transfer_netto,r=c[0].acc_to,n=c[0].acc_from,l=c[0].tanggal_transfer),this.props.change("transfer",e),this.props.change("harga",a),this.props.change("transferNetto",t),this.props.change("tanggal",l),this.props.change("tujuan",r),this.props.change("supplier",n)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.d)()),this.getlocal()}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-6 mt-3"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseTransfer","aria-expanded":"true","aria-controls":"collapseTransfer"},"Transfer",s.a.createElement("span",{className:"float-right"},s.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(i.a,Object.assign({name:"transferNetto",type:"telp",component:"input",className:"form-control",readOnly:!0},h))))),s.a.createElement("div",{id:"collapseTransfer",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Transfer"),s.a.createElement(i.a,Object.assign({name:"transfer",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},h)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Harga "),s.a.createElement("div",{className:"form-gorup"},s.a.createElement(i.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange(),readOnly:!0},h)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Netto "),s.a.createElement(i.a,Object.assign({name:"transferNetto",label:"Netto",type:"tel",className:"form-control",component:"input",readOnly:!0},h))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(i.a,{name:"tujuan",label:"A/C Tujuan",type:"text",component:f})),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement("label",{htmlFor:""},"A/C Asal"),s.a.createElement(i.a,{name:"supplier",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),this.props.rekening.map((function(e){return s.a.createElement("option",{value:e.no_rekening,key:e.no_rekening},e.atas_nama)})))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(i.a,{name:"tanggal",label:"Tanggal",type:"date",component:f})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))))))}}]),t}(o.Component);E=Object(p.a)({form:"AccordTransferMurni",enableReinitialize:!0})(E);var N=Object(d.a)("AccordTransferMurni");a.default=Object(g.b)((function(e){var a=N(e,"harga","transfer"),t=a.harga,r=a.transfer;return{transferNetto:(parseFloat(r)/parseFloat(t)).toFixed(3),transferNettoMurni:parseFloat(r),rekening:e.provinsi.rekening}}))(E)}}]);
//# sourceMappingURL=16.a5ea384f.chunk.js.map