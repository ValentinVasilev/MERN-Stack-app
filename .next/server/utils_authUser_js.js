exports.id = "utils_authUser_js";
exports.ids = ["utils_authUser_js"];
exports.modules = {

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; },
/* harmony export */   "logoutUser": function() { return /* binding */ logoutUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(location);
  }
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

const logoutUser = email => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("userEmail", email);
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("token");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/login");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().reload();
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg;

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEQ6XFxHaXRIdWJSZXBvc2l0b3JpZXNcXE1FUk4tU3RhY2stUmVhY3QtVWRlbXktQ291cnNlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsicmVnaXN0ZXJVc2VyIiwidXNlciIsInByb2ZpbGVQaWNVcmwiLCJzZXRFcnJvciIsInNldExvYWRpbmciLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJzZXRUb2tlbiIsImRhdGEiLCJlcnJvciIsImVycm9yTXNnIiwiY2F0Y2hFcnJvcnMiLCJsb2dpblVzZXIiLCJyZWRpcmVjdFVzZXIiLCJjdHgiLCJsb2NhdGlvbiIsInJlcSIsIndyaXRlSGVhZCIsIkxvY2F0aW9uIiwiZW5kIiwiUm91dGVyIiwidG9rZW4iLCJjb29raWUiLCJsb2dvdXRVc2VyIiwiZW1haWwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsWUFBWSxHQUFHLE9BQU9DLElBQVAsRUFBYUMsYUFBYixFQUE0QkMsUUFBNUIsRUFBc0NDLFVBQXRDLEtBQXFEO0FBQy9FLE1BQUk7QUFDRixVQUFNQyxHQUFHLEdBQUcsTUFBTUMsaURBQUEsQ0FBWSxHQUFFQyw2Q0FBUSxhQUF0QixFQUFvQztBQUFFTixVQUFGO0FBQVFDO0FBQVIsS0FBcEMsQ0FBbEI7QUFFQU0sWUFBUSxDQUFDSCxHQUFHLENBQUNJLElBQUwsQ0FBUjtBQUNELEdBSkQsQ0FJRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxVQUFNQyxRQUFRLEdBQUdDLHFEQUFXLENBQUNGLEtBQUQsQ0FBNUI7QUFDQVAsWUFBUSxDQUFDUSxRQUFELENBQVI7QUFDRDs7QUFDRFAsWUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELENBVk07QUFZQSxNQUFNUyxTQUFTLEdBQUcsT0FBT1osSUFBUCxFQUFhRSxRQUFiLEVBQXVCQyxVQUF2QixLQUFzQztBQUM3REEsWUFBVSxDQUFDLElBQUQsQ0FBVjs7QUFDQSxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLGlEQUFBLENBQVksR0FBRUMsNkNBQVEsV0FBdEIsRUFBa0M7QUFBRU47QUFBRixLQUFsQyxDQUFsQjtBQUVBTyxZQUFRLENBQUNILEdBQUcsQ0FBQ0ksSUFBTCxDQUFSO0FBQ0QsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNkLFVBQU1DLFFBQVEsR0FBR0MscURBQVcsQ0FBQ0YsS0FBRCxDQUE1QjtBQUNBUCxZQUFRLENBQUNRLFFBQUQsQ0FBUjtBQUNEOztBQUNEUCxZQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsQ0FYTTtBQWFBLE1BQU1VLFlBQVksR0FBRyxDQUFDQyxHQUFELEVBQU1DLFFBQU4sS0FBbUI7QUFDN0MsTUFBSUQsR0FBRyxDQUFDRSxHQUFSLEVBQWE7QUFDWEYsT0FBRyxDQUFDVixHQUFKLENBQVFhLFNBQVIsQ0FBa0IsR0FBbEIsRUFBdUI7QUFBRUMsY0FBUSxFQUFFSDtBQUFaLEtBQXZCO0FBQ0FELE9BQUcsQ0FBQ1YsR0FBSixDQUFRZSxHQUFSO0FBQ0QsR0FIRCxNQUdPO0FBQ0xDLDJEQUFBLENBQVlMLFFBQVo7QUFDRDtBQUNGLENBUE07O0FBU1AsTUFBTVIsUUFBUSxHQUFHYyxLQUFLLElBQUk7QUFDeEJDLHNEQUFBLENBQVcsT0FBWCxFQUFvQkQsS0FBcEI7QUFDQUQseURBQUEsQ0FBWSxHQUFaO0FBQ0QsQ0FIRDs7QUFLTyxNQUFNRyxVQUFVLEdBQUdDLEtBQUssSUFBSTtBQUNqQ0Ysc0RBQUEsQ0FBVyxXQUFYLEVBQXdCRSxLQUF4QjtBQUNBRix5REFBQSxDQUFjLE9BQWQ7QUFDQUYseURBQUEsQ0FBWSxRQUFaO0FBQ0FBLDJEQUFBO0FBQ0QsQ0FMTSxDOzs7Ozs7Ozs7Ozs7QUM3Q1AsTUFBTWQsT0FBTyxHQUFFLHVCQUFmO0FBRUEsK0RBQWVBLE9BQWYsRTs7Ozs7Ozs7Ozs7O0FDRkEsTUFBTUssV0FBVyxHQUFHRixLQUFLLElBQUk7QUFDM0IsTUFBSUMsUUFBSjs7QUFFQSxNQUFJRCxLQUFLLENBQUNnQixRQUFWLEVBQW9CO0FBQ2xCO0FBRUFmLFlBQVEsR0FBR0QsS0FBSyxDQUFDZ0IsUUFBTixDQUFlakIsSUFBMUI7QUFFQWtCLFdBQU8sQ0FBQ2pCLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTkQsTUFNTyxJQUFJRCxLQUFLLENBQUNrQixPQUFWLEVBQW1CO0FBQ3hCO0FBQ0FqQixZQUFRLEdBQUdELEtBQUssQ0FBQ2tCLE9BQWpCO0FBRUFELFdBQU8sQ0FBQ2pCLEtBQVIsQ0FBY0MsUUFBZDtBQUNELEdBTE0sTUFLQTtBQUNMO0FBQ0FBLFlBQVEsR0FBR0QsS0FBSyxDQUFDbUIsT0FBakI7QUFFQUYsV0FBTyxDQUFDakIsS0FBUixDQUFjQyxRQUFkO0FBQ0Q7O0FBQ0QsU0FBT0EsUUFBUDtBQUNELENBckJEOztBQXVCQSwrREFBZUMsV0FBZixFOzs7Ozs7Ozs7O0FDdkJBLGUiLCJmaWxlIjoidXRpbHNfYXV0aFVzZXJfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jICh1c2VyLCBwcm9maWxlUGljVXJsLCBzZXRFcnJvciwgc2V0TG9hZGluZykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke2Jhc2VVcmx9L2FwaS9zaWdudXBgLCB7IHVzZXIsIHByb2ZpbGVQaWNVcmwgfSk7XHJcblxyXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKHVzZXIsIHNldEVycm9yLCBzZXRMb2FkaW5nKSA9PiB7XHJcbiAgc2V0TG9hZGluZyh0cnVlKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvYXV0aGAsIHsgdXNlciB9KTtcclxuXHJcbiAgICBzZXRUb2tlbihyZXMuZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuICBzZXRMb2FkaW5nKGZhbHNlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWRpcmVjdFVzZXIgPSAoY3R4LCBsb2NhdGlvbikgPT4ge1xyXG4gIGlmIChjdHgucmVxKSB7XHJcbiAgICBjdHgucmVzLndyaXRlSGVhZCgzMDIsIHsgTG9jYXRpb246IGxvY2F0aW9uIH0pO1xyXG4gICAgY3R4LnJlcy5lbmQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgUm91dGVyLnB1c2gobG9jYXRpb24pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNldFRva2VuID0gdG9rZW4gPT4ge1xyXG4gIGNvb2tpZS5zZXQoXCJ0b2tlblwiLCB0b2tlbik7XHJcbiAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSBlbWFpbCA9PiB7XHJcbiAgY29va2llLnNldChcInVzZXJFbWFpbFwiLCBlbWFpbCk7XHJcbiAgY29va2llLnJlbW92ZShcInRva2VuXCIpO1xyXG4gIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gIFJvdXRlci5yZWxvYWQoKTtcclxufTtcclxuIiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XHJcbiIsImNvbnN0IGNhdGNoRXJyb3JzID0gZXJyb3IgPT4ge1xyXG4gIGxldCBlcnJvck1zZztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=