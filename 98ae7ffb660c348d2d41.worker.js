/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-storage/src/FetchWorkerTool.worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-storage/src/FetchWorkerTool.worker.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4!./node_modules/scratch-storage/src/FetchWorkerTool.worker.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-env worker */
var saferFetchAsArrayBuffer = __webpack_require__(/*! ./safer-fetch */ "./node_modules/scratch-storage/src/safer-fetch.js");

var complete = [];
var timeoutId = null;

var checkCompleted = function checkCompleted() {
  if (timeoutId) return;
  timeoutId = setTimeout(function () {
    timeoutId = null;

    if (complete.length) {
      // Send our chunk of completed requests and instruct postMessage to
      // transfer the buffers instead of copying them.
      postMessage(complete.slice(), // Instruct postMessage that these buffers in the sent message
      // should use their Transferable trait. After the postMessage
      // call the "buffers" will still be in complete if you looked,
      // but they will all be length 0 as the data they reference has
      // been sent to the window. This lets us send a lot of data
      // without the normal postMessage behaviour of making a copy of
      // all of the data for the window.
      complete.map(function (response) {
        return response.buffer;
      }).filter(Boolean));
      complete.length = 0;
    }
  });
};
/**
 * Receive a job from the parent and fetch the requested data.
 * @param {object} options.job A job id, url, and options descriptor to perform.
 */


var onMessage = function onMessage(_ref) {
  var job = _ref.data;
  saferFetchAsArrayBuffer(job.url, job.options).then(function (buffer) {
    return complete.push({
      id: job.id,
      buffer: buffer
    });
  }).catch(function (error) {
    return complete.push({
      id: job.id,
      error: error && error.message || "Failed request: ".concat(job.url)
    });
  }).then(checkCompleted);
};

if (self.fetch) {
  postMessage({
    support: {
      fetch: true
    }
  });
  self.addEventListener('message', onMessage);
} else {
  postMessage({
    support: {
      fetch: false
    }
  });
  self.addEventListener('message', function (_ref2) {
    var job = _ref2.data;
    postMessage([{
      id: job.id,
      error: 'fetch is unavailable'
    }]);
  });
}

/***/ }),

/***/ "./node_modules/scratch-storage/src/safer-fetch.js":
/*!*********************************************************!*\
  !*** ./node_modules/scratch-storage/src/safer-fetch.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-env browser */

/* eslint-disable no-use-before-define */
// This throttles and retries fetch() to mitigate the effect of random network errors and
// random browser errors (especially in Chrome)
var currentFetches = 0;
var queue = [];

var startNextFetch = function startNextFetch(_ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      resolve = _ref2[0],
      url = _ref2[1],
      options = _ref2[2];

  var firstError;
  var failedAttempts = 0;

  var attemptToFetch = function attemptToFetch() {
    return fetch(url, options).then(function (result) {
      // In a macOS WKWebView, requests from file: URLs to other file: URLs always have status: 0 and ok: false
      // even though the requests were successful. If the requested file doesn't exist, fetch() rejects instead.
      // We aren't aware of any other cases where fetch() can resolve with status 0, so this should be safe.
      if (result.ok || result.status === 0) return result.arrayBuffer();
      if (result.status === 404) return null;
      return Promise.reject(result.status);
    }).then(function (buffer) {
      currentFetches--;
      checkStartNextFetch();
      return buffer;
    }).catch(function (error) {
      console.warn("Attempt to fetch ".concat(url, " failed"), error);

      if (!firstError) {
        firstError = error;
      }

      if (failedAttempts < 2) {
        failedAttempts++;
        return new Promise(function (cb) {
          return setTimeout(cb, (failedAttempts + Math.random() - 1) * 5000);
        }).then(attemptToFetch);
      }

      currentFetches--;
      checkStartNextFetch();
      throw firstError;
    });
  };

  return resolve(attemptToFetch());
};

var checkStartNextFetch = function checkStartNextFetch() {
  if (currentFetches < 100 && queue.length > 0) {
    currentFetches++;
    startNextFetch(queue.shift());
  }
};

var saferFetchAsArrayBuffer = function saferFetchAsArrayBuffer(url, options) {
  return new Promise(function (resolve) {
    queue.push([resolve, url, options]);
    checkStartNextFetch();
  });
};

module.exports = saferFetchAsArrayBuffer;

/***/ })

/******/ });
//# sourceMappingURL=98ae7ffb660c348d2d41.worker.js.map