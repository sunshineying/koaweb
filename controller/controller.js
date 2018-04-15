'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _praiseController = require('./praiseController');

var _praiseController2 = _interopRequireDefault(_praiseController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
    init: function init(app, router) {
        app.use(router(function (_) {
            _.get('/index/index', _praiseController2.default.praise());
            _.get('/index/update', _praiseController2.default.update());
        }));
    }
};

exports.default = controller;
