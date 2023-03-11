import { useFirestore } from "~~/composables/useFirestore";

export default defineEventHandler(async () => {
  const { getChampion } = useFirestore();

  return await getChampion();
});
