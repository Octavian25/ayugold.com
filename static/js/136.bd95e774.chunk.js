(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[136],{1201:function(e,a,t){"use strict";t.r(a);var r=t(22),n=t(23),l=t(25),s=t(24),o=t(0),m=t.n(o),c=t(467),i=t(468),p=t(470),u=t(15),d=t(478),b=t.n(d),h=t(480),g=t.n(h),E=t(479),N=t.n(E),f=t(90),v=Object(f.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),k=function(e){var a=e.input,t=e.label,r=e.type,n=e.limit,l=e.readOnly,s=e.meta,o=s.touched,c=s.error,i=s.warning;return m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"",className:"text-black"},t),m.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:n,readOnly:l})),o&&(c&&m.a.createElement("p",{className:"invalid-feedback"},c)||i&&m.a.createElement("p",null,i)))},y=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={kodeBarang:[],kodeJenis:"",namaJenis:"",kadarCetak:"",kadarBeli:"",columns:[{dataField:"tunaiRp",text:"Jumlah(Rp)"},{dataField:"tunaiKurs",text:"Harga"},{dataField:"tunaiNetto",text:"Netto (Gr)"}],columnsTransfer:[{dataField:"transferRp",text:"Jumlah(Rp)"},{dataField:"transferKurs",text:"Harga"},{dataField:"transferNetto",text:"Netto (Gr)"}],columnsGiro:[{dataField:"giroRp",text:"Jumlah(Rp)"},{dataField:"giroKurs",text:"Harga"},{dataField:"giroNetto",text:"Netto (Gr)"}],tampungCiok:[]},n}return Object(n.a)(t,[{key:"onChange",value:function(){this.props.change("netto",this.props.netto)}},{key:"render",value:function(){switch(this.props.from){case"cash":return m.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"col-lg-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3 form-group"},m.a.createElement("label",{htmlFor:""},"Jumlah"),m.a.createElement(c.a,Object.assign({name:"bruto",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},v))),m.a.createElement("div",{className:"col-lg-3 form-group"},m.a.createElement("label",{htmlFor:""},"Harga"),m.a.createElement(c.a,Object.assign({name:"kadarTransaksi",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},v))),m.a.createElement("div",{className:"col-lg-3 form-group"},m.a.createElement(c.a,{name:"netto",label:"Netto",component:k,type:"number",className:"form-control",onBlur:this.onChange()})),m.a.createElement("div",{className:"col-lg-12 mb-3"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan"))),this.props.data?m.a.createElement(g.a,{keyField:"id",data:this.props.data,columns:this.state.columns,search:!0},(function(e){return m.a.createElement("div",{className:"form-group"},m.a.createElement(b.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:N()()})))})):null));case"transfer":return m.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"col-lg-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3 form-group"},m.a.createElement("label",{htmlFor:""},"Jumlah"),m.a.createElement(c.a,Object.assign({name:"bruto",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},v))),m.a.createElement("div",{className:"col-lg-3 form-group"},m.a.createElement("label",{htmlFor:""},"Harga"),m.a.createElement(c.a,Object.assign({name:"kadarTransaksi",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},v))),m.a.createElement("div",{className:"col-lg-3 form-group"},m.a.createElement(c.a,{name:"netto",label:"Netto",component:k,type:"number",className:"form-control",onBlur:this.onChange()})),m.a.createElement("div",{className:"col-lg-12 mb-3"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan"))),this.props.data?m.a.createElement(g.a,{keyField:"id",data:this.props.data,columns:this.state.columnsTransfer,search:!0},(function(e){return m.a.createElement("div",{className:"form-group"},m.a.createElement(b.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:N()()})))})):null));case"giro":return m.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"col-lg-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3 form-group"},m.a.createElement("label",{htmlFor:""},"Jumlah"),m.a.createElement(c.a,Object.assign({name:"bruto",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},v))),m.a.createElement("div",{className:"col-lg-3 form-group"},m.a.createElement("label",{htmlFor:""},"Harga"),m.a.createElement(c.a,Object.assign({name:"kadarTransaksi",component:"input",type:"tel",className:"form-control",onBlur:this.onChange()},v))),m.a.createElement("div",{className:"col-lg-3 form-group"},m.a.createElement(c.a,{name:"netto",label:"Netto",component:k,type:"number",className:"form-control",onBlur:this.onChange()})),m.a.createElement("div",{className:"col-lg-12 mb-3"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan"))),this.props.data?m.a.createElement(g.a,{keyField:"id",data:this.props.data,columns:this.state.columnsGiro,search:!0},(function(e){return m.a.createElement("div",{className:"form-group"},m.a.createElement(b.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:N()()})))})):null))}}}]),t}(o.Component);y=Object(i.a)({form:"FormCash",enableReinitialize:!0})(y);var F=Object(p.a)("FormCash");a.default=Object(u.b)((function(e){var a=F(e,"bruto","kadarTransaksi"),t=a.bruto,r=a.kadarTransaksi;return{netto:(parseFloat(t)/parseFloat(r)).toFixed(3)}}))(y)}}]);
//# sourceMappingURL=136.bd95e774.chunk.js.map