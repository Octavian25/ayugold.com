(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[12,135],{412:function(e,a,t){"use strict";t.r(a);var n=t(39),r=t(40),o=t(42),l=t(41),s=t(0),i=t.n(s),c=t(298),m=t(312),d=t(301),u=t(19),p=t(3),k=t.n(p),b=t(303),h=t.n(b),g=t(305),E=t.n(g),f=t(304),v=t.n(f),y=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,o=e.readOnly,l=e.meta,s=l.touched,c=l.error,m=l.warning;return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"",className:"text-black"},t),i.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:o})),s&&(c&&i.a.createElement("p",{className:"invalid-feedback"},c)||m&&i.a.createElement("p",null,m)))},F=function(e){Object(o.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).pilihBarang=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");r.setState({kodeJenis:a[0],kadarCetak:a[1],kadarBeli:a[2]})}},r.state={kodeBarang:[],kodeJenis:"",namaJenis:"",kadarCetak:"",kadarBeli:"",columns:[{dataField:"kodeBarang",text:"Kode Barang"},{dataField:"bruto",text:"Bruto"},{dataField:"kadarTransaksi",text:"Harga (%)"},{dataField:"netto",text:"Netto(Gr)"}],tampungCiok:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("http://157.245.145.87:9011/master/subcategorys2?kodeKelompok=CIOK").then((function(a){return e.setState({kodeBarang:a.data})})).catch((function(e){return console.log(e)}))}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto)}},{key:"setKadar",value:function(){this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli)}},{key:"render",value:function(){var e=this,a=this.state.kodeBarang.filter((function(e){return"CK"===e.kodeKategori}));return i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4 mb-3"},i.a.createElement("label",{htmlFor:""},"Kode Barang"),i.a.createElement(c.a,{name:"kodeBarang",className:"form-control",component:"select",onChange:this.pilihBarang(),onBlur:this.setKadar()},i.a.createElement("option",{value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT",key:"DEFAULTKODEBARANG1"},"SILAHKAN PILIH"),a.map((function(e){return i.a.createElement("option",{value:e.kodeJenis+"|"+e.kadarCetak+"|"+e.kadarBeli,key:e.kodeJenis},e.namaJenis)})))),i.a.createElement("div",{className:"col-lg-8"}),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement(c.a,{name:"kadar",label:"Kadar (%)",type:"number",component:y,readOnly:!0})),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement(c.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:y,onBlur:function(){return e.onclick1()}})),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement(c.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:y,onBlur:function(){return e.onclick1()}})),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement(c.a,{name:"netto",label:"Murni (Gr)",type:"number",component:y,readOnly:!0})),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan"))),this.props.data?i.a.createElement(E.a,{keyField:"id",data:this.props.data,columns:this.state.columns,search:!0},(function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement(h.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:v()()})))})):null)))}}]),t}(s.Component);F=Object(m.a)({form:"FormCiok",enableReinitialize:!0})(F);var N=Object(d.a)("FormCiok");a.default=Object(u.b)((function(e){var a=N(e,"bruto","kadarTransaksi"),t=a.bruto,n=a.kadarTransaksi;return{netto:(parseFloat(t)*(parseFloat(n)/100)).toFixed(3)}}))(F)}}]);
//# sourceMappingURL=12.cc9afb61.chunk.js.map