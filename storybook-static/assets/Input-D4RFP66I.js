import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as d}from"./index-CdGsxv5d.js";import{M as t,S as r}from"./index-xrObfw4V.js";import{I as l,a as c,D as h,S as o,L as a,W as x,b as j,c as p}from"./Input.stories-DcxJCeYy.js";import"./index-BCtMShv3.js";import"./iframe-DrOg_fJ7.js";import"./index-D-fs5e6L.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Components/Input",component:c,of:l}),`
`,e.jsx(n.h1,{id:"input",children:"Input"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Input"})," component is used to capture user input. It supports different sizes, states, and configurations, making it a versatile component for forms and other user interfaces."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsxs(n.p,{children:["To use the ",e.jsx(n.code,{children:"Input"}),` component in your project, after installing the package:\r
For configuration details, refer to the `,e.jsx(n.a,{href:"?path=/docs/introduction--docs",children:"Configuration Guide"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`wind add input
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Import the ",e.jsx(n.code,{children:"Input"})," component into your project:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Input } from "@component/ui/input";
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"default-input",children:"Default Input"}),`
`,e.jsx(n.p,{children:"The default input field with a placeholder."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input placeholder="Enter text" inputSize="md" />
`})}),`
`,e.jsx(r,{name:"Default",of:h}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"small-input",children:"Small Input"}),`
`,e.jsx(n.p,{children:"A small-sized input field."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input placeholder="Small Input" inputSize="sm" />
`})}),`
`,e.jsx(r,{name:"Small",of:o}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"large-input",children:"Large Input"}),`
`,e.jsx(n.p,{children:"A large-sized input field."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input placeholder="Large Input" inputSize="lg" />
`})}),`
`,e.jsx(r,{name:"Large",of:a}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"input-with-error",children:"Input with Error"}),`
`,e.jsx(n.p,{children:"An input field with an error message."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input placeholder="Enter text" error="This field is required." />
`})}),`
`,e.jsx(r,{name:"WithError",of:x}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"input-with-icon",children:"Input with Icon"}),`
`,e.jsx(n.p,{children:"An input field with a search icon."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input\r
  placeholder="Search"\r
  icon={\r
    <svg\r
      className="w-4 h-4 text-gray-500"\r
      fill="currentColor"\r
      viewBox="0 0 20 20"\r
    >\r
      <path d="M12.9 14.32a8 8 0 111.41-1.41l4.39 4.39a1 1 0 01-1.42 1.42l-4.38-4.4zM8 14a6 6 0 100-12 6 6 0 000 12z" />\r
    </svg>\r
  }\r
/>
`})}),`
`,e.jsx(r,{name:"WithIcon",of:j}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"disabled-input",children:"Disabled Input"}),`
`,e.jsx(n.p,{children:"A disabled input field."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Input placeholder="Disabled Input" disabled />
`})}),`
`,e.jsx(r,{name:"Disabled",of:p}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx("strong",{children:"Prop"})}),e.jsx("th",{children:e.jsx("strong",{children:"Type"})}),e.jsx("th",{children:e.jsx("strong",{children:"Default"})}),e.jsx("th",{children:e.jsx("strong",{children:"Description"})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"inputSize"})}),e.jsx("td",{children:e.jsx("code",{children:'"sm" | "md" | "lg"'})}),e.jsx("td",{children:e.jsx("code",{children:'"md"'})}),e.jsx("td",{children:"The size of the input field."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"error"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:"Error message to display below the input."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"icon"})}),e.jsx("td",{children:e.jsx("code",{children:"React.ReactNode"})}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:"Icon to display inside the input field."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"placeholder"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:"Placeholder text for the input field."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"disabled"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:e.jsx("code",{children:"false"})}),e.jsx("td",{children:"Disables the input field."})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"className"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:e.jsx("code",{children:"undefined"})}),e.jsx("td",{children:"Additional classes for the input container."})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"notes",children:"Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"inputSize"})," prop to adjust the size of the input field."]}),`
`,e.jsxs(n.li,{children:["Combine the ",e.jsx(n.code,{children:"error"})," prop with validation logic to display error messages."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.code,{children:"icon"})," prop to add icons for better user experience (e.g., search or email icons)."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:"disabled"})," prop can be used to disable the input field when necessary."]}),`
`]})]})}function N(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{N as default};
