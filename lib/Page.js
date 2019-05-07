"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs2/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _dynamic = _interopRequireDefault(require("next/dynamic"));

var Message = (0, _dynamic.default)(function () {
  return import("./Message");
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [require.resolveWeak("./Message")];
    },
    modules: ["./Message"]
  }
});
/**
 * Component: Page.
 */

var Page =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Page, _Component);

  function Page() {
    (0, _classCallCheck2.default)(this, Page);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Page).apply(this, arguments));
  }

  (0, _createClass2.default)(Page, [{
    key: "render",

    /**
     * Prop types.
     */

    /**
     * Implements render().
     */
    value: function render() {
      return _react.default.createElement(Message, null);
    }
  }]);
  return Page;
}(_react.Component);

(0, _defineProperty2.default)(Page, "propTypes", {});
var _default = Page;
exports.default = _default;