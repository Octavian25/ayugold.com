(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[52],{1213:function(a,e,t){"use strict";t.r(e);var n=t(31),r=t(15),o=t(16),i=t(18),s=t(17),l=t(0),c=t.n(l),u=t(209),m=t(7),d=t.n(m),p=t(12),g=t(75),h=t(29),k=t(535),b=t(9),f=t(53),E=t(19),v=t(518),N=t(52),B=t(304),F=t(130),S=t(51),j=t(197),x=t(511),y=t(11),A=function(a){var e={};return a.tanggal||(e.tanggal="Tidak Boleh kosong"),a.noMutasi||(e.noMutasi="Tidak Boleh kosong"),a.bonMutasi||(e.bonMutasi="Tidak Boleh kosong"),a.kategori||(e.kategori="Tidak Boleh kosong"),a.lokasi||(e.lokasi="Tidak Boleh kosong"),e},O=function(a){Object(i.a)(t,a);var e=Object(s.a)(t);function t(a){var n;return Object(r.a)(this,t),(n=e.call(this,a)).state={lokasi:!1,listKategori:[{nama:"AMBIL BARANG"},{nama:"KEMBALI STOK"},{nama:"KOREKSI STOK"},{nama:"MUTASI BAHAN"},{nama:"PENGAMBILAN SALES"},{nama:"PINDAH"},{nama:"PINDAH GUDANG REPARASI"},{nama:"RETURN SALES"},{nama:"SALAH INPUT"},{nama:"SALAH PINDAH"},{nama:"STOK AWAL"},{nama:"TAMBAH BARANG"}],columns:[{dataField:"Lihat Detail",isDummyField:!0,text:"Lihat Detail",formatter:function(a){return c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-chevron-down"}))}},{dataField:"kode_jenis",text:"Kode Barang"},{dataField:"kadar_beli",text:"Kat Harga"},{dataField:"kadar_cetak",text:"Kadar"},{dataField:"pkg",text:"Pkg (Gr)"},{dataField:"bruto",text:"Bruto (Gr)"},{dataField:"kadar_beli",text:"Harga"},{dataField:"netto",text:"Netto (Gr)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(a,e,t){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger",onClick:function(){return Object(v.a)("mutasiBarang",t,n.props.dispatch,Object(u.b)())}},c.a.createElement(k.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash"})),c.a.createElement("br",null))}}]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(F.d)()),this.props.change("tanggal",j.b),this.props.change("noMutasi",localStorage.getItem("noFaktur"))}},{key:"render",value:function(){var a=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(N.a,{component:y.a,normalize:function(a){return a&&a.toUpperCase()},label:"Nomor Mutasi",type:"text",name:"noMutasi",className:"form-control",readOnly:!0})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(N.a,{type:"date",label:"Tanggal",id:"tanggal",name:"tanggal",component:y.a})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(N.a,{component:y.a,normalize:function(a){return a&&a.toUpperCase()},label:"Bon Mutasi",type:"text",id:"bonMutasi",name:"bonMutasi"})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(N.a,{id:"kategori",label:"Kategori",name:"kategori",component:y.b,normalize:function(a){return a&&a.toUpperCase()},options:this.state.listKategori.map((function(a){return{value:a.nama,name:a.nama}}))})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement(N.a,{component:y.a,normalize:function(a){return a&&a.toUpperCase()},label:"Keterangan",type:"text",id:"keterangan",name:"keterangan"})),c.a.createElement("div",{className:"col-md-3 form-group"},this.props.lokasi?c.a.createElement(N.a,{label:"Lokasi",component:y.b,normalize:function(a){return a&&a.toUpperCase()},type:"text",id:"lokasi",name:"lokasi",onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},options:this.props.lokasi.map((function(a){return{value:a.kode_lokasi,name:a.nama_lokasi}}))}):c.a.createElement(j.a,{label:"Lokasi"})),c.a.createElement("div",{className:"col-lg-3"}),c.a.createElement("div",{className:"col-lg-4"}),c.a.createElement("div",{className:"col-lg-4 col-md-4 mb-3"},c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal",disabled:!0},"BARCODE (+)"),c.a.createElement("button",{className:"btn btn-primary ml-2","data-toggle":"modal",disabled:!0},"BARCODE (-)"))),c.a.createElement("div",{className:"col-lg-4 col-md-4 mb-3"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return a.props.dispatch(Object(S.j)())}},"TAMBAH BARANG",c.a.createElement("i",{className:"fa fa-plus ml-3"})))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(x.a,{keyField:"id",data:this.props.listBarang,columns:this.state.columns})),c.a.createElement("div",{className:"col-lg-12 col-md-3 mb-3"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,type:"button",onClick:this.props.handleSubmit},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"SIMPAN",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))}}]),t}(l.Component);O=Object(B.a)({form:"HeadMutasiBarang",enableReinitialize:!0,validate:A})(O);var T=Object(p.b)((function(a){return{listBarang:a.provinsi.mutasiBarang,lokasi:a.provinsi.lokasi}}))(O),_=t(14),M=t.n(_),C=t(43),D=t(3),I=Object(l.lazy)((function(){return Promise.all([t.e(3),t.e(84)]).then(t.bind(null,1248))})),w=Object(l.lazy)((function(){return Promise.all([t.e(2),t.e(5)]).then(t.bind(null,509))})),L=function(a){Object(i.a)(t,a);var e=Object(s.a)(t);function t(a){var o;return Object(r.a)(this,t),(o=e.call(this,a)).onChange=function(a){return function(e){o.setState(Object(n.a)({},a,e.target.value))}},o.state={lokasi:[],kodeJenis:"",kodeJenisTujuan:"",noMutasi:"",kodeLokasi:"",tanggal:"",keterangan:"",kategori:"",noBon:"",columns:[{dataField:"Lihat Detail",isDummyField:!0,text:"Lihat Detail",formatter:function(a){return c.a.createElement("span",null,c.a.createElement("i",{className:"fa fa-chevron-down"}))}},{dataField:"kode_jenis",text:"Kode Barang"},{dataField:"kadar_beli",text:"Kat Harga"},{dataField:"kadar_cetak",text:"Kadar"},{dataField:"pkg",text:"Pkg (Gr)"},{dataField:"bruto",text:"Bruto (Gr)"},{dataField:"kadar_beli",text:"Harga"},{dataField:"netto",text:"Netto (Gr)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(a,e,t){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger",onClick:function(){return Object(v.a)("mutasiBarang",t,o.props.dispatch,Object(u.b)())}},c.a.createElement(k.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash"})),c.a.createElement("br",null))}}]},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.b)()),this.props.dispatch(Object(h.b)()),this.props.dispatch(Object(b.l)("mutasiBarang")),this.props.dispatch(Object(b.o)("mutasiBarang")),this.props.dispatch(Object(b.q)("mutasiBarang")),this.props.dispatch(Object(b.r)("mutasiBarang")),this.props.dispatch(Object(b.m)("mutasiBarang"))}},{key:"handleSubmit",value:function(a){var e=this,t=(a.kodeBarang?a.kodeBarang:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");this.setState({kodeJenis:t[0]});var n=(a.kodeBarangTujuan?a.kodeBarangTujuan:"DEFAULT | DEFAULT | DEFAULT | DEFAULT ").split("|");this.setState({kodeJenisTujuan:n[0]});var r=JSON.parse(localStorage.getItem("mutasiBarang"))||[],o={bruto:parseFloat(a.bruto).toFixed(3),bruto2:parseFloat(a.brutoTujuan).toFixed(3),kadar_cetak:parseFloat(a.kadar),kadar_cetak2:parseFloat(a.kadarTujuan),kadar_beli:parseFloat(a.kadar_beli),kadar_beli2:parseFloat(a.kadar_beliTujuan),kadar_jual:parseFloat(a.kadar_jual),kadar_jual2:parseFloat(a.kadar_jualTujuan),netto:parseFloat(a.netto).toFixed(3),netto2:parseFloat(a.nettoTujuan).toFixed(3),pkg:parseFloat(a.pkg).toFixed(3),pkg2:parseFloat(a.pkgTujuan).toFixed(3),qty:1,qty2:1,gross:(parseFloat(a.bruto)+parseFloat(a.pkg)).toFixed(3),gross2:(parseFloat(a.brutoTujuan)+parseFloat(a.pkgTujuan)).toFixed(3),kode_jenis:t[0].toUpperCase(),kode_jenis2:n[0].toUpperCase(),kode_kategori:a.kategori,kode_kategori2:a.kategoriTujuan};r.push(o),localStorage.setItem("mutasiBarang",JSON.stringify(r)),d.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(g.a)("FormMutasiBarang"))})).then((function(){return e.props.dispatch(Object(u.b)())}))}},{key:"submitMutasiBarang",value:function(a){var e=this;if(null===localStorage.getItem("mutasiBarang"))return Object(E.e)("Mohon Tambahkan Barang Yang akan dipindahkan"),!1;var t=JSON.parse(localStorage.getItem("mutasiBarang"))||[],n=t&&t.map((function(a){return parseFloat(a.pkg)})).reduce((function(a,e){return a+e}),0).toFixed(3),r=t&&t.map((function(a){return parseFloat(a.bruto)})).reduce((function(a,e){return a+e}),0).toFixed(3),o=t&&t.map((function(a){return parseFloat(a.netto)})).reduce((function(a,e){return a+e}),0).toFixed(3),i=t&&t.map((function(a){return parseFloat(a.netto2)})).reduce((function(a,e){return a+e}),0).toFixed(3),s=parseFloat(r)+parseFloat(n),l={no_mutasi:this.props.noFaktur,no_bon:a.bonMutasi,tgl_mutasi:a.tanggal,lokasi_asal:a.lokasi,lokasi_tujuan:a.lokasi,total_gross:s,total_pkg:n,total_bruto:r,total_netto:o,total_netto2:i,keterangan:a.keterangan,deskripsi:a.kategori,detail_barang:JSON.parse(localStorage.getItem("mutasiBarang"))};console.log(JSON.stringify(l)),this.props.dispatch(Object(b.t)());var c=[];JSON.parse(localStorage.getItem("mutasiBarang")).forEach((function(a,e){var t=[e++,a.kode_jenis,a.bruto,a.kadar_jual,a.netto,"<=====>",a.kode_jenis,a.kadar_jual2,a.netto2];c.push(t)})),console.log(c);var m=["No","Kode Jenis","Bruto","Harga (%)","Netto","<====>","Kode Jenis 2","Harga 2","Netto 2"];Object(D.c)("mutasi-stock/simpan",l).then((function(){return d.a.fire({position:"top-end",icon:"success",text:"Transaksi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(b.k)())})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return e.props.dispatch(Object(g.a)("HeadMutasiBarang"))})).then((function(){return Object(f.a)("Tanggal",a.tanggal,"","","Nomor Bon",a.noMutasi,"","","ADMIN",a.tanggal,"",m,"MUTASI BARANG",c)})).then((function(){return localStorage.removeItem("mutasiBarang")})).then((function(){return e.props.dispatch(Object(u.b)())})).then((function(){return e.props.dispatch(Object(h.b)())})).then((function(){return e.setState({kodeJenis:"",kodeJenisTujuan:"",noMutasi:"",kodeLokasi:"",tanggal:"",keterangan:"",kategori:"",noBon:""})})).then((function(){return e.forceUpdate()}))})).catch((function(a){return d.a.fire({position:"top-end",icon:"error",text:"Sepertinya ada kendala, silahkan cek koneksi",showConfirmButton:!1,timer:1500}).then((function(){return console.log(a)})).then((function(){return e.props.dispatch(Object(b.k)())}))})),this.props.dispatch(Object(u.b)())}},{key:"render",value:function(){var a=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(C.default,{title:"Mutasi Barang"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(T,{onSubmit:function(e){return a.submitMutasiBarang(e)},onSend:this.props.onSend,noFaktur:this.props.noFaktur}))))))),c.a.createElement(w,{content:c.a.createElement(l.Suspense,{fallback:c.a.createElement(M.a,{width:"100%",height:50,count:5})},c.a.createElement(I,{onSubmit:function(e){return a.handleSubmit(e)}})),title:"Tambah Data Mutasi Barang"}))}}]),t}(l.Component);e.default=Object(p.b)((function(a){return{listBarang:a.provinsi.mutasiBarang,noFaktur:a.provinsi.noFaktur,username:a.provinsi.username,sumBruto:a.perhitungan.sumBruto,sumNetto:a.perhitungan.sumBruto,sumPkg:a.perhitungan.sumPkg,sumQty:a.perhitungan.sumQty,sumGross:a.perhitungan.sumGross,onSend:a.provinsi.onSend}}),null)(L)},511:function(a,e,t){"use strict";var n=t(0),r=t.n(n),o=t(481),i=t.n(o),s=t(507),l=t.n(s),c=t(506),u=t.n(c),m=t(514),d=t.n(m);var p=function(a){return r.a.createElement("div",{className:"col-lg-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{src:d.a,width:"250",height:"250",alt:"Empty"}),r.a.createElement("h5",null,a.text)))},g=s.Search.SearchBar,h=s.CSVExport.ExportCSVButton;e.a=function(a){var e=a.textEmpty,t=a.handleClick,n=a.tambahData,o=a.expandRow,s=a.selectRow,c=a.exportCSV;return r.a.createElement(l.a,{keyField:a.keyField,data:a.data||[],columns:a.columns,search:!0},(function(a){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-left"},r.a.createElement(g,a.searchProps))),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"text-right"},n&&r.a.createElement("button",{onClick:t,className:"btn btn-primary",type:"button"},"Tambah Data",r.a.createElement("i",{className:"fa fa-plus ml-3"})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"col-12"},r.a.createElement(i.a,Object.assign({pagination:u()(),selectRow:s,expandRow:o},a.baseProps,{striped:!0,noDataIndication:r.a.createElement(p,{text:e||"Tidak Ada Data"})})),r.a.createElement("br",null),c&&r.a.createElement(h,a.csvProps,"Export CSV!!")))}))}},514:function(a,e,t){a.exports=t.p+"static/media/emptyTable.ffc2d7dc.svg"},518:function(a,e,t){"use strict";t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return s}));var n=t(7),r=t.n(n),o=function(a){a.forEach((function(a){localStorage.removeItem(a)}))},i=function(a,e,t,n){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var i=JSON.parse(localStorage.getItem(a))||[];i.splice(e,1),localStorage.setItem(a,JSON.stringify(i)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return t(n)}))}}))},s=function(a,e,t,n){return new Promise((function(o,i){r.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(i){if(i.isConfirmed){var s=JSON.parse(localStorage.getItem(a))||[];s.splice(e,1),localStorage.setItem(a,JSON.stringify(s)),r.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return t(n)})).then(o("Berhasil")).catch("Gagal")}}))}))}},75:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));var n=t(27),r=(n.a.arrayInsert,n.a.arrayMove,n.a.arrayPop,n.a.arrayPush,n.a.arrayRemove,n.a.arrayRemoveAll,n.a.arrayShift,n.a.arraySplice,n.a.arraySwap,n.a.arrayUnshift,n.a.autofill,n.a.blur,n.a.change,n.a.clearAsyncError,n.a.clearFields,n.a.clearSubmit,n.a.clearSubmitErrors,n.a.destroy,n.a.focus,n.a.initialize,n.a.registerField,n.a.reset);n.a.resetSection,n.a.setSubmitFailed,n.a.setSubmitSucceeded,n.a.startAsyncValidation,n.a.startSubmit,n.a.stopAsyncValidation,n.a.stopSubmit,n.a.submit,n.a.touch,n.a.unregisterField,n.a.untouch,n.a.updateSyncWarnings,n.a.updateSyncErrors}}]);
//# sourceMappingURL=52.2a517707.chunk.js.map