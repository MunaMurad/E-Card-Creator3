import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-colors',
  templateUrl: './ui-colors.page.html',
  styleUrls: ['./ui-colors.page.scss'],
})
export class UiColorsPage implements OnInit {
 
  mdColor:any[] = [];
  iosColor:any[] = [];
  flatColor:any[] = [];
  solarColor:any[] = [];
  tangoColor:any[] = [];

  miscColor:any[] = [];
  themeView: string = "md";
  public mycolor: string;
  constructor() {
    this.mycolor = 'chameleon';
         
    this.mdColor = [
     {colorName:'purple',colorCode:'#9c27b0'},
     {colorName:'deeppurple',colorCode:'#673ab7'},
     {colorName:'indigo',colorCode:'#3f51b5'},
     {colorName:'darkblue',colorCode:'#0034a7'},
     {colorName:'lightblue',colorCode:'#03a9f4'},
     {colorName:'cyan',colorCode:'#00bcd4'},
     {colorName:'teal',colorCode:'#00bcd4'},
     {colorName:'green',colorCode:'#4caf50'},
     {colorName:'lightgreen',colorCode:'#8dc34b'},
     {colorName:'lime',colorCode:'#cddc39'},
     {colorName:'lightyellow',colorCode:'#ffeb3b'},
     {colorName:'greenwild',colorCode:'#4caf50'},
     {colorName:'amber',colorCode:'#ffc107'},       
     {colorName:'deeporange',colorCode:'#ff5722'},
     {colorName:'brown',colorCode:'#795548'},
     {colorName:'gray',colorCode:'#9e9e9e'},
     {colorName:'bluegray',colorCode:'#607d8b'},
     {colorName:'black',colorCode:'#000000'},       
     {colorName:'sunflower',colorCode:'#607f1c40fd8b'},
     {colorName:'white',colorCode:'#ffffff'}
   ];       
   this.iosColor = [
     {colorName:'iosgreen',colorCode:'#34c759'},
     {colorName:'iospurple',colorCode:'#5856d6'},
     {colorName:'orange',colorCode:'#ff9500'},
     {colorName:'pink',colorCode:'#ff2d55'},
     {colorName:'blue',colorCode:'#007aff'},
     {colorName:'yellow',colorCode:'#ffcc00'},
     {colorName:'red',colorCode:'#ff3b30'}
    ];      
   this.flatColor = [
    {colorName:'darkgray',colorCode:'#454545'},
    {colorName:'lightgray',colorCode:'#dddddd'},
    {colorName:'slightgray',colorCode:'#eeeeee'},
     {colorName:'turquoise',colorCode:'#1abc9c'},
     {colorName:'emerald',colorCode:'#2ecc71'},
     {colorName:'river',colorCode:'#3498db'},
     {colorName:'amethyst',colorCode:'#9b59b6'},
     {colorName:'asphalt',colorCode:'#34495e'},
     {colorName:'greensea',colorCode:'#16a085'},
     {colorName:'wisteria',colorCode:'#8e44ad'},
     {colorName:'midblue',colorCode:'#2c3e50'},
  
     {colorName:'carrot',colorCode:'#e67e22'},
     {colorName:'alizarin',colorCode:'#e74c3c'},
     {colorName:'cloud',colorCode:'#ecf0f1'},
     {colorName:'concrete',colorCode:'#95a5a6'},
     {colorName:'pumpkin',colorCode:'#d35400'},
     {colorName:'alizarin',colorCode:'#e74c3c'},
     {colorName:'pomegrenade',colorCode:'#c0392b'},

     {colorName:'silver',colorCode:'#bdc3c7'},
     {colorName:'asbesthos',colorCode:'#7f8c8d'},
     {colorName:'butter',colorCode:'#edd400'},
     {colorName:'chameleon',colorCode:'#73d216'},
     {colorName:'scarletred',colorCode:'#cc0000'}
   ];   


   this.miscColor = [

     {colorName:'favorite',colorCode:'#69bb7b'},
     {colorName:'facebook',colorCode:'#3b5998'},
     {colorName:'vimeo',colorCode:'#23b6ea'},
     {colorName:'instagram',colorCode:'#5956d8'},
     {colorName:'twitter',colorCode:'#1da1f4'},
     {colorName:'primary',colorCode:'#3880ff'},
     {colorName:'secondary',colorCode:'#3dc2ff'},
     {colorName:'tertiary',colorCode:'#5260ff'},
     {colorName:'success',colorCode:'#2dd36f'},
     {colorName:'warning',colorCode:'#ffc409'},
     {colorName:'danger',colorCode:'#eb445a'},
     {colorName:'dark',colorCode:'#222428'},
     {colorName:'medium',colorCode:'#92949c'},
     {colorName:'light',colorCode:'#f4f5f8'}
   ];   



   // this.tangoColor = [
   //   {colorName:'tango-aluminium',colorCode:'#d3d7cf'},
   //   {colorName:'tango-butter',colorCode:'#edd400'},
   //   {colorName:'tango-chameleon',colorCode:'#73d216'},
   //   {colorName:'tango-orange',colorCode:'#f57900'},
   //   {colorName:'tango-chocolate',colorCode:'#c17d11'},
   //   {colorName:'tango-sky-blue',colorCode:'#3465a4'},
   //   {colorName:'tango-plum',colorCode:'#75507b'},
   //   {colorName:'tango-slate',colorCode:'#555753'},
   //   {colorName:'tango-scarlet-red',colorCode:'#cc0000'}
   // ];
     
}
   
getColorBase(colorBlock: Element): string {
  const color = window.getComputedStyle(colorBlock).getPropertyValue('--ion-color-base');
  return color;
}

changeColor(color:string) {
  this.mycolor = color;
}

ngOnInit() {
}

}
