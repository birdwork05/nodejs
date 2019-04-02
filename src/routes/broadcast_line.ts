const { LineClient }  = require('messaging-api-line')
import { decrypt } from '../services/decrypt'

export const BroadcastLine = async (config: any, config_line: any, uids: any, messages: any) => {
  return new Promise( async (resolve, _reject) => {
    try{
      
      const client = LineClient.connect(
        config_line.access_token,
        config_line.secret
      )

      uids.forEach( async (enuid: any) => {
        const uid = await decrypt(config, enuid);
        await client.push( uid, messages )
      })

    }catch(e){
      console.error( config.env + ':broadcast-line:push-to-line:' + JSON.stringify( messages ) )
    }
    return resolve()
  })
}
