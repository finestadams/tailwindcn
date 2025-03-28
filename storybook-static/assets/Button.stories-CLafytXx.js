import{r as i}from"./index-BCtMShv3.js";import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{c as W}from"./clsx-B-dksMZM.js";function L(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Lr(...e){return n=>{let r=!1;const a=e.map(t=>{const o=L(t,n);return!r&&typeof o=="function"&&(r=!0),o});if(r)return()=>{for(let t=0;t<a.length;t++){const o=a[t];typeof o=="function"?o():L(e[t],null)}}}}var Wr=i.forwardRef((e,n)=>{const{children:r,...a}=e,t=i.Children.toArray(r),o=t.find(Ar);if(o){const c=o.props.children,d=t.map(u=>u===o?i.Children.count(c)>1?i.Children.only(null):i.isValidElement(c)?c.props.children:null:u);return p.jsx(j,{...a,ref:n,children:i.isValidElement(c)?i.cloneElement(c,void 0,d):null})}return p.jsx(j,{...a,ref:n,children:r})});Wr.displayName="Slot";var j=i.forwardRef((e,n)=>{const{children:r,...a}=e;if(i.isValidElement(r)){const t=Fr(r),o=Er(a,r.props);return r.type!==i.Fragment&&(o.ref=n?Lr(n,t):t),i.cloneElement(r,o)}return i.Children.count(r)>1?i.Children.only(null):null});j.displayName="SlotClone";var Nr=({children:e})=>p.jsx(p.Fragment,{children:e});function Ar(e){return i.isValidElement(e)&&e.type===Nr}function Er(e,n){const r={...n};for(const a in n){const t=e[a],o=n[a];/^on[A-Z]/.test(a)?t&&o?r[a]=(...d)=>{o(...d),t(...d)}:t&&(r[a]=t):a==="style"?r[a]={...t,...o}:a==="className"&&(r[a]=[t,o].filter(Boolean).join(" "))}return{...e,...r}}function Fr(e){var a,t;let n=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:t.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}const N=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,A=W,Rr=(e,n)=>r=>{var a;if((n==null?void 0:n.variants)==null)return A(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:t,defaultVariants:o}=n,c=Object.keys(t).map(s=>{const l=r==null?void 0:r[s],g=o==null?void 0:o[s];if(l===null)return null;const m=N(l)||N(g);return t[s][m]}),d=r&&Object.entries(r).reduce((s,l)=>{let[g,m]=l;return m===void 0||(s[g]=m),s},{}),u=n==null||(a=n.compoundVariants)===null||a===void 0?void 0:a.reduce((s,l)=>{let{class:g,className:m,...jr}=l;return Object.entries(jr).every(Vr=>{let[V,G]=Vr;return Array.isArray(G)?G.includes({...o,...d}[V]):{...o,...d}[V]===G})?[...s,g,m]:s},[]);return A(e,c,u,r==null?void 0:r.class,r==null?void 0:r.className)};var _r=Rr("inline-flex items-center justify-center font-medium transition focus:ring-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer",{variants:{variant:{primary:"bg-primary text-foreground-primary hover:bg-primary-hover active:bg-primary-active",alternative:"py-2.5 px-5 me-2 mb-2 text-sm font-medium text-foreground-alternative focus:outline-none bg-alternative rounded-lg border border-alternative hover:bg-alternative/80 focus:z-10 focus:ring-4 focus:ring-alternative",ghost:"text-black hover:bg-ghost active:bg-ghost",outline:"border border-outline text-black hover:bg-outline active:bg-outline",link:"text-link hover:text-link-hover active:text-link-active underline",danger:"bg-danger text-foreground-danger hover:bg-danger-hover active:bg-danger-active",dark:"bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",gradientMonochrome:"text-foreground-primary bg-gradient-to-r from-primary via-primary-hover to-primary-active hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-primary",gradientDuotone:"text-foreground-primary bg-gradient-to-br from-primary to-link hover:bg-gradient-to-bl focus:ring-primary dark:focus:ring-primary",colorShadow:"text-foreground-primary bg-gradient-to-r from-primary via-primary-hover to-primary-active hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-primary/50 dark:shadow-lg dark:shadow-primary/80"},size:{sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-3 text-lg"},fullWidth:{true:"w-full"},iconOnly:{true:"p-2"},pill:{true:"rounded-full",false:"rounded-lg"}},defaultVariants:{variant:"primary",size:"md",pill:!1}}),Ir=({variant:e,size:n,fullWidth:r,iconOnly:a,pill:t,asChild:o,className:c,icon:d,children:u,...s})=>{const l=o?Wr:"button";return p.jsxs(l,{className:W(_r({variant:e,size:n,fullWidth:r,iconOnly:a,pill:t}),c),...s,children:[d&&p.jsx("span",{className:W(u?"mr-2":""),children:d}),u]})};const Tr={title:"Components/Button",component:Ir,argTypes:{variant:{description:"The variant of the button",control:{type:"select",options:["primary","alternative","ghost","outline","link","danger","dark","light","gradientMonochrome","gradientDuotone","gradientOutline","colorShadow"]}},size:{description:"The size of the button",control:{type:"select",options:["sm","md","lg"]}},fullWidth:{description:"If true, the button will take the full width of its container",control:"boolean"},iconOnly:{description:"If true, the button will only display an icon",control:"boolean"},pill:{description:"If true, the button will have rounded corners",control:"boolean"},asChild:{description:"If true, the button will render as a child component",control:"boolean"},icon:{description:"The icon to display in the button",control:"text"},children:{description:"The content of the button",control:"text"}}},v={args:{variant:"primary",size:"md",children:"Primary"},parameters:{docs:{source:{code:'<Button variant="primary" size="md">Primary</Button>'}}}},h={args:{variant:"alternative",size:"md",children:"Alternative"},parameters:{docs:{source:{code:'<Button variant="alternative" size="md">Alternative</Button>'}}}},y={args:{variant:"ghost",size:"md",children:"Ghost"},parameters:{docs:{source:{code:'<Button variant="ghost" size="md">Ghost</Button>'}}}},f={args:{variant:"outline",size:"md",children:"Outline"},parameters:{docs:{source:{code:'<Button variant="outline" size="md">Outline</Button>'}}}},B={args:{variant:"danger",size:"md",children:"Danger"},parameters:{docs:{source:{code:'<Button variant="danger" size="md">Danger</Button>'}}}},z={args:{variant:"link",size:"md",children:"Link"},parameters:{docs:{source:{code:'<Button variant="link" size="md">Link</Button>'}}}},b={args:{variant:"dark",size:"md",children:"Dark"},parameters:{docs:{source:{code:'<Button variant="dark" size="md">Dark</Button>'}}}},S={args:{variant:"gradientMonochrome",size:"md",children:"Gradient Monochrome"},parameters:{docs:{source:{code:'<Button variant="gradientMonochrome" size="md">Gradient Monochrome</Button>'}}}},k={args:{variant:"gradientDuotone",size:"md",children:"Gradient Duotone"},parameters:{docs:{source:{code:'<Button variant="gradientDuotone" size="md">Gradient Duotone</Button>'}}}},x={args:{variant:"colorShadow",size:"md",children:"Color Shadow"},parameters:{docs:{source:{code:'<Button variant="colorShadow" size="md">Color Shadow</Button>'}}}},w={args:{variant:"primary",size:"md",pill:!0,children:"Pill Button"},parameters:{docs:{source:{code:'<Button variant="primary" size="md" pill>Pill Button</Button>'}}}},D={args:{variant:"primary",size:"md",fullWidth:!0,children:"Full Width Button"},parameters:{docs:{source:{code:'<Button variant="primary" size="md" fullWidth>Full Width Button</Button>'}}}},O={args:{variant:"primary",size:"md",iconOnly:!0,icon:"⭐"},parameters:{docs:{source:{code:'<Button variant="primary" size="md" iconOnly icon="⭐" />'}}}},C={args:{variant:"primary",size:"sm",children:"Small Button"},parameters:{docs:{source:{code:'<Button variant="primary" size="sm">Small Button</Button>'}}}},P={args:{variant:"primary",size:"md",children:"Medium Button"},parameters:{docs:{source:{code:'<Button variant="primary" size="md">Medium Button</Button>'}}}},M={args:{variant:"primary",size:"lg",children:"Large Button"},parameters:{docs:{source:{code:'<Button variant="primary" size="lg">Large Button</Button>'}}}};var E,F,R;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Primary"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="primary" size="md">Primary</Button>\`
      }
    }
  }
}`,...(R=(F=v.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var _,I,T;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "alternative",
    size: "md",
    children: "Alternative"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="alternative" size="md">Alternative</Button>\`
      }
    }
  }
}`,...(T=(I=h.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var H,K,U;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    size: "md",
    children: "Ghost"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="ghost" size="md">Ghost</Button>\`
      }
    }
  }
}`,...(U=(K=y.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Z,$,q;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "Outline"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="outline" size="md">Outline</Button>\`
      }
    }
  }
}`,...(q=($=f.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var J,Q,X;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    size: "md",
    children: "Danger"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="danger" size="md">Danger</Button>\`
      }
    }
  }
}`,...(X=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,rr,er;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "link",
    size: "md",
    children: "Link"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="link" size="md">Link</Button>\`
      }
    }
  }
}`,...(er=(rr=z.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var nr,tr,ar;b.parameters={...b.parameters,docs:{...(nr=b.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    size: "md",
    children: "Dark"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="dark" size="md">Dark</Button>\`
      }
    }
  }
}`,...(ar=(tr=b.parameters)==null?void 0:tr.docs)==null?void 0:ar.source}}};var or,ir,sr;S.parameters={...S.parameters,docs:{...(or=S.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    variant: "gradientMonochrome",
    size: "md",
    children: "Gradient Monochrome"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="gradientMonochrome" size="md">Gradient Monochrome</Button>\`
      }
    }
  }
}`,...(sr=(ir=S.parameters)==null?void 0:ir.docs)==null?void 0:sr.source}}};var cr,dr,lr;k.parameters={...k.parameters,docs:{...(cr=k.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    variant: "gradientDuotone",
    size: "md",
    children: "Gradient Duotone"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="gradientDuotone" size="md">Gradient Duotone</Button>\`
      }
    }
  }
}`,...(lr=(dr=k.parameters)==null?void 0:dr.docs)==null?void 0:lr.source}}};var ur,mr,pr;x.parameters={...x.parameters,docs:{...(ur=x.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    variant: "colorShadow",
    size: "md",
    children: "Color Shadow"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="colorShadow" size="md">Color Shadow</Button>\`
      }
    }
  }
}`,...(pr=(mr=x.parameters)==null?void 0:mr.docs)==null?void 0:pr.source}}};var gr,vr,hr;w.parameters={...w.parameters,docs:{...(gr=w.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    pill: true,
    children: "Pill Button"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="primary" size="md" pill>Pill Button</Button>\`
      }
    }
  }
}`,...(hr=(vr=w.parameters)==null?void 0:vr.docs)==null?void 0:hr.source}}};var yr,fr,Br;D.parameters={...D.parameters,docs:{...(yr=D.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    fullWidth: true,
    children: "Full Width Button"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="primary" size="md" fullWidth>Full Width Button</Button>\`
      }
    }
  }
}`,...(Br=(fr=D.parameters)==null?void 0:fr.docs)==null?void 0:Br.source}}};var zr,br,Sr;O.parameters={...O.parameters,docs:{...(zr=O.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    iconOnly: true,
    icon: "⭐"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="primary" size="md" iconOnly icon="⭐" />\`
      }
    }
  }
}`,...(Sr=(br=O.parameters)==null?void 0:br.docs)==null?void 0:Sr.source}}};var kr,xr,wr;C.parameters={...C.parameters,docs:{...(kr=C.parameters)==null?void 0:kr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    children: "Small Button"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="primary" size="sm">Small Button</Button>\`
      }
    }
  }
}`,...(wr=(xr=C.parameters)==null?void 0:xr.docs)==null?void 0:wr.source}}};var Dr,Or,Cr;P.parameters={...P.parameters,docs:{...(Dr=P.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Medium Button"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="primary" size="md">Medium Button</Button>\`
      }
    }
  }
}`,...(Cr=(Or=P.parameters)==null?void 0:Or.docs)==null?void 0:Cr.source}}};var Pr,Mr,Gr;M.parameters={...M.parameters,docs:{...(Pr=M.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    children: "Large Button"
  },
  parameters: {
    docs: {
      source: {
        code: \`<Button variant="primary" size="lg">Large Button</Button>\`
      }
    }
  }
}`,...(Gr=(Mr=M.parameters)==null?void 0:Mr.docs)==null?void 0:Gr.source}}};const Hr=["Primary","Alternative","Ghost","Outline","Danger","Link","Dark","GradientMonochrome","GradientDuotone","ColorShadow","Pill","FullWidth","IconOnly","Small","Medium","Large"],$r=Object.freeze(Object.defineProperty({__proto__:null,Alternative:h,ColorShadow:x,Danger:B,Dark:b,FullWidth:D,Ghost:y,GradientDuotone:k,GradientMonochrome:S,IconOnly:O,Large:M,Link:z,Medium:P,Outline:f,Pill:w,Primary:v,Small:C,__namedExportsOrder:Hr,default:Tr},Symbol.toStringTag,{value:"Module"}));export{$r as B,B as D,D as F,O as I,M as L,P as M,f as O,v as P,C as S,Ir as a,w as b};
