(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', './PraiseButton.js', './axios.js'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./PraiseButton.js'), require('./axios.js'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.PraiseButton, global.axios);
        global.Thumb = mod.exports;
    }
})(this, function (exports, _PraiseButton2, _axios) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _PraiseButton3 = _interopRequireDefault(_PraiseButton2);

    var _axios2 = _interopRequireDefault(_axios);

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

    /*
     * Thumb
     * @class
     */

    var f = '';

    var Thumb = function (_PraiseButton) {
        _inherits(Thumb, _PraiseButton);

        function Thumb() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, Thumb);

            var _this = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this));

            _this.praiseBox = selector.praiseNode;

            _this.node = $(_this.praiseBox);

            _this.addNode = '<div class="priase-count">\u5F53\u524D\u70B9\u8D5E\u6B21\u6570\uFF1A<span>' + _this.PraiseCount + '</span></div>';

            _this.node.prepend(_this.addNode);

            _this.showCountNode = _this.node.find('.priase-count span');

            return _this;
        }

        _createClass(Thumb, [{
            key: 'handlePraise',
            value: function handlePraise() {
                var _this2 = this;

                if (!this.praiseBox) return;
                this.praiseBox.onclick = function () {
                    if (f) {
                        clearTimeout(f);
                    }
                    f = setTimeout(function () {
                        _this2.addCount();
                        _axios2.default.get('/index/update').then(function (response) {
                            console.log(response);
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }, 800);
                };
            }
        }, {
            key: 'changeCount',
            value: function changeCount() {
                this.showCountNode.text(this.PraiseCount);
            }
        }]);

        return Thumb;
    }(_PraiseButton3.default);

    exports.default = Thumb;
});
