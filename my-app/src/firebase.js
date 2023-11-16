import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCoDCsaZ49kKZvqPgDsNp-b2OMsyH36-0A",
    authDomain: "linkdin-clone-f187c.firebaseapp.com",
    projectId: "linkdin-clone-f187c",
    storageBucket: "linkdin-clone-f187c.appspot.com",
    messagingSenderId: "155618009085",
    appId: "1:155618009085:web:0a06eb8b29d3f1ceb18394",
    measurementId: "G-Z3Q0P9N2MZ"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db, auth};