"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[1814],{2513:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"networking/promises","title":"Promises","description":"Handling Promise objects","source":"@site/docs/networking/promises.md","sourceDirName":"networking","slug":"/networking/promises","permalink":"/docs/networking/promises","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Promises","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"useEffect hook","permalink":"/docs/networking/useeffect"},"next":{"title":"Fetch","permalink":"/docs/networking/fetch"}}');var t=s(4848),a=s(8453);const r={title:"Promises",sidebar_position:3},o=void 0,c={},l=[{value:"Handling Promise objects",id:"handling-promise-objects",level:3},{value:"then-catch",id:"then-catch",level:4},{value:"async-await",id:"async-await",level:4},{value:"async-await example",id:"async-await-example",level:4},{value:"Using async-await in React code",id:"using-async-await-in-react-code",level:4},{value:"Immediate invokation",id:"immediate-invokation",level:4},{value:"Further reading",id:"further-reading",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",hr:"hr",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"handling-promise-objects",children:"Handling Promise objects"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fetch"})," calls are ",(0,t.jsx)(n.strong,{children:"asynchronous"})," and they return ",(0,t.jsx)(n.strong,{children:"Promise"})," objects."]}),"\n",(0,t.jsxs)(n.li,{children:["A promise is an object representing the completion of an asynchronous operation in future: the operation either succeeds (",(0,t.jsx)(n.em,{children:"fulfilled"}),") of fails (",(0,t.jsx)(n.em,{children:"rejected"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"The end result of a promise is not immediately available, and we do not know if the operation will succeed or not, nor do we know when it will be available."}),"\n",(0,t.jsxs)(n.li,{children:["For that reason, promise objects need special handling:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The handling needs to be launched when the value of the promise is available"}),"\n",(0,t.jsx)(n.li,{children:"We need to handle both successful results as well as failures"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"JavaScript provides two ways to handle promises"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"then-catch",children:"then-catch"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Promises can be handled using the Promise ",(0,t.jsx)(n.code,{children:"then"})," and ",(0,t.jsx)(n.code,{children:"catch"})," methods:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"fetch('https://mydomain.com/api')\n    .then(response => response.json())  // handle Promise success, handling returns Promise\n    .then(data => {                     // handle the latter Promise\n        // process response\n    })\n    .catch(error => console.error(error));   // handle failures\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When the promise resolves successfully, the result is passed as an argument to the handler function in the ",(0,t.jsx)(n.code,{children:"then"})," call."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"then"})," calls can be chained; the previous handler returns another promise."]}),"\n",(0,t.jsxs)(n.li,{children:["If the promise fails or there is any other error during the handling, the handler function passed in the ",(0,t.jsx)(n.code,{children:"catch"})," is called."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"async-await",children:"async-await"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ECMAScript 2017 added a new syntax for handling Promise objects."}),"\n",(0,t.jsx)(n.li,{children:"The purpose of the addition was to make asynchronous code easier to write and to read afterwards by making async code look more like old-school synchronous code."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"async"})," keyword put in front of a function declaration makes the function return a Promise instead of returning the value directly"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"await"})," can be put in front of any async function call to pause your code on that line until the promise fulfills, then return the resulting value"]}),"\n",(0,t.jsxs)(n.li,{children:["Errors are handled as exceptions, that is using ",(0,t.jsx)(n.code,{children:"try-catch"})," blocks"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"async-await-example",children:"async-await example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"fetchData = async () => {\n  try {\n    // execution is paused until the fetch call result is available\n    const response = await fetch('https://mydomain.com/api');\n    // execution is paused until the json call result is available\n    const data = await response.json();\n  }\n  catch(error) {    // any error results in exception, handled here\n    console.error(error);\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["asynchronous code is within a ",(0,t.jsx)(n.code,{children:"try"})," block. If any failure occurs, it will be handled in the ",(0,t.jsx)(n.code,{children:"catch"})," handler"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": ",(0,t.jsx)(n.code,{children:"await"})," only works inside ",(0,t.jsx)(n.code,{children:"async"})," functions! Even though the code looks like synchronous it is still asynchronous."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"using-async-await-in-react-code",children:"Using async-await in React code"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Both syntaxes are equally valid and usable, you can use either."}),"\n",(0,t.jsxs)(n.li,{children:["Note that the function passed to ",(0,t.jsx)(n.code,{children:"useEffect"})," may not be ",(0,t.jsx)(n.code,{children:"async"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"If you need to call an async function with useEffect, pass it a sychronous function that calls your asynchronous function, e.g."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"useEffect(() => {   // regular non-async function passed to useEffect\n    // define async function that makes the asyncronous calls\n    const doFetch = async () => {   \n        const result = await fetchData();  // call my async function \n        setData(result);\n    };\n    // call the async function\n    doFetch();\n  }, []);\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h4,{id:"immediate-invokation",children:"Immediate invokation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can do the same as previously also using immediate invokation (calling) of the newly declared function:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"useEffect(() => {   // regular non-async function passed to useEffect\n    // define async function expression that makes the asynchronous calls...\n    (async () => {   \n        const result = await fetchData();  // call my async function \n        setData(result);\n    })(); // ...and call it immediately\n\n  }, []);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Because the precedence of the function call operator ",(0,t.jsx)(n.code,{children:"()"})," is so high, the function expression (arrow function) needs to be in brackets"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises",children:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",children:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table",children:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(6540);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);