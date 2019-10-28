(this["webpackJsonpthings-in-space-new"]=this["webpackJsonpthings-in-space-new"]||[]).push([[0],{24:function(e,t,n){e.exports=n(36)},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(7),i=n.n(a),c=n(6),l=n(4),s=n(19);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(8),g=n(9),p=n(11),h=n(10),d=n(12),m=n(0),v=n(22),f=function(e,t,n,o){var r=n.width,a=n.height,i=r>a?a/450:r/800;switch(e){case"geoOrthographic":var c=o?o[0]:t?t[0]:0;return Object(m.n)().scale(200*i).translate([r/2,a/2]).rotate([-1*c||0]);case"geoNaturalEarth1":return Object(m.m)().scale(150*i).translate([r/2,a/2]);case"geoAzimuthalEqualArea":return Object(m.a)().scale(110*i).translate([r/2,a/2]).rotate([0,-90]);case"geoHill":return Object(v.a)().scale(150*i).translate([r/2,a/2]);case"geoMercator":return Object(m.l)().scale(75*i).translate([r/2,a/2]);case"geoConicEqualArea":return Object(m.g)().scale(125*i).translate([r/2,a/2]);default:return null}},E=function(e){var t=e.circleProps,n=e.currentLocation,o=e.onMouseOver,a=e.position,i=e.selectedProjection,c=e.svgSize;if(a.loaded){var l=f(i.geo,a.longLat,{width:c[0],height:c[1]},!!n&&n.longLat);return r.a.createElement("circle",{cx:l(a.longLat)[0],cy:l(a.longLat)[1],r:t.radius,fill:t.fill,stroke:t.stroke,className:"marker",onMouseEnter:o,onMouseLeave:o})}return null},y=n(20),j=n.n(y),O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={popoverOpen:!1},n.setPopover=function(){return n.setState({popoverOpen:!n.state.popoverOpen})},n}return Object(d.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.connectedSettings,t=e.current,n=e.selectedProjection,o=e.svgSize,a=new Date(1e3*t.timestamp),i={hours:a.getHours().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),minutes:a.getMinutes().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1}),seconds:a.getSeconds().toLocaleString("en-US",{minimumIntegerDigits:2,useGrouping:!1})};return r.a.createElement(j.a,{isOpen:this.state.popoverOpen,content:r.a.createElement("div",{style:{borderRadius:".5rem",backgroundColor:"rgba(250, 250, 250, .75)",padding:".25rem",fontSize:".75rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},r.a.createElement("p",{style:{margin:"0"}},t.loaded&&t.longLat[0]+", "+t.longLat[1]),r.a.createElement("p",{style:{margin:"0"}},"".concat(i.hours,":").concat(i.minutes,":").concat(i.seconds)))},r.a.createElement(E,{circleProps:{radius:5,fill:"rgba(50, 250, 250, .3)",stroke:"#212121"},position:t,selectedProjection:n,svgSize:o,onMouseOver:this.setPopover}))}}]),t}(o.Component),b=function(e){var t=e.connectedSettings,n=e.i,o=e.longLat,a={radius:1,fill:"rgba(255, 255, 255, ".concat(n>300?.4:1-n/500,")")};return r.a.createElement(E,{circleProps:a,position:{loaded:!0,longLat:o},selectedProjection:t.selectedProjection,svgSize:t.svgSize,currentLocation:t.current})},w=n(23),L=n(21),D=n.n(L);var S=function(e){function t(){var e,n;Object(u.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={height:800,width:450},n.getMapDimensions=function(){var e,t,o=window,r=o.innerWidth,a=o.innerHeight;r>a?t=1.78*(e=.9*a):e=(t=.9*r)/1.78,n.setState({height:e,width:t},(function(){return n.props.setSize([t,e])}))},n}return Object(d.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.getMapDimensions(),window.addEventListener("resize",this.getMapDimensions),this.props.getMap(),this.props.loadCurrent(),setInterval(this.props.loadCurrent,5e3)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.getMapDimensions)}},{key:"render",value:function(){var e=this.props,t=e.current,n=e.pastLocations,o=e.selectedProjection,a=e.svgSize,i=e.worldData;return r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("svg",{width:a[0],height:a[1],viewBox:"0 0 ".concat(a[0]," ").concat(a[1])},r.a.createElement("g",{className:"countries"},i.map((function(e,n){var i=function(e){return n%e===0};return r.a.createElement("path",{key:"path_".concat(n),d:Object(m.o)().projection(f(o.geo,t.longLat,{width:a[0],height:a[1]}))(e),className:"country",fill:"rgb(".concat(250,", ").concat(i(2)?i(12)?i(9)?i(5)?200:250:100:i(10)?255:i(4)?150+n/2:225-.75*n:i(5)?170+n/3:i(3)?5*n:i(7)?70:150,", ").concat(i(2)?i(3)?200-n/2:i(12)?i(9)?100:50:i(10)?100:i(4)?n+n/2:30+n:100+n/2,")"),stroke:"#212121",strokeWidth:.5})}))),r.a.createElement("g",{className:"markers"},n.map((function(e,n){return r.a.createElement(b,{key:n,i:n,longLat:e,connectedSettings:{current:t,selectedProjection:o,svgSize:a}})})),r.a.createElement(O,{connectedSettings:{current:t,selectedProjection:o,svgSize:a}}))))}}]),t}(o.Component),P={getMap:function(){return function(e){fetch("https://unpkg.com/world-atlas@1/world/110m.json").then((function(t){200===t.status?t.json().then((function(t){e({type:"MAP_LOADED",value:Object(w.a)(t,t.objects.countries).features})})):console.log("There was a problem: ".concat(t.status))})).catch((function(e){return console.error("Caught error: ",e)}))}},setSize:function(e){return{type:"SIZE_LOADED",value:e}},loadCurrent:function(){return function(e){D()("http://api.open-notify.org/iss-now.json").then((function(t){t.ok?t.json().then((function(t){var n={loaded:!0,timestamp:t.timestamp,longLat:[parseFloat(t.iss_position.longitude),parseFloat(t.iss_position.latitude)]};e({type:"CURRENT_LOADED",value:n})})):console.log("Response not OK.",t)})).catch((function(e){return console.error("Caught error: ",e)}))}}},z=Object(c.b)((function(e){return{current:e.current,pastLocations:e.pastLocations,selectedProjection:e.selectedProjection,svgSize:e.svgSize,worldData:e.worldData}}),P)(S),k=Object(c.b)((function(e){return{selectedProjection:e.selectedProjection,allProjections:e.allProjections}}),(function(e){return{changeProjection:function(t){e(function(e){return{type:"PROJECTION_CHANGED",value:e}}(t))}}}))((function(e){var t=e.allProjections.map((function(e,t){return r.a.createElement("option",{key:t,value:e.geo+","+e.name},e.name," Projection")}));return r.a.createElement("select",{onChange:function(t){var n=t.target.value.split(",");return e.changeProjection({geo:n[0],name:n[1]})}},t)}));var A=function(){return r.a.createElement("main",{style:{width:"100vw",height:"100vh"}},r.a.createElement(z,null),r.a.createElement("div",{style:{position:"absolute",top:"2rem",left:"2rem"}},r.a.createElement("h1",{style:{fontSize:"1.2rem"}},r.a.createElement("i",null,"Res Superterram")," - Things above the Earth"),r.a.createElement("div",{style:{maxWidth:"15rem"}},r.a.createElement("p",{style:{fontSize:".8rem",borderRadius:".25rem",border:"1px solid #f7322e",backgroundColor:"rgba(247, 50, 46, .25",padding:".25rem",display:"flex",justifyContent:"center"}},r.a.createElement("span",{role:"img","aria-label":"construction sign"},"\ud83d\udea7"),r.a.createElement("code",null,"\xa0app under construction!\xa0"),r.a.createElement("span",{role:"img","aria-label":"construction sign"},"\ud83d\udea7")),r.a.createElement("p",null,"This map displays the current location of the International Space Station in real time, thanks to\xa0",r.a.createElement("a",{href:"http://open-notify.org/",target:"_blank",rel:"noopener noreferrer"},"Open Notify"),"."),r.a.createElement("p",null,"The location is updated every 5 seconds. Watch long enough and you'll see the orbital path of the ISS drawn across the map! Try viewing different projections to see how the path appears to change."),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(k,null)))))};var C=Object(l.c)({allProjections:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]},buttons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"BUTTONS_LOADED"===t.type?t.value:e},cities:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]},current:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"CURRENT_LOADED"===t.type?t.value:e},flyover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"FLYOVER_LOADED"===t.type?t.value:e},inputLat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"LAT_UPDATED"===t.type?t.value:e},inputLong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"LONG_UPDATED"===t.type?t.value:e},pastLocations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CURRENT_LOADED"===t.type&&e.unshift(t.value.longLat),e},selectedProjection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"PROJECTION_CHANGED"===t.type?t.value:e},svgSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[800,450],t=arguments.length>1?arguments[1]:void 0;return"SIZE_LOADED"===t.type?t.value:e},worldData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"MAP_LOADED"===t.type?t.value:e}}),M=(n(35),Object(l.a)(s.a)),N=Object(l.d)(M),_=Object(l.e)(C,{current:{},pastLocations:[],worldData:[],svgSize:[800,450],selectedProjection:{geo:"geoMercator",name:"Mercator",desc:""},allProjections:[{geo:"geoMercator",name:"Mercator",desc:""},{geo:"geoNaturalEarth1",name:"Natural Earth",desc:""},{geo:"geoHill",name:"Hill Eucyclic",desc:""},{geo:"geoAzimuthalEqualArea",name:"Azimuthal",desc:""},{geo:"geoOrthographic",name:"Orthographic",desc:""},{geo:"geoConicEqualArea",name:"Conic",desc:""}],flyover:{},inputLat:"",inputLong:"",buttons:[{name:"S\xe3o Paulo",timezone:-2,lat:-23.55,long:-46.633333,country:"Brazil"},{name:"Lagos",timezone:1,lat:6.455027,long:3.384082,country:"Nigeria"},{name:"Dhaka",timezone:6,lat:23.7,long:90.366667,country:"Bangladesh"},{name:"Beijing",timezone:8,lat:39.916667,long:116.383333,country:"China"},{name:"New York",timezone:-5,lat:40.7127,long:-74.0059,country:"USA"},{name:"Moscow",timezone:3,lat:55.75,long:37.616667,country:"Russia"}]},N);i.a.render(r.a.createElement(c.a,{store:_},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.a7420167.chunk.js.map