import{_ as a,c as r,a as t,t as o,o as _}from"./DFw4hbQL.js";const l={async asyncData({params:e}){const n=e.slug;return{post:await this.$content("blog",n).fetch()}},data(){return{post:{}}}},p={class:"max-w-3xl mx-auto px-4 py-8"},i={class:"text-3xl font-bold mb-4"},u={class:"text-gray-600 mb-4"},d={class:"prose"},h=["innerHTML"];function x(e,n,c,f,s,m){return _(),r("div",p,[t("h1",i,o(s.post.title),1),t("div",u,[t("p",null,"Author: "+o(s.post.author),1),t("p",null,"Date: "+o(s.post.date),1)]),t("div",d,[t("div",{innerHTML:s.post.content},null,8,h)])])}const y=a(l,[["render",x]]);export{y as default};
