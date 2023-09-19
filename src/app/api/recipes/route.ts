import { NextResponse } from "next/server";
import { INGREDIENTS } from "./ingredients";

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
      ...chooseRange(4, 1, INGREDIENTS["alcohol"]),
      ...chooseRange(2, 0, INGREDIENTS["alcopops"]),
      ...chooseRange(2, 1, INGREDIENTS["mixers"]),
      ...chooseRange(3, 0, INGREDIENTS["toppings"]),
    ],
  });
}
