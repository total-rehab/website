"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{6693:function(e,t,l){var s=l(4836);t.Z=void 0;var a=s(l(4938)),i=l(5893),r=(0,a.default)((0,i.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");t.Z=r},2122:function(e,t,l){l.d(t,{Fg:function(){return s},GI:function(){return a},H_:function(){return n},Qq:function(){return i},pE:function(){return r}});let s=640,a=768,i=1024,r=1280,n=1536},9484:function(e,t,l){l.d(t,{Z:function(){return p}});var s=l(5893),a=l(1664),i=l.n(a),r=l(2122),n=l(7294),c=l(1529),o=l(6693);let x=e=>{let{width:t,height:l}=e;return(0,s.jsx)("div",{className:"bg-gray-100 h-full flex items-center justify-center",children:(0,s.jsx)(o.Z,{style:{fontSize:Math.min(Math.max(t/5,25),100)},className:"text-gray-600"})})},h=(e,t)=>{let l=Number(null==e?void 0:e.width),s=Number(null==e?void 0:e.height);return t&&Number.isFinite(t)?t:Number.isFinite(l)&&Number.isFinite(s)?s/l:2/3},d=(e,t,l)=>{let s=h(t,l);return{width:e,height:Math.round(e*s)}},m=e=>{let{image:t,aspectRatio:l,maxWidth:a,objectFit:i="contain",sizes:r}=e,[o,h]=(0,n.useState)(!1),m=d(a,t,l);return(0,s.jsx)("div",{className:"relative",style:{aspectRatio:"3 / 2"},children:(null==t?void 0:t.src)&&!o?(0,s.jsx)(c.Z,{fill:!0,alt:t.title,onError:e=>{console.error(e),h(!0)},style:{objectFit:i,width:"100%",aspectRatio:"3 / 2"},src:t.src,sizes:r}):(0,s.jsx)(x,{width:m.width,height:m.height})})},p=e=>{let{title:t,image:l,href:a}=e;return(0,s.jsxs)(i(),{href:a,className:"border border-gray-200 rounded-xl overflow-hidden shadow bg-white text-on-surface-base",children:[(0,s.jsx)(m,{aspectRatio:.667,maxWidth:300,image:l,sizes:["(min-width: ".concat(r.Fg,"px) 290px"),"(min-width: ".concat(r.GI,"px) 350px"),"(min-width: ".concat(r.Qq,"px) 315px"),"(min-width: ".concat(r.pE,"px) 360px"),"calc(100vw - 3rem)"].join(", ")}),(0,s.jsx)("div",{className:"px-3 py-2",children:(0,s.jsx)("h3",{className:"text-lg lg:text-xl tracking-wide lg:tracking-wide font-medium",children:t})})]})}},8355:function(e,t,l){l.d(t,{g:function(){return a}});var s=l(5893);let a=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-6",children:t})}},4175:function(e,t,l){l.d(t,{W:function(){return r}});var s=l(5893),a=l(4184),i=l.n(a);let r=e=>{let{className:t,children:l,small:a}=e;return(0,s.jsx)("div",{className:i()("container mx-auto p-6",a&&"max-w-[900px]",t),children:l})}},7311:function(e,t,l){l.d(t,{T:function(){return z}});var s=l(5893),a=l(1529),i=l(1163),r=l(4175),n=l(1664),c=l.n(n),o=l(4184),x=l.n(o);let h=e=>{let{children:t,href:l,activeClassName:a}=e,r=(0,i.useRouter)(),n=r.asPath.includes(l);return(0,s.jsx)(c(),{href:l,"aria-current":n?"page":void 0,className:x()("underline-offset-8 text-lg hover:underline",n&&a),children:t})};var d=l(4020),m=l(802);let p=e=>{let{className:t}=e;return(0,s.jsxs)("div",{className:x()("text-white space-x-4",t),children:[(0,s.jsx)("a",{href:"https://www.facebook.com/totalrehabapp","aria-label":"Total Rehab Facebook page",children:(0,s.jsx)(m.Z,{})}),(0,s.jsx)("a",{href:"https://www.instagram.com/total_rehab_app","aria-label":"Total Rehab Instagram page",children:(0,s.jsx)(d.Z,{})})]})},u=()=>{let{asPath:e}=(0,i.useRouter)(),t=e.startsWith("/practitioner");return t?(0,s.jsx)("footer",{className:"bg-on-surface-base py-6 px-8",children:(0,s.jsx)("div",{className:"items-center flex flex-col items-center",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row w-full items-center md:justify-between",children:[(0,s.jsx)(p,{}),(0,s.jsxs)("ul",{className:"flex flex-col md:flex-row gap-x-10 text-white space-y-6 md:space-y-0 text-center uppercase tracking-wide mt-8 md:mt-0",children:[(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"/policies/privacy",children:"Privacy"})}),(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"mailto:support@total-rehab.co.uk",children:"Contact"})})]})]})})}):(0,s.jsx)("footer",{className:"bg-on-surface-base py-6",children:(0,s.jsxs)(r.W,{children:[(0,s.jsxs)("div",{className:"items-center flex flex-col items-center",children:[!t&&(0,s.jsx)(a.Z,{className:"mb-6",src:"/images/total-rehab-logo.png",alt:"Total Rehab logo",width:250,height:35,sizes:"250px"}),(0,s.jsx)(p,{className:"mb-6"}),(0,s.jsxs)("ul",{className:"flex flex-col md:flex-row gap-x-10 text-white space-y-6 md:space-y-0 text-center uppercase tracking-wide",children:[(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"/blog-posts/1",children:"Blog"})}),(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"/policies/privacy",children:"Privacy"})}),(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"/policies/terms",children:"Terms"})}),(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"mailto:support@total-rehab.co.uk",children:"Contact"})})]})]}),(0,s.jsx)("p",{className:"text-white md:text-xl mt-6 lg:mt-8 md:w-[75%] lg:w-[50%] text-center mx-auto",children:"Before starting any rehabilitation program, it's important to seek advice from a healthcare professional to ensure it's suitability for your condition, avoiding potential harm and setbacks."})]})})};var g=l(2122);let f=e=>{let{title:t,description:l,image:i}=e;return(0,s.jsx)("header",{className:"bg-on-surface-regular",children:(0,s.jsxs)(r.W,{className:"flex flex-wrap flex-col md:flex-row items-center text-white pb-8 pt-8 ",children:[(0,s.jsxs)("div",{className:"flex flex-col w-full lg:w-3/5 justify-center lg:items-start overflow-y-hidden",children:[(0,s.jsxs)("div",{className:"mb-8 md:mb-10 lg:mb-16 xl:max-w-[80%]",children:[(0,s.jsx)("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-medium text-center lg:text-left",children:t}),l&&(0,s.jsx)("p",{className:"mt-6 leading-normal text-xl md:text-3xl text-center lg:text-left",children:l})]}),(0,s.jsxs)("div",{className:"flex w-full justify-center lg:justify-start pb-6 md:pb-8 xl:pb-0 items-center md:items-left space-x-4",children:[(0,s.jsx)("a",{href:"https://apps.apple.com/uk/app/total-rehab/id6446787979",className:"w-[150px] sm:w-[200px] lg:w-[240px]",children:(0,s.jsx)(a.Z,{alt:"App Store logo",src:"/images/app-store.svg",width:240,height:72,sizes:"(min-width: ".concat(g.Fg,"px) 200px, (min-width: ").concat(g.Qq,"px) 240px, 150px")})}),(0,s.jsx)("a",{href:"https://play.google.com/store/apps/details?id=uk.co.totalrehab.app",className:"w-[150px] sm:w-[200px] lg:w-[240px]",children:(0,s.jsx)(a.Z,{alt:"Google Play logo",src:"/images/play-store.svg",width:240,height:72,sizes:"(min-width: ".concat(g.Fg,"px) 200px, (min-width: ").concat(g.Qq,"px) 240px, 150px")})})]})]}),(0,s.jsx)("div",{className:"w-full lg:w-2/5 xl:w-2/5 mb-8 lg:mb-12 hidden lg:flex relative justify-center",children:i})]})})};var j=l(7294);let w="text-primary-regular font-medium",b=e=>{let{className:t}=e;return(0,s.jsxs)("ul",{className:x()("gap-x-10 xl:gap-x-16 text-white mt-4 lg:mt-0 space-y-4 lg:space-y-0 text-center lg:flex overflow-hidden","transition-height duration-500 ease-in-out",t),children:[(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"/programs/1",activeClassName:w,children:"Programs"})}),(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"/blog-posts/1",activeClassName:w,children:"Blog"})}),(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"/about",activeClassName:w,children:"About"})}),(0,s.jsx)("li",{children:(0,s.jsx)(h,{href:"/download",activeClassName:w,children:"Download"})})]})},v=e=>{let{className:t}=e,[l,i]=(0,j.useState)(!1);return(0,s.jsx)("div",{className:"bg-on-surface-regular",children:(0,s.jsx)("div",{className:"w-full container mx-auto px-6 pt-6 lg:pb-6",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("button",{type:"button","aria-label":"Toggle main menu",className:x()("tham tham-e-squeeze tham-w-6 lg:hidden absolute right-0 top-[8px]",l?"tham-active":""),onClick:()=>{i(!l)},children:(0,s.jsx)("div",{className:"tham-box",children:(0,s.jsx)("div",{className:"tham-inner bg-white"})})}),(0,s.jsxs)("nav",{className:x()("flex flex-col lg:flex-row justify-between items-center flex-1",t),"aria-label":"Main Navigation",children:[(0,s.jsx)(c(),{href:"/",children:(0,s.jsx)(a.Z,{alt:"Total Rehab logo",src:"/images/total-rehab-logo.png",className:"pr-4",width:240,height:20,sizes:"240px"})}),(0,s.jsx)(b,{className:x()("lg:h-auto",l?"h-[220px]":"h-[0px]")})]})]})})})};var N=l(9008),y=l.n(N);let k="Total Rehab",R={src:"https://www.total-rehab.co.uk/_next/image?url=%2Fimages%2Flogo-mountains.png&w=1200&q=100",width:1024,height:500},Z=e=>{let{title:t,description:l,image:a=R}=e,r=[t,k].filter(e=>e).join(" | "),n=(0,i.useRouter)(),c="".concat("https://www.total-rehab.co.uk").concat(n.pathname);return(0,s.jsxs)(y(),{children:[(0,s.jsx)("title",{children:r}),(0,s.jsx)("meta",{name:"title",content:r}),(0,s.jsx)("link",{rel:"canonical",href:c}),l&&(0,s.jsx)("meta",{name:"description",content:l}),(0,s.jsx)("meta",{name:"og:title",content:t}),l&&(0,s.jsx)("meta",{name:"og:description",content:l}),(0,s.jsx)("meta",{name:"og:site_name",content:k}),(0,s.jsx)("meta",{name:"og:url",content:c}),(0,s.jsx)("meta",{name:"og:image",content:a.src}),(0,s.jsx)("meta",{name:"og:image:width",content:String(a.width)}),(0,s.jsx)("meta",{name:"og:image:height",content:String(a.width)})]})},z=e=>{let{title:t,description:l,children:a,meta:i,headerImage:r,hideHeader:n}=e;return(0,s.jsxs)("div",{className:"text-on-surface-base min-h-screen flex flex-col",children:[(0,s.jsx)(v,{}),(0,s.jsx)(Z,{title:(null==i?void 0:i.title)||t,description:(null==i?void 0:i.description)||l,image:null==i?void 0:i.image}),!n&&(0,s.jsx)(f,{title:t,description:l,image:r}),(0,s.jsx)("div",{className:"flex-1",children:a}),(0,s.jsx)(u,{})]})}},8540:function(e,t,l){l.d(t,{F:function(){return c}});var s=l(5893),a=l(4184),i=l.n(a),r=l(1529),n=l(4175);let c=e=>{let{className:t}=e;return(0,s.jsx)("div",{className:i()("bg-primary-regular",t),children:(0,s.jsxs)(n.W,{className:"flex items-center justify-center lg:justify-end",children:[(0,s.jsx)(r.Z,{alt:"",src:"/images/ukca-logo.png",width:70,height:70,sizes:"70px"}),(0,s.jsx)("p",{className:"ml-6 text-white font-medium text-lg",children:"Registered Medical Device"})]})})}}}]);