(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc6203b6"],{"1c1d":function(t,n,e){},"2e75":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav-bar"),t._v(" "),e("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[e("el-form-item",{attrs:{label:"",prop:"description"}},[e("el-col",{attrs:{span:11}},[e("span",[t._v("输入的内容")])]),t._v(" "),e("el-col",{attrs:{span:2}},[e("span",[t._v(" ")])]),t._v(" "),e("el-col",{attrs:{span:11}},[e("span",[t._v("输出的内容")])])],1),t._v(" "),e("el-form-item",{attrs:{label:"",prop:"input"}},[e("el-col",{attrs:{span:11}},[e("el-input",{attrs:{rows:20,type:"textarea"},model:{value:t.form.input,callback:function(n){t.$set(t.form,"input",n)},expression:"form.input"}})],1),t._v(" "),e("el-col",{attrs:{span:2}},[e("span",[t._v(" 中文排版输出")]),e("br"),e("br"),t._v(" \n        "),e("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.onSubmit("form")}}},[t._v("输出")]),t._v(" "),e("br"),e("br"),e("br"),t._v(" \n        "),e("el-button",{attrs:{type:"warning"},on:{click:function(n){return t.resetForm("form")}}},[t._v("清空")])],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-input",{attrs:{rows:20,type:"textarea"},model:{value:t.output,callback:function(n){t.output=n},expression:"output"}})],1)],1),t._v(" "),e("el-form-item",[e("el-col",{attrs:{span:10}},[t._v(" ")]),t._v(" "),e("el-col",{attrs:{span:14}},[t._v(" ")]),t._v(" "),e("el-col",{attrs:{span:0}},[t._v(" ")])],1)],1)],1)},o=[],a=e("b775"),s={name:"Lines",data:function(){return{form:{input:"",output:""},rules:{input:[{required:!0,message:"请输入内容",trigger:"blur"}]},loading:!1,isShow:!1,output:""}},created:function(){},methods:{onSubmit:function(t){var n=this;this.$refs[t].validate(function(t){if(!t)return!1;n.loading=!0,a["a"].post("/api/output",{input:n.form.input}).then(function(t){t.data.to&&(n.to=t.data.to),n.output=t.data.output}).catch(function(t){return t}),setTimeout(function(){n.loading=!1},500)})},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},resetForm:function(t){this.$refs[t].resetFields()}}},u=s,i=(e("3825"),e("0c7c")),l=Object(i["a"])(u,r,o,!1,null,"668b4413",null);n["default"]=l.exports},3825:function(t,n,e){"use strict";var r=e("1c1d"),o=e.n(r);o.a}}]);