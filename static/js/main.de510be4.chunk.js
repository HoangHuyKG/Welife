(this["webpackJsonpwe-network"]=this["webpackJsonpwe-network"]||[]).push([[0],[,,,function(e,a,t){e.exports={formregister:"FormRegister_formregister__3Duiu",formregisterimg:"FormRegister_formregisterimg__2-lzc",formhead:"FormRegister_formhead__Z-H94",formunhead:"FormRegister_formunhead__3ufXN",formheadbtn:"FormRegister_formheadbtn__10UB5",or:"FormRegister_or__3EgYF",formbtnfb:"FormRegister_formbtnfb__1YjYZ",formbtngg:"FormRegister_formbtngg__GW-yy",formicon:"FormRegister_formicon__1CYVQ",forminput:"FormRegister_forminput__10Awc",input:"FormRegister_input__3C-E8",footerbtn:"FormRegister_footerbtn__2GXaB",footer_text:"FormRegister_footer_text__1Y_4X",footerbtnacsess:"FormRegister_footerbtnacsess__1pswL",times:"FormRegister_times__3pxk9",paragraph_head:"FormRegister_paragraph_head__2KDT6"}},,function(e,a,t){e.exports={info:"Infoitem_info__2yWXM",headinfo:"Infoitem_headinfo__sVUVH",infoimg:"Infoitem_infoimg__OW2xA",infotext:"Infoitem_infotext__2Sm3V",infomati0n:"Infoitem_infomati0n__2ZSEe",infonumber:"Infoitem_infonumber__22xOj",infoprice:"Infoitem_infoprice__3bBQt",info_right:"Infoitem_info_right__3UcDK",infoprices:"Infoitem_infoprices__Ns7hX",infomationprice:"Infoitem_infomationprice__1Z6kt",btnnumber:"Infoitem_btnnumber__1hLGS",btnincrease:"Infoitem_btnincrease__nKhwc",btndescrease:"Infoitem_btndescrease__3t7hP",btnbuy:"Infoitem_btnbuy__2_pcM",number:"Infoitem_number__ix6w5",times:"Infoitem_times__2-Esa"}},,,function(e,a,t){e.exports={header:"header_header__3kC3t",header_logoimg:"header_header_logoimg__2pAYK",header_nav_item:"header_header_nav_item__2MfPR",header_nav_link:"header_header_nav_link__B3rUq",header_registration:"header_header_registration__GwnQK",header_icon:"header_header_icon__1_9IY",header_login:"header_header_login__1qkwC"}},,,,,,,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(14),m=t.n(c),l=t(8),i=t.n(l),s=(t(20),t(2)),o=t(11),u=t(4),f=t(6),b=t(5),E=t.n(b),_=t(9),h=["Wesushi","Wecake","Wetea","Weshop","Westyle","Wescan","Wefix","Welotto"];var d=function(e){var a=e.i,t=e.number,c=Object(n.useState)([]),m=Object(f.a)(c,2),l=m[0],i=m[1];Object(n.useEffect)((function(){fetch("https://testapi.io/api/Heoui/https://testapi.io/api/Heoui/".concat(h[t-1])).then((function(e){return e.json()})).then((function(e){return i(e[a])}))}),[a]);var o=Object(n.useState)(1),u=Object(f.a)(o,2),b=u[0],d=u[1];return r.a.createElement("div",{className:Object(s.a)(E.a.info)},r.a.createElement("div",{className:"info_left"},r.a.createElement("h1",{className:E.a.headinfo},"CHI TI\u1ebeT S\u1ea2N PH\u1ea8M"),r.a.createElement("img",{className:E.a.infoimg,src:l.url,alt:"img"}),r.a.createElement("h1",{className:E.a.infotext},"Th\xf4ng tin s\u1ea3n ph\u1ea9m"),r.a.createElement("p",{className:E.a.infomation},"haha")),r.a.createElement("div",{className:E.a.info_right},r.a.createElement("span",{onClick:function(){document.querySelector(".containerinfo").classList.remove("open")},className:E.a.times},r.a.createElement(_.b,null)),r.a.createElement("h1",{className:E.a.headinfo},l.title),r.a.createElement("div",{className:E.a.infomationprice},r.a.createElement("h1",{className:E.a.infoprice},"Gi\xe1 b\xe1n: "),r.a.createElement("h1",{className:E.a.infoprices},l.price)),r.a.createElement("h1",{className:E.a.infonumber},"S\u1ed1 l\u01b0\u1ee3ng: "),r.a.createElement("div",{className:E.a.btnnumber},r.a.createElement("button",{onClick:function(){d(b<=0?0:b-1)},className:E.a.btndescrease},"-"),r.a.createElement("p",{className:E.a.number},b),r.a.createElement("button",{onClick:function(){d(b+1)},className:E.a.btnincrease},"+")),r.a.createElement("button",{className:E.a.btnbuy},"CH\u1eccN MUA")))},p=["Wesushi","Wecake","Wetea","Weshop","Westyle","Wescan","Wefix","Welotto"];var g=function(e){var a=e.number,t=Object(n.useState)(0),c=Object(f.a)(t,2),m=c[0],l=c[1];Object(n.useEffect)((function(){document.querySelectorAll(".item").forEach((function(e){e.onclick=function(){l(e.dataset.index)}}))}));var i=function(){document.querySelector(".containerinfo").classList.add("open")},s=Object(n.useState)([]),o=Object(f.a)(s,2),u=o[0],b=o[1];return Object(n.useEffect)((function(){fetch("https://testapi.io/api/Heoui/https://testapi.io/api/Heoui/".concat(p[a-1])).then((function(e){return e.json()})).then((function(e){return b(e)}))}),[a]),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"containerinfo"},r.a.createElement(d,{i:m,number:a})),u.map((function(e,a){return r.a.createElement("div",{className:"col",key:e.id},r.a.createElement("div",{className:"item","data-index":a},r.a.createElement("div",{className:"infoproduct"}),r.a.createElement("div",null,r.a.createElement("img",{className:"img",onClick:i,src:e.url,alt:"img"})),r.a.createElement("div",{className:"title"},r.a.createElement("h1",{className:"title"},e.title)),r.a.createElement("div",{className:"price"},r.a.createElement("h1",{className:"price"},e.price))))})))};var N=function(e){var a=e.number,t=Object(n.useState)([]),c=Object(f.a)(t,2),m=c[0],l=c[1];return Object(n.useEffect)((function(){fetch("https://testapi.io/api/Heoui/https://testapi.io/api/Heoui/Banner").then((function(e){return e.json()})).then((function(e){return l(e[a-1])}))}),[a]),r.a.createElement("div",null,r.a.createElement("div",{className:"Banner"},r.a.createElement("img",{className:"Banner",src:m.url,alt:"Banner"})))};var v=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(N,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(g,{number:a})))};var O=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(N,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(g,{number:a})))};var j=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(N,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(g,{number:a})))};var k=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(N,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(g,{number:a})))};var W=function(e){var a=e.number;return r.a.createElement("div",{className:"content"},r.a.createElement(N,{number:a}),r.a.createElement("div",{className:"container"},r.a.createElement(g,{number:a})))};var w=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"img_cs"},r.a.createElement("img",{className:"img_cs",src:"https://bosspm.ca/wp-content/uploads/2020/01/coming-soon5.png",alt:"img"})))};var x=function(e){return e.number,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"img_cs"},r.a.createElement("img",{className:"img_cs",src:"https://bosspm.ca/wp-content/uploads/2020/01/coming-soon5.png",alt:"img"})))};var y=function(e){return e.number,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"img_cs"},r.a.createElement("img",{className:"img_cs",src:"https://bosspm.ca/wp-content/uploads/2020/01/coming-soon5.png",alt:"img"})))},F=t(3),C=t.n(F),I=t(10);var S=function(){return r.a.createElement("div",{className:"formregisterparent"},r.a.createElement("div",{className:Object(s.a)(C.a.formregister)},r.a.createElement("div",{className:Object(s.a)(C.a.formregisterimg)},r.a.createElement("img",{className:Object(s.a)(C.a.formregisterimg),src:"https://www.weluck.vn/img/banner-signup.0dd5ee94.jpg",alt:"img-form"})),r.a.createElement("div",{className:Object(s.a)(C.a.formregisterimg)},r.a.createElement("h3",{className:Object(s.a)(C.a.formhead)},"\u0110\u0102NG K\xdd"),r.a.createElement("span",{onClick:function(){document.querySelector(".formregisterparent").classList.remove("open")},className:Object(s.a)(C.a.times)},r.a.createElement(_.b,null)),r.a.createElement("h4",{className:Object(s.a)(C.a.formunhead)},"\u0110\u0103ng k\xfd v\u1edbi t\xe0i kho\u1ea3n"),r.a.createElement("div",{className:Object(s.a)(C.a.formheadbtn)},r.a.createElement("button",{className:Object(s.a)(C.a.formbtnfb)},r.a.createElement(I.a,null),r.a.createElement("p",{className:Object(s.a)(C.a.formicon)},"FACEBOOK")),r.a.createElement("button",{className:Object(s.a)(C.a.formbtngg)},r.a.createElement(I.b,null),r.a.createElement("p",{className:Object(s.a)(C.a.formicon)},"GOOGLE"))),r.a.createElement("h6",{className:C.a.or},"ho\u1eb7c"),r.a.createElement("div",{className:Object(s.a)(C.a.forminput)},r.a.createElement("input",{className:Object(s.a)(C.a.input),placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),r.a.createElement("input",{className:Object(s.a)(C.a.input),placeholder:"M\u1eadt kh\u1ea9u"}),r.a.createElement("input",{className:Object(s.a)(C.a.input),placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u"}),r.a.createElement("input",{className:Object(s.a)(C.a.input),placeholder:"M\xe3 gi\u1edbi thi\u1ec7u"})),r.a.createElement("button",{className:Object(s.a)(C.a.footerbtn)},"\u0110\u0102NG K\xdd"),r.a.createElement("p",null,"B\u1eb1ng c\xe1ch ti\u1ebfp t\u1ee5c, b\u1ea1n s\u1ebd \u0111\u1ed3ng \xfd r\u1eb1ng \u0111\xe3 \u0111\u1ecdc v\xe0 hi\u1ec3u c\xe1c Ch\xednh s\xe1ch quy\u1ec1n ri\xeang t\u01b0."),r.a.createElement("h6",{className:Object(s.a)(C.a.footer_text)},"B\u1ea1n \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n ?"),r.a.createElement("button",{className:Object(s.a)(C.a.footerbtnacsess)},"\u0110\u0102NG NH\u1eacP"))))};var R=function(){return r.a.createElement("div",{className:"formloginparent"},r.a.createElement("div",{className:Object(s.a)(C.a.formregister)},r.a.createElement("div",{className:Object(s.a)(C.a.formregisterimg)},r.a.createElement("img",{className:Object(s.a)(C.a.formregisterimg),src:"https://www.weluck.vn/img/banner-signup.0dd5ee94.jpg",alt:"img-form"})),r.a.createElement("div",{className:Object(s.a)(C.a.formregisterimg)},r.a.createElement("h3",{className:Object(s.a)(C.a.formhead)},"\u0110\u0102NG NH\u1eacP"),r.a.createElement("span",{onClick:function(){document.querySelector(".formloginparent").classList.remove("open")},className:Object(s.a)(C.a.times)},r.a.createElement(_.b,null)),r.a.createElement("p",{className:Object(s.a)(C.a.paragraph_head)},"H\xe3y \u0111\u0103ng nh\u1eadp \u0111\u1ec3 s\u1eed d\u1ee5ng t\u1ea5t c\u1ea3 \u1ee9ng d\u1ee5ng c\xf3 tr\xean Welife"),r.a.createElement("h4",{className:Object(s.a)(C.a.formunhead)},"\u0110\u0103ng nh\u1eadp v\u1edbi t\xe0i kho\u1ea3n"),r.a.createElement("div",{className:Object(s.a)(C.a.formheadbtn)},r.a.createElement("button",{className:Object(s.a)(C.a.formbtnfb)},r.a.createElement(I.a,null),r.a.createElement("p",{className:Object(s.a)(C.a.formicon)},"FACEBOOK")),r.a.createElement("button",{className:Object(s.a)(C.a.formbtngg)},r.a.createElement(I.b,null),r.a.createElement("p",{className:Object(s.a)(C.a.formicon)},"GOOGLE"))),r.a.createElement("h6",{className:C.a.or},"ho\u1eb7c"),r.a.createElement("div",{className:Object(s.a)(C.a.forminput)},r.a.createElement("input",{className:Object(s.a)(C.a.input),placeholder:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),r.a.createElement("input",{className:Object(s.a)(C.a.input),placeholder:"M\u1eadt kh\u1ea9u"})),r.a.createElement("button",{className:Object(s.a)(C.a.footerbtnacsess)},"\u0110\u0102NG NH\u1eacP"),r.a.createElement("p",null,"B\u1eb1ng c\xe1ch ti\u1ebfp t\u1ee5c, b\u1ea1n s\u1ebd \u0111\u1ed3ng \xfd r\u1eb1ng \u0111\xe3 \u0111\u1ecdc v\xe0 hi\u1ec3u c\xe1c Ch\xednh s\xe1ch quy\u1ec1n ri\xeang t\u01b0."))))};var B=r.a.memo((function(){return r.a.createElement("div",null,r.a.createElement("header",{className:Object(s.a)(i.a.header,"d-flex")},r.a.createElement("div",null,r.a.createElement(o.b,{to:"/",className:Object(s.a)(i.a.header_logo)},r.a.createElement("img",{className:Object(s.a)(i.a.header_logoimg),src:"https://www.weluck.vn/img/logo-weluck-dark.07935499.png",alt:"Logo"})),r.a.createElement("div",{className:"header_btn"},r.a.createElement("button",{onClick:function(){document.querySelector(".formloginparent").classList.add("open")},className:Object(s.a)(i.a.header_login)},"\u0110\u0103ng nh\u1eadp"))),r.a.createElement("div",{className:"header_nav d-flex"},r.a.createElement("ul",{className:"header_nav_list d-flex"},["Wesushi","Wecake","Wetea","Weshop","Westyle","Wescan","Wefix","Welotto"].map((function(e,a){return r.a.createElement("li",{key:a,className:Object(s.a)(i.a.header_nav_item)},r.a.createElement(o.c,{exact:"true",to:"/".concat(e),className:Object(s.a)(i.a.header_nav_link),activeclassname:Object(s.a)(i.a.active)},e.toUpperCase()))})))),r.a.createElement("div",{className:Object(s.a)(i.a.header_icon,"d-flex")},r.a.createElement(_.a,null)),r.a.createElement("div",{className:"header_btn"},r.a.createElement("button",{onClick:function(){document.querySelector(".formregisterparent").classList.add("open")},className:Object(s.a)(i.a.header_registration)},"\u0110\u0103ng K\xfd")),r.a.createElement(S,null),r.a.createElement(R,null)),r.a.createElement("div",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",element:r.a.createElement(O,{number:"1"})}),r.a.createElement(u.a,{path:"/Wesushi",element:r.a.createElement(O,{number:"1"})}),r.a.createElement(u.a,{path:"/Wecake",element:r.a.createElement(W,{number:"2"})}),r.a.createElement(u.a,{path:"/Wetea",element:r.a.createElement(v,{number:"3"})}),r.a.createElement(u.a,{path:"/Weshop",element:r.a.createElement(y,{number:"4"})}),r.a.createElement(u.a,{path:"/Westyle",element:r.a.createElement(j,{number:"5"})}),r.a.createElement(u.a,{path:"/Wescan",element:r.a.createElement(x,{number:"6"})}),r.a.createElement(u.a,{path:"/Wefix",element:r.a.createElement(k,{number:"7"})}),r.a.createElement(u.a,{path:"/Welotto",element:r.a.createElement(w,{number:"8"})}))))}));var H=function(e){return e.number,r.a.createElement("div",{className:"App"},r.a.createElement(B,null))},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,m=a.getTTFB;t(e),n(e),r(e),c(e),m(e)}))};t(21);m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(H,null))),document.getElementById("root")),G()}],[[15,1,2]]]);
//# sourceMappingURL=main.de510be4.chunk.js.map