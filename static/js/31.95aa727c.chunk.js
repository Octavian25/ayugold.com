(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[31],{658:function(e,a,t){"use strict";t.r(a);var n=t(71),r=t(72),l=t(74),c=t(73),o=t(0),s=t.n(o),m=t(498),i=t(465),p=t(458),d=t(467),u=t(27),h=t(45),g=t.n(h),f=Object(m.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),N=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,l=e.readOnly,c=e.meta,o=c.touched,m=c.error,i=c.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:l})),o&&(m&&s.a.createElement("p",{className:"invalid-feedback"},m)||i&&s.a.createElement("p",null,i)))},b=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={listBank:[]},r}return Object(r.a)(t,[{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNetto),this.props.change("transferNetto",this.props.transferNetto)}},{key:"getlocal",value:function(){var e=0,a=0,t=0,n="",r="",l="",c=JSON.parse(localStorage.getItem("alatBayarTrf"))?JSON.parse(localStorage.getItem("alatBayarTrf")):"kosong";"kosong"===c?(e=0,a=0,t=0,n="",r="",l=""):(e=c[0].transferRp,a=c[0].transferKurs,t=c[0].transferNetto,n=c[0].accTo,r=c[0].accFrom,l=c[0].transferTanggalJanji),this.props.change("transfer",e),this.props.change("harga",a),this.props.change("transferNetto",t),this.props.change("tanggal",l),this.props.change("tujuan",n),this.props.change("supplier",r)}},{key:"componentDidMount",value:function(){var e=this;g.a.get("http://147.139.182.75:3759/api/v1/banks").then((function(a){return e.setState({listBank:a.data})})).catch((function(e){return console.log(e)})).then((function(){return e.getlocal()}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-6 mt-3"},s.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},s.a.createElement("div",{className:"card mb-0 bg-dark"},s.a.createElement("div",{className:"card-header",id:"headingOne"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-8 col-md-8"},s.a.createElement("h5",{className:"m-0"},s.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseTransfer","aria-expanded":"true","aria-controls":"collapseTransfer"},"Transfer",s.a.createElement("span",{className:"float-right"},s.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),s.a.createElement(i.a,{name:"transferNetto",type:"number",component:"input",className:"form-control",readOnly:!0})))),s.a.createElement("div",{id:"collapseTransfer",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},s.a.createElement("div",{className:"card-body bg-white"},s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Transfer"),s.a.createElement(i.a,Object.assign({name:"transfer",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},f))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Harga "),s.a.createElement("div",{className:"form-gorup"},s.a.createElement(i.a,Object.assign({name:"harga",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},f)))),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement(i.a,{name:"transferNetto",label:"Netto",type:"number",component:N,readOnly:!0})),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(i.a,{name:"tujuan",label:"A/C Tujuan",type:"text",component:N})),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement("label",{htmlFor:""},"A/C Asal"),s.a.createElement(i.a,{name:"supplier",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"),this.state.listBank.map((function(e){return s.a.createElement("option",{value:e.noRekening,key:e.noRekening},e.atasNama)})))),s.a.createElement("div",{className:"col-md-6 col-lg-6"},s.a.createElement(i.a,{name:"tanggal",label:"Tanggal",type:"date",component:N})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan"))))))))))}}]),t}(o.Component);b=Object(p.a)({form:"AccordTrannsfer",enableReinitialize:!0})(b);var E=Object(d.a)("AccordTrannsfer");a.default=Object(u.b)((function(e){var a=E(e,"harga","transfer"),t=a.harga,n=a.transfer;return{transferNetto:(parseFloat(n)/parseFloat(t)).toFixed(3)}}))(b)}}]);
//# sourceMappingURL=31.95aa727c.chunk.js.map