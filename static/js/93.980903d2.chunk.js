(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[93],{1178:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(15),o=a(16),i=a(18),s=a(17),l=a(0),c=a.n(l),u=a(29),p=a(12),m=a(481),d=a.n(m),h=a(507),g=a.n(h),f=a(506),b=a.n(f),k=a(75),S=a(7),E=a.n(S),v=a(59),O=a(94),N=a(53),F=a(21),j=a(516),y=a(544),B=a(206),C=a(9),D=a(3),R=a(51),x=a(14),_=a.n(x),A=a(43),I=Object(l.lazy)((function(){return Promise.all([a.e(3),a.e(17)]).then(a.bind(null,672))})),T=Object(l.lazy)((function(){return Promise.all([a.e(2),a.e(5)]).then(a.bind(null,509))})),w=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var o;Object(r.a)(this,a);var i=new Date,s="".concat(i.getFullYear(),"-").concat(i.getMonth()+1,"-").concat(i.getDate());return(o=t.call(this,e)).inputChange=function(e){return function(t){o.setState(Object(n.a)({},e,t.target.value))}},o.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");o.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},o.state={listSupplier:[],DataSupplier:[],kodeSupplier:"",namaSupplier:"",tanggal:s,noReturn:"",noBon:"",status:"",totalNW:0,totalOngkir:0,dateStart:s,tampungBarang:[],tampungBarangLocal:[],columns:[{dataField:"kode_jenis",text:"Kode Barang"},{dataField:"kadar_cetak",text:"Kadar Cetak(%)"},{dataField:"plastik",text:"P"},{dataField:"kulit",text:"K"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"kadar_beli",text:"Harga(%)"},{dataField:"netto",text:"Murni(Gr)"},{dataField:"ongkos_rp",text:"Ongkos(RP)",formatter:function(e){return c.a.createElement("span",null,"Rp. ",parseFloat(e).toLocaleString("ID-id"))}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return Object(j.a)("ReturnSupplier",a,o.props.dispatch,Object(B.b)())}},c.a.createElement(y.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash mr-1"})),c.a.createElement("br",null))}}],urutan:localStorage.getItem("urutan")||0},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(O.f)()),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(B.b)()),this.props.dispatch(Object(v.k)()),this.props.dispatch(Object(v.j)())}},{key:"handleSubmit",value:function(e){var t=this,a=JSON.parse(localStorage.getItem("ReturnSupplier"))||[],n=(e.kodeJenis?e.kodeJenis:"DEFALT | DEFAULT").split("|"),r={no_urut:a.length+1,kode_jenis:n[0],keterangan:e.keterangan.toUpperCase(),kadar_cetak:n[2],kadar_beli:parseFloat(e.kadarTransaksi),kode_barcode:"-",qty:1,plastik:parseFloat(e.p),kulit:parseFloat(e.k),pkg:parseFloat(e.pkg),gross:parseFloat(e.gross),bruto:parseFloat(e.bruto),netto:parseFloat(e.netto),ongkos_rp:parseFloat(e.rp||0)},o=JSON.parse(localStorage.getItem("ReturnSupplier"))||[];o.push(r),localStorage.setItem("ReturnSupplier",JSON.stringify(o)),this.props.dispatch(Object(B.b)()),E.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(k.a)("TerimaSupplier"))})).then((function(){return t.props.dispatch(Object(v.h)())})).then((function(){return t.props.dispatch(Object(v.j)())})).then((function(){return t.props.dispatch(Object(v.k)())}))}},{key:"getSumData",value:function(){this.props.dispatch(Object(C.o)("ReturnSupplier")),this.props.dispatch(Object(C.l)("ReturnSupplier")),this.props.dispatch(Object(C.s)("ReturnSupplier")),this.props.dispatch(Object(C.q)("ReturnSupplier")),this.props.dispatch(Object(C.r)("ReturnSupplier"))}},{key:"kirimData",value:function(){var e=this,t=(this.state.kodeSupplier?this.state.kodeSupplier:"DEFAULT|DEFUALT").split("|");if(null===localStorage.getItem("ReturnSupplier"))return Object(F.e)("Barang masih kosong, Mohon tambahkan barang"),!1;if(""===this.state.noBon)return Object(F.e)("Mohon isi nomor bon"),!1;if(""===this.state.noReturn)return Object(F.e)("Mohon isi nomor Return"),!1;if(""===this.state.tanggal)return Object(F.e)("Mohon isi tanggal"),!1;if(""===this.state.kodeSupplier)return Object(F.e)("Mohon pilih supplier"),!1;var a=JSON.parse(localStorage.getItem("ReturnSupplier")).map((function(e){return e.netto})).reduce((function(e,t){return e+t}),0),n={no_retur:this.props.noFaktur.toUpperCase(),no_bon:this.state.noBon.toUpperCase(),kode_supplier:t[0],total_netto:a,tanggal_invoice:this.state.tanggal,detail_barang:JSON.parse(localStorage.getItem("ReturnSupplier"))};console.log(JSON.stringify(n)),this.props.dispatch(Object(C.t)());var r=[],o=JSON.parse(localStorage.getItem("ReturnSupplier"));o.forEach((function(e,t){var a=[++t,e.kode_jenis,e.kadar_cetak,e.plastik,e.kulit,e.pkg,e.bruto,e.kadar_beli,parseFloat(e.netto).toFixed(3),"Rp."+parseFloat(e.ongkos_rp).toLocaleString("id-ID")];r.push(a)}));var i=["","","","","",o.map((function(e){return e.pkg})).reduce((function(e,t){return e+t}),0),o.map((function(e){return e.bruto})).reduce((function(e,t){return e+t}),0),"",o.map((function(e){return e.netto})).reduce((function(e,t){return e+t}),0).toFixed(3),"Rp."+o.map((function(e){return e.ongkos_rp})).reduce((function(e,t){return e+t}),0).toLocaleString("id-ID")];r.push(i),console.log(JSON.stringify(r));var s=["No","Kode Barang","Kadar Cetak\n(%)","P","K","Bungkus\n(Gr)","Berat\n(Gr)","Harga\n(Gr)","Murni\n(Gr)","Ongkos\n(Rp)"];Object(D.c)("trx-supplier/retur-supplier",n).then((function(t){return E.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return Object(N.a)("no Return",e.state.noReturn.toUpperCase(),"Tanggal",e.state.tanggal,"No Bon",e.state.noBon.toUpperCase(),"Supplier",e.state.kodeSupplier.toUpperCase(),"ADMIN",e.state.tanggal,"",s,"Return Barang Supplier",r)})).then((function(){return e.props.dispatch(Object(C.k)())})).then((function(){return localStorage.clear()})).then((function(){return e.props.dispatch(Object(v.h)())})).then((function(){return e.props.dispatch(Object(u.b)())})).then((function(){return localStorage.setItem("isLogin",!0)})).then((function(){return e.props.dispatch(Object(B.b)())})).then((function(){return e.setState({noBon:"",noReturn:""})})).then((function(){return document.getElementById("myForm").reset()}))})).catch((function(t){return E.a.fire({position:"top-end",icon:"error",text:"Data Gagal Ditambahkan",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(C.k)())}))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(A.default,{title:"Return Barang Supplier"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-9"}),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("br",null)),c.a.createElement(T,{content:c.a.createElement(l.Suspense,{fallback:c.a.createElement(_.a,{width:"100%",height:50,count:5})},c.a.createElement(I,{from:"return",onSubmit:function(t){return e.handleSubmit(t)}})),title:"Tambah Data Barang"}),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("form",{id:"myForm"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Supplier"),c.a.createElement("select",{name:"supplier",id:"supplier",className:"form-control",defaultValue:"DEFAULT | DEFAULT",onChange:this.pilihSupplier()},c.a.createElement("option",{value:"DEFAULT | DEFAULT",key:"DEFAULT"},"Silahkan Pilih"),this.props.supplierList.map((function(e){return c.a.createElement("option",{value:e.kode_supplier+"|"+e.nama_supplier},e.nama_supplier)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggal",defaultValue:this.state.dateStart,className:"form-control",onChange:this.inputChange("tanggalInvoice")})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"No Return"),c.a.createElement("input",{type:"text",id:"no_return",name:"no_return",className:"form-control",onChange:this.inputChange("noReturn"),value:this.state.noReturn})),c.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"No Terima"),c.a.createElement("input",{type:"text",id:"bon_return",name:"bon_return",className:"form-control",onChange:this.inputChange("noBon"),value:this.state.noBon}))))),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3 mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6"}),c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.dispatch(Object(R.j)())}},"Tambah Data",c.a.createElement("i",{class:"fa fa-plus ml-3","aria-hidden":"true"}))))))),this.props.tampungBarang?c.a.createElement(g.a,{keyField:"id",data:this.props.tampungBarang,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement(d.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()()})))})):c.a.createElement(g.a,{keyField:"id",data:[],columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement(d.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()(),noDataIndication:"Tidak Ada Data"})))})),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return e.kirimData()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{class:"fa fa-paper-plane ml-3","aria-hidden":"true"})))))))))}}]),a}(l.Component);t.default=Object(p.b)((function(e){return{supplierList:e.provinsi.supplier,tampungBarang:e.provinsi.returnSupplier,noFaktur:e.provinsi.noFaktur,alert:e.provinsi.alert,error:e.provinsi.error,username:e.provinsi.username,sumBruto:e.perhitungan.sumBruto,sumNetto:e.perhitungan.sumNetto,sumRp:e.perhitungan.sumRp,sumPkg:e.perhitungan.sumPkg,sumQty:e.perhitungan.sumQty,onSend:e.provinsi.onSend}}),null)(w)},516:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));var n=a(7),r=a.n(n),o=function(e){e.forEach((function(e){localStorage.removeItem(e)}))},i=function(e,t,a,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(e))||[];i.splice(t,1),localStorage.setItem(e,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)}))}}))},s=function(e,t,a,n){return new Promise((function(o,i){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){if(i.isConfirmed){var s=JSON.parse(localStorage.getItem(e))||[];s.splice(t,1),localStorage.setItem(e,JSON.stringify(s)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)})).then(o("Berhasil")).catch("Gagal")}}))}))}},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors}}]);
//# sourceMappingURL=93.980903d2.chunk.js.map