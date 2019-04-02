
import * as request from 'request'
// import { Buffer } from 'buffer-from';
import { encrypt } from '../services/encrypt';

const post = async (opts: any) => {
  return new Promise((resolve, reject) => {
    request(opts, (err: Error, _res: any, body: any) => {
      if(err) reject(err)
      return resolve(body)
    })
  })
}

// const config = {
//   "encryptUId": {
//     "algorithm": "aes-256-ctr",
//     "password": "krG59$V5BX"
//   }
// }
import * as config from '../config.json';

const run = async () => {
  try{
    const opts = {
      url: 'http://asia-northeast1-nice-rpa.cloudfunctions.net/nice_rpa/multicast',
      method: 'POST',
      json: true,
      headers: { 'Authorization': 'Basic ' + new Buffer('nicemulticast:N7w#p~bL').toString('base64') },
      body: [
        {
          channelid: '1560513891',
          uid: [
            await encrypt(config, 'U8e916c8635b1c468155ebcf5bc397512'),
          ],
          messages: [
            { type: 'text', text: '(づ｡◕‿‿◕｡)づ 01' }
          ]
        }
      ]
    }
    const data = await post(opts)
    console.log( JSON.stringify(data) );
  }catch(e){
    console.error('post', e.message)
  }
}

run();
