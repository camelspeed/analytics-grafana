import * as express from 'express';
import * as fluentLogger from 'fluent-logger';

const usersRouter = express.Router();

let logger = fluentLogger.createFluentSender('fifa.api', {
  host: 'sample-log-monitoring-fluentd',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 600000 // 10 minutes
});

export const apiLoggerMiddleWare = async function(req, res, next) {
    logger.emit({data: 
                  {
                    method: req.method,
                    url: req.originalUrl,
                    timestamp: Date.now()
                  }
                });
    next();
    return;
}