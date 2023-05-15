"use client";
import Image from "next/image";
import Link from "next/link";
import { Note } from "./note";
import { Sparkle } from "@/components/sparkle/sparkle";
import { useEffect, useRef } from "react";
type Pokemon = {
  pokemonid: number;
  name: string;
  shiny: string;
  id: string;
};

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleTransform(e: MouseEvent) {
      let pos = [e.offsetX, e.offsetY];

      let l = pos[0];
      let t = pos[1];

      console.log(l, t);

      let h = cardRef.current!.clientHeight;
      let w = cardRef.current!.clientWidth;

      let px = Math.abs(Math.floor((100 / w) * l) - 100);
      let py = Math.abs(Math.floor((100 / h) * t) - 100);

      let lp = 50 + (px - 50) / 1.5;
      let tp = 50 + (py - 50) / 1.5;

      let ty = ((tp - 50) / 2) * -1;
      let tx = ((lp - 50) / 1.5) * 0.5;

      // console.log(h, w);
      // console.log(tx, ty);

      let tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg); transition: transform 400ms ease`;

      cardRef.current?.setAttribute("style", tf);
    }

    function handleRemove() {
      cardRef.current?.setAttribute("style", "");
    }
    if (cardRef.current) {
      const ref = cardRef.current;
      ref.addEventListener("mousemove", handleTransform);
      ref.addEventListener("mouseleave", handleRemove);

      return () => {
        ref?.removeEventListener("mousemove", handleTransform);
        ref?.removeEventListener("mouseleave", handleRemove);
      };
    }
  }, []);

  return (
    <div>
      <div
        ref={cardRef}
        className="will-change-transform aspect-[1/1.35] p-1 rounded-md shadow-cardShadow hover:shadow-cardShadowHover transition-transform origin-center"
      >
        <Link
          href={{
            pathname: `/pokemon/${pokemon.id}`,
          }}
        >
          <div
            className="flex flex-col p-2 gap-4 rounded-md items-center justify-center"
            key={pokemon.id}
          >
            <h1 className="text-4xl font-bold">
              {pokemon.name
                .charAt(0)
                .toUpperCase()
                .concat(pokemon.name.substring(1))}
            </h1>
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
              <Sparkle
                text={pokemon.shiny === "true" ? "Shiny" : "Not shiny"}
              />
            ) : null}
          </div>
        </Link>
      </div>
      <Note id={pokemon.id} />
    </div>
  );
};
