import { element } from 'protractor';
import { QrService } from './../../services/qr.service';
import { InvitationDetails } from './InvitationDetails';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ModalController, AlertController } from '@ionic/angular';
import ImageEditor from 'tui-image-editor';
import FileSaver from "file-saver";
import whiteTheme from '../../../assets/js/white-theme.js';
import {en} from '../image-editor/en';
// Receive Parameter
import { ActivatedRoute } from '@angular/router';
import { dataUrlToBlob } from './utils';
import { ModalPage } from 'src/app/ui-components/modal/modal.page.js';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ModalContentPage } from 'src/app/ui-components/modal-content/modal-content.page';
import { QRCodeSVGModule } from 'ngx-qrcode-svg';

@Component({
    selector: 'app-image-editor',
    templateUrl: './image-editor.page.html',
    styleUrls: ['./image-editor.page.scss'],
})
export class ImageEditorPage implements OnInit {
    imgSrc : any;
    locale_ar: any = en;
    TUI_selectedItem: any;
    TUI_selectedFont: string;
    imageEditor : any;
    qrvalue:any;
    qrcode:any;
    showModal:Boolean = false;
    qrDetails:InvitationDetails = new InvitationDetails();
    private userProfile: AngularFirestoreDocument<any>;
    public iconColor: string = '#000000';

    constructor(
        private firestore: AngularFirestore,
        private fireAuth:AngularFireAuth,
        private modalCtrl: ModalController,
        private alertCtrl : AlertController,
        private meta: Meta,
        private qrServices: QrService,
        private route: ActivatedRoute
    ) {
        this.meta.addTag({ name: 'viewport', content: 'width=device-width, user-scalable=no' });
        this.route.params.subscribe(params => {
            this.imgSrc = params['imageSrc']; 
       });
    }

    ngOnInit() {
        var locale_ar = en;
        this.imageEditor = new ImageEditor(document.querySelector('.tui-image-editor'), {
            usageStatistics: false,
            includeUI: {
                loadImage: {
                    // path: this.image,
                    path: '../../../'+ this.imgSrc,
                    name: 'SampleImage',
                },
                // menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter'],
                menu: ['resize','crop', 'flip', 'rotate', 'text', 'filter','shape','icon'],
                initMenu: '',
                menuBarPosition: 'right',
                //locale : en
            },
            //  selectionStyle: {
            //      cornerSize: 20,
            //      rotatingPointOffset: 70
            //  },
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
      let fontArray = ["Sakkal Majalla","Akhbar MT","Aldhabi","Simple Indust Outline","Cairo","Dubai","DecoType Naskh"
                        ,"Arial", "Arial Black", "Caveat", "Comic Sans MS", "Courier New","Georgia1","Impact","Lobster Two", 
                        "Lucida Console","Luckiest Guy", "Open Sans","Pacifico", "Palatino Linotype","Press Start 2P", "Roboto", 
                        "Tahoma", "Tangerine", "Times New Roman","Tourney","Ultra", "Verdana","Symbol","Webdings","Wingdings"
                    ];

      let fontSelectHTML = '<div class="center">\n <select #fontselect class="center form-select font-selector">';
      for (let i = 0; i < fontArray.length; i++) {
        let selected = '';
        if(i == 0){
          selected = 'selected';
        }
        fontSelectHTML += '<option style="font-family:'+fontArray[i]+';" value="'+fontArray[i]+'" '+selected+'>'+fontArray[i]+'</option>';
      }
      fontSelectHTML +=  '</select></div>\n \n <div></div>  <div></div>';

      let textMenuAlign = document.querySelector('.tui-image-editor-menu-text .tie-text-align-button');
      textMenuAlign.insertAdjacentHTML('afterbegin', fontSelectHTML);

      document.querySelector('.font-selector').addEventListener('change', () =>
        this.TUI_updateFontOnText(document.querySelector<HTMLInputElement>('.font-selector').value)
        );
        //-------------------------------------
        //ON TUI objectActivated
        //   Keep track of active/selected item
        this.imageEditor.on('objectActivated', props => {
            this.TUI_selectedItem = props;
            this.TUI_updateFontSelected(props);
        });

        var saveBtn = '<button class="tui-image-editor-save-btn" >Add QR</button>';
        //document.querySelector('.tui-image-editor-header-buttons .tui-image-editor-download-btn').displa.visibility = "visible";
        document.querySelector('.tui-image-editor-header-buttons .tui-image-editor-download-btn').insertAdjacentHTML('afterend', saveBtn);
        //replaceWith('')


        document.querySelector('.tui-image-editor-container .tui-image-editor-save-btn').addEventListener('click',async (e)=>{
            await this.presentAlertConfirm();
            await this.checkElement('#qrcode > svg > path:nth-child(2)') //use whichever selector you want
            .then((element) => {
                // console.info('await this.checkElement("#qrcode > svg > path:nth-child(1)"') //use whichever selector you want);
                this.addQRIcon();
            });
        });
      
    }
 
    /********************************
     * Update font family on text layer
    *******************************/
    TUI_updateFontOnText(font:string) {

        if(font){
        this.TUI_selectedFont = font;
        }

        if(font && this.TUI_selectedItem){
            this.imageEditor.changeTextStyle(this.TUI_selectedItem.id, {
            fontFamily: font
        });
        }
    }

    /********************************
     * Update font selected with the fontfamily of the selected layer
    *******************************/
    TUI_updateFontSelected(layer:any) {
      if(layer.fontFamily){
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
                type:'text',
                placeholder: 'عنوان الدعوة'
              },
              {
                name: 'AttendeesAllowed',
                type:'number',
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
                handler:async (data:any) => {
                  if (data) {
                        this.qrDetails.EventName = data.EventName;
                        this.qrDetails.AttendeesAllowed = Number(data.AttendeesAllowed);
                        this.qrvalue = await this.CreateCode(this.qrDetails);
                        // await this.addQRIcon();
                    // logged in!
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

    async CreateCode(data:InvitationDetails){
        let details = this.qrServices.InsertInvitationQRCodeInDb(data);
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

    async registerIcon(icon:any){
            this.imageEditor.registerIcons({
               customQR: '' + icon,
            });
        return this.imageEditor.addIcon('customQR',{
            fill: 'transparent',
            stroke: this.iconColor,
            strokeWidth: 1,
            left: 100,
            top: 100
        })
    }

    async addQRIcon() {
         // do work here
         var icon = document.querySelector("#qrcode > svg > path:nth-child(2)").getAttribute('d');
         console.log(document.querySelector("#qrcode > svg > path:nth-child(2)").getAttribute('d'))
         var result = await this.registerIcon(icon);
         const iconObj = {};
         iconObj['qr'] = icon;
    }


    // //******** Middle ***********//
    // async openMiddleModal() {
    //     console.log("openMiddleModel"+this.qrvalue);
    //   await this.modalCtrl.create({
    //     component: ModalContentPage,
    //     cssClass: 'from-middle-modal',
    //     componentProps: {
    //       qrcode: ''+this.qrvalue
    //       // index: image
    //     }
    //   }).then(modal => {
    //     modal.present();
    //   });
    // }
    

    
}
