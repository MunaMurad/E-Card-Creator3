import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './services/user.guard';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'walkthrough',
    pathMatch: 'full'
  },
  {
    // sidemenu with tabs
    path: 'sidemenu',
    loadChildren: () => import('./sidemenu/sidemenu.module').then( m => m.SidemenuPageModule)
  },



  //***************************************//
  //********** Food delivery app **********//
  //***************************************//

  {
    path: 'food',
    loadChildren: () => import('./ui-layouts/food/food-tabs/food-tabs.module').then( m => m.FoodTabsPageModule)
  },
  {
    path: 'food-home',
    loadChildren: () => import('./ui-layouts/food/food-home/food-home.module').then( m => m.FoodHomePageModule)
  },
  {
    path: 'food-category',
    loadChildren: () => import('./ui-layouts/food/food-category/food-category.module').then( m => m.FoodCategoryPageModule)
  },
  {
    path: 'food-list/:categoryId',
    loadChildren: () => import('./ui-layouts/food/food-list/food-list.module').then( m => m.FoodListPageModule)
  },
  {
    path: 'food-detail/:itemId',
    loadChildren: () => import('./ui-layouts/food/food-detail/food-detail.module').then( m => m.FoodDetailPageModule)
  },
  {
    path: 'food-cart',
    loadChildren: () => import('./ui-layouts/food/food-cart/food-cart.module').then( m => m.FoodCartPageModule)
  },

  {
    path: 'food-address-add',
    loadChildren: () => import('./ui-layouts/food/food-address-add/food-address-add.module').then( m => m.FoodAddressAddPageModule),
   //******** Prevent access to page with canActivate ******/
    canActivate: [UserGuard]
  },
  {
    path: 'food-address-edit',
    loadChildren: () => import('./ui-layouts/food/food-address-edit/food-address-edit.module').then( m => m.FoodAddressEditPageModule),
    //******** Prevent access to page with canActivate ******/
    canActivate: [UserGuard]
  },
  {
    path: 'food-checkout',
    loadChildren: () => import('./ui-layouts/food/food-checkout/food-checkout.module').then( m => m.FoodCheckoutPageModule),
    //******** Prevent access to page with canActivate ******/
    canActivate: [UserGuard]
  },
  {
    path: 'food-finish',
    loadChildren: () => import('./ui-layouts/food/food-finish/food-finish.module').then( m => m.FoodFinishPageModule),
    //******** Prevent access to page with canActivate ******/    
    canActivate: [UserGuard]
  },

  //********************************************//
  //********** Radio and music  app ************//
  //********************************************//

  {
    path: 'radio-list',
    loadChildren: () => import('./ui-layouts/radio-station/radio-list/radio-list.module').then( m => m.RadioListPageModule)
  },
  {
    path: 'radio-player',
    loadChildren: () => import('./ui-layouts/radio-station/radio-player/radio-player.module').then( m => m.RadioPlayerPageModule)
  },


  //******************************//
  //********** Shopping **********//
  //******************************//


  {
    path: 'shopping-category',
    loadChildren: () => import('./ui-layouts/shopping/shopping-category/shopping-category.module').then( m => m.ShoppingCategoryPageModule)
  },
  {
    path: 'shopping-list/:categoryId',
    loadChildren: () => import('./ui-layouts/shopping/shopping-list/shopping-list.module').then( m => m.ShoppingListPageModule)
  },
  {
    path: 'shopping-detail/:itemId',
    loadChildren: () => import('./ui-layouts/shopping/shopping-detail/shopping-detail.module').then( m => m.ShoppingDetailPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./ui-layouts/shopping/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },


  {
    path: 'shopping-home',
    loadChildren: () => import('./ui-layouts/shopping/shopping-home/shopping-home.module').then( m => m.ShoppingHomePageModule)
  },
  {
    path: 'shopping-group/:groupId',
    loadChildren: () => import('./ui-layouts/shopping/shopping-group/shopping-group.module').then( m => m.ShoppingGroupPageModule)
  },
  {
    path: 'shopping-special',
    loadChildren: () => import('./ui-layouts/shopping/shopping-special/shopping-special.module').then( m => m.ShoppingSpecialPageModule)
  },

  //*****************************//
  //********** Travel  **********//
  //*****************************//

  {
    path: 'travel-category',
    loadChildren: () => import('./ui-layouts/travel/travel-category/travel-category.module').then( m => m.TravelCategoryPageModule)
  },
  //{ path: 'travel-place/:categoryId', loadChildren: './app-travel/travel-place/travel-place.module#TravelPlacePageModule' },
  {
    path: 'travel-list/:categoryId',
    loadChildren: () => import('./ui-layouts/travel/travel-list/travel-list.module').then( m => m.TravelListPageModule)
  },
  {
    path: 'travel-detail/:placeId',
    loadChildren: () => import('./ui-layouts/travel/travel-detail/travel-detail.module').then( m => m.TravelDetailPageModule)
  },
  {
    path: 'travel-map',
    loadChildren: () => import('./ui-layouts/travel/travel-map/travel-map.module').then( m => m.TravelMapPageModule)
  },
  {
    path: 'travel-home',
    loadChildren: () => import('./ui-layouts/travel/travel-home/travel-home.module').then( m => m.TravelHomePageModule)
  },
  {
    path: 'travel-tag/:tagId',
    loadChildren: () => import('./ui-layouts/travel/travel-tag/travel-tag.module').then( m => m.TravelTagPageModule)
  },

  //**********************************//
  //********** Real estate  **********//
  //**********************************//


  {
    path: 'real-list',
    loadChildren: () => import('./ui-layouts/realestate/real-list/real-list.module').then( m => m.RealListPageModule)
  },
  {
    path: 'real-category',
    loadChildren: () => import('./ui-layouts/realestate/real-category/real-category.module').then( m => m.RealCategoryPageModule)
  },
  {
    path: 'real-detail/:itemId',
    loadChildren: () => import('./ui-layouts/realestate/real-detail/real-detail.module').then( m => m.RealDetailPageModule)
  },
  {
    path: 'real-map',
    loadChildren: () => import('./ui-layouts/realestate/real-map/real-map.module').then( m => m.RealMapPageModule)
  },

  {
    path: 'real-home',
    loadChildren: () => import('./ui-layouts/realestate/real-home/real-home.module').then( m => m.RealHomePageModule)
  },

  {
    path: 'real-profile',
    loadChildren: () => import('./ui-layouts/realestate/real-profile/real-profile.module').then( m => m.RealProfilePageModule)
  },

  {
    path: 'real-agent-detail/:agentId',
    loadChildren: () => import('./ui-layouts/realestate/real-agent-detail/real-agent-detail.module').then( m => m.RealAgentDetailPageModule)
  },

  //***************************//
  //********** Chart **********//
  //***************************//


  {
    path: 'chart',
    loadChildren: () => import('./ui-layouts/chart/chart.module').then( m => m.ChartPageModule)
  },


  //**************************//
  //********** Feed **********//
  //**************************//

  {
    path: 'feed',
    loadChildren: () => import('./ui-layouts/feed/feed.module').then( m => m.FeedPageModule)
  },


  //**********************************//
  //********** Image gallery**********//
  //**********************************//

  {
    path: 'image-gallery',
    loadChildren: () => import('./ui-layouts/image-gallery/image-gallery.module').then( m => m.ImageGalleryPageModule)
  },


  //**********************************//
  //********** Walkthrought **********//
  //**********************************// 

  {
    path: 'walkthrough',
    loadChildren: () => import('./ui-layouts/walkthrough/walkthrough.module').then( m => m.WalkthroughPageModule)
  },



  //******************************//
  //********** masonry **********//
  //*****************************//
  {
    path: 'masonry',
    loadChildren: () => import('./ui-layouts/masonry/masonry.module').then( m => m.MasonryPageModule)
  },





  {
    path: 'search',
    loadChildren: () => import('./ui-layouts/search/search.module').then( m => m.SearchPageModule)
  },



  //**************************//
  //********** Form **********//
  //**************************//

  {
    path: 'form-home',
    loadChildren: () => import('./ui-layouts/form/form-home/form-home.module').then( m => m.FormHomePageModule)
  },
  {
    path: 'form-one',
    loadChildren: () => import('./ui-layouts/form/form-one/form-one.module').then( m => m.FormOnePageModule)
  },
  {
    path: 'form-two',
    loadChildren: () => import('./ui-layouts/form/form-two/form-two.module').then( m => m.FormTwoPageModule)
  },
  {
    path: 'form-three',
    loadChildren: () => import('./ui-layouts/form/form-three/form-three.module').then( m => m.FormThreePageModule)
  },


  //**********************************//
  //********** Empty state  **********//
  //**********************************//




  //*************************//
  //********** Map **********//
  //*************************//

  {
    path: 'map-home',
    loadChildren: () => import('./ui-layouts/map/map-home/map-home.module').then( m => m.MapHomePageModule)
  },
  {
    path: 'map-detail',
    loadChildren: () => import('./ui-layouts/map/map-detail/map-detail.module').then( m => m.MapDetailPageModule)
  },


  //****************************//
  //********** Signin **********//
  //****************************//

  {
    path: 'signin-home',
    loadChildren: () => import('./ui-layouts/signin/signin-home/signin-home.module').then( m => m.SigninHomePageModule)
  },
  {
    path: 'signin-one',
    loadChildren: () => import('./ui-layouts/signin/signin-one/signin-one.module').then( m => m.SigninOnePageModule)
  },
  {
    path: 'signin-two',
    loadChildren: () => import('./ui-layouts/signin/signin-two/signin-two.module').then( m => m.SigninTwoPageModule)
  },
  {
    path: 'signin-three',
    loadChildren: () => import('./ui-layouts/signin/signin-three/signin-three.module').then( m => m.SigninThreePageModule)
  },
  //****************************//
  //********** Signup **********//
  //****************************//


  {
    path: 'signup-home',
    loadChildren: () => import('./ui-layouts/signup/signup-home/signup-home.module').then( m => m.SignupHomePageModule)
  },
  {
    path: 'signup-one',
    loadChildren: () => import('./ui-layouts/signup/signup-one/signup-one.module').then( m => m.SignupOnePageModule)
  },
  {
    path: 'signup-two',
    loadChildren: () => import('./ui-layouts/signup/signup-two/signup-two.module').then( m => m.SignupTwoPageModule)
  },
  {
    path: 'signup-three',
    loadChildren: () => import('./ui-layouts/signup/signup-three/signup-three.module').then( m => m.SignupThreePageModule)
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
    path: 'ui-colors',
    loadChildren: () => import('./ui-colors/ui-colors.module').then( m => m.UiColorsPageModule)
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
    path: 'empty-state',
    loadChildren: () => import('./ui-layouts/empty-state/empty-state.module').then( m => m.EmptyStatePageModule)
  },
  {
    path: 'image-gallery-view',
    loadChildren: () => import('./ui-layouts/image-gallery-view/image-gallery-view.module').then( m => m.ImageGalleryViewPageModule)
  },
  {
    path: 'form-four',
    loadChildren: () => import('./ui-layouts/form/form-four/form-four.module').then( m => m.FormFourPageModule)
  },

  {
    path: 'map-one',
    loadChildren: () => import('./ui-layouts/map/map-one/map-one.module').then( m => m.MapOnePageModule)
  },
  {
    path: 'map-two',
    loadChildren: () => import('./ui-layouts/map/map-two/map-two.module').then( m => m.MapTwoPageModule)
  },
  {
    path: 'map-three',
    loadChildren: () => import('./ui-layouts/map/map-three/map-three.module').then( m => m.MapThreePageModule)
  },
  {
    path: 'travel-search',
    loadChildren: () => import('./ui-layouts/travel/travel-search/travel-search.module').then( m => m.TravelSearchPageModule)
  },
  {
    path: 'shopping-search',
    loadChildren: () => import('./ui-layouts/shopping/shopping-search/shopping-search.module').then( m => m.ShoppingSearchPageModule)
  },
  {
    path: 'food-search',
    loadChildren: () => import('./ui-layouts/food/food-search/food-search.module').then( m => m.FoodSearchPageModule)
  },
  {
    path: 'real-search',
    loadChildren: () => import('./ui-layouts/realestate/real-search/real-search.module').then( m => m.RealSearchPageModule)
  },
  {
    path: 'travel-image-view',
    loadChildren: () => import('./ui-layouts/travel/travel-image-view/travel-image-view.module').then( m => m.TravelImageViewPageModule)
  },
  {
    path: 'real-image-view',
    loadChildren: () => import('./ui-layouts/realestate/real-image-view/real-image-view.module').then( m => m.RealImageViewPageModule)
  },
  {
    path: 'shopping-checkout',
    loadChildren: () => import('./ui-layouts/shopping/shopping-checkout/shopping-checkout.module').then( m => m.ShoppingCheckoutPageModule),
    //******** Prevent access to page with canActivate ******/    
    canActivate: [UserGuard]
  },
  {
    path: 'shopping-address-add',
    loadChildren: () => import('./ui-layouts/shopping/shopping-address-add/shopping-address-add.module').then( m => m.ShoppingAddressAddPageModule),
    //******** Prevent access to page with canActivate ******/    
    canActivate: [UserGuard]
  },
  {
    path: 'shopping-address-edit',
    loadChildren: () => import('./ui-layouts/shopping/shopping-address-edit/shopping-address-edit.module').then( m => m.ShoppingAddressEditPageModule),
    //******** Prevent access to page with canActivate ******/    
    canActivate: [UserGuard]
  },
  {
    path: 'shopping-finish',
    loadChildren: () => import('./ui-layouts/shopping/shopping-finish/shopping-finish.module').then( m => m.ShoppingFinishPageModule),
    //******** Prevent access to page with canActivate ******/    
    canActivate: [UserGuard]
  },






  {
    path: 'fire-forgot',
    loadChildren: () => import('./firebase-auth/fire-forgot/fire-forgot.module').then( m => m.FireForgotPageModule)
  },
  {
    path: 'congrats',
    loadChildren: () => import('./ui-layouts/congrats/congrats.module').then( m => m.CongratsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./ui-layouts/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./ui-layouts/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'marriage-contract',
    loadChildren: () => import('./congratspages/marriage-contract/marriage-contract.module').then( m => m.MarriageContractPageModule)
  },
  {
    path: 'image-editor',
    loadChildren: () => import('./congratspages/image-editor/image-editor.module').then( m => m.ImageEditorPageModule)
  },  {
    path: 'empty-baby',
    loadChildren: () => import('./congratspages/empty-baby/empty-baby.module').then( m => m.EmptyBabyPageModule)
  },
  {
    path: 'empty-marriage-contract',
    loadChildren: () => import('./congratspages/empty-marriage-contract/empty-marriage-contract.module').then( m => m.EmptyMarriageContractPageModule)
  },
  {
    path: 'engagement',
    loadChildren: () => import('./congratspages/engagement/engagement.module').then( m => m.EngagementPageModule)
  },
  {
    path: 'eid-alfitr',
    loadChildren: () => import('./congratspages/eid-alfitr/eid-alfitr.module').then( m => m.EidAlfitrPageModule)
  },
  {
    path: 'wedding',
    loadChildren: () => import('./invitationspages/wedding/wedding.module').then( m => m.WeddingPageModule)
  },
  {
    path: 'friday',
    loadChildren: () => import('./congratspages/friday/friday.module').then( m => m.FridayPageModule)
  },
  {
    path: 'ramadan',
    loadChildren: () => import('./congratspages/ramadan/ramadan.module').then( m => m.RamadanPageModule)
  },
  {
    path: 'empty-ramadan',
    loadChildren: () => import('./congratspages/empty-ramadan/empty-ramadan.module').then( m => m.EmptyRamadanPageModule)
  },
  {
    path: 'empty-friday',
    loadChildren: () => import('./congratspages/empty-friday/empty-friday.module').then( m => m.EmptyFridayPageModule)
  },
  {
    path: 'empty-eid-alfitr',
    loadChildren: () => import('./congratspages/empty-eid-alfitr/empty-eid-alfitr.module').then( m => m.EmptyEidAlfitrPageModule)
  },
  {
    path: 'gathering',
    loadChildren: () => import('./invitationspages/gathering/gathering.module').then( m => m.GatheringPageModule)
  },
  {
    path: 'empty-wedding',
    loadChildren: () => import('./invitationspages/empty-wedding/empty-wedding.module').then( m => m.EmptyWeddingPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./ui-layouts/start/start.module').then( m => m.StartPageModule)
  },



  




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
