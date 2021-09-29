// var admin = require("firebase-admin");
// var fs = require('fs');
// var serviceAccount = require("./serviceAccountKey.json");

// var fileName = process.argv[2];

// // You should replae databaseURL with your own
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://<your-project-name>.firebaseio.com"
// });


// var admin = require("firebase-admin");


// tutorial: https://itnext.io/how-to-backup-and-restore-cloud-firestore-d16537374640
// run: node import.js importdata.json
// Do not forgot sudo(mac) , window (open cmd with admin)

console.log("start");
const firebase = require("firebase");
// Required for side-effects
//console.log(2);
require("firebase/firestore");
var fs = require('fs');

//console.log(3);
var fileName = process.argv[2];
//console.log(4);

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(
  {
  apiKey: "AIzaSyBn6PSs-grLloLvTqn3R4MsfLN535M4wOU",
  authDomain: "e-card-creator.firebaseapp.com",
  projectId: "e-card-creator",
  storageBucket: "e-card-creator.appspot.com",
  messagingSenderId: "610815746444",
  appId: "1:610815746444:web:6edfc71ebfe7be4aa2b6a9",
  measurementId: "G-QYB9F91DSF"
}

);




// var db = admin.firestore();
var db = firebase.firestore();
var collectionName = '';
//console.log(6);

fs.readFile(fileName, 'utf8', function(err, data){
  if(err){
    return console.log(err);
  }
  //console.log(7);
  // Turn string from file to an Array
  dataArray = JSON.parse(data);
  console.log(dataArray);
  for(var index in dataArray){ // index = collection name
    collectionName = index;
    console.log("collectionName="+collectionName);
    for(var doc in dataArray[index]){
     
      if(dataArray[index].hasOwnProperty(doc)){
        docId = doc;
        //console.log(9);
        console.log("docId="+docId);

        db.collection(collectionName).doc(doc)
     
        .set(dataArray[index][doc])
        // .then(ref => {
        //     console.log('Added document with ID: ', ref.name);
        // })
        .then(() => {
          //console.log('Document is successed adding to firestore!'+ dataArray[index]);
         // console.log(JSON.stringify  (docId));
         console.log('added');
        })
        .catch(error => {
          console.log(error);
        });



   


      }
    }
  }

})