import * as express from 'express';

const usersRouter = express.Router();

// ======================================
// Users
// ======================================

/**
 * GET /users
 */
usersRouter.get('/', function (req, res, next) {
 let  msg: string = "GET /Users"; 
  console.log(msg);
  res.send({title: msg});
});

/**
 * POST /users
 * 
 * Create a new user
 */
usersRouter.post('/', async (req, res, next) => {
  let  msg: string = "POST /Users"; 
  console.log(msg);
  res.send({title: msg});
});

/**
 * PATCH /users/:id
 * 
 * Update an existing user
 */
usersRouter.patch('/:id', async (req, res, next) => {
  let  msg: string = "PATCH /Users/:id"; 
  console.log(msg);
  res.send({title: msg});
});

export {  usersRouter };