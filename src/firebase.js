import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDluAZL1u7gard0W9PicMoEUs-M1sh5mZc",
    authDomain: "newtodo-4c2d5.firebaseapp.com",
    projectId: "newtodo-4c2d5",
    storageBucket: "newtodo-4c2d5.appspot.com",
    messagingSenderId: "985568410597",
    appId: "1:985568410597:web:037229cdc56102cb0acd0c"
  };

   const app = initializeApp(firebaseConfig)

   const db = getFirestore(app)

   export {db};