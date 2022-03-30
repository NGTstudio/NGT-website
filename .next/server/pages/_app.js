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

/***/ "./src/config/config.ts":
/*!******************************!*\
  !*** ./src/config/config.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GTM_ID\": () => (/* binding */ GTM_ID)\n/* harmony export */ });\nconst GTM_ID = 'GTM-M2BWXLW';\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2NvbmZpZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sS0FBSyxDQUFDQSxNQUFNLEdBQUcsQ0FBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2V2b2hvbWUvLi9zcmMvY29uZmlnL2NvbmZpZy50cz9iM2E2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHVE1fSUQgPSAnR1RNLU0yQldYTFcnO1xuIl0sIm5hbWVzIjpbIkdUTV9JRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/config.ts\n");

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GTM_ID\": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__.GTM_ID)\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config/config.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXZvaG9tZS8uL3NyYy9jb25maWcvaW5kZXgudHM/ZGE5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBHVE1fSUQgfSBmcm9tICcuL2NvbmZpZyc7XG4iXSwibmFtZXMiOlsiR1RNX0lEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/index.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _themes_Default_Default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/Default/Default */ \"./src/themes/Default/Default.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_gtm_module_dist_TagManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-gtm-module/dist/TagManager */ \"react-gtm-module/dist/TagManager\");\n/* harmony import */ var react_gtm_module_dist_TagManager__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_gtm_module_dist_TagManager__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fontsource_nunito_200_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fontsource/nunito/200.css */ \"./node_modules/@fontsource/nunito/200.css\");\n/* harmony import */ var _fontsource_nunito_200_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_200_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fontsource_nunito_300_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fontsource/nunito/300.css */ \"./node_modules/@fontsource/nunito/300.css\");\n/* harmony import */ var _fontsource_nunito_300_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_300_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fontsource_nunito_400_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fontsource/nunito/400.css */ \"./node_modules/@fontsource/nunito/400.css\");\n/* harmony import */ var _fontsource_nunito_400_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_400_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _fontsource_nunito_500_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fontsource/nunito/500.css */ \"./node_modules/@fontsource/nunito/500.css\");\n/* harmony import */ var _fontsource_nunito_500_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_500_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _fontsource_nunito_600_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fontsource/nunito/600.css */ \"./node_modules/@fontsource/nunito/600.css\");\n/* harmony import */ var _fontsource_nunito_600_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_600_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fontsource_nunito_700_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fontsource/nunito/700.css */ \"./node_modules/@fontsource/nunito/700.css\");\n/* harmony import */ var _fontsource_nunito_700_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_700_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _fontsource_nunito_800_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fontsource/nunito/800.css */ \"./node_modules/@fontsource/nunito/800.css\");\n/* harmony import */ var _fontsource_nunito_800_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_800_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _fontsource_nunito_900_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fontsource/nunito/900.css */ \"./node_modules/@fontsource/nunito/900.css\");\n/* harmony import */ var _fontsource_nunito_900_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fontsource_nunito_900_css__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _fontsource_press_start_2p_400_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fontsource/press-start-2p/400.css */ \"./node_modules/@fontsource/press-start-2p/400.css\");\n/* harmony import */ var _fontsource_press_start_2p_400_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fontsource_press_start_2p_400_css__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../style.global.css */ \"./src/style.global.css\");\n/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_global_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../config */ \"./src/config/index.ts\");\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-ga4 */ \"react-ga4\");\n/* harmony import */ var react_ga4__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_ga4__WEBPACK_IMPORTED_MODULE_16__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Website = ({ Component , pageProps  })=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        react_gtm_module_dist_TagManager__WEBPACK_IMPORTED_MODULE_4___default().initialize({\n            gtmId: _config__WEBPACK_IMPORTED_MODULE_15__.GTM_ID\n        });\n        react_ga4__WEBPACK_IMPORTED_MODULE_16___default().initialize('G-VV5KC401XE');\n        react_ga4__WEBPACK_IMPORTED_MODULE_16___default().send('pageview');\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n        theme: _themes_Default_Default__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alber\\\\Documents\\\\Projects\\\\EvoVerses\\\\evohome\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alber\\\\Documents\\\\Projects\\\\EvoVerses\\\\evohome\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Website);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNHO0FBQ1o7QUFDaUI7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ2Y7QUFDTTtBQUNIO0FBTy9CLEtBQUssQ0FBQ08sT0FBTyxJQUEyQyxDQUFDLENBQ3ZEQyxTQUFTLEdBQ1RDLFNBQVMsRUFDRyxDQUFDLEdBQUssQ0FBQztJQUNuQk4sZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZDLGtGQUFxQixDQUFDLENBQUM7WUFBQ08sS0FBSyxFQUFFTiw0Q0FBTTtRQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDQyw0REFBa0IsQ0FBQyxDQUFjLGNBQUMsQ0FBQztRQUNuQ0Esc0RBQVksQ0FBQyxDQUFVLFVBQUMsQ0FBQztJQUMzQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVQLE1BQU0sNkVBQ0hOLDREQUFjO1FBQUNhLEtBQUssRUFBRVosK0RBQVk7OEZBQ2hDTyxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXZvaG9tZS8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgRGVmYXVsdFRoZW1lIGZyb20gJy4uL3RoZW1lcy9EZWZhdWx0L0RlZmF1bHQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWdNYW5hZ2VyIGZyb20gJ3JlYWN0LWd0bS1tb2R1bGUvZGlzdC9UYWdNYW5hZ2VyJztcbmltcG9ydCAnQGZvbnRzb3VyY2UvbnVuaXRvLzIwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9udW5pdG8vMzAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL251bml0by80MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2UvbnVuaXRvLzUwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9udW5pdG8vNjAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL251bml0by83MDAuY3NzJztcbmltcG9ydCAnQGZvbnRzb3VyY2UvbnVuaXRvLzgwMC5jc3MnO1xuaW1wb3J0ICdAZm9udHNvdXJjZS9udW5pdG8vOTAwLmNzcyc7XG5pbXBvcnQgJ0Bmb250c291cmNlL3ByZXNzLXN0YXJ0LTJwLzQwMC5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZS5nbG9iYWwuY3NzJztcbmltcG9ydCB7IEdUTV9JRCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYTQnO1xuXG5pbnRlcmZhY2UgV2Vic2l0ZVByb3BzIHtcbiAgQ29tcG9uZW50OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDtcbiAgcGFnZVByb3BzOiBhbnk7XG59XG5cbmNvbnN0IFdlYnNpdGU6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFdlYnNpdGVQcm9wcz4gPSAoe1xuICBDb21wb25lbnQsXG4gIHBhZ2VQcm9wcyxcbn06IFdlYnNpdGVQcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFRhZ01hbmFnZXIuaW5pdGlhbGl6ZSh7IGd0bUlkOiBHVE1fSUQgfSk7XG4gICAgUmVhY3RHQS5pbml0aWFsaXplKCdHLVZWNUtDNDAxWEUnKTtcbiAgICBSZWFjdEdBLnNlbmQoJ3BhZ2V2aWV3Jyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17RGVmYXVsdFRoZW1lfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV2Vic2l0ZTtcbiJdLCJuYW1lcyI6WyJDaGFrcmFQcm92aWRlciIsIkRlZmF1bHRUaGVtZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiVGFnTWFuYWdlciIsIkdUTV9JRCIsIlJlYWN0R0EiLCJXZWJzaXRlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaW5pdGlhbGl6ZSIsImd0bUlkIiwic2VuZCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/themes/Default/Default.js":
/*!***************************************!*\
  !*** ./src/themes/Default/Default.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        evoOrange: {\n            100: '#DE961A',\n            200: '#DE961A',\n            300: '#DE961A',\n            400: '#DE961A',\n            500: '#DE961A',\n            600: '#DE961A',\n            700: '#DE961A',\n            800: '#DE961A',\n            900: '#DE961A'\n        }\n    },\n    fonts: {\n        heading: 'nunito, sans-serif',\n        body: 'nunito, sans-serif'\n    },\n    config: {\n        initialColorMode: 'dark',\n        useSystemColorMode: false\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWVzL0RlZmF1bHQvRGVmYXVsdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsS0FBSyxDQUFDQyxLQUFLLEdBQUdELDZEQUFXLENBQUMsQ0FBQztJQUN6QkUsTUFBTSxFQUFFLENBQUM7UUFDUEMsU0FBUyxFQUFFLENBQUM7QUFDVixlQUFHLEVBQUUsQ0FBUztBQUNkLGVBQUcsRUFBRSxDQUFTO0FBQ2QsZUFBRyxFQUFFLENBQVM7QUFDZCxlQUFHLEVBQUUsQ0FBUztBQUNkLGVBQUcsRUFBRSxDQUFTO0FBQ2QsZUFBRyxFQUFFLENBQVM7QUFDZCxlQUFHLEVBQUUsQ0FBUztBQUNkLGVBQUcsRUFBRSxDQUFTO0FBQ2QsZUFBRyxFQUFFLENBQVM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDTkMsT0FBTyxFQUFFLENBQW9CO1FBQzdCQyxJQUFJLEVBQUUsQ0FBb0I7SUFDNUIsQ0FBQztJQUNEQyxNQUFNLEVBQUUsQ0FBQztRQUNQQyxnQkFBZ0IsRUFBRSxDQUFNO1FBQ3hCQyxrQkFBa0IsRUFBRSxLQUFLO0lBQzNCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVSLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V2b2hvbWUvLi9zcmMvdGhlbWVzL0RlZmF1bHQvRGVmYXVsdC5qcz9jNGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICBldm9PcmFuZ2U6IHtcbiAgICAgIDEwMDogJyNERTk2MUEnLFxuICAgICAgMjAwOiAnI0RFOTYxQScsXG4gICAgICAzMDA6ICcjREU5NjFBJyxcbiAgICAgIDQwMDogJyNERTk2MUEnLFxuICAgICAgNTAwOiAnI0RFOTYxQScsXG4gICAgICA2MDA6ICcjREU5NjFBJyxcbiAgICAgIDcwMDogJyNERTk2MUEnLFxuICAgICAgODAwOiAnI0RFOTYxQScsXG4gICAgICA5MDA6ICcjREU5NjFBJyxcbiAgICB9LFxuICB9LFxuICBmb250czoge1xuICAgIGhlYWRpbmc6ICdudW5pdG8sIHNhbnMtc2VyaWYnLFxuICAgIGJvZHk6ICdudW5pdG8sIHNhbnMtc2VyaWYnLFxuICB9LFxuICBjb25maWc6IHtcbiAgICBpbml0aWFsQ29sb3JNb2RlOiAnZGFyaycsXG4gICAgdXNlU3lzdGVtQ29sb3JNb2RlOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsInRoZW1lIiwiY29sb3JzIiwiZXZvT3JhbmdlIiwiZm9udHMiLCJoZWFkaW5nIiwiYm9keSIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/themes/Default/Default.js\n");

/***/ }),

/***/ "./node_modules/@fontsource/nunito/200.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/nunito/200.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/nunito/300.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/nunito/300.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/nunito/400.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/nunito/400.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/nunito/500.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/nunito/500.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/nunito/600.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/nunito/600.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/nunito/700.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/nunito/700.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/nunito/800.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/nunito/800.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/nunito/900.css":
/*!*************************************************!*\
  !*** ./node_modules/@fontsource/nunito/900.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/@fontsource/press-start-2p/400.css":
/*!*********************************************************!*\
  !*** ./node_modules/@fontsource/press-start-2p/400.css ***!
  \*********************************************************/
/***/ (() => {



/***/ }),

/***/ "./src/style.global.css":
/*!******************************!*\
  !*** ./src/style.global.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-ga4":
/*!****************************!*\
  !*** external "react-ga4" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-ga4");

/***/ }),

/***/ "react-gtm-module/dist/TagManager":
/*!***************************************************!*\
  !*** external "react-gtm-module/dist/TagManager" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-gtm-module/dist/TagManager");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();