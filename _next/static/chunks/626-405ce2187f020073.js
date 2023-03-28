"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{6693:function(e,t,a){var l=a(4836);t.Z=void 0;var s=l(a(4938)),i=a(5893),r=(0,s.default)((0,i.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");t.Z=r},2122:function(e,t,a){a.d(t,{Fg:function(){return l},GI:function(){return s},H_:function(){return n},Qq:function(){return i},pE:function(){return r}});let l=640,s=768,i=1024,r=1280,n=1536},9484:function(e,t,a){a.d(t,{Z:function(){return g}});var l=a(5893),s=a(1664),i=a.n(s),r=a(2122),n=a(7294),c=a(1529),o=a(6693);let x=e=>{let{width:t,height:a}=e;return(0,l.jsx)("div",{className:"bg-gray-100 h-full flex items-center justify-center",children:(0,l.jsx)(o.Z,{style:{fontSize:Math.min(Math.max(t/5,25),100)},className:"text-gray-600"})})},h=(e,t)=>{let a=Number(null==e?void 0:e.width),l=Number(null==e?void 0:e.height);return t&&Number.isFinite(t)?t:Number.isFinite(a)&&Number.isFinite(l)?l/a:2/3},d=(e,t,a)=>{let l=h(t,a);return{width:e,height:Math.round(e*l)}},m=e=>{let{image:t,aspectRatio:a,maxWidth:s,objectFit:i="contain",sizes:r}=e,[o,h]=(0,n.useState)(!1),m=d(s,t,a);return(0,l.jsx)("div",{className:"relative",style:{aspectRatio:"3 / 2"},children:(null==t?void 0:t.src)&&!o?(0,l.jsx)(c.Z,{fill:!0,alt:t.title,onError:e=>{console.error(e),h(!0)},style:{objectFit:i,width:"100%",aspectRatio:"3 / 2"},src:t.src,sizes:r}):(0,l.jsx)(x,{width:m.width,height:m.height})})},g=e=>{let{title:t,image:a,href:s}=e;return(0,l.jsxs)(i(),{href:s,className:"border border-gray-200 rounded-xl overflow-hidden shadow bg-white text-on-surface-base",children:[(0,l.jsx)(m,{aspectRatio:.667,maxWidth:300,image:a,sizes:["(min-width: ".concat(r.Fg,"px) 290px"),"(min-width: ".concat(r.GI,"px) 350px"),"(min-width: ".concat(r.Qq,"px) 315px"),"(min-width: ".concat(r.pE,"px) 360px"),"calc(100vw - 3rem)"].join(", ")}),(0,l.jsx)("div",{className:"px-3 py-2",children:(0,l.jsx)("h3",{className:"text-lg lg:text-xl tracking-wide lg:tracking-wide font-medium",children:t})})]})}},8355:function(e,t,a){a.d(t,{g:function(){return s}});var l=a(5893);let s=e=>{let{children:t}=e;return(0,l.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6",children:t})}},4175:function(e,t,a){a.d(t,{W:function(){return r}});var l=a(5893),s=a(4184),i=a.n(s);let r=e=>{let{className:t,children:a}=e;return(0,l.jsx)("div",{className:i()("container mx-auto p-6",t),children:a})}},3209:function(e,t,a){a.d(t,{T:function(){return z}});var l=a(5893),s=a(4020),i=a(802),r=a(1529),n=a(4175),c=a(1163),o=a(1664),x=a.n(o),h=a(4184),d=a.n(h);let m=e=>{let{children:t,href:a,activeClassName:s}=e,i=(0,c.useRouter)(),r=i.asPath===a;return(0,l.jsx)(x(),{href:a,"aria-current":r?"page":void 0,className:d()("underline-offset-8 text-lg hover:underline",r&&s),children:t})},g=()=>(0,l.jsx)("footer",{className:"bg-on-surface-base pt-6 pb-8",children:(0,l.jsxs)(n.W,{children:[(0,l.jsxs)("div",{className:"items-center flex flex-col items-center",children:[(0,l.jsx)(r.Z,{className:"mb-6",src:"/images/total-rehab-logo.png",alt:"Total Rehab logo",width:250,height:35,sizes:"250px"}),(0,l.jsxs)("div",{className:"text-white mb-8 space-x-4",children:[(0,l.jsx)("a",{href:"https://www.facebook.com/totalrehabapp","aria-label":"Total Rehab Facebook page",children:(0,l.jsx)(i.Z,{})}),(0,l.jsx)("a",{href:"https://www.instagram.com/total_rehab_app","aria-label":"Total Rehab Instagram page",children:(0,l.jsx)(s.Z,{})})]}),(0,l.jsxs)("ul",{className:"flex flex-col md:flex-row gap-x-10 text-white space-y-6 md:space-y-0 text-center uppercase tracking-wide",children:[(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"/blog",children:"Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"/policies/privacy",children:"Privacy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"mailto:support@total-rehab.co.uk",children:"Contact"})})]})]}),(0,l.jsx)("p",{className:"text-white text-xl mt-6 lg:mt-8 md:w-[75%] lg:w-[50%] text-center mx-auto",children:"Before starting any rehabilitation program, it's important to seek advice from a healthcare professional to ensure it's suitability for your condition, avoiding potential harm and setbacks."})]})});var p=a(2122);let u=e=>{let{title:t,description:a,image:s}=e;return(0,l.jsx)("header",{className:"bg-on-surface-regular",children:(0,l.jsxs)(n.W,{className:"flex flex-wrap flex-col md:flex-row items-center text-white pb-8 pt-8 ",children:[(0,l.jsxs)("div",{className:"flex flex-col w-full lg:w-3/5 justify-center lg:items-start overflow-y-hidden",children:[(0,l.jsxs)("div",{className:"mb-8 md:mb-10 lg:mb-16 xl:max-w-[80%]",children:[(0,l.jsx)("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-medium text-center lg:text-left",children:t}),a&&(0,l.jsx)("p",{className:"mt-6 leading-normal text-xl md:text-3xl text-center lg:text-left",children:a})]}),(0,l.jsxs)("div",{className:"flex w-full justify-center lg:justify-start pb-6 md:pb-8 xl:pb-0 items-center md:items-left space-x-4",children:[(0,l.jsx)("a",{href:"https://apps.apple.com/uk/app/total-rehab/id6446787979",className:"w-[150px] sm:w-[200px] lg:w-[240px]",children:(0,l.jsx)(r.Z,{alt:"App Store logo",src:"/images/app-store.svg",width:240,height:72,sizes:"(min-width: ".concat(p.Fg,"px) 200px, (min-width: ").concat(p.Qq,"px) 240px, 150px")})}),(0,l.jsx)("a",{href:"https://play.google.com/store/apps/details?id=uk.co.totalrehab.app",className:"w-[150px] sm:w-[200px] lg:w-[240px]",children:(0,l.jsx)(r.Z,{alt:"Google Play logo",src:"/images/play-store.svg",width:240,height:72,sizes:"(min-width: ".concat(p.Fg,"px) 200px, (min-width: ").concat(p.Qq,"px) 240px, 150px")})})]})]}),(0,l.jsx)("div",{className:"w-full lg:w-2/5 xl:w-2/5 mb-8 lg:mb-12 hidden lg:flex relative justify-center",children:s})]})})};var f=a(7294);let j="text-primary-regular font-medium",w=e=>{let{className:t}=e;return(0,l.jsxs)("ul",{className:d()("gap-x-10 xl:gap-x-16 text-white mt-4 lg:mt-0 space-y-4 lg:space-y-0 text-center lg:flex overflow-hidden","transition-height duration-500 ease-in-out",t),children:[(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"/programs/1",activeClassName:j,children:"Programs"})}),(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"/blog-posts/1",activeClassName:j,children:"Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"/about",activeClassName:j,children:"About"})}),(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"/download",activeClassName:j,children:"Download"})}),(0,l.jsx)("li",{children:(0,l.jsx)(m,{href:"https://admin.total-rehab.co.uk",activeClassName:j,children:"Practitioner"})})]})},b=e=>{let{className:t}=e,[a,s]=(0,f.useState)(!1);return(0,l.jsx)("div",{className:"bg-on-surface-regular",children:(0,l.jsx)("div",{className:"w-full container mx-auto px-6 pt-6 lg:pb-6",children:(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("button",{type:"button","aria-label":"Toggle main menu",className:d()("tham tham-e-squeeze tham-w-6 lg:hidden absolute right-0 top-[8px]",a?"tham-active":""),onClick:()=>{s(!a)},children:(0,l.jsx)("div",{className:"tham-box",children:(0,l.jsx)("div",{className:"tham-inner bg-white"})})}),(0,l.jsxs)("nav",{className:d()("flex flex-col lg:flex-row justify-between items-center flex-1",t),"aria-label":"Main Navigation",children:[(0,l.jsx)(x(),{href:"/",children:(0,l.jsx)(r.Z,{alt:"Total Rehab logo",src:"/images/total-rehab-logo.png",className:"pr-4",width:240,height:20,sizes:"240px"})}),(0,l.jsx)(w,{className:d()("lg:h-auto",a?"h-[200px]":"h-[0px]")})]})]})})})};var v=a(9008),N=a.n(v);let y="Total Rehab",k={src:"https://www.total-rehab.co.uk/_next/image?url=%2Fimages%2Flogo-mountains.png&w=1200&q=100",width:1024,height:500},Z=e=>{let{title:t,description:a,image:s=k}=e,i=[t,y].filter(e=>e).join(" | "),r=(0,c.useRouter)(),n="".concat("https://www.total-rehab.co.uk").concat(r.pathname);return(0,l.jsxs)(N(),{children:[(0,l.jsx)("title",{children:i}),(0,l.jsx)("meta",{name:"title",content:i}),(0,l.jsx)("link",{rel:"canonical",href:n}),a&&(0,l.jsx)("meta",{name:"description",content:a}),(0,l.jsx)("meta",{name:"og:title",content:t}),a&&(0,l.jsx)("meta",{name:"og:description",content:a}),(0,l.jsx)("meta",{name:"og:site_name",content:y}),(0,l.jsx)("meta",{name:"og:url",content:n}),(0,l.jsx)("meta",{name:"og:image",content:s.src}),(0,l.jsx)("meta",{name:"og:image:width",content:String(s.width)}),(0,l.jsx)("meta",{name:"og:image:height",content:String(s.width)})]})},z=e=>{let{title:t,description:a,children:s,meta:i,headerImage:r,hideHeader:n}=e;return(0,l.jsxs)("div",{className:"text-on-surface-base",children:[(0,l.jsx)(b,{}),(0,l.jsx)(Z,{title:(null==i?void 0:i.title)||t,description:(null==i?void 0:i.description)||a,image:null==i?void 0:i.image}),!n&&(0,l.jsx)(u,{title:t,description:a,image:r}),s,(0,l.jsx)(g,{})]})}},8540:function(e,t,a){a.d(t,{F:function(){return c}});var l=a(5893),s=a(4184),i=a.n(s),r=a(1529),n=a(4175);let c=e=>{let{className:t}=e;return(0,l.jsx)("div",{className:i()("bg-primary-regular",t),children:(0,l.jsxs)(n.W,{className:"flex items-center justify-center lg:justify-end",children:[(0,l.jsx)(r.Z,{alt:"",src:"/images/ukca-logo.png",width:70,height:70,sizes:"70px"}),(0,l.jsx)("p",{className:"ml-6 text-white font-medium text-lg",children:"Registered Medical Device"})]})})}}}]);