import { Suspense } from "react";
import Loading from "./loading";
import { Ingredient } from "./api/recipes/route";

async function RecipeCard() {
  const res = await fetch("http://localhost:3000/api/recipes/", {
    next: { revalidate: 60 },
  });
  if (!res.ok) return <p>I forgor 💀</p>;
  const recipe: { ingredients: Ingredient[] } = await res.json();

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        id="recipe-card"
        className="p-6 border border-gray-900 rounded-lg shadow hover:bg-gray-900 bg-zinc-900 h-3/5"
      >
        <ul className="m-6">
          {recipe["ingredients"].map((ingredient) => (
            <li key={ingredient.name}>
              <label className="block">
                <input type="checkbox" />
                <span className="m-5">
                  {ingredient.quantity} of {ingredient.name}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <RecipeCard />
    </Suspense>
  );
}
1;
