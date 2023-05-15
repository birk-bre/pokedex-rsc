"use client";

import { usePersistedStateIDB } from "@/setPersitedStateIDB";

export function Note({ id }: { id: string }) {
  const [persistNote, setPersistNote] = usePersistedStateIDB("", `note:${id}`);

  return (
    <div className="flex flex-col">
      <label htmlFor="notes">Special notes about this pokemon</label>
      <input
        placeholder="Notes about this Pokemon"
        value={persistNote}
        onChange={(e) => {
          setPersistNote(e.target.value);
        }}
      />
    </div>
  );
}
