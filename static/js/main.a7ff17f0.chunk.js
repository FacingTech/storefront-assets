(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n.p+"static/media/rekit-react.5c11e8db.png"},108:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),i=n(59);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(108);o.a.render(r.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,n){"use strict";var a=n(13),r=Object(a.b)();t.a=r},34:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l});var a=n(14),r=n(0),c=n(8),o=n(9);function i(){var e=Object(c.e)();return{count:Object(c.f)(function(e){return e.examples.count}),counterPlusOne:Object(r.useCallback)(function(){return e({type:o.b})},[e])}}function l(e,t){switch(t.type){case o.b:return Object(a.a)({},e,{count:e.count+1});default:return e}}},35:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l});var a=n(14),r=n(0),c=n(8),o=n(9);function i(){var e=Object(c.e)();return{count:Object(c.f)(function(e){return e.examples.count}),counterMinusOne:Object(r.useCallback)(function(){return e({type:o.a})},[e])}}function l(e,t){switch(t.type){case o.a:return Object(a.a)({},e,{count:e.count-1});default:return e}}},36:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return l});var a=n(14),r=n(0),c=n(8),o=n(9);function i(){var e=Object(c.e)();return{count:Object(c.f)(function(e){return e.examples.count}),counterReset:Object(r.useCallback)(function(){return e({type:o.c})},[e])}}function l(e,t){switch(t.type){case o.c:return Object(a.a)({},e,{count:0});default:return e}}},37:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return d});var a=n(14),r=n(62),c=n.n(r),o=n(0),i=n(8),l=n(9);function u(){var e=Object(i.e)(),t=Object(i.f)(function(e){return{redditList:e.examples.redditList,fetchRedditListPending:e.examples.fetchRedditListPending,fetchRedditListError:e.examples.fetchRedditListError}},i.d),n=t.redditList,a=t.fetchRedditListPending,r=t.fetchRedditListError;return{redditList:n,fetchRedditList:Object(o.useCallback)(function(){e(function(e){return e({type:l.d}),new Promise(function(t,n){c.a.get("http://www.reddit.com/r/reactjs.json").then(function(n){e({type:l.g,data:n.data}),t(n)},function(t){e({type:l.f,data:{error:t}}),n(t)})})})},[e]),fetchRedditListPending:a,fetchRedditListError:r,dismissFetchRedditListError:Object(o.useCallback)(function(){e({type:l.e})},[e])}}function d(e,t){switch(t.type){case l.d:return Object(a.a)({},e,{fetchRedditListPending:!0,fetchRedditListError:null});case l.g:return Object(a.a)({},e,{redditList:t.data.data.children,fetchRedditListPending:!1,fetchRedditListError:null});case l.f:return Object(a.a)({},e,{fetchRedditListPending:!1,fetchRedditListError:t.data.error});case l.e:return Object(a.a)({},e,{fetchRedditListError:null});default:return e}}},40:function(e){e.exports=[{id:1,name:"\u6b66\u7530\uff12\u578b\u7cd6\u5c3f\u75c5",enName:"",cnName:"",jpName:"",tag:"",country:"",catagroy:"",image:"product-1.png",desc:"\u6b66\u7530\uff12\u578b\u7cd6\u5c3f\u75c5\u6cbb\u7597\u836f100mg",longDesc:"",friendlyUrl:"",price:"100.00",spec:"100.00",discount:"100",quantity:0},{id:2,name:"\u5e1d\u4eba\u75db\u98ce\u836f",enName:"",cnName:"",jpName:"",tag:"",country:"",catagroy:"",image:"product-2.png",desc:"\u5e1d\u4eba\u75db\u98ce\u836f\u30d5\u30a7\u30d6\u30ea\u30af",longDesc:"",friendlyUrl:"",price:"100.00",spec:"100.00",discount:"100",quantity:0},{id:3,name:"\u6b66\u7530\u5e7d\u95e8\u87ba\u6746\u83cc400\u578b",enName:"",cnName:"",jpName:"",tag:"",country:"",catagroy:"",image:"product-3.png",desc:"\u6b66\u7530\u5e7d\u95e8\u87ba\u6746\u83cc\u9664\u83cc\u30dc\u30ce\u30b5\u30c3\u30d7\u30d1\u30c3\u30af\uff08400\u578b\uff09",longDesc:"",friendlyUrl:"",price:"100.00",spec:"100.00",discount:"100",quantity:0},{id:4,name:" \u6b66\u7530\u5e7d\u95e8\u87ba\u6746\u83cc800\u578b",enName:"",cnName:"",jpName:"",tag:"",country:"",catagroy:"",image:"product-4.png",desc:" \u6b66\u7530\u5e7d\u95e8\u87ba\u6746\u83cc\u9664\u83cc\u30dc\u30ce\u30b5\u30c3\u30d7\u30d1\u30c3\u30af\uff08800\u578b\uff09",longDesc:"",friendlyUrl:"",price:"100.00",spec:"100.00",discount:"100",quantity:0},{id:5,name:"\u5fc3\u7ede\u75db\u9ad8\u8840\u538b",enName:"",cnName:"",jpName:"",tag:"",country:"",catagroy:"",image:"product-5.png",desc:"\u4e1c\u548c\u836f\u54c1\u5fc3\u7ede\u75db\u9ad8\u8840\u538b",longDesc:"",friendlyUrl:"",price:"100.00",spec:"100.00",discount:"100",quantity:0},{id:6,name:"\u62a4\u809d\u4e38",enName:"",cnName:"",jpName:"",tag:"",country:"",catagroy:"",image:"product-6.png",desc:"\u62a4\u809d\u4e38\u4fdd\u5065\u54c1",longDesc:"",friendlyUrl:"",price:"100.00",spec:"100.00",discount:"100",quantity:0},{id:7,name:"\u80a0\u80c3\u708e\u3001\u80c3\u3001\u80a0\u6e83\u75a1",enName:"",cnName:"",jpName:"",tag:"",country:"",catagroy:"",image:"product-7.png",desc:"\u80a0\u80c3\u708e\u53ca\u80c3\u5341\u4e8c\u6307\u80a0\u6e83\u75a1\u6cbb\u7597\u836f",longDesc:"",friendlyUrl:"",price:"100.00",spec:"100.00",discount:"100",quantity:0},{id:8,name:"\u9632\u98ce\u901a\u5723\u6563",enName:"",cnName:"",jpName:"",tag:"",country:"",catagroy:"",image:"product-8.png",desc:"\u9632\u98ce\u901a\u5723\u6563\uff08\u51cf\u80a5\u529f\u6548\uff09",longDesc:"",friendlyUrl:"",price:"100.00",spec:"100.00",discount:"100",quantity:0}]},58:function(e,t){},59:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),c=n(8),o=n(21),i=n(30),l=n(49),u=n(67),d=n(66),s=n(25);function m(e,t){var n=[];return e.forEach(function(e){return function e(t,a){var c;if(c=(c=/^\//.test(t.path)?t.path:"".concat(a,"/").concat(t.path)).replace(/\/+/g,"/"),t.component&&t.childRoutes){var i=m(t.childRoutes,c);n.push(r.a.createElement(o.a,{key:c,render:function(e){return r.a.createElement(t.component,e,i)},path:c}))}else t.component?n.push(r.a.createElement(o.a,{key:c,component:t.component,path:c,exact:!0})):t.childRoutes&&t.childRoutes.forEach(function(t){return e(t,c)})}(e,t)}),r.a.createElement(o.c,null,n)}Object(l.setConfig)({logLevel:"debug"}),t.a=Object(l.hot)(e)(function(){var e=m(d.a,"/");return r.a.createElement(c.a,{store:u.a},r.a.createElement(i.a,{history:s.a},e))})}).call(this,n(51)(e))},66:function(e,t,n){"use strict";var a=n(14),r=n(0),c=n.n(r);var o=n(146),i=n(141),l=n(144),u=n(143),d=n(142),s=n(138),m=n(140),p=n(136),f=n(132),g=n(139);var h=n(134),E=n(64),v=n.n(E),y=n(135),b=Object(f.a)(function(e){return{icon:{marginRight:e.spacing(2)},header:{position:"sticky",top:"0",zIndex:"10"}}});function R(){var e=b();return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.a,{className:e.header},c.a.createElement(y.a,null,c.a.createElement(v.a,{className:e.icon}),c.a.createElement(p.a,{variant:"h6",color:"inherit",noWrap:!0},"CureLife \u826f\u6108"))))}R.defaultProps={};var N=n(137),x="https://shop.facing.tech";function j(){return c.a.createElement(p.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",c.a.createElement(N.a,{color:"inherit",href:x},"CureLife \u826f\u6108")," ",(new Date).getFullYear(),".")}var k=Object(f.a)(function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}});function L(){var e=k();return c.a.createElement(c.a.Fragment,null,c.a.createElement("footer",{className:e.footer},c.a.createElement(p.a,{variant:"h6",align:"center",gutterBottom:!0},c.a.createElement("span",{role:"img","aria-label":"\u8054\u7cfb\u65b9\u5f0f"},"\ud83d\udcf1"),"\u8054\u7cfb\u65b9\u5f0f\uff1a+(86) 18616267626"),c.a.createElement(j,null)))}L.defaultProps={};var O=n(40),C=Object(f.a)(function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{cursor:"pointer",height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}});var w={path:"",childRoutes:[{path:"index-page",component:function(e){var t=C();return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null),c.a.createElement(R,null),c.a.createElement("main",null,c.a.createElement("div",{className:t.heroContent},c.a.createElement(g.a,{maxWidth:"sm"},c.a.createElement(p.a,{component:"h1",variant:"h3",align:"center",color:"textPrimary",gutterBottom:!0},"\u81f4\u656c\u751f\u547d"," ",c.a.createElement("span",{role:"img","aria-label":"Life"},"\u2764\ufe0f")," ","To Life !"),c.a.createElement(p.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"\u4e07\u7269\u4e4b\u4e2d\uff0c\u5e0c\u671b\u81f3\u7f8e\u3002"),c.a.createElement("div",{className:t.heroButtons},c.a.createElement(m.a,{container:!0,spacing:2,justify:"center"},c.a.createElement(m.a,{item:!0},c.a.createElement(o.a,{variant:"contained",color:"primary"},"\u8054\u7cfb\u6211\u4eec")),c.a.createElement(m.a,{item:!0},c.a.createElement(o.a,{variant:"outlined",color:"primary"},"\u5173\u4e8e\u6211\u4eec")))))),c.a.createElement(g.a,{className:t.cardGrid,maxWidth:"md"},c.a.createElement(m.a,{container:!0,spacing:4},O.map(function(n){return c.a.createElement(m.a,{item:!0,key:"product-"+n.id,xs:12,sm:6,md:4},c.a.createElement(i.a,{className:t.card,onClick:function(){console.log("\u70b9\u51fbCard\u67e5\u770b\u4ea7\u54c1 ".concat(n.id)),e.history.push("/product/view/".concat(n.id))}},c.a.createElement(d.a,{className:t.cardMedia,image:"/images/"+n.image,title:"Image title"}),c.a.createElement(u.a,{className:t.cardContent},c.a.createElement(p.a,{gutterBottom:!0,variant:"h5",component:"h2"},n.name),c.a.createElement(p.a,null,n.desc)),c.a.createElement(l.a,null,c.a.createElement(o.a,{size:"small",color:"primary",onClick:function(){console.log("\u70b9\u51fb\u67e5\u770b\u4ea7\u54c1 ".concat(n.id)),e.history.push("/product/view/".concat(n.id))}},"\u67e5\u770b"))))})))),c.a.createElement(L,null))},isIndex:!0}]},T=n(24);function P(){return c.a.createElement("div",{className:"examples-side-panel"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(T.a,{to:"/examples"},"Welcome")),c.a.createElement("li",null,c.a.createElement(T.a,{to:"/examples/counter"},"Counter Demo")),c.a.createElement("li",null,c.a.createElement(T.a,{to:"/examples/reddit"},"Reddit API Demo")),c.a.createElement("li",null,c.a.createElement(T.a,{to:"/"},"Back to start page"))),c.a.createElement("div",{className:"memo"},"This is a Rekit feature that contains some examples for you to quick learn how Rekit works. To remove it just delete the feature."))}var S=n(37),_=n(34),D=n(35),I=n(36);var B={path:"examples",component:function(e){var t=e.children;return c.a.createElement("div",{className:"examples-layout"},c.a.createElement(P,null),c.a.createElement("div",{className:"examples-page-container"},t))},childRoutes:[{path:"",component:function(){return c.a.createElement("div",{className:"examples-welcome-page"},c.a.createElement("a",{href:"http://github.com/supnate/rekit"},c.a.createElement("img",{src:n(105),className:"app-logo",alt:"logo"})),c.a.createElement("h1",null,"Welcome to Rekit!"),c.a.createElement("p",null,"Contratulations! You have created your Rekit React app successfully! Seeing this page means everything works well now."),c.a.createElement("p",null,"This is an example feature showing about how to layout the container, how to use Redux and React Router. If you want to remove all sample code, just delete the feature from Rekit Studio. Alternatively you can run\xa0",c.a.createElement("code",null,'"rekit remove feature examples"')," via command line under the project folder."),c.a.createElement("p",null,"To learn more about how to get started, you can visit:"," ",c.a.createElement("a",{href:"http://docs.rekit.org/app-types/rekit-react"},"Get started")))},isIndex:!0},{path:"counter",component:function(){var e=Object(_.b)(),t=e.count,n=e.counterPlusOne,a=Object(D.b)().counterMinusOne,r=Object(I.b)().counterReset;return c.a.createElement("div",{className:"examples-counter-page"},c.a.createElement("h1",null,"Counter"),c.a.createElement("p",null,"This is simple counter demo to show how Redux sync actions work."),c.a.createElement("button",{className:"btn-minus-one",onClick:a,disabled:0===t},"-"),c.a.createElement("span",null,t),c.a.createElement("button",{className:"btn-plus-one",onClick:n},"+"),c.a.createElement("button",{className:"btn-reset",onClick:r},"Reset"))}},{path:"reddit",component:function(){var e=Object(S.b)(),t=e.redditList,n=e.fetchRedditList,a=e.fetchRedditListPending,r=e.fetchRedditListError;return c.a.createElement("div",{className:"examples-reddit-list-page"},c.a.createElement("h1",null,"Reddit API Usage"),c.a.createElement("p",null,"This demo shows how to use Redux async actions to fetch data from Reddit's REST API."),c.a.createElement("button",{className:"btn-fetch-reddit",disabled:a,onClick:n},a?"Fetching...":"Fetch reactjs topics"),r&&c.a.createElement("div",{className:"fetch-list-error"},"Failed to load: ",r.toString()),t.length>0?c.a.createElement("ul",{className:"examples-reddit-list"},t.map(function(e){return c.a.createElement("li",{key:e.data.id},c.a.createElement("a",{href:e.data.url},e.data.title))})):c.a.createElement("div",{className:"no-items-tip"},"No items yet."))}}]},U=n(65),M=n.n(U);n(58);function F(){return c.a.createElement("div",{className:"product-list"},"Component content: product/List")}F.defaultProps={};var A=n(21),G=Object(f.a)(function(e){return{icon:{marginRight:e.spacing(2)},productContent:{backgroundColor:e.palette.background.paper,padding:"64px 0px 10px"},heroButtons:{marginTop:e.spacing(4)},actionButtons:{marginTop:"20px",marginBottom:"60px"},productGrid:{paddingTop:"60px",paddingBottom:"30px"},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}});function q(e){var t=G(),n=Object(A.f)().id,a=O.filter(function(e){return e.id.toString()===n});return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null),c.a.createElement(R,null),c.a.createElement("main",null,c.a.createElement("div",{className:t.productContent},c.a.createElement(g.a,{maxWidth:"sm"},c.a.createElement(p.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},c.a.createElement("span",{role:"img","aria-label":"Detail"},"\ud83d\udd0e"," "),"\u4ea7\u54c1",n,"\u7684\u8be6\u7ec6\u5185\u5bb9"))),c.a.createElement(g.a,{className:t.productGrid,maxWidth:"md"},c.a.createElement(m.a,{container:!0,spacing:4},a&&a.length>0&&c.a.createElement("div",{style:{textAlign:"center",width:"100%"}},c.a.createElement("h2",null,a[0].name),c.a.createElement("h2",null,a[0].desc),c.a.createElement("p",null,c.a.createElement("img",{src:"/images/"+a[0].image,alt:a[0].name,style:{width:"500px"}})),c.a.createElement("p",null)))),c.a.createElement("div",{className:t.actionButtons},c.a.createElement(m.a,{container:!0,spacing:2,justify:"center"},c.a.createElement(m.a,{item:!0},c.a.createElement(o.a,{variant:"contained",color:"primary",onClick:function(){console.log("\u8fd4\u56de\u9996\u9875"),e.history.push("/")}},"\u8fd4\u56de\u9996\u9875"))))),c.a.createElement(L,null))}q.defaultProps={};var W=[{path:"/",component:function(e){var t=e.children;return c.a.createElement("div",{className:"home-app"},c.a.createElement("div",{className:"page-container"},t))},childRoutes:[].concat([w,{path:"common",name:"Common",childRoutes:[]},B,{path:"product",childRoutes:[{path:"list",component:F},{path:"view/:id",component:q},{path:"edit/:id",component:q}]}],[{path:"*",name:"Page not found",component:function(){return c.a.createElement("div",{className:"common-page-not-found"},"Page not found.")}}]).filter(function(e){return e.component||e.childRoutes&&e.childRoutes.length>0})}];W.forEach(function e(t){if(t.childRoutes&&t.childRoutes.length){var n=M.a.find(t.childRoutes,function(e){return e.isIndex});if(n){var r=Object(a.a)({},n);r.path="",r.exact=!0,r.autoIndexRoute=!0,t.childRoutes.unshift(r)}t.childRoutes.forEach(e)}});t.a=W},67:function(e,t,n){"use strict";var a=n(22),r=n(61),c=n(45),o=n(25),i=n(30),l={},u=[];var d={},s=[];var m={count:0,redditList:[],fetchRedditListPending:!1,fetchRedditListError:null},p=n(34),f=n(35),g=n(36),h=n(37),E=[p.a,f.a,g.a,h.a];var v={},y=[];var b={router:Object(i.b)(o.a),home:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;return n.type,e=t,u.reduce(function(e,t){return t(e,n)},e)},common:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,n=arguments.length>1?arguments[1]:void 0;return n.type,e=t,s.reduce(function(e,t){return t(e,n)},e)},examples:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;return n.type,e=t,E.reduce(function(e,t){return t(e,n)},e)},product:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,n=arguments.length>1?arguments[1]:void 0;return n.type,e=t,y.reduce(function(e,t){return t(e,n)},e)}},R=Object(a.c)(b),N=Object(c.a)(o.a),x=[r.a,N],j=function(e){return e};var k;t.a=Object(a.e)(R,k,Object(a.d)(a.a.apply(void 0,x),j))},76:function(e,t,n){e.exports=n(111)},9:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"f",function(){return l}),n.d(t,"e",function(){return u});var a="EXAMPLES_COUNTER_PLUS_ONE",r="EXAMPLES_COUNTER_MINUS_ONE",c="EXAMPLES_COUNTER_RESET",o="EXAMPLES_FETCH_REDDIT_LIST_BEGIN",i="EXAMPLES_FETCH_REDDIT_LIST_SUCCESS",l="EXAMPLES_FETCH_REDDIT_LIST_FAILURE",u="EXAMPLES_FETCH_REDDIT_LIST_DISMISS_ERROR"}},[[76,2,1]]]);
//# sourceMappingURL=main.a7ff17f0.chunk.js.map