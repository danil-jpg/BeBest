"use strict";
(self["webpackChunkBeBest"] = self["webpackChunkBeBest"] || []).push([["src_components_pages_Teachers_Teacher_jsx"],{

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
    mb = _ref$mb === void 0 ? '0px' : _ref$mb;
  // sizes = small, middle, big;
  // types = color,transparent

  var styles = _objectSpread({
    maxWidth: "".concat(maxWidth),
    margin: "0 0 ".concat(mb)
  }, style);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: to,
    className: "main-btn main-btn_".concat(size, " main-btn_").concat(type),
    style: styles,
    onClick: onClick ? onClick : function () {
      console.log('not callback');
    },
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

/***/ "./src/components/UI/Forms/RadioForm/RadioForm.jsx":
/*!*********************************************************!*\
  !*** ./src/components/UI/Forms/RadioForm/RadioForm.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioForm.module.scss */ "./src/components/UI/Forms/RadioForm/RadioForm.module.scss");
/* harmony import */ var _utils_isActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/isActive */ "./src/utils/isActive.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var RadioForm = function RadioForm(_ref) {
  var name = _ref.name,
    title = _ref.title,
    value = _ref.value,
    checked = _ref.checked,
    setChecked = _ref.setChecked;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("label", {
    className: "".concat(_RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].radio, " ").concat((0,_utils_isActive__WEBPACK_IMPORTED_MODULE_2__.isChecked)(checked, value, _RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].active)),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      className: "".concat(_RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].radio__input),
      type: "radio",
      name: name,
      value: value,
      checked: checked === value,
      onChange: function onChange(e) {
        setChecked(e.currentTarget.value);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: _RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].radio__custom
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: _RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].radio__text,
      children: title
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioForm);

/***/ }),

/***/ "./src/components/common/Pagination/PaginationD.jsx":
/*!**********************************************************!*\
  !*** ./src/components/common/Pagination/PaginationD.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pagination_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.scss */ "./src/components/common/Pagination/Pagination.scss");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _assets_icons_ArrowLeft_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/ArrowLeft.svg */ "./src/assets/icons/ArrowLeft.svg");
/* harmony import */ var _assets_icons_arrowRight_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/arrowRight.svg */ "./src/assets/icons/arrowRight.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Pagination = function Pagination(_ref) {
  var postsPerPage = _ref.postsPerPage,
    totalPosts = _ref.totalPosts,
    currentPage = _ref.currentPage,
    paginate = _ref.paginate,
    nextPage = _ref.nextPage,
    prevPage = _ref.prevPage;
  var pageNumbers = [];
  for (var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", {
    className: "pagination-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
      onClick: prevPage,
      className: "pagination-item pagination-arrow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: _assets_icons_ArrowLeft_svg__WEBPACK_IMPORTED_MODULE_2__
      })
    }), pageNumbers.map(function (el) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
        onClick: function onClick() {
          return paginate(el);
        },
        className: el === currentPage ? 'pagination-item pagination-item_active' : 'pagination-item',
        children: el
      }, (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])());
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
      onClick: nextPage,
      className: "pagination-item pagination-arrow",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        src: _assets_icons_arrowRight_svg__WEBPACK_IMPORTED_MODULE_3__
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "./src/components/pages/Teachers/Teacher.jsx":
/*!***************************************************!*\
  !*** ./src/components/pages/Teachers/Teacher.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Teacher_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Teacher.scss */ "./src/components/pages/Teachers/Teacher.scss");
/* harmony import */ var _common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/ContainerMain/ContainerMain */ "./src/components/common/ContainerMain/ContainerMain.jsx");
/* harmony import */ var _TeacherQuotes_TeacherQuotes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeacherQuotes/TeacherQuotes */ "./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.jsx");
/* harmony import */ var _TeacherGreet_TeacherGreet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TeacherGreet/TeacherGreet */ "./src/components/pages/Teachers/TeacherGreet/TeacherGreet.jsx");
/* harmony import */ var _TeacherPosibility_TeacherPosibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TeacherPosibility/TeacherPosibility */ "./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.jsx");
/* harmony import */ var _TeacherCv_TeacherCv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TeacherCv/TeacherCv */ "./src/components/pages/Teachers/TeacherCv/TeacherCv.jsx");
/* harmony import */ var _TeacherMarks_TeacherMarks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TeacherMarks/TeacherMarks */ "./src/components/pages/Teachers/TeacherMarks/TeacherMarks.jsx");
/* harmony import */ var _TeacherLessons_TeacherLesson__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TeacherLessons/TeacherLesson */ "./src/components/pages/Teachers/TeacherLessons/TeacherLesson.jsx");
/* harmony import */ var _TeacherCalendar_TeacherCalendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TeacherCalendar/TeacherCalendar */ "./src/components/pages/Teachers/TeacherCalendar/TeacherCalendar.jsx");
/* harmony import */ var _TeacherComment_TeacherComment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TeacherComment/TeacherComment */ "./src/components/pages/Teachers/TeacherComment/TeacherComment.jsx");
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/useFetch */ "./src/utils/useFetch.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _common_Loading_Loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/Loading/Loading */ "./src/components/common/Loading/Loading.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
















var Teacher = function Teacher() {
  var userId = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)(function (state) {
    return state.userPageSlice.userId;
  }) || 13;
  var obj = (0,_utils_useFetch__WEBPACK_IMPORTED_MODULE_11__["default"])("users/".concat(userId, "/?populate=*"));
  if (!obj) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_13__["default"], {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
    className: "teacher",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "teacher__background"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "teacher__background2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
        className: "teacher__body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "teacher__body__left",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeacherGreet_TeacherGreet__WEBPACK_IMPORTED_MODULE_4__["default"], {
            user: obj.data
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeacherQuotes_TeacherQuotes__WEBPACK_IMPORTED_MODULE_3__["default"], {
            bio: obj.data.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeacherCalendar_TeacherCalendar__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeacherPosibility_TeacherPosibility__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeacherCv_TeacherCv__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeacherMarks_TeacherMarks__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeacherComment_TeacherComment__WEBPACK_IMPORTED_MODULE_10__["default"], {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
          className: "teacher__body__right",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_TeacherLessons_TeacherLesson__WEBPACK_IMPORTED_MODULE_8__["default"], {})
        })]
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Teacher);

/***/ }),

/***/ "./src/components/pages/Teachers/TeacherComment/TeacherComment.jsx":
/*!*************************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherComment/TeacherComment.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TeacherComment_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TeacherComment.scss */ "./src/components/pages/Teachers/TeacherComment/TeacherComment.scss");
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/useFetch */ "./src/utils/useFetch.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var _assets_images_teacher_avatarCircle_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/images/teacher/avatarCircle.png */ "./src/assets/images/teacher/avatarCircle.png");
/* harmony import */ var _assets_images_teacher_avatarCircle_png_as_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/images/teacher/avatarCircle.png?as=webp */ "./src/assets/images/teacher/avatarCircle.png?as=webp");
/* harmony import */ var _UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../UI/Picture/Picture */ "./src/components/UI/Picture/Picture.jsx");
/* harmony import */ var _UI_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../UI/IconRenderer/IconRenderer */ "./src/components/UI/IconRenderer/IconRenderer.jsx");
/* harmony import */ var _common_Pagination_PaginationD__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/Pagination/PaginationD */ "./src/components/common/Pagination/PaginationD.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_slices_teachreFilterSlice_teacherFetchUsersSlice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../store/slices/teachreFilterSlice/teacherFetchUsersSlice */ "./src/store/slices/teachreFilterSlice/teacherFetchUsersSlice.js");
/* harmony import */ var _common_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/Loading/Loading */ "./src/components/common/Loading/Loading.jsx");
/* harmony import */ var _UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../UI/Forms/SelectFormContainer/SelectFormContainer */ "./src/components/UI/Forms/SelectFormContainer/SelectFormContainer.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



















var TeacherComment = function TeacherComment() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var postsPerPage = 2;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {
    return state.userContentSlice.users;
  });
  var selectsData = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {
    return state.userContentSlice.selects;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,_store_slices_teachreFilterSlice_teacherFetchUsersSlice__WEBPACK_IMPORTED_MODULE_10__.fetchAllUsers)());
  }, [dispatch]);
  var indexOfLastPost = currentPage * postsPerPage;
  var indexOfFirstPost = indexOfLastPost - postsPerPage;
  var paginate = function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  };
  var previousPage = function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  var nextPage = function nextPage() {
    if (currentPage !== Math.ceil(users.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  if (users.length < 1) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "teacher__comments",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "teacher__comments_top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "comments_top_text",
        children: "\u041E\u0442\u0437\u044B\u0432\u044B"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("p", {
        className: "comments_top_text2",
        children: [users.length, " \u043E\u0442\u0437\u044B\u0432\u043E\u0432"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "filters_wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: 'Количество занятий',
        list: selectsData[0],
        style: {
          color: 'black'
        },
        setItem: _store_slices_teachreFilterSlice_teacherFetchUsersSlice__WEBPACK_IMPORTED_MODULE_10__.selectSort
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: 'Пол преподавателя',
        list: selectsData[1],
        style: {
          color: 'black'
        },
        setItem: _store_slices_teachreFilterSlice_teacherFetchUsersSlice__WEBPACK_IMPORTED_MODULE_10__.selectSort
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "comments_wr",
      children: [users.slice(indexOfFirstPost, indexOfLastPost).map(function (el) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "comment_item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "comment_top",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: 'comment_avatar',
              img: _assets_images_teacher_avatarCircle_png__WEBPACK_IMPORTED_MODULE_4__,
              webp: _assets_images_teacher_avatarCircle_png_as_webp__WEBPACK_IMPORTED_MODULE_5__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "comment_name-wr",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: "comment_name",
                children: el.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("p", {
                className: "comment_lessonNum",
                children: ["\u041A\u043E\u043B-\u0432\u043E \u0443\u0440\u043E\u043A\u043E\u0432: ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
                  children: el.lessonNum
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "comment_descr",
            children: el.descr
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "comment_bottom-wr",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              className: "comment_date",
              children: el.date
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "comment_likes-wr",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_UI_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_7__.IconRenderer, {
                id: 'thumbUp',
                className: "thumbUp"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: "comment_like",
                children: el.likes
              })]
            })]
          })]
        }, (0,uuid__WEBPACK_IMPORTED_MODULE_14__["default"])());
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_common_Pagination_PaginationD__WEBPACK_IMPORTED_MODULE_8__["default"], {
        currentPage: currentPage,
        postsPerPage: postsPerPage,
        totalPosts: users.length,
        paginate: paginate,
        prevPage: previousPage,
        nextPage: nextPage
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherComment);

/***/ }),

/***/ "./src/components/pages/Teachers/TeacherCv/TeacherCv.jsx":
/*!***************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherCv/TeacherCv.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeacherCv_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherCv.scss */ "./src/components/pages/Teachers/TeacherCv/TeacherCv.scss");
/* harmony import */ var _assets_icons_brain_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/icons/brain.svg */ "./src/assets/icons/brain.svg");
/* harmony import */ var _assets_icons_sert_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/icons/sert.svg */ "./src/assets/icons/sert.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TeacherCv = function TeacherCv() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "teacher__cv",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: "teacher__cv_title",
      children: "\u0420\u0435\u0437\u044E\u043C\u0435 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "teacher__cv_subtitle-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        className: "teacher__cv_subtitle-img",
        src: _assets_icons_brain_svg__WEBPACK_IMPORTED_MODULE_2__
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "teacher__cv_subtitle-text",
        children: "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "teacher__cv__item-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "teacher__cv__item_date",
        children: "2015-2017"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "teacher__cv__item__descr-wr",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_title",
          children: "Online teacher"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "Verbling \u2013 England"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "ELT/TESOL"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "teacher__cv__item-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "teacher__cv__item_date",
        children: "2015-2017"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "teacher__cv__item__descr-wr",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_title",
          children: "Online teacher"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "Verbling \u2013 England"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "ELT/TESOL"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "teacher__cv__item-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "teacher__cv__item_date",
        children: "2015-2017"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "teacher__cv__item__descr-wr",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_title",
          children: "Online teacher"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "Verbling \u2013 England"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "ELT/TESOL"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "teacher__cv_subtitle-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        className: "teacher__cv_subtitle-img",
        src: _assets_icons_sert_svg__WEBPACK_IMPORTED_MODULE_3__
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "teacher__cv_subtitle-text",
        children: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "teacher__cv__item-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "teacher__cv__item_date",
        children: "2015-2017"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "teacher__cv__item__descr-wr",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_title",
          children: "Online teacher"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "Verbling \u2013 England"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "ELT/TESOL"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "teacher__cv__item-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "teacher__cv__item_date",
        children: "2015-2017"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "teacher__cv__item__descr-wr",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_title",
          children: "Online teacher"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "Verbling \u2013 England"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "ELT/TESOL"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "teacher__cv__item-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "teacher__cv__item_date",
        children: "2015-2017"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "teacher__cv__item__descr-wr",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_title",
          children: "Online teacher"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "Verbling \u2013 England"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "teacher__cv__item__descr_descr",
          children: "ELT/TESOL"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherCv);

/***/ }),

/***/ "./src/components/pages/Teachers/TeacherGreet/TeacherGreet.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherGreet/TeacherGreet.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../UI/IconRenderer/IconRenderer */ "./src/components/UI/IconRenderer/IconRenderer.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _assets_icons_chat_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/icons/chat.svg */ "./src/assets/icons/chat.svg");
/* harmony import */ var _TeacherGreet_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TeacherGreet.scss */ "./src/components/pages/Teachers/TeacherGreet/TeacherGreet.scss");
/* harmony import */ var _assets_icons_time_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/icons/time.svg */ "./src/assets/icons/time.svg");
/* harmony import */ var _assets_icons_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/icons/star.svg */ "./src/assets/icons/star.svg");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _common_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/Loading/Loading */ "./src/components/common/Loading/Loading.jsx");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v1.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");















var TeacherGreet = function TeacherGreet(_ref) {
  var user = _ref.user;
  var arr = new Array(5).fill(0);
  console.log(user);
  if (!user) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_Loading_Loading__WEBPACK_IMPORTED_MODULE_7__["default"], {});
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "teacher__vid",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("iframe", {
      className: "teacher__vid_vid",
      src: "https://www.youtube.com/embed/CjkI-RkaBng?controls=0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "teacher__descr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "teacher__descr__left",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          src: "http://bebest.pp.ua".concat(user.avatar.url),
          className: "teacher__descr_avatar"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("ul", {
          className: "teacher__descr_stars",
          children: arr.map(function (index) {
            return index > user.stars ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_UI_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_1__.IconRenderer, {
              id: "star",
              className: "teacher__descr_star "
            }, (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])()) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_UI_IconRenderer_IconRenderer__WEBPACK_IMPORTED_MODULE_1__.IconRenderer, {
              id: "star",
              className: "teacher__descr_star teacher__descr_star_filled"
            }, (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])());
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "teacher__descr_recommend",
          children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "teacher__descr_chat-wr",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
            src: _assets_icons_chat_svg__WEBPACK_IMPORTED_MODULE_2__,
            className: "teacher__descr_chat-img"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
            to: '',
            className: "teacher__descr_chat-text",
            children: "\u041D\u0430\u0447\u0430\u0442\u044C \u0447\u0430\u0442"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "teacher__descr__right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "teacher__descr__right_top",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "teacher__descr__right_time-wr",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: _assets_icons_time_svg__WEBPACK_IMPORTED_MODULE_4__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "teacher__descr__right_top_text",
              children: "12:35 pm"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "teacher__descr__right_exp-wr",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
              src: _assets_icons_star_svg__WEBPACK_IMPORTED_MODULE_5__
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
              className: "teacher__descr__right_top_text",
              children: ["\u0421\u0442\u0430\u0436: ", user.stars, " \u0433\u043E\u0434\u0430"]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "teacher__descr__right_main",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "teacher__descr__right_main_top",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "teacher__descr__right_main_top_name",
              children: user.username
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
              className: "teacher__descr__right_main_top_country",
              children: user.country
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "teacher__descr__right_main_bottom",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "teacher__descr__right_main_bottom_cont",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "teacher__descr__right_main_bottom_title",
                children: "\u042F\u0437\u044B\u043A \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "teacher__descr__right_main_bottom_descr",
                children: user.lang
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "teacher__descr__right_main_bottom_cont",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "teacher__descr__right_main_bottom_title",
                children: "\u042F\u0437\u044B\u043A\u0438 \u043E\u0431\u0449\u0435\u043D\u0438\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "teacher__descr__right_main_bottom_descr",
                children: user.CommunicationLang
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "teacher__descr__right_main_bottom_cont",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "teacher__descr__right_main_bottom_title",
                children: "\u041A\u043E\u043B-\u0432\u043E \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "teacher__descr__right_main_bottom_descr",
                children: "10"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "teacher__descr__right_main_bottom_cont",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "teacher__descr__right_main_bottom_title",
                children: "\u041A\u043E\u043B-\u0432\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u0443\u0440\u043E\u043A\u043E\u0432"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p", {
                className: "teacher__descr__right_main_bottom_descr",
                children: "34"
              })]
            })]
          })]
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherGreet);

/***/ }),

/***/ "./src/components/pages/Teachers/TeacherLessons/TeacherLesson.jsx":
/*!************************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherLessons/TeacherLesson.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeacherLesson_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherLesson.scss */ "./src/components/pages/Teachers/TeacherLessons/TeacherLesson.scss");
/* harmony import */ var _UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/Buttons/MainButton/MainButton */ "./src/components/UI/Buttons/MainButton/MainButton.jsx");
/* harmony import */ var _UI_Forms_RadioForm_RadioForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../UI/Forms/RadioForm/RadioForm */ "./src/components/UI/Forms/RadioForm/RadioForm.jsx");
/* harmony import */ var _assets_icons_smallClock_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/icons/smallClock.svg */ "./src/assets/icons/smallClock.svg");
/* harmony import */ var _assets_icons_person_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/icons/person.svg */ "./src/assets/icons/person.svg");
/* harmony import */ var _assets_icons_cap_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/icons/cap.svg */ "./src/assets/icons/cap.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var TeacherLesson = function TeacherLesson() {
  var date = new Date();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "teacher__lessons",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "teacher__trial",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "teacher__trial_text",
        children: "\u041F\u0440\u043E\u0431\u043D\u044B\u0439 \u0443\u0440\u043E\u043A"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "teacher__trial__row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__row_text",
          children: "\u0414\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0443\u0440\u043E\u043A\u0430"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__row_num",
          children: "1,5 \u0447\u0430\u0441\u0430"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "teacher__trial__row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__row_text",
          children: "\u0421\u0442\u043E\u0438\u0441\u043C\u043E\u0441\u0442\u044C \u043A\u0443\u0440\u0441\u0430"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__row_num",
          children: "1000 $ "
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          marginTop: '17px',
          textTransform: 'UpperCase'
        },
        children: "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "teacher__trial teacher__trial_forLate",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "teacher__trial_text",
        children: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u0443\u0440\u043E\u043A"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "teacher__trial_text_2",
        children: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0443\u0440\u043E\u043A\u043E\u0432"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "teacher__trial__row teacher__trial__row-spec",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "trial__row_wr",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Forms_RadioForm_RadioForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
            checked: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "trial__row_text",
            children: "1"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "trial__row_wr",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Forms_RadioForm_RadioForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
            checked: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "trial__row_text",
            children: "2"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "trial__row_wr",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Forms_RadioForm_RadioForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
            checked: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "trial__row_text",
            children: "3"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "trial__row_wr",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Forms_RadioForm_RadioForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
            checked: false
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "trial__row_text",
            children: "4"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "teacher__trial__row teacher__trial_row_nonStandart",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__row_text",
          children: "\u0421\u0442\u043E\u0438\u0441\u043C\u043E\u0441\u0442\u044C \u043A\u0443\u0440\u0441\u0430"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__row_num",
          children: "1000 $ "
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        style: {
          marginTop: '17px',
          marginBottom: '7px',
          textTransform: 'UpperCase'
        },
        children: "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "teacher__trial",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "teacher__trial_text",
        children: "\u0413\u0440\u0443\u043F\u043F\u043E\u0432\u044B\u0435 \u0443\u0440\u043E\u043A\u0438"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "teacher__trial__box",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__box_date",
          children: "".concat(date.getDate() + 1, " ").concat(date.toLocaleString('default', {
            month: 'long'
          }), "\n                    ").concat(date.getFullYear())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__box_title",
          children: "\u0411\u0430\u0437\u043E\u0432\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0438\u0441\u043F\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__box__attributes ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_red",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_smallClock_svg__WEBPACK_IMPORTED_MODULE_4__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text ",
              children: "1 \u0447\u0430\u0441"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_purple",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_cap_svg__WEBPACK_IMPORTED_MODULE_6__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text",
              children: "Beginners"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_sky",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_person_svg__WEBPACK_IMPORTED_MODULE_5__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text",
              children: "10-15 \u043B\u0435\u0442"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__box__data",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__data__left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_title",
              children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_text",
              children: "10 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__data__right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_title",
              children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_text",
              children: "15 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "teacher__trial__row_text  teacher__trial__row_text_sm",
            children: "\u0421\u0442\u043E\u0438\u0441\u043C\u043E\u0441\u0442\u044C \u043A\u0443\u0440\u0441\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "teacher__trial__row_num",
            children: "1000 $ "
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          style: {
            marginTop: '17px',
            marginBottom: '7px',
            textTransform: 'UpperCase'
          },
          children: "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "teacher__trial__box",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__box_date",
          children: "".concat(date.getDate() + 2, " ").concat(date.toLocaleString('default', {
            month: 'long'
          }), "\n                    ").concat(date.getFullYear())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__box_title",
          children: "\u0411\u0430\u0437\u043E\u0432\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0438\u0441\u043F\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__box__attributes ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_red",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_smallClock_svg__WEBPACK_IMPORTED_MODULE_4__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text ",
              children: "1 \u0447\u0430\u0441"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_purple",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_cap_svg__WEBPACK_IMPORTED_MODULE_6__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text",
              children: "Beginners"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_sky",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_person_svg__WEBPACK_IMPORTED_MODULE_5__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text",
              children: "10-15 \u043B\u0435\u0442"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__box__data",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__data__left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_title",
              children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_text",
              children: "10 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__data__right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_title",
              children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_text",
              children: "15 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "teacher__trial__row_text teacher__trial__row_text_sm",
            children: "\u0421\u0442\u043E\u0438\u0441\u043C\u043E\u0441\u0442\u044C \u043A\u0443\u0440\u0441\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "teacher__trial__row_num",
            children: "1000 $ "
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          style: {
            marginTop: '17px',
            marginBottom: '7px',
            textTransform: 'UpperCase'
          },
          children: "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "teacher__trial",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        className: "teacher__trial_text",
        children: "\u0423\u0447\u0435\u0431\u043D\u044B\u0435 \u043A\u0443\u0440\u0441\u044B"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "teacher__trial__box",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__box_date",
          children: "".concat(date.getDate() + 3, " ").concat(date.toLocaleString('default', {
            month: 'long'
          }), "\n                    ").concat(date.getFullYear())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__box_title",
          children: "\u0411\u0430\u0437\u043E\u0432\u044B\u0435 \u043D\u0430\u0432\u044B\u043A\u0438 \u0438\u0441\u043F\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__box__attributes ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_purple",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_cap_svg__WEBPACK_IMPORTED_MODULE_6__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text",
              children: "Intermediate"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_sky",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_person_svg__WEBPACK_IMPORTED_MODULE_5__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text",
              children: "\u0441\u0442\u0430\u0440\u0448\u0435 16 \u043B\u0435\u0442"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__box__data",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__data__left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_title",
              children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_text",
              children: "10 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__data__right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_title",
              children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_text",
              children: "15 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "teacher__trial__row_text  teacher__trial__row_text_sm",
            children: "\u0421\u0442\u043E\u0438\u0441\u043C\u043E\u0441\u0442\u044C \u043A\u0443\u0440\u0441\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "teacher__trial__row_num",
            children: "1000 $ "
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          style: {
            marginTop: '17px',
            marginBottom: '7px',
            textTransform: 'UpperCase'
          },
          children: "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "teacher__trial__box",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__box_date",
          children: "".concat(date.getDate() + 4, " ").concat(date.toLocaleString('default', {
            month: 'long'
          }), "\n                    ").concat(date.getFullYear())
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
          className: "teacher__trial__box_title",
          children: "\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u043D\u043E\u0433\u043E \u2013 \u0411\u043E\u0433"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__box__attributes ",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_purple",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_cap_svg__WEBPACK_IMPORTED_MODULE_6__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text",
              children: "Intermediate"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__attributes__item teacher__trial__box__attributes__item_sky",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
              src: _assets_icons_person_svg__WEBPACK_IMPORTED_MODULE_5__,
              className: "teacher__trial__box__attributes__item_img"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__attributes__item_text",
              children: "\u0441\u0442\u0430\u0440\u0448\u0435 16 \u043B\u0435\u0442"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__box__data",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__data__left",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_title",
              children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_text",
              children: "10 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "teacher__trial__box__data__right",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_title",
              children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0443\u043C:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              className: "teacher__trial__box__data_text",
              children: "15 \u0447\u0435\u043B\u043E\u0432\u0435\u043A"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "teacher__trial__row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "teacher__trial__row_text teacher__trial__row_text_sm",
            children: "\u0421\u0442\u043E\u0438\u0441\u043C\u043E\u0441\u0442\u044C \u043A\u0443\u0440\u0441\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
            className: "teacher__trial__row_num",
            children: "1000 $ "
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          style: {
            marginTop: '17px',
            marginBottom: '7px',
            textTransform: 'UpperCase'
          },
          children: "\u0417\u0430\u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherLesson);

/***/ }),

/***/ "./src/components/pages/Teachers/TeacherMarks/TeacherMarks.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherMarks/TeacherMarks.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_teacher_buff1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/images/teacher/buff1.png */ "./src/assets/images/teacher/buff1.png");
/* harmony import */ var _assets_images_teacher_buff1_png_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images/teacher/buff1.png?=webp */ "./src/assets/images/teacher/buff1.png?=webp");
/* harmony import */ var _assets_images_teacher_buff2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/images/teacher/buff2.png */ "./src/assets/images/teacher/buff2.png");
/* harmony import */ var _assets_images_teacher_buff2_png_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/images/teacher/buff2.png?=webp */ "./src/assets/images/teacher/buff2.png?=webp");
/* harmony import */ var _assets_images_teacher_buff3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/images/teacher/buff3.png */ "./src/assets/images/teacher/buff3.png");
/* harmony import */ var _assets_images_teacher_buff3_png_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/images/teacher/buff3.png?=webp */ "./src/assets/images/teacher/buff3.png?=webp");
/* harmony import */ var _assets_images_teacher_buff5_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../assets/images/teacher/buff5.png */ "./src/assets/images/teacher/buff5.png");
/* harmony import */ var _assets_images_teacher_buff5_png_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../assets/images/teacher/buff5.png?=webp */ "./src/assets/images/teacher/buff5.png?=webp");
/* harmony import */ var _UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../UI/Picture/Picture */ "./src/components/UI/Picture/Picture.jsx");
/* harmony import */ var _TeacherMarks_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TeacherMarks.scss */ "./src/components/pages/Teachers/TeacherMarks/TeacherMarks.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













var TeacherMarks = function TeacherMarks() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: "teacher__mark",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
      className: "teacher__mark_title",
      children: "\u041E\u0446\u0435\u043D\u043A\u0438 \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "teacher__mark__items",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "teacher__mark__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webp: _assets_images_teacher_buff1_png_webp__WEBPACK_IMPORTED_MODULE_2__,
          img: _assets_images_teacher_buff1_png__WEBPACK_IMPORTED_MODULE_1__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "teacher__mark__item_num",
          children: "11"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "teacher__mark__item_text",
          children: "\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u0435\u043D(-\u0430) \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "teacher__mark__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webp: _assets_images_teacher_buff2_png_webp__WEBPACK_IMPORTED_MODULE_4__,
          img: _assets_images_teacher_buff2_png__WEBPACK_IMPORTED_MODULE_3__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "teacher__mark__item_num",
          children: "11"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "teacher__mark__item_text",
          children: "\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u0435\u043D(-\u0430) \u0434\u043B\u044F \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "teacher__mark__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webp: _assets_images_teacher_buff3_png_webp__WEBPACK_IMPORTED_MODULE_6__,
          img: _assets_images_teacher_buff3_png__WEBPACK_IMPORTED_MODULE_5__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "teacher__mark__item_num",
          children: "11"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "teacher__mark__item_text",
          children: "\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u0435\u043D(-\u0430) \u0434\u043B\u044F \u0443\u0447\u0435\u043D\u0438\u043A\u043E\u0432 \u043F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "teacher__mark__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webp: _assets_images_teacher_buff3_png_webp__WEBPACK_IMPORTED_MODULE_6__,
          img: _assets_images_teacher_buff3_png__WEBPACK_IMPORTED_MODULE_5__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "teacher__mark__item_num",
          children: "11"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "teacher__mark__item_text",
          children: "\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u043E \u043B\u0430\u0434\u0438\u0442 \u0441 \u0434\u0435\u0442\u044C\u043C\u0438"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "teacher__mark__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webp: _assets_images_teacher_buff5_png_webp__WEBPACK_IMPORTED_MODULE_8__,
          img: _assets_images_teacher_buff5_png__WEBPACK_IMPORTED_MODULE_7__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "teacher__mark__item_num",
          children: "11"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "teacher__mark__item_text",
          children: "\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u043E\u0435 \u043E\u0431\u0449\u0435\u043D\u0438\u0435"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "teacher__mark__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webp: _assets_images_teacher_buff5_png_webp__WEBPACK_IMPORTED_MODULE_8__,
          img: _assets_images_teacher_buff5_png__WEBPACK_IMPORTED_MODULE_7__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "teacher__mark__item_num",
          children: "11"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "teacher__mark__item_text",
          children: "\u041E\u0442\u043B\u0438\u0447\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "teacher__mark__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webp: _assets_images_teacher_buff3_png_webp__WEBPACK_IMPORTED_MODULE_6__,
          img: _assets_images_teacher_buff3_png__WEBPACK_IMPORTED_MODULE_5__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "teacher__mark__item_num",
          children: "11"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "teacher__mark__item_text",
          children: "\u041F\u0440\u0435\u0432\u043E\u0441\u0445\u043E\u0434\u0438\u0442 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "teacher__mark__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webp: _assets_images_teacher_buff5_png_webp__WEBPACK_IMPORTED_MODULE_8__,
          img: _assets_images_teacher_buff5_png__WEBPACK_IMPORTED_MODULE_7__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "teacher__mark__item_num",
          children: "11"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "teacher__mark__item_text",
          children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0432 \u0442\u0435\u043C\u0435"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "teacher__mark__item",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
          webp: _assets_images_teacher_buff5_png_webp__WEBPACK_IMPORTED_MODULE_8__,
          img: _assets_images_teacher_buff5_png__WEBPACK_IMPORTED_MODULE_7__
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: "teacher__mark__item_num",
          children: "11"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
          className: "teacher__mark__item_text",
          children: "\u0413\u0443\u0440\u0443 \u043C\u043E\u0442\u0438\u0432\u0430\u0446\u0438\u0438"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherMarks);

/***/ }),

/***/ "./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.jsx":
/*!*******************************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeacherPosibility_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeacherPosibility.scss */ "./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var TeacherPosibility = function TeacherPosibility(_ref) {
  var obj = _ref.obj;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "teacher__pos",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "teacher__pos_title",
      children: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "teacher__pos_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "teacher__pos_block_title",
        children: "\u0410\u043A\u0446\u0435\u043D\u0442\u044B"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "teacher__pos_block__text-wr",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "teacher__pos_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "teacher__pos_block_title",
        children: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "teacher__pos_block__text-wr",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "teacher__pos_block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "teacher__pos_block_title",
        children: "\u0410\u0441\u043F\u0435\u043A\u0442\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "teacher__pos_block__text-wr",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "teacher__pos_block__text-wr_text",
          children: "111"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherPosibility);

/***/ }),

/***/ "./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_teacher_quote_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/images/teacher/quote.png */ "./src/assets/images/teacher/quote.png");
/* harmony import */ var _assets_images_teacher_quote_png_as_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/images/teacher/quote.png?as=webp */ "./src/assets/images/teacher/quote.png?as=webp");
/* harmony import */ var _UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../UI/Picture/Picture */ "./src/components/UI/Picture/Picture.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _TeacherQuotes_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TeacherQuotes.scss */ "./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var TeacherQuotes = function TeacherQuotes(_ref) {
  var className = _ref.className,
    _ref$bio = _ref.bio,
    bio = _ref$bio === void 0 ? 'default text' : _ref$bio;
  console.log();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "teacher__about ".concat(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "teacher__about_title",
      children: "\u041E\u0431\u043E \u043C\u043D\u0435"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "teacher__about_text-wr",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "teacher__about_text_left",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
          img: _assets_images_teacher_quote_png__WEBPACK_IMPORTED_MODULE_1__,
          webp: _assets_images_teacher_quote_png_as_webp__WEBPACK_IMPORTED_MODULE_2__
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "teacher__about_text_right",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "teacher__about_text",
          children: bio
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
          to: '',
          className: "teacher__about_translate",
          children: "\u041F\u0435\u0440\u0435\u0432\u0435\u0441\u0442\u0438 \u0442\u0435\u043A\u0441\u0442"
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeacherQuotes);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Pagination/Pagination.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Pagination/Pagination.scss ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.pagination-container {
  display: flex;
  justify-content: flex-end;
  grid-column: 1/3;
}

.pagination-item {
  cursor: pointer;
  color: #8b919e;
  background-color: #f2f5fa;
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 182.85%; /* 29.256px */
  letter-spacing: 0.8px;
  margin-right: 1px;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 0.5s ease;
}
.pagination-arrow {
  position: relative;
}
.pagination-arrow img {
  transition: 0.3s;
}
.pagination-arrow:hover {
  background-color: rgba(255, 0, 0, 0.1);
}

.pagination-item_active {
  background-color: #f04973;
  color: #fff;
  transition: all 0.5s ease;
}

.pagination__list, .pagination__item {
  display: flex;
  align-items: center;
}
.pagination__item {
  flex: 0 0 40px;
  height: 40px;
  justify-content: center;
  background: #f2f5fa;
  color: #8b919e;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0 1px 0 0;
}
.pagination__item:last-child {
  margin: 0;
}
.pagination__item:hover {
  background: #e0d3d6;
}
.pagination__item.active {
  background: #f04973;
  color: #fff;
  font-weight: 800;
}
.pagination__item_next {
  position: relative;
}
.pagination__item_next::after {
  content: "";
  position: absolute;
  display: block;
  width: 10px;
  height: 10px;
  border: 2px solid #454b58;
  border-width: 2px 2px 0 0;
  transform: translateX(-2px) rotate(45deg);
}`, "",{"version":3,"sources":["webpack://./src/components/common/Pagination/Pagination.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,yBAAA;EAEA,gBAAA;AAAJ;;AAEA;EACI,eAAA;EACA,cAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA,EAAA,aAAA;EACA,qBAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,yBAAA;AACJ;AAIA;EACI,kBAAA;AAFJ;AAGI;EACI,gBAAA;AADR;AAGI;EACI,sCAAA;AADR;;AAKA;EACI,yBAAA;EACA,WAAA;EACA,yBAAA;AAFJ;;AAKI;EAEI,aAAA;EACA,mBAAA;AAHR;AAKI;EACI,cAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,iBAAA;AAHR;AAIQ;EACI,SAAA;AAFZ;AAIQ;EACI,mBAAA;AAFZ;AAIQ;EACI,mBAAA;EACA,WAAA;EACA,gBAAA;AAFZ;AAIQ;EACI,kBAAA;AAFZ;AAIQ;EACI,WAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,yBAAA;EACA,yCAAA;AAFZ","sourcesContent":[".pagination-container {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n\r\n    grid-column: 1/3;\r\n}\r\n.pagination-item {\r\n    cursor: pointer;\r\n    color: #8b919e;\r\n    background-color: #f2f5fa;\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 182.85%; /* 29.256px */\r\n    letter-spacing: 0.8px;\r\n    margin-right: 1px;\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    transition: all 0.5s ease;\r\n    &:hover {\r\n        // font-size: 17px;\r\n    }\r\n}\r\n.pagination-arrow {\r\n    position: relative;\r\n    img {\r\n        transition: 0.3s;\r\n    }\r\n    &:hover {\r\n        background-color: rgba(red, $alpha: 0.1);\r\n    }\r\n}\r\n\r\n.pagination-item_active {\r\n    background-color: #f04973;\r\n    color: #fff;\r\n    transition: all 0.5s ease;\r\n}\r\n.pagination {\r\n    &__list,\r\n    &__item {\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n    &__item {\r\n        flex: 0 0 40px;\r\n        height: 40px;\r\n        justify-content: center;\r\n        background: #f2f5fa;\r\n        color: #8b919e;\r\n        font-size: 16px;\r\n        font-weight: 500;\r\n        cursor: pointer;\r\n        transition: all 0.2s;\r\n        margin: 0 1px 0 0;\r\n        &:last-child {\r\n            margin: 0;\r\n        }\r\n        &:hover {\r\n            background: #e0d3d6;\r\n        }\r\n        &.active {\r\n            background: #f04973;\r\n            color: #fff;\r\n            font-weight: 800;\r\n        }\r\n        &_next {\r\n            position: relative;\r\n        }\r\n        &_next::after {\r\n            content: '';\r\n            position: absolute;\r\n            display: block;\r\n            width: 10px;\r\n            height: 10px;\r\n            border: 2px solid #454b58;\r\n            border-width: 2px 2px 0 0;\r\n            transform: translateX(-2px) rotate(45deg);\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/Teacher.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/Teacher.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets//images/teacher/background.svg */ "./src/assets/images/teacher/background.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets//images/teacher/background2.svg */ "./src/assets/images/teacher/background2.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes waves {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 15px 15px;
  }
}
.teacher__background {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  position: absolute;
  -o-object-fit: contain;
     object-fit: contain;
  height: 1125px;
  background-repeat: no-repeat;
  width: 631px;
  animation: waves;
  animation-duration: 2s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
  pointer-events: none;
}
.teacher__background2 {
  position: absolute;
  right: 0;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  position: absolute;
  -o-object-fit: contain;
     object-fit: contain;
  height: 637px;
  background-repeat: no-repeat;
  width: 840px;
  animation: waves;
  animation-duration: 2s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
  pointer-events: none;
}
.teacher__body {
  display: grid;
  position: relative;
  z-index: 1;
  grid-template-columns: 883px 447px;
  -moz-column-gap: 50px;
       column-gap: 50px;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Teachers/Teacher.scss"],"names":[],"mappings":"AAAA;EACI;IACI,sBAAA;EACN;EACE;IACI,8BAAA;EACN;AACF;AAGI;EACI,yDAAA;EACA,kBAAA;EACA,sBAAA;KAAA,mBAAA;EACA,cAAA;EACA,4BAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,sCAAA;EACA,mCAAA;EACA,oBAAA;AADR;AAGI;EACI,kBAAA;EACA,QAAA;EACA,yDAAA;EACA,kBAAA;EACA,sBAAA;KAAA,mBAAA;EACA,aAAA;EACA,4BAAA;EACA,YAAA;EACA,gBAAA;EACA,sBAAA;EACA,sCAAA;EACA,mCAAA;EACA,oBAAA;AADR;AAII;EACI,aAAA;EACA,kBAAA;EACA,UAAA;EACA,kCAAA;EACA,qBAAA;OAAA,gBAAA;AAFR","sourcesContent":["@keyframes waves {\r\n    0% {\r\n        background-position: 0;\r\n    }\r\n    100% {\r\n        background-position: 15px 15px;\r\n    }\r\n}\r\n\r\n.teacher {\r\n    &__background {\r\n        background-image: url('../../../assets//images/teacher/background.svg');\r\n        position: absolute;\r\n        object-fit: contain;\r\n        height: 1125px;\r\n        background-repeat: no-repeat;\r\n        width: 631px;\r\n        animation: waves;\r\n        animation-duration: 2s;\r\n        animation-direction: alternate-reverse;\r\n        animation-iteration-count: infinite;\r\n        pointer-events: none;\r\n    }\r\n    &__background2 {\r\n        position: absolute;\r\n        right: 0;\r\n        background-image: url('../../../assets//images/teacher/background2.svg');\r\n        position: absolute;\r\n        object-fit: contain;\r\n        height: 637px;\r\n        background-repeat: no-repeat;\r\n        width: 840px;\r\n        animation: waves;\r\n        animation-duration: 2s;\r\n        animation-direction: alternate-reverse;\r\n        animation-iteration-count: infinite;\r\n        pointer-events: none;\r\n    }\r\n\r\n    &__body {\r\n        display: grid;\r\n        position: relative;\r\n        z-index: 1;\r\n        grid-template-columns: 883px 447px;\r\n        column-gap: 50px;\r\n    }\r\n\r\n    // .teacher__about\r\n}\r\n\r\n// .ec {\r\n//     height: 526px;\r\n//     margin-top: 30px;\r\n// }\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherComment/TeacherComment.scss":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherComment/TeacherComment.scss ***!
  \*************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.thumbUp {
  width: 18px;
  height: 18px;
  fill: #454b58;
}
.thumbUp:active {
  fill: black;
}

.teacher__comments {
  margin-top: 30px;
  padding: 34px 43px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  margin-bottom: 100px;
}

.comments_wr {
  display: grid;
  grid-template-columns: 390px 390px;
  gap: 25px;
}

.comment_item {
  border: 1px solid #dce3e8;
  background: rgba(242, 245, 250, 0.6);
  padding: 20px 25px 15px;
}

.comment_avatar {
  margin-right: 10px;
}

.comment_top {
  display: flex;
}

.comment_name-wr {
  margin-top: 11px;
  margin-left: 3px;
}

.comment_name {
  color: #292c32;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px; /* 137.5% */
}

.comment_lessonNum {
  color: #8b919e;
  font-size: 14px;
  font-weight: 500;
  line-height: 182.85%; /* 25.599px */
}
.comment_lessonNum span {
  color: #292c32;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  margin-left: 5px;
}

.comment_descr {
  color: #454b58;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.57; /* 157.143% */
  margin-top: 15px;
}

.comment_bottom-wr {
  display: flex;
  margin-top: 16px;
  justify-content: space-between;
}

.comment_likes-wr {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.comment_like {
  color: #292c32;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 10px;
}

.like {
  margin-right: 10px;
}

.comment_date {
  color: #292c32;
  font-size: 14px;
  line-height: normal;
  color: #8b919e;
  font-weight: 500;
}

.filters_wr {
  display: flex;
  gap: 15px;
  margin-bottom: 10px;
  margin-top: 13px;
}

.teacher__comments_top {
  display: flex;
  align-items: center;
}

.comments_top_text {
  color: #292c32;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1; /* 110% */
  margin-right: 19px;
}

.comments_top_text2 {
  color: #454b58;
  font-size: 14px;
  font-weight: 600;
  line-height: 182.85%; /* 25.599px */
  opacity: 0.7;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Teachers/TeacherComment/TeacherComment.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;EACA,aAAA;AACJ;AAAI;EACI,WAAA;AAER;;AACA;EACI,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,sDAAA;EACA,oBAAA;AAEJ;;AAAA;EACI,aAAA;EACA,kCAAA;EACA,SAAA;AAGJ;;AADA;EACI,yBAAA;EACA,oCAAA;EACA,uBAAA;AAIJ;;AAAA;EACI,kBAAA;AAGJ;;AADA;EACI,aAAA;AAIJ;;AAFA;EACI,gBAAA;EACA,gBAAA;AAKJ;;AAHA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;AAMJ;;AAJA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA,EAAA,aAAA;AAOJ;AANI;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;AAQR;;AALA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,gBAAA;AAQJ;;AANA;EACI,aAAA;EACA,gBAAA;EACA,8BAAA;AASJ;;AAPA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;AAUJ;;AARA;EACI,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AAWJ;;AATA;EACI,kBAAA;AAYJ;;AAVA;EACI,cAAA;EACA,eAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;AAaJ;;AAXA;EACI,aAAA;EACA,SAAA;EACA,mBAAA;EACA,gBAAA;AAcJ;;AAXA;EACI,aAAA;EACA,mBAAA;AAcJ;;AAZA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA,EAAA,SAAA;EACA,kBAAA;AAeJ;;AAbA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA,EAAA,aAAA;EACA,YAAA;AAgBJ","sourcesContent":[".thumbUp {\r\n    width: 18px;\r\n    height: 18px;\r\n    fill: #454b58;\r\n    &:active {\r\n        fill: black;\r\n    }\r\n}\r\n.teacher__comments {\r\n    margin-top: 30px;\r\n    padding: 34px 43px;\r\n    border-radius: 10px;\r\n    background: #fff;\r\n    box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\r\n    margin-bottom: 100px;\r\n}\r\n.comments_wr {\r\n    display: grid;\r\n    grid-template-columns: 390px 390px;\r\n    gap: 25px;\r\n}\r\n.comment_item {\r\n    border: 1px solid #dce3e8;\r\n    background: rgba(242, 245, 250, 0.6);\r\n    padding: 20px 25px 15px;\r\n}\r\n// .{'comment_avatar'} {\r\n// }\r\n.comment_avatar {\r\n    margin-right: 10px;\r\n}\r\n.comment_top {\r\n    display: flex;\r\n}\r\n.comment_name-wr {\r\n    margin-top: 11px;\r\n    margin-left: 3px;\r\n}\r\n.comment_name {\r\n    color: #292c32;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 22px; /* 137.5% */\r\n}\r\n.comment_lessonNum {\r\n    color: #8b919e;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 182.85%; /* 25.599px */\r\n    span {\r\n        color: #292c32;\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-weight: 600;\r\n        margin-left: 5px;\r\n    }\r\n}\r\n.comment_descr {\r\n    color: #454b58;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 1.57; /* 157.143% */\r\n    margin-top: 15px;\r\n}\r\n.comment_bottom-wr {\r\n    display: flex;\r\n    margin-top: 16px;\r\n    justify-content: space-between;\r\n}\r\n.comment_likes-wr {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n.comment_like {\r\n    color: #292c32;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\r\n    margin-left: 10px;\r\n}\r\n.like {\r\n    margin-right: 10px;\r\n}\r\n.comment_date {\r\n    color: #292c32;\r\n    font-size: 14px;\r\n    line-height: normal;\r\n    color: #8b919e;\r\n    font-weight: 500;\r\n}\r\n.filters_wr {\r\n    display: flex;\r\n    gap: 15px;\r\n    margin-bottom: 10px;\r\n    margin-top: 13px;\r\n}\r\n\r\n.teacher__comments_top {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n.comments_top_text {\r\n    color: #292c32;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    line-height: 1.1; /* 110% */\r\n    margin-right: 19px;\r\n}\r\n.comments_top_text2 {\r\n    color: #454b58;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    line-height: 182.85%; /* 25.599px */\r\n    opacity: 0.7;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherCv/TeacherCv.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherCv/TeacherCv.scss ***!
  \***************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.teacher__cv {
  margin-top: 35px;
  padding: 35px 40px 1px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
}

.teacher__cv_title {
  color: #292c32;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1; /* 110% */
}

.teacher__cv_subtitle-wr {
  display: flex;
  gap: 11px;
  margin-top: 16px;
  align-items: center;
}

.teacher__cv_subtitle-text {
  color: #292c32;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.252; /* 126.667% */
}

.teacher__cv__item-wr {
  display: grid;
  grid-template-columns: 14% 1fr;
  gap: 26px;
  margin-top: 9px;
  margin-bottom: 35px;
}

.teacher__cv__item_date {
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 150%; /* 22.5px */
  border-radius: 20px;
  background: #55abfa;
  padding: 8px 11px;
  display: inline;
  align-self: self-start;
}

.teacher__cv__item__descr_title {
  color: #292c32;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.35; /* 137.5% */
  margin-top: 8px;
}

.teacher__cv__item__descr_descr {
  color: #454b58;
  font-weight: 500;
  line-height: 182.85%; /* 25.599px */
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Teachers/TeacherCv/TeacherCv.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,sDAAA;AACJ;;AACA;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA,EAAA,SAAA;AAEJ;;AAAA;EACI,aAAA;EACA,SAAA;EACA,gBAAA;EACA,mBAAA;AAGJ;;AACA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA,EAAA,aAAA;AAEJ;;AAAA;EACI,aAAA;EACA,8BAAA;EACA,SAAA;EACA,eAAA;EACA,mBAAA;AAGJ;;AADA;EACI,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,iBAAA;EACA,eAAA;EACA,sBAAA;AAIJ;;AAAA;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;EACA,eAAA;AAGJ;;AADA;EACI,cAAA;EACA,gBAAA;EACA,oBAAA,EAAA,aAAA;AAIJ","sourcesContent":[".teacher__cv {\r\n    margin-top: 35px;\r\n    padding: 35px 40px 1px;\r\n    border-radius: 10px;\r\n    background: #fff;\r\n    box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\r\n}\r\n.teacher__cv_title {\r\n    color: #292c32;\r\n    font-family: Montserrat;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 1.1; /* 110% */\r\n}\r\n.teacher__cv_subtitle-wr {\r\n    display: flex;\r\n    gap: 11px;\r\n    margin-top: 16px;\r\n    align-items: center;\r\n}\r\n.teacher__cv_subtitle-img {\r\n}\r\n.teacher__cv_subtitle-text {\r\n    color: #292c32;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    line-height: 1.252; /* 126.667% */\r\n}\r\n.teacher__cv__item-wr {\r\n    display: grid;\r\n    grid-template-columns: 14% 1fr;\r\n    gap: 26px;\r\n    margin-top: 9px;\r\n    margin-bottom: 35px;\r\n}\r\n.teacher__cv__item_date {\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    line-height: 150%; /* 22.5px */\r\n    border-radius: 20px;\r\n    background: #55abfa;\r\n    padding: 8px 11px;\r\n    display: inline;\r\n    align-self: self-start;\r\n}\r\n.teacher__cv__item__descr-wr {\r\n}\r\n.teacher__cv__item__descr_title {\r\n    color: #292c32;\r\n    font-family: Montserrat;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 1.35; /* 137.5% */\r\n    margin-top: 8px;\r\n}\r\n.teacher__cv__item__descr_descr {\r\n    color: #454b58;\r\n    font-weight: 500;\r\n    line-height: 182.85%; /* 25.599px */\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherGreet/TeacherGreet.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherGreet/TeacherGreet.scss ***!
  \*********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.teacher__vid {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
}
.teacher__vid_vid {
  width: 100%;
  height: 450px;
}
.teacher__descr {
  padding: 40px 34px 53px;
  display: grid;
  grid-template-columns: 18% 1fr;
  grid-column-gap: 33px;
}
.teacher__descr__left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.teacher__descr__right_top {
  display: flex;
}
.teacher__descr__right_top img {
  margin-right: 7px;
  width: 20px;
  height: 20px;
}
.teacher__descr__right_top_text {
  color: #292c32;
  font-size: 15px;
  font-weight: 600;
}
.teacher__descr__right_time-wr, .teacher__descr__right_exp-wr {
  display: flex;
  padding: 8px 16px;
  border-radius: 20px;
  background: #ffdee4;
  align-items: center;
}
.teacher__descr__right_time-wr *, .teacher__descr__right_exp-wr * {
  flex-shrink: 0;
}
.teacher__descr__right_exp-wr {
  background: #fdecc8;
  margin-left: 16px;
}
.teacher__descr__right_main {
  margin-top: 25px;
}
.teacher__descr__right_main_top_name {
  color: #292c32;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px; /* 110% */
}
.teacher__descr__right_main_top_country {
  color: #454b58;
  font-size: 14px;
  font-weight: 600;
  line-height: 182.85%; /* 25.599px */
}
.teacher__descr__right_main_bottom {
  display: grid;
  grid-template-columns: auto 1fr;
  -moz-column-gap: 68px;
       column-gap: 68px;
  row-gap: 17px;
  margin-top: 23px;
}
.teacher__descr__right_main_bottom_title {
  color: #8b919e;
  font-size: 14px;
  font-weight: 500;
  line-height: 164%; /* 164.286% */
}
.teacher__descr__right_main_bottom_descr {
  color: #292c32;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5; /* 150% */
}
.teacher__descr_avatar {
  width: 130px;
  height: 130px;
}
.teacher__descr_stars {
  margin-top: 17px;
  width: 83px;
  justify-content: space-between;
  display: flex;
  gap: 4px;
}
.teacher__descr_star {
  fill: #cccccc;
  width: 13px;
  height: 13px;
}
.teacher__descr_star_filled {
  fill: rgb(255, 196, 82);
}
.teacher__descr_recommend {
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  line-height: 150%;
  border-radius: 20px;
  background: #28da9a;
  width: 100%;
  padding: 8px 0;
  text-align: center;
  margin-top: 17px;
}
.teacher__descr_chat-wr {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
  cursor: pointer;
}
.teacher__descr_chat-text {
  color: #f04973;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  text-decoration-line: underline;
  margin-left: 7px;
  transition: 0.3;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Teachers/TeacherGreet/TeacherGreet.scss"],"names":[],"mappings":"AACI;EACI,mBAAA;EACA,gBAAA;EACA,sDAAA;AAAR;AAEQ;EACI,WAAA;EACA,aAAA;AAAZ;AAMI;EACI,uBAAA;EACA,aAAA;EACA,8BAAA;EACA,qBAAA;AAJR;AAOQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AALZ;AAQY;EACI,aAAA;AANhB;AAOgB;EACI,iBAAA;EACA,WAAA;EACA,YAAA;AALpB;AAOgB;EACI,cAAA;EACA,eAAA;EACA,gBAAA;AALpB;AAQY;EAEI,aAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,mBAAA;AAPhB;AAQgB;EACI,cAAA;AANpB;AASY;EACI,mBAAA;EACA,iBAAA;AAPhB;AASY;EACI,gBAAA;AAPhB;AASoB;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AAPxB;AASoB;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA,EAAA,aAAA;AAPxB;AAWgB;EACI,aAAA;EACA,+BAAA;EACA,qBAAA;OAAA,gBAAA;EACA,aAAA;EACA,gBAAA;AATpB;AAUoB;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;AARxB;AAUoB;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA,EAAA,SAAA;AARxB;AAaQ;EACI,YAAA;EACA,aAAA;AAXZ;AAgBQ;EACI,gBAAA;EACA,WAAA;EACA,8BAAA;EACA,aAAA;EACA,QAAA;AAdZ;AAmBQ;EACI,aAAA;EACA,WAAA;EACA,YAAA;AAjBZ;AAmBY;EACI,uBAAA;AAjBhB;AAuBQ;EACI,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AArBZ;AA0BQ;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,eAAA;AAxBZ;AAkCQ;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,+BAAA;EACA,gBAAA;EACA,eAAA;AAhCZ","sourcesContent":[".teacher {\r\n    &__vid {\r\n        border-radius: 10px;\r\n        background: #fff;\r\n        box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\r\n\r\n        &_vid {\r\n            width: 100%;\r\n            height: 450px;\r\n        }\r\n    }\r\n    &__descr_star {\r\n    }\r\n\r\n    &__descr {\r\n        padding: 40px 34px 53px;\r\n        display: grid;\r\n        grid-template-columns: 18% 1fr;\r\n        grid-column-gap: 33px;\r\n\r\n        // .teacher__descr_avatar\r\n        &__left {\r\n            display: flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n        }\r\n        &__right {\r\n            &_top {\r\n                display: flex;\r\n                img {\r\n                    margin-right: 7px;\r\n                    width: 20px;\r\n                    height: 20px;\r\n                }\r\n                &_text {\r\n                    color: #292c32;\r\n                    font-size: 15px;\r\n                    font-weight: 600;\r\n                }\r\n            }\r\n            &_time-wr,\r\n            &_exp-wr {\r\n                display: flex;\r\n                padding: 8px 16px;\r\n                border-radius: 20px;\r\n                background: #ffdee4;\r\n                align-items: center;\r\n                * {\r\n                    flex-shrink: 0;\r\n                }\r\n            }\r\n            &_exp-wr {\r\n                background: #fdecc8;\r\n                margin-left: 16px;\r\n            }\r\n            &_main {\r\n                margin-top: 25px;\r\n                &_top {\r\n                    &_name {\r\n                        color: #292c32;\r\n                        font-size: 20px;\r\n                        font-weight: 700;\r\n                        line-height: 22px; /* 110% */\r\n                    }\r\n                    &_country {\r\n                        color: #454b58;\r\n                        font-size: 14px;\r\n                        font-weight: 600;\r\n                        line-height: 182.85%; /* 25.599px */\r\n                    }\r\n                }\r\n\r\n                &_bottom {\r\n                    display: grid;\r\n                    grid-template-columns: auto 1fr;\r\n                    column-gap: 68px;\r\n                    row-gap: 17px;\r\n                    margin-top: 23px;\r\n                    &_title {\r\n                        color: #8b919e;\r\n                        font-size: 14px;\r\n                        font-weight: 500;\r\n                        line-height: 164%; /* 164.286% */\r\n                    }\r\n                    &_descr {\r\n                        color: #292c32;\r\n                        font-size: 16px;\r\n                        font-weight: 600;\r\n                        line-height: 1.5; /* 150% */\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        &_avatar {\r\n            width: 130px;\r\n            height: 130px;\r\n        }\r\n\r\n        // .teacher__descr_stars\r\n\r\n        &_stars {\r\n            margin-top: 17px;\r\n            width: 83px;\r\n            justify-content: space-between;\r\n            display: flex;\r\n            gap: 4px;\r\n        }\r\n\r\n        // .teacher__descr_star\r\n\r\n        &_star {\r\n            fill: #cccccc;\r\n            width: 13px;\r\n            height: 13px;\r\n\r\n            &_filled {\r\n                fill: rgba(255, 196, 82, 1);\r\n            }\r\n        }\r\n\r\n        // .teacher__descr_recommend\r\n\r\n        &_recommend {\r\n            color: #fff;\r\n            font-size: 15px;\r\n            font-weight: 600;\r\n            line-height: 150%;\r\n            border-radius: 20px;\r\n            background: #28da9a;\r\n            width: 100%;\r\n            padding: 8px 0;\r\n            text-align: center;\r\n            margin-top: 17px;\r\n        }\r\n\r\n        // .teacher__descr_chat-wr\r\n\r\n        &_chat-wr {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            margin-top: 17px;\r\n            cursor: pointer;\r\n        }\r\n\r\n        // .teacher__descr_chat-img\r\n\r\n        &_chat-img {\r\n        }\r\n\r\n        // .teacher__descr_chat-text\r\n\r\n        &_chat-text {\r\n            color: #f04973;\r\n            font-size: 12px;\r\n            font-weight: 600;\r\n            line-height: 16px; /* 133.333% */\r\n            text-decoration-line: underline;\r\n            margin-left: 7px;\r\n            transition: 0.3;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherLessons/TeacherLesson.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherLessons/TeacherLesson.scss ***!
  \************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.teacher__trial {
  border-radius: 10px;
  background: #fff;
  padding: 35px 40px;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  margin-bottom: 30px;
  z-index: 1;
  position: relative;
}

.teacher__trial_text {
  color: #292c32;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1; /* 110% */
  margin-bottom: 15px;
}

.teacher__trial__row {
  display: flex;
  justify-content: space-between;
  margin-top: 7px;
}

.teacher__trial__row_text {
  color: #454b58;
  font-size: 15px;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
}

.teacher__trial__row_num {
  color: #292c32;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%; /* 24px */
}

.teacher__trial_forLate {
  height: 290px;
}

.teacher__trial__box {
  margin-top: 16px;
  border: 1px solid #dce3e8;
  background: rgba(242, 245, 250, 0.6);
  padding: 22px 25px;
}

.teacher__trial__box_date {
  color: #8b919e;
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
}

.teacher__trial__box_title {
  color: #292c32;
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;
  line-height: 1.25; /* 126.667% */
}

.teacher__trial__box__attributes {
  display: flex;
  margin-top: 16px;
  gap: 15px;
}

.teacher__trial__box__attributes__item {
  display: flex;
  border-radius: 20px;
  padding: 5px 11px 5px 11px;
}
.teacher__trial__box__attributes__item_red {
  background: #ffdee4;
}
.teacher__trial__box__attributes__item_purple {
  background: #e1daff;
}
.teacher__trial__box__attributes__item_sky {
  background: #d0eefb;
}

.teacher__trial__box__attributes__item_img {
  margin-right: 6px;
}

.teacher__trial__box__attributes__item_text {
  color: #292c32;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%; /* 18px */
}

.teacher__trial__box__data {
  display: flex;
  gap: 50px;
  border-bottom: 1px solid #dce3e8;
  padding-bottom: 21px;
  margin-top: 20px;
  margin-bottom: 13px;
}

.teacher__trial__box__data_title {
  color: #8b919e;
  font-weight: 500;
  line-height: 1.65; /* 164.286% */
}

.teacher__trial__box__data_text {
  color: #292c32;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.6; /* 160% */
  margin-top: -3px;
}

.teacher__trial__row_text_sm {
  font-size: 14px;
}

.teacher__trial_text_2 {
  color: #8b919e;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.64; /* 164.286% */
  margin-top: 11px;
  margin-bottom: 11px;
}

.trial__row_wr {
  display: flex;
  justify-content: flex-start;
}

.trial__row_wr {
  margin-right: 20px;
}

.trial__row_text {
  color: #454b58;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  margin-left: 13px;
}

.teacher__trial__row-spec {
  margin-right: 20px;
  justify-content: flex-start;
  margin-top: 10px;
}

.teacher__trial_row_nonStandart {
  margin-top: 33px;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Teachers/TeacherLessons/TeacherLesson.scss"],"names":[],"mappings":"AAEA;EACI,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sDAAA;EACA,mBAAA;EACA,UAAA;EACA,kBAAA;AADJ;;AAGA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA,EAAA,SAAA;EACA,mBAAA;AAAJ;;AAEA;EACI,aAAA;EACA,8BAAA;EACA,eAAA;AACJ;;AACA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;AAEJ;;AAAA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AAGJ;;AADA;EACI,aAAA;AAIJ;;AADA;EACI,gBAAA;EACA,yBAAA;EACA,oCAAA;EACA,kBAAA;AAIJ;;AAFA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;AAKJ;;AAHA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;AAMJ;;AAJA;EACI,aAAA;EACA,gBAAA;EACA,SAAA;AAOJ;;AALA;EACI,aAAA;EACA,mBAAA;EACA,0BAAA;AAQJ;AANI;EACI,mBAAA;AAQR;AANI;EACI,mBAAA;AAQR;AANI;EACI,mBAAA;AAQR;;AALA;EACI,iBAAA;AAQJ;;AANA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AASJ;;AANA;EACI,aAAA;EACA,SAAA;EACA,gCAAA;EACA,oBAAA;EACA,gBAAA;EACA,mBAAA;AASJ;;AALA;EACI,cAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;AAQJ;;AANA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA,EAAA,SAAA;EACA,gBAAA;AASJ;;AAJA;EACI,eAAA;AAOJ;;AALA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,gBAAA;EACA,mBAAA;AAQJ;;AALA;EACI,aAAA;EACA,2BAAA;AAQJ;;AANA;EACI,kBAAA;AASJ;;AAPA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;AAUJ;;AARA;EACI,kBAAA;EACA,2BAAA;EACA,gBAAA;AAWJ;;AATA;EACI,gBAAA;AAYJ","sourcesContent":[".teacher__lessons {\r\n}\r\n.teacher__trial {\r\n    border-radius: 10px;\r\n    background: #fff;\r\n    padding: 35px 40px;\r\n    box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\r\n    margin-bottom: 30px;\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n.teacher__trial_text {\r\n    color: #292c32;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    line-height: 1.1; /* 110% */\r\n    margin-bottom: 15px;\r\n}\r\n.teacher__trial__row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-top: 7px;\r\n}\r\n.teacher__trial__row_text {\r\n    color: #454b58;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    line-height: 150%; /* 22.5px */\r\n}\r\n.teacher__trial__row_num {\r\n    color: #292c32;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    line-height: 150%; /* 24px */\r\n}\r\n.teacher__trial_forLate {\r\n    height: 290px;\r\n}\r\n\r\n.teacher__trial__box {\r\n    margin-top: 16px;\r\n    border: 1px solid #dce3e8;\r\n    background: rgba(242, 245, 250, 0.6);\r\n    padding: 22px 25px;\r\n}\r\n.teacher__trial__box_date {\r\n    color: #8b919e;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n}\r\n.teacher__trial__box_title {\r\n    color: #292c32;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    margin-top: 10px;\r\n    line-height: 1.25; /* 126.667% */\r\n}\r\n.teacher__trial__box__attributes {\r\n    display: flex;\r\n    margin-top: 16px;\r\n    gap: 15px;\r\n}\r\n.teacher__trial__box__attributes__item {\r\n    display: flex;\r\n    border-radius: 20px;\r\n    padding: 5px 11px 5px 11px;\r\n\r\n    &_red {\r\n        background: #ffdee4;\r\n    }\r\n    &_purple {\r\n        background: #e1daff;\r\n    }\r\n    &_sky {\r\n        background: #d0eefb;\r\n    }\r\n}\r\n.teacher__trial__box__attributes__item_img {\r\n    margin-right: 6px;\r\n}\r\n.teacher__trial__box__attributes__item_text {\r\n    color: #292c32;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    line-height: 150%; /* 18px */\r\n}\r\n\r\n.teacher__trial__box__data {\r\n    display: flex;\r\n    gap: 50px;\r\n    border-bottom: 1px solid #dce3e8;\r\n    padding-bottom: 21px;\r\n    margin-top: 20px;\r\n    margin-bottom: 13px;\r\n}\r\n.teacher__trial__box__data__left {\r\n}\r\n.teacher__trial__box__data_title {\r\n    color: #8b919e;\r\n    font-weight: 500;\r\n    line-height: 1.65; /* 164.286% */\r\n}\r\n.teacher__trial__box__data_text {\r\n    color: #292c32;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    line-height: 1.6; /* 160% */\r\n    margin-top: -3px;\r\n}\r\n.teacher__trial__box__data__right {\r\n}\r\n\r\n.teacher__trial__row_text_sm {\r\n    font-size: 14px;\r\n}\r\n.teacher__trial_text_2 {\r\n    color: #8b919e;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 1.64; /* 164.286% */\r\n    margin-top: 11px;\r\n    margin-bottom: 11px;\r\n}\r\n\r\n.trial__row_wr {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n.trial__row_wr {\r\n    margin-right: 20px;\r\n}\r\n.trial__row_text {\r\n    color: #454b58;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin-left: 13px;\r\n}\r\n.teacher__trial__row-spec {\r\n    margin-right: 20px;\r\n    justify-content: flex-start;\r\n    margin-top: 10px;\r\n}\r\n.teacher__trial_row_nonStandart {\r\n    margin-top: 33px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherMarks/TeacherMarks.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherMarks/TeacherMarks.scss ***!
  \*********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.teacher__mark {
  padding: 35px 37px;
  margin-top: 30px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
}

.teacher__mark_title {
  color: #292c32;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
}

.teacher__mark__items {
  display: flex;
  flex-wrap: wrap;
  -moz-column-gap: 22px;
       column-gap: 22px;
  row-gap: 30px;
}

.teacher__mark__item {
  position: relative;
  width: 110px;
}

.teacher__mark__item_num {
  position: absolute;
  top: 0;
  right: 1px;
  color: #fff;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.92; /* 192.308% */
  background-color: rgb(240, 73, 115);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.teacher__mark__item_text {
  color: #454b58;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.41;
  margin-top: 14px;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Teachers/TeacherMarks/TeacherMarks.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,sDAAA;AACJ;;AACA;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AAEJ;;AAAA;EACI,aAAA;EACA,eAAA;EACA,qBAAA;OAAA,gBAAA;EACA,aAAA;AAGJ;;AADA;EACI,kBAAA;EACA,YAAA;AAIJ;;AAFA;EACI,kBAAA;EACA,MAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,mCAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAKJ;;AAHA;EACI,cAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,gBAAA;AAMJ","sourcesContent":[".teacher__mark {\r\n    padding: 35px 37px;\r\n    margin-top: 30px;\r\n    border-radius: 10px;\r\n    background: #fff;\r\n    box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\r\n}\r\n.teacher__mark_title {\r\n    color: #292c32;\r\n    font-family: Montserrat;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 1.1;\r\n    margin-bottom: 20px;\r\n}\r\n.teacher__mark__items {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    column-gap: 22px;\r\n    row-gap: 30px;\r\n}\r\n.teacher__mark__item {\r\n    position: relative;\r\n    width: 110px;\r\n}\r\n.teacher__mark__item_num {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 1px;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    font-weight: 700;\r\n    line-height: 1.92; /* 192.308% */\r\n    background-color: rgba(240, 73, 115, 1);\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.teacher__mark__item_text {\r\n    color: #454b58;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    line-height: 1.41;\r\n    margin-top: 14px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.scss":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.scss ***!
  \*******************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.teacher__pos {
  margin-top: 30px;
  padding: 40px 40px 50px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
}

.teacher__pos_title {
  color: #292c32;
  font-size: 20px;
  font-weight: 700;
  line-height: 110%; /* 110% */
}

.teacher__pos_block {
  margin-top: 22px;
}

.teacher__pos_block_title {
  margin-bottom: 22px;
  color: #292c32;
  font-size: 15px;
  font-weight: 600;
  line-height: 19px; /* 126.667% */
  margin-bottom: 10px;
}

.teacher__pos_block__text-wr {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.teacher__pos_block__text-wr_text {
  color: #454b58;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%;
  padding: 8px 22px;
  border-radius: 20px;
  background: #f0f4f8;
  display: inline;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.scss"],"names":[],"mappings":"AAAA;EACI,gBAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,sDAAA;AACJ;;AACA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AAEJ;;AAAA;EACI,gBAAA;AAGJ;;AADA;EACI,mBAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,mBAAA;AAIJ;;AAEA;EACI,aAAA;EACA,SAAA;EACA,eAAA;AACJ;;AACA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;AAEJ","sourcesContent":[".teacher__pos {\r\n    margin-top: 30px;\r\n    padding: 40px 40px 50px;\r\n    border-radius: 10px;\r\n    background: #fff;\r\n    box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\r\n}\r\n.teacher__pos_title {\r\n    color: #292c32;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    line-height: 110%; /* 110% */\r\n}\r\n.teacher__pos_block {\r\n    margin-top: 22px;\r\n}\r\n.teacher__pos_block_title {\r\n    margin-bottom: 22px;\r\n    color: #292c32;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    line-height: 19px; /* 126.667% */\r\n    margin-bottom: 10px;\r\n}\r\n.teacher__pos_block__text {\r\n}\r\n.teacher__pos_block_title {\r\n}\r\n.teacher__pos_block__text-wr {\r\n    display: flex;\r\n    gap: 15px;\r\n    flex-wrap: wrap;\r\n}\r\n.teacher__pos_block__text-wr_text {\r\n    color: #454b58;\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    line-height: 150%;\r\n    padding: 8px 22px;\r\n    border-radius: 20px;\r\n    background: #f0f4f8;\r\n    display: inline;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.scss ***!
  \***********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.teacher__about {
  margin-top: 30px;
  padding: 40px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
}
.teacher__about_title {
  color: #292c32;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px; /* 110% */
  margin-bottom: 25px;
}
.teacher__about_text-wr {
  display: flex;
}
.teacher__about_text_left {
  margin-right: 20px;
}
.teacher__about_text_right * {
  color: #454b58;
  font-family: Montserrat;
  font-weight: 400;
  line-height: 182.85%; /* 25.599px */
}
.teacher__about_translate {
  color: #f04973;
  font-size: 12px;
  text-align: right;
  display: block;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  text-decoration-line: underline;
  transition: 0.3s;
  text-align: end;
  margin-top: 2px;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.scss"],"names":[],"mappings":"AACI;EACI,gBAAA;EAEA,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,sDAAA;AADR;AAEQ;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;EACA,mBAAA;AAAZ;AAKQ;EACI,aAAA;AAHZ;AAKQ;EACI,kBAAA;AAHZ;AASY;EACI,cAAA;EACA,uBAAA;EACA,gBAAA;EACA,oBAAA,EAAA,aAAA;AAPhB;AAuBQ;EACI,cAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,+BAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;AArBZ","sourcesContent":[".teacher {\r\n    &__about {\r\n        margin-top: 30px;\r\n        // .teacher__about_title\r\n        padding: 40px;\r\n        border-radius: 10px;\r\n        background: #fff;\r\n        box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\r\n        &_title {\r\n            color: #292c32;\r\n            font-size: 20px;\r\n            font-weight: 700;\r\n            line-height: 22px; /* 110% */\r\n            margin-bottom: 25px;\r\n        }\r\n\r\n        // .teacher__about_texts-wr\r\n\r\n        &_text-wr {\r\n            display: flex;\r\n        }\r\n        &_text_left {\r\n            margin-right: 20px;\r\n        }\r\n\r\n        // .teacher__about_text\r\n\r\n        &_text_right {\r\n            * {\r\n                color: #454b58;\r\n                font-family: Montserrat;\r\n                font-weight: 400;\r\n                line-height: 182.85%; /* 25.599px */\r\n            }\r\n        }\r\n\r\n        // .teacher__about_text\r\n\r\n        &_text {\r\n        }\r\n\r\n        // .teacher__about_text\r\n\r\n        &_text {\r\n        }\r\n\r\n        // .teacher__about_translate\r\n\r\n        &_translate {\r\n            color: #f04973;\r\n            font-size: 12px;\r\n            text-align: right;\r\n            display: block;\r\n            font-style: normal;\r\n            font-weight: 600;\r\n            line-height: 16px;\r\n            text-decoration-line: underline;\r\n            transition: 0.3s;\r\n            text-align: end;\r\n            margin-top: 2px;\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Forms/RadioForm/RadioForm.module.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Forms/RadioForm/RadioForm.module.scss ***!
  \********************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.RadioForm__radio___AmRU6 {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 0 8px;
}
.RadioForm__radio___AmRU6:last-child {
  margin: 0;
}
.RadioForm__radio__custom___S0WI7, .RadioForm__radio__custom___S0WI7::after {
  transition: all 0.2s;
}
.RadioForm__radio__custom___S0WI7 {
  flex: 0 0 17px;
  height: 17px;
  position: relative;
  border-radius: 100%;
  background: #fff;
  border: 2px solid #C6CED3;
  margin: 0 8px 0 0;
}
.RadioForm__radio__custom___S0WI7::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid #fff;
  background: #F04973;
  border-radius: 100%;
  opacity: 0;
  transform: scale(0);
}
.RadioForm__radio__input___MWC02 {
  opacity: 0;
  pointer-events: none;
  position: absolute;
  z-index: -1;
}
.RadioForm__radio__input___MWC02:checked + .RadioForm__radio__custom___S0WI7::after {
  opacity: 1;
  transform: scale(1);
}
.RadioForm__radio___AmRU6:hover .RadioForm__radio__custom___S0WI7 {
  border-color: #d298a7;
}`, "",{"version":3,"sources":["webpack://./src/components/UI/Forms/RadioForm/RadioForm.module.scss"],"names":[],"mappings":"AAAA;EACC,eAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AACD;AAAC;EACC,SAAA;AAEF;AAAC;EAEC,oBAAA;AACF;AACC;EACC,cAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;EACA,iBAAA;AACF;AAAE;EACC,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,mBAAA;EACA,UAAA;EACA,mBAAA;AAEH;AACC;EACC,UAAA;EACA,oBAAA;EACA,kBAAA;EACA,WAAA;AACF;AACG;EACC,UAAA;EACA,mBAAA;AACJ;AAGC;EACC,qBAAA;AADF","sourcesContent":[".radio {\r\n\tcursor: pointer;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tmargin: 0 0 8px;\r\n\t&:last-child {\r\n\t\tmargin: 0;\r\n\t}\r\n\t&__custom,\r\n\t&__custom::after {\r\n\t\ttransition: all .2s;\r\n\t}\r\n\t&__custom {\r\n\t\tflex: 0 0 17px;\r\n\t\theight: 17px;\r\n\t\tposition: relative;\r\n\t\tborder-radius: 100%;\r\n\t\tbackground: #fff;\r\n\t\tborder: 2px solid #C6CED3;\r\n\t\tmargin: 0 8px 0 0;\r\n\t\t&::after {\r\n\t\t\tcontent: \"\";\r\n\t\t\tposition: absolute;\r\n\t\t\ttop:0;\r\n\t\t\tleft: 0;\r\n\t\t\twidth: 100%;\r\n\t\t\theight: 100%;\r\n\t\t\tborder: 3px solid #fff;\r\n\t\t\tbackground: #F04973;\r\n\t\t\tborder-radius: 100%;\r\n\t\t\topacity: 0;\r\n\t\t\ttransform: scale(0);\r\n\t\t}\r\n\t}\r\n\t&__input {\r\n\t\topacity: 0;\r\n\t\tpointer-events: none;\r\n\t\tposition: absolute;\r\n\t\tz-index: -1;\r\n\t\t&:checked + .radio__custom {\r\n\t\t\t&::after {\r\n\t\t\t\topacity: 1;\r\n\t\t\t\ttransform: scale(1);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t&:hover .radio__custom {\r\n\t\tborder-color: #d298a7;\r\n\t}\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"radio": `RadioForm__radio___AmRU6`,
	"radio__custom": `RadioForm__radio__custom___S0WI7`,
	"radio__input": `RadioForm__radio__input___MWC02`
};
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

/***/ "./src/components/common/Pagination/Pagination.scss":
/*!**********************************************************!*\
  !*** ./src/components/common/Pagination/Pagination.scss ***!
  \**********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Pagination_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Pagination.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/Pagination/Pagination.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Pagination_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Pagination_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Pagination_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Pagination_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Teachers/Teacher.scss":
/*!****************************************************!*\
  !*** ./src/components/pages/Teachers/Teacher.scss ***!
  \****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Teacher_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Teacher.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/Teacher.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Teacher_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Teacher_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Teacher_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Teacher_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Teachers/TeacherComment/TeacherComment.scss":
/*!**************************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherComment/TeacherComment.scss ***!
  \**************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherComment_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./TeacherComment.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherComment/TeacherComment.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherComment_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherComment_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherComment_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherComment_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Teachers/TeacherCv/TeacherCv.scss":
/*!****************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherCv/TeacherCv.scss ***!
  \****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherCv_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./TeacherCv.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherCv/TeacherCv.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherCv_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherCv_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherCv_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherCv_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Teachers/TeacherGreet/TeacherGreet.scss":
/*!**********************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherGreet/TeacherGreet.scss ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherGreet_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./TeacherGreet.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherGreet/TeacherGreet.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherGreet_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherGreet_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherGreet_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherGreet_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Teachers/TeacherLessons/TeacherLesson.scss":
/*!*************************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherLessons/TeacherLesson.scss ***!
  \*************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherLesson_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./TeacherLesson.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherLessons/TeacherLesson.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherLesson_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherLesson_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherLesson_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherLesson_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Teachers/TeacherMarks/TeacherMarks.scss":
/*!**********************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherMarks/TeacherMarks.scss ***!
  \**********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherMarks_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./TeacherMarks.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherMarks/TeacherMarks.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherMarks_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherMarks_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherMarks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherMarks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.scss":
/*!********************************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.scss ***!
  \********************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherPosibility_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./TeacherPosibility.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherPosibility/TeacherPosibility.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherPosibility_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherPosibility_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherPosibility_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherPosibility_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.scss":
/*!************************************************************************!*\
  !*** ./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.scss ***!
  \************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherQuotes_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./TeacherQuotes.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherQuotes_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherQuotes_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherQuotes_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_TeacherQuotes_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/UI/Forms/RadioForm/RadioForm.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/UI/Forms/RadioForm/RadioForm.module.scss ***!
  \*****************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./RadioForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Forms/RadioForm/RadioForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RadioForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/icons/ArrowLeft.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/ArrowLeft.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/e158788b75d4893fe08c.svg";

/***/ }),

/***/ "./src/assets/icons/arrowRight.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/arrowRight.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/458d5fce2b157769a657.svg";

/***/ }),

/***/ "./src/assets/icons/brain.svg":
/*!************************************!*\
  !*** ./src/assets/icons/brain.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/279a407bf01a05bf4e8d.svg";

/***/ }),

/***/ "./src/assets/icons/cap.svg":
/*!**********************************!*\
  !*** ./src/assets/icons/cap.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/9e5fb6c93491e702520c.svg";

/***/ }),

/***/ "./src/assets/icons/chat.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/chat.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/cf870a36bd022b839c5c.svg";

/***/ }),

/***/ "./src/assets/icons/person.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/person.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/f68a12f7d8fc4cd98bbb.svg";

/***/ }),

/***/ "./src/assets/icons/sert.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/sert.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/168cac1a57b9ce7eae90.svg";

/***/ }),

/***/ "./src/assets/icons/smallClock.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/smallClock.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/e0478a3f316b93fabc94.svg";

/***/ }),

/***/ "./src/assets/icons/star.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/star.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/fa580bd8c6e19b4ab0b1.svg";

/***/ }),

/***/ "./src/assets/icons/time.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/time.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/d8fe744ba92b578ee155.svg";

/***/ }),

/***/ "./src/assets/images/teacher/avatarCircle.png":
/*!****************************************************!*\
  !*** ./src/assets/images/teacher/avatarCircle.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/avatarCirclef9a47d09b5b9cf560c56.png";

/***/ }),

/***/ "./src/assets/images/teacher/avatarCircle.png?as=webp":
/*!************************************************************!*\
  !*** ./src/assets/images/teacher/avatarCircle.png?as=webp ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/avatarCircle4c865d40149382c31b23.webp";

/***/ }),

/***/ "./src/assets/images/teacher/background.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/teacher/background.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/002f23f3e5c61e97bfef.svg";

/***/ }),

/***/ "./src/assets/images/teacher/background2.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/teacher/background2.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/8bd6ec84a1381001be68.svg";

/***/ }),

/***/ "./src/assets/images/teacher/buff1.png":
/*!*********************************************!*\
  !*** ./src/assets/images/teacher/buff1.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/buff1b9a75f49649315df10cf.png";

/***/ }),

/***/ "./src/assets/images/teacher/buff1.png?=webp":
/*!***************************************************!*\
  !*** ./src/assets/images/teacher/buff1.png?=webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/buff1b9a75f49649315df10cf.png";

/***/ }),

/***/ "./src/assets/images/teacher/buff2.png":
/*!*********************************************!*\
  !*** ./src/assets/images/teacher/buff2.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/buff230a6ca57dc14b51e2310.png";

/***/ }),

/***/ "./src/assets/images/teacher/buff2.png?=webp":
/*!***************************************************!*\
  !*** ./src/assets/images/teacher/buff2.png?=webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/buff230a6ca57dc14b51e2310.png";

/***/ }),

/***/ "./src/assets/images/teacher/buff3.png":
/*!*********************************************!*\
  !*** ./src/assets/images/teacher/buff3.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/buff311ce8c1d2c0699cd6d9b.png";

/***/ }),

/***/ "./src/assets/images/teacher/buff3.png?=webp":
/*!***************************************************!*\
  !*** ./src/assets/images/teacher/buff3.png?=webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/buff311ce8c1d2c0699cd6d9b.png";

/***/ }),

/***/ "./src/assets/images/teacher/buff5.png":
/*!*********************************************!*\
  !*** ./src/assets/images/teacher/buff5.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/buff56f1505fa09bccf79d0a4.png";

/***/ }),

/***/ "./src/assets/images/teacher/buff5.png?=webp":
/*!***************************************************!*\
  !*** ./src/assets/images/teacher/buff5.png?=webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/buff56f1505fa09bccf79d0a4.png";

/***/ }),

/***/ "./src/assets/images/teacher/quote.png":
/*!*********************************************!*\
  !*** ./src/assets/images/teacher/quote.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/quote16b3bce8d0e5508f537a.png";

/***/ }),

/***/ "./src/assets/images/teacher/quote.png?as=webp":
/*!*****************************************************!*\
  !*** ./src/assets/images/teacher/quote.png?as=webp ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/quote1c9ca1d58d7a429a9a5c.webp";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Teachers_Teacher_jsx.app.6904b391da54540abe5e.js.map