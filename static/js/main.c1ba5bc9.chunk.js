(this["webpackJsonptemplate"] = this["webpackJsonptemplate"] || []).push([[0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(8);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 5 modules
var toConsumableArray = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 5 modules
var createSuper = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(4);

// EXTERNAL MODULE: ./src/app.css
var app = __webpack_require__(16);

// CONCATENATED MODULE: ./src/components/habit.jsx
var habit_Habit=/*#__PURE__*/function(_PureComponent){Object(inherits["a" /* default */])(Habit,_PureComponent);var _super=Object(createSuper["a" /* default */])(Habit);function Habit(){var _this;Object(classCallCheck["a" /* default */])(this,Habit);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.handleIncrement=function(){_this.props.onIncrement(_this.props.habit);};_this.handleDecrement=function(){_this.props.onDecrement(_this.props.habit);};_this.handleDelete=function(){_this.props.onDelete(_this.props.habit);};return _this;}Object(createClass["a" /* default */])(Habit,[{key:"render",value:function render(){var _this$props$habit=this.props.habit,name=_this$props$habit.name,count=_this$props$habit.count;return/*#__PURE__*/react_default.a.createElement("li",{className:"habit"},/*#__PURE__*/react_default.a.createElement("span",{className:"habit-name"},name),/*#__PURE__*/react_default.a.createElement("span",{className:"habit-count"},count),/*#__PURE__*/react_default.a.createElement("button",{className:"habit-button habit-increase",onClick:this.handleIncrement},/*#__PURE__*/react_default.a.createElement("i",{className:"fas fa-plus-square"})),/*#__PURE__*/react_default.a.createElement("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement},/*#__PURE__*/react_default.a.createElement("i",{className:"fas fa-minus-square"})),/*#__PURE__*/react_default.a.createElement("button",{className:"habit-button habit-delete",onClick:this.handleDelete},/*#__PURE__*/react_default.a.createElement("i",{className:"fas fa-trash"})));}}]);return Habit;}(react["PureComponent"]);/* harmony default export */ var components_habit = (habit_Habit);
// CONCATENATED MODULE: ./src/components/habitAddForm.jsx
var HabitAddForm=Object(react["memo"])(function(props){var formRef=react_default.a.createRef();var inputRef=react_default.a.createRef();var onSubmit=function onSubmit(event){event.preventDefault();var name=inputRef.current.value;name&&props.onAdd(name);formRef.current.reset();};return/*#__PURE__*/react_default.a.createElement("form",{ref:formRef,className:"add-form",onSubmit:onSubmit},/*#__PURE__*/react_default.a.createElement("input",{ref:inputRef,type:"text",className:"add-input",placeholder:"Habit"}),/*#__PURE__*/react_default.a.createElement("button",{className:"add-button"},"Add"));});/* harmony default export */ var habitAddForm = (HabitAddForm);
// CONCATENATED MODULE: ./src/components/habits.jsx
var habits_Habits=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(Habits,_Component);var _super=Object(createSuper["a" /* default */])(Habits);function Habits(){var _this;Object(classCallCheck["a" /* default */])(this,Habits);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.handleIncrement=function(habit){_this.props.onIncrement(habit);};_this.handleDecrement=function(habit){_this.props.onDecrement(habit);};_this.handleDelete=function(habit){_this.props.onDelete(habit);};_this.handleAdd=function(name){_this.props.onAdd(name);};return _this;}Object(createClass["a" /* default */])(Habits,[{key:"render",value:function render(){var _this2=this;console.log('habits');return/*#__PURE__*/react_default.a.createElement("div",{className:"habits"},/*#__PURE__*/react_default.a.createElement(habitAddForm,{onAdd:this.handleAdd}),/*#__PURE__*/react_default.a.createElement("ul",null,this.props.habits.map(function(habit){return/*#__PURE__*/react_default.a.createElement(components_habit,{key:habit.id,habit:habit,onIncrement:_this2.handleIncrement,onDecrement:_this2.handleDecrement,onDelete:_this2.handleDelete});})),/*#__PURE__*/react_default.a.createElement("button",{className:"habits-reset",onClick:this.props.onReset},"Reset All"));}}]);return Habits;}(react["Component"]);/* harmony default export */ var components_habits = (habits_Habits);
// CONCATENATED MODULE: ./src/components/navbar.jsx
var navbar_Navbar=/*#__PURE__*/function(_PureComponent){Object(inherits["a" /* default */])(Navbar,_PureComponent);var _super=Object(createSuper["a" /* default */])(Navbar);function Navbar(){Object(classCallCheck["a" /* default */])(this,Navbar);return _super.apply(this,arguments);}Object(createClass["a" /* default */])(Navbar,[{key:"render",value:function render(){return/*#__PURE__*/react_default.a.createElement("nav",{className:"navbar"},/*#__PURE__*/react_default.a.createElement("i",{className:"navbar-logo fas fa-leaf"}),/*#__PURE__*/react_default.a.createElement("span",null,"Habit Tracker"),/*#__PURE__*/react_default.a.createElement("span",{className:"navbar-count"},this.props.totalCount));}}]);return Navbar;}(react["PureComponent"]);/* harmony default export */ var navbar = (navbar_Navbar);
// CONCATENATED MODULE: ./src/app.jsx
var app_App=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(App,_Component);var _super=Object(createSuper["a" /* default */])(App);function App(){var _this;Object(classCallCheck["a" /* default */])(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.state={habits:[{id:1,name:'Reading',count:0},{id:2,name:'Running',count:0},{id:3,name:'Coding',count:0}]};_this.handleIncrement=function(habit){var habits=_this.state.habits.map(function(item){if(item.id===habit.id){return Object(objectSpread2["a" /* default */])({},habit,{count:habit.count+1});}return item;});_this.setState({habits:habits});};_this.handleDecrement=function(habit){var habits=_this.state.habits.map(function(item){if(item.id===habit.id){var count=habit.count-1;return Object(objectSpread2["a" /* default */])({},habit,{count:count<0?0:count});}return item;});_this.setState({habits:habits});};_this.handleDelete=function(habit){var habits=_this.state.habits.filter(function(item){return item.id!==habit.id;});_this.setState({habits:habits});};_this.handleAdd=function(name){var habits=[].concat(Object(toConsumableArray["a" /* default */])(_this.state.habits),[{id:Date.now(),name:name,count:0}]);_this.setState({habits:habits});};_this.handleReset=function(){var habits=_this.state.habits.map(function(habit){if(habit.count!==0){return Object(objectSpread2["a" /* default */])({},habit,{count:0});}return habit;});_this.setState({habits:habits});};return _this;}Object(createClass["a" /* default */])(App,[{key:"render",value:function render(){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(navbar,{totalCount:this.state.habits.filter(function(item){return item.count>0;}).length}),/*#__PURE__*/react_default.a.createElement(components_habits,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset}));}}]);return App;}(react["Component"]);/* harmony default export */ var src_app = (app_App);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-free/js/all.js
var js_all = __webpack_require__(17);

// CONCATENATED MODULE: ./src/index.js
react_dom_default.a.render(/*#__PURE__*/react_default.a.createElement(react_default.a.StrictMode,null,/*#__PURE__*/react_default.a.createElement(src_app,null)),document.getElementById('root'));

/***/ })

},[[10,1,2]]]);
//# sourceMappingURL=main.c1ba5bc9.chunk.js.map