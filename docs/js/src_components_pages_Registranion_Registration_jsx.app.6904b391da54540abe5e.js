"use strict";
(self["webpackChunkBeBest"] = self["webpackChunkBeBest"] || []).push([["src_components_pages_Registranion_Registration_jsx"],{

/***/ "./src/components/UI/Forms/InputCheckbox/InputCheckbox.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/UI/Forms/InputCheckbox/InputCheckbox.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputCheckbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputCheckbox.scss */ "./src/components/UI/Forms/InputCheckbox/InputCheckbox.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var InputCheckbox = function InputCheckbox(_ref) {
  var checkboxState = _ref.checkboxState,
    setCheckboxState = _ref.setCheckboxState,
    onClickHandler = _ref.onClickHandler;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    onClick: onClickHandler,
    className: checkboxState ? 'checkbox active' : 'checkbox'
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputCheckbox);

/***/ }),

/***/ "./src/components/UI/Picture/Picture.jsx":
/*!***********************************************!*\
  !*** ./src/components/UI/Picture/Picture.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _excluded = ["className", "img", "webp", "style"];





function Picture(_ref) {
  var className = _ref.className,
    img = _ref.img,
    webp = _ref.webp,
    style = _ref.style,
    rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, _excluded);
  var imageExt = img.slice(-7).split('.')[1].trim();
  var type = 'image/' + imageExt;
  if (imageExt != 'png') {
    type = 'image/jpeg';
  }
  var alt = rest.alt ? rest.alt : 'image';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("picture", {
    children: [rest.imgMob ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("source", {
        srcSet: rest.webpMob,
        type: "image/webp",
        media: "(max-width: ".concat(rest.widthMob, "px)")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("source", {
        srcSet: rest.imgMob,
        type: type,
        media: "(max-width: ".concat(rest.widthMob, "px)")
      })]
    }) : '', rest.imgTab ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("source", {
        srcSet: rest.webpTab,
        type: "image/webp",
        media: "(max-width: ".concat(rest.widthTab, "px)")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("source", {
        srcSet: rest.imgTab,
        type: type,
        media: "(max-width: ".concat(rest.widthTab, "px)")
      })]
    }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("source", {
      srcSet: webp,
      type: "image/webp"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      className: className ? className : '',
      src: img,
      alt: alt,
      style: style,
      loading: rest.lazy ? 'lazy' : 'auto',
      width: rest.width ? rest.width : '',
      height: rest.height ? rest.height : ''
    })]
  });
}
Picture.propTypes = {
  style: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  height: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  lazy: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['lazy', 'auto']),
  alt: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  webp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  img: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Picture);

/***/ }),

/***/ "./src/components/pages/Registranion/Authorize/Authorize.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/pages/Registranion/Authorize/Authorize.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Authorize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Authorize.scss */ "./src/components/pages/Registranion/Authorize/Authorize.scss");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var _UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UI/Forms/InputFormContainer/InputFormContainer */ "./src/components/UI/Forms/InputFormContainer/InputFormContainer.jsx");
/* harmony import */ var _store_slices_authorizeSlice_authorizeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/slices/authorizeSlice/authorizeSlice */ "./src/store/slices/authorizeSlice/authorizeSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var Authorize = function Authorize() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Дэн Миллман'),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    username = _useState2[0],
    setLogin = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('111111'),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    buttonType = _useState6[0],
    setButtonType = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
    isButtonClicked = _useState8[0],
    setIsButtonClicked = _useState8[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var personData = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.regData;
  });
  var headerIsLogedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.authorize;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "registration-student",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
      className: "registration-student__form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
        className: "registration-student__ul",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? username && username.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? username && username.length > 5 ? '' : 'Заполните поле!' : '',
            value: username,
            setValue: setLogin,
            title: 'Ваш логин',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? password && password.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? password && password.length > 5 ? '' : 'Заполните поле!' : '',
            value: password,
            type: 'password',
            setValue: setPassword,
            title: 'Ваш пароль',
            className: 'registration-student__input registration-student__input_password'
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        className: "registration-student__terms_registration-btn",
        type: buttonType,
        onClick: function onClick(e) {
          e.preventDefault();
          setIsButtonClicked(true);
          if (username && password) {
            axios__WEBPACK_IMPORTED_MODULE_9__["default"].post('http://bebest.pp.ua/api/auth/local', {
              password: password,
              identifier: username
            }).then(function (res) {
              dispatch((0,_store_slices_authorizeSlice_authorizeSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthorizeState)(true));
              window.sessionStorage.setItem('id', res.data.user.id);
              console.log(res);
              navigation('../../Account');
            })["catch"](function (e) {
              alert('Неверный логин или пароль');
              console.log(e);
            });
          }
        },
        children: "\u0412\u043E\u0439\u0442\u0438"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Authorize);

/***/ }),

/***/ "./src/components/pages/Registranion/Registration.jsx":
/*!************************************************************!*\
  !*** ./src/components/pages/Registranion/Registration.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Registration_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration.scss */ "./src/components/pages/Registranion/Registration.scss");
/* harmony import */ var _Registration1_Registration1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registration1/Registration1 */ "./src/components/pages/Registranion/Registration1/Registration1.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _RegistrationStudent_RegistrationStudent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegistrationStudent/RegistrationStudent */ "./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.jsx");
/* harmony import */ var _RegistrationSucc_RegistratoinSucc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegistrationSucc/RegistratoinSucc */ "./src/components/pages/Registranion/RegistrationSucc/RegistratoinSucc.jsx");
/* harmony import */ var _RegistrationTeacher_RegistrationTeacher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegistrationTeacher/RegistrationTeacher */ "./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.jsx");
/* harmony import */ var _RegistrationComp_RegistarionComp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RegistrationComp/RegistarionComp */ "./src/components/pages/Registranion/RegistrationComp/RegistarionComp.jsx");
/* harmony import */ var _Authorize_Authorize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Authorize/Authorize */ "./src/components/pages/Registranion/Authorize/Authorize.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var Registration = function Registration() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "registrationProposal",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Registration1_Registration1__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "registrationStudent1",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RegistrationStudent_RegistrationStudent__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "registrationTeacher",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RegistrationTeacher_RegistrationTeacher__WEBPACK_IMPORTED_MODULE_5__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "registrationComp",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RegistrationComp_RegistarionComp__WEBPACK_IMPORTED_MODULE_6__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "registrationStudentSucc",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_RegistrationSucc_RegistratoinSucc__WEBPACK_IMPORTED_MODULE_4__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "Authorize",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Authorize_Authorize__WEBPACK_IMPORTED_MODULE_7__["default"], {})
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);

/***/ }),

/***/ "./src/components/pages/Registranion/Registration1/Registration1.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/pages/Registranion/Registration1/Registration1.jsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Registration1_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Registration1.scss */ "./src/components/pages/Registranion/Registration1/Registration1.scss");
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var _UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UI/Picture/Picture */ "./src/components/UI/Picture/Picture.jsx");
/* harmony import */ var _assets_images_article_goal_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/images/article/goal.png */ "./src/assets/images/article/goal.png");
/* harmony import */ var _assets_images_article_goal_png_as_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/images/article/goal.png?as=webp */ "./src/assets/images/article/goal.png?as=webp");
/* harmony import */ var _assets_images_article_teacher_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/images/article/teacher.png */ "./src/assets/images/article/teacher.png");
/* harmony import */ var _assets_images_article_teacher_png_as_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/images/article/teacher.png?as=webp */ "./src/assets/images/article/teacher.png?as=webp");
/* harmony import */ var _assets_images_article_working_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/images/article/working.png */ "./src/assets/images/article/working.png");
/* harmony import */ var _assets_images_article_working_png_as_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../assets/images/article/working.png?as=webp */ "./src/assets/images/article/working.png?as=webp");
/* harmony import */ var _store_slices_registrationSlice_registrationSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../store/slices/registrationSlice/registrationSlice */ "./src/store/slices/registrationSlice/registrationSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var Registration1 = function Registration1() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([false, false, false]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    choosen = _useState2[0],
    setChoosen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    button = _useState4[0],
    setButton = _useState4[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)();
  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_15__.useNavigate)();
  var studentData = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(function (state) {
    return state.regData;
  });
  var onClickHandler = function onClickHandler(par1, par2, par3) {
    return setChoosen([par1, par2, par3]);
  };
  var onSubmitHandler = function onSubmitHandler(e) {
    e.preventDefault();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: "registration registration-proposal-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("form", {
      className: "registration__form",
      onSubmit: onSubmitHandler,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("ul", {
        className: "registration__ul",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("li", {
          onClick: function onClick() {
            onClickHandler(true, false, false);
            setButton(true);
          },
          className: choosen[0] ? 'registration__choose active' : 'registration__choose',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "registration__choose__circle"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
            img: _assets_images_article_working_png__WEBPACK_IMPORTED_MODULE_10__,
            webp: _assets_images_article_working_png_as_webp__WEBPACK_IMPORTED_MODULE_11__,
            className: 'registration__image'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
            className: "registration__choose__text",
            children: "\u0423\u0447\u0435\u043D\u0438\u043A"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("li", {
          onClick: function onClick() {
            onClickHandler(false, true, false);
            setButton(true);
          },
          className: choosen[1] ? 'registration__choose active' : 'registration__choose',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "registration__choose__circle"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
            img: _assets_images_article_teacher_png__WEBPACK_IMPORTED_MODULE_8__,
            webp: _assets_images_article_teacher_png_as_webp__WEBPACK_IMPORTED_MODULE_9__,
            className: 'registration__image'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
            className: "registration__choose__text",
            children: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("li", {
          onClick: function onClick() {
            onClickHandler(false, false, true);
            setButton(true);
          },
          className: choosen[2] ? 'registration__choose active' : 'registration__choose',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
            className: "registration__choose__circle"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_5__["default"], {
            img: _assets_images_article_goal_png__WEBPACK_IMPORTED_MODULE_6__,
            webp: _assets_images_article_goal_png_as_webp__WEBPACK_IMPORTED_MODULE_7__,
            className: 'registration__image'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
            className: "registration__choose__text",
            children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("button", {
        onClick: function onClick() {
          button ? dispatch((0,_store_slices_registrationSlice_registrationSlice__WEBPACK_IMPORTED_MODULE_12__.setRegDataStudent)(_objectSpread(_objectSpread({}, studentData), {}, {
            type: choosen[0] ? 'Ученик' : choosen[1] ? 'Преподаватель' : 'Компания'
          }))) : '';
          console.log(studentData);
          choosen[0] ? navigation('../RegistrationStudent1') : choosen[1] ? navigation('../RegistrationTeacher') : choosen[2] ? navigation('../RegistrationComp') : '';
        },
        className: button ? 'registration__next-btn active' : 'registration__next-btn',
        children: "\u0414\u0430\u043B\u0435\u0435"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration1);

/***/ }),

/***/ "./src/components/pages/Registranion/RegistrationComp/RegistarionComp.jsx":
/*!********************************************************************************!*\
  !*** ./src/components/pages/Registranion/RegistrationComp/RegistarionComp.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RegistarionComp_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegistarionComp.scss */ "./src/components/pages/Registranion/RegistrationComp/RegistarionComp.scss");
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var _UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UI/Forms/InputFormContainer/InputFormContainer */ "./src/components/UI/Forms/InputFormContainer/InputFormContainer.jsx");
/* harmony import */ var _UI_Forms_InputCheckbox_InputCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../UI/Forms/InputCheckbox/InputCheckbox */ "./src/components/UI/Forms/InputCheckbox/InputCheckbox.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _store_slices_registrationSlice_registrationSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/slices/registrationSlice/registrationSlice */ "./src/store/slices/registrationSlice/registrationSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












var RegistarionComp = function RegistarionComp() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('123123123213'),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    username = _useState4[0],
    setLogin = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('32123131231312'),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
    password = _useState6[0],
    setPassword = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('32123131231312'),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
    confirmPassword = _useState8[0],
    setConfirmPassword = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('fdfafdasfd@mail.com'),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
    email = _useState10[0],
    setEmail = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('43242423423423423'),
    _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
    phoneNum = _useState12[0],
    setPhoneNum = _useState12[1];
  //
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('xxxxxxx'),
    _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
    compName = _useState14[0],
    setCompName = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('xxxxxxx'),
    _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
    inn = _useState16[0],
    setInn = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('xxxxxxx'),
    _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
    city = _useState18[0],
    setCity = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('xxxxxxx'),
    _useState20 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
    country = _useState20[0],
    setCountry = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('xxxxxxx'),
    _useState22 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
    adress = _useState22[0],
    setAdress = _useState22[1];
  //

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('xxxxxxx'),
    _useState24 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState23, 2),
    urAdress = _useState24[0],
    setUrAdress = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('xxxxxxx'),
    _useState26 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState25, 2),
    postIndex = _useState26[0],
    setPostIndex = _useState26[1];
  //
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState28 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState27, 2),
    isButtonClicked = _useState28[0],
    setIsButtonClicked = _useState28[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  var compData = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.regData;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "registration-student registration-teacher",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form", {
      className: formState !== 1 ? 'registration-teacher__form_opacity registration-student__form' : 'registration-student__form',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("ul", {
        className: "registration-student__ul",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? username && username.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? username && username.length > 5 ? '' : 'Заполните поле!' : '',
            value: username,
            setValue: setLogin,
            title: 'Ваш логин',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? password && password.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? password && password.length > 5 ? '' : 'Заполните поле!' : '',
            value: password,
            type: 'password',
            setValue: setPassword,
            title: 'Ваш пароль',
            className: 'registration-student__input registration-student__input_password'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? confirmPassword && confirmPassword.length > 3 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? confirmPassword && confirmPassword.length ? confirmPassword === password ? '' : 'Пароли не совпадают' : 'Заполните поле!' : '',
            value: confirmPassword,
            type: 'password',
            setValue: setConfirmPassword,
            title: 'Подтвердите пароль',
            className: 'registration-student__input registration-student__input_password'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? email && email.length > 5 && email.includes('@') ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? email && email.length > 5 && email.includes('@') ? '' : 'Заполните поле!' : '',
            value: email,
            setValue: setEmail,
            title: 'Ваш e-mail',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: 'number',
            inputClassname: isButtonClicked ? phoneNum && phoneNum.length > 8 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? phoneNum && phoneNum.length > 8 ? '' : 'Заполните поле!' : '',
            value: phoneNum,
            setValue: setPhoneNum,
            title: 'Ваш телефон',
            className: 'registration-student__input'
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        className: "registration-student__terms_registration-btn registration-teacher_btn-next",
        onClick: function onClick(e) {
          e.preventDefault();
          setIsButtonClicked(true);
          if (username && password && confirmPassword && email && password) {
            setFormState(2);
            dispatch((0,_store_slices_registrationSlice_registrationSlice__WEBPACK_IMPORTED_MODULE_8__.setRegDataComp)(_objectSpread(_objectSpread({}, compData), {}, {
              username: username,
              password: password,
              email: email,
              phone: phoneNum
            })));
          }
        },
        children: "\u0414\u0430\u043B\u0435\u0435"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form", {
      className: "\n\t\t\t\t".concat(formState > 1 ? 'registration-student__form' : 'registration-student__form_hidden', " ").concat(formState > 2 ? 'registration-teacher__form_opacity' : ''),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("ul", {
        className: "registration-student__ul",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? compName && compName.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? compName && compName.length > 5 ? '' : 'Заполните поле!' : '',
            value: compName,
            type: 'text',
            setValue: setCompName,
            title: 'Наименование компании',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? inn && inn.length > 3 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? inn && inn.length ? '' : 'Заполните поле!' : '',
            value: inn,
            type: 'text',
            setValue: setInn,
            title: 'ИНН',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? country && country.length > 3 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? inn && inn.length ? '' : 'Заполните поле!' : '',
            value: country,
            type: 'text',
            setValue: setCountry,
            title: 'Страна',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? city && city.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? inn && inn.length > 5 ? '' : 'Заполните поле!' : '',
            value: city,
            setValue: setCity,
            title: 'Город',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? adress && adress.length > 3 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? adress && adress.length > 3 ? '' : 'Заполните поле!' : '',
            value: adress,
            setValue: setAdress,
            title: 'Почтовый адрес',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? urAdress && urAdress.length > 4 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? urAdress && urAdress.length > 4 ? '' : 'Заполните поле!' : '',
            value: urAdress,
            setValue: setUrAdress,
            title: 'Юридический адрес',
            className: 'registration-student__input'
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        className: "registration-student__terms_registration-btn ",
        onClick: function onClick(e) {
          e.preventDefault();
          setIsButtonClicked(true);
          if (username && password === confirmPassword && email && phoneNum && compName && inn && country && city && urAdress && postIndex) {
            dispatch((0,_store_slices_registrationSlice_registrationSlice__WEBPACK_IMPORTED_MODULE_8__.setRegDataComp)(_objectSpread(_objectSpread({}, compData), {}, {
              compName: compName,
              inn: inn,
              city: city,
              adress: adress,
              country: country,
              urAdress: urAdress,
              postIndex: postIndex
            })));
            axios__WEBPACK_IMPORTED_MODULE_11__["default"].post('http://bebest.pp.ua/api/auth/local/register', _objectSpread({}, compData)).then(function (res) {
              console.log(res);
            }).then(function () {
              return navigation('../registrationStudentSucc');
            })["catch"](function (e) {
              return console.log(e);
            });
          }
        },
        children: "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistarionComp);

/***/ }),

/***/ "./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.jsx":
/*!***************************************************************************************!*\
  !*** ./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../UI/Forms/InputFormContainer/InputFormContainer */ "./src/components/UI/Forms/InputFormContainer/InputFormContainer.jsx");
/* harmony import */ var _RegistrationStudent_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RegistrationStudent.scss */ "./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.scss");
/* harmony import */ var _UI_Forms_InputCheckbox_InputCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../UI/Forms/InputCheckbox/InputCheckbox */ "./src/components/UI/Forms/InputCheckbox/InputCheckbox.jsx");
/* harmony import */ var _store_slices_registrationSlice_registrationSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/slices/registrationSlice/registrationSlice */ "./src/store/slices/registrationSlice/registrationSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











var RegistrationStudent = function RegistrationStudent() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('studentTest111'),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    username = _useState2[0],
    setLogin = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('studentTest111'),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('studentTest111'),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
    confirmPassword = _useState6[0],
    setConfirmPassword = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('studentTest111@'),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
    email = _useState8[0],
    setEmail = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
    buttonType = _useState10[0],
    setButtonType = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
    isButtonClicked = _useState12[0],
    setIsButtonClicked = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
    _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
    checkboxState = _useState14[0],
    setCheckBoxState = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),
    _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
    studentDataState = _useState16[0],
    setStudentDataState = _useState16[1];
  var onCheckboxHandler = function onCheckboxHandler() {
    return setCheckBoxState(!checkboxState);
  };
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useNavigate)();
  var studentData = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
    return state.regData;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: "registration-student",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0423\u0447\u0435\u043D\u0438\u043A"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form", {
      className: "registration-student__form",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("ul", {
        className: "registration-student__ul",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
            inputClassname: isButtonClicked ? username && username.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? username && username.length > 5 ? '' : 'Заполните поле!' : '',
            value: username,
            setValue: setLogin,
            title: 'Ваш логин',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
            inputClassname: isButtonClicked ? password && password.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? password && password.length > 5 ? '' : 'Заполните поле!' : '',
            value: password,
            type: 'password',
            setValue: setPassword,
            title: 'Ваш пароль',
            className: 'registration-student__input registration-student__input_password'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
            inputClassname: isButtonClicked ? confirmPassword && confirmPassword.length > 3 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? confirmPassword && confirmPassword.length ? confirmPassword === password ? '' : 'Пароли не совпадают' : 'Заполните поле!' : '',
            value: confirmPassword,
            type: 'password',
            setValue: setConfirmPassword,
            title: 'Подтвердите пароль',
            className: 'registration-student__input registration-student__input_password'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
            inputClassname: isButtonClicked ? email && email.length > 5 && email.includes('@') ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? email && email.length > 5 && email.includes('@') ? '' : 'Заполните поле!' : '',
            value: email,
            setValue: setEmail,
            title: 'Ваш e-mail',
            className: 'registration-student__input'
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "registration-student__terms_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UI_Forms_InputCheckbox_InputCheckbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          checkboxState: checkboxState,
          setCheckboxState: setCheckBoxState,
          onClickHandler: onCheckboxHandler
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("p", {
          className: "registration-student__terms_text",
          children: ["\u042F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u0438", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            children: "\u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
        className: "registration-student__terms_registration-btn",
        type: buttonType,
        onClick: function onClick(e) {
          e.preventDefault();
          setIsButtonClicked(true);
          if (username && password && confirmPassword && password && email && email.includes('@')) {
            dispatch((0,_store_slices_registrationSlice_registrationSlice__WEBPACK_IMPORTED_MODULE_7__.setRegDataStudent)(_objectSpread(_objectSpread({}, studentData), {}, {
              username: username,
              password: password,
              email: email
            })));
            axios__WEBPACK_IMPORTED_MODULE_11__["default"].post('http://bebest.pp.ua/api/auth/local/register', _objectSpread({}, studentData)).then(function (res) {
              console.log(res);
            }).then(function () {
              return navigation('../registrationStudentSucc');
            })["catch"](function (e) {
              return console.log(e.response.data.error.message);
            });
          }
        },
        children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationStudent);

/***/ }),

/***/ "./src/components/pages/Registranion/RegistrationSucc/RegistratoinSucc.jsx":
/*!*********************************************************************************!*\
  !*** ./src/components/pages/Registranion/RegistrationSucc/RegistratoinSucc.jsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var _UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/Buttons/MainButton/MainButton */ "./src/components/UI/Buttons/MainButton/MainButton.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var RegistratoinSucc = function RegistratoinSucc() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "registration-student",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0423\u0441\u043F\u0435\u0448\u043D\u0430!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        marginTop: '105px',
        width: '200px'
      },
      to: "../../",
      children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistratoinSucc);

/***/ }),

/***/ "./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.jsx":
/*!***************************************************************************************!*\
  !*** ./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.jsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RegistrationTeacher_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegistrationTeacher.scss */ "./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.scss");
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var _UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UI/Forms/InputFormContainer/InputFormContainer */ "./src/components/UI/Forms/InputFormContainer/InputFormContainer.jsx");
/* harmony import */ var _UI_Forms_InputCheckbox_InputCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../UI/Forms/InputCheckbox/InputCheckbox */ "./src/components/UI/Forms/InputCheckbox/InputCheckbox.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../UI/Picture/Picture */ "./src/components/UI/Picture/Picture.jsx");
/* harmony import */ var _assets_images_registration_camera_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../assets/images/registration/camera.png */ "./src/assets/images/registration/camera.png");
/* harmony import */ var _assets_images_registration_camera_png_as_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/images/registration/camera.png?as=webp */ "./src/assets/images/registration/camera.png?as=webp");
/* harmony import */ var _store_slices_registrationSlice_registrationSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../store/slices/registrationSlice/registrationSlice */ "./src/store/slices/registrationSlice/registrationSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }















var RegistrationTeacher = function RegistrationTeacher() {
  var randomMail = "".concat(Math.random() * 10000, "@gmail.com");
  var randomLogin = "".concat(Math.random() * 10000, "xxx").concat(Math.random() * 100);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    formState = _useState2[0],
    setFormState = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(randomLogin),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    username = _useState4[0],
    setLogin = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('user111111'),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
    password = _useState6[0],
    setPassword = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('user111111'),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState7, 2),
    confirmPassword = _useState8[0],
    setConfirmPassword = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(randomMail),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState9, 2),
    email = _useState10[0],
    setEmail = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('111111111111'),
    _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState11, 2),
    phoneNum = _useState12[0],
    setPhoneNum = _useState12[1];
  //
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),
    _useState14 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState13, 2),
    photo = _useState14[0],
    setPhoto = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('2222222222'),
    _useState16 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState15, 2),
    passport = _useState16[0],
    setPassport = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('3333333333'),
    _useState18 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState17, 2),
    country = _useState18[0],
    setCountry = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('4444444'),
    _useState20 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState19, 2),
    city = _useState20[0],
    setCity = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('55555555'),
    _useState22 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState21, 2),
    adress = _useState22[0],
    setAdress = _useState22[1];
  //
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('1111111111'),
    _useState24 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState23, 2),
    edu = _useState24[0],
    setEdu = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('22222222'),
    _useState26 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState25, 2),
    exp = _useState26[0],
    setExp = _useState26[1];
  //
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState28 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState27, 2),
    isButtonClicked = _useState28[0],
    setIsButtonClicked = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState30 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState29, 2),
    checkboxState = _useState30[0],
    setCheckBoxState = _useState30[1];
  var onCheckboxHandler = function onCheckboxHandler() {
    return setCheckBoxState(!checkboxState);
  };
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  var navigation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_13__.useNavigate)();
  var teacherData = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.regData;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "registration-student registration-teacher",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
      className: formState !== 1 ? 'registration-teacher__form_opacity registration-student__form' : 'registration-student__form',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("ul", {
        className: "registration-student__ul",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? username && username.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? username && username.length > 5 ? '' : 'Заполните поле!' : '',
            value: username,
            setValue: setLogin,
            title: 'Ваш логин',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? password && password.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? password && password.length > 5 ? '' : 'Заполните поле!' : '',
            value: password,
            type: 'password',
            setValue: setPassword,
            title: 'Ваш пароль',
            className: 'registration-student__input registration-student__input_password'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? confirmPassword && confirmPassword.length > 3 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? confirmPassword && confirmPassword.length ? confirmPassword === password ? '' : 'Пароли не совпадают' : 'Заполните поле!' : '',
            value: confirmPassword,
            type: 'password',
            setValue: setConfirmPassword,
            title: 'Подтвердите пароль',
            className: 'registration-student__input registration-student__input_password'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? email && email.length > 5 && email.includes('@') ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? email && email.length > 5 && email.includes('@') ? '' : 'Заполните поле!' : '',
            value: email,
            setValue: setEmail,
            title: 'Ваш e-mail',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: 'number',
            inputClassname: isButtonClicked ? phoneNum && phoneNum.length > 8 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? phoneNum && phoneNum.length > 8 ? '' : 'Заполните поле!' : '',
            value: phoneNum,
            setValue: setPhoneNum,
            title: 'Ваш телефон',
            className: 'registration-student__input'
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button", {
        className: "registration-student__terms_registration-btn registration-teacher_btn-next",
        onClick: function onClick(e) {
          e.preventDefault();
          setIsButtonClicked(true);
          if (username && password && confirmPassword && email && password) {
            setFormState(2);
          }
        },
        children: "\u0414\u0430\u043B\u0435\u0435"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
      className: "\n\t\t\t\t".concat(formState > 1 ? 'registration-student__form' : 'registration-student__form_hidden', " ").concat(formState > 2 ? 'registration-teacher__form_opacity' : ''),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("ul", {
        className: "registration-student__ul",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("li", {
          className: "registration-student__li registration-input-image_wr",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", {
            onChange: function onChange(event) {
              setPhoto(event.target.files[0]);
            },
            type: "file",
            className: "registration-input__input"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img", {
            className: "registration__avatar",
            src: photo ? URL.createObjectURL(photo) : _assets_images_registration_camera_png__WEBPACK_IMPORTED_MODULE_9__
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
            className: "regisration-input__text",
            children: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044E"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? passport && passport.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? passport && passport.length > 5 ? '' : 'Заполните поле!' : '',
            value: passport,
            type: 'text',
            setValue: setPassport,
            title: 'Паспорт',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? confirmPassword && confirmPassword.length > 3 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? country && country.length ? '' : 'Заполните поле!' : '',
            value: country,
            type: 'text',
            setValue: setCountry,
            title: 'Страна',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? city && city.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? country && country.length > 5 ? '' : 'Заполните поле!' : '',
            value: city,
            setValue: setCity,
            title: 'Город',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? adress && adress.length > 8 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? adress && adress.length > 8 ? '' : 'Заполните поле!' : '',
            value: adress,
            setValue: setAdress,
            title: 'Адрес',
            className: 'registration-student__input'
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button", {
        className: "registration-student__terms_registration-btn registration-teacher_btn-next",
        onClick: function onClick(e) {
          e.preventDefault();
          setIsButtonClicked(true);
          if (passport && country && city && adress) {
            setFormState(3);
          }
        },
        children: "\u0414\u0430\u043B\u0435\u0435"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
      className: formState === 3 ? 'registration-student__form' : 'registration-student__form_hidden',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("ul", {
        className: "registration-student__ul",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? edu && edu.length > 5 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? edu && edu.length > 5 ? '' : 'Заполните поле!' : '',
            value: edu,
            type: 'text',
            setValue: setEdu,
            title: 'Образование',
            className: 'registration-student__input'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("li", {
          className: "registration-student__li",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputFormContainer_InputFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
            inputClassname: isButtonClicked ? exp && exp.length > 3 ? '' : 'input_empty' : '',
            errorMessage: isButtonClicked ? exp && exp.length ? '' : 'Заполните поле!' : '',
            value: exp,
            type: 'text',
            setValue: setExp,
            title: 'Опыт работы',
            className: 'registration-student__input'
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "registration-student__terms_block",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UI_Forms_InputCheckbox_InputCheckbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
          checkboxState: checkboxState,
          setCheckboxState: setCheckBoxState,
          onClickHandler: onCheckboxHandler
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("p", {
          className: "registration-student__terms_text",
          children: ["\u042F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u0438", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
            children: "\u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("button", {
        className: "registration-student__terms_registration-btn ",
        onClick: function onClick(e) {
          e.preventDefault();
          setIsButtonClicked(true);
          if (exp && edu) {
            dispatch((0,_store_slices_registrationSlice_registrationSlice__WEBPACK_IMPORTED_MODULE_11__.setRegDataTeacher)(_objectSpread(_objectSpread({}, teacherData), {}, {
              username: username,
              password: password,
              email: email,
              phone: phoneNum,
              passport: passport,
              country: country,
              city: city,
              adress: adress,
              edu: edu,
              exp: exp
            })));
            console.log(photo);
            var formData = new FormData();
            formData.append('image', photo);
            var _iterator = _createForOfIteratorHelper(formData.entries()),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var pair = _step.value;
                console.log(pair[0] + ', ' + pair[1]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            axios__WEBPACK_IMPORTED_MODULE_14__["default"].post('http://bebest.pp.ua/api/auth/local/register', _objectSpread(_objectSpread({}, teacherData), {}, {
              username: username,
              password: password,
              email: email,
              phone: phoneNum,
              passport: passport,
              country: country,
              city: city,
              adress: adress,
              edu: edu,
              exp: exp,
              avatar: photo
            })).then(function (res) {
              console.log(res);
            }).then(function () {
              return navigation('../registrationStudentSucc');
            })["catch"](function (e) {
              alert(e);
              console.log(e);
            });
          }
        },
        children: "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E"
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationTeacher);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Forms/InputCheckbox/InputCheckbox.scss":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Forms/InputCheckbox/InputCheckbox.scss ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../assets/icons/check.svg */ "./src/assets/icons/check.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.checkbox {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid #f04973;
  background: #f04973;
  cursor: pointer;
}
.checkbox.active {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: center center;
}`, "",{"version":3,"sources":["webpack://./src/components/UI/Forms/InputCheckbox/InputCheckbox.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,cAAA;EACA,kBAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;AACJ;AAAI;EACI,yDAAA;EACA,4BAAA;EACA,kCAAA;AAER","sourcesContent":[".checkbox {\r\n    width: 17px;\r\n    height: 17px;\r\n    flex-shrink: 0;\r\n    border-radius: 3px;\r\n    border: 1px solid #f04973;\r\n    background: #f04973;\r\n    cursor: pointer;\r\n    &.active {\r\n        background-image: url('../../../../assets/icons/check.svg');\r\n        background-repeat: no-repeat;\r\n        background-position: center center;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/Authorize/Authorize.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/Authorize/Authorize.scss ***!
  \*******************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/Registration.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/Registration.scss ***!
  \************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `::global(.smallContainer) {
  padding: 0 227px;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Registranion/Registration.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;AACJ","sourcesContent":["::global(.smallContainer) {\r\n    padding: 0 227px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/Registration1/Registration1.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/Registration1/Registration1.scss ***!
  \***************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.registration .title {
  text-align: center;
}

.registration-proposal-container {
  max-width: 1146px;
  display: block;
  margin: 0 auto;
}

.registration__ul {
  display: flex;
  justify-content: space-between;
}

.registration__choose {
  border-radius: 10px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px;
  flex-direction: column;
  padding: 20px;
  width: 350px;
  height: 280px;
  justify-content: flex-start;
  padding-top: 80px;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  transition: 0.3s;
}
.registration__choose::after {
  content: "";
  width: 104px;
  height: 104px;
  background: rgb(243, 247, 252);
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  bottom: 40%;
}
.registration__choose.active {
  border: 1px solid #f04973;
}
.registration__choose.active .registration__choose__circle {
  border: 1px solid #f04973;
}
.registration__choose.active .registration__choose__circle::after {
  content: "";
  width: 11px;
  height: 11px;
  background: rgb(240, 73, 115);
  border-radius: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
}

.registration__image {
  position: relative;
  z-index: 1;
}

.registration__choose__circle {
  position: absolute;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  border: 1px solid rgb(198, 206, 211);
  top: 20px;
  right: 20px;
  border-radius: 50%;
}

.registration__choose__text {
  color: #292c32;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.22; /* 122.222% */
  margin-top: 50px;
}

.registration__next-btn {
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22; /* 122.222% */
  border-radius: 7px;
  background: transparent;
  border: 1px solid black;
  padding: 10px 20px;
  margin: 25px auto;
  display: block;
  transition: 0.3;
}
.registration__next-btn.active {
  color: #fff;
  background: linear-gradient(90deg, #f04973 0%, #fa6655 100%);
  box-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Registranion/Registration1/Registration1.scss"],"names":[],"mappings":"AACI;EACI,kBAAA;AAAR;;AAOA;EACI,iBAAA;EACA,cAAA;EACA,cAAA;AAJJ;;AAMA;EACI,aAAA;EACA,8BAAA;AAHJ;;AAKA;EACI,mBAAA;EAEA,6BAAA;EACA,oCAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;EACA,aAAA;EACA,2BAAA;EACA,iBAAA;EACA,sDAAA;EACA,gBAAA;AAHJ;AAII;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;AAFR;AAII;EACI,yBAAA;AAFR;AAGQ;EACI,yBAAA;AADZ;AAEY;EACI,WAAA;EACA,WAAA;EACA,YAAA;EACA,6BAAA;EACA,kBAAA;EACA,SAAA;EACA,kBAAA;EACA,gCAAA;EACA,QAAA;AAAhB;;AAMA;EACI,kBAAA;EACA,UAAA;AAHJ;;AAKA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,oCAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;AAFJ;;AAIA;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,gBAAA;AADJ;;AAIA;EACI,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,kBAAA;EACA,uBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;AADJ;AAGI;EACI,WAAA;EACA,4DAAA;EACA,oDAAA;AADR","sourcesContent":[".registration {\r\n    .title {\r\n        text-align: center;\r\n    }\r\n}\r\n.smallContainer {\r\n}\r\n.registration__form {\r\n}\r\n.registration-proposal-container {\r\n    max-width: 1146px;\r\n    display: block;\r\n    margin: 0 auto;\r\n}\r\n.registration__ul {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.registration__choose {\r\n    border-radius: 10px;\r\n\r\n    border: 1px solid transparent;\r\n    background: rgba(255, 255, 255, 0.1);\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 20px;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    width: 350px;\r\n    height: 280px;\r\n    justify-content: flex-start;\r\n    padding-top: 80px;\r\n    box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\r\n    transition: 0.3s;\r\n    &::after {\r\n        content: '';\r\n        width: 104px;\r\n        height: 104px;\r\n        background: rgba(243, 247, 252, 1);\r\n        position: absolute;\r\n        border-radius: 50%;\r\n        z-index: 0;\r\n        bottom: 40%;\r\n    }\r\n    &.active {\r\n        border: 1px solid #f04973;\r\n        .registration__choose__circle {\r\n            border: 1px solid #f04973;\r\n            &::after {\r\n                content: '';\r\n                width: 11px;\r\n                height: 11px;\r\n                background: rgb(240, 73, 115);\r\n                border-radius: 50%;\r\n                left: 50%;\r\n                position: absolute;\r\n                transform: translate(-50%, -50%);\r\n                top: 50%;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.registration__image {\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n.registration__choose__circle {\r\n    position: absolute;\r\n    width: 25px;\r\n    height: 25px;\r\n    flex-shrink: 0;\r\n    border: 1px solid rgba(198, 206, 211, 1);\r\n    top: 20px;\r\n    right: 20px;\r\n    border-radius: 50%;\r\n}\r\n.registration__choose__text {\r\n    color: #292c32;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 1.22; /* 122.222% */\r\n    margin-top: 50px;\r\n}\r\n\r\n.registration__next-btn {\r\n    color: #000;\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    line-height: 1.22; /* 122.222% */\r\n    border-radius: 7px;\r\n    background: transparent;\r\n    border: 1px solid black;\r\n    padding: 10px 20px;\r\n    margin: 25px auto;\r\n    display: block;\r\n    transition: 0.3;\r\n\r\n    &.active {\r\n        color: #fff;\r\n        background: linear-gradient(90deg, #f04973 0%, #fa6655 100%);\r\n        box-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/RegistrationComp/RegistarionComp.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/RegistrationComp/RegistarionComp.scss ***!
  \********************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.scss ***!
  \***************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.registration-student {
  display: flex;
  justify-content: center;
}
.registration-student .title {
  position: absolute;
}

.registration-student__form {
  width: 380px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  padding: 40px 50px;
  margin-top: 88px;
  margin-bottom: 100px;
}

.registration-student__terms_block {
  margin-top: 15px;
  display: flex;
  /* justify-content: space-between; */
}

.registration-student__terms_text {
  margin-left: 11px;
  color: #454b58;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.54; /* 154.545% */
}
.registration-student__terms_text span {
  color: #f04973;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 5px;
}
.registration-student__terms_text span:hover {
  text-decoration: underline;
}

.registration-student__terms_registration-btn {
  border-radius: 7px;
  background: linear-gradient(90deg, #f04973 0%, #fa6655 100%);
  box-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);
  padding: 10px 0;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  margin-top: 23px;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,uBAAA;AACJ;AAAI;EACI,kBAAA;AAER;;AACA;EACI,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,sDAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;AAEJ;;AAIA;EACI,gBAAA;EACA,aAAA;EACA,oCAAA;AADJ;;AAGA;EACI,iBAAA;EAEA,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;AADJ;AAEI;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;AAAR;AACQ;EACI,0BAAA;AACZ;;AAIA;EACI,kBAAA;EACA,4DAAA;EACA,oDAAA;EACA,eAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;EACA,gBAAA;AADJ","sourcesContent":[".registration-student {\r\n    display: flex;\r\n    justify-content: center;\r\n    .title {\r\n        position: absolute;\r\n    }\r\n}\r\n.registration-student__form {\r\n    width: 380px;\r\n    border-radius: 10px;\r\n    background: #fff;\r\n    box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\r\n    padding: 40px 50px;\r\n    margin-top: 88px;\r\n    margin-bottom: 100px;\r\n}\r\n.registration-student__ul {\r\n}\r\n.registration-student__li {\r\n}\r\n.registration-student__terms_block {\r\n    margin-top: 15px;\r\n    display: flex;\r\n    /* justify-content: space-between; */\r\n}\r\n.registration-student__terms_text {\r\n    margin-left: 11px;\r\n\r\n    color: #454b58;\r\n    font-family: Montserrat;\r\n    font-size: 11px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 1.54; /* 154.545% */\r\n    span {\r\n        color: #f04973;\r\n        cursor: pointer;\r\n        transition: 0.3s;\r\n        margin-left: 5px;\r\n        &:hover {\r\n            text-decoration: underline;\r\n        }\r\n    }\r\n}\r\n\r\n.registration-student__terms_registration-btn {\r\n    border-radius: 7px;\r\n    background: linear-gradient(90deg, #f04973 0%, #fa6655 100%);\r\n    box-shadow: 0px 15px 25px 0px rgba(193, 42, 61, 0.2);\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    width: 100%;\r\n    margin-top: 23px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.scss ***!
  \***************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.registration-teacher {
  gap: 40px;
}

.registration-student__form_hidden {
  display: none;
}

.registration-teacher_btn-next {
  width: 130px;
  justify-content: flex-start;
}

.registration-teacher__form_opacity {
  opacity: 0.5;
  pointer-events: none;
}

.registration-input-image_wr {
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 82%;
  margin-bottom: 20px;
}

.registration-input__input {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.regisration-input__text {
  color: #8b919e;
  font-size: 13px;
  font-weight: 600;
  line-height: 1; /* 100% */
  text-decoration-line: underline;
}

.registration__avatar {
  width: 54px;
  height: 54px;
  -o-object-fit: contain;
     object-fit: contain;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.scss"],"names":[],"mappings":"AAAA;EACI,SAAA;AACJ;;AACA;EACI,aAAA;AAEJ;;AAAA;EACI,YAAA;EACA,2BAAA;AAGJ;;AADA;EACI,YAAA;EACA,oBAAA;AAIJ;;AAFA;EACI,aAAA;EACA,8BAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,mBAAA;AAKJ;;AAHA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,eAAA;AAMJ;;AAJA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA,EAAA,SAAA;EACA,+BAAA;AAOJ;;AALA;EACI,WAAA;EACA,YAAA;EACA,sBAAA;KAAA,mBAAA;AAQJ","sourcesContent":[".registration-teacher {\r\n    gap: 40px;\r\n}\r\n.registration-student__form_hidden {\r\n    display: none;\r\n}\r\n.registration-teacher_btn-next {\r\n    width: 130px;\r\n    justify-content: flex-start;\r\n}\r\n.registration-teacher__form_opacity {\r\n    opacity: 0.5;\r\n    pointer-events: none;\r\n}\r\n.registration-input-image_wr {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    align-items: center;\r\n    width: 82%;\r\n    margin-bottom: 20px;\r\n}\r\n.registration-input__input {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n}\r\n.regisration-input__text {\r\n    color: #8b919e;\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n    line-height: 1; /* 100% */\r\n    text-decoration-line: underline;\r\n}\r\n.registration__avatar {\r\n    width: 54px;\r\n    height: 54px;\r\n    object-fit: contain;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/components/UI/Forms/InputCheckbox/InputCheckbox.scss":
/*!******************************************************************!*\
  !*** ./src/components/UI/Forms/InputCheckbox/InputCheckbox.scss ***!
  \******************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InputCheckbox_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./InputCheckbox.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Forms/InputCheckbox/InputCheckbox.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InputCheckbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InputCheckbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InputCheckbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_InputCheckbox_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Registranion/Authorize/Authorize.scss":
/*!********************************************************************!*\
  !*** ./src/components/pages/Registranion/Authorize/Authorize.scss ***!
  \********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Authorize_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./Authorize.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/Authorize/Authorize.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Authorize_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Authorize_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Authorize_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Authorize_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Registranion/Registration.scss":
/*!*************************************************************!*\
  !*** ./src/components/pages/Registranion/Registration.scss ***!
  \*************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Registration.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/Registration.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Registranion/Registration1/Registration1.scss":
/*!****************************************************************************!*\
  !*** ./src/components/pages/Registranion/Registration1/Registration1.scss ***!
  \****************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration1_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./Registration1.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/Registration1/Registration1.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration1_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration1_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration1_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Registration1_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Registranion/RegistrationComp/RegistarionComp.scss":
/*!*********************************************************************************!*\
  !*** ./src/components/pages/Registranion/RegistrationComp/RegistarionComp.scss ***!
  \*********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistarionComp_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./RegistarionComp.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/RegistrationComp/RegistarionComp.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistarionComp_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistarionComp_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistarionComp_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistarionComp_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.scss":
/*!****************************************************************************************!*\
  !*** ./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.scss ***!
  \****************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationStudent_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./RegistrationStudent.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/RegistrationStudent/RegistrationStudent.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationStudent_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationStudent_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationStudent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationStudent_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.scss":
/*!****************************************************************************************!*\
  !*** ./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.scss ***!
  \****************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationTeacher_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./RegistrationTeacher.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Registranion/RegistrationTeacher/RegistrationTeacher.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationTeacher_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationTeacher_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationTeacher_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RegistrationTeacher_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/icons/check.svg":
/*!************************************!*\
  !*** ./src/assets/icons/check.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/358b537439f537f27e65.svg";

/***/ }),

/***/ "./src/assets/images/article/goal.png":
/*!********************************************!*\
  !*** ./src/assets/images/article/goal.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/goal1c43c51cc7bf90191b95.png";

/***/ }),

/***/ "./src/assets/images/article/goal.png?as=webp":
/*!****************************************************!*\
  !*** ./src/assets/images/article/goal.png?as=webp ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/goalc8ca3c2533fd56565fa2.webp";

/***/ }),

/***/ "./src/assets/images/article/teacher.png":
/*!***********************************************!*\
  !*** ./src/assets/images/article/teacher.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/teacher3dade6f9825672458aa5.png";

/***/ }),

/***/ "./src/assets/images/article/teacher.png?as=webp":
/*!*******************************************************!*\
  !*** ./src/assets/images/article/teacher.png?as=webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/teacherb4f4ecb4a49f6eabcd34.webp";

/***/ }),

/***/ "./src/assets/images/article/working.png":
/*!***********************************************!*\
  !*** ./src/assets/images/article/working.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/working561c16a332ab778b9217.png";

/***/ }),

/***/ "./src/assets/images/article/working.png?as=webp":
/*!*******************************************************!*\
  !*** ./src/assets/images/article/working.png?as=webp ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/working753f0eda4c130e0522e7.webp";

/***/ }),

/***/ "./src/assets/images/registration/camera.png":
/*!***************************************************!*\
  !*** ./src/assets/images/registration/camera.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/camera1a7fb512cfee2006b8df.png";

/***/ }),

/***/ "./src/assets/images/registration/camera.png?as=webp":
/*!***********************************************************!*\
  !*** ./src/assets/images/registration/camera.png?as=webp ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/camera45db2c5ea2a5facb0e77.webp";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Registranion_Registration_jsx.app.6904b391da54540abe5e.js.map