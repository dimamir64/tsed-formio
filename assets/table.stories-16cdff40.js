import{j as R}from"./jsx-runtime-91a467a5.js";import{R as t}from"./index-8db94870.js";import{m as k,f as I,a as D,b as T}from"./form-submissions-7e2828fc.js";import{T as u}from"./table.component-6abd2469.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ada0d705.js";import"./FormBuilder-73f16bf0.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./choices-5b1be226.js";import"./selectColumnFilter.component-63d4364d.js";import"./select.component-b071a5d3.js";import"./index-582f377c.js";import"./index-1fc0ca9a.js";import"./getEventValue-83016e15.js";import"./formControl.component-0c2def02.js";import"./noop-1202c7f9.js";import"./index-462ab89b.js";import"./pagination.component-6c227df2.js";import"./iconClass-2475e694.js";import"./inputText.component-213cf9d9.js";const K={title:"ReactFormio/Table",component:u,argTypes:{},parameters:{}},n=e=>{const[r,i]=t.useState(0),[p,m]=t.useState(10),[c]=t.useState(87);return R(u,{...e,onChange:s=>{m(s.pageSize),i(s.pageIndex*s.pageSize),e.onChange&&e.onChange(s)},...k({skip:r,limit:p,serverCount:c})})};n.args={data:I,columns:D(T),operations:[{title:"Edit",action:"edit",alias:"row",path:"/resources/:resourceId/submissions/:submissionId",icon:"edit",permissionsResolver(){return!0}},{action:"delete",path:"/resources/:resourceId/submissions/:submissionId/delete",icon:"trash",buttonType:"danger",permissionsResolver(){return!0}}]};const o=e=>{const[r,i]=t.useState(0),[p,m]=t.useState(10),[c]=t.useState(87),[g,s]=t.useState(()=>I);return R(u,{...e,data:g,onChange:a=>{m(a.pageSize),i(a.pageIndex*a.pageSize),e.onChange&&e.onChange(a)},...k({skip:r,limit:p,serverCount:c}),onDrag:a=>{s(a)}})};o.args={enableDragNDrop:!0,data:[],columns:D(T),operations:[{title:"Edit",action:"edit",alias:"row",path:"/resources/:resourceId/submissions/:submissionId",icon:"edit",permissionsResolver(){return!0}},{action:"delete",path:"/resources/:resourceId/submissions/:submissionId/delete",icon:"trash",buttonType:"danger",permissionsResolver(){return!0}}]};var d,S,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args: any) => {
  const [skip, setSkip] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [serverCount] = React.useState(87);
  const onChange = (obj: any) => {
    setLimit(obj.pageSize);
    setSkip(obj.pageIndex * obj.pageSize);
    args.onChange && args.onChange(obj);
  };
  return <Table {...args} onChange={onChange} {...mapPagination({
    skip,
    limit,
    serverCount
  })} />;
}`,...(l=(S=n.parameters)==null?void 0:S.docs)==null?void 0:l.source}}};var b,h,C;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`(args: any) => {
  const [skip, setSkip] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [serverCount] = React.useState(87);
  const [data, setData] = React.useState(() => formSubmissions);
  const onChange = (obj: any) => {
    setLimit(obj.pageSize);
    setSkip(obj.pageIndex * obj.pageSize);
    args.onChange && args.onChange(obj);
  };
  return <Table {...args} data={data} onChange={onChange} {...mapPagination({
    skip,
    limit,
    serverCount
  })} onDrag={data => {
    setData(data);
  }} />;
}`,...(C=(h=o.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const M=["Sandbox","TableWithDragNDrop"];export{n as Sandbox,o as TableWithDragNDrop,M as __namedExportsOrder,K as default};
//# sourceMappingURL=table.stories-16cdff40.js.map
