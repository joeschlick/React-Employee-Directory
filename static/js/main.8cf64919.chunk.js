(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var a=r(0),i=r(1),c=r(4),n=r.n(c),s=r(5),l=r(6),o=r(8),d=r(7);var m=function(e){function t(t){e.handleSort(t)}return Object(a.jsxs)("thead",{children:[Object(a.jsx)("th",{scope:"col",onClick:function(){t("id")},children:Object(a.jsx)("strong",{children:"ID#:"})}),Object(a.jsx)("th",{scope:"col",onClick:function(){t("firstName")},children:Object(a.jsx)("strong",{children:"First Name:"})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("strong",{children:"Last Name:"})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("strong",{children:"Department:"})}),Object(a.jsx)("th",{scope:"col",children:Object(a.jsx)("strong",{children:"Email:"})})]})};var j=function(e){return Object(a.jsx)("table",{className:"table table-dark",children:e.children})};var h=function(e){return Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:e.id}),Object(a.jsx)("td",{children:e.firstName}),Object(a.jsx)("td",{children:e.lastName}),Object(a.jsx)("td",{children:e.department}),Object(a.jsx)("td",{children:e.email})]})})};var b=function(e){return Object(a.jsx)("div",{className:"wrapper",children:e.children})};r(14);var u=function(e){return Object(a.jsx)("h1",{className:"title",children:e.children})},f=r(3),p=function(e){Object(o.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={sortingOrder:"descend",initialData:f,filterData:f.reverse()},e.changeOrder=function(t){if("descend"===e.state.sortingOrder){e.setState({sortingOrder:"ascend"});var r=e.state.filterData.sort((function(e,r){return e[t]>r[t]?1:r[t]>e[t]?-1:0}));e.setState({filterData:r})}else{e.setState({sortingOrder:"descend"});var a=e.state.filterData.sort((function(e,r){return e[t]<r[t]?1:r[t]<e[t]?-1:0}));e.setState({filterData:a})}},e}return Object(l.a)(r,[{key:"render",value:function(){return Object(a.jsxs)(b,{children:[Object(a.jsx)(u,{children:"Employee Directory"}),Object(a.jsxs)(j,{children:[Object(a.jsx)(m,{handleSort:this.changeOrder}),this.state.filterData.map((function(e){return Object(a.jsx)(h,{id:e.id,firstName:e.firstName,lastName:e.lastName,department:e.department,email:e.email},e.id)}))]})]})}}]),r}(i.Component);r(15),r(16);n.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))},3:function(e){e.exports=JSON.parse('[{"id":1,"firstName":"Bob","lastName":"Sponge","department":"Fruit","email":"bob@myco.com"},{"id":2,"firstName":"Chunky","lastName":"Williams","department":"Pie","email":"chunky@myco.com"},{"id":3,"firstName":"Nibbles","lastName":"Fluffington","department":"Liquor","email":"nibbles@myco.com"},{"id":4,"firstName":"Spicy","lastName":"Bautista","department":"Pie","email":"spicy@myco.com"},{"id":5,"firstName":"Jess","lastName":"Sparks","department":"Fruit","email":"jess@myco.com"},{"id":6,"firstName":"Roger","lastName":"Chutia","department":"Pie","email":"roger@myco.com"},{"id":7,"firstName":"Wilbur","lastName":"Sponge","department":"Liquor","email":"wilbur@myco.com"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.8cf64919.chunk.js.map