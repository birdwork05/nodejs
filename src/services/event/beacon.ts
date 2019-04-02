
// const config    = require('../../config.json');
// const env       = process.env.NODE_ENV || 'development'

export const beacon = async (config: any, _client: any, _channel: any, event: any) => {
  try{
    console.info(JSON.stringify(event))
    return Promise.resolve('EVENT_RECEIVED');
  }catch(e){
    return Promise.reject(e);
  }
}
