(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[67],{1238:function(e,a,t){"use strict";t.r(a);var r=t(22),l=t(23),n=t(25),s=t(24),c=t(0),m=t.n(c),i=t(525),o=t(15),d=t(505),u=t.n(d),b=t(16),p=t.n(b),E=t(467),h=t(468),v=function(e){var a=e.input,t=e.label,r=e.type,l=e.readOnly,n=e.meta,s=n.touched,c=n.error,i=n.warning;return m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"",className:"text-black"},t),m.a.createElement("input",Object.assign({},a,{type:r,className:"form-control",readOnly:l})),s&&(c&&m.a.createElement("p",{className:"invalid-feedback"},c)||i&&m.a.createElement("p",null,i)))},f=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={},l}return Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement("form",{onSubmit:this.props.handleSubmit},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-4"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Jenis Transaksi"),m.a.createElement(E.a,{name:"jenisTransaksi",component:"select",className:"form-control"},m.a.createElement("option",{value:"PEMBAYARAN",key:"PEMBAYARAN"},"PEMBAYARAN"),m.a.createElement("option",{value:"VALIDASI",key:"VALIDASI"},"VALIDASI")))),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(E.a,{name:"dari",label:"Dari",component:v,type:"text"})),m.a.createElement("div",{className:"col-lg-4"},m.a.createElement(E.a,{name:"sampai",label:"Sampai",component:v,type:"text"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"tetx-right"},m.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Simpan")))))}}]),t}(c.Component);f=Object(h.a)({form:"DataValidasi",enableReinitialize:!0})(f);var N=Object(o.b)()(f),g=t(201),y=t(4),k=t(51),j=[{dataField:"kode",order:"asc"}],S=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={provinsi:[],provinsi_array:[],response:"",columns:[{dataField:"jenis",text:"Jenis",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"dari",text:"Dari(Gr)",sort:!0},{dataField:"sampai",text:"Sampai(Gr)",sort:!0},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return m.a.createElement("div",{className:"text-center"},m.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return alert("KLIK HAPUS")}},m.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),m.a.createElement("button",{className:"btn btn-warning mr-2","data-toggle":"modal","data-target":"#primary-header-modal",onClick:function(){return Object(g.b)(a.jenis,a.dari,a.sampai)}},m.a.createElement("i",{className:"fa fa-edit mr-1"}),"EDIT"))}}],data:[{jenis:"001",dari:"1000000",sampai:"1000"}]},l}return Object(l.a)(t,[{key:"handlerSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){return m.a.createElement("div",{className:"container-fluid",style:{color:"black"}},m.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},m.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},m.a.createElement("span",{"aria-hidden":"true"},"\xd7")),m.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),m.a.createElement("ol",{className:"breadcrumb mb-2"},m.a.createElement(y.b,{to:"/parameterSupervisory"},m.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},m.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-12"},m.a.createElement("div",{className:"card"},m.a.createElement(k.default,{title:"Data Range"}),m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"col-lg-12 col-md-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info","data-toggle":"modal","data-target":"#primary-header-modal"},"Tambah Data"))),this.state.data?m.a.createElement(i.a,{data:this.state.data,columns:this.state.columns,defaultSorted:j,namaKey:"jenis"}):m.a.createElement("div",null,this.props.error?m.a.createElement("div",{className:"text-center"},m.a.createElement("img",{src:u.a,style:{width:"30%"},alt:"ACTIVE"}),m.a.createElement("br",null),m.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):m.a.createElement(p.a,{width:"100%",height:180})))))),m.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},m.a.createElement("div",{className:"modal-dialog modal-lg"},m.a.createElement("div",{className:"modal-content"},m.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},m.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Harga Emas"),m.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),m.a.createElement("div",{className:"modal-body"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement(N,null))),m.a.createElement("div",{className:"modal-footer"},m.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),t}(c.Component);a.default=Object(o.b)((function(e){return{KotaList:e.provinsi.kota,alert:e.provinsi.alert,error:e.provinsi.error}}),null)(S)},505:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"},525:function(e,a,t){"use strict";var r=t(22),l=t(23),n=t(25),s=t(24),c=t(0),m=t.n(c),i=t(478),o=t.n(i),d=t(480),u=t.n(d),b=t(479),p=t.n(b),E=t(15),h=d.Search.SearchBar,v=d.CSVExport.ExportCSVButton,f=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).rowStyle=function(e,a){e.index=a;var t={};return t.backgroundColor=a%2===0?"transparent":"#DEDEDE",t.borderTop="none",t},l.state={},l}return Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement(u.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.props.data,columns:this.props.columns,defaultSorted:this.props.defaultSorted,search:!0},(function(e){return m.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},m.a.createElement("div",{className:"text-right"},m.a.createElement(h,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),m.a.createElement(o.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:p()()})),m.a.createElement(v,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))}))}}]),t}(c.Component);a.a=Object(E.b)()(f)}}]);
//# sourceMappingURL=67.e4300d41.chunk.js.map