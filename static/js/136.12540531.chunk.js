(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[136],{1220:function(e,t,a){"use strict";a.r(t);var o=a(32),n=a(15),r=a(16),l=a(18),s=a(17),i=a(0),c=a.n(i),d=a(14),u=a(25),m=a(39),p=a(183),k=a(61),g=a(33),h=a(7),b=a.n(h),_=a(64),v=a(9),f=a(53),j=a(11),N=a(46),E=a(63),F=a(21),S=a.n(F),O=a(45),y=a(35),x=a(118),P=a(119),G=a(30),I=a(5),C=a(40),T=a(351),B=a(352),D=a(80),L=a.n(D),M=a(103),J=a(52),w=a(117),A=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"no_preorder",text:"Nomor PO"},{dataField:"kode_lokasi",text:"Lokasi"},{dataField:"kode_sales",text:"Sales"},{dataField:"total_netto",text:"Netto (Gr)"},{dataField:"disc_persen",text:"Disc (%)"},{dataField:"total_netto_disc_ext",text:"Netto - Disc Ext"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return o.pilihBarcode(t)}},"Pilih"))}}]},o}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(J.i)())}},{key:"pilihBarcode",value:function(){var e=Object(M.a)(L.a.mark((function e(t){var a,o,n=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("no_po",t.no_preorder),a=JSON.parse(localStorage.getItem("transaksiPenjualan"))||[],(o=t.detail_barang).forEach((function(e,t){Object(I.b)("jenis/get/by-kode-jenis/".concat(o[t].kode_jenis)).then((function(r){var l={netto_disc:e.netto_disc,gross:e.gross,netto:e.netto,qty:1,k:e.k,ongkos_rp:e.ongkos_rp,kadar_cetak:e.kadar_cetak,disc_persen:e.disc_persen,kadar_jual:e.kadar_jual,kadar_level2:r.data.level2,kadar_level3:r.data.level3,kadar_modal:e.kadar_modal,kode_jenis:e.kode_jenis,kode_barcode:"-",p:e.p,disc:e.disc,pkg:e.pkg,bruto:e.bruto},s={netto_disc:parseFloat(e.bruto)*r.data.level2/100,gross:parseFloat(e.bruto)+parseFloat(e.pkg),netto:parseFloat(e.bruto)*r.data.level2/100,qty:1,k:0,ongkos_rp:e.ongkos_rp,kadar_cetak:e.kadar_cetak,disc_persen:e.disc_persen,kadar_jual:e.kadar_jual,kadar_level2:r.data.level2,kadar_level3:r.data.level3,kadar_modal:e.kadar_modal,kode_jenis:e.kode_jenis,kode_barcode:"-",p:0,disc:0,pkg:e.pkg,bruto:e.bruto},i={netto_disc:parseFloat(e.bruto)*r.data.level3/100,gross:parseFloat(e.bruto)+parseFloat(e.pkg),netto:parseFloat(e.bruto)*r.data.level3/100,qty:1,k:0,ongkos_rp:e.ongkos_rp,kadar_cetak:e.kadar_cetak,disc_persen:0,kadar_jual:e.kadar_jual,kadar_level2:r.data.level2,kadar_level3:r.data.level3,kadar_modal:o[t].kadar_beli,kode_jenis:e.kode_jenis,kode_barcode:"-",p:0,disc:0,pkg:e.pkg,bruto:e.bruto},c=JSON.parse(localStorage.getItem("transaksiPenjualan"))||[],d=JSON.parse(localStorage.getItem("transaksiPenjualan_level2"))||[],m=JSON.parse(localStorage.getItem("transaksiPenjualan_level3"))||[],p=a.findIndex((function(t){return e.kode_jenis===t.kode_jenis||t.netto===e.netto}));if(console.log(e.netto),console.log(p),p<0){c.push(l),d.push(s),m.push(i);var k=c.map((function(e){return parseFloat(e.netto_disc)})).reduce((function(e,t){return e+t}),0);localStorage.setItem("GrandTotalNetto",k),localStorage.setItem("transaksiPenjualan",JSON.stringify(c)),localStorage.setItem("transaksiPenjualan_level2",JSON.stringify(d)),localStorage.setItem("transaksiPenjualan_level3",JSON.stringify(m)),b.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),n.props.dispatch(Object(_.c)()),n.props.dispatch(Object(E.d)()),n.props.dispatch(Object(u.a)("FormTransaksiPenjualan")),n.props.dispatch(Object(v.o)("transaksiPenjualan")),n.setState({discGlobalGr:parseFloat(0)/100*parseFloat(localStorage.getItem("GrandTotalNetto")),discGlobalPr:0,GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto"))-0).toFixed(3)})}else Object(j.e)("Data Sudah Ada Di Tabel")})).catch((function(e){return Object(j.c)("Kode Kelompok Belum Disesuaikan, Mohon Sesuaikan Dahulu")}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSumData",value:function(){this.props.dispatch(Object(v.o)("ReturnPenjualan")),this.props.dispatch(Object(v.l)("ReturnPenjualan")),this.props.dispatch(Object(v.s)("ReturnPenjualan")),this.props.dispatch(Object(v.q)("ReturnPenjualan")),this.props.dispatch(Object(v.r)("ReturnPenjualan"))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(C.a,{keyField:"kodeJenis",data:this.props.listPO.filter((function(t){return t.tanggal===Object(w.b)()&&t.kode_customer===e.props.kode_customer})),columns:this.state.columns,textEmpty:"Data Timbangan Kosong"}))}}]),a}(i.Component),R=Object(d.b)((function(e){return{listPO:e.provinsi.listPO}}))(A),K=a(112),W=a(70),V=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={columns:[{dataField:"kode_customer",text:"Kode Customer"},{dataField:"no_ext_packing",text:"Nomor Packing"},{dataField:"no_po",text:"Nomor PO"},{dataField:"tanggal",text:"Tanggal"},{dataField:"image",text:"Image",formatter:function(e,t,a,o){return c.a.createElement("div",null,c.a.createElement("img",{src:t.image,alt:"Gambar Packing",width:"150px",height:"150px"}))}},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return o.getBarang(t.no_ext_packing)}},"Pilih"))}}]},o}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(J.j)())}},{key:"getBarang",value:function(){var e=Object(M.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("packing_nomor",t),a=[],e.next=4,Object(I.b)("packing-list/get-packing/".concat(t)).then((function(e){return a=e.data[0]})).catch((function(e){return Object(j.c)("Gagal Ambil Packing, Detial : ".concat(e.response.data))}));case 4:this.pilihBarcode(a);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"pilihBarcode",value:function(){var e=Object(M.a)(L.a.mark((function e(t){var a,o,n,r=this;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],t.packing_m.map((function(e){return e.packing_s.map((function(e){return a.push.apply(a,Object(K.a)(e.detail_barang)),!0})),!0})),o=JSON.parse(localStorage.getItem("transaksiPenjualan"))||[],(n=a).forEach((function(e,t){Object(I.b)("jenis/get/by-kode-jenis/".concat(n[t].kode_jenis)).then((function(a){var l={netto_disc:e.netto_disc,gross:e.gross,netto:e.netto,qty:1,k:e.k,ongkos_rp:e.ongkos_rp,kadar_cetak:e.kadar_cetak,disc_persen:e.disc_persen,kadar_jual:e.kadar_jual,kadar_level2:a.data.level2,kadar_level3:a.data.level3,kadar_modal:e.kadar_modal,kode_jenis:e.kode_jenis,kode_barcode:"-",p:e.p,disc:e.disc,pkg:e.pkg,bruto:e.bruto},s={netto_disc:parseFloat(e.bruto)*a.data.level2/100,gross:parseFloat(e.bruto)+parseFloat(e.pkg),netto:parseFloat(e.bruto)*a.data.level2/100,qty:1,k:0,ongkos_rp:e.ongkos_rp,kadar_cetak:e.kadar_cetak,disc_persen:e.disc_persen,kadar_jual:e.kadar_jual,kadar_level2:a.data.level2,kadar_level3:a.data.level3,kadar_modal:e.kadar_modal,kode_jenis:e.kode_jenis,kode_barcode:"-",p:0,disc:0,pkg:e.pkg,bruto:e.bruto},i={netto_disc:parseFloat(e.bruto)*a.data.level3/100,gross:parseFloat(e.bruto)+parseFloat(e.pkg),netto:parseFloat(e.bruto)*a.data.level3/100,qty:1,k:0,ongkos_rp:e.ongkos_rp,kadar_cetak:e.kadar_cetak,disc_persen:0,kadar_jual:e.kadar_jual,kadar_level2:a.data.level2,kadar_level3:a.data.level3,kadar_modal:n[t].kadar_beli,kode_jenis:e.kode_jenis,kode_barcode:"-",p:0,disc:0,pkg:e.pkg,bruto:e.bruto},c=JSON.parse(localStorage.getItem("transaksiPenjualan"))||[],d=JSON.parse(localStorage.getItem("transaksiPenjualan_level2"))||[],m=JSON.parse(localStorage.getItem("transaksiPenjualan_level3"))||[],p=o.findIndex((function(t){return e.kode_jenis===t.kode_jenis||t.netto===e.netto}));if(console.log(e.netto),console.log(p),p<0){c.push(l),d.push(s),m.push(i);var k=c.map((function(e){return parseFloat(e.netto_disc)})).reduce((function(e,t){return e+t}),0);localStorage.setItem("GrandTotalNetto",k),localStorage.setItem("transaksiPenjualan",JSON.stringify(c)),localStorage.setItem("transaksiPenjualan_level2",JSON.stringify(d)),localStorage.setItem("transaksiPenjualan_level3",JSON.stringify(m)),b.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),r.props.dispatch(Object(_.c)()),r.props.dispatch(Object(E.d)()),r.props.dispatch(Object(u.a)("FormTransaksiPenjualan")),r.props.dispatch(Object(v.o)("transaksiPenjualan")),r.setState({discGlobalGr:parseFloat(0)/100*parseFloat(localStorage.getItem("GrandTotalNetto")),discGlobalPr:0,GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto"))-0).toFixed(3)})}else Object(j.e)("Data Sudah Ada Di Tabel")})).catch((function(e){return Object(j.c)("Kode Kelompok Belum Disesuaikan, Mohon Sesuaikan Dahulu")}))}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSumData",value:function(){this.props.dispatch(Object(v.o)("ReturnPenjualan")),this.props.dispatch(Object(v.l)("ReturnPenjualan")),this.props.dispatch(Object(v.s)("ReturnPenjualan")),this.props.dispatch(Object(v.q)("ReturnPenjualan")),this.props.dispatch(Object(v.r)("ReturnPenjualan"))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(C.a,{keyField:"kodeJenis",data:this.props.listPacking.filter((function(t){return t.tanggal===Object(W.b)()&&t.kode_customer===e.props.kode_customer})),columns:this.state.columns,textEmpty:"Data Timbangan Kosong"}))}}]),a}(i.Component),q=Object(d.b)((function(e){return{listPacking:e.provinsi.listPacking}}))(V),U=a(6),H=a(19),Q=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,255))})),z=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,372))})),Y=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).inputChange=function(e){return function(t){r.setState(Object(o.a)({},e,t.target.value))}},r.inputGrandTotal=function(e){return function(t){var a=r.props.sumGross-parseFloat(r.state.discGlobalGr),n=t.target.value;return console.log(a+"-"+n),a-n<-1?(Object(j.e)("Selisih lebih dari 1"),t.target.value="",!1):a-n<=1?void r.setState(Object(o.a)({},e,t.target.value)):(Object(j.e)("Selisih lebih dari 1"),t.target.value="",!1)}},r.discount=function(e){return function(e){var t=parseFloat(e.target.value)/100*parseFloat(localStorage.getItem("GrandTotalNetto"));r.setState({discGlobalGr:t.toFixed(3),discGlobalPr:e.target.value,GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto"))-t.toFixed(3)).toFixed(3)})}},r.state={listLokasi:[],listSales:[],listCustomer:[],listPacking:[],kodeCustomer:"",columns:[{dataField:"kode_jenis",text:"Kode Barang"},{dataField:"kadar_cetak",text:"Kadar\nCetak(%)"},{dataField:"pkg",text:"Bungkus\n(Gr)"},{dataField:"bruto",text:"Berat\n(Gr)"},{dataField:"kadar_jual",text:"Harga\n(%)"},{dataField:"netto",text:"Murni\n(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"disc_persen",text:"%",footerClasses:"sum-netto-terima-supplier"},{dataField:"disc",text:"Disc\n(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"netto_disc",text:"Netto\nDisc(Gr)"},{dataField:"ongkos_rp",text:"Ongkos\n(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{"data-tip":!0,"data-for":"hapus",className:"btn btn-danger mr-2",onClick:function(){return r.deleteRow(a,t.netto_disc)}},c.a.createElement(N.a,{id:"hapus",type:"dark",effect:"solid"},c.a.createElement("span",null,"Hapus")),c.a.createElement("i",{className:"fa fa-trash mr-1"})),c.a.createElement("br",null))}}],discGlobalGr:0,discGlobalPr:0,totalNWExt:0,noBon:"",namaCustomer:"",lokasi:"",sales:"",namaToko:"",tanggal:"",data:"",field_level1:"col-lg-4 invisible",field_level2:"col-lg-4 invisible"},r}return Object(r.a)(a,[{key:"deleteRow",value:function(e,t){var a=this;b.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(o){if(o.isConfirmed){var n=JSON.parse(localStorage.getItem("transaksiPenjualan"))||[];n.splice(e,1),localStorage.setItem("transaksiPenjualan",JSON.stringify(n));var r=localStorage.getItem("GrandTotalNetto"),l=parseFloat(r)-parseFloat(t);localStorage.setItem("GrandTotalNetto",parseFloat(l).toFixed(3)),b.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return a.props.dispatch(Object(E.d)())})).then((function(){return a.props.dispatch(Object(_.c)())})).then((function(){return a.setState({GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto")||0)-0).toFixed(3)})}))}}))}},{key:"componentDidMount",value:function(){localStorage.removeItem("transaksiPenjualan_level2"),localStorage.removeItem("transaksiPenjualan_level3"),localStorage.removeItem("GrandTotalNetto"),this.props.dispatch(Object(x.d)()),this.props.dispatch(Object(P.d)()),this.props.dispatch(Object(G.h)()),this.props.dispatch(Object(g.b)()),this.props.dispatch(Object(_.c)()),this.props.dispatch(Object(J.i)()),this.props.dispatch(Object(E.d)()),this.props.dispatch(Object(v.l)("transaksiPenjualan")),this.props.dispatch(Object(v.o)("transaksiPenjualan")),this.props.dispatch(Object(v.q)("transaksiPenjualan")),this.props.dispatch(Object(v.s)("transaksiPenjualan")),this.props.dispatch(Object(v.m)("transaksiPenjualan")),this.props.dispatch(Object(v.p)("transaksiPenjualan")),this.props.dispatch(Object(v.n)("transaksiPenjualan")),this.props.dispatch(Object(v.r)("transaksiPenjualan")),this.setState({GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto")||0)-0).toFixed(3)})}},{key:"handleSubmit",value:function(e){var t=this,a=e.kodeBarang,o=this.props.kodeBarang.filter((function(e){return e.kode_jenis===a}));Object(I.b)("jenis/get/by-kode-jenis/".concat(e.kodeBarang)).then((function(a){var n={netto_disc:parseFloat(e.nettoDiscGlobalExt||0).toFixed(3),gross:parseFloat(e.gross||0).toFixed(3),netto:parseFloat(e.netto||0).toFixed(3),qty:1,k:parseFloat(e.k||0),ongkos_rp:parseFloat(void 0===e.rp?0:e.rp),kadar_cetak:o[0].kadar_cetak,disc_persen:e.discGlobalPr||0,kadar_jual:parseFloat(e.kadarTransaksi||0),kadar_level2:a.data.level2,kadar_level3:a.data.level3,kadar_modal:o[0].kadar_beli,kode_jenis:o[0].kode_jenis,kode_barcode:"-",p:parseFloat(e.p||0),disc:e.discGlobalGr||0,pkg:parseFloat(e.pkg||0),bruto:parseFloat(e.bruto||0).toFixed(3)},r=Object(H.c)({data:e,hasil:o,res:a}),l=Object(H.d)({data:e,res:a,hasil:o}),s=JSON.parse(localStorage.getItem("transaksiPenjualan"))||[],i=JSON.parse(localStorage.getItem("transaksiPenjualan_level2"))||[],c=JSON.parse(localStorage.getItem("transaksiPenjualan_level3"))||[];s.push(n),i.push(r),c.push(l);var d=s.map((function(e){return parseFloat(e.netto_disc)})).reduce((function(e,t){return e+t}),0);localStorage.setItem("GrandTotalNetto",d),localStorage.setItem("transaksiPenjualan",JSON.stringify(s)),localStorage.setItem("transaksiPenjualan_level2",JSON.stringify(i)),localStorage.setItem("transaksiPenjualan_level3",JSON.stringify(c)),b.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}),t.props.dispatch(Object(_.c)()),t.props.dispatch(Object(E.d)()),t.props.dispatch(Object(u.a)("FormTransaksiPenjualan")),t.props.dispatch(Object(v.o)("transaksiPenjualan")),t.setState({discGlobalGr:parseFloat(0)/100*parseFloat(localStorage.getItem("GrandTotalNetto")),discGlobalPr:0,GrandTotalNetto:(parseFloat(localStorage.getItem("GrandTotalNetto"))-0).toFixed(3)})})).catch((function(e){return Object(j.c)("Kode Kelompok Belum Disesuaikan, Mohon Sesuaikan Dahulu")}))}},{key:"transaksiPenjualanSubmit",value:function(){var e=this;if(this.props.dataPO===[]){if(null===localStorage.getItem("transaksiPenjualan"))return Object(j.e)("Barang masih kosong, Silahkan tambah barang"),!1;if(""===this.state.noBon)return Object(j.e)("Mohon isi Nomor bon"),!1;if(""===this.state.lokasi)return Object(j.e)("Mohon pilih lokasi"),!1;if(""===this.state.sales)return Object(j.e)("Mohon pilih Sales"),!1;if(""===this.state.namaToko)return Object(j.e)("Mohon pilih toko"),!1;if(""===this.state.discGlobalPr)return Object(j.e)("Mohon isi Discount"),!1;if(""===this.state.discGlobalGr)return Object(j.e)("Mohon isi Discount Gr"),!1;if(0===this.state.totalNWExt)return Object(j.e)("Mohon isi Grand Total"),!1;if(""===this.state.tanggal)return Object(j.e)("Mohon isi Tanggal"),!1}var t={};switch(this.state.level_customer){case"LEVEL1":t={no_bon:this.state.noBon.toUpperCase(),no_penjualan:this.props.noFaktur.toUpperCase(),no_po:localStorage.getItem("no_po")||"-",no_packing:localStorage.getItem("packing_nomor")||"-",tanggal:this.state.tanggal,kode_lokasi:this.state.lokasi.toUpperCase(),kode_sales:this.state.sales.toUpperCase(),kode_customer:this.state.kodeCustomer.toUpperCase(),level_customer_trx:this.state.level_customer,kode_customer_level2:this.state.kode_customer_level1,kode_customer_level3:this.state.kode_customer_level2,detail_barang:JSON.parse(localStorage.getItem("transaksiPenjualan")),total_netto:this.props.totalNW,disc_persen:this.state.discGlobalPr,disc:this.state.discGlobalGr,total_netto_disc:this.state.GrandTotalNetto,total_netto_disc_ext:this.state.totalNWExt};break;case"LEVEL2":t={no_bon:this.state.noBon.toUpperCase(),no_penjualan:this.props.noFaktur.toUpperCase(),no_po:localStorage.getItem("no_po")||"-",no_packing:localStorage.getItem("packing_nomor")||"-",tanggal:this.state.tanggal,kode_lokasi:this.state.lokasi.toUpperCase(),kode_sales:this.state.sales.toUpperCase(),kode_customer:this.state.kode_customer_level1,level_customer_trx:this.state.level_customer,kode_customer_level2:this.state.kodeCustomer,kode_customer_level3:this.state.kode_customer_level2,detail_barang:JSON.parse(localStorage.getItem("transaksiPenjualan")),total_netto:this.props.totalNW,disc_persen:this.state.discGlobalPr,disc:this.state.discGlobalGr,total_netto_disc:this.state.GrandTotalNetto,total_netto_disc_ext:this.state.totalNWExt};break;case"LEVEL3":t={no_bon:this.state.noBon.toUpperCase(),no_penjualan:this.props.noFaktur.toUpperCase(),no_po:localStorage.getItem("no_po")||"-",no_packing:localStorage.getItem("packing_nomor")||"-",tanggal:this.state.tanggal,kode_lokasi:this.state.lokasi.toUpperCase(),kode_sales:this.state.sales.toUpperCase(),kode_customer:this.state.kode_customer_level1,level_customer_trx:this.state.level_customer,kode_customer_level2:this.state.kode_customer_level2,kode_customer_level3:this.state.kodeCustomer,detail_barang:JSON.parse(localStorage.getItem("transaksiPenjualan")),total_netto:this.props.totalNW,disc_persen:this.state.discGlobalPr,disc:this.state.discGlobalGr,total_netto_disc:this.state.GrandTotalNetto,total_netto_disc_ext:this.state.totalNWExt};break;default:Object(j.e)("Ada Kesalah Saat Proses Level Customer")}this.props.dispatch(Object(v.t)()),Object(I.c)("penjualan/simpan",t).then((function(){return b.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500}).then((function(){switch(e.state.level_customer){case"LEVEL1":e.printNota("LEVEL1");break;case"LEVEL2":e.printNota("LEVEL1"),e.printNota("LEVEL2");break;case"LEVEL3":e.printNota("LEVEL1"),e.printNota("LEVEL2"),e.printNota("LEVEL3")}})).then((function(){return e.props.dispatch(Object(v.k)())})).then((function(){return localStorage.removeItem("transaksiPenjualan")})).then((function(){return localStorage.removeItem("transaksiPenjualan_level2")})).then((function(){return localStorage.removeItem("transaksiPenjualan_level3")})).then((function(){return localStorage.removeItem("GrandTotalNetto")})).then((function(){return localStorage.removeItem("noFaktur")})).then((function(){return localStorage.removeItem("no_po")})).then((function(){return e.props.dispatch(Object(g.b)())})).then((function(){return e.props.dispatch(Object(E.d)())})).then((function(){return e.props.dispatch(Object(_.c)())})).then((function(){return e.setState({noBon:"",namaCustomer:"",lokasi:"",sales:"",namaToko:"",tanggal:"",toko:"",GrandTotalNetto:0})})).then((function(){return document.getElementById("myForm").reset()})).then((function(){return window.location.reload()}))})).catch((function(t){return b.a.fire({position:"top-end",icon:"error",text:"".concat(t),showConfirmButton:!1,timer:1500}).then((function(){return e.props.dispatch(Object(v.k)())}))}))}},{key:"printNota",value:function(e){console.log("PRINT INI DI PANGGIL");var t=[],a=[],o=[],n=[],r=[];switch(e){case"LEVEL1":(a=JSON.parse(localStorage.getItem("transaksiPenjualan"))).forEach((function(e,a){var o=[++a,e.kadar_cetak,e.kode_jenis,parseFloat(e.bruto).toFixed(3),e.kadar_jual,parseFloat(e.disc).toFixed(3),parseFloat(e.netto_disc).toFixed(3),e.pkg,e.qty,parseFloat(e.ongkos_rp).toLocaleString("id-ID"),""];t.push(o)})),o=["","","","","","","","","","Disc Global",this.state.discGlobalGr],t.push(o),n=["","","",a.map((function(e){return parseFloat(e.bruto)})).reduce((function(e,t){return e+t}),0).toFixed(3),"",a.map((function(e){return parseFloat(e.disc)})).reduce((function(e,t){return e+t}),0).toFixed(3),a.map((function(e){return parseFloat(e.netto)})).reduce((function(e,t){return e+t}),0).toFixed(3),a.map((function(e){return parseFloat(e.pkg)})).reduce((function(e,t){return e+t}),0),a.map((function(e){return parseFloat(e.qty)})).reduce((function(e,t){return e+t}),0),a.map((function(e){return parseFloat(e.ongkos_rp)})).reduce((function(e,t){return e+t}),0).toLocaleString("id-ID"),this.state.totalNWExt],t.push(n),console.log(JSON.stringify(t)),r=["No","Kadar","Kode","Bruto \n(Gr)","Harga \n(%)","Diskon","Netto \n(Gr)","Pkg","Qty","Ongkos \n(Rp)","Grand Total\nNetto Ext"],Object(f.a)("no Trx",this.props.noFaktur,"Tanggal",this.state.tanggal,"No Bon",this.state.noBon,"Sales",this.state.sales,"ADMIN",this.state.tanggal,"",r,"Transaksi Penjualan",t);break;case"LEVEL2":(a=JSON.parse(localStorage.getItem("transaksiPenjualan_level2"))).forEach((function(e,a){var o=[++a,e.kadar_cetak,e.kode_jenis,parseFloat(e.bruto).toFixed(3),e.kadar_level2,parseFloat(e.disc).toFixed(3),parseFloat(e.netto_disc).toFixed(3),e.pkg,e.qty,parseFloat(e.ongkos_rp).toLocaleString("id-ID"),""];t.push(o)})),o=["","","","","","","","","","Disc Global",this.state.discGlobalGr],t.push(o),n=["","","",a.map((function(e){return parseFloat(e.bruto)})).reduce((function(e,t){return e+t}),0).toFixed(3),"",a.map((function(e){return parseFloat(e.disc)})).reduce((function(e,t){return e+t}),0).toFixed(3),a.map((function(e){return parseFloat(e.netto)})).reduce((function(e,t){return e+t}),0).toFixed(3),a.map((function(e){return parseFloat(e.pkg)})).reduce((function(e,t){return e+t}),0),a.map((function(e){return parseFloat(e.qty)})).reduce((function(e,t){return e+t}),0),a.map((function(e){return parseFloat(e.ongkos_rp)})).reduce((function(e,t){return e+t}),0).toLocaleString("id-ID"),a.map((function(e){return parseFloat(e.netto)})).reduce((function(e,t){return e+t}),0)-parseFloat(this.state.discGlobalGr)],t.push(n),console.log(JSON.stringify(t)),r=["No","Kadar","Kode","Bruto \n(Gr)","Harga \n(%)","Diskon","Netto \n(Gr)","Pkg","Qty","Ongkos \n(Rp)","Grand Total\nNetto Ext"],Object(f.a)("no Trx",this.props.noFaktur,"Tanggal",this.state.tanggal,"No Bon",this.state.noBon,"Sales",this.state.sales,"ADMIN",this.state.tanggal,"",r,"Transaksi Penjualan",t);break;case"LEVEL3":(a=JSON.parse(localStorage.getItem("transaksiPenjualan_level3"))).forEach((function(e,a){var o=[++a,e.kadar_cetak,e.kode_jenis,parseFloat(e.bruto).toFixed(3),e.kadar_level3,parseFloat(e.disc).toFixed(3),parseFloat(e.netto_disc).toFixed(3),e.pkg,e.qty,parseFloat(e.ongkos_rp).toLocaleString("id-ID"),""];t.push(o)})),o=["","","","","","","","","","Disc Global",this.state.discGlobalGr],t.push(o),n=["","","",a.map((function(e){return parseFloat(e.bruto)})).reduce((function(e,t){return e+t}),0).toFixed(3),"",a.map((function(e){return parseFloat(e.disc)})).reduce((function(e,t){return e+t}),0).toFixed(3),a.map((function(e){return parseFloat(e.netto)})).reduce((function(e,t){return e+t}),0).toFixed(3),a.map((function(e){return parseFloat(e.pkg)})).reduce((function(e,t){return e+t}),0),a.map((function(e){return parseFloat(e.qty)})).reduce((function(e,t){return e+t}),0),a.map((function(e){return parseFloat(e.ongkos_rp)})).reduce((function(e,t){return e+t}),0).toLocaleString("id-ID"),this.state.totalNWExt],t.push(n),console.log(JSON.stringify(t)),r=["No","Kadar","Kode","Bruto \n(Gr)","Harga \n(%)","Diskon","Netto \n(Gr)","Pkg","Qty","Ongkos \n(Rp)","Grand Total\nNetto Ext"],Object(f.a)("no Trx",this.props.noFaktur,"Tanggal",this.state.tanggal,"No Bon",this.state.noBon,"Sales",this.state.sales,"ADMIN",this.state.tanggal,"",r,"Transaksi Penjualan",t);break;default:Object(j.e)("Error Print")}}},{key:"onSubmit",value:function(e,t){this.setState(Object(o.a)({},t,e))}},{key:"onSubmitToko",value:function(e){var t=this,a=e,o=this.props.listCustomer.filter((function(e){return e.kode_customer===a}));this.setState({kodeCustomer:e,level_customer:o[0].level_customer}),this.props.change("level_customer",o[0].level_customer),"LEVEL2"===o[0].level_customer||"LEVEL3"===o[0].level_customer?this.setState({field_level1:"col-lg-4",field_level2:"col-lg-4 invisible"}):this.setState({field_level1:"col-lg-4 invisible",field_level2:"col-lg-4 invisible"}),Object(I.b)("customer/get/by-kode-customer/".concat(e)).then((function(e){var a=e.data;t.setState({kode_customer_level1:a.kode_customer_level1,kode_customer_level2:a.kode_customer_level2}),t.props.change("level_customer_1",a.kode_customer_level1),t.props.change("level_customer_2",a.kode_customer_level2)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},""!==String(this.props.listPacking)?c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"card"},c.a.createElement(y.default,{title:"Transaksi Penjualan"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("form",{id:"myForm",onKeyDown:function(e){return"Enter"!==e.key}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{name:"tanggal",type:"date",label:"Tanggal",className:"form-control",onChange:this.inputChange("tanggal"),value:this.state.tanggal}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"No Bon"),c.a.createElement("input",{name:"noBon",type:"text",label:"No Bon",className:"form-control",onChange:this.inputChange("noBon"),value:this.state.noBon}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"}),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Lokasi"),c.a.createElement(k.a,{options:[{value:"SALES",name:"SALES"},{value:"PUSAT",name:"PUSAT"}],search:!0,placeholder:"Silahkan Pilih",onChange:function(t){return e.onSubmit(t,"lokasi")},value:this.state.lokasi}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Sales"),c.a.createElement(k.a,{options:this.props.listSales.map((function(e){return{value:e.kode_sales,name:e.nama_sales}})),search:!0,placeholder:"Silahkan Pilih",onChange:function(t){return e.onSubmit(t,"sales")},value:this.state.sales}))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Nama Toko"),c.a.createElement(k.a,{options:this.props.listCustomer.map((function(e){return{value:e.kode_customer,name:e.nama_toko+" - "+e.nama_customer}})),search:!0,placeholder:"Silahkan Pilih",onChange:function(t){return e.onSubmitToko(t)},onBlur:function(t){return e.onSubmit(t,"toko")},value:this.state.toko}))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(m.a,{name:"level_customer",component:U.a,type:"text",label:"Level Customer",placeholder:"Masukan Level Customer",readOnly:!0})),c.a.createElement("div",{className:this.state.field_level1},c.a.createElement(m.a,{name:"level_customer_1",component:U.b,options:this.props.listCustomer.map((function(e){return{value:e.kode_customer,name:e.nama_toko+" - "+e.nama_customer}})),type:"text",label:"Level Customer 1",placeholder:"Level Customer 1",disabled:!0})),c.a.createElement("div",{className:this.state.field_level2},c.a.createElement(m.a,{name:"level_customer_2",component:U.b,options:this.props.listCustomer.map((function(e){return{value:e.kode_customer,name:e.nama_toko+" - "+e.nama_customer}})),type:"text",label:"Level Customer 2",placeholder:"Level Customer 2",readOnly:!0,disabled:!0})),c.a.createElement("div",{className:"col-lg-3 mb-3"},c.a.createElement("label",{htmlFor:""},"Total NW"),c.a.createElement("input",{name:"totalNW",type:"number",className:"form-control",min:0,step:.01,label:"totalNW",value:this.props.totalNW,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Disc Global (%)"),c.a.createElement("input",{name:"discGlobal",type:"number",className:"form-control",min:0,step:.001,label:"discGlobal",onChange:this.discount("discGlobalPr"),value:this.state.discGlobalPr})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Disc (Gr)"),c.a.createElement("input",{name:"discGlobal",type:"number",className:"form-control",label:"discGlobal",value:this.state.discGlobalGr,readOnly:!0})),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Grand Total Netto"),c.a.createElement("input",{name:"totalNW",type:"number",className:"form-control",label:"totalNW",value:this.state.GrandTotalNetto,readOnly:!0})),c.a.createElement("div",{className:"col-lg-9"}),c.a.createElement("div",{className:"col-lg-3 mb-3"},c.a.createElement("label",{htmlFor:""},"Grand Total Netto Ext"),c.a.createElement("input",{name:"totalNWExt",type:"text",className:"form-control",label:"totalNWExt",onChange:this.inputChange("totalNWExt")}))))),c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-2"}),c.a.createElement("div",{className:"col-lg-6 col-md-7 mb-3"},c.a.createElement("div",{className:"row"},""!==this.state.kodeCustomer?c.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal",type:"button","data-target":"#barcodeModal"},"BARCODE (+)"):c.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal",type:"button","data-target":"#barcodeModal",disabled:!0},"BARCODE (+)"),""!==this.state.kodeCustomer?c.a.createElement("button",{className:"btn btn-primary ml-2","data-toggle":"modal","data-target":"#timbanganModal"},"TIMBANGAN (+)"):c.a.createElement("button",{className:"btn btn-primary ml-2","data-toggle":"modal","data-target":"#timbanganModal",disabled:!0},"TIMBANGAN (+)"),""!==this.state.kodeCustomer?c.a.createElement("button",{className:"btn btn-primary ml-2","data-toggle":"modal","data-target":"#preorderModal"},"PRE ORDER (+)"):c.a.createElement("button",{className:"btn btn-primary ml-2","data-toggle":"modal","data-target":"#preorderModal",disabled:!0},"PRE ORDER (+)"),""!==this.state.kodeCustomer?c.a.createElement("button",{className:"btn btn-primary ml-2","data-toggle":"modal","data-target":"#packingModal"},"PACKING (+)"):c.a.createElement("button",{className:"btn btn-primary ml-2","data-toggle":"modal","data-target":"#packingModal",disabled:!0},"PACKING (+)"))),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.props.dispatch(Object(O.j)())}},"Tambah Barang",c.a.createElement("i",{class:"fa fa-plus ml-3","aria-hidden":"true"})))))),c.a.createElement("div",{className:"col-lg-12 mt-5"},c.a.createElement(C.a,{keyField:"id",data:this.props.transaksiPenjualan,columns:this.state.columns}),c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",disabled:this.props.onSend,onClick:function(){return e.transaksiPenjualanSubmit()}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{class:"fa fa-paper-plane ml-3","aria-hidden":"true"})))))))):c.a.createElement(S.a,{width:"100%",height:"100%"}),c.a.createElement("div",{id:"barcodeModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-xl"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Data Barcode"),c.a.createElement("button",{type:"button",id:"dismissModal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(T.a,{kodeCustomer:this.state.kodeCustomer})),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close"))))),c.a.createElement("div",{id:"timbanganModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-xl"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Data Timbangan"),c.a.createElement("button",{type:"button",id:"dismissModal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(B.a,{kodeCustomer:this.state.kodeCustomer})),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close"))))),c.a.createElement("div",{id:"preorderModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-xl"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Data PO"),c.a.createElement("button",{type:"button",id:"dismissModal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(R,{kode_customer:this.state.kodeCustomer})),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close"))))),c.a.createElement("div",{id:"packingModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-xl"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Data Packing"),c.a.createElement("button",{type:"button",id:"dismissModal",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(q,{kode_customer:this.state.kodeCustomer})),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close"))))),c.a.createElement(Q,{content:c.a.createElement(i.Suspense,{fallback:c.a.createElement(S.a,{width:"100%",height:50,count:4})},c.a.createElement(z,{onSubmit:function(t){return e.handleSubmit(t)}})),title:"Tambah Data"}))}}]),a}(i.Component);Y=Object(p.a)({form:"TransaksiPenjualan",enableReinitialize:!0})(Y);t.default=Object(d.b)((function(e){return{noFaktur:e.provinsi.noFaktur,transaksiPenjualan:e.provinsi.transaksiPenjualan,listCustomer:e.provinsi.customer,listLokasi:e.provinsi.lokasi,listSales:e.provinsi.salesman,totalNW:e.provinsi.totalNW,sumNetto:e.perhitungan.sumNetto,sumBruto:e.perhitungan.sumBruto,sumPkg:e.perhitungan.sumPkg,sumP:e.perhitungan.sumP,sumK:e.perhitungan.sumK,sumQty:e.perhitungan.sumNetto,sumGross:e.perhitungan.sumGross,sumRp:e.perhitungan.sumRp,username:e.provinsi.username,onSend:e.provinsi.onSend,kodeBarang:e.provinsi.kodeBarang}}),null)(Y)}}]);
//# sourceMappingURL=136.12540531.chunk.js.map