
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './services/user.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'intro-page',
    pathMatch: 'full'
  },
  {
    // sidemenu with tabs
    path: 'sidemenu',
    loadChildren: () => import('./sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },

 


 


  //***********************************//
  //********** UI components **********//
  //***********************************//


  
  {
    path: 'animation',
    loadChildren: () => import('./ui-components/animation/animation.module').then( m => m.AnimationPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./ui-components/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./ui-components/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'dialog',
    loadChildren: () => import('./ui-components/dialog/dialog.module').then( m => m.DialogPageModule)
  },




  {
    path: 'header-shrinking',
    loadChildren: () => import('./ui-components/header-shrinking/header-shrinking.module').then( m => m.HeaderShrinkingPageModule)
  },
  {
    path: 'header-fading',
    loadChildren: () => import('./ui-components/header-fading/header-fading.module').then( m => m.HeaderFadingPageModule)
  },
  {
    path: 'header-title',
    loadChildren: () => import('./ui-components/header-title/header-title.module').then( m => m.HeaderTitlePageModule)
  },
  {
    path: 'header-transparent',
    loadChildren: () => import('./ui-components/header-transparent/header-transparent.module').then( m => m.HeaderTransparentPageModule)
  },




  {
    path: 'footer-shrinking',
    loadChildren: () => import('./ui-components/footer-shrinking/footer-shrinking.module').then( m => m.FooterShrinkingPageModule)
  },


  {
    path: 'horizontal-card',
    loadChildren: () => import('./ui-components/horizontal-card/horizontal-card.module').then( m => m.HorizontalCardPageModule)
  },
  {
    path: 'vertical-card',
    loadChildren: () => import('./ui-components/vertical-card/vertical-card.module').then( m => m.VerticalCardPageModule)
  },



  {
    path: 'grid',
    loadChildren: () => import('./ui-components/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./ui-components/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./ui-components/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'skeleton',
    loadChildren: () => import('./ui-components/skeleton/skeleton.module').then( m => m.SkeletonPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./ui-components/segment/segment.module').then( m => m.SegmentPageModule)
  },
  
  {
    path: 'toolbar',
    loadChildren: () => import('./ui-components/toolbar/toolbar.module').then( m => m.ToolbarPageModule)
  },




  //**********************************************//
  //********* Firebase authentication ************//
  //**********************************************//

  {
    path: 'fire-signin',
    loadChildren: () => import('./firebase-auth/fire-signin/fire-signin.module').then( m => m.FireSigninPageModule)
  },
  {
    path: 'fire-signup',
    loadChildren: () => import('./firebase-auth/fire-signup/fire-signup.module').then( m => m.FireSignupPageModule)
  },
  {
    path: 'fire-profile',
    loadChildren: () => import('./firebase-auth/fire-profile/fire-profile.module').then( m => m.FireProfilePageModule),
    canActivate: [UserGuard]
  },


  
  {
    path: 'select',
    loadChildren: () => import('./ui-components/select/select.module').then( m => m.SelectPageModule)
  },

  {
    path: 'refresher',
    loadChildren: () => import('./ui-components/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./ui-components/range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./ui-components/radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./ui-components/progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./ui-components/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'modal-content',
    loadChildren: () => import('./ui-components/modal-content/modal-content.module').then( m => m.ModalContentPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./ui-components/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
 
  {
    path: 'list-item',
    loadChildren: () => import('./ui-components/list-item/list-item.module').then( m => m.ListItemPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./ui-components/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./ui-components/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./ui-components/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./ui-components/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'icon',
    loadChildren: () => import('./ui-components/icon/icon.module').then( m => m.IconPageModule)
  },
  
  {
    path: 'fire-forgot',
    loadChildren: () => import('./firebase-auth/fire-forgot/fire-forgot.module').then( m => m.FireForgotPageModule)
  },

 
  {
    path: 'image-editor',
    loadChildren: () => import('./congratspages/image-editor/image-editor.module').then( m => m.ImageEditorPageModule)
  },

  {
    path: '',
    redirectTo: 'intro-page',
    pathMatch: 'full'
  },
  {
    // sidemenu with tabs
    path: 'sidemenu',
    loadChildren: () => import('./sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },




  
 

 
 
 


  //*****************************//
  //********** Travel  **********//
  //*****************************//

 




 








  //***********************************//
  //********** UI components **********//
  //***********************************//


  
  {
    path: 'animation',
    loadChildren: () => import('./ui-components/animation/animation.module').then( m => m.AnimationPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./ui-components/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./ui-components/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'dialog',
    loadChildren: () => import('./ui-components/dialog/dialog.module').then( m => m.DialogPageModule)
  },




  {
    path: 'header-shrinking',
    loadChildren: () => import('./ui-components/header-shrinking/header-shrinking.module').then( m => m.HeaderShrinkingPageModule)
  },
  {
    path: 'header-fading',
    loadChildren: () => import('./ui-components/header-fading/header-fading.module').then( m => m.HeaderFadingPageModule)
  },
  {
    path: 'header-title',
    loadChildren: () => import('./ui-components/header-title/header-title.module').then( m => m.HeaderTitlePageModule)
  },
  {
    path: 'header-transparent',
    loadChildren: () => import('./ui-components/header-transparent/header-transparent.module').then( m => m.HeaderTransparentPageModule)
  },




  {
    path: 'footer-shrinking',
    loadChildren: () => import('./ui-components/footer-shrinking/footer-shrinking.module').then( m => m.FooterShrinkingPageModule)
  },


  {
    path: 'horizontal-card',
    loadChildren: () => import('./ui-components/horizontal-card/horizontal-card.module').then( m => m.HorizontalCardPageModule)
  },
  {
    path: 'vertical-card',
    loadChildren: () => import('./ui-components/vertical-card/vertical-card.module').then( m => m.VerticalCardPageModule)
  },



  {
    path: 'grid',
    loadChildren: () => import('./ui-components/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./ui-components/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./ui-components/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'skeleton',
    loadChildren: () => import('./ui-components/skeleton/skeleton.module').then( m => m.SkeletonPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./ui-components/segment/segment.module').then( m => m.SegmentPageModule)
  },
  
  {
    path: 'toolbar',
    loadChildren: () => import('./ui-components/toolbar/toolbar.module').then( m => m.ToolbarPageModule)
  },




  //**********************************************//
  //********* Firebase authentication ************//
  //**********************************************//

  {
    path: 'fire-signin',
    loadChildren: () => import('./firebase-auth/fire-signin/fire-signin.module').then( m => m.FireSigninPageModule)
  },
  {
    path: 'fire-signup',
    loadChildren: () => import('./firebase-auth/fire-signup/fire-signup.module').then( m => m.FireSignupPageModule)
  },
  {
    path: 'fire-profile',
    loadChildren: () => import('./firebase-auth/fire-profile/fire-profile.module').then( m => m.FireProfilePageModule),
    canActivate: [UserGuard]
  },


  
  {
    path: 'select',
    loadChildren: () => import('./ui-components/select/select.module').then( m => m.SelectPageModule)
  },

  {
    path: 'refresher',
    loadChildren: () => import('./ui-components/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./ui-components/range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'radio',
    loadChildren: () => import('./ui-components/radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./ui-components/progress-bar/progress-bar.module').then( m => m.ProgressBarPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./ui-components/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'modal-content',
    loadChildren: () => import('./ui-components/modal-content/modal-content.module').then( m => m.ModalContentPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./ui-components/datetime/datetime.module').then( m => m.DatetimePageModule)
  },


  {
    path: 'list-item',
    loadChildren: () => import('./ui-components/list-item/list-item.module').then( m => m.ListItemPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./ui-components/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'badge',
    loadChildren: () => import('./ui-components/badge/badge.module').then( m => m.BadgePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./ui-components/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./ui-components/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'icon',
    loadChildren: () => import('./ui-components/icon/icon.module').then( m => m.IconPageModule)
  },
 
 
  

  {
    path: 'fire-forgot',
    loadChildren: () => import('./firebase-auth/fire-forgot/fire-forgot.module').then( m => m.FireForgotPageModule)
  },
  {
    path: 'image-editor',
    loadChildren: () => import('./congratspages/image-editor/image-editor.module').then( m => m.ImageEditorPageModule)
  },

  {
    path: 'invitation',
    loadChildren: () => import('./occasions/invitation/invitation.module').then( m => m.InvitationPageModule)
  },
  {
    path: 'congratulate',
    loadChildren: () => import('./occasions/congratulate/congratulate.module').then( m => m.CongratulatePageModule)
  },
  {
    path: 'intro-page',
    loadChildren: () => import('./intro-page/intro-page.module').then( m => m.IntroPagePageModule)
  },
  {
    path: 'sett',
    loadChildren: () => import('./about-E-card/sett/sett.module').then( m => m.SettPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./about-E-card/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'beginning',
    loadChildren: () => import('./about-E-card/beginning/beginning.module').then( m => m.BeginningPageModule)
  },
  {
    path: 'emp-wedding',
    loadChildren: () => import('./templates/empty/invt/emp-wedding/emp-wedding.module').then( m => m.EmpWeddingPageModule)
  },
  {
    path: 'emp-henna',
    loadChildren: () => import('./templates/empty/invt/emp-henna/emp-henna.module').then( m => m.EmpHennaPageModule)
  },
  {
    path: 'emp-marriage',
    loadChildren: () => import('./templates/empty/cong/emp-marriage/emp-marriage.module').then( m => m.EmpMarriagePageModule)
  },
  {
    path: 'emp-bye-singlelife',
    loadChildren: () => import('./templates/empty/invt/emp-bye-singlelife/emp-bye-singlelife.module').then( m => m.EmpByeSinglelifePageModule)
  },
  {
    path: 'emp-babyborn',
    loadChildren: () => import('./templates/empty/invt/emp-babyborn/emp-babyborn.module').then( m => m.EmpBabybornPageModule)
  },
  {
    path: 'emp-home-party',
    loadChildren: () => import('./templates/empty/invt/emp-home-party/emp-home-party.module').then( m => m.EmpHomePartyPageModule)
  },
  {
    path: 'emp-gradu',
    loadChildren: () => import('./templates/empty/invt/emp-gradu/emp-gradu.module').then( m => m.EmpGraduPageModule)
  },
  {
    path: 'emp-newbaby',
    loadChildren: () => import('./templates/empty/cong/emp-newbaby/emp-newbaby.module').then( m => m.EmpNewbabyPageModule)
  },
  {
    path: 'emp-friday',
    loadChildren: () => import('./templates/empty/cong/emp-friday/emp-friday.module').then( m => m.EmpFridayPageModule)
  },
  {
    path: 'emp-ramadan',
    loadChildren: () => import('./templates/empty/cong/emp-ramadan/emp-ramadan.module').then( m => m.EmpRamadanPageModule)
  },
  {
    path: 'emp-eid-alfitr',
    loadChildren: () => import('./templates/empty/cong/emp-eid-alfitr/emp-eid-alfitr.module').then( m => m.EmpEidAlfitrPageModule)
  },
  {
    path: 'emp-eid-aladha',
    loadChildren: () => import('./templates/empty/cong/emp-eid-aladha/emp-eid-aladha.module').then( m => m.EmpEidAladhaPageModule)
  },
  {
    path: 'emp-graduation',
    loadChildren: () => import('./templates/empty/cong/emp-graduation/emp-graduation.module').then( m => m.EmpGraduationPageModule)
  },
  {
    path: 'rtn-wedding',
    loadChildren: () => import('./templates/written/invt/rtn-wedding/rtn-wedding.module').then( m => m.RtnWeddingPageModule)
  },
  {
    path: 'rtn-henna',
    loadChildren: () => import('./templates/written/invt/rtn-henna/rtn-henna.module').then( m => m.RtnHennaPageModule)
  },
  {
    path: 'rtn-bye-singlelife',
    loadChildren: () => import('./templates/written/invt/rtn-bye-singlelife/rtn-bye-singlelife.module').then( m => m.RtnByeSinglelifePageModule)
  },
  {
    path: 'rtn-babyborn',
    loadChildren: () => import('./templates/written/invt/rtn-babyborn/rtn-babyborn.module').then( m => m.RtnBabybornPageModule)
  },
  {
    path: 'rtn-home-party',
    loadChildren: () => import('./templates/written/invt/rtn-home-party/rtn-home-party.module').then( m => m.RtnHomePartyPageModule)
  },
  {
    path: 'rtn-gradu',
    loadChildren: () => import('./templates/written/invt/rtn-gradu/rtn-gradu.module').then( m => m.RtnGraduPageModule)
  },
  {
    path: 'rtn-marriage',
    loadChildren: () => import('./templates/written/cong/rtn-marriage/rtn-marriage.module').then( m => m.RtnMarriagePageModule)
  },
  {
    path: 'rtn-engagement',
    loadChildren: () => import('./templates/written/cong/rtn-engagement/rtn-engagement.module').then( m => m.RtnEngagementPageModule)
  },
  {
    path: 'rtn-newbaby',
    loadChildren: () => import('./templates/written/cong/rtn-newbaby/rtn-newbaby.module').then( m => m.RtnNewbabyPageModule)
  },
  {
    path: 'rtn-friday',
    loadChildren: () => import('./templates/written/cong/rtn-friday/rtn-friday.module').then( m => m.RtnFridayPageModule)
  },
  {
    path: 'rtn-ramadan',
    loadChildren: () => import('./templates/written/cong/rtn-ramadan/rtn-ramadan.module').then( m => m.RtnRamadanPageModule)
  },
  {
    path: 'rtn-eid-alfitr',
    loadChildren: () => import('./templates/written/cong/rtn-eid-alfitr/rtn-eid-alfitr.module').then( m => m.RtnEidAlfitrPageModule)
  },
  {
    path: 'rtn-eid-aladha',
    loadChildren: () => import('./templates/written/cong/rtn-eid-aladha/rtn-eid-aladha.module').then( m => m.RtnEidAladhaPageModule)
  },
  {
    path: 'rtn-graduation',
    loadChildren: () => import('./templates/written/cong/rtn-graduation/rtn-graduation.module').then( m => m.RtnGraduationPageModule)
  },
  {
    path: 'qr-modal',
    loadChildren: () => import('./congratspages/qr-modal/qr-modal.module').then( m => m.QrModalPageModule)
  },
  {
    path: 'emp-engagement',
    loadChildren: () => import('./templates/empty/cong/emp-engagement/emp-engagement.module').then( m => m.EmpEngagementPageModule)
  },
  {
    path: 'social-share',
    loadChildren: () => import('./social-share/social-share.module').then( m => m.SocialSharePageModule)
  },
  {
    path: 'social-share',
    loadChildren: () => import('./social-share/social-share.module').then( m => m.SocialSharePageModule)
  },
  {
    path: 'qr-scanning',
    loadChildren: () => import('./about-E-card/qr-scanning/qr-scanning.module').then( m => m.QrScanningPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
