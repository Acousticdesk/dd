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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/eslint-loader/index.js):\\nModule failed because of a eslint error.\\n\\n\\u001b[4m/Users/akicha/dev/newDeveloperDashboard/src/index.js\\u001b[24m\\n   \\u001b[2m8:17\\u001b[22m  \\u001b[31merror\\u001b[39m  Parse errors in imported module './App': Unexpected token = (37:18)  \\u001b[2mimport/no-named-as-default\\u001b[22m\\n   \\u001b[2m8:17\\u001b[22m  \\u001b[31merror\\u001b[39m  Parse errors in imported module './App': Unexpected token = (37:18)  \\u001b[2mimport/no-named-as-default-member\\u001b[22m\\n  \\u001b[2m11:3\\u001b[22m   \\u001b[31merror\\u001b[39m  JSX not allowed in files with extension '.js'                        \\u001b[2mreact/jsx-filename-extension\\u001b[22m\\n  \\u001b[2m12:9\\u001b[22m   \\u001b[31merror\\u001b[39m  A space is required before closing bracket                           \\u001b[2mreact/jsx-tag-spacing\\u001b[22m\\n  \\u001b[2m14:3\\u001b[22m   \\u001b[31merror\\u001b[39m  'window' is not defined                                              \\u001b[2mno-undef\\u001b[22m\\n  \\u001b[2m14:14\\u001b[22m  \\u001b[31merror\\u001b[39m  Missing trailing comma                                               \\u001b[2mcomma-dangle\\u001b[22m\\n\\n\\u001b[31m\\u001b[1m✖ 6 problems (6 errors, 0 warnings)\\u001b[22m\\u001b[39m\\n\\u001b[31m\\u001b[1m\\u001b[22m\\u001b[39m\\u001b[31m\\u001b[1m  2 errors and 0 warnings potentially fixable with the `--fix` option.\\u001b[22m\\u001b[39m\\n\\u001b[31m\\u001b[1m\\u001b[22m\\u001b[39m\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });