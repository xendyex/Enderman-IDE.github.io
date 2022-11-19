(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-gamepad"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/gamepad/gamepadlib.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/gamepad/gamepadlib.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gamepadlib-selector {\n  width: 100%;\n  margin-bottom: 3px;\n}\n\n.gamepadlib-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.gamepadlib-content-buttons {\n  padding-right: 10px;\n}\n\n.gamepadlib-mapping {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3px;\n}\n.gamepadlib-mapping-label {\n  width: 100px;\n  text-align: center;\n}\n.gamepadlib-keyinput {\n  text-align: center;\n  width: 75px;\n  height: 25px;\n  border-radius: 0;\n  border: 1px solid black;\n  background: white;\n  color: black;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n[theme=\"dark\"] .gamepadlib-keyinput {\n  background-color: var(--ui-tertiary);\n  border-color: var(--ui-black-transparent);\n  color: var(--text-primary);\n}\n.gamepadlib-mapping[data-value=\"1\"] .gamepadlib-keyinput {\n  background: yellow;\n}\n[theme=\"dark\"] .gamepadlib-mapping[data-value=\"1\"] .gamepadlib-keyinput {\n  background: hsl(60, 100%, 20%)\n}\n.gamepadlib-keyinput[data-accepting-input=\"true\"] {\n  background: #d6fff9;\n}\n[theme=\"dark\"] .gamepadlib-keyinput[data-accepting-input=\"true\"] {\n  background: hsl(171, 100%, 20%);\n}\n.gamepadlib-keyinput[data-empty=\"true\"]:not([data-accepting-input=\"true\"]) {\n  color: #aaa;\n  font-style: italic;\n}\n\n.gamepadlib-axis {\n  margin-bottom: 8px;\n  text-align: center;\n}\n.gamepadlib-axis-circle {\n  position: relative;\n  width: 150px;\n  height: 150px;\n  border: 1px solid black;\n  overflow: hidden;\n}\n[theme=\"dark\"] .gamepadlib-axis-circle {\n  border-color: var(--ui-black-transparent);\n}\n.gamepadlib-axis-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-image: url(" + escape(__webpack_require__(/*! ./dot.svg */ "./src/addons/addons/gamepad/dot.svg")) + ");\n  width: 8px;\n  height: 8px;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n.gamepadlib-axis-mapping {\n  width: 100%;\n}\n\n.gamepadlib-axis-circle-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper {\n  position: absolute;\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(1) {\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(2) {\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(3) {\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(4) {\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/gamepad/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/gamepad/style.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=\"ltr\"] .sa-gamepad-container {\n  margin-right: 0.2rem;\n}\n[dir=\"rtl\"] .sa-gamepad-container {\n  margin-left: 0.2rem;\n}\n\n.sa-gamepad-popup-outer {\n  /* above fullscreen */\n  z-index: 99999;\n}\n.sa-gamepad-popup {\n  box-sizing: border-box;\n  width: 700px;\n  max-height: min(800px, 85vh);\n  height: 100%;\n  max-width: 85%;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n}\n.sa-gamepad-popup-content {\n  padding: 1.5rem 2.25rem;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.sa-gamepad-popup [class*=\"modal_header-item-title\"] {\n  margin: 0 -20rem 0 0;\n}\n\n.sa-gamepad-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  user-select: none;\n  pointer-events: none;\n  will-change: transform;\n  image-rendering: optimizeSpeed;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n}\n.sa-gamepad-cursor-down {\n  filter: invert(100%);\n}\n\n.sa-gamepad-small .sa-gamepad-container[data-editor-mode=\"editor\"] {\n  display: none !important;\n}\n\n.sa-gamepad-hide-cursor [class^=\"stage_stage_\"] {\n  cursor: none;\n}\n\n.sa-gamepad-browser-support-warning {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sa-gamepad-extra-options {\n  display: none;\n}\n.sa-gamepad-has-controller .sa-gamepad-extra-options {\n  display: block;\n}\n\n.sa-gamepad-store-settings {\n  display: block;\n}\n.sa-gamepad-store-settings > input {\n  margin-right: 4px;\n}\n\n.sa-gamepad-reset-button {\n  margin: 8px 8px 8px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/active.png":
/*!************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/active.png ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAABlBMVEX///8AAABVwtN+AAAADklEQVQI12MAAQMgBAIAAkwAYUis6mUAAAAASUVORK5CYII=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/close.svg":
/*!***********************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/close.svg ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuNDggNy40OCI+PHBhdGggZD0iTTMuNzQgNi40OFYxTTEgMy43NGg1LjQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4Ii8+PC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/cursor.png":
/*!************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/cursor.png ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAABlBMVEUAAAD///+l2Z/dAAAADklEQVQI12MAAQMgBAIAAkwAYUis6mUAAAAASUVORK5CYII=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/dot.svg":
/*!*********************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/dot.svg ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAyLjExNyAyLjExNyI+PGNpcmNsZSBjeD0iMS4wNTgiIGN5PSIxLjA1OCIgcj0iMS4wNTgiIGZpbGw9InJlZCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/gamepad.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/gamepad.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzU3NWU3NSIgZD0iTTM2OCAxNjhoLTk2di02NGgxNzZhMjQuMDI3IDI0LjAyNyAwIDAgMCAyNC0yNFYxNmgtMzJ2NTZIMjY0YTI0LjAyNyAyNC4wMjcgMCAwIDAtMjQgMjR2NzJoLTk2QTEyOC4xNDUgMTI4LjE0NSAwIDAgMCAxNiAyOTZ2MTAwLjk1M0E5MS4xNSA5MS4xNSAwIDAgMCAxMDcuMDQ3IDQ4OGgxLjhhOTAuODA3IDkwLjgwNyAwIDAgMCA2OS45NTMtMzIuNzZMMjMxLjUgMzkyaDQ4LjYyOGw1Mi42NjYgNjguNDY1QTkxLjA0NiA5MS4wNDYgMCAwIDAgNDk2IDQwNC45NTNWMjk2YTEyOC4xNDUgMTI4LjE0NSAwIDAgMC0xMjgtMTI4em05NiAyMzYuOTUzYTU5LjA0NyA1OS4wNDcgMCAwIDEtMTA1Ljg0OSAzNkwyOTUuODc4IDM2MGgtNzkuMzcybC02Mi4yOTQgNzQuNzU0QTU4Ljg5MyA1OC44OTMgMCAwIDEgMTA4Ljg1IDQ1NmgtMS44QTU5LjExMyA1OS4xMTMgMCAwIDEgNDggMzk2Ljk1M1YyOTZhOTYuMTA4IDk2LjEwOCAwIDAgMSA5Ni05NmgyMjRhOTYuMTA4IDk2LjEwOCAwIDAgMSA5NiA5NnoiLz48cGF0aCBmaWxsPSIjNTc1ZTc1IiBkPSJNMzYwIDI0OGgzMnYzMmgtMzJ6bTAgODBoMzJ2MzJoLTMyem0tNDAtNDBoMzJ2MzJoLTMyem04MCAwaDMydjMyaC0zMnptLTI0OC00MGgtMzJ2NDBIODB2MzJoNDB2NDBoMzJ2LTQwaDQwdi0zMmgtNDB2LTQweiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/gamepad/_runtime_entry.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/gamepad/_runtime_entry.js ***!
  \*****************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/gamepad/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/gamepad/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_gamepadlib_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./gamepadlib.css */ "./node_modules/css-loader/index.js!./src/addons/addons/gamepad/gamepadlib.css");
/* harmony import */ var _css_loader_gamepadlib_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_gamepadlib_css__WEBPACK_IMPORTED_MODULE_2__);
/* generated by pull.js */



var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "gamepadlib.css": _css_loader_gamepadlib_css__WEBPACK_IMPORTED_MODULE_2___default.a
};

/***/ }),

/***/ "./src/addons/addons/gamepad/dot.svg":
/*!*******************************************!*\
  !*** ./src/addons/addons/gamepad/dot.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/88a77444f0bb453209bf1c62becbd37c.svg";

/***/ }),

/***/ "./src/addons/addons/gamepad/gamepadlib.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/gamepad/gamepadlib.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-target.js */ "./src/addons/event-target.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/* inserted by pull.js */

var console = window.console;
/*
Mapping types:

type: "key" maps a button to a keyboard key
All key names will be interpreted as a KeyboardEvent.key value (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)
high: "KeyName" is the name of the key to dispatch when a button reads a HIGH value
low: "KeyName" is the name of the key to dispatch when a button reads a LOW value
deadZone: 0.5 controls the minimum value necessary to be read in either + or - to trigger either high or low
The high/low distinction is necessary for axes. Buttons will only use high

type: "mousedown" maps a button to control whether the mouse is down or not
deadZone: 0.5 controls the minimum value to trigger a mousedown
button: 0, 1, 2, etc. controls which button to press

type: "virtual_cursor" maps a button to control the "virtual cursor"
deadZone: 0.5 again controls the minimum value to trigger a movement
sensitivity: 10 controls the speed
high: "+y"/"-y"/"+x"/"-x" defines what happens when an axis reads high
low: "+y"/"-y"/"+x"/"-x" defines what happens when an axis reads low
+y increases y, -y decreases y, +x increases x, -x decreases x.
*/

var defaultAxesMappings = {
  arrows: [{
    type: "key",
    high: "ArrowRight",
    low: "ArrowLeft",
    deadZone: 0.5
  }, {
    type: "key",
    high: "ArrowDown",
    low: "ArrowUp",
    deadZone: 0.5
  }],
  wasd: [{
    type: "key",
    high: "d",
    low: "a",
    deadZone: 0.5
  }, {
    type: "key",
    high: "s",
    low: "w",
    deadZone: 0.5
  }],
  cursor: [{
    type: "virtual_cursor",
    high: "+x",
    low: "-x",
    sensitivity: 0.6,
    deadZone: 0.2
  }, {
    type: "virtual_cursor",
    high: "-y",
    low: "+y",
    sensitivity: 0.6,
    deadZone: 0.2
  }]
};

var emptyMapping = function emptyMapping() {
  return {
    type: "key",
    high: null,
    low: null
  };
};

var transformAndCopyMapping = function transformAndCopyMapping(mapping) {
  if (_typeof(mapping) !== "object" || !mapping) {
    console.warn("invalid mapping", mapping);
    return emptyMapping();
  }

  var copy = Object.assign({}, mapping);

  if (copy.type === "key") {
    if (typeof copy.deadZone === "undefined") {
      copy.deadZone = 0.5;
    }

    if (typeof copy.high === "undefined") {
      copy.high = "";
    }

    if (typeof copy.low === "undefined") {
      copy.low = "";
    }
  } else if (copy.type === "mousedown") {
    if (typeof copy.deadZone === "undefined") {
      copy.deadZone = 0.5;
    }

    if (typeof copy.button === "undefined") {
      copy.button = 0;
    }
  } else if (copy.type === "virtual_cursor") {
    if (typeof copy.high === "undefined") {
      copy.high = "";
    }

    if (typeof copy.low === "undefined") {
      copy.low = "";
    }

    if (typeof copy.sensitivity === "undefined") {
      copy.sensitivity = 10;
    }

    if (typeof copy.deadZone === "undefined") {
      copy.deadZone = 0.5;
    }
  } else {
    console.warn("unknown mapping type", copy.type);
    return emptyMapping();
  }

  return copy;
};

var prepareMappingForExport = function prepareMappingForExport(mapping) {
  return Object.assign({}, mapping);
};

var prepareAxisMappingForExport = prepareMappingForExport;

var prepareButtonMappingForExport = function prepareButtonMappingForExport(mapping) {
  var copy = prepareMappingForExport(mapping);
  delete copy.deadZone;
  delete copy.low;
  return copy;
};

var padWithEmptyMappings = function padWithEmptyMappings(array, length) {
  // Keep adding empty mappings until the list is full
  while (array.length < length) {
    array.push(emptyMapping());
  } // In case the input array is longer than the desired length


  array.length = length;
  return array;
};

var createEmptyMappingList = function createEmptyMappingList(length) {
  return padWithEmptyMappings([], length);
};

var getMovementConfiguration = function getMovementConfiguration(usedKeys) {
  return {
    usesArrows: usedKeys.has("ArrowUp") || usedKeys.has("ArrowDown") || usedKeys.has("ArrowRight") || usedKeys.has("ArrowLeft"),
    usesWASD: usedKeys.has("w") && usedKeys.has("s") || usedKeys.has("a") && usedKeys.has("d")
  };
};

var getGamepadId = function getGamepadId(gamepad) {
  return "".concat(gamepad.id, " (").concat(gamepad.index, ")");
};

var GamepadData = /*#__PURE__*/function () {
  /**
   * @param {Gamepad} gamepad Source Gamepad
   * @param {GamepadLib} gamepadLib Parent GamepadLib
   */
  function GamepadData(gamepad, gamepadLib) {
    _classCallCheck(this, GamepadData);

    this.gamepad = gamepad;
    this.gamepadLib = gamepadLib;
    this.resetMappings();
  }

  _createClass(GamepadData, [{
    key: "resetMappings",
    value: function resetMappings() {
      this.buttonMappings = this.getDefaultButtonMappings().map(transformAndCopyMapping);
      this.axesMappings = this.getDefaultAxisMappings().map(transformAndCopyMapping);
    }
  }, {
    key: "clearMappings",
    value: function clearMappings() {
      this.buttonMappings = createEmptyMappingList(this.gamepad.buttons.length);
      this.axesMappings = createEmptyMappingList(this.gamepad.axes.length);
    }
  }, {
    key: "getDefaultButtonMappings",
    value: function getDefaultButtonMappings() {
      var buttons;

      if (this.gamepadLib.hints.importedSettings) {
        buttons = this.gamepadLib.hints.importedSettings.buttons;
      } else {
        var usedKeys = this.gamepadLib.hints.usedKeys;
        var alreadyUsedKeys = new Set();

        var _getMovementConfigura = getMovementConfiguration(usedKeys),
            usesArrows = _getMovementConfigura.usesArrows,
            usesWASD = _getMovementConfigura.usesWASD;

        if (usesWASD) {
          alreadyUsedKeys.add("w");
          alreadyUsedKeys.add("a");
          alreadyUsedKeys.add("s");
          alreadyUsedKeys.add("d");
        }

        var possiblePauseKeys = [// Restart keys, pause keys, other potentially dangerous keys
        "p", "q", "r"];
        var possibleActionKeys = [" ", "Enter", "e", "f", "z", "x", "c"].concat(_toConsumableArray(Array.from(usedKeys).filter(function (i) {
          return i.length === 1 && !possiblePauseKeys.includes(i);
        })));

        var findKey = function findKey(keys) {
          var _iterator = _createForOfIteratorHelper(keys),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var key = _step.value;

              if (usedKeys.has(key) && !alreadyUsedKeys.has(key)) {
                alreadyUsedKeys.add(key);
                return key;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return null;
        };

        var getPrimaryAction = function getPrimaryAction() {
          if (usesArrows && usedKeys.has("ArrowUp")) {
            return "ArrowUp";
          }

          if (usesWASD && usedKeys.has("w")) {
            return "w";
          }

          return findKey(possibleActionKeys);
        };

        var getSecondaryAction = function getSecondaryAction() {
          return findKey(possibleActionKeys);
        };

        var getPauseKey = function getPauseKey() {
          return findKey(possiblePauseKeys);
        };

        var getUp = function getUp() {
          if (usesArrows || !usesWASD) return "ArrowUp";
          return "w";
        };

        var getDown = function getDown() {
          if (usesArrows || !usesWASD) return "ArrowDown";
          return "s";
        };

        var getRight = function getRight() {
          if (usesArrows || !usesWASD) return "ArrowRight";
          return "d";
        };

        var getLeft = function getLeft() {
          if (usesArrows || !usesWASD) return "ArrowLeft";
          return "a";
        };

        var action1 = getPrimaryAction();
        var action2 = getSecondaryAction();
        var action3 = getSecondaryAction();
        var action4 = getSecondaryAction(); // When only 1 or 2 action keys are detected, bind the other buttons to the same things.

        if (action1 && !action2 && !action3 && !action4) {
          action2 = action1;
          action3 = action1;
          action4 = action1;
        }

        if (action1 && action2 && !action3 && !action4) {
          action3 = action1;
          action4 = action2;
        } // Set indices "manually" because we don't evaluate them in order.


        buttons = [];
        buttons[0] = {
          /*
          Xbox: A
          SNES-like: B
          */
          type: "key",
          high: action1
        };
        buttons[1] = {
          /*
          Xbox: B
          SNES-like: A
          */
          type: "key",
          high: action2
        };
        buttons[2] = {
          /*
          Xbox: X
          SNES-like: Y
          */
          type: "key",
          high: action3
        };
        buttons[3] = {
          /*
          Xbox: Y
          SNES-like: X
          */
          type: "key",
          high: action4
        };
        buttons[4] = {
          /*
          Xbox: LB
          SNES-like: Left trigger
          */
          type: "mousedown"
        };
        buttons[5] = {
          /*
          Xbox: RB
          */
          type: "mousedown"
        };
        buttons[6] = {
          /*
          Xbox: LT
          */
          type: "mousedown"
        };
        buttons[7] = {
          /*
          Xbox: RT
          SNES-like: Right trigger
          */
          type: "mousedown"
        };
        buttons[9] = {
          /*
          Xbox: Menu
          SNES-like: Start
          */
          type: "key",
          high: getPauseKey()
        };
        buttons[8] = {
          /*
          Xbox: Change view
          SNES-like: Select
          */
          type: "key",
          high: getPauseKey()
        }; // Xbox: Left analog press

        buttons[10] = emptyMapping(); // Xbox: Right analog press

        buttons[11] = emptyMapping();
        buttons[12] = {
          /*
          Xbox: D-pad up
          */
          type: "key",
          high: getUp()
        };
        buttons[13] = {
          /*
          Xbox: D-pad down
          */
          type: "key",
          high: getDown()
        };
        buttons[14] = {
          /*
          Xbox: D-pad left
          */
          type: "key",
          high: getLeft()
        };
        buttons[15] = {
          /*
          Xbox: D-pad right
          */
          type: "key",
          high: getRight()
        };
      }

      return padWithEmptyMappings(buttons, this.gamepad.buttons.length);
    }
  }, {
    key: "getDefaultAxisMappings",
    value: function getDefaultAxisMappings() {
      var axes = [];

      if (this.gamepadLib.hints.importedSettings) {
        axes = this.gamepadLib.hints.importedSettings.axes;
      } else {
        // Only return default axis mappings when there are 4 axes, like an xbox controller
        // If there isn't exactly 4, we can't really predict what the axes mean
        // Some controllers map the dpad to *both* buttons and axes at the same time, which would cause conflicts.
        if (this.gamepad.axes.length === 4) {
          var usedKeys = this.gamepadLib.hints.usedKeys;

          var _getMovementConfigura2 = getMovementConfiguration(usedKeys),
              usesArrows = _getMovementConfigura2.usesArrows,
              usesWASD = _getMovementConfigura2.usesWASD;

          if (usesWASD) {
            axes.push(defaultAxesMappings.wasd[0]);
            axes.push(defaultAxesMappings.wasd[1]);
          } else if (usesArrows) {
            axes.push(defaultAxesMappings.arrows[0]);
            axes.push(defaultAxesMappings.arrows[1]);
          } else {
            axes.push(defaultAxesMappings.cursor[0]);
            axes.push(defaultAxesMappings.cursor[1]);
          }

          axes.push(defaultAxesMappings.cursor[0]);
          axes.push(defaultAxesMappings.cursor[1]);
        }
      }

      return padWithEmptyMappings(axes, this.gamepad.axes.length);
    }
  }]);

  return GamepadData;
}();

var defaultHints = function defaultHints() {
  return {
    usedKeys: new Set(),
    importedSettings: null,
    generated: false
  };
};

var GamepadLib = /*#__PURE__*/function (_EventTarget) {
  _inherits(GamepadLib, _EventTarget);

  var _super = _createSuper(GamepadLib);

  function GamepadLib() {
    var _this;

    _classCallCheck(this, GamepadLib);

    _this = _super.call(this);
    /** @type {Map<string, GamepadData>} */

    _this.gamepads = new Map();
    _this.handleConnect = _this.handleConnect.bind(_assertThisInitialized(_this));
    _this.handleDisconnect = _this.handleDisconnect.bind(_assertThisInitialized(_this));
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.animationFrame = null;
    _this.currentTime = null;
    _this.deltaTime = 0;
    _this.virtualCursor = {
      x: 0,
      y: 0,
      maxX: Infinity,
      minX: -Infinity,
      maxY: Infinity,
      minY: -Infinity,
      modified: false
    };
    _this._editor = null;
    _this.connectCallbacks = [];
    _this.hints = defaultHints();
    _this.keysPressedThisFrame = new Set();
    _this.oldKeysPressed = new Set();
    _this.mouseButtonsPressedThisFrame = new Set();
    _this.oldMouseDown = new Set();

    _this.addEventHandlers();

    return _this;
  }

  _createClass(GamepadLib, [{
    key: "addEventHandlers",
    value: function addEventHandlers() {
      window.addEventListener("gamepadconnected", this.handleConnect);
      window.addEventListener("gamepaddisconnected", this.handleDisconnect);
    }
  }, {
    key: "removeEventHandlers",
    value: function removeEventHandlers() {
      window.removeEventListener("gamepadconnected", this.handleConnect);
      window.removeEventListener("gamepaddisconnected", this.handleDisconnect);
    }
  }, {
    key: "gamepadConnected",
    value: function gamepadConnected() {
      var _this2 = this;

      if (this.gamepads.size > 0) {
        return Promise.resolve();
      }

      return new Promise(function (resolve) {
        _this2.connectCallbacks.push(resolve);
      });
    }
  }, {
    key: "ensureHintsGenerated",
    value: function ensureHintsGenerated() {
      if (this.hints.generated) {
        return;
      }

      if (this.getHintsLazily) {
        Object.assign(this.hints, this.getHintsLazily());
      }

      this.hints.generated = true;
    }
  }, {
    key: "resetControls",
    value: function resetControls() {
      this.hints = defaultHints();
      this.ensureHintsGenerated();

      var _iterator2 = _createForOfIteratorHelper(this.gamepads.values()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var gamepad = _step2.value;
          gamepad.resetMappings();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "clearControls",
    value: function clearControls() {
      var _iterator3 = _createForOfIteratorHelper(this.gamepads.values()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var gamepad = _step3.value;
          gamepad.clearMappings();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "handleConnect",
    value: function handleConnect(e) {
      this.ensureHintsGenerated();

      var _iterator4 = _createForOfIteratorHelper(this.connectCallbacks),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var callback = _step4.value;
          callback();
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.connectCallbacks = [];
      var gamepad = e.gamepad;
      var id = getGamepadId(gamepad);
      console.log("connected", gamepad);
      var gamepadData = new GamepadData(gamepad, this);
      this.gamepads.set(id, gamepadData);

      if (this.animationFrame === null) {
        this.animationFrame = requestAnimationFrame(this.update);
      }

      this.dispatchEvent(new CustomEvent("gamepadconnected", {
        detail: gamepadData
      }));
    }
  }, {
    key: "handleDisconnect",
    value: function handleDisconnect(e) {
      var gamepad = e.gamepad;
      var id = getGamepadId(gamepad);
      console.log("disconnected", gamepad);
      var gamepadData = this.gamepads.get(id);
      this.gamepads.delete(id);
      this.dispatchEvent(new CustomEvent("gamepaddisconnected", {
        detail: gamepadData
      }));

      if (this.gamepads.size === 0) {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = null;
        this.currentTime = null;
      }
    }
  }, {
    key: "dispatchKey",
    value: function dispatchKey(key, pressed) {
      if (pressed) {
        this.dispatchEvent(new CustomEvent("keydown", {
          detail: key
        }));
      } else {
        this.dispatchEvent(new CustomEvent("keyup", {
          detail: key
        }));
      }
    }
  }, {
    key: "dispatchMouse",
    value: function dispatchMouse(button, down) {
      if (down) {
        this.dispatchEvent(new CustomEvent("mousedown", {
          detail: button
        }));
      } else {
        this.dispatchEvent(new CustomEvent("mouseup", {
          detail: button
        }));
      }
    }
  }, {
    key: "dispatchMouseMove",
    value: function dispatchMouseMove(x, y) {
      this.dispatchEvent(new CustomEvent("mousemove", {
        detail: {
          x: x,
          y: y
        }
      }));
    }
  }, {
    key: "updateButton",
    value: function updateButton(value, mapping) {
      if (mapping.type === "key") {
        if (value >= mapping.deadZone) {
          if (mapping.high) {
            this.keysPressedThisFrame.add(mapping.high);
          }
        } else if (value <= -mapping.deadZone) {
          if (mapping.low) {
            this.keysPressedThisFrame.add(mapping.low);
          }
        }
      } else if (mapping.type === "mousedown") {
        var isDown = Math.abs(value) >= mapping.deadZone;

        if (isDown) {
          this.mouseButtonsPressedThisFrame.add(mapping.button);
        }
      } else if (mapping.type === "virtual_cursor") {
        var deadZone = mapping.deadZone;
        var action;
        if (value >= deadZone) action = mapping.high;
        if (value <= -deadZone) action = mapping.low;

        if (action) {
          // an axis value just beyond the deadzone should have a multiplier near 0, a high value should have a multiplier of 1
          var multiplier = (Math.abs(value) - deadZone) / (1 - deadZone);
          var speed = multiplier * multiplier * mapping.sensitivity * this.deltaTime;

          if (action === "+x") {
            this.virtualCursor.x += speed;
          } else if (action === "-x") {
            this.virtualCursor.x -= speed;
          } else if (action === "+y") {
            this.virtualCursor.y += speed;
          } else if (action === "-y") {
            this.virtualCursor.y -= speed;
          }

          this.virtualCursor.modified = true;
        }
      }
    }
  }, {
    key: "update",
    value: function update(time) {
      this.oldKeysPressed = this.keysPressedThisFrame;
      this.oldMouseButtonsPressed = this.mouseButtonsPressedThisFrame;
      this.keysPressedThisFrame = new Set();
      this.mouseButtonsPressedThisFrame = new Set();

      if (this.currentTime === null) {
        this.deltaTime = 0; // doesn't matter what this is, it's just the first frame
      } else {
        this.deltaTime = time - this.currentTime;
      }

      this.deltaTime = Math.max(Math.min(this.deltaTime, 1000), 0);
      this.currentTime = time;
      this.animationFrame = requestAnimationFrame(this.update);
      var gamepads = navigator.getGamepads();

      var _iterator5 = _createForOfIteratorHelper(gamepads),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var gamepad = _step5.value;

          if (gamepad === null) {
            continue;
          }

          var id = getGamepadId(gamepad);
          var data = this.gamepads.get(id);

          for (var i = 0; i < gamepad.buttons.length; i++) {
            var button = gamepad.buttons[i];
            var value = button.value;
            var mapping = data.buttonMappings[i];
            this.updateButton(value, mapping);
          }

          for (var _i = 0; _i < gamepad.axes.length; _i++) {
            var axis = gamepad.axes[_i];
            var _mapping = data.axesMappings[_i];
            this.updateButton(axis, _mapping);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      if (this._editor) {
        this._editor.update(gamepads);
      }

      var _iterator6 = _createForOfIteratorHelper(this.keysPressedThisFrame),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var key = _step6.value;

          if (!this.oldKeysPressed.has(key)) {
            this.dispatchKey(key, true);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var _iterator7 = _createForOfIteratorHelper(this.oldKeysPressed),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _key = _step7.value;

          if (!this.keysPressedThisFrame.has(_key)) {
            this.dispatchKey(_key, false);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      var _iterator8 = _createForOfIteratorHelper(this.mouseButtonsPressedThisFrame),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _button = _step8.value;

          if (!this.oldMouseButtonsPressed.has(_button)) {
            this.dispatchMouse(_button, true);
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      var _iterator9 = _createForOfIteratorHelper(this.oldMouseButtonsPressed),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _button2 = _step9.value;

          if (!this.mouseButtonsPressedThisFrame.has(_button2)) {
            this.dispatchMouse(_button2, false);
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      if (this.virtualCursor.modified) {
        this.virtualCursor.modified = false;

        if (this.virtualCursor.x > this.virtualCursor.maxX) {
          this.virtualCursor.x = this.virtualCursor.maxX;
        }

        if (this.virtualCursor.x < this.virtualCursor.minX) {
          this.virtualCursor.x = this.virtualCursor.minX;
        }

        if (this.virtualCursor.y > this.virtualCursor.maxY) {
          this.virtualCursor.y = this.virtualCursor.maxY;
        }

        if (this.virtualCursor.y < this.virtualCursor.minY) {
          this.virtualCursor.y = this.virtualCursor.minY;
        }

        this.dispatchMouseMove(this.virtualCursor.x, this.virtualCursor.y);
      }
    }
  }, {
    key: "editor",
    value: function editor() {
      if (!this._editor) {
        this._editor = new GamepadEditor(this);
      }

      return this._editor;
    }
  }]);

  return GamepadLib;
}(_event_target_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

GamepadLib.browserHasBrokenGamepadAPI = function () {
  // Check that the gamepad API is supported at all
  if (!navigator.getGamepads) {
    return true;
  } // Firefox on Linux has a broken gamepad API implementation that results in strange and sometimes unusable mappings
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1643358
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1643835


  if (navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("Linux")) {
    return true;
  } // Firefox on macOS has other bugs that result in strange and unusable mappings
  // eg. https://bugzilla.mozilla.org/show_bug.cgi?id=1434408


  if (navigator.userAgent.includes("Firefox") && navigator.userAgent.includes("Mac OS")) {
    return true;
  }

  return false;
};

GamepadLib.setConsole = function (n) {
  return console = n;
};

var removeAllChildren = function removeAllChildren(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

var buttonHtmlId = function buttonHtmlId(index) {
  return "gamepadlib-button-".concat(index);
};

var axisHtmlId = function axisHtmlId(n) {
  return "gamepadlib-axis-".concat(n);
};

var GamepadEditor = /*#__PURE__*/function (_EventTarget2) {
  _inherits(GamepadEditor, _EventTarget2);

  var _super2 = _createSuper(GamepadEditor);

  function GamepadEditor(gamepadLib) {
    var _this3;

    _classCallCheck(this, GamepadEditor);

    _this3 = _super2.call(this);
    /** @type {GamepadLib} */

    _this3.gamepadLib = gamepadLib;
    _this3.root = Object.assign(document.createElement("div"), {
      className: "gamepadlib-root"
    });
    _this3.selector = Object.assign(document.createElement("select"), {
      className: "gamepadlib-selector"
    });
    _this3.content = Object.assign(document.createElement("div"), {
      className: "gamepadlib-content"
    });

    _this3.root.appendChild(_this3.selector);

    _this3.root.appendChild(_this3.content);

    _this3.onSelectorChange = _this3.onSelectorChange.bind(_assertThisInitialized(_this3));
    _this3.onGamepadsChange = _this3.onGamepadsChange.bind(_assertThisInitialized(_this3));

    _this3.selector.addEventListener("change", _this3.onSelectorChange);

    _this3.gamepadLib.addEventListener("gamepadconnected", _this3.onGamepadsChange);

    _this3.gamepadLib.addEventListener("gamepaddisconnected", _this3.onGamepadsChange);

    _this3.buttonIdToElement = new Map();
    _this3.axisIdToElement = new Map();
    _this3.hidden = false; // should be overridden later

    _this3.msg = function (id, opts) {
      return id;
    };

    return _this3;
  }

  _createClass(GamepadEditor, [{
    key: "onSelectorChange",
    value: function onSelectorChange() {
      this.updateContent();
      this.dispatchEvent(new CustomEvent("gamepad-changed"));
    }
  }, {
    key: "onGamepadsChange",
    value: function onGamepadsChange() {
      this.updateAllContent();
      this.dispatchEvent(new CustomEvent("gamepad-changed"));
    }
  }, {
    key: "updateAllContent",
    value: function updateAllContent() {
      this.updateDropdown();
      this.updateContent();
      this.focus();
    }
  }, {
    key: "updateDropdown",
    value: function updateDropdown() {
      removeAllChildren(this.selector);
      var gamepads = Array.from(this.gamepadLib.gamepads.entries());

      if (gamepads.length === 0) {
        this.selector.hidden = true;
        return;
      }

      this.selector.hidden = false;

      for (var _i2 = 0, _gamepads = gamepads; _i2 < _gamepads.length; _i2++) {
        var _gamepads$_i = _slicedToArray(_gamepads[_i2], 2),
            id = _gamepads$_i[0],
            _ = _gamepads$_i[1];

        var option = document.createElement("option");
        option.textContent = id;
        option.value = id;
        this.selector.appendChild(option);
      }
    }
  }, {
    key: "keyToString",
    value: function keyToString(key) {
      if (key === " ") return this.msg("key-space");
      if (key === "ArrowUp") return this.msg("key-up");
      if (key === "ArrowDown") return this.msg("key-down");
      if (key === "ArrowLeft") return this.msg("key-left");
      if (key === "ArrowRight") return this.msg("key-right");
      if (key === "Enter") return this.msg("key-enter");

      if (key.length === 1) {
        return key.toUpperCase();
      } // Convert eg. "PageUp" -> "Page Up"


      return key.replace(/[a-z]([A-Z])/, function (n) {
        return "".concat(n[0], " ").concat(n[1]);
      });
    }
  }, {
    key: "createButtonMapping",
    value: function createButtonMapping(mappingList, index) {
      var _this4 = this;

      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref$property = _ref.property,
          property = _ref$property === void 0 ? "high" : _ref$property,
          _ref$allowClick = _ref.allowClick,
          allowClick = _ref$allowClick === void 0 ? true : _ref$allowClick;

      var input = document.createElement("input");
      input.readOnly = true;
      input.className = "gamepadlib-keyinput";
      input.title = this.msg("keyinput-title");
      input.dataset.index = index;

      var update = function update() {
        var mapping = mappingList[index];
        input.dataset.empty = false;

        if (mapping.type === "key") {
          if (mapping[property] === null) {
            input.value = _this4.msg("key-none");
            input.dataset.empty = true;
          } else {
            input.value = _this4.keyToString(mapping[property]);
          }
        } else if (mapping.type === "mousedown") {
          var value = _this4.msg("key-click");

          if (mapping.button !== 0) {
            value += " (".concat(mapping.button, ")");
          }

          input.value = value;
        } else {
          // should never happen
          input.value = "??? ".concat(mapping.type);
        }
      };

      var changedMapping = function changedMapping() {
        mappingList[index] = transformAndCopyMapping(mappingList[index]);
        isAcceptingInput = false;
        input.blur();
        update();
        input.dispatchEvent(new CustomEvent("mapping-changed"));

        _this4.changed();
      };

      var isAcceptingInput = false;

      var handleClick = function handleClick(e) {
        e.preventDefault();

        if (isAcceptingInput) {
          if (allowClick) {
            var mapping = mappingList[index];
            mapping.type = "mousedown";
            mapping.button = e.button;
            changedMapping();
          } else {
            handleBlur();
          }
        } else {
          input.value = "...";
          input.dataset.acceptingInput = true;
          isAcceptingInput = true;
        }
      };

      var handleKeyEvent = function handleKeyEvent(e) {
        if (isAcceptingInput) {
          e.preventDefault();
          var key = e.key; // TW: We allow binding to control and shift

          if (["Alt"].includes(key)) {
            return;
          }

          var mapping = mappingList[index];
          var KEYS = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Enter", // TW: We support more keys
          // "Backspace",
          // "Delete",
          "Shift", "CapsLock", "ScrollLock", "Control", // "Escape",
          "Insert", "Home", "End", "PageUp", "PageDown"];

          if (key.length === 1 || KEYS.includes(key)) {
            mapping.type = "key";
            mapping[property] = key;
          } else if (key !== "Escape") {
            mapping.type = "key";
            mapping[property] = null;
          }

          changedMapping();
        } else if (e.key === "Enter") {
          e.preventDefault();
          e.target.click();
        }
      };

      var MODIFIER_KEYS = ["Shift", "Control"];

      var handleKeyDown = function handleKeyDown(e) {
        if (!MODIFIER_KEYS.includes(e.key)) handleKeyEvent(e);
      };

      var handleKeyUp = function handleKeyUp(e) {
        if (MODIFIER_KEYS.includes(e.key)) handleKeyEvent(e);
      };

      var handleBlur = function handleBlur() {
        input.dataset.acceptingInput = false;

        if (isAcceptingInput) {
          isAcceptingInput = false;
          update();
        }
      };

      input.addEventListener("contextmenu", function (e) {
        e.preventDefault();
      });
      input.addEventListener("mouseup", handleClick);
      input.addEventListener("keydown", handleKeyDown);
      input.addEventListener("keyup", handleKeyUp);
      input.addEventListener("blur", handleBlur);
      update();
      return input;
    }
  }, {
    key: "createAxisMapping",
    value: function createAxisMapping(mappingList, index) {
      var _this5 = this;

      var selector = document.createElement("select");
      selector.className = "gamepadlib-axis-mapping";
      selector.id = axisHtmlId(index);
      selector.appendChild(Object.assign(document.createElement("option"), {
        textContent: this.msg("axis-none"),
        value: "none"
      }));
      selector.appendChild(Object.assign(document.createElement("option"), {
        textContent: this.msg("axis-cursor"),
        value: "cursor"
      }));
      selector.appendChild(Object.assign(document.createElement("option"), {
        // doesn't really make sense to translate
        textContent: "WASD",
        value: "wasd"
      }));
      selector.appendChild(Object.assign(document.createElement("option"), {
        textContent: this.msg("axis-arrows"),
        value: "arrows"
      }));
      selector.appendChild(Object.assign(document.createElement("option"), {
        textContent: this.msg("axis-custom"),
        value: "custom"
      }));

      var updateDropdownValue = function updateDropdownValue() {
        if (mappingList[index].type === "key" || mappingList[index].type === "mousedown") {
          if (mappingList[index].high === null && mappingList[index].low === null && mappingList[index + 1].high === null && mappingList[index + 1].low === null) {
            selector.value = "none";
          } else if (mappingList[index].high === defaultAxesMappings.wasd[0].high && mappingList[index].low === defaultAxesMappings.wasd[0].low && mappingList[index + 1].high === defaultAxesMappings.wasd[1].high && mappingList[index + 1].low === defaultAxesMappings.wasd[1].low) {
            selector.value = "wasd";
          } else if (mappingList[index].high === defaultAxesMappings.arrows[0].high && mappingList[index].low === defaultAxesMappings.arrows[0].low && mappingList[index + 1].high === defaultAxesMappings.arrows[1].high && mappingList[index + 1].low === defaultAxesMappings.arrows[1].low) {
            selector.value = "arrows";
          } else {
            selector.value = "custom";
          }
        } else if (mappingList[index].type === "virtual_cursor") {
          selector.value = "cursor";
        } else {
          // should never happen
          selector.value = "none";
        }
      };

      updateDropdownValue();
      var circleOverlay = document.createElement("div");
      circleOverlay.className = "gamepadlib-axis-circle-overlay";

      var updateOverlay = function updateOverlay() {
        removeAllChildren(circleOverlay);

        if (mappingList[index].type === "key") {
          var buttons = [_this5.createButtonMapping(mappingList, index + 1, {
            property: "low",
            allowClick: false
          }), _this5.createButtonMapping(mappingList, index, {
            property: "low",
            allowClick: false
          }), _this5.createButtonMapping(mappingList, index, {
            property: "high",
            allowClick: false
          }), _this5.createButtonMapping(mappingList, index + 1, {
            property: "high",
            allowClick: false
          })];

          for (var _i3 = 0, _buttons = buttons; _i3 < _buttons.length; _i3++) {
            var button = _buttons[_i3];
            button.classList.add("gamepadlib-axis-mapper");
            button.addEventListener("mapping-changed", updateDropdownValue);
            circleOverlay.appendChild(button);
          }
        }
      };

      updateOverlay();
      selector.addEventListener("change", function () {
        if (selector.value === "custom") {
          // If key mappings already exist, leave them as-is
          if (mappingList[index].type !== "key") {
            mappingList[index] = transformAndCopyMapping(defaultAxesMappings.arrows[0]);
            mappingList[index + 1] = transformAndCopyMapping(defaultAxesMappings.arrows[1]);
          }
        } else if (selector.value === "arrows") {
          mappingList[index] = transformAndCopyMapping(defaultAxesMappings.arrows[0]);
          mappingList[index + 1] = transformAndCopyMapping(defaultAxesMappings.arrows[1]);
        } else if (selector.value === "wasd") {
          mappingList[index] = transformAndCopyMapping(defaultAxesMappings.wasd[0]);
          mappingList[index + 1] = transformAndCopyMapping(defaultAxesMappings.wasd[1]);
        } else if (selector.value === "cursor") {
          mappingList[index] = transformAndCopyMapping(defaultAxesMappings.cursor[0]);
          mappingList[index + 1] = transformAndCopyMapping(defaultAxesMappings.cursor[1]);
        } else {
          mappingList[index] = transformAndCopyMapping(emptyMapping());
          mappingList[index + 1] = transformAndCopyMapping(emptyMapping());
        }

        updateOverlay();

        _this5.changed();
      });
      return {
        circleOverlay: circleOverlay,
        selector: selector
      };
    }
  }, {
    key: "hasControllerSelected",
    value: function hasControllerSelected() {
      return !!this.selector.value;
    }
  }, {
    key: "updateContent",
    value: function updateContent() {
      removeAllChildren(this.content);

      if (this.hidden) {
        return;
      }

      var selectedId = this.selector.value;

      if (!selectedId) {
        var message = document.createElement("div");
        message.textContent = this.msg("no-controllers");
        this.content.appendChild(message);
        return;
      }

      var gamepadData = this.gamepadLib.gamepads.get(selectedId);

      if (!gamepadData) {
        // Users should never be able to see this
        var _message = document.createElement("div");

        _message.textContent = "Cannot find controller: ".concat(selectedId);
        this.content.appendChild(_message);
        return;
      }

      this.buttonIdToElement.clear();
      this.axisIdToElement.clear();
      var mappingsContainer = document.createElement("div");
      mappingsContainer.className = "gamepadlib-content-buttons";
      var buttonMappings = gamepadData.buttonMappings;

      for (var i = 0; i < buttonMappings.length; i++) {
        var container = document.createElement("div");
        container.className = "gamepadlib-mapping";
        container.dataset.id = i;
        var label = document.createElement("label");
        label.className = "gamepadlib-mapping-label";
        label.textContent = this.msg("button-n", {
          n: i
        });
        var id = buttonHtmlId(i);
        label.htmlFor = id;
        var options = document.createElement("div");
        options.className = "gamepadlib-mapping-options";
        var mappingInput = this.createButtonMapping(buttonMappings, i);
        mappingInput.id = id;
        options.appendChild(mappingInput);
        container.appendChild(label);
        container.appendChild(options);
        mappingsContainer.appendChild(container);
        this.buttonIdToElement.set(i, container);
      }

      var axesContainer = document.createElement("div");
      axesContainer.className = "gamepadlib-content-axes";
      var axesMappings = gamepadData.axesMappings;

      for (var _i4 = 0; _i4 < axesMappings.length; _i4 += 2) {
        var _container = document.createElement("div");

        _container.className = "gamepadlib-axis";

        var _label = document.createElement("label");

        _label.textContent = this.msg("axes-a-b", {
          a: _i4,
          b: _i4 + 1
        });
        _label.htmlFor = axisHtmlId(_i4);
        var circle = document.createElement("div");
        circle.className = "gamepadlib-axis-circle";

        var _this$createAxisMappi = this.createAxisMapping(axesMappings, _i4),
            circleOverlay = _this$createAxisMappi.circleOverlay,
            selector = _this$createAxisMappi.selector;

        circle.appendChild(circleOverlay);
        var dot = document.createElement("div");
        dot.className = "gamepadlib-axis-dot";
        circle.appendChild(dot);

        _container.appendChild(_label);

        _container.appendChild(circle);

        _container.appendChild(selector);

        axesContainer.appendChild(_container);
        this.axisIdToElement.set(_i4, dot);
      }

      this.content.appendChild(mappingsContainer);
      this.content.appendChild(axesContainer);
    }
  }, {
    key: "update",
    value: function update(gamepads) {
      var _this6 = this;

      if (this.hidden) {
        return;
      }

      var selectedId = this.selector.value;

      if (!selectedId) {
        return;
      }

      var gamepad = Array.from(gamepads).find(function (i) {
        return i && getGamepadId(i) === _this6.selector.value;
      });

      if (!gamepad) {
        return;
      }

      for (var i = 0; i < gamepad.buttons.length; i++) {
        var element = this.buttonIdToElement.get(i);

        if (element) {
          var button = gamepad.buttons[i];
          var value = button.value.toString();

          if (value !== element.dataset.value) {
            element.dataset.value = value;
          }
        }
      }

      for (var _i5 = 0; _i5 < gamepad.axes.length; _i5 += 2) {
        var _element = this.axisIdToElement.get(_i5);

        if (_element) {
          var x = gamepad.axes[_i5];
          var y = gamepad.axes[_i5 + 1] || 0;
          var size = 150 / 2;
          _element.style.transform = "translate(-50%, -50%) translate(".concat(x * size, "px, ").concat(y * size, "px)");
        }
      }
    }
  }, {
    key: "export",
    value: function _export() {
      var selectedId = this.selector.value;

      if (!selectedId) {
        return null;
      }

      var gamepadData = this.gamepadLib.gamepads.get(selectedId);

      if (!gamepadData) {
        return null;
      }

      return {
        axes: gamepadData.axesMappings.map(prepareAxisMappingForExport),
        buttons: gamepadData.buttonMappings.map(prepareButtonMappingForExport)
      };
    }
  }, {
    key: "changed",
    value: function changed() {
      this.dispatchEvent(new CustomEvent("mapping-changed"));
    }
  }, {
    key: "hide",
    value: function hide() {
      this.hidden = true;
      this.updateContent();
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.selector.value) {
        this.selector.focus();
      }
    }
  }, {
    key: "generateEditor",
    value: function generateEditor() {
      this.hidden = false;
      this.updateAllContent();
      return this.root;
    }
  }]);

  return GamepadEditor;
}(_event_target_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (GamepadLib);

/***/ }),

/***/ "./src/addons/addons/gamepad/userscript.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/gamepad/userscript.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_loader_active_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-loader!./active.png */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/active.png");
/* harmony import */ var _url_loader_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/close.svg");
/* harmony import */ var _url_loader_cursor_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./cursor.png */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/cursor.png");
/* harmony import */ var _url_loader_dot_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./dot.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/dot.svg");
/* harmony import */ var _url_loader_gamepad_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./gamepad.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/gamepad/gamepad.svg");
/* harmony import */ var _gamepadlib_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gamepadlib.js */ "./src/addons/addons/gamepad/gamepadlib.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* inserted by pull.js */






var _twGetAsset = function _twGetAsset(path) {
  if (path === "/active.png") return _url_loader_active_png__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (path === "/close.svg") return _url_loader_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  if (path === "/cursor.png") return _url_loader_cursor_png__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (path === "/dot.svg") return _url_loader_dot_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
  if (path === "/gamepad.svg") return _url_loader_gamepad_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
  throw new Error("Unknown asset: ".concat(path));
};


/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});

function _ref2() {
  _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var addon, global, console, msg, vm, vmStarted, scratchKeyToKey, getKeysUsedByProject, GAMEPAD_CONFIG_MAGIC, findOptionsComment, parseOptionsComment, gamepad, renderer, width, height, canvas, container, buttonContainer, buttonContent, buttonImage, editor, shouldStoreSettingsInProject, didChangeProject, storeMappings, removeStoredMappings, handleGamepadMappingChanged, handleStoreSettingsCheckboxChanged, handleEditorControllerChanged, virtualCursorElement, hideCursorTimeout, hideRealCursor, showRealCursor, virtualCursorSetVisible, virtualCursorHide, virtualCursorSetDown, virtualCursorSetPosition, getCanvasSize, canvasWidth, canvasHeight, resizeObserver, virtualX, virtualY, postMouseData, postKeyboardData, handleGamepadButtonDown, handleGamepadButtonUp, handleGamepadMouseDown, handleGamepadMouseUp, handleGamepadMouseMove, target, monitorListScaler;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            addon = _ref.addon, global = _ref.global, console = _ref.console, msg = _ref.msg;
            vm = addon.tab.traps.vm; // Wait for the project to finish loading. Renderer and scripts will not be fully available until this happens.

            _context.next = 4;
            return new Promise(function (resolve) {
              if (vm.editingTarget) return resolve();
              vm.runtime.once("PROJECT_LOADED", resolve);
            });

          case 4:
            vmStarted = function vmStarted() {
              return vm.runtime._steppingInterval !== null;
            };

            scratchKeyToKey = function scratchKeyToKey(key) {
              switch (key) {
                case "right arrow":
                  return "ArrowRight";

                case "up arrow":
                  return "ArrowUp";

                case "left arrow":
                  return "ArrowLeft";

                case "down arrow":
                  return "ArrowDown";

                case "enter":
                  return "Enter";

                case "space":
                  return " ";
              }

              return key.toLowerCase().charAt(0);
            };

            getKeysUsedByProject = function getKeysUsedByProject() {
              var allBlocks = [vm.runtime.getTargetForStage()].concat(_toConsumableArray(vm.runtime.targets)).filter(function (i) {
                return i.isOriginal;
              }).map(function (i) {
                return i.blocks;
              });
              var result = new Set();

              var _iterator = _createForOfIteratorHelper(allBlocks),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var blocks = _step.value;

                  for (var _i = 0, _Object$values = Object.values(blocks._blocks); _i < _Object$values.length; _i++) {
                    var block = _Object$values[_i];

                    if (block.opcode === "event_whenkeypressed" || block.opcode === "sensing_keyoptions") {
                      // For blocks like "key (my variable) pressed?", the sensing_keyoptions still exists but has a null parent.
                      if (block.opcode === "sensing_keyoptions" && !block.parent) {
                        continue;
                      }

                      var key = block.fields.KEY_OPTION.value;
                      result.add(scratchKeyToKey(key));
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return result;
            };

            GAMEPAD_CONFIG_MAGIC = " // _gamepad_";

            findOptionsComment = function findOptionsComment() {
              var target = vm.runtime.getTargetForStage();
              var comments = target.comments;

              for (var _i2 = 0, _Object$values2 = Object.values(comments); _i2 < _Object$values2.length; _i2++) {
                var comment = _Object$values2[_i2];

                if (comment.text.includes(GAMEPAD_CONFIG_MAGIC)) {
                  return comment;
                }
              }

              return null;
            };

            parseOptionsComment = function parseOptionsComment() {
              var comment = findOptionsComment();

              if (!comment) {
                return null;
              }

              var lineWithMagic = comment.text.split("\n").find(function (i) {
                return i.endsWith(GAMEPAD_CONFIG_MAGIC);
              });

              if (!lineWithMagic) {
                console.warn("Gamepad comment does not contain valid line");
                return null;
              }

              var jsonText = lineWithMagic.substr(0, lineWithMagic.length - GAMEPAD_CONFIG_MAGIC.length);
              var parsed;

              try {
                parsed = JSON.parse(jsonText);

                if (!parsed || _typeof(parsed) !== "object" || !Array.isArray(parsed.buttons) || !Array.isArray(parsed.axes)) {
                  throw new Error("Invalid data");
                }
              } catch (e) {
                console.warn("Gamepad comment has invalid JSON", e);
                return null;
              }

              return parsed;
            };

            _gamepadlib_js__WEBPACK_IMPORTED_MODULE_5__["default"].setConsole(console);
            gamepad = new _gamepadlib_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

            gamepad.getHintsLazily = function () {
              var parsedOptions = parseOptionsComment();

              if (parsedOptions) {
                return {
                  importedSettings: parsedOptions
                };
              }

              return {
                usedKeys: getKeysUsedByProject()
              };
            };

            vm.runtime.on("PROJECT_LOADED", function () {
              gamepad.resetControls();
            });

            if (!addon.settings.get("hide")) {
              _context.next = 17;
              break;
            }

            _context.next = 17;
            return new Promise(function (resolve) {
              var end = function end() {
                addon.settings.removeEventListener("change", listener);
                resolve();
              };

              var listener = function listener() {
                if (!addon.settings.get("hide")) {
                  end();
                }
              };

              gamepad.gamepadConnected().then(end);
              addon.settings.addEventListener("change", listener);
            });

          case 17:
            renderer = vm.runtime.renderer;
            width = renderer._xRight - renderer._xLeft;
            height = renderer._yTop - renderer._yBottom;
            canvas = renderer.canvas;
            container = document.createElement("div");
            container.className = "sa-gamepad-container";
            addon.tab.displayNoneWhileDisabled(container, {
              display: "flex"
            });
            buttonContainer = document.createElement("span");
            buttonContainer.className = addon.tab.scratchClass("button_outlined-button", "stage-header_stage-button");
            buttonContent = document.createElement("div");
            buttonContent.className = addon.tab.scratchClass("button_content");
            buttonImage = document.createElement("img");
            buttonImage.className = addon.tab.scratchClass("stage-header_stage-button-icon");
            buttonImage.draggable = false;
            buttonImage.src = _twGetAsset("/gamepad.svg");
            buttonContent.appendChild(buttonImage);
            buttonContainer.appendChild(buttonContent);
            container.appendChild(buttonContainer);
            shouldStoreSettingsInProject = false;

            didChangeProject = function didChangeProject() {
              vm.runtime.emitProjectChanged();

              if (vm.editingTarget === vm.runtime.getTargetForStage()) {
                vm.emitWorkspaceUpdate();
              }
            };

            storeMappings = function storeMappings() {
              var exported = editor.export();

              if (!exported) {
                console.warn("Could not export gamepad settings");
                return;
              }

              var text = "".concat(msg("config-header"), "\n").concat(JSON.stringify(exported)).concat(GAMEPAD_CONFIG_MAGIC);
              var existingComment = findOptionsComment();

              if (existingComment) {
                existingComment.text = text;
              } else {
                var target = vm.runtime.getTargetForStage();
                target.createComment( // comment ID, just has to be a random string
                Math.random() + "", // block ID
                null, // text
                text, // x, y, width, height
                50, 50, 350, 150, // minimized
                false);
              }

              didChangeProject();
            };

            removeStoredMappings = function removeStoredMappings() {
              var comment = findOptionsComment();

              if (comment) {
                var target = vm.runtime.getTargetForStage();
                delete target.comments[comment.id];
                didChangeProject();
              }
            };

            handleGamepadMappingChanged = function handleGamepadMappingChanged() {
              if (shouldStoreSettingsInProject) {
                storeMappings();
              }
            };

            handleStoreSettingsCheckboxChanged = function handleStoreSettingsCheckboxChanged(e) {
              shouldStoreSettingsInProject = !!e.target.checked;

              if (shouldStoreSettingsInProject) {
                storeMappings();
              } else {
                removeStoredMappings();
              }
            };

            handleEditorControllerChanged = function handleEditorControllerChanged() {
              document.body.classList.toggle("sa-gamepad-has-controller", editor.hasControllerSelected());
              handleGamepadMappingChanged();
            };

            buttonContainer.addEventListener("click", function () {
              if (!editor) {
                editor = gamepad.editor();
                editor.msg = msg;
                editor.addEventListener("mapping-changed", handleGamepadMappingChanged);
                editor.addEventListener("gamepad-changed", handleEditorControllerChanged);
              }

              var editorEl = editor.generateEditor();
              handleEditorControllerChanged();

              var _addon$tab$createModa = addon.tab.createModal(msg("settings"), {
                isOpen: true,
                useEditorClasses: true
              }),
                  backdrop = _addon$tab$createModa.backdrop,
                  container = _addon$tab$createModa.container,
                  content = _addon$tab$createModa.content,
                  closeButton = _addon$tab$createModa.closeButton,
                  remove = _addon$tab$createModa.remove;

              var handleKeyDown = function handleKeyDown(e) {
                if (e.key === "Escape" && !e.target.closest("[data-accepting-input]")) {
                  remove();
                }
              };

              backdrop.addEventListener("click", remove);
              window.addEventListener("keydown", handleKeyDown);
              addon.self.addEventListener("disabled", remove);
              backdrop.classList.add("sa-gamepad-popup-outer");
              container.classList.add("sa-gamepad-popup");
              closeButton.tabIndex = "0";
              closeButton.setAttribute("role", "button");
              closeButton.addEventListener("click", remove);
              closeButton.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                  remove();
                }
              });
              content.classList.add("sa-gamepad-popup-content");

              if (_gamepadlib_js__WEBPACK_IMPORTED_MODULE_5__["default"].browserHasBrokenGamepadAPI()) {
                var warning = document.createElement("div");
                warning.textContent = msg("browser-support");
                warning.className = "sa-gamepad-browser-support-warning";
                content.appendChild(warning);
              }

              content.appendChild(editorEl);
              var extraOptionsContainer = document.createElement("div");
              extraOptionsContainer.className = "sa-gamepad-extra-options";
              content.appendChild(extraOptionsContainer);

              var mappingsWereResetOrCleared = function mappingsWereResetOrCleared() {
                editor.updateAllContent();
                storeSettingsCheckbox.checked = false;
                shouldStoreSettingsInProject = false;
              };

              var resetButton = document.createElement("button");
              resetButton.className = "sa-gamepad-reset-button";
              resetButton.textContent = msg("reset");
              resetButton.addEventListener("click", function () {
                gamepad.resetControls();
                mappingsWereResetOrCleared();
              });
              extraOptionsContainer.appendChild(resetButton);
              var clearButton = document.createElement("button");
              clearButton.className = "sa-gamepad-reset-button";
              clearButton.textContent = msg("clear");
              clearButton.addEventListener("click", function () {
                gamepad.clearControls();
                mappingsWereResetOrCleared();
              });
              extraOptionsContainer.appendChild(clearButton);
              var storeSettingsLabel = document.createElement("label");
              storeSettingsLabel.className = "sa-gamepad-store-settings";
              storeSettingsLabel.textContent = msg("store-in-project");
              var storeSettingsCheckbox = document.createElement("input");
              storeSettingsCheckbox.type = "checkbox";
              storeSettingsCheckbox.checked = shouldStoreSettingsInProject;
              storeSettingsCheckbox.addEventListener("change", handleStoreSettingsCheckboxChanged);
              storeSettingsLabel.prepend(storeSettingsCheckbox);
              extraOptionsContainer.appendChild(storeSettingsLabel);
              editor.focus();
            });

            if (addon.tab.redux.state && addon.tab.redux.state.scratchGui.stageSize.stageSize === "small") {
              document.body.classList.add("sa-gamepad-small");
            }

            document.addEventListener("click", function (e) {
              if (e.target.closest("[class*='stage-header_stage-button-first']:not(.sa-hide-stage-button)")) {
                document.body.classList.add("sa-gamepad-small");
              } else if (e.target.closest("[class*='stage-header_stage-button-last']") || e.target.closest(".sa-hide-stage-button")) {
                document.body.classList.remove("sa-gamepad-small");
              }
            }, {
              capture: true
            });
            virtualCursorElement = document.createElement("img");
            virtualCursorElement.hidden = true;
            virtualCursorElement.className = "sa-gamepad-cursor";
            virtualCursorElement.src = _twGetAsset("/cursor.png");
            addon.self.addEventListener("disabled", function () {
              virtualCursorElement.hidden = true;
            });

            hideRealCursor = function hideRealCursor() {
              document.body.classList.add("sa-gamepad-hide-cursor");
            };

            showRealCursor = function showRealCursor() {
              document.body.classList.remove("sa-gamepad-hide-cursor");
            };

            virtualCursorSetVisible = function virtualCursorSetVisible(visible) {
              virtualCursorElement.hidden = !visible;
              clearTimeout(hideCursorTimeout);

              if (visible) {
                hideRealCursor();
                hideCursorTimeout = setTimeout(virtualCursorHide, 8000);
              }
            };

            virtualCursorHide = function virtualCursorHide() {
              virtualCursorSetVisible(false);
            };

            virtualCursorSetDown = function virtualCursorSetDown(down) {
              virtualCursorSetVisible(true);
              virtualCursorElement.classList.toggle("sa-gamepad-cursor-down", down);
            };

            virtualCursorSetPosition = function virtualCursorSetPosition(x, y) {
              virtualCursorSetVisible(true);
              var CURSOR_SIZE = 6;
              var stageX = width / 2 + x - CURSOR_SIZE / 2;
              var stageY = height / 2 - y - CURSOR_SIZE / 2;
              virtualCursorElement.style.transform = "translate(".concat(stageX, "px, ").concat(stageY, "px)");
            };

            document.addEventListener("mousemove", function () {
              virtualCursorSetVisible(false);
              showRealCursor();
            });

            // Support modern ResizeObserver and slow getBoundingClientRect version for improved browser support (matters for Turbo Warp)
            if (window.ResizeObserver) {
              canvasWidth = width;
              canvasHeight = height;
              resizeObserver = new ResizeObserver(function (entries) {
                var _iterator2 = _createForOfIteratorHelper(entries),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var entry = _step2.value;
                    canvasWidth = entry.contentRect.width;
                    canvasHeight = entry.contentRect.height;
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              });
              resizeObserver.observe(canvas);

              getCanvasSize = function getCanvasSize() {
                return [canvasWidth, canvasHeight];
              };
            } else {
              getCanvasSize = function getCanvasSize() {
                var rect = canvas.getBoundingClientRect();
                return [rect.width, rect.height];
              };
            } // Both in Scratch space


            virtualX = 0;
            virtualY = 0;

            postMouseData = function postMouseData(data) {
              if (addon.self.disabled || !vmStarted()) return;

              var _getCanvasSize = getCanvasSize(),
                  _getCanvasSize2 = _slicedToArray(_getCanvasSize, 2),
                  rectWidth = _getCanvasSize2[0],
                  rectHeight = _getCanvasSize2[1];

              vm.postIOData("mouse", _objectSpread(_objectSpread({}, data), {}, {
                canvasWidth: rectWidth,
                canvasHeight: rectHeight,
                x: (virtualX + width / 2) * (rectWidth / width),
                y: (height / 2 - virtualY) * (rectHeight / height)
              }));
            };

            postKeyboardData = function postKeyboardData(key, isDown) {
              if (addon.self.disabled || !vmStarted()) return;
              vm.postIOData("keyboard", {
                key: key,
                isDown: isDown
              });
            };

            handleGamepadButtonDown = function handleGamepadButtonDown(e) {
              return postKeyboardData(e.detail, true);
            };

            handleGamepadButtonUp = function handleGamepadButtonUp(e) {
              return postKeyboardData(e.detail, false);
            };

            handleGamepadMouseDown = function handleGamepadMouseDown(e) {
              virtualCursorSetDown(true);
              postMouseData({
                isDown: true,
                button: e.detail
              });
            };

            handleGamepadMouseUp = function handleGamepadMouseUp(e) {
              virtualCursorSetDown(false);
              postMouseData({
                isDown: false,
                button: e.detail
              });
            };

            handleGamepadMouseMove = function handleGamepadMouseMove(e) {
              virtualX = e.detail.x;
              virtualY = e.detail.y;
              virtualCursorSetPosition(virtualX, virtualY);
              postMouseData({});
            };

            gamepad.virtualCursor.maxX = renderer._xRight;
            gamepad.virtualCursor.minX = renderer._xLeft;
            gamepad.virtualCursor.maxY = renderer._yTop;
            gamepad.virtualCursor.minY = renderer._yBottom;
            gamepad.addEventListener("keydown", handleGamepadButtonDown);
            gamepad.addEventListener("keyup", handleGamepadButtonUp);
            gamepad.addEventListener("mousedown", handleGamepadMouseDown);
            gamepad.addEventListener("mouseup", handleGamepadMouseUp);
            gamepad.addEventListener("mousemove", handleGamepadMouseMove);

          case 76:
            if (false) {}

            _context.next = 79;
            return addon.tab.waitForElement('[class^="stage-header_embed-buttons_"], [class^="stage-header_stage-size-row"], [class^="stage-header_stage-menu-wrapper"] > [class^="button_outlined-button"]', {
              markAsSeen: true,
              reduxEvents: ["scratch-gui/mode/SET_PLAYER", "scratch-gui/mode/SET_FULL_SCREEN", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
            });

          case 79:
            target = _context.sent;
            container.dataset.editorMode = addon.tab.editorMode;

            if (target.className.includes("stage-size-row")) {
              addon.tab.appendToSharedSpace({
                space: "stageHeader",
                element: container,
                order: 1
              });
            } else {
              addon.tab.appendToSharedSpace({
                space: "fullscreenStageHeader",
                element: container,
                order: 0
              });
            }

            monitorListScaler = document.querySelector("[class^='monitor-list_monitor-list-scaler']");
            monitorListScaler.appendChild(virtualCursorElement);
            _context.next = 76;
            break;

          case 86:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-gamepad.js.map