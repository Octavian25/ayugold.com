(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[126],{1211:function(e,a,t){"use strict";t.r(a);var n=t(71),l=t(72),r=t(74),o=t(73),c=(t(56),t(0)),m=t.n(c),i=(t(174),t(4)),s=t(590),d=t(77),u=t(28),p=t(462),E=t(455),g=t(152),b=t(188),N=t(151),v=function(e){var a=e.input,t=e.label,n=e.type,l=e.meta,r=l.touched,o=l.error,c=l.warning;return m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"",className:"text-black"},t),m.a.createElement("input",Object.assign({},a,{type:n,className:"form-control"})),r&&(o&&m.a.createElement("p",{className:"invalid-feedback"},o)||c&&m.a.createElement("p",null,c)))},k=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).inputChange=function(e){return function(a){l.setState(Object(d.a)({},e,a.target.value))}},l.state={response:"",kode_perhiasan:"",tipeOmzet:"PERTAHUN",listSupplier:[],filter:!0,listKategori:[{nama:"AMBIL BARANG"},{nama:"KEMBALI STOK"},{nama:"KOREKSI STOK"},{nama:"MUTASI BAHAN"},{nama:"PENGAMBILAN SALES"},{nama:"PINDAH"},{nama:"PINDAH GUDANG REPARASI"},{nama:"RETURN SALES"},{nama:"SALAH INPUT"},{nama:"SALAH PINDAH"},{nama:"STOK AWAL"},{nama:"TAMBAH BARANG"}]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(g.d)()),this.props.dispatch(Object(N.d)()),this.props.dispatch(Object(b.b)())}},{key:"render",value:function(){var e=this;switch(this.props.from){case"saldoAwal":return m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("label",{htmlFor:""},"Lokasi"),m.a.createElement(p.a,{name:"lokasi",className:"form-control",component:"select"},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglEnd",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"kriteria":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("label",{htmlFor:""},"Kriteria"),m.a.createElement(p.a,{name:"kriteria",className:"form-control",component:"select"},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listKategori.map((function(e){return m.a.createElement("option",{value:e.nama},e.nama)})))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"perpindahanBarang":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("label",{htmlFor:""},"Jenis"),m.a.createElement(p.a,{name:"jenis",className:"form-control",component:"select"},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("label",{htmlFor:""},"Dari Lokasi"),m.a.createElement(p.a,{name:"kodeLokasiFrom",className:"form-control",component:"select"},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return m.a.createElement("option",{value:e.kodeSupplier},e.namaSupplier)})))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("label",{htmlFor:""},"Ke Lokasi"),m.a.createElement(p.a,{name:"kodeLokasiTo",className:"form-control",component:"select"},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return m.a.createElement("option",{value:e.kodeSupplier},e.namaSupplier)})))),m.a.createElement("div",{className:"col-lg-4 mt-3"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-6"},m.a.createElement("label",{htmlFor:"employed"},"TAMBAH BARANG"),m.a.createElement("div",null,m.a.createElement(p.a,{name:"tambahBarang",id:"employed",component:"input",type:"checkbox",value:"TAMBAH BARANG"}))),m.a.createElement("div",{className:"col-lg-6"},m.a.createElement("label",{htmlFor:"employed"},"AMBIL BARANG"),m.a.createElement("div",null,m.a.createElement(p.a,{name:"ambilBarang",id:"employed",component:"input",type:"checkbox",value:"AMBIL BARANG"}))))),m.a.createElement("div",{className:"col-lg-8"}),m.a.createElement("div",{className:"col-lg-4 mt-3"},m.a.createElement(p.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-4 mt-3"},m.a.createElement(p.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"kartuStok":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"kode_lokasi",component:s.b,options:this.props.listlokasi.map((function(e){return{value:e.kode_lokasi,name:"".concat(e.kode_lokasi," - ").concat(e.nama_lokasi)}})),type:"text",label:"Kode Lokasi",placeholder:"Masukan Kode Lokasi"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"kode_jenis",component:s.b,options:this.props.kodeBarang.map((function(e){return{value:e.kode_jenis,name:"".concat(e.kode_jenis," - ").concat(e.nama_jenis)}})),type:"text",label:"Kode Jenis",placeholder:"Masukan Kode Jenis"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"tanggal_awal",component:s.a,type:"date",label:"Tanggal Awal",placeholder:"Masukan Tanggal Awal"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"tanggal_akhir",component:s.a,type:"date",label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary"},"Print")))));case"stokPerKategori":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"group_by",component:s.b,options:[{value:"LOKASI",name:"LOKASI"},{value:"KATEGORI",name:"KATEGORI"}],type:"text",label:"Group By",placeholder:"Masukan Group By"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"filter_by",component:s.b,options:[{value:"LOKASI",name:"LOKASI"},{value:"KATEGORI",name:"KATEGORI"}],type:"text",label:"Filter By",placeholder:"Masukan Filter By",onChange:function(a){"KATEGORI"===a?e.setState({filter:!1}):e.setState({filter:!0})}})),m.a.createElement("div",{className:this.state.filter?"col-lg-3 d-none":"col-lg-3 "},m.a.createElement(p.a,{name:"kode_kategori",component:s.b,options:this.props.listkategori.map((function(e){return{value:e.kode_kategori,name:"".concat(e.nama_kategori," - ").concat(e.kode_kategori)}})),type:"text",label:"Kode Kategori",placeholder:"Masukan Kode Kategori"})),m.a.createElement("div",{className:this.state.filter?"col-lg-3 ":"col-lg-3 d-none"},m.a.createElement(p.a,{name:"kode_lokasi",component:s.b,options:this.props.listlokasi.map((function(e){return{value:e.kode_lokasi,name:e.nama_lokasi}})),type:"text",label:"Kode Lokasi",placeholder:"Masukan Kode Lokasi"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary"},"Print")))));case"soSales":return m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("label",{htmlFor:""},"Lokasi"),m.a.createElement(p.a,{name:"lokasi",className:"form-control",component:"select"},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tanggal",label:"Tanggal",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"jenisJK":return m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("label",{htmlFor:""},"Jenis"),m.a.createElement(p.a,{name:"jenis",className:"form-control",component:"select"},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",null,"Type Laporan"),m.a.createElement(p.a,{name:"typeLap",className:"form-control",component:"select"},m.a.createElement("option",{value:"DETAIL",key:"DETAIL"},"DETAIL"),m.a.createElement("option",{value:"REKAPITULASI",key:"REKAPITULASI"},"REKAPITULASI")))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Jenis Laporan"),m.a.createElement("div",{className:"form-control-transparant"},m.a.createElement("label",{className:"mr-3"},m.a.createElement(p.a,{name:"jenisLaporan",component:"input",type:"radio",value:"bruto",className:"mr-2"}),"Bruto"),m.a.createElement("label",null,m.a.createElement(p.a,{name:"jenisLaporan",component:"input",type:"radio",value:"netto",className:"mr-2"}),"Netto")))),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"kirimMasak":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Jenis Laporan"),m.a.createElement("div",{className:"form-control-transparant"},m.a.createElement("label",{className:"mr-3"},m.a.createElement(p.a,{name:"jenisLaporanKM",component:"input",type:"radio",value:"KIRIM MASAK",className:"mr-2"}),"Kirim Masak"),m.a.createElement("label",null,m.a.createElement(p.a,{name:"jenisLaporanKM",component:"input",type:"radio",value:"KIRIM PRODUKSI",className:"mr-2"}),"Kirim Produksi")))),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"terimaMasak":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(p.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:v,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Jenis Laporan"),m.a.createElement("div",{className:"form-control-transparant"},m.a.createElement("label",{className:"mr-3"},m.a.createElement(p.a,{name:"jenisLaporanTM",component:"input",type:"radio",value:"TERIMA MASAK",className:"mr-2"}),"Terima Masak"),m.a.createElement("label",null,m.a.createElement(p.a,{name:"jenisLaporanTM",component:"input",type:"radio",value:"TERIMA PRODUKSI",className:"mr-2"}),"Terima Produksi")))),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"SummaryStock":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"kode_lokasi",component:s.b,options:this.props.listlokasi.map((function(e){return{value:e.kode_lokasi,name:"".concat(e.kode_lokasi," - ").concat(e.nama_lokasi)}})),type:"text",label:"Kode Lokasi",placeholder:"Masukan Kode Lokasi"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"tanggal_awal",component:s.a,type:"date",label:"Tanggal Awal",placeholder:"Masukan Tanggal Awal"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(p.a,{name:"tanggal_akhir",component:s.a,type:"date",label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"}))),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary"},"Print"))))}}}]),t}(c.Component);k=Object(E.a)({form:"FormStok",enableReinitialize:!0})(k);var h=Object(u.b)((function(e){return{listlokasi:e.provinsi.lokasi,listkategori:e.provinsi.kategori,kodeBarang:e.provinsi.kodeBarang}}))(k),f=t(496),A=(t(498),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=new f.default,t=[];a.setFontSize(15),a.text("LAPORAN HUTANG SUPPLIER ",14,15),a.setFontSize(10),e.forEach((function(e,n){var l=[[{content:"KODE LOKASI : ".concat(e.kode_lokasi),colSpan:5},{content:"KODE JENIS : ".concat(e.kode_jenis),colSpan:5}],[{content:"TANGGAL"},{content:"AWAL\nNETTO"},{content:"AWAL\nRP"},{content:"IN\nNETTO"},{content:"IN\nRP"},{content:"OUT\nNETTO"},{content:"OUT\nRP"},{content:"AKHIR\nNETTO"},{content:"AKHIR\nRP"},{content:"KETERANGAN"},{content:"NO REF"},{content:"NO BON"}]];e.detail.forEach((function(e){var a=[e.tanggal,e.awal_netto,e.awal_rp,e.in_netto,e.in_rp,e.out_netto,e.out_rp,e.akhir_netto,e.akhir_rp,e.keterangan,e.no_ref,e.no_ext];t.push(a)})),a.autoTable({head:l,body:t,startY:30,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),a.autoTableEndPosY()+10}));var n=a.internal.getNumberOfPages(),l=a.internal.pageSize.width,r=a.internal.pageSize.height;a.setFontSize(10);for(var o=1;o<n+1;o++){var c=l/2,m=r-10;a.setPage(o),a.text("".concat(o," of ").concat(n),c,m,{align:"center"})}a.autoPrint();var i=a.output("datauristring"),s="<embed width='100%' height='100%' src='"+i+"'/>",d=window.open();d.document.open(),d.document.write(s)}),S=function(e){var a=new f.default,t=[],n=[];a.setFontSize(15),a.text("LAPORAN STOCK PER KATEGORI",14,15),a.setFontSize(10),e.forEach((function(e,a){n=[[{content:"KODE KATEGORI : ".concat(e.kode_kategori),colSpan:4}],[{content:"KODE LOKASI"},{content:"KODE JENIS"},{content:"TOTAL BRUTO"},{content:"TOTAL NETTO"}]],e.detail.forEach((function(e){var a=[e.kode_lokasi,e.kode_jenis,e.total_bruto,e.total_netto];t.push(a)}))})),a.autoTable({head:n,body:t,startY:30,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),a.autoTableEndPosY();var l=a.internal.getNumberOfPages(),r=a.internal.pageSize.width,o=a.internal.pageSize.height;a.setFontSize(10);for(var c=1;c<l+1;c++){var m=r/2,i=o-10;a.setPage(c),a.text("".concat(c," of ").concat(l),m,i,{align:"center"})}a.autoPrint();var s="<embed width='100%' height='100%' src='"+a.output("datauristring")+"'/>",d=window.open();d.document.open(),d.document.write(s)},y=function(e){var a=new f.default,t=[],n=[];a.setFontSize(15),a.text("LAPORAN STOCK PER LOKASI",14,15),a.setFontSize(10),e.forEach((function(e,a){n=[[{content:"KODE LOKASI : ".concat(e.kode_lokasi),colSpan:4}],[{content:"KODE KATEGORI"},{content:"KODE JENIS"},{content:"TOTAL BRUTO"},{content:"TOTAL NETTO"}]],e.detail.forEach((function(e){var a=[e.kode_kategori,e.kode_jenis,e.total_bruto,e.total_netto];t.push(a)}))})),a.autoTable({head:n,body:t,startY:30,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),a.autoTableEndPosY();var l=a.internal.getNumberOfPages(),r=a.internal.pageSize.width,o=a.internal.pageSize.height;a.setFontSize(10);for(var c=1;c<l+1;c++){var m=r/2,i=o-10;a.setPage(c),a.text("".concat(c," of ").concat(l),m,i,{align:"center"})}a.autoPrint();var s="<embed width='100%' height='100%' src='"+a.output("datauristring")+"'/>",d=window.open();d.document.open(),d.document.write(s)},T=(Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={listLaporan:[]},l}return Object(l.a)(t,[{key:"handlePindah",value:function(e){}},{key:"handleMutasi",value:function(e){}},{key:"handleKirimMasak",value:function(e){}},{key:"handleTerimaMasak",value:function(e){}},{key:"handleStockPerKategori",value:function(e){var a=this;"KATEGORI"===e.group_by?Object(i.b)("report/stock-barang/"+"".concat(e.group_by,"&").concat(e.filter_by,"&").concat(e.kode_kategori)).then((function(e){if(e===[])return Object(s.c)("Data Laporan Kosong"),!1;a.setState({listLaporan:e&&e.data})})).then((function(){return S(a.state.listLaporan)})):Object(i.b)("report/stock-barang/"+"".concat(e.group_by,"&").concat(e.filter_by,"&").concat(e.kode_lokasi||"ALL")).then((function(e){return a.setState({listLaporan:e&&e.data})})).then((function(){return y(a.state.listLaporan)})).catch((function(){return Object(s.c)("Data Kosong")}))}},{key:"handleStockCard",value:function(e){var a=this;Object(i.b)("report/stock-barang-card/".concat(e.kode_lokasi,"&").concat(e.kode_jenis,"&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(e){if(e===[])return Object(s.c)("Data Kosong"),!1;a.setState({listLaporan:e&e.data})})).then((function(){return A(a.state.listLaporan)})).catch((function(){return Object(s.c)("Data Kosong")}))}},{key:"handleSummary",value:function(e){var a=this;Object(i.b)("report/stock-barang-summary/".concat(e.kode_lokasi,"&").concat(e.kode_jenis,"&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(e){if(e===[])return Object(s.c)("Data Kosong"),!1;a.setState({listLaporan:e&e.data})})).then((function(){return A(a.state.listLaporan)})).catch((function(){return Object(s.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("ul",{className:"nav nav-tabs nav-justified nav-bordered mb-3"},m.a.createElement("li",{className:"nav-item "},m.a.createElement("a",{href:"#stok-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link active"},m.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Stock Barang"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#kartu-stok-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},m.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Kartu Stok Barang"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#summary-stok-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},m.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Summary Barang")))),m.a.createElement("div",{className:"tab-content"},m.a.createElement("div",{className:"tab-pane show ",id:"saldo-tab"},m.a.createElement(h,{from:"saldoAwal"})),m.a.createElement("div",{className:"tab-pane",id:"pindah-tab"},m.a.createElement(h,{from:"perpindahanBarang",onSubmit:function(a){return e.handlePindah(a)}})),m.a.createElement("div",{className:"tab-pane",id:"mutasi-tab"},m.a.createElement(h,{from:"kriteria",onSubmit:function(a){return e.handleMutasi(a)}})),m.a.createElement("div",{className:"tab-pane active",id:"stok-tab"},m.a.createElement(h,{from:"stokPerKategori",onSubmit:function(a){return e.handleStockPerKategori(a)}})),m.a.createElement("div",{className:"tab-pane",id:"kartu-stok-tab"},m.a.createElement(h,{from:"kartuStok",onSubmit:function(a){return e.handleStockCard(a)}})),m.a.createElement("div",{className:"tab-pane",id:"sales-tab"},m.a.createElement(h,{from:"soSales"})),m.a.createElement("div",{className:"tab-pane",id:"jenis-lk-tab"},m.a.createElement(h,{from:"jenisJK"})),m.a.createElement("div",{className:"tab-pane",id:"jenis-rongsok-tab"},m.a.createElement(h,{from:"jenisJK"})),m.a.createElement("div",{className:"tab-pane",id:"terima-masak-tab"},m.a.createElement(h,{from:"terimaMasak",onSubmit:function(a){return e.handleTerimaMasak(a)}})),m.a.createElement("div",{className:"tab-pane",id:"kirim-masak-tab"},m.a.createElement(h,{from:"kirimMasak",onSubmit:function(a){return e.handleKirimMasak(a)}})),m.a.createElement("div",{className:"tab-pane",id:"summary-stok-tab"},m.a.createElement(h,{from:"SummaryStock",onSubmit:function(a){return e.handleSummary(a)}}))))))))}}]),t}(c.Component));a.default=T},590:function(e,a,t){"use strict";t.d(a,"c",(function(){return s})),t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u})),t.d(a,"d",(function(){return p}));var n=t(19),l=t.n(n),r=t(0),o=t.n(r),c=t(179),m=(t(682),t(684),t(4),t(601)),i=l.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",l.a.stopTimer),e.addEventListener("mouseleave",l.a.resumeTimer)}});function s(e){return new Promise((function(a,t){i.fire({icon:"error",title:e}).then(a("berhasil")).catch(t("error"))}))}var d=function(e){var a=e.input,t=e.label,n=e.type,l=e.readOnly,r=e.placeholder,c=e.autoFocus,i=e.ref,s=e.loading,d=e.meta,u=d.touched,p=d.error,E=d.warning;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"text-black"},t),s?o.a.createElement(m.a,null):o.a.createElement("input",Object.assign({},a,{type:n,ref:i,autoFocus:c,className:"form-control",readOnly:l,placeholder:r,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),u&&(p&&o.a.createElement("ul",{className:"parsley-errors-list filled"},o.a.createElement("li",{className:"parsley-required"}," ",p,"."))||E&&o.a.createElement("p",null,E)))},u=function(e){var a=e.input,t=e.label,n=e.readOnly,l=e.placeholder,r=e.options,i=e.getOptions,s=(e.value,e.disabled,e.loading),d=e.meta,u=d.touched,p=d.error,E=d.warning;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"",className:"text-black"},t),s?o.a.createElement(m.a,null):o.a.createElement(c.a,Object.assign({},a,{search:!0,disabled:n,placeholder:l,options:r,getOptions:i,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),u&&(p&&o.a.createElement("ul",{className:"parsley-errors-list filled"},o.a.createElement("li",{className:"parsley-required"}," ",p,"."))||E&&o.a.createElement("p",null,E)))},p=function(){return JSON.parse(localStorage.getItem("userdata"))||[]}},601:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return m}));var n=t(0),l=t.n(n),r=t(173),o=t.n(r),c=function(){return(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)},m=function(e){var a=e.label;return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," ",a," "),l.a.createElement(o.a,{className:"form-control"}))}}}]);
//# sourceMappingURL=126.ec2ac44b.chunk.js.map