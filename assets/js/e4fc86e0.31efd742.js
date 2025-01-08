"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[3948],{9832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"testing/vitest","title":"Vitest","description":"- Vitest (https://vitest.dev/) is a testing framework that can be used easily with vite projects.","source":"@site/docs/testing/vitest.md","sourceDirName":"testing","slug":"/testing/vitest","permalink":"/frontendprogramming/docs/testing/vitest","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Vitest","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"JavaScript Testing","permalink":"/frontendprogramming/docs/testing/"},"next":{"title":"Deployment","permalink":"/frontendprogramming/docs/category/deployment"}}');var i=n(4848),o=n(8453);const r={title:"Vitest",sidebar_position:3},c=void 0,d={},a=[{value:"Configuration",id:"configuration",level:3},{value:"Running tests",id:"running-tests",level:3},{value:"Testing React components",id:"testing-react-components",level:3},{value:"Coverage testing",id:"coverage-testing",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Vitest"})," (",(0,i.jsx)(t.a,{href:"https://vitest.dev/",children:"https://vitest.dev/"}),") is a testing framework that can be used easily with vite projects."]}),"\n",(0,i.jsx)(t.li,{children:"Vitest provides a Jest like API that is good replacement in the most cases."}),"\n",(0,i.jsx)(t.li,{children:"Vitest also includes the common features required when setting up unit tests (mocking, snapshots, coverage)"}),"\n",(0,i.jsxs)(t.li,{children:["Install Vitest using the following npm command. The ",(0,i.jsx)(t.code,{children:"-D"})," flag is used to install development dependencies. The package is saved in the ",(0,i.jsx)(t.code,{children:"devDependencies"})," section of the ",(0,i.jsx)(t.code,{children:"package.json"})," file:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install -D vitest\n"})}),"\n",(0,i.jsx)(t.h3,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Configuration of Vitest is unified with Vite and it is made in the ",(0,i.jsx)(t.strong,{children:"vite.config.ts"})," file's ",(0,i.jsx)(t.code,{children:"test"})," property."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="vite.config.ts"',children:'import { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\n\nexport default defineConfig({\n  plugins: [react()],\n  test: {\n    // vitest configuration\n  },\n});\n'})}),"\n",(0,i.jsx)(t.h3,{id:"running-tests",children:"Running tests"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"You can run vitest in the project where it is installed using the npx."}),"\n",(0,i.jsx)(t.li,{children:"Or we can add the follwing npm scripts in the package.json file"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",metastring:'title="package.json"',children:'{\n  "scripts": {\n    ...\n    "test": "vitest",\n    "coverage": "vitest run --coverage"\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Now, you can run tests using the following command"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"There is also Vitest VSCode extension available that can be used to run test cases."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Vitest plugin",src:n(9786).A+"",width:"983",height:"272"})}),"\n",(0,i.jsx)(t.h3,{id:"testing-react-components",children:"Testing React components"}),"\n",(0,i.jsx)(t.p,{children:"When testing React components, we need other testing libraries"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"React Testing Library"})," helps you to test React components"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"jest-dom"})," library provides custom matchers that you can use to extend vitest (See all matchers ",(0,i.jsx)(t.a,{href:"https://github.com/testing-library/jest-dom",children:"https://github.com/testing-library/jest-dom"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"jsdom"})," provides Browser API"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Install the libraries using the following npm command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npm install -D jsdom @testing-library/react @testing-library/jest-dom\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"We also have to change our vitest configuration."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="vitest.config.js"',children:'import { defineConfig } from "vitest/config";\n\nexport default defineConfig({\n  plugins: [react()],\n  test: {\n    globals: true,\n    environment: "jsdom",\n  },\n});\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"globals"})," - Enables Jest globals API (",(0,i.jsx)(t.a,{href:"https://jestjs.io/docs/api",children:"https://jestjs.io/docs/api"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"environment"})," - Defines the environment that will be used for testing (Node.js is default). We will use browser based environment ",(0,i.jsx)(t.strong,{children:"jsdom"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Now, we will create our first test case using the todolist that we have developed. If you follow this example, you should add 'My Todolist' header to your own App component. Our test cases renders the App component and check that there is 'My Todolist' text."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create a new file called ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.em,{children:"App.test.jsx"})})," in the ",(0,i.jsx)(t.code,{children:"src"})," folder and add the first test case."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="App.test.tsx"',children:'import App from "./App";\nimport { test } from "vitest";\n\ntest("renders header", () => {});\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Import the ",(0,i.jsx)(t.code,{children:"render"})," method from the React testing library. The ",(0,i.jsx)(t.code,{children:"render"})," method can be used to render React component for testing."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="App.test.jsx"',children:'import App from "./App";\nimport { test } from "vitest";\n// highlight-next-line\nimport { render } from "@testing-library/react";\n\ntest("renders App component", () => {\n  // renders the App component for testing\n  // highlight-next-line\n  render(<App />);\n});\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Next, import the ",(0,i.jsx)(t.code,{children:"screen"})," method from the React Testing Library."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"screen"})," method returns an object that provides queries (i.e. ",(0,i.jsx)(t.code,{children:"getByText"}),", ",(0,i.jsx)(t.code,{children:"getByLabelText"})," etc.) that are bound to the whole rendered ",(0,i.jsx)(t.code,{children:"document.body"}),". These queries can be used to find elements from the HTML document."]}),"\n",(0,i.jsxs)(t.li,{children:["In the following example, we use ",(0,i.jsx)(t.code,{children:"getByText()"})," query to find an element with specified text."]}),"\n",(0,i.jsxs)(t.li,{children:["The forward slash (/) in ",(0,i.jsx)(t.strong,{children:"/My Todolist/i"})," to define a regular expression pattern, and the i-flag at the end stands for case-insensitive. This means it is looking for rendered content that contains the \u201cHello World\u201d text in a case-insensitive matter. You can also use a full string match that is case-sensitive by passing a string as an argument to ",(0,i.jsx)(t.code,{children:"getByText()"})," query."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="App.test.tsx"',children:'import App from "./App";\nimport { test } from "vitest";\nimport { render, screen } from "@testing-library/react";\n\ntest("renders App component", () => {\n  render(<App />);\n  // highlight-next-line\n  const header = screen.getByText(/My Todolist/i);\n});\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Then, we check if the header text exists in DOM using the ",(0,i.jsx)(t.code,{children:"toBeInTheDocument()"})," matcher from the jest-dom library. We have to import ",(0,i.jsx)(t.code,{children:"@testing-library/jest-dom/vitest"})," to extend Vitest mathcers. Then, you can use jest-dom matchers with Vitest."]}),"\n",(0,i.jsxs)(t.li,{children:["The purpose of this test is to ensure that when the ",(0,i.jsx)(t.code,{children:"App"}),' component is rendered, it contains a header with the text "My Todolist". If the header is found, the test passes; otherwise, it will fail.']}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="App.test.tsx"',children:'import App from "./App";\nimport { test, expect } from "vitest";\nimport { render, screen } from "@testing-library/react";\n  // highlight-next-line\nimport \'@testing-library/jest-dom/vitest\';\n\ntest("renders App component", () => {\n  render(<App />);\n  const header = screen.getByText(/My Todolist/i);\n  // highlight-next-line\n  expect(header).toBeInTheDocument();\n});\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Now, you can run your first test case."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Test run",src:n(1052).A+"",width:"571",height:"322"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"You can change the text in the header and see how failed test case is shown."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Let\u2019s make one example test case for our TodoList app that we created in the React Project section. We have stateless ",(0,i.jsx)(t.code,{children:"TodoTable"})," component that we want to create a test case. Test case ensures that a new todo is displayed in the todo table."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="TodoTable.tsx"',children:'import { TodoTableProps } from "./types"\n\nexport default function TodoTable(props: TodoTableProps) {\n  return (\n    <div>\n      <table id="todotable">\n        <tbody>\n        {\n        props.todos.map((todo: Todo, index: number) => \n          <tr key={index}>\n            <td>{todo.date}</td>\n            <td>{todo.description}</td>\n          </tr>)\n        }\n        </tbody>\n      </table>    \n    </div>\n  )\n}\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The following code show test case for the stateless ",(0,i.jsx)(t.code,{children:"TodoTable"})," component. It adds one todo item to the table and check that it is displayed."]}),"\n",(0,i.jsxs)(t.li,{children:["We use ",(0,i.jsx)(t.code,{children:"getByRole()"})," to find the table element and ",(0,i.jsx)(t.code,{children:"toHaveTextContent()"})," for assertion."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="TodoTable.test.tsx"',children:"...\nimport TodoTable from './TodoTable';\nimport { test, expect } from \"vitest\";\nimport { render, screen } from \"@testing-library/react\";\nimport '@testing-library/jest-dom/vitest';\n\ntest('renders todotable', () => {\n  const row = [\n    {description: 'Go to coffee', date: '24.01.2025'}\n  ];\n\n  render(<TodoTable todos={row} />);\n  \n  const table = screen.getByRole('table');\n  expect(table).toHaveTextContent(/go to coffee/i);\n});\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["You can also test for the opposite of a matcher using the ",(0,i.jsx)(t.code,{children:"not"})," keyword."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const table = screen.getByRole('table');\nexpect(table).not.toHaveTextContent(/go to coffee/i);\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you assert element that is not present, it is recommended to use ",(0,i.jsx)(t.code,{children:"queryBy*"})," methods instead of ",(0,i.jsx)(t.code,{children:"getBy*"}),". The ",(0,i.jsx)(t.code,{children:"getBy*"})," queries throws an error if no element is found."]}),"\n",(0,i.jsxs)(t.li,{children:["React testing library provides ",(0,i.jsx)(t.code,{children:"fireEvent"})," method that you can use for firing DOM events, such as button click"]}),"\n",(0,i.jsx)(t.li,{children:"For example, to simulate button click:"}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'import { render, screen, fireEvent } from "@testing-library/react";\n\n// Find button element\nconst button = screen.getByText("My Button");\n// Fire click event\nfireEvent.click(button);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Let\u2019s create a test where values are added to the description and date input elements and then the Add button is pressed. After that, a new todo item should be added to the table."}),"\n",(0,i.jsxs)(t.li,{children:["The functionality that we want to test is now in the ",(0,i.jsx)(t.code,{children:"App"})," component; therefore, we will add a new test into the ",(0,i.jsx)(t.strong,{children:"App.test.ts"})," file."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import { useState }  from 'react';\nimport './App.css';\nimport TodoTable from './TodoTable';\nimport { Todo } from './types';\n\nfunction App() {\n  const [todo, setTodo] = useState<Todo>({description: '', date: ''});\n  const [todos, setTodos] = useState<Todo[]>([]);\n\n  const addTodo = () => {\n    setTodos([...todos, todo]);\n    setTodo({description: '', date: ''});\n  }\n\n  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setTodo({...todo, [event.target.name]: event.target.value});\n  } \n\n  return (\n    <div className=\"App\">\n      <h3>My Todolist</h3>\n      <input \n        type=\"text\" \n        placeholder=\"Description\" \n        name=\"description\" \n        value={todo.description} \n        onChange={inputChanged} />\n      <input \n        type=\"text\" \n        placeholder=\"Date\" \n        name=\"date\" \n        value={todo.date} \n        onChange={inputChanged} />\n      <button onClick={addTodo}>Add</button>\n      <TodoTable todos={todos} />\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["First, we will add new test case to the ",(0,i.jsx)(t.strong,{children:"App.test.tsx"})," file and we render the ",(0,i.jsx)(t.code,{children:"App"})," component."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="App.test.tsx"',children:'test("add todo", () => {\n  render(<App />);\n});\n'})}),"\n",(0,i.jsxs)(t.p,{children:["To avoid rendering the component multiple times and encountering issues with finding elements, you should ensure that each test case is isolated. You can use the ",(0,i.jsx)(t.code,{children:"cleanup"})," function from ",(0,i.jsx)(t.code,{children:"@testing-library/react"})," to unmount components between tests. The ",(0,i.jsx)(t.code,{children:"afterEach"})," is a function provided by Vitest. It allows you to run a code after each test case. This is useful for cleaning the state between tests to ensure that each test runs in isolation."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="App.test.tsx"',children:'import App from "./App";\nimport { test, expect, afterEach } from "vitest";\nimport { render, screen, fireEvent, cleanup } from "@testing-library/react";\nimport \'@testing-library/jest-dom/vitest\';\n\n// Clean up after each test case\nafterEach(() => {\n  cleanup();\n});\n\n...continue\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Next, we can add value to the input elements by using the ",(0,i.jsx)(t.code,{children:"fireEvent"})," method. Correct input element can be found using ",(0,i.jsx)(t.code,{children:"getByPlaceholderText"})," query that jest-dom provides."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="App.test.tsx"',children:'const desc = screen.getByPlaceholderText("Description");\nfireEvent.change(desc, { target: { value: "Go to coffee" } });\nconst date = screen.getByPlaceholderText("Date");\nfireEvent.change(date, { target: { value: "29.01.2025" } });\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Finally, we can use ",(0,i.jsx)(t.code,{children:"fireEvent"})," to click the Add button. Correct button is found using the ",(0,i.jsx)(t.code,{children:"getByText()"})," query (jest-dom)"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="App.test.tsx"',children:'const button = screen.getByText("Add");\nfireEvent.click(button);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Now, the new todo item should be added to the table and we can use the following statements to assert that."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="App.test.tsx"',children:'const table = screen.getByRole("table");\nexpect(table).toHaveTextContent(/go to coffee/i);\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Below is the whole ",(0,i.jsx)(t.code,{children:"App.test.tsx"})," code:"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="App.test.tsx"',children:'import App from "./App";\nimport { test, expect, afterEach } from "vitest";\nimport { render, screen, fireEvent, cleanup } from "@testing-library/react";\nimport \'@testing-library/jest-dom/vitest\';\n\nafterEach(() => {\n  cleanup();\n});\n\ntest("renders App component", () => {\n  render(<App />);\n  const header = screen.getByText(/My Todolist/i);\n  expect(header).toBeInTheDocument();\n});\n\ntest("add todo", () => {\n  render(<App />);\n  const desc = screen.getByPlaceholderText("Description");\n  fireEvent.change(desc, { target: { value: "Go to coffee" } });\n  const date = screen.getByPlaceholderText("Date");\n  fireEvent.change(date, { target: { value: "29.01.2025" } });\n\n  const button = screen.getByText("Add");\n  fireEvent.click(button);\n\n  const table = screen.getByRole("table");\n  expect(table).toHaveTextContent(/go to coffee/i);  \n});\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h3,{id:"coverage-testing",children:"Coverage testing"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.em,{children:'"In computer science, code coverage is a percentage measure of the degree to which the source code of a program is executed when a particular test suite is run"'})," - Wikipedia"]}),"\n",(0,i.jsxs)(t.li,{children:["You can run coverage test using the command ",(0,i.jsx)(t.code,{children:"npm run coverage"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Coverage test",src:n(8615).A+"",width:"939",height:"219"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8615:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/coverage-1b352d9d1729afd8dbd0fd71e256d759.PNG"},9786:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/vitest_plugin-6556912a81c7413a9db6939a411441ba.PNG"},1052:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/vitest_run-3cd0ce5ebc29c6c7ba915e595ae3fbcd.PNG"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);