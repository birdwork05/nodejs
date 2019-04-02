
export const video = async (_config: any, _client: any, _channel: any, _event: any) => {
  // const buffer = await client.retrieveMessageContent(event.message.id);
  // console.log(fileType(buffer));
  return new Promise( async (resolve, _reject) => {
    resolve('EVENT_RECEIVED');
  }).catch(e => {
    return e;
  });
}
