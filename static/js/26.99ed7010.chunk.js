(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[26],{747:function(e,a,t){"use strict";t.r(a);var n=t(22),l=t(23),o=t(25),r=t(24),s=t(0),c=t.n(s),i=t(15),m=t(467),p=t(468),d=t(470),u=t(90),k=function(e){var a={};return e.kodeBarang||(a.kodeBarang="Tidak Boleh kosong, silahkan isi"),e.pkg||(a.pkg="Tidak Boleh kosong, silahkan isi"),e.p||(a.p="Tidak Boleh kosong, silahkan isi"),e.k||(a.k="Tidak Boleh kosong, silahkan isi"),e.bruto||(a.bruto="Tidak Boleh kosong, silahkan isi"),e.discGlobalPr||(a.discGlobalPr="Tidak Boleh kosong, silahkan isi"),a},b=t(11),g=t(16),h=t.n(g),E=t(193),v=Object(u.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),y=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={kodeBarang:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(E.b)())}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto),this.props.change("noFaktur",this.props.noFaktur),this.props.change("gross",this.props.gross),this.props.change("discGlobalGr",this.props.discGlobalGr),this.props.change("nettoDiscGlobalExt",(this.props.netto-this.props.discGlobalGr).toFixed(3))}},{key:"pilihBarang",value:function(e){var a=(e||"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");this.setState({kodeJenis:a[0],namaJenis:a[1],kadarCetak:a[2],kadarJual:a[3]})}},{key:"setKadar",value:function(){this.props.change("keterangan",this.state.namaJenis),this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarJual)}},{key:"setBruto",value:function(){this.props.change("bruto",localStorage.getItem("Timbangan"))}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 col-lg-12 d-none"},c.a.createElement(m.a,{name:"noFaktur",label:this.props.noFaktur,type:"text",readOnly:!0,component:b.a,defaultValue:this.props.noFaktur,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},this.state.kodeBarang?c.a.createElement(m.a,{name:"kodeBarang",label:"Kode Barang",component:b.b,className:"form-control",onChange:function(a){return e.pilihBarang(a)},onBlur:this.setKadar(),options:this.props.KodeBarangList.map((function(e){return{value:e.kode_jenis+"|"+e.nama_jenis+"|"+e.kadar_cetak+"|"+e.kadar_jual+"|"+e.kadar_beli,name:e.nama_jenis}}))}):c.a.createElement(h.a,{width:"100%",height:50})),c.a.createElement("div",{className:"col-md-8 col-lg-8"},c.a.createElement(m.a,{name:"keterangan",label:"Keterangan",type:"text",component:b.a,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"kadar",label:"Kadar (%)",type:"number",component:b.a})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"p",label:"P",type:"number",component:b.a})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"k",label:"K",type:"number",component:b.a})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"pkg",label:"Pkg (Gr)",type:"number",component:b.a,onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:b.a,onChange:this.onclick1()})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:b.a,onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"netto",label:"Netto (Gr)",type:"number",component:b.a,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"gross",label:"Gross (Gr)",type:"number",component:b.a,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"discGlobalPr",label:"Diskon (%)",type:"number",component:b.a,onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"discGlobalGr",label:"Diskon (Gr)",type:"number",component:b.a,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(m.a,{name:"nettoDiscGlobalExt",label:"Netto - Diskon (Gr)",type:"number",component:b.a,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),c.a.createElement(m.a,Object.assign({name:"rp",component:"input",type:"tel",className:"form-control"},v))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),t}(s.Component);y=Object(p.a)({form:"FormTransaksiPenjualan",enableReinitialize:!0,validate:k})(y);var f=Object(d.a)("FormTransaksiPenjualan");a.default=Object(i.b)((function(e){var a=f(e,"bruto","kadarTransaksi","pkg","discGlobalPr"),t=a.bruto,n=a.kadarTransaksi,l=a.pkg,o=a.discGlobalPr;return{netto:(parseFloat(t)*(parseFloat(n)/100)).toFixed(3),gross:parseFloat(t)+parseFloat(l),discGlobalGr:(parseFloat(t)*(parseFloat(o)/100)).toFixed(3),KodeBarangList:e.provinsi.kodeBarang}}))(y)}}]);
//# sourceMappingURL=26.99ed7010.chunk.js.map