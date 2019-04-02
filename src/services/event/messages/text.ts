
export const text = async (_config: any, client: any, _channel: any, event: any) => {
  return new Promise( async (resolve, _reject) => {
    // console.log('text', event.message.text);
    await client.reply(event.replyToken, [{type: 'text', text: event.message.text}])
    resolve('EVENT_RECEIVED');
  });
}
