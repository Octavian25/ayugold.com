(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[9,21],{620:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(23),o=t(25),s=t(24),l=t(0),i=t.n(l),c=t(467),m=t(468),d=t(470),p=t(15),u=t(478),b=t.n(u),k=t(480),h=t.n(k),g=t(479),E=t.n(g),v=t(11),f=t(126),N=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={kodeBarang:[],kodeJenis:"",namaJenis:"",kadarCetak:"",kadarBeli:"",columns:[{dataField:"kode_jenis",text:"Kode Barang"},{dataField:"bruto",text:"Bruto"},{dataField:"kadar_transaksi",text:"Harga (%)"},{dataField:"netto",text:"Netto(Gr)"}],tampungCiok:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.d)())}},{key:"pilihBarang",value:function(e){var a=(e||"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");this.props.change("kadar",a[1]),this.props.change("kadarTransaksi",a[2])}},{key:"setNetto",value:function(){this.props.change("netto",this.props.netto)}},{key:"render",value:function(){var e=this,a=this.props.rosok.filter((function(e){return"CK"===e.kode_kategori}));return i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4 mb-3"},i.a.createElement(c.a,{name:"kodeBarang",className:"form-control",component:v.b,label:"Kode Barang",onChange:function(a){return e.pilihBarang(a)},options:a.map((function(e){return{value:e.kode_jenis+"|"+e.kadar_cetak+"|"+e.kadar_beli,name:e.nama_jenis}}))})),i.a.createElement("div",{className:"col-lg-8"}),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement(c.a,{name:"kadar",label:"Kadar (%)",type:"number",component:v.a,readOnly:!0})),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement(c.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:v.a,onChange:this.setNetto()})),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement(c.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:v.a})),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement(c.a,{name:"netto",label:"Murni (Gr)",type:"number",component:v.a,readOnly:!0})),i.a.createElement("div",{className:"col-lg-12 mb-3"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",i.a.createElement("i",{className:"fa fa-paper-plane ml-3"})))),this.props.data?i.a.createElement(h.a,{keyField:"id",data:this.props.data,columns:this.state.columns,search:!0},(function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement(b.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:E()()})))})):null)))}}]),t}(l.Component);N=Object(m.a)({form:"FormCiok",enableReinitialize:!0})(N);var y=Object(d.a)("FormCiok");a.default=Object(p.b)((function(e){var a=y(e,"bruto","kadarTransaksi"),t=a.bruto,n=a.kadarTransaksi;return{netto:(parseFloat(t)*parseFloat(n)/100).toFixed(3),rosok:e.provinsi.rosok}}))(N)}}]);
//# sourceMappingURL=9.3a0d4cad.chunk.js.map