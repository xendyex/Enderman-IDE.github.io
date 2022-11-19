(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-variable-manager"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/variable-manager/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Change z-indexes to allow more than 3 tabs */\n[class*=\"gui_tab_\"][class*=\"gui_is-selected_\"] {\n  z-index: 10 !important;\n}\n[class*=\"gui_tab_\"]:nth-of-type(1) {\n  z-index: 9;\n}\n[class*=\"gui_tab_\"]:nth-of-type(2) {\n  z-index: 8;\n}\n[class*=\"gui_tab_\"]:nth-of-type(3) {\n  z-index: 7;\n}\n[class*=\"gui_tab_\"]:nth-of-type(4) {\n  z-index: 6;\n}\n\n.sa-var-manager {\n  display: block;\n  padding: 18px;\n  /* weird hack to fix scrolling??? */\n  height: 50px;\n  overflow-y: auto;\n}\n\n.sa-var-manager-searchbox {\n  background-image: url(" + escape(__webpack_require__(/*! ./search.svg */ "./src/addons/addons/variable-manager/search.svg")) + ");\n  width: 25%;\n  margin-bottom: 4px;\n  padding: 8px;\n  padding-right: 32px; /* for the text to not overlap the image */\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: calc(100% - 7px) center;\n  font-size: 0.75rem;\n}\n[theme=\"dark\"] .sa-var-manager-searchbox {\n  border-color: #333;\n}\n\n[dir=\"rtl\"] .sa-var-manager-searchbox {\n  padding-right: 8px;\n  padding-left: 32px;\n  background-position: 7px center;\n}\n\n.sa-var-manager.freeze .sa-var-manager-value *,\n.sa-var-manager.freeze .sa-var-manager-name * {\n  opacity: 0.5;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1;\n}\n\n.sa-var-manager-heading {\n  display: block;\n  font-weight: bold;\n  font-size: large;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.sa-var-manager-name {\n  word-break: break-word;\n}\n\n.sa-var-manager .sa-var-manager-value {\n  width: 75%;\n}\n\n.sa-var-manager * > input {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n}\n\n.sa-var-manager-value > textarea {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  resize: none;\n}\n\n.sa-var-manager input:disabled, .sa-var-manager textarea:disabled {\n  font-style: italic;\n  opacity: 0.8;\n}\n\n.sa-var-manager table {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sa-var-manager td {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  text-align: left;\n}\n[theme=\"dark\"] .sa-var-manager td {\n  border-color: #333;\n}\n\n/* tr:nth-child(even) {\n    background-color: #dddddd;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iI2ZmNGM0YyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDkgMy4wODRBMSAxIDAgMCAxIDUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAgMCA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwIDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAgMSAyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAgMSAxLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAgMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMCAwIDguMzIzIDdIOGExIDEgMCAwIDAgMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAgMS0uNzgxLjM3NUg3YTEgMSAwIDEgMCAwIDJoLjAzOWEzIDMgMCAwIDAgMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwIDAgMTEuNjc3IDE0SDEyYTEgMSAwIDEgMCAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwIDEgMTIuOTYxIDlIMTNhMSAxIDAgMSAwIDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAgMSAxLjgzMy0uOEExNS45NSAxNS45NSAwIDAgMSAxOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMSAxLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwIDAgMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/addons/addons/variable-manager/_runtime_entry.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/variable-manager/_runtime_entry.js ***!
  \**************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/variable-manager/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/variable-manager/search.svg":
/*!*******************************************************!*\
  !*** ./src/addons/addons/variable-manager/search.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/1821649bb254ff5d93bb397ad646a23f.svg";

/***/ }),

/***/ "./src/addons/addons/variable-manager/userscript.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/variable-manager/userscript.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-loader!./icon.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg");
/* harmony import */ var _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./search.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* inserted by pull.js */



var _twGetAsset = function _twGetAsset(path) {
  if (path === "/icon.svg") return _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (path === "/search.svg") return _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  throw new Error("Unknown asset: ".concat(path));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});

function _ref2() {
  _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var addon, global, console, msg, vm, localVariables, globalVariables, preventUpdate, manager, searchBox, localVars, localHeading, localList, globalVars, globalHeading, globalList, varTab, varTabIcon, varTabText, updateHeadingVisibility, rowToVariableMap, observer, WrappedVariable, fullReload, quickReload, cleanup, setVisible, oldStep;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setVisible = function _setVisible(visible) {
              if (visible) {
                varTab.classList.add(addon.tab.scratchClass("react-tabs_react-tabs__tab--selected"), addon.tab.scratchClass("gui_is-selected"));
                var contentArea = document.querySelector("[class^=gui_tabs]");
                contentArea.insertAdjacentElement("beforeend", manager);
                fullReload();
              } else {
                varTab.classList.remove(addon.tab.scratchClass("react-tabs_react-tabs__tab--selected"), addon.tab.scratchClass("gui_is-selected"));
                manager.remove();
                cleanup();
              }
            };

            cleanup = function _cleanup() {
              localVariables = [];
              globalVariables = [];
            };

            quickReload = function _quickReload() {
              var _addon$tab$redux$stat4, _addon$tab$redux$stat5, _addon$tab$redux$stat6;

              if (((_addon$tab$redux$stat4 = addon.tab.redux.state) === null || _addon$tab$redux$stat4 === void 0 ? void 0 : (_addon$tab$redux$stat5 = _addon$tab$redux$stat4.scratchGui) === null || _addon$tab$redux$stat5 === void 0 ? void 0 : (_addon$tab$redux$stat6 = _addon$tab$redux$stat5.editorTab) === null || _addon$tab$redux$stat6 === void 0 ? void 0 : _addon$tab$redux$stat6.activeTabIndex) !== 3 || preventUpdate) return;

              var _iterator6 = _createForOfIteratorHelper(localVariables),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var variable = _step6.value;
                  variable.updateValue();
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              var _iterator7 = _createForOfIteratorHelper(globalVariables),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _variable3 = _step7.value;

                  _variable3.updateValue();
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            };

            fullReload = function _fullReload() {
              var _addon$tab$redux$stat, _addon$tab$redux$stat2, _addon$tab$redux$stat3;

              if (((_addon$tab$redux$stat = addon.tab.redux.state) === null || _addon$tab$redux$stat === void 0 ? void 0 : (_addon$tab$redux$stat2 = _addon$tab$redux$stat.scratchGui) === null || _addon$tab$redux$stat2 === void 0 ? void 0 : (_addon$tab$redux$stat3 = _addon$tab$redux$stat2.editorTab) === null || _addon$tab$redux$stat3 === void 0 ? void 0 : _addon$tab$redux$stat3.activeTabIndex) !== 3 || preventUpdate) return;
              var editingTarget = vm.runtime.getEditingTarget();
              var stage = vm.runtime.getTargetForStage();
              localVariables = editingTarget.isStage ? [] : Object.values(editingTarget.variables).filter(function (i) {
                return i.type === "" || i.type === "list";
              }).map(function (i) {
                return new WrappedVariable(i, editingTarget);
              });
              globalVariables = Object.values(stage.variables).filter(function (i) {
                return i.type === "" || i.type === "list";
              }).map(function (i) {
                return new WrappedVariable(i, stage);
              });
              updateHeadingVisibility();

              while (localList.firstChild) {
                localList.removeChild(localList.firstChild);
              }

              while (globalList.firstChild) {
                globalList.removeChild(globalList.firstChild);
              }

              var _iterator4 = _createForOfIteratorHelper(localVariables),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var variable = _step4.value;
                  localList.appendChild(variable.row);
                  variable.resizeInputIfList();
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              var _iterator5 = _createForOfIteratorHelper(globalVariables),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _variable2 = _step5.value;
                  globalList.appendChild(_variable2.row);

                  _variable2.resizeInputIfList();
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            };

            updateHeadingVisibility = function _updateHeadingVisibil() {
              // used to hide the headings if there are no variables
              var filteredLocals = localVariables.filter(function (v) {
                return v.row.style.display !== "none";
              });
              var filteredGlobals = globalVariables.filter(function (v) {
                return v.row.style.display !== "none";
              });
              localHeading.style.display = filteredLocals.length === 0 ? "none" : "";
              globalHeading.style.display = filteredGlobals.length === 0 ? "none" : "";
            };

            addon = _ref.addon, global = _ref.global, console = _ref.console, msg = _ref.msg;
            vm = addon.tab.traps.vm;
            localVariables = [];
            globalVariables = [];
            preventUpdate = false;
            manager = document.createElement("div");
            manager.classList.add(addon.tab.scratchClass("asset-panel_wrapper"), "sa-var-manager");
            searchBox = document.createElement("input");
            searchBox.placeholder = msg("search");
            searchBox.className = addon.tab.scratchClass("input_input-form", {
              others: "sa-var-manager-searchbox"
            });
            searchBox.addEventListener("input", function (e) {
              var _iterator = _createForOfIteratorHelper(localVariables),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var variable = _step.value;
                  variable.handleSearch(searchBox.value);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var _iterator2 = _createForOfIteratorHelper(globalVariables),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _variable = _step2.value;

                  _variable.handleSearch(searchBox.value);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              updateHeadingVisibility();
            });
            manager.appendChild(searchBox);
            localVars = document.createElement("div");
            localHeading = document.createElement("span");
            localList = document.createElement("table");
            localHeading.className = "sa-var-manager-heading";
            localHeading.innerText = msg("for-this-sprite");
            localVars.appendChild(localHeading);
            localVars.appendChild(localList);
            globalVars = document.createElement("div");
            globalHeading = document.createElement("span");
            globalList = document.createElement("table");
            globalHeading.className = "sa-var-manager-heading";
            globalHeading.innerText = msg("for-all-sprites");
            globalVars.appendChild(globalHeading);
            globalVars.appendChild(globalList);
            manager.appendChild(localVars);
            manager.appendChild(globalVars);
            varTab = document.createElement("li");
            addon.tab.displayNoneWhileDisabled(varTab, {
              display: "flex"
            });
            varTab.classList.add(addon.tab.scratchClass("react-tabs_react-tabs__tab"), addon.tab.scratchClass("gui_tab")); // Cannot use number due to conflict after leaving and re-entering editor

            varTab.id = "react-tabs-sa-variable-manager";
            varTabIcon = document.createElement("img");
            varTabIcon.draggable = false;
            varTabIcon.src = _twGetAsset("/icon.svg");
            varTabText = document.createElement("span");
            varTabText.innerText = msg("variables");
            varTab.appendChild(varTabIcon);
            varTab.appendChild(varTabText);
            rowToVariableMap = new WeakMap();
            observer = new IntersectionObserver(function (changes) {
              var _iterator3 = _createForOfIteratorHelper(changes),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var change = _step3.value;
                  var variable = rowToVariableMap.get(change.target);
                  variable.setVisible(change.isIntersecting);
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }, {
              rootMargin: "100px"
            });

            WrappedVariable = /*#__PURE__*/function () {
              function WrappedVariable(scratchVariable, target) {
                _classCallCheck(this, WrappedVariable);

                this.scratchVariable = scratchVariable;
                this.target = target;
                this.visible = false;
                this.tooBig = false;
                this.buildDOM();
              }

              _createClass(WrappedVariable, [{
                key: "updateValue",
                value: function updateValue(force) {
                  if (!this.visible && !force) return;
                  if (this.tooBig) return;
                  var newValue;

                  if (this.scratchVariable.type === "list") {
                    newValue = this.scratchVariable.value.join("\n");

                    if (newValue.length > 12000000) {
                      this.tooBig = true;
                    }
                  } else {
                    newValue = this.scratchVariable.value;

                    if (newValue.length > 1000000) {
                      this.tooBig = true;
                    }
                  }

                  if (this.tooBig) {
                    this.input.value = "Too big to safely display. If this limit is too low, use the feedback button at the top of the screen.";
                    this.input.disabled = true;
                    return;
                  }

                  if (newValue !== this.input.value) {
                    this.input.value = newValue;
                  }
                }
              }, {
                key: "handleSearch",
                value: function handleSearch(search) {
                  // this doesn't check if this.visible is true or whatever. maybe that would improve performance while typing into the search box but it's probably fine™
                  if (this.scratchVariable.name.toLowerCase().includes(search.toLowerCase()) || !search) {
                    // fuzzy searches are lame we are too cool for fuzzy searches (& i doubt they're even the right thing to use here, this should work fine enough)
                    this.row.style.display = ""; // make the row normal

                    this.updateValue(true); // force it to update because its hidden and it wouldnt be able to otherwise
                  } else {
                    this.row.style.display = "none"; // set the entire row as hidden
                  }
                }
              }, {
                key: "resizeInputIfList",
                value: function resizeInputIfList() {
                  if (this.scratchVariable.type === "list") {
                    this.input.style.height = "auto";
                    var height = Math.min(1000, this.input.scrollHeight);

                    if (height > 0) {
                      this.input.style.height = height + "px";
                    }
                  }
                }
              }, {
                key: "setVisible",
                value: function setVisible(visible) {
                  if (this.visible === visible) return;
                  this.visible = visible;

                  if (visible) {
                    this.updateValue();
                  }
                }
              }, {
                key: "buildDOM",
                value: function buildDOM() {
                  var _this = this;

                  var id = "sa-variable-manager-".concat(this.scratchVariable.id);
                  var row = document.createElement("tr");
                  this.row = row;
                  var labelCell = document.createElement("td");
                  labelCell.className = "sa-var-manager-name";
                  var label = document.createElement("input");
                  label.value = this.scratchVariable.name;
                  label.htmlFor = id;

                  var onLabelOut = function onLabelOut(e) {
                    e.preventDefault();
                    var workspace = Blockly.getMainWorkspace();
                    var newName = label.value;

                    if (newName === _this.scratchVariable.name) {
                      // If the name is unchanged before we make sure the cloud prefix exists, there's nothing to do.
                      return;
                    }

                    var CLOUD_SYMBOL = "☁";
                    var CLOUD_PREFIX = CLOUD_SYMBOL + " ";

                    if (_this.scratchVariable.isCloud) {
                      if (newName.startsWith(CLOUD_SYMBOL)) {
                        if (!newName.startsWith(CLOUD_PREFIX)) {
                          // There isn't a space between the cloud symbol and the name, so add one.
                          newName = newName.substring(0, 1) + " " + newName.substring(1);
                        }
                      } else {
                        newName = CLOUD_PREFIX + newName;
                      }
                    }

                    var isEmpty = !newName.trim();
                    var nameAlreadyUsed = !!workspace.getVariable(newName, _this.scratchVariable.type);

                    if (isEmpty || nameAlreadyUsed) {
                      label.value = _this.scratchVariable.name;
                    } else {
                      workspace.renameVariableById(_this.scratchVariable.id, newName); // Only update the input's value when we need to to avoid resetting undo history.

                      if (label.value !== newName) {
                        label.value = newName;
                      }
                    }
                  };

                  label.addEventListener("keydown", function (e) {
                    if (e.key === "Enter" && !e.shiftKey) e.target.blur();
                  });
                  label.addEventListener("focusout", onLabelOut);
                  label.addEventListener("focus", function (e) {
                    preventUpdate = true;
                    manager.classList.add("freeze");
                  });
                  label.addEventListener("blur", function (e) {
                    preventUpdate = false;
                    manager.classList.remove("freeze");
                  });
                  labelCell.appendChild(label);
                  rowToVariableMap.set(row, this);
                  observer.observe(row);
                  var valueCell = document.createElement("td");
                  valueCell.className = "sa-var-manager-value";
                  var input;

                  if (this.scratchVariable.type === "list") {
                    input = document.createElement("textarea");
                  } else {
                    input = document.createElement("input");
                  }

                  input.id = id;
                  this.input = input;
                  this.updateValue(true);

                  if (this.scratchVariable.type === "list") {
                    this.input.addEventListener("input", function () {
                      return _this.resizeInputIfList();
                    }, false);
                  }

                  var onInputOut = function onInputOut(e) {
                    e.preventDefault();

                    if (_this.scratchVariable.type === "list") {
                      vm.setVariableValue(_this.target.id, _this.scratchVariable.id, input.value.split("\n"));
                    } else {
                      vm.setVariableValue(_this.target.id, _this.scratchVariable.id, input.value);
                    }

                    input.blur();
                  };

                  input.addEventListener("keydown", function (e) {
                    if (e.key === "Enter" && !e.shiftKey) e.target.blur();
                  });
                  input.addEventListener("focusout", onInputOut);
                  input.addEventListener("focus", function (e) {
                    preventUpdate = true;
                    manager.classList.add("freeze");
                  });
                  input.addEventListener("blur", function (e) {
                    preventUpdate = false;
                    manager.classList.remove("freeze");
                  });
                  valueCell.appendChild(input);
                  row.appendChild(labelCell);
                  row.appendChild(valueCell);
                  this.handleSearch(searchBox.value);
                }
              }]);

              return WrappedVariable;
            }();

            varTab.addEventListener("click", function (e) {
              addon.tab.redux.dispatch({
                type: "scratch-gui/navigation/ACTIVATE_TAB",
                activeTabIndex: 3
              });
            });
            addon.tab.redux.initialize();
            addon.tab.redux.addEventListener("statechanged", function (_ref3) {
              var detail = _ref3.detail;

              if (detail.action.type === "scratch-gui/navigation/ACTIVATE_TAB") {
                setVisible(detail.action.activeTabIndex === 3);
              } else if (detail.action.type === "scratch-gui/mode/SET_PLAYER") {
                if (!detail.action.isPlayerOnly && addon.tab.redux.state.scratchGui.editorTab.activeTabIndex === 3) {
                  // DOM doesn't actually exist yet
                  queueMicrotask(function () {
                    return setVisible(true);
                  });
                }
              }
            });
            vm.runtime.on("PROJECT_LOADED", function () {
              try {
                fullReload();
              } catch (e) {
                console.error(e);
              }
            });
            vm.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE", function () {
              try {
                fullReload();
              } catch (e) {
                console.error(e);
              }
            });
            oldStep = vm.runtime._step;

            vm.runtime._step = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var ret = oldStep.call.apply(oldStep, [this].concat(args));

              try {
                quickReload();
              } catch (e) {
                console.error(e);
              }

              return ret;
            };

            addon.self.addEventListener("disabled", function () {
              if (addon.tab.redux.state.scratchGui.editorTab.activeTabIndex === 3) {
                addon.tab.redux.dispatch({
                  type: "scratch-gui/navigation/ACTIVATE_TAB",
                  activeTabIndex: 2
                });
              }
            });

          case 55:
            if (false) {}

            _context.next = 58;
            return addon.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']", {
              markAsSeen: true,
              reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
              reduxCondition: function reduxCondition(state) {
                return !state.scratchGui.mode.isPlayerOnly;
              }
            });

          case 58:
            addon.tab.appendToSharedSpace({
              space: "afterSoundTab",
              element: varTab,
              order: 3
            });
            _context.next = 55;
            break;

          case 61:
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
//# sourceMappingURL=addon-entry-variable-manager.js.map