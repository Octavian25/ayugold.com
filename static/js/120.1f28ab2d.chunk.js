(this.webpackJsonpayuGold=this.webpackJsonpayuGold||[]).push([[120],{1154:function(e,t,a){"use strict";a.r(t);var l=a(35),n=a(22),r=a(23),c=a(25),s=a(24),i=a(0),o=a.n(i),m=a(188),d=a(39),u=a(91),p=a(49),h=a.n(p),g=a(15),E=a(478),b=a.n(E),N=a(480),v=a.n(N),f=a(479),k=a.n(f),C=a(505),S=a.n(C),A=a(16),T=a.n(A),O=a(4),D=a(26),_=a(51),y=N.Search.SearchBar,F=N.CSVExport.ExportCSVButton,P=Object({NODE_ENV:"production",PUBLIC_URL:"/ayugold.com",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_BACKEND_URL:"https://147.139.193.169:3759/api/v1/",REACT_APP_BACKEND_URLLOCAL:"http://192.168.1.27:7002/api/v1/",REACT_APP_BACKEND_URL_WEB:"https://ayu-grosir-api.herokuapp.com/api/v1/"}).REACT_APP_BACKEND_URL_NON_MASTER,x=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).inputChange=function(e){return function(t){r.setState(Object(l.a)({},e,t.target.value))}},r.pilihSupplier=function(e){return function(e){var t=(e.target.value?e.target.value:"DEFALT | DEFAULT").split("|");r.setState({kodeSupplier:t[0],namaSupplier:t[1]})}},r.state={listSupplier:[],columns:[{dataField:"tanggal",text:"Tanggal"},{dataField:"stok",text:"Stok"},{dataField:"namaSupplier",text:"noNota"},{dataField:"bruto",text:"Bruto(Gr)"},{dataField:"netto",text:"Netto"},{dataField:"rp",text:"Ongkos(Rp)"}],data:[{tanggal:"2020-11-12"}],listPenerimaan:"ada"},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.dispatch(Object(u.f)()),h.a.get("https://147.139.193.169:3759/api/v1/suppliers").then((function(t){return e.setState({listSupplier:t.data})})).catch((function(e){return alert(e)})),this.props.dispatch(Object(d.b)()),this.props.dispatch(Object(m.b)())}},{key:"caridata",value:function(){var e=this;console.log("PENCARIAN...."),h.a.get(P+"item/dc/totalantimbang/heads",{params:{tglFrom:this.state.tglFrom,tglTo:this.state.tglTo,noBon:this.state.noBon,kodeSupplier:this.state.kodeSupplier}}).then((function(t){return e.setState({hasilDataGet:t.data})})).catch((function(){return Object(D.c)("Data Kosong")}))}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement("ol",{className:"breadcrumb mb-2"},o.a.createElement(O.b,{to:"/cetakUlangBukti"},o.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return localStorage.clear()}},o.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),o.a.createElement("div",{className:"card"},o.a.createElement(_.default,{title:"Cetak Ulang Bukti Tolakan Timbangan"}),o.a.createElement("div",{className:"card-body"},o.a.createElement("br",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Awal"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAwal",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglFrom")})),o.a.createElement("div",{className:"col-lg-4 col-md-4"},o.a.createElement("div",{className:"text-center"},o.a.createElement("i",{className:"fas fa-exchange-alt"}))),o.a.createElement("div",{className:"col-md-4 col-lg-4"},o.a.createElement("label",{htmlFor:""},"Tanggal Akhir"),o.a.createElement("input",{type:"date",id:"tanggal",name:"tanggalAkhir",className:"form-control",defaultValue:this.state.startingDate,onChange:this.inputChange("tglTo")})),o.a.createElement("div",{className:"col-md-4 col-lg-4 mt-3"},o.a.createElement("label",{htmlFor:""},"Lokasi"),o.a.createElement("select",{type:"text",id:"lokasi",name:"lokasi",className:"form-control",onChange:this.inputChange("lokasi")},o.a.createElement("option",{value:"DEFAULT",key:"DEFAULT"},"DEFAULT"))),o.a.createElement("div",{className:"col-md-12 col-lg-12 mt-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-left"})),o.a.createElement("div",{className:"col-lg-6 col-md-6"},o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.caridata()}},o.a.createElement("i",{className:"fa fa-search mr-1"}),"Cari Data"))),o.a.createElement("div",{className:"col-lg-12"},this.state.hasilDataGet?o.a.createElement(v.a,{bootstrap4:!0,keyField:this.state.hasilDataGet,data:this.state.hasilDataGet,columns:this.state.columns,search:!0},(function(e){return o.a.createElement("div",{className:"col-lg-12 col-md-12 mt-5"},o.a.createElement("div",{className:"text-right"},o.a.createElement(y,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0}}))),o.a.createElement(b.a,Object.assign({},e.baseProps,{headerClasses:"header-table",striped:!0,hover:!0,bordered:!0,pagination:k()()})),o.a.createElement(F,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):o.a.createElement("div",null,this.props.error?o.a.createElement("div",{className:"text-center"},o.a.createElement("img",{src:S.a,style:{width:"30%"},alt:"NOT RESPOND"}),o.a.createElement("br",null),o.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):o.a.createElement(T.a,{width:"100%",height:180}))))))))))}}]),a}(i.Component);t.default=Object(g.b)()(x)},505:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"}}]);
//# sourceMappingURL=120.1f28ab2d.chunk.js.map