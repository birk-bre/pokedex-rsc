"use client";

import { usePersistedStateIDB } from "@/setPersitedStateIDB";
import { motion } from "framer-motion";
import { Pencil, X } from "lucide-react";

export function Note({ id }: { id: string }) {
  const [isWriting, setWriting] = usePersistedStateIDB(false, `writing:${id}`);
  const [persistNote, setPersistNote] = usePersistedStateIDB("", `note:${id}`);

  return (
    <div className="flex flex-col items-start gap-2 isolate m-2">
      <button
        onClick={() => setWriting((s) => !s)}
        className="p-2 rounded-full border shadow-md hover:shadow-xl basis-8 bg-white"
      >
        {isWriting ? <X /> : <Pencil />}
      </button>
      {isWriting ? (
        <motion.input
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
          }}
          className="p-2 rounded-md border-2 border-slate-700 shadow-sm"
          placeholder="Notes about this Pokemon"
          value={persistNote}
          onChange={(e) => {
            setPersistNote(e.target.value);
          }}
        />
      ) : null}
    </div>
  );
}
