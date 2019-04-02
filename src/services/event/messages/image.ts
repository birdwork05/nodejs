
export const image = async (_config: any, _client: any, _channel: any, _event: any) => {
  return new Promise( async (resolve, _reject) => {
    console.log('image');
    resolve('EVENT_RECEIVED');
  }).catch(e => {
    return e;
  });
  // const objBuffer = await client.retrieveMessageContent(event.message.id);
  // const uploadTo = `${optCmd.env}/nice/`;
  // await bucket.uploadBuffer(objBuffer, 'image', uploadTo);
}
