(this.webpackJsonpformatter=this.webpackJsonpformatter||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),o=n.n(c),l=(n(14),n(6)),u=n(1),i=n(2),s=n(4),p=n(3),m=(n(15),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group",id:"inputText"},r.a.createElement("div",{className:"input-group-prepend"}),r.a.createElement("textarea",{id:"inputSQL",className:"form-control",onChange:this.props.onChange,placeholder:"Input SQL Query here!"}))}}]),n}(a.Component)),d=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group",id:"outputText"},r.a.createElement("div",{className:"input-group-prepend"}),r.a.createElement("textarea",{className:"form-control",id:"outputSQL",placeholder:"Formatted SQL will appear here!"}))}}]),n}(a.Component),h=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"SQLFormatter"))}}]),n}(a.Component),f=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("button",{className:"btn btn-warning btn-lg ",id:"formatBtn",onClick:this.props.onClick},"Format!")}}]),n}(a.Component),v=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inpValue:""},e.handleChange=function(){var t=document.getElementById("inputSQL").value;console.log(t),e.setState({inpValue:t})},e.handleSubmit=function(){var t=e.state.inpValue;console.log(t.length);var n=e.formatText(t);console.log(n),document.getElementById("outputSQL").value=n},e.tokenize=function(e,t,n){for(var a,r,c,o=[];e;){for(var l in c=null,a=e.length,t)(r=t[l].exec(e))&&r.index<a&&(c={token:r[0],type:l,matches:r.slice(1)},a=r.index);a&&o.push({token:e.substr(0,a),type:n||"unknown"}),c&&o.push(c),e=e.substr(a+(c?c.token.length:0))}return o},e.formatText=function(t){var n=e.tokenize(t,{word:/\w+/},"invalid"),a=Object(l.a)(n.filter((function(e){return"word"===e.type})));console.log(a);for(var r="",c=0;c<a.length;c++)r=r.concat(a[c].token).concat("\n");return r},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("div",{className:"container-fluid",id:"container"},r.a.createElement(m,{onChange:this.handleChange}),r.a.createElement(f,{onClick:this.handleSubmit}),r.a.createElement(d,null)))}}]),n}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.94e8e218.chunk.js.map