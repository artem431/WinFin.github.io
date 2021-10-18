/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ "./js/script.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_js__WEBPACK_IMPORTED_MODULE_1__);
// import '../../node_modules/focus-visible/dist/focus-visible';

 // import '../index.html';

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

var headerMenu = document.querySelector(".header__menu");
var headerNav = document.querySelector(".header__nav");
var headerBurgerButton = document.querySelector(".header__button");
var headerBurgerIcon = document.querySelector(".header__burger-svg");
var headerCloseBurgerIcon = document.querySelector(".header__close-burger");

var hideMenu = function hideMenu() {
  headerMenu.classList.add("hide-element-mob");
  headerNav.classList.add("add-padding");
  headerBurgerButton.classList.remove("hide-element");
  headerBurgerButton.classList.add("show-element-only-mob");
};

var onHeaderBurgerBtnClick = function onHeaderBurgerBtnClick(evt) {
  evt.preventDefault();

  if (headerBurgerIcon.classList.contains("hide-element")) {
    headerBurgerIcon.classList.remove("hide-element");
    headerCloseBurgerIcon.classList.add("hide-element");
    headerNav.classList.add("add-padding");
    headerMenu.classList.add("hide-element-mob");
  } else {
    headerBurgerIcon.classList.add("hide-element");
    headerCloseBurgerIcon.classList.remove("hide-element");
    headerNav.classList.remove("add-padding");
    headerMenu.classList.remove("hide-element-mob");
  }
};

hideMenu();
headerBurgerButton.addEventListener("click", onHeaderBurgerBtnClick);
var modalOpenButton = document.querySelector(".Q-A__question-link");
var modalForm = document.querySelector(".modal");
var modalCloseButton = document.querySelector(".modal-close");

var openModal = function openModal() {
  modalForm.classList.remove("modal-write");
};

var closeModal = function closeModal() {
  modalForm.classList.add("modal-write");
};

var onCloseBtnClick = function onCloseBtnClick(evt) {
  closeModal();
  removeModalListeners();
};

var onShowBtnClick = function onShowBtnClick(evt) {
  evt.preventDefault();
  openModal();
  initModalListeners();
};

var onModalKeyDown = function onModalKeyDown(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    onCloseBtnClick();
  }

  ;
};

var onModalOutLineClick = function onModalOutLineClick(evt) {
  if (evt.target == modalForm) {
    onCloseBtnClick();
  }
};

modalOpenButton.addEventListener("click", onShowBtnClick);

var removeModalListeners = function removeModalListeners() {
  modalCloseButton.removeEventListener("click", onCloseBtnClick);
  document.removeEventListener('keydown', onModalKeyDown);
  window.removeEventListener("click", onModalOutLineClick);
};

var initModalListeners = function initModalListeners() {
  modalCloseButton.addEventListener("click", onCloseBtnClick);
  document.addEventListener('keydown', onModalKeyDown);
  window.addEventListener("click", onModalOutLineClick);
};

var questionButtons = document.querySelectorAll(".Q-A__question-button");
var answer = document.querySelector(".answer");
var answers = document.querySelectorAll(".answer");
var questions = document.querySelectorAll(".question");
answer.classList.add("hide-element");

var _loop = function _loop(index) {
  questions[index].classList.add("plus-answer");
  questions[index].classList.remove("plus");
  questionButtons[index].addEventListener('click', function (evt) {
    answers[index].classList.toggle("hide-element");
    questions[index].classList.toggle("plus-answer");
  });
};

for (var index = 0; index < questionButtons.length; index++) {
  _loop(index);
}

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map