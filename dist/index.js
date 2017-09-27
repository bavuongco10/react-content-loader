(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './Wrap', './stylized/FacebookStyle', './stylized/InstagramStyle', './stylized/CodeStyle', './stylized/ListStyle', './custom/Rect', './custom/Circle'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./Wrap'), require('./stylized/FacebookStyle'), require('./stylized/InstagramStyle'), require('./stylized/CodeStyle'), require('./stylized/ListStyle'), require('./custom/Rect'), require('./custom/Circle'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Wrap, global.FacebookStyle, global.InstagramStyle, global.CodeStyle, global.ListStyle, global.Rect, global.Circle);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _Wrap, _FacebookStyle, _InstagramStyle, _CodeStyle, _ListStyle, _Rect, _Circle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Circle = exports.Rect = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Wrap2 = _interopRequireDefault(_Wrap);

  var _FacebookStyle2 = _interopRequireDefault(_FacebookStyle);

  var _InstagramStyle2 = _interopRequireDefault(_InstagramStyle);

  var _CodeStyle2 = _interopRequireDefault(_CodeStyle);

  var _ListStyle2 = _interopRequireDefault(_ListStyle);

  var _Rect2 = _interopRequireDefault(_Rect);

  var _Circle2 = _interopRequireDefault(_Circle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var ContentLoader = function (_Component) {
    _inherits(ContentLoader, _Component);

    function ContentLoader(props) {
      _classCallCheck(this, ContentLoader);

      var _this = _possibleConstructorReturn(this, (ContentLoader.__proto__ || Object.getPrototypeOf(ContentLoader)).call(this, props));

      _this.state = {
        style: props.style,
        type: props.type,
        speed: props.speed,
        width: props.width,
        height: props.height,
        primaryColor: props.primaryColor,
        secondaryColor: props.secondaryColor
      };
      return _this;
    }

    _createClass(ContentLoader, [{
      key: 'render',
      value: function render() {
        if (this.props.children) {
          return _react2.default.createElement(
            _Wrap2.default,
            this.state,
            this.props.children
          );
        }

        if (!this.props.children) {
          switch (this.state.type.toLowerCase()) {
            case 'instagram':
              return _react2.default.createElement(_InstagramStyle2.default, this.state);
              break;

            case 'code':
              return _react2.default.createElement(_CodeStyle2.default, this.state);
              break;

            case 'list':
              return _react2.default.createElement(_ListStyle2.default, this.state);
              break;

            default:
            case 'facebook':
              return _react2.default.createElement(_FacebookStyle2.default, this.state);
              break;
          }
        }
      }
    }]);

    return ContentLoader;
  }(_react.Component);

  ContentLoader.propTypes = {
    style: _propTypes2.default.object,
    type: _propTypes2.default.string,
    speed: _propTypes2.default.number,
    width: _propTypes2.default.number,
    height: _propTypes2.default.number,
    primaryColor: _propTypes2.default.string,
    secondaryColor: _propTypes2.default.string
  };

  ContentLoader.defaultProps = {
    type: 'facebook',
    speed: 2,
    width: 400,
    height: 130,
    primaryColor: '#f0f0f0',
    secondaryColor: '#e0e0e0'
  };

  exports.default = ContentLoader;
  exports.Rect = _Rect2.default;
  exports.Circle = _Circle2.default;
});