(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[146],{643:function(e,a,t){"use strict";t.r(a);var n=t(35),l=t(22),r=t(23),c=t(25),s=t(24),i=t(0),m=t.n(i),o=t(478),u=t.n(o),d=t(480),p=t.n(d),b=t(467),g=t(468),h=t(15),k=t(16),E=t.n(k),f=t(479),v=t.n(f),N=t(197),y=function(e){var a=e.input,t=e.label,n=e.type,l=e.limit,r=e.readOnly,c=e.meta,s=c.touched,i=c.error,o=c.warning;return m.a.createElement("div",{className:"form-group"},m.a.createElement("label",{htmlFor:"",className:"text-black"},t),m.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",min:"0",step:"0.001",maxLength:l,readOnly:r})),s&&(i&&m.a.createElement("p",{className:"invalid-feedback"},i)||o&&m.a.createElement("p",null,o)))},O=d.Search.SearchBar,j=[{dataField:"kodeLokasi",text:"Kode Tukang"},{dataField:"namaLokasi",text:"Nama Tukang"}],T=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).inputChange=function(e){return function(a){r.setState(Object(n.a)({},e,a.target.value))}},r.submit=function(){console.log(JSON.stringify(r.state))},r.state={kode_tukang:null,nama_tukang:null,listTukang:[]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(N.b)())}},{key:"render",value:function(){return m.a.createElement("div",{className:"row"},m.a.createElement("form",{onSubmit:this.props.handleSubmit,className:"col-lg-12"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-md-2"},m.a.createElement("div",{className:"form-group"},m.a.createElement(b.a,{name:"kodeLokasi",label:"Kode Tukang",component:y,type:"text"}))),m.a.createElement("div",{className:"col-md-10"},m.a.createElement("div",{className:"form-group"},m.a.createElement(b.a,{name:"namaLokasi",label:"Nama Tukang",component:y,type:"text"}))),m.a.createElement("div",{className:"col-lg-12 col-md-12"},m.a.createElement("div",{className:"text-right"},m.a.createElement("button",{name:"submit",id:"simpan",type:"submit",className:"btn btn-info"},"Submit"))))),m.a.createElement("div",{className:"col-lg-12 col-md-12"},this.props.listTukang?m.a.createElement(p.a,{keyField:"id",data:this.props.listTukang,columns:j,search:!0},(function(e){return m.a.createElement("div",{className:"form-group"},m.a.createElement("h3",{className:"mt-2"},"Kolom Pencarian"),m.a.createElement("div",null,m.a.createElement(O,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),m.a.createElement("hr",null),m.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:v()()})))})):m.a.createElement(E.a,{width:"100%",height:300})))}}]),t}(i.Component);T=Object(g.a)({form:"FormKirimMasak",enableReinitialize:!0})(T),a.default=Object(h.b)((function(e){return{listTukang:e.provinsi.listTukang}}),null)(T)}}]);
//# sourceMappingURL=146.68429da0.chunk.js.map