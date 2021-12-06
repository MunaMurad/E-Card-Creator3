// import {EmailComposer, EmailComposerOptions} from "@ionic-native/email-composer/ngx";
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.page.html',
  styleUrls: ['./social-share.page.scss'],
})
export class SocialSharePage implements OnInit {
  @Input() imageToShare: any;
  public sharingList = environment.socialShareOption;
  loader: any = null;
  sharingImage:any;
  sharingText = 'An Invitation has been sent to you!';
  emailSubject = 'Invitation Image'
  recipent = [''];
  sharingUrl = 'https://store.enappd.com';
  constructor(
    private modal: ModalController,
    private socialSharing: SocialSharing,
    // private emailComposer: EmailComposer
    ) { 
      this.sharingImage = [this.imageToShare];
    }
    

  ngOnInit() {

    document.querySelector('.mainContent').addEventListener('click', async (e) => {
      this.closeModal();
    });
  }

  closeModal() {
    this.modal.dismiss();
  }

  async shareVia(shareData) {
    console.log(shareData);
    if (shareData.shareType === 'viaEmail') {
      this.sendEmail();
    } else {
      this.socialSharing[`${shareData.shareType}`](this.sharingText, this.sharingImage, null)
      .then((res) => {
        this.modal.dismiss();
      })
      .catch((e) => {
        console.log('error', e)
        this.modal.dismiss();
      });
    }
  }

  sendEmail() {
    let email = {
      to: '',
      cc: '',
      attachments: [
        this.sharingImage
      ],
      subject: "New Invitation",
      body: "Hey, You've received an invitation ?",
      isHtml: true
    };
 
    // this.emailComposer.open(email);
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
