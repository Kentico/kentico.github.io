(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,a){"use strict";a.r(t);var n=a(169),s=a(0),r=a.n(s),o=a(170),c=a.n(o),i=a(147),l=(a(48),a(7)),u=a.n(l),m=a(181),d=a(182),p=a(4),f=a.n(p),b=function(e){return r.a.createElement("section",{className:"first",style:{background:"#1C263F url("+e.backgroundImage.url+") bottom center no-repeat",minHeight:"700px",textAlign:"center"}},r.a.createElement("div",{className:"row-flex"},r.a.createElement("div",{className:"logo",style:{background:"url("+e.logo.url+") center center no-repeat"}},r.a.createElement("a",{href:"/"},r.a.createElement("span",null,"Kentico")))),r.a.createElement("div",{className:"row-flex"},r.a.createElement("h1",null,e.title),r.a.createElement("p",{className:"subtitle"},e.subtitle),r.a.createElement("a",{href:e.ctaUrl,className:"btn"},e.ctaText)))};b.propTypes={title:f.a.string,subtitle:f.a.string,ctaUrl:f.a.string,ctaText:f.a.string,logo:f.a.object,backgroundImage:f.a.object};var g=b,h=(a(146),a(76),function(e){var t=e.data.icons.filter(function(t){return t.persona[0].system.codename===e.currentPersona}).map(function(e){return r.a.createElement("div",{className:"box-33",key:e.system.codename},r.a.createElement("div",{className:"box-33"},r.a.createElement("img",{src:e.icon.assets[0].url,alt:""}),r.a.createElement("h3",null,e.title.text),r.a.createElement("p",null,e.subtitle.text)))}),a=e.data.section_info__title.text&&r.a.createElement("div",{className:"row-flex type"},r.a.createElement("div",{className:"box-100"},e.data.section_info__title.text)),n=e.personas.map(function(t){return r.a.createElement("span",{key:t.system.codename},r.a.createElement("input",{id:t.system.codename,value:t.system.codename,type:"radio",name:"tabs",onChange:function(t){return e.changePersona(t.target.value)},defaultChecked:e.currentPersona===t.system.codename}),r.a.createElement("label",{htmlFor:t.system.codename},t.name.text))});return r.a.createElement("section",{className:"second",id:"value-propositions",style:{background:"#151B31 url("+e.data.section_info__background_image.assets[0].url+") top center no-repeat"}},a,n,r.a.createElement("div",{id:"content1",className:"content"},r.a.createElement("div",{className:"row-flex"},t)))});h.propTypes={data:f.a.shape({section_info__title:f.a.object,section_info__background_image:f.a.object,icons:f.a.array}),currentPersona:f.a.string.isRequired,changePersona:f.a.func.isRequired,personas:f.a.arrayOf(f.a.shape({system:f.a.shape({codename:f.a.string.isRequired}),name:f.a.shape({text:f.a.string.isRequired})}))};var _=h,v=function(e){return r.a.createElement("section",{className:"fourth",id:"hacktoberfest",style:{background:"#582D40 url("+e.data.section_info__background_image.assets[0].url+") top center no-repeat"}},r.a.createElement("div",{className:"row-flex"},r.a.createElement("div",{className:"box-100"},r.a.createElement("img",{src:e.data.icon.assets[3].url,alt:"Hacktoberfest",className:"hacktoberfest"}),r.a.createElement("h2",null,e.data.section_info__title.text),r.a.createElement("h3",null,e.data.section_info__subtitle.text))),r.a.createElement("div",null,r.a.createElement("div",{className:"row-flex"},r.a.createElement("div",{className:"box-50 text"},r.a.createElement("div",{className:"brno",dangerouslySetInnerHTML:{__html:e.data.main_text.value},style:{background:"url("+e.data.icon.assets[4].url+") center left no-repeat",backgroundSize:"50px"}}))),r.a.createElement("div",{className:"row-flex"},r.a.createElement("div",{className:"box-100 partners"},r.a.createElement("img",{className:"logo-do",src:e.data.icon.assets[0].url,alt:""}),r.a.createElement("img",{className:"logo-git",src:e.data.icon.assets[1].url,alt:""}),r.a.createElement("img",{className:"logo-tw",src:e.data.icon.assets[2].url,alt:""})))))};v.propTypes={data:f.a.shape({section_info__title:f.a.object,section_info__subtitle:f.a.object,section_info__background_image:f.a.object,icon:f.a.object,main_text:f.a.object})};var y=v,x=a(152),E=a.n(x),k=a(153),w=a.n(k),N=(a(190),a(192),a(38),a(193),a(194),a(197),a(198),a(201),a(84),a(41),a(83),a(56),a(90),a(202),a(51),a(207)),j=a.n(N),S=(a(159),a(209)),C=a.n(S),P=a(210),q=a.n(P),I=a(246),T=a.n(I),R=new q.a({token:T()("N2E2NzJiOGExOTFlZWYwMmE0NmEyOTU2ZjJkM2U4ZDMyM2ViZDZmYQ==")}),F=function(){var e=C()(j.a.mark(function e(){var t,a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.getOrganization("Kentico"),e.next=3,t.getRepos();case 3:return a=e.sent,e.abrupt("return",a.data.filter(function(e){return!1===e.private}));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),O=function(){var e=C()(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t=e.sent,e.abrupt("return",t.length);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),K=function(){var e=C()(j.a.mark(function e(){var t,a,n,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={per_page:"100",page:"1"},a=R.getOrganization("Kentico"),e.next=4,a.listMembers(t);case 4:return n=e.sent,t.page=2,e.next=8,a.listMembers(t);case 8:return s=e.sent,e.abrupt("return",n.data.map(function(e){return e.login}).concat(s.data.map(function(e){return e.login})));case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),M=function(){var e=C()(j.a.mark(function e(){var t,a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.search({q:"org:Kentico type:pr is:merged is:public",sort:"created",order:"asc"}),e.next=3,t.forIssues(void 0);case 3:return a=e.sent,e.abrupt("return",a.data.length);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),H=function(){var e=C()(j.a.mark(function e(){var t,a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t=e.sent,a=new Set,n=t.map(function(e){return R.getRepo(e.owner.login,e.name).getContributors()}),e.next=7,Promise.all(n);case 7:return e.sent.forEach(function(e){e.data.map(function(e){return e.login}).forEach(function(e){a.add(e)})}),e.abrupt("return",a.size);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),G=function(){var e=C()(j.a.mark(function e(){var t,a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=R.search({q:"org:Kentico is:public fork:true topic:kentico-cloud",sort:"stars",order:"desc"}),e.next=3,t.forRepositories(void 0);case 3:return a=e.sent,e.abrupt("return",a.data.slice(0,3));case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),U=function(){var e=C()(j.a.mark(function e(){var t,a,n,s,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=["desana","ondrejsevcik"],e.next=3,K();case 3:return e.t0=t,a=e.sent.concat(e.t0),e.next=7,F();case 7:return n=e.sent,s={},r=n.map(function(e){return R.getRepo(e.owner.login,e.name).getContributors()}),e.next=12,Promise.all(r);case 12:return e.sent.forEach(function(e){var t=e.data,n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var o;if(n){if(r>=t.length)break;o=t[r++]}else{if((r=t.next()).done)break;o=r.value}var c=o;a.includes(c.login)||(s[c.login]?s[c.login].totalContributions+=c.contributions:s[c.login]={totalContributions:c.contributions,contributorInfo:Object.assign({},c)})}}),e.abrupt("return",Object.values(s).sort(function(e,t){return t.totalContributions-e.totalContributions}).slice(0,3));case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=C()(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=R.search({q:"org:Kentico type:issue is:public label:groomed state:open no:assignee language:"+t,sort:"updated",order:"desc"}),e.next=3,a.forIssues(void 0);case 3:return n=e.sent,e.abrupt("return",n.data.slice(0,3));case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),D=function(e){function t(t){var a;return(a=e.call(this,t)||this).getCountLabel=function(e){var t=r.a.createElement(w.a,{type:"ball-scale-ripple-multiple",active:!0,style:{transform:"scale(0.5)",width:"27px",height:"27px"}});switch(e){case"number_of_opensource_projects":return a.state.opensourceProjects.loading?t:a.state.opensourceProjects.count;case"merged_pull_requests":return a.state.mergedPullRequests.loading?t:a.state.mergedPullRequests.count;case"different_contributors":return a.state.differentContributors.loading?t:a.state.differentContributors.count;default:return"N/A"}},a.getIconUrlForPlatform=function(e){return a.props.platforms.filter(function(t){return t.system.codename===e})[0].icon.assets[0].url},a.getIconNameForPlatform=function(e){return a.props.platforms.filter(function(t){return t.system.codename===e})[0].icon.assets[0].name},a.getPlatformIcon=function(e){var t="default";switch(e){case"C#":t="csharp";break;case"Java":t="java_25fb270";break;case"Javascript":case"CSS":t="javascript";break;case"PHP":t="php_426b4b3";break;case"HTML":t="html"}return r.a.createElement("img",{src:a.getIconUrlForPlatform(t),alt:a.getIconNameForPlatform(t)})},a.getIconUrl=function(e){switch(e){case"number_of_opensource_projects":case"different_contributors":return"https://github.com/Kentico?utf8=%E2%9C%93&q=&type=public&language=";case"merged_pull_requests":return"https://github.com/pulls?q=org%3AKentico+is%3Apr+is%3Amerged+sort%3Acreated-desc";default:return"#"}},a.state={opensourceProjects:{loading:!0,count:0},mergedPullRequests:{loading:!0,count:0},differentContributors:{loading:!0,count:0},repositories:{loading:!0,data:void 0},contributors:{loading:!0,data:void 0}},a}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.openSourceCountSubscription=E()(O().then(function(t){return e.setState({opensourceProjects:{loading:!1,count:t}})})),this.mergedPullRequestsSubscription=E()(M().then(function(t){return e.setState({mergedPullRequests:{loading:!1,count:t}})})),this.contributorsCountSubscription=E()(H().then(function(t){return e.setState({differentContributors:{loading:!1,count:t}})})),this.topThreeReposSubscription=E()(G().then(function(t){return e.setState({repositories:{loading:!1,data:t}})})),this.contributorsSubscription=E()(U().then(function(t){return e.setState({contributors:{loading:!1,data:t}})}))},a.componentWillUnmount=function(){this.openSourceCountSubscription.cancelFetch(),this.mergedPullRequestsSubscription.cancelFetch(),this.contributorsCountSubscription.cancelFetch(),this.topThreeReposSubscription.cancelFetch(),this.contributorsSubscription.cancelFetch()},a.render=function(){var e=this,t=this.props.data.icons.map(function(t,a){var n=e.getCountLabel(t.system.codename);return r.a.createElement("div",{className:"box-33",key:a},r.a.createElement("a",{href:e.getIconUrl(t.system.codename)},r.a.createElement("img",{src:t.icon.assets[0].url,alt:""}),r.a.createElement("strong",null,n)," ",t.title.text))}),a=this.state.repositories.loading?r.a.createElement(w.a,{type:"ball-scale-ripple-multiple",active:!0,style:{transform:"scale(0.5)",width:"27px",height:"324px"}}):this.state.repositories.data.map(function(t){var a=e.getPlatformIcon(t.language);return r.a.createElement("div",{key:t.id,className:"person"},r.a.createElement("a",{href:t.html_url,className:"icon-widget"},a,r.a.createElement("p",null,r.a.createElement("strong",null,t.name),t.stargazers_count," stars",r.a.createElement("br",null),t.watchers_count," watchers"),r.a.createElement("div",{className:"clear"})))}),n=this.state.contributors.loading?r.a.createElement(w.a,{type:"ball-scale-ripple-multiple",active:!0,style:{transform:"scale(0.5)",width:"27px",height:"324px"}}):this.state.contributors.data.map(function(e){return r.a.createElement("div",{key:e.contributorInfo.login,className:"person"},r.a.createElement("a",{className:"icon-widget",href:e.contributorInfo.html_url},r.a.createElement("img",{src:e.contributorInfo.avatar_url,alt:"avatar of "+e.contributorInfo.login}),r.a.createElement("p",null,r.a.createElement("strong",null,e.contributorInfo.login),e.totalContributions," contributions"),r.a.createElement("div",{className:"clear"})))});return r.a.createElement("section",{className:"fifth",id:"our-projects",style:{background:"#2C3753 url("+this.props.data.section_info__background_image.assets[0].url+") bottom center no-repeat"}},r.a.createElement("div",{className:"row-flex"},r.a.createElement("div",{className:"box-100"},r.a.createElement("h2",null,this.props.data.section_info__title.text),r.a.createElement("h3",null,this.props.data.section_info__subtitle.text))),r.a.createElement("div",{className:"row-flex stats"},t),r.a.createElement("div",{className:"row-flex"},r.a.createElement("div",{className:"box-50"},a),r.a.createElement("div",{className:"box-50"},n)))},t}(s.Component);D.propTypes={data:f.a.shape({section_info__title:f.a.object,section_info__subtitle:f.a.object,section_info__background_image:f.a.object,icons:f.a.array}),platforms:f.a.array};var L=D,B=(a(53),function(e){function t(t){var a;return(a=e.call(this,t)||this).platformChanged=function(e){a.setState({platformSelection:e.target.value}),a.setState({issues:void 0}),a.issuesSubscription.push(E()(A(e.target.value).then(function(e){return a.setState({issues:e})})))},a.state={platformSelection:"all",issues:void 0},a}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.issuesSubscription=[],this.issuesSubscription.push(E()(A().then(function(t){return e.setState({issues:t})})))},a.componentWillUnmount=function(){this.issuesSubscription.forEach(function(e){return e.cancelFetch()})},a.render=function(){var e,t=this.props.data.platform_selector.map(function(e){return r.a.createElement("option",{key:e.codename.value,value:e.codename.value},e.name.value)}),a=this.props.data.steps.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("span",null,("0"+(t+1)).slice(-2),"/"),r.a.createElement("p",null,e.text.value))}),n=r.a.createElement(w.a,{type:"ball-scale-ripple-multiple",active:!0,style:{transform:"scale(1)",width:"50%",height:"300px",float:"right"}}),s=!1;this.state.issues&&(e=0==this.state.issues.length?r.a.createElement("li",null,"No issues"):this.state.issues.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:e.html_url},r.a.createElement("img",{src:e.user.avatar_url}),r.a.createElement("span",null,e.title),r.a.createElement("p",null,e.repository_url.match(/https:\/\/api\.github\.com\/repos\/(.*)/)[1])))}),s=!0);var o=r.a.createElement("select",{value:this.state.platformSelection,onChange:this.platformChanged},r.a.createElement("option",{value:"all",disabled:"",hidden:""},"All"),t),c=r.a.createElement("div",{className:"box-50 issues"},r.a.createElement("h3",null,r.a.createElement("a",{href:"https://github.com/Kentico?q=org:Kentico+type:issue+is:public+label:groomed+state:open+no:assignee+language:"+this.state.platformSelection+"&sort=updated&order=desc"},this.props.data.issues_label.value)),s?r.a.createElement("ul",null,e):n);return"developer"!==this.props.currentPersona?null:r.a.createElement("section",{className:"third",id:"task-list",style:{background:"#1C263F url("+this.props.data.section_info__background_image.assets[0].url+") bottom center no-repeat"}},r.a.createElement("div",{className:"row-flex"},r.a.createElement("h2",null,this.props.data.section_info__title.text)),r.a.createElement("div",{className:"row-flex"},r.a.createElement("div",{className:"box-100 buttons"},o)),r.a.createElement("div",{className:"row-flex"},r.a.createElement("div",{className:"box-50 steps"},r.a.createElement("h3",null,this.props.data.steps_label.value),a),"developer"===this.props.currentPersona&&c))},t}(s.Component));B.propTypes={data:f.a.shape({section_info__title:f.a.object,section_info__subtitle:f.a.object,section_info__background_image:f.a.object,platform_selector:f.a.array,steps_label:f.a.object,steps:f.a.array,issues_label:f.a.object}),currentPersona:f.a.string.isRequired};var J=B,z=function(e){switch(e.data.system.type){case"icons_section":return r.a.createElement(_,e);case"banner_section":return r.a.createElement(y,e);case"projects_and_contributors_section":return r.a.createElement(L,e);case"task_list_section":return r.a.createElement(J,e);default:return r.a.createElement("div",null,"Unknown section!")}};z.propTypes={data:f.a.object};var W=z,Y=function(e){return r.a.createElement("section",{className:"sixth",style:{background:"#1C263F url("+e.data.backgrounds[0].url+") top center no-repeat"}},r.a.createElement("div",{className:"row-flex links"},r.a.createElement("div",{className:"box-33",dangerouslySetInnerHTML:{__html:e.data.footer_left_column.value}}),r.a.createElement("div",{className:"box-33",dangerouslySetInnerHTML:{__html:e.data.footer_center_column.value}}),r.a.createElement("div",{className:"box-33 mobile-long-name",dangerouslySetInnerHTML:{__html:e.data.footer_right_column.value}})),r.a.createElement("div",{className:"row-flex"},r.a.createElement("div",{className:"box-100 copyright"},e.data.footer_bottom_text.text)))};Y.propTypes={data:f.a.shape({section_info__background_image:f.a.object,footer_left_column:f.a.object,footer_center_column:f.a.object,footer_right_column:f.a.object,footer_bottom_text:f.a.object,backgrounds:f.a.array})};var Q=Y,Z=function(e){function t(t){var a;return(a=e.call(this,t)||this).changePersona=function(e){a.setState({currentPersona:e})},a.state={currentPersona:"developer"},a}return u()(t,e),t.prototype.render=function(){var e=this;return r.a.createElement(i.StaticQuery,{query:"1931504680",render:function(t){var a=t.allKenticoCloudItemSectionsPage.edges[0].node,n=e.state.currentPersona,s=a.sections.map(function(t,s){return r.a.createElement(W,{key:s,data:t,personas:a.personas,platforms:a.platforms,currentPersona:n,changePersona:e.changePersona})}),o=r.a.createElement("div",{style:{background:"url("+a.backgrounds.assets[1].url+") center center no-repeat",position:"absolute",width:"55px",height:"55px",padding:"15px",right:"0",top:"0",zIndex:"500"}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{menuOpenButton:o,menuCloseButton:o,largeMenuClassName:"large-nav",smallMenuClassName:"small-nav",changeMenuOn:"750px",menu:r.a.createElement("ul",{id:"nav"},r.a.createElement("li",null,r.a.createElement("a",{href:"#value-propositions"},"Value Propositions")),r.a.createElement("li",null,r.a.createElement("a",{href:"#hacktoberfest"},"Hacktoberfest")),r.a.createElement("li",null,r.a.createElement("a",{href:"#our-projects"},"Our Projects & Contributors")))}),r.a.createElement(g,{title:a.title.text,subtitle:a.subtitle.text,ctaText:a.cta__text.text,ctaUrl:a.cta__url.text,logo:a.logo.assets[0],backgroundImage:a.background_image.assets[0]}),s,r.a.createElement(Q,{data:{footer_left_column:a.footer_left_column,footer_center_column:a.footer_center_column,footer_right_column:a.footer_right_column,footer_bottom_text:a.footer_bottom_text,backgrounds:a.backgrounds.assets}}))},data:m})},t}(s.Component);a(247),t.default=function(){return r.a.createElement(i.StaticQuery,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Official site for Kentico developer community. General guidepost for people who are interested in the open-source, especially around Kentico open-source projects."},{name:"keywords",content:"developer, community, kentico, kenticocloud, headless, cms, open-source"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(Z,null))},data:n})}},147:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),s=a.n(n),r=a(4),o=a.n(r),c=a(143),i=a.n(c);a.d(t,"Link",function(){return i.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(151),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(46);a.d(t,"parsePath",function(){return m.a});var d=s.a.createContext({}),p=function(e){return s.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(180))&&n.default||n},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Developer Community"}}}}},180:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),s=a.n(n),r=a(4),o=a.n(r),c=a(70),i=a(2),l=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return s.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},181:function(e){e.exports={data:{allKenticoCloudItemSectionsPage:{edges:[{node:{title:{text:"Kentico Developer Community"},subtitle:{text:"We help developers help each other"},cta__text:{text:"Get a T-Shirt!"},cta__url:{text:"#hacktoberfest"},logo:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/679241e2-9868-433d-bd5f-899abd2283d9/kentico-logo.svg"}]},background_image:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/1653b0d8-c498-47dc-ba84-da36ccc06b9b/bg-001.jpg"}]},personas:[{system:{codename:"developer"},name:{text:"Developer"}},{system:{codename:"company"},name:{text:"Company"}},{system:{codename:"blogger"},name:{text:"Blogger"}}],sections:[{system:{id:"1e40d644-21af-4186-80ae-569c2ce5ddaf",type:"icons_section"},section_info__title:{text:"I am a"},section_info__subtitle:{text:""},section_info__persona:[{system:{codename:"developer"}},{system:{codename:"company"}},{system:{codename:"blogger"}}],section_info__background_image:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/99de30e5-0801-4772-a07d-70231fe10104/bg-002.jpg"}]},icons:[{system:{codename:"build_up_your_reputation"},title:{text:"Build up Your Reputation"},subtitle:{text:"Community reputation is a strong argument when applying for a new job!"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/82245af9-23d9-46df-a530-ee63030ba400/ico-developer-1.svg"}]},persona:[{system:{codename:"developer"}}]},{system:{codename:"embrace_innovation"},title:{text:"Embrace Innovation"},subtitle:{text:"Build tools and integrations using cutting-edge technologies."},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/3c1c3108-13ea-45ac-8160-14c2599fd231/ico-developer-2.svg"}]},persona:[{system:{codename:"developer"}}]},{system:{codename:"improve_your_skills"},title:{text:"Improve Your Skills"},subtitle:{text:"Challenge yourself and learn something new!"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/dcc78e31-87fe-4d38-9a61-3735a00b6aee/ico-developer-3.svg"}]},persona:[{system:{codename:"developer"}}]},{system:{codename:"educate_your_employees"},title:{text:"Educate Your Employees"},subtitle:{text:"This is a great opportunity for personal growth of your employees."},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/dd8ff2c6-d977-4d70-8317-2303dac01d36/ico-company-1.svg"}]},persona:[{system:{codename:"company"}}]},{system:{codename:"increase_awarness"},title:{text:"Increase Awarness"},subtitle:{text:"Being present on GitHub helps you increase your reach."},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/6a5941e5-7b28-43ea-b536-b3d2c62049e7/ico-company-2.svg"}]},persona:[{system:{codename:"company"}}]},{system:{codename:"become_a_leader"},title:{text:"Become a Leader"},subtitle:{text:"Companies that contribute to open source are often perceived as market leaders."},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/4a62bb98-82de-4ae2-a058-b379cbdf901b/ico-company-3.svg"}]},persona:[{system:{codename:"company"}}]},{system:{codename:"get_first_hand_guidance"},title:{text:"Get First-hand Guidance"},subtitle:{text:"Get first-hand guidance"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/1e25eb0e-b054-48fe-876e-7f84c9f09b32/ico-blogger-1.svg"}]},persona:[{system:{codename:"blogger"}}]},{system:{codename:"get_promoted"},title:{text:"Get Promoted"},subtitle:{text:"We'll help promote content that you create."},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/8e3e0bc1-9aa1-448d-bcb2-1d643cef2aad/ico-blogger-2.svg"}]},persona:[{system:{codename:"blogger"}}]},{system:{codename:"become_a_recognized_thought_leader"},title:{text:"Become a Recognized Thought Leader"},subtitle:{text:"You could be the ONE who shows the path"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/bd9b5100-e342-431f-bae5-6b87e2b867db/ico-blogger-3.svg"}]},persona:[{system:{codename:"blogger"}}]}],url_link:null,url_text:null,icon:null,main_text:null,platform_selector:null,steps_label:null,steps:null,issues_label:null},{system:{id:"6201603b-ef16-46dd-b6fe-97024563100a",type:"task_list_section"},section_info__title:{text:"What would you like to help the community with?"},section_info__subtitle:{text:""},section_info__persona:[{system:{codename:"developer"}}],section_info__background_image:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/d90afd13-2f53-4213-a97d-158dcd51be93/bg-003.jpg"}]},icons:null,url_link:null,url_text:null,icon:null,main_text:null,platform_selector:[{name:{value:"JavaScript"},codename:{value:"javascript language:css"}},{name:{value:"TypeScript"},codename:{value:"typescript"}},{name:{value:"C#"},codename:{value:"C#"}},{name:{value:"Swift"},codename:{value:"swift"}},{name:{value:"Java"},codename:{value:"java"}},{name:{value:"PHP"},codename:{value:"php"}},{name:{value:"Html"},codename:{value:"html"}}],steps_label:{value:"Easy steps to get started"},steps:[{text:{value:"Go to GitHub and pick an issue from your favourite stack."}},{text:{value:"Work with our Developer Advocates to implement the issue."}},{text:{value:"Submit a pull request and become part of Kentico Community!"}}],issues_label:{value:"Issues"}},{system:{id:"f1f85583-65b7-4aae-aa4f-d3923f8e93f7",type:"banner_section"},section_info__title:{text:"What is Hacktoberfest?"},section_info__subtitle:{text:"Submit 5 pull requests and get a T-shirt!"},section_info__persona:[{system:{codename:"developer"}}],section_info__background_image:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/4594c4df-94a1-4a6d-842c-fb443888afba/bg-004.jpg"}]},icons:null,url_link:{text:"https://hacktoberfest.digitalocean.com"},url_text:{text:"more"},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/f976edb0-5336-4bc8-b2ce-b94ab60f316c/logo-digital-ocean.svg"},{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/8ea90800-9734-4401-926e-7edfe6f06f92/logo-github.svg"},{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/5af79fc8-0b21-4cca-b2b1-48b8c5342a40/logo-twilio.svg"},{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/bd6538e4-ef36-46ec-bcf7-5b686577913a/hacktoberfest.svg"},{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/0a4c1849-4263-4834-93e1-0a89848099f1/ico-contributors-3.svg"}]},main_text:{value:'<p><a href="https://hacktoberfest-event-brno-2018.herokuapp.com/leaderboard"><strong>See our Hacktoberfest challenge progress!</strong></a></p>'},platform_selector:null,steps_label:null,steps:null,issues_label:null},{system:{id:"c7f629ee-6138-40c7-baf4-e6fdde7f3081",type:"projects_and_contributors_section"},section_info__title:{text:"Our Projects And Contributors"},section_info__subtitle:{text:"You Make A Difference"},section_info__persona:[{system:{codename:"developer"}}],section_info__background_image:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/819248f4-1553-4352-a6c9-c12371017fac/bg-005.jpg"}]},icons:[{system:{codename:"number_of_opensource_projects"},title:{text:"Open-source Projects"},subtitle:{text:""},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/9e7bd91d-4622-42e2-86d3-52838eb47d63/ico-contributors-1.svg"}]},persona:[]},{system:{codename:"merged_pull_requests"},title:{text:"Merged Pull Request"},subtitle:{text:""},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/caefcf7d-7f66-4c89-b698-2668c27a64f3/ico-contributors-2.svg"}]},persona:[]},{system:{codename:"different_contributors"},title:{text:"Different contributors"},subtitle:{text:""},icon:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/0a4c1849-4263-4834-93e1-0a89848099f1/ico-contributors-3.svg"}]},persona:[]}],url_link:null,url_text:null,icon:null,main_text:null,platform_selector:null,steps_label:null,steps:null,issues_label:null}],backgrounds:{assets:[{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/16d9e681-d15c-43c5-ade1-91d6bd88059e/bg-006.jpg"},{url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/21f6712e-2c36-4b1c-8c42-ff794a06009e/hamburger-menu.svg"}]},platforms:[{system:{codename:"java_25fb270"},icon:{assets:[{name:"java_logo.svg",url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/be1a055b-8a4a-4741-b050-00dc7ce37948/java_logo.svg"}]}},{system:{codename:"javascript"},icon:{assets:[{name:"Javascript._logo.svg",url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/3952d4d3-0561-4c59-b3c7-321bb306d102/Javascript._logo.svg"}]}},{system:{codename:"php_426b4b3"},icon:{assets:[{name:"PHP_logo.svg",url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/bca306a4-cfd2-4be5-a4b8-506955e2d77e/PHP_logo.svg"}]}},{system:{codename:"csharp"},icon:{assets:[{name:"cSharp_logo.png",url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/2e94ea58-ef3a-4480-b94b-9b3590b3e2ec/cSharp_logo.png"}]}},{system:{codename:"html"},icon:{assets:[{name:"html_logo.png",url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/743c517c-6b4c-4cb2-8ca5-992f4ee3aadd/html_logo.png"}]}},{system:{codename:"default"},icon:{assets:[{name:"github_logo.png",url:"https://assets-us-01.kc-usercontent.com:443/1bb2313f-2550-0025-06d9-f3e5065607c0/5886e0f1-f6c7-4774-bc48-97d7b5f968bb/github_logo.png"}]}}],footer_left_column:{value:'<ul>\n  <li><a href="https://github.com/Kentico"><strong>Github</strong></a></li>\n  <li><a href="https://github.com/Kentico/Home/blob/master/CODE_OF_CONDUCT.md">Code of conduct</a></li>\n  <li><a href="https://github.com/Kentico/Home/blob/master/CONTRIBUTING.md">Contributions Guidelines</a></li>\n</ul>'},footer_center_column:{value:'<ul>\n  <li><a href="https://developer.kenticocloud.com/docs"><strong>Documentation</strong></a></li>\n  <li><a href="https://developer.kenticocloud.com/docs"><strong>Forums</strong></a></li>\n  <li><a href="https://stackoverflow.com/questions/tagged/kentico"><strong>StackOverflow</strong></a></li>\n</ul>'},footer_right_column:{value:"<p><strong>Contacts:</strong></p>\n<p>developerscommunity@kentico.com</p>"},footer_bottom_text:{text:"© 2004-2018 Kentico Software. All Rights Reserved."}}}]}}}},247:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-d4e7a909d2aa6cea3ab9.js.map