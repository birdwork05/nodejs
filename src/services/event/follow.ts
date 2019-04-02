
export const follow = async (_config: any,client: any, _channel: any, event: any) => {
  return new Promise( async (resolve, reject) => {
    try{
      await client.reply(event.replyToken, [{type: 'text', text: 'สวัสดี'}])
      return resolve('EVENT_RECEIVED');
    }catch(e){
      console.log(e.message);
      return reject(e);
    }
  })
}
