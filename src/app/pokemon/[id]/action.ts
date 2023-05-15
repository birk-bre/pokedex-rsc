"use server";
import { client } from "../../../../dbClient";

async function releasePokemon(id: string) {
  await client.execute("DELETE FROM pokemon WHERE id = ?", [id]);
}

export { releasePokemon };
