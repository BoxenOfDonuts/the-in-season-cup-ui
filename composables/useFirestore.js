import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  getDoc,
  collection,
  doc,
} from "firebase/firestore/lite";
const { firebaseConfig, dev } = useRuntimeConfig();
const app = initializeApp(JSON.parse(firebaseConfig));
const db = getFirestore(app);

const DEFAULT_USERS = [
  { name: "Joel", points: 1, teams: [19] },
  { name: "Lian", points: 0, teams: [26] },
];

const DEFAULT_CHAMP = {
  lastUpdateDate: { seconds: 1678543204, nanoseconds: 779000000 },
  name: "Los Angeles Kings",
  teamId: 26,
};

export const useFirestore = () => {
  const userCollection = collection(db, "users");
  const champDoc = doc(db, "in-season-cup", "current-champion");

  const getUsers = async () => {
    try {
      if (dev) return DEFAULT_USERS;

      const docSnap = await getDocs(userCollection);
      if (docSnap.empty) {
        throw new Error("No User Docs!");
      }
      return docSnap.docs.map((doc) => doc.data());
    } catch (error) {
      console.error("Something went wrong", { error });
      return DEFAULT_USERS;
    }
  };

  const getChampion = async () => {
    try {
      if (dev) return DEFAULT_CHAMP;
      const docSnap = await getDoc(champDoc);
      if (!docSnap.exists()) {
        throw new Error("No Champion Doc Docs!");
      }
      return docSnap.data();
    } catch (error) {
      console.error("Something went wrong", { error });
    }
  };

  return {
    getUsers,
    getChampion,
  };
};
