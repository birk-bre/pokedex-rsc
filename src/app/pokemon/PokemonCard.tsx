import Image from "next/image";
import Link from "next/link";
type Pokemon = {
  pokemonid: number;
  name: string;
  shiny: string;
  id: string;
};

export const PokemonCard = async ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <Link
      href={{
        pathname: `/pokemon/${pokemon.id}`,
        query: {
          pokemonid: pokemon.pokemonid,
          name: pokemon.name,
          shiny: pokemon.shiny,
          id: pokemon.id,
        },
      }}
    >
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
        <p className="text-2xl font-bold">
          {pokemon.shiny === "true" ? "Shiny" : "Not shiny"}
        </p>
      </div>
    </Link>
  );
};
