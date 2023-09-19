import { promises as fs } from "fs";
import Request from "next";
import { NextResponse } from "next/server";

export type Ingredient = { name: string; quantity: string };
export type IngredientIndex = {
  alcohol: Ingredient[];
  alcopops: Ingredient[];
  mixers: Ingredient[];
  toppings: Ingredient[];
};

const ingredients: IngredientIndex = JSON.parse(
  await fs.readFile("public/data/ingredients.json", "utf-8")
);

const randomNumber = (limit: number): number =>
  Math.floor(Math.random() * limit);

type ChoiceFunction = <T>(n: number, xs: T[]) => T[];

const randomChoice = <T>(xs: T[]): T => xs[randomNumber(xs.length)];

const chooseN: ChoiceFunction = (n, xs) => {
  let results: typeof xs = [];
  for (let i = 0; i < n; i++) {
    results.push(randomChoice(xs));
  }
  return results;
};

const chooseRange = <T>(n: number, minimum: number, xs: T[]): T[] =>
  chooseN(Math.max(randomNumber(n), minimum), xs);

export async function GET(req: Request) {
  return NextResponse.json({
    ingredients: [
      ...chooseRange(4, 1, ingredients["alcohol"]),
      ...chooseRange(2, 0, ingredients["alcopops"]),
      ...chooseRange(2, 1, ingredients["mixers"]),
      ...chooseRange(3, 0, ingredients["toppings"]),
    ],
  });
}
