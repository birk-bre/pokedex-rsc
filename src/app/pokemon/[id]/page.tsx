import Image from "next/image";
import { Release } from "./release";
import { client } from "../../../../dbClient";

type Pokemon = {
  pokemonid: number;
  name: string;
  shiny: string;
  id: string;
};

export default async function Pokemon({ params }: any) {
  const { rows } = (await client.execute("SELECT * FROM pokemon WHERE id = ?", [
    params.id,
  ])) as unknown as { rows: Pokemon[] };

  const pokemon = rows[0];
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
      <Release id={pokemon.id} />
    </div>
  );
}
