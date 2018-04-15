(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['koa', 'koa-simple-router', 'co', 'koa-swig', 'koa-static', 'babel-core/register', 'babel-polyfill', './controller/controller', './config/config'], factory);
    } else if (typeof exports !== "undefined") {
        factory(require('koa'), require('koa-simple-router'), require('co'), require('koa-swig'), require('koa-static'), require('babel-core/register'), require('babel-polyfill'), require('./controller/controller'), require('./config/config'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.koa, global.koaSimpleRouter, global.co, global.koaSwig, global.koaStatic, global.register, global.babelPolyfill, global.controller, global.config);
        global.app = mod.exports;
    }
})(this, function (_koa, _koaSimpleRouter, _co, _koaSwig, _koaStatic, _register, _babelPolyfill, _controller, _config) {
    'use strict';

    var _koa2 = _interopRequireDefault(_koa);

    var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

    var _co2 = _interopRequireDefault(_co);

    var _koaSwig2 = _interopRequireDefault(_koaSwig);

    var _koaStatic2 = _interopRequireDefault(_koaStatic);

    var _register2 = _interopRequireDefault(_register);

    var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

    var _controller2 = _interopRequireDefault(_controller);

    var _config2 = _interopRequireDefault(_config);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    // 
    var app = new _koa2.default(); // 这两个需要引入，否则async编译出错


    _controller2.default.init(app, _koaSimpleRouter2.default);

    app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
        root: _config2.default.get('viewDir'),
        autoescape: true,
        cache: 'memory',
        ext: 'html'
    }));

    // 静态资源文件
    app.use((0, _koaStatic2.default)(_config2.default.get('staticDir')));

    app.listen(_config2.default.get('port'));
});
