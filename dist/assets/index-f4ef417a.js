import{A as k}from"./index-6d097d4f.js";import{d as i,o,c as _,a as e,t as c,b as n,w as f,e as p,_ as m,f as r,g as L,u as b,F as v,r as g,h,p as d,i as u,j as R}from"./index-ac8ddef6.js";const U={class:"image"},A={class:"image__background"},j=["src"],x={class:"image__info"},I={class:"image__foreground"},T=["src"],J={class:"image__text"},C={class:"image__enName"},K={class:"image__ruName"},O={class:"image__features"},S={class:"image__feature"},M={class:"image__feature"},N={class:"image__feature"},B={class:"image__feature"},H={name:"Image"},D=i({...H,props:{background:{},foreground:{},enName:{},ruName:{},read:{},likes:{},favorites:{},viewer:{}},setup(t){const a=t;return(l,s)=>(o(),_("div",U,[e("div",A,[e("img",{src:a.background,alt:"Background Icon"},null,8,j)]),e("div",x,[e("div",I,[e("img",{src:a.foreground,alt:"Foreground Icon"},null,8,T),e("div",J,[e("h3",C,c(a.enName),1),e("h2",K,c(a.ruName),1),e("div",O,[n(k,{type:"primary",size:"lg"},{default:f(()=>[p("Читать")]),_:1}),e("div",S,[n(m,{name:"read"}),e("p",null,c(a.read),1)]),e("div",M,[n(m,{name:"likes"}),e("p",null,c(a.likes),1)]),e("div",N,[n(m,{name:"favorites"}),e("p",null,c(a.favorites),1)]),e("div",B,[n(m,{name:"viewer"}),e("p",null,c(a.viewer),1)])])])])])]))}});const G=r(D,[["__scopeId","data-v-6fe8c885"]]),F={name:"main-image"},V=i({...F,setup(t){const a=new URL("/assets/backgroundLogo-c06e0fcb.svg",self.location),l=new URL("/assets/foregroundLogo-2418ef57.svg",self.location);return(s,y)=>(o(),L(G,{"ru-name":"Магическая битва",background:b(a),"en-name":"Jujutsu Kaisen",foreground:b(l),read:"32.2k",likes:"132.2k",favorites:"9.3(12.2k)",viewer:"3.2m"},null,8,["background","foreground"]))}}),z={class:"card"},P=["src"],E={class:"card__title"},q={name:"Cards"},Q=i({...q,props:{cards:{}},setup(t){return(a,l)=>(o(),_("div",z,[(o(!0),_(v,null,g(a.cards,s=>(o(),_("div",{key:s.key,class:"card__item"},[h(a.$slots,s.key,{},()=>[e("img",{src:s.url,alt:"title"},null,8,P)],!0),h(a.$slots,s.key,{},()=>[e("span",E,c(s.label),1)],!0)]))),128))]))}});const $=r(Q,[["__scopeId","data-v-94165e04"]]),W=t=>(d("data-v-4954d7f3"),t=t(),u(),t),X={class:"main-release"},Y=W(()=>e("div",{class:"main__releases"},[e("h1",{class:"main__release-title"},"Ближайшие релизы")],-1)),Z={name:"release-cards"},ee=i({...Z,setup(t){const a=[{key:"D.Gray-Man",label:"D.Gray-man",url:new URL("/assets/dGrayMan-d08921e1.svg",self.location)},{key:"Blue Lock",label:"Синяя Тюрьма: Блю Лок",url:new URL("/assets/blueLock-f845b878.svg",self.location)},{key:"Jujutsu Kaisen",label:"Магическая Битва",url:new URL("/assets/jujutsuKaisen-5339cf76.svg",self.location)},{key:"Ragnar Crimson",label:"Рагна Багровый",url:new URL("/assets/ragnarCrimson-c96edd56.svg",self.location)},{key:"My Hero Academy",label:"Моя геройская Академия",url:new URL("/assets/myHeroAcademy-03a06033.svg",self.location)},{key:"Child of Idol",label:"Звездное дитя",url:new URL("/assets/oshinoko-f248805b.svg",self.location)}];return(l,s)=>(o(),_("div",X,[Y,n($,{cards:a})]))}});const se=r(ee,[["__scopeId","data-v-4954d7f3"]]),w=t=>(d("data-v-3d88c3b0"),t=t(),u(),t),te={class:"petition"},ae={class:"petition__image"},oe=["src"],ne={class:"petition__info"},ce={class:"petition__title"},_e={class:"petition__types"},le={class:"petition__time"},ie={class:"petition__format"},re=w(()=>e("span",null,"Формат выпуска: ",-1)),de={class:"petition__chapter"},ue=w(()=>e("span",null,"Кол. глав: ",-1)),me={class:"petition__chap"},fe={name:"petition-card"},pe=i({...fe,props:{petitions:{}},setup(t){return(a,l)=>(o(),_("div",te,[(o(!0),_(v,null,g(a.petitions,s=>(o(),_("div",{key:s.key,class:"petition__items"},[e("div",ae,[h(a.$slots,s.key,{},()=>[e("img",{src:s.url,alt:"Img"},null,8,oe)],!0)]),e("div",ne,[e("div",ce,c(s.name),1),e("div",_e,[(o(!0),_(v,null,g(s.type,y=>(o(),_("span",{class:"petition__type",key:s.key},c(y),1))),128))]),e("div",le,[e("div",ie,[re,e("span",null,c(s.format),1)]),e("div",de,[ue,e("span",me,c(s.chapters),1)])]),n(k,{size:"lg",type:"primary","full-width":""},{default:f(()=>[p("Подписать петицию")]),_:1})])]))),128))]))}});const ve=r(pe,[["__scopeId","data-v-3d88c3b0"]]),ge=t=>(d("data-v-6a7aacc7"),t=t(),u(),t),he={class:"petition"},ye=ge(()=>e("div",{class:"main_petition"},[e("h1",{class:"main__petition-title"},"Петиция на перевод")],-1)),be={name:"petitions"},ke=i({...be,setup(t){const a=[{key:"Ragnar Crimson",url:new URL("/assets/ragnarCrimson-c96edd56.svg",self.location),name:"Рагна Багровый",type:["Манга","Выпускается","2023"],format:"еженедельник",chapters:"53"}];return(l,s)=>(o(),_("div",he,[ye,n(ve,{petitions:a})]))}});const $e=r(ke,[["__scopeId","data-v-6a7aacc7"]]),we={class:"table"},Le={class:"table__titles"},Re={class:"table__img"},Ue=["src"],Ae={class:"table__info"},je={class:"table__title"},xe={class:"table__chapters"},Ie={class:"table__tome"},Te={class:"table__chapter"},Je={class:"table__name"},Ce={class:"table__footer"},Ke={class:"table__team"},Oe=["src"],Se={class:"table__time"},Me={name:"title-table"},Ne=i({...Me,props:{table:{}},setup(t){return(a,l)=>(o(),_("div",we,[e("div",Le,[(o(!0),_(v,null,g(a.table,s=>(o(),_("div",{key:s.key,class:"table__items"},[e("div",Re,[e("img",{src:s.url,alt:""},null,8,Ue)]),e("div",Ae,[e("div",je,c(s.title),1),e("div",xe,[e("span",Ie,c(s.tome),1),e("span",Te,c(s.chapter),1),e("span",Je,c(s.name),1)]),e("div",Ce,[e("div",Ke,[e("span",null,[e("img",{src:s.icon,alt:""},null,8,Oe)]),e("span",null,c(s.team),1)]),e("div",Se,[e("span",null,c(s.time),1)])])])]))),128))])]))}});const Be=r(Ne,[["__scopeId","data-v-f730a8de"]]),He=t=>(d("data-v-28401b51"),t=t(),u(),t),De={class:"last-release"},Ge=He(()=>e("div",{class:"last-title"},"Последнее обновление",-1)),Fe={name:"title-card"},Ve=i({...Fe,setup(t){const a=[{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/oshinokoTitle-4943e509.svg",self.location),key:"Child of Idol",title:"Звездное дитя",tome:"Том 12",chapter:"Глава 121",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"41 минут назад"},{url:new URL("/assets/bluelockTitle-fb4e1211.svg",self.location),key:"Blue Lock",title:"Синяя Тюрьма: Блю-Лок",tome:"Том 22",chapter:"Глава 191",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"59 минут назад"},{url:new URL("/assets/ragrarcrimsonTitle-cf478243.svg",self.location),key:"Ragnar Crimson",title:"Рагна Багровый",tome:"Том 11",chapter:"Глава 54",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"1 час назад"},{url:new URL("/assets/dgraymanTitle-ee8ef247.svg",self.location),key:"D.Gray-man",title:"D.Dray-man",tome:"Том 29",chapter:"Глава 248",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"1 час назад"},{url:new URL("/assets/heroacademyTitle-d113e4f4.svg",self.location),key:"My Hero Academy",title:"Моя геройская академия",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"},{url:new URL("/assets/titleJujutsu-acf78144.svg",self.location),key:"Jujutsu Kaisen",title:"Магическая битва",tome:"Том 22",chapter:"Глава 226",name:"Земли дьявола, противосто ...",icon:new URL("/assets/atoa-a3f1c33b.svg",self.location),team:"ATOA team",time:"39 минут назад"}];return(l,s)=>(o(),_("div",De,[Ge,n(Be,{table:a})]))}});const ze=r(Ve,[["__scopeId","data-v-28401b51"]]),Pe=t=>(d("data-v-d5c64a56"),t=t(),u(),t),Ee={class:"new-releases"},qe=Pe(()=>e("div",{class:"release-title"},"Новинки",-1)),Qe={name:"new-releases"},We=i({...Qe,setup(t){const a=[{key:"D.Gray-Man",label:"D.Gray-man",url:new URL("/assets/dGrayMan-d08921e1.svg",self.location)},{key:"Blue Lock",label:"Синяя Тюрьма: Блю Лок",url:new URL("/assets/blueLock-f845b878.svg",self.location)},{key:"Jujutsu Kaisen",label:"Магическая Битва",url:new URL("/assets/jujutsuKaisen-5339cf76.svg",self.location)},{key:"My Hero Academy",label:"Моя геройская Академия",url:new URL("/assets/myHeroAcademy-03a06033.svg",self.location)},{key:"Ragnar Crimson",label:"Рагна Багровый",url:new URL("/assets/ragnarCrimson-c96edd56.svg",self.location)},{key:"My Hero Academy",label:"Моя геройская Академия",url:new URL("/assets/myHeroAcademy-03a06033.svg",self.location)},{key:"Ragnar Crimson",label:"Рагна Багровый",url:new URL("/assets/ragnarCrimson-c96edd56.svg",self.location)},{key:"My Hero Academy",label:"Моя геройская Академия",url:new URL("/assets/myHeroAcademy-03a06033.svg",self.location)}];return(l,s)=>(o(),_("div",Ee,[qe,n($,{cards:a})]))}});const Xe=r(We,[["__scopeId","data-v-d5c64a56"]]),Ye={class:"main"},Ze={class:"main__block"},es={name:"Main"},ss=i({...es,setup(t){return(a,l)=>{const s=R("router-link");return o(),_("div",Ye,[n(V),e("div",Ze,[n(s,{to:"auth/sign-in"},{default:f(()=>[p("Signin")]),_:1}),n(s,{to:"auth/sign-up"},{default:f(()=>[p("Signup")]),_:1}),n(se),n($e,{class:"main__petition"})]),n(ze),n(Xe)])}}});const os=r(ss,[["__scopeId","data-v-ddbe4c83"]]);export{os as default};
