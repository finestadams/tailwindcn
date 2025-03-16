import{r as s}from"./index-DmM0KDA7.js";import{j as f}from"./jsx-runtime-D_zvdyIk.js";function V(e,n){if(typeof e=="function")return e(n);e!=null&&(e.current=n)}function M(...e){return n=>{let r=!1;const t=e.map(a=>{const o=V(a,n);return!r&&typeof o=="function"&&(r=!0),o});if(r)return()=>{for(let a=0;a<t.length;a++){const o=t[a];typeof o=="function"?o():V(e[a],null)}}}}var $=s.forwardRef((e,n)=>{const{children:r,...t}=e,a=s.Children.toArray(r),o=a.find(X);if(o){const l=o.props.children,c=a.map(u=>u===o?s.Children.count(l)>1?s.Children.only(null):s.isValidElement(l)?l.props.children:null:u);return f.jsx(j,{...t,ref:n,children:s.isValidElement(l)?s.cloneElement(l,void 0,c):null})}return f.jsx(j,{...t,ref:n,children:r})});$.displayName="Slot";var j=s.forwardRef((e,n)=>{const{children:r,...t}=e;if(s.isValidElement(r)){const a=rr(r),o=Y(t,r.props);return r.type!==s.Fragment&&(o.ref=n?M(n,a):a),s.cloneElement(r,o)}return s.Children.count(r)>1?s.Children.only(null):null});j.displayName="SlotClone";var Q=({children:e})=>f.jsx(f.Fragment,{children:e});function X(e){return s.isValidElement(e)&&e.type===Q}function Y(e,n){const r={...n};for(const t in n){const a=e[t],o=n[t];/^on[A-Z]/.test(t)?a&&o?r[t]=(...c)=>{o(...c),a(...c)}:a&&(r[t]=a):t==="style"?r[t]={...a,...o}:t==="className"&&(r[t]=[a,o].filter(Boolean).join(" "))}return{...e,...r}}function rr(e){var t,a;let n=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,r=n&&"isReactWarning"in n&&n.isReactWarning;return r?e.ref:(n=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,r=n&&"isReactWarning"in n&&n.isReactWarning,r?e.props.ref:e.props.ref||e.ref)}function q(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(r=q(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function k(){for(var e,n,r=0,t="",a=arguments.length;r<a;r++)(e=arguments[r])&&(n=q(e))&&(t&&(t+=" "),t+=n);return t}const O=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,N=k,er=(e,n)=>r=>{var t;if((n==null?void 0:n.variants)==null)return N(e,r==null?void 0:r.class,r==null?void 0:r.className);const{variants:a,defaultVariants:o}=n,l=Object.keys(a).map(i=>{const d=r==null?void 0:r[i],g=o==null?void 0:o[i];if(d===null)return null;const m=O(d)||O(g);return a[i][m]}),c=r&&Object.entries(r).reduce((i,d)=>{let[g,m]=d;return m===void 0||(i[g]=m),i},{}),u=n==null||(t=n.compoundVariants)===null||t===void 0?void 0:t.reduce((i,d)=>{let{class:g,className:m,...I}=d;return Object.entries(I).every(J=>{let[C,S]=J;return Array.isArray(S)?S.includes({...o,...c}[C]):{...o,...c}[C]===S})?[...i,g,m]:i},[]);return N(e,l,u,r==null?void 0:r.class,r==null?void 0:r.className)};var nr=er("inline-flex items-center justify-center rounded-md font-medium transition focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",{variants:{variant:{primary:"bg-primary text-foreground-primary hover:bg-primary-hover active:bg-primary-active",secondary:"bg-secondary text-foreground-secondary hover:bg-secondary-hover active:bg-secondary-active",ghost:"text-black hover:bg-ghost active:bg-ghost",outline:"border border-outline text-black hover:bg-outline active:bg-outline",link:"text-link hover:text-link-hover active:text-link-active underline",danger:"bg-danger text-foreground-danger hover:bg-danger-hover active:bg-danger-active"},size:{sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-base",lg:"px-5 py-3 text-lg"},fullWidth:{true:"w-full"},iconOnly:{true:"p-2"}},defaultVariants:{variant:"primary",size:"md"}}),tr=({variant:e,size:n,fullWidth:r,iconOnly:t,asChild:a,className:o,icon:l,children:c,...u})=>{const i=a?$:"button";return f.jsxs(i,{className:k(nr({variant:e,size:n,fullWidth:r,iconOnly:t}),o),...u,children:[l&&f.jsx("span",{className:k(c?"mr-2":""),children:l}),c]})};const sr={component:tr},v={args:{variant:"primary",children:"Primary"}},p={args:{variant:"secondary",children:"Secondary"}},y={args:{variant:"ghost",children:"Ghost"}},h={args:{variant:"outline",children:"Outline"}},b={args:{variant:"danger",children:"Danger"}},x={args:{variant:"link",children:"Link"}};var E,P,R;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary"
  }
}`,...(R=(P=v.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var A,W,w;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...(w=(W=p.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var D,G,L;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost"
  }
}`,...(L=(G=y.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var _,z,B;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...(B=(z=h.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var F,H,K;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Danger"
  }
}`,...(K=(H=b.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var T,U,Z;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "link",
    children: "Link"
  }
}`,...(Z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const ir=["Primary","Secondary","Ghost","Outline","Danger","Link"];export{b as Danger,y as Ghost,x as Link,h as Outline,v as Primary,p as Secondary,ir as __namedExportsOrder,sr as default};
