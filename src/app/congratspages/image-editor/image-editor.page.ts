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
        const imageEditor = new ImageEditor(document.querySelector('.tui-image-editor'), {
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
        imageEditor.loadImageFromURL('img/sampleImage.jpg', 'SampleImage').then(() => {
            imageEditor.clearUndoStack();
        });
    }

    
}
