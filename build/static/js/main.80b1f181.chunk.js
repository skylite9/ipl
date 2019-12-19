(this["webpackJsonpipl-auction-app"]=this["webpackJsonpipl-auction-app"]||[]).push([[0],{40:function(e,a,t){e.exports=t(52)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=(t(45),t(35)),i=(t(46),t(21)),s=t(14),m=t(30),p=t(31),u=t(36),d=t(90),h=t(99),g=t(85),E=t(88),y=t(86),f=t(89),b=t(82),v=t(91),k=t(87),w=t(92),P=(t(47),t(100)),S=t(94),T=t(98),C=t(97),_=t(93),x=t(95),N=t(96),j=t(37),M=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).handleOpen=function(){t.setState({showTeamPlayerModal:!0})},t.handleClose=function(){t.setState({showTeamPlayerModal:!1})},t.getTeamPlayerDetails=function(e){fetch(encodeURI("https://vast-earth-90578.herokuapp.com/getTeamsDetails/"+e)).then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({teamPlayerDetails:e,showTeamPlayerModal:!0})}))},t.state={teamStats:[],showTeamPlayerModal:!1,teamPlayerDetails:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://vast-earth-90578.herokuapp.com/getTeamsStats").then((function(e){return e.json()})).then((function(a){console.log(a);var t=a.map((function(a){return r.a.createElement(b.a,{item:!0,key:a,xs:12,sm:6,md:4},r.a.createElement(g.a,{className:e.props.classes.card},r.a.createElement(y.a,{className:e.props.classes.cardContent},r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},a.team_name),r.a.createElement(k.a,null,"Player Count: ",a.player_count||"NA"),r.a.createElement(k.a,null,"Average Player Rating: ",a.player_rating?parseInt(a.player_rating):"NA"),r.a.createElement(k.a,null,"Cash in Hand: ",a.player_price)),r.a.createElement(E.a,null,r.a.createElement(h.a,{size:"small",color:"primary",onClick:function(){e.getTeamPlayerDetails(a.team_name)}},"View"))))}));e.setState({teamStats:t})})).catch((function(e){console.log("error occurred",e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null),r.a.createElement(d.a,{position:"relative"},r.a.createElement(v.a,null,r.a.createElement(k.a,{variant:"h6",color:"inherit",noWrap:!0},"IPL Auction"))),r.a.createElement("main",null,r.a.createElement(w.a,{className:this.props.classes.cardGrid,maxWidth:"md"},r.a.createElement(b.a,{container:!0,spacing:4},this.state.teamStats)),r.a.createElement(w.a,null,r.a.createElement(P.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.showTeamPlayerModal,onClose:this.handleClose},r.a.createElement("div",{style:this.props.modalStyle,className:this.props.classes.paper},r.a.createElement(_.a,{component:j.a},r.a.createElement(S.a,{className:this.props.classes.table,size:"small","aria-label":"a dense table"},r.a.createElement(x.a,null,r.a.createElement(N.a,null,r.a.createElement(C.a,null,"Player Name"),r.a.createElement(C.a,{align:"center"},"Type"),r.a.createElement(C.a,{align:"center"},"Role"),r.a.createElement(C.a,{align:"center"},"Origin"),r.a.createElement(C.a,{align:"center"},"Rating"),r.a.createElement(C.a,{align:"center"},"Price"))),r.a.createElement(T.a,null,this.state.teamPlayerDetails.map((function(e){return r.a.createElement(N.a,{key:e},r.a.createElement(C.a,{component:"th",scope:"row"},e.player_name),r.a.createElement(C.a,{align:"center"},e.player_type),r.a.createElement(C.a,{align:"center"},e.player_role),r.a.createElement(C.a,{align:"center"},e.player_nationality),r.a.createElement(C.a,{align:"center"},e.player_rating?parseInt(e.player_rating):"NA"),r.a.createElement(C.a,{align:"right"},e.price))}))))))))),r.a.createElement("footer",{className:this.props.classes.footer},r.a.createElement(k.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"With <3"),r.a.createElement(k.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Fun @ Work Team")))}}]),a}(r.a.Component),O=t(34);var D=function(){function e(){return Math.round(20*Math.random())-10}var a=Object(O.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},paper:{position:"absolute",width:"95%",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},table:{minWidth:"60%",border:"1px solid black"}}}))(),t=r.a.useState((function(){var a=50+e(),t=50+e();return{top:"".concat(a,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(a,"%, -").concat(t,"%)")}})),n=Object(c.a)(t,1)[0];return r.a.createElement(M,{classes:a,modalStyle:n})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.80b1f181.chunk.js.map