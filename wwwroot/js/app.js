webpackJsonp([4],{20:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(2),a=o(18),n=o(8),i=o(26),c=o(60),s=(o.n(c),o(63));o.n(s);o(21),r.a.config.productionTip=!1,r.a.use(a.n),o(61),a.n.start(function(){new r.a({el:"#q-app",router:n.a,store:i.a,render:function(e){return e(o(65).default)}})})},21:function(e,t){},25:function(e,t,o){function r(e){var t=a[e];return t?o.e(t[1]).then(function(){return o(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var a={"./Error404.vue":[72,2],"./Hello.vue":[73,0],"./Todo.vue":[71,1]};r.keys=function(){return Object.keys(a)},r.id=25,e.exports=r},26:function(e,t,o){"use strict";var r,a=o(27),n=o.n(a),i=o(2),c=o(40),s=o.n(c),u=o(59),d=o(8),l=!window.location.host.includes("localhost"),p=l?"//cryptic-garden-99138.herokuapp.com/":"http://localhost:5000/",h=s.a.create({baseURL:p+"api/",timeout:4e3,withCredentials:!0}),m=s.a.create({baseURL:p+"api/account/",timeout:4e3,withCredentials:!0}),g=s.a.create({baseURL:"//bcw-getter.herokuapp.com/?url=http://www.splashbase.co/api/v1/images/search/",timeout:4e3,withCredentials:!1}),v=s.a.create({baseURL:"https://andruxnet-random-famous-quotes.p.mashape.com/",timeout:4e3,withCredentials:!0,headers:{"X-Mashape-Key":"UpLWWSYZ0HmshPmFybLvFyrlOWEZp1RXVu3jsnVm0B3XONFr2c",Accept:"application/json"}});i.a.use(u.a);var f=new u.a.Store({state:{todos:{},logged:!1,info:{},photo:[{webformatURL:"../assets/seaBackground.jpg"}],quote:{},rand:1,pics:(r={1:"http://res.cloudinary.com/treverscloud/image/upload/v1509471698/inspire/13.jpg",2:"http://res.cloudinary.com/treverscloud/image/upload/v1509471698/inspire/12.jpg",3:"http://res.cloudinary.com/treverscloud/image/upload/v1509471699/inspire/10.jpg",4:"http://res.cloudinary.com/treverscloud/image/upload/v1509471697/inspire/11.jpg",5:"http://res.cloudinary.com/treverscloud/image/upload/v1509471697/inspire/9.jpg",6:"http://res.cloudinary.com/treverscloud/image/upload/v1509471698/inspire/8.jpg",7:"http://res.cloudinary.com/treverscloud/image/upload/v1509471698/inspire/7.jpg",8:"http://res.cloudinary.com/treverscloud/image/upload/v1509471695/inspire/6.jpg",9:"http://res.cloudinary.com/treverscloud/image/upload/v1509471695/inspire/4.jpg",10:"http://res.cloudinary.com/treverscloud/image/upload/v1509471695/inspire/5.jpg",11:"http://res.cloudinary.com/treverscloud/image/upload/v1509471695/inspire/3.jpg",12:"http://res.cloudinary.com/treverscloud/image/upload/v1509471695/inspire/2.jpg",13:"http://res.cloudinary.com/treverscloud/image/upload/v1509471693/inspire/1.jpg",14:"http://res.cloudinary.com/treverscloud/image/upload/v1509471693/inspire/30.jpg",15:"http://res.cloudinary.com/treverscloud/image/upload/v1509471694/inspire/29.jpg",16:"http://res.cloudinary.com/treverscloud/image/upload/v1509471693/inspire/28.jpg",17:"http://res.cloudinary.com/treverscloud/image/upload/v1509471693/inspire/27.jpg",18:"http://res.cloudinary.com/treverscloud/image/upload/v1509471693/inspire/26.jpg",19:"http://res.cloudinary.com/treverscloud/image/upload/v1509471691/inspire/25.jpg",20:"http://res.cloudinary.com/treverscloud/image/upload/v1509471691/inspire/24.jpg",21:"http://res.cloudinary.com/treverscloud/image/upload/v1509471691/inspire/23.jpg",22:"http://res.cloudinary.com/treverscloud/image/upload/v1509471691/inspire/22.jpg",23:"http://res.cloudinary.com/treverscloud/image/upload/v1509471689/inspire/21.jpg",24:"http://res.cloudinary.com/treverscloud/image/upload/v1509471690/inspire/20.jpg",25:"http://res.cloudinary.com/treverscloud/image/upload/v1509471688/inspire/19.jpg",26:"http://res.cloudinary.com/treverscloud/image/upload/v1509471688/inspire/18.jpg"},n()(r,"26","http://res.cloudinary.com/treverscloud/image/upload/v1509471687/inspire/17.jpg"),n()(r,27,"http://res.cloudinary.com/treverscloud/image/upload/v1509471689/inspire/15.jpg"),n()(r,28,"http://res.cloudinary.com/treverscloud/image/upload/v1509471688/inspire/16.jpg"),n()(r,29,"http://res.cloudinary.com/treverscloud/image/upload/v1509471689/inspire/14.jpg"),r)},mutations:{randoms:function(e){var t=Math.floor(29*Math.random()+1);e.rand=t},clearState:function(e){e.info={},e.todos={}},handleError:function(e,t){console.error(t)},setTodos:function(e,t){for(var o=0;o<t.length;o++){var r=t[o];i.a.set(e.todos,r.id,r)}},updateTodo:function(e,t){i.a.set(e.todos,t.id,t)},addTodo:function(e,t){e.todos={};for(var o=0;o<t.length;o++){var r=t[o];i.a.set(e.todos,r.id,r)}},setLogged:function(e){e.logged=!e.logged},setInfo:function(e,t){e.info=t.data},clearTodos:function(e){e.todos={}},setPhoto:function(e,t){e.photo=t},setQuote:function(e,t){e.quote=t}},actions:{getQuote:function(e){var t=e.commit;e.dispatch;v("?cat=movies&count=1").then(function(e){t("setQuote",e.data)}).catch(function(e){t("handleError",e)})},getPhoto:function(e){var t=e.commit;e.dispatch;g("?query=mountain").then(function(e){var o=Math.floor(Math.random()*e.data.images.length+1);e.data.images[o].url="//images.weserv.nl/?url="+e.data.images[o].url,t("setPhoto",e.data.images[o])}).catch(function(e){t("handleError",e)})},toggleComplete:function(e,t){var o=e.commit;e.dispatch;h.put("users/"+t.userId+"/todos/"+t.todoId).then(function(e){o("updateTodo",e.data)}).catch(function(e){o("handleError",e)})},deleteTodo:function(e,t){var o=e.commit,r=e.dispatch;h.delete("todos/"+t.todoId).then(function(e){o("clearTodos"),r("getUserTodos",t.userId)}).catch(function(e){o("handleError",e)})},getUserTodos:function(e,t){var o=e.commit;e.dispatch;h("users/"+t).then(function(e){o("setTodos",e.data)}).catch(function(e){o("handleError",e)})},addTodo:function(e,t){var o=e.commit;e.dispatch;t.Completed=!1,h.post("todos",t).then(function(e){o("addTodo",e.data)}).catch(function(e){o("handleError",e)})},getAuth:function(e){var t=e.commit,o=e.dispatch;m("").then(function(e){if(null==e.data)return console.log("failed login"),d.a.push("/");null!==e.data.id?(console.log("successful login"),t("setLogged"),t("setInfo",e),o("getUserTodos",e.data.id)):console.log("login failed")}).catch(function(e){t("handleError",e),d.a.push("/")})},register:function(e,t){var o=e.commit,r=e.dispatch;m.post("",t).then(function(e){swal({title:"Account Created",text:"Logged in as "+e.data.username,timer:3e3}).then(function(){o("setLogged"),o("setInfo",e),r("getUserTodos",e.data.id)},function(e){})}).catch(function(e){swal({title:"Something went wrong",text:"Be sure you are using a valid email and that the password contains: 1 Uppercase, 1 Special Character, and 1 Number",timer:7e3}),o("handleError",e),d.a.push("/")})},login:function(e,t){var o=e.commit,r=e.dispatch;m.post("login",t).then(function(e){swal({title:"Logged in as",text:e.data.username,timer:2e3}).then(function(){o("setInfo",e),o("setLogged"),r("getUserTodos",e.data.id)},function(e){}).catch(function(e){o("handleError",e),d.a.push("/")})}).catch(function(e){swal({title:"Invalid Username or Password",timer:3e3}),o("handleError",e),d.a.push("/")})},logout:function(e){var t=e.commit;e.dispatch;m.delete("logout").then(function(e){t("setLogged"),t("clearState")}).catch(function(e){t("handleError",e),d.a.push("/")})}}});t.a=f},62:function(e,t){},64:function(e,t){},65:function(e,t,o){"use strict";function r(e){o(66)}Object.defineProperty(t,"__esModule",{value:!0});var a=o(67),n=o(68),i=o(19),c=r,s=i(a.a,n.a,!1,c,null,null);t.default=s.exports},66:function(e,t){},67:function(e,t,o){"use strict";t.a={mounted:function(){this.$store.dispatch("getAuth"),this.$store.dispatch("getQuote"),this.$store.commit("randoms")}}},68:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},a=[],n={render:r,staticRenderFns:a};t.a=n},8:function(e,t,o){"use strict";function r(e){return function(){return o(25)("./"+e+".vue")}}var a=o(2),n=o(24);a.a.use(n.a),t.a=new n.a({mode:"hash",scrollBehavior:function(){return{y:0}},routes:[{path:"/",component:r("Hello"),children:[{path:"todo",component:r("Todo")}]},{path:"*",component:r("Error404")}]})}},[20]);