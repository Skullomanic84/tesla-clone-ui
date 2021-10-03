import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDq9kQh4sAIIGZHEAVTkgdMLkGUh3A81wo",
  authDomain: "tesla-clone-fb18d.firebaseapp.com",
  projectId: "tesla-clone-fb18d",
  storageBucket: "tesla-clone-fb18d.appspot.com",
  messagingSenderId: "645598954046",
  appId: "1:645598954046:web:8e2950a7d07fad186ec76f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth()

export{ auth }