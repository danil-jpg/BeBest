"use strict";
(self["webpackChunkBeBest"] = self["webpackChunkBeBest"] || []).push([["src_components_diagrams_Diagram_jsx"],{

/***/ "./src/components/diagrams/Diagram.jsx":
/*!*********************************************!*\
  !*** ./src/components/diagrams/Diagram.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Diagram_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Diagram.scss */ "./src/components/diagrams/Diagram.scss");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactflow */ "./node_modules/@reactflow/core/dist/esm/index.js");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactflow */ "./node_modules/@reactflow/controls/dist/esm/index.js");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactflow */ "./node_modules/@reactflow/minimap/dist/esm/index.js");
/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactflow */ "./node_modules/@reactflow/background/dist/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





// import 'reactflow/dist/style.css';


var nodeColor = function nodeColor(node) {
  switch (node.type) {
    case 'input':
      return '#F04973';
    case 'secondary':
      return '#2596FF';
    case 'page':
      return '#E1DAFF';
    default:
      return '#FFDEE4';
  }
};
var initialNodes = [{
  id: '1',
  type: 'input',
  data: {
    label: 'component App'
  },
  position: {
    x: 250,
    y: 25
  },
  style: {
    background: 'linear-gradient(90deg, #f04973 0%, #fa6655 100%) border-box',
    width: 500,
    fontSize: 24,
    color: 'white'
  }
}, {
  id: '2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "Header"
    })
  },
  type: 'secondary',
  position: {
    x: 100,
    y: 125
  },
  style: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    width: 200,
    fontSize: 15,
    background: 'linear-gradient(90deg, #00d2ff 0%, #2596ff 100%)'
  }, "fontSize", 20)
}, {
  id: '3',
  type: 'secondary',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Main"
    })
  },
  position: {
    x: 400,
    y: 125
  },
  style: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    width: 200,
    fontSize: 15,
    background: 'linear-gradient(90deg, #00d2ff 0%, #2596ff 100%)'
  }, "fontSize", 20)
}, {
  id: '4',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Footer"
    })
  },
  type: 'secondary',
  position: {
    x: 700,
    y: 125
  },
  style: (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
    width: 200,
    fontSize: 15,
    background: 'linear-gradient(90deg, #00d2ff 0%, #2596ff 100%)'
  }, "fontSize", 20)
}, {
  id: '5',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Home page"
    })
  },
  type: 'page',
  position: {
    x: -900,
    y: 250
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '5-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Hero Block"
    })
  },
  position: {
    x: -1050,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '5-1-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Hero Block Info"
    })
  },
  position: {
    x: -1150,
    y: 450
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '5-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Home Reviews"
    })
  },
  position: {
    x: -850,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '5-2-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Reviews Card"
    })
  },
  position: {
    x: -900,
    y: 500
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '5-2-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Reviews Slider"
    })
  },
  position: {
    x: -760,
    y: 500
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '5-3',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Advantages"
    })
  },
  position: {
    x: -650,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '5-3-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Advantages Card"
    })
  },
  position: {
    x: -600,
    y: 450
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '5-4',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Home Teachers"
    })
  },
  position: {
    x: -950,
    y: 390
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '5-4-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teachers Card"
    })
  },
  position: {
    x: -1050,
    y: 500
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '5-5',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Popular Course"
    })
  },
  position: {
    x: -750,
    y: 390
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '5-5-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Course Card"
    })
  },
  position: {
    x: -650,
    y: 500
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '5-6',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " How Working"
    })
  },
  position: {
    x: -500,
    y: 390
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '5-6-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Working Card"
    })
  },
  position: {
    x: -450,
    y: 480
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '6',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Catalog page"
    })
  },
  type: 'page',
  position: {
    x: -300,
    y: 250
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '6-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Catalog Articles"
    })
  },
  position: {
    x: -300,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '6-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "Filter Catalog "
    })
  },
  position: {
    x: -100,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '6-3',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " User List Catalog "
    })
  },
  position: {
    x: -200,
    y: 400
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '7',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teacher page"
    })
  },
  type: 'page',
  position: {
    x: 200,
    y: 600
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '7-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teacher Calendar"
    })
  },
  position: {
    x: 200,
    y: 750
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '7-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teacher Comment"
    })
  },
  position: {
    x: 400,
    y: 750
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '7-3',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teacher Cv"
    })
  },
  position: {
    x: 300,
    y: 700
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '7-4',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teacher Greet"
    })
  },
  position: {
    x: 100,
    y: 700
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '7-5',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teacher Lesson"
    })
  },
  position: {
    x: 0,
    y: 750
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '7-6',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teacher Marks"
    })
  },
  position: {
    x: 200,
    y: 750
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '7-7',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teacher Posibility"
    })
  },
  position: {
    x: 400,
    y: 750
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '7-8',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Teacher Quotes"
    })
  },
  position: {
    x: 300,
    y: 700
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '8',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Article page"
    })
  },
  type: 'page',
  position: {
    x: 400,
    y: 600
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: "9",
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Registration page"
    })
  },
  type: 'page',
  position: {
    x: 900,
    y: 250
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '9-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Authorize"
    })
  },
  position: {
    x: 900,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '9-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Registration"
    })
  },
  position: {
    x: 1100,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '9-3',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Registration Comp"
    })
  },
  position: {
    x: 1000,
    y: 400
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '9-4',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Registration Student"
    })
  },
  position: {
    x: 1200,
    y: 400
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '9-5',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Registration Succ"
    })
  },
  position: {
    x: 800,
    y: 400
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '9-6',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Registration Teacher"
    })
  },
  position: {
    x: 700,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Account"
    })
  },
  type: 'page',
  position: {
    x: 1400,
    y: 250
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '10-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Account 404"
    })
  },
  position: {
    x: 1400,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Chat Room"
    })
  },
  position: {
    x: 1600,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-3',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Company Team"
    })
  },
  position: {
    x: 1500,
    y: 400
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-4',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Favorite"
    })
  },
  position: {
    x: 1700,
    y: 400
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-5',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  My Lesson"
    })
  },
  position: {
    x: 1600,
    y: 450
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-6',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Not Auth"
    })
  },
  position: {
    x: 1400,
    y: 450
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-7',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Payment"
    })
  },
  position: {
    x: 1500,
    y: 500
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-8',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Profile"
    })
  },
  position: {
    x: 1700,
    y: 500
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-9',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Services"
    })
  },
  position: {
    x: 1600,
    y: 550
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-10',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Statistics"
    })
  },
  position: {
    x: 2000,
    y: 350
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-10-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Company View"
    })
  },
  position: {
    x: 2200,
    y: 450
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '10-10-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Student View"
    })
  },
  position: {
    x: 2150,
    y: 500
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '10-10-3',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Teacher View"
    })
  },
  position: {
    x: 2200,
    y: 400
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '10-11',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Person Data"
    })
  },
  position: {
    x: 1800,
    y: 450
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '10-11-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Company View"
    })
  },
  position: {
    x: 1950,
    y: 550
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '10-11-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Student View"
    })
  },
  position: {
    x: 1900,
    y: 600
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '10-11-3',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Teacher View"
    })
  },
  position: {
    x: 2000,
    y: 500
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '11',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  404"
    })
  },
  type: 'page',
  position: {
    x: 2000,
    y: 250
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '12',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Forum"
    })
  },
  type: 'page',
  position: {
    x: 660,
    y: 600
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '12-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Item Forum "
    })
  },
  position: {
    x: 660,
    y: 700
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '12-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Item Mess Forum "
    })
  },
  position: {
    x: 860,
    y: 700
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '12-3',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " List Forum "
    })
  },
  position: {
    x: 750,
    y: 750
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '12-4',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " View Forum "
    })
  },
  position: {
    x: 950,
    y: 750
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '13',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Online Lesson"
    })
  },
  type: 'page',
  position: {
    x: -900,
    y: 800
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '13-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Online Lesson Meet"
    })
  },
  position: {
    x: -900,
    y: 900
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '14',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Lesson"
    })
  },
  type: 'page',
  position: {
    x: -600,
    y: 800
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '14-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Lesson Form"
    })
  },
  position: {
    x: -600,
    y: 900
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '14-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Lesson Display"
    })
  },
  position: {
    x: -400,
    y: 900
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '14-3',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Lesson Input"
    })
  },
  position: {
    x: -500,
    y: 950
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '14-4',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Lesson Dropdown"
    })
  },
  position: {
    x: -300,
    y: 950
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '14-5',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Lesson Date"
    })
  },
  position: {
    x: -400,
    y: 1000
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '14-6',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Lesson Group"
    })
  },
  position: {
    x: -200,
    y: 1000
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '14-6-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Group Modal"
    })
  },
  position: {
    x: -100,
    y: 1100
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '14-6-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Group Tag"
    })
  },
  position: {
    x: 100,
    y: 1100
  },
  style: {
    background: '#D0EEFB',
    width: 100,
    fontSize: 9
  }
}, {
  id: '15',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Groupe Lesson"
    })
  },
  type: 'page',
  position: {
    x: -200,
    y: 800
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '15-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Lesson Modal"
    })
  },
  position: {
    x: -100,
    y: 900
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '15-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: " Lesson Tag"
    })
  },
  position: {
    x: 100,
    y: 900
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '16',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "  Chat"
    })
  },
  type: 'page',
  position: {
    x: 550,
    y: 850
  },
  style: {
    width: 150,
    background: '#E1DAFF'
  }
}, {
  id: '16-1',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "Group  Chat"
    })
  },
  position: {
    x: 550,
    y: 950
  },
  style: {
    background: '#FFDEE4'
  }
}, {
  id: '16-2',
  data: {
    label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: "Messeges Chat"
    })
  },
  position: {
    x: 750,
    y: 950
  },
  style: {
    background: '#FFDEE4'
  }
}];
var initialEdges = [{
  id: 'e1-2',
  source: '1',
  target: '2'
}, {
  id: 'e1-3',
  source: '1',
  target: '3'
}, {
  id: 'e1-4',
  source: '1',
  target: '4'
}, {
  id: 'e4-3',
  source: '3',
  target: '5',
  label: 'page'
}, {
  id: 'e5-6',
  source: '5',
  target: '5-1',
  animated: true,
  label: 'component'
}, {
  id: 'e5-7',
  source: '5',
  target: '5-2',
  animated: true,
  label: 'component'
}, {
  id: 'e5-8',
  source: '5',
  target: '5-3',
  animated: true,
  label: 'component'
}, {
  id: 'e5-9',
  source: '5',
  target: '5-4',
  animated: true,
  label: 'component'
}, {
  id: 'e5-10',
  source: '5',
  target: '5-5',
  animated: true,
  label: 'component'
}, {
  id: 'e5-11',
  source: '5',
  target: '5-6',
  animated: true,
  label: 'component'
}, {
  source: '3',
  target: '6',
  label: 'page'
}, {
  source: '6',
  target: '6-1',
  label: 'component',
  animated: true
}, {
  source: '6',
  target: '6-2',
  label: 'component',
  animated: true
}, {
  source: '6',
  target: '6-3',
  label: 'component',
  animated: true
}, {
  source: '3',
  target: '7',
  label: 'page'
}, {
  source: '7',
  target: '7-1',
  label: 'component',
  animated: true
}, {
  source: '7',
  target: '7-2',
  label: 'component',
  animated: true
}, {
  source: '7',
  target: '7-3',
  label: 'component',
  animated: true
}, {
  source: '7',
  target: '7-4',
  label: 'component',
  animated: true
}, {
  source: '7',
  target: '7-5',
  label: 'component',
  animated: true
}, {
  source: '7',
  target: '7-6',
  label: 'component',
  animated: true
}, {
  source: '7',
  target: '7-7',
  label: 'component',
  animated: true
}, {
  source: '7',
  target: '7-8',
  label: 'component',
  animated: true
}, {
  source: '3',
  target: '8',
  label: 'page'
}, {
  source: '3',
  target: '9',
  label: 'page'
}, {
  source: '9',
  target: '9-1',
  label: 'component',
  animated: true
}, {
  source: '9',
  target: '9-2',
  label: 'component',
  animated: true
}, {
  source: '9',
  target: '9-3',
  label: 'component',
  animated: true
}, {
  source: '9',
  target: '9-4',
  label: 'component',
  animated: true
}, {
  source: '9',
  target: '9-5',
  label: 'component',
  animated: true
}, {
  source: '9',
  target: '9-6',
  label: 'component',
  animated: true
}, {
  source: '3',
  target: '10',
  label: 'page'
}, {
  source: '10',
  target: '10-1',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-2',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-3',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-4',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-5',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-6',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-7',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-8',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-9',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-10',
  label: 'component',
  animated: true
}, {
  source: '10',
  target: '10-11',
  label: 'component',
  animated: true
}, {
  source: '3',
  target: '11',
  label: 'page'
}, {
  source: '3',
  target: '12',
  label: 'page'
}, {
  source: '12',
  target: '12-1',
  label: 'component',
  animated: true
}, {
  source: '12',
  target: '12-2',
  label: 'component',
  animated: true
}, {
  source: '12',
  target: '12-3',
  label: 'component',
  animated: true
}, {
  source: '12',
  target: '12-4',
  label: 'component',
  animated: true
}, {
  source: '3',
  target: '13',
  label: 'page'
}, {
  source: '13',
  target: '13-1',
  label: 'component',
  animated: true
}, {
  source: '3',
  target: '14',
  label: 'page'
}, {
  source: '14',
  target: '14-1',
  label: 'component',
  animated: true
}, {
  source: '14',
  target: '14-2',
  label: 'component',
  animated: true
}, {
  source: '14',
  target: '14-3',
  label: 'component',
  animated: true
}, {
  source: '14',
  target: '14-4',
  label: 'component',
  animated: true
}, {
  source: '14',
  target: '14-5',
  label: 'component',
  animated: true
}, {
  source: '3',
  target: '15',
  label: 'page'
}, {
  source: '15',
  target: '15-1',
  label: 'component',
  animated: true
}, {
  source: '15',
  target: '15-2',
  label: 'component',
  animated: true
}, {
  source: '3',
  target: '16',
  label: 'page'
}, {
  source: '16',
  target: '16-1',
  label: 'component',
  animated: true
}, {
  source: '16',
  target: '16-2',
  label: 'component',
  animated: true
}, {
  source: '5-1',
  target: '5-1-1',
  label: 'component',
  animated: true
}, {
  source: '5-2',
  target: '5-2-1',
  label: 'component',
  animated: true
}, {
  source: '5-2',
  target: '5-2-2',
  label: 'component',
  animated: true
}, {
  source: '5-4',
  target: '5-4-1',
  label: 'component',
  animated: true
}, {
  source: '5-6',
  target: '5-6-1',
  label: 'component',
  animated: true
}, {
  source: '5-5',
  target: '5-5-1',
  label: 'component',
  animated: true
}, {
  source: '5-3',
  target: '5-3-1',
  label: 'component',
  animated: true
}, {
  source: '10-11',
  target: '10-11-1',
  label: 'component',
  animated: true
}, {
  source: '10-11',
  target: '10-11-2',
  label: 'component',
  animated: true
}, {
  source: '10-11',
  target: '10-11-3',
  label: 'component',
  animated: true
}, {
  source: '10-10',
  target: '10-10-1',
  label: 'component',
  animated: true
}, {
  source: '10-10',
  target: '10-10-2',
  label: 'component',
  animated: true
}, {
  source: '10-10',
  target: '10-10-3',
  label: 'component',
  animated: true
}, {
  source: '14',
  target: '14-6',
  label: 'component',
  animated: true
}, {
  source: '14-6',
  target: '14-6-1',
  label: 'component',
  animated: true
}, {
  source: '14-6',
  target: '14-6-2',
  label: 'component',
  animated: true
}];
var Diagram = function Diagram() {
  var _useNodesState = (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.useNodesState)(initialNodes),
    _useNodesState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useNodesState, 3),
    nodes = _useNodesState2[0],
    setNodes = _useNodesState2[1],
    onNodesChange = _useNodesState2[2];
  var _useEdgesState = (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.useEdgesState)(initialEdges),
    _useEdgesState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useEdgesState, 3),
    edges = _useEdgesState2[0],
    setEdges = _useEdgesState2[1],
    onEdgesChange = _useEdgesState2[2];
  var onConnect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function (params) {
    return setEdges(function (eds) {
      return (0,reactflow__WEBPACK_IMPORTED_MODULE_5__.addEdge)(params, eds);
    });
  }, [setEdges]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "diagrams",
    style: {
      width: '100vw',
      height: '100vh'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(reactflow__WEBPACK_IMPORTED_MODULE_5__.ReactFlow, {
      nodes: nodes,
      edges: edges,
      onNodesChange: onNodesChange,
      onEdgesChange: onEdgesChange,
      onConnect: onConnect,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactflow__WEBPACK_IMPORTED_MODULE_6__.Controls, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactflow__WEBPACK_IMPORTED_MODULE_7__.MiniMap, {
        className: "mini-map",
        nodeColor: nodeColor
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(reactflow__WEBPACK_IMPORTED_MODULE_8__.Background, {
        variant: "dots",
        gap: 12,
        size: 1
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Diagram);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/diagrams/Diagram.scss":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/diagrams/Diagram.scss ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* this gets exported as style.css and can be used for the default theming */
/* these are the necessary styles for React Flow, they get used by base.css and style.css */
.react-flow__container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.react-flow__pane {
  z-index: 1;
  cursor: grab;
}

.react-flow__pane.selection {
  cursor: pointer;
}

.react-flow__pane.dragging {
  cursor: grabbing;
}

.react-flow__viewport {
  transform-origin: 0 0;
  z-index: 2;
  pointer-events: none;
}

.react-flow__renderer {
  z-index: 4;
}

.react-flow__selection {
  z-index: 6;
}

.react-flow__nodesselection-rect:focus,
.react-flow__nodesselection-rect:focus-visible {
  outline: none;
}

.react-flow .react-flow__edges {
  pointer-events: none;
  overflow: visible;
}

.react-flow__edge-path,
.react-flow__connection-path {
  stroke: #b1b1b7;
  stroke-width: 1;
  fill: none;
}

.react-flow__edge {
  pointer-events: visibleStroke;
  cursor: pointer;
}

.react-flow__edge.animated path {
  stroke-dasharray: 5;
  animation: dashdraw 0.5s linear infinite;
}

.react-flow__edge.animated path.react-flow__edge-interaction {
  stroke-dasharray: none;
  animation: none;
}

.react-flow__edge.inactive {
  pointer-events: none;
}

.react-flow__edge.selected,
.react-flow__edge:focus,
.react-flow__edge:focus-visible {
  outline: none;
}

.react-flow__edge.selected .react-flow__edge-path,
.react-flow__edge:focus .react-flow__edge-path,
.react-flow__edge:focus-visible .react-flow__edge-path {
  stroke: #555;
}

.react-flow__edge-textwrapper {
  pointer-events: all;
}

.react-flow__edge-textbg {
  fill: white;
}

.react-flow__edge .react-flow__edge-text {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.react-flow__connection {
  pointer-events: none;
}

.react-flow__connection .animated {
  stroke-dasharray: 5;
  animation: dashdraw 0.5s linear infinite;
}

.react-flow__connectionline {
  z-index: 1001;
}

.react-flow__nodes {
  pointer-events: none;
  transform-origin: 0 0;
}

.react-flow__node {
  position: absolute;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  pointer-events: all;
  transform-origin: 0 0;
  box-sizing: border-box;
  cursor: grab;
}

.react-flow__node.dragging {
  cursor: grabbing;
}

.react-flow__nodesselection {
  z-index: 3;
  transform-origin: left top;
  pointer-events: none;
}

.react-flow__nodesselection-rect {
  position: absolute;
  pointer-events: all;
  cursor: grab;
}

.react-flow__handle {
  position: absolute;
  pointer-events: none;
  min-width: 5px;
  min-height: 5px;
  width: 6px;
  height: 6px;
  background: #1a192b;
  border: 1px solid white;
  border-radius: 100%;
}

.react-flow__handle.connectionindicator {
  pointer-events: all;
  cursor: crosshair;
}

.react-flow__handle-bottom {
  top: auto;
  left: 50%;
  bottom: -4px;
  transform: translate(-50%, 0);
}

.react-flow__handle-top {
  left: 50%;
  top: -4px;
  transform: translate(-50%, 0);
}

.react-flow__handle-left {
  top: 50%;
  left: -4px;
  transform: translate(0, -50%);
}

.react-flow__handle-right {
  right: -4px;
  top: 50%;
  transform: translate(0, -50%);
}

.react-flow__edgeupdater {
  cursor: move;
  pointer-events: all;
}

.react-flow__panel {
  position: absolute;
  z-index: 5;
  margin: 15px;
}

.react-flow__panel.top {
  top: 0;
}

.react-flow__panel.bottom {
  bottom: 0;
}

.react-flow__panel.left {
  left: 0;
}

.react-flow__panel.right {
  right: 0;
}

.react-flow__panel.center {
  left: 50%;
  transform: translateX(-50%);
}

.react-flow__attribution {
  font-size: 10px;
  background: rgba(255, 255, 255, 0.5);
  padding: 2px 3px;
  margin: 0;
}

.react-flow__attribution a {
  text-decoration: none;
  color: #999;
}
@keyframes dashdraw {
  from {
    stroke-dashoffset: 10;
  }
}
.react-flow__edgelabel-renderer {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.react-flow__edge.updating .react-flow__edge-path {
  stroke: #777;
}

.react-flow__edge-text {
  font-size: 10px;
}

.react-flow__node.selectable:focus,
.react-flow__node.selectable:focus-visible {
  outline: none;
}

.react-flow__node-default,
.react-flow__node-input,
.react-flow__node-output,
.react-flow__node-group {
  padding: 10px;
  border-radius: 3px;
  width: 150px;
  font-size: 12px;
  color: #222;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: #1a192b;
  background-color: white;
}

.react-flow__node-default.selectable:hover, .react-flow__node-input.selectable:hover, .react-flow__node-output.selectable:hover, .react-flow__node-group.selectable:hover {
  box-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.08);
}

.react-flow__node-default.selectable.selected,
.react-flow__node-default.selectable:focus,
.react-flow__node-default.selectable:focus-visible,
.react-flow__node-input.selectable.selected,
.react-flow__node-input.selectable:focus,
.react-flow__node-input.selectable:focus-visible,
.react-flow__node-output.selectable.selected,
.react-flow__node-output.selectable:focus,
.react-flow__node-output.selectable:focus-visible,
.react-flow__node-group.selectable.selected,
.react-flow__node-group.selectable:focus,
.react-flow__node-group.selectable:focus-visible {
  box-shadow: 0 0 0 0.5px #1a192b;
}

.react-flow__node-group {
  background-color: rgba(240, 240, 240, 0.25);
}

.react-flow__nodesselection-rect,
.react-flow__selection {
  background: rgba(0, 89, 220, 0.08);
  border: 1px dotted rgba(0, 89, 220, 0.8);
}

.react-flow__nodesselection-rect:focus,
.react-flow__nodesselection-rect:focus-visible,
.react-flow__selection:focus,
.react-flow__selection:focus-visible {
  outline: none;
}

.react-flow__controls {
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);
}

.react-flow__controls-button {
  border: none;
  background: #fefefe;
  border-bottom: 1px solid #eee;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 5px;
}

.react-flow__controls-button:hover {
  background: #f4f4f4;
}

.react-flow__controls-button svg {
  width: 100%;
  max-width: 12px;
  max-height: 12px;
}

.react-flow__controls-button:disabled {
  pointer-events: none;
}

.react-flow__controls-button:disabled svg {
  fill-opacity: 0.4;
}

.react-flow__minimap {
  background-color: #fff;
}

.react-flow__resize-control {
  position: absolute;
}

.react-flow__resize-control.left,
.react-flow__resize-control.right {
  cursor: ew-resize;
}

.react-flow__resize-control.top,
.react-flow__resize-control.bottom {
  cursor: ns-resize;
}

.react-flow__resize-control.top.left,
.react-flow__resize-control.bottom.right {
  cursor: nwse-resize;
}

.react-flow__resize-control.bottom.left,
.react-flow__resize-control.top.right {
  cursor: nesw-resize;
}

/* handle styles */
.react-flow__resize-control.handle {
  width: 4px;
  height: 4px;
  border: 1px solid #fff;
  border-radius: 1px;
  background-color: #3367d9;
  transform: translate(-50%, -50%);
}

.react-flow__resize-control.handle.left {
  left: 0;
  top: 50%;
}

.react-flow__resize-control.handle.right {
  left: 100%;
  top: 50%;
}

.react-flow__resize-control.handle.top {
  left: 50%;
  top: 0;
}

.react-flow__resize-control.handle.bottom {
  left: 50%;
  top: 100%;
}

.react-flow__resize-control.handle.top.left {
  left: 0;
}

.react-flow__resize-control.handle.bottom.left {
  left: 0;
}

.react-flow__resize-control.handle.top.right {
  left: 100%;
}

.react-flow__resize-control.handle.bottom.right {
  left: 100%;
}

/* line styles */
.react-flow__resize-control.line {
  border-color: #3367d9;
  border-width: 0;
  border-style: solid;
}

.react-flow__resize-control.line.left,
.react-flow__resize-control.line.right {
  width: 1px;
  transform: translate(-50%, 0);
  top: 0;
  height: 100%;
}

.react-flow__resize-control.line.left {
  left: 0;
  border-left-width: 1px;
}

.react-flow__resize-control.line.right {
  left: 100%;
  border-right-width: 1px;
}

.react-flow__resize-control.line.top,
.react-flow__resize-control.line.bottom {
  height: 1px;
  transform: translate(0, -50%);
  left: 0;
  width: 100%;
}

.react-flow__resize-control.line.top {
  top: 0;
  border-top-width: 1px;
}

.react-flow__resize-control.line.bottom {
  border-bottom-width: 1px;
  top: 100%;
}`, "",{"version":3,"sources":["webpack://./src/components/diagrams/Diagram.scss"],"names":[],"mappings":"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","sourcesContent":["/* this gets exported as style.css and can be used for the default theming */\r\n/* these are the necessary styles for React Flow, they get used by base.css and style.css */\r\n.react-flow__container {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n  }\r\n  .react-flow__pane {\r\n\tz-index: 1;\r\n\tcursor: -webkit-grab;\r\n\tcursor: grab;\r\n  }\r\n  .react-flow__pane.selection {\r\n\t  cursor: pointer;\r\n\t}\r\n  .react-flow__pane.dragging {\r\n\t  cursor: -webkit-grabbing;\r\n\t  cursor: grabbing;\r\n\t}\r\n  .react-flow__viewport {\r\n\ttransform-origin: 0 0;\r\n\tz-index: 2;\r\n\tpointer-events: none;\r\n  }\r\n  .react-flow__renderer {\r\n\tz-index: 4;\r\n  }\r\n  .react-flow__selection {\r\n\tz-index: 6;\r\n  }\r\n  .react-flow__nodesselection-rect:focus,\r\n  .react-flow__nodesselection-rect:focus-visible {\r\n\toutline: none;\r\n  }\r\n  .react-flow .react-flow__edges {\r\n\tpointer-events: none;\r\n\toverflow: visible;\r\n  }\r\n  .react-flow__edge-path,\r\n  .react-flow__connection-path {\r\n\tstroke: #b1b1b7;\r\n\tstroke-width: 1;\r\n\tfill: none;\r\n  }\r\n  .react-flow__edge {\r\n\tpointer-events: visibleStroke;\r\n\tcursor: pointer;\r\n  }\r\n  .react-flow__edge.animated path {\r\n\t  stroke-dasharray: 5;\r\n\t  -webkit-animation: dashdraw 0.5s linear infinite;\r\n\t\t\t  animation: dashdraw 0.5s linear infinite;\r\n\t}\r\n  .react-flow__edge.animated path.react-flow__edge-interaction {\r\n\t  stroke-dasharray: none;\r\n\t  -webkit-animation: none;\r\n\t\t\t  animation: none;\r\n\t}\r\n  .react-flow__edge.inactive {\r\n\t  pointer-events: none;\r\n\t}\r\n  .react-flow__edge.selected,\r\n\t.react-flow__edge:focus,\r\n\t.react-flow__edge:focus-visible {\r\n\t  outline: none;\r\n\t}\r\n  .react-flow__edge.selected .react-flow__edge-path,\r\n\t.react-flow__edge:focus .react-flow__edge-path,\r\n\t.react-flow__edge:focus-visible .react-flow__edge-path {\r\n\t  stroke: #555;\r\n\t}\r\n  .react-flow__edge-textwrapper {\r\n\t  pointer-events: all;\r\n\t}\r\n  .react-flow__edge-textbg {\r\n\t  fill: white;\r\n\t}\r\n  .react-flow__edge .react-flow__edge-text {\r\n\t  pointer-events: none;\r\n\t  -webkit-user-select: none;\r\n\t\t -moz-user-select: none;\r\n\t\t\t  user-select: none;\r\n\t}\r\n  .react-flow__connection {\r\n\tpointer-events: none;\r\n  }\r\n  .react-flow__connection .animated {\r\n\t  stroke-dasharray: 5;\r\n\t  -webkit-animation: dashdraw 0.5s linear infinite;\r\n\t\t\t  animation: dashdraw 0.5s linear infinite;\r\n\t}\r\n  .react-flow__connectionline {\r\n\tz-index: 1001;\r\n  }\r\n  .react-flow__nodes {\r\n\tpointer-events: none;\r\n\ttransform-origin: 0 0;\r\n  }\r\n  .react-flow__node {\r\n\tposition: absolute;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t\t\tuser-select: none;\r\n\tpointer-events: all;\r\n\ttransform-origin: 0 0;\r\n\tbox-sizing: border-box;\r\n\tcursor: -webkit-grab;\r\n\tcursor: grab;\r\n  }\r\n  .react-flow__node.dragging {\r\n\t  cursor: -webkit-grabbing;\r\n\t  cursor: grabbing;\r\n\t}\r\n  .react-flow__nodesselection {\r\n\tz-index: 3;\r\n\ttransform-origin: left top;\r\n\tpointer-events: none;\r\n  }\r\n  .react-flow__nodesselection-rect {\r\n\t  position: absolute;\r\n\t  pointer-events: all;\r\n\t  cursor: -webkit-grab;\r\n\t  cursor: grab;\r\n\t}\r\n  .react-flow__handle {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tmin-width: 5px;\r\n\tmin-height: 5px;\r\n\twidth: 6px;\r\n\theight: 6px;\r\n\tbackground: #1a192b;\r\n\tborder: 1px solid white;\r\n\tborder-radius: 100%;\r\n  }\r\n  .react-flow__handle.connectionindicator {\r\n\t  pointer-events: all;\r\n\t  cursor: crosshair;\r\n\t}\r\n  .react-flow__handle-bottom {\r\n\t  top: auto;\r\n\t  left: 50%;\r\n\t  bottom: -4px;\r\n\t  transform: translate(-50%, 0);\r\n\t}\r\n  .react-flow__handle-top {\r\n\t  left: 50%;\r\n\t  top: -4px;\r\n\t  transform: translate(-50%, 0);\r\n\t}\r\n  .react-flow__handle-left {\r\n\t  top: 50%;\r\n\t  left: -4px;\r\n\t  transform: translate(0, -50%);\r\n\t}\r\n  .react-flow__handle-right {\r\n\t  right: -4px;\r\n\t  top: 50%;\r\n\t  transform: translate(0, -50%);\r\n\t}\r\n  .react-flow__edgeupdater {\r\n\tcursor: move;\r\n\tpointer-events: all;\r\n  }\r\n  .react-flow__panel {\r\n\tposition: absolute;\r\n\tz-index: 5;\r\n\tmargin: 15px;\r\n  }\r\n  .react-flow__panel.top {\r\n\t  top: 0;\r\n\t}\r\n  .react-flow__panel.bottom {\r\n\t  bottom: 0;\r\n\t}\r\n  .react-flow__panel.left {\r\n\t  left: 0;\r\n\t}\r\n  .react-flow__panel.right {\r\n\t  right: 0;\r\n\t}\r\n  .react-flow__panel.center {\r\n\t  left: 50%;\r\n\t  transform: translateX(-50%);\r\n\t}\r\n  .react-flow__attribution {\r\n\tfont-size: 10px;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\tpadding: 2px 3px;\r\n\tmargin: 0;\r\n  }\r\n  .react-flow__attribution a {\r\n\t  text-decoration: none;\r\n\t  color: #999;\r\n\t}\r\n  @-webkit-keyframes dashdraw {\r\n\tfrom {\r\n\t  stroke-dashoffset: 10;\r\n\t}\r\n  }\r\n  @keyframes dashdraw {\r\n\tfrom {\r\n\t  stroke-dashoffset: 10;\r\n\t}\r\n  }\r\n  .react-flow__edgelabel-renderer {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tpointer-events: none;\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t\t\tuser-select: none;\r\n  }\r\n  .react-flow__edge.updating .react-flow__edge-path {\r\n\t\tstroke: #777;\r\n\t  }\r\n  .react-flow__edge-text {\r\n\t  font-size: 10px;\r\n\t}\r\n  .react-flow__node.selectable:focus,\r\n\t.react-flow__node.selectable:focus-visible {\r\n\t  outline: none;\r\n\t}\r\n  .react-flow__node-default,\r\n  .react-flow__node-input,\r\n  .react-flow__node-output,\r\n  .react-flow__node-group {\r\n\tpadding: 10px;\r\n\tborder-radius: 3px;\r\n\twidth: 150px;\r\n\tfont-size: 12px;\r\n\tcolor: #222;\r\n\ttext-align: center;\r\n\tborder-width: 1px;\r\n\tborder-style: solid;\r\n\tborder-color: #1a192b;\r\n\tbackground-color: white;\r\n  }\r\n  .react-flow__node-default.selectable:hover, .react-flow__node-input.selectable:hover, .react-flow__node-output.selectable:hover, .react-flow__node-group.selectable:hover {\r\n\t\tbox-shadow: 0 1px 4px 1px rgba(0, 0, 0, 0.08);\r\n\t  }\r\n  .react-flow__node-default.selectable.selected,\r\n\t  .react-flow__node-default.selectable:focus,\r\n\t  .react-flow__node-default.selectable:focus-visible,\r\n\t  .react-flow__node-input.selectable.selected,\r\n\t  .react-flow__node-input.selectable:focus,\r\n\t  .react-flow__node-input.selectable:focus-visible,\r\n\t  .react-flow__node-output.selectable.selected,\r\n\t  .react-flow__node-output.selectable:focus,\r\n\t  .react-flow__node-output.selectable:focus-visible,\r\n\t  .react-flow__node-group.selectable.selected,\r\n\t  .react-flow__node-group.selectable:focus,\r\n\t  .react-flow__node-group.selectable:focus-visible {\r\n\t\tbox-shadow: 0 0 0 0.5px #1a192b;\r\n\t  }\r\n  .react-flow__node-group {\r\n\tbackground-color: rgba(240, 240, 240, 0.25);\r\n  }\r\n  .react-flow__nodesselection-rect,\r\n  .react-flow__selection {\r\n\tbackground: rgba(0, 89, 220, 0.08);\r\n\tborder: 1px dotted rgba(0, 89, 220, 0.8);\r\n  }\r\n  .react-flow__nodesselection-rect:focus,\r\n\t.react-flow__nodesselection-rect:focus-visible,\r\n\t.react-flow__selection:focus,\r\n\t.react-flow__selection:focus-visible {\r\n\t  outline: none;\r\n\t}\r\n  .react-flow__controls {\r\n\tbox-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.08);\r\n  }\r\n  .react-flow__controls-button {\r\n\t  border: none;\r\n\t  background: #fefefe;\r\n\t  border-bottom: 1px solid #eee;\r\n\t  box-sizing: content-box;\r\n\t  display: flex;\r\n\t  justify-content: center;\r\n\t  align-items: center;\r\n\t  width: 16px;\r\n\t  height: 16px;\r\n\t  cursor: pointer;\r\n\t  -webkit-user-select: none;\r\n\t\t -moz-user-select: none;\r\n\t\t\t  user-select: none;\r\n\t  padding: 5px;\r\n\t}\r\n  .react-flow__controls-button:hover {\r\n\t\tbackground: #f4f4f4;\r\n\t  }\r\n  .react-flow__controls-button svg {\r\n\t\twidth: 100%;\r\n\t\tmax-width: 12px;\r\n\t\tmax-height: 12px;\r\n\t  }\r\n  .react-flow__controls-button:disabled {\r\n\t\tpointer-events: none;\r\n\t  }\r\n  .react-flow__controls-button:disabled svg {\r\n\t\t  fill-opacity: 0.4;\r\n\t\t}\r\n  .react-flow__minimap {\r\n\tbackground-color: #fff;\r\n  }\r\n  .react-flow__resize-control {\r\n\tposition: absolute;\r\n  }\r\n  .react-flow__resize-control.left,\r\n  .react-flow__resize-control.right {\r\n\tcursor: ew-resize;\r\n  }\r\n  .react-flow__resize-control.top,\r\n  .react-flow__resize-control.bottom {\r\n\tcursor: ns-resize;\r\n  }\r\n  .react-flow__resize-control.top.left,\r\n  .react-flow__resize-control.bottom.right {\r\n\tcursor: nwse-resize;\r\n  }\r\n  .react-flow__resize-control.bottom.left,\r\n  .react-flow__resize-control.top.right {\r\n\tcursor: nesw-resize;\r\n  }\r\n  /* handle styles */\r\n  .react-flow__resize-control.handle {\r\n\twidth: 4px;\r\n\theight: 4px;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 1px;\r\n\tbackground-color: #3367d9;\r\n\ttransform: translate(-50%, -50%);\r\n  }\r\n  .react-flow__resize-control.handle.left {\r\n\tleft: 0;\r\n\ttop: 50%;\r\n  }\r\n  .react-flow__resize-control.handle.right {\r\n\tleft: 100%;\r\n\ttop: 50%;\r\n  }\r\n  .react-flow__resize-control.handle.top {\r\n\tleft: 50%;\r\n\ttop: 0;\r\n  }\r\n  .react-flow__resize-control.handle.bottom {\r\n\tleft: 50%;\r\n\ttop: 100%;\r\n  }\r\n  .react-flow__resize-control.handle.top.left {\r\n\tleft: 0;\r\n  }\r\n  .react-flow__resize-control.handle.bottom.left {\r\n\tleft: 0;\r\n  }\r\n  .react-flow__resize-control.handle.top.right {\r\n\tleft: 100%;\r\n  }\r\n  .react-flow__resize-control.handle.bottom.right {\r\n\tleft: 100%;\r\n  }\r\n  /* line styles */\r\n  .react-flow__resize-control.line {\r\n\tborder-color: #3367d9;\r\n\tborder-width: 0;\r\n\tborder-style: solid;\r\n  }\r\n  .react-flow__resize-control.line.left,\r\n  .react-flow__resize-control.line.right {\r\n\twidth: 1px;\r\n\ttransform: translate(-50%, 0);\r\n\ttop: 0;\r\n\theight: 100%;\r\n  }\r\n  .react-flow__resize-control.line.left {\r\n\tleft: 0;\r\n\tborder-left-width: 1px;\r\n  }\r\n  .react-flow__resize-control.line.right {\r\n\tleft: 100%;\r\n\tborder-right-width: 1px;\r\n  }\r\n  .react-flow__resize-control.line.top,\r\n  .react-flow__resize-control.line.bottom {\r\n\theight: 1px;\r\n\ttransform: translate(0, -50%);\r\n\tleft: 0;\r\n\twidth: 100%;\r\n  }\r\n  .react-flow__resize-control.line.top {\r\n\ttop: 0;\r\n\tborder-top-width: 1px;\r\n  }\r\n  .react-flow__resize-control.line.bottom {\r\n\tborder-bottom-width: 1px;\r\n\ttop: 100%;\r\n  }\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/diagrams/Diagram.scss":
/*!**********************************************!*\
  !*** ./src/components/diagrams/Diagram.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Diagram_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Diagram.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/diagrams/Diagram.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Diagram_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Diagram_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Diagram_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Diagram_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_diagrams_Diagram_jsx.app.0b1e708a894e534778c4.js.map