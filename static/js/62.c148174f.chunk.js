"use strict";(self.webpackChunkmy_trailer=self.webpackChunkmy_trailer||[]).push([[62],{5275:(e,t,a)=>{a.d(t,{A:()=>m});a(5043);var s=a(9634),i=(a(1580),a(579));const n=function(e){let{src:t,className:a}=e;return(0,i.jsx)(s.LazyLoadImage,{className:a||"",alt:"",effect:"blur",src:"https://image.tmdb.org/t/p/w780".concat(t)})};var l=a(3028),r=a(6599),o=a(446),c=a.n(o),d=a(3216);const m=function(e){var t,a,s;let{mediaTypes:o,data:m}=e;const u=(0,d.Zp)();return(0,d.zy)().pathname.split("/").filter(Boolean)[0],(0,i.jsxs)("div",{onClick:()=>u("/".concat((null===m||void 0===m?void 0:m.media_type)||o,"/").concat(m.id)),className:"relative border-1 aspect-w-2 aspect-h-3 text-white cursor-pointer overflow-hidden group",children:[null!==m&&void 0!==m&&m.poster_path?(0,i.jsx)(n,{src:null===m||void 0===m?void 0:m.poster_path,className:"w-full h-[full] sm:h-[full] md:h-[400px] xl:h-[450px] transform transition duration-200"}):(0,i.jsx)("img",{src:"../assets/no-poster.png",alt:""}),(0,i.jsxs)("div",{className:"group-hover:flex bottom-0 absolute flex flex-col justify-end items-start gap-2 bg-black bg-opacity-70 p-2 pb-5 w-full h-full transform transition-all translate-y-full group-hover:translate-y-0 duration-500 delay-100 ease-in-out",children:[(0,i.jsx)("div",{className:"font-bold text-lg",children:(null===m||void 0===m?void 0:m.title)||(null===m||void 0===m?void 0:m.name)}),(0,i.jsxs)("p",{className:"text-sm",children:[null===m||void 0===m||null===(t=m.overview)||void 0===t?void 0:t.slice(0,100),"..."]}),(0,i.jsxs)("span",{className:"font-bold text-sm",children:[(0,i.jsx)("strong",{className:"font-semibold text-white",children:"Aired :"})," ",(0,i.jsxs)("span",{className:"underline underline-offset-2",children:[" ",c()((null===m||void 0===m?void 0:m.release_date)||(null===m||void 0===m?void 0:m.first_air_date)).format("MMM D, YYYY")]})]}),(0,i.jsx)(l.A,{rating:null===m||void 0===m||null===(a=m.vote_average)||void 0===a?void 0:a.toFixed(1)}),(0,i.jsx)(r.A,{data:null===m||void 0===m||null===(s=m.genre_ids)||void 0===s?void 0:s.slice(0,2),type:null===m||void 0===m?void 0:m.media_type})]})]})}},3028:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var s=a(5826),i=(a(6555),a(579));const n=function(e){let{rating:t,text:a,width:n}=e;return(0,i.jsx)("div",{className:"bg-netflixWhite  p-[1px] rounded-full w-12 ".concat(n," circleRating"),children:(0,i.jsx)(s.QF,{value:t,maxValue:10,text:t,className:"font-bold text-2xl",styles:(0,s.Hf)({pathColor:t<5?"red":t<7?"orange":"green",textColor:"#E50914",textSize:a})})})}},6599:(e,t,a)=>{a.d(t,{A:()=>n});a(5043);var s=a(4349),i=a(579);const n=function(e){let{data:t,type:a}=e;const n="movie"===a?s.IZ:s.yI;return(0,i.jsx)("div",{className:"flex justify-center items-center gap-2 genres",children:null===t||void 0===t?void 0:t.map((e=>{const t=n.find((t=>t.id===e));return t?(0,i.jsx)("div",{className:"bg-netflixRed p-1 font-semibold text-white text-xs genre",children:t.name},e):null}))})}},4349:(e,t,a)=>{a.d(t,{IZ:()=>s,Uj:()=>n,yI:()=>i});const s=[{id:null,name:"Default"},{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],i=[{id:null,name:"Default"},{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"}],n=[{value:"Default",label:"Default"},{value:"popularity.desc",label:"Popularity Descending"},{value:"popularity.asc",label:"Popularity Ascending"},{value:"vote_average.desc",label:"Rating Descending"},{value:"vote_average.asc",label:"Rating Ascending"},{value:"primary_release_date.desc",label:"Release Date Descending"},{value:"primary_release_date.asc",label:"Release Date Ascending"},{value:"original_title.asc",label:"Title (A-Z)"}]},2406:(e,t,a)=>{a.d(t,{A:()=>n});var s=a(5043),i=a(3862);const n=e=>{const[t,a]=(0,s.useState)(null),[n,l]=(0,s.useState)(!0),[r,o]=(0,s.useState)(null),c=(0,s.useCallback)((async()=>{l(!0);try{const t=await(0,i.f)(e);a(t)}catch(r){o("Something went wrong!")}finally{l(!1)}}),[e]);return(0,s.useEffect)((()=>{c()}),[c]),{data:t,loading:n,error:r}}},5713:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(5043),i=a(6720),n=a(7866),l=a(579);const r=function(){const[e,t]=(0,s.useState)(!1),[a,r]=(0,s.useState)(!0),o=(0,s.useCallback)((()=>{t(!0)}),[]),c=(0,s.useCallback)((()=>{t(!1)}),[]);return(0,s.useEffect)((()=>{const e=setTimeout((()=>{r(!1)}),5e3);return()=>clearTimeout(e)}),[]),(0,l.jsxs)("section",{id:"banner",className:"relative flex justify-center items-end pb-10 w-full h-screen overflow-hidden",children:[(0,l.jsx)("div",{className:"top-0 -z-50 fixed bg-netflixBlack w-screen h-screen overflow-x-hidden background-layer"}),(0,l.jsx)("iframe",{className:"-top-10 sm:-top-16 -left-52 sm:left-0 -z-40 absolute w-[300vw] sm:w-screen h-screen sm:h-[120vh]",src:"https://www.youtube.com/embed/b9EkMc79ZSU?&autoplay=1&loop=1&mute=1&controls=0",title:"Trailer Video",frameBorder:0,allowFullScreen:!0}),(0,l.jsx)("img",{className:"".concat(a?"block":"opacity-0"," -top-10 sm:-top-16   -z-40 absolute bg-center  bg-netflixBlack transition-opacity duration-500 ease-in-out w-[300vw] sm:w-screen h-[120vh] overflow-x-hidden background-layer object-cover"),src:"https://images.ctfassets.net/4cd45et68cgf/5DIYYKy9JB7m90nozSIcM1/2acf7e826bbe6a656fd91c9179f17e0b/Stranger_Things__The_Experience.jpg",alt:""}),e&&(0,l.jsx)("div",{style:{zIndex:9999},className:"top-0 absolute flex justify-center items-center bg-netflixbackground bg-opacity-70 h-screen container",onClick:c,children:(0,l.jsx)("div",{className:"relative flex justify-center items-center 2xl:w-[1200px] h-1/2 sm:h-2/3 container",children:(0,l.jsx)("iframe",{title:"Trailer Video",className:"w-full sm:w-[80%] h-full",src:"https://www.youtube.com/embed/b9EkMc79ZSU",frameBorder:0,allow:"autoplay; encrypted-media",allowFullScreen:!0,controls:1})})}),(0,l.jsx)(n.A,{children:(0,l.jsx)("div",{className:"flex justify-start items-centerr",children:(0,l.jsxs)("div",{className:"z-10 flex flex-col justify-start items-start gap-10 px-4 md:px-0 w-full md:w-1/2 text-netflixWhite",children:[(0,l.jsx)("div",{className:"title-img-container",children:(0,l.jsx)("img",{className:"w-72 sm:w-96",src:"assets/banner.png",alt:""})}),(0,l.jsx)("div",{className:"text-lg sm:text-xl info-contaienr",children:(0,l.jsx)("p",{children:"When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."})}),(0,l.jsxs)("div",{className:"flex justify-start items-center gap-4 font-semibold btn-container",children:[(0,l.jsxs)("button",{onClick:o,className:"flex justify-center items-center gap-1 bg-netflixWhite hover:bg-slate-200 shadow-sm px-4 py-2 rounded-lg text-netflixBlack",children:[(0,l.jsx)(i.XKH,{className:"text-2xl sm:text-4xl"}),(0,l.jsx)("span",{className:"text-md sm:text-lg",children:"Play"})]}),(0,l.jsxs)("button",{className:"flex justify-center items-center gap-2 bg-netflixBlack hover:bg-neutral-900 shadow-sm shadow-white px-4 py-2 rounded-lg text-netflixWhite",children:[(0,l.jsx)(i.MJW,{className:"text-2xl sm:text-4xl"}),(0,l.jsx)("span",{className:"text-md sm:text-lg",children:"More Info"})]})]})]})})})]})};var o=a(2406);const c=s.memo((e=>{let{tab:t,isActive:a,onClick:s}=e;return(0,l.jsx)("button",{onClick:()=>s(t),className:"px-4 capitalize font-semibold py-2 rounded transition-all duration-300 delay-100 ease-in-out ".concat(a?"bg-netflixRed text-white ":"bg-white text-netflixRed hover:bg-gray-100"),children:t})})),d=e=>{let{data:t,onTabChange:a}=e;const[i,n]=(0,s.useState)(t[0]),r=(0,s.useCallback)((e=>{n(e),a(e)}),[a]);return(0,l.jsx)("div",{className:"flex justify-center items-center bg-white rounded-lg",children:t.map((e=>(0,l.jsx)(c,{tab:e,isActive:i===e,onClick:r},e)))})};var m=a(4328),u=(a(4014),a(5692),a(5084),a(5275));const x=e=>{let{title:t,data:a,loading:i,mediaTypes:n}=e;const r=(0,s.useMemo)((()=>Array.from({length:6}).map(((e,t)=>(0,l.jsx)(m.qr,{className:"relative border-1 w-full h-full cursor-pointer group",children:(0,l.jsx)("div",{className:"bg-gray-500 rounded-md w-full h-[400px] animate-pulse"})},t)))),[]),o=(0,s.useMemo)((()=>null===a||void 0===a?void 0:a.map((e=>(0,l.jsx)(m.qr,{className:"relative border-1 w-full h-full cursor-pointer group",children:(0,l.jsx)(u.A,{mediaTypes:n,data:e})},e.id)))),[a,n]);return(0,l.jsxs)("div",{className:"carouselSection",children:[t&&(0,l.jsx)("h2",{className:"my-4 w-full text-2xl sm:text-3xl tracking-wider",children:t}),(0,l.jsx)(m.RC,{slidesPerView:2,spaceBetween:10,freeMode:!0,pagination:{clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:10},480:{slidesPerView:2,spaceBetween:10},640:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:3,spaceBetween:20},1024:{slidesPerView:4,spaceBetween:20},1280:{slidesPerView:5,spaceBetween:20},1536:{slidesPerView:5,spaceBetween:20}},className:"mySwiper",children:i||!a||0===a.length?r:o})]})},p=s.memo(x),f=e=>{let{title:t,initialEndpoint:a,tabOptions:i,urlGenerator:r}=e;const[c,m]=(0,s.useState)(a),{data:u,loading:x}=(0,o.A)(r(c));return(0,l.jsxs)(n.A,{children:[(0,l.jsxs)("div",{className:"flex justify-between items-center my-2 container",children:[(0,l.jsxs)("h2",{className:"my-4 w-full font-bold text-2xl sm:text-3xl underline underline-offset-2 capitalize tracking-wider",children:[t," ",c]}),(0,l.jsx)(d,{data:i,onTabChange:e=>{m(e.toLowerCase())}})]}),(0,l.jsx)(p,{data:null===u||void 0===u?void 0:u.results,loading:x,mediaTypes:c})]})};const h=function(){return(0,l.jsxs)("main",{className:"relative bg-gradient-to-r from-black to-transparent w-screen h-full text-netflixWhite overflow-x-hidden",children:[(0,l.jsx)(r,{}),(0,l.jsx)("div",{className:"top-0 z-0 absolute bg-gradient-to-t from-netflixbackground via-transparent to-transparent bg-opacity-70 opacity-layer w-screen h-screen"}),(0,l.jsxs)("section",{className:"flex flex-col justify-start sm:justify-center items-start sm:items-center gap-4 bg-netflixbackground px-4 sm:px-0 py-10 w-screen text-netflixWhite",children:[(0,l.jsx)(f,{title:"Trending",initialEndpoint:"day",tabOptions:["day","week"],urlGenerator:e=>"/trending/movie/".concat(e)}),(0,l.jsx)(f,{title:"Popular",initialEndpoint:"tv",tabOptions:["tv","movie"],urlGenerator:e=>"/".concat(e,"/popular")}),(0,l.jsx)(f,{title:"Recent Animes",initialEndpoint:"movie",tabOptions:["movie","tv"],urlGenerator:e=>"/discover/".concat(e,"?sort_by=first_air_date.desc=&with_genres=16&with_original_language=ja")}),(0,l.jsx)(f,{title:"Top Rated",initialEndpoint:"movie",tabOptions:["movie","tv"],urlGenerator:e=>"/".concat(e,"/top_rated")})]})]})}},3862:(e,t,a)=>{a.d(t,{f:()=>n});var s=a(6213);const i={Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmU5MzM1Yjg5Y2E3NWE3MGJjY2UxYzcyYmZkMDQ4ZCIsInN1YiI6IjYzYmVkN2FiODU4Njc4MDBmMDhjZjI3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sQHes_rn51wewxY_7nZLxGssnd67J8ieiLOIo2Bg_FI")},n=async(e,t)=>{try{const{data:a}=await s.A.get("".concat("https://api.themoviedb.org/3").concat(e),{headers:i,params:t});return a}catch(a){throw console.error("Error fetching data: ",a.response?a.response.data:a.message),a}}}}]);
//# sourceMappingURL=62.c148174f.chunk.js.map