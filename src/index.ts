import * as functions from 'firebase-functions';
import App from './app';

// const config: any = functions.config();
const config = {
  "development": {
    "env": "development",
    "instance": "instance1",
    "encryptUId": {
      "algorithm": "aes-256-ctr",
      "password": "krG59$V5BX"
    },
    "multicast": {
      "username": "nicemulticast",
      "password": "N7w#p~bL"
    },
    "lines": {
      "1598630294": {
        "id": "1598630294",
        "secret": "a7654d015051187573277b0fd4f83596",
        "access_token": "ivuksgfOauBG2do9PtjvPEF7BJqawfCTH7nFqqmoZJa71cL3XPZ2zCZqA28PwzO7ao7Mpu7FQIunMmPZe1BEEyDMMfScaZssz5Oa5eYZZNo79zMlLIrytf5L+ALIIt4Wy7ihcpgbVLdn67Pfnolq1gdB04t89/1O/w1cDnyilFU=",
        "description": "Banana (Tong)"
      }
    }
  },
  "production": {
    "env": "production",
    "instance": "instance2"
  }
}
console.log(config.development.env);

export const nice_rpa = functions
  .runWith({memory: '2GB', timeoutSeconds: 60})
  .region('asia-northeast1')
  .https.onRequest(new App(config.development).app);

// export const nice_zfm = functions
//   .runWith({memory: '2GB', timeoutSeconds: 60})
//   .region('asia-northeast1')
//   .https.onRequest(new App(config.production).app);
