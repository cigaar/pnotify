var PNotifyCallbacks =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/PNotifyCallbacks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./PNotifyCore":
/*!**************************!*\
  !*** external "PNotify" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default, defaultStack, icons, modules, modulesAppendContainer, modulesPrependContainer, notices, styles */
/***/ (function(module, exports) {

eval("module.exports = PNotify;\n\n//# sourceURL=webpack://%5Bname%5D/external_%22PNotify%22?");

/***/ }),

/***/ "./src/PNotifyCallbacks.js":
/*!*********************************!*\
  !*** ./src/PNotifyCallbacks.js ***!
  \*********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PNotifyCore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PNotifyCore */ \"./PNotifyCore\");\n/* harmony import */ var _PNotifyCore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_PNotifyCore__WEBPACK_IMPORTED_MODULE_0__);\n\nvar key = 'Callbacks';\n\nfunction getCallback(notice, options, name) {\n  var modules = notice ? notice.modules : options.modules;\n  var cbs = modules && modules.Callbacks ? modules.Callbacks : {};\n  return name in cbs ? cbs[name] : function () {\n    return true;\n  };\n}\n\nvar factory = function factory(args) {\n  getCallback(null, args.props, 'beforeInit')(args.props);\n\n  var notice = _factory(args);\n\n  var _open = notice.open;\n  var _close = notice.close;\n\n  var open = function open() {\n    var ret = getCallback(notice, null, 'beforeOpen')(notice);\n\n    if (ret !== false) {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      _open.apply(notice, args);\n\n      getCallback(notice, null, 'afterOpen')(notice);\n    }\n  };\n\n  var close = function close(timerHide) {\n    var ret = getCallback(notice, null, 'beforeClose')(notice, timerHide);\n\n    if (ret !== false) {\n      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n        args[_key2 - 1] = arguments[_key2];\n      }\n\n      _close.apply(notice, [timerHide].concat(args));\n\n      getCallback(notice, null, 'afterClose')(notice, timerHide);\n    }\n  };\n\n  notice.$set({\n    open: open,\n    close: close\n  });\n  getCallback(notice, null, 'afterInit')(notice);\n  return notice;\n};\n\nvar _factory = _PNotifyCore__WEBPACK_IMPORTED_MODULE_0___default.a.factory;\n\n_PNotifyCore__WEBPACK_IMPORTED_MODULE_0___default.a.factory = function (options) {\n  return factory(options);\n};\n\nvar Component = {}; // Register the module with PNotify.\n\n_PNotifyCore__WEBPACK_IMPORTED_MODULE_0__[\"modules\"][key] = Component;\n\n//# sourceURL=webpack://%5Bname%5D/./src/PNotifyCallbacks.js?");

/***/ })

/******/ });