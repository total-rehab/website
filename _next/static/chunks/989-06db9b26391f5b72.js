"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{2122:function(e,t,s){s.d(t,{Fg:function(){return l},GI:function(){return a},H_:function(){return n},Qq:function(){return i},pE:function(){return r}});let l=640,a=768,i=1024,r=1280,n=1536},4175:function(e,t,s){s.d(t,{W:function(){return r}});var l=s(5893),a=s(4184),i=s.n(a);let r=e=>{let{className:t,children:s,small:a}=e;return(0,l.jsx)("div",{className:i()("container mx-auto p-6",a&&"max-w-[900px]",t),children:s})}},1993:function(e,t,s){s.d(t,{c:function(){return f}});var l=s(5893),a=s(1163),i=s(7294),r=s(6446),n=s(4175),c=s(4184),x=s.n(c),o=s(1664),h=s.n(o);let d=e=>{let{className:t}=e,{endSession:s,session:a,isSessionLoaded:n}=(0,i.useContext)(r.B);return(0,l.jsx)("div",{className:x()("border-b bg-gray-50 border-gray-300",t),children:(0,l.jsx)("div",{className:"w-full container mx-auto px-6 py-3",children:(0,l.jsx)("div",{className:"relative",children:(0,l.jsx)("nav",{className:"flex justify-end","aria-label":"Main Navigation",children:(0,l.jsx)("ul",{className:"gap-x-10 xl:gap-x-16 space-y-4 lg:space-y-0 text-center",children:n&&(0,l.jsx)("li",{children:(0,l.jsxs)(h(),{href:"/practitioner/auth",onClick:s,className:"underline-offset-8 text-lg hover:underline font-medium",children:["Sign ",a?"out":"in"]})})})})})})})},m=e=>{let{href:t,badge:s,children:i,onClick:r}=e,n=(0,a.useRouter)(),c=n.asPath===t;return(0,l.jsxs)(h(),{href:t,className:x()("flex items-center p-1.5 text-gray-900 rounded",c?"bg-blue-100 text-blue-900 hover:bg-blue-200":"hover:bg-gray-200"),onClick:r,children:[(0,l.jsx)("span",{className:"flex-1 ml-3 whitespace-nowrap",children:i}),s&&(0,l.jsx)("span",{className:"inline-flex items-center justify-center h-3 py-3 px-2 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full",children:s})]})},u=e=>{let{className:t}=e,{endSession:s}=(0,i.useContext)(r.B);return(0,l.jsx)("aside",{className:x()("sticky top-0 z-40 md:w-64 h-full border-b bg-gray-50 border-gray-300 sm:border-none",t),"aria-label":"Sidebar",children:(0,l.jsx)("div",{className:"h-full px-3 py-4 overflow-y-auto",children:(0,l.jsxs)("ul",{className:"space-y-2 font-medium",children:[(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"/practitioner",children:"Patients"})}),(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"/practitioner/access-codes",children:"Access codes"})}),(0,l.jsx)("li",{className:"sm:hidden",children:(0,l.jsx)(m,{href:"/",onClick:s,children:"Sign out"})})]})})})};var p=s(8506);let f=e=>{let{children:t,noAuthRequired:s}=e,{session:c,isSessionLoaded:x}=(0,i.useContext)(r.B),o=(0,a.useRouter)();return((0,i.useEffect)(()=>{c||!x||s||o.push("/practitioner/auth")},[o,c,x,s]),x)?(0,l.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,l.jsx)(d,{className:"hidden sm:flex"}),c?(0,l.jsxs)("div",{className:"flex flex-col flex-1 sm:flex-row bg-gray-50",children:[c&&(0,l.jsx)(u,{className:"w-full sm:w-48 md:w-64"}),(0,l.jsx)("div",{className:"flex-1 bg-white py-6",children:(0,l.jsx)(n.W,{children:(0,l.jsx)("div",{children:t})})})]}):(0,l.jsx)(p.T,{size:60,className:"flex flex-1 justify-center items-center"})]}):(0,l.jsx)(p.T,{size:60,className:"flex flex-1 items-center justify-center"})}},8506:function(e,t,s){s.d(t,{T:function(){return a}});var l=s(5893);let a=e=>{let{className:t,size:s=40}=e;return(0,l.jsxs)("div",{role:"status",className:t,children:[(0,l.jsxs)("svg",{"aria-hidden":"true",className:"text-gray-200 animate-spin fill-blue-600",style:{width:s,height:s},viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,l.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,l.jsx)("span",{className:"sr-only",children:"Loading..."})]})}},7311:function(e,t,s){s.d(t,{T:function(){return T}});var l=s(5893),a=s(1529),i=s(1163),r=s(4175),n=s(1664),c=s.n(n),x=s(4184),o=s.n(x);let h=e=>{let{children:t,href:s,activeClassName:a}=e,r=(0,i.useRouter)(),n=r.asPath.includes(s);return(0,l.jsx)(c(),{href:s,"aria-current":n?"page":void 0,className:o()("underline-offset-8 text-lg hover:underline",n&&a),children:t})};var d=s(4020),m=s(802);let u=()=>(0,l.jsxs)("div",{className:"text-white space-x-4",children:[(0,l.jsx)("a",{href:"https://www.facebook.com/totalrehabapp","aria-label":"Total Rehab Facebook page",children:(0,l.jsx)(m.Z,{})}),(0,l.jsx)("a",{href:"https://www.instagram.com/total_rehab_app","aria-label":"Total Rehab Instagram page",children:(0,l.jsx)(d.Z,{})})]}),p=()=>{let{asPath:e}=(0,i.useRouter)(),t=e.startsWith("/practitioner");return t?(0,l.jsx)("footer",{className:"bg-on-surface-base py-6 px-8",children:(0,l.jsx)("div",{className:"items-center flex flex-col items-center",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row w-full items-center md:justify-between",children:[(0,l.jsx)(u,{}),(0,l.jsxs)("ul",{className:"flex flex-col md:flex-row gap-x-10 text-white space-y-6 md:space-y-0 text-center uppercase tracking-wide mt-8 md:mt-0",children:[(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"/policies/privacy",children:"Privacy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"mailto:support@total-rehab.co.uk",children:"Contact"})})]})]})})}):(0,l.jsx)("footer",{className:"bg-on-surface-base py-6",children:(0,l.jsxs)(r.W,{children:[(0,l.jsxs)("div",{className:"items-center flex flex-col items-center",children:[!t&&(0,l.jsx)(a.Z,{className:"mb-6",src:"/images/total-rehab-logo.png",alt:"Total Rehab logo",width:250,height:35,sizes:"250px"}),(0,l.jsx)(u,{}),(0,l.jsxs)("ul",{className:"flex flex-col md:flex-row gap-x-10 text-white space-y-6 md:space-y-0 text-center uppercase tracking-wide",children:[(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"/blog-posts/1",children:"Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"/policies/privacy",children:"Privacy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"mailto:support@total-rehab.co.uk",children:"Contact"})})]})]}),(0,l.jsx)("p",{className:"text-white md:text-xl mt-6 lg:mt-8 md:w-[75%] lg:w-[50%] text-center mx-auto",children:"Before starting any rehabilitation program, it's important to seek advice from a healthcare professional to ensure it's suitability for your condition, avoiding potential harm and setbacks."})]})})};var f=s(2122);let g=e=>{let{title:t,description:s,image:i}=e;return(0,l.jsx)("header",{className:"bg-on-surface-regular",children:(0,l.jsxs)(r.W,{className:"flex flex-wrap flex-col md:flex-row items-center text-white pb-8 pt-8 ",children:[(0,l.jsxs)("div",{className:"flex flex-col w-full lg:w-3/5 justify-center lg:items-start overflow-y-hidden",children:[(0,l.jsxs)("div",{className:"mb-8 md:mb-10 lg:mb-16 xl:max-w-[80%]",children:[(0,l.jsx)("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-medium text-center lg:text-left",children:t}),s&&(0,l.jsx)("p",{className:"mt-6 leading-normal text-xl md:text-3xl text-center lg:text-left",children:s})]}),(0,l.jsxs)("div",{className:"flex w-full justify-center lg:justify-start pb-6 md:pb-8 xl:pb-0 items-center md:items-left space-x-4",children:[(0,l.jsx)("a",{href:"https://apps.apple.com/uk/app/total-rehab/id6446787979",className:"w-[150px] sm:w-[200px] lg:w-[240px]",children:(0,l.jsx)(a.Z,{alt:"App Store logo",src:"/images/app-store.svg",width:240,height:72,sizes:"(min-width: ".concat(f.Fg,"px) 200px, (min-width: ").concat(f.Qq,"px) 240px, 150px")})}),(0,l.jsx)("a",{href:"https://play.google.com/store/apps/details?id=uk.co.totalrehab.app",className:"w-[150px] sm:w-[200px] lg:w-[240px]",children:(0,l.jsx)(a.Z,{alt:"Google Play logo",src:"/images/play-store.svg",width:240,height:72,sizes:"(min-width: ".concat(f.Fg,"px) 200px, (min-width: ").concat(f.Qq,"px) 240px, 150px")})})]})]}),(0,l.jsx)("div",{className:"w-full lg:w-2/5 xl:w-2/5 mb-8 lg:mb-12 hidden lg:flex relative justify-center",children:i})]})})};var j=s(7294);let w="text-primary-regular font-medium",b=e=>{let{className:t}=e;return(0,l.jsxs)("ul",{className:o()("gap-x-10 xl:gap-x-16 text-white mt-4 lg:mt-0 space-y-4 lg:space-y-0 text-center lg:flex overflow-hidden","transition-height duration-500 ease-in-out",t),children:[(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"/programs/1",activeClassName:w,children:"Programs"})}),(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"/blog-posts/1",activeClassName:w,children:"Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"/about",activeClassName:w,children:"About"})}),(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"/download",activeClassName:w,children:"Download"})}),(0,l.jsx)("li",{children:(0,l.jsx)(h,{href:"/practitioner",activeClassName:w,children:"Practitioner"})})]})},v=e=>{let{className:t}=e,[s,i]=(0,j.useState)(!1);return(0,l.jsx)("div",{className:"bg-on-surface-regular",children:(0,l.jsx)("div",{className:"w-full container mx-auto px-6 pt-6 lg:pb-6",children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("button",{type:"button","aria-label":"Toggle main menu",className:o()("tham tham-e-squeeze tham-w-6 lg:hidden absolute right-0 top-[8px]",s?"tham-active":""),onClick:()=>{i(!s)},children:(0,l.jsx)("div",{className:"tham-box",children:(0,l.jsx)("div",{className:"tham-inner bg-white"})})}),(0,l.jsxs)("nav",{className:o()("flex flex-col lg:flex-row justify-between items-center flex-1",t),"aria-label":"Main Navigation",children:[(0,l.jsx)(c(),{href:"/",children:(0,l.jsx)(a.Z,{alt:"Total Rehab logo",src:"/images/total-rehab-logo.png",className:"pr-4",width:240,height:20,sizes:"240px"})}),(0,l.jsx)(b,{className:o()("lg:h-auto",s?"h-[220px]":"h-[0px]")})]})]})})})};var N=s(9008),y=s.n(N);let C="Total Rehab",k={src:"https://www.total-rehab.co.uk/_next/image?url=%2Fimages%2Flogo-mountains.png&w=1200&q=100",width:1024,height:500},R=e=>{let{title:t,description:s,image:a=k}=e,r=[t,C].filter(e=>e).join(" | "),n=(0,i.useRouter)(),c="".concat("https://www.total-rehab.co.uk").concat(n.pathname);return(0,l.jsxs)(y(),{children:[(0,l.jsx)("title",{children:r}),(0,l.jsx)("meta",{name:"title",content:r}),(0,l.jsx)("link",{rel:"canonical",href:c}),s&&(0,l.jsx)("meta",{name:"description",content:s}),(0,l.jsx)("meta",{name:"og:title",content:t}),s&&(0,l.jsx)("meta",{name:"og:description",content:s}),(0,l.jsx)("meta",{name:"og:site_name",content:C}),(0,l.jsx)("meta",{name:"og:url",content:c}),(0,l.jsx)("meta",{name:"og:image",content:a.src}),(0,l.jsx)("meta",{name:"og:image:width",content:String(a.width)}),(0,l.jsx)("meta",{name:"og:image:height",content:String(a.width)})]})},T=e=>{let{title:t,description:s,children:a,meta:i,headerImage:r,hideHeader:n}=e;return(0,l.jsxs)("div",{className:"text-on-surface-base min-h-screen flex flex-col",children:[(0,l.jsx)(v,{}),(0,l.jsx)(R,{title:(null==i?void 0:i.title)||t,description:(null==i?void 0:i.description)||s,image:null==i?void 0:i.image}),!n&&(0,l.jsx)(g,{title:t,description:s,image:r}),a,(0,l.jsx)(p,{})]})}}}]);