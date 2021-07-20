webpackHotUpdate_N_E("pages/matches",{

/***/ "./pages/matches.js":
/*!**************************!*\
  !*** ./pages/matches.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatchesPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Matches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Matches */ "./components/Matches.js");
/* harmony import */ var _components_MatchPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MatchPagination */ "./components/MatchPagination.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\footyGreenapp\\frontend\\pages\\matches.js",
    _s = $RefreshSig$();





var Center = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "matches__Center",
  componentId: "sc-1fkb4lv-0"
})(["text-align:center;"]);
_c = Center;
function MatchesPage() {
  _s();

  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])(),
      query = _useRouter.query;

  var page = parseInt(query.page);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Matches__WEBPACK_IMPORTED_MODULE_2__["default"], {
      page: page || 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Center, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MatchPagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
        page: page || 1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

_s(MatchesPage, "wby5GzzI23pLfTlf5I7v7XLG1RQ=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c2 = MatchesPage;

var _c, _c2;

$RefreshReg$(_c, "Center");
$RefreshReg$(_c2, "MatchesPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWF0Y2hlcy5qcyJdLCJuYW1lcyI6WyJDZW50ZXIiLCJzdHlsZWQiLCJkaXYiLCJNYXRjaGVzUGFnZSIsInVzZVJvdXRlciIsInF1ZXJ5IiwicGFnZSIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwQkFBWjtLQUFNRixNO0FBSVMsU0FBU0csV0FBVCxHQUF1QjtBQUFBOztBQUFBLG1CQUNsQkMseUVBQVMsRUFEUztBQUFBLE1BQzVCQyxLQUQ0QixjQUM1QkEsS0FENEI7O0FBRXJDLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDRixLQUFLLENBQUNDLElBQVAsQ0FBckI7QUFFQyxzQkFBTztBQUFBLDRCQUNMLHFFQUFDLDJEQUFEO0FBQVMsVUFBSSxFQUFFQSxJQUFJLElBQUk7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURLLGVBRUwscUVBQUMsTUFBRDtBQUFBLDZCQUNFLHFFQUFDLG1FQUFEO0FBQWlCLFlBQUksRUFBRUEsSUFBSSxJQUFJO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFPRDs7R0FYdUJILFc7VUFDSkMsaUU7OztNQURJRCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21hdGNoZXMuOGIwZDUwNmFmYjc4YWE5Mzk4NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IE1hdGNoZXMgZnJvbSAnLi4vY29tcG9uZW50cy9NYXRjaGVzJztcclxuaW1wb3J0IE1hdGNoUGFnaW5hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL01hdGNoUGFnaW5hdGlvbic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ2VudGVyID0gc3R5bGVkLmRpdmBcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXRjaGVzUGFnZSgpIHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBwYWdlID0gcGFyc2VJbnQocXVlcnkucGFnZSk7XHJcblxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPE1hdGNoZXMgcGFnZT17cGFnZSB8fCAxfSAvPlxyXG4gICAgPENlbnRlcj5cclxuICAgICAgPE1hdGNoUGFnaW5hdGlvbiBwYWdlPXtwYWdlIHx8IDF9IC8+XHJcbiAgICA8L0NlbnRlcj5cclxuICAgXHJcbiAgPC9kaXY+XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==