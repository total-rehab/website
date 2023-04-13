(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{1269:function(e,t){var r,n;n={months:["January","February","March","April","May","June","July","August","September","October","November","December"],toUTC:function(e){var t=e?new Date(e):new Date;return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())},monthName:function(e){var t;return t="number"==typeof e?e:new Date(e).getMonth()+1,n.months[t-1]},relativeTime:function(e,t){var r,n,a,s,i,o,u=[];if("number"==typeof e?r=e:(s=new Date(e).getTime(),r=-((new Date().getTime()-s)/1e3*1)),t||(t={}),t.futureSuffix||(t.futureSuffix="from now"),t.pastSuffix||(t.pastSuffix="ago"),t.presentText||(t.presentText="now"),t.returnObject||(t.returnObject=!1),i=r<0,n={seconds:Math.floor((r=Math.abs(r))%31536e3%86400%3600%60),minutes:Math.floor(r%31536e3%86400%3600/60),hours:Math.floor(r%31536e3%86400/3600),days:Math.floor(r%31536e3/86400),years:Math.floor(r/31536e3),past:i},t.returnObject)return n;if(0===r)return t.presentText;function c(e,r){o&&(o=t.allUnits,u.push(e+" "+r+(e>1?"s":"")))}return a=n.past?t.pastSuffix:t.futureSuffix,o=!0,n.years&&c(n.years,"year"),n.days&&c(n.days,"day"),n.hours&&c(n.hours,"hour"),n.minutes&&c(n.minutes,"minute"),n.seconds&&c(n.seconds,"second"),u.join(", ")+" "+a},prettyPrint:function(e,t){var r,n,a,s,i,o,u,c,l;return e?"number"==typeof e&&(e=new Date().setSeconds(e)):e=new Date,t||(t={}),t.showTime||(t.showTime=!1),s=(a=(r=new Date(e)).getDate())>3&&a<21?a+"th":a%10==1?a+"st":a%10==2?a+"nd":a%10==3?a+"rd":a+"th",i=r.getFullYear(),n=this.monthName(r.getMonth()+1)+" "+s+", "+i,u=r.getHours(),c=r.getMinutes(),l=u>=12?"pm":"am",o=(u=u%12?u%12:12)+":"+(c=c<10?"0"+c:c)+" "+l,t.showTime?n+" at "+o:n}},e.exports?e.exports=n:void 0===(r=(function(){return n}).apply(t,[]))||(e.exports=r)},5717:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practitioner/patients",function(){return r(2195)}])},2643:function(e,t,r){"use strict";r.d(t,{i:function(){return o}});var n=r(5893),a=r(3637),s=r(4184),i=r.n(s);let o=e=>{var t;let{data:r,className:s}=e,o=Object.keys(null!==(t=r[0])&&void 0!==t?t:{});return(0,n.jsx)("div",{className:i()("overflow-x-auto",s),children:(0,n.jsxs)("table",{className:"w-full text-left text-gray-500",children:[(0,n.jsx)("thead",{className:"text-sm text-gray-700 uppercase bg-gray-100 border border-gray-300",children:(0,n.jsx)("tr",{children:o.map((e,t)=>(0,n.jsx)("th",{scope:"col",className:i()("px-6 py-3",0===t?"text-left":"text-center"),children:(0,a.G)(e)},e))})}),(0,n.jsx)("tbody",{children:r.map((e,t)=>(0,n.jsx)("tr",{className:"bg-white border border-gray-300",children:o.map((t,r)=>(0,n.jsx)("td",{className:i()("px-6 py-4",0===r?"text-left":"text-center"),children:e[t]},t))},t))})]})})}},2195:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(7837),s=r(7294),i=r(1269),o=r.n(i),u=r(7311),c=r(1993),l=r(2643),d=r(8344),h=r(8506),p=r(7543);let f=()=>{var e;let t=(0,d.H)(),{data:r,isLoading:i}=(0,a.a)(["patients"],()=>t.getPatients()),f=(0,s.useMemo)(()=>null==r?void 0:r.items.map(t=>({email:t.email,dateOfBirth:t.dateOfBirth?o().prettyPrint(t.dateOfBirth):"-",activityLevel:null!==(e=t.activityLevel)&&void 0!==e?e:"-",programAssigned:String(!!t.programId),action:(0,n.jsx)(p.z,{href:"/practitioner/patients/assign?guid=".concat(t.guid),children:"Assign program"})})),[null==r?void 0:r.items]);return(0,n.jsx)(u.T,{hideHeader:!0,title:"Sign up",description:"Sign up to the Total Rehab app",children:(0,n.jsxs)(c.c,{children:[(0,n.jsx)("div",{className:"md:flex-[60%]",children:(0,n.jsx)("p",{className:"text-xl mb-8",children:"Listed below are the patients signed up to the Total Rehab app using the access codes you have provided."})}),i&&(0,n.jsx)(h.T,{className:"items-center justify-center flex mt-10"}),f&&(0,n.jsx)(l.i,{className:"mt-8",data:f})]})})};t.default=f}},function(e){e.O(0,[963,895,362,986,774,888,179],function(){return e(e.s=5717)}),_N_E=e.O()}]);