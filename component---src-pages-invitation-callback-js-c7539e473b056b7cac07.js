(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);a(34),a(76);var n=a(7),r=a.n(n),i=a(361),s=a(0),o=a.n(s),c=a(4),l=a.n(c),u=a(155),d=a(362),m=a.n(d),g=a(157),p=a(365),h=a.n(p),b=a(162),f=a.n(b),v=a(385),E=a.n(v),y=(a(386),function(e){function t(t){var a;a=e.call(this,t)||this;var n={loading:!0,error:!1,message:"",additionalMessage:""},r=m.a.parse(t.location.search,{ignoreQueryPrefix:!0}).code;return r?h.a.get(g.e+"?code="+r).then(function(e){a.setState({loading:!1,message:e.data})}).catch(function(e){a.setState({error:!0,loading:!1,message:"An error occurred when sending invitation request.",additionalMessage:JSON.stringify(e,void 0,2)})}):n=Object.assign({},n,{error:!0,loading:!1,message:"This page is used for invitation callback."}),a.state=n,a}return r()(t,e),t.prototype.render=function(){var e=o.a.createElement("ul",{className:"navigation"},o.a.createElement("li",null,o.a.createElement(u.a,{to:"/invitation"},"Go to Invitation page")),o.a.createElement("li",null,o.a.createElement(u.a,{to:"/"},"Go to Home page"))),t=o.a.createElement("div",{className:"success"},o.a.createElement("h1",null,"Success"),o.a.createElement("div",null,this.state.message),o.a.createElement("a",{className:"btn",href:"https://github.com/orgs/Kentico/invitation"},"Accept the invitation here"),e);return this.state.loading&&(t=o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{type:"ball-scale-ripple-multiple",active:!0,className:"loader"}),o.a.createElement("div",null,o.a.createElement("h1",null,"Loading")))),this.state.error&&(t=o.a.createElement("div",{className:"error"},o.a.createElement("h1",null,"Error"),o.a.createElement("div",{className:"message"},this.state.message),this.state.additionalMessage&&o.a.createElement(E.a,{trigger:"Details",triggerClassName:"error-trigger",triggerOpenedClassName:"error-trigger"},o.a.createElement("pre",null,this.state.additionalMessage)),e)),o.a.createElement(u.b,{query:"921235054",render:function(e){var a=e.kenticoCloudItemInvitationPage.elements.background.assets;return o.a.createElement("div",{className:"invitation-callback",style:{background:'url("'+a[0].url+'")\n                  center \n                  bottom \n                  no-repeat\n                  rgb(28, 38, 63)'}},o.a.createElement("div",{className:"callback-content"},t))},data:i})},t}(s.Component));y.propTypes={location:l.a.object},t.default=y},152:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(152);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(57),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},157:function(e){e.exports={a:"DefaultEndpointsProtocol=https;AccountName=communitypagegithubdata;AccountKey=+Lj4+s9CtKw9LGhT/EGiwUGGfmRoCgDMjEhsKAiGSkveOzJQQCrlOpbwD+JVvvClTt/19OwMRgfARxo7Lo1Kmw==;EndpointSuffix=core.windows.net",e:"https://loadgithubdatadcpage.azurewebsites.net/api/inviteToKenticoGithubRepository",b:"https://kentico.github.io/invitation/callback",c:"1f286d5a9ce35c9183c4",d:"read:user%20user:email"}},361:function(e){e.exports={data:{kenticoCloudItemInvitationPage:{elements:{background:{assets:[{name:"bg-001.jpg",url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/1653b0d8-c498-47dc-ba84-da36ccc06b9b/bg-001.jpg"}]}}}}}}}]);
//# sourceMappingURL=component---src-pages-invitation-callback-js-c7539e473b056b7cac07.js.map