(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[86],{1067:function(e,a,t){"use strict";t.r(a);var n=t(39),r=t(40),l=t(42),o=t(41),c=t(3),m=t.n(c),i=t(0),s=t.n(i),u=t(300),d=t(90),p=t(19),g=t(298),E=t(312),v=function(e){var a=e.input,t=e.label,n=e.type,r=e.meta,l=r.touched,o=r.error,c=r.warning;return s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"",className:"text-black"},t),s.a.createElement("input",Object.assign({},a,{type:n,className:"form-control"})),l&&(o&&s.a.createElement("p",{className:"invalid-feedback"},o)||c&&s.a.createElement("p",null,c)))},f=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(d.a)({},e,a.target.value))}},r.state={response:"",kode_perhiasan:"",tipeOmzet:"PERTAHUN",listSupplier:[],listKategori:[{nama:"AMBIL BARANG"},{nama:"KEMBALI STOK"},{nama:"KOREKSI STOK"},{nama:"MUTASI BAHAN"},{nama:"PENGAMBILAN SALES"},{nama:"PINDAH"},{nama:"PINDAH GUDANG REPARASI"},{nama:"RETURN SALES"},{nama:"SALAH INPUT"},{nama:"SALAH PINDAH"},{nama:"STOK AWAL"},{nama:"TAMBAH BARANG"}]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://157.245.145.87:9011/master/suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return alert(e)}))}},{key:"render",value:function(){switch(this.props.from){case"saldoAwal":return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Lokasi"),s.a.createElement(g.a,{name:"lokasi",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglEnd",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"kriteria":return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Kriteria"),s.a.createElement(g.a,{name:"kriteria",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listKategori.map((function(e){return s.a.createElement("option",{value:e.nama},e.nama)})))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"perpindahanBarang":return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Jenis"),s.a.createElement(g.a,{name:"jenis",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Dari Lokasi"),s.a.createElement(g.a,{name:"kodeLokasiFrom",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return s.a.createElement("option",{value:e.kodeSupplier},e.namaSupplier)})))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Ke Lokasi"),s.a.createElement(g.a,{name:"kodeLokasiTo",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return s.a.createElement("option",{value:e.kodeSupplier},e.namaSupplier)})))),s.a.createElement("div",{className:"col-lg-4 mt-3"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("label",{htmlFor:"employed"},"TAMBAH BARANG"),s.a.createElement("div",null,s.a.createElement(g.a,{name:"tambahBarang",id:"employed",component:"input",type:"checkbox",value:"TAMBAH BARANG"}))),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("label",{htmlFor:"employed"},"AMBIL BARANG"),s.a.createElement("div",null,s.a.createElement(g.a,{name:"ambilBarang",id:"employed",component:"input",type:"checkbox",value:"AMBIL BARANG"}))))),s.a.createElement("div",{className:"col-lg-8"}),s.a.createElement("div",{className:"col-lg-4 mt-3"},s.a.createElement(g.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4 mt-3"},s.a.createElement(g.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"kartuStok":return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Lokasi"),s.a.createElement(g.a,{name:"lokasi",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Jenis"),s.a.createElement(g.a,{name:"jenis",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"."),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",{className:"mr-3"},s.a.createElement(g.a,{name:"jenisTua",component:"input",type:"checkbox",className:"mr-2"}),"TUA"),s.a.createElement("label",{className:"mr-3"},s.a.createElement(g.a,{name:"jenisMuda",component:"input",type:"checkbox",className:"mr-2"}),"MUDA"),s.a.createElement("label",null,s.a.createElement(g.a,{name:"jenisBahan",component:"input",type:"checkbox",className:"mr-2"}),"BAHAN"))),s.a.createElement("div",{className:"col-lg-4 mt-3"},s.a.createElement(g.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4 mt-3"},s.a.createElement(g.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4"}),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Type Laporan"),s.a.createElement(g.a,{name:"typeLap",className:"form-control",component:"select"},s.a.createElement("option",{value:"DETAIL",key:"DETAIL"},"DETAIL"),s.a.createElement("option",{value:"REKAPITULASI",key:"REKAPITULASI"},"REKAPITULASI")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Jenis Laporan"),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",{className:"mr-3"},s.a.createElement(g.a,{name:"jenisLaporanKM",component:"input",type:"radio",value:"bruto",className:"mr-2"}),"Bruto"),s.a.createElement("label",null,s.a.createElement(g.a,{name:"jenisLaporanKM",component:"input",type:"radio",value:"netto",className:"mr-2"}),"Netto")))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"stokPerKategori":return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Lokasi"),s.a.createElement(g.a,{name:"lokasi",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement(g.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"}))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement(g.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"}))),s.a.createElement("div",{className:"col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Kategori"),s.a.createElement(g.a,{name:"kategori",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),s.a.createElement("div",{className:"col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"Jenis"),s.a.createElement(g.a,{name:"jenis",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),s.a.createElement("div",{className:"col-lg-4 mt-3"},s.a.createElement("label",{htmlFor:""},"."),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",null,s.a.createElement(g.a,{name:"jenisSO",component:"input",type:"checkbox",value:"netto",className:"mr-2"}),"SO"))),s.a.createElement("div",{className:"col-lg-12 mt-3"},s.a.createElement("h4",null,"STOK AWAL")),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"."),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",null,s.a.createElement(g.a,{name:"stokAwal",component:"input",type:"checkbox",value:"netto",className:"mr-2"}),"Stok Awal"))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Lokasi"),s.a.createElement(g.a,{name:"lokasi",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement(g.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"}))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"soSales":return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Lokasi"),s.a.createElement(g.a,{name:"lokasi",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tanggal",label:"Tanggal",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"jenisJK":return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("label",{htmlFor:""},"Jenis"),s.a.createElement(g.a,{name:"jenis",className:"form-control",component:"select"},s.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"Type Laporan"),s.a.createElement(g.a,{name:"typeLap",className:"form-control",component:"select"},s.a.createElement("option",{value:"DETAIL",key:"DETAIL"},"DETAIL"),s.a.createElement("option",{value:"REKAPITULASI",key:"REKAPITULASI"},"REKAPITULASI")))),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Jenis Laporan"),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",{className:"mr-3"},s.a.createElement(g.a,{name:"jenisLaporan",component:"input",type:"radio",value:"bruto",className:"mr-2"}),"Bruto"),s.a.createElement("label",null,s.a.createElement(g.a,{name:"jenisLaporan",component:"input",type:"radio",value:"netto",className:"mr-2"}),"Netto")))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"kirimMasak":return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Jenis Laporan"),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",{className:"mr-3"},s.a.createElement(g.a,{name:"jenisLaporanKM",component:"input",type:"radio",value:"KIRIM MASAK",className:"mr-2"}),"Kirim Masak"),s.a.createElement("label",null,s.a.createElement(g.a,{name:"jenisLaporanKM",component:"input",type:"radio",value:"KIRIM PRODUKSI",className:"mr-2"}),"Kirim Produksi")))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"terimaMasak":return s.a.createElement("form",{onSubmit:this.props.handleSubmit},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(g.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""},"Jenis Laporan"),s.a.createElement("div",{className:"form-control-transparant"},s.a.createElement("label",{className:"mr-3"},s.a.createElement(g.a,{name:"jenisLaporanTM",component:"input",type:"radio",value:"TERIMA MASAK",className:"mr-2"}),"Terima Masak"),s.a.createElement("label",null,s.a.createElement(g.a,{name:"jenisLaporanTM",component:"input",type:"radio",value:"TERIMA PRODUKSI",className:"mr-2"}),"Terima Produksi")))),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))))}}}]),t}(i.Component);f=Object(E.a)({form:"FormStok",enableReinitialize:!0})(f);var N=Object(p.b)()(f),b=t(343),h=(t(344),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=new b.default,c=JSON.parse(localStorage.getItem("LaporanPindahBarang"))||[],m=[],i=["No Pindah","Tipe Barang","Kadar","Kode Jenis","Bruto (Gr)","Harga (%)","Netto (Gr)","Ongkos (Rp)"];c.forEach((function(e,a){e.barangDetails.forEach((function(a,t){var n=[e.noBon,e.kategoriTransaksi,a.kadarCetak,a.kodeJenis,a.bruto,a.kadarTransaksi,a.netto,parseFloat(a.rp).toLocaleString("id-ID")];m.push(n)}))})),o.autoTable(i,m,{startY:40});var s=o.lastAutoTable.finalY+10,u=Date().split(" "),d=u[2]+u[3]+u[4];o.text(l,14,15),o.setFontSize(10),o.text(e,14,25),o.text(":",37,25),o.text(a,40,25),o.text("User",160,s+10),o.text(":",168,s+10),o.text(t,170,s+10),o.text("Cetak",160,s+15),o.text(":",168,s+15),o.text(n,170,s+15),o.text("Valid",160,s+20),o.text(":",168,s+20),o.text(r,170,s+20),o.autoPrint(),o.save("".concat(l,"_").concat(d,".pdf"))}),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=new b.default,c=JSON.parse(localStorage.getItem("LaporanPindahBarang"))||[],m=[],i=["Tanggal","No Kirim","Kode Tukang","Kode Jenis","Kadar","Bruto (Gr)","Netto (Gr)"];c.forEach((function(e,a){e.barangDetails.forEach((function(a,t){var n=[e.tanggal,e.noBon,e.kodeLokasi,a.kodeJenis,a.kadarTransaksi,a.bruto,a.netto];m.push(n)}))})),o.autoTable(i,m,{startY:40});var s=o.lastAutoTable.finalY+10;o.text(l,14,15),o.setFontSize(10),o.text(e,14,25),o.text(":",37,25),o.text(a,40,25),o.text("User",160,s+10),o.text(":",168,s+10),o.text(t,170,s+10),o.text("Cetak",160,s+15),o.text(":",168,s+15),o.text(n,170,s+15),o.text("Valid",160,s+20),o.text(":",168,s+20),o.text(r,170,s+20);var u=o.output("datauristring"),d="<embed width='100%' height='100%' src='"+u+"'/>",p=window.open();p.document.open(),p.document.write(d),p.document.close()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=new b.default,c=JSON.parse(localStorage.getItem("LaporanMutasiBarang"))||[],m=[],i=["No Pindah","Kategori","Kode Jenis","Bruto (Gr)","Harga (%)","Netto (Gr)","Kode Jenis 2","Harga 2 (%)","Netto 2 (Gr)"];c.forEach((function(e,a){e.barangDetailList.forEach((function(a,t){var n=[e.noBon,e.kategoriTransaksi,a.kodeJenis01,a.bruto01,a.kadarTransaksi01,a.netto01,a.kodeJenis02,a.kadarTransaksi02,a.netto02];m.push(n)}))})),o.autoTable(i,m,{startY:40});var s=o.lastAutoTable.finalY+10;o.text(l,14,15),o.setFontSize(10),o.text(e,14,25),o.text(":",37,25),o.text(a,40,25),o.text("User",160,s+10),o.text(":",168,s+10),o.text(t,170,s+10),o.text("Cetak",160,s+15),o.text(":",168,s+15),o.text(n,170,s+15),o.text("Valid",160,s+20),o.text(":",168,s+20),o.text(r,170,s+20);var u=o.output("datauristring"),d="<embed width='100%' height='100%' src='"+u+"'/>",p=window.open();p.document.open(),p.document.write(d),p.document.close()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",o=new b.default,c=JSON.parse(localStorage.getItem("LaporanTerimaMasak"))||[],m=[],i=["Tanggal","No Kirim","Kode Tukang","Kode Jenis","Kadar","Bruto (Gr)","Netto Kirim(Gr)","Netto Terima(Gr)","Netto Selisih (Gr)"];c.forEach((function(e,a){e.barangDetails.forEach((function(a,t){var n=[e.tanggal,e.noBon,e.kodeLokasi,a.kodeJenis,a.kadarTransaksi,a.brutoTerima,a.nettoKirim,a.nettoTerima,a.nettoSelisih];m.push(n)}))})),o.autoTable(i,m,{startY:40,columnStyles:{0:{columnWidth:25},1:{columnWidth:25}}});var s=o.lastAutoTable.finalY+10;o.text(l,14,15),o.setFontSize(10),o.text(e,14,25),o.text(":",37,25),o.text(a,40,25),o.text("User",160,s+10),o.text(":",168,s+10),o.text(t,170,s+10),o.text("Cetak",160,s+15),o.text(":",168,s+15),o.text(n,170,s+15),o.text("Valid",160,s+20),o.text(":",168,s+20),o.text(r,170,s+20);var u=o.output("datauristring"),d="<embed width='100%' height='100%' src='"+u+"'/>",p=window.open();p.document.open(),p.document.write(d),p.document.close()},y="http://157.245.145.87:9013/",L=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"handlePindah",value:function(e){m.a.get(y+"item/dc/pindahbarang/details",{params:{tglFrom:e.tglFrom,tglTo:e.tglTo,kodeLokasiFrom:e.kodeLokasiFrom,kodelokasiTo:e.kodelokasiTo}}).then((function(e){return localStorage.setItem("LaporanPindahBarang",JSON.stringify(e.data))})).catch((function(e){return Object(u.b)("Gagal Mengambil data, Mohon periksa koneksi anda")})).then((function(){return h("Tanggal","".concat(e.tglFrom," - ").concat(e.tglTo),"ADMIN","2020-12-16","ADMIN","LAPORAN PERPINDAHAN")}))}},{key:"handleMutasi",value:function(e){m.a.get(y+"item/dc/mutasibarang/details",{params:{tglFrom:e.tglFrom,tglTo:e.tglTo,kodeLokasiFrom:e.kodeLokasiFrom,kodelokasiTo:e.kodelokasiTo}}).then((function(e){return localStorage.setItem("LaporanMutasiBarang",JSON.stringify(e.data))})).catch((function(e){return Object(u.b)("Gagal Mengambil data, Mohon periksa koneksi anda")})).then((function(){return A("Tanggal","".concat(e.tglFrom," - ").concat(e.tglTo),"ADMIN","2020-12-16","ADMIN","LAPORAN MUTASI BARANG")}))}},{key:"handleKirimMasak",value:function(e){"KIRIM MASAK"===e.jenisLaporanKM?m.a.get(y+"item/dc/kirimmasak/details",{params:{tglFrom:e.tglFrom,tglTo:e.tglTo,kodeLokasiFrom:e.kodeLokasiFrom,kodelokasiTo:e.kodelokasiTo}}).then((function(e){return localStorage.setItem("LaporanKirimMasak",JSON.stringify(e.data))})).catch((function(e){return Object(u.b)("Gagal Mengambil data, Mohon periksa koneksi anda")})).then((function(){return k("Tanggal","".concat(e.tglFrom," - ").concat(e.tglTo),"ADMIN","2020-12-16","ADMIN","LAPORAN KIRIM MASAK")})):Object(u.b)("DATA KOSONG")}},{key:"handleTerimaMasak",value:function(e){"TERIMA MASAK"===e.jenisLaporanTM?m.a.get(y+"item/dc/terimamasak/details",{params:{tglFrom:e.tglFrom,tglTo:e.tglTo,kodeLokasiFrom:e.kodeLokasiFrom,kodelokasiTo:e.kodelokasiTo}}).then((function(e){return localStorage.setItem("LaporanTerimaMasak",JSON.stringify(e.data))})).catch((function(e){return Object(u.b)("Gagal Mengambil data, Mohon periksa koneksi anda")})).then((function(){return T("Tanggal","".concat(e.tglFrom," - ").concat(e.tglTo),"ADMIN","2020-12-16","ADMIN","LAPORAN TERIMA MASAK")})):Object(u.b)("DATA KOSONG")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("ul",{className:"nav nav-tabs nav-justified nav-bordered mb-3"},s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#saldo-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link active"},s.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Saldo Awal"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#pindah-tab","data-toggle":"tab","aria-expanded":"true",className:"nav-link "},s.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Pindah Barang"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#mutasi-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Mutasi Barang"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#stok-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Stok Per Kategori"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#kartu-stok-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Kartu Stok"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#sales-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"SO Sales"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#jenis-lk-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Jenis LK"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#jenis-rongsok-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Jensi Rongsok"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#kirim-masak-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Kirim Masak / Produksi"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{href:"#terima-masak-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},s.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),s.a.createElement("span",{className:"d-none d-lg-block"},"Terima Masak / Produksi")))),s.a.createElement("div",{className:"tab-content"},s.a.createElement("div",{className:"tab-pane show active",id:"saldo-tab"},s.a.createElement(N,{from:"saldoAwal"})),s.a.createElement("div",{className:"tab-pane",id:"pindah-tab"},s.a.createElement(N,{from:"perpindahanBarang",onSubmit:function(a){return e.handlePindah(a)}})),s.a.createElement("div",{className:"tab-pane",id:"mutasi-tab"},s.a.createElement(N,{from:"kriteria",onSubmit:function(a){return e.handleMutasi(a)}})),s.a.createElement("div",{className:"tab-pane",id:"stok-tab"},s.a.createElement(N,{from:"stokPerKategori"})),s.a.createElement("div",{className:"tab-pane",id:"kartu-stok-tab"},s.a.createElement(N,{from:"kartuStok"})),s.a.createElement("div",{className:"tab-pane",id:"sales-tab"},s.a.createElement(N,{from:"soSales"})),s.a.createElement("div",{className:"tab-pane",id:"jenis-lk-tab"},s.a.createElement(N,{from:"jenisJK"})),s.a.createElement("div",{className:"tab-pane",id:"jenis-rongsok-tab"},s.a.createElement(N,{from:"jenisJK"})),s.a.createElement("div",{className:"tab-pane",id:"terima-masak-tab"},s.a.createElement(N,{from:"terimaMasak",onSubmit:function(a){return e.handleTerimaMasak(a)}})),s.a.createElement("div",{className:"tab-pane",id:"kirim-masak-tab"},s.a.createElement(N,{from:"kirimMasak",onSubmit:function(a){return e.handleKirimMasak(a)}}))))))))}}]),t}(i.Component);a.default=L},298:function(e,a,t){"use strict";var n=t(33),r=t.n(n),l=t(337),o=t.n(l),c=t(156),m=t.n(c),i=t(0),s=t.n(i),u=t(27),d=t.n(u),p=t(302),g=t.n(p),E=t(60),v=t.n(E),f=t(19),N=function(e,a,t,n){var l=a.value;return"checkbox"===e?r()({},a,{checked:!!l}):"radio"===e?r()({},a,{checked:n(l,t),value:t}):"select-multiple"===e?r()({},a,{value:l||[]}):"file"===e?r()({},a,{value:l||void 0}):a};var b=t(299),h=function(e,a){if(Object(b.a)(e)){if(!a&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(a&&void 0!==e.nativeEvent)return e.nativeEvent.text;var t=e,n=t.target,r=n.type,l=n.value,o=n.checked,c=n.files,m=t.dataTransfer;return"checkbox"===r?!!o:"file"===r?c||m&&m.files:"select-multiple"===r?function(e){var a=[];if(e)for(var t=0;t<e.length;t++){var n=e[t];n.selected&&a.push(n.value)}return a}(e.target.options):l}return e},k="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,A=function(e,a){var t=a.name,n=a.parse,r=a.normalize,l=h(e,k);return n&&(l=n(l,t)),r&&(l=r(t,l)),l},T=t(13),y=t(44),L=function(e,a,t){return Object(y.isValidElementType)(e[a])?null:new Error("Invalid prop `"+a+"` supplied to `"+t+"`.")},F=["_reduxForm"],S=function(e){return e&&"object"===typeof e},x=function(e){return e&&"function"===typeof e},I=function(e){S(e)&&x(e.preventDefault)&&e.preventDefault()},D=function(e,a){if(S(e)&&S(e.dataTransfer)&&x(e.dataTransfer.getData))return e.dataTransfer.getData(a)},M=function(e,a,t){S(e)&&S(e.dataTransfer)&&x(e.dataTransfer.setData)&&e.dataTransfer.setData(a,t)};var K=function(e){var a=e.deepEqual,t=e.getIn,n=function(t){function n(){for(var e,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))||this).ref=s.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(a){var t=e.props,n=t.name,l=t.dispatch,o=t.parse,c=t.normalize,m=t.onChange,i=t._reduxForm,s=t.value,u=A(a,{name:n,parse:o,normalize:c}),d=!1;if(m)if(!k&&Object(b.a)(a))m(r()({},a,{preventDefault:function(){return d=!0,I(a)}}),u,s,n);else{var p=m(a,u,s,n);k&&(d=p)}d||(l(i.change(n,u)),i.asyncValidate&&i.asyncValidate(n,u,"change"))},e.handleFocus=function(a){var t=e.props,n=t.name,l=t.dispatch,o=t.onFocus,c=t._reduxForm,m=!1;o&&(k?m=o(a,n):o(r()({},a,{preventDefault:function(){return m=!0,I(a)}}),n)),m||l(c.focus(n))},e.handleBlur=function(a){var t=e.props,n=t.name,l=t.dispatch,o=t.parse,c=t.normalize,m=t.onBlur,i=t._reduxForm,s=t._value,u=t.value,d=A(a,{name:n,parse:o,normalize:c});d===s&&void 0!==s&&(d=u);var p=!1;m&&(k?p=m(a,d,u,n):m(r()({},a,{preventDefault:function(){return p=!0,I(a)}}),d,u,n)),p||(l(i.blur(n,d)),i.asyncValidate&&i.asyncValidate(n,d,"blur"))},e.handleDragStart=function(a){var t=e.props,n=t.name,r=t.onDragStart,l=t.value;M(a,"text",null==l?"":l),r&&r(a,n)},e.handleDrop=function(a){var t=e.props,n=t.name,l=t.dispatch,o=t.onDrop,c=t._reduxForm,m=t.value,i=D(a,"text"),s=!1;o&&o(r()({},a,{preventDefault:function(){return s=!0,I(a)}}),i,m,n),s||(l(c.change(n,i)),I(a))},e}m()(n,t);var l=n.prototype;return l.shouldComponentUpdate=function(e){var t=this,n=Object.keys(e),r=Object.keys(this.props);return!!(this.props.children||e.children||n.length!==r.length||n.some((function(n){return~(e.immutableProps||[]).indexOf(n)?t.props[n]!==e[n]:!~F.indexOf(n)&&!a(t.props[n],e[n])})))},l.getRenderedComponent=function(){return this.ref.current},l.render=function(){var a=this.props,t=a.component,n=a.forwardRef,l=a.name,o=a._reduxForm,c=(a.normalize,a.onBlur,a.onChange,a.onFocus,a.onDragStart,a.onDrop,a.immutableProps,v()(a,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),m=function(e,a,t){var n=e.getIn,l=e.toJS,o=e.deepEqual,c=t.asyncError,m=t.asyncValidating,i=t.onBlur,s=t.onChange,u=t.onDrop,d=t.onDragStart,p=t.dirty,g=t.dispatch,E=t.onFocus,f=t.form,b=t.format,h=t.initial,k=(t.parse,t.pristine),A=t.props,T=t.state,y=t.submitError,L=t.submitFailed,F=t.submitting,S=t.syncError,x=t.syncWarning,I=(t.validate,t.value),D=t._value,M=(t.warn,v()(t,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),K=S||c||y,w=x,P=function(e,t){if(null===t)return e;var n=null==e?"":e;return t?t(e,a):n}(I,b);return{input:N(M.type,{name:a,onBlur:i,onChange:s,onDragStart:d,onDrop:u,onFocus:E,value:P},D,o),meta:r()({},l(T),{active:!(!T||!n(T,"active")),asyncValidating:m,autofilled:!(!T||!n(T,"autofilled")),dirty:p,dispatch:g,error:K,form:f,initial:h,warning:w,invalid:!!K,pristine:k,submitting:!!F,submitFailed:!!L,touched:!(!T||!n(T,"touched")),valid:!K,visited:!(!T||!n(T,"visited"))}),custom:r()({},M,{},A)}}(e,l,r()({},c,{form:o.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),s=m.custom,u=v()(m,["custom"]);if(n&&(s.ref=this.ref),"string"===typeof t){var d=u.input;u.meta;return Object(i.createElement)(t,r()({},d,{},s))}return Object(i.createElement)(t,r()({},u,{},s))},n}(i.Component);return n.propTypes={component:L,props:d.a.object},Object(f.b)((function(e,n){var r=n.name,l=n._reduxForm,o=l.initialValues,c=(0,l.getFormState)(e),m=t(c,"initial."+r),i=void 0!==m?m:o&&t(o,r),s=t(c,"values."+r),u=t(c,"submitting"),d=function(e,a){var t=T.a.getIn(e,a);return t&&t._error?t._error:t}(t(c,"syncErrors"),r),p=function(e,a){var n=t(e,a);return n&&n._warning?n._warning:n}(t(c,"syncWarnings"),r),g=a(s,i);return{asyncError:t(c,"asyncErrors."+r),asyncValidating:t(c,"asyncValidating")===r,dirty:!g,pristine:g,state:t(c,"fields."+r),submitError:t(c,"submitErrors."+r),submitFailed:t(c,"submitFailed"),submitting:u,syncError:d,syncWarning:p,initial:i,value:s,_value:n.value}}),void 0,void 0,{forwardRef:!0})(n)},w=t(89),P=t.n(w),O=function(e,a,t,n,r,l){if(l)return e===a},j=function(e,a,t){var n=P()(e.props,a,O),r=P()(e.state,t,O);return!n||!r},B=function(e,a){var t=e._reduxForm.sectionPrefix;return t?t+"."+a:a},R=t(297);var U=function(e){var a=K(e),t=e.setIn,n=function(e){function n(a){var n;if((n=e.call(this,a)||this).ref=s.a.createRef(),n.normalize=function(e,a){var r=n.props.normalize;if(!r)return a;var l=n.props._reduxForm.getValues();return r(a,n.value,t(l,e,a),l,e)},!a._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return n}m()(n,e);var l=n.prototype;return l.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",(function(){return e.props.validate}),(function(){return e.props.warn}))},l.shouldComponentUpdate=function(e,a){return j(this,e,a)},l.UNSAFE_componentWillReceiveProps=function(e){var a=B(this.props,this.props.name),t=B(e,e.name);a===t&&T.a.deepEqual(this.props.validate,e.validate)&&T.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(a),this.props._reduxForm.register(t,"Field",(function(){return e.validate}),(function(){return e.warn})))},l.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},l.getRenderedComponent=function(){return g()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},l.render=function(){return Object(i.createElement)(a,r()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},o()(n,[{key:"name",get:function(){return B(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),n}(i.Component);return n.propTypes={name:d.a.string.isRequired,component:L,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(R.b)(n)};a.a=U(T.a)},300:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return c}));var n=t(43),r=t.n(n),l=function(e){r.a.fire({position:"top-right",icon:"warning",text:e,timer:2500,showConfirmButton:!1})},o=function(e){r.a.fire({position:"top-right",icon:"success",text:e,timer:2500,showConfirmButton:!1})},c=function(e){r.a.fire({position:"top-right",icon:"error",text:e,timer:2500,showConfirmButton:!1})}}}]);
//# sourceMappingURL=86.72cafcf6.chunk.js.map