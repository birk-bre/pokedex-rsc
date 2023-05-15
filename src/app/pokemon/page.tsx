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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[660px]">
      {rows.map((pokemon) => {
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
}
