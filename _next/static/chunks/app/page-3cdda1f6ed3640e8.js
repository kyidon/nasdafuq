(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6541:function(e,t,n){Promise.resolve().then(n.bind(n,9424))},9424:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var a=n(7437),r=n(2265),i=n(7914),s=n.n(i),o=n(3145),l=n(1084),c=n.n(l);function d(){return(0,a.jsx)("div",{className:c().gifHeader,children:[...Array(25)].map((e,t)=>(0,a.jsx)(o.default,{src:"/dancinggif.gif",alt:"Meme GIF",width:0,height:0},t))})}var m=n(4368),u=n.n(m);function _(e){let{autoplay:t}=e,n=(0,r.useRef)(null);return(0,r.useEffect)(()=>{t&&n.current&&(n.current.muted=!1,n.current.play())},[t]),(0,a.jsx)("div",{className:u().whatsupDance,children:(0,a.jsx)("video",{ref:n,src:"/herovideo.mp4",controls:!0,loop:!0,playsInline:!0,className:u().video,muted:!t,children:"Your browser does not support the video tag."})})}var h=n(6196),p=n.n(h);function f(e){let{onCommand:t}=e,[n,i]=(0,r.useState)(""),[s,o]=(0,r.useState)("");return(0,r.useEffect)(()=>{i("Welcome to NASDAFUQ Terminal!\n\nAvailable commands:\n/milady - Initiate Milady protocol\n/wtf    - Open chart video\n/tekken - Display K.O.\n/ca     - Show contract address\n\nEnter a command:")},[]),(0,a.jsxs)("div",{className:p().terminalWindow,children:[(0,a.jsxs)("div",{className:p().terminalHeader,children:[(0,a.jsx)("span",{children:"NASDAFUQ Terminal"}),(0,a.jsx)("button",{className:p().closeButton,children:"\xd7"})]}),(0,a.jsxs)("div",{className:p().terminalBody,children:[(0,a.jsx)("pre",{className:p().output,children:n}),(0,a.jsxs)("div",{className:p().inputLine,children:[(0,a.jsx)("span",{children:">"}),(0,a.jsx)("input",{type:"text",value:s,onChange:e=>o(e.target.value),onKeyPress:e=>{if("Enter"===e.key){let e=s.toLowerCase().trim(),n="";switch(e){case"/milady":t("milady"),n="Initiating Milady protocol...";break;case"/wtf":t("wtf"),n="Opening chart video...";break;case"/tekken":t("tekken"),n="K.O.!";break;case"/ca":n="Contract Address: 9FiUcfL9AnqbWtTUTDdzCctqeWihm76AbyzzsjEmpump";break;default:n="Command not recognized. Try /milady, /wtf, /tekken, or /ca"}i(e=>"".concat(e,"\n> ").concat(s,"\n").concat(n)),o("")}},placeholder:"Enter command..."})]})]})]})}var x=n(8316),k=n.n(x);function v(){return(0,a.jsxs)("div",{className:k().socialLinks,children:[(0,a.jsx)("a",{href:"https://x.com/nasdafuq",children:"Twitter"}),(0,a.jsx)("a",{href:"https://dexscreener.com/solana/9FiUcfL9AnqbWtTUTDdzCctqeWihm76AbyzzsjEmpump",children:"DexScreener"})]})}var j=n(1776),y=n.n(j),g=n(1448);function N(e){let{children:t}=e,[n,i]=(0,r.useState)(null),s=(0,r.useRef)(null);return(0,r.useEffect)(()=>(n||i(y()({el:s.current,THREE:g,color:65280,backgroundColor:0,points:10,maxDistance:20,spacing:15,showDots:!1})),()=>{n&&n.destroy()}),[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{ref:s,style:{position:"fixed",width:"100%",height:"100%",zIndex:-1}}),t]})}var w=n(2763),H=n.n(w);function b(){return(0,a.jsx)("div",{className:H().rocketContainer,children:[...Array(69)].map((e,t)=>(0,a.jsx)("div",{className:H().rocket,style:{animationDelay:"".concat(10*Math.random(),"s"),animationDuration:"".concat(5+5*Math.random(),"s")},children:(0,a.jsx)(o.default,{src:"/rocket-removebg-preview.png",alt:"Rocket",width:50,height:50,className:H().rocketImage})},t))})}var E=n(8021),D=n.n(E);function W(e){let{onEnter:t}=e;return(0,a.jsxs)("div",{className:D().overlay,children:[(0,a.jsx)("header",{className:D().title}),(0,a.jsxs)("div",{className:D().popup,children:[(0,a.jsx)("h2",{children:"I love you"}),(0,a.jsx)("button",{onClick:t,children:"Enter"})]})]})}function O(){let[e,t]=(0,r.useState)(null),[n,i]=(0,r.useState)(!0),[l,c]=(0,r.useState)(!1),m=(0,r.useRef)(null);return((0,r.useEffect)(()=>{"wtf"===e&&m.current&&m.current.play()},[e]),n)?(0,a.jsx)(W,{onEnter:()=>{i(!1),c(!0)}}):(0,a.jsx)(N,{children:(0,a.jsxs)("div",{className:s().container,children:[(0,a.jsx)(b,{}),(0,a.jsxs)("header",{className:s().header,children:[(0,a.jsx)("h1",{className:s().title}),(0,a.jsx)("p",{className:s().subtitle,children:"Da fuq we doin' ova here?"})]}),(0,a.jsx)(d,{}),(0,a.jsx)(v,{}),(0,a.jsx)("main",{className:s().main,children:(0,a.jsxs)("div",{className:s().contentWrapper,children:[(0,a.jsx)(_,{autoplay:l}),(0,a.jsx)("div",{className:s().terminalWrapper,children:(0,a.jsx)(f,{onCommand:e=>{t(e),("milady"===e||"wtf"===e||"tekken"===e)&&setTimeout(()=>t(null),6e3)}})})]})}),(0,a.jsx)("footer",{className:s().footer,children:(0,a.jsx)(d,{})}),"milady"===e&&(0,a.jsx)("div",{className:s().glitchOverlay,children:(0,a.jsx)(o.default,{src:"/milady.png",alt:"Milady",width:300,height:300,className:s().miladyImage})}),"wtf"===e&&(0,a.jsx)("div",{className:s().chartPopup,children:(0,a.jsx)("video",{ref:m,src:"/chart.mp4",width:500,height:300,controls:!0,loop:!0})}),"tekken"===e&&(0,a.jsx)("div",{className:s().koOverlay,children:(0,a.jsx)("span",{children:"K.O."})})]})})}},8021:function(e){e.exports={overlay:"EnterPopup_overlay__APq_H",title:"EnterPopup_title__6cenD",popup:"EnterPopup_popup__fuogv"}},6196:function(e){e.exports={terminalContainer:"FakeTerminal_terminalContainer__5ifp1",terminalWindow:"FakeTerminal_terminalWindow__JbQoK",terminalHeader:"FakeTerminal_terminalHeader__QnoEr",closeButton:"FakeTerminal_closeButton__yfJ9P",terminalBody:"FakeTerminal_terminalBody__L45F5",output:"FakeTerminal_output__1dA1W",inputLine:"FakeTerminal_inputLine__58CBg"}},1084:function(e){e.exports={gifHeader:"m"}},7914:function(e){e.exports={container:"Home_container__XXbpJ",main:"Home_main__9U9PE",staticOverlay:"Home_staticOverlay__odDrJ",chartPopup:"Home_chartPopup__Li6e0",koOverlay:"Home_koOverlay__h8lRR",title:"Home_title__u58B2",subtitle:"Home_subtitle__t28Wc",contentWrapper:"Home_contentWrapper__PW6ZI",terminalWrapper:"Home_terminalWrapper__IOO_2",flash:"Home_flash__urOvN",glitchOverlay:"Home_glitchOverlay__Vl2G9",glitchBackground:"Home_glitchBackground__1Sy1_",glitchAnimation:"Home_glitchAnimation__2KRat",miladyImage:"Home_miladyImage__Ap_o5"}},2763:function(e){e.exports={rocketContainer:"Rockets_rocketContainer__a72WL",rocket:"Rockets_rocket__vJ3jk",flyDiagonal:"Rockets_flyDiagonal__Xr1qH",rocketImage:"Rockets_rocketImage__JXnGF"}},8316:function(e){e.exports={socialLinks:"SocialLinks_socialLinks__0gHGL"}},4368:function(e){e.exports={whatsupDance:"WhatsupDance_whatsupDance__ERINe"}}},function(e){e.O(0,[583,689,385,971,117,744],function(){return e(e.s=6541)}),_N_E=e.O()}]);
