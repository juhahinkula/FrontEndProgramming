"use strict";(self.webpackChunkfrontendcourse=self.webpackChunkfrontendcourse||[]).push([[789],{449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"reactproject/todolist","title":"Todolist Example","description":"Create Todolist project","source":"@site/docs/reactproject/todolist.md","sourceDirName":"reactproject","slug":"/reactproject/todolist","permalink":"/docs/reactproject/todolist","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Todolist Example","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Create Project","permalink":"/docs/reactproject/createproject"},"next":{"title":"Performance","permalink":"/docs/reactproject/performance"}}');var s=t(4848),d=t(8453);const i={title:"Todolist Example",sidebar_position:4},r=void 0,l={},c=[{value:"Create Todolist project",id:"create-todolist-project",level:3},{value:"Display todos",id:"display-todos",level:3},{value:"Styling",id:"styling",level:3},{value:"Split components",id:"split-components",level:3},{value:"Vite and ESLint",id:"vite-and-eslint",level:3}];function a(e){const n={admonition:"admonition",code:"code",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"create-todolist-project",children:"Create Todolist project"}),"\n",(0,s.jsx)(n.p,{children:"We will create a simple todolist app where the user enters tasks and all tasks are listed in a table."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create a new React App using ",(0,s.jsx)(n.strong,{children:"Vite"})," (Select React and JavaScript)."]}),"\n",(0,s.jsxs)(n.li,{children:["Create a new file called ",(0,s.jsx)(n.strong,{children:"TodoList.tsx"})," inside the ",(0,s.jsx)(n.strong,{children:"src"})," folder. Add the following code into the file."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="TodoList.tsx"',children:"function TodoList() {\n  return(\n    <></>\n  );\n}\n\nexport default TodoList;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The todo item has one description field named ",(0,s.jsx)(n.code,{children:"description"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["We need one state for the description and one array state for all todos. Let's declare states using the ",(0,s.jsx)(n.code,{children:"useState"})," hook function but first, we have to declare type for our todo item. The ",(0,s.jsx)(n.code,{children:"type Todo"})," in TypeScript is used to define the shape of the ",(0,s.jsx)(n.code,{children:"Todo"})," object."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"type Todo = {\n  description: string;\n}\n\nfunction TodoList() {\n  return(\n    <></>\n  );\n}\n\nexport default TodoList;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now, we can declare states:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="TodoList.tsx"',children:"import { useState } from \"react\";\n\ntype Todo = {\n  description: string;\n}\n\nfunction TodoList() {\n  // Declare states\n  const [todo, setTodo] = useState<Todo>({description: ''});\n  const [todos, setTodos] = useState<Todo[]>([]);\n\n  return(\n    <></>\n  );\n}\n\nexport default TodoList;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The type of ",(0,s.jsx)(n.code,{children:"todo"})," is ",(0,s.jsx)(n.code,{children:"Todo"})," object. It is an object with a single property ",(0,s.jsx)(n.code,{children:"description"})," initialized to an empty string ('')."]}),"\n",(0,s.jsxs)(n.li,{children:["The type of ",(0,s.jsx)(n.code,{children:"todos"})," is an array of ",(0,s.jsx)(n.code,{children:"Todo"})," objects (",(0,s.jsx)(n.code,{children:"Todo[]"}),"), where ",(0,s.jsx)(n.code,{children:"Todo"})," is an type that defines the shape of a todo item."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Next, we render the necessary elements to gather information and call the function that adds a new todo."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"input"})," element is used to collect data from a user."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"addTodo"})," function is called when the ",(0,s.jsx)(n.code,{children:"button"})," is pressed."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="TodoList.tsx"',children:'  const addTodo = () => {\n    setTodos([...todos, todo]);\n  };\n  \n  return(\n    <>\n      <input \n        placeholder="Description" \n        onChange={event => setTodo({...todo, description: event.target.value})} \n        value={todo.description} \n      />\n      <button onClick={addTodo}>Add</button>    \n    </>\n  );\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"addTodo"})," function adds a new todo object to the ",(0,s.jsx)(n.code,{children:"todos"})," array state. We use spread notation (",(0,s.jsx)(n.code,{children:"\u2026"}),") to add a new item at the beginning of the existing array."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"onChange"})," handler updates the ",(0,s.jsx)(n.code,{children:"todo"})," state with the typed value. The ",(0,s.jsx)(n.code,{children:"event"})," type is inferred automatically by the TypeScript compiler, so it is not explicitly required."]}),"\n",(0,s.jsx)(n.li,{children:"When creating a separate function to handle input data, you need to define the type of the function parameter, as demonstrated in the following example:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="TodoList.tsx"',children:"const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {\n    setTodo({ description: event.target.value });\n};\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"event"})," is typed as ",(0,s.jsx)(n.code,{children:"ChangeEvent<HTMLInputElement>"}),", indicating that this function handles change events from an HTML input element."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"display-todos",children:"Display todos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Next, we add the ",(0,s.jsx)(n.code,{children:"table"})," element to the ",(0,s.jsx)(n.code,{children:"return"})," statement and display all todos inside the table using the ",(0,s.jsx)(n.code,{children:"map()"})," function."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="TodoList.tsx"',children:'return (\n  <>\n    <input \n      placeholder="Description" \n      onChange={event => setTodo({...todo, description: event.target.value})} \n      value={todo.description} \n    />\n    <button onClick={addTodo}>Add</button>\n    //highlight-start\n    <table>\n      <thead>\n        <tr>\n          <td>Description</td>\n        </tr>\n      </thead>\n      <tbody>\n        {todos.map((todo, index) => (\n          <tr key={index}>\n            <td>{todo.description}</td>\n          </tr>\n        ))}\n      </tbody>\n    </table>\n    //highlight-end\n  </>\n);\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You also have to export the ",(0,s.jsx)(n.code,{children:"TodoList"})," component."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export default TodoList;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Finally, the complete ",(0,s.jsx)(n.code,{children:"TodoList.tsx"})," source code looks the following:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="TodoList.tsx"',children:'import { useState } from "react";\n\ntype Todo = {\n  description: string;\n}\n\nfunction TodoList() {\n  const [todo, setTodo] = useState<Todo>({description: \'\'});\n  const [todos, setTodos] = useState<Todo[]>([]);\n  \n  const addTodo = () => {\n    setTodos([...todos, todo]);\n  };\n\n  return(\n    <>\n      <input \n        placeholder="Description" \n        onChange={event => setTodo({...todo, description: event.target.value})} \n        value={todo.description} \n      />\n      <button onClick={addTodo}>Add</button>\n      <table>\n        <thead>\n          <tr>\n            <td>Description</td>\n          </tr>\n        </thead>\n        <tbody>\n          {todos.map((todo, index) => (\n            <tr key={index}>\n              <td>{todo.description}</td>\n            </tr>\n          ))}\n        </tbody>\n      </table>   \n    </>\n  );\n}\n\nexport default TodoList;\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Finally, we render the ",(0,s.jsx)(n.code,{children:"TodoList"})," component inside the ",(0,s.jsx)(n.code,{children:"App"})," component's ",(0,s.jsx)(n.code,{children:"return"})," statement"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="App.tsx"',children:'import "./App.css";\n//highlight-next-line\nimport TodoList from "./TodoList";\n\nfunction App() {\n  return (\n    <>\n      //highlight-next-line\n      <TodoList />\n    </>\n  );\n}\n\nexport default App;\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Now, you can run the project using the following npm command:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Type some todos and see that they are displayed in the table."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"styling",children:"Styling"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Styles are defined in the App.css and index.css files. These are Vite's default styles, and you can use your own instead."}),"\n",(0,s.jsx)(n.li,{children:"For example, the button style can be found in the index.css file"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"button {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  padding: 0.6em 1.2em;\n  font-size: 1em;\n  font-weight: 500;\n  font-family: inherit;\n  background-color: #1a1a1a;\n  cursor: pointer;\n  transition: border-color 0.25s;\n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The todolist is currently centered on the screen due to the body style setting ",(0,s.jsx)(n.code,{children:"place-items: center;"}),". To move the todolist to the top of the screen, change this value to ",(0,s.jsx)(n.code,{children:"flex-start"})," in the ",(0,s.jsx)(n.code,{children:"index.css"})," file."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now, your todolist should look the following:\n",(0,s.jsx)(n.img,{alt:"Todolist",src:t(7334).A+"",width:"737",height:"260"})]}),"\n",(0,s.jsxs)(n.admonition,{title:"TASKS",type:"info",children:[(0,s.jsx)(n.p,{children:"Try to implement the following features to your Todolist app."}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Clear the input element after the Add button is pressed."}),"\n",(0,s.jsxs)(n.li,{children:["Add validation that an ",(0,s.jsx)(n.code,{children:"alert"})," is shown if the ",(0,s.jsx)(n.code,{children:"desc"})," state value is empty when new todo is added.."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["You can also add some styling to your table. For example, add the following styling to the ",(0,s.jsx)(n.code,{children:"App.css"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 10px;\n}\n\ntable th,\ntable td {\n  border: 1px solid black;\n  padding: 6px; \n}\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"split-components",children:"Split components"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Let's refactor the todolist example application by breaking it into multiple components."}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsx)(n.p,{children:"In this part, we  use the todolist from the assignment, which also includes a date field and delete functionality."})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We will add a new stateless component called ",(0,s.jsx)(n.code,{children:"TodoTable"})," and separate it from the ",(0,s.jsx)(n.code,{children:"TodoList"})," component."]}),"\n",(0,s.jsx)(n.li,{children:"After splitting the components, our component tree is the following:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(3976).A+"",width:"391",height:"607"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"React data flow is one-way, from top to bottom, in the component tree."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"TodoTable"})," component will be a child component of the ",(0,s.jsx)(n.code,{children:"TodoList"})," component. Therefore, we can send data from the ",(0,s.jsx)(n.code,{children:"TodoList"})," to ",(0,s.jsx)(n.code,{children:"TodoTable"})," component by using the props. We can pass the ",(0,s.jsx)(n.code,{children:"todos"})," state to the ",(0,s.jsx)(n.code,{children:"TodoTable"})," component using props."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add a new file called ",(0,s.jsx)(n.strong,{children:"TodoTable.tsx"})," into the ",(0,s.jsx)(n.strong,{children:"src"})," folder. The starter code of the component is shown below."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function TodoTable(props) {\n  return <></>;\n}\n\nexport default TodoTable;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We need to define the type for the ",(0,s.jsx)(n.code,{children:"props"}),", which contains an array of ",(0,s.jsx)(n.code,{children:"todo"})," objects and delete function. Therefore, we define a new type called ",(0,s.jsx)(n.code,{children:"TodoTableProps"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"type Todo = {\n  description: string;\n  date: string;\n}\n\ntype TodoTableProps = {\n  todos: Todo[];\n  handleDelete: (row: number) => void;\n}\n\nfunction TodoTable(props: TodoTableProps) {\n  return(\n    <></>\n  );\n}\n\nexport default TodoTable;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You will notice that we have defined the same ",(0,s.jsx)(n.code,{children:"Todo"})," type in two files. Instead of doing that, it is better to create a separate file for defining types and then import these into the files where they are needed. Create a new file called ",(0,s.jsx)(n.code,{children:"types.ts"})," in the ",(0,s.jsx)(n.code,{children:"src"})," folder and define the types there."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="types.ts"',children:"export type Todo = {\n  description: string;\n  date: string;\n}\n\nexport type TodoTableProps = {\n  todos: Todo[];\n  handleDelete: (row: number) => void;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Then, we import the type into the ",(0,s.jsx)(n.code,{children:"TodoTable"})," component where they are needed."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="TodoTable.tsx"',children:"import { TodoTableProps } from './types';\n\nfunction TodoTable(props: TodoTableProps) {\n  return (\n    <></>\n  );\n}\n\nexport default TodoTable;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Now, you can also remove ",(0,s.jsx)(n.code,{children:"todo"})," type definition in the ",(0,s.jsx)(n.code,{children:"TodoList"})," component and import if from the ",(0,s.jsx)(n.code,{children:"types.ts"})," file."]}),"\n",(0,s.jsxs)(n.li,{children:["Next, we render table in the ",(0,s.jsx)(n.code,{children:"TodoTable"})," component."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="TodoTable.tsx"',children:'import { TodoTableProps } from "./types";\n\nfunction TodoTable(props: TodoTableProps) {\n  return(\n    <>\n      <table>\n        <thead>\n          <tr>\n            <th>Description</th>\n            <th>Date</th>\n            <td>Action</td>\n          </tr>\n        </thead>\n        <tbody>\n          {props.todos.map((todo, index) => (\n            <tr key={index}>\n              <td>{todo.description}</td>\n              <td>{todo.date}</td>\n              <td>\n                <button onClick={() => props.handleDelete(index)}>\n                  Delete\n                </button>\n              </td>\n            </tr>\n          ))}\n        </tbody>\n      </table>       \n    </>\n  );\n}\n\nexport default TodoTable;\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"TodoTable"})," component will be a ",(0,s.jsx)(n.strong,{children:"stateless component"}),". The stateless components are easy to test because they are pure functions. They are also simple to understand because they are just functions that takes props as input and returns JSX."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Finally, import the ",(0,s.jsx)(n.code,{children:"TodoTable"})," component into the ",(0,s.jsx)(n.code,{children:"TodoList"})," component."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="TodoList.tsx"',children:'import TodoTable from "./TodoTable";\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Remove the HTML table element from the ",(0,s.jsx)(n.code,{children:"TodoList"})," component's ",(0,s.jsx)(n.code,{children:"return"})," statement and add the ",(0,s.jsx)(n.code,{children:"TodoTable"})," component there and pass ",(0,s.jsx)(n.code,{children:"todos"})," state and ",(0,s.jsx)(n.code,{children:"handleDelete"})," funtion  using props."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="TodoList.tsx"',children:'return (\n  <>\n    <input \n      placeholder="Description" \n      onChange={event => setTodo({...todo, description: event.target.value})} \n      value={todo.description} \n    />\n    <button onClick={addTodo}>Add</button>\n    //highlight-next-line\n    <TodoTable todos={todos} handleDelete={handleDelete} />\n  </>\n);\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"vite-and-eslint",children:"Vite and ESLint"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Linters"})," in programming are tools designed to analyze source code and identify potential issues, coding style violations, and error"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ESLint"})," is popular linter for JavaScript and TypeScript. Vite is using ESLint by default."]}),"\n",(0,s.jsxs)(n.li,{children:["You can find the ESLint configuration file ",(0,s.jsx)(n.code,{children:"eslint.config.cjs"})," from the root folder of your Vite project. You can define ESLint rules in this file to specify coding standards and guidelines for your project."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="eslint.config.cjs"',children:"export default [\n  { ignores: ['dist'] },\n  {\n    files: ['**/*.{js,jsx}'],\n    languageOptions: {\n      ecmaVersion: 2020,\n      globals: globals.browser,\n      parserOptions: {\n        ecmaVersion: 'latest',\n        ecmaFeatures: { jsx: true },\n        sourceType: 'module',\n      },\n    },\n    settings: { react: { version: '18.3' } },\n    plugins: {\n      react,\n      'react-hooks': reactHooks,\n      'react-refresh': reactRefresh,\n    },\n    rules: {\n      ...js.configs.recommended.rules,\n      ...react.configs.recommended.rules,\n      ...react.configs['jsx-runtime'].rules,\n      ...reactHooks.configs.recommended.rules,\n      'react/jsx-no-target-blank': 'off',\n      'react-refresh/only-export-components': [\n        'warn',\n        { allowConstantExport: true },\n      ],\n    },\n  },\n]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},7334:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/todolist1-841d044da80b303905a1073db90e8f91.png"},3976:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/todolist_tree-3524ef8be52f788607efed4d89f77e78.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(6540);const s={},d=o.createContext(s);function i(e){const n=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);