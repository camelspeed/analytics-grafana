import * as express from 'express';
import * as fluentLogger from 'fluent-logger';
import * as data from './playersData';
import { v4 as uuidv4 } from 'uuid';

const playersRouter = express.Router();

let logger = fluentLogger.createFluentSender('fifa.players', {
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
playersRouter.get('/', function (req, res, next) {
  res.sendStatus(200);
});

/**
 * POST /users
 * 
 * Create a new user
 */
playersRouter.post('/', function (req, res, next) {
  logger.emit({record: createPlayer()});
  res.sendStatus(200);
});

/**
 * PATCH /users/:id
 * 
 * Update an existing user
 */
playersRouter.patch('/:id', function (req, res, next) {
  res.sendStatus(200);
});

/**
 * POST /users
 * 
 * Create a new user
 */
playersRouter.post('/data/:count', function (req, res, next) {
  let loops = parseInt(req.params.count)
  for (let i = 0; i < loops; i++) {
    logger.emit({record: createPlayer()});
  }
  res.sendStatus(200);
});

function random(data): number {
  return Math.floor((Math.random() * 10) % data.length);
}

function createPlayer(): data.Player {
  return { 
    id: uuidv4(),     
    firstName: data.firstNames[random(data.firstNames)],
    lastName: data.lastNames[random(data.lastNames)],
    status: data.statuses[random(data.statuses)],
    team: data.teams[random(data.teams)],
    position: data.positions[random(data.positions)],
    createdOn: Date.now(),
    updatedOn: Date.now()
  }
}

export {  playersRouter };