(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[144],{1205:function(e,a,t){"use strict";t.r(a);var n=t(35),o=t(36),l=t(38),r=t(37),c=t(0),i=t.n(c),m=t(56),s=t(3),d=t(190),A=t(18),u=t(467),g=t(468),p=t(120),E=function(e){var a=e.input,t=e.label,n=e.type,o=e.meta,l=o.touched,r=o.error,c=o.warning;return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"",className:"text-black"},t),i.a.createElement("input",Object.assign({},a,{type:n,className:"form-control"})),l&&(r&&i.a.createElement("p",{className:"invalid-feedback"},r)||c&&i.a.createElement("p",null,c)))},N=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={type_laporan:"SIMPLE",kategori:i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA"),i.a.createElement("option",{value:"AMG",key:"AMG"},"AMG"),i.a.createElement("option",{value:"ARISAN FUQING",key:"ARISAN FUQING"},"ARISAN FUQING"),i.a.createElement("option",{value:"ARISAN SBTH",key:"ARISAN SBTH"},"ARISAN SBTH"),i.a.createElement("option",{value:"ARISAN THAO",key:"ARISAN THAO"},"ARISAN THAO"),i.a.createElement("option",{value:"ARISAN TRI BHAKTI",key:"ARISAN TRI BHAKTI"},"ARISAN TRIBHAKTI"),i.a.createElement("option",{value:"ARTOS",key:"ARTOS"},"ARTOS"),i.a.createElement("option",{value:"BAYAR HUTANG BELI LM",key:"BAYAR HUTANG BELI LM"},"BAYAT HUTANG BELI LM"),i.a.createElement("option",{value:"BAYAR HUTANG SUPLLIER",key:"BAYAR HUTANG SUPLLIER"},"BAYAR HUTANG SUPLLIER"),i.a.createElement("option",{value:"BAYAR HUTANG CUSTOMER",key:"BAYAR HUTANG CUSTOMER"},"BAYAR HUTANG CUSTOMER"),i.a.createElement("option",{value:"BAYAR PIUTANG JUAL LM",key:"BAYAR PIUTANG JUAL LM"},"BAYAR PIUTANG JUAL LM"),i.a.createElement("option",{value:"BAYAR PIUTANG RUPIAH",key:"BAYAR PIUTANG RUPIAH"},"BAYAR PIUTANG RUPIAH"),i.a.createElement("option",{value:"BUNGA",key:"BUNGA"},"BUNGA"),i.a.createElement("option",{value:"BUNGA BANK",key:"BUNGA BANK"},"BUNGA BANK"),i.a.createElement("option",{value:"CASHBACK PABRIK",key:"CASHBACK PABRIK"},"CASHBACK PABRIK"),i.a.createElement("option",{value:"JUAL LM",key:"JUAL LM"},"JUAL LM"),i.a.createElement("option",{value:"KARYAWAN",key:"KARYAWAN"},"KARYAWAN"),i.a.createElement("option",{value:"KAS AWAL",key:"KAS AWAL"},"KAS AWAL"),i.a.createElement("option",{value:"LING",key:"LING"},"LING"),i.a.createElement("option",{value:"OK MASAK",key:"OK MASAK"},"OK MASAK"),i.a.createElement("option",{value:"OPERASIONAL",key:"OPERASIONAL"},"OPERASIONAL"),i.a.createElement("option",{value:"PAJAK BANK",key:"PAJAK BANK"},"PAJAK BANK"),i.a.createElement("option",{value:"PRIVE",key:"PRIVE"},"PRIVE"),i.a.createElement("option",{value:"PRODUKSI",key:"PRODUKSI"},"PRODUKSI"),i.a.createElement("option",{value:"RALAT",key:"RALAT"},"RALAT"),i.a.createElement("option",{value:"STOR BANK",key:"STOR BANK"},"STOR BANK"),i.a.createElement("option",{value:"TABUNG TITIP CUSTOMER",key:"TABUNG TITIP CUSTOMER"},"TABUNG TITIP CUSTOMER"),i.a.createElement("option",{value:"TITIP SUPPLIER",key:"TITIP SUPPLIER"},"TITIP SUPPLIER"))},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(p.d)())}},{key:"render",value:function(){var e=this;switch(this.props.from){case"CASH":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Type Laporan"),i.a.createElement(u.a,{className:"form-control",name:"type",component:"select",onChange:function(a){return e.setState({type_laporan:a.target.value})}},i.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),i.a.createElement("option",{value:"SIMPLE"},"SIMPLE"),i.a.createElement("option",{value:"CARD"},"CARD"),i.a.createElement("option",{value:"SUMMARY"},"SUMMARY")))),i.a.createElement("div",{className:this.state.type_laporan="col-lg-4 invisible"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Kode Kas"),i.a.createElement(u.a,{className:"form-control",name:"kode",component:"select"},i.a.createElement("option",{value:"CASH"},"CASH"),i.a.createElement("option",{value:"KAS"},"KAS")))),i.a.createElement("div",{className:"col-lg-4"}),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Dari Tanggal",name:"tglFrom",component:E})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Sampai Tanggal",name:"tglTo",component:E})))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:this.props.submitting},i.a.createElement("i",{className:"fa fa-print mr-3"})," Print"))));case"TRANSFER":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Type Laporan"),i.a.createElement(u.a,{className:"form-control",name:"type",component:"select",onChange:function(a){return e.setState({type_laporan:a.target.value})}},i.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH"),i.a.createElement("option",{value:"SIMPLE"},"SIMPLE"),i.a.createElement("option",{value:"CARD"},"CARD"),i.a.createElement("option",{value:"SUMMARY"},"SUMMARY")))),i.a.createElement("div",{className:"SIMPLE"===this.state.type_laporan||"SUMMARY"===this.state.type_laporan?"col-lg-4 invisible":"col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Nomor Rekening"),i.a.createElement(u.a,{className:"form-control",name:"no_rekening",component:"select"},i.a.createElement("option",{value:"ALL"},"PILIH NOMOR REKENING"),this.props.listBank.map((function(e){return i.a.createElement("option",{value:e.no_rekening},e.no_rekening)}))))),i.a.createElement("div",{className:"SIMPLE"===this.state.type_laporan||"CARD"===this.state.type_laporan?"col-lg-4 invisible":"col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Nama Bank"),i.a.createElement(u.a,{className:"form-control",name:"kode_bank",component:"select"},i.a.createElement("option",{value:"ALL"},"PILIH BANK"),this.props.listBank.map((function(e){return i.a.createElement("option",{value:e.nama_bank},e.nama_bank)}))))),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Dari Tanggal",name:"tglFrom",component:E})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Sampai Tanggal",name:"tglTo",component:E})))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit"},i.a.createElement("i",{className:"fa fa-print mr-3"})," Print"))));case"OUTSTAND TRANSFER":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:""},"Kategori"),i.a.createElement(u.a,{className:"form-control",name:"kategori",component:"select"},i.a.createElement("option",{value:"SEMUA",key:"SEMUA"},"SEMUA"),i.a.createElement("option",{value:"AMG",key:"AMG"},"AMG")))),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(u.a,{type:"text",label:".",name:"keterangan",component:E})),i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(u.a,{type:"number",label:"Jenis",name:"jenis",component:E})),i.a.createElement("div",{className:"col-lg-3"}),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Dari Tanggal",name:"tglFrom",component:E})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Sampai Tanggal",name:"tglTo",component:E})))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit"},i.a.createElement("i",{className:"fa fa-print mr-3"})," Print"))));case"LAIN-LAIN":return i.a.createElement("form",{onSubmit:this.props.handleSubmit},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Dari Tanggal",name:"tglFrom",component:E})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(u.a,{type:"date",label:"Sampai Tanggal",name:"tglTo",component:E})))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"btn btn-primary",type:"submit"},i.a.createElement("i",{className:"fa fa-print mr-3"})," Print"))))}}}]),t}(c.Component);N=Object(g.a)({form:"FormKeuangan",enableReinitialize:!0})(N);var S=Object(A.b)((function(e){return{listBank:e.provinsi.rekening}}))(N),v=t(119),h=(t(300),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,o=new v.default,l=[],r=[],c=25;o.setFontSize(15),o.text("LAPORAN KEUANGAN BANK",14,15),o.setFontSize(10),n.forEach((function(e,a){r=[[{content:"KODE BANK : ".concat(e.kode_bank),colSpan:3}],[{content:"NO REKENING"},{content:"SALDO"},{content:"CURRENCY"}]],e.detail.forEach((function(e,a){var t=[e.no_rek,e.saldo,e.curr];l.push(t),console.log(l)})),o.autoTable({head:r,body:l,startY:0===a?25:c+5,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),c=o.autoTableEndPosY()+10,l=[]})),o.text("User\t: ".concat(e),14,c+10),o.text("Cetak\t: ".concat(a),14,c+16),o.text("Valid\t: ".concat(t),14,c+22);var i=o.internal.getNumberOfPages(),m=o.internal.pageSize.width,s=o.internal.pageSize.height;o.setFontSize(10);for(var d=1;d<i+1;d++){var A=m/2,u=s-10;o.setPage(d),o.text("".concat(d," of ").concat(i),A,u,{align:"center"})}o.autoPrint();var g=o.output("datauristring"),p="<embed width='100%' height='100%' src='"+g+"'/>",E=window.open();E.document.open(),E.document.write(p)}),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,o=new v.default,l=[],r=[],c=25;o.setFontSize(15),o.text("LAPORAN KEUANGAN BANK CARD",14,15),o.setFontSize(10),n.forEach((function(e,a){r=[[{content:"KODE BANK : ".concat(e.kode_bank),colSpan:3},{content:"NOMOR REKENING : ".concat(e.no_rek),colSpan:3}],[{content:"TANGGAL"},{content:"KETERANGAN"},{content:"SALDO AWAL"},{content:"SALDO IN"},{content:"SALDO OUT"},{content:"SALDO AKHIR"}]],e.detail.forEach((function(e,a){var t=[e.tanggal,e.keterangan,parseFloat(e.saldo_awal).toLocaleString("id-ID"),parseFloat(e.saldo_in).toLocaleString("id-ID"),parseFloat(e.saldo_out).toLocaleString("id-ID"),parseFloat(e.saldo_akhir).toLocaleString("id-ID")];l.push(t),console.log(l)})),o.autoTable({head:r,body:l,startY:0===a?25:c+5,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),c=o.autoTableEndPosY()+10,l=[]})),o.text("User\t: ".concat(e),14,c+10),o.text("Cetak\t: ".concat(a),14,c+16),o.text("Valid\t: ".concat(t),14,c+22);var i=o.internal.getNumberOfPages(),m=o.internal.pageSize.width,s=o.internal.pageSize.height;o.setFontSize(10);for(var d=1;d<i+1;d++){var A=m/2,u=s-10;o.setPage(d),o.text("".concat(d," of ").concat(i),A,u,{align:"center"})}o.autoPrint();var g=o.output("datauristring"),p="<embed width='100%' height='100%' src='"+g+"'/>",E=window.open();E.document.open(),E.document.write(p)},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,o=new v.default,l=[],r=[],c=25;o.setFontSize(15),o.text("LAPORAN KEUANGAN BANK SUMMARY",14,15),o.setFontSize(10),n.forEach((function(e,a){r=[[{content:"KODE BANK : ".concat(e.kode_bank),colSpan:5}],[{content:"NO REKENING"},{content:"SALDO AWAL"},{content:"SALDO IN"},{content:"SALDO OUT"},{content:"SALDO AKHIR"}]],e.detail.forEach((function(e,a){var t=[e.no_rek,parseFloat(e.saldo_awal).toLocaleString("id-ID"),parseFloat(e.saldo_in).toLocaleString("id-ID"),parseFloat(e.saldo_out).toLocaleString("id-ID"),parseFloat(e.saldo_akhir).toLocaleString("id-ID")];l.push(t),console.log(l)})),o.autoTable({head:r,body:l,startY:0===a?25:c+5,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),c=o.autoTableEndPosY()+10,l=[]})),o.text("User\t: ".concat(e),14,c+10),o.text("Cetak\t: ".concat(a),14,c+16),o.text("Valid\t: ".concat(t),14,c+22);var i=o.internal.getNumberOfPages(),m=o.internal.pageSize.width,s=o.internal.pageSize.height;o.setFontSize(10);for(var d=1;d<i+1;d++){var A=m/2,u=s-10;o.setPage(d),o.text("".concat(d," of ").concat(i),A,u,{align:"center"})}o.autoPrint();var g=o.output("datauristring"),p="<embed width='100%' height='100%' src='"+g+"'/>",E=window.open();E.document.open(),E.document.write(p)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,o=new v.default,l=[],r=[[{content:"TYPE KAS"},{content:"NOMINAL"},{content:"CURRENCY"}]],c=40;o.setFontSize(15),o.text("LAPORAN KEUANGAN CASH",14,15),o.setFontSize(10),n.forEach((function(e,a){var t=[e.kode_kas,e.saldo,e.curr];l.push(t)})),o.autoTable({head:r,body:l,startY:25,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]}}),c=o.autoTableEndPosY()+10,l=[],o.text("User\t: ".concat(e),14,c+10),o.text("Cetak\t: ".concat(a),14,c+16),o.text("Valid\t: ".concat(t),14,c+22);var i=o.internal.getNumberOfPages(),m=o.internal.pageSize.width,s=o.internal.pageSize.height;o.setFontSize(10);for(var d=1;d<i+1;d++){var A=m/2,u=s-10;o.setPage(d),o.text("".concat(d," of ").concat(i),A,u,{align:"center"})}o.autoPrint();var g=o.output("datauristring"),p="<embed width='100%' height='100%' src='"+g+"'/>",E=window.open();E.document.open(),E.document.write(p)},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,o=new v.default,l=[],r=[[{content:"TANGGAL"},{content:"KETERANGAN"},{content:"NO BON"},{content:"SALDO AWAL"},{content:"SALDO IN"},{content:"SALDO OUT"},{content:"SALDO AKHIR"}]],c=40;o.setFontSize(15),o.text("LAPORAN KEUANGAN CASH CARD",14,15),o.setFontSize(10),n.forEach((function(e,a){var t=[e.tanggal,e.keterangan,e.no_bon,parseFloat(e.saldo_awal).toLocaleString("id-ID"),parseFloat(e.saldo_in).toLocaleString("id-ID"),parseFloat(e.saldo_out).toLocaleString("id-ID"),parseFloat(e.saldo_akhir).toLocaleString("id-ID")];l.push(t)})),o.autoTable({head:r,body:l,startY:25,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]},columnStyles:{2:{cellWidth:40}}}),c=o.autoTableEndPosY()+10,l=[],o.text("User\t: ".concat(e),14,c+10),o.text("Cetak\t: ".concat(a),14,c+16),o.text("Valid\t: ".concat(t),14,c+22);var i=o.internal.getNumberOfPages(),m=o.internal.pageSize.width,s=o.internal.pageSize.height;o.setFontSize(10);for(var d=1;d<i+1;d++){var A=m/2,u=s-10;o.setPage(d),o.text("".concat(d," of ").concat(i),A,u,{align:"center"})}o.autoPrint();var g=o.output("datauristring"),p="<embed width='100%' height='100%' src='"+g+"'/>",E=window.open();E.document.open(),E.document.write(p)},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3?arguments[3]:void 0,o=new v.default,l=[],r=[[{content:"KODE KAS"},{content:"SALDO AWAL"},{content:"SALDO IN"},{content:"SALDO OUT"},{content:"SALDO AKHIR"}]],c=40;o.setFontSize(15),o.text("LAPORAN KEUANGAN CASH SUMMARY",14,15),o.setFontSize(10),n.forEach((function(e,a){var t=[e.kode_kas,parseFloat(e.saldo_awal).toLocaleString("id-ID"),parseFloat(e.saldo_in).toLocaleString("id-ID"),parseFloat(e.saldo_out).toLocaleString("id-ID"),parseFloat(e.saldo_akhir).toLocaleString("id-ID")];l.push(t)})),o.autoTable({head:r,body:l,startY:25,theme:"plain",rowPageBreak:"avoid",pageBreak:"avoid",margin:{top:20},bodyStyles:{lineWidth:.02,lineColor:"#000"},headStyles:{lineWidth:.02,lineColor:"#000",fillColor:[212,212,211]},columnStyles:{2:{cellWidth:40}}}),c=o.autoTableEndPosY()+10,l=[],o.text("User\t: ".concat(e),14,c+10),o.text("Cetak\t: ".concat(a),14,c+16),o.text("Valid\t: ".concat(t),14,c+22);var i=o.internal.getNumberOfPages(),m=o.internal.pageSize.width,s=o.internal.pageSize.height;o.setFontSize(10);for(var d=1;d<i+1;d++){var A=m/2,u=s-10;o.setPage(d),o.text("".concat(d," of ").concat(i),A,u,{align:"center"})}o.autoPrint();var g=o.output("datauristring"),p="<embed width='100%' height='100%' src='"+g+"'/>",E=window.open();E.document.open(),E.document.write(p)},R=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={},o}return Object(o.a)(t,[{key:"handleCash",value:function(e){switch(e.type){case"SIMPLE":Object(s.b)("report/keuangan-cash").then((function(e){return f(localStorage.getItem("username"),Object(d.b)(),localStorage.getItem("username"),e.data)})).catch((function(e){return Object(m.c)("Gagal Mengambil data, Mohon periksa koneksi anda")}));break;case"CARD":Object(s.b)("report/keuangan-cash-card/".concat(e.kode||"CASH","&").concat(e.tglFrom,"1&").concat(e.tglTo)).then((function(e){return I(localStorage.getItem("username"),Object(d.b)(),localStorage.getItem("username"),e.data)})).catch((function(e){return Object(m.c)("Gagal Mengambil data, Mohon periksa koneksi anda")}));break;case"SUMMARY":Object(s.b)("report/keuangan-cash-summary/".concat(e.kode||"CASH","&").concat(e.tglFrom,"1&").concat(e.tglTo)).then((function(e){return L(localStorage.getItem("username"),Object(d.b)(),localStorage.getItem("username"),e.data)})).catch((function(e){return Object(m.c)("Gagal Mengambil data, Mohon periksa koneksi anda")}));break;default:Object(m.e)("Silahkan PIlih Type Laporan")}}},{key:"handleTransfer",value:function(e){switch(e.type){case"SIMPLE":Object(s.b)("report/keuangan-bank").then((function(e){return h(localStorage.getItem("username"),Object(d.b)(),localStorage.getItem("username"),e.data)})).catch((function(e){return Object(m.c)("Gagal Mengambil data, Mohon periksa koneksi anda")}));break;case"CARD":Object(s.b)("report/keuangan-bank-card/".concat(e.no_rekening||"CASH","&").concat(e.tglFrom,"1&").concat(e.tglTo)).then((function(e){return b(localStorage.getItem("username"),Object(d.b)(),localStorage.getItem("username"),e.data)})).catch((function(e){return Object(m.c)("Gagal Mengambil data, Mohon periksa koneksi anda")}));break;case"SUMMARY":Object(s.b)("report/keuangan-bank-summary/".concat(e.kode_bank||"CASH","&").concat(e.tglFrom,"1&").concat(e.tglTo)).then((function(e){return k(localStorage.getItem("username"),Object(d.b)(),localStorage.getItem("username"),e.data)})).catch((function(e){return Object(m.c)("Gagal Mengambil data, Mohon periksa koneksi anda")}));break;default:Object(m.e)("Silahkan PIlih Type Laporan")}}},{key:"handleOutstand",value:function(e){}},{key:"handleLainLain",value:function(e){}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 col-md-12"},i.a.createElement("ul",{className:"nav nav-tabs nav-justified nav-bordered mb-3"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#cash-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link active"},i.a.createElement("i",{className:"mdi mdi-home-variant d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Cash"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#transfer-tab","data-toggle":"tab","aria-expanded":"true",className:"nav-link "},i.a.createElement("i",{className:"mdi mdi-account-circle d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Transfer"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#history-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},i.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Outstand Trasfer"))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("a",{href:"#lain-lain-tab","data-toggle":"tab","aria-expanded":"false",className:"nav-link"},i.a.createElement("i",{className:"mdi mdi-settings-outline d-lg-none d-block mr-1"}),i.a.createElement("span",{className:"d-none d-lg-block"},"Pendapatan Lain-Lain")))),i.a.createElement("div",{className:"tab-content"},i.a.createElement("div",{className:"tab-pane show active",id:"cash-tab"},i.a.createElement(S,{from:"CASH",onSubmit:function(a){return e.handleCash(a)}})),i.a.createElement("div",{className:"tab-pane ",id:"transfer-tab"},i.a.createElement(S,{from:"TRANSFER",onSubmit:function(a){return e.handleTransfer(a)}})),i.a.createElement("div",{className:"tab-pane",id:"history-tab"},i.a.createElement(S,{from:"OUTSTAND TRANSFER",onSubmit:function(a){return e.handleOutstand(a)}})),i.a.createElement("div",{className:"tab-pane",id:"lain-lain-tab"},i.a.createElement(S,{from:"LAIN-LAIN",onSubmit:function(a){return e.handleLainLain(a)}})))))))))}}]),t}(c.Component);a.default=R}}]);
//# sourceMappingURL=144.01e22fa8.chunk.js.map