(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[128],{1223:function(e,a,t){"use strict";t.r(a);var n=t(47),r=t(35),l=t(36),o=t(38),s=t(37),i=t(0),c=t.n(i),m=t(18),d=t(467),u=t(468),p=t(470),E=function(e){var a={};return e.kodeBarang||(a.kodeBarang="Tidak Boleh kosong"),a},h=t(185),g=t(68),b=t.n(g),k=Object(h.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),N=function(e){var a=e.input,t=e.label,n=e.type,r=e.limit,l=e.readOnly,o=e.meta,s=o.touched,i=o.error,m=o.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",maxLength:r,readOnly:l})),s&&(i&&c.a.createElement("p",{className:"invalid-feedback"},i)||m&&c.a.createElement("p",null,m)))},v=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).pilihBarang=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");n.setState({kodeJenis:a[0],namaJenis:a[1],kadarCetak:a[2],kadarBeli:a[3]})}},n.state={DataSupplier:[],kodeBarang:[]},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://147.139.193.169:3759/api/v1/subcategorys").then((function(a){return e.setState({kodeBarang:a.data})})).catch((function(e){return console.log(e)}))}},{key:"setKadar",value:function(){this.props.change("keterangan",this.state.namaJenis),this.props.change("kadar",this.state.kadarCetak),this.props.change("kadarTransaksi",this.state.kadarBeli),this.props.change("gross",this.props.gross)}},{key:"onclick1",value:function(){this.props.change("netto",this.props.netto),this.props.change("noFaktur",this.props.noFaktur),this.props.change("gross",this.props.gross)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 form-group"},c.a.createElement("label",{htmlFor:""},"Kode Barang"),c.a.createElement(d.a,{name:"kodeJenis",component:"select",className:"form-control",onChange:this.pilihBarang(),onBlur:this.setKadar()},c.a.createElement("option",{value:"DEFUALT",key:"DEFUALT"},"SILAHKAN PILIH"),this.state.kodeBarang===[]?c.a.createElement("option",null,"TIDAK ADA DATA"):this.state.kodeBarang.map((function(e){return c.a.createElement("option",{value:e.kodeJenis+"|"+e.namaJenis+"|"+e.kadarCetak+"|"+e.kadarBeli},e.namaJenis)})))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement(d.a,{name:"keterangan",label:"Keterangan",type:"text",component:N,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("label",{htmlFor:""},"."),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("label",null,c.a.createElement(d.a,{name:"jenis",id:"jenis",component:"input",type:"checkbox"}),"Manual")))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"barcode",label:"Barcode",type:"text",component:N,normalize:function(e){return e&&e.toUpperCase()}})),!0===this.props.jenis?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"pkg",label:"Bungkus(Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"gross",label:"Gross (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"pkg",label:"Bungkus(Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()},readOnly:!0})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"bruto",label:"Berat (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()},readOnly:!0})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"gross",label:"Gross (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()},readOnly:!0}))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"kadar",label:"Kadar",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"kadarTransaksi",label:"Harga (%)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(d.a,{name:"netto",label:"Murni (Gr)",type:"number",component:N,normalize:function(e){return e&&e.toUpperCase()},onBlur:function(){return e.onclick1()}})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),c.a.createElement(d.a,Object.assign({name:"rp",component:"input",type:"tel",className:"form-control"},k))),c.a.createElement("div",{className:"col-md-12 form-group mt-3"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.submitting,type:"submit"},"Simpan")))))}}]),t}(i.Component);v=Object(u.a)({form:"FormPengambilanBarcode",validate:E,enableReinitialize:!0})(v);var f=Object(p.a)("FormPengambilanBarcode"),y=Object(m.b)((function(e){var a=f(e,"bruto","kadarTransaksi","pkg","jenis"),t=a.bruto,n=a.kadarTransaksi,r=a.pkg,l=a.jenis;return{netto:(parseFloat(t)*(parseFloat(n)/100)).toFixed(3),gross:parseFloat(t)+parseFloat(r),jenis:l}}))(v),F=t(478),A=t.n(F),B=t(504),S=t.n(B),T=t(503),U=t.n(T),P=t(19),R=t.n(P),j=t(88),O=t(10),C=t.n(O),I=t(286),L=t(182),x=function(e){Object(o.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).inputChange=function(e){return function(a){l.setState(Object(n.a)({},e,a.target.value))}},l.state={columns:[{dataField:"kodeJenis",text:"Kode Barang"},{dataField:"keterangan",text:"Keterangan"},{dataField:"pabrik",text:"Pabrik"},{dataField:"barcode",text:"Barcode"},{dataField:"gross",text:"Gross"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"kadar",text:"Kadar"},{dataField:"kadarTransaksi",text:"Harga(%)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"rp",text:"Ongkos(RP)"}]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(I.b)())}},{key:"handleSubmit",value:function(e){var a={kodeJenis:(e.kodeJenis?e.kodeJenis:"DEFAULT|DEFAULT|DEFAULT|DEFAULT").split("|")[0],keterangan:e.keterangan,jenis:e.jenis,barcode:e.barcode,pkg:e.pkg,bruto:e.bruto,netto:e.netto,gross:e.gross,kadar:e.kadar,kadarTransaksi:e.kadarTransaksi,rp:e.rp},t=JSON.parse(localStorage.getItem("pengambilanBarcode"))||[];t.push(a),localStorage.setItem("pengambilanBarcode",JSON.stringify(t)),C.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),this.props.dispatch(Object(I.b)()),this.props.dispatch(Object(L.a)("FormPengambilanBarcode")),document.getElementById("dismissModal").click()}},{key:"pengambilanBarcodeSubmit",value:function(){var e={jenisTransaksi:this.state.jenisTransaksi,tanggal:this.state.tanggal,baki:this.state.baki,namaToko:this.state.namaToko,detail:this.state.detail,barang:JSON.parse(localStorage.getItem("pengambilanBarcode"))};console.log(e)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Jenis Transaksi"),c.a.createElement("select",{type:"text",id:"jenisTransaksi",name:"jenisTransaksi",className:"form-control",onChange:this.inputChange("jenisTransaksi")},c.a.createElement("option",{value:"RETURN SUPPLIER",key:"RETURN SUPPLIER"},"RETURN SUPPLIER"),c.a.createElement("option",{value:"PENERIMAAN SUPPLIER",key:"PENERIMAAN SUPPLIER"},"PENERIMAAN SUPPLIER"),c.a.createElement("option",{value:"PENJUALAN",key:"PENJUALAN"},"PENJUALAN"),c.a.createElement("option",{value:"PINDAH BARANG",key:"PINDAH BARANG"},"PINDAH BARANG"),c.a.createElement("option",{value:"RETURN CUSTOMER",key:"RETURN CUSTOMER"},"RETURN CUSTOMER"))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggal",className:"form-control",onChange:this.inputChange("tanggal")})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Baki"),c.a.createElement("input",{type:"text",id:"baki",name:"baki",className:"form-control",onChange:this.inputChange("baki")})),"PENJUALAN"===this.state.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},c.a.createElement("label",{htmlFor:""},"Nama Toko"),c.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))):"PENERIMAAN SUPPLIER"===this.state.jenisTransaksi||"RETURN SUPPLIER"===this.state.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},c.a.createElement("label",{htmlFor:""},"Nama Supplier"),c.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))):"PINDAH BARANG"===this.state.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},c.a.createElement("label",{htmlFor:""},"Dari"),c.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"})),c.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},c.a.createElement("label",{htmlFor:""},"Ke"),c.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))):"RETURN CUSTOMER"===this.state.jenisTransaksi?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},c.a.createElement("label",{htmlFor:""},"Nama Toko"),c.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-md-5 col-lg-4 mt-2"},c.a.createElement("label",{htmlFor:""},"Nama Supplier"),c.a.createElement(j.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih"}))),c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.pengambilanBarcodeSubmit()}},"SIMPAN"))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#primary-header-modal"},"TAMBAH DATA"))))),c.a.createElement("div",{className:"col-lg-12 mt-3"},this.props.pengambilanBarcode?c.a.createElement(S.a,{keyField:"id",data:this.props.pengambilanBarcode,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group mt-2"},c.a.createElement(A.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:U()()})))})):c.a.createElement(R.a,{width:"100%",height:100})))))))),c.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Pengamblan Barcode"),c.a.createElement("button",{type:"button",id:"dismissModal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(y,{onSubmit:function(a){return e.handleSubmit(a)},noFaktur:this.props.noFaktur}))))))}}]),t}(i.Component);a.default=Object(m.b)((function(e){return{pengambilanBarcode:e.provinsi.pengambilanBarcode}}),null)(x)},182:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(20),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors}}]);
//# sourceMappingURL=128.3fe3d90f.chunk.js.map