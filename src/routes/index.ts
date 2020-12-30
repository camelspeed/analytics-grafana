import * as express from 'express';
const indexRouter = express.Router();

/**
 * GET /
 */
indexRouter.get('/', function(req, res, next) {
  res.sendStatus(200);
});

export { indexRouter };
