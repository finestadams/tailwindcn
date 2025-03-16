import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CePRvBtH.js";import{M as l}from"./index-CSHdUaTw.js";import"./index-DmM0KDA7.js";import"./iframe-Da18FUmC.js";import"./index-nLeaPAJ8.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function s(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Introduction"}),`
`,n.jsx(e.h1,{id:"fast-ui---the-ultimate-ui-component-library",children:"Fast UI - The Ultimate UI Component Library"}),`
`,n.jsx(e.p,{children:"Fast UI is a modular and customizable UI component library designed for modern React applications. It provides pre-built, highly accessible components with support for Tailwind CSS."}),`
`,n.jsx(e.h2,{id:"-getting-started",children:"🚀 Getting Started"}),`
`,n.jsx(e.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,n.jsx(e.p,{children:"Before installing Fast UI, ensure you have a React or Next.js project set up with Tailwind CSS. You can follow the official Tailwind CSS installation guide for React or Next.js:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://tailwindcss.com/docs/guides/create-react-app",rel:"nofollow",children:"Tailwind CSS with Create React App"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://tailwindcss.com/docs/guides/nextjs",rel:"nofollow",children:"Tailwind CSS with Next.js"})}),`
`]}),`
`,n.jsx(e.h3,{id:"installation",children:"Installation"}),`
`,n.jsxs(e.p,{children:["You can install the Fast UI CLI using ",n.jsx(e.code,{children:"npm"}),", ",n.jsx(e.code,{children:"yarn"}),", or ",n.jsx(e.code,{children:"pnpm"}),":"]}),`
`,n.jsx(e.h4,{id:"using-npm",children:"Using npm:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npm install -g fast-gen/cli
`})}),`
`,n.jsx(e.h4,{id:"using-yarn",children:"Using yarn:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`yarn global add fast-gen/cli
`})}),`
`,n.jsx(e.h4,{id:"using-pnpm",children:"Using pnpm:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`pnpm add -g fast-gen/cli
`})}),`
`,n.jsxs(e.p,{children:["Alternatively, you can run it directly using ",n.jsx(e.code,{children:"npx"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npx fast-gen/cli add button
`})}),`
`,n.jsx(e.h2,{id:"-adding-components",children:"📦 Adding Components"}),`
`,n.jsx(e.p,{children:"Once the CLI is installed, you can use it to add UI components to your project."}),`
`,n.jsxs(e.p,{children:["For example, to add a ",n.jsx(e.code,{children:"button"})," component:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`fast-ui add button
`})}),`
`,n.jsxs(e.p,{children:["This will download and install the ",n.jsx(e.code,{children:"button"})," component inside your project's ",n.jsx(e.code,{children:"components/ui/"})," directory."]}),`
`,n.jsx(e.h2,{id:"-dependencies",children:"📌 Dependencies"}),`
`,n.jsx(e.p,{children:"Before using Fast UI components, ensure you have the following dependencies installed:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npm install clsx class-variance-authority tailwind-merge
`})}),`
`,n.jsx(e.p,{children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`yarn add clsx class-variance-authority tailwind-merge
`})}),`
`,n.jsx(e.p,{children:"or"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`pnpm add clsx class-variance-authority tailwind-merge
`})}),`
`,n.jsx(e.h3,{id:"utility-functions",children:"Utility Functions"}),`
`,n.jsx(e.p,{children:"Fast UI relies on a utility function for merging class names efficiently:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// lib/util.ts
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
`})}),`
`,n.jsx(e.h2,{id:"-tailwind-css-setup",children:"🎨 Tailwind CSS Setup"}),`
`,n.jsx(e.p,{children:"Fast UI supports Tailwind CSS 4 and older versions with different configurations."}),`
`,n.jsx(e.h3,{id:"adding-colors",children:"Adding Colors"}),`
`,n.jsxs(e.p,{children:["Fast UI uses a set of predefined colors for various component states like ",n.jsx(e.code,{children:"primary"}),", ",n.jsx(e.code,{children:"secondary"}),", ",n.jsx(e.code,{children:"outline"}),", ",n.jsx(e.code,{children:"ghost"}),", and ",n.jsx(e.code,{children:"danger"}),". You can customize these colors using Tailwind CSS."]}),`
`,n.jsx(e.h4,{id:"tailwind-css-4",children:"Tailwind CSS 4+"}),`
`,n.jsxs(e.p,{children:["For Tailwind CSS v4 or later, you can define your color palette in your CSS file using the ",n.jsx(e.code,{children:"@theme"})," directive."]}),`
`,n.jsxs(e.p,{children:["Ensure your global ",n.jsx(e.code,{children:"styles.css"})," includes:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --color-outline: #d1d5db;
  --color-ghost: #9ca3af;
  --color-danger: #ef4444;
}
`})}),`
`,n.jsx(e.h4,{id:"tailwind-css--4",children:"Tailwind CSS < 4"}),`
`,n.jsxs(e.p,{children:["For Tailwind versions below 4, you can define your color palette in ",n.jsx(e.code,{children:"tailwind.config.ts"}),"."]}),`
`,n.jsxs(e.p,{children:["Ensure your ",n.jsx(e.code,{children:"tailwind.config.ts"})," includes:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
        outline: "#d1d5db",
        ghost: "#9ca3af",
        danger: "#ef4444",
      },
    },
  },
  plugins: [],
};
`})}),`
`,n.jsx(e.h2,{id:"️-contributing",children:"🛠️ Contributing"}),`
`,n.jsx(e.p,{children:"Contributions are welcome! Feel free to fork the repository and submit a pull request."}),`
`,n.jsx(e.h2,{id:"-license",children:"📜 License"}),`
`,n.jsx(e.p,{children:"Fast UI is open-source under the MIT License."}),`
`,n.jsx(e.p,{children:"Now you're ready to start using Fast UI in your React projects! 🚀"})]})}function x(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{x as default};
