(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6859"],{"0K4r":function(t,e,a){"use strict";var i=a("47RB");a.n(i).a},"39TU":function(t,e,a){"use strict";a.r(e);var i=a("QbLZ"),o=a.n(i),s=a("hSIE"),n=a("LWkM"),c=a("9GgJ"),l=a("rRnC"),r=a("ZlIc"),d=a("t2rG"),u=a.n(d),h=a("L2JU"),p={name:"Corver",components:{XrHeader:c.a,AddProject:l.a,Draggable:u.a,ProjectCell:r.a},filters:{showTypeName:function(t){return{board:"卡片视图",list:"列表视图"}[t]}},props:{},data:function(){return{loading:!0,tabShowType:"board",search:"",filterObj:{},filterValue:1,filterList:[{label:"按最早创建",value:1},{label:"按最近创建",value:2},{label:"按最近更新",value:3}],isCreate:!1,list:[],defaultCorverUrl:"https://file.72crm.com/static/pc/images/pm/project-cover-1.jpg",tabName:"all",tabList:[{label:"全部项目",name:"all",list:[]},{label:"我关注的",name:"star",list:[]}],editId:null}},computed:o()({},Object(h.b)(["project"]),{permissonProject:function(){return this.project&&this.project.projectManage&&this.project.projectManage.save}}),watch:{},created:function(){var t=this;this.filterList.forEach(function(e){t.filterObj[e.value]=e.label}),this.$route.query.type&&(this.tabShowType="board"!=this.$route.query.type?"list":"board"),this.getList(),this.$bus.on("add-project",function(){t.getList()})},beforeRouteUpdate:function(t,e,a){t.query.type&&(this.tabShowType="board"!=t.query.type?"list":"board"),a()},beforeDestroy:function(){this.$bus.off("add-project")},methods:{searchClick:function(t){this.search=t,this.getList(),this.$router.push("/project/search?search="+(t||"")+"&sort="+this.filterValue)},filterClick:function(t){this.filterValue=t,this.getList()},getList:function(){var t=this;this.loading=!0,Object(s.b)({workSort:this.filterValue,name:this.search}).then(function(e){t.loading=!1,t.list=e.data||[];var a=t.tabList[0];a.list=e.data||[],a.label="全部项目（"+a.list.length+"）";var i=t.tabList[1];i.list=t.list.filter(function(t){return 1==t.collect}),i.label="我关注的（"+i.list.length+"）"}).catch(function(){t.loading=!1})},collectClick:function(t){var e=this;Object(n.o)(t.workId).then(function(t){e.getList()}).catch(function(){})},moveItem:function(t){if(t){if(t.oldIndex==t.newIndex)return;Object(n.m)(this.tabList[0].list.map(function(t){return t.workId})).then(function(t){}).catch(function(){})}},enterDetail:function(t){this.$router.push({name:"project-list",params:{id:t.workId}})},createProjectClick:function(){this.editId=null,this.isCreate=!0},editProjectClick:function(t){this.editId=t.workId,this.isCreate=!0},createSuccess:function(){this.getList()},showTypeChange:function(t){this.$router.push("/project/list?type="+t)},cellHandle:function(t,e){"edit"===t?this.editProjectClick(e):"delete"===t?this.deleteProject(e):this.collectClick(e)},deleteProject:function(t){var e=this;this.$confirm("确定要删除项目吗？删除后此项目中的所有任务将一并彻底删除，无法恢复","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.p)(t.workId).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getList()}).catch(function(){})}).catch(function(){})}}},f=(a("xFqi"),a("KHd+")),v=Object(f.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"corver"},[a("xr-header",{attrs:{"icon-class":"wk wk-project","icon-color":"#4AB8B8",placeholder:"请输入项目/任务/描述",label:"项目","show-search":"","ft-top":"0"},on:{search:t.searchClick}},[t.permissonProject?a("div",{attrs:{slot:"ft"},slot:"ft"},[a("el-button",{staticClass:"xr-btn--orange",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.createProjectClick}},[t._v("\n        创建项目\n      ")])],1):t._e()]),t._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content"},[a("span",{staticClass:"dropdown-handle"},[a("el-dropdown",{attrs:{trigger:"click"},on:{command:t.showTypeChange}},[a("div",{staticClass:"el-dropdown-link"},[t._v("\n          "+t._s(t._f("showTypeName")(t.tabShowType))),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"board"}},[t._v("卡片视图")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"list"}},[t._v("列表视图")])],1)],1),t._v(" "),a("el-dropdown",{attrs:{trigger:"click"},on:{command:t.filterClick}},[a("div",{staticClass:"el-dropdown-link el-dropdown-filter"},[t._v("\n          "+t._s(t.filterObj[t.filterValue])),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("div",{staticClass:"el-dropdown-title"},[t._v("排序")]),t._v(" "),t._l(t.filterList,function(e,i){return a("el-dropdown-item",{key:i,attrs:{command:e.value}},[t._v(t._s(e.label))])})],2)],1)],1),t._v(" "),a("el-tabs",{model:{value:t.tabName,callback:function(e){t.tabName=e},expression:"tabName"}},t._l(t.tabList,function(e,i){return a("el-tab-pane",{key:i,attrs:{label:e.label,name:e.name}},[a("draggable",{staticClass:"cover-content",attrs:{options:{forceFallback:!1,disabled:"star"==t.tabName}},on:{end:t.moveItem},model:{value:e.list,callback:function(a){t.$set(e,"list",a)},expression:"item.list"}},["board"==t.tabShowType?[t._l(e.list,function(e,i){return a("div",{key:i,staticClass:"cover-content-item",on:{click:function(a){t.enterDetail(e)}}},[a("div",{directives:[{name:"src",rawName:"v-src:background-image",value:e.coverUrl||t.defaultCorverUrl,expression:"childItem.coverUrl || defaultCorverUrl",arg:"background-image"}],staticClass:"cover-content-item__content"},[a("div",{staticClass:"handle-bar"},[a("div",{staticClass:"title text-one-line",attrs:{title:e.name}},[t._v(t._s(e.name))]),t._v(" "),e.authList&&e.authList.project&&e.authList.project.setWork?a("i",{staticClass:"wk wk-circle-edit",on:{click:function(a){a.stopPropagation(),t.editProjectClick(e)}}}):t._e(),t._v(" "),a("i",{staticClass:"wk wk-focus-on",class:{"is-collect":1==e.collect},on:{click:function(a){a.stopPropagation(),t.collectClick(e)}}})]),t._v(" "),a("div",{staticClass:"cover-content-item__content-shadow"})])])}),t._v(" "),t.permissonProject?a("div",{staticClass:"cover-content-item content-cross",on:{click:t.createProjectClick}},[a("div",{staticClass:"content-cross__content"},[a("flexbox",{attrs:{justify:"center",align:"center",orient:"vertical"}},[a("i",{staticClass:"wk wk-l-plus"}),t._v(" "),a("div",[t._v("创建项目")])])],1)]):t._e()]:[t._l(e.list,function(e,i){return a("project-cell",{key:i,attrs:{data:e,"edit-show":e.authList&&e.authList.project&&e.authList.project.setWork,"delete-show":e.authList&&e.authList.project&&e.authList.project.setWork},on:{handle:function(a){t.cellHandle(a,e)}},nativeOn:{click:function(a){t.enterDetail(e)}}})}),t._v(" "),t.permissonProject?a("project-cell",{attrs:{"edit-show":!1,"delete-show":!1,"collect-show":!1},nativeOn:{click:function(e){return t.createProjectClick(e)}}},[a("div",{staticClass:"project-cell__add",attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"wk wk-l-plus"})]),t._v(" "),a("span",{staticClass:"project-cell__add--title",attrs:{slot:"body"},slot:"body"},[t._v("创建新项目")])]):t._e()]],2)],1)}))],1),t._v(" "),t.isCreate?a("add-project",{attrs:{id:t.editId},on:{"save-success":t.createSuccess,close:function(e){t.isCreate=!1}}}):t._e()],1)},[],!1,null,"514c8b5e",null);v.options.__file="Corver.vue";e.default=v.exports},"47RB":function(t,e,a){},"9GgJ":function(t,e,a){"use strict";var i={name:"XrHeader",components:{},props:{iconClass:[String,Array],iconColor:String,label:String,showSearch:{type:Boolean,default:!1},searchIconType:{type:String,default:"text"},placeholder:{type:String,default:"请输入内容"},ftTop:{type:String,default:"15px"},content:[String,Number],inputAttr:{type:Object,default:function(){}}},data:function(){return{search:""}},computed:{},watch:{content:{handler:function(){this.search!=this.content&&(this.search=this.content)},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{inputChange:function(){this.$emit("update:content",this.search)},searchClick:function(){this.$emit("search",this.search)}}},o=(a("zIzm"),a("KHd+")),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("flexbox",{staticClass:"xr-header"},[t.iconClass?a("div",{staticClass:"xr-header__icon",style:{backgroundColor:t.iconColor}},[a("i",{class:t.iconClass})]):t._e(),t._v(" "),a("div",{staticClass:"xr-header__label"},[t.$slots.label?t._t("label"):[t._v(t._s(t.label))]],2),t._v(" "),t.showSearch?a("el-input",t._b({staticClass:"xr-header__search",class:{"is-text":"text"===t.searchIconType},style:{"margin-top":t.ftTop},attrs:{placeholder:t.placeholder},on:{input:t.inputChange},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchClick(e):null}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},"el-input",t.inputAttr,!1),["text"===t.searchIconType?a("el-button",{attrs:{slot:"append",type:"primary"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"},[t._v("搜索")]):a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchClick(e)}},slot:"append"})],1):t._e(),t._v(" "),a("div",{staticClass:"xr-header__ft",style:{top:t.ftTop}},[t._t("ft")],2)],1)},[],!1,null,"7bba770c",null);s.options.__file="index.vue";e.a=s.exports},YBj0:function(t,e,a){},ZlIc:function(t,e,a){"use strict";var i={name:"ProjectCell",components:{},props:{data:Object,editShow:{type:Boolean,default:!0},deleteShow:{type:Boolean,default:!0},collectShow:{type:Boolean,default:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},beforeDestroy:function(){},methods:{handleClick:function(t){this.$emit("handle",t)}}},o=(a("0K4r"),a("KHd+")),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("flexbox",{staticClass:"project-cell"},[t.$slots.header?a("div",{staticClass:"project-cell__header"},[t._t("header")],2):a("img",{directives:[{name:"src",rawName:"v-src",value:t.data.coverUrl||t.defaultCorverUrl,expression:"data.coverUrl || defaultCorverUrl"}],staticClass:"project-cell__header"}),t._v(" "),a("div",{staticClass:"project-cell__body"},[t.$slots.body?t._t("body"):[a("div",{staticClass:"label text-one-line"},[t._v(t._s(t.data.name))]),t._v(" "),a("div",{staticClass:"des text-one-line"},[t._v(t._s(t.data.description))])]],2),t._v(" "),a("div",{staticClass:"project-cell__footer"},[t.deleteShow?a("i",{staticClass:"wk wk-s-delete",attrs:{title:"移至回收站"},on:{click:function(e){e.stopPropagation(),t.handleClick("delete")}}}):t._e(),t._v(" "),t.editShow?a("i",{staticClass:"wk wk-circle-edit",attrs:{title:"编辑"},on:{click:function(e){e.stopPropagation(),t.handleClick("edit")}}}):t._e(),t._v(" "),t.collectShow?a("i",{staticClass:"wk wk-focus-on",class:{"is-collect":1==t.data.collect},attrs:{title:"删除"},on:{click:function(e){e.stopPropagation(),t.handleClick("collect")}}}):t._e()])])},[],!1,null,"e47e01f8",null);s.options.__file="ProjectCell.vue";e.a=s.exports},ihDC:function(t,e,a){},xFqi:function(t,e,a){"use strict";var i=a("YBj0");a.n(i).a},zIzm:function(t,e,a){"use strict";var i=a("ihDC");a.n(i).a}}]);