"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[1166],{3254:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"reactproject/typescript","title":"TypeScript","description":"TypeScript - Basics","source":"@site/docs/reactproject/typescript.md","sourceDirName":"reactproject","slug":"/reactproject/typescript","permalink":"/docs/reactproject/typescript","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"TypeScript","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/reactproject/intro"},"next":{"title":"JavaScript Modules","permalink":"/docs/reactproject/modules"}}');var t=s(4848),i=s(8453);const a={title:"TypeScript",sidebar_position:1},l=void 0,c={},o=[{value:"TypeScript - Basics",id:"typescript---basics",level:3},{value:"Type inference",id:"type-inference",level:4},{value:"Functions",id:"functions",level:4},{value:"Arrays",id:"arrays",level:4},{value:"Union types",id:"union-types",level:4},{value:"Structural types",id:"structural-types",level:4},{value:"React &amp; TypeScript",id:"react--typescript",level:3},{value:"Component props",id:"component-props",level:4},{value:"Function components",id:"function-components",level:4},{value:"useState hook",id:"usestate-hook",level:4},{value:"Forms &amp; Events",id:"forms--events",level:4},{value:"Fetching Data",id:"fetching-data",level:3},{value:"Further reading",id:"further-reading",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"typescript---basics",children:"TypeScript - Basics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["TypeScript is strongly typed programming language (",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"https://www.typescriptlang.org/"}),") that is based on JavaScript."]}),"\n",(0,t.jsxs)(n.li,{children:["Benefits of using TypeScript:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Catch errors before pushing your code to production."}),"\n",(0,t.jsx)(n.li,{children:"Code is easier to understand and refactor/maintain."}),"\n",(0,t.jsx)(n.li,{children:"Provides more information to developer (Self documented)"}),"\n",(0,t.jsx)(n.li,{children:"More popular nowadays (Great skill)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["You can try TypeScript in your browser: ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/play",children:"https://www.typescriptlang.org/play"})]}),"\n",(0,t.jsx)(n.li,{children:"You can install TypeScript into your project using the npm:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install typescript --save-dev\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Then you can run TypeScript compiler using the following command:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx tsc\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can also install TypeScript globally and then ",(0,t.jsx)(n.code,{children:"tsc"})," command is available in all locations in your terminal."]}),"\n",(0,t.jsxs)(n.li,{children:["VSCode provides nice features for TS development. Read mode here: ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/languages/typescript",children:"https://code.visualstudio.com/docs/languages/typescript"})]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"type-inference",children:"Type inference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["TypeScript will automatically define the type when you initialize a variable. In the following example, we declare variable ",(0,t.jsx)(n.code,{children:"helloworld"})," and assign it to a string value. If we try to re-assign it with other type, we get an error."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(1420).A+"",width:"1014",height:"201"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The most common primitive types are: ",(0,t.jsx)(n.code,{children:"string"}),", ",(0,t.jsx)(n.code,{children:"number"})," and ",(0,t.jsx)(n.code,{children:"boolean"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["See the different types: ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",children:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"You can set explicit type to a variable:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let name: string\nlet age: number\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can check the type using the ",(0,t.jsx)(n.code,{children:"typeof"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'typeof name === "string" // true\ntypeof age === "number" // true\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the type is not known when you write code, you can use ",(0,t.jsx)(n.code,{children:"unknown"})," type."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let a: unknown = 10\na = "It should be string"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you want to exlude type checking, you can use ",(0,t.jsx)(n.code,{children:"any"})," type."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let a: any = 10\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"unknown"})," type is a safer alternative to ",(0,t.jsx)(n.code,{children:"any"}),". It represents any value, but you cannot perform operations on it without first asserting its type. The code below demonstrates the difference between ",(0,t.jsx)(n.code,{children:"any"})," and ",(0,t.jsx)(n.code,{children:"unknown"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"unknown"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let value: unknown\n\nvalue = 42 // This is OK\nvalue = "hello" // This is OK\nvalue = true // This is OK\n\n// Type checking is required before using the value\nif (typeof value === "number") {\n  let num: number = value\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"any"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let value: any\n\nvalue = 42 // This is OK\nvalue = "hello" // This is OK\nvalue = true // This is OK\n\n// Type checking is not required\n// This is OK, but potentially unsafe\nlet num: number = value\n'})}),"\n",(0,t.jsx)(n.h4,{id:"functions",children:"Functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can define the type of parameters and return value"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function calc(x: number, y: number): number {\n  return x * y\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In JavaScript function parameters are optional by default."}),"\n",(0,t.jsxs)(n.li,{children:["In TypeScript, you will get an error if you don't pass all function parameters. To make function parameter optional, you can use ",(0,t.jsx)(n.code,{children:"?"})," after the parameter name."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function sayHello(name: string, age?: number): string {\n  if (!age) return `Hello ${name}`\n\n  return `Hello ${name}, you are ${age} year(s) old`\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Now, you can call function in the following ways:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'sayHello("John")\n// or\nsayHello("John", 20)\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If there is no return value, you can use the ",(0,t.jsx)(n.code,{children:"void"})," keyword:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function logMessage(message: string): void {\n  console.log(message)\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"arrays",children:"Arrays"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Arrays are declared with the following syntax:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const arr: type[]\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For example:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'let names: string[]\nnames = ["John", "Lisa", "Mike"]\n\n// You can also use Array() constructor\nlet nums: number[] = new Array(10)\nnums[0] = 4\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can also use generic array tyoe ",(0,t.jsx)(n.code,{children:"Array<typeOfElement>"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let names: Array<string> = ['Lisa', 'Mike', 'Greg'];\n"})}),"\n",(0,t.jsx)(n.h4,{id:"union-types",children:"Union types"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"You can also combine more complex types using union types:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'type MyStates = "awake" | "sleep" | "eating"\n\ntype AppStatus = "success" | "error" | "loading";\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"|"}),' operator defines a union of string values. It allows only three possible string values: "awake", "sleep", or "eating". That can be used to ensure that variables only contain these specific values.']}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"structural-types",children:"Structural types"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Structural type are used a lot with React. For example, typing component props or complex states."}),"\n",(0,t.jsxs)(n.li,{children:["To define strutural types, you can use ",(0,t.jsx)(n.code,{children:"interface"})," or ",(0,t.jsx)(n.code,{children:"type"})," keyword."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Person {\n  name: string;\n  age: number;\n}\n\ntype Point = {\n  x: number;\n  y: number;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["See the difference between types and interfaces: ",(0,t.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces",children:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If you have nested objects in your entities, for example:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Person = {\n  name: string;\n  age: number;\n  address: {\n    street: string;\n    number: number;\n    zip: number;\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Instead of using nested object, you can create ",(0,t.jsx)(n.code,{children:"Address"})," type"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Address = {\n  street: string;\n  number: number;\n  zip: number;\n}\n\ntype Person = {\n  name: string;\n  age: number;\n  address: Address;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"react--typescript",children:"React & TypeScript"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can use TypeScript in your Vite React project by selecting ",(0,t.jsx)(n.strong,{children:"TypeScript"})," variant when creating a Vite project:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm create vite@latest\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["React provides ",(0,t.jsx)(n.code,{children:"@types/react"})," and ",(0,t.jsx)(n.code,{children:"@types/react-dom"})," packages that offer useful types for React. If you create Vite project using TypeScript, these packages are installed as development dependencies. There is also a configuration file ",(0,t.jsx)(n.code,{children:"tsconfig.app.json"})," created in the Vite project for TypeScript, and it specifies the compiler options required to compile the project."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"component-props",children:"Component props"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can define the type for the function component ",(0,t.jsx)(n.code,{children:"props"})," (=function arguments)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"type HelloProps = {\n  name: string;\n  age: number;\n}\n\nfunction Hello({ name, age }: HelloProps) {\n  return (\n    <div>\n      Hello {name}, you are {age} years old!\n    </div>\n  )\n}\n\nexport default Hello\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Now, if you pass value that doesn't match to defined type, you will get an error."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(8655).A+"",width:"1306",height:"611"})}),"\n",(0,t.jsxs)(n.admonition,{title:"Type vs interface",type:"note",children:[(0,t.jsxs)(n.p,{children:["Both ",(0,t.jsx)(n.code,{children:"type"})," and ",(0,t.jsx)(n.code,{children:"interface"})," can be used to define the shape of props in TypeScript. The choice between them can depend on your specific use case."]}),(0,t.jsx)(n.p,{children:"Here is an example using interface:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"interface HelloProps {\n  name: string;\n  age: number;\n}\n\nfunction Hello({ name, age }: HelloProps) {\n  return (\n    <div>\n      Hello {name}, you are {age} years old!\n    </div>\n  )\n}\n"})}),(0,t.jsx)(n.p,{children:"Interfaces can be extended using the extends keyword, allowing for easy composition and reuse of types. Type can create union and intersection types, which can be very powerful for complex type definitions."})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can define optional props using the ",(0,t.jsx)(n.code,{children:"?"}),", for example:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"type HelloProps = {\n  name: string;\n  age?: number;\n}\n\nfunction Hello({ name, age }: HelloProps) {\n  return (\n    <div>\n      Hello {name}\n      {age && <>, you are {age} years old!</>}\n    </div>\n  )\n}\n\nexport default Hello\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If the props value is a function, the definition is following:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type HelloProps = {\n  name: string;\n  age?: number;\n  myFunc: () => void; // no parmeters and return value\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"function-components",children:"Function components"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can also define the return type for your component and you will get an error if something else is returned. The ",(0,t.jsx)(n.code,{children:"JSX.Element"})," is a type that represents a React element. It is the return type of a functional component in React. This type is used to ensure that the component returns a valid JSX element."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"type HelloProps = {\n  name: string;\n  age: number;\n}\n\nfunction Hello({ name, age }: HelloProps): JSX.Element {\n  return (\n    <div>\n      Hello {name}, you are {age} years old!\n    </div>\n  )\n}\n\nexport default Hello\n"})}),"\n",(0,t.jsx)(n.h4,{id:"usestate-hook",children:"useState hook"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Type interference works with useState hooks function. For example, if you declare following state:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const [isReady, setReady] = useState(false)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Now, if you update the state using wrong type, you will get an error:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"setReady(10)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(6205).A+"",width:"1231",height:"211"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you have complex state, you can use ",(0,t.jsx)(n.code,{children:"type"})," or ",(0,t.jsx)(n.code,{children:"interface"}),", for example:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// declare type\ntype User = {\n  firstname: string;\n  lastname: string;\n  age: number;\n}\n\n// useState hook\nconst [user, setUser] = useState<User | null>(null)\n// or if nullish values are not accepted\nconst [user, setUser] = useState<User>({} as User)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You can also explicitly define types. For example, if you want to initialize state with ",(0,t.jsx)(n.code,{children:"null"})," or ",(0,t.jsx)(n.code,{children:"undefined"})," value."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const [value, setValue] = useState<string | undefined>(undefined)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Specifying type for array state"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const [values, setValues] = useState<Array<string>>([])\n"})}),"\n",(0,t.jsx)(n.h4,{id:"forms--events",children:"Forms & Events"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["In the example below, the ",(0,t.jsx)(n.code,{children:"inputChanged"})," function is used to handle input element change events. In TypeScript, you have to define event types, otherwise you will the following error."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(6630).A+"",width:"980",height:"400"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The type for input element change event is ",(0,t.jsx)(n.code,{children:"React.ChangeEvent"})]}),"\n",(0,t.jsxs)(n.li,{children:["The type for form submit event is ",(0,t.jsx)(n.code,{children:"React.FormEvent"}),", like shown in the following code."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n  setPerson({ ...person, [event.target.id]: event.target.value })\n}\n\nconst handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {\n  event.preventDefault()\n  // Do something with data\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The whole ",(0,t.jsx)(n.code,{children:"Form"})," component source code: ",(0,t.jsx)(n.a,{href:"https://github.com/juhahinkula/reactts/blob/main/src/Form.tsx",children:"https://github.com/juhahinkula/reactts/blob/main/src/Form.tsx"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If you have interfaces or types that are common to multiple files, you can define these in a separate file and use ",(0,t.jsx)(n.code,{children:"export"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// types.ts\nexport type Address = {\n  street: string;\n  number: number;\n  zip: number;\n}\n\nexport type Person = {\n  name: string;\n  age: number;\n  address: Address;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Then you can import types to modules where these are used:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { Person } from "./types"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"fetching-data",children:"Fetching Data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When fetching data with TypeScript, we need to define types to describe the structure of the API response. In the Networking chapter, we used the reqres.in REST API to get fake user data. Let's create the same component using TypeScript."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The response data looks the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "page": 1,\n  "per_page": 6,\n  "total": 12,\n  "total_pages": 2,\n  "data": [\n    {\n      "id": 1,\n      "email": "george.bluth@reqres.in",\n      "first_name": "George",\n      "last_name": "Bluth",\n      "avatar": "https://reqres.in/img/faces/1-image.jpg"\n    },\n    {\n      "id": 2,\n      "email": "janet.weaver@reqres.in",\n      "first_name": "Janet",\n      "last_name": "Weaver",\n      "avatar": "https://reqres.in/img/faces/2-image.jpg"\n    },\n    {\n      "id": 3,\n      "email": "emma.wong@reqres.in",\n      "first_name": "Emma",\n      "last_name": "Wong",\n      "avatar": "https://reqres.in/img/faces/3-image.jpg"\n    },\n  ],\n  "support": {\n    "url": "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",\n    "text": "Tired of writing endless social media content? Let Content Caddy generate it for you."\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We want to display users, so let's create user interface first."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type User = {\n  id: number;\n  email: string;\n  first_name: string;\n  last_name: string;\n  avatar: string;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Next, we create also type for the whole response data."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type ApiResponse = {\n  page: number;\n  per_page: number;\n  total: number;\n  total_pages: number;\n  data: User[];\n  support: {\n    url: string;\n    text: string;\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Now, we can create the component"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { useState, useEffect } from "react"\nimport { User, ApiResponse } from "../types/UserTypes"\n\nexport default function UserList() {\n  const [users, setUsers] = useState<User[]>([])\n\n  useEffect(() => {\n    fetch("https://reqres.in/api/users")\n      .then((response) => {\n        if (!response.ok) throw new Error(`Error in fetch: ${response.status}`)\n\n        return response.json()\n      })\n      .then((responseData: ApiResponse) => setUsers(responseData.data))\n      .catch((err) => console.error(err))\n  }, [])\n\n  return (\n    <table>\n      <thead>\n        <tr>\n          <th>Avatar</th>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Email</th>\n        </tr>\n      </thead>\n      <tbody>\n        {users.map((user) => (\n          <tr key={user.id}>\n            <td>\n              <img\n                src={user.avatar}\n                alt={`${user.first_name} ${user.last_name}`}\n              />\n            </td>\n            <td>{user.first_name}</td>\n            <td>{user.last_name}</td>\n            <td>{user.email}</td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n  )\n}\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"User"})," type is used to type the state variable ",(0,t.jsx)(n.code,{children:"users"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const [users, setUsers] = useState<User[]>([])\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The response data is typed using the ",(0,t.jsx)(n.code,{children:"ApiResponse"})," type:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'useEffect(() => {\n  fetch("https://reqres.in/api/users")\n    .then((response) => {\n      if (!response.ok) throw new Error(`Error in fetch: ${response.status}`)\n\n      return response.json()\n    })\n    .then((responseData: ApiResponse) => setUsers(responseData.data))\n    .catch((err) => console.error(err))\n}, [])\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can also create a separate API module and define fetch function with ",(0,t.jsx)(n.code,{children:"Promise"})," return type. Then you just Handle response in the component."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import { ApiResponse } from "../types/UserTypes"\n\nexport const fetchUsers = (): Promise<ApiResponse> => {\n  return fetch("https://reqres.in/api/users").then((response) => {\n    if (!response.ok) {\n      throw new Error(`Error in fetch: ${response.status}`)\n    }\n    return response.json()\n  })\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"further-reading",children:"Further reading"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["React TypeScript Cheatsheets ",(0,t.jsx)(n.a,{href:"https://react-typescript-cheatsheet.netlify.app/",children:"https://react-typescript-cheatsheet.netlify.app/"})]}),"\n",(0,t.jsxs)(n.li,{children:["React documentation ",(0,t.jsx)(n.a,{href:"https://react.dev/learn/typescript",children:"https://react.dev/learn/typescript"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8655:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/ts_error-2e403d7e77748f45d5e6d6de7431dba7.png"},6205:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/ts_error2-e4971290fa675b8f486bdb4e5d380a01.png"},6630:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/ts_form1-0d2f841bfbf7ebc6005ee1cb9c377694.png"},1420:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/type_example-8ac59b25e652445b8bbab510372fa5a4.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(6540);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);