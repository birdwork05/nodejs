
import * as crypto from 'crypto';

export const encrypt = async (config: any, userId: string) => {
  try{
    const cipher = crypto.createCipher(config.encryptUId.algorithm, config.encryptUId.password);
    let crypted = cipher.update(userId,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
  }catch(e){
    console.error(e.message);
    return e;
  }
}
