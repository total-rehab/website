(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[699],{1987:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/practitioner/access-codes",function(){return t(2711)}])},7543:function(e,s,t){"use strict";t.d(s,{z:function(){return l}});var c=t(5893),r=t(4184),n=t.n(r),a=t(8506);let l=e=>{let{children:s,onClick:t,className:r,isLoading:l}=e;return(0,c.jsx)("button",{type:"button",onClick:t,className:n()("text-white bg-secondary-regular hover:bg-secondary-dark font-medium rounded-lg px-5 py-2.5 select-none",r),children:(0,c.jsxs)("div",{className:"flex items-center",children:[s,l&&(0,c.jsx)(a.T,{size:16,className:"ml-3"})]})})}},2643:function(e,s,t){"use strict";t.d(s,{i:function(){return l}});var c=t(5893),r=t(3637),n=t(4184),a=t.n(n);let l=e=>{var s;let{data:t,className:n}=e,l=Object.keys(null!==(s=t[0])&&void 0!==s?s:{});return(0,c.jsx)("div",{className:a()("overflow-x-auto",n),children:(0,c.jsxs)("table",{className:"w-full text-left text-gray-500",children:[(0,c.jsx)("thead",{className:"text-sm text-gray-700 uppercase bg-gray-100 border border-gray-300",children:(0,c.jsx)("tr",{children:l.map((e,s)=>(0,c.jsx)("th",{scope:"col",className:a()("px-6 py-3",0===s?"text-left":"text-center"),children:(0,r.G)(e)},e))})}),(0,c.jsx)("tbody",{children:t.map((e,s)=>(0,c.jsx)("tr",{className:"bg-white border border-gray-300",children:l.map((s,t)=>(0,c.jsx)("td",{className:a()("px-6 py-4",0===t?"text-left":"text-center"),children:e[s]},s))},s))})]})})}},2711:function(e,s,t){"use strict";t.r(s);var c=t(5893),r=t(1163),n=t(7837),a=t(7294),l=t(1269),i=t.n(l),d=t(7311),o=t(1993),u=t(2643),x=t(7543),h=t(8344),p=t(8506);let m=()=>{let e=(0,r.useRouter)(),s=(0,h.H)(),{data:t,isLoading:l}=(0,n.a)(["access-codes"],()=>s.getAccessCodes()),m=()=>{e.push("/practitioner/access-codes/purchase")},f=(0,a.useMemo)(()=>null==t?void 0:t.items.map(e=>({code:e.code,created:i().prettyPrint(e.createdAt),user:e.assignedUser?e.assignedUser.email:(0,c.jsx)(x.z,{children:"Assign"})})),[null==t?void 0:t.items]);return(0,c.jsx)(d.T,{hideHeader:!0,title:"Sign up",description:"Sign up to the Total Rehab app",children:(0,c.jsxs)(o.c,{children:[(0,c.jsxs)("div",{className:"flex flex-col xl:flex-row justify-between",children:[(0,c.jsx)("div",{className:"md:flex-[60%]",children:(0,c.jsx)("p",{className:"text-xl mb-8",children:"The access codes listed below can be to provide your patients with full access to all programs within the Total Rehab app."})}),(0,c.jsx)("div",{children:(0,c.jsx)(x.z,{onClick:m,children:"Buy access codes"})})]}),l&&(0,c.jsx)(p.T,{className:"items-center justify-center flex mt-10"}),f&&(0,c.jsx)(u.i,{className:"mt-8",data:f})]})})};s.default=m}},function(e){e.O(0,[658,501,129,767,774,888,179],function(){return e(e.s=1987)}),_N_E=e.O()}]);