/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin/src/admin.js":
/*!****************************!*\
  !*** ./admin/src/admin.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/login */ \"./admin/src/modules/login.js\");\n/* harmony import */ var _modules_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mode */ \"./admin/src/modules/mode.js\");\n\n\n\n\n\nwindow.mode = new _modules_mode__WEBPACK_IMPORTED_MODULE_1__.Mode\n;(0,_modules_login__WEBPACK_IMPORTED_MODULE_0__.login)()\n\n\n//# sourceURL=webpack://insanework/./admin/src/admin.js?");

/***/ }),

/***/ "./admin/src/modules/login.js":
/*!************************************!*\
  !*** ./admin/src/modules/login.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode */ \"./admin/src/modules/mode.js\");\n\n\nconst login = () => {\n    const form = document.getElementById('login')\n    const input = form.querySelector('#name')\n    const pass = form.querySelector('#type')\n    const warning = form.querySelectorAll('.text-warning')\n    let check = false\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n        mode.checkUsers(input.value).then(user => {\n\n            if (user.length !== 0) {\n                if (user[0].name === input.value) {\n                    if (user[0].password === pass.value) {\n                        input.value = ''\n                        check = true\n                        document.cookie = \"auth=true\"\n                    }\n                    else {\n                        warning[1].style.display = 'block'\n                        pass.value = ''\n                    }\n                    warning[0].style.display = 'none'\n                }\n            }\n            else {\n                input.value = ''\n                warning[0].style.display = 'block'\n            }\n            if (check) {\n                window.location.href = 'table.html'\n            }\n        })\n    })\n}\n\n\n//# sourceURL=webpack://insanework/./admin/src/modules/login.js?");

/***/ }),

/***/ "./admin/src/modules/mode.js":
/*!***********************************!*\
  !*** ./admin/src/modules/mode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mode\": () => (/* binding */ Mode)\n/* harmony export */ });\nclass Mode {\n    checkUsers(str) {\n        return fetch(`http://localhost:3000/users?name_like=${str}`).then(res => res.json())\n    }\n    getRepairs() {\n        return fetch('http://localhost:3000/posts').then(res => res.json())\n    }\n    filter(str) {\n        return fetch(`http://localhost:3000/posts?type=${str}`).then(res => res.json())\n    }\n    addRepair(repair) {\n        return fetch('http://localhost:3000/posts', {\n            method: \"POST\",\n            headers: {\n                \"Content-type\": \"application/json\",\n            },\n            body: JSON.stringify(repair)\n        }).then(res => res.json())\n    }\n    getRepair(id) {\n        return fetch(`http://localhost:3000/posts/${id}`).then(res => res.json())\n    }\n    editRepair(id, repair) {\n        return fetch(`http://localhost:3000/posts/${id}`, {\n            method: 'PUT',\n            body: JSON.stringify(repair),\n            headers: {\n                \"Content-type\": \"application/json\",\n            }\n        }).then(res => res.json())\n    }\n}\n\n//# sourceURL=webpack://insanework/./admin/src/modules/mode.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./admin/src/admin.js");
/******/ 	
/******/ })()
;