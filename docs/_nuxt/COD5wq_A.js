import{a as g,q as m}from"./Dgh50Cq2.js";import{l as C,J as S,K as b,k,i as Q,m as _,s as $}from"./R1MTu8gZ.js";import{h as A}from"./Biaie6MM.js";const N=C({name:"ContentQuery",props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(u){const{path:t,only:r,without:o,where:a,sort:l,limit:f,skip:d,locale:s,find:h}=S(u),y=b(()=>{var e;return(e=t.value)==null?void 0:e.includes("/_")}),p=!k().public.content.experimental.advanceQuery;Q(()=>u,()=>n(),{deep:!0});const i=e=>p?e!=null&&e.surround?e.surround:e!=null&&e._id||Array.isArray(e)?e:e==null?void 0:e.result:e.result,{data:v,refresh:n}=await g(`content-query-${A(u)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),o.value&&(e=e.without(o.value)),a.value&&(e=e.where(a.value)),l.value&&(e=e.sort(l.value)),f.value&&(e=e.limit(f.value)),d.value&&(e=e.skip(d.value)),s.value&&(e=e.where({_locale:s.value})),h.value==="one"?e.findOne().then(i):h.value==="surround"?t.value?p?e.findSurround(t.value):e.withSurround(t.value).findOne().then(i):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find().then(i)):e.find().then(i)});return{isPartial:y,data:v,refresh:n}},render(u){var c;const t=_(),{data:r,refresh:o,isPartial:a,path:l,only:f,without:d,where:s,sort:h,limit:y,skip:p,locale:i,find:v}=u,n={path:l,only:f,without:d,where:s,sort:h,limit:y,skip:p,locale:i,find:v};if(n.find==="one"){if(!r&&(t!=null&&t["not-found"]))return t["not-found"]({props:n,...this.$attrs});if(t!=null&&t.empty&&(r==null?void 0:r._type)==="markdown"&&!((c=r==null?void 0:r.body)!=null&&c.children.length))return t.empty({props:n,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:n,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:o,isPartial:a,props:n,...this.$attrs}):((w,q)=>$("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:q},null,2)))("default",{data:r,props:n,isPartial:a})}}),O=N,J=O;export{J as default};
