import { Router, Request, Response, NextFunction } from 'express';
import { getBasicAuthen } from '../services/basicauthen'
import { BroadcastLine } from './broadcast_line'

export default class MulticastRoute {
  public router: Router
  public config: any

  constructor(config: any){
    this.config = config;
    this.router = Router()
    this.router.get('/', this.getIndex);
    this.router.post('/', this.postIndex);
  }

  private handleBody = async (authorization: string, body: any) => {
  	return new Promise( async (resolve, _reject) => {
  		const uids        = body.uid || []
  		const messages		= body.messages || []
  		const channel_id	= body.channelid || ''

      const lines: any = this.config.lines;
  		const authorization_multicast = getBasicAuthen(this.config.multicast.username, this.config.multicast.password)

  		if(authorization == authorization_multicast){
  			const config_line      = lines[channel_id]

  			if( typeof config_line != 'undefined' ){
  				console.log('broadcast line')
  				await BroadcastLine(this.config, config_line, uids, messages)
  				resolve()
  			}else{
  				console.error('no config - ' + channel_id)
  				resolve()
  			}
  		}else{
  			console.error("You don't have permission to access.")
  			resolve()
  		}
  	})
  }

  private getIndex = async (_req: Request, res: Response, _next: NextFunction) => {
    res.end('hi');
  }

  private postIndex = async (req: Request, res: Response, _next: NextFunction) => {
    console.log(JSON.stringify(req.body));
    
    const authorization: string = req.headers.authorization || '';
    if( Array.isArray(req.body) ){
      await Promise.all(req.body.map(body => this.handleBody(authorization, body)))
    }else{
      await Promise.all([req.body].map(body => this.handleBody(authorization, body)))
    }
    res.status(200).send('EVENT_RECEIVED')
  }
}

// export default new MulticastRoute().router
