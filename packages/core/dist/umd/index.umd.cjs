(function(h,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(h=typeof globalThis<"u"?globalThis:h||self,e(h["ho-ui"]={},h.Vue))})(this,function(h,e){"use strict";const x={color:String,size:[Number,String]},F="is-",C=(t,a,n,c,l)=>{let d=`${t}-${a}`;return n&&(d+=`-${n}`),c&&(d+=`__${c}`),l&&(d+=`--${l}`),d},w=(t,a)=>{const n=e.computed(()=>a);return{namespace:n,b:(s="")=>C(n.value,t,s,"",""),e:s=>s?C(n.value,t,"",s,""):"",m:s=>s?C(n.value,t,"","",s):"",be:(s,m)=>s&&m?C(n.value,t,s,m,""):"",bm:(s,m)=>s&&m?C(n.value,t,s,"",m):"",em:(s,m)=>s&&m?C(n.value,t,"",s,m):"",bem:(s,m,S)=>s&&m&&S?C(n.value,t,s,m,S):"",is:(s,...m)=>{const S=m.length>=1?m[0]:!0;return s&&S?`${F}${s}`:""}}},H=t=>t===void 0,I=t=>typeof t=="number",L=t=>typeof t=="string",q=t=>L(t)?!Number.isNaN(Number(t)):!1;function E(t){return t.install=a=>{const{name:n}=t;a.component(n,t)},t}function D(t,a="px"){if(!t)return"";if(I(t)||q(t))return`${t}${a}`;if(L(t))return t}const U=E(e.defineComponent({name:"ho-icon",__name:"icon",props:x,setup(t){const a=w("icon","ho"),n=t,c=e.computed(()=>{const{color:l,size:d}=n;return!l&&!d?{}:{fontSize:H(d)?void 0:D(d),...l?{color:l}:{}}});return(l,d)=>(e.openBlock(),e.createElementBlock("i",e.mergeProps({class:e.unref(a).b(),style:c.value},l.$attrs),[e.renderSlot(l.$slots,"default")],16))}})),P={data:{type:Array,default:()=>[]},defaultExpandedKeys:{type:Array,default:()=>[]},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},onLoad:Function,selectedKeys:Array,selectable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},showCheckbox:{type:Boolean,default:!1},defaultCheckedKeys:{type:Array,default:()=>[]}},M={node:{type:Object,required:!0},expanded:{type:Boolean,default:!1},loadingKeys:{type:Object,default:()=>new Set,required:!0},selectedKeys:{type:Array,default:()=>[]},showCheckbox:{type:Boolean,default:!1},checked:Boolean,disabled:Boolean,indeterminate:Boolean},j={"update:selectedKeys":t=>t},A={toggle:t=>t,select:t=>t,checked:({node:t,value:a})=>typeof a=="boolean"},$=Symbol(),O={node:{type:Object,required:!0}},Y={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},G=Object.assign({name:"Switcher"},{__name:"Switcher",setup(t){return(a,n)=>(e.openBlock(),e.createElementBlock("svg",Y,n[0]||(n[0]=[e.createElementVNode("g",{transform:"translate(24, 0) scale(-1, 1)"},[e.createElementVNode("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})],-1)])))}}),J={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",class:"loading"},Q=Object.assign({name:"Loading"},{__name:"Loading",setup(t){return(a,n)=>(e.openBlock(),e.createElementBlock("svg",J,n[0]||(n[0]=[e.createElementVNode("path",{d:"M25 5 A20 20 0 0 1 45 25",fill:"none",stroke:"#000","stroke-width":"4"},null,-1),e.createElementVNode("path",{d:"M25 5 A20 20 0 0 0 45 25",fill:"none",stroke:"#fff","stroke-width":"4"},null,-1)])))}}),W=e.defineComponent({name:"TreeNodeContext",props:O,setup(t){const a=w("tree-node","ho"),n=e.inject($),{node:c}=t;return()=>n!=null&&n.slots.default?n==null?void 0:n.slots.default({node:c}):e.h("span",{class:a.e("label")},c.label)}}),X=(t,a)=>{const n=t.__vccOpts||t;for(const[c,l]of a)n[c]=l;return n};function Z(t,a,n,c,l,d){return null}const _=X(W,[["render",Z]]),T={modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},label:{type:String,default:""}},R={"update:modelValue":t=>typeof t=="boolean",change:t=>typeof t=="boolean"},v=["disabled","value"],ee={key:0},te=E(e.defineComponent({name:"ho-checkbox",__name:"checkbox",props:T,emits:R,setup(t,{emit:a}){const n=w("checkbox","ho"),c=a,l=e.useSlots(),d=e.computed({get(){return t.modelValue},set(r){c("update:modelValue",r)}}),k=e.ref(),b=()=>{k.value.indeterminate=t.indeterminate};e.watch(()=>t.indeterminate,b),e.onMounted(()=>b());const p=r=>{const s=!!r.target.checked;c("change",s)};return(r,u)=>(e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass(e.unref(n).b())},[e.createElementVNode("span",{class:e.normalizeClass(e.unref(n).e("input"))},[e.withDirectives(e.createElementVNode("input",{type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=s=>d.value=s),disabled:r.disabled,ref_key:"inputRef",ref:k,value:r.label,onChange:p},null,40,v),[[e.vModelCheckbox,d.value]])],2),e.unref(l).default||r.label?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(e.unref(n).e("label"))},[e.renderSlot(r.$slots,"default"),e.unref(l).default?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("span",ee,e.toDisplayString(r.label),1))],2)):e.createCommentVNode("",!0)],2))}})),ne=e.defineComponent({__name:"treeNode",props:M,emits:A,setup(t,{emit:a}){const n=w("tree-node","ho"),c=a,l=()=>{c("toggle",t.node)},d=e.computed(()=>t.loadingKeys.has(t.node.key)),k=e.computed(()=>t.selectedKeys.includes(t.node.key)),b=()=>{t.node.disabled||c("select",t.node)},p=r=>{c("checked",{node:t.node,value:r})};return(r,u)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([e.unref(n).b(),e.unref(n).is("selected",k.value),e.unref(n).is("disabled",r.node.disabled)])},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(n).e("content")),style:e.normalizeStyle({paddingLeft:`${r.node.level*16}px`}),onClick:b},[e.createElementVNode("span",{class:e.normalizeClass([e.unref(n).e("expand-icon"),{expanded:r.expanded&&!r.node.isLeaf},e.unref(n).is("leaf",r.node.isLeaf)]),onClick:l},[e.createVNode(e.unref(U),{size:"16px",color:"pink"},{default:e.withCtx(()=>[d.value?(e.openBlock(),e.createBlock(Q,{key:1})):(e.openBlock(),e.createBlock(G,{key:0}))]),_:1})],2),r.showCheckbox?(e.openBlock(),e.createBlock(e.unref(te),{key:0,"model-value":r.checked,disabled:r.disabled,indeterminate:r.indeterminate,onChange:p},null,8,["model-value","disabled","indeterminate"])):e.createCommentVNode("",!0),e.createVNode(_,{node:r.node},null,8,["node"])],6)],2))}}),oe=e.defineComponent({__name:"virtual-list",props:{items:{type:Array,default:()=>[]},remain:{type:Number,default:8},size:{type:Number,default:35}},setup(t){const a=w("vl","ho"),n=e.ref(),c=e.ref(),l=e.reactive({start:0,end:t.remain,offset:0}),d=e.computed(()=>Math.min(l.start,t.remain)),k=e.computed(()=>Math.max(t.items.length-l.end,t.remain)),b=e.computed(()=>t.items.slice(l.start-d.value,l.end+k.value)),p=()=>{const u=t.remain*t.size,s=t.items.length*t.size;n.value&&(n.value.style.height=u+"px"),c.value&&(c.value.style.height=s+"px")};e.watch(()=>t.items.length,p),e.onMounted(()=>p());const r=()=>{const u=n.value.scrollTop;l.start=Math.floor(u/t.size),l.end=Math.min(l.start+t.remain,t.items.length),l.offset=l.start*t.size-d.value*t.size};return(u,s)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(a).b()),ref_key:"containerRef",ref:n,onScroll:r},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(a).e("phantom")),ref_key:"phantomRef",ref:c},[e.createElementVNode("div",{class:e.normalizeClass(e.unref(a).e("list")),style:e.normalizeStyle({transform:`translateY(${l.offset}px)`})},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(b.value,m=>e.renderSlot(u.$slots,"a",{node:m,key:m.id})),128))],6)],2)],34))}}),se={items:{type:Array,required:!0},remain:{type:Number,default:8},size:{type:Number,default:35}},le=E(oe);E(e.defineComponent({name:"ho-tree",__name:"tree",props:P,emits:j,setup(t,{emit:a}){const n=w("tree","ho"),c=a,l=e.ref([]),k=((o,f,i)=>({getKey(y){return y[o]},getLabel(y){return y[f]},getChildren(y){return y[i]}}))(t.keyField,t.labelField,t.childrenField),b=(o,f=null)=>{const i=(g,B=null)=>g.map(N=>{const z=k.getChildren(N)||[],V={key:k.getKey(N),label:k.getLabel(N),children:[],level:B?B.level+1:0,rawNode:N,isLeaf:N.isLeaf??z.length===0,disabled:!!N.disabled,parentKey:B==null?void 0:B.key};return z.length>0&&(V.children=i(z,V)),V});return i(o,f)};e.watch(()=>t.data||[],o=>{l.value=b(o)},{immediate:!0});const p=e.ref(new Set(t.defaultExpandedKeys)),r=e.computed(()=>{const o=p.value,f=[],i=l.value||[],y=[];for(let g=i.length-1;g>=0;g--)y.push(i[g]);for(;y.length;){const g=y.pop();if(!g)break;if(f.push(g),o.has(g.key)){const B=g.children;if(B)for(let N=B.length-1;N>=0;N--)y.push(B[N])}}return f}),u=o=>p.value.has(o.key),s=e.ref(new Set),m=o=>{if(!o.children.length&&!o.isLeaf){const f=s.value;f.has(o.key)||(f.add(o.key),t.onLoad&&t.onLoad(o.rawNode).then(i=>{o.rawNode.children=i,o.children=b(i,o),f.delete(o.key)}))}},S=o=>{p.value.add(o.key),m(o)},ae=o=>{p.value.delete(o.key)},re=o=>{u(o)&&!s.value.has(o.key)?ae(o):S(o)},K=e.ref([]);e.watch(()=>t.selectedKeys,o=>{o&&(K.value=o)},{immediate:!0});const ce=o=>{const f=o.key;let i=Array.from(K.value);t.selectable&&(t.multiple?i=i.includes(f)?i.filter(y=>y!==f):[...i,f]:i=[f],c("update:selectedKeys",i))};e.provide($,{slots:e.useSlots()});const ie=e.ref(new Set(t.defaultCheckedKeys)),de=o=>ie.value.has(o.key),me=o=>!!o.disabled;e.ref(new Set);const fe=o=>!0,he=({node:o,value:f})=>{console.log(o,f)};return(o,f)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(n).b())},[e.createVNode(e.unref(le),{items:r.value,remain:8,size:35},{a:e.withCtx(({node:i})=>[(e.openBlock(),e.createBlock(ne,{key:i.key,node:i,expanded:u(i),loadingKeys:s.value,onToggle:re,selectedKeys:K.value,onSelect:ce,"show-checkbox":o.showCheckbox,checked:de(i),disabled:me(i),indeterminate:fe(),onChecked:he},null,8,["node","expanded","loadingKeys","selectedKeys","show-checkbox","checked","disabled","indeterminate"]))]),_:1},8,["items"])],2))}})),h.checkboxEmits=R,h.checkboxProps=T,h.iconProps=x,h.treeEmits=j,h.treeInjectKey=$,h.treeNodeContextProps=O,h.treeNodeEmits=A,h.treeNodeProps=M,h.treeProps=P,h.vlProps=se,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
