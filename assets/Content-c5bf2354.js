import{u as w,r as i,d as B,o as C,e as v,a,c as u,f as s,g as c,t as b,F as g,h as x,i as h,b as L,j as N,k as y}from"./index-22adb7ce.js";import{_ as F}from"./ContentItem-89c95bf0.js";const P={key:0,class:"content"},R={class:"container"},S={class:"content__title"},T={class:"content__list"},j={class:"content__pagination"},E={__name:"Content",props:["type"],setup(r){const p=r,n=w();let e=i(1),t=i([]),l=i(!1);const f=B(()=>n.totalResults),m=async()=>{if(!l.value){l.value=!0,t.value=[],await n.getPopular(p.type,e.value);let _=p.type=="movie"?n.movie:n.tv;t.value.push(..._),l.value=!1,e.value+1,scrollTo({behavior:"smooth",top:0})}};return C(()=>{m(),scrollTo({behavior:"smooth",top:0})}),(_,d)=>{const k=v("vue-awesome-paginate"),V=v("Loader");return a(),u(g,null,[s(t).length>0?(a(),u("section",P,[c("div",R,[c("h2",S,b(r.type=="movie"?"Все фильмы":"Все сериалы"),1),c("div",T,[(a(!0),u(g,null,x(s(t),o=>(a(),h(F,{key:o.id,content:o,type:r.type},null,8,["content","type"]))),128))]),c("div",j,[L(k,{"total-items":f.value,"items-per-page":20,"max-page-shown":5,modelValue:s(e),"onUpdate:modelValue":d[0]||(d[0]=o=>N(e)?e.value=o:e=o),"on-click":m},null,8,["total-items","modelValue"])])])])):y("",!0),s(t).length<1||s(l)?(a(),h(V,{key:1})):y("",!0)],64)}}};export{E as _};
//# sourceMappingURL=Content-c5bf2354.js.map
