(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[102],{1200:function(e,a,t){"use strict";t.r(a);var n=t(15),l=t(16),o=t(18),r=t(17),c=t(0),i=t.n(c),s=t(11),m=t(5),d=t(117),p=t(258),u=t(19),g=t(32),E=t(14),b=t(39),h=t(183),N=t(237),k=t(72),A=t(102),v=function(e){var a=e.input,t=e.label,n=e.type,l=e.meta,o=l.touched,r=l.error,c=l.warning;return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"",className:"text-black"},t),i.a.createElement("input",Object.assign({},a,{type:n,className:"form-control"})),o&&(r&&i.a.createElement("p",{className:"invalid-feedback"},r)||c&&i.a.createElement("p",null,c)))},f=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).inputChange=function(e){return function(a){l.setState(Object(g.a)({},e,a.target.value))}},l.state={response:"",kode_perhiasan:"",tipeOmzet:"PERTAHUN",listSupplier:[],filter:!0,listKategori:[{nama:"AMBIL BARANG"},{nama:"KEMBALI STOK"},{nama:"KOREKSI STOK"},{nama:"MUTASI BAHAN"},{nama:"PENGAMBILAN SALES"},{nama:"PINDAH"},{nama:"PINDAH GUDANG REPARASI"},{nama:"RETURN SALES"},{nama:"SALAH INPUT"},{nama:"SALAH PINDAH"},{nama:"STOK AWAL"},{nama:"TAMBAH BARANG"}]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(N.d)()),this.props.dispatch(Object(A.e)()),this.props.dispatch(Object(k.b)())}},{key:"render",value:function(){var e=this;switch(this.props.from){case"saldoAwal":return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("label",{htmlFor:""},"Lokasi"),i.a.createElement(b.a,{name:"lokasi",className:"form-control",component:"select"},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglEnd",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):i.a.createElement("i",{className:"fa fa-print mr-2"}),"Print"))));case"kriteria":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("label",{htmlFor:""},"Kriteria"),i.a.createElement(b.a,{name:"kriteria",className:"form-control",component:"select"},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listKategori.map((function(e){return i.a.createElement("option",{value:e.nama},e.nama)})))),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):i.a.createElement("i",{className:"fa fa-print mr-2"}),"Print")))));case"perpindahanBarang":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("label",{htmlFor:""},"Jenis"),i.a.createElement(b.a,{name:"jenis",className:"form-control",component:"select"},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("label",{htmlFor:""},"Dari Lokasi"),i.a.createElement(b.a,{name:"kodeLokasiFrom",className:"form-control",component:"select"},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return i.a.createElement("option",{value:e.kodeSupplier},e.namaSupplier)})))),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("label",{htmlFor:""},"Ke Lokasi"),i.a.createElement(b.a,{name:"kodeLokasiTo",className:"form-control",component:"select"},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return i.a.createElement("option",{value:e.kodeSupplier},e.namaSupplier)})))),i.a.createElement("div",{className:"col-lg-4 mt-3"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("label",{htmlFor:"employed"},"TAMBAH BARANG"),i.a.createElement("div",null,i.a.createElement(b.a,{name:"tambahBarang",id:"employed",component:"input",type:"checkbox",value:"TAMBAH BARANG"}))),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("label",{htmlFor:"employed"},"AMBIL BARANG"),i.a.createElement("div",null,i.a.createElement(b.a,{name:"ambilBarang",id:"employed",component:"input",type:"checkbox",value:"AMBIL BARANG"}))))),i.a.createElement("div",{className:"col-lg-8"}),i.a.createElement("div",{className:"col-lg-4 mt-3"},i.a.createElement(b.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-4 mt-3"},i.a.createElement(b.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):i.a.createElement("i",{className:"fa fa-print mr-2"}),"Print")))));case"kartuStok":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"kode_lokasi",component:p.b,options:this.props.listlokasi.map((function(e){return{value:e.kode_lokasi,name:"".concat(e.kode_lokasi," - ").concat(e.nama_lokasi)}})),type:"text",label:"Kode Lokasi",placeholder:"Masukan Kode Lokasi"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"kode_jenis",component:p.b,options:this.props.kodeBarang.map((function(e){return{value:e.kode_jenis,name:"".concat(e.kode_jenis," - ").concat(e.nama_jenis)}})),type:"text",label:"Kode Model",placeholder:"Masukan Kode Model"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"tanggal_awal",component:p.a,type:"date",label:"Tanggal Awal",placeholder:"Masukan Tanggal Awal"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"tanggal_akhir",component:p.a,type:"date",label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):i.a.createElement("i",{className:"fa fa-print mr-2"}),"Print")))));case"stokPerKategori":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"group_by",component:p.b,options:[{value:"LOKASI",name:"LOKASI"},{value:"KATEGORI",name:"JENIS"}],type:"text",label:"Group By",placeholder:"Masukan Group By"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"filter_by",component:p.b,options:[{value:"LOKASI",name:"LOKASI"},{value:"KATEGORI",name:"JENIS"}],type:"text",label:"Filter By",placeholder:"Masukan Filter By",onChange:function(a){"KATEGORI"===a?e.setState({filter:!1}):e.setState({filter:!0})}})),i.a.createElement("div",{className:this.state.filter?"col-lg-3 d-none":"col-lg-3 "},i.a.createElement(b.a,{name:"kode_kategori",component:p.b,options:this.props.listkategori.map((function(e){return{value:e.kode_kategori,name:"".concat(e.nama_kategori," - ").concat(e.kode_kategori)}})),type:"text",label:"Kode Jenis",placeholder:"Masukan Kode Jenis"})),i.a.createElement("div",{className:this.state.filter?"col-lg-3 ":"col-lg-3 d-none"},i.a.createElement(b.a,{name:"kode_lokasi",component:p.b,options:this.props.listlokasi.map((function(e){return{value:e.kode_lokasi,name:e.nama_lokasi}})),type:"text",label:"Kode Lokasi",placeholder:"Masukan Kode Lokasi"})),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):i.a.createElement("i",{className:"fa fa-print mr-2"}),"Print")))));case"soSales":return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("label",{htmlFor:""},"Lokasi"),i.a.createElement(b.a,{name:"lokasi",className:"form-control",component:"select"},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tanggal",label:"Tanggal",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"jenisJK":return i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("label",{htmlFor:""},"Jenis"),i.a.createElement(b.a,{name:"jenis",className:"form-control",component:"select"},i.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Type Laporan"),i.a.createElement(b.a,{name:"typeLap",className:"form-control",component:"select"},i.a.createElement("option",{value:"DETAIL",key:"DETAIL"},"DETAIL"),i.a.createElement("option",{value:"REKAPITULASI",key:"REKAPITULASI"},"REKAPITULASI")))),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Jenis Laporan"),i.a.createElement("div",{className:"form-control-transparant"},i.a.createElement("label",{className:"mr-3"},i.a.createElement(b.a,{name:"jenisLaporan",component:"input",type:"radio",value:"bruto",className:"mr-2"}),"Bruto"),i.a.createElement("label",null,i.a.createElement(b.a,{name:"jenisLaporan",component:"input",type:"radio",value:"netto",className:"mr-2"}),"Netto")))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"kirimMasak":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Jenis Laporan"),i.a.createElement("div",{className:"form-control-transparant"},i.a.createElement("label",{className:"mr-3"},i.a.createElement(b.a,{name:"jenisLaporanKM",component:"input",type:"radio",value:"KIRIM MASAK",className:"mr-2"}),"Kirim Masak"),i.a.createElement("label",null,i.a.createElement(b.a,{name:"jenisLaporanKM",component:"input",type:"radio",value:"KIRIM PRODUKSI",className:"mr-2"}),"Kirim Produksi")))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"terimaMasak":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(b.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Jenis Laporan"),i.a.createElement("div",{className:"form-control-transparant"},i.a.createElement("label",{className:"mr-3"},i.a.createElement(b.a,{name:"jenisLaporanTM",component:"input",type:"radio",value:"TERIMA MASAK",className:"mr-2"}),"Terima Masak"),i.a.createElement("label",null,i.a.createElement(b.a,{name:"jenisLaporanTM",component:"input",type:"radio",value:"TERIMA PRODUKSI",className:"mr-2"}),"Terima Produksi")))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"SummaryStock":case"mutasi":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"kode_lokasi",component:p.b,options:this.props.listlokasi.map((function(e){return{value:e.kode_lokasi,name:"".concat(e.kode_lokasi," - ").concat(e.nama_lokasi)}})),type:"text",label:"Kode Lokasi",placeholder:"Masukan Kode Lokasi"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"tanggal_awal",component:p.a,type:"date",label:"Tanggal Awal",placeholder:"Masukan Tanggal Awal"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"tanggal_akhir",component:p.a,type:"date",label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"}))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):i.a.createElement("i",{className:"fa fa-print mr-2"}),"Print"))));case"pindahBarang":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"kode_lokasi_asal",component:p.b,options:this.props.listlokasi.map((function(e){return{value:e.kode_lokasi,name:"".concat(e.kode_lokasi," - ").concat(e.nama_lokasi)}})),type:"text",label:"Kode Lokasi Asal",placeholder:"Masukan Kode Lokasi Asal"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"kode_lokasi_tujuan",component:p.b,options:this.props.listlokasi.map((function(e){return{value:e.kode_lokasi,name:"".concat(e.kode_lokasi," - ").concat(e.nama_lokasi)}})),type:"text",label:"Kode Lokasi Tujuan",placeholder:"Masukan Kode Lokasi Tujuan"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"tanggal_awal",component:p.a,type:"date",label:"Tanggal Awal",placeholder:"Masukan Tanggal Awal"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"tanggal_akhir",component:p.a,type:"date",label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"}))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):i.a.createElement("i",{className:"fa fa-print mr-2"}),"Print"))));case"packing":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"tanggal_awal",component:p.a,type:"date",label:"Tanggal Awal",placeholder:"Masukan Tanggal Awal"})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(b.a,{name:"tanggal_akhir",component:p.a,type:"date",label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"}))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.onSend},this.props.onSend?i.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):i.a.createElement("i",{className:"fa fa-print mr-2"}),"Print"))))}}}]),t}(c.Component);f=Object(h.a)({form:"FormStok",enableReinitialize:!0})(f);var S=Object(E.b)((function(e){return{listlokasi:e.provinsi.dataLokasiPindah,listkategori:e.provinsi.kategori,kodeBarang:e.provinsi.kodeBarang,onSend:e.provinsi.onSend}}))(f),O=t(189),T=(t(373),function(e){console.log(e);var a=new O.default("landscape"),t=[],n=30,l=[],o=[];a.setFontSize(15),a.text("LAPORAN PACKING BARANG",14,15),a.setFontSize(10),e.forEach((function(e,r){l=[[{content:"TANGGAL : ".concat(e.tanggal),colSpan:2},{content:"KODE CUSTOMER : ".concat(e.kode_customer),colSpan:2},{content:"NOMOR EXT PACKING: ".concat(e.no_ext_packing),colSpan:3}],[{content:"NOMOR PO : ".concat("-"===e.no_po?"-":e.no_po),colSpan:7,styles:{lineWidth:.02,lineColor:"#000",fillColor:e.status_valid?[138,182,138]:[226,151,146]}}],[{content:"TOTAL ITEM : ".concat(e.total_item),colSpan:2},{content:"BERAT PLASTIK L : ".concat(e.berat_p_l),colSpan:2},{content:"BERAT PLASTIK M: ".concat(e.total_berat_p_m),colSpan:2},{content:"BERAT PLASTIK S: ".concat(e.total_berat_p_s),colSpan:1}],[{content:"KODE JENIS"},{content:"KADAR CETAK"},{content:"KADAR JUAL"},{content:"BRUTO"},{content:"PKG"},{content:"NETTO"},{content:"DISC"},{content:"NETTO DISC"}]],e.packing_m.forEach((function(e,a){e.packing_s.map((function(e){return e.detail_barang.forEach((function(e){var a=[e.kode_jenis,e.kadar_cetak,e.kadar_jual,e.bruto,e.pkg,e.netto,e.disc,e.netto_disc];t.push(a)})),!0}))})),a.autoTable({head:l,body:t,foot:o,startY:0===r?30:n,theme:"plain",rowPageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),n=a.autoTableEndPosY()+10,t=[]}));var r=a.internal.getNumberOfPages(),c=a.internal.pageSize.width,i=a.internal.pageSize.height;a.setFontSize(10);for(var s=1;s<r+1;s++){var m=c/2,d=i-10;a.setPage(s),a.text("".concat(s," of ").concat(r),m,d,{align:"center"})}a.autoPrint(),a.setProperties({title:"LAPORAN PACKING BARANG"});var p=a.output("datauristring"),u=window.open();u.document.open(),u.document.write("<html><head><title>LAPORAN PACKING BARANG</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+p+"></embed></body></html>")}),y=function(){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",n=arguments.length>5?arguments[5]:void 0,l=new O.default,o=[],r=[],c=[],i=40;l.setFontSize(18),l.text("LAPORAN PINDAH BARANG",14,15),l.setFontSize(10),console.log(n),n.forEach((function(e,a){c=[[{content:"NO BON : ".concat(e.no_bon),colSpan:6}],[{content:"TANGGAL : ".concat(e.tanggal),colSpan:6}],[{content:"LOKASI ASAL : ".concat(e.lokasi_asal),colSpan:3},{content:"LOKASI TUJUAN : ".concat(e.lokasi_tujuan),colSpan:3}],[{content:"KETERANGAN : ".concat(e.keterangan),colSpan:6}],[{content:"NO"},{content:"KODE JENIS"},{content:"NAMA JENIS"},{content:"BRUTO"},{content:"KADAR JUAL"},{content:"NETTO"},{content:"ONGKOS KIRIM"}]],e.detail_barang.forEach((function(e,a){var t=[++a,e.kode_jenis,e.nama_jenis,e.bruto,e.kadar_jual,e.netto,e.ongkos_rp];o.push(t),console.log(o)})),l.autoTable({head:c,body:o,foot:r,startY:0===a?40:i+4,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),i=l.autoTableEndPosY(),o=[],r=[]})),l.text("User\t: ".concat(e),14,i+10),l.text("Cetak\t: ".concat(a),14,i+16),l.text("Valid\t: ".concat(t),14,i+22);var s=l.internal.getNumberOfPages(),m=l.internal.pageSize.width,d=l.internal.pageSize.height;l.setFontSize(10);for(var p=1;p<s+1;p++){var u=m/2,g=d-10;l.setPage(p),l.text("".concat(p," of ").concat(s),u,g,{align:"center"})}l.autoPrint(),l.setProperties({title:"LAPORAN PINDAH BARANG"});var E=l.output("datauristring"),b=window.open();b.document.open(),b.document.write("<html><head><title>LAPORAN PINDAH BARANG</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+E+"></embed></body></html>")},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=arguments.length>5?arguments[5]:void 0,r=new O.default,c=[],i=[],s=40,m=[];r.setFontSize(15),r.text("LAPORAN MUTASI STOCK",14,15),r.setFontSize(10),r.text("Tanggal : ".concat(e," s/d ").concat(a),14,25),o.forEach((function(e,a){m=[[{content:"No Faktur : ".concat(e.no_mutasi),colSpan:4},{content:"Keterangan : ".concat(e.keterangan),colSpan:4}],[{content:"Kode Jenis"},{content:"Bruto"},{content:"Harga"},{content:"Netto"},{content:"<====>"},{content:"Kode Jenis 2"},{content:"Harga 2"},{content:"Netto 2"}]],e.detail_barang.forEach((function(e){var a=[e.kode_jenis,e.bruto,e.kadar_jual,e.netto,"<====>",e.kode_jenis2,e.kadar_jual2,e.netto2];c.push(a)})),r.autoTable({head:m,body:c,foot:i,startY:0===a?35:s+10,theme:"plain",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),s=r.autoTableEndPosY()+10,c=[],m=[]})),r.text("User\t: ".concat(t),14,s),r.text("Cetak\t: ".concat(n),14,s+5),r.text("Valid\t: ".concat(l),14,s+10);var d=r.internal.getNumberOfPages(),p=r.internal.pageSize.width,u=r.internal.pageSize.height;r.setFontSize(10);for(var g=1;g<d+1;g++){var E=p/2,b=u-10;r.setPage(g),r.text("".concat(g," of ").concat(d),E,b,{align:"center"})}r.autoPrint(),r.setProperties({title:"LAPORAN MUTASI STOCK"});var h=r.output("datauristring"),N=window.open();N.document.open(),N.document.write("<html><head><title>LAPORAN MUTASI STOCK</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+h+"></embed></body></html>")},_=function(e){console.log(e);var a=new O.default("landscape"),t=[];a.setFontSize(15),a.text("LAPORAN STOCK - CARD ",14,15),a.setFontSize(10),e.forEach((function(e,n){var l=[[{content:"KODE LOKASI : ".concat(e.kode_lokasi),colSpan:6},{content:"KODE MODEL : ".concat(e.kode_jenis),colSpan:5}],[{content:"TANGGAL"},{content:"AWAL\nNETTO"},{content:"AWAL\nBRUTO"},{content:"IN\nNETTO"},{content:"IN\nBRUTO"},{content:"OUT\nNETTO"},{content:"OUT\nBRUTO"},{content:"AKHIR\nNETTO"},{content:"AKHIR\nBRUTO"},{content:"KETERANGAN"},{content:"NO BON"}]];e.detail.forEach((function(e){var a=[e.tanggal,Object(u.f)(e.awal_netto),Object(u.f)(e.awal_bruto),Object(u.f)(e.in_netto),Object(u.f)(e.in_bruto),Object(u.f)(e.out_netto),Object(u.f)(e.out_bruto),Object(u.f)(e.akhir_netto),Object(u.f)(e.akhir_bruto),e.keterangan,e.no_ext];t.push(a)})),a.autoTable({head:l,body:t,startY:30,theme:"plain",rowPageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]},columnStyles:{10:{cellWidth:40},11:{cellWidth:40}}})}));var n=a.internal.getNumberOfPages(),l=a.internal.pageSize.width,o=a.internal.pageSize.height;a.setFontSize(10);for(var r=1;r<n+1;r++){var c=l/2,i=o-10;a.setPage(r),a.text("".concat(r," of ").concat(n),c,i,{align:"center"})}a.autoPrint(),a.setProperties({title:"LAPORAN STOCK - CARD"});var s=a.output("datauristring"),m=window.open();m.document.open(),m.document.write("<html><head><title>LAPORAN STOCK - CARD</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+s+"></embed></body></html>")},K=function(e){var a=new O.default,t=[],n=[];a.setFontSize(15),a.text("LAPORAN STOCK PER JENIS",14,15),a.setFontSize(10),e.forEach((function(e,a){n=[[{content:"KODE JENIS : ".concat(e.kode_kategori),colSpan:4}],[{content:"KODE LOKASI"},{content:"KODE MODEL"},{content:"TOTAL BRUTO"},{content:"TOTAL NETTO"}]],e.detail.forEach((function(e){var a=[e.kode_lokasi,e.kode_jenis,Object(u.f)(e.total_bruto),Object(u.f)(e.total_netto)];t.push(a)}))})),a.autoTable({head:n,body:t,startY:30,theme:"plain",rowPageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var l=a.internal.getNumberOfPages(),o=a.internal.pageSize.width,r=a.internal.pageSize.height;a.setFontSize(10);for(var c=1;c<l+1;c++){var i=o/2,s=r-10;a.setPage(c),a.text("".concat(c," of ").concat(l),i,s,{align:"center"})}a.autoPrint(),a.setProperties({title:"LAPORAN STOCK PER JENIS"});var m=a.output("datauristring"),d=window.open();d.document.open(),d.document.write("<html><head><title>LAPORAN STOCK PER JENIS</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+m+"></embed></body></html>")},P=function(e){var a=new O.default,t=[],n=[];a.setFontSize(15),a.text("LAPORAN STOCK PER LOKASI",14,15),a.setFontSize(10),e.forEach((function(e,a){n=[[{content:"KODE LOKASI : ".concat(e.kode_lokasi),colSpan:4}],[{content:"KODE JENIS"},{content:"KODE MODEL"},{content:"TOTAL BRUTO"},{content:"TOTAL NETTO"}]],e.detail.forEach((function(e){var a=[e.kode_kategori,e.kode_jenis,Object(u.f)(e.total_bruto),Object(u.f)(e.total_netto)];t.push(a)}))})),a.autoTable({head:n,body:t,startY:30,theme:"plain",rowPageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var l=a.internal.getNumberOfPages(),o=a.internal.pageSize.width,r=a.internal.pageSize.height;a.setFontSize(10);for(var c=1;c<l+1;c++){var i=o/2,s=r-10;a.setPage(c),a.text("".concat(c," of ").concat(l),i,s,{align:"center"})}a.autoPrint(),a.setProperties({title:"LAPORAN STOCK PER LOKASI"});var m=a.output("datauristring"),d=window.open();d.document.open(),d.document.write("<html><head><title>LAPORAN STOCK PER LOKASI</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+m+"></embed></body></html>")},I=function(e){console.log(e);var a=new O.default,t=[];a.setFontSize(15),a.text("LAPORAN STOK BARANG SUMMARY ",14,15),a.setFontSize(10),e.forEach((function(e,n){var l=[[{content:"KODE LOKASI : ".concat(e.kode_lokasi),colSpan:9}],[{content:"KODE MODEL"},{content:"AKHIR BRUTO"},{content:"AKHIR NETTO"},{content:"AWAL BRUTO"},{content:"AWAL NETTO"},{content:"IN BRUTO"},{content:"IN NETTO"},{content:"OUT BRUTO"},{content:"OUT NETTO"}]];e.detail_barang.forEach((function(e){var a=[e.kode_jenis,e.akhir_bruto,e.akhir_netto,e.awal_bruto,e.awal_netto,e.in_bruto,e.in_netto,e.out_bruto,e.out_netto];t.push(a)})),a.autoTable({head:l,body:t,startY:30,theme:"plain",rowPageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}})}));var n=a.internal.getNumberOfPages(),l=a.internal.pageSize.width,o=a.internal.pageSize.height;a.setFontSize(10);for(var r=1;r<n+1;r++){var c=l/2,i=o-10;a.setPage(r),a.text("".concat(r," of ").concat(n),c,i,{align:"center"})}a.autoPrint(),a.setProperties({title:"LAPORAN STOCK - SUMMARY"});var s=a.output("datauristring"),m=window.open();m.document.open(),m.document.write("<html><head><title>LAPORAN STOCK - SUMMARY</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+s+"></embed></body></html>")},R=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={listLaporan:[]},l}return Object(l.a)(t,[{key:"handlePindah",value:function(e){Object(m.b)("report/pindah-barang/".concat(e.kode_lokasi_asal,"&").concat(e.kode_lokasi_tujuan,"&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(a){Object(u.e)(a.data)&&y(e.tanggal_awal,e.tanggal_akhir,"ADMIN",Object(d.b)(),"ADMIN",a.data)})).catch((function(){return Object(p.c)("Data Kosong")}))}},{key:"handleMutasi",value:function(e){Object(m.b)("report/mutasi-stock/".concat(e.kode_lokasi,"&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(a){Object(u.e)(a.data)&&L(e.tanggal_awal,e.tanggal_akhir,"ADMIN",Object(d.b)(),"ADMIN",a.data)})).catch((function(){return Object(p.c)("Data Kosong")}))}},{key:"handleKirimMasak",value:function(e){}},{key:"handleTerimaMasak",value:function(e){}},{key:"handleStockPerKategori",value:function(e){var a=this;"KATEGORI"===e.group_by?Object(m.b)("report/stock-barang/"+"".concat(e.group_by,"&").concat(e.filter_by,"&").concat(e.kode_kategori)).then((function(e){Object(u.e)(e.data)&&a.setState({listLaporan:e&&e.data})})).then((function(){return K(a.state.listLaporan)})):Object(m.b)("report/stock-barang/"+"".concat(e.group_by,"&").concat(e.filter_by,"&").concat(e.kode_lokasi||"ALL")).then((function(e){return a.setState({listLaporan:e&&e.data})})).then((function(){return P(a.state.listLaporan)})).catch((function(){return Object(p.c)("Data Kosong")}))}},{key:"handleStockCard",value:function(e){Object(m.b)("report/stock-barang-card/".concat(e.kode_lokasi,"&").concat(e.kode_jenis,"&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(e){Object(u.e)(e.data)&&_(e.data)})).catch((function(){return Object(p.c)("Data Kosong")}))}},{key:"handleSummary",value:function(e){Object(m.b)("report/stock-barang-summary/".concat(e.kode_lokasi,"&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(e){Object(u.e)(e.data)&&I(e.data)})).catch((function(e){return Object(p.c)(e)}))}},{key:"handlePacking",value:function(e){Object(m.b)("report/packing-list/ALL&".concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(e){Object(u.e)(e.data)&&T(e.data)})).catch((function(e){return Object(s.c)("Gagal Ambil Data Laporan, Detail : ".concat(e))}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("ul",{className:"nav nav-tabs nav-justified nav-bordered mb-3"},i.a.createElement("li",{className:"nav-item "},i.a.createElement("a",{href:"#stok-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link active"},i.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Stock Barang"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#kartu-stok-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},i.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Kartu Stok Barang"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#summary-stok-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},i.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Summary Barang"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#pindah-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},i.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Pindah Barang"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#mutasi-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},i.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Mutasi Barang"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#packing-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},i.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Packing List")))),i.a.createElement("div",{className:"tab-content"},i.a.createElement("div",{className:"tab-pane show ",id:"saldo-tab"},i.a.createElement(S,{from:"saldoAwal"})),i.a.createElement("div",{className:"tab-pane",id:"pindah-tab"},i.a.createElement(S,{from:"pindahBarang",onSubmit:function(a){return e.handlePindah(a)}})),i.a.createElement("div",{className:"tab-pane",id:"mutasi-tab"},i.a.createElement(S,{from:"mutasi",onSubmit:function(a){return e.handleMutasi(a)}})),i.a.createElement("div",{className:"tab-pane",id:"packing-tab"},i.a.createElement(S,{from:"packing",onSubmit:function(a){return e.handlePacking(a)}})),i.a.createElement("div",{className:"tab-pane active",id:"stok-tab"},i.a.createElement(S,{from:"stokPerKategori",onSubmit:function(a){return e.handleStockPerKategori(a)}})),i.a.createElement("div",{className:"tab-pane",id:"kartu-stok-tab"},i.a.createElement(S,{from:"kartuStok",onSubmit:function(a){return e.handleStockCard(a)}})),i.a.createElement("div",{className:"tab-pane",id:"summary-stok-tab"},i.a.createElement(S,{from:"SummaryStock",onSubmit:function(a){return e.handleSummary(a)}}))))))))}}]),t}(c.Component);a.default=R}}]);
//# sourceMappingURL=102.49910cdc.chunk.js.map