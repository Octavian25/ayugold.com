(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[148],{1112:function(e,a,t){"use strict";t.r(a);var l=t(90),n=t(39),r=t(40),o=t(42),i=t(41),m=t(0),c=t.n(m),s=t(19),p=t(61),d=t(3),u=t.n(d),g=t(91),h=t(2),E=t(298),b=t(312),v=t(338),N=Object(v.createNumberMask)({prefix:"Rp. ",suffix:",-",locale:"id-ID"}),k=function(e){var a=e.input,t=e.label,l=e.type,n=e.limit,r=e.readOnly,o=e.meta,i=o.touched,m=o.error,s=o.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},a,{type:l,className:"form-control",min:"0",step:"0.001",maxLength:n,readOnly:r})),i&&(m&&c.a.createElement("p",{className:"invalid-feedback"},m)||s&&c.a.createElement("p",null,s)))},f=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={},l}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=new Date;this.props.change("tanggal","".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()))}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Kode Barang"),c.a.createElement(E.a,{name:"kodeBarang",component:"select",value:"CASH",className:"form-control"},c.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"silahkan pilih"))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(E.a,{name:"kadar",label:"Kadar",type:"number",component:k,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(E.a,{name:"harga",label:"Harga (%)",type:"number",component:k,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(E.a,{name:"pkg",label:"Pkg (Gr)",type:"number",component:k,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(E.a,{name:"bruto",label:"Bruto (Gr)",type:"number",component:k,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-3 col-lg-3"},c.a.createElement(E.a,{name:"netto",label:"Netto (Gr)",type:"number",component:k,normalize:function(e){return e&&e.toUpperCase()}})),c.a.createElement("div",{className:"col-md-3 form-group"},c.a.createElement("label",{htmlFor:""},"Ongkos (Rp)"),c.a.createElement(E.a,Object.assign({name:"rp",component:"input",type:"tel",className:"form-control"},N))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),t}(m.Component);f=Object(b.a)({form:"FormEditPindahBarang",enableReinitialize:!0})(f);var F=Object(s.b)()(f),y=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;Object(n.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(l.a)({},e,a.target.value))}},r.pilihSupplier=function(e){return function(e){var a=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:a[0],namaSupplier:a[1]})}};var o=new Date,i="".concat(o.getFullYear(),"-").concat(o.getMonth()+1,"-").concat(o.getDate());return r.state={listSupplier:[],columns:[{dataField:"kodeBarang",text:"Kode Barang"},{dataField:"kadar",text:"Kadar Cetak (%)"},{dataField:"kode",text:"Kode"},{dataField:"berat",text:"Berat (Gr)"},{dataField:"persen",text:"(%)"},{dataField:"netto",text:"Netto (Gr)"},{dataField:"pkg",text:"Pkg (Gr)"},{dataField:"qty",text:"Qty"},{dataField:"ongkosKirim",text:"Ongkos(RP)"}],title:"PENERIMAAN SUPPLIER",content:"HELLO",tanggal_invoice:"",tanggal_barang:"",noBon:"",kodeSupplier:"",namaSupplier:"",startingDate:i,tampungBarang:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(p.d)()),u.a.get("http://157.245.145.87:9011/master/suppliers").then((function(a){return e.setState({listSupplier:a.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(g.b)())}},{key:"handleSubmit",value:function(e){var a={noFaktur:this.props.noFaktur,tanggal:this.state.tanggal_invoice,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier,namaSupplier:this.state.namaSupplier,tanggalBarang:this.state.tanggal_barang,barangDetails:{noFaktur:this.props.noFaktur,nettoDiscGlobalExt:0,gross:parseFloat(e.gross),netto:parseFloat(e.netto),qty:0,k:parseFloat(e.k),rp:parseFloat(e.rp),kadarCetak:0,keterangan:e.keterangan,discGlobalPr:0,kodeKategori:"-",kadarTransaksi:parseFloat(e.kadarTransaksi),kodeJenis:e.kodeJenis,noBarcode:"-",p:parseFloat(e.p),discGlobalGr:0,pkg:parseFloat(e.pkg),bruto:parseFloat(e.bruto),nettoDiscGlobal:0}};console.log(a);var t=this.state.tampungBarang;t.push(a),this.setState({tampungBarang:t})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(h.b,{to:"/ayugold.com/editStok"},c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Tanggal"),c.a.createElement("input",{type:"date",id:"tanggal",name:"tanggal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tanggal")})),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Dari"),c.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return c.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),c.a.createElement("div",{className:"col-lg-4 col-md-4"},c.a.createElement("label",{htmlFor:""},"Ke"),c.a.createElement("select",{name:"supplier",id:"kodeSupplier",className:"form-control",onChange:this.pilihSupplier("kodeSupplier")},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return c.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),c.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Limit"),c.a.createElement("input",{type:"text",id:"limit",name:"limit",className:"form-control",onChange:this.inputChange("limit"),readOnly:!0})),c.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Saldo Barang"),c.a.createElement("input",{type:"text",id:"saldoBarang",name:"saldoBarang",className:"form-control",onChange:this.inputChange("saldoBarang"),readOnly:!0})),c.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Saldo Limit"),c.a.createElement("input",{type:"text",id:"saldoLimit",name:"saldoLimit",className:"form-control",onChange:this.inputChange("saldoLimit"),readOnly:!0})),c.a.createElement("div",{className:"col-md-6 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Nomor Pindah"),c.a.createElement("input",{type:"text",id:"noPindah",name:"noPindah",className:"form-control",onChange:this.inputChange("noPindah"),readOnly:!0})),c.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Bon Pindah"),c.a.createElement("input",{type:"text",id:"bonPindah",name:"bonPindah",className:"form-control",onChange:this.inputChange("bonPindah")})),c.a.createElement("div",{className:"col-lg-4 col-md-4 mt-3"},c.a.createElement("label",{htmlFor:""},"Kategori Harga"),c.a.createElement("select",{name:"kategoriHarga",id:"kategoriHarga",className:"form-control",onChange:this.pilihSupplier("kategoriHarga")},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listSupplier.map((function(e){return c.a.createElement("option",{value:e.kodeSupplier+"|"+e.namaSupplier},e.namaSupplier)})))),c.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-left"},c.a.createElement(h.b,{to:"/ayugold.com/ViewPDF"},c.a.createElement("button",{className:"btn btn-primary",type:"button"},"PDF")))),c.a.createElement("div",{className:"col-lg-6 col-md-6"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#primary-header-modal"},"Tambah Data"))))))))),c.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Terima Supplier"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"},c.a.createElement(F,{from:"terima",onSubmit:function(a){return e.handleSubmit(a)},noFaktur:this.props.noFaktur}))))))))}}]),t}(m.Component);a.default=Object(s.b)((function(e){return{supplierList:e.provinsi.supplier,noFaktur:e.provinsi.noFaktur,alert:e.provinsi.alert,error:e.provinsi.error}}),null)(y)}}]);
//# sourceMappingURL=148.f965c5d2.chunk.js.map