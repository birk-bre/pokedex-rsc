import Image from "next/image";
import Link from "next/link";
import { Note } from "./note";
import { Sparkle } from "@/components/sparkle/sparkle";
type Pokemon = {
  pokemonid: number;
  name: string;
  shiny: string;
  id: string;
};

export const PokemonCard = async ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="flex flex-col">
      <Link
        href={{
          pathname: `/pokemon/${pokemon.id}`,
        }}
      >
        <div
          className="flex flex-col p-2 bg-slate-200 gap-4 rounded-md items-center justify-center"
          key={pokemon.id}
        >
          <h1 className="text-4xl font-bold">{pokemon.name}</h1>
          <Image
            src={
              pokemon.shiny === "true"
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.pokemonid}.png`
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemonid}.png`
            }
            alt={pokemon.name}
            width={128}
            height={128}
          />
          {pokemon.shiny === "true" ? (
            <Sparkle text={pokemon.shiny === "true" ? "Shiny" : "Not shiny"} />
          ) : null}
        </div>
      </Link>
      <Note id={pokemon.id} />
    </div>
  );
};
