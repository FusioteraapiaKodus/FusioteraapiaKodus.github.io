import{k as e,B as s,u as n,q as u,s as d,p as l,aX as v,x as c}from"./Cf6qgKAq.js";const i=e({name:"CardBody",props:{...s,tag:{type:String,default:"div"}},setup(o,a){const r=n(o),t={class:{"card-body":!0}};return()=>u(o.tag,d(t,r),a.slots)}}),x=e({name:"Card",props:{...s,tag:{type:String,default:"div"},color:{type:String,default:void 0}},setup(o,a){const r=n(o),t=l(()=>v("text-bg-color",o.color)),b={class:{card:!0,[`text-bg-${o.color}`]:o.color&&t.value},style:l(()=>({...c(o.color&&!t.value,"--bs-card-bg",`var(--bs-${o.color})`),...c(o.color&&!t.value,"--bs-card-cap-bg",`var(--bs-${o.color})`),...c(o.color&&!t.value,"--bs-card-border-color",`var(--bs-active-${o.color})`),...c(!o.textColor&&o.color&&!t.value,"--bs-card-color",`var(--bs-contrast-${o.color})`),...c(!o.textColor&&o.color&&!t.value,"--bs-card-title-color",`var(--bs-contrast-${o.color})`),...c(!o.textColor&&o.color&&!t.value,"--bs-card-subtitle-color",`var(--bs-contrast-${o.color})`),...c(!o.textColor&&o.color&&!t.value,"--bs-card-cap-color",`var(--bs-contrast-${o.color})`)}))};return()=>u(o.tag,d(b,r),a.slots)}});export{i as _,x as a};
