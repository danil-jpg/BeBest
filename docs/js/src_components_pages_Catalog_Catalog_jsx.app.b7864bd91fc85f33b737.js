"use strict";
(self["webpackChunkBeBest"] = self["webpackChunkBeBest"] || []).push([["src_components_pages_Catalog_Catalog_jsx"],{

/***/ "./src/components/UI/Forms/RangeSlider/RangeSlider.jsx":
/*!*************************************************************!*\
  !*** ./src/components/UI/Forms/RangeSlider/RangeSlider.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RangeSlider_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RangeSlider.scss */ "./src/components/UI/Forms/RangeSlider/RangeSlider.scss");
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






var RangeSlider = function RangeSlider(_ref) {
  var title = _ref.title;
  var start = 0;
  var end = 999;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([start, end]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    tracksValue = _useState2[0],
    setTrackValue = _useState2[1];
  var onChangeValueHandler = function onChangeValueHandler(value, index) {
    setTrackValue(value);
  };
  var renderThumb = function renderThumb(obj) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread(_objectSpread({}, obj), {}, {
      "aria-label": "range-slider"
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: "range-slider__title",
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "range-slider__values-wrap",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "range-slider__value",
        children: tracksValue[0]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "range-slider__value-delimiter",
        children: "-"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "range-slider__value",
        children: tracksValue[1]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_slider__WEBPACK_IMPORTED_MODULE_5__["default"], {
      min: start,
      max: end,
      className: "range-slider",
      thumbClassName: "range-slider__thumb",
      trackClassName: "range-slider__track",
      defaultValue: [start, end],
      renderThumb: renderThumb,
      onChange: onChangeValueHandler
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangeSlider);

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

/***/ "./src/components/common/ArticleCard/ArticleCard.jsx":
/*!***********************************************************!*\
  !*** ./src/components/common/ArticleCard/ArticleCard.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ArticleCard_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticleCard.scss */ "./src/components/common/ArticleCard/ArticleCard.scss");
/* harmony import */ var _UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/Picture/Picture */ "./src/components/UI/Picture/Picture.jsx");
/* harmony import */ var _UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Buttons/MainButton/MainButton */ "./src/components/UI/Buttons/MainButton/MainButton.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







var data = {
  titleBtn: 'Детальнее'
};
var ArticleCard = function ArticleCard(_ref) {
  var image = _ref.image,
    title = _ref.title,
    text = _ref.text,
    style = _ref.style,
    maxWidth = _ref.maxWidth;
  var imageSrc = "http://bebest.pp.ua".concat(image);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("li", {
    className: "article-card",
    style: _objectSpread(_objectSpread({}, style), {}, {
      maxWidth: maxWidth
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "article-card__image-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_3__["default"], {
        img: imageSrc,
        webp: "",
        className: "article-card__image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "article-card__body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
        className: "article-card__title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "article-card__text",
        children: text
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "small",
        style: {
          flex: '0 0 auto',
          maxWidth: '140px'
        },
        children: data.titleBtn
      })]
    })]
  });
};
ArticleCard.propTypes = {
  image: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  maxWidth: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  style: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleCard);

/***/ }),

/***/ "./src/components/pages/Catalog/Catalog.jsx":
/*!**************************************************!*\
  !*** ./src/components/pages/Catalog/Catalog.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Catalog_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Catalog.scss */ "./src/components/pages/Catalog/Catalog.scss");
/* harmony import */ var _common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/ContainerMain/ContainerMain */ "./src/components/common/ContainerMain/ContainerMain.jsx");
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var _FilterCatalog_FilterCatalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilterCatalog/FilterCatalog */ "./src/components/pages/Catalog/FilterCatalog/FilterCatalog.jsx");
/* harmony import */ var _UserListCatalog_UserListCatalog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserListCatalog/UserListCatalog */ "./src/components/pages/Catalog/UserListCatalog/UserListCatalog.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CatalogArticles_CatalogArticles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CatalogArticles/CatalogArticles */ "./src/components/pages/Catalog/CatalogArticles/CatalogArticles.jsx");
/* harmony import */ var _store_slices_catalogSlice_catalogSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../store/slices/catalogSlice/catalogSlice */ "./src/store/slices/catalogSlice/catalogSlice.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../store/slices/filterSlice/filterSlice */ "./src/store/slices/filterSlice/filterSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

















var data = {
  title: 'Список преподавателей',
  titleArticles: 'Полезные статьи'
};
var Catalog = function Catalog(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  var users = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {
    return state.catalogSlice.users;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    userData = _useState2[0],
    setUserData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var getUsers = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_14__["default"].get('http://bebest.pp.ua/api/users/?populate=*&filters[role][type][$eq]=teacher');
            case 2:
              res = _context.sent;
              dispatch((0,_store_slices_catalogSlice_catalogSlice__WEBPACK_IMPORTED_MODULE_11__.setUserList)(res.data));
              res.data.forEach(function (user) {
                dispatch((0,_store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_12__.setLessonSpeak)(user.lang));
                dispatch((0,_store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_12__.setLessonTime)(user.time));
                dispatch((0,_store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_12__.setLessonCountry)(user.country));
                dispatch((0,_store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_12__.setLangSpeak)(user.CommunicationLang));
                dispatch((0,_store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_12__.setSex)(user.sex));
                dispatch((0,_store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_12__.setPreparingTest)(user.preparingTest));
                dispatch((0,_store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_12__.setAspectLearn)(user.aspectLearn));
                dispatch((0,_store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_12__.setYearLearn)(user.yearLearn));
              });
              setUserData(res.data);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function getUsers() {
        return _ref.apply(this, arguments);
      };
    }();
    getUsers();
  }, [dispatch]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "catalog",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: data.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "catalog__row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "catalog__filter",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_FilterCatalog_FilterCatalog__WEBPACK_IMPORTED_MODULE_7__["default"], {
              users: userData,
              setUsers: setUserData
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "catalog__body",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_UserListCatalog_UserListCatalog__WEBPACK_IMPORTED_MODULE_8__["default"], {
              users: users
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_CatalogArticles_CatalogArticles__WEBPACK_IMPORTED_MODULE_10__["default"], {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);

/***/ }),

/***/ "./src/components/pages/Catalog/CatalogArticles/CatalogArticles.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogArticles/CatalogArticles.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CatalogArticles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CatalogArticles.scss */ "./src/components/pages/Catalog/CatalogArticles/CatalogArticles.scss");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/ContainerMain/ContainerMain */ "./src/components/common/ContainerMain/ContainerMain.jsx");
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var _common_ArticleCard_ArticleCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/ArticleCard/ArticleCard */ "./src/components/common/ArticleCard/ArticleCard.jsx");
/* harmony import */ var _UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../UI/Picture/Picture */ "./src/components/UI/Picture/Picture.jsx");
/* harmony import */ var _assets_images_catalog_article_bg_left_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../assets/images/catalog/article-bg_left.png */ "./src/assets/images/catalog/article-bg_left.png");
/* harmony import */ var _assets_images_catalog_article_bg_left_png_as_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../assets/images/catalog/article-bg_left.png?as=webp */ "./src/assets/images/catalog/article-bg_left.png?as=webp");
/* harmony import */ var _assets_images_catalog_article_bg_right_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../assets/images/catalog/article-bg_right.png */ "./src/assets/images/catalog/article-bg_right.png");
/* harmony import */ var _assets_images_catalog_article_bg_right_png_as_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../assets/images/catalog/article-bg_right.png?as=webp */ "./src/assets/images/catalog/article-bg_right.png?as=webp");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

















var data = {
  title: 'Список преподавателей',
  titleArticles: 'Полезные статьи'
};
var CatalogArticles = function CatalogArticles(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var urlApi = 'http://bebest.pp.ua/api/articles/?populate=*';
    axios__WEBPACK_IMPORTED_MODULE_15__["default"].get(urlApi).then( /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(response) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return response.data.data;
            case 2:
              res = _context.sent;
              setState((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(res));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"](function (error) {
      console.log(error.message);
    });
  }, [setState]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
    className: "articles-catalog",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        position: 'relative'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: 'center',
        style: {
          position: 'relative',
          zIndex: '1',
          margin: '0 0 35px'
        },
        children: data.titleArticles
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("ul", {
        className: "articles-catalog__list",
        children: state === null || state === void 0 ? void 0 : state.map(function (el) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_common_ArticleCard_ArticleCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
            image: el.attributes.image.data.attributes.url,
            title: el.attributes.title,
            text: el.attributes.text
          }, el.id);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
        img: _assets_images_catalog_article_bg_left_png__WEBPACK_IMPORTED_MODULE_10__,
        webp: _assets_images_catalog_article_bg_left_png_as_webp__WEBPACK_IMPORTED_MODULE_11__,
        className: "articles-catalog__image-bg articles-catalog__image-bg_left"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_9__["default"], {
        img: _assets_images_catalog_article_bg_right_png__WEBPACK_IMPORTED_MODULE_12__,
        webp: _assets_images_catalog_article_bg_right_png_as_webp__WEBPACK_IMPORTED_MODULE_13__,
        className: "articles-catalog__image-bg articles-catalog__image-bg_right"
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogArticles);

/***/ }),

/***/ "./src/components/pages/Catalog/FilterCatalog/FilterCatalog.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/pages/Catalog/FilterCatalog/FilterCatalog.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FilterCatalog_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterCatalog.scss */ "./src/components/pages/Catalog/FilterCatalog/FilterCatalog.scss");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../UI/Forms/SelectFormContainer/SelectFormContainer */ "./src/components/UI/Forms/SelectFormContainer/SelectFormContainer.jsx");
/* harmony import */ var _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/slices/filterSlice/filterSlice */ "./src/store/slices/filterSlice/filterSlice.js");
/* harmony import */ var _UI_Forms_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../UI/Forms/RangeSlider/RangeSlider */ "./src/components/UI/Forms/RangeSlider/RangeSlider.jsx");
/* harmony import */ var _UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../UI/Buttons/MainButton/MainButton */ "./src/components/UI/Buttons/MainButton/MainButton.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _store_slices_catalogSlice_catalogSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../store/slices/catalogSlice/catalogSlice */ "./src/store/slices/catalogSlice/catalogSlice.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













var titles = {
  filter: 'Фильтры',
  price: 'Цена',
  clear: 'Сбросить фильтр',
  submit: 'Применить'
};
var FilterCatalog = function FilterCatalog(_ref) {
  var users = _ref.users,
    setUsers = _ref.setUsers;
  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.filterSlice;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var onClearClickHandler = function onClearClickHandler() {
    dispatch((0,_store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__.clearFilter)());
    dispatch((0,_store_slices_catalogSlice_catalogSlice__WEBPACK_IMPORTED_MODULE_9__.setUserList)((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(users)));
  };
  var onSubmitClickHandler = function onSubmitClickHandler() {
    var selectedList = [];
    var _loop = function _loop(itemFilter) {
      data[itemFilter].list.forEach(function (el) {
        if (itemFilter === 'sb') return;
        if (el.selected) {
          selectedList.push((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data[itemFilter].value, el.title));
        }
      });
    };
    for (var itemFilter in data) {
      _loop(itemFilter);
    }
    if (!selectedList.length) {
      alert('Фильтры не выбраны');
    } else {
      dispatch((0,_store_slices_catalogSlice_catalogSlice__WEBPACK_IMPORTED_MODULE_9__.setUserList)((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(users)));
      dispatch((0,_store_slices_catalogSlice_catalogSlice__WEBPACK_IMPORTED_MODULE_9__.sortUsers)(selectedList));
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
    className: "filter-catalog",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
      className: "filter-catalog__title",
      children: titles.filter
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "filter-catalog__body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "filter-catalog__inner",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: data.lessonSpeak.title,
          list: data.lessonSpeak.list,
          setItem: _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__.selectLessonSpeak
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: data.lessonTime.title,
          list: data.lessonTime.list,
          setItem: _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__.selectLessonTime
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: data.lessonCountry.title,
          list: data.lessonCountry.list,
          setItem: _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__.selectLessonCountry
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: data.langSpeak.title,
          list: data.langSpeak.list,
          setItem: _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__.selectLangSpeak
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "filter-catalog__inner",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Forms_RangeSlider_RangeSlider__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: titles.price
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "filter-catalog__inner filter-catalog__inner_last",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: data.sex.title,
          list: data.sex.list,
          setItem: _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__.selectSex
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: data.preparingTest.title,
          list: data.preparingTest.list,
          setItem: _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__.selectPreparingTest
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: data.aspectLearn.title,
          list: data.aspectLearn.list,
          setItem: _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__.selectAspectLearn
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Forms_SelectFormContainer_SelectFormContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
          title: data.yearLearn.title,
          list: data.yearLearn.list,
          setItem: _store_slices_filterSlice_filterSlice__WEBPACK_IMPORTED_MODULE_6__.selectYearLearn
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "filter-catalog__footer",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_UI_Buttons_MainButton_MainButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          style: {
            textTransform: 'uppercase'
          },
          mb: "18px",
          onClick: onSubmitClickHandler,
          children: titles.submit
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, {
          to: "",
          className: "filter-catalog__clear-btn",
          onClick: onClearClickHandler,
          children: titles.clear
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterCatalog);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Forms/RangeSlider/RangeSlider.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Forms/RangeSlider/RangeSlider.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.range-slider {
  height: 15px;
}
.range-slider__track {
  height: 2px;
  background: #f2f5fa;
  top: 50%;
  transform: translateY(-50%);
}
.range-slider__track-1 {
  background: linear-gradient(90deg, #f04973 0%, #fa6655 100%);
}
.range-slider__thumb {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  border: 2px solid #f04973;
  background: #fff;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0px 4px 4px 0px rgba(31, 31, 31, 0.2);
  cursor: pointer;
}
.range-slider__thumb-1 {
  border: 2px solid #fa6655;
}
.range-slider__values-wrap {
  display: flex;
  align-items: center;
  margin: 0 0 17px;
}
.range-slider__value {
  border-radius: 20px;
  background: #f2f5fa;
  font-weight: 500;
  font-size: 13px;
  padding: 11px 30px 11px 20px;
  flex: 0 1 50%;
}
.range-slider__value-delimiter {
  display: block;
  margin: 0 7px;
}
.range-slider__title {
  color: #8b919e;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0 0 8px;
}`, "",{"version":3,"sources":["webpack://./src/components/UI/Forms/RangeSlider/RangeSlider.scss"],"names":[],"mappings":"AAAA;EACC,YAAA;AACD;AAAC;EACC,WAAA;EACA,mBAAA;EACA,QAAA;EACA,2BAAA;AAEF;AADE;EACC,4DAAA;AAGH;AAAC;EACC,WAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,QAAA;EACA,2BAAA;EACA,iDAAA;EACA,eAAA;AAEF;AADE;EACC,yBAAA;AAGH;AAAC;EACC,aAAA;EACA,mBAAA;EACA,gBAAA;AAEF;AAAC;EACC,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,4BAAA;EACA,aAAA;AAEF;AAAC;EACC,cAAA;EACA,aAAA;AAEF;AAAC;EACC,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;AAEF","sourcesContent":[".range-slider {\n\theight: 15px;\n\t&__track {\n\t\theight: 2px;\n\t\tbackground: #f2f5fa;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\t&-1 {\n\t\t\tbackground: linear-gradient(90deg, #f04973 0%, #fa6655 100%);\n\t\t}\n\t}\n\t&__thumb {\n\t\twidth: 15px;\n\t\theight: 15px;\n\t\tborder-radius: 15px;\n\t\tborder: 2px solid #f04973;\n\t\tbackground: #fff;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t\tbox-shadow: 0px 4px 4px 0px rgba(31, 31, 31, 0.2);\n\t\tcursor: pointer;\n\t\t&-1 {\n\t\t\tborder: 2px solid #fa6655;\n\t\t}\n\t}\n\t&__values-wrap {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tmargin: 0 0 17px;\n\t}\n\t&__value {\n\t\tborder-radius: 20px;\n\t\tbackground: #f2f5fa;\n\t\tfont-weight: 500;\n\t\tfont-size: 13px;\n\t\tpadding: 11px 30px 11px 20px;\n\t\tflex: 0 1 50%;\n\t}\n\t&__value-delimiter {\n\t\tdisplay: block;\n\t\tmargin: 0 7px;\n\t}\n\t&__title {\n\t\tcolor: #8b919e;\n\t\tfont-size: 13px;\n\t\tfont-weight: 500;\n\t\tline-height: 1.3;\n\t\tmargin: 0 0 8px;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/ArticleCard/ArticleCard.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/ArticleCard/ArticleCard.scss ***!
  \***********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.article-card {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;
  list-style-type: none;
}
.article-card:hover {
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.15);
}
.article-card:hover .article-card__image {
  transform: scale(1.1);
}
.article-card__image-wrap {
  height: 200px;
  overflow: hidden;
}
.article-card__image {
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.2s;
}
.article-card__body {
  padding: 27px 23px 29px;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 249px;
}
.article-card__title {
  color: #292C32;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 11px;
  line-height: 1.4;
}
.article-card__text {
  line-height: 1.7;
  margin: 0 0 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1 1 auto;
}`, "",{"version":3,"sources":["webpack://./src/components/common/ArticleCard/ArticleCard.scss"],"names":[],"mappings":"AAAA;EACC,mBAAA;EACA,gBAAA;EACA,sDAAA;EACA,gBAAA;EACA,oBAAA;EACA,eAAA;EACA,qBAAA;AACD;AAAC;EACC,iDAAA;AAEF;AAAC;EACC,qBAAA;AAEF;AAAC;EACC,aAAA;EACA,gBAAA;AAEF;AAAC;EACC,oBAAA;KAAA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,oBAAA;AAEF;AAAC;EACC,uBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;AAEF;AAAC;EACC,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;AAEF;AAAC;EACC,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,uBAAA;EACA,cAAA;AAEF","sourcesContent":[".article-card {\n\tborder-radius: 10px;\n\tbackground: #fff;\n\tbox-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\n\toverflow: hidden;\n\ttransition: all .2s;\n\tcursor: pointer;\n\tlist-style-type: none;\n\t&:hover {\n\t\tbox-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.15);\n\t}\n\t&:hover .article-card__image {\n\t\ttransform: scale(1.1);\n\t}\n\t&__image-wrap {\n\t\theight: 200px;\n\t\toverflow: hidden;\n\t}\n\t&__image {\n\t\tobject-fit: cover;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\ttransition: all .2s;\n\t}\n\t&__body {\n\t\tpadding: 27px 23px 29px;\n\t\tbackground: #fff;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\theight: 249px;\n\t}\n\t&__title {\n\t\tcolor: #292C32;\n\t\tfont-size: 16px;\n\t\tfont-weight: 700;\n\t\tmargin: 0 0 11px;\n\t\tline-height: 1.4;\n\t}\n\t&__text {\n\t\tline-height: 1.7;\n\t\tmargin: 0 0 22px;\n\t\toverflow: hidden;\n\t\ttext-overflow: ellipsis;\n\t\tflex: 1 1 auto;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Catalog/Catalog.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Catalog/Catalog.scss ***!
  \**************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.catalog {
  padding: 0 0 100px;
}
.catalog__row {
  display: flex;
}
.catalog__filter {
  flex: 0 0 280px;
  margin-right: 5.073%;
}
.catalog__body {
  flex: 0 1 100%;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Catalog/Catalog.scss"],"names":[],"mappings":"AAAA;EACC,kBAAA;AACD;AAAC;EACC,aAAA;AAEF;AAAC;EACC,eAAA;EACA,oBAAA;AAEF;AAAC;EACC,cAAA;AAEF","sourcesContent":[".catalog {\n\tpadding: 0 0 100px;\n\t&__row {\n\t\tdisplay: flex;\n\t}\n\t&__filter {\n\t\tflex: 0 0 280px;\n\t\tmargin-right: 5.073%;\n\t}\n\t&__body {\n\t\tflex: 0 1 100%;\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Catalog/CatalogArticles/CatalogArticles.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Catalog/CatalogArticles/CatalogArticles.scss ***!
  \**************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.articles-catalog {
  background: #f2f5fa;
  padding: 75px 0 104px;
  overflow: hidden;
}
.articles-catalog__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  -moz-column-gap: 40px;
       column-gap: 40px;
  position: relative;
  z-index: 1;
}
.articles-catalog__image-bg {
  position: absolute;
}
.articles-catalog__image-bg_left {
  left: -443px;
  top: -342px;
}
.articles-catalog__image-bg_right {
  right: -453px;
  top: -581px;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Catalog/CatalogArticles/CatalogArticles.scss"],"names":[],"mappings":"AAAA;EACC,mBAAA;EACA,qBAAA;EACA,gBAAA;AACD;AAAC;EACC,aAAA;EACA,qCAAA;EACA,qBAAA;OAAA,gBAAA;EACA,kBAAA;EACA,UAAA;AAEF;AAAC;EACC,kBAAA;AAEF;AADE;EACC,YAAA;EACA,WAAA;AAGH;AADE;EACC,aAAA;EACA,WAAA;AAGH","sourcesContent":[".articles-catalog {\n\tbackground: #f2f5fa;\n\tpadding: 75px 0 104px;\n\toverflow: hidden;\n\t&__list {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t\tcolumn-gap: 40px;\n\t\tposition: relative;\n\t\tz-index: 1;\n\t}\n\t&__image-bg {\n\t\tposition: absolute;\n\t\t&_left {\n\t\t\tleft: -443px;\n\t\t\ttop: -342px;\n\t\t}\n\t\t&_right {\n\t\t\tright: -453px;\n\t\t\ttop: -581px;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Catalog/FilterCatalog/FilterCatalog.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Catalog/FilterCatalog/FilterCatalog.scss ***!
  \**********************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.filter-catalog {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);
  padding: 30px 30px 42px;
}
.filter-catalog__title {
  color: #292C32;
  font-size: 15px;
  line-height: 1.266;
  font-weight: 700;
  margin: 0 0 13px;
}
.filter-catalog__inner {
  margin: 0 0 43px;
}
.filter-catalog__inner_last {
  margin: 0 0 32px;
}
.filter-catalog__clear-btn {
  display: block;
  color: #F04973;
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
  text-decoration-line: underline;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Catalog/FilterCatalog/FilterCatalog.scss"],"names":[],"mappings":"AAAA;EACC,mBAAA;EACA,gBAAA;EACA,sDAAA;EACA,uBAAA;AACD;AAAC;EACC,cAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;AAEF;AAAC;EACC,gBAAA;AAEF;AADE;EACC,gBAAA;AAGH;AAAC;EACC,cAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,+BAAA;AAEF","sourcesContent":[".filter-catalog {\n\tborder-radius: 10px;\n\tbackground: #fff;\n\tbox-shadow: 0px 10px 60px 0px rgba(42, 102, 193, 0.15);\n\tpadding: 30px 30px 42px;\n\t&__title {\n\t\tcolor: #292C32;\n\t\tfont-size: 15px;\n\t\tline-height: 1.266;\n\t\tfont-weight: 700;\n\t\tmargin: 0 0 13px;\n\t}\n\t&__inner {\n\t\tmargin: 0 0 43px;\n\t\t&_last {\n\t\t\tmargin: 0 0 32px;\n\t\t}\n\t}\n\t&__clear-btn {\n\t\tdisplay: block;\n\t\tcolor: #F04973;\n\t\ttext-align: center;\n\t\tfont-weight: 500;\n\t\tline-height: 1.2;\n\t\ttext-decoration-line: underline;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/UI/Forms/RangeSlider/RangeSlider.scss":
/*!**************************************************************!*\
  !*** ./src/components/UI/Forms/RangeSlider/RangeSlider.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RangeSlider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./RangeSlider.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/UI/Forms/RangeSlider/RangeSlider.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RangeSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RangeSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RangeSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_RangeSlider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/common/ArticleCard/ArticleCard.scss":
/*!************************************************************!*\
  !*** ./src/components/common/ArticleCard/ArticleCard.scss ***!
  \************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ArticleCard_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ArticleCard.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/common/ArticleCard/ArticleCard.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ArticleCard_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ArticleCard_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ArticleCard_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ArticleCard_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Catalog/Catalog.scss":
/*!***************************************************!*\
  !*** ./src/components/pages/Catalog/Catalog.scss ***!
  \***************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Catalog_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Catalog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Catalog/Catalog.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Catalog_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Catalog_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Catalog_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Catalog_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Catalog/CatalogArticles/CatalogArticles.scss":
/*!***************************************************************************!*\
  !*** ./src/components/pages/Catalog/CatalogArticles/CatalogArticles.scss ***!
  \***************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CatalogArticles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./CatalogArticles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Catalog/CatalogArticles/CatalogArticles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CatalogArticles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CatalogArticles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CatalogArticles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_CatalogArticles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pages/Catalog/FilterCatalog/FilterCatalog.scss":
/*!***********************************************************************!*\
  !*** ./src/components/pages/Catalog/FilterCatalog/FilterCatalog.scss ***!
  \***********************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FilterCatalog_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./FilterCatalog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Catalog/FilterCatalog/FilterCatalog.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FilterCatalog_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FilterCatalog_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FilterCatalog_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_FilterCatalog_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/images/catalog/article-bg_left.png":
/*!*******************************************************!*\
  !*** ./src/assets/images/catalog/article-bg_left.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/article-bg_left8bcc29f54e9e62689f64.png";

/***/ }),

/***/ "./src/assets/images/catalog/article-bg_left.png?as=webp":
/*!***************************************************************!*\
  !*** ./src/assets/images/catalog/article-bg_left.png?as=webp ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/article-bg_left5d62662253410bdbf297.webp";

/***/ }),

/***/ "./src/assets/images/catalog/article-bg_right.png":
/*!********************************************************!*\
  !*** ./src/assets/images/catalog/article-bg_right.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/article-bg_rightfc342fc2dd130b6724d9.png";

/***/ }),

/***/ "./src/assets/images/catalog/article-bg_right.png?as=webp":
/*!****************************************************************!*\
  !*** ./src/assets/images/catalog/article-bg_right.png?as=webp ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/article-bg_right44d3d9a5124ec3c2d973.webp";

/***/ })

}]);
//# sourceMappingURL=src_components_pages_Catalog_Catalog_jsx.app.b7864bd91fc85f33b737.js.map