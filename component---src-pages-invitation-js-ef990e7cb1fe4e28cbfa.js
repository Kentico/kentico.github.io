(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(t,e,n){"use strict";n.r(e);n(90);var a=n(358),o=n(0),i=n.n(o),r=n(155),c=n(7),s=n.n(c),u=n(4),l=n.n(u),g=n(157),p=(n(359),function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){var t="https://github.com/login/oauth/authorize?client_id="+g.c+"&scope="+g.d+"&redirect_uri="+g.b;return i.a.createElement("div",{className:"invitation",style:{background:'url("'+this.props.backgroundUrl+'")\n         center \n         bottom \n         no-repeat\n         rgb(28, 38, 63)'}},i.a.createElement("div",{className:"organization-logo"},i.a.createElement("a",{href:this.props.organizationUrl},i.a.createElement("img",{alt:"Organization logo",src:this.props.organizationLogoUrl}))),i.a.createElement("h1",null,this.props.invitationText),i.a.createElement("a",{className:"btn",href:t},this.props.confirmationButtonText))},e}(o.Component));p.propTypes={organization:l.a.string,invitationText:l.a.string,confirmationButtonText:l.a.string,organizationLogoUrl:l.a.string,organizationUrl:l.a.string,backgroundUrl:l.a.string};var d=p;n(360),e.default=function(){return i.a.createElement(r.b,{query:"3313670906",render:function(t){var e=t.kenticoCloudItemInvitationPage.elements,n=e.invitation_title.text,a=e.confirmation_button_text.text,o=e.organization_logo,r=e.background.assets,c=o[0].elements,s=c.image.assets,u=c.image_url.text,l=u.split("/").pop();return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{organization:l,invitationText:n,confirmationButtonText:a,organizationLogoUrl:s[0].url,organizationUrl:u,backgroundUrl:r[0].url}))},data:a})}},152:function(t,e,n){var a;t.exports=(a=n(156))&&a.default||a},155:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=n(33),s=n.n(c);n.d(e,"a",function(){return s.a});n(152);var u=o.a.createContext({}),l=function(t){return o.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},156:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),c=n(57),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return n?o.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=u},157:function(t){t.exports={a:"DefaultEndpointsProtocol=https;AccountName=communitypagegithubdata;AccountKey=+Lj4+s9CtKw9LGhT/EGiwUGGfmRoCgDMjEhsKAiGSkveOzJQQCrlOpbwD+JVvvClTt/19OwMRgfARxo7Lo1Kmw==;EndpointSuffix=core.windows.net",e:"https://loadgithubdatadcpage.azurewebsites.net/api/inviteToKenticoGithubRepository",b:"https://kentico.github.io/invitation/callback",c:"1f286d5a9ce35c9183c4",d:"read:user%20user:email"}},358:function(t){t.exports={data:{kenticoCloudItemInvitationPage:{elements:{invitation_title:{text:"Join Kentico GitHub community!"},confirmation_button_text:{text:"Request Invitation"},organization_logo:[{elements:{image:{assets:[{name:"Octocat.png",url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/72270556-65bc-4771-a350-131ed7d19f1e/Octocat.png"}]},image_url:{text:"https://github.com/Kentico"}}}],background:{assets:[{name:"bg-001.jpg",url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/1653b0d8-c498-47dc-ba84-da36ccc06b9b/bg-001.jpg"}]}}}}}}}]);
//# sourceMappingURL=component---src-pages-invitation-js-ef990e7cb1fe4e28cbfa.js.map