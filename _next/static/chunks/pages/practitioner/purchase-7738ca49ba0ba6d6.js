(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{773:function(t,e,n){var r,i="__lodash_hash_undefined__",o=/^\[object .+?Constructor\]$/,a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,s=a||c||Function("return this")(),l=Array.prototype,u=Function.prototype,p=Object.prototype,f=s["__core-js_shared__"],h=(r=/[^.]+$/.exec(f&&f.keys&&f.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",d=u.toString,_=p.hasOwnProperty,v=p.toString,y=RegExp("^"+d.call(_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),g=l.splice,x=k(s,"Map"),m=k(Object,"create");function w(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function j(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function b(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function N(t,e){for(var n,r=t.length;r--;)if((n=t[r][0])===e||n!=n&&e!=e)return r;return -1}function O(t,e){var n,r=t.__data__;return("string"==(n=typeof e)||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?r["string"==typeof e?"string":"hash"]:r.map}function k(t,e){var n,r=null==t?void 0:t[e];return!(!E(r)||h&&h in r)&&("[object Function]"==(n=E(r)?v.call(r):"")||"[object GeneratorFunction]"==n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(r)?y:o).test(function(t){if(null!=t){try{return d.call(t)}catch(e){}try{return t+""}catch(n){}}return""}(r))?r:void 0}function S(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a),a};return n.cache=new(S.Cache||b),n}function E(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}w.prototype.clear=function(){this.__data__=m?m(null):{}},w.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},w.prototype.get=function(t){var e=this.__data__;if(m){var n=e[t];return n===i?void 0:n}return _.call(e,t)?e[t]:void 0},w.prototype.has=function(t){var e=this.__data__;return m?void 0!==e[t]:_.call(e,t)},w.prototype.set=function(t,e){return this.__data__[t]=m&&void 0===e?i:e,this},j.prototype.clear=function(){this.__data__=[]},j.prototype.delete=function(t){var e=this.__data__,n=N(e,t);return!(n<0)&&(n==e.length-1?e.pop():g.call(e,n,1),!0)},j.prototype.get=function(t){var e=this.__data__,n=N(e,t);return n<0?void 0:e[n][1]},j.prototype.has=function(t){return N(this.__data__,t)>-1},j.prototype.set=function(t,e){var n=this.__data__,r=N(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},b.prototype.clear=function(){this.__data__={hash:new w,map:new(x||j),string:new w}},b.prototype.delete=function(t){return O(this,t).delete(t)},b.prototype.get=function(t){return O(this,t).get(t)},b.prototype.has=function(t){return O(this,t).has(t)},b.prototype.set=function(t,e){return O(this,t).set(t,e),this},S.Cache=b,t.exports=S},1907:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practitioner/purchase",function(){return n(9288)}])},9288:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return v},default:function(){return y}});var r=n(5893),i=n(7311),o=n(773);function a(t){return JSON.stringify(t)}function c(t){if(!t||-1===t.indexOf("-")||t.toLowerCase()!==t)return t;var e=t.split("-"),n=e[0],r=e[1];return"".concat(void 0===n?"":n,"-").concat((void 0===r?"":r).toUpperCase())}var s=o(function(t){var e,n=void 0===t?{}:t,r=n.useFallbackLocale,i=n.fallbackLocale,o=[];return"undefined"!=typeof navigator&&(o=o.concat(navigator.languages,navigator.language)),(void 0===r||r)&&o.push(void 0===i?"en-US":i),(e=o).filter(function(t,n){return t&&e.indexOf(t)===n}).map(c)},a),l=o(function(t){return s(t)[0]||null},a),u=n(7294),p=n(8344),f=n(7543);let h=t=>{let{product:e}=t,[n,i]=(0,u.useState)(),[o,a]=(0,u.useState)(),c=(0,p.H)(),[s,h]=(0,u.useState)(!1),d=(0,u.useCallback)(t=>{var n;return new Intl.NumberFormat(null!==(n=l())&&void 0!==n?n:"en-UK",{style:"currency",currency:e.price.currency,maximumFractionDigits:0,minimumFractionDigits:0}).format(t/100)},[e.price]);(0,u.useEffect)(()=>{i(d(e.price.amount)),a(d(e.price.amount/e.quantity))},[d,e]);let _=async()=>{h(!0);let{checkoutSessionUrl:t}=await c.checkout({params:{id:e.id},data:{successUrl:new URL("/practitioner",window.location.origin).href,cancelUrl:window.location.href}});window.location.href=t};return(0,r.jsx)("div",{className:"border border-gray-500 overflow-hidden shdow bg-white text-on-surface-base rounded text-center",children:(0,r.jsxs)("div",{className:"px-7 py-5 flex flex-col h-full",children:[(0,r.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl lg:text-3xl tracking-wide lg:tracking-wide font-medium",children:e.name}),(0,r.jsx)("p",{className:"mt-2 text-lg lg:text-xl",children:e.description})]}),(0,r.jsxs)("div",{className:"flex flex-col flex-1 justify-end",children:[(0,r.jsxs)("p",{className:"text-3xl mt-8",children:[o," / unit"]}),(0,r.jsxs)("p",{className:"text-3 mt-2",children:["Billed as a one-time ",n," payment"]})]})]}),(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)(f.z,{isLoading:s,onClick:_,children:"Buy now"})})]})})};var d=n(1993);let _=t=>{let{products:e}=t;return(0,r.jsx)(i.T,{hideHeader:!0,title:"Sign up",description:"Sign up to the Total Rehab app",children:(0,r.jsxs)(d.c,{children:[(0,r.jsx)("p",{className:"text-xl mb-8",children:"Purchase access codes to provide your patients with full access to all programs within the Total Rehab app."}),(0,r.jsx)("div",{className:"grid gap-6 grid-cols-1 lg:grid-cols-3",children:e.map(t=>(0,r.jsx)(h,{product:t},t.id))})]})})};var v=!0,y=_}},function(t){t.O(0,[963,895,986,774,888,179],function(){return t(t.s=1907)}),_N_E=t.O()}]);