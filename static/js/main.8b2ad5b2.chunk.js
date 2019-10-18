(this["webpackJsonpthings-in-space-new"]=this["webpackJsonpthings-in-space-new"]||[]).push([[0],{21:function(e,t,n){e.exports=n(32)},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(7),c=n.n(a),i=n(4),l=n(5),u=n(18);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(8),g=n(9),h=n(11),d=n(10),v=n(12),p=n(0),f=n(19),m=function(e,t,n,r){switch(e){case"geoOrthographic":return Object(p.n)().scale(200).translate([n/2,r/2]).rotate(function(e){if(e){if(e<-45)return[90,0];if(e>45&&e<135)return[-90,0];if(e>=135)return[-180,0]}return[0,0]}(t[0]||0));case"geoNaturalEarth1":return Object(p.m)().scale(100).translate([n/2,r/2]);case"geoAzimuthalEqualArea":return Object(p.a)().scale(100).translate([n/2,r/2]).rotate([0,-90]);case"geoHill":return Object(f.a)().scale(100).translate([n/2,r/2]);case"geoMercator":return Object(p.l)().scale(100).translate([n/2,r/2]);case"geoConicEqualArea":return Object(p.g)().scale(100).translate([n/2,r/2]);default:return null}},j=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.svgSize,t=this.props.current,n=t.longLat,r=t.loaded,a=this.props.selectedProjection.geo;if(r){var c=m(a,n,e[0],e[1]);return o.a.createElement("circle",{cx:c(n)[0],cy:c(n)[1],r:5,fill:"rgba(50, 250, 250, .5)",stroke:"#212121",className:"marker"})}return null}}]),t}(r.Component),E=Object(i.b)((function(e){return{current:e.current,selectedProjection:e.selectedProjection,svgSize:e.svgSize}}))(j),y=n(20);var O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).height=.8*window.innerHeight,n.width=1.78*n.height,n}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.setSize([this.width,this.height]),this.props.getMap(),this.props.loadCurrent()}},{key:"render",value:function(){var e=this.props,t=e.current,n=e.selectedProjection,r=e.worldData,a=e.loadCurrent,c=e.svgSize,i=m(n.geo,t.longLat,c[0],c[1]);return o.a.createElement("div",{onClick:function(){return a()},style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("svg",{width:c[0],height:c[1],viewBox:"0 0 ".concat(c[0]," ").concat(c[1])},o.a.createElement("g",{className:"countries"},r.map((function(e,t){var n=function(e){return t%e===0};return o.a.createElement("path",{key:"path_".concat(t),d:Object(p.o)().projection(i)(e),className:"country",fill:"rgb(".concat(250,", ").concat(n(7)?150:n(5)?220:n(3)?100+t:180-t/2,", ").concat(n(8)?150:n(6)?200:n(4)?t+t/2:n(2)?180-t/2:100+t/2,")"),stroke:"#212121",strokeWidth:.5})}))),o.a.createElement("g",{className:"markers"},o.a.createElement(E,null))))}}]),t}(r.Component),b={getMap:function(){return function(e){fetch("https://unpkg.com/world-atlas@1/world/110m.json").then((function(t){200===t.status?t.json().then((function(t){e({type:"MAP_LOADED",value:Object(y.a)(t,t.objects.countries).features})})):console.log("There was a problem: ".concat(t.status))})).catch((function(e){return console.error("Caught error: ",e)}))}},setSize:function(e){return{type:"SIZE_LOADED",value:e}},loadCurrent:function(){return function(e){fetch("http://api.open-notify.org/iss-now.json").then((function(t){200===t.status?t.json().then((function(t){var n={loaded:!0,longLat:[parseFloat(t.iss_position.longitude),parseFloat(t.iss_position.latitude)]};e({type:"CURRENT_LOADED",value:n})})):console.log("There was a problem: ".concat(t.status))})).catch((function(e){return console.error("Caught error: ",e)}))}}},w=Object(i.b)((function(e){return{current:e.current,selectedProjection:e.selectedProjection,svgSize:e.svgSize,worldData:e.worldData}}),b)(O),D=Object(i.b)((function(e){return{selectedProjection:e.selectedProjection,allProjections:e.allProjections}}),(function(e){return{changeProjection:function(t){e(function(e){return{type:"PROJECTION_CHANGED",value:e}}(t))}}}))((function(e){var t=e.allProjections.map((function(t,n){return t.geo!==e.selectedProjection.geo?o.a.createElement("button",{key:n,onClick:function(){return e.changeProjection(t)}},t.name," Projection"):null}));return o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},t)}));var P=function(){return o.a.createElement("main",{style:{width:"100vw",height:"100vh"}},o.a.createElement(w,null),o.a.createElement("div",{style:{position:"absolute",top:"2rem",left:"2rem"}},o.a.createElement("p",null,"just a little lorem ipsum for you"),o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement(D,null))))};var A=Object(l.c)({flyover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"FLYOVER_LOADED"===t.type?t.value:e},inputLat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"LAT_UPDATED"===t.type?t.value:e},inputLong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"LONG_UPDATED"===t.type?t.value:e},buttons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"BUTTONS_LOADED"===t.type?t.value:e},worldData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"MAP_LOADED"===t.type?t.value:e},current:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"CURRENT_LOADED"===t.type?t.value:e},selectedProjection:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"PROJECTION_CHANGED"===t.type?t.value:e},allProjections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return arguments.length>1&&arguments[1],e},cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return arguments.length>1&&arguments[1],e},svgSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[800,450],t=arguments.length>1?arguments[1]:void 0;return"SIZE_LOADED"===t.type?t.value:e}}),z=(n(31),Object(l.a)(u.a)),C=Object(l.d)(z),k=Object(l.e)(A,{current:{},worldData:[],svgSize:[800,450],selectedProjection:{geo:"geoMercator",name:"Mercator",desc:""},allProjections:[{geo:"geoMercator",name:"Mercator",desc:""},{geo:"geoNaturalEarth1",name:"Natural Earth",desc:""},{geo:"geoHill",name:"Hill Eucyclic",desc:""},{geo:"geoAzimuthalEqualArea",name:"Azimuthal",desc:""},{geo:"geoOrthographic",name:"Orthographic",desc:""},{geo:"geoConicEqualArea",name:"Conic",desc:""}],flyover:{},inputLat:"",inputLong:"",buttons:[{name:"S\xe3o Paulo",timezone:-2,lat:-23.55,long:-46.633333,country:"Brazil"},{name:"Lagos",timezone:1,lat:6.455027,long:3.384082,country:"Nigeria"},{name:"Dhaka",timezone:6,lat:23.7,long:90.366667,country:"Bangladesh"},{name:"Beijing",timezone:8,lat:39.916667,long:116.383333,country:"China"},{name:"New York",timezone:-5,lat:40.7127,long:-74.0059,country:"USA"},{name:"Moscow",timezone:3,lat:55.75,long:37.616667,country:"Russia"}]},C);c.a.render(o.a.createElement(i.a,{store:k},o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.8b2ad5b2.chunk.js.map