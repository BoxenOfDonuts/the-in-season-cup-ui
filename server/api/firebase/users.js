import { useFirestore } from "~~/composables/useFirestore";

export default defineEventHandler(async () => {
  const { getUsers } = useFirestore();

  return await getUsers();
});
