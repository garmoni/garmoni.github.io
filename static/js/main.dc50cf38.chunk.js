(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{109:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(39),s=a.n(i),r=(a(109),a(4)),l=a.n(r),o=a(23),d=a(40),m=a(3),u=a(22),j=a.n(u),h=a(41),b="21cb2627c4a730e2b49bd1b03345178a",p="ddd, DD MMMM, HH:mm",O="HH:mm",f=["Dnipro","Kyiv","London","Cherkasy","Hobart","Kazan","Moscow","Cairo","Reykjav\xedk"],x=["\u0414\u043d\u0456\u043f\u0440\u043e","\u041a\u0438\u0457\u0432","\u041b\u043e\u043d\u0434\u043e\u043d","\u0427\u0435\u0440\u043a\u0430\u0441\u0438","\u0425\u043e\u0431\u0430\u0440\u0442","\u041a\u0430\u0437\u0430\u043d\u044c","\u041c\u043e\u0441\u043a\u0432\u0430"],g=["\u0414\u043d\u0435\u043f\u0440","\u041a\u0438\u0435\u0432","\u041b\u043e\u043d\u0434\u043e\u043d","\u0427\u0435\u0440\u043a\u0430\u0441\u0441\u044b","\u0425\u043e\u0431\u0430\u0440\u0442","\u041a\u0430\u0437\u0430\u043d\u044c","\u041c\u043e\u0441\u043a\u0432\u0430","\u0411\u0443\u0433\u0440\u0438\u043d\u043e","\u041c\u0435\u0445\u0430\u043c\u043d"],v=(a(21),a(0)),N=function(e){var t,a,n,c=e.getWeather,i=e.changeSelect,s=e.select,r=e.input,l=e.handleChange;switch(s){case"en":t=f,a="Add",n="City name...";break;case"ua":t=x,a="\u0414\u043e\u0434\u0430\u0442\u0438",n="\u041d\u0430\u0437\u0432\u0430 \u043c\u0456\u0441\u0442\u0430 ...";break;case"ru":t=g,a="\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",n="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430..."}return Object(v.jsxs)("div",{className:"top-form",children:[Object(v.jsxs)("form",{onSubmit:c,children:[Object(v.jsx)(h.Hint,{options:t,children:Object(v.jsx)("input",{type:"text",name:"city",placeholder:n,value:r,onChange:l})}),Object(v.jsx)("button",{className:"form-button",children:a})]}),Object(v.jsxs)("select",{id:"listLang",className:"lang-block",defaultValue:s,onChange:i,children:[Object(v.jsx)("option",{value:"en",children:" en "}),Object(v.jsx)("option",{value:"ua",children:" ua "}),Object(v.jsx)("option",{value:"ru",children:" ru "})]})]})},w=a(6),S=function(e){var t=e.time,a=e.width,n=e.height,c=e.mainTemp,i=e.units,s=w.d().domain(t.map((function(e){return e.name}))).range([0,a]),r=w.e().domain([0,40]).range([n,0]),l=w.a().x((function(e){return s(e.name)+s.bandwidth()/4})).y0((function(e){return r(Math.abs(e.value))})).y1((function(){return r(0)})).curve(w.c)(t);return Object(v.jsx)("div",{className:"scale-block",children:Object(v.jsxs)("svg",{className:"svg",width:a,height:n,children:[Object(v.jsx)("g",{className:"axis xAxis",ref:function(e){var t=w.b(s);w.f(e).call(t)},transform:"translate(0, 45)"}),Object(v.jsxs)("linearGradient",{id:"linear-gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[Object(v.jsx)("stop",{offset:"0%",stopColor:c>0?"#FF715B":"#5B8CFF"}),Object(v.jsx)("stop",{offset:"100%",stopColor:"#FFF4F4"})]}),Object(v.jsx)("path",{fill:"url(#linear-gradient)",d:l,opacity:.3}),Object(v.jsx)("g",{children:t.map((function(e,t){return Object(v.jsx)("g",{className:"temp-points",children:Object(v.jsx)("text",{fill:"#C5C5C5",x:s(e.name)+s.bandwidth()/2,y:r(Math.abs(e.value))-5,textAnchor:"middle",children:"metric"===i?Math.round(e.value):Math.round(1.8*e.value+32)})},t)}))})]})})},k=function(e){var t=e.id,a=e.data,c=e.date,i=e.time,s=e.removeCards,r=Object(n.useState)("metric"),l=Object(m.a)(r,2),o=l[0],d=l[1];return Object(v.jsxs)("div",{className:"form-wrap",children:[Object(v.jsxs)("div",{className:"form-header",children:[Object(v.jsxs)("div",{className:"name-block",children:[Object(v.jsxs)("div",{className:"name",children:[a.name,", ",a.sys.country]}),Object(v.jsx)("div",{className:"date",children:c})]}),Object(v.jsxs)("div",{className:"img-block",children:[Object(v.jsx)("img",{className:"img-fluid",src:"https://openweathermap.org/img/wn/".concat(a.weather[0].icon,"@2x.png"),alt:""}),Object(v.jsx)("span",{className:"description",children:a.weather[0].main})]})]}),Object(v.jsx)(S,{width:300,height:50,time:i,units:o,mainTemp:a.main.temp}),Object(v.jsx)("div",{className:"form-bottom",children:Object(v.jsxs)("div",{className:"temp-block",children:[Object(v.jsxs)("div",{className:"temp-item",children:[Object(v.jsxs)("div",{className:"temp-element",children:[a.main.temp>0?"+":null,"metric"===o?Math.round(a.main.temp):Math.round(1.8*a.main.temp+32)]}),Object(v.jsxs)("div",{className:"units-items",children:[Object(v.jsx)("button",{onClick:function(){d("metric")},className:"metric"===o?"metric active":"metric",children:"\u2103"}),Object(v.jsx)("span",{className:"strip",children:" | "}),Object(v.jsx)("button",{href:"",onClick:function(){d("imperial")},className:"imperial"===o?"imperial active":"imperial",children:"\u2109"})]}),Object(v.jsxs)("div",{className:"feels",children:["Feels like: ",a.main.feels_like>0?"+":null," ","metric"===o?"".concat(Math.round(a.main.feels_like)," \xb0C"):"".concat(Math.round(1.8*a.main.feels_like+32)," \xb0F"),"  "]})]}),Object(v.jsxs)("div",{className:"wind-block",children:[Object(v.jsxs)("div",{children:["Wind: ",Object(v.jsxs)("span",{children:[Math.round(a.wind.speed)," m/s"]})]}),Object(v.jsxs)("div",{children:["Humidity: ",Object(v.jsxs)("span",{children:[a.main.humidity,"%"]})]}),Object(v.jsxs)("div",{children:["Pressure: ",Object(v.jsxs)("span",{children:[a.main.pressure,"Pa"]})]})]})]})}),Object(v.jsx)("div",{className:"del",onClick:function(){return s(t)},children:"\u2716"})]},t)},C=a(14),y=a.n(C),M=function(){var e=JSON.parse(localStorage.getItem("lang"))?JSON.parse(localStorage.getItem("lang")):"en",t=JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):"",a=Object(n.useState)(),c=Object(m.a)(a,2),i=c[0],s=c[1],r=Object(n.useState)(t),u=Object(m.a)(r,2),h=u[0],f=u[1],x=Object(n.useState)(e),g=Object(m.a)(x,2),w=g[0],S=g[1],C=Object(n.useState)(""),M=Object(m.a)(C,2),F=M[0],I=M[1],J=Object(n.useState)(""),H=Object(m.a)(J,2),D=H[0],P=H[1],_=new Date;Object(n.useEffect)((function(){h||navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,a=t.latitude,n=t.longitude;fetch("http://api.openweathermap.org/geo/1.0/reverse?lat=".concat(a,"&lon=").concat(n,"&appid=").concat(b)).then((function(e){return e.json()})).then((function(e){I(e[0].name)}),(function(e){s(e)}))}),i)}),[]),Object(n.useEffect)((function(){localStorage.setItem("data",JSON.stringify(h)),localStorage.setItem("lang",JSON.stringify(w))}),[h,w]);var A=function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),P(F),I(""),e.prev=3,e.next=6,j.a.get("http://api.openweathermap.org/data/2.5/forecast?q=".concat(F,"&appid=").concat(b,"&units=metric"));case 6:return a=e.sent,n=a.data.list.filter((function(e){return y()(_).isSame(e.dt_txt,"day")})),(c=n.map((function(e){return{name:y()(e.dt_txt).format(O),value:Math.floor(e.main.temp)}}))).unshift({name:" ",value:1}),c.push({name:"",value:1}),e.next=13,j.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(F,"&units=metric&appid=").concat(b,"&lang=").concat(w));case 13:i=e.sent,s={id:Math.random().toString(15),card:i.data,date:y()(_).format(p),graph:c},f([].concat(Object(o.a)(h),[s])),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),I("Wrong data");case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(t){return e.apply(this,arguments)}}(),B=function(e){f(Object(o.a)(h.filter((function(t){return t.id!==e}))))};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("header",{className:"header"}),Object(v.jsxs)("div",{className:"main-wrap",children:[Object(v.jsx)(N,{getWeather:A,changeSelect:function(e){S(e.target.value)},handleChange:function(e){I(e.target.value)},input:F,select:w}),h&&Object(v.jsx)("div",{className:"form-block",children:h.map((function(e,t){return Object(v.jsx)(k,{data:e.card,id:e.id,date:e.date,removeCards:B,input:D,time:e.graph},t)}))})]})]})},F=(a(132),function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(M,{})})}),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(F,{})}),document.getElementById("root")),I()},21:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.dc50cf38.chunk.js.map