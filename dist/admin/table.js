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

/***/ "./admin/src/modules/list.js":
/*!***********************************!*\
  !*** ./admin/src/modules/list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"list\": () => (/* binding */ list)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./admin/src/modules/render.js\");\n\n\n\nconst list = () => {\n    const select = document.querySelectorAll('#typeItem')\n    let arr = []\n\n    function unique(arr) {\n        let result = [];\n        for (let str of arr) {\n            if (!result.includes(str)) {\n                result.push(str);\n            }\n        }\n        return result;\n    }\n\n    mode.getRepair().then(data => {\n        data.forEach(item => {\n            arr = arr.concat(item.type)\n        })\n        let list = unique(arr)\n        list.forEach((elem, index) => {\n            let opt = document.createElement('option')\n            opt.value = index\n            opt.textContent = elem\n            select[0].append(opt)\n        })\n        select[0].addEventListener('change', (e) => {\n            select.forEach(elem => {\n                const sel = elem.options[elem.selectedIndex]\n\n                mode.filter(sel.textContent).then(post => {\n                    ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(post)\n                })\n\n            })\n        })\n    })\n}\n\n//# sourceURL=webpack://insanework/./admin/src/modules/list.js?");

/***/ }),

/***/ "./admin/src/modules/mode.js":
/*!***********************************!*\
  !*** ./admin/src/modules/mode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mode\": () => (/* binding */ Mode)\n/* harmony export */ });\nclass Mode {\n    checkUsers(str) {\n        return fetch(`http://localhost:3000/users?name_like=${str}`).then(res => res.json())\n    }\n    getRepair() {\n        return fetch('http://localhost:3000/posts').then(res => res.json())\n    }\n    filter(str) {\n        return fetch(`http://localhost:3000/posts?type=${str}`).then(res => res.json())\n    }\n}\n\n//# sourceURL=webpack://insanework/./admin/src/modules/mode.js?");

/***/ }),

/***/ "./admin/src/modules/render.js":
/*!*************************************!*\
  !*** ./admin/src/modules/render.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode */ \"./admin/src/modules/mode.js\");\n\n\nconst render = (users) => {\n\tconst tbody = document.getElementById('tbody')\n\n\ttbody.innerHTML = ''\n\t// mode.getRepair().then(data => {\n\tusers.forEach(item => {\n\t\ttbody.insertAdjacentHTML('beforeend', `\n                        <tr class=\"table__row\">\n\t\t\t\t\t\t\t<td class=\"table__id table__cell\">${item.id}</td>\n\t\t\t\t\t\t\t<td class=\"table-type table__cell\">${item.type}</td>\n\t\t\t\t\t\t\t<td class=\"table-name table__cell\">\n\t\t\t\t\t\t\t\t${item.name}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"table-units table__cell\">\n\t\t\t\t\t\t\t\t${item.units}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"table-cost table__cell\">\n\t\t\t\t\t\t\t\t${item.cost} руб.\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"table__actions table__cell\">\n\t\t\t\t\t\t\t\t\t<button class=\"button action-change\"><span class=\"svg_ui\"><svg\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"action-icon_change\">\n\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"./img/sprite.svg#change\"></use>\n\t\t\t\t\t\t\t\t\t\t\t</svg></span><span>Изменить</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"button action-remove\"><span class=\"svg_ui\"><svg\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"action-icon_remove\">\n\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"./img/sprite.svg#remove\"></use>\n\t\t\t\t\t\t\t\t\t\t\t</svg></span><span>Удалить</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n`)\n\t})\n\t// })\n}\n\n\n//# sourceURL=webpack://insanework/./admin/src/modules/render.js?");

/***/ }),

/***/ "./admin/src/table.js":
/*!****************************!*\
  !*** ./admin/src/table.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./admin/src/modules/render.js\");\n/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/list */ \"./admin/src/modules/list.js\");\n/* harmony import */ var _modules_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mode */ \"./admin/src/modules/mode.js\");\n\n\n\n\n\nwindow.mode = new _modules_mode__WEBPACK_IMPORTED_MODULE_2__.Mode\n\nmode.getRepair().then(data => {\n    ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data)\n})\n\n;(0,_modules_list__WEBPACK_IMPORTED_MODULE_1__.list)()\n\n\n//# sourceURL=webpack://insanework/./admin/src/table.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./admin/src/table.js");
/******/ 	
/******/ })()
;