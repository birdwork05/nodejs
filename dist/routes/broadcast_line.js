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
const { LineClient } = require('messaging-api-line');
const decrypt_1 = require("../services/decrypt");
exports.BroadcastLine = (config, config_line, uids, messages) => __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, _reject) => __awaiter(this, void 0, void 0, function* () {
        try {
            const client = LineClient.connect(config_line.access_token, config_line.secret);
            uids.forEach((enuid) => __awaiter(this, void 0, void 0, function* () {
                const uid = yield decrypt_1.decrypt(config, enuid);
                yield client.push(uid, messages);
            }));
        }
        catch (e) {
            console.error(config.env + ':broadcast-line:push-to-line:' + JSON.stringify(messages));
        }
        return resolve();
    }));
});
//# sourceMappingURL=broadcast_line.js.map