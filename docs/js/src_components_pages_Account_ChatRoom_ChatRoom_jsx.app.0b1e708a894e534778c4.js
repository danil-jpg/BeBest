"use strict";
(self["webpackChunkBeBest"] = self["webpackChunkBeBest"] || []).push([["src_components_pages_Account_ChatRoom_ChatRoom_jsx"],{

/***/ "./src/components/pages/Account/ChatRoom/ChatRoom.jsx":
/*!************************************************************!*\
  !*** ./src/components/pages/Account/ChatRoom/ChatRoom.jsx ***!
  \************************************************************/
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
/* harmony import */ var _ChatRoom_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatRoom.scss */ "./src/components/pages/Account/ChatRoom/ChatRoom.scss");
/* harmony import */ var _GroupChat_GroupChat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GroupChat/GroupChat */ "./src/components/pages/Account/ChatRoom/GroupChat/GroupChat.jsx");
/* harmony import */ var _utils_isActive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/isActive */ "./src/utils/isActive.js");
/* harmony import */ var _MessagesChat_MessagesChat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MessagesChat/MessagesChat */ "./src/components/pages/Account/ChatRoom/MessagesChat/MessagesChat.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");















var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_9__["default"].connect('http://localhost:5000');
var ChatRoom = function ChatRoom(_ref) {
  var user = _ref.user;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    currentMessages = _useState2[0],
    setCurrentMessages = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    currentGroupID = _useState4[0],
    setCurrentGroupID = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
    _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    searchValue = _useState8[0],
    setSearchValue = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
    _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
    titleChat = _useState10[0],
    setTitleChat = _useState10[1];
  var id = sessionStorage.getItem('id');
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    socket.on('response', /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              setCurrentMessages((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  }, [currentMessages]);
  var sendMessageHandler = /*#__PURE__*/function () {
    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
      var obj, post, res, listGroup;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            obj = {
              message: message,
              author: user.id,
              group: currentGroupID
            };
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_11__["default"].post('http://bebest.pp.ua/api/chat-messages', {
              data: obj
            });
          case 3:
            post = _context2.sent;
            _context2.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_11__["default"].get("http://bebest.pp.ua/api/users/".concat(id, "?populate[chat_groups][populate][0]=users&populate[avatar][populate][1]=avatar&populate[chat_mess][populate][2]=author&populate[chat_groups][populate][3]=users.avatar&populate[chat_groups][populate][4]=messages&populate[chat_groups][populate][5]=messages.author&populate[chat_groups][populate][6]=messages.author.avatar"));
          case 6:
            res = _context2.sent;
            listGroup = res.data.chat_groups.filter(function (el) {
              return el.id === currentGroupID;
            });
            socket.emit('message', listGroup[0].messages);
            setMessage('');
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function sendMessageHandler() {
      return _ref3.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    className: "chat",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "chat__row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "chat__nav",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "chat__search",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
            type: "text",
            className: "chat__search-inp",
            value: searchValue,
            onChange: function onChange(e) {
              return setSearchValue(e.target.value);
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("ul", {
          className: "chat__group",
          children: user.chat_groups.map(function (el, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GroupChat_GroupChat__WEBPACK_IMPORTED_MODULE_6__.GroupChat, {
              currentMessages: currentMessages,
              setCurrentMessages: setCurrentMessages,
              setCurrentGroupID: setCurrentGroupID,
              elem: el,
              imageSrc: (0,_utils_isActive__WEBPACK_IMPORTED_MODULE_7__.getImage)((0,_utils_isActive__WEBPACK_IMPORTED_MODULE_7__.getUser)(el, user).avatar.url),
              name: (0,_utils_isActive__WEBPACK_IMPORTED_MODULE_7__.getUser)(el, user).username,
              setTitleChat: setTitleChat
            }, index);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "chat__body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_MessagesChat_MessagesChat__WEBPACK_IMPORTED_MODULE_8__.MessagesChat, {
          currentMessages: currentMessages,
          setCurrentMessages: setCurrentMessages,
          user: user,
          titleChat: titleChat
        }), currentGroupID ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "chat__bottom",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
            type: "text",
            className: "chat__mess-inp",
            value: message,
            onChange: function onChange(e) {
              return setMessage(e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
            className: "chat__send-btn",
            onClick: sendMessageHandler,
            children: "Send"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {})]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatRoom);

/***/ }),

/***/ "./src/components/pages/Account/ChatRoom/GroupChat/GroupChat.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/pages/Account/ChatRoom/GroupChat/GroupChat.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupChat: () => (/* binding */ GroupChat)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ChatRoom_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ChatRoom.scss */ "./src/components/pages/Account/ChatRoom/ChatRoom.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var GroupChat = function GroupChat(_ref) {
  var elem = _ref.elem,
    imageSrc = _ref.imageSrc,
    name = _ref.name,
    currentMessages = _ref.currentMessages,
    setCurrentMessages = _ref.setCurrentMessages,
    setCurrentGroupID = _ref.setCurrentGroupID,
    setTitleChat = _ref.setTitleChat;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('Нет сообщений'),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    lastMess = _useState2[0],
    setLastMess = _useState2[1];
  var handleClick = function handleClick() {
    setCurrentMessages((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(elem.messages));
    setCurrentGroupID(elem.id);
    setTitleChat(name);
  };
  var getFirstEl = function getFirstEl(el) {
    return el[0];
  };
  var getLastMess = function getLastMess(elem, current) {
    var elemAuthor = getFirstEl(elem).author.username;
    var elemMess = getFirstEl(elem).message;
    var elemID = getFirstEl(elem).id;
    var currentAuthor = getFirstEl(current).author.username;
    var currentMess = getFirstEl(current).message;
    var currentID = getFirstEl(current).id;
    var isTrue = elemAuthor === currentAuthor && elemID === currentID && currentMess === elemMess;
    if (isTrue) {
      setLastMess(current[current.length - 1].message);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (elem.messages.length && currentMessages && currentMessages.length) {
      getLastMess(elem.messages, currentMessages);
    }
    if (elem.messages.length && !currentMessages) {
      setLastMess(elem.messages[elem.messages.length - 1].message);
    }
  }, [currentMessages]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
    className: "group-item",
    onClick: handleClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "group-item__image-wrap",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        className: "group-item__image",
        src: imageSrc,
        alt: "image"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "group-item__body",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "group-item__name",
        children: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "group-item__text",
        children: lastMess
      })]
    })]
  });
};

/***/ }),

/***/ "./src/components/pages/Account/ChatRoom/MessagesChat/MessagesChat.jsx":
/*!*****************************************************************************!*\
  !*** ./src/components/pages/Account/ChatRoom/MessagesChat/MessagesChat.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesChat: () => (/* binding */ MessagesChat)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatRoom_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ChatRoom.scss */ "./src/components/pages/Account/ChatRoom/ChatRoom.scss");
/* harmony import */ var _utils_isActive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/isActive */ "./src/utils/isActive.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var MessagesChat = function MessagesChat(_ref) {
  var user = _ref.user,
    currentMessages = _ref.currentMessages,
    titleChat = _ref.titleChat;
  var listRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var isAuthor = function isAuthor(el) {
    return user.username !== el.author.username ? 'reverse' : '';
  };
  var scrollBottom = function scrollBottom() {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    scrollBottom();
  }, [currentMessages]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
      className: "chat__title",
      children: titleChat
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "chat__messages-wrap",
      ref: listRef,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
        className: "chat__message-list",
        children: [currentMessages === null || currentMessages === void 0 ? void 0 : currentMessages.map(function (el, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
            className: "mess-chat ".concat(isAuthor(el)),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "mess-chat__text",
              children: el.message
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mess-chat__image-wrap",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                className: "mess-chat__image",
                src: (0,_utils_isActive__WEBPACK_IMPORTED_MODULE_2__.getImage)(el.author.avatar.url),
                alt: "image"
              })
            })]
          }, index);
        }), !(currentMessages !== null && currentMessages !== void 0 && currentMessages.length) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("li", {
          children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0438\u0430\u043B\u043E\u0433 \u0438\u043B\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
        }) : '']
      })
    })]
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Account/ChatRoom/ChatRoom.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Account/ChatRoom/ChatRoom.scss ***!
  \************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.chat {
  border: 1px solid #dce3e8;
  background: #fff;
}
.chat__row {
  display: grid;
  grid-template-columns: 313px 1fr;
  grid-template-rows: 500px;
}
.chat__nav {
  border-right: 1px solid #dce3e8;
}
.chat__search, .chat__title {
  border-bottom: 1px solid #dce3e8;
  height: 58px;
  display: flex;
  align-items: center;
}
.chat__search {
  padding: 5px 15px;
}
.chat__search-inp {
  border-radius: 20px;
  background: #f2f5fa;
  display: block;
  width: 100%;
  height: 35px;
  padding: 0 10px;
}
.chat__title {
  color: #292c32;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.33;
  padding: 10px 19px;
  flex: 0 0 auto;
}
.chat__body {
  position: relative;
  display: flex;
  flex-direction: column;
}
.chat__messages-wrap {
  flex: 1 1 auto;
  padding: 26px 20px 30px;
  margin: 0 0 50px;
  overflow: auto;
}
.chat__messages-wrap::-webkit-scrollbar {
  width: 5px;
}
.chat__messages-wrap::-webkit-scrollbar-track {
  background: #fff;
}
.chat__messages-wrap::-webkit-scrollbar-thumb {
  background: #f04973;
  border-radius: 5px;
  border: 1px solid #fff;
}
.chat__bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #dce3e8;
  display: flex;
}
.chat__mess-inp {
  display: block;
  width: 100%;
  height: 50px;
  font-size: 13px;
  line-height: 1.8;
  font-weight: 500;
  padding: 0 30px;
}
.chat__send-btn {
  background: #f04973;
  flex: 0 0 50px;
  height: 50px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}

.group-item {
  display: flex;
  align-items: center;
  padding: 13px 15px;
  border-bottom: 1px solid #dce3e8;
  cursor: pointer;
}
.group-item:hover {
  background: rgba(220, 227, 232, 0.1);
}
.group-item__image-wrap {
  flex: 0 0 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px;
}
.group-item__image {
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
  height: 100%;
}
.group-item__name {
  color: #292c32;
  font-size: 12px;
  font-weight: 700;
  line-height: 19px;
}
.group-item__text {
  font-size: 11px;
  font-weight: 500;
  width: 195px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.mess-chat {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin: 0 0 20px;
}
.mess-chat:last-child {
  margin: 0;
}
.mess-chat.reverse {
  flex-direction: row-reverse;
}
.mess-chat.reverse .mess-chat__text {
  border-radius: 0 15px 15px 15px;
  background: #F2F5FA;
}
.mess-chat__text {
  border-radius: 15px 0 15px 15px;
  background: #fde4ea;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  padding: 18px 20px;
}
.mess-chat__image-wrap {
  flex: 0 0 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.mess-chat__image {
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}`, "",{"version":3,"sources":["webpack://./src/components/pages/Account/ChatRoom/ChatRoom.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;EACA,gBAAA;AACJ;AAAI;EACI,aAAA;EACA,gCAAA;EACA,yBAAA;AAER;AAAI;EACI,+BAAA;AAER;AAAI;EAEI,gCAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;AACR;AACI;EACI,iBAAA;AACR;AACI;EACI,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;AACR;AACI;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACR;AACI;EACI,kBAAA;EACA,aAAA;EACA,sBAAA;AACR;AACI;EACI,cAAA;EACA,uBAAA;EACA,gBAAA;EACA,cAAA;AACR;AAAQ;EACI,UAAA;AAEZ;AAAQ;EACI,gBAAA;AAEZ;AAAQ;EACI,mBAAA;EACA,kBAAA;EACA,sBAAA;AAEZ;AACI;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,WAAA;EACA,6BAAA;EACA,aAAA;AACR;AACI;EACI,cAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;AACR;AACI;EACI,mBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;AACR;;AAGA;EACI,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,gCAAA;EACA,eAAA;AAAJ;AACI;EACI,oCAAA;AACR;AACI;EACI,cAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;AACR;AACI;EACI,oBAAA;KAAA,iBAAA;EACA,WAAA;EACA,YAAA;AACR;AACI;EACI,cAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;AACR;AACI;EACI,eAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AACR;;AAGA;EACI,aAAA;EACA,yBAAA;EACA,SAAA;EACA,gBAAA;AAAJ;AACI;EACI,SAAA;AACR;AACI;EACI,2BAAA;AACR;AAAQ;EACI,+BAAA;EACA,mBAAA;AAEZ;AACI;EACI,+BAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AACR;AACI;EACI,cAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;AACR;AACI;EACI,oBAAA;KAAA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AACR","sourcesContent":[".chat {\r\n    border: 1px solid #dce3e8;\r\n    background: #fff;\r\n    &__row {\r\n        display: grid;\r\n        grid-template-columns: 313px 1fr;\r\n        grid-template-rows: 500px;\r\n    }\r\n    &__nav {\r\n        border-right: 1px solid #dce3e8;\r\n    }\r\n    &__search,\r\n    &__title {\r\n        border-bottom: 1px solid #dce3e8;\r\n        height: 58px;\r\n        display: flex;\r\n        align-items: center;\r\n    }\r\n    &__search {\r\n        padding: 5px 15px;\r\n    }\r\n    &__search-inp {\r\n        border-radius: 20px;\r\n        background: #f2f5fa;\r\n        display: block;\r\n        width: 100%;\r\n        height: 35px;\r\n        padding: 0 10px;\r\n    }\r\n    &__title {\r\n        color: #292c32;\r\n        font-size: 15px;\r\n        font-weight: 700;\r\n        line-height: 1.33;\r\n        padding: 10px 19px;\r\n        flex: 0 0 auto;\r\n    }\r\n    &__body {\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    &__messages-wrap {\r\n        flex: 1 1 auto;\r\n        padding: 26px 20px 30px;\r\n        margin: 0 0 50px;\r\n        overflow: auto;\r\n        &::-webkit-scrollbar {\r\n            width: 5px;\r\n        }\r\n        &::-webkit-scrollbar-track {\r\n            background: #fff;\r\n        }\r\n        &::-webkit-scrollbar-thumb {\r\n            background: #f04973;\r\n            border-radius: 5px;\r\n            border: 1px solid #fff;\r\n        }\r\n    }\r\n    &__bottom {\r\n        position: absolute;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        border-top: 1px solid #dce3e8;\r\n        display: flex;\r\n    }\r\n    &__mess-inp {\r\n        display: block;\r\n        width: 100%;\r\n        height: 50px;\r\n        font-size: 13px;\r\n        line-height: 1.8;\r\n        font-weight: 500;\r\n        padding: 0 30px;\r\n    }\r\n    &__send-btn {\r\n        background: #f04973;\r\n        flex: 0 0 50px;\r\n        height: 50px;\r\n        color: #fff;\r\n        font-size: 12px;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n.group-item {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 13px 15px;\r\n    border-bottom: 1px solid #dce3e8;\r\n    cursor: pointer;\r\n    &:hover {\r\n        background: rgba(220, 227, 232, 0.1);\r\n    }\r\n    &__image-wrap {\r\n        flex: 0 0 32px;\r\n        height: 32px;\r\n        border-radius: 50%;\r\n        overflow: hidden;\r\n        margin: 10px;\r\n    }\r\n    &__image {\r\n        object-fit: cover;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    &__name {\r\n        color: #292c32;\r\n        font-size: 12px;\r\n        font-weight: 700;\r\n        line-height: 19px;\r\n    }\r\n    &__text {\r\n        font-size: 11px;\r\n        font-weight: 500;\r\n        width: 195px;\r\n        white-space: nowrap;\r\n        text-overflow: ellipsis;\r\n        overflow: hidden;\r\n    }\r\n}\r\n\r\n.mess-chat {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 10px;\r\n    margin: 0 0 20px;\r\n    &:last-child {\r\n        margin: 0;\r\n    }\r\n    &.reverse {\r\n        flex-direction: row-reverse;\r\n        & .mess-chat__text {\r\n            border-radius:0 15px 15px 15px;\r\n            background: #F2F5FA;\r\n        }\r\n    }\r\n    &__text {\r\n        border-radius: 15px 0 15px 15px;\r\n        background: #fde4ea;\r\n        font-size: 13px;\r\n        font-weight: 500;\r\n        line-height: 20px;\r\n        padding: 18px 20px;\r\n    }\r\n    &__image-wrap {\r\n        flex: 0 0 50px;\r\n        height: 50px;\r\n        border-radius: 50%;\r\n        overflow: hidden;\r\n    }\r\n    &__image {\r\n        object-fit: cover;\r\n        width: 100%;\r\n        height: 100%;\r\n        aspect-ratio: 1/1;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/pages/Account/ChatRoom/ChatRoom.scss":
/*!*************************************************************!*\
  !*** ./src/components/pages/Account/ChatRoom/ChatRoom.scss ***!
  \*************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ChatRoom_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./ChatRoom.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/pages/Account/ChatRoom/ChatRoom.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ChatRoom_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ChatRoom_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ChatRoom_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ChatRoom_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_pages_Account_ChatRoom_ChatRoom_jsx.app.0b1e708a894e534778c4.js.map