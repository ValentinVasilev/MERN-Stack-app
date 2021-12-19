(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/HeadTags.js":
/*!***************************************!*\
  !*** ./components/Layout/HeadTags.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\components\\Layout\\HeadTags.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const HeadTags = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}), __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.png",
  sizes: "16*16",
  type: "image/png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/listMessages.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/styles.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/nprogress.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}, "Mini Social Media")));

/* harmony default export */ __webpack_exports__["default"] = (HeadTags);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadTags */ "./components/Layout/HeadTags.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\components\\Layout\\Layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function Layout({
  children
}) {
  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_HeadTags__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    style: {
      paddingTop: "1rem"
    },
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\components\\Layout\\Navbar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const isActive = route => router.pathname === route;

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    fluid: true,
    borderless: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/login"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "sign in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), "Login")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/signup"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), "Signup"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\pages\\_app.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {
  static async getInitialProps(appContext) {
    //Component is the Active page.
    const {
      Component,
      ctx
    } = appContext;
    let getPageProps = {};

    if (Component.getInitialProps) {
      getPageProps = await Component.getInitialProps(ctx);
    }

    return {
      getPageProps
    };
  }

  render() {
    const {
      Component,
      getPageProps
    } = this.props;
    return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__.default, _extends({}, getPageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }), __jsx(Component, _extends({}, getPageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_app_js-node_modules_semantic-ui-css_semantic_min_css-node_modules_n-d06b18"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9IZWFkVGFncy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxEOlxcR2l0SHViUmVwb3NpdG9yaWVzXFxNRVJOLVN0YWNrLVJlYWN0LVVkZW15LUNvdXJzZVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkhlYWRUYWdzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJSb3V0ZXIiLCJuUHJvZ3Jlc3MiLCJwYWRkaW5nVG9wIiwiTmF2YmFyIiwicm91dGVyIiwidXNlUm91dGVyIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInBhdGhuYW1lIiwiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiQ29tcG9uZW50IiwiY3R4IiwiZ2V0UGFnZVByb3BzIiwicmVuZGVyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxNQUNmLHFFQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQU0sTUFBSSxFQUFDLFVBQVg7QUFBc0IsU0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsRUFFRTtBQUFNLFNBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFO0FBQU0sS0FBRyxFQUFDLE1BQVY7QUFBaUIsTUFBSSxFQUFDLGNBQXRCO0FBQXFDLE9BQUssRUFBQyxPQUEzQztBQUFtRCxNQUFJLEVBQUMsV0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUhGLEVBS0U7QUFBTSxLQUFHLEVBQUMsWUFBVjtBQUF1QixNQUFJLEVBQUMsVUFBNUI7QUFBdUMsTUFBSSxFQUFDLG1CQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTEYsRUFPRTtBQUFNLEtBQUcsRUFBQyxZQUFW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Q3ZDO0FBQ0EsVUFBTTtBQUFFQyxlQUFGO0FBQWFDO0FBQWIsUUFBcUJGLFVBQTNCO0FBRUEsUUFBSUcsWUFBWSxHQUFHLEVBQW5COztBQUVBLFFBQUlGLFNBQVMsQ0FBQ0YsZUFBZCxFQUErQjtBQUM3Qkksa0JBQVksR0FBRyxNQUFNRixTQUFTLENBQUNGLGVBQVYsQ0FBMEJHLEdBQTFCLENBQXJCO0FBQ0Q7O0FBRUQsV0FBTztBQUFFQztBQUFGLEtBQVA7QUFDRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFSCxlQUFGO0FBQWFFO0FBQWIsUUFBOEIsS0FBS0UsS0FBekM7QUFFQSxXQUNFLE1BQUMsOERBQUQsZUFBWUYsWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0UsTUFBQyxTQUFELGVBQWVBLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGLENBREY7QUFLRDs7QUF0QnFCOztBQXlCeEIsK0RBQWVOLEtBQWYsRTs7Ozs7Ozs7Ozs7QUM3QkEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5jb25zdCBIZWFkVGFncyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPG1ldGEgY2hhclNldD1cIlVURi04XCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjE2KjE2XCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcblxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9saXN0TWVzc2FnZXMuY3NzXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0eWxlcy5jc3NcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cclxuXHJcbiAgICAgIDx0aXRsZT5NaW5pIFNvY2lhbCBNZWRpYTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgPC8+XHJcbik7XHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRUYWdzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkVGFncyBmcm9tIFwiLi9IZWFkVGFnc1wiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IG5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IG5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBuUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBuUHJvZ3Jlc3MuZG9uZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRUYWdzIC8+XHJcblxyXG4gICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMXJlbVwiIH19IHRleHQ+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51LCBDb250YWluZXIsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGlzQWN0aXZlID0gKHJvdXRlKSA9PiByb3V0ZXIucGF0aG5hbWUgPT09IHJvdXRlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnUgZmx1aWQgYm9yZGVybGVzcz5cclxuICAgICAgPENvbnRhaW5lciB0ZXh0PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyIGFjdGl2ZT17aXNBY3RpdmUoXCIvbG9naW5cIil9PlxyXG4gICAgICAgICAgICA8SWNvbiBzaXplPVwibGFyZ2VcIiBuYW1lPVwic2lnbiBpblwiIC8+XHJcbiAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyIGFjdGl2ZT17aXNBY3RpdmUoXCIvc2lnbnVwXCIpfT5cclxuICAgICAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ251cFwiIC8+XHJcbiAgICAgICAgICAgIFNpZ251cFxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCkge1xyXG4gICAgLy9Db21wb25lbnQgaXMgdGhlIEFjdGl2ZSBwYWdlLlxyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIGN0eCB9ID0gYXBwQ29udGV4dDtcclxuXHJcbiAgICBsZXQgZ2V0UGFnZVByb3BzID0ge307XHJcblxyXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgZ2V0UGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGdldFBhZ2VQcm9wcyB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBDb21wb25lbnQsIGdldFBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHsuLi5nZXRQYWdlUHJvcHN9PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLmdldFBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==