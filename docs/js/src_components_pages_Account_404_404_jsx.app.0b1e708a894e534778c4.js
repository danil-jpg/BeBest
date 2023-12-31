"use strict";
(self["webpackChunkBeBest"] = self["webpackChunkBeBest"] || []).push([["src_components_pages_Account_404_404_jsx"],{

/***/ "./src/components/UI/Buttons/MainButton/MainButton.jsx":
/*!*************************************************************!*\
  !*** ./src/components/UI/Buttons/MainButton/MainButton.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainButton_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainButton.scss */ "./src/components/UI/Buttons/MainButton/MainButton.scss");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





var MainButton = function MainButton(_ref) {
  var children = _ref.children,
    _ref$to = _ref.to,
    to = _ref$to === void 0 ? '' : _ref$to,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'middle' : _ref$size,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'red' : _ref$type,
    _ref$maxWidth = _ref.maxWidth,
    maxWidth = _ref$maxWidth === void 0 ? '100%' : _ref$maxWidth,
    onClick = _ref.onClick,
    _ref$mb = _ref.mb,
    mb = _ref$mb === void 0 ? '0px' : _ref$mb,
    _ref$setTooltip = _ref.setTooltip,
    setTooltip = _ref$setTooltip === void 0 ? function () {} : _ref$setTooltip;
  // sizes = small, middle, big;
  // types = color,transparent
  var btn = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var styles = _objectSpread({
    maxWidth: "".concat(maxWidth),
    margin: "0 0 ".concat(mb)
  }, style);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    btn.current.addEventListener('mouse', function () {
      console.log('test');
    });
  }, [btn]);
  var onMouseEnterHandler = function onMouseEnterHandler() {
    setTooltip(true);
  };
  var onMouseLeaveHandler = function onMouseLeaveHandler() {
    setTooltip(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    ref: btn,
    to: to,
    className: "main-btn main-btn_".concat(size, " main-btn_").concat(type),
    style: styles,
    onClick: onClick ? onClick : function () {
      console.log('not callback');
    },
    onMouseEnter: onMouseEnterHandler,
    onMouseLeave: onMouseLeaveHandler,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      children: children
    })
  });
};
MainButton.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  size: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['small', 'middle']),
  type: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['red', 'white']),
  maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  mb: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainButton);

/***/ }),

/***/ "./src/components/pages/Account/404/404.jsx":
/*!**************************************************!*\
  !*** ./src/components/pages/Account/404/404.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _404_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./404.scss */ "./src/components/pages/Account/404/404.scss");
/* harmony import */ var _common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ContainerMain/ContainerMain */ "./src/components/common/ContainerMain/ContainerMain.jsx");
/* harmony import */ var _assets_images_404_bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/404/bg.png */ "./src/assets/images/404/bg.png");
/* harmony import */ var _assets_images_404_img1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/images/404/img1.png */ "./src/assets/images/404/img1.png");
/* harmony import */ var _assets_images_404_cat_2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/images/404/cat-2.svg */ "./src/assets/images/404/cat-2.svg");
/* harmony import */ var _assets_images_404_right_paw_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/images/404/right-paw.svg */ "./src/assets/images/404/right-paw.svg");
/* harmony import */ var _assets_images_404_left_paw_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/images/404/left-paw.svg */ "./src/assets/images/404/left-paw.svg");
/* harmony import */ var _assets_images_404_clew_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/images/404/clew.svg */ "./src/assets/images/404/clew.svg");
/* harmony import */ var _assets_images_404_heartIcon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/images/404/heartIcon.svg */ "./src/assets/images/404/heartIcon.svg");
/* harmony import */ var _assets_images_404_smallHeart_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/images/404/smallHeart.svg */ "./src/assets/images/404/smallHeart.svg");
/* harmony import */ var _UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../UI/Buttons/MainButton/MainButton */ "./src/components/UI/Buttons/MainButton/MainButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














var Error = function Error() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "main-error",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "main-error__info",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h1", {
          className: "main-error__info-title",
          children: "\u0423\u0432\u044B, \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
          className: "main-error__info-description",
          children: "\u041F\u043E\u0433\u043B\u0430\u0434\u044C\u0442\u0435 \u043F\u043E\u043A\u0430 \u043A\u043E\u0442\u0438\u043A\u0430 \u0438\u043B\u0438 \u043F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "main-error__image",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          src: _assets_images_404_bg_png__WEBPACK_IMPORTED_MODULE_3__,
          className: "main-error__image-bg"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          className: "main-error__image-img",
          src: _assets_images_404_img1_png__WEBPACK_IMPORTED_MODULE_4__,
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          src: _assets_images_404_cat_2_svg__WEBPACK_IMPORTED_MODULE_5__,
          alt: "",
          className: "main-error__image-cat"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          src: _assets_images_404_right_paw_svg__WEBPACK_IMPORTED_MODULE_6__,
          alt: "",
          className: "main-error__image-paw paw-right"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          src: _assets_images_404_left_paw_svg__WEBPACK_IMPORTED_MODULE_7__,
          alt: "",
          className: "main-error__image-paw paw-left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          className: "main-error__image-clew",
          src: _assets_images_404_clew_svg__WEBPACK_IMPORTED_MODULE_8__,
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          className: "main-error__image-heart",
          src: _assets_images_404_heartIcon_svg__WEBPACK_IMPORTED_MODULE_9__,
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
          className: "main-error__image-heart-small",
          src: _assets_images_404_smallHeart_svg__WEBPACK_IMPORTED_MODULE_10__,
          alt: ""
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "main-error__btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
          to: "/home",
          children: 'Перейти на главную'
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Buttons/MainButton/MainButton.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Buttons/MainButton/MainButton.scss ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  border: 0;
  cursor: pointer;
  text-decoration: none;
}
.main-btn_middle {
  padding: 19px 5px 17px;
  border-radius: 10px;
}
.main-btn_small {
  padding: 13px 5px;
  border-radius: 7px;
}
.main-btn_big {
  padding: 23px 50px;
  box-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);
  border-radius: 7px;
  color: #FFF;
  font-family: Montserrat;
  font-weight: 700;
  text-transform: uppercase;
}
.main-btn_white {
  background: linear-gradient(white, white) padding-box, linear-gradient(90deg, #f04973 0%, #fa6655 100%) border-box;
  border: 1px solid transparent;
}
.main-btn_red {
  background: linear-gradient(90deg, #f04973 0%, #fa6655 100%);
  box-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);
}
.main-btn_blue {
  background: linear-gradient(90deg, #00d2ff 0%, #2596ff 100%);
  box-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);
}
.main-btn_width-content {
  width: -moz-max-content;
  width: max-content;
}
.main-btn span {
  color: #fff;
  position: relative;
  z-index: 2;
  font-weight: 700;
  letter-spacing: 0.7px;
}
.main-btn_white span {
  color: #F04973;
  font-weight: 600;
}
.main-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #00d2ff 0%, #2596ff 100%);
  opacity: 0;
  transition: opacity 0.2s;
}
.main-btn_white::after {
  background: linear-gradient(90deg, #f04973 0%, #fa6655 100%);
}
.main-btn:hover {
  box-shadow: 0px 15px 25px 0px rgba(42, 150, 193, 0.2);
}
.main-btn_white:hover span {
  color: #fff;
}
.main-btn:hover::after {
  opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/components/UI/Buttons/MainButton/MainButton.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,eAAA;EACA,qBAAA;AACD;AAAC;EACC,sBAAA;EACA,mBAAA;AAEF;AAAC;EACC,iBAAA;EACA,kBAAA;AAEF;AAAC;EACC,kBAAA;EACA,oDAAA;EACA,kBAAA;EACA,WAAA;EACA,uBAAA;EACA,gBAAA;EACA,yBAAA;AAEF;AAAC;EACC,kHACC;EAEA,6BAAA;AAAH;AAEC;EACC,4DAAA;EACA,oDAAA;AAAF;AAEC;EACC,4DAAA;EACA,oDAAA;AAAF;AAGC;EACC,uBAAA;EAAA,kBAAA;AADF;AAGC;EACC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,qBAAA;AADF;AAGC;EACC,cAAA;EACA,gBAAA;AADF;AAGC;EACC,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,4DAAA;EACA,UAAA;EACA,wBAAA;AADF;AAGC;EACC,4DAAA;AADF;AAGC;EACC,qDAAA;AADF;AAGC;EACC,WAAA;AADF;AAGC;EACC,UAAA;AADF","sourcesContent":[".main-btn {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\twidth: 100%;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\tborder: 0;\r\n\tcursor: pointer;\r\n\ttext-decoration: none;\r\n\t&_middle {\r\n\t\tpadding: 19px 5px 17px;\r\n\t\tborder-radius: 10px;\r\n\t}\r\n\t&_small {\r\n\t\tpadding: 13px 5px;\r\n\t\tborder-radius: 7px;\r\n\t}\r\n\t&_big{\r\n\t\tpadding: 23px 50px;\r\n\t\tbox-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.20);\r\n\t\tborder-radius: 7px;\r\n\t\tcolor: #FFF;\r\n\t\tfont-family: Montserrat;\r\n\t\tfont-weight: 700;\r\n\t\ttext-transform: uppercase;\r\n\t}\r\n\t&_white {\r\n\t\tbackground:\r\n\t\t\tlinear-gradient(white, white) padding-box,\r\n\t\t\tlinear-gradient(90deg, #f04973 0%, #fa6655 100%) border-box;\r\n\t\t\tborder: 1px solid transparent;\r\n\t}\r\n\t&_red {\r\n\t\tbackground: linear-gradient(90deg, #f04973 0%, #fa6655 100%);\r\n\t\tbox-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);\r\n\t}\r\n\t&_blue{\r\n\t\tbackground: linear-gradient(90deg, #00d2ff 0%, #2596ff 100%);\r\n\t\tbox-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);\r\n\r\n\t}\r\n\t&_width-content {\r\n\t\twidth: max-content;\r\n\t}\r\n\tspan {\r\n\t\tcolor: #fff;\r\n\t\tposition: relative;\r\n\t\tz-index: 2;\r\n\t\tfont-weight: 700;\r\n\t\tletter-spacing: 0.7px;\r\n\t}\r\n\t&_white span {\r\n\t\tcolor: #F04973;\r\n\t\tfont-weight: 600;\r\n\t}\r\n\t&::after {\r\n\t\tcontent: \"\";\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\tbackground: linear-gradient(90deg, #00d2ff 0%, #2596ff 100%);\r\n\t\topacity: 0;\r\n\t\ttransition: opacity 0.2s;\r\n\t}\r\n\t&_white::after {\r\n\t\tbackground: linear-gradient(90deg, #f04973 0%, #fa6655 100%);\r\n\t}\r\n\t&:hover {\r\n\t\tbox-shadow: 0px 15px 25px 0px rgba(42, 150, 193, 0.2);\r\n\t}\r\n\t&_white:hover span {\r\n\t\tcolor: #fff;\r\n\t}\r\n\t&:hover::after {\r\n\t\topacity: 1;\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Account/404/404.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Account/404/404.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main-error {
  width: 915px;
  margin: 0 auto 50px;
}
.main-error__info-title {
  color: #292C32;
  text-align: center;
  font-family: EB Garamond;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 60px;
}
.main-error__info-description {
  color: #454B58;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  padding-top: 20px;
}
.main-error__image {
  width: 915px;
  height: 535px;
  background-color: #F2F5FA;
  margin-top: 55px;
  position: relative;
  z-index: 1;
}
.main-error__image-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.main-error__image-img {
  transform-origin: top left;
  animation: rotateAndMove 7.5s linear infinite;
  position: absolute;
  left: 250px;
  top: -10px;
  z-index: 2;
  opacity: 1;
}
.main-error__image-cat {
  position: absolute;
  bottom: -7px;
  left: 200px;
}
.main-error__image-container {
  overflow: hidden;
  position: relative;
  width: 320px;
  height: 185px;
}
.main-error__image-clew {
  position: absolute;
  bottom: 0;
  transform-origin: center;
  animation: moveAndRotate 4s linear infinite;
  left: 115px;
}
.main-error__image-heart {
  position: absolute;
  top: 110px;
  left: 240px;
  z-index: -1;
}
.main-error__image-heart-small {
  bottom: 200px;
  left: 260px;
  position: absolute;
}
.main-error__btn {
  max-width: 262px;
  margin: 70px auto 0;
}

.paw-right {
  position: absolute;
  bottom: 20px;
  transform-origin: bottom right;
  animation: rotateAndMove 3s linear infinite;
  left: 310px;
}

.paw-left {
  position: absolute;
  bottom: 20px;
  right: 315px;
  transform-origin: left bottom;
  animation: rotateAndMove 3s linear infinite;
}

@keyframes rotateAndMove {
  0%, 100% {
    transform: translate(0, 0) rotate(7deg);
  }
  25%, 75% {
    transform: translate(0, 0) rotate(-7deg);
  }
  50% {
    transform: translate(0, 0) rotate(7deg);
  }
}
@keyframes moveAndRotate {
  0% {
    transform: translateX(0) rotate(180deg);
  }
  50% {
    transform: translateX(47px) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(180deg);
  }
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Account/404/404.scss"],"names":[],"mappings":"AAAA;EACI,YAAA;EACA,mBAAA;AACJ;AAGQ;EACI,cAAA;EACA,kBAAA;EACA,wBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AADZ;AAGQ;EACI,cAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;AADZ;AAKI;EACI,YAAA;EACA,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;AAHR;AAIQ;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;AAFZ;AAIQ;EACI,0BAAA;EACA,6CAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,UAAA;EACA,UAAA;AAFZ;AAIQ;EACI,kBAAA;EACA,YAAA;EACA,WAAA;AAFZ;AAIQ;EACI,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;AAFZ;AAIQ;EACI,kBAAA;EACA,SAAA;EACA,wBAAA;EACA,2CAAA;EACA,WAAA;AAFZ;AAIQ;EACI,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AAFZ;AAIQ;EACI,aAAA;EACA,WAAA;EACA,kBAAA;AAFZ;AAUI;EACE,gBAAA;EACA,mBAAA;AARN;;AAYA;EACI,kBAAA;EACA,YAAA;EACA,8BAAA;EACA,2CAAA;EACA,WAAA;AATJ;;AAWA;EACI,kBAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,2CAAA;AARJ;;AAcA;EACI;IACE,uCAAA;EAXJ;EAaE;IACE,wCAAA;EAXJ;EAaE;IACE,uCAAA;EAXJ;AACF;AAiBE;EACE;IACE,uCAAA;EAfJ;EAiBE;IACE,wCAAA;EAfJ;EAiBE;IACE,uCAAA;EAfJ;AACF","sourcesContent":[".main-error{\r\n    width: 915px;\r\n    margin: 0 auto 50px;\r\n\r\n    &__info{\r\n\r\n        &-title{\r\n            color: #292C32;\r\n            text-align: center;\r\n            font-family: EB Garamond;\r\n            font-size: 60px;\r\n            font-style: normal;\r\n            font-weight: 600;\r\n            line-height: 60px;\r\n        }\r\n        &-description{\r\n            color: #454B58;\r\n            text-align: center;\r\n            font-family: Montserrat;\r\n            font-size: 14px;\r\n            font-style: normal;\r\n            font-weight: 600;\r\n            line-height: 25px;\r\n            padding-top: 20px;\r\n        }\r\n    }\r\n\r\n    &__image{\r\n        width: 915px;\r\n        height: 535px;\r\n        background-color: #F2F5FA;\r\n        margin-top: 55px;\r\n        position: relative;\r\n        z-index: 1;\r\n        &-bg{\r\n            position: absolute;\r\n            width: 100%;\r\n            height: 100%;\r\n            top: 0;\r\n            left: 0;\r\n            z-index: -1;\r\n        }\r\n        &-img{\r\n            transform-origin: top left;\r\n            animation: rotateAndMove 7.5s linear infinite;\r\n            position: absolute;\r\n            left: 250px;\r\n            top: -10px;\r\n            z-index: 2;\r\n            opacity: 1;\r\n        }\r\n        &-cat{\r\n            position: absolute;\r\n            bottom: -7px;;\r\n            left: 200px;\r\n        }\r\n        &-container{\r\n            overflow: hidden;\r\n            position: relative;\r\n            width: 320px;\r\n            height: 185px;\r\n        }\r\n        &-clew{\r\n            position: absolute;\r\n            bottom: 0;\r\n            transform-origin: center;\r\n            animation: moveAndRotate 4s linear infinite;\r\n            left: 115px;\r\n        }\r\n        &-heart{\r\n            position: absolute;\r\n            top: 110px;\r\n            left: 240px;\r\n            z-index: -1;\r\n        }\r\n        &-heart-small{\r\n            bottom: 200px;\r\n            left: 260px;\r\n            position: absolute;\r\n        }\r\n\r\n       \r\n\r\n        \r\n    }\r\n\r\n    &__btn{\r\n      max-width: 262px;\r\n      margin:  70px auto 0;\r\n    }\r\n}\r\n\r\n.paw-right{\r\n    position: absolute;\r\n    bottom: 20px;\r\n    transform-origin: bottom right;\r\n    animation: rotateAndMove 3s linear infinite;\r\n    left: 310px;\r\n}\r\n.paw-left{\r\n    position: absolute;\r\n    bottom: 20px;\r\n    right: 315px;\r\n    transform-origin: left bottom;\r\n    animation: rotateAndMove 3s linear infinite;\r\n}\r\n\r\n\r\n\r\n\r\n@keyframes rotateAndMove {\r\n    0%, 100% {\r\n      transform: translate(0, 0) rotate(7deg);\r\n    }\r\n    25%, 75% {\r\n      transform: translate(0, 0) rotate(-7deg);\r\n    }\r\n    50% {\r\n      transform: translate(0, 0) rotate(7deg);\r\n    }\r\n  }\r\n\r\n\r\n\r\n\r\n  @keyframes moveAndRotate {\r\n    0% {\r\n      transform: translateX(0) rotate(180deg);\r\n    }\r\n    50% {\r\n      transform: translateX(47px) rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: translateX(0) rotate(180deg);\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/UI/Buttons/MainButton/MainButton.scss":
/*!**************************************************************!*\
  !*** ./src/components/UI/Buttons/MainButton/MainButton.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MainButton_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./MainButton.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Buttons/MainButton/MainButton.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MainButton_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MainButton_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MainButton_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MainButton_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Account/404/404.scss":
/*!***************************************************!*\
  !*** ./src/components/pages/Account/404/404.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_404_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./404.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Account/404/404.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_404_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_404_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_404_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_404_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/404/bg.png":
/*!**************************************!*\
  !*** ./src/assets/images/404/bg.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/bg3339e1c9cadb974ba99d.png";

/***/ }),

/***/ "./src/assets/images/404/cat-2.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/404/cat-2.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/2608698dc33d46989352.svg";

/***/ }),

/***/ "./src/assets/images/404/clew.svg":
/*!****************************************!*\
  !*** ./src/assets/images/404/clew.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/bc72cd2e77435fed0ef8.svg";

/***/ }),

/***/ "./src/assets/images/404/heartIcon.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/404/heartIcon.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/b5b7b89910707f8de85c.svg";

/***/ }),

/***/ "./src/assets/images/404/img1.png":
/*!****************************************!*\
  !*** ./src/assets/images/404/img1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/img10df38de5372ab3803fa2.png";

/***/ }),

/***/ "./src/assets/images/404/left-paw.svg":
/*!********************************************!*\
  !*** ./src/assets/images/404/left-paw.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/8aff301303ed71b208c7.svg";

/***/ }),

/***/ "./src/assets/images/404/right-paw.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/404/right-paw.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/969fa8ce2678fef842e1.svg";

/***/ }),

/***/ "./src/assets/images/404/smallHeart.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/404/smallHeart.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/00b66c9169c4013d938d.svg";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Account_404_404_jsx.app.0b1e708a894e534778c4.js.map