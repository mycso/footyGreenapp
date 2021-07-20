module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/player/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\footyGreenapp\\frontend\\components\\ErrorMessage.js";



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-8gkyxc-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        "data-test": "graphql-error",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Shoot!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), error.message.replace('GraphQL error: ', '')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      "data-test": "graphql-error",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Shoot!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), error.message.replace('GraphQL error: ', '')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/SinglePlayer.js":
/*!************************************!*\
  !*** ./components/SinglePlayer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SinglePlayer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_SingleItemStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/SingleItemStyles */ "./components/styles/SingleItemStyles.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");

var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\footyGreenapp\\frontend\\components\\SinglePlayer.js";








const Center = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SinglePlayer__Center",
  componentId: "sc-133p059-0"
})(["text-align:center;"]);
const ItemsList = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SinglePlayer__ItemsList",
  componentId: "sc-133p059-1"
})(["display:grid;grid-template-columns:auto auto auto auto;grid-gap:60px;max-width:", ";margin:0 auto;@media (max-width:830px){grid-template-columns:1fr 1fr;grid-gap:0%;a{font-size:1.2rem;}}@media (max-width:500px){grid-template-columns:1fr;grid-gap:0%;}"], props => props.theme.maxWidth);
const SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    query SINGLE_ITEM_QUERY ($id: ID!){
        Player(where: { id: $id }) {
            player_name
            country_name
            id
            stat {
                minutes_played
                team_possession_percentage
                shots
                goals
                tackles
                interceptions
                pressures
                passes
                completed_passes
                left_foot_passes
                right_foot_passes
                player_shots_faced
            }
            photo {
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
        
        # allProducts (where: {
        #   name_contains_i: "Yeti"
        # }) {
        #   name
        #   price
        #   description
        # }
    }

`;
function SinglePlayer({
  id
}) {
  var _Player$photo, _Player$photo$image;

  const {
    data,
    loading,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(SINGLE_ITEM_QUERY, {
    variables: {
      id
    }
  });
  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 25
  }, this);
  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 23
  }, this);
  const {
    Player
  } = data;
  console.log(Player);
  const testData = {
    labels: ['Minutes Played', 'Team Possession Percentage', 'Xg', 'Shots', 'Goals', 'Tackles', 'Interceptions', 'Pressures', 'Passes', 'Completed Passes', 'Left Foot Passes', 'Right Foot Passes', 'Player Shots Faced'],
    datasets: [{
      label: 'Player Stats',
      data: [Player === null || Player === void 0 ? void 0 : Player.stat.minutes_played, Player === null || Player === void 0 ? void 0 : Player.stat.team_possession_percentage, Player === null || Player === void 0 ? void 0 : Player.stat.xg, Player === null || Player === void 0 ? void 0 : Player.stat.shots, Player === null || Player === void 0 ? void 0 : Player.stat.goals, Player === null || Player === void 0 ? void 0 : Player.stat.tackles, Player === null || Player === void 0 ? void 0 : Player.stat.interceptions, Player === null || Player === void 0 ? void 0 : Player.stat.pressures, Player === null || Player === void 0 ? void 0 : Player.stat.passes, Player === null || Player === void 0 ? void 0 : Player.stat.completed_passes, Player === null || Player === void 0 ? void 0 : Player.stat.left_foot_passes, Player === null || Player === void 0 ? void 0 : Player.stat.right_foot_passes, Player === null || Player === void 0 ? void 0 : Player.stat.player_shots_faced],
      fill: false,
      backgroundColor: '#9fda34',
      borderColor: '#9fda34'
    }]
  };
  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_SingleItemStyles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: ["Footy Green Powered by Stats Bomb - ", Player.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "item-details",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: Player === null || Player === void 0 ? void 0 : (_Player$photo = Player.photo) === null || _Player$photo === void 0 ? void 0 : (_Player$photo$image = _Player$photo.image) === null || _Player$photo$image === void 0 ? void 0 : _Player$photo$image.publicUrlTransformed,
        alt: Player.player_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "details",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: Player.player_name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Nationality: ", Player.country_name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Minutes Played: ", Player.stat.minutes_played === null ? Player.stat.minutes_played : 'N/A']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Team Possession Percentage: ", Player.stat.team_possession_percentage]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Xg: ", Player.stat.xg === '' ? Player.stat.xg : 'N/A']
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Shots: ", Player.stat.shots]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Goals: ", Player.stat.goals]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Tackles: ", Player.stat.tackles]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Interceptions: ", Player.stat.interceptions]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Pressures: ", Player.stat.pressures]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Passes: ", Player.stat.passes]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Completed Passes: ", Player.stat.completed_passes]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Left Foot Passes: ", Player.stat.left_foot_passes]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Right Foot Passes: ", Player.stat.right_foot_passes]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Player Shots Faced: ", Player.stat.player_shots_faced]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_chartjs_2__WEBPACK_IMPORTED_MODULE_7__["Bar"], {
        data: testData,
        options: options
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/styles/SingleItemStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/SingleItemStyles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SingleItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "SingleItemStyles",
  componentId: "yz350g-0"
})([".item-details{margin:2rem auto;display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;img{width:100%;height:auto;object-fit:contain;@media (max-width:768px){height:auto;}}.carousel-item img[src=\"\"]{display:none;}@media (max-width:768px){grid-auto-flow:unset;}}.carousel-item{height:auto;}@media (max-width:500px){.carousel img{width:220%;position:absolute;left:0;}.carousel-item{height:auto;}}.nav-link{display:block;padding:0;font-size:20px;}.details{margin:3rem;font-size:2rem;h2{color:", ";font-weight:bold;}p{font-size:1.1rem;}@media (max-width:768px){text-align:center;margin:0;}.dv-star-rating{display:inline !important;float:left;@media (max-width:768px){float:none;}.dv-star-rating-star{@media (max-width:768px){float:none !important;}}}.star-result{margin-left:10px;}}button.react-slider__btnNext{margin:20px;border-radius:0px !important;}button.react-slider__btnPrev{margin:20px;border-radius:0px !important;}.react-slider__imgZoom{background-size:2490px auto !important;height:647px;}"], props => props.theme.navyBlue);
/* harmony default export */ __webpack_exports__["default"] = (SingleItemStyles);

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount = 0) {
  const options = {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2
  }; // if its a whole, pound amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat('en-GB', options);
  return formatter.format(amount / 100);
});

/***/ }),

/***/ "./pages/player/[id].js":
/*!******************************!*\
  !*** ./pages/player/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SinglePlayerPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SinglePlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SinglePlayer */ "./components/SinglePlayer.js");

var _jsxFileName = "C:\\Users\\Michael\\Documents\\reactJS\\footyGreenapp\\frontend\\pages\\player\\[id].js";


const Inner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "id__Inner",
  componentId: "sc-18byi95-0"
})(["max-width:", ";margin:0 auto;padding:2rem;font-size:20px;"], props => props.theme.maxWidth);
function SinglePlayerPage({
  query
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SinglePlayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: query.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaW5nbGVQbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMvU2luZ2xlSXRlbVN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZm9ybWF0TW9uZXkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGxheWVyLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJFcnJvclN0eWxlcyIsInN0eWxlZCIsImRpdiIsIkRpc3BsYXlFcnJvciIsImVycm9yIiwibWVzc2FnZSIsIm5ldHdvcmtFcnJvciIsInJlc3VsdCIsImVycm9ycyIsImxlbmd0aCIsIm1hcCIsImkiLCJyZXBsYWNlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiQ2VudGVyIiwiSXRlbXNMaXN0IiwicHJvcHMiLCJ0aGVtZSIsIm1heFdpZHRoIiwiU0lOR0xFX0lURU1fUVVFUlkiLCJncWwiLCJTaW5nbGVQbGF5ZXIiLCJpZCIsImRhdGEiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJ2YXJpYWJsZXMiLCJQbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwidGVzdERhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwic3RhdCIsIm1pbnV0ZXNfcGxheWVkIiwidGVhbV9wb3NzZXNzaW9uX3BlcmNlbnRhZ2UiLCJ4ZyIsInNob3RzIiwiZ29hbHMiLCJ0YWNrbGVzIiwiaW50ZXJjZXB0aW9ucyIsInByZXNzdXJlcyIsInBhc3NlcyIsImNvbXBsZXRlZF9wYXNzZXMiLCJsZWZ0X2Zvb3RfcGFzc2VzIiwicmlnaHRfZm9vdF9wYXNzZXMiLCJwbGF5ZXJfc2hvdHNfZmFjZWQiLCJmaWxsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJvcHRpb25zIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsImJlZ2luQXRaZXJvIiwibmFtZSIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsInBsYXllcl9uYW1lIiwiY291bnRyeV9uYW1lIiwiU2luZ2xlSXRlbVN0eWxlcyIsIm5hdnlCbHVlIiwiYW1vdW50Iiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJJbm5lciIsIlNpbmdsZVBsYXllclBhZ2UiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzS0FBakI7O0FBZUEsTUFBTUMsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWU7QUFDbEMsTUFBSSxDQUFDQSxLQUFELElBQVUsQ0FBQ0EsS0FBSyxDQUFDQyxPQUFyQixFQUE4QixPQUFPLElBQVA7O0FBQzlCLE1BQUlELEtBQUssQ0FBQ0UsWUFBTixJQUFzQkYsS0FBSyxDQUFDRSxZQUFOLENBQW1CQyxNQUF6QyxJQUFtREgsS0FBSyxDQUFDRSxZQUFOLENBQW1CQyxNQUFuQixDQUEwQkMsTUFBMUIsQ0FBaUNDLE1BQXhGLEVBQWdHO0FBQzlGLFdBQU9MLEtBQUssQ0FBQ0UsWUFBTixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQTFCLENBQWlDRSxHQUFqQyxDQUFxQyxDQUFDTixLQUFELEVBQVFPLENBQVIsa0JBQzFDLHFFQUFDLFdBQUQ7QUFBQSw2QkFDRTtBQUFHLHFCQUFVLGVBQWI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHUCxLQUFLLENBQUNDLE9BQU4sQ0FBY08sT0FBZCxDQUFzQixpQkFBdEIsRUFBeUMsRUFBekMsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFrQkQsQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxDQUFQO0FBUUQ7O0FBQ0Qsc0JBQ0UscUVBQUMsV0FBRDtBQUFBLDJCQUNFO0FBQUcsbUJBQVUsZUFBYjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUdQLEtBQUssQ0FBQ0MsT0FBTixDQUFjTyxPQUFkLENBQXNCLGlCQUF0QixFQUF5QyxFQUF6QyxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBcEJEOztBQXNCQVQsWUFBWSxDQUFDVSxZQUFiLEdBQTRCO0FBQzFCVCxPQUFLLEVBQUU7QUFEbUIsQ0FBNUI7QUFJQUQsWUFBWSxDQUFDVyxTQUFiLEdBQXlCO0FBQ3ZCVixPQUFLLEVBQUVXLGlEQUFTLENBQUNDO0FBRE0sQ0FBekI7QUFJZWIsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTWMsTUFBTSxHQUFHaEIsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwwQkFBWjtBQUlBLE1BQU1nQixTQUFTLEdBQUdqQix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG1RQUlEaUIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsUUFKcEIsQ0FBZjtBQW1CQSxNQUFNQyxpQkFBaUIsR0FBR0Msa0RBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FyQ0E7QUF1Q2UsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQThCO0FBQUE7O0FBQ3pDLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxXQUFSO0FBQWlCdkI7QUFBakIsTUFBMkJ3QiwrREFBUSxDQUNwQ04saUJBRG9DLEVBQ2pCO0FBQ2hCTyxhQUFTLEVBQUU7QUFDUEo7QUFETztBQURLLEdBRGlCLENBQXpDO0FBTUEsTUFBSUUsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJdkIsS0FBSixFQUFXLG9CQUFPLHFFQUFDLHFEQUFEO0FBQWMsU0FBSyxFQUFFQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWCxRQUFNO0FBQUUwQjtBQUFGLE1BQWFKLElBQW5CO0FBQ0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBRUEsUUFBTUcsUUFBUSxHQUFHO0FBQ2JDLFVBQU0sRUFBRSxDQUNKLGdCQURJLEVBRUosNEJBRkksRUFHSixJQUhJLEVBSUosT0FKSSxFQUtKLE9BTEksRUFNSixTQU5JLEVBT0osZUFQSSxFQVFKLFdBUkksRUFTSixRQVRJLEVBVUosa0JBVkksRUFXSixrQkFYSSxFQVlKLG1CQVpJLEVBYUosb0JBYkksQ0FESztBQWdCYkMsWUFBUSxFQUFFLENBQ047QUFDQUMsV0FBSyxFQUFFLGNBRFA7QUFFQVYsVUFBSSxFQUFFLENBQ0ZJLE1BREUsYUFDRkEsTUFERSx1QkFDRkEsTUFBTSxDQUFFTyxJQUFSLENBQWFDLGNBRFgsRUFFRlIsTUFGRSxhQUVGQSxNQUZFLHVCQUVGQSxNQUFNLENBQUVPLElBQVIsQ0FBYUUsMEJBRlgsRUFHRlQsTUFIRSxhQUdGQSxNQUhFLHVCQUdGQSxNQUFNLENBQUVPLElBQVIsQ0FBYUcsRUFIWCxFQUlGVixNQUpFLGFBSUZBLE1BSkUsdUJBSUZBLE1BQU0sQ0FBRU8sSUFBUixDQUFhSSxLQUpYLEVBS0ZYLE1BTEUsYUFLRkEsTUFMRSx1QkFLRkEsTUFBTSxDQUFFTyxJQUFSLENBQWFLLEtBTFgsRUFNRlosTUFORSxhQU1GQSxNQU5FLHVCQU1GQSxNQUFNLENBQUVPLElBQVIsQ0FBYU0sT0FOWCxFQU9GYixNQVBFLGFBT0ZBLE1BUEUsdUJBT0ZBLE1BQU0sQ0FBRU8sSUFBUixDQUFhTyxhQVBYLEVBUUZkLE1BUkUsYUFRRkEsTUFSRSx1QkFRRkEsTUFBTSxDQUFFTyxJQUFSLENBQWFRLFNBUlgsRUFTRmYsTUFURSxhQVNGQSxNQVRFLHVCQVNGQSxNQUFNLENBQUVPLElBQVIsQ0FBYVMsTUFUWCxFQVVGaEIsTUFWRSxhQVVGQSxNQVZFLHVCQVVGQSxNQUFNLENBQUVPLElBQVIsQ0FBYVUsZ0JBVlgsRUFXRmpCLE1BWEUsYUFXRkEsTUFYRSx1QkFXRkEsTUFBTSxDQUFFTyxJQUFSLENBQWFXLGdCQVhYLEVBWUZsQixNQVpFLGFBWUZBLE1BWkUsdUJBWUZBLE1BQU0sQ0FBRU8sSUFBUixDQUFhWSxpQkFaWCxFQWFGbkIsTUFiRSxhQWFGQSxNQWJFLHVCQWFGQSxNQUFNLENBQUVPLElBQVIsQ0FBYWEsa0JBYlgsQ0FGTjtBQWlCQUMsVUFBSSxFQUFFLEtBakJOO0FBa0JBQyxxQkFBZSxFQUFFLFNBbEJqQjtBQW1CQUMsaUJBQVcsRUFBRTtBQW5CYixLQURNO0FBaEJHLEdBQWpCO0FBeUNBLFFBQU1DLE9BQU8sR0FBRztBQUNaQyxVQUFNLEVBQUU7QUFDSkMsV0FBSyxFQUFFLENBQ1A7QUFDSUMsYUFBSyxFQUFFO0FBQ1BDLHFCQUFXLEVBQUU7QUFETjtBQURYLE9BRE87QUFESDtBQURJLEdBQWhCO0FBWUEsc0JBQ0kscUVBQUMsZ0VBQUQ7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUEsMkRBQTRDNUIsTUFBTSxDQUFDNkIsSUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDhCQUNJO0FBQ0ksV0FBRyxFQUFFN0IsTUFBRixhQUFFQSxNQUFGLHdDQUFFQSxNQUFNLENBQUU4QixLQUFWLHlFQUFFLGNBQWVDLEtBQWpCLHdEQUFFLG9CQUFzQkMsb0JBRC9CO0FBRUksV0FBRyxFQUFFaEMsTUFBTSxDQUFDaUM7QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBS0k7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDSTtBQUFBLG9CQUFLakMsTUFBTSxDQUFDaUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQSxzQ0FBaUJqQyxNQUFNLENBQUNrQyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBLHlDQUFvQmxDLE1BQU0sQ0FBQ08sSUFBUCxDQUFZQyxjQUFaLEtBQStCLElBQS9CLEdBQXNDUixNQUFNLENBQUNPLElBQVAsQ0FBWUMsY0FBbEQsR0FBbUUsS0FBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUk7QUFBQSxxREFBZ0NSLE1BQU0sQ0FBQ08sSUFBUCxDQUFZRSwwQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0k7QUFBQSw2QkFBUVQsTUFBTSxDQUFDTyxJQUFQLENBQVlHLEVBQVosS0FBbUIsRUFBbkIsR0FBd0JWLE1BQU0sQ0FBQ08sSUFBUCxDQUFZRyxFQUFwQyxHQUF5QyxLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSTtBQUFBLGdDQUFXVixNQUFNLENBQUNPLElBQVAsQ0FBWUksS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0k7QUFBQSxnQ0FBV1gsTUFBTSxDQUFDTyxJQUFQLENBQVlLLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVFJO0FBQUEsa0NBQWFaLE1BQU0sQ0FBQ08sSUFBUCxDQUFZTSxPQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosZUFTSTtBQUFBLHdDQUFtQmIsTUFBTSxDQUFDTyxJQUFQLENBQVlPLGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSixlQVVJO0FBQUEsb0NBQWVkLE1BQU0sQ0FBQ08sSUFBUCxDQUFZUSxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFXSTtBQUFBLGlDQUFZZixNQUFNLENBQUNPLElBQVAsQ0FBWVMsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhKLGVBWUk7QUFBQSwyQ0FBc0JoQixNQUFNLENBQUNPLElBQVAsQ0FBWVUsZ0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaSixlQWFJO0FBQUEsMkNBQXNCakIsTUFBTSxDQUFDTyxJQUFQLENBQVlXLGdCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkosZUFjSTtBQUFBLDRDQUF1QmxCLE1BQU0sQ0FBQ08sSUFBUCxDQUFZWSxpQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRKLGVBZUk7QUFBQSw2Q0FBd0JuQixNQUFNLENBQUNPLElBQVAsQ0FBWWEsa0JBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQTJCSTtBQUFBLDZCQUNJLHFFQUFDLG1EQUFEO0FBQUssWUFBSSxFQUFFakIsUUFBWDtBQUFxQixlQUFPLEVBQUVxQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlDSCxDOzs7Ozs7Ozs7Ozs7QUN6S0Q7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNVyxnQkFBZ0IsR0FBR2hFLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsaWdDQStEVmlCLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVk4QyxRQS9EWCxDQUF0QjtBQStHZUQsK0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDakhBO0FBQWUseUVBQVNFLE1BQU0sR0FBRyxDQUFsQixFQUFxQjtBQUNoQyxRQUFNYixPQUFPLEdBQUc7QUFDZGMsU0FBSyxFQUFFLFVBRE87QUFFZEMsWUFBUSxFQUFFLEtBRkk7QUFHZEMseUJBQXFCLEVBQUU7QUFIVCxHQUFoQixDQURnQyxDQU1oQzs7QUFDQSxNQUFJSCxNQUFNLEdBQUcsR0FBVCxLQUFpQixDQUFyQixFQUF3QmIsT0FBTyxDQUFDZ0IscUJBQVIsR0FBZ0MsQ0FBaEM7QUFDeEIsUUFBTUMsU0FBUyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQm5CLE9BQS9CLENBQWxCO0FBQ0EsU0FBT2lCLFNBQVMsQ0FBQ0csTUFBVixDQUFpQlAsTUFBTSxHQUFHLEdBQTFCLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWSDtBQUNBO0FBRUEsTUFBTVEsS0FBSyxHQUFHMUUsd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrRUFDR2lCLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBRHhCLENBQVg7QUFPZSxTQUFTdUQsZ0JBQVQsQ0FBMEI7QUFBRUM7QUFBRixDQUExQixFQUFxQztBQUNoRCxzQkFBTyxxRUFBQyxLQUFEO0FBQUEsMkJBQ0gscUVBQUMsZ0VBQUQ7QUFBYyxRQUFFLEVBQUVBLEtBQUssQ0FBQ3BEO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFHSCxDOzs7Ozs7Ozs7OztBQ2RELDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL3BsYXllci9baWRdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wbGF5ZXIvW2lkXS5qc1wiKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmNvbnN0IEVycm9yU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gIH1cclxuICBzdHJvbmcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERpc3BsYXlFcnJvciA9ICh7IGVycm9yIH0pID0+IHtcclxuICBpZiAoIWVycm9yIHx8ICFlcnJvci5tZXNzYWdlKSByZXR1cm4gbnVsbDtcclxuICBpZiAoZXJyb3IubmV0d29ya0Vycm9yICYmIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubWFwKChlcnJvciwgaSkgPT4gKFxyXG4gICAgICA8RXJyb3JTdHlsZXMga2V5PXtpfT5cclxuICAgICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XHJcbiAgICAgICAgICA8c3Ryb25nPlNob290ITwvc3Ryb25nPlxyXG4gICAgICAgICAge2Vycm9yLm1lc3NhZ2UucmVwbGFjZSgnR3JhcGhRTCBlcnJvcjogJywgJycpfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9FcnJvclN0eWxlcz5cclxuICAgICkpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEVycm9yU3R5bGVzPlxyXG4gICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XHJcbiAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cclxuICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XHJcbiAgICAgIDwvcD5cclxuICAgIDwvRXJyb3JTdHlsZXM+XHJcbiAgKTtcclxufTtcclxuXHJcbkRpc3BsYXlFcnJvci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZXJyb3I6IHt9LFxyXG59O1xyXG5cclxuRGlzcGxheUVycm9yLnByb3BUeXBlcyA9IHtcclxuICBlcnJvcjogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlFcnJvcjtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgU2luZ2xlSXRlbVN0eWxlcyBmcm9tICcuL3N0eWxlcy9TaW5nbGVJdGVtU3R5bGVzJztcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcblxyXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEl0ZW1zTGlzdCA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcblx0Z3JpZC1nYXA6IDYwcHg7XHJcblx0bWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1heFdpZHRofTtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRAbWVkaWEgKG1heC13aWR0aDogODMwcHgpIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHRcdGdyaWQtZ2FwOiAwJTtcclxuXHRcdGEge1xyXG4gICAgXHRcdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cdFx0Z3JpZC1nYXA6IDAlO1xyXG5cdH1cclxuYDtcclxuXHJcbmNvbnN0IFNJTkdMRV9JVEVNX1FVRVJZID0gZ3FsYFxyXG4gICAgcXVlcnkgU0lOR0xFX0lURU1fUVVFUlkgKCRpZDogSUQhKXtcclxuICAgICAgICBQbGF5ZXIod2hlcmU6IHsgaWQ6ICRpZCB9KSB7XHJcbiAgICAgICAgICAgIHBsYXllcl9uYW1lXHJcbiAgICAgICAgICAgIGNvdW50cnlfbmFtZVxyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBzdGF0IHtcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXNfcGxheWVkXHJcbiAgICAgICAgICAgICAgICB0ZWFtX3Bvc3Nlc3Npb25fcGVyY2VudGFnZVxyXG4gICAgICAgICAgICAgICAgc2hvdHNcclxuICAgICAgICAgICAgICAgIGdvYWxzXHJcbiAgICAgICAgICAgICAgICB0YWNrbGVzXHJcbiAgICAgICAgICAgICAgICBpbnRlcmNlcHRpb25zXHJcbiAgICAgICAgICAgICAgICBwcmVzc3VyZXNcclxuICAgICAgICAgICAgICAgIHBhc3Nlc1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkX3Bhc3Nlc1xyXG4gICAgICAgICAgICAgICAgbGVmdF9mb290X3Bhc3Nlc1xyXG4gICAgICAgICAgICAgICAgcmlnaHRfZm9vdF9wYXNzZXNcclxuICAgICAgICAgICAgICAgIHBsYXllcl9zaG90c19mYWNlZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBob3RvIHtcclxuICAgICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICMgYWxsUHJvZHVjdHMgKHdoZXJlOiB7XHJcbiAgICAgICAgIyAgIG5hbWVfY29udGFpbnNfaTogXCJZZXRpXCJcclxuICAgICAgICAjIH0pIHtcclxuICAgICAgICAjICAgbmFtZVxyXG4gICAgICAgICMgICBwcmljZVxyXG4gICAgICAgICMgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICMgfVxyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZVBsYXllcih7IGlkIH0pIHtcclxuICAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5XHJcbiAgICAgICAgKFNJTkdMRV9JVEVNX1FVRVJZLCB7XHJcbiAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+OyBcclxuICAgIGNvbnN0IHsgUGxheWVyIH0gPSBkYXRhO1xyXG4gICAgY29uc29sZS5sb2coUGxheWVyKVxyXG4gICAgXHJcbiAgICBjb25zdCB0ZXN0RGF0YSA9IHtcclxuICAgICAgICBsYWJlbHM6IFtcclxuICAgICAgICAgICAgJ01pbnV0ZXMgUGxheWVkJywgXHJcbiAgICAgICAgICAgICdUZWFtIFBvc3Nlc3Npb24gUGVyY2VudGFnZScsIFxyXG4gICAgICAgICAgICAnWGcnLFxyXG4gICAgICAgICAgICAnU2hvdHMnLCBcclxuICAgICAgICAgICAgJ0dvYWxzJywgXHJcbiAgICAgICAgICAgICdUYWNrbGVzJywgXHJcbiAgICAgICAgICAgICdJbnRlcmNlcHRpb25zJyxcclxuICAgICAgICAgICAgJ1ByZXNzdXJlcycsXHJcbiAgICAgICAgICAgICdQYXNzZXMnLFxyXG4gICAgICAgICAgICAnQ29tcGxldGVkIFBhc3NlcycsXHJcbiAgICAgICAgICAgICdMZWZ0IEZvb3QgUGFzc2VzJyxcclxuICAgICAgICAgICAgJ1JpZ2h0IEZvb3QgUGFzc2VzJyxcclxuICAgICAgICAgICAgJ1BsYXllciBTaG90cyBGYWNlZCcsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnUGxheWVyIFN0YXRzJyxcclxuICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgUGxheWVyPy5zdGF0Lm1pbnV0ZXNfcGxheWVkLCBcclxuICAgICAgICAgICAgICAgIFBsYXllcj8uc3RhdC50ZWFtX3Bvc3Nlc3Npb25fcGVyY2VudGFnZSxcclxuICAgICAgICAgICAgICAgIFBsYXllcj8uc3RhdC54ZywgXHJcbiAgICAgICAgICAgICAgICBQbGF5ZXI/LnN0YXQuc2hvdHMsIFxyXG4gICAgICAgICAgICAgICAgUGxheWVyPy5zdGF0LmdvYWxzLCBcclxuICAgICAgICAgICAgICAgIFBsYXllcj8uc3RhdC50YWNrbGVzLCBcclxuICAgICAgICAgICAgICAgIFBsYXllcj8uc3RhdC5pbnRlcmNlcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgUGxheWVyPy5zdGF0LnByZXNzdXJlcyxcclxuICAgICAgICAgICAgICAgIFBsYXllcj8uc3RhdC5wYXNzZXMsXHJcbiAgICAgICAgICAgICAgICBQbGF5ZXI/LnN0YXQuY29tcGxldGVkX3Bhc3NlcyxcclxuICAgICAgICAgICAgICAgIFBsYXllcj8uc3RhdC5sZWZ0X2Zvb3RfcGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgUGxheWVyPy5zdGF0LnJpZ2h0X2Zvb3RfcGFzc2VzLFxyXG4gICAgICAgICAgICAgICAgUGxheWVyPy5zdGF0LnBsYXllcl9zaG90c19mYWNlZCxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM5ZmRhMzQnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyM5ZmRhMzQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9O1xyXG4gICAgICBcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgIHlBeGVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2luZ2xlSXRlbVN0eWxlcz5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Rm9vdHkgR3JlZW4gUG93ZXJlZCBieSBTdGF0cyBCb21iIC0ge1BsYXllci5uYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtQbGF5ZXI/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9IFxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17UGxheWVyLnBsYXllcl9uYW1lfSBcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e1BsYXllci5wbGF5ZXJfbmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk5hdGlvbmFsaXR5OiB7UGxheWVyLmNvdW50cnlfbmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TWludXRlcyBQbGF5ZWQ6IHtQbGF5ZXIuc3RhdC5taW51dGVzX3BsYXllZCA9PT0gbnVsbCA/IFBsYXllci5zdGF0Lm1pbnV0ZXNfcGxheWVkIDogJ04vQSd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlRlYW0gUG9zc2Vzc2lvbiBQZXJjZW50YWdlOiB7UGxheWVyLnN0YXQudGVhbV9wb3NzZXNzaW9uX3BlcmNlbnRhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlhnOiB7UGxheWVyLnN0YXQueGcgPT09ICcnID8gUGxheWVyLnN0YXQueGcgOiAnTi9BJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U2hvdHM6IHtQbGF5ZXIuc3RhdC5zaG90c308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+R29hbHM6IHtQbGF5ZXIuc3RhdC5nb2Fsc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VGFja2xlczoge1BsYXllci5zdGF0LnRhY2tsZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkludGVyY2VwdGlvbnM6IHtQbGF5ZXIuc3RhdC5pbnRlcmNlcHRpb25zfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5QcmVzc3VyZXM6IHtQbGF5ZXIuc3RhdC5wcmVzc3VyZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlBhc3Nlczoge1BsYXllci5zdGF0LnBhc3Nlc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q29tcGxldGVkIFBhc3Nlczoge1BsYXllci5zdGF0LmNvbXBsZXRlZF9wYXNzZXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkxlZnQgRm9vdCBQYXNzZXM6IHtQbGF5ZXIuc3RhdC5sZWZ0X2Zvb3RfcGFzc2VzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5SaWdodCBGb290IFBhc3Nlczoge1BsYXllci5zdGF0LnJpZ2h0X2Zvb3RfcGFzc2VzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5QbGF5ZXIgU2hvdHMgRmFjZWQ6IHtQbGF5ZXIuc3RhdC5wbGF5ZXJfc2hvdHNfZmFjZWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJhciBkYXRhPXt0ZXN0RGF0YX0gb3B0aW9ucz17b3B0aW9uc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TaW5nbGVJdGVtU3R5bGVzPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU2luZ2xlSXRlbVN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcblx0Lml0ZW0tZGV0YWlsc3tcclxuXHRcdG1hcmdpbjogMnJlbSBhdXRvO1xyXG5cdFx0ZGlzcGxheTogZ3JpZDtcclxuXHRcdGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XHJcblx0XHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG5cdFx0bWluLWhlaWdodDogODAwcHg7XHJcblx0XHRpbWd7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRoZWlnaHQ6IGF1dG87XHJcbiAgICBcdFx0b2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIFx0Ly8gXHRcdG1heC13aWR0aDogMTMwMCU7XHJcblx0XHQvLyAgIFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblx0XHRcclxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIFx0XHRcdGhlaWdodDogYXV0bztcclxuICAgIFx0XHR9XHJcblx0XHR9XHJcblx0IFx0XHJcblx0IFx0Ly8gaW1nOmhvdmVyIHtcclxuXHRcdC8vICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG5cdFx0Ly8gfVxyXG5cclxuXHJcblxyXG5cdFx0LmNhcm91c2VsLWl0ZW0gaW1nW3NyYz1cIlwiXSB7XHJcblx0XHQgIFx0ZGlzcGxheTpub25lO1xyXG5cclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBcdFx0Z3JpZC1hdXRvLWZsb3c6IHVuc2V0O1xyXG4gICAgXHR9XHJcblx0fVxyXG5cclxuXHQuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBcdGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHRcdC5jYXJvdXNlbCBpbWcge1xyXG5cdFx0ICAgIHdpZHRoOiAyMjAlO1xyXG5cdFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdCAgICBsZWZ0OiAwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC5jYXJvdXNlbC1pdGVtIHtcclxuXHRcdCAgICBoZWlnaHQ6IGF1dG87XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubmF2LWxpbmsge1xyXG4gICAgXHRkaXNwbGF5OiBibG9jaztcclxuICAgIFx0cGFkZGluZzogMDtcclxuICAgIFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxuXHJcblx0LmRldGFpbHN7XHJcblx0XHRtYXJnaW46IDNyZW07XHJcblx0XHRmb250LXNpemU6IDJyZW07XHJcblx0XHRoMntcclxuXHRcdFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmF2eUJsdWV9O1xyXG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdH1cclxuXHRcdHB7XHJcblx0XHRcdGZvbnQtc2l6ZTogMS4xcmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBcdFx0bWFyZ2luOiAwO1xyXG4gICAgXHR9XHJcblxyXG4gICAgXHQuZHYtc3Rhci1yYXRpbmcge1xyXG5cdCAgICBcdGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG5cdCAgICBcdGZsb2F0OiBsZWZ0O1xyXG5cclxuXHQgICAgXHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHQgICAgICBcdFx0ZmxvYXQ6IG5vbmU7XHJcblx0ICAgIFx0fVxyXG5cclxuXHQgICAgXHQuZHYtc3Rhci1yYXRpbmctc3RhciB7XHJcblx0ICAgIFx0XHRAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHQgICAgICBcdFx0XHRmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG5cdCAgICBcdFx0fVxyXG5cdCAgXHRcdH1cclxuXHQgIFx0fVxyXG5cclxuXHQgIFx0LnN0YXItcmVzdWx0IHtcclxuXHQgIFx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHQgIFx0fVxyXG5cdH1cclxuXHJcblx0YnV0dG9uLnJlYWN0LXNsaWRlcl9fYnRuTmV4dCB7XHJcblx0XHRtYXJnaW46IDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdGJ1dHRvbi5yZWFjdC1zbGlkZXJfX2J0blByZXYge1xyXG5cdFx0bWFyZ2luOiAyMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQucmVhY3Qtc2xpZGVyX19pbWdab29tIHtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogMjQ5MHB4IGF1dG8gIWltcG9ydGFudDtcclxuXHRcdGhlaWdodDogNjQ3cHg7XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlSXRlbVN0eWxlczsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhbW91bnQgPSAwKSB7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgICAgY3VycmVuY3k6ICdHQlAnLFxyXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICB9O1xyXG4gICAgLy8gaWYgaXRzIGEgd2hvbGUsIHBvdW5kIGFtb3VudCwgbGVhdmUgb2ZmIHRoZSAuMDBcclxuICAgIGlmIChhbW91bnQgJSAxMDAgPT09IDApIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcclxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tR0InLCBvcHRpb25zKTtcclxuICAgIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XHJcbiAgfSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgU2luZ2xlUGxheWVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2luZ2xlUGxheWVyJztcclxuXHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxuXHRtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWF4V2lkdGh9O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdHBhZGRpbmc6IDJyZW07XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlUGxheWVyUGFnZSh7IHF1ZXJ5IH0pIHtcclxuICAgIHJldHVybiA8SW5uZXI+XHJcbiAgICAgICAgPFNpbmdsZVBsYXllciBpZD17cXVlcnkuaWR9IC8+XHJcbiAgICA8L0lubmVyPjtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNoYXJ0anMtMlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==