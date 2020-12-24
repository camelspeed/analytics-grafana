"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
var express = require("express");
var indexRouter = express.Router();
exports.indexRouter = indexRouter;
indexRouter.get('/', function (req, res, next) {
    res.send({ title: 'System Up' });
});
//# sourceMappingURL=index.js.map