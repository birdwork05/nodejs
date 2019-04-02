
// const config    = require('../../config.json');
// const env       = process.env.NODE_ENV || 'development'
// const service   = require('../../services')

export const verify =  async (_config: any, client: any, _channel: any, event: any) => {
  try{
    if( ( event.replyToken === '00000000000000000000000000000000' || event.replyToken === 'ffffffffffffffffffffffffffffffff' ) && event.type === 'message' ){
      if( event.message.type === 'text' ){
        await client.reply( event.replyToken, [event.message] );
        await client.push( event.source.userId, [event.message] );
      }else if( event.message.type === 'sticker' ){
        await client.reply( event.replyToken, [event.message] );
        await client.push( event.source.userId, [event.message] );
      }
    }
    return Promise.resolve(true);
  }catch(e){
    return Promise.reject(e);
  }
}
