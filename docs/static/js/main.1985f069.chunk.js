(this["webpackJsonptdd-app"]=this["webpackJsonptdd-app"]||[]).push([[0],{175:function(e,a,t){e.exports=t(338)},338:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),o=t(115),i=t(41),s=(t(180),t(25)),u=t(91),m=t(344),d=t(341),p=t(340),f=t(343),h=t(62),E=t(32),g=t(342),y=t(50),b=m.a.Item,k=[{key:"id",dataIndex:"id",title:"ID"},{key:"name",dataIndex:"name",title:"Name",sorter:!0},{key:"username",dataIndex:"username",title:"Username",sorter:!0},{key:"email",dataIndex:"email",title:"Email",sorter:!0}],v=function(e){var a=e.list,t=e.loading,n=e.handleTableChange,l=e.handleSubmitFilters;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{style:{marginBottom:"48px"}},r.a.createElement(C,{onSubmit:l,loading:t})),r.a.createElement(d.a,null,r.a.createElement(p.a,{rowKey:"id",columns:k,dataSource:a,onChange:n,pagination:{defaultCurrent:1,defaultPageSize:5,total:10,showSizeChanger:!0,pageSizeOptions:["5","10"]},expandedRowRender:x,loading:t})))},x=function(e){return r.a.createElement(m.a,{title:"User details",column:3},r.a.createElement(b,{label:"Address",span:3},"".concat(e.address.street," ").concat(e.address.suite," ").concat(e.address.city," ").concat(e.address.zipcode)),r.a.createElement(b,{label:"Geo"},"".concat(e.address.geo.lat," / ").concat(e.address.geo.lng)),r.a.createElement(b,{label:"Phone"},e.phone),r.a.createElement(b,{label:"Website"},e.website),r.a.createElement(b,{label:"Company name"},e.company.name),r.a.createElement(b,{label:"Company catch phrase",span:2},e.company.catchPhrase),r.a.createElement(b,{label:"Company bs"},r.a.createElement(w,{bs:e.company.bs})))},S=["geekblue","green","volcano","yellow"],w=function(e){var a=e.bs;return r.a.createElement("div",null,a.split(" ").map((function(e,a){return r.a.createElement(f.a,{color:S[Math.floor(Math.random()*S.length)],key:a},e)})))},j={username:"",email:""},C=function(e){var a=e.onSubmit,t=e.loading,n=Object(u.b)({defaultValues:j}),l=n.control,c=n.handleSubmit,o=n.reset;return r.a.createElement("form",{onSubmit:c(a)},r.a.createElement(h.a,{justify:"space-between",type:"flex",gutter:[0,16]},r.a.createElement(E.a,{xs:24,lg:9},r.a.createElement(u.a,{name:"username",placeholder:"Username",as:g.a,control:l,allowClear:!0,size:"large"})),r.a.createElement(E.a,{xs:24,lg:9},r.a.createElement(u.a,{name:"email",placeholder:"Email",as:g.a,control:l,allowClear:!0,size:"large"})),r.a.createElement(E.a,{xs:24,lg:4,style:{minWidth:"180px"}},r.a.createElement(h.a,{justify:"end",type:"flex",gutter:[16,0]},r.a.createElement(E.a,null,r.a.createElement(y.a,{size:"large",type:"primary",onClick:c(a),disabled:t},"Search")),r.a.createElement(E.a,null,r.a.createElement(y.a,{size:"large",type:"secondary",onClick:function(e){a({},e),o(j)},disabled:t},"Reset"))))))},z=t(339),O=t(121),I=z.a.Header,_=z.a.Content,A=z.a.Footer,B=[{key:"/authors",text:"Authors"},{key:"/books",text:"Books"}],F=function(e){var a=e.children,t=Object(i.f)(),n=function(e){var a;return(null===(a=B.find((function(a){return a.key===e})))||void 0===a?void 0:a.key)||B[0].key}(t.location.pathname);return r.a.createElement(z.a,{className:"layout"},r.a.createElement(I,null,r.a.createElement(O.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"},defaultSelectedKeys:[n],selectedKeys:[n],onClick:function(e){var a=e.key;t.push(a)}},B.map((function(e){var a=e.key,t=e.text;return r.a.createElement(O.a.Item,{key:a,className:"e2e-menu-item"},t)})))),r.a.createElement(_,null,r.a.createElement("div",{style:{padding:"48px"},className:"e2e-container"},a)),r.a.createElement(A,null,"Ant Design \xa92018 Created by Ant UED"))},N=t(17),U=t.n(N),W=t(27),D=t(168),K=t(169),P={ascend:"asc",descend:"desc"},R=function(e,a,t){var n,l,c=a.filters,o=a.pagination,i=a.sorter,u=r.a.useState(null),m=Object(s.a)(u,2),d=m[0],p=m[1],f=r.a.useState(!1),h=Object(s.a)(f,2),E=h[0],g=h[1],y=(n=i).order?{_order:P[n.order],_sort:n.field}:{},b={_page:(l=o).current,_limit:l.pageSize},k="https://jsonplaceholder.typicode.com/".concat(e).concat(function(e,a){return Object(K.map)(e,(function(e,t){return"".concat(t).concat(a[t]||"=").concat(e)})).join("&")}(Object(D.a)({},c,{},y,{},b),t));return r.a.useEffect((function(){g(!0),function(){var e=Object(W.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(k).then((function(e){return e.json()})).then((function(e){p(e)})).finally((function(){g(!1)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[k]),{data:d,loading:E}},H={username:"_like=",email:"_like="},J=function(){var e=r.a.useState({}),a=Object(s.a)(e,2),t=a[0],n=a[1],l=r.a.useState({current:1,pageSize:5}),c=Object(s.a)(l,2),o=c[0],i=c[1],u=r.a.useState({}),m=Object(s.a)(u,2),d=m[0],p=m[1],f=R("users?",{filters:t,pagination:o,sorter:d},H),h=f.data,E=void 0===h?[]:h,g=f.loading;return r.a.createElement(F,null,r.a.createElement(v,{list:E,loading:g,handleTableChange:function(e,a,t){i(e),p(t),n(a)},handleSubmitFilters:function(e,a){n(e)}}))};var M=function(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[175,1,2]]]);
//# sourceMappingURL=main.1985f069.chunk.js.map