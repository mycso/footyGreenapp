webpackHotUpdate_N_E("pages/teams",{

/***/ "./components/Teams.js":
/*!*****************************!*\
  !*** ./components/Teams.js ***!
  \*****************************/
/*! exports provided: ALL_TEAMS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_TEAMS_QUERY", function() { return ALL_TEAMS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Teams; });
/* harmony import */ var C_Users_Michael_Documents_reactJS_footyGreenapp_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Team */ "./components/Team.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");



var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\footyGreenapp\\frontend\\components\\Teams.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Users_Michael_Documents_reactJS_footyGreenapp_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query ALL_TEAMS_QUERY($skip: Int = 0, $first: Int) {\n        allTeams(first: $first, skip: $skip){\n            id\n            team_id\n            team_name\n            team_first_color\n            stat\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ALL_TEAMS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Teams__Center",
  componentId: "sc-18q4lv1-0"
})(["text-align:center;.buttonup{width:auto;color:white;background-color:", ";border:0;border-radius:", " !important;font-size:1rem;padding:0.9rem 1.2rem;}"], function (props) {
  return props.theme.orange;
}, function (props) {
  return props.theme.roundedCorner;
});
_c = Center;
var ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Teams__ItemsList",
  componentId: "sc-18q4lv1-1"
})(["display:grid;grid-template-columns:auto auto auto auto;grid-gap:60px;max-width:", ";margin:0 auto;@media (max-width:830px){grid-template-columns:1fr 1fr;grid-gap:0%;a{font-size:1.2rem;}}@media (max-width:500px){grid-template-columns:1fr;grid-gap:0%;}"], function (props) {
  return props.theme.maxWidth;
});
_c2 = ItemsList;
function Teams(_ref) {
  _s();

  var _this = this;

  var page = _ref.page;

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(ALL_TEAMS_QUERY, {
    variables: {
      skip: page * _config__WEBPACK_IMPORTED_MODULE_6__["perPage"] - _config__WEBPACK_IMPORTED_MODULE_6__["perPage"],
      first: _config__WEBPACK_IMPORTED_MODULE_6__["perPage"]
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data, error, loading);
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 25
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 23
  }, this);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Center, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ItemsList, {
      children: data.allMatches.map(function (team) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_Team__WEBPACK_IMPORTED_MODULE_4__["default"], {
          team: team
        }, team.id, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, this);
}

_s(Teams, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c3 = Teams;

var _c, _c2, _c3;

$RefreshReg$(_c, "Center");
$RefreshReg$(_c2, "ItemsList");
$RefreshReg$(_c3, "Teams");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UZWFtcy5qcyJdLCJuYW1lcyI6WyJBTExfVEVBTVNfUVVFUlkiLCJncWwiLCJDZW50ZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwib3JhbmdlIiwicm91bmRlZENvcm5lciIsIkl0ZW1zTGlzdCIsIm1heFdpZHRoIiwiVGVhbXMiLCJwYWdlIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJza2lwIiwicGVyUGFnZSIsImZpcnN0IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiYWxsTWF0Y2hlcyIsIm1hcCIsInRlYW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZUFBZSxHQUFHQyxrREFBSCxtQkFBckI7QUFZUCxJQUFNQyxNQUFNLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0pBTWEsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFoQjtBQUFBLENBTmxCLEVBUVUsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxhQUFoQjtBQUFBLENBUmYsQ0FBWjtLQUFNTixNO0FBY04sSUFBTU8sU0FBUyxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1RQUlELFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksUUFBaEI7QUFBQSxDQUpKLENBQWY7TUFBTUQsUztBQW1CUyxTQUFTRSxLQUFULE9BQTBCO0FBQUE7O0FBQUE7O0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNKQywrREFBUSxDQUFDYixlQUFELEVBQWtCO0FBQ3ZEYyxhQUFTLEVBQUU7QUFDUEMsVUFBSSxFQUFFSCxJQUFJLEdBQUdJLCtDQUFQLEdBQWlCQSwrQ0FEaEI7QUFFUEMsV0FBSyxFQUFFRCwrQ0FBT0E7QUFGUDtBQUQ0QyxHQUFsQixDQURKO0FBQUEsTUFDN0JFLElBRDZCLGFBQzdCQSxJQUQ2QjtBQUFBLE1BQ3ZCQyxLQUR1QixhQUN2QkEsS0FEdUI7QUFBQSxNQUNoQkMsT0FEZ0IsYUFDaEJBLE9BRGdCOztBQU9yQ0MsU0FBTyxDQUFDQyxHQUFSLENBQWFKLElBQWIsRUFBbUJDLEtBQW5CLEVBQTBCQyxPQUExQjtBQUNBLE1BQUlBLE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ2IsTUFBSUQsS0FBSixFQUFXLG9CQUFPO0FBQUEsMEJBQVdBLEtBQUssQ0FBQ0ksT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWCxzQkFDSSxxRUFBQyxNQUFEO0FBQUEsMkJBQ0kscUVBQUMsU0FBRDtBQUFBLGdCQUNLTCxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQ7QUFBQSw0QkFDakIscUVBQUMsNkNBQUQ7QUFBb0IsY0FBSSxFQUFFQTtBQUExQixXQUFXQSxJQUFJLENBQUNDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGlCO0FBQUEsT0FBcEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0dBbkJ1QmhCLEs7VUFDYUUsdUQ7OztNQURiRixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW1zLjdmOWM3OGYxZmE4ZDgxYTI4ZjcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBUZWFtIGZyb20gJy4vVGVhbSc7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9URUFNU19RVUVSWSA9IGdxbGBcclxuICAgIHF1ZXJ5IEFMTF9URUFNU19RVUVSWSgkc2tpcDogSW50ID0gMCwgJGZpcnN0OiBJbnQpIHtcclxuICAgICAgICBhbGxUZWFtcyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCl7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIHRlYW1faWRcclxuICAgICAgICAgICAgdGVhbV9uYW1lXHJcbiAgICAgICAgICAgIHRlYW1fZmlyc3RfY29sb3JcclxuICAgICAgICAgICAgc3RhdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IENlbnRlciA9IHN0eWxlZC5kaXZgXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuXHQuYnV0dG9udXAge1xyXG5cdCAgICB3aWR0aDogYXV0bztcclxuXHQgICAgY29sb3I6IHdoaXRlO1xyXG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm9yYW5nZX07XHJcblx0ICAgIGJvcmRlcjogMDtcclxuXHQgICAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yb3VuZGVkQ29ybmVyfSAhaW1wb3J0YW50O1xyXG5cdCAgICBmb250LXNpemU6IDFyZW07XHJcblx0ICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XHJcbiAgXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJdGVtc0xpc3QgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG5cdGdyaWQtZ2FwOiA2MHB4O1xyXG5cdG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXhXaWR0aH07XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0QG1lZGlhIChtYXgtd2lkdGg6IDgzMHB4KSB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcblx0XHRncmlkLWdhcDogMCU7XHJcblx0XHRhIHtcclxuICAgIFx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdH1cclxuXHR9XHJcblx0QG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcblx0XHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuXHRcdGdyaWQtZ2FwOiAwJTtcclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWFtcyAoeyBwYWdlIH0pIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfSA9IHVzZVF1ZXJ5KEFMTF9URUFNU19RVUVSWSwge1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBza2lwOiBwYWdlICogcGVyUGFnZSAtIHBlclBhZ2UsXHJcbiAgICAgICAgICAgIGZpcnN0OiBwZXJQYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCBkYXRhLCBlcnJvciwgbG9hZGluZyApXHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvci5tZXNzYWdlfTwvcD47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDZW50ZXI+XHJcbiAgICAgICAgICAgIDxJdGVtc0xpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5hbGxNYXRjaGVzLm1hcCgodGVhbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUZWFtIGtleT17dGVhbS5pZH0gdGVhbT17dGVhbX0gLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0l0ZW1zTGlzdD5cclxuICAgICAgICA8L0NlbnRlcj5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9