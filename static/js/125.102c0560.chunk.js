"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[125],{1301:(n,e,t)=>{t.d(e,{C:()=>a});var r,o=t(3516),c=t(7528);const s=(0,t(197).Ay)(o.lV)(r||(r=(0,c.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: ",";\n  width: 320px;\n  padding: ",";\n\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n"])),(n=>n.theme.spacing(5)),(n=>n.theme.spacing(6)),(n=>n.theme.colors.white),(n=>n.theme.colors.accent),(n=>n.theme.radii.lg));var i=t(579);const a=n=>{let{initialValues:e,onSubmit:t,validationSchema:r,children:c}=n;return(0,i.jsx)(o.l1,{initialValues:e,onSubmit:t,validationSchema:r,children:(0,i.jsx)(s,{children:c})})}},9547:(n,e,t)=>{t.d(e,{z:()=>u});var r,o,c,s=t(7528),i=t(197),a=t(3516);const l=i.Ay.label(r||(r=(0,s.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  width: 100%;\n\n  font-size: 18px;\n  font-weight: 500;\n"])),(n=>n.theme.spacing(1))),d=(0,i.Ay)(a.D0)(o||(o=(0,s.A)(["\n  padding: "," ",";\n\n  font-size: 18px;\n  color: ",";\n\n  background: ",";\n  border: none;\n  border-radius: ",";\n"])),(n=>n.theme.spacing(2)),(n=>n.theme.spacing(4)),(n=>n.theme.colors.black),(n=>n.theme.colors.bg),(n=>n.theme.radii.md)),h=(0,i.Ay)(a.Kw)(c||(c=(0,s.A)(["\n  color: ",";\n  font-size: 16px;\n"])),(n=>n.theme.colors.red));var m=t(579);const u=n=>{let{label:e,type:t,name:r}=n;return(0,m.jsxs)(l,{children:[e,(0,m.jsx)(d,{type:t,name:r}),(0,m.jsx)(h,{name:r,component:"span"})]})}},7873:(n,e,t)=>{t.d(e,{R:()=>i});var r,o=t(7528);const c=t(197).Ay.button(r||(r=(0,o.A)(["\n  display: block;\n  margin: 0 auto;\n  padding: "," ",";\n\n  font-size: 18px;\n  font-weight: 500;\n  color: ",";\n\n  border: none;\n  border-radius: ",";\n  background-color: ",";\n\n  transition: ",",\n    ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n    color: ",";\n  }\n"])),(n=>n.theme.spacing(2)),(n=>n.theme.spacing(4)),(n=>n.theme.colors.black),(n=>n.theme.radii.md),(n=>n.theme.colors.bg),(n=>n.theme.transition("color")),(n=>n.theme.transition("background-color")),(n=>n.theme.colors.accent),(n=>n.theme.colors.white));var s=t(579);const i=n=>{let{children:e,isLoading:t}=n;return(0,s.jsx)(c,{type:"submit",disabled:t,children:e})}},1844:(n,e,t)=>{t.d(e,{F:()=>i});var r,o=t(7528);const c=t(197).Ay.p(r||(r=(0,o.A)(["\n  text-align: center;\n"])));var s=t(579);const i=n=>{let{children:e}=n;return(0,s.jsx)(c,{children:(0,s.jsx)("b",{children:e})})}},7125:(n,e,t)=>{t.r(e),t.d(e,{default:()=>kn});var r=t(5043),o=t(9456),c=t(192);const s=n=>n.filter,i=n=>n.contacts.items,a=n=>n.contacts.isGetLoading,l=n=>n.contacts.getError,d=n=>n.contacts.isModifyLoading,h=(0,c.Mz)([i,s],((n,e)=>{const t=e.name.toLowerCase();return n.filter((n=>{let{name:r,number:o}=n;return r.toLowerCase().includes(t)&&o.includes(e.number)})).sort(((n,e)=>n.name.localeCompare(e.name)))}));var m=t(3768),u=t(6977),p=t(899);const g=p.Ik().shape({name:p.Yj().min(2,"Too Short").required("Required"),number:p.Yj().min(7,"Must be 7 or more").required("Required")});var x=t(2963),b=t.n(x);const v={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",padding:0,borderRadius:t(8114).w.radii.lg,border:"none",transform:"translate(-50%, -50%)"}};var f=t(579);b().setAppElement("#root");const j=n=>{let{isOpen:e,onClose:t,children:r}=n;return(0,f.jsx)(b(),{isOpen:e,onRequestClose:t,style:v,children:r})};var y=t(1301),w=t(9547),A=t(7873),C=t(1844);const k=n=>{let{isOpen:e,onClose:t}=n;const r=(0,o.wA)(),c=(0,o.d4)(i),s=(0,o.d4)(d);return(0,f.jsx)(j,{isOpen:e,onClose:t,children:(0,f.jsxs)(y.C,{initialValues:{name:"",number:""},onSubmit:async(n,e)=>{const o=((n,e)=>{const t=e.toLowerCase();return n.some((n=>{let{name:e}=n;return e.toLowerCase()===t}))})(c,n.name);if(o)return m.Ay.error("".concat(n.name," is already in contacts.")),o;await m.Ay.promise(r((0,u.IP)(n)).unwrap(),{loading:"Adding new contact...",success:(0,f.jsx)(C.F,{children:"Contact added successful!"}),error:(0,f.jsx)(C.F,{children:"Failed to add contact. Try again."})}),e.resetForm(),t()},validationSchema:g,children:[(0,f.jsx)(w.z,{label:"Name",type:"text",name:"name"}),(0,f.jsx)(w.z,{label:"Number",type:"tel",name:"number"}),(0,f.jsx)(A.R,{isLoading:s,children:"Add contact"})]})})},z=n=>{let{contact:{id:e,name:t,number:r},isOpen:c,onClose:s}=n;const i=(0,o.wA)(),a=(0,o.d4)(d);return(0,f.jsx)(j,{isOpen:c,onClose:s,children:(0,f.jsxs)(y.C,{initialValues:{name:t,number:r},onSubmit:async(n,t)=>{await m.Ay.promise(i((0,u.CI)({...n,id:e})).unwrap(),{loading:"Updating contact...",success:(0,f.jsx)(C.F,{children:"Contact updated successful!"}),error:(0,f.jsx)(C.F,{children:"Update failed. Try again."})}),t.resetForm(),s()},validationSchema:g,children:[(0,f.jsx)(w.z,{label:"Name",type:"text",name:"name"}),(0,f.jsx)(w.z,{label:"Number",type:"tel",name:"number"}),(0,f.jsx)(A.R,{isLoading:a,children:"Update contact"})]})})};var O,F=t(4037),M=t(7528),E=t(197);function S(){return S=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},S.apply(this,arguments)}function R(n,e){let{title:t,titleId:o,...c}=n;return r.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",ref:e,"aria-labelledby":o},c),t?r.createElement("title",{id:o},t):null,O||(O=r.createElement("path",{d:"M29.333 8h-18.667c-2.208 0-4.213 0.899-5.656 2.344s-2.344 3.448-2.344 5.656v37.333c0 2.208 0.899 4.213 2.344 5.656s3.448 2.344 5.656 2.344h37.333c2.208 0 4.213-0.899 5.656-2.344s2.344-3.448 2.344-5.656v-18.667c0-1.472-1.195-2.667-2.667-2.667s-2.667 1.195-2.667 2.667v18.667c0 0.736-0.296 1.4-0.781 1.885s-1.149 0.781-1.885 0.781h-37.333c-0.736 0-1.4-0.296-1.885-0.781s-0.781-1.149-0.781-1.885v-37.333c0-0.736 0.296-1.4 0.781-1.885s1.149-0.781 1.885-0.781h18.667c1.472 0 2.667-1.195 2.667-2.667s-1.195-2.667-2.667-2.667zM47.448 4.781l-25.333 25.333c-0.325 0.323-0.579 0.747-0.701 1.24l-2.667 10.667c-0.104 0.4-0.112 0.848 0 1.293 0.357 1.429 1.805 2.299 3.235 1.941l10.667-2.667c0.445-0.109 0.88-0.344 1.24-0.701l25.333-25.333c1.624-1.624 2.437-3.76 2.437-5.885s-0.813-4.261-2.437-5.885-3.763-2.44-5.888-2.44-4.261 0.813-5.885 2.437zM51.219 8.552c0.584-0.584 1.344-0.875 2.115-0.875s1.531 0.291 2.115 0.875 0.875 1.344 0.875 2.115-0.291 1.531-0.875 2.115l-24.811 24.811-5.637 1.411 1.411-5.637z"})))}const L=r.forwardRef(R);t.p;var _;function T(){return T=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},T.apply(this,arguments)}function I(n,e){let{title:t,titleId:o,...c}=n;return r.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",ref:e,"aria-labelledby":o},c),t?r.createElement("title",{id:o},t):null,_||(_=r.createElement("path",{d:"M48 18.667v34.667c0 0.736-0.296 1.4-0.781 1.885s-1.149 0.781-1.885 0.781h-26.667c-0.736 0-1.4-0.296-1.885-0.781s-0.781-1.149-0.781-1.885v-34.667zM45.333 13.333v-2.667c0-2.208-0.899-4.213-2.344-5.656s-3.448-2.344-5.656-2.344h-10.667c-2.208 0-4.213 0.899-5.656 2.344s-2.344 3.448-2.344 5.656v2.667h-10.667c-1.472 0-2.667 1.195-2.667 2.667s1.195 2.667 2.667 2.667h2.667v34.667c0 2.208 0.899 4.213 2.344 5.656s3.448 2.344 5.656 2.344h26.667c2.208 0 4.213-0.899 5.656-2.344s2.344-3.448 2.344-5.656v-34.667h2.667c1.472 0 2.667-1.195 2.667-2.667s-1.195-2.667-2.667-2.667zM24 13.333v-2.667c0-0.736 0.296-1.4 0.781-1.885s1.149-0.781 1.885-0.781h10.667c0.736 0 1.4 0.296 1.885 0.781s0.781 1.149 0.781 1.885v2.667zM24 29.333v16c0 1.472 1.195 2.667 2.667 2.667s2.667-1.195 2.667-2.667v-16c0-1.472-1.195-2.667-2.667-2.667s-2.667 1.195-2.667 2.667zM34.667 29.333v16c0 1.472 1.195 2.667 2.667 2.667s2.667-1.195 2.667-2.667v-16c0-1.472-1.195-2.667-2.667-2.667s-2.667 1.195-2.667 2.667z"})))}const q=r.forwardRef(I);t.p;var N,P,V,B,D,U,Y;const G=E.Ay.tr(N||(N=(0,M.A)(["\n  &:nth-child(odd) {\n    background-color: ",";\n  }\n  &:nth-child(even) {\n    background-color: ",";\n  }\n"])),(n=>n.theme.colors.bg),(n=>n.theme.colors.white)),H=E.Ay.td(P||(P=(0,M.A)(["\n  padding: ",";\n"])),(n=>n.theme.spacing(2))),K=E.Ay.p(V||(V=(0,M.A)(["\n  font-weight: 500;\n"]))),J=E.Ay.p(B||(B=(0,M.A)(["\n  text-align: center;\n"]))),Q=E.Ay.button(D||(D=(0,M.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  height: 30px;\n  padding: 0;\n\n  color: ",";\n\n  background-color: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n\n  transition: ",",\n    ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(n=>n.theme.colors.accent),(n=>n.theme.colors.white),(n=>n.theme.radii.md),(n=>n.theme.colors.accent),(n=>n.theme.transition("color")),(n=>n.theme.transition("background-color")),(n=>n.theme.colors.white),(n=>n.theme.colors.accent)),W=(0,E.Ay)(L)(U||(U=(0,M.A)(["\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n"]))),X=(0,E.Ay)(q)(Y||(Y=(0,M.A)(["\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n"]))),Z=n=>{let{contact:e}=n;const[t,c]=(0,r.useState)(!1),s=(0,o.wA)(),i=(0,o.d4)(d),a=()=>{c((n=>!n))};return(0,f.jsxs)(G,{children:[(0,f.jsx)(H,{children:(0,f.jsx)(F.H,{children:e.name[0]})}),(0,f.jsx)(H,{children:(0,f.jsx)(K,{children:e.name})}),(0,f.jsx)(H,{children:(0,f.jsx)(J,{children:e.number})}),(0,f.jsx)(H,{children:(0,f.jsx)(Q,{type:"button",onClick:a,disabled:i,children:(0,f.jsx)(W,{})})}),(0,f.jsx)(H,{children:(0,f.jsx)(Q,{type:"button",onClick:()=>(async n=>{await m.Ay.promise(s((0,u.MO)(n)).unwrap(),{loading:"Deleting contact...",success:(0,f.jsx)(C.F,{children:"Contact deleted successful!"}),error:(0,f.jsx)(C.F,{children:"Failed to delete contact. Try again."})})})(e.id),disabled:i,children:(0,f.jsx)(X,{})})}),t&&(0,f.jsx)(z,{isOpen:t,onClose:a,contact:e})]})};var $,nn;const en=E.Ay.table($||($=(0,M.A)(["\n  background-color: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n  overflow: hidden;\n"])),(n=>n.theme.colors.white),(n=>n.theme.radii.lg),(n=>n.theme.colors.accent)),tn=E.Ay.p(nn||(nn=(0,M.A)(["\n  font-size: 18px;\n  font-weight: 500;\n"])));var rn=t(9267);const on=()=>{const n=(0,E.DP)();return(0,f.jsx)(rn.A,{color:n.colors.accent})},cn=()=>{const n=(0,o.wA)(),e=(0,o.d4)(h),t=(0,o.d4)(s),c=(0,o.d4)(a),i=(0,o.d4)(l);(0,r.useEffect)((()=>{n((0,u.oe)())}),[n]);const d=e.length;let m="Total: ".concat(d);return d&&(t.name||t.number)&&(m="Found: ".concat(d)),d||!t.name&&!t.number||(m="No contacts found"),d||t.name||t.number||(m="Your contact list is empty"),(0,f.jsxs)(f.Fragment,{children:[c&&(0,f.jsx)(on,{}),i&&(0,f.jsx)(tn,{children:"Oops! Something went wrong"}),!c&&!i&&(0,f.jsx)(tn,{children:m}),!c&&!i&&e.length>0&&(0,f.jsx)(en,{children:(0,f.jsx)("tbody",{children:e.map((n=>(0,f.jsx)(Z,{contact:n},n.id)))})})]})};var sn,an,ln=t(3834);const dn=E.Ay.label(sn||(sn=(0,M.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n\n  font-size: 18px;\n  font-weight: 500;\n"])),(n=>n.theme.spacing(1))),hn=E.Ay.input(an||(an=(0,M.A)(["\n  padding: "," ",";\n\n  font-size: 18px;\n  color: ",";\n\n  background: ",";\n  border: none;\n  border-radius: ",";\n"])),(n=>n.theme.spacing(2)),(n=>n.theme.spacing(4)),(n=>n.theme.colors.black),(n=>n.theme.colors.bg),(n=>n.theme.radii.md)),mn=()=>{const n=(0,o.wA)(),e=(0,o.d4)(s),t=e=>{const{name:t,value:r}=e.target;n((0,ln._9)({name:t,value:r}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(dn,{children:["Find by name",(0,f.jsx)(hn,{type:"text",name:"name",value:e.name,onChange:t,placeholder:"Type name here..."})]}),(0,f.jsxs)(dn,{children:["Find by number",(0,f.jsx)(hn,{type:"text",name:"number",value:e.number,onChange:t,placeholder:"Type number here..."})]})]})};var un;function pn(){return pn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},pn.apply(this,arguments)}function gn(n,e){let{title:t,titleId:o,...c}=n;return r.createElement("svg",pn({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",ref:e,"aria-labelledby":o},c),t?r.createElement("title",{id:o},t):null,un||(un=r.createElement("path",{d:"M45.333 56v-5.333c0-3.68-1.496-7.019-3.904-9.429s-5.749-3.904-9.429-3.904h-18.667c-3.68 0-7.019 1.496-9.429 3.904s-3.904 5.749-3.904 9.429v5.333c0 1.472 1.195 2.667 2.667 2.667s2.667-1.195 2.667-2.667v-5.333c0-2.211 0.893-4.205 2.344-5.656s3.445-2.344 5.656-2.344h18.667c2.211 0 4.205 0.893 5.656 2.344s2.344 3.445 2.344 5.656v5.333c0 1.472 1.195 2.667 2.667 2.667s2.667-1.195 2.667-2.667zM36 18.667c0-3.68-1.496-7.019-3.904-9.429s-5.749-3.904-9.429-3.904-7.019 1.496-9.429 3.904-3.904 5.749-3.904 9.429 1.496 7.019 3.904 9.429 5.749 3.904 9.429 3.904 7.019-1.496 9.429-3.904 3.904-5.749 3.904-9.429zM30.667 18.667c0 2.211-0.893 4.205-2.344 5.656s-3.445 2.344-5.656 2.344-4.205-0.893-5.656-2.344-2.344-3.445-2.344-5.656 0.893-4.205 2.344-5.656 3.445-2.344 5.656-2.344 4.205 0.893 5.656 2.344 2.344 3.445 2.344 5.656zM61.333 26.667h-5.333v-5.333c0-1.472-1.195-2.667-2.667-2.667s-2.667 1.195-2.667 2.667v5.333h-5.333c-1.472 0-2.667 1.195-2.667 2.667s1.195 2.667 2.667 2.667h5.333v5.333c0 1.472 1.195 2.667 2.667 2.667s2.667-1.195 2.667-2.667v-5.333h5.333c1.472 0 2.667-1.195 2.667-2.667s-1.195-2.667-2.667-2.667z"})))}const xn=r.forwardRef(gn);t.p;var bn,vn,fn,jn;const yn=E.Ay.div(bn||(bn=(0,M.A)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: ",";\n  width: 100%;\n"])),(n=>n.theme.spacing(5))),wn=E.Ay.div(vn||(vn=(0,M.A)(["\n  position: absolute;\n  right: 10%;\n  top: 28px;\n\n  @media screen and (min-width: 568px) {\n    right: 25%;\n  }\n"]))),An=E.Ay.button(fn||(fn=(0,M.A)(["\n  position: fixed;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n\n  color: ",";\n\n  background-color: ",";\n  border-radius: 50%;\n  border: 1px solid ",";\n  box-shadow: 0px 0px 12px 2px ",";\n\n  transition: ",",\n    ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(n=>n.theme.colors.accent),(n=>n.theme.colors.bg),(n=>n.theme.colors.accent),(n=>n.theme.colors.black),(n=>n.theme.transition("color")),(n=>n.theme.transition("background-color")),(n=>n.theme.colors.white),(n=>n.theme.colors.accent)),Cn=(0,E.Ay)(xn)(jn||(jn=(0,M.A)(["\n  width: 20px;\n  height: 20px;\n  fill: currentColor;\n"]))),kn=()=>{const[n,e]=(0,r.useState)(!1),t=(0,o.d4)(i),c=(0,o.d4)(a),s=()=>{e((n=>!n))};return(0,f.jsxs)(yn,{children:[(0,f.jsx)("h2",{children:"Contact List"}),(0,f.jsx)(wn,{children:(0,f.jsx)(An,{type:"button",onClick:s,children:(0,f.jsx)(Cn,{})})}),!c&&t.length>0&&(0,f.jsx)(mn,{}),(0,f.jsx)(cn,{}),n&&(0,f.jsx)(k,{isOpen:n,onClose:s})]})}}}]);
//# sourceMappingURL=125.102c0560.chunk.js.map