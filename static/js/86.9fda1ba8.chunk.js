(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[86],{1204:function(e,a,t){"use strict";t.r(a);var n=t(22),o=t(23),l=t(25),r=t(24),c=t(49),i=t.n(c),s=t(0),m=t.n(s),u=t(26),d=t(3),p=t(571),g=t(558),h=t(35),E=t(15),b=t(467),N=t(468),f=t(91),v=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).inputChange=function(e){return function(a){o.setState(Object(h.a)({},e,a.target.value))}},o.state={response:"",kode_perhiasan:"",tipeOmzet:"PERTAHUN"},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.f)())}},{key:"render",value:function(){switch(this.props.from){case"penerimaan":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(b.a,{name:"kode_supplier",component:g.b,options:this.props.listsupplier.map((function(e){return{value:e.kode_supplier,name:e.nama_supplier}})),type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(b.a,{name:"type",component:g.b,options:[{value:"DETAIL",name:"DETAIL"},{value:"REKAP",name:"REKAP"}],type:"text",label:"Type Laporan",placeholder:"Masukan Type Laporan"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(b.a,{name:"tanggal_awal",label:"Mulai Tanggal",className:"form-control",component:g.a,type:"date"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(b.a,{name:"tanggal_akhir",label:"Sampai Dengan",className:"form-control",component:g.a,type:"date"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))));case"hutang":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(b.a,{name:"kode_supplier",component:g.b,options:this.props.listsupplier.map((function(e){return{value:e.kode_supplier,name:e.nama_supplier}})),type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(b.a,{name:"type",component:g.b,options:[{value:"NORMAL",name:"NORMAL"},{value:"CARD",name:"CARD"},{value:"SUMMARY",name:"SUMMARY"}],type:"text",label:"Type Laporan",placeholder:"Masukan Type Laporan"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(b.a,{name:"tanggal_awal",component:g.a,type:"date",label:"Tanggal Awal",placeholder:"Masukan Tanggal Awal"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(b.a,{name:"tanggal_akhir",component:g.a,type:"date",label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary"},"Print")))));case"omzet":return m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("label",{htmlFor:""},"Tipe"),m.a.createElement(b.a,{name:"tipe",className:"form-control",component:"select",onChange:this.inputChange("tipeOmzet")},m.a.createElement("option",{value:"PERTAHUN",key:"PERTAHUN"},"PERHATUN"),m.a.createElement("option",{value:"PERBULAN",key:"PERBULAN"},"PERBULAN"),m.a.createElement("option",{value:"PERTANGGAL",key:"PERTANGGAL"},"PERTANGGAL"))),"PERTAHUN"===this.state.tipeOmzet?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(b.a,{name:"tahunAwal",label:"Tahun Awal",className:"form-control",component:g.a,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(b.a,{name:"tahunAkhir",label:"Sampai Dengan",className:"form-control",component:g.a,type:"date"}))):"PERBULAN"===this.state.tipeOmzet?m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(b.a,{name:"bulanAwal",label:"Bulan Awal",className:"form-control",component:g.a,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(b.a,{name:"bulanAkhir",label:"Sampai Dengan",className:"form-control",component:g.a,type:"date"}))):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(b.a,{name:"dateAwal",label:"Tanggal Awal",className:"form-control",component:g.a,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(b.a,{name:"dateAkhir",label:"Sampai Dengan",className:"form-control",component:g.a,type:"date"}))),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary"},"Print"))));case"transaksi":return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("div",{className:"form-group"},m.a.createElement(b.a,{name:"kode_supplier",component:g.b,options:this.props.listsupplier.map((function(e){return{value:e.kode_supplier,name:e.nama_supplier}})),type:"text",label:"Kode Supplier",placeholder:"Masukan Kode Supplier"}))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(b.a,{name:"tglFrom",label:"Mulai Tanggal",className:"form-control",component:g.a,type:"date"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(b.a,{name:"tglTo",label:"Sampai Dengan",className:"form-control",component:g.a,type:"date"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Print")))))}}}]),t}(s.Component);v=Object(N.a)({form:"formSupplier",enableReinitialize:!0})(v);var k=Object(E.b)((function(e){return{listsupplier:e.provinsi.supplier}}))(v),A=t(124),S=(t(300),function(e){var a=new A.default,t=[];a.setFontSize(15),a.text("LAPORAN HUTANG SUPPLIER",14,15),a.setFontSize(10),e.forEach((function(e,a){var n=[e.kode_supplier,e.kode_ext,e.nama_supplier,e.total_netto,parseFloat(e.total_rp).toLocaleString("id-ID")];t.push(n)})),a.autoTable({head:[[{content:"KODE SUPPLIER"},{content:"KODE EXT"},{content:"NAMA SUPPLIER"},{content:"TOTAL NETTO"},{content:"TOTAL RP"}]],body:t,startY:30,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var n=a.internal.getNumberOfPages(),o=a.internal.pageSize.width,l=a.internal.pageSize.height;a.setFontSize(10);for(var r=1;r<n+1;r++){var c=o/2,i=l-10;a.setPage(r),a.text("".concat(r," of ").concat(n),c,i,{align:"center"})}a.autoPrint();var s="<embed width='100%' height='100%' src='"+a.output("datauristring")+"'/>",m=window.open();m.document.open(),m.document.write(s)}),T=function(e){var a=new A.default,t=[];a.setFontSize(15),a.text("LAPORAN HUTANG SUPPLIER ",14,15),a.setFontSize(10),e.forEach((function(e,n){var o=[[{content:"KODE SUPPLIER : ".concat(e.kode_supplier),colSpan:5},{content:"NAMA SUPPLIER : ".concat(e.nama_supplier),colSpan:5}],[{content:"TANGGAL"},{content:"AWAL\nNETTO"},{content:"AWAL\nRP"},{content:"IN\nNETTO"},{content:"IN\nRP"},{content:"OUT\nNETTO"},{content:"OUT\nRP"},{content:"AKHIR\nNETTO"},{content:"AKHIR\nRP"},{content:"KETERANGAN"},{content:"NO REF"},{content:"NO BON"}]];e.detail.forEach((function(e){var a=[e.tanggal,e.awal_netto,e.awal_rp,e.in_netto,e.in_rp,e.out_netto,e.out_rp,e.akhir_netto,e.akhir_rp,e.keterangan,e.no_ref,e.no_ext];t.push(a)})),a.autoTable({head:o,body:t,startY:30,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}})}));var n=a.internal.getNumberOfPages(),o=a.internal.pageSize.width,l=a.internal.pageSize.height;a.setFontSize(10);for(var r=1;r<n+1;r++){var c=o/2,i=l-10;a.setPage(r),a.text("".concat(r," of ").concat(n),c,i,{align:"center"})}a.autoPrint();var s="<embed width='100%' height='100%' src='"+a.output("datauristring")+"'/>",m=window.open();m.document.open(),m.document.write(s)},_=function(e){var a,t=new A.default,n=[],o=[];a=[[{content:"KODE SUPPLIER"},{content:"NAMA SUPPLIER"},{content:"AWAL NETTO"},{content:"AWAL RP"},{content:"IN NETTO"},{content:"IN RP"},{content:"OUT NETTO"},{content:"OUT RP"},{content:"AKHIR NETTO"},{content:"AKHIR RP"}]],t.setFontSize(15),t.text("LAPORAN SUMMARY HUTANG SUPPLIER",14,15),t.setFontSize(10),e.forEach((function(e,a){var t=[e.kode_supplier,e.nama_supplier,e.awal_netto,parseFloat(e.awal_rp).toLocaleString("id-ID"),e.in_netto,parseFloat(e.in_rp).toLocaleString("id-ID"),e.out_netto,parseFloat(e.out_rp).toLocaleString("id-ID"),e.akhir_netto,parseFloat(e.akhir_rp).toLocaleString("id-ID")];n.push(t),o=[]})),t.autoTable({head:a,body:n,foot:o,startY:30,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}});var l=t.internal.getNumberOfPages(),r=t.internal.pageSize.width,c=t.internal.pageSize.height;t.setFontSize(10);for(var i=1;i<l+1;i++){var s=r/2,m=c-10;t.setPage(i),t.text("".concat(i," of ").concat(l),s,m,{align:"center"})}t.autoPrint();var u="<embed width='100%' height='100%' src='"+t.output("datauristring")+"'/>",d=window.open();d.document.open(),d.document.write(u)},P=function(e){console.log(e);var a=new A.default("landscape"),t=[];a.setFontSize(15),a.text("LAPORAN PEMBAYARAN HUTANG SUPPLIER",14,15),a.setFontSize(10),e.forEach((function(e,n){var o=[[{content:"KODE SUPPLIER : ".concat(e.kode_supplier),colSpan:4},{content:"NAMA SUPPLIER : ".concat(e.nama_supplier),colSpan:4}],[{content:"TANGGAL"},{content:"NO BON"},{content:"JUMLAH HUTANG"},{content:"PUTUS TITIP"},{content:"DENDA"},{content:"HUTANG"},{content:"PEMBAYARAN"},{content:"LEBIH PEMBAYARAN"}]];e.detail.forEach((function(e){var a=[e.tanggal,e.no_bon,e.jumlah_hutang,e.total_putus_titip,e.total_denda,e.total_hutang,e.total_pembayaran,e.lebih_pembayaran];t.push(a)})),e.detail_bayar.forEach((function(e){var a=["Bayar Cash : ".concat(e.bayar_cash),"Bayar Transfer : ".concat(e.bayar_trf),"Bayar Giro : ".concat(e.bayar_giro),"Bayar Ciok : ".concat(e.bayar_ciok),"Bayar Rongsok : ".concat(e.bayar_rongsok)];t.push(a)})),a.autoTable({head:o,body:t,startY:30,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}})}));var n=a.internal.getNumberOfPages(),o=a.internal.pageSize.width,l=a.internal.pageSize.height;a.setFontSize(10);for(var r=1;r<n+1;r++){var c=o/2,i=l-10;a.setPage(r),a.text("".concat(r," of ").concat(n),c,i,{align:"center"})}a.autoPrint();var s="<embed width='100%' height='100%' src='"+a.output("datauristring")+"'/>",m=window.open();m.document.open(),m.document.write(s)},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5?arguments[5]:void 0,r=new A.default,c=[],i=[],s=[],m=40;r.setFontSize(15),r.text("LAPORAN DETAIL PENERIMAAN SUPPLIER",14,15),r.setFontSize(10),r.text("Supplier : ".concat(e),14,25),r.text("Tanggal\t: ".concat(a),120,25),l.forEach((function(e,a){r.text("Kode Supplier : ".concat(e.kode_supplier),14,35),r.text("Nama Supplier : ".concat(e.nama_supplier),100,35),e.detail.forEach((function(a){s=[[{content:"TANGGAL INVOICE : ".concat(a.tanggal_invoice),colSpan:12}],[{content:"NO BON : ".concat(a.no_bon),colSpan:12}],[{content:"NO"},{content:"KODE JENIS"},{content:"KETERANGAN"},{content:"KADAR CETAK"},{content:"KADAR BELI"},{content:"QTY"},{content:"P"},{content:"K"},{content:"PKG"},{content:"GROSS"},{content:"BRUTO"},{content:"NETTO"},{content:"ONGKOS"}]],a.detail_barang.forEach((function(e,a){var t=[e.no_urut,e.kode_jenis,e.keterangan,e.kadar_cetak,e.kadar_beli,e.qty,e.plastik,e.kulit,e.pkg,e.gross,e.bruto,e.netto,parseFloat(e.ongkos_rp).toLocaleString("id-ID")];c.push(t),console.log(c)}));var t=["","","","","","","","","","",e.total_bruto,e.total_netto,parseFloat(e.total_rp).toLocaleString("id-ID")];i.push(t)})),r.autoTable({head:s,body:c,foot:i,startY:0===a?40:m+5,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),m=r.autoTableEndPosY()+10,c=[],i=[]})),r.text("User\t: ".concat(t),14,m+10),r.text("Cetak\t: ".concat(n),14,m+16),r.text("Valid\t: ".concat(o),14,m+22);var u=r.internal.getNumberOfPages(),d=r.internal.pageSize.width,p=r.internal.pageSize.height;r.setFontSize(10);for(var g=1;g<u+1;g++){var h=d/2,E=p-10;r.setPage(g),r.text("".concat(g," of ").concat(u),h,E,{align:"center"})}r.autoPrint();var b=r.output("datauristring"),N="<embed width='100%' height='100%' src='"+b+"'/>",f=window.open();f.document.open(),f.document.write(N)},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5?arguments[5]:void 0,r=new A.default,c=[],i=[[{content:"TANGGAL"},{content:"NO BON"},{content:"TOTAL BRUTO"},{content:"TOTAL NETTO"},{content:"TOTAL NETTO EXT"},{content:"TOTAL RP"}]],s=40;r.setFontSize(15),r.text("LAPORAN REKAP PENERIMAAN SUPPLIER",14,15),r.setFontSize(10),r.text("Supplier : ".concat(e),14,25),r.text("Tanggal\t: ".concat(a),120,25),l.forEach((function(e,a){r.text("Kode Supplier : ".concat(e.kode_supplier),14,35),r.text("Nama Supplier : ".concat(e.nama_supplier),100,35),e.detail.forEach((function(e){var a=[e.tanggal_invoice,e.no_bon,e.total_bruto,e.total_netto,e.total_netto_ext,e.total_rp];c.push(a)})),r.autoTable({head:i,body:c,startY:0===a?40:s+5,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),s=r.autoTableEndPosY()+10,c=[]})),r.text("User\t: ".concat(t),14,s+10),r.text("Cetak\t: ".concat(n),14,s+16),r.text("Valid\t: ".concat(o),14,s+22);var m=r.internal.getNumberOfPages(),u=r.internal.pageSize.width,d=r.internal.pageSize.height;r.setFontSize(10);for(var p=1;p<m+1;p++){var g=u/2,h=d-10;r.setPage(p),r.text("".concat(p," of ").concat(m),g,h,{align:"center"})}r.autoPrint();var E=r.output("datauristring"),b="<embed width='100%' height='100%' src='"+E+"'/>",N=window.open();N.document.open(),N.document.write(b)},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",r=new A.default,c=JSON.parse(localStorage.getItem("LaporanReturnSupplier"))||[],i=[],s=["No Faktur","No Bon","Tanggal","Tanggal Balik","Kode Jenis","Keterangan","Kadar","Bruto (Gr)","Harga (%)","Netto (Gr)","Ongkos (Rp)"];c.forEach((function(e,a){e.barangDetails.forEach((function(a,t){var n=[e.noFaktur,e.noBon,e.tanggal,e.tanggalBarang,a.kodeJenis,a.keterangan,a.kadarCetak,a.bruto,a.kadarTransaksi,a.netto,parseFloat(a.rp).toLocaleString("id-ID")];i.push(n)}))})),r.autoTable(s,i,{startY:40,columnStyles:{0:{columnWidth:18},1:{columnWidth:18},4:{columnWidth:18}}});var m=r.lastAutoTable.finalY+10;r.text(l,14,15),r.setFontSize(10),r.text(e,14,25),r.text(":",37,25),r.text(a,40,25),r.text("User",160,m+10),r.text(":",168,m+10),r.text(t,170,m+10),r.text("Cetak",160,m+15),r.text(":",168,m+15),r.text(n,170,m+15),r.text("Valid",160,m+20),r.text(":",168,m+20),r.text(o,170,m+20);var u=r.output("datauristring"),d="<embed width='100%' height='100%' src='"+u+"'/>",p=window.open();p.document.open(),p.document.write(d),p.document.close()},L=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,w=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={listLaporan:[]},o}return Object(o.a)(t,[{key:"handlePenerimaan",value:function(e){var a=this;Object(d.b)("report/terima-barang-supplier/"+"".concat(e.type,"&").concat(e.kode_supplier,"&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(e){return a.setState({listLaporan:e&&e.data})})).then((function(){"DETAIL"===e.type?O(e.tanggal_awal,e.tanggal_akhir,Object(g.d)().user_name,Object(p.b)(),Object(g.d)().user_name,a.state.listLaporan):y(e.tanggal_awal,e.tanggal_akhir,Object(g.d)().user_name,Object(p.b)(),Object(g.d)().user_name,a.state.listLaporan)})).catch((function(e){return Object(u.c)("Gagal Mengambil data, Mohon periksa koneksi anda, Detail :".concat(e.response.data))}))}},{key:"handleHutang",value:function(e){var a=this;switch(e.type){case"NORMAL":Object(d.b)("report/hutang-supplier").then((function(e){return a.setState({listLaporan:e&&e.data})})).then((function(){return S(a.state.listLaporan)}));break;case"CARD":Object(d.b)("report/hutang-supplier-card/"+"".concat(e.kode_supplier,"&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(e){return a.setState({listLaporan:e&&e.data})})).then((function(){return T(a.state.listLaporan)}));break;case"SUMMARY":Object(d.b)("report/hutang-supplier-summary/"+"".concat(e.kode_supplier,"&").concat(e.tanggal_awal,"&").concat(e.tanggal_akhir)).then((function(e){return a.setState({listLaporan:e&&e.data})})).then((function(){return _(a.state.listLaporan)}))}}},{key:"handleKartuHutang",value:function(e){console.log(e)}},{key:"handleOmzet",value:function(e){}},{key:"handleReturn",value:function(e){i.a.get(L+"spp/dc/rtr/details",{params:{tglFrom:e.tglFrom,tglTo:e.tglTo,kodeLokasiFrom:e.kodeLokasiFrom,kodelokasiTo:e.kodelokasiTo}}).then((function(e){return localStorage.setItem("LaporanReturnSupplier",JSON.stringify(e.data))})).catch((function(e){return Object(u.c)("Gagal Mengambil data, Mohon periksa koneksi anda")})).then((function(){return R("Tanggal","".concat(e.tglFrom," - ").concat(e.tglTo),"ADMIN","2020-12-16","ADMIN","LAPORAN RETURN SUPPLIER")}))}},{key:"handleTitip",value:function(e){i.a.get(L+"spp/dc/ttp/details",{params:{tglFrom:e.tglFrom,tglTo:e.tglTo,kodeLokasiFrom:e.kodeLokasiFrom,kodelokasiTo:e.kodelokasiTo}}).then((function(e){return localStorage.setItem("LaporanTitipSupplier",JSON.stringify(e.data))})).catch((function(e){return Object(u.c)("Gagal Mengambil data, Mohon periksa koneksi anda")}))}},{key:"handleTolakan",value:function(e){Object(d.b)("report/bayar-hutang-supplier/".concat(e.kode_supplier,"&").concat(e.tglFrom,"&").concat(e.tglTo,"&").concat(e.type_faktur,"&").concat(e.type_bayar)).then((function(e){return localStorage.setItem("LaporanTolakReturSupplier",JSON.stringify(e.data))})).catch((function(e){return Object(u.c)("Gagal Mengambil data, Mohon periksa koneksi anda")}))}},{key:"handleTransaksi",value:function(e){Object(d.b)("report/bayar-hutang-supplier/".concat(e.kode_supplier,"&").concat(e.tglFrom,"&").concat(e.tglTo,"&REKAP&REKAP")).then((function(e){return P(e.data)})).catch((function(e){return Object(u.c)(e)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("ul",{className:"nav nav-tabs nav-justified nav-bordered mb-3"},m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#penerimaan-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link active"},m.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Penerimaan"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#return-tab","data-toggle":"tab","aria-expanded":"true",className:"nav-link "},m.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Return"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#hutang-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},m.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Hutang"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#kartu-hutang-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},m.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Kartu Hutang"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#omzet-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},m.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Omzet"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#transaksi-pembayaran-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},m.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Transaksi Pembayaran"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#tolakan-return-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},m.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Tolakan Return"))),m.a.createElement("li",{className:"nav-item"},m.a.createElement("a",{href:"#titip-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},m.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),m.a.createElement("span",{className:"d-none d-lg-block"},"Titip")))),m.a.createElement("div",{className:"tab-content"},m.a.createElement("div",{className:"tab-pane show active",id:"penerimaan-tab"},m.a.createElement(k,{from:"penerimaan",onSubmit:function(a){return e.handlePenerimaan(a)}})),m.a.createElement("div",{className:"tab-pane",id:"return-tab"},m.a.createElement(k,{from:"penerimaan",onSubmit:function(a){return e.handleReturn(a)}})),m.a.createElement("div",{className:"tab-pane",id:"hutang-tab"},m.a.createElement(k,{from:"hutang",onSubmit:function(a){return e.handleHutang(a)}})),m.a.createElement("div",{className:"tab-pane",id:"kartu-hutang-tab"},m.a.createElement(k,{from:"penerimaan",onSubmit:function(a){return e.handleKartuHutang(a)}})),m.a.createElement("div",{className:"tab-pane",id:"omzet-tab"},m.a.createElement(k,{from:"omzet",onSubmit:function(a){return e.handleOmzet(a)}})),m.a.createElement("div",{className:"tab-pane",id:"transaksi-pembayaran-tab"},m.a.createElement(k,{from:"transaksi",onSubmit:function(a){return e.handleTransaksi(a)}})),m.a.createElement("div",{className:"tab-pane",id:"tolakan-return-tab"},m.a.createElement(k,{from:"penerimaan",onSubmit:function(a){return e.handleTolakan(a)}})),m.a.createElement("div",{className:"tab-pane",id:"titip-tab"},m.a.createElement(k,{from:"penerimaan",onSubmit:function(a){return e.handleTitip(a)}}))))))))}}]),t}(s.Component);a.default=w},558:function(e,a,t){"use strict";t.d(a,"c",(function(){return m})),t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d})),t.d(a,"d",(function(){return p}));var n=t(8),o=t.n(n),l=t(0),r=t.n(l),c=t(92),i=(t(638),t(639),t(3),t(571)),s=o.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(e){e.addEventListener("mouseenter",o.a.stopTimer),e.addEventListener("mouseleave",o.a.resumeTimer)}});function m(e){return new Promise((function(a,t){s.fire({icon:"error",title:e}).then(a("berhasil")).catch(t("error"))}))}var u=function(e){var a=e.input,t=e.label,n=e.type,o=e.readOnly,l=e.placeholder,c=e.autoFocus,s=e.ref,m=e.loading,u=e.meta,d=u.touched,p=u.error,g=u.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},t),m?r.a.createElement(i.a,null):r.a.createElement("input",Object.assign({},a,{type:n,ref:s,autoFocus:c,className:"form-control",readOnly:o,placeholder:l,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),d&&(p&&r.a.createElement("ul",{className:"parsley-errors-list filled"},r.a.createElement("li",{className:"parsley-required"}," ",p,"."))||g&&r.a.createElement("p",null,g)))},d=function(e){var a=e.input,t=e.label,n=e.readOnly,o=e.placeholder,l=e.options,s=e.getOptions,m=(e.value,e.disabled,e.loading),u=e.meta,d=u.touched,p=u.error,g=u.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"",className:"text-black"},t),m?r.a.createElement(i.a,null):r.a.createElement(c.a,Object.assign({},a,{search:!0,disabled:n,placeholder:o,options:l,getOptions:s,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}})),d&&(p&&r.a.createElement("ul",{className:"parsley-errors-list filled"},r.a.createElement("li",{className:"parsley-required"}," ",p,"."))||g&&r.a.createElement("p",null,g)))},p=function(){return JSON.parse(localStorage.getItem("userdata"))||[]}},571:function(e,a,t){"use strict";t.d(a,"b",(function(){return c})),t.d(a,"a",(function(){return i}));var n=t(0),o=t.n(n),l=t(16),r=t.n(l),c=function(){return(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)},i=function(e){var a=e.label;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null," ",a," "),o.a.createElement(r.a,{className:"form-control"}))}}}]);
//# sourceMappingURL=86.9fda1ba8.chunk.js.map