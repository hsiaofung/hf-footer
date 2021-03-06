"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./css/style.css");

require("./css/footer.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          socialmediatitle = _this$props.socialmediatitle,
          socialmediabtns = _this$props.socialmediabtns,
          row1 = _this$props.row1,
          row2 = _this$props.row2;
      return _react.default.createElement("div", {
        id: "footer"
      }, _react.default.createElement("div", {
        className: "content"
      }, _react.default.createElement("div", {
        className: "icon-logo-graphic"
      }), _react.default.createElement("p", {
        className: "follow-us"
      }, socialmediatitle && socialmediatitle), _react.default.createElement("p", {
        className: "footer-icons"
      }, socialmediabtns && socialmediabtns.map(function (data, index) {
        return _react.default.createElement("a", {
          className: "iconLink",
          href: data.url,
          key: index,
          target: "_blank",
          rel: "noopener noreferrer"
        }, _react.default.createElement("span", {
          className: "icon ".concat(data.iconclass)
        }));
      })), _react.default.createElement("div", {
        className: "footer-group"
      }, row1 && row1.map(function (data, index) {
        return _react.default.createElement("div", {
          className: "footer-group-item",
          key: index
        }, data.url ? _react.default.createElement("a", {
          href: data.url,
          dangerouslySetInnerHTML: {
            __html: data.name
          }
        }) : _react.default.createElement("div", {
          href: data.url,
          dangerouslySetInnerHTML: {
            __html: data.name
          }
        }));
      })), _react.default.createElement("p", {
        className: "footer-group"
      }, row2 && row2.map(function (data, index) {
        return _react.default.createElement("div", {
          key: index,
          className: "footer-group-item"
        }, data.url ? _react.default.createElement("a", {
          href: data.url
        }, data.name) : data.name);
      }))));
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;
