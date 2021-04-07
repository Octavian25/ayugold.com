(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[70],{1166:function(e,t,a){"use strict";a.r(t);var r=a(31),n=a(15),i=a(16),l=a(18),s=a(17),o=a(0),c=a.n(o),p=a(52),u=a(304),m=a(12),d=a(535),h=a.n(d),g=a(506),b=a.n(g),k=a(61),S=a(7),f=a.n(S),v=a(21),E=a(43),_=a(511),x=a(3),N=a(94),y=function(e){var t=e.input,a=e.label,r=e.type,n=e.limit,i=e.readOnly,l=e.meta,s=l.touched,o=l.error,p=l.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},a),c.a.createElement("input",Object.assign({},t,{type:r,className:"form-control",min:"0",step:"0.001",maxLength:n,readOnly:i})),s&&(o&&c.a.createElement("p",{className:"invalid-feedback"},o)||p&&c.a.createElement("p",null,p)))},O=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).disabledButton=function(e){e.target.disabled=!0},i.nextStep=function(){var e=i.state.step;0===e&&i.setState({step:e+1,step2:"row",step1:"row d-none"}),i.props.dispatch(Object(k.h)())},i.prevStep=function(){var e=i.state.step;1===e&&i.setState({step:e-1,step2:"row d-none",step1:"row"})},i.changeInput=function(e){return function(t){i.setState(Object(r.a)({},e,t.target.value))}},i.state={columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"no_bon",text:"Nomor Bon"},{dataField:"kode_supplier",text:"Supplier"},{dataField:"keterangan",text:"Keterangan"},{dataField:"total_bruto",text:"Total Bruto"},{dataField:"total_netto",text:"Total Netto"},{dataField:"bon_rp",text:"Bon RP"},{dataField:"titip_gr",text:"Titip Gr"},{dataField:"titip_rp",text:"Titip Rp"}],step:0,step1:"row",step2:"row d-none",step3:"row d-none"},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){localStorage.removeItem("FakturTerpilih"),localStorage.removeItem("trx_supplier"),this.props.dispatch(Object(N.f)())}},{key:"updateButton",value:function(e){switch(e){case"Penerimaan Barang Supplier":this.props.dispatch(Object(k.j)(this.state.kode_supplier,this.state.tanggal));break;case"Return Supplier":this.props.dispatch(Object(k.k)(this.state.kode_supplier,this.state.tanggal));break;case"Tolakan Return Supplier":this.props.dispatch(Object(k.n)(this.state.kode_supplier,this.state.tanggal));break;case"Pembayaran Hutang Supplier":this.props.dispatch(Object(k.i)(this.state.kode_supplier,this.state.tanggal));break;case"Tolakan Pembayaran Supplier":this.props.dispatch(Object(k.m)());break;case"Titip Supplier":this.props.dispatch(Object(k.l)());break;default:console.log("ERROR")}}},{key:"changeTransaksi",value:function(){switch(this.state.type_transaksi){case"Penerimaan Barang Supplier":this.props.dispatch(Object(k.j)(this.state.kode_supplier,this.state.tanggal));break;case"Return Supplier":this.props.dispatch(Object(k.k)(this.state.kode_supplier,this.state.tanggal));break;case"Tolakan Return Supplier":this.props.dispatch(Object(k.n)(this.state.kode_supplier,this.state.tanggal));break;case"Pembayaran Hutang Supplier":this.props.dispatch(Object(k.i)(this.state.kode_supplier,this.state.tanggal));break;case"Tolakan Pembayaran Supplier":this.props.dispatch(Object(k.m)());break;case"Titip Supplier":this.props.dispatch(Object(k.l)(this.state.kode_supplier,this.state.tanggal));break;default:console.log("ERROR")}}},{key:"sendValidasi",value:function(e){var t=this,a={trx_supplier:JSON.parse(localStorage.getItem("trx_supplier"))||[]};switch(console.log(this.state.type_transaksi),this.state.type_transaksi){case"Penerimaan Barang Supplier":console.log(a),Object(x.d)("validate-supplier/validate",a).then((function(e){return f.a.fire({position:"top-right",icon:"success",text:"Validasi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("trx_supplier")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(k.j)())}))})).catch((function(e){return Object(v.c)("Validasi Gagal")}));break;case"Return Supplier":case"Tolakan Return Supplier":case"Pembayaran Hutang Supplier":Object(x.d)("validate-supplier/validate",a).then((function(e){return f.a.fire({position:"top-right",icon:"success",text:"Validasi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("trx_supplier")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(k.j)())}))})).catch((function(e){return Object(v.c)("Verifikasi Gagal , Error : ".concat(e.response.data))}));break;case"Tolakan Pembayaran Supplier":this.props.dispatch(Object(k.m)());break;case"Titip Supplier":Object(x.d)("validate-supplier/validate",a).then((function(e){return f.a.fire({position:"top-right",icon:"success",text:"Validasi Berhasil",showConfirmButton:!1,timer:1500}).then((function(){return localStorage.removeItem("FakturTerpilih")})).then((function(){return localStorage.removeItem("trx_supplier")})).then((function(){return t.prevStep()})).then((function(){return t.props.dispatch(Object(k.j)())}))})).catch((function(e){return Object(v.c)("Validasi Gagal")}));break;default:console.log("ERROR")}}},{key:"render",value:function(){var e=this,t={mode:"checkbox",clickToSelect:!0,onSelect:function(e,t,a,r){console.log(e.noFaktur);var n=JSON.parse(localStorage.getItem("FakturTerpilih"))||[],i=JSON.parse(localStorage.getItem("trx_supplier"))||[],l={tanggal:e.tanggal,no_bon:e.no_bon,no_trx:e.no_trx,kode_supplier:e.kode_supplier,total_bruto:e.total_bruto,total_netto:e.total_netto,bon_rp:e.bon_rp,titip_gr:e.titip_gr,titip_rp:e.titip_rp,keterangan:e.keterangan},s={no_trx:e.no_trx,keterangan:e.keterangan};if(t){var o=n.findIndex((function(t,a){return t.no_trx===e.no_trx})),c=i.findIndex((function(t,a){return t.no_trx===e.no_trx}));o<0?(n.push(l),i.push(s)):(n.splice(o,1),i.splice(c,1)),localStorage.setItem("FakturTerpilih",JSON.stringify(n)),localStorage.setItem("trx_supplier",JSON.stringify(i))}else{var p=n.findIndex((function(t,a){return t.no_trx===e.no_trx})),u=i.findIndex((function(t,a){return t.no_trx===e.no_trx}));n.splice(p,1),i.splice(u,1),localStorage.setItem("FakturTerpilih",JSON.stringify(n)),localStorage.setItem("trx_supplier",JSON.stringify(i))}},onSelectAll:function(e,t,a){var r=[],n=[];t.forEach((function(e){var t={tanggal:e.tanggal,no_bon:e.no_bon,kode_supplier:e.kode_supplier,total_bruto:e.total_bruto,total_netto:e.total_netto,bon_rp:e.bon_rp,titip_gr:e.titip_gr,titip_rp:e.titip_rp,keterangan:e.keterangan},a={no_trx:e.no_trx,keterangan:e.keterangan};r.push(t),n.push(a)})),e?(localStorage.setItem("FakturTerpilih",JSON.stringify(r)),localStorage.setItem("trx_supplier",JSON.stringify(n))):(localStorage.removeItem("FakturTerpilih"),localStorage.removeItem("trx_supplier"))}};return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"card"},c.a.createElement(E.default,{title:"Validasi Supplier"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(h.a,{steps:[{title:"Pilih Data"},{title:"Validasi Data"}],activeStep:this.state.step})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step1},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Pilih Jenis Transaksi"),c.a.createElement(p.a,{name:"tipeTransaksi",label:"Dari",component:"select",className:"form-control",onChange:function(t){return e.setState({type_transaksi:t.target.value})}},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH"),c.a.createElement("option",{value:"Penerimaan Barang Supplier",key:"Penerimaan Barang Supplier"},"Penerimaan Barang Supplier"),c.a.createElement("option",{value:"Return Supplier",key:"Return Supplier"},"Return Supplier"),c.a.createElement("option",{value:"Tolakan Return Supplier",key:"Tolakan Return Supplier"},"Tolakan Return Supplier"),c.a.createElement("option",{value:"Pembayaran Hutang Supplier",key:"Pembayaran Hutang Supplier"},"Pembayaran Hutang Supplier"),c.a.createElement("option",{value:"Tolakan Pembayaran Supplier",key:"Tolakan Pembayaran Supplier"},"Tolakan Pembayaran Supplier"),c.a.createElement("option",{value:"Titip Supplier",key:"Titip Supplier"},"Titip Supplier"))),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("label",{htmlFor:""},"Supplier"),c.a.createElement(p.a,{name:"kode_supplier",component:"select",className:"form-control",onChange:function(t){return e.setState({kode_supplier:t.target.value})}},c.a.createElement("option",{value:"DEFAULT"},"SILAHKAN PILIH SUPPLIER"),this.props.listSupplier.map((function(e){return c.a.createElement("option",{value:e.kode_supplier},e.nama_supplier)})))),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(p.a,{name:"tanggal",label:"Tanggal Transaksi",component:y,type:"date",onChange:this.changeInput("tanggal")})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.changeTransaksi("tipeTransaksi")}},c.a.createElement("i",{className:"fa fa-eye"})," Lihat Data"))),c.a.createElement("div",{className:"col-lg-12 mt-3"},c.a.createElement(_.a,{keyField:"no_bon",data:this.props.listValidasiSupplier,columns:this.state.columns,search:!0,striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()(),selectRow:t})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.nextStep()}},"Next ",c.a.createElement("i",{className:"fa fa-chevron-right ml-3"}))))),c.a.createElement("div",{className:this.state.step2},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement(_.a,{keyField:"no_bon",data:this.props.listDataSelectedValidasiSupplier,columns:this.state.columns,search:!0,striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:b()()})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.prevStep()}},c.a.createElement("i",{className:"fa fa-chevron-left mr-3"}),"Back"))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.sendValidasi()}},c.a.createElement("i",{className:"fa fa-check-circle mr-3"}),"VALIDASI"))))))))))))}}]),a}(o.Component);O=Object(u.a)({form:"validasiSupplier",enableReinitialize:!0})(O),t.default=Object(m.b)((function(e){return{listValidasiSupplier:e.provinsi.listValidasiSupplier,listDataSelectedValidasiSupplier:e.provinsi.listDataSelectedValidasiSupplier,listSupplier:e.provinsi.supplier}}),null)(O)},511:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(481),l=a.n(i),s=a(507),o=a.n(s),c=a(506),p=a.n(c),u=a(514),m=a.n(u);var d=function(e){return n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:m.a,width:"250",height:"250",alt:"Empty"}),n.a.createElement("h5",null,e.text)))},h=s.Search.SearchBar,g=s.CSVExport.ExportCSVButton;t.a=function(e){var t=e.textEmpty,a=e.handleClick,r=e.tambahData,i=e.expandRow,s=e.selectRow,c=e.exportCSV;return n.a.createElement(o.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},(function(e){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-left"},n.a.createElement(h,e.searchProps))),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"text-right"},r&&n.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",n.a.createElement("i",{className:"fa fa-plus ml-3"})))),n.a.createElement("hr",null),n.a.createElement("div",{className:"col-12"},n.a.createElement(l.a,Object.assign({pagination:p()(),selectRow:s,expandRow:i},e.baseProps,{striped:!0,noDataIndication:n.a.createElement(d,{text:t||"Tidak Ada Data"})})),n.a.createElement("br",null),c&&n.a.createElement(g,e.csvProps,"Export CSV!!")))}))}},514:function(e,t,a){e.exports=a.p+"static/media/emptyTable.ffc2d7dc.svg"},535:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(542),i=(r=n)&&r.__esModule?r:{default:r};t.default=i.default}}]);
//# sourceMappingURL=70.108acb71.chunk.js.map