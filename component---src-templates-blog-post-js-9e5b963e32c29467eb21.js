"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{9535:function(e,t,a){var n=a(7294),l=a(5444),i=a(2359);t.Z=function(){var e,t,r=(0,l.useStaticQuery)("3257411868"),c=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return n.createElement("div",{className:"bio"},n.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/myface.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(5855)}),(null==c?void 0:c.name)&&n.createElement("p",null,"Hey, I am ",n.createElement("strong",null,c.name),". ",(null==c?void 0:c.summary)||null," ",n.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"And sometimes I post on Twitter.")))}},7198:function(e,t,a){var n=a(7294),l=a(5444);t.Z=function(e){var t,a=e.location,i=e.title,r=e.children,c="/"===a.pathname;return t=c?n.createElement("h1",{className:"main-heading"},n.createElement(l.Link,{to:"/"},i)):n.createElement(l.Link,{className:"header-link-home",to:"/"},i),n.createElement("div",{className:"global-wrapper","data-is-root-path":c},n.createElement("header",{className:"global-header"},t),n.createElement("main",null,r),n.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},6179:function(e,t,a){var n=a(7294),l=a(5414),i=a(5444),r=function(e){var t,a,r,c=e.description,o=e.lang,s=e.meta,m=e.title,u=(0,i.useStaticQuery)("2841359383").site,f=c||u.siteMetadata.description,d=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(l.q,{htmlAttributes:{lang:o},title:m,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:f},{property:"og:title",content:m},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:f}].concat(s)})};r.defaultProps={lang:"en",meta:[],description:""},t.Z=r},4870:function(e,t,a){a.r(t);var n=a(7294),l=a(5444),i=a(9535),r=a(7198),c=a(6179);t.default=function(e){var t,a=e.data,o=e.location,s=a.markdownRemark,m=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=a.previous,f=a.next;return n.createElement(r.Z,{location:o,title:m},n.createElement(c.Z,{title:s.frontmatter.title,description:s.frontmatter.description||s.excerpt}),n.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline"},s.frontmatter.title),n.createElement("p",null,s.frontmatter.date)),n.createElement("section",{dangerouslySetInnerHTML:{__html:s.html},itemProp:"articleBody"}),n.createElement("hr",null),n.createElement("footer",null,n.createElement(i.Z,null))),n.createElement("nav",{className:"blog-post-nav"},n.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.createElement("li",null,u&&n.createElement(l.Link,{to:u.fields.slug,rel:"prev"},"← ",u.frontmatter.title)),n.createElement("li",null,f&&n.createElement(l.Link,{to:f.fields.slug,rel:"next"},f.frontmatter.title," →")))))}},5855:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/f0235b9e2e3c04825f6c031cae54e290/d24ee/myface.jpg","srcSet":"/static/f0235b9e2e3c04825f6c031cae54e290/d24ee/myface.jpg 50w,\\n/static/f0235b9e2e3c04825f6c031cae54e290/64618/myface.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/f0235b9e2e3c04825f6c031cae54e290/d4bf4/myface.avif 50w,\\n/static/f0235b9e2e3c04825f6c031cae54e290/ee81f/myface.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/f0235b9e2e3c04825f6c031cae54e290/3faea/myface.webp 50w,\\n/static/f0235b9e2e3c04825f6c031cae54e290/6a679/myface.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9e5b963e32c29467eb21.js.map