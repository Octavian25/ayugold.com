(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[141],{1246:function(e,a,t){"use strict";t.r(a);var n=t(35),l=t(36),r=t(38),o=t(37),s=t(0),c=t.n(s),m=t(5),i=t(47),u=t(18),d=t(466),p=t(467),h=t(469),b=t(477),f=t.n(b),N=t(61),g=t.n(N),v=t(88),E=function(e){var a=e.input,t=e.label,n=e.type,l=e.limit,r=e.readOnly,o=e.meta,s=o.touched,m=o.error,i=o.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:r})),s&&(m&&c.a.createElement("p",{className:"invalid-feedback"},m)||i&&c.a.createElement("p",null,i)))},k=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).inputChange=function(e){return function(a){l.setState(Object(i.a)({},e,a.target.value))}},l.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"sales",text:"Sales"},{dataField:"noTransaksi",text:"No Transaksi"},{dataField:"noBon",text:"No Bon"},{dataField:"saldoGr",text:"Saldo (Gr)"},{dataField:"saldoRp",text:"Saldo (Rp)"},{dataField:"titipGr",text:"Titip (Gr)"},{dataField:"titipRp",text:"Titip (Rp)"}],products:[{kode_salesman:"001",nama_salesman:"BANDUNG"},{kode_salesman:"002",nama_salesman:"BOGOR"}],searchText:"",listCustomer:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://147.139.193.169:3759/api/v1/customers").then((function(a){return e.setState({listCustomer:a.data})})).catch((function(e){return console.log(e)}))}},{key:"onChange",value:function(){this.props.change("cashNetto",this.props.cashNetto),this.props.change("transferNetto",this.props.transferNetto)}},{key:"searchList",value:function(){console.log(this.state.searchText)}},{key:"onSubmitToko",value:function(e){var a=e.split("|");this.props.change("kodeToko",a[0]),this.props.change("kodeCustomer",a[1])}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(d.a,{name:"tanggal",label:"Tanggal",type:"date",component:E})),c.a.createElement("div",{className:"col-md-4 col-lg-4 d-none"},c.a.createElement(d.a,{name:"kodeToko",component:E,type:"text",label:"Nama Toko"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Nama Toko"),c.a.createElement(v.a,{options:this.state.listCustomer.map((function(e){return{value:e.kodeCustomer+"|"+e.namaCustomer,name:e.namaToko}})),search:!0,placeholder:"Silahkan Pilih",onChange:function(a){return e.onSubmitToko(a)}})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(d.a,{name:"kodeCustomer",component:E,type:"text",label:"Nama Customer",readOnly:!0})),c.a.createElement("div",{className:"col-lg-4 mt-5"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Cari Nomor Bon"),c.a.createElement("input",{type:"text",id:"searchNoBon",onChange:this.inputChange("searchText"),className:"form-control"}))),c.a.createElement("div",{className:"col-lg-1 mt-5"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-white"},"."),c.a.createElement("button",{type:"button",className:"btn btn-primary form-control",onClick:function(){return e.searchList()}},"Cari"))),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},c.a.createElement(f.a,{keyField:"noTransaksi",data:this.state.products,columns:this.state.columns,bordered:!0,headerClasses:"header-table"})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),t}(s.Component);k=Object(p.a)({form:"FormTransferBalance",enableReinitialize:!0})(k);var y=Object(h.a)("FormTransferBalance"),F=Object(u.b)((function(e){var a=y(e,"harga","cash","transfer"),t=a.harga,n=a.cash,l=a.transfer;return{cashNetto:(parseFloat(n)/parseFloat(t)).toFixed(3),transferNetto:(parseFloat(l)/parseFloat(t)).toFixed(3)}}))(k),x=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"handlSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"col-lg-12 col-d-12"},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(m.b,{to:"/KlasifikasiCustomer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement(F,{onSubmit:function(a){return e.handlSubmit(a)}})))))}}]),t}(s.Component);a.default=x}}]);
//# sourceMappingURL=141.1a1cd95b.chunk.js.map