(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[137],{400:function(e,a,t){"use strict";t.r(a);var l=t(39),c=t(40),o=t(42),r=t(41),n=t(0),i=t.n(n),s=t(298),m=t(312),d=t(301),p=t(19),u=function(e){var a=e.input,t=e.label,l=e.type,c=e.limit,o=e.readOnly,r=e.meta,n=r.touched,s=r.error,m=r.warning;return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"",className:"text-black"},t),i.a.createElement("input",Object.assign({},a,{type:l,className:"form-control",min:"0",step:"0.001",maxLength:c,readOnly:o})),n&&(s&&i.a.createElement("p",{className:"invalid-feedback"},s)||m&&i.a.createElement("p",null,m)))},b=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=a.call(this,e)).state={},c}return Object(c.a)(t,[{key:"setCiok",value:function(){this.props.change("ciokBrutto",this.props.totalBrutoCiok),this.props.change("ciokNetto",parseFloat(this.props.totalCiok).toFixed(3))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("div",{id:"accordion",className:"custom-accordion mb-4"},i.a.createElement("div",{className:"card mb-0 bg-dark"},i.a.createElement("div",{className:"card-header",id:"headingOne"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-8 col-md-8"},i.a.createElement("h5",{className:"m-0"},i.a.createElement("a",{className:"custom-accordion-title d-block pt-2 pb-2 text-white","data-toggle":"collapse",href:"#collapseCiok","aria-expanded":"true","aria-controls":"collapseCiok",onClick:function(){return e.setCiok()}},"Ciok",i.a.createElement("span",{className:"float-right"},i.a.createElement("i",{className:"mdi mdi-chevron-down accordion-arrow"}))))),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:"",style:{color:"white"}},"Netto"),i.a.createElement(s.a,{name:"ciokNetto",type:"number",component:"input",className:"form-control",readOnly:!0})))),i.a.createElement("div",{id:"collapseCiok",className:"collapse","aria-labelledby":"headingOne","data-parent":"#accordion"},i.a.createElement("div",{className:"card-body bg-white"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-2"},i.a.createElement("label",{htmlFor:""},"."),i.a.createElement("button",{className:"btn btn-primary btn-block",type:"button","data-target":"#ciokModal","data-toggle":"modal"},"+")),(this.props.totalCiok,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-lg-5 col-md-5"},i.a.createElement(s.a,{name:"ciokBrutto",label:"Bruto",type:"number",component:u,readOnly:!0,onBlur:this.setCiok()})),i.a.createElement("div",{className:"col-lg-5 col-md-5"},i.a.createElement(s.a,{name:"ciokNetto",label:"Netto",type:"number",component:u,readOnly:!0,onBlur:this.setCiok()}))))))))))}}]),t}(n.Component);b=Object(m.a)({form:"AccordCiok",enableReinitialize:!0})(b);var h=Object(d.a)("AccordCiok");a.default=Object(p.b)((function(e){var a=h(e,"harga","cash"),t=a.harga,l=a.cash;return{cashNetto:(parseFloat(l)/parseFloat(t)).toFixed(3)}}))(b)}}]);
//# sourceMappingURL=137.8a471096.chunk.js.map