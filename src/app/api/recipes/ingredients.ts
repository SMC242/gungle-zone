export type Ingredient = { name: string; quantity: string };
export type IngredientIndex = {
  alcohol: Ingredient[];
  alcopops: Ingredient[];
  mixers: Ingredient[];
  toppings: Ingredient[];
};

export const INGREDIENTS = {
  alcohol: [
    { name: "vodka", quantity: "2 shots" },
    { name: "gin", quantity: "2 shots" },
    { name: "pink gin", quantity: "2 shots" },
    { name: "dark rum", quantity: "2 shots" },
    { name: "white rum", quantity: "2 shots" },
    { name: "whiskey", quantity: "2 shots" },
    { name: "Fireball whiskey", quantity: "1 shot" },
    { name: "Bison Grass vodka", quantity: "2 shots" },
    { name: "Jägermeister", quantity: "1 shot" },
    { name: "Triple Sec", quantity: "1 shot" },
    { name: "bourbon whiskey", quantity: "1 shot" },
    { name: "tequila", quantity: "1 shot" },
    { name: "absinthe", quantity: "1 shot" },
    { name: "scotch whiskey", quantity: "1 shot" },
    { name: "elderflower liqueur", quantity: "1 shot" },
    { name: "apricot brandy", quantity: "1 shot" },
    { name: "coffee liqueur", quantity: "1 shot" },
    { name: "Amaretto", quantity: "1 shot" },
    { name: "sherry", quantity: "100 ml" },
    { name: "cream liqueur", quantity: "2 shots" },
    { name: "white wine", quantity: "100 ml" },
    { name: "melon liqueur", quantity: "2 shots" },
    { name: "coconut rum", quantity: "2 shots" },
  ],
  alcopops: [
    { name: "Pussy (energy drink)", quantity: "1 can" },
    { name: "apple Sourz", quantity: "4 shots" },
    { name: "frozen margarita can", quantity: "1 can" },
    { name: "Dragon Soop Apple & Blackcurrant", quantity: "1 can" },
    { name: "Dragon Soop Dark Fruit Punch", quantity: "1 can" },
    { name: "Dragon Soop Blue Raspberry", quantity: "1 can" },
    { name: "Dragon Soop Mango Pink Lemonade", quantity: "1 can" },
    { name: "Dragon Soop Passion Fruit & Orange", quantity: "1 can" },
    { name: "Dragon Soop Peach & Raspberry", quantity: "1 can" },
    { name: "Dragon Soop Red Kola", quantity: "1 can" },
    { name: "Dragon Soop Rhubarb & Custard", quantity: "1 can" },
    { name: "Dragon Soop Sour Apple", quantity: "1 can" },
    { name: "Dragon Soop Strawberry & Lime", quantity: "1 can" },
    { name: "Dragon Soop Tropical Fruit Punch", quantity: "1 can" },
    { name: "Dragon Soop Venom", quantity: "1 can" },
    { name: "Dragon Soop Wicked Watermelon", quantity: "1 can" },
    { name: "Dragon Soop Blue Pineapple & Kiwi", quantity: "1 can" },
  ],
  mixers: [
    { name: "lemonade", quantity: "250 ml" },
    { name: "cream soda", quantity: "250 ml" },
    { name: "sparkling water", quantity: "250 ml" },
    { name: "cola", quantity: "250 ml" },
    { name: "Fanta", quantity: "250 ml" },
    { name: "orange juice", quantity: "250 ml" },
    { name: "pineapple juice", quantity: "250 ml" },
    { name: "apple juice", quantity: "250 ml" },
    { name: "grapefruit juice", quantity: "250 ml" },
    { name: "cranberry juice", quantity: "250 ml" },
    { name: "aloe vera juice", quantity: "250ml" },
    { name: "ginger ale", quantity: "250 ml" },
    { name: "tonic water", quantity: "250 ml" },
    { name: "milk", quantity: "100 ml" },
  ],
  toppings: [
    { name: "vanilla ice cream", quantity: "1 scoop" },
    { name: "strawberries", quantity: "4" },
    { name: "grapefruit seeds", quantity: "7" },
    { name: "lemon juice", quantity: "1 shot" },
    { name: "lime juice", quantity: "1 shot" },
    { name: "whisked egg white", quantity: "1 shot" },
    { name: "cream", quantity: "1 shot" },
    { name: "cucumber", quantity: "8 slices" },
    { name: "apple", quantity: "3 slices" },
    { name: "saline solution", quantity: "1 tsp" },
    { name: "salt", quantity: "1 tsp" },
    { name: "maple syrup", quantity: "1 tbsp" },
    { name: "raspberries", quantity: "14" },
    { name: "honey", quantity: "1 tbsp" },
  ],
};
