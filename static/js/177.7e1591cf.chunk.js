(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[177],{1227:function(e,a,t){"use strict";t.r(a);var n=t(77),r=t(71),l=t(72),o=t(74),s=t(73),c=t(0),i=t.n(c),m=t(27),d=t(465),u=t(458),p=t(467),E=function(e){var a={};return e.kodeBarang||(a.kodeBarang="Tidak Boleh kosong"),a},h=t(498),g=t(45),b=t.n(g),k=Object(h.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),N=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,l=e.readOnly,o=e.meta,s=o.touched,c=o.error,m=o.warning;return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"",className:"text-black"},t),i.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",maxLength:r,readOnly:l})),s&&(c&&i.a.createElement("p",{className:"invalid-feedback"},c)||m&&i.a.createElement("p",null,m)))},v=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).pilihBarang=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");n.setState({kodeJenis:a[0],namaJenis:a[1],kadarCetak:a[2],kadarBeli:a[3]})}},n.state={DataSupplier:[],kodeBarang:[]},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("http://147.139.182.75:3759/api/v1/subcategorys").then((function(a){return e.setState({kodeBarang:a.data})})).catch((function(e){return console.log(e)}))}},{key:"setKadar",value:function(){this.props.change("keterangan",this.state.namaJenis),this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli),this.props.change("gross",this.props.gross)}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto),this.props.change("noFaktur",this.props.noFaktur),this.props.change("gross",this.props.gross)}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4 form-group"},i.a.createElement("label",{htmlFor:""},"Kode Barang"),i.a.createElement(d.a,{name:"kodeJenis",component:"select",className:"form-control",onChange:this.pilihBarang(),onBlur:this.setKadar()},i.a.createElement("option",{value:"DEFUALT",key:"DEFUALT"},"SILAHKAN PILIH"),this.state.kodeBarang===[]?i.a.createElement("option",null,"TIDAK ADA DATA"):this.state.kodeBarang.map((function(e){return i.a.createElement("option",{value:e.kodeJenis+"|"+e.namaJenis+"|"+e.kadarCetak+"|"+e.kadarBeli},e.namaJenis)})))),i.a.createElement("div",{className:"col-md-8"},i.a.createElement(d.a,{name:"keterangan",label:"Keterangan",type:"text",component:N,normalize:function(e){return e&&e.toUpperCase()}})),i.a.createElement("div",{className:"col-md-3"},i.a.createElement("label",{htmlFor:""},"."),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement("label",null,i.a.createElement(d.a,{name:"jenis",id:"jenis",component:"input",type:"checkbox"}),"Manual")))),i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"barcode",label:"Barcode",type:"text",component:N,normalize:function(e){return e&&e.toUpperCase()}})),!0===this.props.jenis?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"pkg",label:"Bungkus(Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"gross",label:"Gross (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}}))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"pkg",label:"Bungkus(Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()},readOnly:!0})),i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()},readOnly:!0})),i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"gross",label:"Gross (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()},readOnly:!0}))),i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"kadar",label:"Kadar",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),i.a.createElement("div",{className:"col-md-3"},i.a.createElement(d.a,{name:"netto",label:"Murni (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),i.a.createElement("div",{className:"col-md-3 form-group"},i.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),i.a.createElement(d.a,Object.assign({name:"rp",component:"input",type:"tel",className:"form-control"},k))),i.a.createElement("div",{className:"col-md-12 form-group mt-3"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},"Simpan")))))}}]),t}(c.Component);v=Object(u.a)({form:"FormPengambilanBarcode",validate:E,enableReinitialize:!0})(v);var f=Object(p.a)("FormPengambilanBarcode"),y=Object(m.b)((function(e){var a=f(e,"bruto","kadarTransaksi","pkg","jenis"),t=a.bruto,n=a.kadarTransaksi,r=a.pkg,l=a.jenis;return{netto:(parseFloat(t)*(parseFloat(n)/100)).toFixed(3),gross:parseFloat(t)+parseFloat(r),jenis:l}}))(v),B=t(468),F=t.n(B),A=t(471),T=t.n(A),U=t(470),P=t.n(U),R=t(173),S=t.n(R),j=t(178),O=t(51),C=t.n(O),I=t(274),L=t(288),x=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).inputChange=function(e){return function(a){l.setState(Object(n.a)({},e,a.target.value))}},l.state={columns:[{dataField:"kodeJenis",text:"Kode Barang"},{dataField:"keterangan",text:"Keterangan"},{dataField:"pabrik",text:"Pabrik"},{dataField:"barcode",text:"Barcode"},{dataField:"gross",text:"Gross"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"kadar",text:"Kadar"},{dataField:"kadarTransaksi",text:"Harga(%)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"}]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(I.b)())}},{key:"handleSubmit",value:function(e){var a={kodeJenis:(e.kodeJenis?e.kodeJenis:"DEFAULT|DEFAULT|DEFAULT|DEFAULT").split("|")[0],keterangan:e.keterangan,jenis:e.jenis,barcode:e.barcode,pkg:e.pkg,bruto:e.bruto,netto:e.netto,gross:e.gross,kadar:e.kadar,kadarTransaksi:e.kadarTransaksi,rp:e.rp},t=JSON.parse(localStorage.getItem("pengambilanBarcode"))||[];t.push(a),localStorage.setItem("pengambilanBarcode",JSON.stringify(t)),C.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.dispatch(Object(I.b)()),this.props.dispatch(Object(L.a)("FormPengambilanBarcode")),document.getElementById("dismissModal").click()}},{key:"pengambilanBarcodeSubmit",value:function(){var e={jenisTransaksi:this.state.jenisTransaksi,tanggal:this.state.tanggal,baki:this.state.baki,namaToko:this.state.namaToko,detail:this.state.detail,barang:JSON.parse(localStorage.getItem("pengambilanBarcode"))};console.log(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid",style:{color:"black"}},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"col-lg-12 col-md-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4 col-md-4"},i.a.createElement("label",{htmlFor:""},"Jenis Transaksi"),i.a.createElement("select",{type:"text",id:"jenisTransaksi",name:"jenisTransaksi",className:"form-control",onChange:this.inputChange("jenisTransaksi")},i.a.createElement("option",{value:"RETURN SUPPLIER",key:"RETURN SUPPLIER"},"RETURN SUPPLIER"),i.a.createElement("option",{value:"PENERIMAAN SUPPLIER",key:"PENERIMAAN SUPPLIER"},"PENERIMAAN SUPPLIER"),i.a.createElement("option",{value:"PENJUALAN",key:"PENJUALAN"},"PENJUALAN"),i.a.createElement("option",{value:"PINDAH BARANG",key:"PINDAH BARANG"},"PINDAH BARANG"),i.a.createElement("option",{value:"RETURN CUSTOMER",key:"RETURN CUSTOMER"},"RETURN CUSTOMER"))),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Tanggal"),i.a.createElement("input",{type:"date",id:"tanggal",name:"tanggal",className:"form-control",onChange:this.inputChange("tanggal")})),i.a.createElement("div",{className:"col-md-4 col-lg-4"},i.a.createElement("label",{htmlFor:""},"Baki"),i.a.createElement("input",{type:"text",id:"baki",name:"baki",className:"form-control",onChange:this.inputChange("baki")})),"PENJUALAN"===this.state.jenisTransaksi?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},i.a.createElement("label",{htmlFor:""},"Nama Toko"),i.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))):"PENERIMAAN SUPPLIER"===this.state.jenisTransaksi||"RETURN SUPPLIER"===this.state.jenisTransaksi?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},i.a.createElement("label",{htmlFor:""},"Nama Supplier"),i.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))):"PINDAH BARANG"===this.state.jenisTransaksi?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},i.a.createElement("label",{htmlFor:""},"Dari"),i.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"})),i.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},i.a.createElement("label",{htmlFor:""},"Ke"),i.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))):"RETURN CUSTOMER"===this.state.jenisTransaksi?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},i.a.createElement("label",{htmlFor:""},"Nama Toko"),i.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},i.a.createElement("label",{htmlFor:""},"Nama Supplier"),i.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))),i.a.createElement("div",{className:"col-lg-12 col-md-12 mt-4"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("div",{className:"text-left"},i.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.pengambilanBarcodeSubmit()}},"SIMPAN"))),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#primary-header-modal"},"TAMBAH DATA"))))),i.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.pengambilanBarcode?i.a.createElement(T.a,{keyField:"id",data:this.props.pengambilanBarcode,columns:this.state.columns,search:!0},(function(e){return i.a.createElement("div",{className:"form-group mt-2"},i.a.createElement(F.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:P()()})))})):i.a.createElement(S.a,{width:"100%",height:100})))))))),i.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},i.a.createElement("div",{className:"modal-dialog modal-lg"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},i.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Pengamblan Barcode"),i.a.createElement("button",{type:"button",id:"dismissModal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),i.a.createElement("div",{className:"modal-body"},i.a.createElement(y,{onSubmit:function(a){return e.handleSubmit(a)},noFaktur:this.props.noFaktur}))))))}}]),t}(c.Component);a.default=Object(m.b)((function(e){return{pengambilanBarcode:e.provinsi.pengambilanBarcode}}),null)(x)}}]);
//# sourceMappingURL=177.7e1591cf.chunk.js.map