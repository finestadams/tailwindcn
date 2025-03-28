import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CdGsxv5d.js";import{M as d,S as s}from"./index-xrObfw4V.js";import{B as l,a as o,P as c,O as h,D as a,b as x,F as j,I as u,S as p,M as m,L as g}from"./Button.stories-CLafytXx.js";import"./index-BCtMShv3.js";import"./iframe-DrOg_fJ7.js";import"./index-D-fs5e6L.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";function r(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"Components/Button",component:o,of:l}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Button"})," component is used to trigger actions or events. It supports multiple variants, sizes, and additional features like icons and full-width styling."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:["To use the ",n.jsx(e.code,{children:"Button"}),` component in your project, after installing the package:\r
For configuration details, refer to the `,n.jsx(e.a,{href:"?path=/docs/introduction--docs",children:"Configuration Guide"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`wind add button
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["Import the ",n.jsx(e.code,{children:"Button"})," component into your project:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from "@component/ui/button";
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"primary-button",children:"Primary Button"}),`
`,n.jsx(e.p,{children:"The primary button is used for the main action on a page."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="primary" size="md">\r
  Primary\r
</Button>
`})}),`
`,n.jsx(s,{name:"Primary",of:c}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"outline-button",children:"Outline Button"}),`
`,n.jsx(e.p,{children:"The outline button is used for secondary actions."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="outline" size="md">\r
  Outline\r
</Button>
`})}),`
`,n.jsx(s,{name:"Outline",of:h}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"danger-button",children:"Danger Button"}),`
`,n.jsx(e.p,{children:"The danger button is used for destructive actions, such as deleting data."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="danger" size="md">\r
  Danger\r
</Button>
`})}),`
`,n.jsx(s,{name:"Danger",of:a}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"pill-button",children:"Pill Button"}),`
`,n.jsx(e.p,{children:"The pill button has rounded corners for a softer appearance."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="primary" size="md" pill>\r
  Pill Button\r
</Button>
`})}),`
`,n.jsx(s,{name:"Pill",of:x}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"full-width-button",children:"Full Width Button"}),`
`,n.jsx(e.p,{children:"The full-width button spans the entire width of its container."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="primary" size="md" fullWidth>\r
  Full Width Button\r
</Button>
`})}),`
`,n.jsx(s,{name:"Full Width",of:j}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"icon-only-button",children:"Icon Only Button"}),`
`,n.jsx(e.p,{children:"The icon-only button displays only an icon without any text."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="primary" size="md" iconOnly icon="⭐" />
`})}),`
`,n.jsx(s,{name:"Icon Only",of:u}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"sizes",children:"Sizes"}),`
`,n.jsx(e.h3,{id:"small-button",children:"Small Button"}),`
`,n.jsx(e.p,{children:"The small button is used when space is limited."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="primary" size="sm">\r
  Small Button\r
</Button>
`})}),`
`,n.jsx(s,{name:"Small",of:p}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"medium-button",children:"Medium Button"}),`
`,n.jsx(e.p,{children:"The medium button is the default size."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="primary" size="md">\r
  Medium Button\r
</Button>
`})}),`
`,n.jsx(s,{name:"Medium",of:m}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{id:"large-button",children:"Large Button"}),`
`,n.jsx(e.p,{children:"The large button is used for emphasis or when more space is available."}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`<Button variant="primary" size="lg">\r
  Large Button\r
</Button>
`})}),`
`,n.jsx(s,{name:"Large",of:g}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsxs("table",{children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{children:n.jsx("strong",{children:"Prop"})}),n.jsx("th",{children:n.jsx("strong",{children:"Type"})}),n.jsx("th",{children:n.jsx("strong",{children:"Default"})}),n.jsx("th",{children:n.jsx("strong",{children:"Description"})})]})}),n.jsxs("tbody",{children:[n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"variant"})}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:n.jsx("code",{children:'"primary"'})}),n.jsx("td",{children:n.jsxs(e.p,{children:["Defines the button's style variant (e.g., ",n.jsx("code",{children:"primary"}),","," ",`\r
`,n.jsx("code",{children:"outline"}),", ",n.jsx("code",{children:"danger"}),", ",n.jsx("code",{children:"dark"}),","," ",`\r
`,n.jsx("code",{children:"gradientMonochrome"}),", ",n.jsx("code",{children:"gradientDuotone"}),","," ",`\r
`,n.jsx("code",{children:"colorShadow"}),")."]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"size"})}),n.jsx("td",{children:n.jsx("code",{children:"string"})}),n.jsx("td",{children:n.jsx("code",{children:'"md"'})}),n.jsx("td",{children:n.jsxs(e.p,{children:["Specifies the button size (",n.jsx("code",{children:"sm"}),", ",n.jsx("code",{children:"md"}),","," ",`\r
`,n.jsx("code",{children:"lg"}),")."]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"fullWidth"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"false"})}),n.jsx("td",{children:n.jsxs(e.p,{children:["If ",n.jsx("code",{children:"true"}),", the button spans the full width of its container."]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"pill"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"false"})}),n.jsx("td",{children:n.jsxs(e.p,{children:["If ",n.jsx("code",{children:"true"}),", the button has rounded corners."]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"iconOnly"})}),n.jsx("td",{children:n.jsx("code",{children:"boolean"})}),n.jsx("td",{children:n.jsx("code",{children:"false"})}),n.jsx("td",{children:n.jsxs(e.p,{children:["If ",n.jsx("code",{children:"true"}),", the button displays only an icon without text."]})})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"icon"})}),n.jsx("td",{children:n.jsx("code",{children:"ReactNode | string"})}),n.jsx("td",{children:n.jsx("code",{children:'""'})}),n.jsx("td",{children:"The icon to display inside the button."})]}),n.jsxs("tr",{children:[n.jsx("td",{children:n.jsx("code",{children:"children"})}),n.jsx("td",{children:n.jsx("code",{children:"ReactNode"})}),n.jsx("td",{children:n.jsx("code",{children:'""'})}),n.jsx("td",{children:"The content displayed inside the button."})]})]})]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"notes",children:"Notes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Use the ",n.jsx(e.code,{children:"variant"})," prop to customize the button's appearance."]}),`
`,n.jsxs(e.li,{children:["Combine ",n.jsx(e.code,{children:"pill"})," and ",n.jsx(e.code,{children:"fullWidth"})," props for unique designs."]}),`
`,n.jsxs(e.li,{children:["Use ",n.jsx(e.code,{children:"iconOnly"})," for buttons that only display an icon."]}),`
`]})]})}function M(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{M as default};
