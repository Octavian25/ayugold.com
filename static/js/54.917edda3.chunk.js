(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[54,5],{1240:function(e,t,a){"use strict";a.r(t);var n=a(15),l=a(16),r=a(18),c=a(17),i=a(0),s=a.n(i),o=a(12),m=a(304),d=a(177),u=a(51),b=a(509),p=a(522),g=a(43),E=a(21),h=a(3),f=a(194),v=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={columns_barang:[{dataField:"kode_jenis",text:"Kode Barang"},{dataField:"gross",text:"Gross"},{dataField:"pkg",text:"Bungkus(Gr)"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"kadar_cetak",text:"Kadar"},{dataField:"kadar",text:"Harga(%)"},{dataField:"netto",text:"Murni(Gr)",footerClasses:"sum-netto-terima-supplier"},{dataField:"ongkos_rp",text:"Ongkos(RP)"}]},l}return Object(l.a)(a,[{key:"batalBarcode",value:function(){var e=this,t={tanggal:Object(f.b)(),pengambilan_timbang:[{no_timbang:this.props.no_timbang}]};Object(h.c)("pengambilan-timbang/trx-close",t).then((function(){return e.props.dispatch(Object(u.g)())})).then((function(){return Object(E.b)("Barcode Berhasil dibatalkan")})).then((function(){return e.props.dispatch(Object(d.c)())})).catch((function(e){return Object(E.c)("Error Batalkan Barcode , Detail : ".concat(e))}))}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("h3",null,"Detail Barang"),s.a.createElement(p.a,{keyField:"kodeJenis",data:this.props.listCloseTimbanganSelected||[],columns:this.state.columns_barang,textEmpty:"Silahkan Tambah Data Dengan Klik Tombol Biru Diatas"}),s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"text-right"},s.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.batalBarcode()}},s.a.createElement("i",{className:"fa fa-times mr-3"}),"Batal Timbangan"))))}}]),a}(i.Component),k=Object(o.b)((function(e){return{listCloseTimbanganSelected:e.provinsi.listCloseTimbanganSelected,no_timbang:e.provinsi.no_timbang}}))(v),x=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={items:[{value:"TERIMA SUPPLIER",name:"TERIMA SUPPLIER"},{value:"PENJUALAN",name:"PENJUALAN"},{value:"PINDAH BARANG",name:"PINDAH BARANG"},{value:"RETURN CUSTOMER",name:"RETURN CUSTOMER"}],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"baki",text:"Nama Baki"},{dataField:"instansi",text:"Supplier"},{dataField:"jenis_trx",text:"Kode Barang"},{dataField:"total_bruto",text:"Berat(Gr)"},{dataField:"total_netto",text:"Netto(Gr)"},{dataField:"total_ongkos",text:"Ongkos(Rp)"},{dataField:"total_gross",text:"Gross(Gr)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return s.a.createElement("div",{className:"text-center"},s.a.createElement("button",{className:"btn btn-warning mr-2",onClick:function(){return l.showDetail(t.detail_barang,t.no_timbang)}},"Detail"))}}],data:[{tanggal:"2020"}]},l}return Object(l.a)(a,[{key:"showDetail",value:function(e,t){this.props.dispatch(Object(u.j)()),this.props.dispatch(Object(d.d)(e,t))}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(d.c)())}},{key:"handleSubmit",value:function(e){console.log(e)}},{key:"selected",value:function(e){console.log(e)}},{key:"render",value:function(){return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{className:"card"},s.a.createElement(g.default,{title:"Close Pengambilan Timbang Barang"}),s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"col-lg-12 col-md-12"},s.a.createElement(p.a,{keyField:"kodeJenis",data:this.props.listCloseBarcode||[],columns:this.state.columns,textEmpty:"Silahkan Tambah Data Dengan Klik Tombol Biru Diatas"})))))),s.a.createElement(b.default,{content:s.a.createElement(k,null),title:"Detail Barang"}))}}]),a}(i.Component);x=Object(m.a)({form:"BatalPengambilanTimbang",enableReinitialize:!0})(x);t.default=Object(o.b)((function(e){return{listCloseTimbanganSelected:e.provinsi.listCloseTimbanganSelected,listCloseBarcode:e.provinsi.listCloseTimbangan}}),null)(x)},509:function(e,t,a){"use strict";a.r(t);var n=a(15),l=a(16),r=a(18),c=a(17),i=a(1195),s=a(0),o=a.n(s),m=a(12),d=a(51),u=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(i.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(d.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},o.a.createElement(i.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},o.a.createElement(i.a.Title,null,this.props.title||"")),o.a.createElement(i.a.Body,null,this.props.content||""))}}]),a}(s.Component);t.default=Object(m.b)((function(e){return{show:e.modal.show}}),null)(u)},522:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(481),c=a.n(r),i=a(507),s=a.n(i),o=a(506),m=a.n(o),d=a(523),u=a.n(d);var b=function(e){return l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{src:u.a,width:"250",height:"250",alt:"Empty"}),l.a.createElement("h5",null,e.text)))},p=i.Search.SearchBar,g=i.CSVExport.ExportCSVButton;t.a=function(e){var t=e.textEmpty,a=e.handleClick,n=e.tambahData,r=e.expandRow,i=e.selectRow,o=e.exportCSV;return l.a.createElement(s.a,{keyField:e.keyField,data:e.data||[],columns:e.columns,search:!0},(function(e){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-left"},l.a.createElement(p,e.searchProps))),l.a.createElement("div",{className:"col-6"},l.a.createElement("div",{className:"text-right"},n&&l.a.createElement("button",{onClick:a,className:"btn btn-primary",type:"button"},"Tambah Data",l.a.createElement("i",{className:"fa fa-plus ml-3"})))),l.a.createElement("hr",null),l.a.createElement("div",{className:"col-12"},l.a.createElement(c.a,Object.assign({pagination:m()(),selectRow:i,expandRow:r},e.baseProps,{striped:!0,noDataIndication:l.a.createElement(b,{text:t||"Tidak Ada Data"})})),l.a.createElement("br",null),o&&l.a.createElement(g,e.csvProps,"Export CSV!!")))}))}},523:function(e,t,a){e.exports=a.p+"static/media/emptyTable.ffc2d7dc.svg"}}]);
//# sourceMappingURL=54.917edda3.chunk.js.map