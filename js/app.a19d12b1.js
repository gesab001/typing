(function(e){function t(t){for(var r,i,a=t[0],s=t[1],c=t[2],p=0,f=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},l=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/typing/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=s;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"3c73":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r,o=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Typing Game",score:"Score",progress:"Progress",letters:"letters"}})],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello",attrs:{id:"canvas"},on:{keypress:e.popBallon}},[n("h1",[e._v(e._s(e.msg))]),n("input",{attrs:{id:"word"}}),n("button",{on:{click:e.start}},[e._v("start game")])])},s=[],c=(n("d3b7"),n("ac1f"),n("25f0"),n("1276"),[]),u=[],p=1100;function f(){var e=document.createElement("div"),t=document.getElementById("word").value;0==u.length&&(d(),u=t.toUpperCase().split("")),e.innerHTML=u[0],u.shift();var n=Math.floor(90*Math.random());e.style.height="50px",e.style.width="50px",e.style.backgroundColor="red",e.style.borderRadius="50%",e.style.display="inline-block",e.style.position="fixed",e.style.bottom="0%",e.style.left=n.toString()+"%",e.style.textAlign="center",e.style.lineHeight="50px",e.style.fontWeight="bolder",e.style.fontSize="30px",c.push({item:e,counter:0})}function d(){p-=100,p<100&&(p=100)}function y(){var e=c[0];document.body.appendChild(e.item);var t=e.counter+1;e.counter=t;var n=t,r=n.toString()+"%",o=r;e.item.style.bottom=o}function v(){c=[],clearInterval(r),f(),r=setInterval(y,p)}function g(e){e.key.toUpperCase()==c[0].item.innerHTML&&(c[0].item.style.display="none",v())}var h={name:"HelloWorld",props:{msg:String,score:String,progress:String,letters:String},methods:{start:function(){v()},popBallon:function(e){g(e)}}},m=h,b=(n("e69a"),n("2877")),w=Object(b["a"])(m,a,s,!1,null,"5c814a22",null),x=w.exports,O={name:"App",components:{HelloWorld:x}},S=O,_=(n("034f"),Object(b["a"])(S,l,i,!1,null,null,null)),j=_.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,n){},e69a:function(e,t,n){"use strict";var r=n("3c73"),o=n.n(r);o.a}});
//# sourceMappingURL=app.a19d12b1.js.map