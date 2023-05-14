"use client";

import { useState } from "react";
import Image from "next/image";

type Pokemon = {
  pokemonid: number;
  name: string;
  shiny: string;
  id: string;
};

export default function Pokemon({ pokemon }: { pokemon: Pokemon }) {
  const [note, setNote] = useState("");
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-col p-2 bg-slate-200 gap-4 rounded-md items-center justify-center"
        key={pokemon.id}
      >
        <h1 className="text-4xl font-bold">{pokemon.name}</h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemonid}.png`}
          alt={pokemon.name}
          width={128}
          height={128}
        />
        <p className="text-2xl font-bold">Shiny: {pokemon.shiny}</p>
      </div>
      <label htmlFor="notes">Special notes about this pokemon</label>
      <input
        placeholder="Notes about this Pokemon"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
    </div>
  );
}
