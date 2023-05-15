import { PokemonCard } from "@/app/pokemon/pokemon-card";
import { client } from "../../../dbClient";

type Pokemon = {
  id: string;
  pokemonid: number;
  name: string;
  shiny: string;
};

export const revalidate = 0;
export default async function PokemonPage() {
  const { rows } = (await client.execute(
    `SELECT * FROM pokemon`
  )) as unknown as { rows: Pokemon[] };

  return (
    <div className="grid grid-cols-3 gap-4">
      {rows.map((pokemon) => {
        {/* @ts-expect-error Async Server Component */}
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
}
