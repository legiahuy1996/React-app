(this.webpackJsonpmarioplan=this.webpackJsonpmarioplan||[]).push([[0],{218:function(e,t,a){e.exports=a(412)},223:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(90),i=a.n(c),l=(a(223),a(5)),s=a(32),o=a(7),u=Object(o.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials))))})),m=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(l.c,{to:"/signin"},"Login")))},d=Object(o.b)((function(e){return console.log(e),{auth:e.firebase.auth,authIsLoaded:e.firebase.auth&&e.firebase.auth.isLoaded,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.authIsLoaded,n=e.profile,c=t.uid?r.a.createElement(u,{profile:n}):r.a.createElement(m,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(l.b,{to:"/",className:"brand-logo"},"MarioPlan"),a?c:r.a.createElement("span",null)))})),h=a(26),p=a(27),f=a(30),E=a(28),b=a(31),g=a(216),N=a.n(g),v=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title "},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},N()(t.createAt.toDate()).calendar())))},j=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(l.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(v,{project:e}))})))},O=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"}))}))))))},y=a(24),C=a(14),S=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.authIsLoaded,c=e.notifications;return console.log("notifications : ",c),a.uid?n?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(j,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(O,{notifications:c})))):r.a.createElement("span",null):r.a.createElement(s.a,{to:"/signin"})}}]),t}(n.Component),w=Object(C.d)(Object(o.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,authIsLoaded:e.firebase.auth&&e.firebase.auth.isLoaded,notifications:e.firestore.ordered.notifications}})),Object(y.firestoreConnect)((function(){return["projects",{collection:"notifications",limit:3}]})))(S),I=Object(C.d)(Object(o.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n&&n[a],auth:e.firebase.auth}})),Object(y.firestoreConnect)((function(){return["projects"]})))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,"7th December , 7am")))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(s.a,{to:"/signin"})})),F=a(29),L=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(F.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authErr,a=e.auth,n=e.authIsLoaded;return a.uid?r.a.createElement(s.a,{to:"/"}):n?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login")),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))):r.a.createElement("span",null)}}]),t}(n.Component),P=Object(o.b)((function(e){return{authErr:e.auth.authError,auth:e.firebase.auth,authIsLoaded:e.firebase.auth&&e.firebase.auth.isLoaded}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_FAIL",err:t})}))}));var a}}}))(L),R=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(F.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authIsLoaded;return t.uid?r.a.createElement(s.a,{to:"/"}):a?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up")))):r.a.createElement("span",null)}}]),t}(n.Component),x=Object(o.b)((function(e){return{auth:e.firebase.auth,authIsLoaded:e.firebase.auth&&e.firebase.auth.isLoaded}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){return t({type:"SIGNUP_SUCCESS"})})).catch((function(e){return t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(R),k=a(40),U=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(F.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state)},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create a New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"title"},"Project Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"content"},"Project Content")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1"},"Create")))):r.a.createElement(s.a,{to:"/signin"})}}]),t}(n.Component),A=Object(o.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=n.getFirestore,c=a().firebase.profile,i=a().firebase.auth.uid;console.log(c),r().collection("projects").add(Object(k.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorID:i,createAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(U);var _=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:w}),r.a.createElement(s.b,{path:"/project/:id",component:I}),r.a.createElement(s.b,{path:"/Signin",component:P}),r.a.createElement(s.b,{path:"/SignUp",component:x}),r.a.createElement(s.b,{path:"/Create",component:A}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login success"),Object(k.a)({},e,{authError:null});case"LOGIN_FAIL":return console.log("login failed"),Object(k.a)({},e,{authError:"login failed"});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(k.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(k.a)({},e,{authError:t.err.message});default:return e}},z={projects:[{id:"1",title:"help me find the peach",content:"blah blah blah"},{id:"2",title:"collect all the start",content:"blah blah blah"},{id:"3",title:"egg hunt with Huy",content:"blah blah blah"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("create project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},J=a(51),W=Object(C.c)({auth:G,project:D,firestore:J.firestoreReducer,firebase:y.firebaseReducer}),B=a(217),M=a(52),q=a.n(M);a(212),a(213);q.a.initializeApp({apiKey:"AIzaSyBWJpG59w0di8qmyy5KUlp9IQP-3uMq3X0",authDomain:"huy-marioplan.firebaseapp.com",databaseURL:"https://huy-marioplan.firebaseio.com",projectId:"huy-marioplan",storageBucket:"huy-marioplan.appspot.com",messagingSenderId:"895820309747",appId:"1:895820309747:web:711eb836fca0996374c386",measurementId:"G-8M0QTHCT12"});var H=q.a,K=(a(413),a(410),Object(C.e)(W,Object(C.d)(Object(C.a)(B.a.withExtraArgument({getFirestore:J.getFirestore,getFirebase:y.getFirebase})),Object(J.reduxFirestore)(q.a,H)))),Q={firebase:q.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:K.dispatch,createFirestoreInstance:J.createFirestoreInstance};i.a.render(r.a.createElement(o.a,{store:K},r.a.createElement(y.ReactReduxFirebaseProvider,Q,r.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[218,1,2]]]);
//# sourceMappingURL=main.462b1c12.chunk.js.map