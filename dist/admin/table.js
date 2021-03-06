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

/***/ "./admin/src/modules/addRepair.js":
/*!****************************************!*\
  !*** ./admin/src/modules/addRepair.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addRepair\": () => (/* binding */ addRepair)\n/* harmony export */ });\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode */ \"./admin/src/modules/mode.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./admin/src/modules/render.js\");\n\n\n\n\nconst addRepair = () => {\n    const modal = document.getElementById('modal')\n    const form = document.querySelector('#add-repair')\n    const inputType = form.querySelector('#type')\n    const inputName = form.querySelector('#name')\n    const inputUnits = form.querySelector('#units')\n    const inputCost = form.querySelector('#cost')\n    const modalHeader = document.querySelectorAll('.modal__header')\n\n\n    mode.getRepairs().then(data => {\n        form.addEventListener('submit', (e) => {\n            e.preventDefault()\n            if (!form.dataset.method) {\n                let count = +data[data.length - 1].id\n                const repair = {\n                    type: inputType.value,\n                    name: inputName.value,\n                    units: inputUnits.value,\n                    cost: +inputCost.value,\n                    id: count + 1\n                }\n                mode.addRepair(repair).then(() => {\n                    mode.getRepairs().then(repairs => {\n                        ;(0,_render__WEBPACK_IMPORTED_MODULE_1__.render)(repairs)\n                    })\n                })\n            }\n\n        })\n\n        document.addEventListener('click', (e) => {\n            if (e.target.closest('.btn-addItem')) {\n                modalHeader[1].style.display = 'none'\n                modalHeader[0].style.display = 'block'\n                modal.style.display = 'flex'\n                form.reset()\n            }\n            if (e.target.closest('.button__close')) {\n                modal.style.display = 'none'\n            }\n            if (e.target.closest('.cancel-button')) {\n                e.preventDefault()\n                modal.style.display = 'none'\n            }\n        })\n    })\n}\n\n//# sourceURL=webpack://insanework/./admin/src/modules/addRepair.js?");

/***/ }),

/***/ "./admin/src/modules/changeRepairs.js":
/*!********************************************!*\
  !*** ./admin/src/modules/changeRepairs.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeRepairs\": () => (/* binding */ changeRepairs)\n/* harmony export */ });\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode */ \"./admin/src/modules/mode.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./admin/src/modules/render.js\");\n\n\n\n\nconst changeRepairs = () => {\n    const tbody = document.getElementById('tbody')\n    const modal = document.getElementById('modal')\n    const form = document.querySelector('#add-repair')\n    const inputType = form.querySelector('#type')\n    const inputName = form.querySelector('#name')\n    const inputUnits = form.querySelector('#units')\n    const inputCost = form.querySelector('#cost')\n    const modalHeader = document.querySelectorAll('.modal__header')\n\n    tbody.addEventListener('click', (e) => {\n        if (e.target.closest('.action-change')) {\n            const tr = e.target.closest('tr')\n            const id = tr.dataset.key\n            mode.getRepair(id).then(repair => {\n                modal.style.display = 'flex'\n                modalHeader[0].style.display = 'none'\n                modalHeader[1].style.display = 'block'\n                inputType.value = repair.type\n                inputName.value = repair.name\n                inputUnits.value = repair.units\n                inputCost.value = repair.cost\n                form.dataset.method = id\n            })\n        }\n    })\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n        if (form.dataset.method) {\n            const id = form.dataset.method\n            const repair = {\n                type: inputType.value,\n                name: inputName.value,\n                units: inputUnits.value,\n                cost: +inputCost.value,\n                id: id\n            }\n            mode.editRepair(id, repair).then(() => {\n                mode.getRepairs().then(rep => {\n                    ;(0,_render__WEBPACK_IMPORTED_MODULE_1__.render)(rep)\n                    form.reset()\n                    form.removeAttribute('data-method')\n                })\n            })\n        }\n    })\n}\n\n//# sourceURL=webpack://insanework/./admin/src/modules/changeRepairs.js?");

/***/ }),

/***/ "./admin/src/modules/list.js":
/*!***********************************!*\
  !*** ./admin/src/modules/list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"list\": () => (/* binding */ list)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./admin/src/modules/render.js\");\n\n\n\nconst list = () => {\n    const select = document.querySelectorAll('#typeItem')\n    let arr = []\n\n    function unique(arr) {\n        let result = [];\n        for (let str of arr) {\n            if (!result.includes(str)) {\n                result.push(str);\n            }\n        }\n        return result;\n    }\n\n    mode.getRepairs().then(data => {\n        data.forEach(item => {\n            arr = arr.concat(item.type)\n        })\n        let list = unique(arr)\n        list.forEach((elem, index) => {\n            let opt = document.createElement('option')\n            opt.value = index\n            opt.textContent = elem\n            select[0].append(opt)\n        })\n        select[0].addEventListener('change', (e) => {\n            select.forEach(elem => {\n                const sel = elem.options[elem.selectedIndex]\n                if (sel.value === '?????? ????????????') {\n                    mode.getRepairs().then(repairs => {\n                        (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(repairs)\n                    })\n                }\n                else {\n\n\n                    mode.filter(sel.textContent).then(post => {\n                        (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(post)\n                    })\n                }\n            })\n        })\n    })\n}\n\n//# sourceURL=webpack://insanework/./admin/src/modules/list.js?");

/***/ }),

/***/ "./admin/src/modules/mode.js":
/*!***********************************!*\
  !*** ./admin/src/modules/mode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Mode\": () => (/* binding */ Mode)\n/* harmony export */ });\nclass Mode {\n    checkUsers(str) {\n        return fetch(`http://localhost:3000/users?name_like=${str}`).then(res => res.json())\n    }\n    getRepairs() {\n        return fetch('http://localhost:3000/posts').then(res => res.json())\n    }\n    filter(str) {\n        return fetch(`http://localhost:3000/posts?type=${str}`).then(res => res.json())\n    }\n    addRepair(repair) {\n        return fetch('http://localhost:3000/posts', {\n            method: \"POST\",\n            headers: {\n                \"Content-type\": \"application/json\",\n            },\n            body: JSON.stringify(repair)\n        }).then(res => res.json())\n    }\n    getRepair(id) {\n        return fetch(`http://localhost:3000/posts/${id}`).then(res => res.json())\n    }\n    editRepair(id, repair) {\n        return fetch(`http://localhost:3000/posts/${id}`, {\n            method: 'PUT',\n            body: JSON.stringify(repair),\n            headers: {\n                \"Content-type\": \"application/json\",\n            }\n        }).then(res => res.json())\n    }\n    removeRepair(id) {\n        return fetch(`http://localhost:3000/posts/${id}`, {\n            method: 'DELETE'\n        }).then(res => res.json())\n    }\n}\n\n//# sourceURL=webpack://insanework/./admin/src/modules/mode.js?");

/***/ }),

/***/ "./admin/src/modules/removeRepair.js":
/*!*******************************************!*\
  !*** ./admin/src/modules/removeRepair.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeRepair\": () => (/* binding */ removeRepair)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./admin/src/modules/render.js\");\n\n\n\nconst removeRepair = () => {\n    const tbody = document.getElementById('tbody')\n\n    tbody.addEventListener('click', (e) => {\n\n        if (e.target.closest('.action-remove')) {\n            const tr = e.target.closest('tr')\n            const id = tr.dataset.key\n            mode.removeRepair(id).then(res => {\n                mode.getRepairs().then(repair => {\n                    ;(0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(repair)\n                })\n            })\n        }\n    })\n}\n\n//# sourceURL=webpack://insanework/./admin/src/modules/removeRepair.js?");

/***/ }),

/***/ "./admin/src/modules/render.js":
/*!*************************************!*\
  !*** ./admin/src/modules/render.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode */ \"./admin/src/modules/mode.js\");\n\n\nconst render = (users) => {\n\tconst tbody = document.getElementById('tbody')\n\n\ttbody.innerHTML = ''\n\t// mode.getRepair().then(data => {\n\tusers.forEach(item => {\n\t\ttbody.insertAdjacentHTML('beforeend', `\n                        <tr class=\"table__row\" data-key=\"${item.id}\">\n\t\t\t\t\t\t\t<td class=\"table__id table__cell\">${item.id}</td>\n\t\t\t\t\t\t\t<td class=\"table-type table__cell\">${item.type}</td>\n\t\t\t\t\t\t\t<td class=\"table-name table__cell\">\n\t\t\t\t\t\t\t\t${item.name}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"table-units table__cell\">\n\t\t\t\t\t\t\t\t${item.units}\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"table-cost table__cell\">\n\t\t\t\t\t\t\t\t${item.cost} ??????.\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<div class=\"table__actions table__cell\">\n\t\t\t\t\t\t\t\t\t<button class=\"button action-change\"><span class=\"svg_ui\"><svg\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"action-icon_change\">\n\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"./img/sprite.svg#change\"></use>\n\t\t\t\t\t\t\t\t\t\t\t</svg></span><span>????????????????</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<button class=\"button action-remove\"><span class=\"svg_ui\"><svg\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"action-icon_remove\">\n\t\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"./img/sprite.svg#remove\"></use>\n\t\t\t\t\t\t\t\t\t\t\t</svg></span><span>??????????????</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n`)\n\t})\n\t// })\n}\n\n\n//# sourceURL=webpack://insanework/./admin/src/modules/render.js?");

/***/ }),

/***/ "./admin/src/table.js":
/*!****************************!*\
  !*** ./admin/src/table.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./admin/src/modules/render.js\");\n/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/list */ \"./admin/src/modules/list.js\");\n/* harmony import */ var _modules_addRepair__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addRepair */ \"./admin/src/modules/addRepair.js\");\n/* harmony import */ var _modules_changeRepairs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/changeRepairs */ \"./admin/src/modules/changeRepairs.js\");\n/* harmony import */ var _modules_removeRepair__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/removeRepair */ \"./admin/src/modules/removeRepair.js\");\n/* harmony import */ var _modules_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/mode */ \"./admin/src/modules/mode.js\");\n\n\n\n\n\n\n\n\nwindow.mode = new _modules_mode__WEBPACK_IMPORTED_MODULE_5__.Mode\n\nmode.getRepairs().then(data => {\n    ;(0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data)\n})\n\n;(0,_modules_list__WEBPACK_IMPORTED_MODULE_1__.list)()\n;(0,_modules_addRepair__WEBPACK_IMPORTED_MODULE_2__.addRepair)()\n;(0,_modules_changeRepairs__WEBPACK_IMPORTED_MODULE_3__.changeRepairs)()\n;(0,_modules_removeRepair__WEBPACK_IMPORTED_MODULE_4__.removeRepair)()\n\n\n//# sourceURL=webpack://insanework/./admin/src/table.js?");

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