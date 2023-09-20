import{j as t}from"./jsx-runtime-91a467a5.js";import{f as i}from"./index-ada0d705.js";import{d as c}from"./FormBuilder-73f16bf0.js";import{S as n}from"./selectColumnFilter.component-63d4364d.js";function u({value:a,render:l=e=>e}){if(a===void 0)return t("span",{});const e=l(a);return a!==e?t("div",{dangerouslySetInnerHTML:{__html:e}}):t("span",{children:String(a)})}function L(a){const l=[];return c.eachComponent(a.components,e=>{if(e.tableView&&e.key){const s=i.Components.create(e,{},null,!0),r={Header:e.label||e.title||e.key,accessor:`data.${e.key}`,Cell:o=>t(u,{...o,render:d=>s.asString(d)})};e.type==="select"&&e.dataSrc==="values"&&(r.Filter=n,r.choices=e.data.values),l.push(r)}}),l}function Z({skip:a,limit:l,serverCount:e,length:s}={}){return a=a||0,l=l||10,e=e||s,{pageIndex:Math.floor(a/l),pageSize:l,pageCount:Math.ceil(e/l)}}const f="5e972ae7a1a692917cf54f9e",p="resource",m=["common","products"],h=null,b=[{autofocus:!1,input:!0,tableView:!0,inputType:"text",inputMask:"",label:"Id",key:"id",placeholder:"Enter the product id",prefix:"",suffix:"",multiple:!1,defaultValue:"",protected:!1,unique:!1,persistent:!0,hidden:!1,clearOnHide:!0,spellcheck:!0,validate:{required:!0,minLength:4,pattern:"",custom:"",customPrivate:!1},conditional:{show:"",eq:""},labelPosition:"top",inputFormat:"plain",tags:[],properties:{},id:"gsjot",type:"textfield"},{autofocus:!1,input:!0,tableView:!0,inputType:"text",inputMask:"",label:"Label",key:"label",placeholder:"Enter a label for this product",prefix:"",suffix:"",multiple:!1,defaultValue:"",protected:!1,unique:!1,persistent:!0,hidden:!1,clearOnHide:!0,spellcheck:!0,validate:{required:!0,minLength:"",maxLength:"",pattern:"",custom:"",customPrivate:!1},conditional:{show:"",eq:""},labelPosition:"top",inputFormat:"plain",tags:[],properties:{},id:"toa61c",type:"textfield"},{label:"Preferred locale",labelPosition:"top",widget:"choicesjs",placeholder:"Choose a preferred locale for the product",description:"",tooltip:"",customClass:"",tabindex:"",hidden:!1,hideLabel:!1,autofocus:!1,disabled:!1,alwaysEnabled:!1,tableView:!1,multiple:!1,dataSrc:"resource",defaultValue:"en-US",valueProperty:"data.locale",template:"<span>{{ item.data.locale }}</span>",searchEnabled:!0,selectThreshold:.3,readOnlyValue:!1,customOptions:{},persistent:!0,protected:!1,dbIndex:!1,encrypted:!1,clearOnHide:!0,customDefaultValue:"",calculateValue:"",allowCalculateOverride:!1,validateOn:"change",validate:{required:!1,customMessage:"",select:!1,custom:"",customPrivate:!1},unique:!1,errorLabel:"",key:"locale",tags:[],properties:{},conditional:{show:"",when:"",eq:""},dataGridLabel:!1,indexeddb:{database:"",table:"",filter:""},lazyLoad:!1,selectValues:"",disableLimit:!1,searchField:"data.locale__regex",filter:"",sort:"",refreshOn:"",clearOnRefresh:!1,addResource:!1,addResourceLabel:"",reference:!1,authenticate:!1,redrawOn:"",minSearch:0,limit:100,input:!0,prefix:"",suffix:"",attributes:{},overlay:{style:"",left:"",top:"",width:"",height:""},showCharCount:!1,showWordCount:!1,allowMultipleMasks:!1,searchThreshold:.3,fuseOptions:{include:"score",threshold:.3},selectFields:"",id:"eo6ekb",type:"select",data:{resource:"5e972ae7a1a692917cf54f9d",headers:[{key:"",value:""}],json:"",url:"",custom:"",values:[]}},{label:"Prefered date format",labelPosition:"top",widget:"choicesjs",placeholder:"",description:"",tooltip:"",customClass:"",tabindex:"",hidden:!1,hideLabel:!1,autofocus:!1,disabled:!1,alwaysEnabled:!1,tableView:!0,multiple:!1,dataSrc:"values",defaultValue:"YYYY-MM-DD",valueProperty:"",dataType:"",template:"<span>{{ item.label }}</span>",searchEnabled:!0,selectThreshold:.3,readOnlyValue:!1,customOptions:{},persistent:!0,protected:!1,dbIndex:!1,encrypted:!1,clearOnHide:!0,customDefaultValue:"",calculateValue:"",allowCalculateOverride:!1,products:[],categoryServices:[],validateOn:"change",validate:{required:!1,customMessage:"",custom:"",customPrivate:!1,json:"",strictDateValidation:!1},unique:!1,errorLabel:"",key:"dateFormat",tags:"",properties:{},conditional:{eq:"",json:""},customConditional:"",relavi:[],minSearch:0,limit:100,input:!0,prefix:"",suffix:"",refreshOn:"",redrawOn:"",attributes:{},overlay:{style:"",left:"",top:"",width:"",height:""},showCharCount:!1,showWordCount:!1,allowMultipleMasks:!1,clearOnRefresh:!1,lazyLoad:!0,filter:"",searchField:"",authenticate:!1,selectFields:"",searchThreshold:.3,fuseOptions:{include:"score",threshold:.3},id:"e80eyzn",type:"select",data:{values:[{label:"2019-10-01",value:"YYYY-MM-DD"},{label:"01/10/2019",value:"DD/MM/YYYY"},{label:"10/01/2019",value:"MM/DD/YYYY"}],resource:"",json:"",url:"",custom:""}},{label:"Prefered time format",labelPosition:"top",widget:"choicesjs",placeholder:"",description:"",tooltip:"",customClass:"",tabindex:"",hidden:!1,hideLabel:!1,autofocus:!1,disabled:!1,alwaysEnabled:!1,tableView:!1,multiple:!1,dataSrc:"values",defaultValue:"hh:mm:ss a",valueProperty:"",dataType:"",template:"<span>{{ item.label }}</span>",searchEnabled:!0,selectThreshold:.3,readOnlyValue:!1,customOptions:{},persistent:!0,protected:!1,dbIndex:!1,encrypted:!1,clearOnHide:!0,customDefaultValue:"",calculateValue:"",allowCalculateOverride:!1,products:[],categoryServices:[],validateOn:"change",validate:{required:!1,customMessage:"",custom:"",customPrivate:!1,json:"",strictDateValidation:!1},unique:!1,errorLabel:"",key:"timeFormat",tags:"",properties:{},conditional:{eq:"",json:""},customConditional:"",relavi:[],minSearch:0,limit:100,input:!0,prefix:"",suffix:"",refreshOn:"",redrawOn:"",attributes:{},overlay:{style:"",left:"",top:"",width:"",height:""},showCharCount:!1,showWordCount:!1,allowMultipleMasks:!1,clearOnRefresh:!1,lazyLoad:!0,filter:"",searchField:"",authenticate:!1,selectFields:"",searchThreshold:.3,fuseOptions:{include:"score",threshold:.3},id:"el4mm17",type:"select",data:{values:[{label:"03:25:50 pm",value:"hh:mm:ss a"},{label:"15:25:50",value:"HH:mm:ss"}],resource:"",json:"",url:"",custom:""}},{autofocus:!1,input:!0,label:"Save product",tableView:!1,key:"submit",size:"md",leftIcon:"",rightIcon:"",block:!1,action:"submit",disableOnInvalid:!1,theme:"primary",tags:[],conditional:{show:"",eq:""},properties:{},id:"9byuwa",type:"button"}],y="form",w="Products",C="products",v="products",T="2020-04-15T12:47:41.000Z",x="2020-04-15T15:40:23.647Z",g=[{roles:["5e97026c50bcd9815878809a","5e97026c50bcd98158788099","5e97026c50bcd98158788098"],type:"read_all"}],O=[{roles:["5e97026c50bcd98158788098","5e97026c50bcd98158788099"],type:"create_all"},{roles:["5e97026c50bcd98158788098","5e97026c50bcd98158788099","5e97026c50bcd9815878809a"],type:"read_all"},{roles:["5e97026c50bcd98158788098","5e97026c50bcd98158788099"],type:"update_all"},{roles:["5e97026c50bcd98158788098","5e97026c50bcd98158788099"],type:"delete_all"},{roles:["5e97026c50bcd98158788098","5e97026c50bcd98158788099"],type:"create_own"},{roles:["5e97026c50bcd98158788098","5e97026c50bcd98158788099"],type:"read_own"},{roles:["5e97026c50bcd98158788098","5e97026c50bcd98158788099"],type:"update_own"},{roles:["5e97026c50bcd98158788098","5e97026c50bcd98158788099"],type:"delete_own"}],M="products",S={_id:f,type:p,tags:m,owner:h,components:b,display:y,title:w,name:C,path:v,created:T,modified:x,access:g,submissionAccess:O,machineName:M},k=[{_id:"5e972ae8a1a692917cf55006",owner:null,roles:[],data:{id:"MPEC",label:"Michès Playa Esmeralda"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.718Z",form:"5e972ae7a1a692917cf54f9e"},{_id:"5e972ae8a1a692917cf55007",owner:null,roles:[],data:{id:"CARC",label:"La Caravelle"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.724Z",form:"5e972ae7a1a692917cf54f9e"},{_id:"5e972ae8a1a692917cf55008",owner:null,roles:[],data:{id:"MAUC",label:"La Pointe aux Canonniers"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.728Z",form:"5e972ae7a1a692917cf54f9e"},{_id:"5e972ae8a1a692917cf55009",owner:null,roles:[],data:{id:"CFAC",label:"Cefalù"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.732Z",form:"5e972ae7a1a692917cf54f9e"},{_id:"5e972ae8a1a692917cf5500a",owner:null,roles:[],data:{id:"MPAC",label:"Marrakech la Palmeraie"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.737Z",form:"5e972ae7a1a692917cf54f9e"},{_id:"5e972ae8a1a692917cf5500b",owner:null,roles:[],data:{id:"COLC",label:"Columbus Isle"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.741Z",form:"5e972ae7a1a692917cf54f9e"},{_id:"5e972ae8a1a692917cf5500c",owner:null,roles:[],data:{id:"ALHC_WINTER",label:"Alpe d'Huez (winter)"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.746Z",form:"5e972ae7a1a692917cf54f9e"},{_id:"5e972ae8a1a692917cf5500d",owner:null,roles:[],data:{id:"ARPC_WINTER",label:"Les Arcs Panorama (winter)"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.750Z",form:"5e972ae7a1a692917cf54f9e"},{_id:"5e972ae8a1a692917cf5500e",owner:null,roles:[],data:{id:"GMAC_WINTER",label:"Grand Massif Samoëns Morillon (winter)"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.754Z",form:"5e972ae7a1a692917cf54f9e"},{_id:"5e972ae8a1a692917cf5500f",owner:null,roles:[],data:{id:"TVCC",label:"Tignes Val Claret"},access:[],externalIds:[],created:"2020-04-15T12:47:42.000Z",modified:"2020-04-15T15:40:24.759Z",form:"5e972ae7a1a692917cf54f9e"}];export{L as a,S as b,k as f,Z as m};
//# sourceMappingURL=form-submissions-7e2828fc.js.map