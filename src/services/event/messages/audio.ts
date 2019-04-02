
export const audio = async (_config: any, _client: any, _channel: any, _event: any) => {
  return new Promise( async (resolve, _reject) => {
    console.log('audio');
    resolve('EVENT_RECEIVED');
  }).catch(e => {
    return e;
  });
  // const buffer = await client.retrieveMessageContent(event.message.id);
  // console.log(fileType(buffer));
}
