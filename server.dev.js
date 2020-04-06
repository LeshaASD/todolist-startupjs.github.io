/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./model/TodolistModel.js":
/*!********************************!*\
  !*** ./model/TodolistModel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits"));var _orm=__webpack_require__(/*! startupjs/orm */ "startupjs/orm");function _createSuper(Derived){return function(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(_isNativeReflectConstruct()){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var ToDoModel=function(_BaseModel){(0,_inherits2.default)(ToDoModel,_BaseModel);var _super=_createSuper(ToDoModel);function ToDoModel(){(0,_classCallCheck2.default)(this,ToDoModel);return _super.apply(this,arguments);}(0,_createClass2.default)(ToDoModel,[{key:"addSelf",value:function addSelf(){return _regenerator.default.async(function addSelf$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return _regenerator.default.awrap(this.root.addAsync(this.getCollection(),{id:this.getId()}));case 2:case"end":return _context.stop();}}},null,this,null,Promise);}},{key:"addTask",value:function addTask(name){return _regenerator.default.async(function addTask$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _regenerator.default.awrap(this.addAsync({name:name,completed:false,deleted:false,id:this.id()}));case 2:case"end":return _context2.stop();}}},null,this,null,Promise);}}]);return ToDoModel;}(_orm.BaseModel);exports.default=ToDoModel;

/***/ }),

/***/ "./model/index.js":
/*!************************!*\
  !*** ./model/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=_default;var _TodolistModel=_interopRequireDefault(__webpack_require__(/*! ./TodolistModel */ "./model/TodolistModel.js"));function _default(racer){racer.orm('todolist.*',_TodolistModel.default);}

/***/ }),

/***/ "./node_modules/@startupjs/init/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@startupjs/init/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/aivannikov/Projects/insoft/todolist/node_modules/@startupjs/init/index.js'");

/***/ }),

/***/ "./node_modules/startupjs/init.js":
/*!****************************************!*\
  !*** ./node_modules/startupjs/init.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(/*! @startupjs/init */ "./node_modules/@startupjs/init/index.js");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "@babel/runtime/helpers/interopRequireDefault");var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));var _init=_interopRequireDefault(__webpack_require__(/*! startupjs/init */ "./node_modules/startupjs/init.js"));var _model=_interopRequireDefault(__webpack_require__(/*! ./model */ "./model/index.js"));var _server=_interopRequireDefault(__webpack_require__(/*! startupjs/server */ "startupjs/server"));(0,_init.default)({orm:_model.default});(0,_server.default)({getHead:getHead},function(ee){ee.on('routes',function(expressApp){expressApp.get('/api',function _callee(req,res){var model,$todolist;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:model=req.model;$todolist=model.at('todolist');_context.next=4;return _regenerator.default.awrap($todolist.subscribeAsync());case 4:res.json({name:'Test API',counter:$todolist.get()});case 5:case"end":return _context.stop();}}},null,null,null,Promise);});});});function getHead(appName){return"\n    <title>HelloWorld</title>\n    <!-- Put vendor JS and CSS here -->\n  ";}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./server.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! ./server.js */"./server.js");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/interopRequireDefault":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/interopRequireDefault" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "startupjs/orm":
/*!********************************!*\
  !*** external "startupjs/orm" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("startupjs/orm");

/***/ }),

/***/ "startupjs/server":
/*!***********************************!*\
  !*** external "startupjs/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("startupjs/server");

/***/ })

/******/ });
//# sourceMappingURL=server.dev.js.map