import { UserService } from './../../services/user.service';
import { InvitationService } from '../../services/InvitationService';
import { InvitationDetails } from './InvitationDetails';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import ImageEditor from 'tui-image-editor';
import { en } from '../image-editor/en';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { EncryptionService } from 'src/app/services/encryption.service';
import { Storage } from '@ionic/storage';
// this imports for the alert in back-button
import {Router} from '@angular/router';
import { SocialSharePage } from 'src/app/social-share/social-share.page';

@Component({
  selector: 'app-image-editor',
  templateUrl: './image-editor.page.html',
  styleUrls: ['./image-editor.page.scss'],
  styles:[ `.hidden{
    display:none;
} `]
})
export class ImageEditorPage implements OnInit {
  imgSrc: any;
  locale_ar: any = en;
  TUI_selectedItem: any;
  TUI_selectedFont: string;
  imageEditor: any;
  qrvalue: any;
  qrcode: any;
  showModal: Boolean = false;
  qrDetails: InvitationDetails = new InvitationDetails();
  private userProfile: AngularFirestoreDocument<any>;
  public iconColor: string = '#000000';
  addQrBtn = '<button id="tui-image-editor-addQr-btn">Add QR</button>';
  editBtn = `<button id="tui-image-editor-edit-btn">Edit QR</button>`;
  shareBtn = `<li tooltip-content="Share" class="tie-btn-shareAll tui-image-editor-item help">
              <img src="assets/icon/icons8-share.svg" class="social-share-btn" width = 20px height = 20px />
              </li>`;
  QRIconId = '';
  userId = '';
  constructor(
    private firestore: AngularFirestore,
    private userService: UserService,
    private fireAuth: AngularFireAuth,
    private modalCtrl: ModalController,
    private encryptionService: EncryptionService,
    private alertCtrl: AlertController,
    private meta: Meta,
    private qrServices: InvitationService,
    private route: ActivatedRoute,
    public storage: Storage ,
    public alertController: AlertController,
    private _Router:Router,
    private toastCtrl:ToastController
  ) 
  {
    this.meta.addTag({ name: 'viewport', content: 'width=device-width, user-scalable=no' });
    this.route.params.subscribe(params => {
      this.imgSrc = params['imageSrc'];
    });
    this.storage.get('userId').then((val)=>{
      this.userId = val;
    });
  }

  ngOnInit() {
    var locale_ar = en;
    this.imageEditor = new ImageEditor(document.querySelector('.tui-image-editor'), {
      usageStatistics: false,
      includeUI: {
        loadImage: {
          // path: this.image,
          path: '../../../' + this.imgSrc,
          name: 'Invitation Image',
        },
        menu: ['resize', 'crop', 'flip', 'rotate', 'text', 'filter', 'shape', 'icon'],
        initMenu: '',
        menuBarPosition: 'bottom',
      },
      cssMaxWidth: document.documentElement.clientWidth,
      cssMaxHeight: document.documentElement.clientHeight,
      selectionStyle: {
        cornerSize: 10,
        rotatingPointOffset: 40
      }
    });

    // Load sample image
    this.imageEditor.loadImageFromURL('img/sampleImage.jpg', 'SampleImage').then(() => {
      this.imageEditor.clearUndoStack();
    });

    //Font select list
    //--------------------------------------
    //Any installed web font from Google will work: https://fonts.google.com/
    let fontArray = ["Sakkal Majalla", "Akhbar MT", "Aldhabi", "Simple Indust Outline", "Cairo", "Dubai", "DecoType Naskh"
      , "Arial", "Arial Black", "Caveat", "Comic Sans MS", "Courier New", "Georgia1", "Impact", "Lobster Two",
      "Lucida Console", "Luckiest Guy", "Open Sans", "Pacifico", "Palatino Linotype", "Press Start 2P", "Roboto",
      "Tahoma", "Tangerine", "Times New Roman", "Tourney", "Ultra", "Verdana", "Symbol", "Webdings", "Wingdings"
    ];

    let fontSelectHTML = '<div class="center">\n <select #fontselect class="center form-select font-selector">';
    for (let i = 0; i < fontArray.length; i++) {
      let selected = '';
      if (i == 0) {
        selected = 'selected';
      }
      fontSelectHTML += '<option style="font-family:' + fontArray[i] + ';" value="' + fontArray[i] + '" ' + selected + '>' + fontArray[i] + '</option>';
    }
    fontSelectHTML += '</select></div>\n \n <div></div>  <div></div>';

    let textMenuAlign = document.querySelector('.tui-image-editor-menu-text .tie-text-align-button');
    textMenuAlign.insertAdjacentHTML('afterbegin', fontSelectHTML);

    document.querySelector('.font-selector').addEventListener('change', () =>
      this.TUI_updateFontOnText(document.querySelector<HTMLInputElement>('.font-selector').value)
    );
    //-------------------------------------
    //ON TUI objectActivated
    this.imageEditor.on('objectActivated', props => {
      this.TUI_selectedItem = props;
      this.TUI_updateFontSelected(props);
    });


    document.querySelector('.tui-image-editor-header-buttons .tui-image-editor-download-btn').insertAdjacentHTML('afterend', this.addQrBtn);
    
    
    
    document.querySelector('.tui-image-editor-header-buttons .tui-image-editor-load-btn').closest('div').hidden = true ; //.classList.add('social-share');

    document.querySelector('.tui-image-editor-container .tie-btn-deleteAll').insertAdjacentHTML('afterend', this.shareBtn);

    document.querySelector('.social-share-btn').addEventListener('click', async (e) => {
      await this.showShareOptions();
    });

    document.querySelector('.tui-image-editor-container #tui-image-editor-addQr-btn').addEventListener('click', async (e) => {
      if(this.storage.get['userAuth']=='true'){
        await this.presentAlertConfirm();
        await this.checkElement('#qrcode > svg > path:nth-child(2)') //use whichever selector you want
          .then(async (element) => {
            var iconAdded = await this.addQRIcon();
            if (iconAdded) {
              await this.addEditButton();
  
            }
          });
      }else{
        this.presentToast('Please sign in to add QR to invitation','warning')
      }
    });
    document.querySelector('.tui-image-editor-help-menu').classList.remove('top');
    document.querySelector('.tui-image-editor-help-menu').classList.add('left');
    document.querySelector('.tui-image-editor-header-buttons .tui-image-editor-download-btn').insertAdjacentHTML('afterend', this.editBtn);
    document.getElementById('tui-image-editor-edit-btn').style.display = "none";
    document.querySelector('input[type="file"]').closest('div').style.display = "none";

    document.querySelectorAll('.tui-image-editor-icpartition').forEach(li=>{
      li.closest('li').style.display='none';
    });


    document.querySelector('#tui-image-editor-edit-btn').addEventListener('click', async (e) => {
      await this.presentAlertUpdate();
    });
  }

  async presentToast(message:string,type:string ) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      color:type,
    });
    toast.present();
  }


  async addEditButton() {
    document.getElementById('tui-image-editor-addQr-btn').style.display = "none";
    document.getElementById('tui-image-editor-edit-btn').style.display = "inline-block";
  }


  /********************************
   * Update font family on text layer
  *******************************/
  TUI_updateFontOnText(font: string) {

    if (font) {
      this.TUI_selectedFont = font;
    }

    if (font && this.TUI_selectedItem) {
      this.imageEditor.changeTextStyle(this.TUI_selectedItem.id, {
        fontFamily: font
      });
    }
  }

  /********************************
   * Update font selected with the fontfamily of the selected layer
  *******************************/
  TUI_updateFontSelected(layer: any) {
    if (layer.fontFamily) {
      document.querySelector<HTMLInputElement>('.font-selector').value = layer.fontFamily;
      this.TUI_selectedFont = layer.fontFamily;
    }
  }

  async presentAlertConfirm() {
    let alert = await this.alertCtrl.create({
      header: 'تفاصيل رمز QR',
      message: 'الرجاء ادخال تفاصيل الدعوة المطلوبة',
      inputs: [
        {
          name: 'EventName',
          type: 'text',
          placeholder: 'عنوان الدعوة'
        },
        {
          name: 'AttendeesAllowed',
          type: 'number',
          placeholder: 'العدد المسموح'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Register QR',
          handler: async (data: any) => {
            if (data) {
              this.qrDetails.EventName = data.EventName;
              this.qrDetails.UserId = this.userId;
              // console.log('this.qrDetails.UserId',this.userId);
              this.qrDetails.AttendeesAllowed = Number(data.AttendeesAllowed);
              this.qrvalue = await this.CreateCode(this.qrDetails);
            } else {
              // invalid login
              return false;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertUpdate() {
    var invitationDetails = await this.qrServices.getInvitationQRCode(this.qrDetails.id);
    let alert = await this.alertCtrl.create({
      header: 'تفاصيل رمز QR',
      message: 'الرجاء تعديل تفاصيل الدعوة المطلوبة',
      inputs: [
        {
          name: 'EventName',
          type: 'text',
          placeholder: 'عنوان الدعوة',
          value: invitationDetails.EventName
        },
        {
          name: 'AttendeesAllowed',
          type: 'number',
          placeholder: 'العدد المسموح',
          value: invitationDetails.AttendeesAllowed
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Update QR',
          handler: async (data: any) => {
            if (data) {
              this.qrDetails = invitationDetails;
              this.qrDetails.EventName = data.EventName;
              this.qrDetails.AttendeesAllowed = Number(data.AttendeesAllowed);
              this.qrvalue = await this.qrServices.UpdateInvitationQRCodeInDb(this.qrDetails);
            } else {
              return false;
            }
          }
        }
      ]
    });
    await alert.present();
  }


  async CreateCode(data: InvitationDetails) {
    let details = await this.qrServices.InsertInvitationQRCodeInDb(data);
    this.qrDetails.id = await this.encryptionService.Decrypt('' + details);
    return details;
  }
  async rafAsync() {
    return new Promise(resolve => {
      requestAnimationFrame(resolve); //faster than set time out
    });
  }


  async checkElement(selector) {
    let querySelector = null;
    while (querySelector === null) {
      await this.rafAsync();
      querySelector = document.querySelector("#qrcode > svg > path:nth-child(2)");
    }
    return querySelector;
  }

  async registerIcon(icon: any) {
    this.imageEditor.registerIcons({
      customQR: '' + icon,
    });
    this.imageEditor.addIcon('customQR',
      {
        fill: 'transparent',
        stroke: this.iconColor,
        strokeWidth: 1,
        left: 300,
        top: 100,
        margin: 0,
      });
    return true;
  }

  async addQRIcon() {
    // do work here
    var icon = document.querySelector("#qrcode > svg > path:nth-child(2)").getAttribute('d');
    var value = await this.registerIcon(icon);
    return value;
  }


  async showShareOptions() {
    const modal = await this.modalCtrl.create({
      component: SocialSharePage,
      cssClass: 'backTransparent',
      backdropDismiss: true,
      showBackdrop: true,
      swipeToClose:true,
      keyboardClose:true,
    });
    
    return modal.present();
  }


  async confirmMovingBack() {
    const alert = await this.alertController.create({
        header: 'Attention !! تنبيه',
        message: 'You will lose all your updating if you are leaving without download this image ....في حال لم تقم بتنزيل الصورة فإنك ستفقد كل التغييرات بمجرد مغادرتك الصفحة',
        buttons: [
          {
            text: 'إلغاء',
            role: 'cancel',
            cssClass: 'secondary',
            //side:'start',
            //icon:'open-outline',
            handler: () => {}
          },
         {
            text: 'مـوافق',
            handler: () => {
              this._Router.navigate(['/beginning']); 
            }
          }
        ]

      });
  
      await alert.present();
    }

}
