(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/img-2.c8ebc0f3.webp"},,,function(e,a,t){e.exports=t(49)},,,,,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/img-home.a096a32e.webp"},,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/img-9.24652050.webp"},function(e,a,t){e.exports=t.p+"static/media/img-4.be7df85f.webp"},function(e,a,t){e.exports=t.p+"static/media/img-3.64f08b18.webp"},function(e,a,t){e.exports=t.p+"static/media/img-7.dca391d0.webp"},function(e,a,t){},,,,function(e,a,t){e.exports=t.p+"static/media/img-8.59acd98f.webp"},function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(16),c=t.n(r),i=(t(27),t(3)),s=t(4);var o=function(e){return l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{onClick:e.onClick,to:"/"+e.to,className:e.sign?"nav-links-mobile":"nav-links"},e.title))},m=(t(29),["btn--primary","btn--outline"]),u=["btn--medium","btn--large"],E=function(e){var a=e.children,t=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,i=m.includes(r)?r:m[0],o=u.includes(c)?c:u[0];return l.a.createElement(s.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(i," ").concat(o),onClick:n,type:t},a))};t(31);var b=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),m=Object(i.a)(c,2),u=m[0],b=m[1],d=Object(n.useState)("Lolifmaster "),p=Object(i.a)(d,2),f=p[0],g=p[1],v=function(){return r(!1)},N=function(){window.innerWidth<=960?(b(!1),g("")):(b(!0),g("Lolifmaster"))};return Object(n.useEffect)(function(){return N(),window.addEventListener("resize",N),function(){window.removeEventListener("resize",N)}},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(s.b,{className:"navbar-logo",to:"/"},f," ",l.a.createElement("i",{className:"fa-solid fa-code"})),l.a.createElement("div",{className:"menu-icon",onClick:function(){r(!t)}},l.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement(o,{title:"Home",to:"",sign:!1,onClick:v}),l.a.createElement(o,{title:"Services",to:"Services",sign:!1,onClick:v}),l.a.createElement(o,{title:"Contact us",to:"contact",sign:!1,onClick:v}),l.a.createElement(o,{title:"Sign up",to:"Sign-up",sign:!0,onClick:v})),u&&l.a.createElement(E,{buttonStyle:"btn--outline"},"SIGN UP"))))},d=t(0);t(33);var p=function(e){var a=e.setLoading;return l.a.createElement("div",{className:"hero-container"},l.a.createElement("img",{className:"bg-img",src:t(35),alt:"background-img",onLoad:function(){console.log("loaded"),a(!1)}}),l.a.createElement("h1",{className:"title"},"ADVENTURE AWAITS"),l.a.createElement("p",null,"What is u doinnng"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(E,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"GET STARTED"),l.a.createElement(E,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large"}," WATCH TRAILER ",l.a.createElement("i",{className:"far fa-play-circle"}))))},f=t(17);t(36);var g=function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(s.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{src:e.src,alt:"Travel img",className:"cards__item__img",loading:"lazy",onLoad:function(){c(!0)}}),!r&&l.a.createElement(f.a,{className:"skeleton"})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))};t(38);var v=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",{className:"title"}," Check out these Epic Places"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(g,{src:t(40),text:"Explore the hidden jungle in Africa u bois",label:"Adventure",path:"/services"}),l.a.createElement(g,{src:t(41),text:"Play your best football game on an Island",label:"Island",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(g,{src:t(15),text:"Explore Best beaches",label:"Beach",path:"/services"}),l.a.createElement(g,{src:t(42),text:"Go deeper than anyone in the open sea",label:"Deep Sea",path:"/services"}),l.a.createElement(g,{src:t(43),text:"Discover your self and live your best life",label:"Discover",path:"/services"})))))};t(44);var N=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, in?"),l.a.createElement("p",{className:"footer-subscription-text"},"Lorem ipsum dolor sit amet."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),l.a.createElement(E,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",{className:"title"},"About Us"),l.a.createElement(s.b,{to:"/"},"Lorem ipsum dolor."),l.a.createElement(s.b,{to:"/"},"Iure optio, quisquam."),l.a.createElement(s.b,{to:"/"},"Fuga, laudantium tempore!"),l.a.createElement(s.b,{to:"/"},"Illo, quia, saepe?")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",{className:"title"},"Contact Us"),l.a.createElement(s.b,{to:"/"},"Lorem ipsum dolor."),l.a.createElement(s.b,{to:"/"},"A, beatae necessitatibus."),l.a.createElement(s.b,{to:"/"},"Aperiam, dolorum, reiciendis."),l.a.createElement(s.b,{to:"/"},"Dolorum, incidunt, provident."))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",{className:"title"},"Sponsers"),l.a.createElement(s.b,{to:"/"},"Lorem ipsum dolor."),l.a.createElement(s.b,{to:"/"},"Beatae, repudiandae, similique."),l.a.createElement(s.b,{to:"/"},"Beatae doloremque, nihil?"),l.a.createElement(s.b,{to:"/"},"Et officia, tempore.")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",{className:"title"},"Our Products"),l.a.createElement(s.b,{to:"/"},"Lorem ipsum dolor."),l.a.createElement(s.b,{to:"/"},"Distinctio, quis, ullam."),l.a.createElement(s.b,{to:"/"},"Consequuntur, esse, soluta!"),l.a.createElement(s.b,{to:"/"},"Hic provident, voluptates.")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(s.b,{to:"/",className:"social-logo title"},"Lolifmaster \xa0",l.a.createElement("i",{className:"fa-solid fa-code"}))),l.a.createElement("small",{className:"website-rights"},"Lolifmaster \xa9 2022"),l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{className:"social-icon-link facebook",href:"https://www.facebook.com/Chrf.Mounir",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("a",{className:"social-icon-link instagram",href:"https://www.instagram.com/chrf_mounir/",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram"},l.a.createElement("i",{className:"fab fa-instagram"})),l.a.createElement("a",{className:"social-icon-link github",href:"https://github.com/lolifmaster",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"},l.a.createElement("i",{className:"fab fa-github"})),l.a.createElement("a",{className:"social-icon-link twitter",href:"https://www.linkedin.com/in/mounir-charef-3397b1229/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},l.a.createElement("i",{className:"fab fa-linkedin"}))))))},h=t(9),k=t.n(h),w={display:"block",margin:"0 auto",translate:"0 40vh",color:"202020"};var _=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),t=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,t&&l.a.createElement(k.a,{size:50,color:"#252525",cssOverride:w,"aria-label":"Loading Spinner","data-testid":"loader"}),l.a.createElement("div",{style:t?{display:"none"}:{}},l.a.createElement(p,{setLoading:r}),l.a.createElement(v,null),l.a.createElement(N,null)))},S={display:"block",margin:"0 auto",translate:"0 40vh",color:"202020"};var y=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,r&&l.a.createElement(k.a,{size:50,color:"#252525",cssOverride:S,"aria-label":"Loading Spinner","data-testid":"loader"}),l.a.createElement("div",{className:"services",style:r?{display:"none"}:{}},l.a.createElement("img",{className:"bg-img",src:t(15),alt:"background-img",onLoad:function(){c(!1)}}),l.a.createElement("h1",{className:"title"}," Services")))},L={display:"block",margin:"0 auto",translate:"0 40vh",color:"202020"};var O=function(){var e=Object(n.useState)(!0),a=Object(i.a)(e,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,r&&l.a.createElement(k.a,{size:50,color:"#252525",cssOverride:L,"aria-label":"Loading Spinner","data-testid":"loader"}),l.a.createElement("div",{className:"services",style:r?{display:"none"}:{}},l.a.createElement("img",{className:"bg-img",src:t(48),alt:"background-img",onLoad:function(){c(!1)}}),l.a.createElement("h1",{className:"title"}," Sign Up")))},x=Object(n.lazy)(function(){return t.e(1).then(t.bind(null,53))});var j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",element:l.a.createElement(_,null)}),l.a.createElement(d.a,{path:"/services",element:l.a.createElement(y,null)}),l.a.createElement(d.a,{path:"/sign-up",element:l.a.createElement(O,null)}),l.a.createElement(d.a,{path:"/contact",element:l.a.createElement(n.Suspense,{fallback:l.a.createElement("p",{style:{textAlign:"center"}}," Loading ... ")},l.a.createElement(x,null))})))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(j,null))))}],[[18,3,2]]]);
//# sourceMappingURL=main.715579dd.chunk.js.map