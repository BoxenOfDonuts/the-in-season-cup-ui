import "https://deno.land/x/xhr@0.1.1/mod.ts";
import { installGlobals } from "https://deno.land/x/virtualstorage@0.1.0/mod.ts";
installGlobals();
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  doc,
  getDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = JSON.parse(Deno.env.get("FIREBASE_CONFIG"));
const firebaseApp = initializeApp(firebaseConfig, "the-in-season-cup");
const db = getFirestore(firebaseApp);

// probably do some tipescript lol

export async function getScores() {
  const docsRef = doc(db, "in-season-cup", "scores");
  const docSnap = await getDoc(docsRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return { joel: { points: 0 }, lian: { points: 0 } };
}
