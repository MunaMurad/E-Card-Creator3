export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBn6PSs-grLloLvTqn3R4MsfLN535M4wOU",
    authDomain: "e-card-creator.firebaseapp.com",
    projectId: "e-card-creator",
    storageBucket: "e-card-creator.appspot.com",
    messagingSenderId: "610815746444",
    appId: "1:610815746444:web:6edfc71ebfe7be4aa2b6a9",
    measurementId: "G-QYB9F91DSF"
  },
  socialShareOption: [
    {
        title: 'Whatsapp',
        logo: 'assets/icon/whatsapp-icon.png',
        shareType: 'shareViaWhatsApp'
    },
    {
        title: 'Facebook',
        logo: 'assets/icon/facebook-icon.png',
        shareType: 'shareViaFacebook'
    },
    {
        title: 'Twitter',
        logo: 'assets/icon/twitter-icon.png',
        shareType: 'shareViaTwitter'
    },
    {
        title: 'Instagram',
        logo: 'assets/icon/instagram-icon.png',
        shareType: 'shareViaInstagram'
    },
    {
        title: 'Email',
        logo: 'assets/icon/email-icon.png',
        shareType: 'viaEmail'
    }
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
