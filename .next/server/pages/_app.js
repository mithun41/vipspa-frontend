/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ \"./public/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/free-mode */ \"./node_modules/swiper/modules/free-mode.css\");\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/thumbs */ \"./node_modules/swiper/modules/thumbs.css\");\n/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css/effect-fade */ \"./node_modules/swiper/modules/effect-fade.css\");\n/* harmony import */ var swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_fade__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n// ১. TanStack Query ইমপোর্ট করুন\n\nfunction MyApp({ Component, pageProps }) {\n    // ২. একটি QueryClient ইনস্ট্যান্স তৈরি করুন (স্টেট হিসেবে রাখা ভালো)\n    const [queryClient] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.QueryClient());\n    return(// ৩. পুরো অ্যাপকে প্রোভাইডার দিয়ে মুড়িয়ে দিন\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_11__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\SoftzenIT1\\\\Desktop\\\\Mithun\\\\Spa\\\\OurSpa-main\\\\pages\\\\_app.js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\SoftzenIT1\\\\Desktop\\\\Mithun\\\\Spa\\\\OurSpa-main\\\\pages\\\\_app.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFDVTtBQUNDO0FBQ0E7QUFDVTtBQUNSO0FBQ0g7QUFDSDtBQUNLO0FBRUM7QUFDakMsaUNBQWlDO0FBQ3dDO0FBRXpFLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUVBQXFFO0lBQ3JFLE1BQU0sQ0FBQ0MsWUFBWSxHQUFHTixnREFBUUEsQ0FBQyxJQUFNLElBQUlDLCtEQUFXQTtJQUVwRCxPQUNFLDZDQUE2QztrQkFDN0MsOERBQUNDLHVFQUFtQkE7UUFBQ0ssUUFBUUQ7a0JBQzNCLDRFQUFDRjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXJlcmVsYXgtbmV4dC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzd2lwZXIvY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL3Njcm9sbGJhclwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL2ZyZWUtbW9kZVwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy90aHVtYnNcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvZWZmZWN0LWZhZGVcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIOCnpy4gVGFuU3RhY2sgUXVlcnkg4KaH4Kau4Kaq4KeL4Kaw4KeN4KafIOCmleCmsOCngeCmqFxuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvLyDgp6guIOCmj+CmleCmn+CmvyBRdWVyeUNsaWVudCDgpofgpqjgprjgp43gpp/gp43gpq/gpr7gpqjgp43gprgg4Kak4KeI4Kaw4Ka/IOCmleCmsOCngeCmqCAo4Ka44KeN4Kaf4KeH4KafIOCmueCmv+CmuOCnh+CmrOCnhyDgprDgpr7gppbgpr4g4Kat4Ka+4Kay4KeLKVxuICBjb25zdCBbcXVlcnlDbGllbnRdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFF1ZXJ5Q2xpZW50KCkpO1xuXG4gIHJldHVybiAoXG4gICAgLy8g4KepLiDgpqrgp4HgprDgp4sg4KaF4KeN4Kav4Ka+4Kaq4KaV4KeHIOCmquCnjeCmsOCni+CmreCmvuCmh+CmoeCmvuCmsCDgpqbgpr/gp5/gp4cg4Kau4KeB4Kec4Ka/4Kef4KeHIOCmpuCmv+CmqFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudCIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/swiper"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();