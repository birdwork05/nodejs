
import * as crypto from 'crypto';

export const decrypt = async (config: any, userId: string) => {
  try{
    const decipher = crypto.createDecipher(config.encryptUId.algorithm, config.encryptUId.password);
    let dec = decipher.update(userId,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
  }catch(e){
    console.error(e.message);
    return e;
  }
}
