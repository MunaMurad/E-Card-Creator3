import { Component, OnInit } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@Component({
  selector: 'app-qr-modal',
  templateUrl: './qr-modal.page.html',
  styleUrls: ['./qr-modal.page.scss'],
})
export class QrModalPage implements OnInit {

  constructor() { }

  qrvalue = 'embedded qr';

  ngOnInit() {
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  download() {
    const qrcode = document.getElementById('qrcode');
    let imageData= this.getBase64Image(qrcode.firstChild.firstChild);
    return imageData;
    // doc.addImage(imageData, "JPG", 10, 10);

    // doc.save('FirstPdf.pdf');
  }

}
