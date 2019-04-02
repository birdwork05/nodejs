
// const { LineClient } = require('messaging-api-line');
import { LineClient } from 'messaging-api-line';
import { HandleEvent } from '../../services/handle';

import * as timo from 'timo';

import { Router, Request, Response, NextFunction } from 'express';

export default class LineRoute {
  public router: Router
  public config: any

  constructor(config: any){
    this.config = config;
    this.router = Router()
    this.router.get('/:ch', this.getIndex);
    this.router.post('/:ch', this.postIndex);
  }

  private getIndex = async (req: Request, res: Response, _next: NextFunction) => {
    res.status(200).send('Ok.' + req.params.ch || '');
  }

  private postIndex = async (req: Request, res: Response, _next: NextFunction) => {
    try{
      timo.start();

      const lines: any = this.config.lines;
      const ch = req.params.ch || '';
      const config_line = lines[ch] || '';
      const client = LineClient.connect(config_line.access_token, config_line.secret);
      await Promise.all(req.body.events.map((event: Promise<any>) => HandleEvent(this.config, client, config_line, event)));

      timo.stop();
      // console.log( 'HandleEvent:', timo.duration() );

      res.status(200).end('EVENT_RECEIVED');
    }catch(e){
      console.error( 'error', e.message );
      res.status(500).end(e.message);
    }
  }

}

// export default new LineRoute().router
