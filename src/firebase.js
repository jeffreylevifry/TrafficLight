import Firebase from "firebase";
import "firebase/firestore";

const firebaseApp = Firebase.initializeApp({
  // Initialize Firebase

  apiKey: "AIzaSyBioDMz0rUA2iqSBUzBbdXW8ALYgQ8XqX0",
  authDomain: "trafficlight-a0b4d.firebaseapp.com",
  databaseURL: "https://trafficlight-a0b4d.firebaseio.com",
  projectId: "trafficlight-a0b4d",
  storageBucket: "trafficlight-a0b4d.appspot.com",
  messagingSenderId: "1011182971366"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
const db = firebaseApp.database();

// firebase collections
const sfBg = db.ref("sf");
const lanes = db.ref("lanes");
//const postsCollection = db.collection('posts');

export { db, sfBg, lanes };
