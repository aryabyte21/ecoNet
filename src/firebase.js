// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseApp = firebase.initializeApp(
 {
     apiKey: "AIzaSyD-1obqqJ8IcpwJ00okuuGmruB4KFe7900",
  authDomain: "econet-a8468.firebaseapp.com",
  projectId: "econet-a8468",
  storageBucket: "econet-a8468.appspot.com",
  messagingSenderId: "356689409431",
  appId: "1:356689409431:web:3f90d7ed0c61cf0bf140d2",
  measurementId: "G-YRKXYP3M7P"
  });
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
 export default firebase;
  const storage=firebase.storage();
  export {db,auth,storage,firebase};



