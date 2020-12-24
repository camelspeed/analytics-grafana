"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var index_1 = require("./routes/index");
var users_1 = require("./routes/users");
var errors_1 = require("./middleware/errors");
var port = 3000;
var app = express();
exports.app = app;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(errors_1.errorsMiddleWare);
app.use('/', index_1.indexRouter);
app.use('/users', users_1.usersRouter);
app.use(function (req, res, next) {
    next(createError(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
app.listen(port, function () { return console.log("Log-Emitter-App running on http://localhost:" + port); });
//# sourceMappingURL=app.js.map