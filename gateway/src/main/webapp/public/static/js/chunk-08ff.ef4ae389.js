(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-08ff"],{QeLv:function(t,s,a){"use strict";var e=a("jMGu");a.n(e).a},bE0L:function(t,s,a){"use strict";a.r(s);var e=a("KTTK"),i={name:"XrUserView",components:{},props:{id:[String,Number],data:Object,src:String},data:function(){return{userInfo:null}},computed:{sexIcon:function(){return 1===this.userData.sex?"wk wk-man":2===this.userData.sex?"wk wk-woman":""},dataSrc:function(){return this.src||this.userData.img},userData:function(){return this.userInfo||this.data}},watch:{id:{handler:function(t){t&&(this.userInfo=null,this.getUserData())},immediate:!0}},mounted:function(){},beforeDestroy:function(){},methods:{getUserData:function(){var t=this;Object(e.t)({userId:this.id}).then(function(s){t.userInfo=s.data}).catch(function(){})}}},n=(a("QeLv"),a("KHd+")),l=Object(n.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"xr-user-view"},[t.userData?a("div",{staticClass:"xr-mian"},[a("flexbox",{staticClass:"xr-mian__hd user"},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"user-info__name"},[a("span",[t._v(t._s(t.userData.realname))]),t._v(" "),t.sexIcon?a("i",{class:t.sexIcon}):t._e()]),t._v(" "),a("div",{staticClass:"user-info__company"},[t._v("\n          "+t._s(t.userData.companyName)+"\n        ")])]),t._v(" "),a("xr-avatar",{staticClass:"user-img",attrs:{src:t.dataSrc,name:t.userData.realname,size:44}})],1),t._v(" "),a("div",{staticClass:"xr-mian__bd"},[a("flexbox",{staticClass:"info-cell"},[a("i",{staticClass:"wk wk-department"}),t._v(" "),a("div",{staticClass:"info-cell__label"},[t._v("部门")]),t._v(" "),a("div",{staticClass:"info-cell__value text-one-line"},[t._v(t._s(t.userData.deptName))])]),t._v(" "),a("flexbox",{staticClass:"info-cell"},[a("i",{staticClass:"wk wk-tie"}),t._v(" "),a("div",{staticClass:"info-cell__label"},[t._v("岗位")]),t._v(" "),a("div",{staticClass:"info-cell__value text-one-line"},[t._v(t._s(t.userData.post))])]),t._v(" "),a("flexbox",{staticClass:"info-cell"},[a("i",{staticClass:"wk wk-b-mobile"}),t._v(" "),a("div",{staticClass:"info-cell__label"},[t._v("手机")]),t._v(" "),a("div",{staticClass:"info-cell__value text-one-line",attrs:{title:t.userData.mobile}},[t._v(t._s(t.userData.mobile))])]),t._v(" "),a("flexbox",{staticClass:"info-cell"},[a("i",{staticClass:"wk wk-email"}),t._v(" "),a("div",{staticClass:"info-cell__label"},[t._v("邮箱")]),t._v(" "),a("div",{staticClass:"info-cell__value text-one-line",attrs:{title:t.userData.email}},[t._v(t._s(t.userData.email))])])],1)],1):t._e()])},[],!1,null,"32283a89",null);l.options.__file="index.vue";s.default=l.exports},jMGu:function(t,s,a){}}]);