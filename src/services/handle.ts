
import * as Event from './event'

export const HandleEvent = async (config: any, client: any, channel: any, event: any): Promise<any> => {
  try{
    console.log('', JSON.stringify(event) );
    return new Promise( async (resolve, _reject) => {
      if( event.type === 'message' ){
        if( event.message.type === 'text' ){
          await Event.text(config, client, channel, event);
          resolve('EVENT_RECEIVED');
        }else if( event.message.type === 'sticker' ){
          await Event.sticker(config, client, channel, event)
          resolve('EVENT_RECEIVED');
        }else if( event.message.type === 'image' ){
          await Event.image(config, client, channel, event)
          resolve('EVENT_RECEIVED');
        }else if( event.message.type === 'audio' ){
          await Event.audio(config, client, channel, event)
          resolve('EVENT_RECEIVED');
        }else if( event.message.type === 'video' ){
          await Event.video(config, client, channel, event)
          resolve('EVENT_RECEIVED');
        }else{
          resolve('EVENT_RECEIVED');
        }
      }else if( event.type === 'postback' ){
        await Event.postback(config, client, channel, event)
        resolve('EVENT_RECEIVED');
      }else if( event.type === 'follow' ){
        await Event.follow(config, client, channel, event)
        resolve('EVENT_RECEIVED');
      }else if( event.type === 'unfollow' ){
        await Event.unfollow(config, client, channel, event)
        resolve('EVENT_RECEIVED');
      }else if( event.type === 'beacon' ){
        await Event.beacon(config, client, channel, event)
        resolve('EVENT_RECEIVED');
      }
      // return resolve('EVENT_RECEIVED');
    });
  }catch(e){
    console.error('HandleEvent:', e.message);
    return Promise.resolve('EVENT_RECEIVED');
  }
}
