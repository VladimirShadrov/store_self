/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");


function getData() {
  var response = fetch('https://fortniteapi.io/v2/items/list?lang=ru', {
    method: 'GET',
    headers: {
      Authorization: '24d13aee-b446a7e4-bbdedcee-62e62bf4'
    }
  }).then(function (response) {
    return response.json();
  }).then(function (response) {
    // const res = response.items.filter((item) => item.name.indexOf('Ара') > 0); // Фильтрация по имени
    // const res = response.items.filter((item) => item.set !== null);
    // const res = response.items.map((item) => item.set !== null && item.set.name); // Фильтрация по названию набора
    var types = response.items.map(function (item) {
      return item.type.name;
    }); // Фильтрация по типу

    var res = response.items.filter(function (item) {
      return item.type.name.toLowerCase() === 'Экипировка'.toLowerCase();
    }); // Фильтрация по экипировка

    console.log('Тип героя: ', new Set(types));
    console.log('Массив по типам: ', res);
  });
} // getData();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7RUFDakIsSUFBSUMsUUFBUSxHQUFHQyxLQUFLLENBQUMsOENBQUQsRUFBaUQ7SUFBRUMsTUFBTSxFQUFFLEtBQVY7SUFBaUJDLE9BQU8sRUFBRTtNQUFFQyxhQUFhLEVBQUU7SUFBakI7RUFBMUIsQ0FBakQsQ0FBTCxDQUNaQyxJQURZLENBQ1AsVUFBQ0wsUUFBRDtJQUFBLE9BQWNBLFFBQVEsQ0FBQ00sSUFBVCxFQUFkO0VBQUEsQ0FETyxFQUVaRCxJQUZZLENBRVAsVUFBQ0wsUUFBRCxFQUFjO0lBQ2xCO0lBQ0E7SUFDQTtJQUNBLElBQU1PLEtBQUssR0FBR1AsUUFBUSxDQUFDUSxLQUFULENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtNQUFBLE9BQVVBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxJQUFwQjtJQUFBLENBQW5CLENBQWQsQ0FKa0IsQ0FJMEM7O0lBQzVELElBQU1DLEdBQUcsR0FBR2IsUUFBUSxDQUFDUSxLQUFULENBQWVNLE1BQWYsQ0FBc0IsVUFBQ0osSUFBRDtNQUFBLE9BQVVBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxJQUFWLENBQWVHLFdBQWYsT0FBaUMsYUFBYUEsV0FBYixFQUEzQztJQUFBLENBQXRCLENBQVosQ0FMa0IsQ0FLd0Y7O0lBQzFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLElBQUlDLEdBQUosQ0FBUVgsS0FBUixDQUEzQjtJQUNBUyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0osR0FBakM7RUFDRCxDQVZZLENBQWY7QUFXRCxFQUVELGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGVzLnNjc3M/YTc3NCIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLnNjc3MnO1xyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuICBsZXQgcmVzcG9uc2UgPSBmZXRjaCgnaHR0cHM6Ly9mb3J0bml0ZWFwaS5pby92Mi9pdGVtcy9saXN0P2xhbmc9cnUnLCB7IG1ldGhvZDogJ0dFVCcsIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogJzI0ZDEzYWVlLWI0NDZhN2U0LWJiZGVkY2VlLTYyZTYyYmY0JyB9IH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAvLyBjb25zdCByZXMgPSByZXNwb25zZS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0ubmFtZS5pbmRleE9mKCfQkNGA0LAnKSA+IDApOyAvLyDQpNC40LvRjNGC0YDQsNGG0LjRjyDQv9C+INC40LzQtdC90LhcclxuICAgICAgLy8gY29uc3QgcmVzID0gcmVzcG9uc2UuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNldCAhPT0gbnVsbCk7XHJcbiAgICAgIC8vIGNvbnN0IHJlcyA9IHJlc3BvbnNlLml0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5zZXQgIT09IG51bGwgJiYgaXRlbS5zZXQubmFtZSk7IC8vINCk0LjQu9GM0YLRgNCw0YbQuNGPINC/0L4g0L3QsNC30LLQsNC90LjRjiDQvdCw0LHQvtGA0LBcclxuICAgICAgY29uc3QgdHlwZXMgPSByZXNwb25zZS5pdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0udHlwZS5uYW1lKTsgLy8g0KTQuNC70YzRgtGA0LDRhtC40Y8g0L/QviDRgtC40L/Rg1xyXG4gICAgICBjb25zdCByZXMgPSByZXNwb25zZS5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICfQrdC60LjQv9C40YDQvtCy0LrQsCcudG9Mb3dlckNhc2UoKSk7IC8vINCk0LjQu9GM0YLRgNCw0YbQuNGPINC/0L4g0Y3QutC40L/QuNGA0L7QstC60LBcclxuICAgICAgY29uc29sZS5sb2coJ9Ci0LjQvyDQs9C10YDQvtGPOiAnLCBuZXcgU2V0KHR5cGVzKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfQnNCw0YHRgdC40LIg0L/QviDRgtC40L/QsNC8OiAnLCByZXMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGdldERhdGEoKTtcclxuIl0sIm5hbWVzIjpbImdldERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwianNvbiIsInR5cGVzIiwiaXRlbXMiLCJtYXAiLCJpdGVtIiwidHlwZSIsIm5hbWUiLCJyZXMiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImNvbnNvbGUiLCJsb2ciLCJTZXQiXSwic291cmNlUm9vdCI6IiJ9