(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b48b59a"],{5229:function(e,t,s){},"8fcd":function(e,t,s){"use strict";s("d5af")},"9bc1":function(e,t,s){"use strict";s("5229")},"9ed6":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[s("div",{staticClass:"title-container"},[s("h3",{staticClass:"title"},[e._v("Quản lý tài liệu")])]),s("el-form-item",{attrs:{prop:"username"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"user"}})],1),s("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",{staticClass:"svg-container"},[s("svg-icon",{attrs:{"icon-class":"password"}})],1),s("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),s("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[s("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),s("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Đăng nhập")])],1)],1)},o=[],r=(s("61f7"),s("5c96"),{name:"Login",data:function(){var e=function(e,t,s){t.length<6?s(new Error("The password can not be less than 6 digits")):s()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(t){setTimeout((function(){return null!==t&&void 0!==t&&t.secret?void e.$router.push("/DMS/two-auth-qrcode"):void e.$router.push("/DMS/two-auth-pin")}),500)})).catch((function(){e.loading=!1}))}))}}}),a=r,i=(s("8fcd"),s("9bc1"),s("2877")),l=Object(i["a"])(a,n,o,!1,null,"afba625a",null);t["default"]=l.exports},d5af:function(e,t,s){}}]);