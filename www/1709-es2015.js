"use strict";(self.webpackChunkionic5fullapp_final=self.webpackChunkionic5fullapp_final||[]).push([[1709],{41709:function(i,t,o){o.r(t),o.d(t,{ion_img:function(){return s}});var e=o(23150),n=o(97585);const s=class{constructor(i){(0,e.r)(this,i),this.ionImgWillLoad=(0,e.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,e.e)(this,"ionImgDidLoad",7),this.ionError=(0,e.e)(this,"ionError",7),this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()}}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(i=>{i[i.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){return(0,e.h)(e.H,{class:(0,n.b)(this)},(0,e.h)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError,part:"image"}))}get el(){return(0,e.i)(this)}static get watchers(){return{src:["srcChanged"]}}};s.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);