!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t,r){r(3),e.exports=r(4)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){var n=r(0),u=n(r(1)),o=n(r(5)),i=n(r(18)),l=n(r(26));(0,o.default)({orm:i.default}),(0,l.default)({getHead:function(e){return"\n    <title>HelloWorld</title>\n    \x3c!-- Put vendor JS and CSS here --\x3e\n  "}},(function(e){e.on("routes",(function(e){e.get("/api",(function(e,t){var r,n;return u.default.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=e.model,n=r.at("todolist"),o.next=4,u.default.awrap(n.subscribeAsync());case 4:t.json({name:"Test API",counter:n.get()});case 5:case"end":return o.stop()}}),null,null,null,Promise)}))}))}))},function(e,t,r){e.exports=r(6)},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u.default}});var u=n(r(7))},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u.default}});var u=n(r(8))},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(9)),o=n(r(10));t.default=function(e){(0,o.default)(u.default,e)}},function(e,t){e.exports=require("sharedb")},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(11)),o=n(r(12)),i=n(r(13)),l=n(r(14)),a=r(15),f=n(r(16)),c=n(r(17));t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.orm;e.types.register(u.default.type);var n=i.default.prototype._onOp;i.default.prototype._onOp=function(){if(this.shareDoc.type!==u.default.type)return n.apply(this,arguments)},(0,a.promisifyAll)(o.default.Model.prototype),(0,a.promisifyAll)(l.default.prototype),o.default.Model.prototype.batch=f.default,r&&(o.default.use(c.default),o.default.use(r))}},function(e,t){e.exports=require("rich-text")},function(e,t){e.exports=require("racer")},function(e,t){e.exports=require("racer/lib/Model/RemoteDoc")},function(e,t){e.exports=require("racer/lib/Model/Query")},function(e,t){e.exports=require("bluebird")},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return e()}},function(e,t){e.exports=require("@startupjs/orm")},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){e.orm("todolist.*",u.default)};var u=n(r(19))},function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(r(1)),o=n(r(20)),i=n(r(21)),l=n(r(22)),a=n(r(23)),f=n(r(24));function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var s=function(e){(0,f.default)(n,e);var t,r=(t=n,function(){var e,r=(0,a.default)(t);if(c()){var n=(0,a.default)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,l.default)(this,e)});function n(){return(0,o.default)(this,n),r.apply(this,arguments)}return(0,i.default)(n,[{key:"addSelf",value:function(){return u.default.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.default.awrap(this.root.addAsync(this.getCollection(),{id:this.getId()}));case 2:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"addTask",value:function(e){return u.default.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.default.awrap(this.addAsync({name:e,completed:!1,deleted:!1,id:this.id()}));case 2:case"end":return t.stop()}}),null,this,null,Promise)}}]),n}(r(25).BaseModel);t.default=s},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("startupjs/orm")},function(e,t){e.exports=require("startupjs/server")}]);
//# sourceMappingURL=server.js.map