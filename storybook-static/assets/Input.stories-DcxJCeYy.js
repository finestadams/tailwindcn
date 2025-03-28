import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as l}from"./clsx-B-dksMZM.js";var F=({error:e,icon:d,inputSize:c="md",className:G,type:Q="text",...H})=>r.jsxs("div",{className:"flex flex-col space-y-1",children:[r.jsxs("div",{className:l("flex items-center border rounded-md border-gray-500 transition focus-within:ring-2",{"px-2 py-1 text-xs":c==="sm","px-3 py-2 text-sm":c==="md","px-4 py-3 text-base":c==="lg"},{"focus-within:ring-primary":!e,"border-red-500 focus-within:ring-red-500":e},G),children:[d&&r.jsx("span",{className:"mr-2  ",children:d}),r.jsx("input",{className:l("w-full outline-none bg-transparent",e?"text-red-500":"text-black"),"aria-invalid":!!e,...H})]}),e&&r.jsx("p",{className:"text-xs text-red-500",children:e})]});const J={title:"Components/Input",component:F,argTypes:{inputSize:{description:"The size of the input field.",control:{type:"select",options:["sm","md","lg"]}},error:{description:"Error message to display below the input.",control:"text"},icon:{description:"Icon to display inside the input field.",control:"text"},placeholder:{description:"Placeholder text for the input field.",control:"text"},disabled:{description:"Disables the input field.",control:"boolean"}},parameters:{docs:{description:{component:"The `Input` component is used to capture user input. It supports different sizes, states, and configurations."}}}},p={render:e=>r.jsx(F,{...e})},t={...p,args:{placeholder:"Enter text",inputSize:"md"},parameters:{docs:{description:{story:"The default input field with a placeholder."},source:{code:'<Input placeholder="Enter text" inputSize="md" />'}}}},s={...p,args:{placeholder:"Small Input",inputSize:"sm"},parameters:{docs:{description:{story:"A small-sized input field."},source:{code:'<Input placeholder="Small Input" inputSize="sm" />'}}}},n={...p,args:{placeholder:"Large Input",inputSize:"lg"},parameters:{docs:{description:{story:"A large-sized input field."},source:{code:'<Input placeholder="Large Input" inputSize="lg" />'}}}},o={...p,args:{placeholder:"Enter text",error:"This field is required."},parameters:{docs:{description:{story:"An input field with an error message."},source:{code:'<Input placeholder="Enter text" error="This field is required." />'}}}},a={...p,args:{placeholder:"Search",icon:r.jsx("svg",{className:"w-4 h-4 text-gray-500",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{d:"M12.9 14.32a8 8 0 111.41-1.41l4.39 4.39a1 1 0 01-1.42 1.42l-4.38-4.4zM8 14a6 6 0 100-12 6 6 0 000 12z"})})},parameters:{docs:{description:{story:"An input field with a search icon."},source:{code:'<Input placeholder="Search" icon={<svg>...</svg>} />'}}}},i={...p,args:{placeholder:"Disabled Input",disabled:!0},parameters:{docs:{description:{story:"A disabled input field."},source:{code:'<Input placeholder="Disabled Input" disabled />'}}}};var u,m,h,g,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source},description:{story:"Default Input Story",...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.description}}};var f,I,y,S,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(I=s.parameters)==null?void 0:I.docs)==null?void 0:y.source},description:{story:"Small Input Story",...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.description}}};var z,w,T,v,E;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.source},description:{story:"Large Input Story",...(E=(v=n.parameters)==null?void 0:v.docs)==null?void 0:E.description}}};var j,D,A,L,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(D=o.parameters)==null?void 0:D.docs)==null?void 0:A.source},description:{story:"Input with Error Story",...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.description}}};var _,M,W,q,C;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(W=(M=a.parameters)==null?void 0:M.docs)==null?void 0:W.source},description:{story:"Input with Icon Story",...(C=(q=a.parameters)==null?void 0:q.docs)==null?void 0:C.description}}};var O,B,P,k,R;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(B=i.parameters)==null?void 0:B.docs)==null?void 0:P.source},description:{story:"Disabled Input Story",...(R=(k=i.parameters)==null?void 0:k.docs)==null?void 0:R.description}}};const K=["Default","Small","Large","WithError","WithIcon","Disabled"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:i,Large:n,Small:s,WithError:o,WithIcon:a,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{t as D,X as I,n as L,s as S,o as W,F as a,a as b,i as c};
