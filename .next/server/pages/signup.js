(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\components\\Common\\CommonInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    youtube,
    twitter
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "bio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "Add Social Links",
    color: "red",
    icon: "at",
    type: "button",
    onClick: () => setShowSocialLinks(!showSocialLinks),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "Social Media Links Are Optional!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true); // Get the first image that user Droppded and asign it to SetMedia

      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? "green" : "",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }), "Drag n Drop or Click To Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
var _jsxFileName = "D:\\GitHubRepositories\\MERN-Stack-React-Udemy-Course\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

function Signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Here we create object with the values "name, email..."
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item) // with EVERY method, we check if every Item in the array has value
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_5___default().CancelToken);
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default}/api/signup/${username}`, {
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (errorMsg !== null) setErrorMsg(null);

      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
          username
        }));
      }
    } catch (error) {
      setErrorMsg("Username Not Available");
      setUsernameAvailable(false);
    }

    setUsernameLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    let profilePicUrl;

    if (media !== null) {
      profilePicUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__.default)(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg("Error Uploading Image");
    }

    await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__.registerUser)(user, profilePicUrl, setErrorMsg, setFormLoading);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__.default, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Name",
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Email",
    placeholder: "Email",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    label: "Password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? "text" : "password",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    loading: usernameLoading,
    error: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(false);
      }
    },
    fluid: true,
    icon: usernameAvailable ? "check" : "close",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "social_media_app"); // Name of the preset in Cloudinary

    form.append("cloud_name", "indersingh"); // Second parameter is the Cloud Name you use in the Cloudinary

    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("api.cloudinary.com/v1_1/dlu4nc0yv/image/upload", form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_authUser_js","components_Common_WelcomeMessage_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnkuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiQ29tbW9uSW5wdXRzIiwidXNlciIsImJpbyIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwieW91dHViZSIsInR3aXR0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJUZXh0QXJlYSIsIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJzb3IiLCJjdXJyZW50IiwiY2xpY2siLCJyZWdleFVzZXJOYW1lIiwiY2FuY2VsIiwiU2lnbnVwIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNoZWNrVXNlcm5hbWUiLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwicmVzIiwiYmFzZVVybCIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJwcm9maWxlUGljVXJsIiwidXBsb2FkUGljIiwicmVnaXN0ZXJVc2VyIiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInRlc3QiLCJmb3JtIiwiRm9ybURhdGEi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SUFBSUMsUUFBSixFQUFiO0FBQ0FELFFBQUksQ0FBQ0UsTUFBTCxDQUFZLE1BQVosRUFBb0I1QixLQUFwQjtBQUNBMEIsUUFBSSxDQUFDRSxNQUFMLENBQVksZUFBWixFQUE2QixrQkFBN0IsRUFIRSxDQUdnRDs7QUFDbERGLFFBQUksQ0FBQ0UsTUFBTCxDQUFZLFlBQVosRUFBMEIsWUFBMUIsRUFKRSxDQUl1Qzs7QUFFekMsVUFBTWhCLEdBQUcsR0FBRyxNQUFNRCxpREFBQSxDQUFXa0IsZ0RBQVgsRUFBdUNILElBQXZDLENBQWxCO0FBQ0EsV0FBT2QsR0FBRyxDQUFDSSxJQUFKLENBQVNjLEdBQWhCO0FBQ0QsR0FSRCxDQVFFLE9BQU9iLEtBQVAsRUFBYztBQUNkO0FBQ0Q7QUFDRixDQVpEOztBQWNBLCtEQUFlRyxTQUFmLEU7Ozs7Ozs7Ozs7O0FDaEJBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBUZXh0QXJlYSwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ29tbW9uSW5wdXRzKHtcclxuICB1c2VyOiB7IGJpbywgZmFjZWJvb2ssIGluc3RhZ3JhbSwgeW91dHViZSwgdHdpdHRlciB9LFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBzaG93U29jaWFsTGlua3MsXHJcbiAgc2V0U2hvd1NvY2lhbExpbmtzXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uRmllbGRcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIGNvbnRyb2w9e1RleHRBcmVhfVxyXG4gICAgICAgIG5hbWU9XCJiaW9cIlxyXG4gICAgICAgIHZhbHVlPXtiaW99XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImJpb1wiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29udGVudD1cIkFkZCBTb2NpYWwgTGlua3NcIlxyXG4gICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICBpY29uPVwiYXRcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTb2NpYWxMaW5rcyghc2hvd1NvY2lhbExpbmtzKX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHtzaG93U29jaWFsTGlua3MgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgaWNvbj1cImZhY2Vib29rIGZcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZhY2Vib29rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwidHdpdHRlclwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0d2l0dGVyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIlxyXG4gICAgICAgICAgICB2YWx1ZT17aW5zdGFncmFtfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICBpY29uPVwiYXR0ZW50aW9uXCJcclxuICAgICAgICAgICAgaW5mb1xyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBoZWFkZXI9XCJTb2NpYWwgTWVkaWEgTGlua3MgQXJlIE9wdGlvbmFsIVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uSW5wdXRzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQsIEltYWdlLCBJY29uLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlRHJvcERpdih7XHJcbiAgaGlnaGxpZ2h0ZWQsXHJcbiAgc2V0SGlnaGxpZ2h0ZWQsXHJcbiAgaW5wdXRSZWYsXHJcbiAgaGFuZGxlQ2hhbmdlLFxyXG4gIG1lZGlhUHJldmlldyxcclxuICBzZXRNZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWFcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRyb3A9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gR2V0IHRoZSBmaXJzdCBpbWFnZSB0aGF0IHVzZXIgRHJvcHBkZWQgYW5kIGFzaWduIGl0IHRvIFNldE1lZGlhXHJcbiAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHttZWRpYVByZXZpZXcgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPXtoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiXCJ9IHBsYWNlaG9sZGVyIGJhc2ljPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZyBuIERyb3Agb3IgQ2xpY2sgVG8gVXBsb2FkIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cImdyZWVuXCIgcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEcm9wRGl2O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgU2VnbWVudCwgRGl2aWRlciB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHNcIjtcclxuaW1wb3J0IEltYWdlRHJvcERpdiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2XCI7XHJcbmltcG9ydCB7IEhlYWRlck1lc3NhZ2UsIEZvb3Rlck1lc3NhZ2UgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFVzZXJcIjtcclxuaW1wb3J0IHVwbG9hZFBpYyBmcm9tIFwiLi4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5XCI7XHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxubGV0IGNhbmNlbDtcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGJpbzogXCJcIixcclxuICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgeW91dHViZTogXCJcIixcclxuICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICBpbnN0YWdyYW06IFwiXCJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlcjtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xyXG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdWJtaXREaXNhYmxlZCwgc2V0U3VibWl0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEhlcmUgd2UgY3JlYXRlIG9iamVjdCB3aXRoIHRoZSB2YWx1ZXMgXCJuYW1lLCBlbWFpbC4uLlwiXHJcbiAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSkuZXZlcnkoXHJcbiAgICAgIChpdGVtKSA9PiBCb29sZWFuKGl0ZW0pIC8vIHdpdGggRVZFUlkgbWV0aG9kLCB3ZSBjaGVjayBpZiBldmVyeSBJdGVtIGluIHRoZSBhcnJheSBoYXMgdmFsdWVcclxuICAgICk7XHJcbiAgICBpc1VzZXIgPyBzZXRTdWJtaXREaXNhYmxlZChmYWxzZSkgOiBzZXRTdWJtaXREaXNhYmxlZCh0cnVlKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICBjb25zdCBjaGVja1VzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xyXG5cclxuICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oY2FuY2VsZXIgPT4ge1xyXG4gICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZXJyb3JNc2cgIT09IG51bGwpIHNldEVycm9yTXNnKG51bGwpO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhID09PSBcIkF2YWlsYWJsZVwiKSB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsIHVzZXJuYW1lIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3JNc2coXCJVc2VybmFtZSBOb3QgQXZhaWxhYmxlXCIpO1xyXG4gICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZXRVc2VybmFtZUxvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1c2VybmFtZSA9PT0gXCJcIiA/IHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKSA6IGNoZWNrVXNlcm5hbWUoKTtcclxuICB9LCBbdXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRGb3JtTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBsZXQgcHJvZmlsZVBpY1VybDtcclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICBwcm9maWxlUGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVkaWEgIT09IG51bGwgJiYgIXByb2ZpbGVQaWNVcmwpIHtcclxuICAgICAgc2V0Rm9ybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gc2V0RXJyb3JNc2coXCJFcnJvciBVcGxvYWRpbmcgSW1hZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcmVnaXN0ZXJVc2VyKHVzZXIsIHByb2ZpbGVQaWNVcmwsIHNldEVycm9yTXNnLCBzZXRGb3JtTG9hZGluZyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXJNZXNzYWdlIC8+XHJcbiAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yTXNnKG51bGwpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgPEltYWdlRHJvcERpdlxyXG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3PXtzZXRNZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX1cclxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cInVzZXJcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJlbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXHJcbiAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsb2FkaW5nPXt1c2VybmFtZUxvYWRpbmd9XHJcbiAgICAgICAgICAgIGVycm9yPXshdXNlcm5hbWVBdmFpbGFibGV9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmIChyZWdleFVzZXJOYW1lLnRlc3QoZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17dXNlcm5hbWVBdmFpbGFibGUgPyBcImNoZWNrXCIgOiBcImNsb3NlXCJ9XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Q29tbW9uSW5wdXRzXHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBpY29uPVwic2lnbnVwXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlNpZ251cFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcm5hbWVBdmFpbGFibGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXBsb2FkUGljID0gYXN5bmMgbWVkaWEgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgbWVkaWEpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwic29jaWFsX21lZGlhX2FwcFwiKTsgLy8gTmFtZSBvZiB0aGUgcHJlc2V0IGluIENsb3VkaW5hcnlcclxuICAgIGZvcm0uYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcImluZGVyc2luZ2hcIik7IC8vIFNlY29uZCBwYXJhbWV0ZXIgaXMgdGhlIENsb3VkIE5hbWUgeW91IHVzZSBpbiB0aGUgQ2xvdWRpbmFyeVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9VUkwsIGZvcm0pO1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhLnVybDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=