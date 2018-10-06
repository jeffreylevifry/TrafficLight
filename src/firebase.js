import Firebase from "firebase";
import "firebase/firestore";

const firebaseApp = Firebase.initializeApp({});

const db = firebaseApp.database();
const sfBg = db.ref("lanes/sf/backgroundColor");
const hpzBg = db.ref("lanes/hpz/backgroundColor");
const latexBg = db.ref("lanes/latex/backgroundColor");
const flatbedBg = db.ref("lanes/flatbed/backgroundColor");
const finishingBg = db.ref("lanes/finishing/backgroundColor");

export { db, sfBg, hpzBg, latexBg, flatbedBg, finishingBg };
