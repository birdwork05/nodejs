import { Router, Request, Response, NextFunction } from 'express';

export default class IndexRoute {
  public router: Router
  public config: any

  constructor(config: any){
    this.config = config;
    this.router = Router()
    this.router.get('/', this.getIndex);
  }

  private async getIndex(_req: Request, res: Response, _next: NextFunction) {
    res.end('hi');
  }
}
