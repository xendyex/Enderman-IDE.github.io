(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-fullscreen"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideOverflow.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/hideOverflow.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-fullscreen.sa-body-editor {\n  overflow: hidden !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideToolbar.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/hideToolbar.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-header_stage-header-wrapper-overlay\"] {\n  display: none;\n}\n\n[class*=\"stage-wrapper_full-screen\"] {\n  top: 0rem !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/removeBorder.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/removeBorder.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_full-screen\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_green-flag-overlay-wrapper\"] {\n  border: 0 !important;\n  border-radius: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/resizeWindow.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-header_stage-menu-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  width: min(calc((100vh - 44px) * var(--sa-fullscreen-width) / var(--sa-fullscreen-height)), 100vw) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_green-flag-overlay-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  height: min(calc(100vh - 44px), calc(100vw * var(--sa-fullscreen-height) / var(--sa-fullscreen-width))) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] {\n  padding: 0rem !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"monitor-list_monitor-list\"] {\n  overflow: visible;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_question-wrapper\"] {\n  width: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow_noToolbar.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/resizeWindow_noToolbar.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-header_stage-menu-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  width: min(calc(100vh * var(--sa-fullscreen-width) / var(--sa-fullscreen-height)), 100vw) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_green-flag-overlay-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  height: min(100vh, calc(100vw * var(--sa-fullscreen-height) / var(--sa-fullscreen-width))) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] {\n  padding: 0rem !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"monitor-list_monitor-list\"] {\n  overflow: visible;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_question-wrapper\"] {\n  width: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/fullscreen/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/fullscreen/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/fullscreen/userscript.js");
/* harmony import */ var _css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./hideOverflow.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideOverflow.css");
/* harmony import */ var _css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./removeBorder.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/removeBorder.css");
/* harmony import */ var _css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-loader!./resizeWindow.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow.css");
/* harmony import */ var _css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-loader!./resizeWindow_noToolbar.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow_noToolbar.css");
/* harmony import */ var _css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-loader!./hideToolbar.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideToolbar.css");
/* harmony import */ var _css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5__);
/* generated by pull.js */






var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "hideOverflow.css": _css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "removeBorder.css": _css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "resizeWindow.css": _css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3___default.a,
  "resizeWindow_noToolbar.css": _css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4___default.a,
  "hideToolbar.css": _css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5___default.a
};

/***/ }),

/***/ "./src/addons/addons/fullscreen/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/fullscreen/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Used for the automatic browser full screen setting
 * and for hiding the scrollbar in full screen.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});

function _ref2() {
  _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref) {
    var addon, global, console, vm, updateStageSize, updateBrowserFullscreen, updateScratchFullscreen, setPageScrollbar, _setPageScrollbar, monitorScaler, resizeObserver, stage, initScaler, _initScaler;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _initScaler = function _initScaler3() {
              _initScaler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return addon.tab.waitForElement("[class*=monitor-list_monitor-list-scaler]");

                      case 2:
                        monitorScaler = _context2.sent;
                        _context2.next = 5;
                        return addon.tab.waitForElement('[class*="stage-wrapper_full-screen"] [class*="stage_stage"]');

                      case 5:
                        stage = _context2.sent;
                        resizeObserver = new ResizeObserver(function () {
                          // Scratch uses the `transform` CSS property on a stage overlay element
                          // to control the scaling of variable monitors.
                          var scale = stage.getBoundingClientRect().width / 480;
                          monitorScaler.style.transform = "scale(".concat(scale, ", ").concat(scale, ")");
                        });
                        resizeObserver.observe(stage);

                      case 8:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return _initScaler.apply(this, arguments);
            };

            initScaler = function _initScaler2() {
              return _initScaler.apply(this, arguments);
            };

            _setPageScrollbar = function _setPageScrollbar3() {
              _setPageScrollbar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var body;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return addon.tab.waitForElement(".sa-body-editor");

                      case 2:
                        body = _context.sent;

                        if (addon.tab.redux.state.scratchGui.mode.isFullScreen) {
                          body.classList.add("sa-fullscreen");
                        } else {
                          body.classList.remove("sa-fullscreen");
                        }

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return _setPageScrollbar.apply(this, arguments);
            };

            setPageScrollbar = function _setPageScrollbar2() {
              return _setPageScrollbar.apply(this, arguments);
            };

            updateScratchFullscreen = function _updateScratchFullscr() {
              if (addon.settings.get("browserFullscreen") && !addon.self.disabled) {
                // If browser fullscreen is disabled, then Scratch fullscreen should also
                // be disabled.
                if (document.fullscreenElement === null && addon.tab.redux.state.scratchGui.mode.isFullScreen) {
                  addon.tab.redux.dispatch({
                    type: "scratch-gui/mode/SET_FULL_SCREEN",
                    isFullScreen: false
                  });
                }
              }
            };

            updateBrowserFullscreen = function _updateBrowserFullscr() {
              if (addon.settings.get("browserFullscreen") && !addon.self.disabled) {
                // If Scratch fullscreen is enabled, then browser fullscreen should also
                // be enabled, and vice versa for disabling.
                if (addon.tab.redux.state.scratchGui.mode.isFullScreen && document.fullscreenElement === null) {
                  document.documentElement.requestFullscreen();
                } else if (!addon.tab.redux.state.scratchGui.mode.isFullScreen && document.fullscreenElement !== null) {
                  document.exitFullscreen();
                }
              }
            };

            addon = _ref.addon, global = _ref.global, console = _ref.console;
            vm = addon.tab.traps.vm;

            updateStageSize = function updateStageSize() {
              document.documentElement.style.setProperty('--sa-fullscreen-width', vm.runtime.stageWidth);
              document.documentElement.style.setProperty('--sa-fullscreen-height', vm.runtime.stageHeight);
            };

            updateStageSize();
            vm.on('STAGE_SIZE_CHANGED', updateStageSize); // "Browser fullscreen" is defined as the mode that hides the browser UI.

            initScaler(); // Running this on page load handles the case of the project initially
            // loading in Scratch fullscreen mode.

            setPageScrollbar();
            updateBrowserFullscreen(); // Changing to or from Scratch fullscreen is signified by a state change
            // (URL change doesn't work when editing project without project page)

            addon.tab.redux.initialize();
            addon.tab.redux.addEventListener("statechanged", function (e) {
              if (e.detail.action.type === "scratch-gui/mode/SET_FULL_SCREEN") {
                initScaler();
                updateBrowserFullscreen();
                setPageScrollbar();
              }
            }); // Changing to or from browser fullscreen is signified by a window resize.

            window.addEventListener("resize", function () {
              updateScratchFullscreen();
            }); // Handles the case of F11 full screen AND document full screen being enabled
            // at the same time.

            document.addEventListener("fullscreenchange", function () {
              if (document.fullscreenElement === null && addon.tab.redux.state.scratchGui.mode.isFullScreen) {
                addon.tab.redux.dispatch({
                  type: "scratch-gui/mode/SET_FULL_SCREEN",
                  isFullScreen: false
                });
              }
            }); // These handle the case of the user already being in Scratch fullscreen
            // (without being in browser fullscreen) when the addon or sync option are
            // dynamically enabled.

            addon.settings.addEventListener("change", function () {
              updateBrowserFullscreen();
            });
            addon.self.addEventListener("disabled", function () {
              resizeObserver.disconnect();
            });
            addon.self.addEventListener("reenabled", function () {
              resizeObserver.observe(stage);
              updateBrowserFullscreen();
            });

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-fullscreen.js.map