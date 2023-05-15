"use client";
import Image from "next/image";
import Link from "next/link";
import { Note } from "./note";
import { Sparkle } from "@/components/sparkle/sparkle";
import { useEffect, useRef } from "react";
import {
  Variants,
  cubicBezier,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
type Pokemon = {
  pokemonid: number;
  name: string;
  shiny: string;
  id: string;
};

export const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [-20, 20]);
  const rotateY = useTransform(x, [0, 1], [20, -20]);

  return (
    <div>
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        transition={{
          rotateX: {
            type: "tween",
            duration: 1,
          },
          rotateY: {
            type: "tween",
            duration: 1,
          },
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          const xPos = (e.clientX - rect.left) / rect.width;
          const yPos = (e.clientY - rect.top) / rect.height;

          console.log(xPos);

          x.set(xPos);
          y.set(yPos);
        }}
        onMouseLeave={() => {
          x.set(0.5);
          y.set(0.5);
        }}
        onHoverStart={() => {
          document.body.style.cursor = "grab";
        }}
        onHoverEnd={() => {
          document.body.style.cursor = "default";
        }}
        whileTap={{ cursor: "grabbing" }}
        drag
        dragElastic={1}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
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
      </motion.div>
      <Note id={pokemon.id} />
    </div>
  );
};
