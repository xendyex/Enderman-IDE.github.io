(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-hide-flyout"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/hide-flyout/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/hide-flyout/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"gui_tabs_\"] {\n  /* overridden by other addons */\n  --sa-category-width: 60px;\n  --sa-flyout-width: 250px;\n}\n\n/* The default left-side border does not work properly when a block is being dragged, */\n/* which lets a 1 pixel column of the flyout be visible. */\n/* To fix this we use two elements that are only visible when a block is being dragged. */\n/* The first element is opaque to cover up the contents with the background color. */\n/* The other element is the transparent border color. */\n.sa-flyout-border-1,\n.sa-flyout-border-2 {\n  position: absolute;\n  /* Above flyout but below add extension button */\n  z-index: 40;\n  top: 0;\n  bottom: 8px;\n  left: -1px;\n}\n[dir=\"rtl\"] .sa-flyout-border-1,\n[dir=\"rtl\"] .sa-flyout-border-2 {\n  left: auto;\n  right: -1px;\n}\n.sa-flyout-border-1 {\n  border-left: 1px solid var(--ui-primary, hsla(215, 100%, 95%, 1));\n}\n.sa-flyout-border-2 {\n  border-left: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\n}\n\n.blocklyFlyout,\n.blocklyFlyoutScrollbar {\n  transition-property: margin;\n}\n\n[dir=\"ltr\"] .blocklyFlyout.sa-flyoutClose,\n[dir=\"ltr\"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(0px - var(--sa-flyout-width) - 10px);\n}\n\n[dir=\"rtl\"] .blocklyFlyout.sa-flyoutClose,\n[dir=\"rtl\"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(var(--sa-flyout-width) + 10px);\n}\n\n.sa-flyout-placeHolder {\n  display: var(--hideFlyout-placeholderDisplay) !important;\n  position: absolute;\n  height: 100%;\n  width: calc(var(--sa-flyout-width) + 1px);\n  top: 0;\n}\n\n[dir=\"ltr\"] .sa-flyout-placeHolder {\n  left: calc(var(--sa-category-width) + 1px);\n}\n\n[dir=\"rtl\"] .sa-flyout-placeHolder {\n  right: calc(var(--sa-category-width) + 1px);\n}\n\n.sa-lock-object {\n  display: var(--hideFlyout-lockDisplay) !important;\n  transform: translate(calc(var(--sa-flyout-width) - 15px - 32px), 3px);\n  width: 32px;\n  height: 32px;\n}\n[dir=\"rtl\"] .sa-lock-object {\n  transform: translate(15px, 3px);\n}\n\n.sa-lock-button {\n  display: flex;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--ui-primary, white);\n  border: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\n  border-radius: 4px;\n}\n\n.sa-lock-object.locked .sa-lock-button {\n  background-color: #ff4c4c;\n  border-color: #cc4c4c;\n}\n\n.sa-lock-button img {\n  width: 20px;\n}\n\n[theme=\"dark\"] .sa-lock-button img {\n  filter: brightness(200%);\n}\n\n/* Setting these styles on gui_stage-and-target-wrapper breaks full screen */\n[class*=\"gui_body-wrapper_\" ] [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen\"]),\n[class*=\"gui_target-wrapper_\"] {\n  position: relative;\n  padding-inline: 0.5rem;\n  background-color: var(--ui-primary, hsl(215, 100%, 95%));\n}\n/* Both must be above hidden flyout when dragging block with editor-stage-left enabled */\n/* Both must be above category list when columns is enabled so dragged sprites appear aren't obscured */\n/* Stage wrapper must be above target pane so dragged sprites aren't obscured */\n[class*=\"gui_body-wrapper_\" ] [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen\"]) {\n  z-index: 50;\n}\n[class*=\"gui_target-wrapper_\"] {\n  z-index: 49;\n}\n\n[class*=\"gui_stage-and-target-wrapper_\"] {\n  padding: 0;\n}\n\n/* https://github.com/ScratchAddons/ScratchAddons/issues/4896 */\n.Popover {\n  /* Above stage wrapper and target pane */\n  /* See editor-stage-left */\n  z-index: 51;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDIgMHYtM2ExIDEgMCAwIDAtMS0xem01LTRWN0E1IDUgMCAwIDAgNyA3djJhMyAzIDAgMCAwLTMgM3Y3YTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtN2EzIDMgMCAwIDAtMy0zek05IDdhMyAzIDAgMCAxIDYgMHYySDl6bTkgMTJhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF2LTdhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExLjQ5IDEuNDkgMCAwIDAtMSAyLjYxVjE3YTEgMSAwIDAgMCAyIDB2LTEuMzlBMS40OSAxLjQ5IDAgMCAwIDEyIDEzem01LTRIOVY3YTMgMyAwIDAgMSA1LjEyLTIuMTMgMy4wOCAzLjA4IDAgMCAxIC43OCAxLjM4IDEgMSAwIDEgMCAxLjk0LS41IDUuMDkgNS4wOSAwIDAgMC0xLjMxLTIuMjlBNSA1IDAgMCAwIDcgN3YyYTMgMyAwIDAgMC0zIDN2N2EzIDMgMCAwIDAgMyAzaDEwYTMgMyAwIDAgMCAzLTN2LTdhMyAzIDAgMCAwLTMtM3ptMSAxMGExIDEgMCAwIDEtMSAxSDdhMSAxIDAgMCAxLTEtMXYtN2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF6IiBmaWxsPSIjNTc1ZTc1Ii8+PC9zdmc+");

/***/ }),

/***/ "./src/addons/addons/hide-flyout/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/hide-flyout/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/hide-flyout/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/hide-flyout/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/hide-flyout/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/hide-flyout/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_loader_lock_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-loader!./lock.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg");
/* harmony import */ var _url_loader_unlock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./unlock.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* inserted by pull.js */



var _twGetAsset = function _twGetAsset(path) {
  if (path === "/lock.svg") return _url_loader_lock_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (path === "/unlock.svg") return _url_loader_unlock_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  throw new Error("Unknown asset: ".concat(path));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});

function _ref2() {
  _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var addon, global, console, msg, placeHolderDiv, lockObject, lockButton, lockIcon, flyOut, scrollBar, toggle, flyoutLock, closeOnMouseUp, scrollAnimation, SVG_NS, Blockly, updateCSSVariables, getSpeedValue, getToggleSetting, setTransition, removeTransition, updateLockDisplay, onmouseenter, onmouseleave, didOneTimeSetup, doOneTimeSetup, blocksWrapper, injectionDiv, borderElement1, borderElement2, toolbox, addExtensionButton, _i3, _arr3, element;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            doOneTimeSetup = function _doOneTimeSetup() {
              if (didOneTimeSetup) {
                return;
              }

              didOneTimeSetup = true;
              addon.tab.redux.initialize();
              addon.tab.redux.addEventListener("statechanged", function (e) {
                switch (e.detail.action.type) {
                  // Event casted when you switch between tabs
                  case "scratch-gui/navigation/ACTIVATE_TAB":
                    // always 0, 1, 2
                    var toggleSetting = getToggleSetting();

                    if (e.detail.action.activeTabIndex === 0 && !addon.self.disabled && (toggleSetting === "hover" || toggleSetting === "cathover")) {
                      onmouseleave(null, 0);
                      toggle = false;
                    }

                    break;
                }
              });
              document.body.addEventListener("mouseup", function () {
                if (closeOnMouseUp) {
                  onmouseleave();
                  closeOnMouseUp = false;
                }
              });

              if (addon.self.enabledLate && getToggleSetting() === "category") {
                Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(false);
              }

              addon.self.addEventListener("disabled", function () {
                Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(true); // update workspace dimensions

                Blockly.svgResize(Blockly.getMainWorkspace());
              });
              addon.self.addEventListener("reenabled", function () {
                if (getToggleSetting() === "category") {
                  Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(false);
                  onmouseleave(null, 0);
                  toggle = false;
                } // update workspace dimensions


                Blockly.svgResize(Blockly.getMainWorkspace());
              });
              addon.settings.addEventListener("change", function () {
                if (addon.self.disabled) return;

                if (getToggleSetting() === "category") {
                  // switching to category click mode
                  // close the flyout unless it's locked
                  if (flyoutLock) {
                    toggle = true;
                    flyoutLock = false;
                    updateLockDisplay();
                  } else {
                    Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(false);
                    onmouseleave(null, 0);
                    toggle = false;
                  }
                } else {
                  onmouseleave();
                  Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(true);
                } // update workspace dimensions


                Blockly.svgResize(Blockly.getMainWorkspace());
              }); // category click mode

              var oldSetSelectedItem = Blockly.Toolbox.prototype.setSelectedItem;

              Blockly.Toolbox.prototype.setSelectedItem = function (item) {
                var shouldScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                var previousSelection = this.selectedItem_;
                oldSetSelectedItem.call(this, item, shouldScroll);
                if (addon.self.disabled || getToggleSetting() !== "category") return;

                if (!shouldScroll) {
                  // ignore initial selection when updating the toolbox
                  item.setSelected(false);
                } else if (item === previousSelection) {
                  toggle = !toggle;
                  if (toggle) onmouseenter();else {
                    onmouseleave();
                    item.setSelected(false);
                  }
                } else if (!toggle) {
                  scrollAnimation = false;
                  toggle = true;
                  onmouseenter();
                }
              };

              var oldSelectCategoryById = Blockly.Toolbox.prototype.selectCategoryById;

              Blockly.Toolbox.prototype.selectCategoryById = function () {
                // called after populating the toolbox
                // ignore if the palette is closed
                if (!addon.self.disabled && getToggleSetting() === "category" && !toggle) return;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                return oldSelectCategoryById.call.apply(oldSelectCategoryById, [this].concat(args));
              };

              var oldStepScrollAnimation = Blockly.Flyout.prototype.stepScrollAnimation;

              Blockly.Flyout.prototype.stepScrollAnimation = function () {
                // scrolling should not be animated when opening the flyout in category click mode
                if (!scrollAnimation) {
                  this.scrollbar_.set(this.scrollTarget);
                  this.scrollTarget = null;
                  scrollAnimation = true;
                  return;
                }

                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  args[_key2] = arguments[_key2];
                }

                return oldStepScrollAnimation.apply(this, args);
              }; // add flyout size to the workspace dimensions


              var oldGetMetrics = Blockly.WorkspaceSvg.getTopLevelWorkspaceMetrics_;

              Blockly.WorkspaceSvg.getTopLevelWorkspaceMetrics_ = function () {
                var _this$getToolbox, _this$getToolbox$flyo;

                var metrics = oldGetMetrics.call(this);
                if (addon.self.disabled || getToggleSetting() === "hover" || this.RTL) return metrics;

                if (((_this$getToolbox = this.getToolbox()) === null || _this$getToolbox === void 0 ? void 0 : (_this$getToolbox$flyo = _this$getToolbox.flyout_) === null || _this$getToolbox$flyo === void 0 ? void 0 : _this$getToolbox$flyo.getWidth()) === 310) {
                  // columns is enabled
                  return metrics;
                }

                return _objectSpread(_objectSpread({}, metrics), {}, {
                  absoluteLeft: metrics.absoluteLeft - 250,
                  viewWidth: metrics.viewWidth + 250
                });
              };

              if (Blockly.getMainWorkspace()) Blockly.getMainWorkspace().getMetrics = Blockly.WorkspaceSvg.getTopLevelWorkspaceMetrics_;
            };

            onmouseleave = function _onmouseleave(e) {
              var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getSpeedValue();
              if (flyoutLock) return;

              if (e && e.buttons) {
                // dragging a block or scrollbar
                closeOnMouseUp = true;
                return;
              }

              setTransition(speed);
              flyOut.classList.add("sa-flyoutClose");
              scrollBar.classList.add("sa-flyoutClose");
              setTimeout(function () {
                Blockly.getMainWorkspace().recordCachedAreas();
                removeTransition();
              }, speed * 1000);
            };

            onmouseenter = function _onmouseenter(e) {
              var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

              // If a mouse event was passed, only open flyout if the workspace isn't being dragged
              if (!e || e.buttons === 0 || document.querySelector(".blocklyToolboxDiv").className.includes("blocklyToolboxDelete")) {
                speed = _typeof(speed) === "object" ? getSpeedValue() : speed;
                setTransition(speed);
                flyOut.classList.remove("sa-flyoutClose");
                scrollBar.classList.remove("sa-flyoutClose");
                setTimeout(function () {
                  Blockly.getMainWorkspace().recordCachedAreas();
                  removeTransition();
                }, speed * 1000);
              }

              closeOnMouseUp = false; // only close if the mouseup event happens outside the flyout
            };

            updateLockDisplay = function _updateLockDisplay() {
              lockObject.classList.toggle("locked", flyoutLock);
              lockButton.title = flyoutLock ? msg("unlock") : msg("lock");
              lockIcon.src = _twGetAsset("/".concat(flyoutLock ? "" : "un", "lock.svg"));
            };

            removeTransition = function _removeTransition() {
              for (var _i2 = 0, _arr2 = [flyOut, scrollBar]; _i2 < _arr2.length; _i2++) {
                var element = _arr2[_i2];
                element.style.removeProperty("transition-duration");
              }
            };

            setTransition = function _setTransition(speed) {
              for (var _i = 0, _arr = [flyOut, scrollBar]; _i < _arr.length; _i++) {
                var element = _arr[_i];
                element.style.transitionDuration = "".concat(speed, "s");
              }
            };

            getToggleSetting = function _getToggleSetting() {
              return addon.settings.get("toggle");
            };

            getSpeedValue = function _getSpeedValue() {
              var data = {
                none: "0",
                short: "0.25",
                default: "0.5",
                long: "1"
              };
              return data[addon.settings.get("speed")];
            };

            addon = _ref.addon, global = _ref.global, console = _ref.console, msg = _ref.msg;
            placeHolderDiv = null;
            lockObject = null;
            lockButton = null;
            lockIcon = null;
            flyOut = null;
            scrollBar = null;
            toggle = false;
            flyoutLock = false;
            closeOnMouseUp = false;
            scrollAnimation = true;
            SVG_NS = "http://www.w3.org/2000/svg";
            _context.next = 22;
            return addon.tab.traps.getBlockly();

          case 22:
            Blockly = _context.sent;

            updateCSSVariables = function updateCSSVariables() {
              var mode = getToggleSetting();
              var modeToLockDisplay = {
                hover: "flex",
                cathover: "flex",
                category: "none"
              };
              document.documentElement.style.setProperty('--hideFlyout-lockDisplay', modeToLockDisplay[mode]);
              var modeToPlaceholderDisplay = {
                hover: "block",
                cathover: "none",
                category: "none"
              };
              document.documentElement.style.setProperty('--hideFlyout-placeholderDisplay', modeToPlaceholderDisplay[mode]);
            };

            addon.settings.addEventListener("change", updateCSSVariables);
            updateCSSVariables();
            didOneTimeSetup = false;

          case 27:
            if (false) {}

            _context.next = 30;
            return addon.tab.waitForElement(".blocklyFlyout", {
              markAsSeen: true,
              reduxEvents: ["scratch-gui/mode/SET_PLAYER", "scratch-gui/locales/SELECT_LOCALE", "fontsLoaded/SET_FONTS_LOADED"],
              reduxCondition: function reduxCondition(state) {
                return !state.scratchGui.mode.isPlayerOnly;
              }
            });

          case 30:
            flyOut = _context.sent;
            scrollBar = document.querySelector(".blocklyFlyoutScrollbar");
            blocksWrapper = document.querySelector('[class*="gui_blocks-wrapper_"]');
            injectionDiv = document.querySelector(".injectionDiv"); // Code editor left border

            borderElement1 = document.createElement("div");
            borderElement1.className = "sa-flyout-border-1";
            addon.tab.displayNoneWhileDisabled(borderElement1);
            injectionDiv.appendChild(borderElement1);
            borderElement2 = document.createElement("div");
            borderElement2.className = "sa-flyout-border-2";
            addon.tab.displayNoneWhileDisabled(borderElement2);
            injectionDiv.appendChild(borderElement2); // Placeholder Div

            if (placeHolderDiv) placeHolderDiv.remove();
            placeHolderDiv = document.createElement("div");
            blocksWrapper.appendChild(placeHolderDiv);
            placeHolderDiv.className = "sa-flyout-placeHolder";
            placeHolderDiv.style.display = "none"; // overridden by userstyle if the addon is enabled
            // Lock image

            if (lockObject) lockObject.remove();
            lockObject = document.createElementNS(SVG_NS, "foreignObject");
            lockObject.setAttribute("class", "sa-lock-object");
            lockObject.style.display = "none"; // overridden by userstyle if the addon is enabled

            lockButton = document.createElement("button");
            lockButton.className = "sa-lock-button";
            lockIcon = document.createElement("img");
            lockIcon.alt = "";
            updateLockDisplay();

            lockButton.onclick = function () {
              flyoutLock = !flyoutLock;
              updateLockDisplay();
            };

            lockButton.appendChild(lockIcon);
            lockObject.appendChild(lockButton);
            flyOut.appendChild(lockObject);
            onmouseleave(null, 0);
            toggle = false;
            toolbox = document.querySelector(".blocklyToolboxDiv");
            addExtensionButton = document.querySelector("[class^=gui_extension-button-container_]");

            for (_i3 = 0, _arr3 = [toolbox, addExtensionButton, flyOut, scrollBar]; _i3 < _arr3.length; _i3++) {
              element = _arr3[_i3];

              element.onmouseenter = function (e) {
                var toggleSetting = getToggleSetting();
                if (!addon.self.disabled && (toggleSetting === "hover" || toggleSetting === "cathover")) onmouseenter(e);
              };

              element.onmouseleave = function (e) {
                var toggleSetting = getToggleSetting();
                if (!addon.self.disabled && (toggleSetting === "hover" || toggleSetting === "cathover")) onmouseleave(e);
              };
            }

            placeHolderDiv.onmouseenter = function (e) {
              if (!addon.self.disabled && getToggleSetting() === "hover") onmouseenter(e);
            };

            placeHolderDiv.onmouseleave = function (e) {
              if (!addon.self.disabled && getToggleSetting() === "hover") onmouseleave(e);
            };

            doOneTimeSetup();

            if (getToggleSetting() !== "hover") {
              // update workspace dimensions
              Blockly.svgResize(Blockly.getMainWorkspace());
            }

            _context.next = 27;
            break;

          case 71:
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
//# sourceMappingURL=addon-entry-hide-flyout.js.map