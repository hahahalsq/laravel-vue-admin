(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c9f3"],{"/eM2":function(e,t,a){"use strict";var n=a("7Y0j");a.n(n).a},"7Y0j":function(e,t,a){},"PnZ/":function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return o}),a.d(t,"e",function(){return s}),a.d(t,"a",function(){return l}),a.d(t,"f",function(){return c});var n=a("t3Un");function r(e){return Object(n.a)({url:"/api/api_param",method:"get",params:e})}function i(e){return n.a.post("/api/api_param",e)}function o(e){return n.a.get("/api/api_param/"+e)}function s(e,t){return n.a.patch("/api/api_param/"+e,t)}function l(e){return n.a.delete("/api/api_param/"+e)}function c(e){return Object(n.a)({url:"/api/api_param_search",method:"get",params:e})}},R8mO:function(e,t,a){"use strict";a.d(t,"d",function(){return r}),a.d(t,"e",function(){return i}),a.d(t,"c",function(){return o}),a.d(t,"f",function(){return s}),a.d(t,"a",function(){return l}),a.d(t,"g",function(){return c}),a.d(t,"h",function(){return u}),a.d(t,"b",function(){return p});var n=a("t3Un");function r(e){return Object(n.a)({url:"/api/api_excel",method:"get",params:e})}function i(e){return n.a.post("/api/api_excel",e)}function o(e){return n.a.get("/api/api_excel/"+e)}function s(e,t){return n.a.patch("/api/api_excel/"+e,t)}function l(e){return n.a.delete("/api/api_excel/"+e)}function c(e){return Object(n.a)({url:"/api/api_excel_search",method:"get",params:e})}function u(e){return Object(n.a)({url:"/api/start_task",method:"post",params:e})}function p(e){return Object(n.a)({url:"/api/download_log",method:"post",params:e})}},yWqU:function(e,t,a){"use strict";a.r(t);var n=a("P2sY"),r=a.n(n),i=a("PnZ/"),o=a("R8mO"),s=a("X4fA"),l={filters:{statusFilter:function(e){return{1:"success",0:"gray","-1":"danger"}[e]}},data:function(){return{dialogFormVisible:!1,uploadUrl:"https://www.guke1.com/api/upload?token="+Object(s.a)(),fileList:[],item:"",apiParam:[],form:{upload_url:"",api_param_id:"",appkey:"",concurrent:5,uid:"",description:"",auto_delete:2,sort:"",loading:!1},rules:{api_param_id:[{required:!0,message:"请选择接口",trigger:"blur"}],upload_url:[{required:!0,message:"请上传文件",trigger:"blur"}],appkey:[{required:!0,message:"请输入 appkey",trigger:"blur"}],concurrent:[{required:!0,message:"请输入并发请求数",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"}],auto_delete:[{required:!0,message:"请输入天数",trigger:"blur"}]},redirect:"/api_excel/index",reload:!1,reload_name:"点击刷新",list:null,listLoading:!0,perpage:10,total:100,currentpage:1,listQuery:{page:1},url:null,websock:null}},watch:{item:function(e){this.form.api_param_id=e,this.getItem()}},created:function(){this.listQuery=this.$route.query;var e=parseInt(this.listQuery.page);this.currentpage=isNaN(e)?1:e;var t=parseInt(this.$route.query.perPage);this.perpage=isNaN(t)?this.perpage:t,this.initWebSocket(),this.init()},destroyed:function(){this.websock.close()},methods:{startTask:function(e,t){var a=this;this.$confirm("此操作将开启任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.h)(t).then(function(e){var n="";200===e.code?(t.state=1,n="success"):n="error",a.$message({type:n,message:e.reason})})}).catch(function(){a.$message({type:"info",message:"已取消操作"})})},openTask:function(e,t){var a=this;this.$alert("此操作将开启任务, 是否继续?","开启任务提醒",{confirmButtonText:"确定",center:!0,type:"warning",callback:function(e){"confirm"===e&&Object(o.h)(t).then(function(e){var n="";200===e.code?(t.state=1,n="success"):n="error",a.$message({type:n,message:e.reason}),a.initWebSocket()})}})},initWebSocket:function(){if("WebSocket"in window){var e="wss://www.guke1.com/ws?action=api_excel&token="+Object(s.a)()+"&page="+this.currentpage+"&perPage="+this.perpage;this.websock=new WebSocket(e),this.websock.onmessage=this.onmessage,this.websock.onopen=this.onopen,this.websock.onerror=this.onerror,this.websock.onclose=this.close}else this.fetchData(),console.log("Your browser does not support WebSocket!")},onopen:function(){},onerror:function(){this.fetchData()},onmessage:function(e){var t=this,a=JSON.parse(e.data);this.list=a.data.data,this.listLoading=!1,this.total=a.data.total,this.url=a.data.appUrl,setTimeout(function(){t.reload=!1,t.reload_name="刷新"},800)},send:function(e){this.websock.send(e)},close:function(){},download:function(e,t){window.location.href=this.url+t.finish_url},download_log:function(e,t){var a=this;Object(o.b)({id:t.id}).then(function(e){200===e.code&&(window.location.href=a.url+e.data.failed_done_file)})},fetchData:function(){var e=this;this.listLoading=this.reload=!0,this.reload_name="加载中";var t=r()({page:this.listQuery.page},{perPage:this.perpage});Object(o.d)(t).then(function(t){e.list=t.data.data,e.listLoading=!1,e.total=t.data.total,e.url=t.data.appUrl,setTimeout(function(){e.reload=!1,e.reload_name="刷新"},800)})},handleEdit:function(e,t){this.$router.push({path:"/api_excel/edit/"+t.id})},handleDelete:function(e,t){var a=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){Object(o.a)(t.id).then(function(e){a.loading=!1,200===e.code?(a.$message({message:"操作成功",type:"success"}),a.fetchData()):a.$message.error(e.reason)}),a.$message({type:"success",message:"删除成功!"})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(e){this.perpage=e,this.$router.push({path:"",query:{page:this.listQuery.page,perPage:e}}),this.fetchData()},handleCurrentChange:function(e){this.listQuery={page:e},this.$router.push({path:"",query:{page:e,perPage:this.perpage}}),this.fetchData({page:e})},goSearch:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.listLoading=!0;var a={wd:t.form.input};Object(o.g)(a).then(function(e){t.listLoading=!1,200===e.code?(t.form.isShow=!0,t.list=e.data.data,t.total=e.data.total):t.$message.error(e.reason)})})},getItem:function(){this.$emit("getItem",this.form.apiParam)},init:function(){var e=this;Object(i.c)({perPage:20}).then(function(t){e.apiParam=t.data.data})},handleRemove:function(e,t){},handlePreview:function(e){},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")},handleSuccess:function(e,t,a){200!==e.code?this.$message({message:e.reason,type:"error"}):this.form.upload_url=e.data.url},onSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.loading=!0,Object(o.e)(t.form).then(function(e){t.loading=!1,200===e.code?(t.$message({message:"操作成功",type:"success"}),t.dialogFormVisible=!1,t.fetchData()):t.$message.error(e.reason)})})},onCancel:function(){this.$message({message:"cancel!",type:"warning"})},resetForm:function(e){this.$refs[e].resetFields()}}},c=(a("/eM2"),a("KHd+")),u=Object(c.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-button",{attrs:{type:"primary",size:"medium"}},[a("router-link",{attrs:{to:"/api_excel/add"}},[e._v("上传测试")])],1),e._v(" "),a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("Dialog")]),e._v(" "),a("el-button",{staticClass:"reload",attrs:{loading:e.reload,type:"primary",plain:""},on:{click:e.fetchData}},[e._v(e._s(e.reload_name))])],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"上传测试"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"接口",prop:"api_param_id"}},[a("el-select",{attrs:{placeholder:"请选择接口","value-key":"name"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}},e._l(e.apiParam,function(t,n){return a("el-option",{key:n,attrs:{label:t.name,value:t.id}},[a("span",{staticStyle:{float:"left",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.name))])])}))],1),e._v(" "),a("el-form-item",{attrs:{label:"appkey",prop:"appkey"}},[a("el-col",{attrs:{span:11}},[a("el-input",{model:{value:e.form.appkey,callback:function(t){e.$set(e.form,"appkey",t)},expression:"form.appkey"}})],1),e._v(" "),a("el-col",{attrs:{span:13}})],1),e._v(" "),a("el-form-item",{attrs:{label:"并发请求",prop:"concurrent"}},[a("el-col",{attrs:{span:2}},[a("el-input",{model:{value:e.form.concurrent,callback:function(t){e.$set(e.form,"concurrent",t)},expression:"form.concurrent"}})],1),e._v(" "),a("el-col",{attrs:{span:22}},[e._v("\n             任务执行时并发请求的数量，字段必须是数字默认： 5\n        ")])],1),e._v(" "),a("el-form-item",{attrs:{label:"上传文件",prop:"upload_url",accept:"application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.upload_url,expression:"form.upload_url"}],attrs:{type:"hidden"},domProps:{value:e.form.upload_url},on:{input:function(t){t.target.composing||e.$set(e.form,"upload_url",t.target.value)}}}),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadUrl,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-remove":e.beforeRemove,"on-exceed":e.handleExceed,"file-list":e.fileList,multiple:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传 xls/xlsx 文件，且不超过 20M")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"描述内容",prop:"description"}},[a("el-col",{attrs:{span:11}},[a("el-input",{attrs:{size:"medium",placeholder:"请输入内容"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),a("el-col",{attrs:{span:13}})],1),e._v(" "),a("el-form-item",{attrs:{label:"自动删除时间",prop:"auto_delete"}},[a("el-col",{attrs:{span:2}},[a("el-input",{model:{value:e.form.auto_delete,callback:function(t){e.$set(e.form,"auto_delete",t)},expression:"form.auto_delete"}})],1),e._v(" "),a("el-col",{attrs:{span:22}},[e._v("\n             任务执行完成后自动删除的时间（单位：天），默认： 2 天\n        ")]),e._v(" "),a("el-col",{attrs:{span:13}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.onSubmit("form")}}},[e._v("提交")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"接口名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.api_param.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"描述内容",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.description))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户ID",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.uid)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"原文件"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.upload_url)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",width:"90",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.state?a("div",[a("el-tag",{attrs:{type:"warning"}},[e._v("未开启")])],1):1===t.row.state?a("div",[a("el-tag",{attrs:{type:"primary"}},[e._v("正在处理")])],1):2===t.row.state?a("div",[a("el-tag",{attrs:{type:"success"}},[e._v("已完成")])],1):a("div",[a("el-tag",{attrs:{type:"info"}},[e._v("失败")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"进度条",width:"100",align:"center",display:"none"},scopedSlots:e._u([{key:"default",fn:function(e){return[0===e.row.state?a("div",[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:0}})],1):1===e.row.state?a("div",[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.row.rate}})],1):2===e.row.state?a("div",[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:100,status:"success"}})],1):a("div",[a("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.row.rate,status:"exception"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[0===t.row.state?a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(a){e.openTask(t.$index,t.row)}}},[e._v("点击开启任务")]):1===t.row.state?a("el-button",{attrs:{size:"mini",type:"primary"}},[e._v("...")]):2===t.row.state?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.download(t.$index,t.row)}}},[e._v("点击下载")]):5===t.row.state?a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){e.download_log(t.$index,t.row)}}},[e._v("下载已测试数据")]):e._e(),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.created_at))])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{total:e.total,"current-page":e.currentpage,"page-sizes":[10,20,30,50,100],"page-size":e.perpage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},[],!1,null,"bd946112",null);u.options.__file="index.vue";t.default=u.exports}}]);