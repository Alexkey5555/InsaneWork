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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_tel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tel */ \"./modules/tel.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/maskPhone */ \"./modules/maskPhone.js\");\n\n\n\n\n\n\n(0,_modules_tel__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('input[name=\"phone\"]')\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/maskPhone.js":
/*!******************************!*\
  !*** ./modules/maskPhone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst maskPhone = (selector, masked = '+7 (___) ___-__-__') => {\n    const elems = document.querySelectorAll(selector);\n\n    function mask(event) {\n        const keyCode = event.keyCode;\n        const template = masked,\n            def = template.replace(/\\D/g, \"\"),\n            val = this.value.replace(/\\D/g, \"\");\n        let i = 0,\n            newValue = template.replace(/[_\\d]/g, function (a) {\n                return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n            });\n        i = newValue.indexOf(\"_\");\n        if (i != -1) {\n            newValue = newValue.slice(0, i);\n        }\n        let reg = template.substr(0, this.value.length).replace(/_+/g,\n            function (a) {\n                return \"\\\\d{1,\" + a.length + \"}\";\n            }).replace(/[+()]/g, \"\\\\$&\");\n        reg = new RegExp(\"^\" + reg + \"$\");\n        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n            this.value = newValue;\n        }\n        if (event.type == \"blur\" && this.value.length < 5) {\n            this.value = \"\";\n        }\n\n    }\n\n    for (const elem of elems) {\n        elem.addEventListener(\"input\", mask);\n        elem.addEventListener(\"focus\", mask);\n        elem.addEventListener(\"blur\", mask);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (maskPhone);\n\n//# sourceURL=webpack:///./modules/maskPhone.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n    const menu = document.querySelector('.popup-dialog-menu')\n    const menuItem = document.querySelectorAll('.popup-menu-nav__item>a')\n    const menuAllService = document.querySelectorAll('.allservice')\n    const allServiceModal = document.querySelector('.popup-repair-types')\n    const privacy = document.querySelectorAll('span.link-privacy')\n    const modalPrivacy = document.querySelector('.popup-privacy')\n\n\n\n    document.addEventListener('click', (e) => {\n\n        if (e.target.closest('.menu__icon')) {\n            e.preventDefault()\n            menu.style.transform = 'translate3d(0px, 0, 0)'\n            menu.style.webkitTransform = 'translate3d(0px, 0, 0)'\n        }\n        else if (e.target.closest('.close-menu') || !e.target.closest('.row')) {\n            menu.removeAttribute('style')\n        }\n\n        menuItem.forEach(item => {\n            if (e.target === item) {\n                e.preventDefault()\n                let linkhref = e.target.attributes.href.value.slice(1)\n                let link = document.getElementById(linkhref)\n                link.scrollIntoView({ behavior: \"smooth\" })\n                menu.removeAttribute('style')\n            }\n        })\n        if (e.target.closest('.button-footer')) {\n            e.preventDefault()\n            window.scrollTo({\n                top: 0,\n                behavior: 'smooth'\n            });\n        }\n        if (e.target.closest('div>.mobile-hide')) {\n            allServiceModal.removeAttribute('style')\n            modalPrivacy.removeAttribute('style')\n        }\n        menuAllService.forEach(item => {\n            if (e.target === item) {\n                e.preventDefault()\n                allServiceModal.style.zIndex = '99999'\n                allServiceModal.style.visibility = 'visible'\n                menu.removeAttribute('style')\n            }\n        })\n        privacy.forEach(item => {\n            if (e.target === item) {\n                modalPrivacy.style.visibility = 'visible'\n            }\n        })\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/tel.js":
/*!************************!*\
  !*** ./modules/tel.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tel = () => {\n    const arrow = document.querySelector('.header-contacts__arrow')\n    const divPhone = document.querySelector('.header-contacts__phone-number-accord')\n    const phone = document.querySelector('.header-contacts__phone-number-accord>a')\n    let change = true\n\n    arrow.addEventListener('click', (e) => {\n        if (change) {\n            divPhone.style.position = 'relative'\n            phone.style.webkitTransition = '0.5s'\n            phone.style.transition = '0.5s'\n            phone.style.opacity = '1'\n            change = false\n        }\n        else {\n            divPhone.style.position = 'absolute'\n            phone.style.webkitTransition = '0s'\n            phone.style.transition = '0s'\n            phone.style.opacity = '0'\n            change = true\n        }\n    })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tel);\n\n//# sourceURL=webpack:///./modules/tel.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;