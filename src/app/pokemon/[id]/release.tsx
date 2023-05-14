"use client";
import { startTransition } from "react";
import { releasePokemon } from "./action";

export const Release = ({ id }: { id: string }) => {
  return (
    <button
      className="bg-red-500 p-2 rounded-md"
      onClick={() =>
        startTransition(() => {
          releasePokemon(id).then(() => {
            window.location.href = "/pokemon";
          });
        })
      }
    >
      Release
    </button>
  );
};
