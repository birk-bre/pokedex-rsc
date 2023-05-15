// idbHelper.js
import { openDB } from "idb";

type StoredValue<T> = {
  value: T;
  timestamp: number;
};

async function getDb() {
  return await openDB("pokedex", 1, {
    upgrade(db) {
      db.createObjectStore("persistedState");
    },
  });
}

export async function setItem<T>(key: string, value: StoredValue<T>) {
  const db = await getDb();
  const tx = db.transaction("persistedState", "readwrite");
  const store = tx.objectStore("persistedState");
  await store.put(value, key);
  await tx.done;
}

export async function getItem(key: string) {
  const db = await getDb();
  return await db.get("persistedState", key);
}

export async function removeItem(key: string) {
  const db = await getDb();
  const tx = db.transaction("persistedState", "readwrite");
  const store = tx.objectStore("persistedState");
  await store.delete(key);
  await tx.done;
}
