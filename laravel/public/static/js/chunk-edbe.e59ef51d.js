(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-edbe"],{HNnH:function(t,e,n){"use strict";var a=n("cEzL");n.n(a).a},R8mO:function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"e",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"f",function(){return s}),n.d(e,"a",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return u}),n.d(e,"b",function(){return d});var a=n("t3Un");function o(t){return Object(a.a)({url:"/api/api_excel",method:"get",params:t})}function r(t){return a.a.post("/api/api_excel",t)}function i(t){return a.a.get("/api/api_excel/"+t)}function s(t,e){return a.a.patch("/api/api_excel/"+t,e)}function c(t){return a.a.delete("/api/api_excel/"+t)}function l(t){return Object(a.a)({url:"/api/api_excel_search",method:"get",params:t})}function u(t){return Object(a.a)({url:"/api/start_task",method:"post",params:t})}function d(t){return Object(a.a)({url:"/api/download_log",method:"post",params:t})}},cEzL:function(t,e,n){},yWqU:function(t,e,n){"use strict";n.r(e);var a=n("P2sY"),o=n.n(a),r=n("R8mO"),i={filters:{statusFilter:function(t){return{1:"success",0:"gray","-1":"danger"}[t]}},data:function(){return{list:null,listLoading:!0,perpage:10,total:100,currentpage:1,listQuery:{page:1},url:null,websock:null}},created:function(){this.listQuery=this.$route.query,this.currentpage=parseInt(this.listQuery.page);var t=parseInt(this.$route.query.perPage);this.perpage=isNaN(t)?this.perpage:t,this.fetchData()},destroyed:function(){this.websock.close()},methods:{startTask:function(t,e){var n=this;this.$confirm("此操作将开启任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.h)(e).then(function(t){var a="";200===t.code?(e.state=1,a="success"):a="error",n.$message({type:a,message:t.reason})})}).catch(function(){n.$message({type:"info",message:"已取消操作"})})},openTask:function(t,e){var n=this;this.$alert("此操作将开启任务, 是否继续?","开启任务提醒",{confirmButtonText:"确定",center:!0,type:"warning",callback:function(t){"confirm"===t&&Object(r.h)(e).then(function(t){var a="";200===t.code?(e.state=1,a="success"):a="error",n.$message({type:a,message:t.reason})})}})},initWebSocket:function(t){if("WebSocket"in window){var e="ws://118.25.87.12:5200?id="+t;this.websock=new WebSocket(e),this.websock.onmessage=this.onmessage,this.websock.onopen=this.onopen,this.websock.onerror=this.onerror,this.websock.onclose=this.close}else console.log("Your browser does not support WebSocket!")},onopen:function(){},onerror:function(){},onmessage:function(t){console.log(t.data);var e=JSON.parse(t.data);console.log(e)},send:function(t){this.websock.send(t)},close:function(){console.log("断开连接")},download:function(t,e){window.location.href=this.url+e.finish_url},download_log:function(t,e){var n=this;Object(r.b)({id:e.id}).then(function(t){console.log(t),200===t.code&&(window.location.href=n.url+t.data.failed_done_file)})},fetchData:function(){var t=this;this.listLoading=!0;var e=o()({page:this.listQuery.page},{perPage:this.perpage});Object(r.d)(e).then(function(e){t.list=e.data.data,t.listLoading=!1,t.total=e.data.total,t.url=e.data.appUrl,console.log("type",Object.prototype.toString.call(t.list)),t.initWebSocket(8)})},handleEdit:function(t,e){this.$router.push({path:"/api_excel/edit/"+e.id})},handleDelete:function(t,e){var n=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){Object(r.a)(e.id).then(function(t){n.loading=!1,200===t.code?(n.$message({message:"操作成功",type:"success"}),n.fetchData()):n.$message.error(t.reason)}),n.$message({type:"success",message:"删除成功!"})}).catch(function(){n.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(t){this.perpage=t,this.$router.push({path:"",query:{page:this.listQuery.page,perPage:t}}),this.fetchData()},handleCurrentChange:function(t){this.listQuery={page:t},this.$router.push({path:"",query:{page:t,perPage:this.perpage}}),this.fetchData({page:t})},goSearch:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.listLoading=!0;var n={wd:e.form.input};Object(r.g)(n).then(function(t){e.listLoading=!1,200===t.code?(e.form.isShow=!0,e.list=t.data.data,e.total=t.data.total):e.$message.error(t.reason)})})}}},s=(n("HNnH"),n("KHd+")),c=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",[n("el-button",{attrs:{type:"primary",size:"medium"}},[n("router-link",{attrs:{to:"/api_excel/add"}},[t._v("上传测试")])],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"ID",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"接口名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.api_param.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"描述内容",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.description))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"用户ID",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.uid)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"原文件"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.upload_url)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"90",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.state?n("div",[n("el-tag",{attrs:{type:"warning"}},[t._v("未开启")])],1):1===e.row.state?n("div",[n("el-tag",{attrs:{type:"primary"}},[t._v("正在处理")])],1):2===e.row.state?n("div",[n("el-tag",{attrs:{type:"success"}},[t._v("已完成")])],1):n("div",[n("el-tag",{attrs:{type:"info"}},[t._v("失败")])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"进度条",width:"1",align:"center",display:"none"},scopedSlots:t._u([{key:"default",fn:function(t){return[0===t.row.state?n("div",[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:0}})],1):1===t.row.state?n("div",[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:t.row.rate}})],1):2===t.row.state?n("div",[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:100,status:"success"}})],1):n("div",[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:50,status:"exception"}})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"300",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[0===e.row.state?n("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(n){t.openTask(e.$index,e.row)}}},[t._v("点击开启任务")]):1===e.row.state?n("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("...")]):2===e.row.state?n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){t.download(e.$index,e.row)}}},[t._v("点击下载")]):5===e.row.state?n("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(n){t.download_log(e.$index,e.row)}}},[t._v("下载已测试数据")]):t._e(),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.created_at))])]}}])})],1),t._v(" "),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{total:t.total,"current-page":t.currentpage,"page-sizes":[10,20,30,50,100],"page-size":t.perpage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},[],!1,null,"61eaf988",null);c.options.__file="index.vue";e.default=c.exports}}]);