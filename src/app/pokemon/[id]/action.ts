"use server";
import { sql } from "@vercel/postgres";

async function releasePokemon(id: string) {
  await sql`DELETE FROM pokemon WHERE id = ${id}`;
}

export { releasePokemon };
