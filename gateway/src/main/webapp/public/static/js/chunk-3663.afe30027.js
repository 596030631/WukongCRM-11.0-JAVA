(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3663"],{"31UX":function(e,t,a){"use strict";var s=a("4d7F"),i=a.n(s),l=a("CMIa"),n=a("FdMb"),o=a("7Qib");t.a={data:function(){return{chartObj:null,chartOtherObj:null,chartColors:["#6CA2FF","#6AC9D7","#72DCA2","#48E78D","#FECD51","#DBB375","#FF7474","#F59561","#A3AEBC","#4C84FF","#0DBEB4","#00DEDE","#FFAA00","#C7C116","#F7A57C","#F661AC","#8652EE"],chartXAxisStyle:{axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}},chartYAxisStyle:{axisTick:{alignWithLabel:!0,lineStyle:{width:0}},axisLabel:{color:"#333"},axisLine:{lineStyle:{color:"#333"}},splitLine:{show:!1}},currentPage:1,pageSizes:[15,30,45,60],pageSize:0,total:0,toolbox:{showTitle:!1,feature:{saveAsImage:{show:!0,pixelRatio:2}}}}},components:{FiltrateHandleView:l.a},props:{},computed:{},watch:{},mounted:function(){var e=this;this.debouncedResize=Object(n.a)(300,this.resizeFn),this.$nextTick(function(){window.addEventListener("resize",e.debouncedResize)})},beforeDestroy:function(){window.removeEventListener("resize",this.debouncedResize)},methods:{resizeFn:function(){this.chartObj&&this.chartObj.resize(),this.chartOtherObj&&this.chartOtherObj.resize()},handleSizeChange:function(e){this.pageData.limit=e,this.getList(this.pageData)},handleCurrentChange:function(e){this.pageData.page=e,this.getList(this.pageData)},requestExportInfo:function(e,t){return new i.a(function(a,s){e(t).then(function(e){Object(o.c)(e),a&&a(e)}).catch(function(e){s&&s(e)})})}},deactivated:function(){}}},CMIa:function(e,t,a){"use strict";var s=a("KTTK"),i=a("ERJp"),l=a("6iAj"),n=a("UCfG"),o=a("HHBN"),u=a("ZX9L"),r=a("wd/R"),c=a.n(r),h={name:"FiltrateHandleView",components:{TimeTypeSelect:u.a,XhStructureCell:n.a,XhUserCell:o.a},props:{moduleType:{type:String},title:{type:String,default:""},showFilterView:{default:!0,type:Boolean},showYearSelect:{default:!1,type:Boolean},showBusinessSelect:{default:!1,type:Boolean},showUserSelect:{default:!0,type:Boolean},showCustomSelect:{default:!1,type:Boolean},customDefault:"",customOptions:{default:function(){return[]},type:Array},showProductSelect:{default:!1,type:Boolean}},data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},yearValue:"",timeTypeValue:{},dataSelect:1,structuresSelectValue:[],userSelectValue:[],businessOptions:[],businessStatusValue:"",productValue:[],productOptions:[],customValue:""}},computed:{showUserStrucSelect:function(){return this.showUserSelect}},watch:{},mounted:function(){var e=this;this.showCustomSelect&&(this.customValue=this.customDefault),this.showYearSelect&&(this.yearValue=c()(new Date).year().toString()),this.$emit("load"),this.showBusinessSelect?this.getBusinessStatusList(function(){e.postFiltrateValue()}):this.postFiltrateValue(),this.showProductSelect&&this.getProductCategoryIndex()},beforeDestroy:function(){},methods:{structureChange:function(e){this.structuresSelectValue=e.value||[]},userChange:function(e){this.userSelectValue=e.value||[]},customSelectChange:function(){this.$emit("typeChange",this.customValue)},timeTypeChange:function(e){this.timeTypeValue=e},structuresValueChange:function(e){this.showUserSelect&&(this.userSelectValue="",this.userOptions=[],this.getUserList())},getUserList:function(){var e=this,t={};t.deptId=this.structuresSelectValue,Object(s.l)(t).then(function(t){e.userOptions=t.data}).catch(function(){e.$emit("error")})},getBusinessStatusList:function(e){var t=this;Object(i.t)().then(function(a){var s=a.data||[];t.businessOptions=s.filter(function(e){return 1===e.status}),t.businessOptions.length>0&&(t.businessStatusValue=t.businessOptions[0].typeId),e(!0)}).catch(function(){t.$emit("error")})},getProductCategoryIndex:function(){var e=this;Object(l.J)({type:"tree"}).then(function(t){e.productOptions=t.data}).catch(function(){})},postFiltrateValue:function(){var e={};this.showUserStrucSelect?1==this.dataSelect&&(e.deptId=this.structuresSelectValue.length>0?this.structuresSelectValue[0].id:""):e.deptId=this.structuresSelectValue.length>0?this.structuresSelectValue[0].id:"",this.showUserStrucSelect&&(e.isUser=2==this.dataSelect?1:0),this.showUserSelect&&2==this.dataSelect&&(e.userId=this.userSelectValue.length>0?this.userSelectValue[0].userId:""),this.showBusinessSelect&&(e.typeId=this.businessStatusValue),this.showProductSelect&&(e.categoryId=this.productValue.length>0?this.productValue[this.productValue.length-1]:""),this.showYearSelect?e.year=this.yearValue:"custom"==this.timeTypeValue.type?(e.startTime=this.timeTypeValue.startTime,e.endTime=this.timeTypeValue.endTime):e.type=this.timeTypeValue.value,this.$emit("change",e)}}},d=(a("arYZ"),a("KHd+")),p=Object(d.a)(h,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("flexbox",{staticClass:"filtrate-content",attrs:{justify:"flex-start"}},[a("flexbox",{staticClass:"title-box",attrs:{justify:"flex-start"}},[a("div",{staticClass:"icon-box"},[a("span",{staticClass:"wk wk-my-task icon"})]),e._v(" "),a("span",{staticClass:"text"},[e._v(e._s(e.title))])]),e._v(" "),e.showFilterView?[e.showYearSelect?e._e():a("time-type-select",{on:{change:e.timeTypeChange}}),e._v(" "),e.showYearSelect?a("el-date-picker",{attrs:{clearable:!1,"picker-options":e.pickerOptions,type:"year","value-format":"yyyy",placeholder:"选择年"},model:{value:e.yearValue,callback:function(t){e.yearValue=t},expression:"yearValue"}}):e._e(),e._v(" "),e.showUserStrucSelect?a("el-select",{model:{value:e.dataSelect,callback:function(t){e.dataSelect=t},expression:"dataSelect"}},e._l([{label:"按部门",value:1},{label:"按员工",value:2}],function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})):e._e(),e._v(" "),1==e.dataSelect?a("xh-structure-cell",{staticClass:"xh-structure-cell",attrs:{radio:"",placeholder:"选择部门（默认为本部门及下属部门）"},on:{"value-change":e.structureChange}}):e._e(),e._v(" "),2==e.dataSelect&&e.showUserSelect?a("xh-user-cell",{staticClass:"xh-user-cell",attrs:{radio:"",placeholder:"选择员工（默认为本人及下属）\n"},on:{"value-change":e.userChange}}):e._e(),e._v(" "),e.showBusinessSelect?a("el-select",{attrs:{placeholder:"商机组"},model:{value:e.businessStatusValue,callback:function(t){e.businessStatusValue=t},expression:"businessStatusValue"}},e._l(e.businessOptions,function(e){return a("el-option",{key:e.typeId,attrs:{label:e.name,value:e.typeId}})})):e._e(),e._v(" "),e.showProductSelect?a("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.productOptions,"show-all-levels":!1,props:{children:"children",label:"label",value:"categoryId"},"change-on-select":""},model:{value:e.productValue,callback:function(t){e.productValue=t},expression:"productValue"}}):e._e(),e._v(" "),e.showCustomSelect?a("el-select",{on:{change:e.customSelectChange},model:{value:e.customValue,callback:function(t){e.customValue=t},expression:"customValue"}},e._l(e.customOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}})})):e._e(),e._v(" "),e._t("append"),e._v(" "),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.postFiltrateValue()}}},[e._v("搜索")]),e._v(" "),e._t("default")]:e._e()],2)},[],!1,null,"3d4f62b9",null);p.options.__file="FiltrateHandleView.vue";t.a=p.exports},"G+lJ":function(e,t,a){"use strict";var s=a("tuyL");a.n(s).a},HaXQ:function(e,t,a){},J8QC:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return l});var s=a("t3Un");function i(e){return Object(s.a)({url:"biRanking/addressAnalyse",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function l(e){var t=e.type_analyse;return"industry"===t?Object(s.a)({url:"biRanking/portrait",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}}):"level"===t?Object(s.a)({url:"biRanking/portraitLevel",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}}):"source"===t?Object(s.a)({url:"biRanking/portraitSource",method:"post",data:e,headers:{"Content-Type":"application/json;charset=UTF-8"}}):void 0}},ZX9L:function(e,t,a){"use strict";var s={name:"TimeTypeSelect",props:{defaultType:[String,Object],width:{type:Number,default:200},options:{type:Array,default:function(){return[{label:"今天",value:"today"},{label:"昨天",value:"yesterday"},{label:"本周",value:"week"},{label:"上周",value:"lastWeek"},{label:"本月",value:"month"},{label:"上月",value:"lastMonth"},{label:"本季度",value:"quarter"},{label:"上季度",value:"lastQuarter"},{label:"本年",value:"year"},{label:"去年",value:"lastYear"}]}}},data:function(){return{selectType:{label:"本年",value:"year"},showTypePopover:!1,showCustomContent:!1,sureCustomContent:!1,startTime:"",endTime:""}},computed:{typeShowValue:function(){return this.sureCustomContent?this.startTime||this.endTime?(this.startTime||"")+"-"+(this.endTime||""):"":this.selectType.label}},watch:{defaultType:function(){this.selectType.value!=this.defaultType&&(this.selectType=this.getDefaultTypeValue(this.defaultType))}},mounted:function(){void 0!==this.defaultType?"string"==typeof this.defaultType?this.selectType=this.getDefaultTypeValue(this.defaultType):this.defaultType.label?this.selectType=this.defaultType:"default"==this.defaultType.type?this.selectType=this.getDefaultTypeValue(this.defaultType.value):"custom"==this.defaultType.type&&(this.sureCustomContent=!0,this.showCustomContent=!0,this.startTime=this.defaultType.startTime,this.endTime=this.defaultType.endTime):this.$emit("change",{type:"default",value:this.selectType.value})},methods:{getDefaultTypeValue:function(e){for(var t=0;t<this.options.length;t++){var a=this.options[t];if(a.value==e)return a}return{label:"本年",value:"year"}},typeSelectClick:function(e){this.showTypePopover=!1,this.sureCustomContent=!1,this.showCustomContent=!1,this.selectType=e,this.$emit("change",{type:"default",value:this.selectType.value})},customSureClick:function(){this.startTime&&this.endTime&&(this.sureCustomContent=!0,this.showTypePopover=!1,this.$emit("change",{type:"custom",startTime:this.startTime,endTime:this.endTime}))}}},i=(a("G+lJ"),a("KHd+")),l=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-popover",{staticClass:"time-type-select",attrs:{width:e.width,placement:"bottom","popper-class":"no-padding-popover",trigger:"click"},model:{value:e.showTypePopover,callback:function(t){e.showTypePopover=t},expression:"showTypePopover"}},[a("div",{staticClass:"type-popper"},[a("div",{staticClass:"type-content"},[e._l(e.options,function(t,s){return a("div",{key:s,staticClass:"type-content-item",class:{selected:e.selectType.value==t.value&&!e.showCustomContent},on:{click:function(a){e.typeSelectClick(t)}}},[a("div",{staticClass:"mark"}),e._v(e._s(t.label)+"\n      ")])}),e._v(" "),a("div",{staticClass:"type-content-item",class:{selected:e.showCustomContent},on:{click:function(t){e.showCustomContent=!0}}},[a("div",{staticClass:"mark"}),e._v("自定义\n      ")])],2),e._v(" "),e.showCustomContent?a("div",{staticClass:"type-content-custom"},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy.MM.dd",placeholder:"选择日期"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}}),e._v(" "),a("el-button",{on:{click:e.customSureClick}},[e._v("确定")])],1):e._e()]),e._v(" "),a("el-input",{staticClass:"type-select",style:{width:e.width+"px"},attrs:{slot:"reference",readonly:!0},slot:"reference",model:{value:e.typeShowValue,callback:function(t){e.typeShowValue=t},expression:"typeShowValue"}},[a("i",{class:["el-icon-arrow-up",{"is-reverse":e.showTypePopover}],attrs:{slot:"suffix"},slot:"suffix"})])],1)},[],!1,null,"9dc9cb18",null);l.options.__file="index.vue";t.a=l.exports},arYZ:function(e,t,a){"use strict";var s=a("HaXQ");a.n(s).a},hC2P:function(e,t,a){"use strict";a.r(t);var s=a("31UX"),i=a("MT78"),l=a.n(i),n=(a("MTm3"),a("J8QC")),o={name:"CustomerAddressStatistics",mixins:[s.a],data:function(){return{loading:!1,allOption:null,dealOption:null,chartObj:null,chartOtherObj:null}},computed:{},mounted:function(){this.initAxis()},methods:{getDataList:function(e){var t=this;this.loading=!0,Object(n.a)(e).then(function(e){t.loading=!1;for(var a=[],s=[],i=0;i<e.data.length;i++){var l=e.data[i];l.allCustomer&&a.push({name:l.address,value:l.allCustomer}),l.dealCustomer&&s.push({name:l.address,value:l.dealCustomer})}t.allOption.series[0].data=a,t.dealOption.series[0].data=s,t.chartObj.setOption(t.allOption,!0),t.chartOtherObj.setOption(t.dealOption,!0)}).catch(function(){t.loading=!1})},initAxis:function(){this.chartObj=l.a.init(document.getElementById("allChart")),this.chartOtherObj=l.a.init(document.getElementById("dealChart")),this.allOption=this.getChartOptione("全部客户"),this.dealOption=this.getChartOptione("成交客户"),this.chartObj.setOption(this.allOption,!0),this.chartOtherObj.setOption(this.dealOption,!0)},getChartOptione:function(e){return{title:{text:e,left:"center",bottom:0},tooltip:{trigger:"item",formatter:function(e){if(e.value)return e.name+"<br/>"+(e.value||"-")+"（个）"}},legend:{orient:"vertical",left:"left",data:["客户数"]},visualMap:{min:0,max:50,left:"left",top:"bottom",text:["多","少"],calculable:!0,inRange:{color:["lightskyblue","yellow","orangered"]}},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1,optionToContent:function(e){for(var t=e.series[0].data,a='<table style="width:100%;text-align:center"><tbody><tr><td>城市</td><td>客户数</td></tr>',s=0,i=t.length;s<i;s++)a+="<tr><td>"+t[s].name+"</td><td>"+t[s].value+"</td></tr>";return a+="</tbody></table>"}},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"",type:"map",mapType:"china",showLegendSymbol:!1,itemStyle:{normal:{label:{show:!0},borderColor:"#ccc"},emphasis:{label:{show:!0}}},data:[]}]}}}},u=(a("xrKr"),a("KHd+")),r=Object(u.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"main-container"},[a("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{title:"客户城市分布分析","module-type":"customer"},on:{load:function(t){e.loading=!0},change:e.getDataList}}),e._v(" "),a("flexbox",{staticClass:"content"},[a("flexbox-item",[a("div",{staticClass:"axis-content"},[a("div",{staticClass:"axismain",attrs:{id:"allChart"}})])]),e._v(" "),a("flexbox-item",[a("div",{staticClass:"axis-content"},[a("div",{staticClass:"axismain",attrs:{id:"dealChart"}})])])],1)],1)},[],!1,null,"37ba6d52",null);r.options.__file="CustomerAddressStatistics.vue";t.default=r.exports},s5bG:function(e,t,a){},tuyL:function(e,t,a){},xrKr:function(e,t,a){"use strict";var s=a("s5bG");a.n(s).a}}]);