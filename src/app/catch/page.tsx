import { revalidatePath } from "next/cache";
import Image from "next/image";
import { client } from "../../../dbClient";

type Sprite = {
  front_default: string;
  front_shiny: string;
};

type PokemonType = {
  type: {
    name: string;
  };
};

type Pokemon = {
  name: string;
  sprites: Sprite;
  types: PokemonType[];
  id: number;
};

async function catchPokemon(data: FormData) {
  "use server";
  const id = crypto.randomUUID();
  const name = data.get("pokemonName") as string;
  const pokemonId = data.get("pokemonId") as unknown as string;
  const pokemonShiny = data.get("pokemonShiny") as string;

  await client.execute(
    "INSERT INTO pokemon (id, pokemonId, name, shiny) VALUES (?, ?, ?, ?)",
    [id, pokemonId, name, pokemonShiny]
  );
  revalidatePath("/catch");
}

export default async function Page() {
  const randomPokemonId = Math.floor(Math.random() * 1015) + 1;
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
  );
  const pokemon: Pokemon = await data.json();
  const isShiny = Math.floor(Math.random() * 6) === 3;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1>
        You found a {isShiny ? "shiny " : ""}
        <span className="text-blue-800">
          {pokemon.name
            .charAt(0)
            .toUpperCase()
            .concat(pokemon.name.substring(1))}
        </span>
        <p>Types</p>
        {pokemon.types.map((type, i) => (
          <p className="font-bold" key={i}>
            {type.type.name
              .charAt(0)
              .toUpperCase()
              .concat(type.type.name.substring(1))}
          </p>
        ))}
        <Image
          src={
            isShiny
              ? pokemon.sprites.front_shiny
              : pokemon.sprites.front_default
          }
          alt={pokemon.name}
          width={256}
          height={256}
        />
        {isShiny ? (
          <p className="font-bold text-yellow-500 text-center">ITS SHINY</p>
        ) : null}
      </h1>
      <form action={catchPokemon}>
        <input
          className="p-2 border"
          type="text"
          name="pokemonName"
          defaultValue={pokemon.name}
          placeholder="Nickname"
        />
        <input type="hidden" name="pokemonId" defaultValue={pokemon.id} />
        <input
          type="hidden"
          name="pokemonShiny"
          defaultValue={isShiny ? "true" : "false"}
        />
        <div className="flex gap-4 p-4">
          <button className="border p-2 flex items-center gap-2" type="submit">
            <Image src="/pokeball.png" width={32} height={32} alt="pokeball" />
            Throw ball
          </button>
          <button
            formAction={async () => {
              "use server";
              revalidatePath("/catch");
            }}
            className="border p-2"
            type="submit"
          >
            Run away
          </button>
        </div>
      </form>
    </div>
  );
}
