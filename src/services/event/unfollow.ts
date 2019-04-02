
export const unfollow = async (_config: any,_client: any, channel: any, event: any) => {
  return new Promise( async (resolve, reject) => {
    try{
      return resolve('EVENT_RECEIVED');
    }catch(e){
      return reject(e);
    }
  })
}
