(this["webpackJsonpyoutube-simple"]=this["webpackJsonpyoutube-simple"]||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s(1),n=s.n(r),i=s(17),c=s.n(i),o=s(8),l=s.n(o),d=s(18),u=s(3),p=s(4),h=s(6),j=s(5),m=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.search(e.state.term)},e.onInputChange=function(t){e.setState({term:t.target.value})},e}return Object(p.a)(s,[{key:"render",value:function(){return Object(a.jsx)("form",{onSubmit:this.onFormSubmit,children:Object(a.jsx)("div",{className:"ui form",style:{marginTop:"1rem"},children:Object(a.jsx)("div",{className:"field",children:Object(a.jsx)("input",{value:this.state.term,onChange:this.onInputChange,type:"text",id:"term",placeholder:"Search for Video"})})})})}}]),s}(n.a.Component),b=s(19),v=s.n(b).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{key:"AIzaSyBQ0KSE6oMl8IIrahSqODPd90faGRYsZrY",part:"snippet",maxResults:5}}),O=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(u.a)(this,s);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).getVideodetail=function(){return e.props.selected?Object(a.jsxs)(n.a.Fragment,{children:[Object(a.jsx)("div",{className:"ui embed",children:Object(a.jsx)("iframe",{title:e.props.selected.snippet.title,src:"https://www.youtube.com/embed/".concat(e.props.selected.id.videoId)})}),Object(a.jsxs)("div",{className:"ui segment",children:[Object(a.jsx)("h4",{className:"ui header",children:e.props.selected.snippet.title}),Object(a.jsx)("p",{children:e.props.selected.snippet.description})]})]}):null},e}return Object(p.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{children:this.getVideodetail()})}}]),s}(n.a.Component),f=(s(44),function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(p.a)(s,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"video-item item",onClick:function(){return e.props.updateSelected(e.props.video)},children:[Object(a.jsx)("img",{alt:this.props.video.snippet.title,className:"ui image",src:this.props.video.snippet.thumbnails.medium.url}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("div",{className:"header",children:this.props.video.snippet.title})})]})}}]),s}(n.a.Component)),x=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(p.a)(s,[{key:"render",value:function(){var e=this;return console.log(this.props),Object(a.jsx)("div",{className:"ui relaxed divided list",children:this.props.videos.map((function(t){return Object(a.jsx)(f,{video:t,updateSelected:e.props.updateSelected},t.id.videoId)}))})}}]),s}(n.a.Component),y=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(u.a)(this,s);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={videos:[],searchSubmitted:!1,start:!0,selected:null},e.search=function(){var t=Object(d.a)(l.a.mark((function t(s){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({searchSubmitted:!0}),t.prev=1,t.next=4,v.get("/search",{params:{q:s}});case 4:a=t.sent,e.setState({videos:a.data.items,searchSubmitted:!1,start:!1,selected:a.data.items[0]}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.updateSelected=function(t){e.setState({selected:t})},e.getVideoDisplay=function(){return e.state.searchSubmitted?Object(a.jsx)("div",{style:{marginTop:"2rem"},className:"ui active centered inline loader"}):e.state.start?null:e.state.start||0!==e.state.videos.length?Object(a.jsxs)("div",{className:"ui grid container",style:{marginTop:"1rem"},children:[Object(a.jsx)("div",{className:"eleven wide column",children:Object(a.jsx)(O,{selected:e.state.selected})}),Object(a.jsx)("div",{className:"five wide column",style:{height:"1vh",scrollBehavior:"auto"},children:Object(a.jsx)(x,{videos:e.state.videos,updateSelected:e.updateSelected})})]}):Object(a.jsx)("div",{style:{color:"red",fontSize:"2rem",marginTop:"1rem"},children:"OOPS,NO VIDEOS FOUND!"})},e}return Object(p.a)(s,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"ui container",children:[Object(a.jsx)(m,{search:this.search}),this.getVideoDisplay()]})}}]),s}(n.a.Component);c.a.render(Object(a.jsx)(y,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.dd6449c7.chunk.js.map