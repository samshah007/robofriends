(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(7),o=n.n(a),i=(n(13),n(2)),h=n(3),l=n(5),b=n(4),d=function(e){var t=e.id,n=e.name,c=e.email;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots",title:""}),Object(r.jsxs)("div",{className:"center content-center",children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:c})]})]})},j=function(e){var t=e.robots.map((function(e){return Object(r.jsx)(d,{id:e.id,name:e.name,email:e.email},e.id)}));return Object(r.jsx)("div",{children:t})},u=function(e){var t=e.onSearchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},f=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",height:"800px",border:"5px solid black"},children:e.children})},O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={hasError:!1},e}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Opps..This is not good."}):this.props.children}}]),n}(s.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value.toLowerCase()})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n)}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"Robofriends"}),Object(r.jsx)(u,{onSearchChange:this.onSearchChange}),Object(r.jsx)(f,{children:Object(r.jsx)(O,{children:Object(r.jsx)(j,{robots:c})})})]}):Object(r.jsx)("div",{className:"tc",children:Object(r.jsx)("h1",{children:"Loading..."})})}}]),n}(c.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(14);o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.845ab713.chunk.js.map