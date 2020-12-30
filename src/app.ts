import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import { indexRouter } from './routes/index';
import { playersRouter } from './routes/players';
import { apiLoggerMiddleWare } from './middleware/apiLogger';

const port = 3000;
const app = express();

app.use(logger('dev'));
app.use(apiLoggerMiddleWare);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/players', playersRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => console.log(`Log-Emitter-App running on http://localhost:${port}`))

export { app };
