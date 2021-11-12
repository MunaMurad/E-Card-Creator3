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

    Encrypt(data: string ){
        console.log('Encrypt Data:' , data);
        this.encryptedQr = cryptoJs.AES.encrypt(''+data,this.secretKey);
        return this.encryptedQr;
    };

    Decrypt(data: any ): InvitationDetails{
        let decryptedData = cryptoJs.AES.Decrypt(data,this.secretKey);
        var obj = JSON.parse(decryptedData.toString(cryptoJs.enc.Utf8));
        alert(obj);

        return obj;
    };
}
