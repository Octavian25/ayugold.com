(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[51],{1177:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(15),o=a(16),i=a(18),l=a(17),c=a(0),s=a.n(c),u=a(12),p=a(94),m=a(29),g=a(75),d=a(7),h=a.n(d),f=a(59),S=a(21),b=a(53),k=a(9),v=a(516),E=a(544),N=a(95),y=a(14),B=a.n(y),F=a(51),O=a(3),x=a(43),C=a(522),I=Object(c.lazy)((function(){return Promise.all([a.e(3),a.e(17)]).then(a.bind(null,672))})),j=Object(c.lazy)((function(){return Promise.all([a.e(2),a.e(5)]).then(a.bind(null,509))})),T=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;Object(r.a)(this,a),(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value)),localStorage.setItem([e],t.target.value)}};var i=new Date,l="".concat(i.getFullYear(),"-").concat(i.getMonth()+1,"-").concat(i.getDate());return o.state={listSupplier:[],onDelete:!1,columns:[{dataField:"kode_jenis",text:"Kode Barang"},{dataField:"kadar_cetak",text:"Kadar Cetak(%)"},{dataField:"plastik",text:"P"},{dataField:"kulit",text:"K"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"kadar_beli",text:"Harga(%)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"ongkos_rp",text:"Ongkos(RP)",formatter:function(e){return s.a.createElement("span",null,"Rp. ",parseFloat(e).toLocaleString("ID-id"))}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t,a){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return Object(v.b)("TerimaSupplier",a,o.props.dispatch,Object(f.i)()).then((function(){var e=JSON.parse(localStorage.getItem("TerimaSupplier"))||[];localStorage.setItem("totalNW",e.map((function(e){return e.netto})).reduce((function(e,t){return e+t}),0).toFixed(3))})).then((function(){return o.setState({totalNW:localStorage.getItem("totalNW")||0})}))}},s.a.createElement(E.a,{id:"hapus",type:"dark",effect:"solid"},s.a.createElement("span",null,"Hapus")),s.a.createElement("i",{className:"fa fa-trash mr-1"})),s.a.createElement("br",null))}}],tanggal_invoice:l,tanggal_barang:l,noBon:"",totalNW:localStorage.getItem("totalNW")||0,totalBruto:0,totalPkg:0,totalGross:0,totalOngkir:0,kodeSupplier:"",namaSupplier:"",keterangan:"",startingDate:l,tampungBarang:[],tampungBarangLocal:[],urutan:localStorage.getItem("urutan")||0},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(p.f)()),Object(O.b)("supplier/get/all").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(m.b)()),this.props.dispatch(Object(f.i)()),this.getSumData()}},{key:"pilihSupplier",value:function(e){var t=(e||"DEFALT | DEFAULT").split("|");this.setState({kodeSupplier:t[0],namaSupplier:t[1]}),localStorage.setItem("namaSupplier",t[0]),localStorage.setItem("kodeSupplier",t[1])}},{key:"handleSubmit",value:function(e){var t=this,a=JSON.parse(localStorage.getItem("TerimaSupplier"))||[],n=(e.kodeJenis?e.kodeJenis:"DEFALT | DEFAULT").split("|"),r={no_urut:a.length+1,kode_jenis:n[0],keterangan:e.keterangan.toUpperCase(),kadar_cetak:n[2],kadar_beli:parseFloat(e.kadarTransaksi),kode_barcode:"-",qty:1,plastik:parseFloat(e.p),kulit:parseFloat(e.k),pkg:parseFloat(e.pkg),gross:parseFloat(e.gross),bruto:parseFloat(e.bruto),netto:parseFloat(e.netto),ongkos_rp:parseFloat(e.rp||0)};a.push(r),localStorage.setItem("TerimaSupplier",JSON.stringify(a)),localStorage.setItem("totalNW",a.map((function(e){return e.netto})).reduce((function(e,t){return e+t}),0).toFixed(3)),h.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(g.a)("TerimaSupplier"))})).then((function(){return t.getSumData()})).then((function(){return t.props.dispatch(Object(f.i)())}))}},{key:"getSumData",value:function(){this.props.dispatch(Object(k.o)("TerimaSupplier")),this.props.dispatch(Object(k.l)("TerimaSupplier")),this.props.dispatch(Object(k.s)("TerimaSupplier")),this.props.dispatch(Object(k.q)("TerimaSupplier")),this.props.dispatch(Object(k.r)("TerimaSupplier"))}},{key:"kirimData",value:function(){var e=this,t=(this.state.kodeSupplier?this.state.kodeSupplier:"DEFALT | DEFAULT").split("|");if(""===this.state.kodeSupplier)return Object(S.e)("Mohon pilih Supplier"),!1;if(""===this.state.keterangan)return Object(S.e)("Mohon isi Keterangan"),!1;if(""===this.state.noBon)return Object(S.e)("Mohon Isi nomor Bon"),!1;if(null===localStorage.getItem("TerimaSupplier"))return Object(S.e)("Barang masih kosong, mohon tambahkan barang"),!1;if(""===this.state.tanggalBarang)return Object(S.e)("Mohon isi Tanggal"),!1;if(""===this.state.tanggal)return Object(S.e)("Mohon isi Tanggal Invoice"),!1;this.props.dispatch(Object(k.t)());var a={no_terima:this.props.noFaktur.toUpperCase(),no_bon:this.props.noFaktur.toUpperCase(),kode_supplier:t[0],total_netto:this.props.sumNetto,total_netto_ext:this.props.totalNW,tanggal_invoice:this.state.tanggal,tanggal_barang:this.state.tanggalBarang,detail_barang:JSON.parse(localStorage.getItem("TerimaSupplier"))},n=[],r=JSON.parse(localStorage.getItem("TerimaSupplier"));r.forEach((function(e,t){var a=[++t,e.kode_jenis,e.kadar_cetak,e.plastik,e.kulit,e.pkg,e.bruto,e.kadar_beli,e.netto,parseFloat(e.ongkos_rp).toLocaleString("id-ID")];n.push(a)}));var o=["","","","","",r.map((function(e){return e.pkg})).reduce((function(e,t){return e+t}),0),r.map((function(e){return e.bruto})).reduce((function(e,t){return e+t}),0),"",r.map((function(e){return e.netto})).reduce((function(e,t){return e+t}),0).toFixed(3),r.map((function(e){return e.ongkos_rp})).reduce((function(e,t){return e+t}),0).toLocaleString("id-ID")];n.push(o),console.log(JSON.stringify(n));var i=["No","Kode Barang","Kadar Cetak (%)","P","K","Bungkus(Gr)","Berat(Gr)","Harga(Gr)","Murni(Gr)","Ongkos(Rp)"];Object(O.c)("trx-supplier/terima-barang",a).then((function(t){return h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(f.i)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return Object(b.a)("no Terima",e.props.noFaktur.toUpperCase(),"Tanggal",e.state.tanggal_invoice,"No Bon",e.state.noBon.toUpperCase(),"Supplier",e.state.kodeSupplier.toUpperCase(),"ADMIN",e.state.tanggal,"",i,"Terima Barang Supplier",n)})).then((function(){return localStorage.removeItem("TerimaSupplier")})).then((function(){return localStorage.removeItem("noBon")})).then((function(){return localStorage.removeItem("tanggal")})).then((function(){return localStorage.removeItem("tanggalBarang")})).then((function(){return localStorage.removeItem("namaSupplier")})).then((function(){return localStorage.removeItem("kodeSupplier")})).then((function(){return localStorage.removeItem("keterangan")})).then((function(){return localStorage.removeItem("totalNW")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return localStorage.setItem("isLogin",!0)})).then((function(){return e.props.dispatch(Object(m.b)())})).then((function(){return e.setState({noBon:"",keterangan:"",totalNW:"",kodeSupplier:""})})).then((function(){return e.props.dispatch(Object(f.i)())})).then((function(){return document.getElementById("myForm").reset()})).then((function(){return e.props.dispatch(Object(k.k)())}))})).catch((function(t){return h.a.fire({position:"top-end",icon:"error",text:"Data Gagal Ditambahkan",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(k.k)())}))}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid",style:{color:"black"}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"card"},s.a.createElement(x.default,{title:"Terima Barang Supplier"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-9"}),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("br",null)),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("form",{id:"myForm"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4 col-md-4"},s.a.createElement("label",{htmlFor:""},"Supplier"),this.state.listSupplier?s.a.createElement(N.a,{name:"supplier",id:"kodeSupplier",options:this.state.listSupplier.map((function(e){return{value:e.kode_supplier+"|"+e.nama_supplier,name:e.nama_supplier}})),search:!0,onChange:function(t){return e.pilihSupplier(t)}}):s.a.createElement(B.a,{width:"100%",height:50})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Invoice"),s.a.createElement("input",{type:"date",id:"tanggal_invoice",name:"tanggal_invoice",className:"form-control",onChange:this.inputChange("tanggal")})),s.a.createElement("div",{className:"col-md-4 col-lg-4"},s.a.createElement("label",{htmlFor:""},"Tanggal Barang"),s.a.createElement("input",{type:"date",id:"tanggal_barang",name:"tanggal_barang",className:"form-control",onChange:this.inputChange("tanggalBarang")})),s.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Keterangan"),s.a.createElement("input",{type:"text",id:"keterangan",name:"keterangan",className:"form-control",onChange:this.inputChange("keterangan"),value:localStorage.getItem("keterangan")||""})),s.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"No Bon"),s.a.createElement("input",{type:"text",id:"noBon",name:"noBon",className:"form-control",onChange:this.inputChange("noBon"),value:localStorage.getItem("noBon")||""})),s.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Total NW Ext"),s.a.createElement("input",{type:"number",step:.001,min:0,id:"totalNW",name:"totalNW",className:"form-control",onChange:this.inputChange("totalNW"),value:this.props.totalNW||0})),s.a.createElement(j,{content:s.a.createElement(c.Suspense,{fallback:s.a.createElement(B.a,{width:"100%",height:400})},s.a.createElement(I,{from:"terima",onSubmit:function(t){return e.handleSubmit(t)},noFaktur:this.props.noFaktur})),title:"Tambah Data Barang"}),s.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"}),s.a.createElement("div",{className:"col-lg-6 col-md-6"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){return e.props.dispatch(Object(F.j)())}},"Tambah Data",s.a.createElement("i",{className:"fa fa-plus ml-3"})))))))))),s.a.createElement(C.a,{keyField:"kodeJenis",data:this.props.tampungBarang||[],columns:this.state.columns,textEmpty:"Silahkan Tambah Data Dengan Klik Tombol Biru Diatas"}),s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.kirimData()},disabled:this.props.onSend},this.props.onSend?s.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",s.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))))))}}]),a}(c.Component);t.default=Object(u.b)((function(e){return{supplierList:e.provinsi.supplier,tampungBarang:e.provinsi.terimaSupplierTemp,noFaktur:e.provinsi.noFaktur,username:e.provinsi.username,alert:e.provinsi.alert,error:e.provinsi.error,totalNW:e.provinsi.totalNW,sumBruto:e.perhitungan.sumBruto,sumNetto:e.perhitungan.sumNetto,sumRp:e.perhitungan.sumRp,sumPkg:e.perhitungan.sumPkg,sumQty:e.perhitungan.sumQty,onSend:e.provinsi.onSend}}),null)(T)},516:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(7),r=a.n(n),o=function(e){e.forEach((function(e){localStorage.removeItem(e)}))},i=function(e,t,a,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(e))||[];i.splice(t,1),localStorage.setItem(e,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)}))}}))},l=function(e,t,a,n){return new Promise((function(o,i){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){if(i.isConfirmed){var l=JSON.parse(localStorage.getItem(e))||[];l.splice(t,1),localStorage.setItem(e,JSON.stringify(l)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)})).then(o("Berhasil")).catch("Gagal")}}))}))}},522:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(481),i=a.n(o),l=a(507),c=a.n(l),s=a(506),u=a.n(s),p=a(523),m=a.n(p);var g=function(e){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:m.a,width:"250",height:"250",alt:"Empty"}),r.a.createElement("h5",null,e.text)))},d=l.Search.SearchBar,h=l.CSVExport.ExportCSVButton;t.a=function(e){var t=e.textEmpty,a=e.handleClick,n=e.tambahData,o=e.expandRow,l=e.selectRow,s=e.exportCSV;return r.a.createElement(c.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-left"},r.a.createElement(d,e.searchProps))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-right"},n&&r.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",r.a.createElement("i",{className:"fa fa-plus ml-3"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"col-12"},r.a.createElement(i.a,Object.assign({pagination:u()(),selectRow:l,expandRow:o},e.baseProps,{striped:!0,noDataIndication:r.a.createElement(g,{text:t||"Tidak Ada Data"})})),r.a.createElement("br",null),s&&r.a.createElement(h,e.csvProps,"Export CSV!!")))}))}},523:function(e,t,a){e.exports=a.p+"static/media/emptyTable.ffc2d7dc.svg"},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors}}]);
//# sourceMappingURL=51.dc0ee259.chunk.js.map