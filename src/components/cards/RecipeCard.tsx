import { Ingredient } from "@/app/api/recipes/route";
import Loading from "@/app/loading";
import Card from "@/components/cards/Card";
import { Suspense } from "react";

async function RecipeItems() {
  const res = await fetch("http://localhost:3000/api/recipes/", {
    next: { revalidate: 60 },
  });
  if (!res.ok) return <p>I forgor 💀</p>;
  const recipe: { ingredients: Ingredient[] } = await res.json();

  return (
    <ul className="mt-5">
      {recipe["ingredients"].map((ingredient) => (
        <li key={ingredient.name}>
          <label className="flex">
            <input
              type="checkbox"
              className="inline-block accent-green w-5 h-5"
            />
            <span className="inline-block ml-5">
              {ingredient.quantity} of {ingredient.name}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function RecipeCard() {
  return (
    <Card>
      <h1>
        <u className="decoration-green decoration-2">Gungle Venom Recipe</u>
      </h1>
      <Suspense fallback={<Loading />}>
        <RecipeItems />
      </Suspense>
    </Card>
  );
}
