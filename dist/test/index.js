"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
// import { Buffer } from 'buffer-from';
const encrypt_1 = require("../services/encrypt");
const post = (opts) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        request(opts, (err, _res, body) => {
            if (err)
                reject(err);
            return resolve(body);
        });
    });
});
// const config = {
//   "encryptUId": {
//     "algorithm": "aes-256-ctr",
//     "password": "krG59$V5BX"
//   }
// }
const config = require("../config.json");
const run = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const opts = {
            url: 'http://localhost:3005/multicast',
            method: 'POST',
            json: true,
            headers: { 'Authorization': 'Basic ' + new Buffer('nicemulticast:N7w#p~bL').toString('base64') },
            body: [
                {
                    channelid: '1598630294',
                    uid: [
                        yield encrypt_1.encrypt(config, 'Ub216d87fb2ef4f21b60464b3e694aee9'),
                    ],
                    messages: [
                        { type: 'text', text: '(づ｡◕‿‿◕｡)づ 01' }
                    ]
                }
            ]
        };
        const data = yield post(opts);
        console.log(JSON.stringify(data));
    }
    catch (e) {
        console.error('post', e.message);
    }
});
run();
//# sourceMappingURL=index.js.map