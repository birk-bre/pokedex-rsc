"use client";

import { useState } from "react";

export function Note() {
  const [note, setNote] = useState("");
  return (
    <div className="flex flex-col">
      <label htmlFor="notes">Special notes about this pokemon</label>
      <input
        placeholder="Notes about this Pokemon"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}
