(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},o={app:0},r={app:0},i=[];function s(t){return l.p+"js/"+({about:"about",albums:"albums"}[t]||t)+"."+{about:"092d604f",albums:"1d99a551"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1,albums:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var n="css/"+({about:"about",albums:"albums"}[t]||t)+"."+{about:"643262b2",albums:"32ead662"}[t]+".css",r=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===r))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===n||u===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],m.parentNode.removeChild(m),a(i)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){o[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t),c=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,a[1](i)}r[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0219":function(t,e,a){"use strict";var n=a("de15"),o=a.n(n);o.a},"04c5":function(t,e,a){t.exports=a.p+"img/spotify.7cd888f4.png"},"08e7":function(t,e,a){"use strict";var n=a("ea90"),o=a.n(n);o.a},"126a":function(t,e,a){t.exports=a.p+"img/iTunes.f8dde7a4.svg"},"1cc6":function(t,e,a){t.exports=a.p+"img/tidal.e52c800b.png"},"3d43":function(t,e,a){t.exports=a.p+"img/youtube.82a06c2b.png"},"51cc":function(t,e,a){t.exports=a.p+"img/potent_flask.29302e5a.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("ecee"),r=a("c074"),i=a("f2d1"),s=a("ad3d"),l=a("9f7b"),c=a.n(l),u=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navigation"),a("router-view"),a("the-footer")],1)}),p=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{id:"nav",toggleable:"lg",type:"dark",variant:"info",role:"main"}},[a("div",{staticClass:"container"},[a("b-navbar-brand",{attrs:{role:"banner","aria-labelledby":"brandName"}},[a("router-link",{attrs:{to:"/"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("Midnight Laboratory")]),a("span",{staticClass:"sr-only",attrs:{id:"brandName"}},[t._v("Midnight Laboratory (Links to Home Page)")])])],1),a("b-navbar-toggle",{attrs:{target:"nav_collapse","aria-label":"Toggle Navigation"}}),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse",role:"navigation"}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("Bio")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/albums"}},[t._v("Music")])],1)])],1)],1)])},d=[],g={name:"navigation",props:{msg:String}},f=g,b=(a("08e7"),a("2877")),h=Object(b["a"])(f,m,d,!1,null,null,null),v=h.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"the-footer"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"copyright col-lg-4 col-10"},[t._v("\n        © "+t._s(t.currentYear)+" Copyright Midnight Laboratory\n      ")]),a("div",{staticClass:"social-media col-lg-4 col-2"},[a("a",{staticClass:"social-icon",attrs:{target:"_blank",href:"https://www.facebook.com/midnightlaboratory",rel:"noopener noreferrer","aria-label":"Midnight Laboratory Facebook Profile (opens in new tab)"}},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","facebook-square"]}})],1)]),t._m(0)])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-design col-lg-4 col-12"},[t._v("\n        Site Design:\n        "),a("a",{attrs:{target:"_blank",href:"https://rachelhirshan.com/",rel:"noopener noreferrer","aria-label":"R.E.H. Designs (opens in new tab)"}},[t._v("\n          REH Designs\n        ")])])}],k={name:"theFooter",props:{msg:String},computed:{currentYear:function(){return(new Date).getFullYear()}}},C=k,x=(a("eec7"),Object(b["a"])(C,y,w,!1,null,null,null)),_=x.exports,L={name:"app",components:{Navigation:v,TheFooter:_}},T=L,S=(a("7c55"),Object(b["a"])(T,u,p,!1,null,null,null)),P=S.exports,E=a("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"home"},[n("section",{staticClass:"banner"},[n("router-link",{staticClass:"banner-link",attrs:{role:"link",to:"/albums"}},[n("img",{staticClass:"banner-img",attrs:{src:a("51cc"),alt:"Potent Flask Learn More"}}),n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[n("h1",{staticClass:"h1"},[t._v("Potent Flask")]),n("h2",{staticClass:"h2"},[t._v("Learn More")])])])])],1),n("section",{staticClass:"home-main"},[n("div",{staticClass:"container"},[t._m(0),n("h2",{staticClass:"h2"},[t._v("Potent Flask is available at the following stores/services:")]),n("store-icons-data",{attrs:{layout:"fourColumn"}})],1)])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"h1"},[a("span",{staticClass:"album-title"},[t._v("Potent Flask")]),a("span",{staticClass:"now-available"},[t._v("Now Available")])])}],j=a("c70e"),M={name:"home",components:{StoreIconsData:j["a"]}},I=M,F=(a("a932"),Object(b["a"])(I,O,A,!1,null,"0f570820",null)),N=F.exports;n["default"].use(E["a"]);var D=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/albums",name:"albums",component:function(){return a.e("albums").then(a.bind(null,"be55"))}}]}),z=a("2f62");n["default"].use(z["a"]);var B=new z["a"].Store({state:{},mutations:{},actions:{}}),H=null;H="UA-32171359-2";var K={gtagId:H},R=a("2bdd"),U=a.n(R);o["c"].add(r["a"]),o["c"].add(i["a"]),o["c"].add(i["b"]),n["default"].component("font-awesome-icon",s["a"]),n["default"].use(c.a),K.gtagId&&n["default"].use(U.a,{config:{id:K.gtagId}},D),n["default"].config.productionTip=!1,new n["default"]({router:D,store:B,render:function(t){return t(P)}}).$mount("#app")},"5c48":function(t,e,a){},"6e25":function(t,e,a){t.exports=a.p+"img/deezer.d4dfec6e.svg"},7584:function(t,e,a){var n={"./amazon.png":"d6bc","./apple-music.svg":"aeae","./deezer.svg":"6e25","./google-play.png":"c4cb","./iHeartRadio.png":"e70c","./iTunes.svg":"126a","./kkbox.png":"ce03","./napster.png":"ea906","./spotify.png":"04c5","./tidal.png":"1cc6","./youtube.png":"3d43"};function o(t){var e=r(t);return a(e)}function r(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id="7584"},"7a52":function(t,e,a){},"7c55":function(t,e,a){"use strict";var n=a("5c48"),o=a.n(n);o.a},8606:function(t,e,a){},a932:function(t,e,a){"use strict";var n=a("8606"),o=a.n(n);o.a},aeae:function(t,e,a){t.exports=a.p+"img/apple-music.6900bd20.svg"},b4d5:function(t,e,a){},b9b8:function(t,e,a){"use strict";var n=a("b4d5"),o=a.n(n);o.a},c4cb:function(t,e,a){t.exports=a.p+"img/google-play.346b1e3c.png"},c70e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row store-logo-section"},t._l(t.stores,(function(e,n){return a("div",{key:n,staticClass:"store-logo-group",class:[t.layoutClass]},[a("store-icons",{attrs:{link:e.link,ariaLabel:e.ariaLabel,image:t.getStoreIconsImageUrl(e.image),altText:e.altText}})],1)})),0)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"store-logo",attrs:{target:"_blank",href:t.link,"aria-label":t.ariaLabel,rel:"noopener noreferrer"}},[a("img",{staticClass:"store-logo-img",attrs:{src:t.image,alt:t.altText}})])},i=[],s={name:"StoreIcons",props:{link:String,ariaLabel:String,image:String,altText:String}},l=s,c=(a("b9b8"),a("2877")),u=Object(c["a"])(l,r,i,!1,null,null,null),p=u.exports,m={name:"StoreIconsData",components:{StoreIcons:p},props:{layout:String},data:function(){return{stores:[{link:"https://open.spotify.com/album/0uhbZw88pjQHESVgJPsMie",ariaLabel:"Play on Spotify (opens in new tab)",image:"spotify.png",altText:"Spotify Logo"},{link:"https://itunes.apple.com/us/album/potent-flask/id1265928375?uo=4&amp;app=music&amp;at=1001lry3&amp;ct=dashboard",ariaLabel:"Purchase on Apple Music (opens in new tab)",image:"apple-music.svg",altText:"Apple Music Logo"},{link:"https://www.amazon.com/Potent-Flask-Midnight-Laboratory/dp/B074F9GMZC?SubscriptionId=AKIAJDS6FAHQ4U6KQBSQ&amp;tag=distrokid06-20&amp;linkCode=xm2&amp;camp=2025&amp;creative=165953&amp;creativeASIN=B074F9GMZC/?tag=distrokid06-20",ariaLabel:"Purchase on Amazon (opens in new tab)",image:"amazon.png",altText:"Amazon Logo"},{link:"https://itunes.apple.com/us/album/potent-flask/id1265928375?uo=4&amp;app=itunes&amp;at=1001lry3&amp;ct=dashboard",ariaLabel:"Purchase on I Tunes (opens in new tab)",image:"iTunes.svg",altText:"iTunes Logo"},{link:"https://www.youtube.com/watch?v=BhUujJnAVQw&list=OLAK5uy_luY81C2AxRV62k94ZmdtKEKFBe2nZvX8Q",ariaLabel:"Purchase on You Tube (opens in new tab)",image:"youtube.png",altText:"YouTube Logo"},{link:"https://us.napster.com/artist/midnight-laboratory/album/potent-flask",ariaLabel:"Play on Napster (opens in new tab)",image:"napster.png",altText:"Napster Logo"},{link:"https://www.iheart.com/artist/id-32799083/albums/id-69372558",ariaLabel:"Play on I Heart Radio (opens in new tab)",image:"iHeartRadio.png",altText:"iHeart Radio Logo"},{link:"https://www.deezer.com/album/45555341",ariaLabel:"Play on Deezer (opens in new tab)",image:"deezer.svg",altText:"Deezer Logo"},{link:"https://www.kkbox.com/hk/tc/charts/artist_song_charts-krBVUqisAuP7Rp0F0sQ7Q08K.html",ariaLabel:"Play on K K Box (opens in new tab)",image:"kkbox.png",altText:"KKBox Logo"},{link:"http://www.tidal.com/album/76914342",ariaLabel:"Play on Tidal (opens in new tab)",image:"tidal.png",altText:"Tidal Logo"}],sixColumn:"six-col col-lg-2 col-md-3 col-sm-4",fourColumn:"four-col col-lg-3 col-md-4 col-sm-6",threeColumn:"three-col col-md-4 col-sm-6",oneColumn:"one-col col-12"}},computed:{layoutClass:function(){return"fourColumn"===this.layout?this.fourColumn:"threeColumn"===this.layout?this.threeColumn:"sixColumn"===this.layout?this.sixColumn:"oneColumn"===this.layout?this.oneColumn:this.fourColumn}},methods:{getStoreIconsImageUrl:function(t){return a("7584")("./"+t)}}},d=m,g=(a("0219"),Object(c["a"])(d,n,o,!1,null,null,null));e["a"]=g.exports},ce03:function(t,e,a){t.exports=a.p+"img/kkbox.608a86d3.png"},d6bc:function(t,e,a){t.exports=a.p+"img/amazon.da1dafc3.png"},de15:function(t,e,a){},e70c:function(t,e,a){t.exports=a.p+"img/iHeartRadio.4325ae5f.png"},ea90:function(t,e,a){},ea906:function(t,e,a){t.exports=a.p+"img/napster.2fda1f38.png"},eec7:function(t,e,a){"use strict";var n=a("7a52"),o=a.n(n);o.a}});
//# sourceMappingURL=app.e3f5cdae.js.map