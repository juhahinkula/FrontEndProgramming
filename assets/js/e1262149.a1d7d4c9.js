"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[1027],{175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"testing/testing","title":"JavaScript Testing","description":"Jest","source":"@site/docs/testing/testing.md","sourceDirName":"testing","slug":"/testing/","permalink":"/docs/testing/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"JavaScript Testing","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/testing/intro"},"next":{"title":"Vitest","permalink":"/docs/testing/vitest"}}');var i=n(4848),r=n(8453);const o={title:"JavaScript Testing",sidebar_position:2},c=void 0,l={},a=[{value:"Jest",id:"jest",level:4}];function d(e){const t={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h4,{id:"jest",children:"Jest"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Jest"})," is one of the most popular testing library for JavaScript (",(0,i.jsx)(t.a,{href:"https://jestjs.io/",children:"https://jestjs.io/"}),"). It works with projects using TypeScript."]}),"\n",(0,i.jsx)(t.li,{children:"Jest is not fully supported by Vite but it is good to know some basics of Jest."}),"\n",(0,i.jsx)(t.li,{children:"For example, if we have a simple function:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"function multiply(x, y) {\n  return x * y;\n}\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Test case for the ",(0,i.jsx)(t.code,{children:"multiply"})," function looks like the following:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'test("test 2 * 3", () => {\n  expect(multiply(2, 3)).toBe(6);\n});\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"test"})," function takes two arguments: a unique name and a test case. You can also use the alias ",(0,i.jsx)(t.code,{children:"it"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"expect"})," function is used when you want to test some values. It is normally used with matchers."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"toBe"})," is a Jest matcher that checks the value that function returns."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Find more information about matchers in the Jest documentation."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You can use the ",(0,i.jsx)(t.code,{children:"describe"})," to group together related test cases."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'describe("App component tests", () => {\n  test("component renders", () => {\n    // 1st test case\n  });\n\n  test("header text is shown", () => {\n    // 2nd test case\n  });\n});\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);