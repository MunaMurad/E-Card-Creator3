import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.page.html',
  styleUrls: ['./social-share.page.scss'],
})
export class SocialSharePage implements OnInit {

  public sharingList = environment.socialShareOption;
  loader: any = null;
  sharingText = 'You can download our app from playstore or use this link to download the app. And you can share awesome coupons with your loved once, Thank you';
  emailSubject = 'Download Apps'
  recipent = ['recipient@example.org'];
  sharingImage = ['https://store.enappd.com/wp-content/uploads/2019/03/700x700_2-1-280x280.jpg'];
  sharingUrl = 'https://store.enappd.com';
  constructor(
    private modal: ModalController,
    private socialSharing: SocialSharing,
  ) { }

  ngOnInit() {

    document.querySelector('.mainContent').addEventListener('click', async (e) => {
      this.closeModal();
    });
  }

  closeModal() {
    this.modal.dismiss();
  }

  async shareVia(shareData) {
    if (shareData.shareType === 'viaEmail') {
      this.shareViaEmail();
    } else {
      this.socialSharing[`${shareData.shareType}`](this.sharingText, this.sharingImage, this.sharingUrl)
      .then((res) => {
        this.modal.dismiss();
      })
      .catch((e) => {
        console.log('error', e)
        this.modal.dismiss();
      });
    }
  }
  shareViaEmail() {
    this.socialSharing.canShareViaEmail().then((res) => {
      this.socialSharing.shareViaEmail(this.sharingText, this.emailSubject, this.recipent, null, null, this.sharingImage).then(() => {
        this.modal.dismiss();
      })
    }).catch((e) => {
      // Error!
    });
  }
}
