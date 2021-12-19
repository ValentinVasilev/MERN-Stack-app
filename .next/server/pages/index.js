(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Index({
  user,
  userFollowStats
}) {
  console.log(user), userFollowStats;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 10
    }
  });
} // Here we get posts and pass them as a Chield on the Index page.


Index.getInitialProps = async ctx => {
  try {
    const res = axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://jsonplaceholder.typicode.com/posts");
    const {
      name
    } = ctx.query;
    console.log(name);
    return {
      posts: (await res).data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VyIiwidXNlckZvbGxvd1N0YXRzIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsImF4aW9zIiwibmFtZSIsInF1ZXJ5IiwicG9zdHMiLCJkYXRhIiwiZXJyb3IiLCJlcnJvckxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsTUFBRjtBQUFRQztBQUFSLENBQWYsRUFBMEM7QUFDeENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaLEdBQW1CQyxlQUFuQjtBQUNBLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQyxDQUVEOzs7QUFDQUYsS0FBSyxDQUFDSyxlQUFOLEdBQXdCLE1BQU9DLEdBQVAsSUFBZTtBQUNyQyxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFHQyxnREFBQSxDQUFVLDRDQUFWLENBQVo7QUFFQSxVQUFNO0FBQUVDO0FBQUYsUUFBV0gsR0FBRyxDQUFDSSxLQUFyQjtBQUNBUCxXQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFBWjtBQUVBLFdBQU87QUFDTEUsV0FBSyxFQUFFLENBQUMsTUFBTUosR0FBUCxFQUFZSztBQURkLEtBQVA7QUFHRCxHQVRELENBU0UsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsV0FBTztBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBQVA7QUFDRDtBQUNGLENBYkQ7O0FBZUEsK0RBQWVkLEtBQWYsRTs7Ozs7Ozs7Ozs7QUN4QkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHsgdXNlciwgdXNlckZvbGxvd1N0YXRzIH0pIHtcclxuICBjb25zb2xlLmxvZyh1c2VyKSwgdXNlckZvbGxvd1N0YXRzO1xyXG4gIHJldHVybiA8ZGl2PjwvZGl2PjtcclxufVxyXG5cclxuLy8gSGVyZSB3ZSBnZXQgcG9zdHMgYW5kIHBhc3MgdGhlbSBhcyBhIENoaWVsZCBvbiB0aGUgSW5kZXggcGFnZS5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBheGlvcy5nZXQoXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XHJcblxyXG4gICAgY29uc3QgeyBuYW1lIH0gPSBjdHgucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3N0czogKGF3YWl0IHJlcykuZGF0YSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=