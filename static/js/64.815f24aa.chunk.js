(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[64,5],{1218:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(23),s=t(25),l=t(24),o=t(0),c=t.n(o),i=t(846),d=t.n(i),m=t(478),u=t.n(m),p=t(480),h=t.n(p),b=t(479),E=t.n(b),g=t(15),v=t(467),f=t(468),w=t(11),k=function(e){var a={};return e.password?e.password.length<6&&(a.password="Password kurang dari 6"):a.password="Tidak Boleh kosong",e.rePassword?e.rePassword.length<6?a.rePassword="Password kurang dari 6":e.rePassword!==e.password&&(a.rePassword="Password tidak sama"):a.rePassword="Tidak Boleh kosong",e.namaLengkap||(a.namaLengkap="Tidak Boleh kosong"),e.level||(a.level="Tidak Boleh kosong"),a},O=function(e){var a=e.input,t=e.label,n=e.type,r=e.readOnly,s=e.meta,l=s.touched,o=s.error,i=s.warning;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"",className:"text-black"},t),c.a.createElement("input",Object.assign({},a,{type:n,className:"form-control",readOnly:r})),l&&(o&&c.a.createElement("p",{className:"invalid-feedback"},o)||i&&c.a.createElement("p",null,i)))},j=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={response:"",status:"AKTIF",listProvinsi:[]},r}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:this.props.changePassword?"col-lg-4 d-none":"col-lg-4"},c.a.createElement(v.a,{name:"namaLengkap",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:O,label:"Nama Lengkap"})),c.a.createElement("div",{className:this.props.edit?"col-lg-4 d-none":"col-lg-4 "},c.a.createElement(v.a,{name:"userID",type:"text",component:O,label:"User ID"})),c.a.createElement("div",{className:this.props.changePassword?"col-lg-4 d-none":"col-lg-4"},c.a.createElement(v.a,{component:w.b,label:"Level",name:"level",value:this.props.status,normalize:function(e){return e&&e.toUpperCase()},className:"form-control",options:[{value:"ADM",name:"ADMIN"},{value:"OWN",name:"OWNER"},{value:"MRK",name:"MARKETING"},{value:"SPV",name:"SUPERVISOR"}]})),this.props.changePassword?c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(v.a,{name:"passwordLama",type:"password",normalize:function(e){return e&&e.toUpperCase()},component:O,label:"Password Lama"})):null,this.props.edit?this.props.changePassword?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(v.a,{name:"password",type:"password",normalize:function(e){return e&&e.toUpperCase()},component:O,label:"Password Baru"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(v.a,{name:"rePassword",type:"password",normalize:function(e){return e&&e.toUpperCase()},component:O,label:"Retype Password Baru"}))):null:c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(v.a,{name:"password",type:"password",normalize:function(e){return e&&e.toUpperCase()},component:O,label:"Password"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(v.a,{name:"rePassword",type:"password",normalize:function(e){return e&&e.toUpperCase()},component:O,label:"Retype Password"}))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{type:"submit",id:"simpan",className:"btn btn-primary",disabled:this.props.submitting},"Submit"))))))}}]),t}(o.Component);j=Object(f.a)({form:"AddUser",enableReinitialize:!0,validate:k})(j);var N=Object(g.b)((function(e){return{initialValues:{namaLengkap:e.provinsi.editUser.namaUser,userID:e.provinsi.editUser.idUser,password:e.provinsi.editUser.password,rePassword:e.provinsi.editUser.password,level:e.provinsi.editUser.level}}}),null)(j),y=t(178),P=t(4),U=t(26),S=t(39),C=t(506),x=t(50),D=t(3),A=p.Search.SearchBar,B=p.CSVExport.ExportCSVButton,L=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={columns:[{dataField:"user_id",text:"ID User"},{dataField:"user_name",text:"Nama Pegawai",headerStyle:function(){return{width:"20%"}}},{dataField:"level",text:"Level"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,a){return c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"btn btn-warning mr-2","data-target":"#modalTambahUser","data-toggle":"modal",onClick:function(){return r.props.dispatch(Object(y.d)(a.user_id,a.user_name,a.level,a.password,r.editModal()))}},c.a.createElement("i",{className:"fa fa-edit mr-1"}),"Edit"),c.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return Object(D.a)("users/delete/id/"+a.user_id).then((function(){return Object(U.b)("Akun Berhasil Dihapus")})).catch((function(){return Object(U.c)("sepertinya ada kesalahan, silahkan check koneksi anda")}))}},c.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"))},headerStyle:function(){return{width:"20%"}}}]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(y.c)())}},{key:"handleSubmit",value:function(e){var a=this,t={user_name:e.namaLengkap,password:e.password,retype_password:e.password,user_id:e.userID,level:e.level};Object(D.c)("users/add/user",t).then((function(){return a.props.dispatch(Object(x.g)())})).then((function(){return Object(U.b)("User berhasil disimpan",a.props.dispatch(Object(S.b)(),a.props.dispatch(Object(y.c)())))})).catch((function(){return Object(U.c)("Sepertinya ada gangguan, mohon periksa koneksi anda")}))}},{key:"handleSubmitEdit",value:function(e){var a=this,t={user_name:e.namaLengkap,level:e.level};Object(D.d)("/users/update/id/"+e.userID,t).then((function(){return a.props.dispatch(Object(x.g)())})).then((function(){return Object(U.b)("User berhasil dirubah",a.props.dispatch(Object(S.b)(),a.props.dispatch(Object(y.c)())))})).catch((function(){return Object(U.c)("Sepertinya ada gangguan, mohon periksa koneksi anda")}))}},{key:"editModal",value:function(){this.props.dispatch(Object(x.j)()),this.props.dispatch(Object(y.d)()),this.setState({isEdit:!0,changePassword:!1})}},{key:"tambahModal",value:function(){this.props.dispatch(Object(x.j)()),this.setState({isEdit:!1})}},{key:"changePassword",value:function(){this.props.dispatch(Object(x.j)()),this.props.dispatch(Object(y.d)()),this.setState({isEdit:!0,changePassword:!0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid"},c.a.createElement("ol",{className:"breadcrumb mb-2"},c.a.createElement(P.b,{to:"/manageUser"},c.a.createElement("button",{type:"button",className:"btn btn-secondary"},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Back"))),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:d.a,alt:"Add User Logo",width:200}),c.a.createElement("p",null,"Silahkan Simpan ID dan password baik baik, jangan password",c.a.createElement("br",null),"dengan kata umum, seperti: Tanggal lahir, atau nama"))),c.a.createElement(C.default,{content:this.state.isEdit?this.state.changePassword?c.a.createElement(N,{onSubmit:function(a){return e.handleSubmitEdit(a)},edit:!0,changePassword:!0}):c.a.createElement(N,{onSubmit:function(a){return e.handleSubmitEdit(a)},edit:!0}):c.a.createElement(N,{onSubmit:function(a){return e.handleSubmit(a)}}),title:this.state.isEdit?"Edit Data User":"Tambah Data User"}),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.tambahModal()}},"Tambah User"))),c.a.createElement("div",{className:"col-lg-12"},this.props.listDataUser?c.a.createElement(h.a,{keyField:"id",data:this.props.listDataUser,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"text-right mt-5 mb-3"},c.a.createElement(A,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Tuliskan Kode / Nama",style:{margin:0,top:"50%"}}))),c.a.createElement(u.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",pagination:E()()})),c.a.createElement(B,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):null)))))}}]),t}(o.Component);a.default=Object(g.b)((function(e){return{listDataUser:e.provinsi.listDataUser}}),null)(L)},506:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(23),s=t(25),l=t(24),o=t(1203),c=t(0),i=t.n(c),d=t(15),m=t(50),u=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(o.a,{show:this.props.show,onHide:function(){return e.props.dispatch(Object(m.g)())},dialogClassName:"modal-xl",backdrop:"static",keyboard:!1},i.a.createElement(o.a.Header,{closeButton:!0,style:{backgroundColor:"#5F76E8",color:"#ffffff"}},i.a.createElement(o.a.Title,null,this.props.title||"")),i.a.createElement(o.a.Body,null,this.props.content||""))}}]),t}(c.Component);a.default=Object(d.b)((function(e){return{show:e.modal.show}}),null)(u)},846:function(e,a,t){e.exports=t.p+"static/media/AddUser2.bff7185f.svg"}}]);
//# sourceMappingURL=64.815f24aa.chunk.js.map