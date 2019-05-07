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

/**
 * Component: Message.
 */
var Message =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Message, _Component);

  function Message() {
    (0, _classCallCheck2.default)(this, Message);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Message).apply(this, arguments));
  }

  (0, _createClass2.default)(Message, [{
    key: "render",

    /**
     * Prop types.
     */

    /**
     * Implements render().
     */
    value: function render() {
      return "Message Component";
    }
  }]);
  return Message;
}(_react.Component);

(0, _defineProperty2.default)(Message, "propTypes", {});
var _default = Message;
exports.default = _default;