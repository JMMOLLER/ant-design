"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8598],{458598:function(R,o,t){t.r(o);var M=t(805574),l=t.n(M),e=t(667294),d=t(639389),B=t.n(d),f=t(548657),v=t(796586),D=t(700781),m=t(106750),h=t(727484),O=t.n(h),P=t(385956),r=t(785893),c=function(n){var _=n.name,a=n.avatar,s=(0,e.useState)(!0),E=l()(s,2),j=E[0],C=E[1],I=(0,e.useState)(!1),i=l()(I,2),L=i[0],T=i[1];return(0,e.useLayoutEffect)(function(){var u=new Image;u.src=a,u.onload=function(){return C(!1)},u.onerror=function(){return T(!0)}},[]),L?null:j?(0,r.jsx)(f.Z.Avatar,{size:"small",active:!0}):(0,r.jsx)(v.C,{size:"small",src:a,alt:_,children:_})},A=function(){var n=(0,P.useRouteMeta)(),_=(0,e.useMemo)(function(){var a=n.frontmatter.author;return a?typeof a=="string"?a.split(",").map(function(s){return{name:s,avatar:"https://github.com/".concat(s,".png")}}):Array.isArray(a)?a:[]:[]},[n.frontmatter.author]);return!n.frontmatter.date&&!n.frontmatter.author?null:(0,r.jsx)(D.Z.Paragraph,{children:(0,r.jsxs)(m.Z,{gap:"small",children:[n.frontmatter.date&&(0,r.jsxs)("span",{style:{opacity:.65},children:[(0,r.jsx)(d.CalendarOutlined,{})," ",O()(n.frontmatter.date).format("YYYY-MM-DD")]}),_.map(function(a){return(0,r.jsx)("a",{href:"https://github.com/".concat(a.name),target:"_blank",rel:"noopener noreferrer",children:(0,r.jsxs)(m.Z,{gap:4,children:[(0,r.jsx)(c,{name:a.name,avatar:a.avatar}),(0,r.jsxs)("span",{style:{opacity:.65},children:["@",a.name]})]})},a.name)})]})})};o.default=A}}]);
