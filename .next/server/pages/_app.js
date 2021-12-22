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
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideMenu */ "./components/Layout/SideMenu.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ "./components/Layout/Search.js");
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\components\\Layout\\Layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function Layout({
  children,
  user
}) {
  const contextRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_HeadTags__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), user ? __jsx("div", {
    style: {
      marginLeft: "1rem",
      marginRight: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Ref, {
    innerRef: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    floated: "left",
    width: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Sticky, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_SideMenu__WEBPACK_IMPORTED_MODULE_6__.default, {
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Visibility, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, children)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    floated: "left",
    width: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Sticky, {
    context: contextRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, __jsx(_Search__WEBPACK_IMPORTED_MODULE_7__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }))))))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    text: true,
    style: {
      paddingTop: "1rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, children)));
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
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    text: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/login"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "sign in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), "Login")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/signup"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "signup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), "Signup"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/Search.js":
/*!*************************************!*\
  !*** ./components/Layout/Search.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\components\\Layout\\Search.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






let cancel;

function SearchComponent() {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const handleChange = async e => {
    const {
      value
    } = e.target;
    setText(value);
    setLoading(true);
    if (value.length === 0) return; //trim will remove white spaces.

    if (value.trim().length === 0) return;

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_2___default().CancelToken);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token");
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (res.data.length === 0) return setLoading(false);
      setResults(res.data);
    } catch (error) {
      console.log("Error Searching");
    }

    setLoading(false);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Search, {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/${data.result.username}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  });
}

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: profilePicUrl,
    alt: "ProfilePic",
    avatar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    header: name,
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchComponent);

/***/ }),

/***/ "./components/Layout/SideMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/SideMenu.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/authUser */ "./utils/authUser.js");
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\components\\Layout\\SideMenu.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






function SideMenu({
  user: {
    unreadNotification,
    email,
    unreadMessage,
    username
  }
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const isActive = route => router.pathname === route;

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    style: {
      paddingTop: "1rem"
    },
    size: "big",
    verticalAlign: "middle",
    selection: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive("/"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "home",
    size: "large",
    color: isActive("/") && "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  })))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/messages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive("/messages"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: unreadMessage ? "hand point right" : "mail outline",
    size: "large",
    color: isActive("/messages") && "teal" || unreadMessage && "orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Messages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  })))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/notifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive("/notifications"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: unreadNotification ? "hand point right" : "bell outline",
    size: "large",
    color: isActive("/notifications") && "teal" || unreadNotification && "orange",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Notifications",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  })))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/${username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: router.query.username === username,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "user",
    size: "large",
    color: router.query.username === username && "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  })))), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    onClick: () => (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.logoutUser)(email),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "log out",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Logout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\pages\\_app.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {
  //Component is the Active page.
  static async getInitialProps({
    Component,
    ctx
  }) {
    // Check if there is a token
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_3__.parseCookies)(ctx);
    let pageProps = {};
    const protectedRoutes = ctx.pathname === "/"; // If there is no User, that means the User is not loggedin.

    if (!token) {
      // If the User tries to navigate to protect routes and he is not Sinedin, we redirect him to Home page
      protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/login");
    } else {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_4__.default}/api/auth`, {
          headers: {
            Authorization: token
          }
        });
        const {
          user,
          userFollowStats
        } = res.data;
        if (user) !protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/");
        pageProps.user = user;
        pageProps.userFollowStats = userFollowStats;
      } catch (error) {
        (0,nookies__WEBPACK_IMPORTED_MODULE_3__.destroyCookie)(ctx, "token");
        (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_5__.redirectUser)(ctx, "/login");
      }
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__.default, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }), __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

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

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js-node_modules_react-toastify_dist_ReactToastify_css-node_modu-b86d49","utils_authUser_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9IZWFkVGFncy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L1NlYXJjaC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9TaWRlTWVudS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZFRhZ3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJjb250ZXh0UmVmIiwiY3JlYXRlUmVmIiwiUm91dGVyIiwibnByb2dyZXNzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsIk5hdmJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzQWN0aXZlIiwicm91dGUiLCJwYXRobmFtZSIsImNhbmNlbCIsIlNlYXJjaENvbXBvbmVudCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwibGVuZ3RoIiwidHJpbSIsIkNhbmNlbFRva2VuIiwiYXhpb3MiLCJ0b2tlbiIsImNvb2tpZSIsInJlcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVzdWx0UmVuZGVyZXIiLCJyZXN1bHQiLCJ1c2VybmFtZSIsIl9pZCIsInByb2ZpbGVQaWNVcmwiLCJuYW1lIiwiU2lkZU1lbnUiLCJ1bnJlYWROb3RpZmljYXRpb24iLCJlbWFpbCIsInVucmVhZE1lc3NhZ2UiLCJxdWVyeSIsImxvZ291dFVzZXIiLCJNeUFwcCIsIkFwcCIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCIsImN0eCIsInBhcnNlQ29va2llcyIsInBhZ2VQcm9wcyIsInByb3RlY3RlZFJvdXRlcyIsInJlZGlyZWN0VXNlciIsInVzZXJGb2xsb3dTdGF0cyIsImRlc3Ryb3lDb29raWUiLCJyZW5kZXIiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLE1BQ2YscUVBQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBTSxNQUFJLEVBQUMsVUFBWDtBQUFzQixTQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQU0sU0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZGLEVBR0U7QUFBTSxLQUFHLEVBQUMsTUFBVjtBQUFpQixNQUFJLEVBQUMsY0FBdEI7QUFBcUMsT0FBSyxFQUFDLE9BQTNDO0FBQW1ELE1BQUksRUFBQyxXQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSEYsRUFLRTtBQUFNLEtBQUcsRUFBQyxZQUFWO0FBQXVCLE1BQUksRUFBQyxVQUE1QjtBQUF1QyxNQUFJLEVBQUMsbUJBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFMRixFQU9FO0FBQU0sS0FBRyxFQUFDLFlBQVY7QUFBdUIsTUFBSSxFQUFDLFVBQTVCO0FBQXVDLE1BQUksRUFBQyxhQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUEYsRUFRRTtBQUFNLEtBQUcsRUFBQyxZQUFWO0FBQXVCLE1BQUksRUFBQyxVQUE1QjtBQUF1QyxNQUFJLEVBQUMsZ0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFSRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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XCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IEhlYWRUYWdzID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIHNpemVzPVwiMTYqMTZcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL2xpc3RNZXNzYWdlcy5jc3NcIiAvPlxyXG5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3R5bGVzLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL25wcm9ncmVzcy5jc3NcIiAvPlxyXG5cclxuICAgICAgPHRpdGxlPk1pbmkgU29jaWFsIE1lZGlhPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICA8Lz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZFRhZ3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUYWdzIGZyb20gXCIuL0hlYWRUYWdzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIFZpc2liaWxpdHksXHJcbiAgR3JpZCxcclxuICBTdGlja3ksXHJcbiAgUmVmLFxyXG4gIERpdmlkZXIsXHJcbiAgU2VnbWVudFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgbnByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNpZGVNZW51IGZyb20gXCIuL1NpZGVNZW51XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vU2VhcmNoXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgdXNlciB9KSB7XHJcbiAgY29uc3QgY29udGV4dFJlZiA9IGNyZWF0ZVJlZigpO1xyXG5cclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4gbnByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IG5wcm9ncmVzcy5kb25lKCk7XHJcbiAgUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IG5wcm9ncmVzcy5kb25lKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZFRhZ3MgLz5cclxuICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjFyZW1cIiwgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgPFJlZiBpbm5lclJlZj17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXsyfT5cclxuICAgICAgICAgICAgICAgIDxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgIDxTaWRlTWVudSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGlja3k+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XHJcbiAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eSBjb250ZXh0PXtjb250ZXh0UmVmfT57Y2hpbGRyZW59PC9WaXNpYmlsaXR5PlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcblxyXG4gICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXs0fT5cclxuICAgICAgICAgICAgICAgIDxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGJhc2ljPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9TdGlja3k+XHJcbiAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9SZWY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgdGV4dCBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSwgQ29udGFpbmVyLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlID0gcm91dGUgPT4gcm91dGVyLnBhdGhuYW1lID09PSByb3V0ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IGZsdWlkIGJvcmRlcmxlc3M+XHJcbiAgICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGhlYWRlciBhY3RpdmU9e2lzQWN0aXZlKFwiL2xvZ2luXCIpfT5cclxuICAgICAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ24gaW5cIiAvPlxyXG4gICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZShcIi9zaWdudXBcIil9PlxyXG4gICAgICAgICAgICA8SWNvbiBzaXplPVwibGFyZ2VcIiBuYW1lPVwic2lnbnVwXCIgLz5cclxuICAgICAgICAgICAgU2lnbnVwXHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9NZW51PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpc3QsIEltYWdlLCBTZWFyY2ggfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uLy4uL3V0aWxzL2Jhc2VVcmxcIjtcclxubGV0IGNhbmNlbDtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaENvbXBvbmVudCgpIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRUZXh0KHZhbHVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIC8vdHJpbSB3aWxsIHJlbW92ZSB3aGl0ZSBzcGFjZXMuXHJcbiAgICBpZiAodmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zZWFyY2gvJHt2YWx1ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oKGNhbmNlbGVyKSA9PiB7XHJcbiAgICAgICAgICBjYW5jZWwgPSBjYW5jZWxlcjtcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICBzZXRSZXN1bHRzKHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgU2VhcmNoaW5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoXHJcbiAgICAgIG9uQmx1cj17KCkgPT4ge1xyXG4gICAgICAgIHJlc3VsdHMubGVuZ3RoID4gMCAmJiBzZXRSZXN1bHRzKFtdKTtcclxuICAgICAgICBsb2FkaW5nICYmIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFRleHQoXCJcIik7XHJcbiAgICAgIH19XHJcbiAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XHJcbiAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICByZXN1bHRSZW5kZXJlcj17UmVzdWx0UmVuZGVyZXJ9XHJcbiAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XHJcbiAgICAgIG9uU2VhcmNoQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIG1pbkNoYXJhY3RlcnM9ezF9XHJcbiAgICAgIG9uUmVzdWx0U2VsZWN0PXsoZSwgZGF0YSkgPT4gUm91dGVyLnB1c2goYC8ke2RhdGEucmVzdWx0LnVzZXJuYW1lfWApfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSZXN1bHRSZW5kZXJlciA9ICh7IF9pZCwgcHJvZmlsZVBpY1VybCwgbmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0IGtleT17X2lkfT5cclxuICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9maWxlUGljVXJsfSBhbHQ9XCJQcm9maWxlUGljXCIgYXZhdGFyIC8+XHJcbiAgICAgICAgPExpc3QuQ29udGVudCBoZWFkZXI9e25hbWV9IGFzPVwiYVwiIC8+XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgPC9MaXN0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hDb21wb25lbnQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBsb2dvdXRVc2VyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcblxyXG5mdW5jdGlvbiBTaWRlTWVudSh7IHVzZXI6IHsgdW5yZWFkTm90aWZpY2F0aW9uLCBlbWFpbCwgdW5yZWFkTWVzc2FnZSwgdXNlcm5hbWUgfSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlID0gcm91dGUgPT4gcm91dGVyLnBhdGhuYW1lID09PSByb3V0ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxcmVtXCIgfX1cclxuICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduPVwibWlkZGxlXCJcclxuICAgICAgICBzZWxlY3Rpb24+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9cIil9PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaG9tZVwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPXtpc0FjdGl2ZShcIi9cIikgJiYgXCJ0ZWFsXCJ9IC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKX0+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT17dW5yZWFkTWVzc2FnZSA/IFwiaGFuZCBwb2ludCByaWdodFwiIDogXCJtYWlsIG91dGxpbmVcIn1cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgICAgIChpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKSAmJiBcInRlYWxcIikgfHwgKHVucmVhZE1lc3NhZ2UgJiYgXCJvcmFuZ2VcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJNZXNzYWdlc1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9ub3RpZmljYXRpb25zXCIpfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPXt1bnJlYWROb3RpZmljYXRpb24gPyBcImhhbmQgcG9pbnQgcmlnaHRcIiA6IFwiYmVsbCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgICAgICAoaXNBY3RpdmUoXCIvbm90aWZpY2F0aW9uc1wiKSAmJiBcInRlYWxcIikgfHxcclxuICAgICAgICAgICAgICAgICh1bnJlYWROb3RpZmljYXRpb24gJiYgXCJvcmFuZ2VcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJOb3RpZmljYXRpb25zXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvJHt1c2VybmFtZX1gfT5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPVwidXNlclwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBjb2xvcj17cm91dGVyLnF1ZXJ5LnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiBcInRlYWxcIn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkFjY291bnRcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPExpc3QuSXRlbSBvbkNsaWNrPXsoKSA9PiBsb2dvdXRVc2VyKGVtYWlsKX0+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwibG9nIG91dFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkxvZ291dFwiIC8+XHJcbiAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XHJcbiIsImltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBkZXN0cm95Q29va2llIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcmVkaXJlY3RVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCI7XHJcbmltcG9ydCBcInNlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzXCI7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgLy9Db21wb25lbnQgaXMgdGhlIEFjdGl2ZSBwYWdlLlxyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHRva2VuXHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcclxuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuXHJcbiAgICBjb25zdCBwcm90ZWN0ZWRSb3V0ZXMgPSBjdHgucGF0aG5hbWUgPT09IFwiL1wiO1xyXG5cclxuICAgIC8vIElmIHRoZXJlIGlzIG5vIFVzZXIsIHRoYXQgbWVhbnMgdGhlIFVzZXIgaXMgbm90IGxvZ2dlZGluLlxyXG4gICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAvLyBJZiB0aGUgVXNlciB0cmllcyB0byBuYXZpZ2F0ZSB0byBwcm90ZWN0IHJvdXRlcyBhbmQgaGUgaXMgbm90IFNpbmVkaW4sIHdlIHJlZGlyZWN0IGhpbSB0byBIb21lIHBhZ2VcclxuICAgICAgcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsIFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgICAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9hdXRoYCwge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCB7IHVzZXIsIHVzZXJGb2xsb3dTdGF0cyB9ID0gcmVzLmRhdGE7XHJcblxyXG4gICAgICAgIGlmICh1c2VyKSAhcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihjdHgsIFwiL1wiKTtcclxuXHJcbiAgICAgICAgcGFnZVByb3BzLnVzZXIgPSB1c2VyO1xyXG4gICAgICAgIHBhZ2VQcm9wcy51c2VyRm9sbG93U3RhdHMgPSB1c2VyRm9sbG93U3RhdHM7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgZGVzdHJveUNvb2tpZShjdHgsIFwidG9rZW5cIik7XHJcbiAgICAgICAgcmVkaXJlY3RVc2VyKGN0eCwgXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB7Li4ucGFnZVByb3BzfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub29raWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=