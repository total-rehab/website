(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return i(5812)}])},5812:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return I}});var s=i(5893);i(7595),i(454);let n="undefined"==typeof window||"Deno"in window;function r(){}function a(t,e,i){return v(t)?"function"==typeof e?{...i,queryKey:t,queryFn:e}:{...e,queryKey:t}:t}function o(t,e,i){return v(t)?[{...e,queryKey:t},i]:[t||{},e]}function u(t,e){let{type:i="all",exact:s,fetchStatus:n,predicate:r,queryKey:a,stale:o}=t;if(v(a)){if(s){if(e.queryHash!==h(a,e.options))return!1}else{if(!d(e.queryKey,a))return!1}}if("all"!==i){let u=e.isActive();if("active"===i&&!u||"inactive"===i&&u)return!1}return("boolean"!=typeof o||e.isStale()===o)&&(void 0===n||n===e.state.fetchStatus)&&(!r||!!r(e))}function l(t,e){let{exact:i,fetching:s,predicate:n,mutationKey:r}=t;if(v(r)){if(!e.options.mutationKey)return!1;if(i){if(c(e.options.mutationKey)!==c(r))return!1}else{if(!d(e.options.mutationKey,r))return!1}}return("boolean"!=typeof s||"loading"===e.state.status===s)&&(!n||!!n(e))}function h(t,e){let i=(null==e?void 0:e.queryKeyHashFn)||c;return i(t)}function c(t){return JSON.stringify(t,(t,e)=>p(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function d(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!d(t[i],e[i]))}function f(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function p(t){if(!y(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(y(i)&&i.hasOwnProperty("isPrototypeOf"))}function y(t){return"[object Object]"===Object.prototype.toString.call(t)}function v(t){return Array.isArray(t)}function m(t){return new Promise(e=>{setTimeout(e,t)})}function b(t){m(0).then(t)}let g=console,C=function(){let t=[],e=0,i=t=>{t()},s=t=>{t()},n=t=>{let i;e++;try{i=t()}finally{--e||o()}return i},r=s=>{e?t.push(s):b(()=>{i(s)})},a=t=>(...e)=>{r(()=>{t(...e)})},o=()=>{let e=t;t=[],e.length&&b(()=>{s(()=>{e.forEach(t=>{i(t)})})})},u=t=>{i=t},l=t=>{s=t};return{batch:n,batchCalls:a,schedule:r,setNotifyFunction:u,setBatchNotifyFunction:l}}();class O{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.push(t),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(e=>e!==t),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}let w=new class extends O{constructor(){super(),this.setup=t=>{if(!n&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),()=>{window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.focused=t,t&&this.onFocus()}onFocus(){this.listeners.forEach(t=>{t()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},q=new class extends O{constructor(){super(),this.setup=t=>{if(!n&&window.addEventListener){let e=()=>t();return window.addEventListener("online",e,!1),window.addEventListener("offline",e,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.cleanup)||t.call(this),this.cleanup=void 0}}setEventListener(t){var e;this.setup=t,null==(e=this.cleanup)||e.call(this),this.cleanup=t(t=>{"boolean"==typeof t?this.setOnline(t):this.onOnline()})}setOnline(t){this.online=t,t&&this.onOnline()}onOnline(){this.listeners.forEach(t=>{t()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};function P(t){return Math.min(1e3*2**t,3e4)}function S(t){return(null!=t?t:"online")!=="online"||q.isOnline()}class F{constructor(t){this.revert=null==t?void 0:t.revert,this.silent=null==t?void 0:t.silent}}function D(t){return t instanceof F}function E(t){let e,i,s,n=!1,r=0,a=!1,o=new Promise((t,e)=>{i=t,s=e}),u=e=>{a||(f(new F(e)),null==t.abort||t.abort())},l=()=>{n=!0},h=()=>{n=!1},c=()=>!w.isFocused()||"always"!==t.networkMode&&!q.isOnline(),d=s=>{a||(a=!0,null==t.onSuccess||t.onSuccess(s),null==e||e(),i(s))},f=i=>{a||(a=!0,null==t.onError||t.onError(i),null==e||e(),s(i))},p=()=>new Promise(i=>{e=t=>{let e=a||!c();return e&&i(t),e},null==t.onPause||t.onPause()}).then(()=>{e=void 0,a||null==t.onContinue||t.onContinue()}),y=()=>{let e;if(!a){try{e=t.fn()}catch(i){e=Promise.reject(i)}Promise.resolve(e).then(d).catch(e=>{var i,s;if(a)return;let o=null!=(i=t.retry)?i:3,u=null!=(s=t.retryDelay)?s:P,l="function"==typeof u?u(r,e):u,h=!0===o||"number"==typeof o&&r<o||"function"==typeof o&&o(r,e);if(n||!h){f(e);return}r++,null==t.onFail||t.onFail(r,e),m(l).then(()=>{if(c())return p()}).then(()=>{n?f(e):y()})})}};return S(t.networkMode)?y():p().then(y),{promise:o,cancel:u,continue:()=>{let t=null==e?void 0:e();return t?o:Promise.resolve()},cancelRetry:l,continueRetry:h}}class A{destroy(){this.clearGcTimeout()}scheduleGc(){var t;this.clearGcTimeout(),"number"==typeof(t=this.cacheTime)&&t>=0&&t!==1/0&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:n?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class M extends A{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||g,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,s=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=s?s:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(t,e){var i,s;let n=(i=this.state.data,null!=(s=this.options).isDataEqual&&s.isDataEqual(i,t)?i:"function"==typeof s.structuralSharing?s.structuralSharing(i,t):!1!==s.structuralSharing?function t(e,i){if(e===i)return e;let s=f(e)&&f(i);if(s||p(e)&&p(i)){let n=s?e.length:Object.keys(e).length,r=s?i:Object.keys(i),a=r.length,o=s?[]:{},u=0;for(let l=0;l<a;l++){let h=s?l:r[l];o[h]=t(e[h],i[h]),o[h]===e[h]&&u++}return n===a&&u===n?e:o}return i}(i,t):t);return this.dispatch({data:n,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),n}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;let i=this.promise;return null==(e=this.retryer)||e.cancel(t),i?i.then(r).catch(r):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Math.max(this.state.dataUpdatedAt+(t||0)-Date.now(),0)}onFocus(){var t;let e=this.observers.find(t=>t.shouldFetchOnWindowFocus());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}onOnline(){var t;let e=this.observers.find(t=>t.shouldFetchOnReconnect());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}addObserver(t){-1===this.observers.indexOf(t)&&(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){-1!==this.observers.indexOf(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var i,s,n,r;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=e&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(n=this.retryer)||n.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){let a=this.observers.find(t=>t.options.queryFn);a&&this.setOptions(a.options)}Array.isArray(this.options.queryKey);let o=function(){if("function"==typeof AbortController)return new AbortController}(),u={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};l(u);let h=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(u)):Promise.reject("Missing queryFn"),c={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:h};l(c),null==(i=this.options.behavior)||i.onFetch(c),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(s=c.fetchOptions)?void 0:s.meta))&&this.dispatch({type:"fetch",meta:null==(r=c.fetchOptions)?void 0:r.meta});let d=t=>{if(D(t)&&t.silent||this.dispatch({type:"error",error:t}),!D(t)){var e,i,s,n;null==(e=(i=this.cache.config).onError)||e.call(i,t,this),null==(s=(n=this.cache.config).onSettled)||s.call(n,this.state.data,t,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=E({fn:c.fetchFn,abort:null==o?void 0:o.abort.bind(o),onSuccess:t=>{var e,i,s,n;if(void 0===t){d(Error("undefined"));return}this.setData(t),null==(e=(i=this.cache.config).onSuccess)||e.call(i,t,this),null==(s=(n=this.cache.config).onSettled)||s.call(n,t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:d,onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){this.state=(e=>{var i,s;switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(i=t.meta)?i:null,fetchStatus:S(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!=(s=t.dataUpdatedAt)?s:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let n=t.error;if(D(n)&&n.revert&&this.revertState)return{...this.revertState};return{...e,error:n,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:n,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),C.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}class x extends O{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,i){var s;let n=e.queryKey,r=null!=(s=e.queryHash)?s:h(n,e),a=this.get(r);return a||(a=new M({cache:this,logger:t.getLogger(),queryKey:n,queryHash:r,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(n)}),this.add(a)),a}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){let e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter(e=>e!==t),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){C.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){let[i]=o(t,e);return void 0===i.exact&&(i.exact=!0),this.queries.find(t=>u(i,t))}findAll(t,e){let[i]=o(t,e);return Object.keys(i).length>0?this.queries.filter(t=>u(i,t)):this.queries}notify(t){C.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){C.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){C.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class Q extends A{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||g,this.observers=[],this.state=t.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0},this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){-1===this.observers.indexOf(t)&&(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return null!=(t=null==(e=this.retryer)?void 0:e.continue())?t:this.execute()}async execute(){var t,e,i,s,n,r,a,o,u,l,h,c,d,f,p,y,v,m,b,g;let C="loading"===this.state.status;try{if(!C){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(u=(l=this.mutationCache.config).onMutate)?void 0:u.call(l,this.state.variables,this));let O=await (null==(h=(c=this.options).onMutate)?void 0:h.call(c,this.state.variables));O!==this.state.context&&this.dispatch({type:"loading",context:O,variables:this.state.variables})}let w=await (()=>{var t;return this.retryer=E({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(t=(e=this.mutationCache.config).onSuccess)?void 0:t.call(e,w,this.state.variables,this.state.context,this)),await (null==(i=(s=this.options).onSuccess)?void 0:i.call(s,w,this.state.variables,this.state.context)),await (null==(n=(r=this.mutationCache.config).onSettled)?void 0:n.call(r,w,null,this.state.variables,this.state.context,this)),await (null==(a=(o=this.options).onSettled)?void 0:a.call(o,w,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:w}),w}catch(q){try{throw await (null==(d=(f=this.mutationCache.config).onError)?void 0:d.call(f,q,this.state.variables,this.state.context,this)),await (null==(p=(y=this.options).onError)?void 0:p.call(y,q,this.state.variables,this.state.context)),await (null==(v=(m=this.mutationCache.config).onSettled)?void 0:v.call(m,void 0,q,this.state.variables,this.state.context,this)),await (null==(b=(g=this.options).onSettled)?void 0:b.call(g,void 0,q,this.state.variables,this.state.context)),q}finally{this.dispatch({type:"error",error:q})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!S(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),C.batch(()=>{this.observers.forEach(e=>{e.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}class K extends O{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,i){let s=new Q({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:i,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0});return this.add(s),s}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){C.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return void 0===t.exact&&(t.exact=!0),this.mutations.find(e=>l(t,e))}findAll(t){return this.mutations.filter(e=>l(t,e))}notify(t){C.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){var t;return this.resuming=(null!=(t=this.resuming)?t:Promise.resolve()).then(()=>{let t=this.mutations.filter(t=>t.state.isPaused);return C.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(r)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function R(t,e){return null==t.getNextPageParam?void 0:t.getNextPageParam(e[e.length-1],e)}var T=i(7294);let U=T.createContext(void 0),L=T.createContext(!1),j=({client:t,children:e,context:i,contextSharing:s=!1})=>{T.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]);let n=i||(s&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=U),window.ReactQueryClientContext):U);return T.createElement(L.Provider,{value:!i&&s},T.createElement(n.Provider,{value:t},e))},k=new class{constructor(t={}){this.queryCache=t.queryCache||new x,this.mutationCache=t.mutationCache||new K,this.logger=t.logger||g,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=w.subscribe(()=>{w.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=q.subscribe(()=>{q.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,e;this.mountCount--,0===this.mountCount&&(null==(t=this.unsubscribeFocus)||t.call(this),this.unsubscribeFocus=void 0,null==(e=this.unsubscribeOnline)||e.call(this),this.unsubscribeOnline=void 0)}isFetching(t,e){let[i]=o(t,e);return i.fetchStatus="fetching",this.queryCache.findAll(i).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state.data}ensureQueryData(t,e,i){let s=a(t,e,i),n=this.getQueryData(s.queryKey);return n?Promise.resolve(n):this.fetchQuery(s)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>{let i=e.data;return[t,i]})}setQueryData(t,e,i){let s=this.queryCache.find(t),n=null==s?void 0:s.state.data,r="function"==typeof e?e(n):e;if(void 0===r)return;let o=a(t),u=this.defaultQueryOptions(o);return this.queryCache.build(this,u).setData(r,{...i,manual:!0})}setQueriesData(t,e,i){return C.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state}removeQueries(t,e){let[i]=o(t,e),s=this.queryCache;C.batch(()=>{s.findAll(i).forEach(t=>{s.remove(t)})})}resetQueries(t,e,i){let[s,n]=o(t,e,i),r=this.queryCache,a={type:"active",...s};return C.batch(()=>(r.findAll(s).forEach(t=>{t.reset()}),this.refetchQueries(a,n)))}cancelQueries(t,e,i){let[s,n={}]=o(t,e,i);void 0===n.revert&&(n.revert=!0);let a=C.batch(()=>this.queryCache.findAll(s).map(t=>t.cancel(n)));return Promise.all(a).then(r).catch(r)}invalidateQueries(t,e,i){let[s,n]=o(t,e,i);return C.batch(()=>{var t,e;if(this.queryCache.findAll(s).forEach(t=>{t.invalidate()}),"none"===s.refetchType)return Promise.resolve();let i={...s,type:null!=(t=null!=(e=s.refetchType)?e:s.type)?t:"active"};return this.refetchQueries(i,n)})}refetchQueries(t,e,i){let[s,n]=o(t,e,i),a=C.batch(()=>this.queryCache.findAll(s).filter(t=>!t.isDisabled()).map(t=>{var e;return t.fetch(void 0,{...n,cancelRefetch:null==(e=null==n?void 0:n.cancelRefetch)||e,meta:{refetchPage:s.refetchPage}})})),u=Promise.all(a).then(r);return null!=n&&n.throwOnError||(u=u.catch(r)),u}fetchQuery(t,e,i){let s=a(t,e,i),n=this.defaultQueryOptions(s);void 0===n.retry&&(n.retry=!1);let r=this.queryCache.build(this,n);return r.isStaleByTime(n.staleTime)?r.fetch(n):Promise.resolve(r.state.data)}prefetchQuery(t,e,i){return this.fetchQuery(t,e,i).then(r).catch(r)}fetchInfiniteQuery(t,e,i){let s=a(t,e,i);return s.behavior={onFetch:t=>{t.fetchFn=()=>{var e,i,s,n,r,a,o;let u;let l=null==(e=t.fetchOptions)?void 0:null==(i=e.meta)?void 0:i.refetchPage,h=null==(s=t.fetchOptions)?void 0:null==(n=s.meta)?void 0:n.fetchMore,c=null==h?void 0:h.pageParam,d=(null==h?void 0:h.direction)==="forward",f=(null==h?void 0:h.direction)==="backward",p=(null==(r=t.state.data)?void 0:r.pages)||[],y=(null==(a=t.state.data)?void 0:a.pageParams)||[],v=y,m=!1,b=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{var e,i;return null!=(e=t.signal)&&e.aborted?m=!0:null==(i=t.signal)||i.addEventListener("abort",()=>{m=!0}),t.signal}})},g=t.options.queryFn||(()=>Promise.reject("Missing queryFn")),C=(t,e,i,s)=>(v=s?[e,...v]:[...v,e],s?[i,...t]:[...t,i]),O=(e,i,s,n)=>{if(m)return Promise.reject("Cancelled");if(void 0===s&&!i&&e.length)return Promise.resolve(e);let r={queryKey:t.queryKey,pageParam:s,meta:t.options.meta};b(r);let a=g(r),o=Promise.resolve(a).then(t=>C(e,s,t,n));return o};if(p.length){if(d){let w=void 0!==c,q=w?c:R(t.options,p);u=O(p,w,q)}else if(f){let P=void 0!==c,S=P?c:null==(o=t.options).getPreviousPageParam?void 0:o.getPreviousPageParam(p[0],p);u=O(p,P,S,!0)}else{v=[];let F=void 0===t.options.getNextPageParam,D=!l||!p[0]||l(p[0],0,p);u=D?O([],F,y[0]):Promise.resolve(C([],y[0],p[0]));for(let E=1;E<p.length;E++)u=u.then(e=>{let i=!l||!p[E]||l(p[E],E,p);if(i){let s=F?y[E]:R(t.options,e);return O(e,F,s)}return Promise.resolve(C(e,y[E],p[E]))})}}else u=O([]);let A=u.then(t=>({pages:t,pageParams:v}));return A}}},this.fetchQuery(s)}prefetchInfiniteQuery(t,e,i){return this.fetchInfiniteQuery(t,e,i).then(r).catch(r)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){let i=this.queryDefaults.find(e=>c(t)===c(e.queryKey));i?i.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;let e=this.queryDefaults.find(e=>d(t,e.queryKey));return null==e?void 0:e.defaultOptions}setMutationDefaults(t,e){let i=this.mutationDefaults.find(e=>c(t)===c(e.mutationKey));i?i.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;let e=this.mutationDefaults.find(e=>d(t,e.mutationKey));return null==e?void 0:e.defaultOptions}defaultQueryOptions(t){if(null!=t&&t._defaulted)return t;let e={...this.defaultOptions.queries,...this.getQueryDefaults(null==t?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=h(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.useErrorBoundary&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return null!=t&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==t?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}},_=t=>{let{Component:e,pageProps:i}=t;return(0,s.jsx)(j,{client:k,children:(0,s.jsx)(e,{...i})})};var I=_},7595:function(){},454:function(){}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],function(){return e(6840),e(880)}),_N_E=t.O()}]);