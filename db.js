import "https://deno.land/x/xhr@0.1.1/mod.ts";
import { installGlobals } from "https://deno.land/x/virtualstorage@0.1.0/mod.ts";
installGlobals();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = JSON.parse(Deno.env.get("FIREBASE_CONFIG"));
const firebaseApp = initializeApp(firebaseConfig, "the-in-season-cup");
const db = getFirestore(firebaseApp);

// probably do some tipescript lol

export async function getScores() {
  try {
    const userCollection = collection(db, 'users')
    const docSnap = await getDocs(userCollection);
    if (docSnap.empty) {
      throw new Error("No User Docs!")
    }
    return docSnap.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Something went wrong', { error })
    return [{ name: 'Joe', points: 0}, {name: 'Lian', points: 0}];
  }
}
