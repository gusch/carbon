'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _i18nJs = require('i18n-js');

var _i18nJs2 = _interopRequireDefault(_i18nJs);

var _marked2 = require('marked');

var _marked3 = _interopRequireDefault(_marked2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A widget for internationalisation of text.
 *
 * == How to use an I18n component:
 *
 * In your file:
 *
 *   import I18n from 'carbon/lib/components/i18n';
 *
 * To render the message:
 *
 *  <I18n scope='foo' />
 *
 * For additional properties specific to this component, see propTypes.
 *
 * @class I18n
 * @constructor
 */
var I18n = function (_React$Component) {
  _inherits(I18n, _React$Component);

  function I18n() {
    _classCallCheck(this, I18n);

    return _possibleConstructorReturn(this, (I18n.__proto__ || Object.getPrototypeOf(I18n)).apply(this, arguments));
  }

  _createClass(I18n, [{
    key: 'render',


    /**
     * Renders the component.
     *
     * @method render
     */
    value: function render() {
      var _props = _extends({}, this.props),
          markdown = _props.markdown,
          inline = _props.inline,
          scope = _props.scope,
          options = _props.options,
          props = _objectWithoutProperties(_props, ['markdown', 'inline', 'scope', 'options']),
          translation = _i18nJs2.default.t(scope, options);

      if (markdown) {
        props.dangerouslySetInnerHTML = {
          __html: this.marked(inline)(translation)
        };
        translation = null;
      }

      return this.renderMarkup(inline, props, translation);
    }
  }, {
    key: 'renderMarkup',
    value: function renderMarkup(inline, props, translation) {
      var el = inline ? 'span' : 'div';
      return _react2.default.createElement(el, props, translation);
    }
  }, {
    key: 'marked',
    value: function marked(inline) {
      // Make sure that we sanitize html markup in the MD compiler
      _marked3.default.setOptions({ sanitize: true });
      return inline ? function (str) {
        return _marked3.default.inlineLexer(str, []);
      } : _marked3.default;
    }
  }]);

  return I18n;
}(_react2.default.Component);

I18n.propTypes = {

  /**
   * Whether to compile the value as markdown
   *
   * @property markdown
   * @type {Boolean}
   * @default false
   */
  markdown: _react2.default.PropTypes.bool,

  /**
   * Whether to enclose the text in a <span> or a <div>
   *
   * @property inline
   * @type {Boolean}
   * @default true
   */
  inline: _react2.default.PropTypes.bool,

  /**
   * The key to lookup for a localised value
   *
   * @property scope
   * @type {String}
   * @default undefined
   */
  scope: _react2.default.PropTypes.string,

  /**
   * Additional options to pass to I18n
   *
   * @property options
   * @type {Object}
   * @default undefined
   */
  options: _react2.default.PropTypes.object
};
I18n.defaultProps = {
  inline: true
};
exports.default = I18n;