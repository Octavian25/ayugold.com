(this.webpackJsonpayu=this.webpackJsonpayu||[]).push([[111],{1059:function(a,e,t){"use strict";t.r(e);var o=t(39),n=t(40),r=t(42),l=t(41),i=t(0),s=t.n(i),m=t(88),c=t.n(m),d=t(19),u=t(2),p=t(43),b=t.n(p),g=t(47),h=t(350),k=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(99)]).then(t.bind(null,438))})),f=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(100)]).then(t.bind(null,439))})),y=Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(3),t.e(64)]).then(t.bind(null,998))})),v=["totalTransfer","alatBayarBarang","totalBrutoCiok","totalCiok","ciokTemp","TotalTunai","alatBayarTunai","transferTemp","alatBayarTrf","cashTemp"],B=function(a){Object(r.a)(t,a);var e=Object(l.a)(t);function t(a){var n;return Object(o.a)(this,t),(n=e.call(this,a)).state={tampungCiok:[],tampungRongsok:[]},n}return Object(n.a)(t,[{key:"handleSubmitCiok",value:function(a){var e={kodeBarang:a.kodeBarang.split("|")[0],netto:a.netto,bruto:a.bruto,kadarTransaksi:a.kadarTransaksi},t=JSON.parse(localStorage.getItem("ciokTemp"))||[];t.push(e),localStorage.setItem("ciokTemp",JSON.stringify(t));var o=JSON.parse(localStorage.getItem("alatBayarBarang"))||[];o.push(e),localStorage.setItem("alatBayarBarang",JSON.stringify(o)),this.props.dispatch(Object(g.d)()),b.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500})}},{key:"handleSubmitRongsok",value:function(a){var e={kodeBarang:a.kodeBarang.split("|")[0],netto:a.netto,bruto:a.bruto,kadarTransaksi:a.kadarTransaksi},t=JSON.parse(localStorage.getItem("rongsokTemp"))||[];t.push(e),localStorage.setItem("rongsokTemp",JSON.stringify(t));var o=JSON.parse(localStorage.getItem("alatBayarBarang"))||[];o.push(e),localStorage.setItem("alatBayarBarang",JSON.stringify(o)),this.props.dispatch(Object(g.e)()),b.a.fire({position:"top-end",icon:"success",text:"Data Berhasil Ditambahkan!",showConfirmButton:!1,timer:1500})}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(g.d)()),this.props.dispatch(Object(g.e)())}},{key:"render",value:function(){var a=this;return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"col-lg-12 col-d-12"},s.a.createElement("ol",{className:"breadcrumb mb-2"},s.a.createElement(u.b,{to:"/ayugold.com/KlasifikasiSupplier"},s.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return Object(h.b)(v)}},s.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," ","Back"))),s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement(y,{totalBrutoCiok:this.props.totalBrutoCiok,totalBrutoRongsok:this.props.totalBrutoROngsok})))),s.a.createElement("div",{id:"ciokModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog modal-lg"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},s.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Ciok"),s.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),s.a.createElement("div",{className:"modal-body"},s.a.createElement(i.Suspense,{fallback:s.a.createElement("div",null,s.a.createElement(c.a,{width:760,height:421}))},s.a.createElement(k,{data:this.props.tampungCiok,onSubmit:function(e){return a.handleSubmitCiok(e)}}))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close"))))),s.a.createElement("div",{id:"rongsokModal",className:"modal fade",tabIndex:"-1",role:"dialog","aria-labelledby":"primary-header-modalLabel","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog modal-lg"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header modal-colored-header bg-primary"},s.a.createElement("h4",{className:"modal-title",id:"primary-header-modalLabel"},"Tambah Data Rongsok"),s.a.createElement("button",{id:"dismiss_modal",name:"dismiss_modal",type:"button",className:"close","data-dismiss":"modal","aria-hidden":"true"},"\xd7")),s.a.createElement("div",{className:"modal-body"},s.a.createElement(i.Suspense,{fallback:s.a.createElement("div",null,s.a.createElement(c.a,{width:760,height:420}))},s.a.createElement(f,{onSubmit:function(e){return a.handleSubmitRongsok(e)},data:this.props.tampungRongsok}))),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-light","data-dismiss":"modal"},"Close"))))))}}]),t}(i.Component);e.default=Object(d.b)((function(a){return{tampungCiok:a.provinsi.tampungCiok,tampungRongsok:a.provinsi.tampungRongsok,totalBrutoCiok:a.provinsi.totalBrutoCiok,totalBrutoRongsok:a.provinsi.totalBrutoRongsok}}),null)(B)},350:function(a,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return l}));var o=t(43),n=t.n(o),r=function(a){a.forEach((function(a){localStorage.removeItem(a)}))},l=function(a,e,t,o){n.a.fire({title:"Anda Yakin ?",text:"Anda Akan Menghapus Data Ini ?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(r){if(r.isConfirmed){var l=JSON.parse(localStorage.getItem(a))||[];l.splice(e,1),localStorage.setItem(a,JSON.stringify(l)),n.a.fire({text:"Berhasil",timer:2e3,showConfirmButton:!1,position:"top-right",icon:"success"}).then((function(){return t(o)}))}}))}}}]);
//# sourceMappingURL=111.1a8a38ac.chunk.js.map