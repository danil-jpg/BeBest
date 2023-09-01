"use strict";
(self["webpackChunkBeBest"] = self["webpackChunkBeBest"] || []).push([["src_components_pages_Article_Article_jsx"],{

/***/ "./src/components/pages/Article/Article.jsx":
/*!**************************************************!*\
  !*** ./src/components/pages/Article/Article.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Article_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Article.scss */ "./src/components/pages/Article/Article.scss");
/* harmony import */ var _common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ContainerMain/ContainerMain */ "./src/components/common/ContainerMain/ContainerMain.jsx");
/* harmony import */ var _UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/Title/Title */ "./src/components/UI/Title/Title.jsx");
/* harmony import */ var _common_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Breadcrumbs/Breadcrumbs */ "./src/components/common/Breadcrumbs/Breadcrumbs.jsx");
/* harmony import */ var _Teachers_TeacherQuotes_TeacherQuotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Teachers/TeacherQuotes/TeacherQuotes */ "./src/components/pages/Teachers/TeacherQuotes/TeacherQuotes.jsx");
/* harmony import */ var _UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../UI/Picture/Picture */ "./src/components/UI/Picture/Picture.jsx");
/* harmony import */ var _assets_images_teacher_quote_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../assets/images/teacher/quote.png */ "./src/assets/images/teacher/quote.png");
/* harmony import */ var _assets_images_teacher_quote_png_as_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/images/teacher/quote.png?as=webp */ "./src/assets/images/teacher/quote.png?as=webp");
/* harmony import */ var _assets_images_article_pic_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../assets/images/article/pic.png */ "./src/assets/images/article/pic.png");
/* harmony import */ var _assets_images_article_pic_png_as_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/images/article/pic.png?as=webp */ "./src/assets/images/article/pic.png?as=webp");
/* harmony import */ var _assets_images_article_teacher_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../assets/images/article/teacher.png */ "./src/assets/images/article/teacher.png");
/* harmony import */ var _assets_images_article_teacher_png_as_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/images/article/teacher.png?as=webp */ "./src/assets/images/article/teacher.png?as=webp");
/* harmony import */ var _assets_images_article_working_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/images/article/working.png */ "./src/assets/images/article/working.png");
/* harmony import */ var _assets_images_article_working_png_as_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/images/article/working.png?as=webp */ "./src/assets/images/article/working.png?as=webp");
/* harmony import */ var _assets_images_article_goal_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../assets/images/article/goal.png */ "./src/assets/images/article/goal.png");
/* harmony import */ var _assets_images_article_goal_png_as_webp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../assets/images/article/goal.png?as=webp */ "./src/assets/images/article/goal.png?as=webp");
/* harmony import */ var _assets_icons_important_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../assets/icons/important.svg */ "./src/assets/icons/important.svg");
/* harmony import */ var _Teachers_TeacherCalendar_TeacherCalendar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Teachers/TeacherCalendar/TeacherCalendar */ "./src/components/pages/Teachers/TeacherCalendar/TeacherCalendar.jsx");
/* harmony import */ var _Home_PopularCourse_PopularCourse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Home/PopularCourse/PopularCourse */ "./src/components/pages/Home/PopularCourse/PopularCourse.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");























var Article = function Article() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([false, true]),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([true, false, false]),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    tab2 = _useState4[0],
    setTab2 = _useState4[1];
  var revertedText = " \u0423\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0432\u0430\u0436\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F\n    \u043F\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C\n    \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439\n    \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439\n    \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0443 \u0442\u0435\u043A\u0441\u0442. \u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0438 \u043E\u0442 lorem\n    ipsum, \u0442\u0435\u043A\u0441\u0442 \u0440\u044B\u0431\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C\n    \u0441\u043C\u044B\u0441\u043B\u043E\u043C \u0438 \u043F\u0440\u0438\u0434\u0430\u0441\u0442 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u0441\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0445 \u0432\u0440\u0435\u043C\u0435\u043D. \u041F\u043E \u0441\u0432\u043E\u0435\u0439\n    \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum.\n    ".split('').reverse().join('');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_common_ContainerMain_ContainerMain__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      className: "acticle",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_UI_Title_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: "\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "article__body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
            className: "date-text_sm",
            children: "28 \u0438\u044E\u043D\u044F 2021"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
            className: "article__text article__top-text",
            children: ["\u0421\u0430\u0439\u0442 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u0443, \u0432\u0435\u0431\u043C\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043E\u043B\u0435\u0435 \u043C\u0435\u043D\u0435\u0435 \u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0440\u044B\u0431\u044B \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0435\u043C\u0443 \u043E\u0440\u0430\u0442\u043E\u0440\u0443 \u043E\u0442\u0442\u043E\u0447\u0438\u0442\u044C \u043D\u0430\u0432\u044B\u043A \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0432 \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445. \u041F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u043D\u0435\u0431\u0435\u0437\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0434 \u0440\u0435\u0447\u0435\u0439. \u0422\u0435\u043A\u0441\u0442 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0430\u0431\u0437\u0430\u0446\u0430\u043C\u0438 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0442 \u0434\u0432\u0443\u0445 \u0434\u043E \u0434\u0435\u0441\u044F\u0442\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432 \u0430\u0431\u0437\u0430\u0446\u0435, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0431\u043E\u043B\u0435\u0435 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0438 \u0436\u0438\u0432\u044B\u043C \u0434\u043B\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E-\u0441\u043B\u0443\u0445\u043E\u0432\u043E\u0433\u043E \u0432\u043E\u0441\u043F\u0440\u0438\u044F\u0442\u0438\u044F.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("br", {}), " \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0443 \u0442\u0435\u043A\u0441\u0442. \u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0438 \u043E\u0442 lorem ipsum, \u0442\u0435\u043A\u0441\u0442 \u0440\u044B\u0431\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0441\u043C\u044B\u0441\u043B\u043E\u043C \u0438 \u043F\u0440\u0438\u0434\u0430\u0441\u0442 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u0441\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0445 \u0432\u0440\u0435\u043C\u0435\u043D. \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "article__text__quote",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
              className: "teacher__about_text_left",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_7__["default"], {
                img: _assets_images_teacher_quote_png__WEBPACK_IMPORTED_MODULE_8__,
                webp: _assets_images_teacher_quote_png_as_webp__WEBPACK_IMPORTED_MODULE_9__
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
              className: "teacher__about_text_right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                className: "teacher__about_text",
                children: "\u0423\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0432\u0430\u0436\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u043F\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u0422\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043D\u0430\u043C\u0435\u0447\u0435\u043D\u043D\u044B\u0445 \u043F\u043B\u0430\u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F. \u0418\u0434\u0435\u0439\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0432\u044B\u0441\u0448\u0435\u0433\u043E \u043F\u043E\u0440\u044F\u0434\u043A\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u0441 \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u0430\u043A\u0442\u0438\u0432\u043E\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u0441\u0442\u0432\u0443\u0435\u0442 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0438 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u043E\u0434\u0435\u043B\u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F."
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
            className: "article__subTitle",
            children: "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0433\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0433\u043E \u0443\u0440\u043E\u043A\u0430"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
            className: "article__subSubTitle",
            children: "\u0414\u044D\u043D \u041C\u0438\u043B\u043B\u043C\u0430\u043D"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
            className: "article__text article__descr",
            children: "\u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0443 \u0442\u0435\u043A\u0441\u0442. \u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0438 \u043E\u0442 lorem ipsum, \u0442\u0435\u043A\u0441\u0442 \u0440\u044B\u0431\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0441\u043C\u044B\u0441\u043B\u043E\u043C \u0438 \u043F\u0440\u0438\u0434\u0430\u0441\u0442 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u0441\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0445 \u0432\u0440\u0435\u043C\u0435\u043D. \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "article__middle-text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "article__middle-text_left",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                className: "article__subTitle_mid",
                children: "\u041A\u0443\u0440\u0441 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                className: "article__subTitle_sm",
                children: "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("p", {
                className: "article__text article__descr",
                children: ["\u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0443 \u0442\u0435\u043A\u0441\u0442. \u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0438 \u043E\u0442 lorem ipsum, \u0442\u0435\u043A\u0441\u0442 \u0440\u044B\u0431\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0441\u043C\u044B\u0441\u043B\u043E\u043C \u0438 \u043F\u0440\u0438\u0434\u0430\u0441\u0442 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u0441\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0445 \u0432\u0440\u0435\u043C\u0435\u043D. \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("br", {}), "\u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0443 \u0442\u0435\u043A\u0441\u0442. \u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0438 \u043E\u0442 lorem ipsum, \u0442\u0435\u043A\u0441\u0442 \u0440\u044B\u0431\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0441\u043C\u044B\u0441\u043B\u043E\u043C \u0438 \u043F\u0440\u0438\u0434\u0430\u0441\u0442 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u0441\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0445 \u0432\u0440\u0435\u043C\u0435\u043D. \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum."]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
              className: "article__middle-text_right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_7__["default"], {
                img: _assets_images_article_pic_png__WEBPACK_IMPORTED_MODULE_10__,
                webp: _assets_images_article_pic_png_as_webp__WEBPACK_IMPORTED_MODULE_11__
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "article__center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "article__center__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_7__["default"], {
                img: _assets_images_article_teacher_png__WEBPACK_IMPORTED_MODULE_12__,
                webp: _assets_images_article_teacher_png_as_webp__WEBPACK_IMPORTED_MODULE_13__
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                className: "teacher__cernter__item_title",
                children: "\u041D\u0430\u0439\u0434\u0438\u0442\u0435 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                className: "teacher__cernter__item_text",
                children: "\u041D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0431\u044E\u0434\u0436\u0435\u0442\u0430 \u0438 \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u0439, \u0432\u044B \u0442\u043E\u0447\u043D\u043E \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u0439\u0442\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u0434\u043B\u044F \u0441\u0435\u0431\u044F \u0443\u0447\u0438\u0442\u0435\u043B\u044F."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "article__center__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_7__["default"], {
                img: _assets_images_article_working_png__WEBPACK_IMPORTED_MODULE_14__,
                webp: _assets_images_article_working_png_as_webp__WEBPACK_IMPORTED_MODULE_15__
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                className: "teacher__cernter__item_title",
                children: "\u041F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u0443\u0440\u043E\u043A"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                className: "teacher__cernter__item_text",
                children: "\u0423\u0440\u043E\u043A\u0438 \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u043F\u0440\u044F\u043C\u043E \u0432 \u0432\u0430\u0448\u0435\u043C \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435. \u041D\u0438\u043A\u0430\u043A\u0438\u0445 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0433\u0440\u0443\u0437\u043E\u043A \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0439 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u0445."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "article__center__item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_UI_Picture_Picture__WEBPACK_IMPORTED_MODULE_7__["default"], {
                img: _assets_images_article_goal_png__WEBPACK_IMPORTED_MODULE_16__,
                webp: _assets_images_article_goal_png_as_webp__WEBPACK_IMPORTED_MODULE_17__
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                className: "teacher__cernter__item_title",
                children: "\u0423\u0447\u0438\u0442\u0435\u0441\u044C \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0438 \u0434\u043E\u0431\u0438\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                className: "teacher__cernter__item_text",
                children: "\u041F\u043B\u0430\u043D\u044B \u0443\u0440\u043E\u043A\u043E\u0432, \u043E\u0442\u0447\u0435\u0442\u044B, \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u043F\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0438 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u044D\u0442\u0430\u043F\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0442 \u0432\u0430\u043C \u0441 \u043B\u0435\u0433\u043A\u043E\u0441\u0442\u044C\u044E \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "article__tabs",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "tabs_top",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: tab[0] ? 'tabs_top-tab active' : 'tabs_top-tab',
                onClick: function onClick() {
                  return setTab([true, false]);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("img", {
                  src: _assets_icons_important_svg__WEBPACK_IMPORTED_MODULE_18__
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                  className: "tab_text",
                  children: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
                className: tab[1] ? 'tabs_top-tab active' : 'tabs_top-tab',
                onClick: function onClick() {
                  return setTab([false, true]);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("img", {
                  src: _assets_icons_important_svg__WEBPACK_IMPORTED_MODULE_18__
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                  className: "tab_text",
                  children: "\u0415\u0449\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
              className: tab[0] ? 'tabs_descr active' : 'tabs_descr',
              children: "\u0423\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0432\u0430\u0436\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u043F\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0443 \u0442\u0435\u043A\u0441\u0442. \u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0438 \u043E\u0442 lorem ipsum, \u0442\u0435\u043A\u0441\u0442 \u0440\u044B\u0431\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0441\u043C\u044B\u0441\u043B\u043E\u043C \u0438 \u043F\u0440\u0438\u0434\u0430\u0441\u0442 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u0441\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0445 \u0432\u0440\u0435\u043C\u0435\u043D. \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
              className: tab[1] ? 'tabs_descr active' : 'tabs_descr',
              children: revertedText
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "article__tabs article__tabs_2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
              className: "tabs_top",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                className: tab2[0] ? 'tabs_top-tab active' : 'tabs_top-tab',
                onClick: function onClick() {
                  return setTab2([true, false, false]);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                  className: "tab_text",
                  children: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                className: tab2[1] ? 'tabs_top-tab active' : 'tabs_top-tab',
                onClick: function onClick() {
                  return setTab2([false, true, false]);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                  className: "tab_text",
                  children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
                className: tab2[2] ? 'tabs_top-tab active' : 'tabs_top-tab',
                onClick: function onClick() {
                  return setTab2([false, false, true]);
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
                  className: "tab_text",
                  children: "\u041A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
              className: tab2[0] ? 'tabs_descr active' : 'tabs_descr',
              children: "\u0423\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0432\u0430\u0436\u043D\u044B\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u043F\u043E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0443 \u0442\u0435\u043A\u0441\u0442. \u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0438 \u043E\u0442 lorem ipsum, \u0442\u0435\u043A\u0441\u0442 \u0440\u044B\u0431\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0441\u043C\u044B\u0441\u043B\u043E\u043C \u0438 \u043F\u0440\u0438\u0434\u0430\u0441\u0442 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u0441\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0445 \u0432\u0440\u0435\u043C\u0435\u043D. \u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
              className: tab2[1] ? 'tabs_descr active' : 'tabs_descr',
              children: revertedText
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
              className: tab2[2] ? 'tabs_descr active' : 'tabs_descr',
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Teachers_TeacherCalendar_TeacherCalendar__WEBPACK_IMPORTED_MODULE_19__["default"], {})
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_Home_PopularCourse_PopularCourse__WEBPACK_IMPORTED_MODULE_20__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
        className: "article__body",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          className: "article__ul-wr",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("ol", {
            className: "article__ul",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
              className: "article__li",
              children: "\u0421\u0430\u0439\u0442 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u0443, \u0432\u0435\u0431\u043C\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043E\u043B\u0435\u0435 \u043C\u0435\u043D\u0435\u0435 \u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0440\u044B\u0431\u044B \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0435\u043C\u0443 \u043E\u0440\u0430\u0442\u043E\u0440\u0443 \u043E\u0442\u0442\u043E\u0447\u0438\u0442\u044C \u043D\u0430\u0432\u044B\u043A \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 \u0432 \u0434\u043E\u043C\u0430\u0448\u043D\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("li", {
              className: "article__li",
              children: ["\u041F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u043D\u0435\u0431\u0435\u0437\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0434 \u0440\u0435\u0447\u0435\u0439. \u0422\u0435\u043A\u0441\u0442 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0430\u0431\u0437\u0430\u0446\u0430\u043C\u0438 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0442 \u0434\u0432\u0443\u0445 \u0434\u043E \u0434\u0435\u0441\u044F\u0442\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0432 \u0430\u0431\u0437\u0430\u0446\u0435, \u0447\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u0431\u043E\u043B\u0435\u0435 \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0438 \u0436\u0438\u0432\u044B\u043C \u0434\u043B\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u043E-\u0441\u043B\u0443\u0445\u043E\u0432\u043E\u0433\u043E \u0432\u043E\u0441\u043F\u0440\u0438\u044F\u0442\u0438\u044F:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("ul", {
                className: "article__ol",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
                  className: "article__li",
                  children: "c\u0430\u0439\u0442 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u0443, \u0432\u0435\u0431\u043C\u0430\u0441\u0442\u0435\u0440\u0443"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
                  className: "article__li",
                  children: "\u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043E\u043B\u0435\u0435 \u043C\u0435\u043D\u0435\u0435 \u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0440\u044B\u0431\u044B \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435,\u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043C\u044B"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
                  className: "article__li",
                  children: "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u043D\u0435\u0431\u0435\u0437\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0434 \u0440\u0435\u0447\u0435\u0439."
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("li", {
              className: "article__li",
              children: "\u041F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u0430 \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u0438 \u043D\u0435\u0431\u0435\u0437\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0434 \u0440\u0435\u0447\u0435\u0439."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            className: "article__bottom-text-wr",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
              children: "\u041F\u043E \u0441\u0432\u043E\u0435\u0439 \u0441\u0443\u0442\u0438 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043E\u043D\u043D\u043E\u043C\u0443 lorem ipsum, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u0443 \u043D\u0435\u043A\u0442\u043E\u0440\u044B\u0445 \u043B\u044E\u0434\u0435\u0439 \u043D\u0435\u0434\u043E\u0443\u043C\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0430\u0445 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \u0440\u044B\u0431\u0443 \u0442\u0435\u043A\u0441\u0442. \u0421\u0430\u0439\u0442 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u0443"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
              children: "\u0412 \u043E\u0442\u043B\u0438\u0447\u0438\u0438 \u043E\u0442 lorem ipsum, \u0442\u0435\u043A\u0441\u0442 \u0440\u044B\u0431\u0430 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442 \u043B\u044E\u0431\u043E\u0439 \u043C\u0430\u043A\u0435\u0442 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0441\u043C\u044B\u0441\u043B\u043E\u043C \u0438 \u043F\u0440\u0438\u0434\u0430\u0441\u0442 \u043D\u0435\u043F\u043E\u0432\u0442\u043E\u0440\u0438\u043C\u044B\u0439 \u043A\u043E\u043B\u043E\u0440\u0438\u0442 \u0441\u043E\u0432\u0435\u0442\u0441\u043A\u0438\u0445 \u0432\u0440\u0435\u043C\u0435\u043D."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("p", {
              children: "\u0421\u0430\u0439\u0442 \u0440\u044B\u0431\u0430\u0442\u0435\u043A\u0441\u0442 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0443, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u0443, \u0432\u0435\u0431\u043C\u0430\u0441\u0442\u0435\u0440\u0443 \u0441\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0430\u0431\u0437\u0430\u0446\u0435\u0432 \u0431\u043E\u043B\u0435\u0435 \u043C\u0435\u043D\u0435\u0435 \u043E\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0440\u044B\u0431\u044B \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435, \u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0435\u043C\u0443 \u043E\u0440\u0430\u0442\u043E\u0440\u0443 \u043E\u0442\u0442\u043E\u0447\u0438\u0442\u044C \u043D\u0430\u0432\u044B\u043A \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0445 \u0432\u044B\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439."
            })]
          })]
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Article);

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Article/Article.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Article/Article.scss ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.date-text_sm {
  color: #8b919e;
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
}

.article__text {
  color: #292c32;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px; /* 200% */
}

.article__body {
  padding: 0 117px;
}

.article__top-text {
  margin-top: 16px;
}

.article__text__quote {
  margin-top: 40px;
  padding: 0 93px;
  display: flex;
}

.article__subTitle {
  color: #292c32;
  font-size: 25px;
  font-weight: 700;
  margin-top: 52px;
  line-height: 88%; /* 88% */
}

.article__subSubTitle {
  color: #292c32;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1; /* 110% */
  margin-top: 30px;
}

.article__text {
  color: #292c32;
  font-size: 15px;
  font-weight: 400;
  line-height: 2; /* 200% */
}

.article__descr {
  margin-top: 17px;
}

.article__middle-text {
  display: flex;
  justify-content: space-between;
}

.article__middle-text_left {
  width: 58%;
}

.article__subTitle_mid {
  color: #292c32;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.43; /* 143.75% */
  margin-top: 14px;
}

.article__subTitle_sm {
  color: #292c32;
  font-size: 15px;
  font-weight: 700;
  margin-top: 17px;
  line-height: 1.26; /* 126.667% */
}

.article__middle-text_right {
  margin-top: 57px;
}

.article__center {
  margin-top: 62px;
  display: flex;
  justify-content: space-between;
}

.article__center__item {
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 330px;
}

.teacher__cernter__item_title {
  color: #292c32;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22; /* 122.222% */
  margin-top: 21px;
}

.teacher__cernter__item_text {
  color: #454b58;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.78; /* 178.571% */
  margin-top: 10px;
}

.article__tabs {
  height: 205px;
  margin-top: 60px;
  border-radius: 10px;
  background: #fff;
  margin-top: 53px;
  border-radius: 10px;
  box-shadow: 0px 10px 40px 0px rgba(42, 102, 193, 0.1);
}

.tabs_top {
  display: flex;
  border-radius: 0px 10px 0px 0px;
  background: #f2f5fa;
}

.tabs_top_active {
  background-color: rgb(255, 255, 255);
  color: #f04973;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
}

.tabs_top-tab {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px 25px;
}
.tabs_top-tab.active {
  background: #fff;
}

.tab_text {
  color: #8b919e;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18px */
  margin-left: 8px;
}

.tabs_descr {
  color: #454b58;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 192.308% */
  padding: 25px 25px;
  display: none;
}
.tabs_descr.active {
  display: block;
}

.article__tabs_2 {
  height: auto;
  box-shadow: none;
  margin-top: 60px;
}
.article__tabs_2 .tabs_top {
  background: none;
  margin-bottom: 17px;
}
.article__tabs_2 .tabs_descr {
  padding: 0;
  color: #292c32;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px; /* 200% */
}
.article__tabs_2 .tabs_top-tab {
  padding: 0;
}
.article__tabs_2 .tabs_top-tab .tab_text {
  margin-left: 0;
  margin-right: 25px;
  font-size: 15px;
  font-weight: 600;
  line-height: 150%; /* 22.5px */
}
.article__tabs_2 .tabs_top-tab.active {
  background: none;
  padding: 0;
}
.article__tabs_2 .tabs_top-tab.active .tab_text {
  color: #f04973;
}

.article__li {
  color: #292c32;
  font-size: 15px;
  font-weight: 400;
  line-height: 200%; /*  */
}

.article__ol {
  margin-left: 32px;
}
.article__ol .article__li {
  position: relative;
}
.article__ol .article__li::after {
  display: flex;
  align-items: center;
  position: absolute;
  content: "";
  left: -10px;
  width: 7px;
  top: 46%;
  border-radius: 50%;
  height: 7px;
  border: 1px solid #292c32;
  background-color: transparent;
}

.article__bottom-text-wr {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  color: #292c32;
  font-size: 15px;
  font-weight: 400;
  line-height: 200%; /*  */
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Article/Article.scss"],"names":[],"mappings":"AAEA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;AADJ;;AAGA;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AAAJ;;AAEA;EACI,gBAAA;AACJ;;AACA;EACI,gBAAA;AAEJ;;AAAA;EACI,gBAAA;EACA,eAAA;EACA,aAAA;AAGJ;;AADA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA,EAAA,QAAA;AAIJ;;AAFA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA,EAAA,SAAA;EACA,gBAAA;AAKJ;;AAHA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA,EAAA,SAAA;AAMJ;;AAJA;EACI,gBAAA;AAOJ;;AALA;EACI,aAAA;EACA,8BAAA;AAQJ;;AANA;EACI,UAAA;AASJ;;AAPA;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,YAAA;EACA,gBAAA;AAUJ;;AARA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EAEA,iBAAA,EAAA,aAAA;AAUJ;;AAJA;EACI,gBAAA;AAOJ;;AALA;EACI,gBAAA;EACA,aAAA;EACA,8BAAA;AAQJ;;AANA;EACI,aAAA;EACA,sBAAA;EACA,sBAAA;EACA,gBAAA;AASJ;;AAPA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,gBAAA;AAUJ;;AARA;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,gBAAA;AAWJ;;AATA;EACI,aAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,qDAAA;AAYJ;;AARA;EACI,aAAA;EACA,+BAAA;EACA,mBAAA;AAWJ;;AATA;EACI,oCAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AAYJ;;AAVA;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AAaJ;AAZI;EACI,gBAAA;AAcR;;AAXA;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;EACA,gBAAA;AAcJ;;AAZA;EACI,cAAA;EACA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA,EAAA,aAAA;EACA,kBAAA;EACA,aAAA;AAeJ;AAdI;EACI,cAAA;AAgBR;;AAZA;EACI,YAAA;EACA,gBAAA;EACA,gBAAA;AAeJ;AAdI;EACI,gBAAA;EACA,mBAAA;AAgBR;AAdI;EACI,UAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,SAAA;AAgBR;AAdI;EACI,UAAA;AAgBR;AAfQ;EACI,cAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,WAAA;AAiBZ;AAfQ;EACI,gBAAA;EACA,UAAA;AAiBZ;AAhBY;EACI,cAAA;AAkBhB;;AARA;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,KAAA;AAWJ;;AATA;EAEI,iBAAA;AAWJ;AATI;EACI,kBAAA;AAWR;AATI;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,yBAAA;EACA,6BAAA;AAWR;;AAPA;EACI,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA,EAAA,KAAA;AAUJ","sourcesContent":[".acticle {\r\n}\r\n.date-text_sm {\r\n    color: #8b919e;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n}\r\n.article__text {\r\n    color: #292c32;\r\n    font-family: Montserrat;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    line-height: 30px; /* 200% */\r\n}\r\n.article__body {\r\n    padding: 0 117px;\r\n}\r\n.article__top-text {\r\n    margin-top: 16px;\r\n}\r\n.article__text__quote {\r\n    margin-top: 40px;\r\n    padding: 0 93px;\r\n    display: flex;\r\n}\r\n.article__subTitle {\r\n    color: #292c32;\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n    margin-top: 52px;\r\n    line-height: 88%; /* 88% */\r\n}\r\n.article__subSubTitle {\r\n    color: #292c32;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    line-height: 1.1; /* 110% */\r\n    margin-top: 30px;\r\n}\r\n.article__text {\r\n    color: #292c32;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    line-height: 2; /* 200% */\r\n}\r\n.article__descr {\r\n    margin-top: 17px;\r\n}\r\n.article__middle-text {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.article__middle-text_left {\r\n    width: 58%;\r\n}\r\n.article__subTitle_mid {\r\n    color: #292c32;\r\n    font-family: Montserrat;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    line-height: 1.43; /* 143.75% */\r\n    margin-top: 14px;\r\n}\r\n.article__subTitle_sm {\r\n    color: #292c32;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    margin-top: 17px;\r\n\r\n    line-height: 1.26; /* 126.667% */\r\n}\r\n.article__text {\r\n}\r\n.article__descr {\r\n}\r\n.article__middle-text_right {\r\n    margin-top: 57px;\r\n}\r\n.article__center {\r\n    margin-top: 62px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.article__center__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    max-width: 330px;\r\n}\r\n.teacher__cernter__item_title {\r\n    color: #292c32;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    line-height: 1.22; /* 122.222% */\r\n    margin-top: 21px;\r\n}\r\n.teacher__cernter__item_text {\r\n    color: #454b58;\r\n    font-family: Montserrat;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1.78; /* 178.571% */\r\n    margin-top: 10px;\r\n}\r\n.article__tabs {\r\n    height: 205px;\r\n    margin-top: 60px;\r\n    border-radius: 10px;\r\n    background: #fff;\r\n    margin-top: 53px;\r\n    border-radius: 10px;\r\n    box-shadow: 0px 10px 40px 0px rgba(42, 102, 193, 0.1);\r\n}\r\n.article__tabs {\r\n}\r\n.tabs_top {\r\n    display: flex;\r\n    border-radius: 0px 10px 0px 0px;\r\n    background: #f2f5fa;\r\n}\r\n.tabs_top_active {\r\n    background-color: rgba(255, 255, 255, 1);\r\n    color: #f04973;\r\n    font-size: 12px;\r\n    font-weight: 600;\r\n    line-height: 150%;\r\n}\r\n.tabs_top-tab {\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    padding: 15px 25px;\r\n    &.active {\r\n        background: #fff;\r\n    }\r\n}\r\n.tab_text {\r\n    color: #8b919e;\r\n    font-family: Montserrat;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 150%; /* 18px */\r\n    margin-left: 8px;\r\n}\r\n.tabs_descr {\r\n    color: #454b58;\r\n    font-family: Montserrat;\r\n    font-size: 13px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 25px; /* 192.308% */\r\n    padding: 25px 25px;\r\n    display: none;\r\n    &.active {\r\n        display: block;\r\n    }\r\n}\r\n\r\n.article__tabs_2 {\r\n    height: auto;\r\n    box-shadow: none;\r\n    margin-top: 60px;\r\n    .tabs_top {\r\n        background: none;\r\n        margin-bottom: 17px;\r\n    }\r\n    .tabs_descr {\r\n        padding: 0;\r\n        color: #292c32;\r\n        font-size: 15px;\r\n        font-weight: 400;\r\n        line-height: 30px; /* 200% */\r\n    }\r\n    .tabs_top-tab {\r\n        padding: 0;\r\n        .tab_text {\r\n            margin-left: 0;\r\n            margin-right: 25px;\r\n            font-size: 15px;\r\n            font-weight: 600;\r\n            line-height: 150%; /* 22.5px */\r\n        }\r\n        &.active {\r\n            background: none;\r\n            padding: 0;\r\n            .tab_text {\r\n                color: #f04973;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.article__ul-wr {\r\n}\r\n.article__ul {\r\n}\r\n.article__li {\r\n    color: #292c32;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    line-height: 200%; /*  */\r\n}\r\n.article__ol {\r\n    // position: relative;\r\n    margin-left: 32px;\r\n\r\n    .article__li {\r\n        position: relative;\r\n    }\r\n    .article__li::after {\r\n        display: flex;\r\n        align-items: center;\r\n        position: absolute;\r\n        content: '';\r\n        left: -10px;\r\n        width: 7px;\r\n        top: 46%;\r\n        border-radius: 50%;\r\n        height: 7px;\r\n        border: 1px solid #292c32;\r\n        background-color: transparent;\r\n    }\r\n}\r\n\r\n.article__bottom-text-wr {\r\n    margin-top: 45px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    color: #292c32;\r\n    font-size: 15px;\r\n    font-weight: 400;\r\n    line-height: 200%; /*  */\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/components/pages/Article/Article.scss":
/*!***************************************************!*\
  !*** ./src/components/pages/Article/Article.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Article_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Article.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Article/Article.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Article_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Article_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Article_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Article_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/icons/important.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/important.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/icons/8fc2830555c7b01974ea.svg";

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

/***/ "./src/assets/images/article/pic.png":
/*!*******************************************!*\
  !*** ./src/assets/images/article/pic.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/pica350b2698bb1b208c360.png";

/***/ }),

/***/ "./src/assets/images/article/pic.png?as=webp":
/*!***************************************************!*\
  !*** ./src/assets/images/article/pic.png?as=webp ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/picc78394c6cc6c63338250.webp";

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
//# sourceMappingURL=src_components_pages_Article_Article_jsx.app.c4ddeececff1f3d3a66a.js.map