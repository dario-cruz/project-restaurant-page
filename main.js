/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/navbar.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/navbar.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.navbar {\r\n    display: grid;\r\n    grid-template: 100px / 300px 1fr 1fr 300px;\r\n    grid-template-areas: \"left right right none\";\r\n    background-color: #a77e58;\r\n    box-shadow: 0px 3px 5px black;\r\n}\r\n.navbar > .left-side {\r\n    grid-area: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: \"Krona\";\r\n    padding-left: 15px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.left-side > .titleslogan {\r\n    margin-top: -15px;\r\n    font-size: 18pt;\r\n    font-family: \"Mallanna\";\r\n}\r\n.navbar > .right-side {\r\n    grid-area: right;\r\n    display: grid;\r\n    grid-column: repeat(3, 1fr);\r\n    grid-template-areas: \"menu directions about\";\r\n    font-family: \"Mallanna\";\r\n    font-size: 9pt;\r\n    color: white;\r\n}\r\n/* Hover underline effect */\r\n.right-side > .menu > h1, .right-side > .directions > h1, .right-side > .about > h1 {\r\n    position: relative;\r\n    text-decoration: none;\r\n    color: white;\r\n    user-select: none;\r\n}\r\n.right-side > .menu > h1:hover, .right-side > .directions > h1:hover, .right-side > .about > h1:hover {\r\n    color: white;\r\n}\r\n.right-side > .menu > h1::before, .right-side > .directions > h1::before, .right-side > .about > h1::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    bottom: 0;\r\n    background-color: white;\r\n    transform: scale(0);\r\n    transition: transform 0.3s ease;\r\n}\r\n.right-side > .menu > h1:hover::before, .right-side > .directions > h1:hover::before, .right-side > .about > h1:hover::before {\r\n    transform: scale(1);\r\n}\r\n/* End of effect. */\r\n\r\n/* Nav elem positioning. */\r\n.right-side > .menu {\r\n    grid-area: menu;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.right-side > .directions {\r\n    grid-area: directions;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.right-side > .about {\r\n    grid-area: about;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/components/navbar.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,4CAA4C;IAC5C,yBAAyB;IACzB,6BAA6B;AACjC;AACA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,eAAe;IACf,uBAAuB;AAC3B;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,4CAA4C;IAC5C,uBAAuB;IACvB,cAAc;IACd,YAAY;AAChB;AACA,2BAA2B;AAC3B;IACI,kBAAkB;IAClB,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;AACA;IACI,WAAW;IACX,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,WAAW;IACX,SAAS;IACT,uBAAuB;IACvB,mBAAmB;IACnB,+BAA+B;AACnC;AACA;IACI,mBAAmB;AACvB;AACA,mBAAmB;;AAEnB,0BAA0B;AAC1B;IACI,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,qBAAqB;IACrB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.navbar {\r\n    display: grid;\r\n    grid-template: 100px / 300px 1fr 1fr 300px;\r\n    grid-template-areas: \"left right right none\";\r\n    background-color: #a77e58;\r\n    box-shadow: 0px 3px 5px black;\r\n}\r\n.navbar > .left-side {\r\n    grid-area: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: \"Krona\";\r\n    padding-left: 15px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n.left-side > .titleslogan {\r\n    margin-top: -15px;\r\n    font-size: 18pt;\r\n    font-family: \"Mallanna\";\r\n}\r\n.navbar > .right-side {\r\n    grid-area: right;\r\n    display: grid;\r\n    grid-column: repeat(3, 1fr);\r\n    grid-template-areas: \"menu directions about\";\r\n    font-family: \"Mallanna\";\r\n    font-size: 9pt;\r\n    color: white;\r\n}\r\n/* Hover underline effect */\r\n.right-side > .menu > h1, .right-side > .directions > h1, .right-side > .about > h1 {\r\n    position: relative;\r\n    text-decoration: none;\r\n    color: white;\r\n    user-select: none;\r\n}\r\n.right-side > .menu > h1:hover, .right-side > .directions > h1:hover, .right-side > .about > h1:hover {\r\n    color: white;\r\n}\r\n.right-side > .menu > h1::before, .right-side > .directions > h1::before, .right-side > .about > h1::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 2px;\r\n    bottom: 0;\r\n    background-color: white;\r\n    transform: scale(0);\r\n    transition: transform 0.3s ease;\r\n}\r\n.right-side > .menu > h1:hover::before, .right-side > .directions > h1:hover::before, .right-side > .about > h1:hover::before {\r\n    transform: scale(1);\r\n}\r\n/* End of effect. */\r\n\r\n/* Nav elem positioning. */\r\n.right-side > .menu {\r\n    grid-area: menu;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.right-side > .directions {\r\n    grid-area: directions;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.right-side > .about {\r\n    grid-area: about;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Mallanna Regular.ttf */ "./src/fonts/Mallanna Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Krona One Regular.ttf */ "./src/fonts/Krona One Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Browser reset and wire frame. */\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    /* border: 2px solid black; */\r\n}\r\n/* Color paller for the site. */\r\n:root {\r\n    --off-white: #f7f3e3;\r\n    --brown-red: #6f1a07;\r\n    --grey-black: #2b2118;\r\n    --light-brown: #a77e58;\r\n    --teal-green: #2f9c95;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Mallanna\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n@font-face {\r\n    font-family: \"Krona\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n#container {\r\n    display: grid;\r\n    grid-template: 100px 4fr 1fr / 1fr 4fr 1fr;\r\n    grid-template-areas: \r\n    \"nav nav nav\"\r\n    \"left center right\"\r\n    \"left bottom right\";\r\n    height: 100vh ;\r\n}\r\n#container > .navbar {\r\n    grid-area: nav;\r\n}\r\n#container > .mainpage {\r\n    grid-area: center;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA,kCAAkC;AAClC;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,6BAA6B;AACjC;AACA,+BAA+B;AAC/B;IACI,oBAAoB;IACpB,oBAAoB;IACpB,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,4CAAuC;AAC3C;AACA;IACI,oBAAoB;IACpB,4CAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C;;;uBAGmB;IACnB,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,iBAAiB;AACrB","sourcesContent":["/* Browser reset and wire frame. */\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n    /* border: 2px solid black; */\r\n}\r\n/* Color paller for the site. */\r\n:root {\r\n    --off-white: #f7f3e3;\r\n    --brown-red: #6f1a07;\r\n    --grey-black: #2b2118;\r\n    --light-brown: #a77e58;\r\n    --teal-green: #2f9c95;\r\n}\r\n\r\nbody {\r\n    background-color: black;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Mallanna\";\r\n    src: url(./fonts/Mallanna\\ Regular.ttf);\r\n}\r\n@font-face {\r\n    font-family: \"Krona\";\r\n    src: url(./fonts/Krona\\ One\\ Regular.ttf);\r\n}\r\n\r\n#container {\r\n    display: grid;\r\n    grid-template: 100px 4fr 1fr / 1fr 4fr 1fr;\r\n    grid-template-areas: \r\n    \"nav nav nav\"\r\n    \"left center right\"\r\n    \"left bottom right\";\r\n    height: 100vh ;\r\n}\r\n#container > .navbar {\r\n    grid-area: nav;\r\n}\r\n#container > .mainpage {\r\n    grid-area: center;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/about.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/about.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/directions.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/directions.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/directions-background.jpg */ "./src/imgs/directions-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.directions-page {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\r\n    -webkit-backgroundsize: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n}\r\n.directions-div {\r\n    grid-area: center;\r\n    border:3px solid white;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    display: grid;\r\n    grid-template: 1fr 2fr / 1fr 1fr;\r\n    grid-template-areas: \r\n    \"content content\"\r\n    \"map map\";\r\n}\r\n.text-content {\r\n    color: white;\r\n    text-align: center;\r\n    font-family: 'Mallanna';\r\n    display: grid;\r\n    grid-area: content;\r\n    grid-template: 1fr 1fr;\r\n    grid-template-areas: \"location hours\";\r\n    border-bottom: 3px solid white;\r\n}\r\n.text-address {\r\n    grid-area: location;\r\n}\r\n.text-hours {\r\n    grid-area: hours;\r\n}", "",{"version":3,"sources":["webpack://./src/pages/directions.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iFAAgF;IAChF,6BAA6B;IAC7B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,oCAAoC;IACpC,aAAa;IACb,gCAAgC;IAChC;;aAES;AACb;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,qCAAqC;IACrC,8BAA8B;AAClC;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.directions-page {\r\n    background: url(../imgs/directions-background.jpg) no-repeat center center fixed;\r\n    -webkit-backgroundsize: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n}\r\n.directions-div {\r\n    grid-area: center;\r\n    border:3px solid white;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    display: grid;\r\n    grid-template: 1fr 2fr / 1fr 1fr;\r\n    grid-template-areas: \r\n    \"content content\"\r\n    \"map map\";\r\n}\r\n.text-content {\r\n    color: white;\r\n    text-align: center;\r\n    font-family: 'Mallanna';\r\n    display: grid;\r\n    grid-area: content;\r\n    grid-template: 1fr 1fr;\r\n    grid-template-areas: \"location hours\";\r\n    border-bottom: 3px solid white;\r\n}\r\n.text-address {\r\n    grid-area: location;\r\n}\r\n.text-hours {\r\n    grid-area: hours;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/mainpage.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/mainpage.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/carbhouse-background.jpg */ "./src/imgs/carbhouse-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.mainpage {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center fixed;\r\n    -webkit-backgroundsize: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n}\r\n\r\n.mainpagediv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.mainpagediv > .textcontent {\r\n    color: white;\r\n    font-family: 'Mallanna';\r\n    font-size: x-large;\r\n    animation: 1s ease-out 0s 1 fadeIn;\r\n    will-change: transform;\r\n    transition: transform 450ms;\r\n    transition-delay: 0ms;\r\n    line-height: 86%;\r\n\r\n}\r\n\r\n.mainpagediv > .textcontent:hover {\r\n    transition: transform 125ms;\r\n    transform: scale(1.1);\r\n    transition-delay: 400ms;\r\n}\r\n\r\n/* Interactivity on hover. */\r\n.mainpagediv > #chlogo {\r\n    animation: 1s ease-out 0s 1 fadeIn;\r\n    will-change: transform;\r\n    transition: transform 450ms;\r\n    transition-delay: 0ms;\r\n    width: clamp(60px, 70%, 800px);\r\n}\r\n.mainpagediv > #chlogo:hover {\r\n    transition: transform 125ms;\r\n    transform: scale(1.03);\r\n    transition-delay: 400ms;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n        opacity: 0.2;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/pages/mainpage.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,iFAA+E;IAC/E,6BAA6B;IAC7B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,kCAAkC;IAClC,sBAAsB;IACtB,2BAA2B;IAC3B,qBAAqB;IACrB,gBAAgB;;AAEpB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA,4BAA4B;AAC5B;IACI,kCAAkC;IAClC,sBAAsB;IACtB,2BAA2B;IAC3B,qBAAqB;IACrB,8BAA8B;AAClC;AACA;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,uBAAuB;AAC3B;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,UAAU;IACd;AACJ","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.mainpage {\r\n    background: url(../imgs/carbhouse-background.jpg) no-repeat center center fixed;\r\n    -webkit-backgroundsize: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n}\r\n\r\n.mainpagediv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.mainpagediv > .textcontent {\r\n    color: white;\r\n    font-family: 'Mallanna';\r\n    font-size: x-large;\r\n    animation: 1s ease-out 0s 1 fadeIn;\r\n    will-change: transform;\r\n    transition: transform 450ms;\r\n    transition-delay: 0ms;\r\n    line-height: 86%;\r\n\r\n}\r\n\r\n.mainpagediv > .textcontent:hover {\r\n    transition: transform 125ms;\r\n    transform: scale(1.1);\r\n    transition-delay: 400ms;\r\n}\r\n\r\n/* Interactivity on hover. */\r\n.mainpagediv > #chlogo {\r\n    animation: 1s ease-out 0s 1 fadeIn;\r\n    will-change: transform;\r\n    transition: transform 450ms;\r\n    transition-delay: 0ms;\r\n    width: clamp(60px, 70%, 800px);\r\n}\r\n.mainpagediv > #chlogo:hover {\r\n    transition: transform 125ms;\r\n    transform: scale(1.03);\r\n    transition-delay: 400ms;\r\n}\r\n\r\n@keyframes fadeIn {\r\n    0% {\r\n        opacity: 0.2;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/menu.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/menu.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Cornbread-Regular.ttf */ "./src/fonts/Cornbread-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/menu-background.jpg */ "./src/imgs/menu-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"cornbread\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\n.menupage {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center fixed;\r\n    -webkit-backgroundsize: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n    background-color: black;\r\n    /* filter: brightness(60%); */\r\n}\r\n\r\n#container {\r\n    display: grid;\r\n    grid-template: 100px 100px 4fr 80px / 1fr 800px 1fr;\r\n    grid-template-areas:\r\n    \"nav nav nav\"\r\n    \"space space space\"\r\n    \"left center right\"\r\n    \"left bottom right\";\r\n    height: 100vh ;\r\n}\r\n\r\n.menu-area {\r\n    padding: 10px;\r\n    border: 4px solid white;\r\n    grid-area: center;\r\n    display: grid;\r\n    grid-template: 1fr 1fr 1fr / 1fr 1fr;\r\n    grid-template-areas: \r\n    \"one two\"\r\n    \"three four\"\r\n    \"five six\";\r\n    color: white;\r\n    background-color: rgb(0, 0, 0, 0.5);\r\n}\r\n/* || Grid positioning for elements. */\r\n.menu-area > .food-item-one {\r\n    grid-area: one;\r\n}\r\n.menu-area > .food-item-two {\r\n    grid-area: two;\r\n}\r\n.menu-area > .food-item-three {\r\n    grid-area: three;\r\n}\r\n.menu-area > .food-item-four {\r\n    grid-area: four;\r\n}\r\n.menu-area > .food-item-five {\r\n    grid-area: five;\r\n}\r\n.menu-area > .food-item-six {\r\n    grid-area: six;\r\n}\r\n/* Center all text on menu items. */\r\n.menu-area > .food-item-one, .menu-area > .food-item-two, .menu-area > .food-item-three, .menu-area > .food-item-four, .menu-area > .food-item-five, .menu-area > .food-item-six {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/* Change font on all menu heading elems. */\r\n.food-item-one > h1, .food-item-two > h1, .food-item-three > h1, .food-item-four > h1, .food-item-five > h1, .food-item-six > h1 {\r\n    font-family: 'cornbread';\r\n    font-size: 25pt;\r\n    letter-spacing: 5px;\r\n} \r\n\r\n/* || List Styling. */\r\ndl {\r\n    font-family: 'Mallanna';\r\n    text-align: right;\r\n}", "",{"version":3,"sources":["webpack://./src/pages/menu.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,wBAAwB;IACxB,4CAAwC;AAC5C;;AAEA;IACI,iFAA0E;IAC1E,6BAA6B;IAC7B,2BAA2B;IAC3B,yBAAyB;IACzB,sBAAsB;IACtB,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,mDAAmD;IACnD;;;;uBAImB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,oCAAoC;IACpC;;;cAGU;IACV,YAAY;IACZ,mCAAmC;AACvC;AACA,sCAAsC;AACtC;IACI,cAAc;AAClB;AACA;IACI,cAAc;AAClB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,cAAc;AAClB;AACA,mCAAmC;AACnC;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;AACA,2CAA2C;AAC3C;IACI,wBAAwB;IACxB,eAAe;IACf,mBAAmB;AACvB;;AAEA,qBAAqB;AACrB;IACI,uBAAuB;IACvB,iBAAiB;AACrB","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"cornbread\";\r\n    src: url(../fonts/Cornbread-Regular.ttf);\r\n}\r\n\r\n.menupage {\r\n    background: url(../imgs/menu-background.jpg) no-repeat center center fixed;\r\n    -webkit-backgroundsize: cover;\r\n    -moz-background-size: cover;\r\n    -o-background-size: cover;\r\n    background-size: cover;\r\n    background-color: black;\r\n    /* filter: brightness(60%); */\r\n}\r\n\r\n#container {\r\n    display: grid;\r\n    grid-template: 100px 100px 4fr 80px / 1fr 800px 1fr;\r\n    grid-template-areas:\r\n    \"nav nav nav\"\r\n    \"space space space\"\r\n    \"left center right\"\r\n    \"left bottom right\";\r\n    height: 100vh ;\r\n}\r\n\r\n.menu-area {\r\n    padding: 10px;\r\n    border: 4px solid white;\r\n    grid-area: center;\r\n    display: grid;\r\n    grid-template: 1fr 1fr 1fr / 1fr 1fr;\r\n    grid-template-areas: \r\n    \"one two\"\r\n    \"three four\"\r\n    \"five six\";\r\n    color: white;\r\n    background-color: rgb(0, 0, 0, 0.5);\r\n}\r\n/* || Grid positioning for elements. */\r\n.menu-area > .food-item-one {\r\n    grid-area: one;\r\n}\r\n.menu-area > .food-item-two {\r\n    grid-area: two;\r\n}\r\n.menu-area > .food-item-three {\r\n    grid-area: three;\r\n}\r\n.menu-area > .food-item-four {\r\n    grid-area: four;\r\n}\r\n.menu-area > .food-item-five {\r\n    grid-area: five;\r\n}\r\n.menu-area > .food-item-six {\r\n    grid-area: six;\r\n}\r\n/* Center all text on menu items. */\r\n.menu-area > .food-item-one, .menu-area > .food-item-two, .menu-area > .food-item-three, .menu-area > .food-item-four, .menu-area > .food-item-five, .menu-area > .food-item-six {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n/* Change font on all menu heading elems. */\r\n.food-item-one > h1, .food-item-two > h1, .food-item-three > h1, .food-item-four > h1, .food-item-five > h1, .food-item-six > h1 {\r\n    font-family: 'cornbread';\r\n    font-size: 25pt;\r\n    letter-spacing: 5px;\r\n} \r\n\r\n/* || List Styling. */\r\ndl {\r\n    font-family: 'Mallanna';\r\n    text-align: right;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/navbar.css":
/*!***********************************!*\
  !*** ./src/components/navbar.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/about.css":
/*!*****************************!*\
  !*** ./src/pages/about.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/directions.css":
/*!**********************************!*\
  !*** ./src/pages/directions.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_directions_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./directions.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/directions.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_directions_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_directions_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_directions_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_directions_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/mainpage.css":
/*!********************************!*\
  !*** ./src/pages/mainpage.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mainpage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mainpage.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/mainpage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mainpage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mainpage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mainpage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mainpage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/menu.css":
/*!****************************!*\
  !*** ./src/pages/menu.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ renderNav)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _pagechanger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagechanger */ "./src/components/pagechanger.js");
/* harmony import */ var _navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.css */ "./src/components/navbar.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var _logo_carbhouse_black_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logo/carbhouse-black.webp */ "./src/logo/carbhouse-black.webp");
/* harmony import */ var _logo_carbhouse_white_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../logo/carbhouse-white.webp */ "./src/logo/carbhouse-white.webp");








const renderNav = () => {
    // Define elements to be added.
    const navBar = document.createElement('div')
    const leftDiv = document.createElement('div')
    const rightDiv = document.createElement('div')
    const navMenu = document.createElement('div')
    const navDirections = document.createElement('div')
    const navAbout = document.createElement('div')
    const titleText = document.createElement('h1')
    const titleSlogan = document.createElement('p')


    // Define Attributes
    navBar.setAttribute('class', 'navbar')
    titleText.setAttribute('class', 'titletext')
    titleSlogan.setAttribute('class', 'titleslogan')
    leftDiv.setAttribute('class', 'left-side')
    rightDiv.setAttribute('class', 'right-side')
    navMenu.setAttribute('class', 'menu')
    navDirections.setAttribute('class', 'directions')
    navAbout.setAttribute('class', 'about')
    
    // Define content for elems.
    titleText.innerText = "CARBHOUSE"
    titleSlogan.innerText = "Breads and Pastries to Go!!"
    navMenu.innerHTML = `<h1 class="menu">Menu</h1>`
    navDirections.innerHTML = `<h1 class="directions">Directions</h1>`
    navAbout.innerHTML = `<h1 class="about">About</h1>`
    
    // Append all the things.
    rightDiv.appendChild(navMenu)
    rightDiv.appendChild(navDirections)
    rightDiv.appendChild(navAbout)

    leftDiv.appendChild(titleText)
    leftDiv.appendChild(titleSlogan)

    navBar.appendChild(rightDiv)
    navBar.appendChild(leftDiv)

    ___WEBPACK_IMPORTED_MODULE_0__.pageContainer.appendChild(navBar)

    // Add click eventlisteners for menu elements.
    // addMenuEvents()

    return {
        navBar,
        leftDiv,
        rightDiv,
        navMenu,
        navAbout,
        navDirections,
    }
}




/***/ }),

/***/ "./src/components/pagechanger.js":
/*!***************************************!*\
  !*** ./src/components/pagechanger.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMenuEvents": () => (/* binding */ addMenuEvents)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _pages_mainpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/mainpage */ "./src/pages/mainpage.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_directions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/directions */ "./src/pages/directions.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/about */ "./src/pages/about.js");







// Add change page on nav click functionality.
const changePage = (page) => {
    if (page == 'home') {
        ___WEBPACK_IMPORTED_MODULE_0__.pageContainer.innerHTML = ""
        ;(0,_pages_mainpage__WEBPACK_IMPORTED_MODULE_1__.renderMainPage)()
    } else if (page == 'menu') {
        ___WEBPACK_IMPORTED_MODULE_0__.pageContainer.innerHTML = ""
        ;(0,_pages_menu__WEBPACK_IMPORTED_MODULE_3__.renderMenu)()
    } else if (page == 'about') {
        ___WEBPACK_IMPORTED_MODULE_0__.pageContainer.innerHTML = ""
        ;(0,_pages_about__WEBPACK_IMPORTED_MODULE_5__.renderAbout)()
    } else if (page == 'directions') {
        ___WEBPACK_IMPORTED_MODULE_0__.pageContainer.innerHTML = ""
        ;(0,_pages_directions__WEBPACK_IMPORTED_MODULE_4__.renderDirections)()
    } else {
        console.log('fatal error dude.')
        return
    }
}

const addMenuEvents = () => {
    // Define menu buttons.
    const menuButton = document.querySelector('.menu')
    const directionsButton = document.querySelector('.directions')
    const aboutButton = document.querySelector('.about')
    const homeButton = document.querySelector('.left-side')
    // Add event listeners to buttons.
    homeButton.addEventListener('click', changePage('home'))
    menuButton.addEventListener('click', changePage('menu'))
    directionsButton.addEventListener('click', changePage('directions'))
    aboutButton.addEventListener('click', changePage('about'))
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageContainer": () => (/* binding */ pageContainer)
/* harmony export */ });
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _pages_mainpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/mainpage */ "./src/pages/mainpage.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _pages_directions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/directions */ "./src/pages/directions.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");






// import { addMenuEvents } from './components/pagechanger';


const pageContainer = document.createElement('div')
pageContainer.setAttribute('id', 'container')
document.body.appendChild(pageContainer)
console.log(pageContainer)


;(0,_components_navbar__WEBPACK_IMPORTED_MODULE_3__.renderNav)()
// addMenuEvents()
// renderMainPage()
// renderMenu()
;(0,_pages_directions__WEBPACK_IMPORTED_MODULE_4__.renderDirections)()


/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAbout": () => (/* binding */ renderAbout)
/* harmony export */ });
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.css */ "./src/pages/about.css");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");



const renderAbout = () => {
    const aboutDiv = document.createElement('div')
    const aboutHeading = document.createElement('h1')
    const aboutText = document.createElement('p')


    aboutDiv.setAttribute('class', 'about-div')
    aboutHeading.setAttribute('class', 'about-heading')
    aboutText.setAttribute('class', 'about-text')

    ___WEBPACK_IMPORTED_MODULE_1__.pageContainer.appendChild(aboutDiv)
}



/***/ }),

/***/ "./src/pages/directions.js":
/*!*********************************!*\
  !*** ./src/pages/directions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderDirections": () => (/* binding */ renderDirections)
/* harmony export */ });
/* harmony import */ var _directions_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directions.css */ "./src/pages/directions.css");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");




const renderDirections = () => {
    document.body.setAttribute('class', 'directions-page')

    const directionsDiv = document.createElement('div')
    const textContentDiv = document.createElement('div')
    const mapContentDiv = document.createElement('div')
    const textAddress = document.createElement('div')
    const textHours = document.createElement('div')
    
    directionsDiv.setAttribute('class', 'directions-div')
    textContentDiv.setAttribute('class', 'text-content')
    mapContentDiv.setAttribute('class', 'map-content')

    textAddress.setAttribute('class', 'text-address')
    textHours.setAttribute('class', 'text-hours')

    textAddress.innerHTML = `
    <h1>LES Location</h1>
    <p>550 Bergen Crossing</p>
    <p>New York, NY 10023</p>
    <p>Corner of Bergen and Lafayette</p>
    <p>A Train to Bergen MetroTech</p>
    <h1>Brooklyn Location</h1>
    <p>Coming 2023</p>
    `
    textHours.innerHTML = `
    <h1>Hours of Operation</h1>
    <p>Monday - 9am - 6:30pm</p>
    <p>Tuesday - 9am - 6:30pm</p>
    <p>Wednesday - 9am - 6:30pm</p>
    <p>Thursday - 9am - 6:30pm</p>
    <p>Friday - 9am - 6:30pm</p>
    <p>Saturday - 12pm - 5:30pm</p>
    <p>Sunday - Closed</p>
    `

    // Append all the things
    directionsDiv.appendChild(textContentDiv)


    textContentDiv.appendChild(textAddress)
    textContentDiv.appendChild(textHours)


    // Append all the generated content to the main page.
    ___WEBPACK_IMPORTED_MODULE_1__.pageContainer.appendChild(directionsDiv)
}



/***/ }),

/***/ "./src/pages/mainpage.js":
/*!*******************************!*\
  !*** ./src/pages/mainpage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMainPage": () => (/* binding */ renderMainPage)
/* harmony export */ });
/* harmony import */ var _mainpage_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage.css */ "./src/pages/mainpage.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ "./src/index.css");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _logo_carbhouse_white_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/carbhouse-white.webp */ "./src/logo/carbhouse-white.webp");





// Remove class if there is one.
document.body.removeAttribute('class')

const renderMainPage = () => {
    // Define elements
    const mainPageDiv = document.createElement('div')
    const chLogo = new Image()
    const textContent = document.createElement('p')
    const pageBody = document.body

    //Set attributes for elements
    mainPageDiv.setAttribute('class', 'mainpagediv')
    chLogo.setAttribute('id', 'chlogo')
    chLogo.src = _logo_carbhouse_white_webp__WEBPACK_IMPORTED_MODULE_3__
    textContent.setAttribute('class', 'textcontent')
    pageBody.setAttribute('class', 'mainpage')


    // Insert content into elements
    textContent.innerText = "Welcome to CarbHouse the palace of lost gains and a round gut. Please make yourself at home and take a look at the menu."

    // Append the elements
    mainPageDiv.appendChild(chLogo)
    mainPageDiv.appendChild(textContent)

    // Append to the site page.
    ___WEBPACK_IMPORTED_MODULE_2__.pageContainer.appendChild(mainPageDiv)
}



/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ "./src/pages/menu.css");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./src/index.js");



// Remove class if there is one.
document.body.removeAttribute('class')

const renderMenu = () => {
    const menuDiv = document.createElement('div')
    const foodItemOne = document.createElement('div')
    const foodItemTwo = document.createElement('div')
    const foodItemThree = document.createElement('div')
    const foodItemFour = document.createElement('div')
    const foodItemFive = document.createElement('div')
    const foodItemSix = document.createElement('div')
    
    const pageBody = document.body

    menuDiv.setAttribute('class', 'menu-area')
    
    foodItemOne.setAttribute('class', 'food-item-one')
    foodItemTwo.setAttribute('class', 'food-item-two')
    foodItemThree.setAttribute('class', 'food-item-three')
    foodItemFour.setAttribute('class', 'food-item-four')
    foodItemFive.setAttribute('class', 'food-item-five')
    foodItemSix.setAttribute('class', 'food-item-six')

    menuDiv.appendChild(foodItemOne)
    menuDiv.appendChild(foodItemTwo)
    menuDiv.appendChild(foodItemThree)
    menuDiv.appendChild(foodItemFour)
    menuDiv.appendChild(foodItemFive)
    menuDiv.appendChild(foodItemSix)

    // Menu Titles
    const foodItemOneTitle = document.createElement('h1')
    const foodItemTwoTitle = document.createElement('h1')
    const foodItemThreeTitle = document.createElement('h1')
    const foodItemFourTitle = document.createElement('h1')
    const foodItemFiveTitle = document.createElement('h1')
    const foodItemSixTitle = document.createElement('h1')

    foodItemOneTitle.setAttribute('class', 'item-one-title')
    foodItemTwoTitle.setAttribute('class', 'item-two-title')
    foodItemThreeTitle.setAttribute('class', 'item-three-title')
    foodItemFourTitle.setAttribute('class', 'item-four-title')
    foodItemFiveTitle.setAttribute('class', 'item-five-title')
    foodItemSixTitle.setAttribute('class', 'item-six-title')

    foodItemOneTitle.innerText = "Breads"
    foodItemTwoTitle.innerText = "Savories"
    foodItemThreeTitle.innerText = "Coffee"
    foodItemFourTitle.innerText = "Cakes"
    foodItemFiveTitle.innerText = "Pastries"
    foodItemSixTitle.innerText = "Macarons"

    foodItemOne.appendChild(foodItemOneTitle)
    foodItemTwo.appendChild(foodItemTwoTitle)
    foodItemThree.appendChild(foodItemThreeTitle)
    foodItemFour.appendChild(foodItemFourTitle)
    foodItemFive.appendChild(foodItemFiveTitle)
    foodItemSix.appendChild(foodItemSixTitle)

    // Items lists for each menu section.
    const foodItemOneList = document.createElement('dl')
    const foodItemTwoList = document.createElement('dl')
    const foodItemThreeList = document.createElement('dl')
    const foodItemFourList = document.createElement('dl')
    const foodItemFiveList = document.createElement('dl')
    const foodItemSixList = document.createElement('dl')
    
    foodItemOneList.setAttribute('class', 'item-one-list')
    foodItemTwoList.setAttribute('class', 'item-two-list')
    foodItemThreeList.setAttribute('class', 'item-three-lis')
    foodItemFourList.setAttribute('class', 'item-four-list')
    foodItemFiveList.setAttribute('class', 'item-five-list')
    foodItemSixList.setAttribute('class', 'item-six-list')

    // List content.
    foodItemOneList.innerHTML = `
    <dt>Baguette - $3.50</dt>
    <dt>Sourdough - $4.00</dt>
    <dt>Rye - $2.00</dt>
    <dt>Brioche - $4.00</dt>
    <dt>Ciabatta - $3.40</dt>
    <dt>Pita - $1.50</dt>
    `
    foodItemTwoList.innerHTML = `
    <dt>Ham & Cheese Croissant - $2.95</dt>
    <dt>Country Style Omelet - $5.45</dt>
    <dt>Breakfast Platter - $8.40</dt>
    <dt>New York Steak & Eggs - $10.00</dt>
    <dt>Bacon, Egg & Cheese Croissant - $5.00</dt>
    `
    foodItemThreeList.innerHTML = `
    <dt>Americano - $2.65</dt>
    <dt>Double Espresso - $3.10</dt>
    <dt>Macchiato - $3.75</dt>
    <dt>Latte - $2.95</dt>
    <dt>Cappuccino - $2.25</dt>
    <dt>Mocha - $3.10</dt>
    <dt>Hot Chocolate - #2.40</dt>
    `
    foodItemFourList.innerHTML = `
    <dt>Brownie Slice - $4.50</dt>
    <dt>Apple Pie - $3.75</dt>
    <dt>Cheese Cake - $5.50</dt>
    <dt>Tiramisu - $6.10</dt>
    <dt>Red Velvet - $7.00</dt>
    `
    foodItemFiveList.innerHTML = `
    <dt>Bear Claw - $3.00</dt>
    <dt>Beaver Tail - $4.20</dt>
    <dt>Cronut - $5.55</dt>
    <dt>Cheese Danish - $1.40</dt>
    <dt>Canoli - $3.00</dt>
    <dt>Rainbow Cookie - $1.20</dt>
    `

    foodItemSixList.innerHTML =`
    <dt>Vanilla - $5.40</dt>
    <dt>Chocolate - $5.40</dt>
    <dt>Strawberry - $1.50</dt>
    <dt>Tres Leche - $5.55</dt>
    <dt>24 Pack (Assorted) - $49.00</dt>
    <dt>48 Pack (Assorted) - $69.50</dt>
    `

    foodItemOne.appendChild(foodItemOneList)
    foodItemTwo.appendChild(foodItemTwoList)
    foodItemThree.appendChild(foodItemThreeList)
    foodItemFour.appendChild(foodItemFourList)
    foodItemFive.appendChild(foodItemFiveList)
    foodItemSix.appendChild(foodItemSixList)

    pageBody.setAttribute('class', 'menupage')

    ___WEBPACK_IMPORTED_MODULE_1__.pageContainer.appendChild(menuDiv)
}





/***/ }),

/***/ "./src/fonts/Cornbread-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Cornbread-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d74041526cb5a2abcb3e.ttf";

/***/ }),

/***/ "./src/fonts/Krona One Regular.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/Krona One Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c16b3db2142f2ebddaa8.ttf";

/***/ }),

/***/ "./src/fonts/Mallanna Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Mallanna Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "638c2d724e969d13ef9e.ttf";

/***/ }),

/***/ "./src/imgs/carbhouse-background.jpg":
/*!*******************************************!*\
  !*** ./src/imgs/carbhouse-background.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c99854b29b7bc05b10c5.jpg";

/***/ }),

/***/ "./src/imgs/directions-background.jpg":
/*!********************************************!*\
  !*** ./src/imgs/directions-background.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bec50b0c117cb8bcf526.jpg";

/***/ }),

/***/ "./src/imgs/menu-background.jpg":
/*!**************************************!*\
  !*** ./src/imgs/menu-background.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8b1a3dc1ae388f2131ef.jpg";

/***/ }),

/***/ "./src/logo/carbhouse-black.webp":
/*!***************************************!*\
  !*** ./src/logo/carbhouse-black.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53a6334432c851a4b5a6.webp";

/***/ }),

/***/ "./src/logo/carbhouse-white.webp":
/*!***************************************!*\
  !*** ./src/logo/carbhouse-white.webp ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7855e79d72e243948508.webp";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1SUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvZGlyZWN0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWFpbnBhZ2UuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuY3NzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5jc3M/ODAyOCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dC5jc3M/YTEwYSIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9kaXJlY3Rpb25zLmNzcz8xZDI5Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21haW5wYWdlLmNzcz82MWIzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnUuY3NzPzVkMjYiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL25hdmJhci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL3BhZ2VjaGFuZ2VyLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2RpcmVjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWFpbnBhZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxMDBweCAvIDMwMHB4IDFmciAxZnIgMzAwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJsZWZ0IHJpZ2h0IHJpZ2h0IG5vbmVcXFwiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc3ZTU4O1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDVweCBibGFjaztcXHJcXG59XFxyXFxuLm5hdmJhciA+IC5sZWZ0LXNpZGUge1xcclxcbiAgICBncmlkLWFyZWE6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIktyb25hXFxcIjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmxlZnQtc2lkZSA+IC50aXRsZXNsb2dhbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWFsbGFubmFcXFwiO1xcclxcbn1cXHJcXG4ubmF2YmFyID4gLnJpZ2h0LXNpZGUge1xcclxcbiAgICBncmlkLWFyZWE6IHJpZ2h0O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWNvbHVtbjogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJtZW51IGRpcmVjdGlvbnMgYWJvdXRcXFwiO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIk1hbGxhbm5hXFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiA5cHQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLyogSG92ZXIgdW5kZXJsaW5lIGVmZmVjdCAqL1xcclxcbi5yaWdodC1zaWRlID4gLm1lbnUgPiBoMSwgLnJpZ2h0LXNpZGUgPiAuZGlyZWN0aW9ucyA+IGgxLCAucmlnaHQtc2lkZSA+IC5hYm91dCA+IGgxIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi5yaWdodC1zaWRlID4gLm1lbnUgPiBoMTpob3ZlciwgLnJpZ2h0LXNpZGUgPiAuZGlyZWN0aW9ucyA+IGgxOmhvdmVyLCAucmlnaHQtc2lkZSA+IC5hYm91dCA+IGgxOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ucmlnaHQtc2lkZSA+IC5tZW51ID4gaDE6OmJlZm9yZSwgLnJpZ2h0LXNpZGUgPiAuZGlyZWN0aW9ucyA+IGgxOjpiZWZvcmUsIC5yaWdodC1zaWRlID4gLmFib3V0ID4gaDE6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxyXFxufVxcclxcbi5yaWdodC1zaWRlID4gLm1lbnUgPiBoMTpob3Zlcjo6YmVmb3JlLCAucmlnaHQtc2lkZSA+IC5kaXJlY3Rpb25zID4gaDE6aG92ZXI6OmJlZm9yZSwgLnJpZ2h0LXNpZGUgPiAuYWJvdXQgPiBoMTpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuLyogRW5kIG9mIGVmZmVjdC4gKi9cXHJcXG5cXHJcXG4vKiBOYXYgZWxlbSBwb3NpdGlvbmluZy4gKi9cXHJcXG4ucmlnaHQtc2lkZSA+IC5tZW51IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucmlnaHQtc2lkZSA+IC5kaXJlY3Rpb25zIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBkaXJlY3Rpb25zO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ucmlnaHQtc2lkZSA+IC5hYm91dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogYWJvdXQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL25hdmJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsNENBQTRDO0lBQzVDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLDRDQUE0QztJQUM1Qyx1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQSwyQkFBMkI7QUFDM0I7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsU0FBUztJQUNULHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQSxtQkFBbUI7O0FBRW5CLDBCQUEwQjtBQUMxQjtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwMHB4IC8gMzAwcHggMWZyIDFmciAzMDBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImxlZnQgcmlnaHQgcmlnaHQgbm9uZVxcXCI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNzdlNTg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IGJsYWNrO1xcclxcbn1cXHJcXG4ubmF2YmFyID4gLmxlZnQtc2lkZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiS3JvbmFcXFwiO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubGVmdC1zaWRlID4gLnRpdGxlc2xvZ2FuIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThwdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNYWxsYW5uYVxcXCI7XFxyXFxufVxcclxcbi5uYXZiYXIgPiAucmlnaHQtc2lkZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogcmlnaHQ7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm1lbnUgZGlyZWN0aW9ucyBhYm91dFxcXCI7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWFsbGFubmFcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDlwdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4vKiBIb3ZlciB1bmRlcmxpbmUgZWZmZWN0ICovXFxyXFxuLnJpZ2h0LXNpZGUgPiAubWVudSA+IGgxLCAucmlnaHQtc2lkZSA+IC5kaXJlY3Rpb25zID4gaDEsIC5yaWdodC1zaWRlID4gLmFib3V0ID4gaDEge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuLnJpZ2h0LXNpZGUgPiAubWVudSA+IGgxOmhvdmVyLCAucmlnaHQtc2lkZSA+IC5kaXJlY3Rpb25zID4gaDE6aG92ZXIsIC5yaWdodC1zaWRlID4gLmFib3V0ID4gaDE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5yaWdodC1zaWRlID4gLm1lbnUgPiBoMTo6YmVmb3JlLCAucmlnaHQtc2lkZSA+IC5kaXJlY3Rpb25zID4gaDE6OmJlZm9yZSwgLnJpZ2h0LXNpZGUgPiAuYWJvdXQgPiBoMTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuLnJpZ2h0LXNpZGUgPiAubWVudSA+IGgxOmhvdmVyOjpiZWZvcmUsIC5yaWdodC1zaWRlID4gLmRpcmVjdGlvbnMgPiBoMTpob3Zlcjo6YmVmb3JlLCAucmlnaHQtc2lkZSA+IC5hYm91dCA+IGgxOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG4vKiBFbmQgb2YgZWZmZWN0LiAqL1xcclxcblxcclxcbi8qIE5hdiBlbGVtIHBvc2l0aW9uaW5nLiAqL1xcclxcbi5yaWdodC1zaWRlID4gLm1lbnUge1xcclxcbiAgICBncmlkLWFyZWE6IG1lbnU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5yaWdodC1zaWRlID4gLmRpcmVjdGlvbnMge1xcclxcbiAgICBncmlkLWFyZWE6IGRpcmVjdGlvbnM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5yaWdodC1zaWRlID4gLmFib3V0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBhYm91dDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL01hbGxhbm5hIFJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Lcm9uYSBPbmUgUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQnJvd3NlciByZXNldCBhbmQgd2lyZSBmcmFtZS4gKi9cXHJcXG4qIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XFxyXFxuLyogQ29sb3IgcGFsbGVyIGZvciB0aGUgc2l0ZS4gKi9cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tb2ZmLXdoaXRlOiAjZjdmM2UzO1xcclxcbiAgICAtLWJyb3duLXJlZDogIzZmMWEwNztcXHJcXG4gICAgLS1ncmV5LWJsYWNrOiAjMmIyMTE4O1xcclxcbiAgICAtLWxpZ2h0LWJyb3duOiAjYTc3ZTU4O1xcclxcbiAgICAtLXRlYWwtZ3JlZW46ICMyZjljOTU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTWFsbGFubmFcXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIktyb25hXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAwcHggNGZyIDFmciAvIDFmciA0ZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcIm5hdiBuYXYgbmF2XFxcIlxcclxcbiAgICBcXFwibGVmdCBjZW50ZXIgcmlnaHRcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IGJvdHRvbSByaWdodFxcXCI7XFxyXFxuICAgIGhlaWdodDogMTAwdmggO1xcclxcbn1cXHJcXG4jY29udGFpbmVyID4gLm5hdmJhciB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmF2O1xcclxcbn1cXHJcXG4jY29udGFpbmVyID4gLm1haW5wYWdlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0NBQWtDO0FBQ2xDO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDO0FBQ0EsK0JBQStCO0FBQy9CO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw0Q0FBdUM7QUFDM0M7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMENBQTBDO0lBQzFDOzs7dUJBR21CO0lBQ25CLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCcm93c2VyIHJlc2V0IGFuZCB3aXJlIGZyYW1lLiAqL1xcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbn1cXHJcXG4vKiBDb2xvciBwYWxsZXIgZm9yIHRoZSBzaXRlLiAqL1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1vZmYtd2hpdGU6ICNmN2YzZTM7XFxyXFxuICAgIC0tYnJvd24tcmVkOiAjNmYxYTA3O1xcclxcbiAgICAtLWdyZXktYmxhY2s6ICMyYjIxMTg7XFxyXFxuICAgIC0tbGlnaHQtYnJvd246ICNhNzdlNTg7XFxyXFxuICAgIC0tdGVhbC1ncmVlbjogIzJmOWM5NTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNYWxsYW5uYVxcXCI7XFxyXFxuICAgIHNyYzogdXJsKC4vZm9udHMvTWFsbGFubmFcXFxcIFJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiS3JvbmFcXFwiO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL0tyb25hXFxcXCBPbmVcXFxcIFJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwMHB4IDRmciAxZnIgLyAxZnIgNGZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJuYXYgbmF2IG5hdlxcXCJcXHJcXG4gICAgXFxcImxlZnQgY2VudGVyIHJpZ2h0XFxcIlxcclxcbiAgICBcXFwibGVmdCBib3R0b20gcmlnaHRcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoIDtcXHJcXG59XFxyXFxuI2NvbnRhaW5lciA+IC5uYXZiYXIge1xcclxcbiAgICBncmlkLWFyZWE6IG5hdjtcXHJcXG59XFxyXFxuI2NvbnRhaW5lciA+IC5tYWlucGFnZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvZGlyZWN0aW9ucy1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5kaXJlY3Rpb25zLXBhZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmRzaXplOiBjb3ZlcjtcXHJcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG4uZGlyZWN0aW9ucy1kaXYge1xcclxcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOjNweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMmZyIC8gMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJjb250ZW50IGNvbnRlbnRcXFwiXFxyXFxuICAgIFxcXCJtYXAgbWFwXFxcIjtcXHJcXG59XFxyXFxuLnRleHQtY29udGVudCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogJ01hbGxhbm5hJztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibG9jYXRpb24gaG91cnNcXFwiO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcbi50ZXh0LWFkZHJlc3Mge1xcclxcbiAgICBncmlkLWFyZWE6IGxvY2F0aW9uO1xcclxcbn1cXHJcXG4udGV4dC1ob3VycyB7XFxyXFxuICAgIGdyaWQtYXJlYTogaG91cnM7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9kaXJlY3Rpb25zLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpRkFBZ0Y7SUFDaEYsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDOzthQUVTO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5kaXJlY3Rpb25zLXBhZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1ncy9kaXJlY3Rpb25zLWJhY2tncm91bmQuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kc2l6ZTogY292ZXI7XFxyXFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuLmRpcmVjdGlvbnMtZGl2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjozcHggc29saWQgd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDJmciAvIDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwiY29udGVudCBjb250ZW50XFxcIlxcclxcbiAgICBcXFwibWFwIG1hcFxcXCI7XFxyXFxufVxcclxcbi50ZXh0LWNvbnRlbnQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYWxsYW5uYSc7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImxvY2F0aW9uIGhvdXJzXFxcIjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG4udGV4dC1hZGRyZXNzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBsb2NhdGlvbjtcXHJcXG59XFxyXFxuLnRleHQtaG91cnMge1xcclxcbiAgICBncmlkLWFyZWE6IGhvdXJzO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZ3MvY2FyYmhvdXNlLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5wYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kc2l6ZTogY292ZXI7XFxyXFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5wYWdlZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5tYWlucGFnZWRpdiA+IC50ZXh0Y29udGVudCB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNYWxsYW5uYSc7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgYW5pbWF0aW9uOiAxcyBlYXNlLW91dCAwcyAxIGZhZGVJbjtcXHJcXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQ1MG1zO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwbXM7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA4NiU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5tYWlucGFnZWRpdiA+IC50ZXh0Y29udGVudDpob3ZlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMjVtcztcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiA0MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLyogSW50ZXJhY3Rpdml0eSBvbiBob3Zlci4gKi9cXHJcXG4ubWFpbnBhZ2VkaXYgPiAjY2hsb2dvIHtcXHJcXG4gICAgYW5pbWF0aW9uOiAxcyBlYXNlLW91dCAwcyAxIGZhZGVJbjtcXHJcXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQ1MG1zO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwbXM7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCg2MHB4LCA3MCUsIDgwMHB4KTtcXHJcXG59XFxyXFxuLm1haW5wYWdlZGl2ID4gI2NobG9nbzpob3ZlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMjVtcztcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXHJcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogNDAwbXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMC4yO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFnZXMvbWFpbnBhZ2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpRkFBK0U7SUFDL0UsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBLDRCQUE0QjtBQUM1QjtJQUNJLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbnBhZ2Uge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1ncy9jYXJiaG91c2UtYmFja2dyb3VuZC5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmRzaXplOiBjb3ZlcjtcXHJcXG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbnBhZ2VkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLm1haW5wYWdlZGl2ID4gLnRleHRjb250ZW50IHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ01hbGxhbm5hJztcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgICBhbmltYXRpb246IDFzIGVhc2Utb3V0IDBzIDEgZmFkZUluO1xcclxcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDUwbXM7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBtcztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDg2JTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm1haW5wYWdlZGl2ID4gLnRleHRjb250ZW50OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEyNW1zO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDQwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbnRlcmFjdGl2aXR5IG9uIGhvdmVyLiAqL1xcclxcbi5tYWlucGFnZWRpdiA+ICNjaGxvZ28ge1xcclxcbiAgICBhbmltYXRpb246IDFzIGVhc2Utb3V0IDBzIDEgZmFkZUluO1xcclxcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDUwbXM7XFxyXFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBtcztcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDYwcHgsIDcwJSwgODAwcHgpO1xcclxcbn1cXHJcXG4ubWFpbnBhZ2VkaXYgPiAjY2hsb2dvOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEyNW1zO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcclxcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiA0MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgICAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjI7XFxyXFxuICAgIH1cXHJcXG4gICAgMTAwJSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvQ29ybmJyZWFkLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1ncy9tZW51LWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImNvcm5icmVhZFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVwYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kc2l6ZTogY292ZXI7XFxyXFxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIC8qIGZpbHRlcjogYnJpZ2h0bmVzcyg2MCUpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAwcHggMTAwcHggNGZyIDgwcHggLyAxZnIgODAwcHggMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwibmF2IG5hdiBuYXZcXFwiXFxyXFxuICAgIFxcXCJzcGFjZSBzcGFjZSBzcGFjZVxcXCJcXHJcXG4gICAgXFxcImxlZnQgY2VudGVyIHJpZ2h0XFxcIlxcclxcbiAgICBcXFwibGVmdCBib3R0b20gcmlnaHRcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoIDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYXJlYSB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBncmlkLWFyZWE6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcIm9uZSB0d29cXFwiXFxyXFxuICAgIFxcXCJ0aHJlZSBmb3VyXFxcIlxcclxcbiAgICBcXFwiZml2ZSBzaXhcXFwiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG4vKiB8fCBHcmlkIHBvc2l0aW9uaW5nIGZvciBlbGVtZW50cy4gKi9cXHJcXG4ubWVudS1hcmVhID4gLmZvb2QtaXRlbS1vbmUge1xcclxcbiAgICBncmlkLWFyZWE6IG9uZTtcXHJcXG59XFxyXFxuLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tdHdvIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0d287XFxyXFxufVxcclxcbi5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLXRocmVlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aHJlZTtcXHJcXG59XFxyXFxuLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tZm91ciB7XFxyXFxuICAgIGdyaWQtYXJlYTogZm91cjtcXHJcXG59XFxyXFxuLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tZml2ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZml2ZTtcXHJcXG59XFxyXFxuLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tc2l4IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzaXg7XFxyXFxufVxcclxcbi8qIENlbnRlciBhbGwgdGV4dCBvbiBtZW51IGl0ZW1zLiAqL1xcclxcbi5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLW9uZSwgLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tdHdvLCAubWVudS1hcmVhID4gLmZvb2QtaXRlbS10aHJlZSwgLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tZm91ciwgLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tZml2ZSwgLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tc2l4IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi8qIENoYW5nZSBmb250IG9uIGFsbCBtZW51IGhlYWRpbmcgZWxlbXMuICovXFxyXFxuLmZvb2QtaXRlbS1vbmUgPiBoMSwgLmZvb2QtaXRlbS10d28gPiBoMSwgLmZvb2QtaXRlbS10aHJlZSA+IGgxLCAuZm9vZC1pdGVtLWZvdXIgPiBoMSwgLmZvb2QtaXRlbS1maXZlID4gaDEsIC5mb29kLWl0ZW0tc2l4ID4gaDEge1xcclxcbiAgICBmb250LWZhbWlseTogJ2Nvcm5icmVhZCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVwdDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXHJcXG59IFxcclxcblxcclxcbi8qIHx8IExpc3QgU3R5bGluZy4gKi9cXHJcXG5kbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWFsbGFubmEnO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhZ2VzL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsNENBQXdDO0FBQzVDOztBQUVBO0lBQ0ksaUZBQTBFO0lBQzFFLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1EQUFtRDtJQUNuRDs7Ozt1QkFJbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEM7OztjQUdVO0lBQ1YsWUFBWTtJQUNaLG1DQUFtQztBQUN2QztBQUNBLHNDQUFzQztBQUN0QztJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBLG1DQUFtQztBQUNuQztJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBLDJDQUEyQztBQUMzQztJQUNJLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiY29ybmJyZWFkXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoLi4vZm9udHMvQ29ybmJyZWFkLVJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVwYWdlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL2ltZ3MvbWVudS1iYWNrZ3JvdW5kLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZHNpemU6IGNvdmVyO1xcclxcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAvKiBmaWx0ZXI6IGJyaWdodG5lc3MoNjAlKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDEwMHB4IDEwMHB4IDRmciA4MHB4IC8gMWZyIDgwMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcIm5hdiBuYXYgbmF2XFxcIlxcclxcbiAgICBcXFwic3BhY2Ugc3BhY2Ugc3BhY2VcXFwiXFxyXFxuICAgIFxcXCJsZWZ0IGNlbnRlciByaWdodFxcXCJcXHJcXG4gICAgXFxcImxlZnQgYm90dG9tIHJpZ2h0XFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aCA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWFyZWEge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJvbmUgdHdvXFxcIlxcclxcbiAgICBcXFwidGhyZWUgZm91clxcXCJcXHJcXG4gICAgXFxcImZpdmUgc2l4XFxcIjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuLyogfHwgR3JpZCBwb3NpdGlvbmluZyBmb3IgZWxlbWVudHMuICovXFxyXFxuLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tb25lIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBvbmU7XFxyXFxufVxcclxcbi5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLXR3byB7XFxyXFxuICAgIGdyaWQtYXJlYTogdHdvO1xcclxcbn1cXHJcXG4ubWVudS1hcmVhID4gLmZvb2QtaXRlbS10aHJlZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGhyZWU7XFxyXFxufVxcclxcbi5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLWZvdXIge1xcclxcbiAgICBncmlkLWFyZWE6IGZvdXI7XFxyXFxufVxcclxcbi5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLWZpdmUge1xcclxcbiAgICBncmlkLWFyZWE6IGZpdmU7XFxyXFxufVxcclxcbi5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLXNpeCB7XFxyXFxuICAgIGdyaWQtYXJlYTogc2l4O1xcclxcbn1cXHJcXG4vKiBDZW50ZXIgYWxsIHRleHQgb24gbWVudSBpdGVtcy4gKi9cXHJcXG4ubWVudS1hcmVhID4gLmZvb2QtaXRlbS1vbmUsIC5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLXR3bywgLm1lbnUtYXJlYSA+IC5mb29kLWl0ZW0tdGhyZWUsIC5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLWZvdXIsIC5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLWZpdmUsIC5tZW51LWFyZWEgPiAuZm9vZC1pdGVtLXNpeCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4vKiBDaGFuZ2UgZm9udCBvbiBhbGwgbWVudSBoZWFkaW5nIGVsZW1zLiAqL1xcclxcbi5mb29kLWl0ZW0tb25lID4gaDEsIC5mb29kLWl0ZW0tdHdvID4gaDEsIC5mb29kLWl0ZW0tdGhyZWUgPiBoMSwgLmZvb2QtaXRlbS1mb3VyID4gaDEsIC5mb29kLWl0ZW0tZml2ZSA+IGgxLCAuZm9vZC1pdGVtLXNpeCA+IGgxIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdjb3JuYnJlYWQnO1xcclxcbiAgICBmb250LXNpemU6IDI1cHQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XFxyXFxufSBcXHJcXG5cXHJcXG4vKiB8fCBMaXN0IFN0eWxpbmcuICovXFxyXFxuZGwge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hbGxhbm5hJztcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZiYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpcmVjdGlvbnMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaXJlY3Rpb25zLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWlucGFnZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW5wYWdlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGFnZUNvbnRhaW5lciB9IGZyb20gXCIuLlwiXHJcbmltcG9ydCB7IGFkZE1lbnVFdmVudHMgfSBmcm9tIFwiLi9wYWdlY2hhbmdlclwiXHJcbmltcG9ydCAnLi9uYXZiYXIuY3NzJ1xyXG5pbXBvcnQgJy4uL2luZGV4LmNzcydcclxuaW1wb3J0IGJsYWNrTG9nbyBmcm9tICcuLi9sb2dvL2NhcmJob3VzZS1ibGFjay53ZWJwJ1xyXG5pbXBvcnQgd2hpdGVMb2dvIGZyb20gJy4uL2xvZ28vY2FyYmhvdXNlLXdoaXRlLndlYnAnXHJcblxyXG5cclxuY29uc3QgcmVuZGVyTmF2ID0gKCkgPT4ge1xyXG4gICAgLy8gRGVmaW5lIGVsZW1lbnRzIHRvIGJlIGFkZGVkLlxyXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBuYXZEaXJlY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG5hdkFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGNvbnN0IHRpdGxlU2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG5cclxuICAgIC8vIERlZmluZSBBdHRyaWJ1dGVzXHJcbiAgICBuYXZCYXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXZiYXInKVxyXG4gICAgdGl0bGVUZXh0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGV0ZXh0JylcclxuICAgIHRpdGxlU2xvZ2FuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGVzbG9nYW4nKVxyXG4gICAgbGVmdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xlZnQtc2lkZScpXHJcbiAgICByaWdodERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JpZ2h0LXNpZGUnKVxyXG4gICAgbmF2TWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKVxyXG4gICAgbmF2RGlyZWN0aW9ucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RpcmVjdGlvbnMnKVxyXG4gICAgbmF2QWJvdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhYm91dCcpXHJcbiAgICBcclxuICAgIC8vIERlZmluZSBjb250ZW50IGZvciBlbGVtcy5cclxuICAgIHRpdGxlVGV4dC5pbm5lclRleHQgPSBcIkNBUkJIT1VTRVwiXHJcbiAgICB0aXRsZVNsb2dhbi5pbm5lclRleHQgPSBcIkJyZWFkcyBhbmQgUGFzdHJpZXMgdG8gR28hIVwiXHJcbiAgICBuYXZNZW51LmlubmVySFRNTCA9IGA8aDEgY2xhc3M9XCJtZW51XCI+TWVudTwvaDE+YFxyXG4gICAgbmF2RGlyZWN0aW9ucy5pbm5lckhUTUwgPSBgPGgxIGNsYXNzPVwiZGlyZWN0aW9uc1wiPkRpcmVjdGlvbnM8L2gxPmBcclxuICAgIG5hdkFib3V0LmlubmVySFRNTCA9IGA8aDEgY2xhc3M9XCJhYm91dFwiPkFib3V0PC9oMT5gXHJcbiAgICBcclxuICAgIC8vIEFwcGVuZCBhbGwgdGhlIHRoaW5ncy5cclxuICAgIHJpZ2h0RGl2LmFwcGVuZENoaWxkKG5hdk1lbnUpXHJcbiAgICByaWdodERpdi5hcHBlbmRDaGlsZChuYXZEaXJlY3Rpb25zKVxyXG4gICAgcmlnaHREaXYuYXBwZW5kQ2hpbGQobmF2QWJvdXQpXHJcblxyXG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZCh0aXRsZVRleHQpXHJcbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKHRpdGxlU2xvZ2FuKVxyXG5cclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChyaWdodERpdilcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChsZWZ0RGl2KVxyXG5cclxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyKVxyXG5cclxuICAgIC8vIEFkZCBjbGljayBldmVudGxpc3RlbmVycyBmb3IgbWVudSBlbGVtZW50cy5cclxuICAgIC8vIGFkZE1lbnVFdmVudHMoKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmF2QmFyLFxyXG4gICAgICAgIGxlZnREaXYsXHJcbiAgICAgICAgcmlnaHREaXYsXHJcbiAgICAgICAgbmF2TWVudSxcclxuICAgICAgICBuYXZBYm91dCxcclxuICAgICAgICBuYXZEaXJlY3Rpb25zLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgcmVuZGVyTmF2IH0iLCJpbXBvcnQgeyBwYWdlQ29udGFpbmVyIH0gZnJvbSBcIi4uXCJcclxuaW1wb3J0IHsgcmVuZGVyTWFpblBhZ2UgfSBmcm9tIFwiLi4vcGFnZXMvbWFpbnBhZ2VcIlxyXG5pbXBvcnQgeyByZW5kZXJOYXYgfSBmcm9tIFwiLi9uYXZiYXJcIlxyXG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSBcIi4uL3BhZ2VzL21lbnVcIlxyXG5pbXBvcnQgeyByZW5kZXJEaXJlY3Rpb25zIH0gZnJvbSBcIi4uL3BhZ2VzL2RpcmVjdGlvbnNcIlxyXG5pbXBvcnQgeyByZW5kZXJBYm91dCB9IGZyb20gXCIuLi9wYWdlcy9hYm91dFwiXHJcblxyXG4vLyBBZGQgY2hhbmdlIHBhZ2Ugb24gbmF2IGNsaWNrIGZ1bmN0aW9uYWxpdHkuXHJcbmNvbnN0IGNoYW5nZVBhZ2UgPSAocGFnZSkgPT4ge1xyXG4gICAgaWYgKHBhZ2UgPT0gJ2hvbWUnKSB7XHJcbiAgICAgICAgcGFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgcmVuZGVyTWFpblBhZ2UoKVxyXG4gICAgfSBlbHNlIGlmIChwYWdlID09ICdtZW51Jykge1xyXG4gICAgICAgIHBhZ2VDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgICAgIHJlbmRlck1lbnUoKVxyXG4gICAgfSBlbHNlIGlmIChwYWdlID09ICdhYm91dCcpIHtcclxuICAgICAgICBwYWdlQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcclxuICAgICAgICByZW5kZXJBYm91dCgpXHJcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT0gJ2RpcmVjdGlvbnMnKSB7XHJcbiAgICAgICAgcGFnZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICAgICAgcmVuZGVyRGlyZWN0aW9ucygpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmYXRhbCBlcnJvciBkdWRlLicpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGFkZE1lbnVFdmVudHMgPSAoKSA9PiB7XHJcbiAgICAvLyBEZWZpbmUgbWVudSBidXR0b25zLlxyXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcclxuICAgIGNvbnN0IGRpcmVjdGlvbnNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0aW9ucycpXHJcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpXHJcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2lkZScpXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGJ1dHRvbnMuXHJcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlUGFnZSgnaG9tZScpKVxyXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVBhZ2UoJ21lbnUnKSlcclxuICAgIGRpcmVjdGlvbnNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VQYWdlKCdkaXJlY3Rpb25zJykpXHJcbiAgICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVBhZ2UoJ2Fib3V0JykpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZE1lbnVFdmVudHMgfVxyXG4iLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xyXG5pbXBvcnQgeyByZW5kZXJNYWluUGFnZSB9IGZyb20gXCIuL3BhZ2VzL21haW5wYWdlXCI7XHJcbmltcG9ydCB7IHJlbmRlck1lbnUgfSBmcm9tICcuL3BhZ2VzL21lbnUnO1xyXG5pbXBvcnQgeyByZW5kZXJOYXYgfSBmcm9tIFwiLi9jb21wb25lbnRzL25hdmJhclwiO1xyXG5pbXBvcnQgeyByZW5kZXJEaXJlY3Rpb25zIH0gZnJvbSAnLi9wYWdlcy9kaXJlY3Rpb25zJztcclxuaW1wb3J0IHsgcmVuZGVyQWJvdXQgfSBmcm9tICcuL3BhZ2VzL2Fib3V0JztcclxuLy8gaW1wb3J0IHsgYWRkTWVudUV2ZW50cyB9IGZyb20gJy4vY29tcG9uZW50cy9wYWdlY2hhbmdlcic7XHJcblxyXG5cclxuY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbnBhZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VDb250YWluZXIpXHJcbmNvbnNvbGUubG9nKHBhZ2VDb250YWluZXIpXHJcblxyXG5cclxucmVuZGVyTmF2KClcclxuLy8gYWRkTWVudUV2ZW50cygpXHJcbi8vIHJlbmRlck1haW5QYWdlKClcclxuLy8gcmVuZGVyTWVudSgpXHJcbnJlbmRlckRpcmVjdGlvbnMoKVxyXG5leHBvcnQge3BhZ2VDb250YWluZXJ9IiwiaW1wb3J0ICcuL2Fib3V0LmNzcydcclxuaW1wb3J0IHsgcGFnZUNvbnRhaW5lciB9IGZyb20gJy4uJ1xyXG5cclxuY29uc3QgcmVuZGVyQWJvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBhYm91dEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuXHJcblxyXG4gICAgYWJvdXREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhYm91dC1kaXYnKVxyXG4gICAgYWJvdXRIZWFkaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWJvdXQtaGVhZGluZycpXHJcbiAgICBhYm91dFRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhYm91dC10ZXh0JylcclxuXHJcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0RGl2KVxyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJBYm91dCB9IiwiaW1wb3J0ICcuL2RpcmVjdGlvbnMuY3NzJ1xyXG5pbXBvcnQgeyBwYWdlQ29udGFpbmVyIH0gZnJvbSAnLi4nXHJcblxyXG5cclxuY29uc3QgcmVuZGVyRGlyZWN0aW9ucyA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaXJlY3Rpb25zLXBhZ2UnKVxyXG5cclxuICAgIGNvbnN0IGRpcmVjdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgdGV4dENvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbWFwQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0ZXh0QWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB0ZXh0SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgXHJcbiAgICBkaXJlY3Rpb25zRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGlyZWN0aW9ucy1kaXYnKVxyXG4gICAgdGV4dENvbnRlbnREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWNvbnRlbnQnKVxyXG4gICAgbWFwQ29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21hcC1jb250ZW50JylcclxuXHJcbiAgICB0ZXh0QWRkcmVzcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtYWRkcmVzcycpXHJcbiAgICB0ZXh0SG91cnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWhvdXJzJylcclxuXHJcbiAgICB0ZXh0QWRkcmVzcy5pbm5lckhUTUwgPSBgXHJcbiAgICA8aDE+TEVTIExvY2F0aW9uPC9oMT5cclxuICAgIDxwPjU1MCBCZXJnZW4gQ3Jvc3Npbmc8L3A+XHJcbiAgICA8cD5OZXcgWW9yaywgTlkgMTAwMjM8L3A+XHJcbiAgICA8cD5Db3JuZXIgb2YgQmVyZ2VuIGFuZCBMYWZheWV0dGU8L3A+XHJcbiAgICA8cD5BIFRyYWluIHRvIEJlcmdlbiBNZXRyb1RlY2g8L3A+XHJcbiAgICA8aDE+QnJvb2tseW4gTG9jYXRpb248L2gxPlxyXG4gICAgPHA+Q29taW5nIDIwMjM8L3A+XHJcbiAgICBgXHJcbiAgICB0ZXh0SG91cnMuaW5uZXJIVE1MID0gYFxyXG4gICAgPGgxPkhvdXJzIG9mIE9wZXJhdGlvbjwvaDE+XHJcbiAgICA8cD5Nb25kYXkgLSA5YW0gLSA2OjMwcG08L3A+XHJcbiAgICA8cD5UdWVzZGF5IC0gOWFtIC0gNjozMHBtPC9wPlxyXG4gICAgPHA+V2VkbmVzZGF5IC0gOWFtIC0gNjozMHBtPC9wPlxyXG4gICAgPHA+VGh1cnNkYXkgLSA5YW0gLSA2OjMwcG08L3A+XHJcbiAgICA8cD5GcmlkYXkgLSA5YW0gLSA2OjMwcG08L3A+XHJcbiAgICA8cD5TYXR1cmRheSAtIDEycG0gLSA1OjMwcG08L3A+XHJcbiAgICA8cD5TdW5kYXkgLSBDbG9zZWQ8L3A+XHJcbiAgICBgXHJcblxyXG4gICAgLy8gQXBwZW5kIGFsbCB0aGUgdGhpbmdzXHJcbiAgICBkaXJlY3Rpb25zRGl2LmFwcGVuZENoaWxkKHRleHRDb250ZW50RGl2KVxyXG5cclxuXHJcbiAgICB0ZXh0Q29udGVudERpdi5hcHBlbmRDaGlsZCh0ZXh0QWRkcmVzcylcclxuICAgIHRleHRDb250ZW50RGl2LmFwcGVuZENoaWxkKHRleHRIb3VycylcclxuXHJcblxyXG4gICAgLy8gQXBwZW5kIGFsbCB0aGUgZ2VuZXJhdGVkIGNvbnRlbnQgdG8gdGhlIG1haW4gcGFnZS5cclxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uc0RpdilcclxufVxyXG5cclxuZXhwb3J0IHsgcmVuZGVyRGlyZWN0aW9ucyB9IiwiaW1wb3J0ICcuL21haW5wYWdlLmNzcydcclxuaW1wb3J0ICcuLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7IHBhZ2VDb250YWluZXIgfSBmcm9tICcuLidcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICcuLi9sb2dvL2NhcmJob3VzZS13aGl0ZS53ZWJwJ1xyXG5cclxuLy8gUmVtb3ZlIGNsYXNzIGlmIHRoZXJlIGlzIG9uZS5cclxuZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJylcclxuXHJcbmNvbnN0IHJlbmRlck1haW5QYWdlID0gKCkgPT4ge1xyXG4gICAgLy8gRGVmaW5lIGVsZW1lbnRzXHJcbiAgICBjb25zdCBtYWluUGFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBjaExvZ28gPSBuZXcgSW1hZ2UoKVxyXG4gICAgY29uc3QgdGV4dENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGNvbnN0IHBhZ2VCb2R5ID0gZG9jdW1lbnQuYm9keVxyXG5cclxuICAgIC8vU2V0IGF0dHJpYnV0ZXMgZm9yIGVsZW1lbnRzXHJcbiAgICBtYWluUGFnZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW5wYWdlZGl2JylcclxuICAgIGNoTG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NobG9nbycpXHJcbiAgICBjaExvZ28uc3JjID0gbG9nb0ltYWdlXHJcbiAgICB0ZXh0Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHRjb250ZW50JylcclxuICAgIHBhZ2VCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbnBhZ2UnKVxyXG5cclxuXHJcbiAgICAvLyBJbnNlcnQgY29udGVudCBpbnRvIGVsZW1lbnRzXHJcbiAgICB0ZXh0Q29udGVudC5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gQ2FyYkhvdXNlIHRoZSBwYWxhY2Ugb2YgbG9zdCBnYWlucyBhbmQgYSByb3VuZCBndXQuIFBsZWFzZSBtYWtlIHlvdXJzZWxmIGF0IGhvbWUgYW5kIHRha2UgYSBsb29rIGF0IHRoZSBtZW51LlwiXHJcblxyXG4gICAgLy8gQXBwZW5kIHRoZSBlbGVtZW50c1xyXG4gICAgbWFpblBhZ2VEaXYuYXBwZW5kQ2hpbGQoY2hMb2dvKVxyXG4gICAgbWFpblBhZ2VEaXYuYXBwZW5kQ2hpbGQodGV4dENvbnRlbnQpXHJcblxyXG4gICAgLy8gQXBwZW5kIHRvIHRoZSBzaXRlIHBhZ2UuXHJcbiAgICBwYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW5QYWdlRGl2KVxyXG59XHJcblxyXG5leHBvcnQgeyByZW5kZXJNYWluUGFnZSB9IiwiaW1wb3J0ICcuL21lbnUuY3NzJ1xyXG5pbXBvcnQgeyBwYWdlQ29udGFpbmVyIH0gZnJvbSAnLi4nXHJcblxyXG4vLyBSZW1vdmUgY2xhc3MgaWYgdGhlcmUgaXMgb25lLlxyXG5kb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxyXG5cclxuY29uc3QgcmVuZGVyTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgZm9vZEl0ZW1PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgZm9vZEl0ZW1Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgZm9vZEl0ZW1UaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBmb29kSXRlbUZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgZm9vZEl0ZW1GaXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGZvb2RJdGVtU2l4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIFxyXG4gICAgY29uc3QgcGFnZUJvZHkgPSBkb2N1bWVudC5ib2R5XHJcblxyXG4gICAgbWVudURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtYXJlYScpXHJcbiAgICBcclxuICAgIGZvb2RJdGVtT25lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9vZC1pdGVtLW9uZScpXHJcbiAgICBmb29kSXRlbVR3by5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvb2QtaXRlbS10d28nKVxyXG4gICAgZm9vZEl0ZW1UaHJlZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvb2QtaXRlbS10aHJlZScpXHJcbiAgICBmb29kSXRlbUZvdXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb29kLWl0ZW0tZm91cicpXHJcbiAgICBmb29kSXRlbUZpdmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb29kLWl0ZW0tZml2ZScpXHJcbiAgICBmb29kSXRlbVNpeC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvb2QtaXRlbS1zaXgnKVxyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1PbmUpXHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGZvb2RJdGVtVHdvKVxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChmb29kSXRlbVRocmVlKVxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChmb29kSXRlbUZvdXIpXHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGZvb2RJdGVtRml2ZSlcclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1TaXgpXHJcblxyXG4gICAgLy8gTWVudSBUaXRsZXNcclxuICAgIGNvbnN0IGZvb2RJdGVtT25lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBmb29kSXRlbVR3b1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgY29uc3QgZm9vZEl0ZW1UaHJlZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgY29uc3QgZm9vZEl0ZW1Gb3VyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBmb29kSXRlbUZpdmVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGNvbnN0IGZvb2RJdGVtU2l4VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcblxyXG4gICAgZm9vZEl0ZW1PbmVUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0tb25lLXRpdGxlJylcclxuICAgIGZvb2RJdGVtVHdvVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtLXR3by10aXRsZScpXHJcbiAgICBmb29kSXRlbVRocmVlVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtLXRocmVlLXRpdGxlJylcclxuICAgIGZvb2RJdGVtRm91clRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS1mb3VyLXRpdGxlJylcclxuICAgIGZvb2RJdGVtRml2ZVRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS1maXZlLXRpdGxlJylcclxuICAgIGZvb2RJdGVtU2l4VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtLXNpeC10aXRsZScpXHJcblxyXG4gICAgZm9vZEl0ZW1PbmVUaXRsZS5pbm5lclRleHQgPSBcIkJyZWFkc1wiXHJcbiAgICBmb29kSXRlbVR3b1RpdGxlLmlubmVyVGV4dCA9IFwiU2F2b3JpZXNcIlxyXG4gICAgZm9vZEl0ZW1UaHJlZVRpdGxlLmlubmVyVGV4dCA9IFwiQ29mZmVlXCJcclxuICAgIGZvb2RJdGVtRm91clRpdGxlLmlubmVyVGV4dCA9IFwiQ2FrZXNcIlxyXG4gICAgZm9vZEl0ZW1GaXZlVGl0bGUuaW5uZXJUZXh0ID0gXCJQYXN0cmllc1wiXHJcbiAgICBmb29kSXRlbVNpeFRpdGxlLmlubmVyVGV4dCA9IFwiTWFjYXJvbnNcIlxyXG5cclxuICAgIGZvb2RJdGVtT25lLmFwcGVuZENoaWxkKGZvb2RJdGVtT25lVGl0bGUpXHJcbiAgICBmb29kSXRlbVR3by5hcHBlbmRDaGlsZChmb29kSXRlbVR3b1RpdGxlKVxyXG4gICAgZm9vZEl0ZW1UaHJlZS5hcHBlbmRDaGlsZChmb29kSXRlbVRocmVlVGl0bGUpXHJcbiAgICBmb29kSXRlbUZvdXIuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1Gb3VyVGl0bGUpXHJcbiAgICBmb29kSXRlbUZpdmUuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1GaXZlVGl0bGUpXHJcbiAgICBmb29kSXRlbVNpeC5hcHBlbmRDaGlsZChmb29kSXRlbVNpeFRpdGxlKVxyXG5cclxuICAgIC8vIEl0ZW1zIGxpc3RzIGZvciBlYWNoIG1lbnUgc2VjdGlvbi5cclxuICAgIGNvbnN0IGZvb2RJdGVtT25lTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RsJylcclxuICAgIGNvbnN0IGZvb2RJdGVtVHdvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RsJylcclxuICAgIGNvbnN0IGZvb2RJdGVtVGhyZWVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGwnKVxyXG4gICAgY29uc3QgZm9vZEl0ZW1Gb3VyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RsJylcclxuICAgIGNvbnN0IGZvb2RJdGVtRml2ZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkbCcpXHJcbiAgICBjb25zdCBmb29kSXRlbVNpeExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkbCcpXHJcbiAgICBcclxuICAgIGZvb2RJdGVtT25lTGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0tb25lLWxpc3QnKVxyXG4gICAgZm9vZEl0ZW1Ud29MaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS10d28tbGlzdCcpXHJcbiAgICBmb29kSXRlbVRocmVlTGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0tdGhyZWUtbGlzJylcclxuICAgIGZvb2RJdGVtRm91ckxpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtLWZvdXItbGlzdCcpXHJcbiAgICBmb29kSXRlbUZpdmVMaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS1maXZlLWxpc3QnKVxyXG4gICAgZm9vZEl0ZW1TaXhMaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS1zaXgtbGlzdCcpXHJcblxyXG4gICAgLy8gTGlzdCBjb250ZW50LlxyXG4gICAgZm9vZEl0ZW1PbmVMaXN0LmlubmVySFRNTCA9IGBcclxuICAgIDxkdD5CYWd1ZXR0ZSAtICQzLjUwPC9kdD5cclxuICAgIDxkdD5Tb3VyZG91Z2ggLSAkNC4wMDwvZHQ+XHJcbiAgICA8ZHQ+UnllIC0gJDIuMDA8L2R0PlxyXG4gICAgPGR0PkJyaW9jaGUgLSAkNC4wMDwvZHQ+XHJcbiAgICA8ZHQ+Q2lhYmF0dGEgLSAkMy40MDwvZHQ+XHJcbiAgICA8ZHQ+UGl0YSAtICQxLjUwPC9kdD5cclxuICAgIGBcclxuICAgIGZvb2RJdGVtVHdvTGlzdC5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZHQ+SGFtICYgQ2hlZXNlIENyb2lzc2FudCAtICQyLjk1PC9kdD5cclxuICAgIDxkdD5Db3VudHJ5IFN0eWxlIE9tZWxldCAtICQ1LjQ1PC9kdD5cclxuICAgIDxkdD5CcmVha2Zhc3QgUGxhdHRlciAtICQ4LjQwPC9kdD5cclxuICAgIDxkdD5OZXcgWW9yayBTdGVhayAmIEVnZ3MgLSAkMTAuMDA8L2R0PlxyXG4gICAgPGR0PkJhY29uLCBFZ2cgJiBDaGVlc2UgQ3JvaXNzYW50IC0gJDUuMDA8L2R0PlxyXG4gICAgYFxyXG4gICAgZm9vZEl0ZW1UaHJlZUxpc3QuaW5uZXJIVE1MID0gYFxyXG4gICAgPGR0PkFtZXJpY2FubyAtICQyLjY1PC9kdD5cclxuICAgIDxkdD5Eb3VibGUgRXNwcmVzc28gLSAkMy4xMDwvZHQ+XHJcbiAgICA8ZHQ+TWFjY2hpYXRvIC0gJDMuNzU8L2R0PlxyXG4gICAgPGR0PkxhdHRlIC0gJDIuOTU8L2R0PlxyXG4gICAgPGR0PkNhcHB1Y2Npbm8gLSAkMi4yNTwvZHQ+XHJcbiAgICA8ZHQ+TW9jaGEgLSAkMy4xMDwvZHQ+XHJcbiAgICA8ZHQ+SG90IENob2NvbGF0ZSAtICMyLjQwPC9kdD5cclxuICAgIGBcclxuICAgIGZvb2RJdGVtRm91ckxpc3QuaW5uZXJIVE1MID0gYFxyXG4gICAgPGR0PkJyb3duaWUgU2xpY2UgLSAkNC41MDwvZHQ+XHJcbiAgICA8ZHQ+QXBwbGUgUGllIC0gJDMuNzU8L2R0PlxyXG4gICAgPGR0PkNoZWVzZSBDYWtlIC0gJDUuNTA8L2R0PlxyXG4gICAgPGR0PlRpcmFtaXN1IC0gJDYuMTA8L2R0PlxyXG4gICAgPGR0PlJlZCBWZWx2ZXQgLSAkNy4wMDwvZHQ+XHJcbiAgICBgXHJcbiAgICBmb29kSXRlbUZpdmVMaXN0LmlubmVySFRNTCA9IGBcclxuICAgIDxkdD5CZWFyIENsYXcgLSAkMy4wMDwvZHQ+XHJcbiAgICA8ZHQ+QmVhdmVyIFRhaWwgLSAkNC4yMDwvZHQ+XHJcbiAgICA8ZHQ+Q3JvbnV0IC0gJDUuNTU8L2R0PlxyXG4gICAgPGR0PkNoZWVzZSBEYW5pc2ggLSAkMS40MDwvZHQ+XHJcbiAgICA8ZHQ+Q2Fub2xpIC0gJDMuMDA8L2R0PlxyXG4gICAgPGR0PlJhaW5ib3cgQ29va2llIC0gJDEuMjA8L2R0PlxyXG4gICAgYFxyXG5cclxuICAgIGZvb2RJdGVtU2l4TGlzdC5pbm5lckhUTUwgPWBcclxuICAgIDxkdD5WYW5pbGxhIC0gJDUuNDA8L2R0PlxyXG4gICAgPGR0PkNob2NvbGF0ZSAtICQ1LjQwPC9kdD5cclxuICAgIDxkdD5TdHJhd2JlcnJ5IC0gJDEuNTA8L2R0PlxyXG4gICAgPGR0PlRyZXMgTGVjaGUgLSAkNS41NTwvZHQ+XHJcbiAgICA8ZHQ+MjQgUGFjayAoQXNzb3J0ZWQpIC0gJDQ5LjAwPC9kdD5cclxuICAgIDxkdD40OCBQYWNrIChBc3NvcnRlZCkgLSAkNjkuNTA8L2R0PlxyXG4gICAgYFxyXG5cclxuICAgIGZvb2RJdGVtT25lLmFwcGVuZENoaWxkKGZvb2RJdGVtT25lTGlzdClcclxuICAgIGZvb2RJdGVtVHdvLmFwcGVuZENoaWxkKGZvb2RJdGVtVHdvTGlzdClcclxuICAgIGZvb2RJdGVtVGhyZWUuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1UaHJlZUxpc3QpXHJcbiAgICBmb29kSXRlbUZvdXIuYXBwZW5kQ2hpbGQoZm9vZEl0ZW1Gb3VyTGlzdClcclxuICAgIGZvb2RJdGVtRml2ZS5hcHBlbmRDaGlsZChmb29kSXRlbUZpdmVMaXN0KVxyXG4gICAgZm9vZEl0ZW1TaXguYXBwZW5kQ2hpbGQoZm9vZEl0ZW1TaXhMaXN0KVxyXG5cclxuICAgIHBhZ2VCb2R5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudXBhZ2UnKVxyXG5cclxuICAgIHBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudURpdilcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgeyByZW5kZXJNZW51IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=