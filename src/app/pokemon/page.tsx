import { PokemonCard } from "@/app/pokemon/PokemonCard";
import { sql } from "@vercel/postgres";

type Pokemon = {
  pokemonid: number;
  name: string;
  shiny: string;
  id: string;
};

export default async function PokemonPage() {
  const { rows } = (await sql`SELECT * FROM pokemon`) as { rows: Pokemon[] };
  return (
    <div className="grid grid-cols-3 gap-4">
      {rows.map((pokemon) => {
        {/* @ts-expect-error Async Server Component */}
        return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
}
