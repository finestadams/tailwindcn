import{r as i}from"./index-DmM0KDA7.js";import{j as p}from"./jsx-runtime-D_zvdyIk.js";function N(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function Ar(...e){return n=>{let r=!1;const t=e.map(a=>{const o=N(a,n);return!r&&typeof o=="function"&&(r=!0),o});if(r)return()=>{for(let a=0;a<t.length;a++){const o=t[a];typeof o=="function"?o():N(e[a],null)}}}}var Br=i.forwardRef((e,n)=>{const{children:r,...t}=e,a=i.Children.toArray(r),o=a.find(Rr);if(o){const l=o.props.children,c=a.map(u=>u===o?i.Children.count(l)>1?i.Children.only(null):i.isValidElement(l)?l.props.children:null:u);return p.jsx(B,{...t,ref:n,children:i.isValidElement(l)?i.cloneElement(l,void 0,c):null})}return p.jsx(B,{...t,ref:n,children:r})});Br.displayName="Slot";var B=i.forwardRef((e,n)=>{const{children:r,...t}=e;if(i.isValidElement(r)){const a=Fr(r),o=Lr(t,r.props);return r.type!==i.Fragment&&(o.ref=n?Ar(n,a):a),i.cloneElement(r,o)}return i.Children.count(r)>1?i.Children.only(null):null});B.displayName="SlotClone";var Er=({children:e})=>p.jsx(p.Fragment,{children:e});function Rr(e){return i.isValidElement(e)&&e.type===Er}function Lr(e,n){const r={...n};for(const t in n){const a=e[t],o=n[t];/^on[A-Z]/.test(t)?a&&o?r[t]=(...c)=>{o(...c),a(...c)}:a&&(r[t]=a):t==="style"?r[t]={...a,...o}:t==="className"&&(r[t]=[a,o].filter(Boolean).join(" "))}return{...e,...r}}function Fr(e){var t,a;let n=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function Gr(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=Gr(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function G(){for(var e,n,r=0,t="",a=arguments.length;r<a;r++)(e=arguments[r])&&(n=Gr(e))&&(t&&(t+=" "),t+=n);return t}const A=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,E=G,Ir=(e,n)=>r=>{var t;if((n==null?void 0:n.variants)==null)return E(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:a,defaultVariants:o}=n,l=Object.keys(a).map(s=>{const d=r==null?void 0:r[s],g=o==null?void 0:o[s];if(d===null)return null;const m=A(d)||A(g);return a[s][m]}),c=r&&Object.entries(r).reduce((s,d)=>{let[g,m]=d;return m===void 0||(s[g]=m),s},{}),u=n==null||(t=n.compoundVariants)===null||t===void 0?void 0:t.reduce((s,d)=>{let{class:g,className:m,...Mr}=d;return Object.entries(Mr).every(Nr=>{let[M,W]=Nr;return Array.isArray(W)?W.includes({...o,...c}[M]):{...o,...c}[M]===W})?[...s,g,m]:s},[]);return E(e,l,u,r==null?void 0:r.class,r==null?void 0:r.className)};var Tr=Ir("inline-flex items-center justify-center font-medium transition focus:ring-2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer",{variants:{variant:{primary:"bg-primary text-foreground-primary hover:bg-primary-hover active:bg-primary-active",alternative:"py-2.5 px-5 me-2 mb-2 text-sm font-medium text-foreground-alternative focus:outline-none bg-alternative rounded-lg border border-alternative hover:bg-alternative/80 focus:z-10 focus:ring-4 focus:ring-alternative",ghost:"text-black hover:bg-ghost active:bg-ghost",outline:"border border-outline text-black hover:bg-outline active:bg-outline",link:"text-link hover:text-link-hover active:text-link-active underline",danger:"bg-danger text-foreground-danger hover:bg-danger-hover active:bg-danger-active",dark:"bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",gradientMonochrome:"text-foreground-primary bg-gradient-to-r from-primary via-primary-hover to-primary-active hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-primary",gradientDuotone:"text-foreground-primary bg-gradient-to-br from-primary to-link hover:bg-gradient-to-bl focus:ring-primary dark:focus:ring-primary",colorShadow:"text-foreground-primary bg-gradient-to-r from-primary via-primary-hover to-primary-active hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-primary/50 dark:shadow-lg dark:shadow-primary/80"},size:{sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-3 text-lg"},fullWidth:{true:"w-full"},iconOnly:{true:"p-2"},pill:{true:"rounded-full",false:"rounded-lg"}},defaultVariants:{variant:"primary",size:"md",pill:!1}}),_r=({variant:e,size:n,fullWidth:r,iconOnly:t,pill:a,asChild:o,className:l,icon:c,children:u,...s})=>{const d=o?Br:"button";return p.jsxs(d,{className:G(Tr({variant:e,size:n,fullWidth:r,iconOnly:t,pill:a}),l),...s,children:[c&&p.jsx("span",{className:G(u?"mr-2":""),children:c}),u]})};const Ur={title:"Components/Button",component:_r,argTypes:{variant:{description:"The variant of the button",control:{type:"select",options:["primary","alternative","ghost","outline","link","danger","dark","light","gradientMonochrome","gradientDuotone","gradientOutline","colorShadow"]}},size:{description:"The size of the button",control:{type:"select",options:["sm","md","lg"]}},fullWidth:{description:"If true, the button will take the full width of its container",control:"boolean"},iconOnly:{description:"If true, the button will only display an icon",control:"boolean"},pill:{description:"If true, the button will have rounded corners",control:"boolean"},asChild:{description:"If true, the button will render as a child component",control:"boolean"},icon:{description:"The icon to display in the button",control:"text"},children:{description:"The content of the button",control:"text"}}},h={args:{variant:"primary",size:"md",children:"Primary"}},v={args:{variant:"alternative",size:"md",children:"Alternative"}},f={args:{variant:"ghost",size:"md",children:"Ghost"}},y={args:{variant:"outline",size:"md",children:"Outline"}},b={args:{variant:"danger",size:"md",children:"Danger"}},z={args:{variant:"link",size:"md",children:"Link"}},k={args:{variant:"dark",size:"md",children:"Dark"}},x={args:{variant:"gradientMonochrome",size:"md",children:"Gradient Monochrome"}},S={args:{variant:"gradientDuotone",size:"md",children:"Gradient Duotone"}},w={args:{variant:"colorShadow",size:"md",children:"Color Shadow"}},C={args:{variant:"primary",size:"md",pill:!0,children:"Pill Button"}},O={args:{variant:"primary",size:"md",fullWidth:!0,children:"Full Width Button"}},D={args:{variant:"primary",size:"md",iconOnly:!0,icon:"⭐"}},j={args:{variant:"primary",size:"sm",children:"Small Button"}},P={args:{variant:"primary",size:"md",children:"Medium Button"}},V={args:{variant:"primary",size:"lg",children:"Large Button"}};var R,L,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Primary"
  }
}`,...(F=(L=h.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var I,T,_;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "alternative",
    size: "md",
    children: "Alternative"
  }
}`,...(_=(T=v.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var H,K,U;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    size: "md",
    children: "Ghost"
  }
}`,...(U=(K=f.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Z,$,q;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    size: "md",
    children: "Outline"
  }
}`,...(q=($=y.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    size: "md",
    children: "Danger"
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,rr,er;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: "link",
    size: "md",
    children: "Link"
  }
}`,...(er=(rr=z.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var nr,tr,ar;k.parameters={...k.parameters,docs:{...(nr=k.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  args: {
    variant: "dark",
    size: "md",
    children: "Dark"
  }
}`,...(ar=(tr=k.parameters)==null?void 0:tr.docs)==null?void 0:ar.source}}};var or,ir,sr;x.parameters={...x.parameters,docs:{...(or=x.parameters)==null?void 0:or.docs,source:{originalSource:`{
  args: {
    variant: "gradientMonochrome",
    size: "md",
    children: "Gradient Monochrome"
  }
}`,...(sr=(ir=x.parameters)==null?void 0:ir.docs)==null?void 0:sr.source}}};var lr,cr,dr;S.parameters={...S.parameters,docs:{...(lr=S.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    variant: "gradientDuotone",
    size: "md",
    children: "Gradient Duotone"
  }
}`,...(dr=(cr=S.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var ur,mr,pr;w.parameters={...w.parameters,docs:{...(ur=w.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  args: {
    variant: "colorShadow",
    size: "md",
    children: "Color Shadow"
  }
}`,...(pr=(mr=w.parameters)==null?void 0:mr.docs)==null?void 0:pr.source}}};var gr,hr,vr;C.parameters={...C.parameters,docs:{...(gr=C.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    pill: true,
    children: "Pill Button"
  }
}`,...(vr=(hr=C.parameters)==null?void 0:hr.docs)==null?void 0:vr.source}}};var fr,yr,br;O.parameters={...O.parameters,docs:{...(fr=O.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    fullWidth: true,
    children: "Full Width Button"
  }
}`,...(br=(yr=O.parameters)==null?void 0:yr.docs)==null?void 0:br.source}}};var zr,kr,xr;D.parameters={...D.parameters,docs:{...(zr=D.parameters)==null?void 0:zr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    iconOnly: true,
    icon: "⭐"
  }
}`,...(xr=(kr=D.parameters)==null?void 0:kr.docs)==null?void 0:xr.source}}};var Sr,wr,Cr;j.parameters={...j.parameters,docs:{...(Sr=j.parameters)==null?void 0:Sr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "sm",
    children: "Small Button"
  }
}`,...(Cr=(wr=j.parameters)==null?void 0:wr.docs)==null?void 0:Cr.source}}};var Or,Dr,jr;P.parameters={...P.parameters,docs:{...(Or=P.parameters)==null?void 0:Or.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "md",
    children: "Medium Button"
  }
}`,...(jr=(Dr=P.parameters)==null?void 0:Dr.docs)==null?void 0:jr.source}}};var Pr,Vr,Wr;V.parameters={...V.parameters,docs:{...(Pr=V.parameters)==null?void 0:Pr.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    size: "lg",
    children: "Large Button"
  }
}`,...(Wr=(Vr=V.parameters)==null?void 0:Vr.docs)==null?void 0:Wr.source}}};const Zr=["Primary","Alternative","Ghost","Outline","Danger","Link","Dark","GradientMonochrome","GradientDuotone","ColorShadow","Pill","FullWidth","IconOnly","Small","Medium","Large"];export{v as Alternative,w as ColorShadow,b as Danger,k as Dark,O as FullWidth,f as Ghost,S as GradientDuotone,x as GradientMonochrome,D as IconOnly,V as Large,z as Link,P as Medium,y as Outline,C as Pill,h as Primary,j as Small,Zr as __namedExportsOrder,Ur as default};
