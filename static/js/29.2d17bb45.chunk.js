(this.webpackJsonpAyuGold=this.webpackJsonpAyuGold||[]).push([[29],{1208:function(e,t,a){"use strict";a.r(t);var n=a(15),o=a(16),r=a(18),l=a(17),s=a(0),c=a.n(s),i=a(254),m=a.n(i),u=a(148),d=a.n(u),p=a(648),h=a.n(p),k=a(39),E=a(183),b=a(14),v=function(e){var t={};return e.kodeSupplier||(t.kodeSupplier="Tidak Boleh kosong"),e.kodeExt||(t.kodeExt="Tidak Boleh kosong"),e.namaToko||(t.namaToko="Tidak Boleh kosong"),e.namaCustomer||(t.namaCustomer="Tidak Boleh kosong"),e.tanggalDaftar||(t.tanggalDaftar="Tidak Boleh kosong"),e.kodeArea||(t.kodeArea="Tidak Boleh kosong"),e.kodeKota||(t.kodeKota="Tidak Boleh kosong"),e.user_id||(t.user_id="Tidak Boleh kosong"),e.password||(t.password="Tidak Boleh kosong"),t},f=a(6),g=a(5),_=a(70),N=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).nextStep=function(){var e=o.state.step;0===e?o.setState({step:e+1,step2:"row",step1:"row d-none"}):1===e&&o.setState({step:e+1,step2:"row d-none",step3:"row"})},o.prevStep=function(){var e=o.state.step;1===e?o.setState({step:e-1,step2:"row d-none",step1:"row"}):2===e&&o.setState({step:e-1,step3:"row d-none",step2:"row"})},o.inputProvinsi=function(e){return function(e){var t=o.state.listKota.filter((function(t){return t.kode_provinsi===e.target.value}));o.setState({pilihanKota:t})}},o.inputKota=function(e){return function(e){var t=o.state.listArea.filter((function(t){return t.kode_kota===e.target.value}));o.setState({pilihanArea:t})}},o.inputArea=function(e){return function(e){var t=e.target.value.split("|");o.setState({kodeArea:t[0],namaArea:t[1]}),o.setKodePos(t[0])}},o.state={step:0,step1:"row",step2:"row d-none",step3:"row d-none",customer_induk:"col-lg-5 d-none",listKota:[],listArea:[],listProvinsi:[],pilihanArea:[],pilihanKota:[],list_customer_induk:[],today:(new Date).getFullYear()+"-"+("0"+((new Date).getMonth()+1)).slice(-2)+"-"+("0"+(new Date).getDate()).slice(-2)},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(g.b)("kota/get/all").then((function(t){return e.setState({listKota:t.data})})).catch((function(e){return console.log(e)})),Object(g.b)("kecamatan/get/all").then((function(t){return e.setState({listArea:t.data})})).catch((function(e){return console.log(e)})),Object(g.b)("provinsi/get/all").then((function(t){return e.setState({listProvinsi:t.data})})).catch((function(e){return console.log(e)})),this.props.change("tanggalDaftar",_.b)}},{key:"setKodePos",value:function(e){var t=e,a=this.state.listArea.filter((function(e){return e.kode_kecamatan===t}));this.props.change("kodePos",a[0].kode_pos)}},{key:"setIndukCustomer",value:function(e){switch(console.log(e),e){case"LEVEL1":this.setState({customer_induk:"col-lg-5 d-none"});break;case"LEVEL2":this.setState({customer_induk:"col-lg-5",list_customer_induk:this.props.customer.filter((function(e){return"LEVEL1"===e.level_customer}))});break;case"LEVEL3":this.setState({customer_induk:"col-lg-5",list_customer_induk:this.props.customer.filter((function(e){return"LEVEL2"===e.level_customer}))})}}},{key:"render",value:function(){var e=this,t=this.state.step;return c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("form",{onSubmit:this.props.handleSubmit},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(h.a,{steps:[{title:"Data Diri"},{title:"Data Lokasi"},{title:"Data Nomor"}],activeStep:t})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step1},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"kodeCustomer",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Kode Customer"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"kodeExt",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Kode Ext"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"namaToko",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Nama Toko"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"namaCustomer",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Nama Customer"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"tanggalDaftar",type:"date",component:f.a,label:"Tanggal Daftar"})),c.a.createElement("div",{className:"col-lg-5"},c.a.createElement(k.a,{name:"level_customer",component:f.b,options:[{value:"LEVEL1",name:"LEVEL 1"},{value:"LEVEL2",name:"LEVEL 2"},{value:"LEVEL3",name:"LEVEL 3"}],type:"text",label:"Level Customer",placeholder:"Masukan Level Customer",onChange:function(t){e.setIndukCustomer(t)}})),c.a.createElement("div",{className:this.state.customer_induk},c.a.createElement(k.a,{name:"kode_customer_induk",component:f.b,options:this.state.list_customer_induk.map((function(e){return{value:e.kode_customer,name:e.nama_customer}})),type:"text",label:"Customer Induk",placeholder:"Masukan Customer Induk"})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{id:"next_1",name:"next_1",className:"btn btn-primary",type:"button",onClick:function(){return e.nextStep()}},"Next"))))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step2},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Provinsi"),c.a.createElement(k.a,{name:"kodeProvinsi",type:"text",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",component:"select",label:"Nama Customer",onChange:this.inputProvinsi()},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listProvinsi.map((function(e){return c.a.createElement("option",{value:e.kode_provinsi,key:e.kode_provinsi},e.nama_provinsi)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Kota"),c.a.createElement(k.a,{name:"kodeKota",type:"text",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",component:"select",label:"Nama Customer",onChange:this.inputKota()},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.pilihanKota.map((function(e){return c.a.createElement("option",{value:e.kode_kota,key:e.kode_kota},e.nama_kota)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Kecamatan"),c.a.createElement(k.a,{name:"kodeKecamatan",type:"text",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",component:"select",label:"Nama Customer",onChange:this.inputArea()},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.pilihanArea.map((function(e){return c.a.createElement("option",{value:e.kode_kecamatan,key:e.kode_kecamatan},e.nama_kecamatan)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"kodePos",type:"number",component:f.a,label:"Kode Pos"})),c.a.createElement("div",{className:"col-md-6 col-lg-6"},c.a.createElement(k.a,{name:"alamat",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Alamat"})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"text-left col-md-6"},c.a.createElement("button",{id:"back_1",name:"back_1",className:"btn btn-primary",type:"button",onClick:function(){return e.prevStep()}},"Back")),c.a.createElement("div",{className:"text-right col-md-6"},c.a.createElement("button",{id:"next_2",name:"next_2",className:"btn btn-primary",type:"button",onClick:function(){return e.nextStep()}},"Next")))))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step3},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"email",type:"email",component:f.a,label:"Email"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"telepon",type:"number",component:f.a,label:"Nomor Telepon"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"contactPerson",type:"number",component:f.a,label:"Contact Person"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"fax",type:"number",component:f.a,label:"Fax"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"handPhone",type:"number",component:f.a,label:"Handphone"})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"text-left col-md-6"},c.a.createElement("button",{id:"back_2",name:"back_2",className:"btn btn-primary",type:"button",onClick:function(){return e.prevStep()}},"Back")),c.a.createElement("div",{className:"text-right col-md-6"},c.a.createElement("button",{type:"submit",disabled:this.props.onSend,className:"btn btn-primary",onClick:function(){return e.setState({step:0,step1:"row",step2:"row d-none",step3:"row d-none"})}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))))))}}]),a}(s.Component);N=Object(E.a)({form:"Customer",validate:v,enableReinitialize:!0})(N);var C=Object(b.b)((function(e){return{customer:e.provinsi.customer}}))(N),x=a(30),y=a(633),S=a.n(y),w=a(7),D=a.n(w),L=a(184),j=a(11),O=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).nextStep=function(){var e=o.state.step;if(0===e){if(""===o.state.level_customer)return Object(j.e)("Mohon Isi Level Customer"),!1;o.setState({step:e+1,step2:"row",step1:"row d-none",step3:"row d-none",step4:"row d-none"})}else 1===e?o.setState({step:e+1,step2:"row d-none",step3:"row",step4:"row d-none"}):2===e&&o.setState({step:e+1,step2:"row d-none",step4:"row",step1:"row d-none",step3:"row d-none"})},o.prevStep=function(){var e=o.state.step;1===e?o.setState({step:e-1,step2:"row d-none",step1:"row",step3:"row d-none",step4:"row d-none"}):2===e?o.setState({step:e-1,step3:"row d-none",step2:"row",step4:"row d-none",step1:"row d-none"}):3===e&&o.setState({step:e-1,step4:"row d-none",step3:"row",step2:"row d-none",step1:"row d-none"})},o.inputKota=function(e){return function(e){var t=e.target.value.split("|");o.setState({kodeKota:t[0],namaKota:t[1]})}},o.inputArea=function(e){return function(e){var t=e.target.value.split("|");o.setState({kodeArea:t[0],namaArea:t[1]})}},o.inputProvinsi=function(e){return function(e){console.log(e.target.value);var t=o.state.listKota.filter((function(t){return t.kode_provinsi===e.target.value}));o.setState({pilihanKota:t})}},o.inputKota=function(e){return function(e){var t=o.state.listArea.filter((function(t){return t.kode_kota===e.target.value}));o.setState({pilihanArea:t})}},o.state={step:0,step1:"row",step2:"row d-none",step3:"row d-none",step4:"row d-none",customer_induk:"col-lg-4 d-none",list_customer_induk:[],listKota:[],listArea:[],listProvinsi:[],pilihanArea:[],pilihanKota:[],level_customer:""},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(g.b)("kota/get/all").then((function(t){return e.setState({listKota:t.data,pilihanKota:t.data})})).catch((function(e){return console.log(e)})),Object(g.b)("kecamatan/get/all").then((function(t){return e.setState({listArea:t.data,pilihanArea:t.data})})).catch((function(e){return console.log(e)})),Object(g.b)("provinsi/get/all").then((function(t){return e.setState({listProvinsi:t.data})})).catch((function(e){return console.log(e)})),this.props.change("tanggalDaftar",_.b)}},{key:"setIndukCustomer",value:function(e){switch(this.setState({level_customer:e}),e){case"LEVEL1":this.setState({customer_induk:"col-lg-4 d-none"});break;case"LEVEL2":this.setState({customer_induk:"col-lg-4",list_customer_induk:this.props.customer.filter((function(e){return"LEVEL1"===e.level_customer}))});break;case"LEVEL3":this.setState({customer_induk:"col-lg-4",list_customer_induk:this.props.customer.filter((function(e){return"LEVEL2"===e.level_customer}))})}}},{key:"render",value:function(){var e=this,t=this.state.step;return c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement(h.a,{steps:[{title:"Data Diri"},{title:"Data Lokasi"},{title:"Data Nomor"},{title:"Verifikasi Data"}],activeStep:t})),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step1},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"kodeExt",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Kode Ext"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"namaToko",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Nama Toko"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"namaCustomer",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Nama Customer"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"tanggalDaftar",type:"date",component:f.a,label:"Tanggal Daftar"})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(k.a,{name:"level_customer",component:f.b,options:[{value:"LEVEL1",name:"LEVEL 1"},{value:"LEVEL2",name:"LEVEL 2"},{value:"LEVEL3",name:"LEVEL 3"}],type:"text",label:"Level Customer",placeholder:"Masukan Level Customer",onChange:function(t){e.setIndukCustomer(t)}})),c.a.createElement("div",{className:this.state.customer_induk},c.a.createElement(k.a,{name:"kode_customer_induk",component:f.b,options:this.state.list_customer_induk.map((function(e){return{value:e.kode_customer,name:e.nama_customer}})),type:"text",label:"Customer Induk",placeholder:"Masukan Customer Induk"})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{id:"next_1",name:"next_1",className:"btn btn-primary",type:"button",onClick:function(){return e.nextStep()}},"Next"))))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step2},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Provinsi"),c.a.createElement(k.a,{name:"kodeProvinsi",type:"text",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",component:"select",label:"Nama Customer",onChange:this.inputProvinsi()},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.listProvinsi.map((function(e){return c.a.createElement("option",{value:e.kode_provinsi,key:e.kode_provinsi},e.nama_provinsi)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Kota"),c.a.createElement(k.a,{name:"kodeKota",type:"text",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",component:"select",label:"Nama Customer",onChange:this.inputKota()},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.pilihanKota.map((function(e){return c.a.createElement("option",{value:e.kode_kota,key:e.kode_kota},e.nama_kota)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement("label",{htmlFor:""},"Kecamatan"),c.a.createElement(k.a,{name:"kodeKecamatan",type:"text",normalize:function(e){return e&&e.toUpperCase()},className:"form-control",component:"select",label:"Nama Customer",onChange:this.inputArea()},c.a.createElement("option",{value:"DEFAULT | DEFAULT"},"SILAHKAN PILIH"),this.state.pilihanArea.map((function(e){return c.a.createElement("option",{value:e.kode_kecamatan,key:e.kode_kecamatan},e.nama_kecamatan)})))),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"kodePos",type:"number",component:f.a,label:"Kode Pos"})),c.a.createElement("div",{className:"col-md-6 col-lg-6"},c.a.createElement(k.a,{name:"alamat",type:"text",normalize:function(e){return e&&e.toUpperCase()},component:f.a,label:"Alamat"})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"text-left col-md-6"},c.a.createElement("button",{id:"back_1",name:"back_1",className:"btn btn-outline-primary",type:"button",onClick:function(){return e.prevStep()}},"Back")),c.a.createElement("div",{className:"text-right col-md-6"},c.a.createElement("button",{id:"next_2",name:"next_2",className:"btn btn-primary",type:"button",onClick:function(){return e.nextStep()}},"Next")))))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step3},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"email",type:"email",component:f.a,label:"Email"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"telepon",type:"number",component:f.a,label:"Nomor Telepon"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"contactPerson",type:"number",component:f.a,label:"Contact Person"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"fax",type:"number",component:f.a,label:"Fax"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"handPhone",type:"number",component:f.a,label:"Handphone"})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"text-left col-md-6"},c.a.createElement("button",{id:"back_2",name:"back_2",className:"btn btn-outline-primary",type:"button",onClick:function(){return e.prevStep()}},"Back")),c.a.createElement("div",{className:"text-right col-md-6"},c.a.createElement("button",{id:"next_2",name:"next_2",className:"btn btn-primary",type:"button",onClick:function(){return e.nextStep()}},"Next")))))),c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:this.state.step4},c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"user_id",type:"text",component:f.a,label:"User ID"})),c.a.createElement("div",{className:"col-md-4 col-lg-4"},c.a.createElement(k.a,{name:"password",type:"password",component:f.a,label:"Password"})),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"text-left col-md-6"},c.a.createElement("button",{id:"back_2",name:"back_2",className:"btn btn-outline-primary",type:"button",onClick:function(){return e.prevStep()}},"Back")),c.a.createElement("div",{className:"text-right col-md-6"},c.a.createElement("button",{type:"submit",className:"btn btn-primary",onSubmit:this.props.onSend,onClick:function(){void 0===e.props.user_id&&void 0===e.props.password?Object(j.e)("Mohon isi Username dan password untuk Verifikasi"):e.setState({step:0,step1:"row",step2:"row d-none",step3:"row d-none"})}},this.props.onSend?c.a.createElement("span",{className:"spinner-border spinner-border-sm mr-3","aria-hidden":"true"}):null,"Simpan",c.a.createElement("i",{className:"fa fa-paper-plane ml-3"}))))))))))}}]),a}(s.Component);O=Object(E.a)({form:"CustomerEdit",validate:v,enableReinitialize:!0})(O);var A=Object(L.a)("CustomerEdit"),P=Object(b.b)((function(e){var t=A(e,"user_id","password"),a=t.user_id,n=t.password;return{initialValues:{alamat:e.provinsi.editCustomer.alamat,email:e.provinsi.editCustomer.email,handPhone:e.provinsi.editCustomer.handPhone,kodeProvinsi:e.provinsi.editCustomer.kodeProvinsi,kodeKecamatan:e.provinsi.editCustomer.kodeArea,kodeCustomer:e.provinsi.editCustomer.kodeCustomer,kodeExt:e.provinsi.editCustomer.kodeExt,kodeKota:e.provinsi.editCustomer.kodeKota,kodePos:e.provinsi.editCustomer.kodePos,namaCustomer:e.provinsi.editCustomer.namaCustomer,namaToko:e.provinsi.editCustomer.namaToko,status:e.provinsi.editCustomer.status,tanggalDaftar:e.provinsi.editCustomer.tanggalDaftar,telepon:e.provinsi.editCustomer.telepon,fax:e.provinsi.editCustomer.fax,contactPerson:e.provinsi.editCustomer.contactPerson},customer:e.provinsi.customer,user_id:a,password:n}}))(O),K=a(25),T=a(21),I=a.n(T),B=a(147),U=a.n(B),V=a(45),F=a(255),M=a(35),z=a(635),H=a(9),G=u.Search.SearchBar,R=u.CSVExport.ExportCSVButton;var Y={renderer:function(e){return c.a.createElement("div",null,c.a.createElement("p",null,"Nama Kota: ".concat(e.kode_kota)),c.a.createElement("p",null,"Email: ".concat(null==e.email?"-":e.email," | Alamat : ").concat(null==e.alamat?"-":e.alamat," | Kode Pos : ").concat(null==e.kode_pos?"-":e.kode_pos," | Telepon : ").concat(null==e.no_telp?"-":e.no_telp,"| Handphone: ").concat(null==e.no_hp?"-":e.no_hp)),c.a.createElement("p",null,"Kode Ext : ".concat(null==e.kode_ext?"-":e.kode_ext)))}},q=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).updateStatus=function(e){console.log(e),o.setState({response:e}),o.props.dispatch(Object(x.h)())},o.state={Customer:[],response:"",columns:[{dataField:"nama_customer",text:"Nama Customer"},{dataField:"tanggal_daftar",text:"Tanggal Daftar"},{dataField:"nama_toko",text:"Nama Toko"},{dataField:"level_customer",text:"Level Customer"},{dataField:"Aksi",text:"Aksi",csvExport:!1,formatter:function(e,t){return c.a.createElement("div",{className:"row"},c.a.createElement("button",{className:"btn btn-danger mr-2",onClick:function(){return e=o.props.dispatch,a=t.kode_customer,void D.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){if(t.isConfirmed){var n={data:{kodeCustomer:a}};Object(g.a)("customer/delete/"+a).then((function(t){return Object(j.b)("Data Berhasil Dihapus!").then((function(){return Object(j.a)("Data Berhasil Dihapus Di Customer",n)})).then((function(){return e(Object(x.h)())}))})).catch((function(e){return Object(j.c)("Data Gagal Dihapus!").then((function(){return Object(j.a)("Data Gagal Dihapus Di Customer",n,e)}))}))}}));var e,a},"data-tut":"reactour_3"},c.a.createElement("i",{className:"fa fa-trash mr-1"}),"HAPUS"),c.a.createElement("button",{"data-tut":"reactour_4",className:"btn btn-warning",onClick:function(){return o.props.dispatch(Object(x.g)(t.alamat,t.email,t.no_hp,t.kode_kecamatan,t.kode_customer,t.kode_ext,t.kode_kota,t.kode_pos,t.nama_customer,t.nama_toko,t.tanggalDaftar,t.no_telp,t.kode_provinsi,t.fax,t.contact_person,o.editModal()))}},c.a.createElement("i",{className:"fa fa-edit mr-2"}),"EDIT"))}}]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(x.h)())}},{key:"handleSubmit",value:function(e){var t=this,a={tanggal_daftar:e.tanggalDaftar,kode_customer:e.kodeCustomer,nama_customer:e.namaCustomer,nama_toko:e.namaToko,kode_ext:e.kodeExt,kode_provinsi:e.kodeProvinsi,kode_kota:e.kodeKota,kode_kecamatan:e.kodeKecamatan,alamat:e.alamat,kode_pos:e.kodePos,contact_person:e.contactPerson,no_telp:e.telepon,no_hp:e.handPhone,fax:e.fax,email:e.email},n={tanggal_daftar:e.tanggalDaftar,nama_customer:e.namaCustomer,nama_toko:e.namaToko,kode_ext:e.kodeExt,kode_provinsi:e.kodeProvinsi,kode_kota:e.kodeKota,kode_kecamatan:e.kodeKecamatan,alamat:e.alamat,kode_pos:e.kodePos,contact_person:e.contactPerson,no_telp:e.telepon,no_hp:e.handPhone,fax:e.fax,email:e.email};this.props.dispatch(Object(H.t)()),Object(g.c)("customer/add",a).then((function(){return t.props.dispatch(Object(H.k)())})).then((function(){return t.props.dispatch(Object(V.g)())})).then((function(e){return Object(j.b)("Data Berhasil Ditambah!").then((function(){return Object(j.a)("Data Berhasil Ditambah Di Customer",a)})).then((function(){return t.props.dispatch(Object(x.h)())})).then((function(){return t.props.dispatch(Object(K.a)("Customer"))}))})).catch((function(a){return t.handleReactive(a,e.kodeCustomer,n,t.props.dispatch(Object(H.k)()))}))}},{key:"handleEdit",value:function(e){var t=this,a={user_id:e.user_id,password:e.password};Object(g.c)("users/check",a).then((function(){var a={tanggal_daftar:e.tanggalDaftar,nama_customer:e.namaCustomer,nama_toko:e.namaToko,kode_ext:e.kodeExt,level_customer:e.level_customer,kode_customer_induk:void 0===e.kode_customer_induk?"-":e.kode_customer_induk,kode_provinsi:e.kodeProvinsi,kode_kota:e.kodeKota,kode_kecamatan:e.kodeKecamatan,alamat:e.alamat,kode_pos:e.kodePos,contact_person:e.contactPerson,no_telp:e.telepon,no_hp:e.handPhone,fax:e.fax,email:e.email};t.props.dispatch(Object(H.t)()),Object(g.d)("customer/edit/"+e.kodeCustomer,a).then((function(){return t.props.dispatch(Object(H.k)())})).then((function(){return t.props.dispatch(Object(V.g)())})).then((function(e){return Object(j.b)("Data Berhasil Diubah!").then((function(){return Object(j.a)("Data Berhasil Diubah Di Customer",a)})).then((function(){return t.props.dispatch(Object(x.h)())}))})).catch((function(e){return Object(j.c)("Data Gagal Diubah!").then((function(){return t.props.dispatch(Object(H.k)())})).then((function(){return Object(j.a)("Data Gagal Diubah Di Customer",a,e)})).then((function(){return t.props.dispatch(Object(V.g)())}))}))})).catch((function(){return Object(j.e)("Gagal Verifikasi Account"),!1}))}},{key:"tambahModal",value:function(){this.props.dispatch(Object(V.j)()),this.setState({isEdit:!1})}},{key:"editModal",value:function(){this.props.dispatch(Object(V.j)()),this.setState({isEdit:!0})}},{key:"handleReactive",value:function(e,t,a){var n=this;this.props.dispatch(Object(V.g)()),e.response.data.includes("deleted")?Object(j.d)(e,t,"customer/reactive/",a,"customer/edit/").then((function(){return n.props.dispatch(Object(x.h)())})):Object(j.c)("Data Gagal Ditambahkan")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container-fluid",style:{color:"black"}},c.a.createElement("div",{id:"notif_alert",className:this.props.alert,role:"alert"},c.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7")),c.a.createElement("strong",null,"Error - ")," Tidak Bisa Mengambil Data"),c.a.createElement(z.a,{tourConfig:["Untuk Menambahkan Data Customer, Tekan Tombol ini Dan Isi kolom yang disediakan","Ini adalah Data Customer yang sudah tersimpan","Ini adalah tombol untuk menghapus data pada baris yang dipilih","Ini adalah tombol untuk mengubah data pada baris yang dipilih"]}),c.a.createElement(F.default,{content:this.state.isEdit?c.a.createElement(P,{onSubmit:function(t){return e.handleEdit(t)},onSend:this.props.onSend}):c.a.createElement(C,{onSubmit:function(t){return e.handleSubmit(t)},onSend:this.props.onSend}),title:this.state.isEdit?"Edit Data Customer":"Tambah Data Customer"}),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("div",{className:"card"},c.a.createElement(M.default,{title:"Data Customer"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{action:"#"},c.a.createElement("div",{className:"form-body"},c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("div",{className:"text-right"},c.a.createElement("button",{name:"simpan",id:"simpan",type:"button",className:"btn btn-info",onClick:function(){return e.tambahModal()},"data-tut":"reactour_1"},"Tambah Data Customer"))))),c.a.createElement("div",{"data-tut":"reactour_2"},this.props.customerList?c.a.createElement(d.a,{keyField:"kode_customer",data:this.props.customerList,columns:this.state.columns,search:!0},(function(e){return c.a.createElement("div",{className:"text-left mt-5 mb-3"},c.a.createElement("div",{className:"text-right"},c.a.createElement(G,Object.assign({},e.searchProps,{className:"form-control",placeholder:"Pencarian",style:{margin:0,top:"50%"}}))),c.a.createElement("hr",null),c.a.createElement(m.a,Object.assign({},e.baseProps,{striped:!0,hover:!0,condensed:!0,bordered:!0,headerClasses:"header-table",expandRow:Y,pagination:U()()})),c.a.createElement(R,Object.assign({},e.csvProps,{className:"btn btn-primary"}),"Export CSV"))})):c.a.createElement("div",null,this.props.error?c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:S.a,style:{width:"30%"},alt:"Not Respond"}),c.a.createElement("br",null),c.a.createElement("h4",null,"Request API Gagal, Silahkan Refresh")):c.a.createElement(I.a,{width:"100%",height:180}))))))))}}]),a}(s.Component);t.default=Object(b.b)((function(e){return{customerList:e.provinsi.customer,alert:e.provinsi.alert,error:e.provinsi.error}}),null)(q)},633:function(e,t,a){e.exports=a.p+"static/media/500.c22f1e39.svg"},635:function(e,t,a){"use strict";var n=a(15),o=a(16),r=a(18),l=a(17),s=a(0),c=a.n(s),i=a(14),m=a(45),u=a(647),d=a(645),p=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).disableBody=function(e){return Object(d.a)(e)},o.enableBody=function(e){return Object(d.b)(e)},o.state={},o}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.tourConfig.map((function(e,t){return{selector:'[data-tut="reactour_'+ ++t+'"]',content:e}}));return console.log(t),c.a.createElement(u.a,{onRequestClose:function(){return e.props.dispatch(Object(m.f)())},steps:t,isOpen:this.props.showTourGuide,maskClassName:"mask",className:"helper",rounded:5,accentColor:"#5cb7b7",onAfterOpen:this.disableBody,onBeforeClose:this.enableBody})}}]),a}(s.Component);t.a=Object(i.b)((function(e){return{showTourGuide:e.provinsi.showTourGuide}}),null)(p)},648:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=a(655),r=(n=o)&&n.__esModule?n:{default:n};t.default=r.default}}]);
//# sourceMappingURL=29.2d17bb45.chunk.js.map