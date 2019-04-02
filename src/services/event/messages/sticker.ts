
export const sticker = async (config: any, client: any, _channel: any, event: any) => {
  return new Promise( async (resolve, reject) => {
    try{
      if( config.env === 'test' ){
        await client.push( event.source.userId, [event.message] );
      }else{
        await client.reply( event.replyToken, [event.message] );
      }
      resolve('EVENT_RECEIVED');
    }catch(e){
      reject(e);
    }
  })
}
