import{a as b,j as n}from"./jsx-runtime-91a467a5.js";import{d as y}from"./FormBuilder-73f16bf0.js";import{F as f}from"./form.component-a80ead3a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./choices-5b1be226.js";import"./index-ada0d705.js";import"./index-1fc0ca9a.js";import"./_equalByTag-55b78a6e.js";import"./_setToArray-6d22a820.js";import"./isEqual-8151492b.js";function h(t,a){return{...a,...t}}function k({action:t,...a}){return y.eachComponent(a.components,e=>{const o="";e.type==="resourcefields"&&(e.type="select",e.label=e.title,e.dataSrc="url",e.data={url:`${e.basePath}?type=resource${o}`},e.valueProperty="_id",e.template="<span>{{ item.title }}</span>",e.persistent=!0)}),a}function u({actionInfo:t,children:a,onSubmit:e,options:o,...p}){const{form:d,submission:c}=(()=>{const m=h(p.submission||{},t.defaults);return{form:k(t.settingsForm),submission:{data:m}}})();return b("div",{children:[a,n(f,{form:d,submission:c,onSubmit:e,options:o}),a]})}const T={title:"ReactFormio/FormAction",component:u,argTypes:{onSubmit:{action:"onSubmit"},type:{control:{type:"object"}},form:{control:{type:"object"}},options:{control:{type:"object"}}},parameters:{docs:{source:{type:"code"}}}},l=t=>n(u,{...t});l.args={actionInfo:{name:"save",title:"Save Submission",description:"Saves the submission into the database.",priority:10,defaults:{handler:["before"],method:["create","update"],priority:10,name:"save",title:"Save Submission"},access:{handler:!1,method:!1},settingsForm:{components:[{type:"hidden",input:!0,key:"priority"},{type:"hidden",input:!0,key:"name"},{type:"textfield",input:!0,label:"Title",key:"title"},{type:"fieldset",input:!1,tree:!0,legend:"Action Settings",components:[{input:!1,type:"container",key:"settings",components:[{type:"resourcefields",key:"resource",title:"Save submission to",placeholder:"This form",basePath:"/project/5d0797bc872fc7d140559857/form",form:"62b18b10fbbba513555c6c5e",required:!1}]}]},{type:"fieldset",input:!1,tree:!1,key:"conditions",legend:"Action Execution",components:[{type:"select",input:!0,key:"handler",label:"Handler",placeholder:"Select which handler(s) you would like to trigger",dataSrc:"json",data:{json:'[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'},template:"<span>{{ item.title }}</span>",valueProperty:"name",multiple:!0},{type:"select",input:!0,label:"Methods",key:"method",placeholder:"Trigger action on method(s)",dataSrc:"json",data:{json:'[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'},template:"<span>{{ item.title }}</span>",valueProperty:"name",multiple:!0}]},{key:"fieldset",type:"fieldset",input:!1,tree:!1,legend:"Action Conditions (optional)",components:[{type:"container",key:"condition",input:!1,tree:!0,components:[{key:"columns",type:"columns",input:!1,columns:[{components:[{type:"select",input:!0,label:"Trigger this action only if field",key:"field",placeholder:"Select the conditional field",template:"<span>{{ item.label || item.key }}</span>",dataSrc:"json",data:{json:`[{"key":""},{"label":"Rules","reorder":false,"addAnotherPosition":"bottom","layoutFixed":false,"enableRowGroups":false,"initEmpty":false,"tableView":false,"defaultValue":[{"path":{},"operator":""}],"key":"rules","type":"datagrid","input":true,"components":[{"label":"Path","widget":"choicesjs","tableView":true,"dataSrc":"url","data":{"url":"/test","headers":[{"key":"","value":""}]},"key":"path","type":"select","input":true,"disableLimit":false},{"label":"Operator","widget":"choicesjs","tableView":true,"data":{"values":[{"label":"default","value":"default"},{"label":"Contains","value":"CONTAINS"}]},"key":"operator","type":"select","input":true},{"customClass":"mt-0 mb-0","key":"fieldset","type":"fieldset","label":"Field Set","input":false,"tableView":false,"components":[{"label":"Value","tableView":true,"key":"value1","customConditional":"show = row.operator === 'CONTAINS'","type":"textfield","input":true}]},{"label":"Hello","tableView":true,"key":"textField","customConditional":"show = row.operator === 'CONTAINS'","type":"textfield","input":true}]},{"label":"Path","widget":"choicesjs","tableView":true,"dataSrc":"url","data":{"url":"/test","headers":[{"key":"","value":""}]},"key":"path","type":"select","input":true,"disableLimit":false},{"label":"Operator","widget":"choicesjs","tableView":true,"data":{"values":[{"label":"default","value":"default"},{"label":"Contains","value":"CONTAINS"}]},"key":"operator","type":"select","input":true},{"label":"Value","tableView":true,"key":"value1","customConditional":"show = row.operator === 'CONTAINS'","type":"textfield","input":true},{"label":"Hello","tableView":true,"key":"textField","customConditional":"show = row.operator === 'CONTAINS'","type":"textfield","input":true},{"type":"button","label":"Submit","key":"submit","disableOnInvalid":true,"input":true,"tableView":false}]`},valueProperty:"key",multiple:!1},{type:"select",input:!0,label:"",key:"eq",placeholder:"Select comparison",template:"<span>{{ item.label }}</span>",dataSrc:"values",data:{values:[{value:"",label:""},{value:"equals",label:"Equals"},{value:"notEqual",label:"Does Not Equal"}],json:"",url:"",resource:""},valueProperty:"value",multiple:!1},{input:!0,type:"textfield",inputType:"text",label:"",key:"value",placeholder:"Enter value",multiple:!1}]},{components:[{key:"well2",type:"well",input:!1,components:[{key:"html",type:"htmlelement",tag:"h4",input:!1,content:'Or you can provide your own custom JavaScript or <a href="http://jsonlogic.com" target="_blank">JSON</a> condition logic here',className:""},{label:"",type:"textarea",input:!0,key:"custom",editorComponents:[{label:"Rules",reorder:!1,addAnotherPosition:"bottom",layoutFixed:!1,enableRowGroups:!1,initEmpty:!1,tableView:!1,defaultValue:[{path:{},operator:""}],key:"rules",type:"datagrid",input:!0,components:[{label:"Path",widget:"choicesjs",tableView:!0,dataSrc:"url",data:{url:"/test",headers:[{key:"",value:""}]},key:"path",type:"select",input:!0,disableLimit:!1},{label:"Operator",widget:"choicesjs",tableView:!0,data:{values:[{label:"default",value:"default"},{label:"Contains",value:"CONTAINS"}]},key:"operator",type:"select",input:!0},{customClass:"mt-0 mb-0",key:"fieldset",type:"fieldset",label:"Field Set",input:!1,tableView:!1,components:[{label:"Value",tableView:!0,key:"value1",customConditional:"show = row.operator === 'CONTAINS'",type:"textfield",input:!0}]},{label:"Hello",tableView:!0,key:"textField",customConditional:"show = row.operator === 'CONTAINS'",type:"textfield",input:!0}]},{type:"button",label:"Submit",key:"submit",disableOnInvalid:!0,input:!0,tableView:!1}],placeholder:`// Example: Only execute if submitted roles has 'authenticated'.
JavaScript: execute = (data.roles.indexOf('authenticated') !== -1);
JSON: { "in": [ "authenticated", { "var": "data.roles" } ] }`}]}]}]}]}]},{key:"html2",type:"htmlelement",tag:"hr",input:!1,content:"",className:""},{type:"button",input:!0,label:"Save Action",key:"submit",size:"md",leftIcon:"",rightIcon:"",block:!1,action:"submit",disableOnInvalid:!0,theme:"primary"}],action:"/project/5d0797bc872fc7d140559857/form/62b18b10fbbba513555c6c5e/action"}},options:{template:"tailwind",iconset:"bx"}};var i,r,s;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`(args: any) => {
  return <FormAction {...args} />;
}`,...(s=(r=l.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const P=["Sandbox"];export{l as Sandbox,P as __namedExportsOrder,T as default};
//# sourceMappingURL=formAction.stories-81e384bf.js.map