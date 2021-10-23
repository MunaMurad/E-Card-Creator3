import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import ImageEditor from 'tui-image-editor';
import FileSaver from "file-saver";
import whiteTheme from '../../../assets/js/white-theme.js';
import {en} from '../image-editor/en';
// Receive Parameter
import { ActivatedRoute } from '@angular/router';

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
    constructor(
        private modalCtrl: ModalController,
        private meta: Meta,
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
                menu: ['resize','crop', 'flip', 'rotate', 'text', 'filter'],
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
        this.TUI_updateFontOnText(document.querySelector<HTMLInputElement>('.font-selector').value));
      //-------------------------------------
               //ON TUI objectActivated
    //   Keep track of active/selected item
    this.imageEditor.on('objectActivated', props => {
        this.TUI_selectedItem = props;
        this.TUI_updateFontSelected(props);
        console.log('TUI_selectedItem', props);
      });
  
    }
    /********************************
     * Update font familty on text layer
    *******************************/
    TUI_updateFontOnText(font:string) {
        console.log("TUI_updateFontOnText", font, this.TUI_selectedItem.id);

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
      console.log("TUI_updateFontSelected", layer);
  
      if(layer.fontFamily){
        document.querySelector<HTMLInputElement>('.font-selector').value = layer.fontFamily;
        this.TUI_selectedFont = layer.fontFamily;
      }
    }

  
}
