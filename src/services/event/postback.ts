
export const postback = async (config: any, client: any, channel: any, event: any) => {
  return new Promise( async (resolve, _reject) => {
    console.log('this is postback')
    await client.reply(event.replyToken, [{type: 'text', text: event.postback.data}])

    resolve('EVENT_RECEIVED');
  });
}
