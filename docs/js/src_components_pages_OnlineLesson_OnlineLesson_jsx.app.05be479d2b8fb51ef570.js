"use strict";
(self["webpackChunkBeBest"] = self["webpackChunkBeBest"] || []).push([["src_components_pages_OnlineLesson_OnlineLesson_jsx"],{

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

/***/ "./src/components/UI/Title/Title.jsx":
/*!*******************************************!*\
  !*** ./src/components/UI/Title/Title.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title.scss */ "./src/components/UI/Title/Title.scss");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




var Title = function Title(_ref) {
  var children = _ref.children,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$align = _ref.align,
    align = _ref$align === void 0 ? 'left' : _ref$align,
    type = _ref.type,
    _ref$mb = _ref.mb,
    mb = _ref$mb === void 0 ? '0' : _ref$mb;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
    style: _objectSpread(_objectSpread({}, style), {}, {
      marginBottom: 'mb'
    }),
    className: "title title_align-".concat(align, " ").concat(type ? "title_type-".concat(type) : ''),
    children: children
  });
};
Title.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  align: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(['left', 'center', 'right']),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./src/components/pages/OnlineLesson/OnlineLesson.jsx":
/*!************************************************************!*\
  !*** ./src/components/pages/OnlineLesson/OnlineLesson.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnlineLessonMeet_OnlineLessonMeet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnlineLessonMeet/OnlineLessonMeet */ "./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.jsx");
/* harmony import */ var _common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/ContainerMain/ContainerMain */ "./src/components/common/ContainerMain/ContainerMain.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var OnlineLesson = function OnlineLesson() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_OnlineLessonMeet_OnlineLessonMeet__WEBPACK_IMPORTED_MODULE_1__["default"], {})
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnlineLesson);

/***/ }),

/***/ "./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.jsx":
/*!*********************************************************************************!*\
  !*** ./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _OnlineLessonMeet_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OnlineLessonMeet.scss */ "./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var _UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../UI/Buttons/MainButton/MainButton */ "./src/components/UI/Buttons/MainButton/MainButton.jsx");
/* harmony import */ var _assets_images_main_icon1_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../assets/images/main/icon1.svg */ "./src/assets/images/main/icon1.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var OnlineLessonMeet = function OnlineLessonMeet() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    isLessonModalOpen = _useState2[0],
    setIsLessonModalOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    isCallEnded = _useState4[0],
    setIsCallEnded = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
      title: '',
      description: '',
      tasks: '',
      duration: ''
    }),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
    lessonData = _useState6[0],
    setLessonData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
    timer = _useState8[0],
    setTimer = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
    isIframeVisible = _useState10[0],
    setIsIframeVisible = _useState10[1];
  var jitsiUrl = "https://meet.jit.si/".concat(lessonData.title);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var interval;
    if (timer > 0 && isIframeVisible) {
      interval = setInterval(function () {
        setTimer(timer - 1);
      }, 1000);
    }
    return function () {
      clearInterval(interval);
    };
  }, [timer, isIframeVisible]);
  var formatTime = function formatTime(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = timeInSeconds % 60;
    return "".concat(minutes, ":").concat(seconds < 10 ? '0' : '').concat(seconds);
  };
  var handleCreateLesson = function handleCreateLesson() {
    setIsLessonModalOpen(true);
  };
  var handleCreateMeeting = function handleCreateMeeting() {
    setIsLessonModalOpen(false);
    setTimer(lessonData.duration * 60);
    setIsIframeVisible(true);
  };
  var handleEndCall = function handleEndCall() {
    setIsCallEnded(true);
    setIsIframeVisible(false);
  };
  var handleCloseBanner = function handleCloseBanner() {
    setIsCallEnded(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "online-lesson",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: 'Онлайн урок'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      className: "online-lesson__btn",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: handleCreateLesson,
        children: 'Создать урок'
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {
      isOpen: isLessonModalOpen,
      onRequestClose: function onRequestClose() {
        return setIsLessonModalOpen(false);
      },
      style: {
        overlay: {
          background: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          width: '1000px',
          margin: '50px auto 0 ',
          height: '530px',
          border: '3px solid #f04973',
          borderRadius: '20px'
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
        className: "online-lesson__title",
        children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "online-lesson__input",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "online-lesson__info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
            className: "online-lesson__label",
            children: ["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
              type: "text",
              value: lessonData.title,
              onChange: function onChange(e) {
                return setLessonData(_objectSpread(_objectSpread({}, lessonData), {}, {
                  title: e.target.value
                }));
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
            className: "online-lesson__label",
            children: ["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("textarea", {
              value: lessonData.description,
              onChange: function onChange(e) {
                return setLessonData(_objectSpread(_objectSpread({}, lessonData), {}, {
                  description: e.target.value
                }));
              }
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "online-lesson__info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
            className: "online-lesson__label online-lesson__label-time",
            children: ["\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0443\u0440\u043E\u043A\u0430 (\u043C\u0438\u043D):", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("input", {
              type: "number",
              value: lessonData.duration,
              onChange: function onChange(e) {
                return setLessonData(_objectSpread(_objectSpread({}, lessonData), {}, {
                  duration: e.target.value
                }));
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
            className: "online-lesson__label",
            children: ["\u0417\u0430\u0434\u0430\u0447\u0438 \u0443\u0440\u043E\u043A\u0430:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("textarea", {
              value: lessonData.tasks,
              onChange: function onChange(e) {
                return setLessonData(_objectSpread(_objectSpread({}, lessonData), {}, {
                  tasks: e.target.value
                }));
              }
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "online-lesson__btn online-lesson__btn-form",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          onClick: handleCreateMeeting,
          children: 'Создать урок'
        })
      })]
    }), isIframeVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "online-lesson__main-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "online-lesson__main-iframe",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("iframe", {
            src: jitsiUrl,
            allow: "camera; microphone; fullscreen; display-capture",
            width: "1000",
            height: "600"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
            src: _assets_images_main_icon1_svg__WEBPACK_IMPORTED_MODULE_7__,
            alt: ""
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "online-lesson__information",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
            className: "online-lesson__information-title",
            children: ["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              children: lessonData.title
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
            className: "online-lesson__information-title",
            children: ["\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
              children: lessonData.description
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
            className: "online-lesson__information-descr",
            children: ["\u0417\u0430\u0434\u0430\u0447\u0438 \u0443\u0440\u043E\u043A\u0430: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("br", {}), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              children: lessonData.tasks
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "online-lesson__information-timer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "online-lesson__information-timer-time",
              children: "\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0432\u0440\u0435\u043C\u0435\u043D\u0438:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
              className: "online-lesson__information-timer-hour",
              children: [" ", formatTime(timer)]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
            className: "online-lesson__information-link",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
              children: [" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0443\u0440\u043E\u043A:", ' ']
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: jitsiUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              children: jitsiUrl
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "online-lesson__information-btn",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
              onClick: handleEndCall,
              children: 'Завершить звонок'
            })
          })]
        })]
      })
    }), isCallEnded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "online-lesson__banner",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
        children: "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0443\u0440\u043E\u043A!"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "online-lesson__banner-btn",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
          type: "blue",
          onClick: handleCloseBanner,
          children: "Закрыть"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnlineLessonMeet);

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
}`, "",{"version":3,"sources":["webpack://./src/components/UI/Buttons/MainButton/MainButton.scss"],"names":[],"mappings":"AAAA;EACC,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,eAAA;EACA,qBAAA;AACD;AAAC;EACC,sBAAA;EACA,mBAAA;AAEF;AAAC;EACC,iBAAA;EACA,kBAAA;AAEF;AAAC;EACC,kBAAA;EACA,oDAAA;EACA,kBAAA;EACA,WAAA;EACA,uBAAA;EACA,gBAAA;EACA,yBAAA;AAEF;AAAC;EACC,kHACC;EAEA,6BAAA;AAAH;AAEC;EACC,4DAAA;EACA,oDAAA;AAAF;AAEC;EACC,4DAAA;EACA,oDAAA;AAAF;AAGC;EACC,uBAAA;EAAA,kBAAA;AADF;AAGC;EACC,WAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;EACA,qBAAA;AADF;AAGC;EACC,cAAA;EACA,gBAAA;AADF;AAGC;EACC,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,4DAAA;EACA,UAAA;EACA,wBAAA;AADF;AAGC;EACC,4DAAA;AADF;AAGC;EACC,qDAAA;AADF;AAGC;EACC,WAAA;AADF;AAGC;EACC,UAAA;AADF","sourcesContent":[".main-btn {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\ttext-align: center;\n\tposition: relative;\n\toverflow: hidden;\n\tborder: 0;\n\tcursor: pointer;\n\ttext-decoration: none;\n\t&_middle {\n\t\tpadding: 19px 5px 17px;\n\t\tborder-radius: 10px;\n\t}\n\t&_small {\n\t\tpadding: 13px 5px;\n\t\tborder-radius: 7px;\n\t}\n\t&_big{\n\t\tpadding: 23px 50px;\n\t\tbox-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.20);\n\t\tborder-radius: 7px;\n\t\tcolor: #FFF;\n\t\tfont-family: Montserrat;\n\t\tfont-weight: 700;\n\t\ttext-transform: uppercase;\n\t}\n\t&_white {\n\t\tbackground:\n\t\t\tlinear-gradient(white, white) padding-box,\n\t\t\tlinear-gradient(90deg, #f04973 0%, #fa6655 100%) border-box;\n\t\t\tborder: 1px solid transparent;\n\t}\n\t&_red {\n\t\tbackground: linear-gradient(90deg, #f04973 0%, #fa6655 100%);\n\t\tbox-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);\n\t}\n\t&_blue{\n\t\tbackground: linear-gradient(90deg, #00d2ff 0%, #2596ff 100%);\n\t\tbox-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);\n\n\t}\n\t&_width-content {\n\t\twidth: max-content;\n\t}\n\tspan {\n\t\tcolor: #fff;\n\t\tposition: relative;\n\t\tz-index: 2;\n\t\tfont-weight: 700;\n\t\tletter-spacing: 0.7px;\n\t}\n\t&_white span {\n\t\tcolor: #F04973;\n\t\tfont-weight: 600;\n\t}\n\t&::after {\n\t\tcontent: \"\";\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground: linear-gradient(90deg, #00d2ff 0%, #2596ff 100%);\n\t\topacity: 0;\n\t\ttransition: opacity 0.2s;\n\t}\n\t&_white::after {\n\t\tbackground: linear-gradient(90deg, #f04973 0%, #fa6655 100%);\n\t}\n\t&:hover {\n\t\tbox-shadow: 0px 15px 25px 0px rgba(42, 150, 193, 0.2);\n\t}\n\t&_white:hover span {\n\t\tcolor: #fff;\n\t}\n\t&:hover::after {\n\t\topacity: 1;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Title/Title.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Title/Title.scss ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.title {
  color: #292C32;
  font-family: "EB Garamond", serif;
  font-size: 50px;
  font-weight: 600;
  line-height: normal;
  margin: 0 0 24px;
}
.title_align-left {
  text-align: left;
}
.title_align-center {
  text-align: center;
}
.title_align-right {
  text-align: right;
}
.title_type-subtitle {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
  font-family: "Montserrat", sans-serif;
}`, "",{"version":3,"sources":["webpack://./src/components/UI/Title/Title.scss"],"names":[],"mappings":"AAAA;EACC,cAAA;EACA,iCAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;AACD;AAAC;EACC,gBAAA;AAEF;AAAC;EACC,kBAAA;AAEF;AAAC;EACC,iBAAA;AAEF;AAAC;EACC,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,qCAAA;AAEF","sourcesContent":[".title {\n\tcolor: #292C32;\n\tfont-family: 'EB Garamond', serif;\n\tfont-size: 50px;\n\tfont-weight: 600;\n\tline-height: normal;\n\tmargin: 0 0 24px;\n\t&_align-left {\n\t\ttext-align: left;\n\t}\n\t&_align-center {\n\t\ttext-align: center;\n\t}\n\t&_align-right {\n\t\ttext-align: right;\n\t}\n\t&_type-subtitle {\n\t\tfont-size: 20px;\n\t\tfont-weight: 700;\n\t\tline-height: 1.1;\n\t\tfont-family: 'Montserrat', sans-serif;\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.scss":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.scss ***!
  \*********************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.online-lesson {
  padding: 0 30px 60px 0;
}
.online-lesson__main-iframe {
  position: relative;
}
.online-lesson__main-iframe img {
  position: absolute;
  top: 29px;
  left: 20px;
}
.online-lesson__btn {
  max-width: 262px;
}
.online-lesson__btn-form {
  margin-top: 60px;
}
.online-lesson__title {
  color: #292C32;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
}
.online-lesson__info {
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding-top: 30px;
}
.online-lesson__input {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.online-lesson__label {
  color: #292C32;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  display: flex;
}
.online-lesson__label-time input {
  max-width: 90px;
}
.online-lesson__label input {
  border: 1px solid #f04973;
  height: 30px;
  border-radius: 10px;
  margin-left: 20px;
  padding-left: 20px;
}
.online-lesson__label textarea {
  border: 1px solid #f04973;
  border-radius: 10px;
  margin-left: 20px;
  padding: 20px;
  min-height: 150px;
}
.online-lesson__main-content {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.online-lesson__information {
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  padding: 25px;
  width: 330px;
}
.online-lesson__information-title {
  color: #292C32;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  padding-bottom: 15px;
}
.online-lesson__information-title span {
  color: #f04973;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
}
.online-lesson__information-descr {
  color: #292C32;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  padding-bottom: 10px;
}
.online-lesson__information-descr p {
  color: #f04973;
}
.online-lesson__information-timer {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 15px;
}
.online-lesson__information-timer-time {
  color: #8B919E;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
}
.online-lesson__information-timer-hour {
  color: #292C32;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}
.online-lesson__information-link p {
  color: #292C32;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px; /* 135.714% */
}
.online-lesson__information-link a {
  color: #f04973;
}
.online-lesson__information-btn {
  margin-top: 120px;
}
.online-lesson__banner {
  width: 100%;
  height: 300px;
  background-color: #f04973;
  position: absolute;
  top: 70px;
  z-index: 10;
  left: 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
}
.online-lesson__banner p {
  color: #292C32;
  text-align: center;
  font-family: EB Garamond;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.online-lesson__banner-btn {
  width: 300px;
  margin-top: 50px;
}

@media (max-width: 1439px) {
  iframe {
    max-width: 800px;
    border-radius: 30px;
    border: 5px solid #f04973;
    max-height: 500px;
  }
}
.watermark {
  opacity: 0;
}

.leftwatermark {
  opacity: 0;
}

iframe .leftwatermark a {
  opacity: 0;
}

iframe .watermark a {
  opacity: 0;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.scss","webpack://./src/styles/media-breakpoints.scss"],"names":[],"mappings":"AAEA;EACI,sBAAA;AADJ;AAGI;EACI,kBAAA;AADR;AAGQ;EACI,kBAAA;EACA,SAAA;EACA,UAAA;AADZ;AAMI;EACI,gBAAA;AAJR;AAMQ;EACI,gBAAA;AAJZ;AAQI;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;AANR;AASI;EACI,aAAA;EACA,sBAAA;EACA,UAAA;EACA,iBAAA;AAPR;AAUI;EACI,aAAA;EACA,8BAAA;EACA,WAAA;AARR;AAWI;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,aAAA;AATR;AAaY;EACI,eAAA;AAXhB;AAgBQ;EACI,yBAAA;EACA,YAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;AAdZ;AAiBQ;EACI,yBAAA;EACA,mBAAA;EACA,iBAAA;EACA,aAAA;EACA,iBAAA;AAfZ;AAmBI;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;AAjBR;AAsBI;EACI,mBAAA;EACA,gBAAA;EACA,sDAAA;EACA,aAAA;EACA,YAAA;AApBR;AAsBQ;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AApBZ;AAsBY;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AApBhB;AAwBQ;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AAtBZ;AAwBY;EACI,cAAA;AAtBhB;AA0BQ;EACI,aAAA;EACA,sBAAA;EACA,QAAA;EACA,mBAAA;AAxBZ;AA0BY;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AAxBhB;AA2BY;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;AAzBhB;AA+BY;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;AA7BhB;AAgCY;EACI,cAAA;AA9BhB;AAkCQ;EACI,iBAAA;AAhCZ;AAqCI;EACI,WAAA;EACA,aAAA;EACA,yBAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,OAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;AAnCR;AAqCQ;EACI,cAAA;EACA,kBAAA;EACA,wBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AAnCZ;AAsCQ;EACI,YAAA;EACA,gBAAA;AApCZ;;AC1II;EDsLA;IACI,gBAAA;IACA,mBAAA;IACA,yBAAA;IACA,iBAAA;EAxCN;AACF;AA0CA;EACI,UAAA;AAxCJ;;AA0CA;EACI,UAAA;AAvCJ;;AA0CI;EACI,UAAA;AAvCR;;AA2CG;EACC,UAAA;AAxCJ","sourcesContent":["@import \"./../../../../styles/media-breakpoints.scss\";\n\n.online-lesson {\n    padding: 0 30px 60px 0;\n\n    &__main-iframe{\n        position: relative;\n\n        img{\n            position: absolute;\n            top: 29px;\n            left: 20px;\n\n        }\n    }\n    \n    &__btn {\n        max-width: 262px;\n\n        &-form {\n            margin-top: 60px;\n        }\n    }\n\n    &__title {\n        color: #292C32;\n        font-family: Montserrat;\n        font-size: 20px;\n        font-style: normal;\n        font-weight: 700;\n    }\n\n    &__info {\n        display: flex;\n        flex-direction: column;\n        gap: 100px;\n        padding-top: 30px;\n    }\n\n    &__input {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n    }\n\n    &__label {\n        color: #292C32;\n        font-family: Montserrat;\n        font-size: 16px;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 24px;\n        display: flex;\n\n        &-time {\n\n            input {\n                max-width: 90px;\n\n            }\n        }\n\n        input {\n            border: 1px solid #f04973;\n            height: 30px;\n            border-radius: 10px;\n            margin-left: 20px;\n            padding-left: 20px;\n        }\n\n        textarea {\n            border: 1px solid #f04973;\n            border-radius: 10px;\n            margin-left: 20px;\n            padding: 20px;\n            min-height: 150px;\n        }\n    }\n\n    &__main-content {\n        display: flex;\n        justify-content: space-between;\n        margin-top: 50px;\n\n\n    }\n\n    &__information {\n        border-radius: 10px;\n        background: #FFF;\n        box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\n        padding: 25px;\n        width: 330px;\n\n        &-title {\n            color: #292C32;\n            font-family: Montserrat;\n            font-size: 15px;\n            font-style: normal;\n            font-weight: 700;\n            line-height: 19px;\n            padding-bottom: 15px;\n\n            span {\n                color: #f04973;\n                font-family: Montserrat;\n                font-size: 16px;\n                font-style: normal;\n                font-weight: 600;\n                line-height: 19px;\n            }\n        }\n\n        &-descr {\n            color: #292C32;\n            font-family: Montserrat;\n            font-size: 14px;\n            font-style: normal;\n            font-weight: 600;\n            line-height: 19px;\n            padding-bottom: 10px;\n\n            p{\n                color: #f04973;\n            }\n        }\n\n        &-timer {\n            display: flex;\n            flex-direction: column;\n            gap: 6px;\n            margin-bottom: 15px;\n\n            &-time{\n                color: #8B919E;\n                font-family: Montserrat;\n                font-size: 13px;\n                font-style: normal;\n                font-weight: 500;\n                line-height: 23px; \n            }\n\n            &-hour{\n                color: #292C32;\n                font-family: Montserrat;\n                font-size: 20px;\n                font-style: normal;\n                font-weight: 700;\n                line-height: 22px; \n            }\n        }\n\n        &-link{\n\n            p{\n                color: #292C32;\n                font-family: Montserrat;\n                font-size: 14px;\n                font-style: normal;\n                font-weight: 600;\n                line-height: 19px; /* 135.714% */\n            }\n\n            a{\n                color: #f04973;\n            }\n        }\n\n        &-btn{\n            margin-top: 120px;\n        }\n\n    }\n\n    &__banner{\n        width: 100%;\n        height: 300px;\n        background-color: #f04973;\n        position: absolute;\n        top: 70px;\n        z-index: 10;\n        left: 0;\n        border-radius: 20px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center; \n        transition: all 0.5s ease;\n        \n        p{\n            color: #292C32;\n            text-align: center;\n            font-family: EB Garamond;\n            font-size: 50px;\n            font-style: normal;\n            font-weight: 600;\n            line-height: normal;\n        }\n\n        &-btn{\n            width: 300px;\n            margin-top: 50px;\n        }\n\n    }\n}\n\n@include media-breakpoint-down(lg) {\n\n    iframe {\n        max-width: 800px;\n        border-radius: 30px;\n        border: 5px solid #f04973;\n        max-height: 500px;\n    }\n}\n.watermark{\n    opacity: 0;\n}\n.leftwatermark{\n    opacity: 0;\n}\niframe .leftwatermark{\n    a{\n        opacity: 0;\n    }\n}\niframe .watermark{\n   a{\n    opacity: 0;\n   }\n}","$breakpoints: (\n        xxs: 375px,\n        xs: 576px,\n        s: 650px,\n        sm: 768px,\n        md: 1024px,\n        lg: 1440px,\n        l: 1650px,\n        xl: 1920px,\n);\n\n@mixin media-breakpoint-up($breakpoint) {\n  @if map-has-key($breakpoints, $breakpoint) {\n    $breakpoint-value: map-get($breakpoints, $breakpoint);\n\n    @media (min-width: $breakpoint-value) {\n      @content;\n    }\n  } @else {\n    @warn 'Invalid breakpoint: #{$breakpoint}.';\n  }\n}\n\n@mixin media-breakpoint-down($breakpoint) {\n  @if map-has-key($breakpoints, $breakpoint) {\n    $breakpoint-value: map-get($breakpoints, $breakpoint);\n\n    @media (max-width: $breakpoint-value - 1) {\n      @content;\n    }\n  } @else {\n    @warn 'Invalid breakpoint: #{$breakpoint}.';\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/UI/Title/Title.scss":
/*!********************************************!*\
  !*** ./src/components/UI/Title/Title.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Title_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Title.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Title/Title.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Title_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Title_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Title_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Title_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.scss":
/*!**********************************************************************************!*\
  !*** ./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.scss ***!
  \**********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_OnlineLessonMeet_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./OnlineLessonMeet.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/OnlineLesson/OnlineLessonMeet/OnlineLessonMeet.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_OnlineLessonMeet_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_OnlineLessonMeet_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_OnlineLessonMeet_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_OnlineLessonMeet_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/main/icon1.svg":
/*!******************************************!*\
  !*** ./src/assets/images/main/icon1.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/b970a696d53681d091b8.svg";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_OnlineLesson_OnlineLesson_jsx.app.05be479d2b8fb51ef570.js.map