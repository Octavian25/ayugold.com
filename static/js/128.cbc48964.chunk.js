(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[128],{1248:function(e,a,t){"use strict";t.r(a);var n=t(47),r=t(35),l=t(36),o=t(38),i=t(37),s=t(0),c=t.n(s),m=t(18),p=t(87),d=t(67),u=t.n(d),g=t(69),k=t(5),h=t(189),b=t(467),E=t(468),v=t(470),f=t(543),N=t(185),F=Object(N.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),y=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,l=e.readOnly,o=e.meta,i=o.touched,s=o.error,m=o.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:r,readOnly:l})),i&&(s&&c.a.createElement("p",{className:"invalid-feedback"},s)||m&&c.a.createElement("p",null,m)))},B=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).pilihBarang=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");n.setState({kodeJenis:a[0],namaJenis:a[1],kadarCetak:a[2],kadarBeli:a[3]})}},n.onclick1=n.onclick1.bind(Object(h.a)(n)),n.state={kodeBarang:[],DataSupplier:[],kode_barang:"",keterangan:"INI KETERANGAN",kadar:"",P:"",K:"",bungkus:"",berat:"",harga:"",murni:"",ongkos:"",status:"",kadarCetak:"",kadarBeli:"",namaJenis:"",kodeJenis:""},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;u.a.get("http://192.168.1.27:7002/api/v1/subcategorys").then((function(a){return e.setState({kodeBarang:a.data})})).catch((function(e){return console.log(e)}))}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto),this.props.change("noFaktur",this.props.noFaktur),this.props.change("gross",this.props.gross)}},{key:"setKadar",value:function(){this.props.change("keterangan",this.state.namaJenis),this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 col-lg-12 d-none"},c.a.createElement(b.a,{name:"noFaktur",label:this.props.noFaktur,type:"text",readOnly:!0,component:y,defaultValue:this.props.noFaktur,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-4 form-group"},c.a.createElement("label",{htmlFor:""},"Kode Barang"),c.a.createElement(b.a,{name:"kodeJenis",component:"select",className:"form-control",onChange:this.pilihBarang(),onBlur:this.setKadar()},this.state.kodeBarang===[]?c.a.createElement("option",null,"TIDAK ADA DATA"):this.state.kodeBarang.map((function(e){return c.a.createElement("option",{value:e.kodeJenis+"|"+e.namaJenis+"|"+e.kadarCetak+"|"+e.kadarBeli},e.namaJenis)})))),c.a.createElement("div",{className:"col-md-8 form-group",style:"terima"===this.props.from?null:{visibility:"hidden"}},c.a.createElement(b.a,{name:"keterangan",label:"Keterangan",type:"text",component:y,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(b.a,{name:"kadar",label:"Kadar (%)",type:"number",component:y,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(b.a,{name:"p",label:"P",type:"number",component:y})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(b.a,{name:"k",label:"K",type:"number",component:y})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(b.a,{name:"pkg",label:"Bungkus (Gr)",type:"number",component:y,onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(b.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:y,onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(b.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:y,onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(b.a,{name:"gross",label:"Gross (Gr)",type:"number",component:y,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(b.a,{name:"netto",label:"Murni (Gr)",type:"number",component:y,readOnly:!0})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),c.a.createElement(b.a,Object.assign({name:"rp",component:"input",type:"tel",className:"form-control"},F))),c.a.createElement("div",{className:"col-md-12 form-group mt-3"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},"Simpan")))))}}]),t}(s.Component);B=Object(E.a)({form:"TerimaSupplier",validate:f.a,enableReinitialize:!0})(B);var S=Object(v.a)("TerimaSupplier"),T=Object(m.b)((function(e){var a=S(e,"bruto","kadarTransaksi","pkg"),t=a.bruto,n=a.kadarTransaksi,r=a.pkg;return{netto:(parseFloat(t)*(parseFloat(n)/100)).toFixed(3),gross:parseFloat(t)+parseFloat(r)}}))(B),O=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var l;Object(r.a)(this,t),(l=a.call(this,e)).inputChange=function(e){return function(a){l.setState(Object(n.a)({},e,a.target.value))}},l.pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");l.setState({kodeSupplier:a[0],namaSupplier:a[1]})}};var o=new Date,i="".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate());return l.state={listSupplier:[],columns:[{dataField:"kodeBarang",text:"Kode Barang"},{dataField:"kadar",text:"Kadar Cetak(%)"},{dataField:"p",text:"P"},{dataField:"k",text:"K"},{dataField:"bungkus",text:"Bungkus(Gr)"},{dataField:"berat",text:"Berat(Gr)"},{dataField:"harga",text:"Harga(%)"},{dataField:"murni",text:"Murni(Gr)"},{dataField:"ongkosKirim",text:"Ongkos(RP)"}],title:"PENERIMAAN SUPPLIER",content:"HELLO",tanggal_invoice:"",tanggal_barang:"",noBon:"",kodeSupplier:"",namaSupplier:"",startingDate:i,tampungBarang:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(p.f)()),u.a.get("http://192.168.1.27:7002/api/v1/suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(g.b)())}},{key:"handleSubmit",value:function(e){var a={noFaktur:this.props.noFaktur,tanggal:this.state.tanggal_invoice,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier,namaSupplier:this.state.namaSupplier,tanggalBarang:this.state.tanggal_barang,barangDetails:{noFaktur:this.props.noFaktur,nettoDiscGlobalExt:0,gross:parseFloat(e.gross),netto:parseFloat(e.netto),qty:0,k:parseFloat(e.k),rp:parseFloat(e.rp),kadarCetak:0,keterangan:e.keterangan,discGlobalPr:0,kodeKategori:"-",kadarTransaksi:parseFloat(e.kadarTransaksi),kodeJenis:e.kodeJenis,noBarcode:"-",p:parseFloat(e.p),discGlobalGr:0,pkg:parseFloat(e.pkg),bruto:parseFloat(e.bruto),nettoDiscGlobal:0}};console.log(a);var t=this.state.tampungBarang;t.push(a),this.setState({tampungBarang:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(k.b,{to:"/editStok"},c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Supplier"),c.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return c.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal Invoice"),c.a.createElement("input",{type:"date",id:"tanggal_invoice",name:"tanggal_invoice",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggal_invoice")})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal Barang"),c.a.createElement("input",{type:"date",id:"tanggal_barang",name:"tanggal_barang",className:"form-control",onChange:this.inputChange("tanggal_barang")})),c.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Keterangan"),c.a.createElement("input",{type:"text",id:"keterangan",name:"keterangan",className:"form-control",onChange:this.inputChange("keterangan")})),c.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"No Bon"),c.a.createElement("input",{type:"text",id:"noBon",name:"noBon",className:"form-control",onChange:this.inputChange("noBon")})),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement(k.b,{to:"/ViewPDF"},c.a.createElement("button",{className:"btn btn-primary",type:"button"},"PDF")))),c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#primary-header-modal"},"Tambah Data"))))))))))),c.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Terima Supplier"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(T,{from:"terima",onSubmit:function(a){return e.handleSubmit(a)},noFaktur:this.props.noFaktur}))))))}}]),t}(s.Component);a.default=Object(m.b)((function(e){return{supplierList:e.provinsi.supplier,noFaktur:e.provinsi.noFaktur,alert:e.provinsi.alert,error:e.provinsi.error}}),null)(O)},543:function(e,a,t){"use strict";a.a=function(e){var a={};return e.kodeBarang||(a.kodeBarang="Tidak Boleh kosong, silahkan isi"),e.pkg||(a.pkg="Tidak Boleh kosong, silahkan isi"),e.p||(a.p="Tidak Boleh kosong, silahkan isi"),e.k||(a.k="Tidak Boleh kosong, silahkan isi"),e.bruto||(a.bruto="Tidak Boleh kosong, silahkan isi"),a}}}]);
//# sourceMappingURL=128.cbc48964.chunk.js.map