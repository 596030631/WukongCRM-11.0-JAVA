(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cf98"],{"/FJK":function(t,e,n){},"9GgJ":function(t,e,n){"use strict";var a={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},i=(n("zIzm"),n("KHd+")),o=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flexbox",{staticClass:"xr-header"},[t.iconClass?n("div",{staticClass:"xr-header__icon",style:{backgroundColor:t.iconColor}},[n("i",{class:t.iconClass})]):t._e(),t._v(" "),n("div",{staticClass:"xr-header__label"},[t.$slots.label?t._t("label"):[t._v(t._s(t.label))]],2),t._v(" "),t.showSearch?n("el-input",t._b({staticClass:"xr-header__search",class:{"is-text":"text"===t.searchIconType},style:{"margin-top":t.ftTop},attrs:{placeholder:t.placeholder},on:{input:t.inputChange},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchClick(e):null}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},"el-input",t.inputAttr,!1),["text"===t.searchIconType?n("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"},[t._v("搜索")]):n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"})],1):t._e(),t._v(" "),n("div",{staticClass:"xr-header__ft",style:{top:t.ftTop}},[t._t("ft")],2)],1)},[],!1,null,"7bba770c",null);o.options.__file="index.vue";e.a=o.exports},JhE3:function(t,e,n){"use strict";var a=n("/FJK");n.n(a).a},ihDC:function(t,e,n){},"s7/I":function(t,e,n){"use strict";n.r(e);var a=n("t3Un");var i=n("LWkM"),o={components:{XrHeader:n("9GgJ").a},data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-205,list:[],currentPage:1,pageSize:15,pageSizes:[15,30,45,60],total:0}},created:function(){var t=this;window.onresize=function(){t.tableHeight=document.documentElement.clientHeight-205},this.getList()},methods:{handleSizeChange:function(t){this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},getList:function(){var t,e=this;this.loading=!0,(t={page:this.currentPage,limit:this.pageSize},Object(a.a)({url:"work/work/queryArchiveWorkList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})).then(function(t){e.list=t.data.list,e.loading=!1}).catch(function(){e.loading=!1})},recoverProject:function(t,e){var n=this;this.$confirm("确定恢复?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n.loading=!0,Object(i.x)({workId:t.workId,status:1}).then(function(a){n.list.splice(e,1),n.$message.success("恢复成功"),n.$bus.$emit("recover-project",t.name,t.workId),n.loading=!1}).catch(function(){n.loading=!1})}).catch(function(){n.$message({type:"info",message:"已取消"})})}}},s=(n("JhE3"),n("KHd+")),c=Object(s.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"archive-project"},[n("xr-header",{attrs:{"icon-class":"wk wk-archive","icon-color":"#19b5f6",label:"归档项目统计"}}),t._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content-body"},[n("el-table",{staticClass:"n-table--border",staticStyle:{width:"100%"},attrs:{id:"crm-table",data:t.list,height:t.tableHeight,stripe:"","highlight-current-row":""}},[n("el-table-column",{attrs:{resizable:!1,prop:"businessCheck",label:"",width:"38"},scopedSlots:t._u([{key:"header",fn:function(t){return[n("i",{staticClass:"wukong wukong-subproject",staticStyle:{color:"#999"}})]}},{key:"default",fn:function(t){return[n("i",{staticClass:"wukong wukong-subproject",style:{color:t.row.color}})]}}])}),t._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"name",label:"项目名称"}}),t._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":"",width:"200",prop:"archiveTime",label:"归档时间"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"},nativeOn:{click:function(n){t.recoverProject(e.row,e.$index)}}},[t._v("恢复项目")])]}}])})],1),t._v(" "),n("div",{staticClass:"p-contianer"},[n("el-pagination",{staticClass:"p-bar",attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)},[],!1,null,"4b3ca68c",null);c.options.__file="index.vue";e.default=c.exports},zIzm:function(t,e,n){"use strict";var a=n("ihDC");n.n(a).a}}]);