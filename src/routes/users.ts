import * as express from 'express';
import * as fluentLogger from 'fluent-logger';

const usersRouter = express.Router();

let logger = fluentLogger.createFluentSender('users_api', {
  host: 'sample-log-monitoring-fluentd',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 600000 // 10 minutes
});

// ======================================
// Users
// ======================================

/**
 * GET /users
 */
usersRouter.get('/', function (req, res, next) {
 let  msg: string = "GET /Users"; 
  console.log(msg);
  logger.emit('GET', {record: msg});
  res.send({title: msg});
});

/**
 * POST /users
 * 
 * Create a new user
 */
usersRouter.post('/', function (req, res, next) {
  let  msg: string = "POST /Users"; 
  console.log(msg);
  logger.emit('POST', {record: msg});
  res.send({title: msg});
});

/**
 * PATCH /users/:id
 * 
 * Update an existing user
 */
usersRouter.patch('/:id', function (req, res, next) {
  let  msg: string = "PATCH /Users/:id"; 
  console.log(msg);
  logger.emit('PATCH', {record: msg});
  res.send({title: msg});
});

export {  usersRouter };