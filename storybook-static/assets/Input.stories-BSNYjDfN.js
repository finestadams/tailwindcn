import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as H}from"./clsx-B-dksMZM.js";var R=({error:r,icon:d,inputSize:c="md",className:F,...G})=>e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsxs("div",{className:H("flex items-center border rounded-md transition focus-within:ring-2",{"px-2 py-1 text-xs":c==="sm","px-3 py-2 text-sm":c==="md","px-4 py-3 text-base":c==="lg"},{" focus-within:ring-primary dark:border-gray-600 dark:focus-within:ring-primary-500":!r,"border-red-500 focus-within:ring-red-500":r},F),children:[d&&e.jsx("span",{className:"mr-2 text-gray-500 dark:text-gray-400",children:d}),e.jsx("input",{className:"w-full outline-none bg-transparent text-black ","aria-invalid":!!r,...G})]}),r&&e.jsx("p",{className:"text-xs text-red-500",children:r})]});const J={title:"Components/Input",component:R,argTypes:{inputSize:{description:"The size of the input field.",control:{type:"select",options:["sm","md","lg"]}},error:{description:"Error message to display below the input.",control:"text"},icon:{description:"Icon to display inside the input field.",control:"text"},placeholder:{description:"Placeholder text for the input field.",control:"text"},disabled:{description:"Disables the input field.",control:"boolean"}},parameters:{docs:{description:{component:"The `Input` component is used to capture user input. It supports different sizes, states, and configurations."}}}},p={render:r=>e.jsx(R,{...r})},t={...p,args:{placeholder:"Enter text",inputSize:"md"},parameters:{docs:{description:{story:"The default input field with a placeholder."},source:{code:'<Input placeholder="Enter text" inputSize="md" />'}}}},s={...p,args:{placeholder:"Small Input",inputSize:"sm"},parameters:{docs:{description:{story:"A small-sized input field."},source:{code:'<Input placeholder="Small Input" inputSize="sm" />'}}}},n={...p,args:{placeholder:"Large Input",inputSize:"lg"},parameters:{docs:{description:{story:"A large-sized input field."},source:{code:'<Input placeholder="Large Input" inputSize="lg" />'}}}},a={...p,args:{placeholder:"Enter text",error:"This field is required."},parameters:{docs:{description:{story:"An input field with an error message."},source:{code:'<Input placeholder="Enter text" error="This field is required." />'}}}},o={...p,args:{placeholder:"Search",icon:e.jsx("svg",{className:"w-4 h-4 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M12.9 14.32a8 8 0 111.41-1.41l4.39 4.39a1 1 0 01-1.42 1.42l-4.38-4.4zM8 14a6 6 0 100-12 6 6 0 000 12z"})})},parameters:{docs:{description:{story:"An input field with a search icon."},source:{code:'<Input placeholder="Search" icon={<svg>...</svg>} />'}}}},i={...p,args:{placeholder:"Disabled Input",disabled:!0},parameters:{docs:{description:{story:"A disabled input field."},source:{code:'<Input placeholder="Disabled Input" disabled />'}}}};var l,u,m,h,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: "Enter text",
    inputSize: "md"
  },
  parameters: {
    docs: {
      description: {
        story: "The default input field with a placeholder."
      },
      source: {
        code: \`<Input placeholder="Enter text" inputSize="md" />\`
      }
    }
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Default Input Story",...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var f,x,y,I,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: "Small Input",
    inputSize: "sm"
  },
  parameters: {
    docs: {
      description: {
        story: "A small-sized input field."
      },
      source: {
        code: \`<Input placeholder="Small Input" inputSize="sm" />\`
      }
    }
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:"Small Input Story",...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.description}}};var b,z,w,T,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: "Large Input",
    inputSize: "lg"
  },
  parameters: {
    docs: {
      description: {
        story: "A large-sized input field."
      },
      source: {
        code: \`<Input placeholder="Large Input" inputSize="lg" />\`
      }
    }
  }
}`,...(w=(z=n.parameters)==null?void 0:z.docs)==null?void 0:w.source},description:{story:"Large Input Story",...(v=(T=n.parameters)==null?void 0:T.docs)==null?void 0:v.description}}};var E,j,D,A,L;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: "Enter text",
    error: "This field is required."
  },
  parameters: {
    docs: {
      description: {
        story: "An input field with an error message."
      },
      source: {
        code: \`<Input placeholder="Enter text" error="This field is required." />\`
      }
    }
  }
}`,...(D=(j=a.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:"Input with Error Story",...(L=(A=a.parameters)==null?void 0:A.docs)==null?void 0:L.description}}};var N,_,M,W,k;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: "Search",
    icon: <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">\r
        <path d="M12.9 14.32a8 8 0 111.41-1.41l4.39 4.39a1 1 0 01-1.42 1.42l-4.38-4.4zM8 14a6 6 0 100-12 6 6 0 000 12z" />\r
      </svg>
  },
  parameters: {
    docs: {
      description: {
        story: "An input field with a search icon."
      },
      source: {
        code: \`<Input placeholder="Search" icon={<svg>...</svg>} />\`
      }
    }
  }
}`,...(M=(_=o.parameters)==null?void 0:_.docs)==null?void 0:M.source},description:{story:"Input with Icon Story",...(k=(W=o.parameters)==null?void 0:W.docs)==null?void 0:k.description}}};var q,C,O,B,P;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Template,
  args: {
    placeholder: "Disabled Input",
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: "A disabled input field."
      },
      source: {
        code: \`<Input placeholder="Disabled Input" disabled />\`
      }
    }
  }
}`,...(O=(C=i.parameters)==null?void 0:C.docs)==null?void 0:O.source},description:{story:"Disabled Input Story",...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.description}}};const K=["Default","Small","Large","WithError","WithIcon","Disabled"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:i,Large:n,Small:s,WithError:a,WithIcon:o,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{t as D,V as I,n as L,s as S,a as W,R as a,o as b,i as c};
