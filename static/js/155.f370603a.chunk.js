(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[155],{1236:function(e,a,t){"use strict";t.r(a);var l=t(71),n=t(72),r=t(74),c=t(73),o=t(0),m=t.n(o),s=t(27),i=t(468),d=t.n(i),u=t(471),b=t.n(u),g=t(470),p=t.n(g),E=t(178),N=t(465),v=t(458),h=t(507),f=function(e){var a=e.input,t=e.label,l=e.type,n=e.readOnly,r=e.meta,c=r.touched,o=r.error,s=r.warning;return m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"",className:"text-black"},t),m.a.createElement("input",Object.assign({},a,{type:l,className:"form-control",readOnly:n})),c&&(o&&m.a.createElement("p",{className:"invalid-feedback"},o)||s&&m.a.createElement("p",null,s)))},y=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){Object(h.a)(this.props.change)}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Kode Barang"),m.a.createElement(N.a,{name:"kodeBarang",component:"select",className:"form-control"},m.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"SILAHKAN PILIH")))),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(N.a,{label:"Keterangan",name:"keteragan",component:f,type:"text"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(N.a,{label:"Kadar(%)",name:"kadar",component:f,type:"text"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(N.a,{label:"P",name:"p",component:f,type:"text"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(N.a,{label:"K",name:"k",component:f,type:"text"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(N.a,{label:"Bungkus(Gr)",name:"bungkus",component:f,type:"text"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(N.a,{label:"Berat(Gr)",name:"bruto",component:f,type:"text"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(N.a,{label:"Harga(%)",name:"harga",component:f,type:"text"})),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement(N.a,{label:"Murni(Gr)",name:"netto",component:f,type:"text"})),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary"},"Simpan"))))))}}]),t}(o.Component);y=Object(v.a)({form:"FormTambahPembelianRongsok",enableReinitialize:!0})(y);var x=Object(s.b)()(y),k=u.Search.SearchBar,F=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).handleOnSelect=function(e){console.log(e)},n.state={listSupplier:[],step:0,step1:"row",step2:"row d-none",columns:[{dataField:"tanggal",text:"Tanggal",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"namaToko",text:"Nama Toko",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"noBon",text:"Nomor Bon",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"sales",text:"Sales",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"bonRp",text:"Bon (Rp)",sort:!0,headerStyle:function(){return{width:"15%"}}},{dataField:"bonGr",text:"Bon (Gr)",sort:!0,headerStyle:function(){return{width:"15%"}}}],data:[{tanggal:"2020-11-10"}],items:[{value:0,name:"Cobol"},{value:1,name:"JavaScript"},{value:2,name:"Basic"},{value:3,name:"PHP"},{value:4,name:"Java"}]},n}return Object(n.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"container-fluid"},m.a.createElement("div",{className:"card"},m.a.createElement("div",{className:"card-body"},m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("h2",null,"Pembelian Rongsok")),m.a.createElement("br",null),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-3"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Tanggal"),m.a.createElement("input",{name:"tanggal",type:"date",label:"tanggal",className:"form-control"}))),m.a.createElement("div",{className:"col-lg-3",style:{zIndex:20}},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Nama Toko"),m.a.createElement(E.a,{options:this.state.items,search:!0,placeholder:"Select your country"}))),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Nomor Bon"),m.a.createElement("input",{name:"noBon",type:"text",label:"noBon",className:"form-control"}))),m.a.createElement("div",{className:"col-lg-3"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Detail"),m.a.createElement("input",{name:"detail",type:"text",label:"detail",className:"form-control"}))))),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("br",null)),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-2"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Total NW"),m.a.createElement("input",{name:"totalNW",label:"totalNW",type:"text",className:"form-control",readOnly:!0}))),m.a.createElement("div",{className:"col-lg-2"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Total NW Ext"),m.a.createElement("input",{name:"totalNWExt",label:"totalNWExt",type:"text",className:"form-control"}))),m.a.createElement("div",{className:"col-lg-2"}),m.a.createElement("div",{className:"col-lg-2"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Harga (Rp)"),m.a.createElement("input",{name:"hargaRp",label:"hargaRp",type:"text",className:"form-control"}))),m.a.createElement("div",{className:"col-lg-2"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Total(Rp)"),m.a.createElement("input",{name:"totalRp",label:"totalRp",type:"text",className:"form-control",readOnly:!0}))),m.a.createElement("div",{className:"col-lg-2"},m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:""},"Total Rp Ext"),m.a.createElement("input",{name:"totalRpExt",label:"totalRpExt",type:"text",className:"form-control"}))))),m.a.createElement("div",{className:"col-lg-12 mt-3"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{className:"btn btn-primary","data-toggle":"modal","data-target":"#tambahModal"},"Tambah Barang"))),m.a.createElement("div",{className:"col-lg-12"},m.a.createElement(b.a,{keyField:"kodeKelompok",data:this.state.data,columns:this.state.columns,search:!0},(function(e){return m.a.createElement("div",{className:"form-group"},m.a.createElement("div",{className:"text-right mt-5 mb-3"},m.a.createElement(k,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),m.a.createElement(d.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:p()()})))})))),m.a.createElement("div",{id:"tambahModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},m.a.createElement("div",{className:"modal-dialog modal-lg"},m.a.createElement("div",{className:"modal-content"},m.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},m.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Pembelian Rongsok"),m.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),m.a.createElement("div",{className:"modal-body"},m.a.createElement(x,null)),m.a.createElement("div",{className:"modal-footer"},m.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal",id:"close_modal"},"Close"))))))))}}]),t}(o.Component);F=Object(v.a)({form:"PembayaranPenjualanLM",enableReinitialize:!0})(F);a.default=Object(s.b)()(F)},507:function(e,a,t){"use strict";t.d(a,"a",(function(){return c})),t.d(a,"c",(function(){return o})),t.d(a,"b",(function(){return m}));var l=t(530).a.initializeApp({apiKey:"AIzaSyDZH49wStpEG3wK8IdFwUpt9QHfbliYtdk",authDomain:"timbangannagatech.firebaseapp.com",databaseURL:"https://timbangannagatech-default-rtdb.firebaseio.com",projectId:"timbangannagatech",storageBucket:"timbangannagatech.appspot.com",messagingSenderId:"266997300577",appId:"1:266997300577:web:8f4d8441b9267ed6d3d920",measurementId:"G-SXVC6P8KNE"}),n=localStorage.getItem("namaTimbangan"),r=localStorage.getItem("enableTimbangan"),c=function(e){r?l.database().ref(n).on("value",(function(a){var t=a.val();e("bruto",t.nilai),console.log(t.nilai)})):console.log("TIMBANGAN TIDAK AKTIF")},o=function(e){r?l.database().ref(n).on("value",(function(a){var t=a.val();e("jumlah",t.nilai),console.log(t.nilai);var l=Object.keys(t).map((function(e){return t[e]}));console.log(l)})):console.log("TIMBANGAN TIDAK AKTIF")},m=function(e){r?l.database().ref(n).on("value",(function(a){var t=a.val();e("gross",t.nilai),console.log(t.nilai);var l=Object.keys(t).map((function(e){return t[e]}));console.log(l)})):console.log("TIMBANGAN TIDAK AKTIF")}}}]);
//# sourceMappingURL=155.f370603a.chunk.js.map