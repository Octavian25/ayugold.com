(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[113,174],{1181:function(e,a,t){"use strict";t.r(a);var r=t(71),l=t(72),n=t(74),s=t(73),o=t(0),c=t.n(o),i=t(523),d=t(27),m=t(496),u=t.n(m),b=t(173),p=t.n(b),h=t(4),E=t(464),f=[{dataField:"kode",order:"asc"}],v=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={provinsi:[],provinsi_array:[],response:"",columns:[{dataField:"kode",text:"Kode",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"Rp",text:"Rupiah",sort:!0},{dataField:"dollar",text:"Dollar",sort:!0},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return alert("KLIK HAPUS")}},c.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),c.a.createElement("button",{className:"btn btn-warning mr-2","data-toggle":"modal","data-target":"#editModal",onClick:function(){return alert("KLIK EDIT")}},c.a.createElement("i",{className:"fa fa-edit mr-1"}),"EDIT"))}}],data:[{kode:"001",Rp:"1000000",dollar:"1000"}]},l}return Object(l.a)(t,[{key:"handlerSubmit",value:function(e){console.log(e)}},{key:"render",value:function(){return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},c.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")),c.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(h.b,{to:"/parameterSupervisory"},c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(E.default,{title:"Data Harga Emas"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info","data-toggle":"modal","data-target":"#primary-header-modal"},"Tambah Data"))),this.state.data?c.a.createElement(i.a,{data:this.state.data,columns:this.state.columns,defaultSorted:f,namaKey:"kodeKota"}):c.a.createElement("div",null,this.props.error?c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:u.a,style:{width:"30%"},alt:"ACTIVE"}),c.a.createElement("br",null),c.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):c.a.createElement(p.a,{width:1100,height:180})))))),c.a.createElement("div",{id:"primary-header-modal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},c.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Harga Emas"),c.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),c.a.createElement("div",{className:"modal-body"}),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))}}]),t}(o.Component);a.default=Object(d.b)((function(e){return{KotaList:e.provinsi.kota,alert:e.provinsi.alert,error:e.provinsi.error}}),null)(v)},464:function(e,a,t){"use strict";t.r(a);var r=t(71),l=t(72),n=t(74),s=t(73),o=t(0),c=t.n(o),i=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("h4",{className:"card-header mb-3",style:{fontSize:25,backgroundColor:"#394867",borderTopLeftRadius:10,borderTopRightRadius:10,height:50,color:"#ffffff"}},this.props.title)}}]),t}(o.Component);a.default=i},496:function(e,a,t){e.exports=t.p+"static/media/500.c22f1e39.svg"},523:function(e,a,t){"use strict";var r=t(71),l=t(72),n=t(74),s=t(73),o=t(0),c=t.n(o),i=t(468),d=t.n(i),m=t(471),u=t.n(m),b=t(470),p=t.n(b),h=t(27),E=m.Search.SearchBar,f=m.CSVExport.ExportCSVButton,v=function(e){Object(n.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).rowStyle=function(e,a){e.index=a;var t={};return t.backgroundColor=a%2===0?"transparent":"#DEDEDE",t.borderTop="none",t},l.state={},l}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,{bootstrap4:!0,keyField:this.props.namaKey?this.props.namaKey:"kode",data:this.props.data,columns:this.props.columns,defaultSorted:this.props.defaultSorted,search:!0},(function(e){return c.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},c.a.createElement("div",{className:"text-right"},c.a.createElement(E,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),c.a.createElement(d.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:p()()})),c.a.createElement(f,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))}))}}]),t}(o.Component);a.a=Object(h.b)()(v)}}]);
//# sourceMappingURL=113.ed57df89.chunk.js.map