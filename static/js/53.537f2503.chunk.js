(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[53],{1178:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(15),i=a(16),o=a(18),l=a(17),s=a(0),c=a.n(s),u=a(29),p=a(12),m=a(75),d=a(7),h=a.n(d),g=a(59),f=a(94),b=a(53),S=a(19),k=a(518),E=a(535),v=a(122),N=a(9),O=a(3),y=a(51),F=a(14),j=a.n(F),x=a(43),B=a(511),R=Object(s.lazy)((function(){return Promise.all([a.e(3),a.e(17)]).then(a.bind(null,672))})),C=Object(s.lazy)((function(){return Promise.all([a.e(2),a.e(5)]).then(a.bind(null,509))})),D=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var i;Object(r.a)(this,a);var o=new Date,l="".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate());return(i=t.call(this,e)).inputChange=function(e){return function(t){i.setState(Object(n.a)({},e,t.target.value))}},i.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");i.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},i.state={listSupplier:[],DataSupplier:[],kodeSupplier:"",namaSupplier:"",tanggal:l,noReturn:"",noBon:"",status:"",totalNW:0,totalOngkir:0,dateStart:l,tampungBarang:[],tampungBarangLocal:[],columns:[{dataField:"kode_jenis",text:"Kode Barang"},{dataField:"kadar_cetak",text:"Kadar Cetak(%)"},{dataField:"plastik",text:"P"},{dataField:"kulit",text:"K"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"kadar_beli",text:"Harga(%)"},{dataField:"netto",text:"Murni(Gr)"},{dataField:"ongkos_rp",text:"Ongkos(RP)",formatter:function(e){return c.a.createElement("span",null,"Rp. ",parseFloat(e).toLocaleString("ID-id"))}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return Object(k.a)("ReturnSupplier",a,i.props.dispatch,Object(v.d)())}},c.a.createElement(E.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash mr-1"})),c.a.createElement("br",null))}}],urutan:localStorage.getItem("urutan")||0},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.f)()),this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(v.d)()),this.props.dispatch(Object(g.k)()),this.props.dispatch(Object(g.j)())}},{key:"handleSubmit",value:function(e){var t=this,a=JSON.parse(localStorage.getItem("ReturnSupplier"))||[],n=(e.kodeJenis?e.kodeJenis:"DEFALT | DEFAULT").split("|"),r={no_urut:a.length+1,kode_jenis:n[0],keterangan:e.keterangan.toUpperCase(),kadar_cetak:n[2],kadar_beli:parseFloat(e.kadarTransaksi),kode_barcode:"-",qty:1,plastik:parseFloat(e.p),kulit:parseFloat(e.k),pkg:parseFloat(e.pkg),gross:parseFloat(e.gross),bruto:parseFloat(e.bruto),netto:parseFloat(e.netto),ongkos_rp:parseFloat(e.rp||0)},i=JSON.parse(localStorage.getItem("ReturnSupplier"))||[];i.push(r),localStorage.setItem("ReturnSupplier",JSON.stringify(i)),this.props.dispatch(Object(v.d)()),h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return t.props.dispatch(Object(m.a)("TerimaSupplier"))})).then((function(){return t.props.dispatch(Object(g.h)())})).then((function(){return t.props.dispatch(Object(g.j)())})).then((function(){return t.props.dispatch(Object(g.k)())}))}},{key:"getSumData",value:function(){this.props.dispatch(Object(N.o)("ReturnSupplier")),this.props.dispatch(Object(N.l)("ReturnSupplier")),this.props.dispatch(Object(N.s)("ReturnSupplier")),this.props.dispatch(Object(N.q)("ReturnSupplier")),this.props.dispatch(Object(N.r)("ReturnSupplier"))}},{key:"kirimData",value:function(){var e=this,t=(this.state.kodeSupplier?this.state.kodeSupplier:"DEFAULT|DEFUALT").split("|");if(null===localStorage.getItem("ReturnSupplier"))return Object(S.e)("Barang masih kosong, Mohon tambahkan barang"),!1;if(""===this.state.noReturn)return Object(S.e)("Mohon isi nomor Return"),!1;if(""===this.state.tanggal)return Object(S.e)("Mohon isi tanggal"),!1;if(""===this.state.kodeSupplier)return Object(S.e)("Mohon pilih supplier"),!1;var a=JSON.parse(localStorage.getItem("ReturnSupplier")).map((function(e){return e.netto})).reduce((function(e,t){return e+t}),0),n={no_retur:this.props.noFaktur.toUpperCase(),no_bon:this.state.noReturn.toUpperCase(),kode_supplier:t[0],total_netto:a,tanggal_invoice:this.state.tanggal,detail_barang:JSON.parse(localStorage.getItem("ReturnSupplier"))};console.log(JSON.stringify(n)),this.props.dispatch(Object(N.t)());var r=[],i=JSON.parse(localStorage.getItem("ReturnSupplier"));i.forEach((function(e,t){var a=[++t,e.kode_jenis,e.kadar_cetak,e.plastik,e.kulit,e.pkg,e.bruto,e.kadar_beli,parseFloat(e.netto).toFixed(3),"Rp."+parseFloat(e.ongkos_rp).toLocaleString("id-ID")];r.push(a)}));var o=["","","","","",i.map((function(e){return e.pkg})).reduce((function(e,t){return e+t}),0),i.map((function(e){return e.bruto})).reduce((function(e,t){return e+t}),0),"",i.map((function(e){return e.netto})).reduce((function(e,t){return e+t}),0).toFixed(3),"Rp."+i.map((function(e){return e.ongkos_rp})).reduce((function(e,t){return e+t}),0).toLocaleString("id-ID")];r.push(o),console.log(JSON.stringify(r));var l=["No","Kode Barang","Kadar Cetak\n(%)","P","K","Bungkus\n(Gr)","Berat\n(Gr)","Harga\n(Gr)","Murni\n(Gr)","Ongkos\n(Rp)"];Object(O.c)("trx-supplier/retur-supplier",n).then((function(t){return h.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return Object(b.a)("no Return",e.state.noReturn.toUpperCase(),"Tanggal",e.state.tanggal,"","","Supplier",e.state.kodeSupplier.toUpperCase(),"ADMIN",e.state.tanggal,"",l,"Return Barang Supplier",r)})).then((function(){return e.props.dispatch(Object(N.k)())})).then((function(){return localStorage.clear()})).then((function(){return e.props.dispatch(Object(g.h)())})).then((function(){return e.props.dispatch(Object(u.b)())})).then((function(){return localStorage.setItem("isLogin",!0)})).then((function(){return e.props.dispatch(Object(v.d)())})).then((function(){return e.setState({noBon:"",noReturn:""})})).then((function(){return document.getElementById("myForm").reset()}))})).catch((function(t){return h.a.fire({position:"top-end",icon:"error",text:"Data Gagal Ditambahkan",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(N.k)())}))}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(x.default,{title:"Return Barang Supplier"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-9"}),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("br",null)),c.a.createElement(C,{content:c.a.createElement(s.Suspense,{fallback:c.a.createElement(j.a,{width:"100%",height:50,count:5})},c.a.createElement(R,{from:"return",onSubmit:function(t){return e.handleSubmit(t)}})),title:"Tambah Data Barang"}),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("form",{id:"myForm"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Supplier"),c.a.createElement("select",{name:"supplier",id:"supplier",className:"form-control",defaultValue:"DEFAULT | DEFAULT",onChange:this.pilihSupplier()},c.a.createElement("option",{value:"DEFAULT | DEFAULT",key:"DEFAULT"},"Silahkan Pilih"),this.props.supplierList.map((function(e){return c.a.createElement("option",{value:e.kode_supplier+"|"+e.nama_supplier},e.nama_supplier)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggal",defaultValue:this.state.dateStart,className:"form-control",onChange:this.inputChange("tanggalInvoice")})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"No Return"),c.a.createElement("input",{type:"text",id:"no_return",name:"no_return",className:"form-control",onChange:this.inputChange("noReturn"),value:this.state.noReturn}))))),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3 mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6"}),c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.dispatch(Object(y.j)())}},"Tambah Data",c.a.createElement("i",{class:"fa fa-plus ml-3","aria-hidden":"true"}))))))),c.a.createElement(B.a,{keyField:"id",data:this.props.tampungBarang,columns:this.state.columns}),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return e.kirimData()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{class:"fa fa-paper-plane ml-3","aria-hidden":"true"})))))))))}}]),a}(s.Component);t.default=Object(p.b)((function(e){return{supplierList:e.provinsi.supplier,tampungBarang:e.provinsi.returnSupplier,noFaktur:e.provinsi.noFaktur,alert:e.provinsi.alert,error:e.provinsi.error,username:e.provinsi.username,sumBruto:e.perhitungan.sumBruto,sumNetto:e.perhitungan.sumNetto,sumRp:e.perhitungan.sumRp,sumPkg:e.perhitungan.sumPkg,sumQty:e.perhitungan.sumQty,onSend:e.provinsi.onSend}}),null)(D)},511:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(481),o=a.n(i),l=a(507),s=a.n(l),c=a(506),u=a.n(c),p=a(514),m=a.n(p);var d=function(e){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:m.a,width:"250",height:"250",alt:"Empty"}),r.a.createElement("h5",null,e.text)))},h=l.Search.SearchBar,g=l.CSVExport.ExportCSVButton;t.a=function(e){var t=e.textEmpty,a=e.handleClick,n=e.tambahData,i=e.expandRow,l=e.selectRow,c=e.exportCSV;return r.a.createElement(s.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},(function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-left"},r.a.createElement(h,e.searchProps))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-right"},n&&r.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",r.a.createElement("i",{className:"fa fa-plus ml-3"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"col-12"},r.a.createElement(o.a,Object.assign({pagination:u()(),selectRow:l,expandRow:i},e.baseProps,{striped:!0,noDataIndication:r.a.createElement(d,{text:t||"Tidak Ada Data"})})),r.a.createElement("br",null),c&&r.a.createElement(g,e.csvProps,"Export CSV!!")))}))}},514:function(e,t,a){e.exports=a.p+"static/media/emptyTable.ffc2d7dc.svg"},518:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));var n=a(7),r=a.n(n),i=function(e){e.forEach((function(e){localStorage.removeItem(e)}))},o=function(e,t,a,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){if(i.isConfirmed){var o=JSON.parse(localStorage.getItem(e))||[];o.splice(t,1),localStorage.setItem(e,JSON.stringify(o)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)}))}}))},l=function(e,t,a,n){return new Promise((function(i,o){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var l=JSON.parse(localStorage.getItem(e))||[];l.splice(t,1),localStorage.setItem(e,JSON.stringify(l)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a(n)})).then(i("Berhasil")).catch("Gagal")}}))}))}},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors}}]);
//# sourceMappingURL=53.537f2503.chunk.js.map