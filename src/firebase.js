import Firebase from "firebase";
import "firebase/firestore";

const firebaseApp = Firebase.initializeApp({
  // Initialize Firebase
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
const db = firebaseApp.database();

// firebase collections
const lanes = db.ref("lanes");
//const postsCollection = db.collection('posts');

export { db, lanes };
