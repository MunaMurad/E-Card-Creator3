import { InvitationDetails } from '../congratspages/image-editor/InvitationDetails';
import * as cryptoJs from 'crypto-js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class EncryptionService {
    encryptedQr: string = '';
    secretKey: string = 'ECardProject';
    constructor() {}

      //*******************************//
     //****** Get all places *********//
    //*******************************//

    async Encrypt(data: string ){
        this.encryptedQr = await cryptoJs.AES.encrypt(''+data,this.secretKey);
        return this.encryptedQr;
    };

    async Decrypt(data: string ){
        let decryptedData = cryptoJs.AES.decrypt(data,this.secretKey).toString(cryptoJs.enc.Utf8);
        return decryptedData;
    };
}
