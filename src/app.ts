import * as createError from 'http-errors'
import * as express from 'express'
import * as path from 'path'
import * as cookieParser from 'cookie-parser'
import * as logger from 'morgan'

import IndexRouter              from './routes/index';
import WebhookLineRouter        from './routes/webhook/line';
import MulticastRouter          from './routes/multicast';

export default class App {
  public app: express.Application = express()

  constructor(config: any){
    this.init(config)
  }

  private init(config: any): void {
    // view engine setup
    this.app.set('views', path.join(__dirname, 'views'))
    this.app.set('view engine', 'ejs')

    this.app.use(logger('dev'))
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cookieParser())
    this.app.use(express.static(path.join(__dirname, '../../public')))
    this.app.use((req:express.Request, res:express.Response, next:express.NextFunction) => {
      res.locals.util = require('util')
      res.locals.uri = req.url
      next();
    });

    this.app.use('/multicast',          new MulticastRouter(config).router );
    this.app.use('/webhook/line',       new WebhookLineRouter(config).router );
    this.app.use('/',                   new IndexRouter(config).router );

    // catch 404 and forward to error handler
    this.app.use(function(_req:express.Request, _res:express.Response, next:express.NextFunction) {
      next(createError(404));
    });

    // error handler
    this.app.use(function(err:any, req:express.Request, res:express.Response, _next:express.NextFunction) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }

}
