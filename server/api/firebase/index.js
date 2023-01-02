import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default defineEventHandler(async () => {
  const { firebaseConfig } = useRuntimeConfig();

  try {
    const app = initializeApp(JSON.parse(firebaseConfig));
    const db = getFirestore(app);
    const userCollection = collection(db, "users");
    const docSnap = await getDocs(userCollection);
    if (docSnap.empty) {
      throw new Error("No User Docs!");
    }
    return docSnap.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Something went wrong", { error });
    return [
      { name: "Joel", points: 0 },
      { name: "Lian", points: 0 },
    ];
  }
});
