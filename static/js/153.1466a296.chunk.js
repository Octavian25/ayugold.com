(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[153],{1187:function(e,a,t){"use strict";t.r(a);var n=t(35),l=t(36),r=t(38),i=t(37),o=t(68),c=t.n(o),s=t(0),m=t.n(s),d=t(478),u=t.n(d),p=t(503),h=t.n(p),b=t(504),g=t.n(b),E=t(19),f=t.n(E),v=t(18),N=t(88),k=t(467),x=t(468),A=t(10),B=t.n(A),C=function(e){var a=e.input,t=e.label,n=e.type,l=e.limit,r=e.readOnly,i=e.meta,o=i.touched,c=i.error,s=i.warning;return m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"",className:"text-black"},t),m.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",maxLength:l,readOnly:r})),o&&(c&&m.a.createElement("p",{className:"invalid-feedback"},c)||s&&m.a.createElement("p",null,s)))};var y=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={items:[{value:"TERIMA SUPPLIER",name:"TERIMA SUPPLIER"},{value:"PENJUALAN",name:"PENJUALAN"},{value:"PINDAH BARANG",name:"PINDAH BARANG"},{value:"RETURN CUSTOMER",name:"RETURN CUSTOMER"}],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"namaBaki",text:"Nama Baki"},{dataField:"supplier",text:"Supplier"},{dataField:"cabang",text:"Cabang"},{dataField:"kodeBarang",text:"Kode Barang"},{dataField:"qty",text:"Qty"},{dataField:"bruto",text:"Berat(Gr)"},{dataField:"netto",text:"Netto(Gr)"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"rp",text:"Ongkos(Rp)"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return m.a.createElement("div",{className:"text-center"},m.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return l.props.dispatch,e=a.namaBaki,void B.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&c.a.delete("https://147.139.193.169:3759/api/v1/customer",{data:{kodeCustomer:e}}).then((function(e){return B.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Dihapus!",showConfirmButton:!1,timer:1500})})).catch((function(e){return B.a.fire({position:"top-end",icon:"error",text:"Data Gagal Dihapus!",showConfirmButton:!1,timer:1500})}))}));var e}},m.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"))}}],data:[{tanggal:"2020"}]},l}return Object(l.a)(t,[{key:"handleSubmit",value:function(e){console.log(e)}},{key:"selected",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this,a=this.props.handleSubmit;return m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("form",{onSubmit:a},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-4 col-lg-4"},m.a.createElement(k.a,{name:"noCloseJual",label:"No Close Jual",type:"text",component:C})),m.a.createElement("div",{className:"col-md-4 col-lg-4"},m.a.createElement(k.a,{name:"jenisTrx",label:"Jenis Transaksi",type:"text",component:C})),m.a.createElement("div",{className:"col-md-4 col-lg-4"},m.a.createElement("label",{htmlFor:""},"Nama Toko"),m.a.createElement(N.a,{options:this.state.items,search:!0,placeholder:"Silahkan Pilih",onChange:function(a){return e.selected(a)}})),m.a.createElement("div",{className:"col-lg-12 col-md-12"},this.state.data?m.a.createElement(g.a,{keyField:"id",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return m.a.createElement("div",{className:"form-group mt-2"},m.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:h()()})))})):m.a.createElement(f.a,{width:"100%",height:100})))))))))}}]),t}(s.Component);y=Object(x.a)({form:"BatalPengambilanTimbang",enableReinitialize:!0})(y),a.default=Object(v.b)((function(e){return{BatalPengambilanTimbang:e.provinsi.BatalPengambilanTimbang}}),null)(y)}}]);
//# sourceMappingURL=153.1466a296.chunk.js.map