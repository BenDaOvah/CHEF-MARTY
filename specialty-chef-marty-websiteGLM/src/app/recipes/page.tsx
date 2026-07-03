"use client";

import { useState } from "react";

const recipes = [
  {
    id: 1,
    title: "Curry Shrimp Pasta",
    category: "Pasta",
    difficulty: "Medium",
    time: "20 min",
    videoId: "WxVKdzQnHbY",
    description: "Aromatic curry shrimp pasta with fresh ingredients and bold spices.",
    ingredients: ["Shrimp", "Pasta", "Curry powder", "Coconut milk", "Garlic"],
  },
  {
    id: 2,
    title: "Pecan Cinnamon Rolls",
    category: "Baking",
    difficulty: "Medium",
    time: "2 hours",
    videoId: "D9PTbKTSIMI",
    description: "Moist, fluffy cinnamon rolls with pecans and caramel glaze.",
    ingredients: ["Flour", "Butter", "Cinnamon", "Pecans", "Brown sugar"],
  },
  {
    id: 3,
    title: "Glazed Carrots with Pecans",
    category: "Vegetables",
    difficulty: "Easy",
    time: "15 min",
    videoId: "u1RMU3CCNmg",
    description: "Tender glazed carrots topped with toasted pecans.",
    ingredients: ["Carrots", "Butter", "Brown sugar", "Pecans", "Vanilla"],
  },
  {
    id: 4,
    title: "French Baguette Bread",
    category: "Baking",
    difficulty: "Hard",
    time: "4 hours",
    videoId: "uMs-HoikUtA",
    description: "Artisanal French baguette with crispy crust and soft interior.",
    ingredients: ["Flour", "Water", "Salt", "Yeast"],
  },
  {
    id: 5,
    title: "Cherry Streusel",
    category: "Baking",
    difficulty: "Easy",
    time: "45 min",
    videoId: "___6560W7gw",
    description: "Delicious cherry dessert with buttery streusel topping.",
    ingredients: ["Cherries", "Flour", "Butter", "Sugar", "Oats"],
  },
  {
    id: 6,
    title: "Homemade Corn Bread",
    category: "Baking",
    difficulty: "Easy",
    time: "30 min",
    videoId: "73FVZ6Er2-M",
    description: "Old school corn bread recipe with a golden crust.",
    ingredients: ["Cornmeal", "Flour", "Eggs", "Milk", "Butter"],
  },
  {
    id: 7,
    title: "Salty and Sweet Shrimp with Orzo",
    category: "Pasta",
    difficulty: "Medium",
    time: "25 min",
    videoId: "83gRvCB7jcc",
    description: "Perfectly balanced shrimp and orzo with sweet and savory flavors.",
    ingredients: ["Shrimp", "Orzo", "Honey", "Garlic", "Lemon"],
  },
  {
    id: 8,
    title: "Pecan and Almond Shortbread Cookies",
    category: "Baking",
    difficulty: "Easy",
    time: "20 min",
    videoId: "AjQq-b7a674",
    description: "Buttery shortbread cookies with pecans and almonds.",
    ingredients: ["Butter", "Flour", "Pecans", "Almonds", "Sugar"],
  },
  {
    id: 9,
    title: "Kiwi Chiffon Pie",
    category: "Dessert",
    difficulty: "Medium",
    time: "2 hours",
    videoId: "S8lqeoNU2xk",
    description: "Light and airy kiwi chiffon pie with a flaky crust.",
    ingredients: ["Kiwi", "Eggs", "Sugar", "Gelatin", "Pie crust"],
  },
  {
    id: 10,
    title: "Chicken Pasta in Pink Sauce",
    category: "Pasta",
    difficulty: "Medium",
    time: "30 min",
    videoId: "LXq847n4hEk",
    description: "Creamy pink sauce with tender chicken and pasta.",
    ingredients: ["Chicken", "Pasta", "Cream", "Tomato sauce", "Garlic"],
  },
  {
    id: 11,
    title: "Sweet Potato Swiss Roll",
    category: "Baking",
    difficulty: "Hard",
    time: "1.5 hours",
    videoId: "P4MyxqdygoA",
    description: "Elegant sweet potato cake rolled with cream filling.",
    ingredients: ["Sweet potato", "Eggs", "Flour", "Cream", "Sugar"],
  },
  {
    id: 12,
    title: "Homemade Specialty Pie Crust",
    category: "Baking",
    difficulty: "Medium",
    time: "30 min",
    videoId: "khYX6-ewbmE",
    description: "Perfect homemade pie crust for any pie recipe.",
    ingredients: ["Flour", "Butter", "Water", "Salt"],
  },
];

const categories = ["All", "Pasta", "Baking", "Vegetables", "Dessert"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

export default function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredRecipes = recipes.filter((recipe) => {
    const categoryMatch = selectedCategory === "All" || recipe.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === "All" || recipe.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1
            className="text-5xl md:text-6xl font-bold text-foreground mb-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            Recipes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our collection of delicious recipes from baking to savory dishes. Each recipe includes a video tutorial.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === cat
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Difficulty</h3>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedDifficulty === diff
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map((recipe) => (
                <a
                  key={recipe.id}
                  href={`https://www.youtube.com/watch?v=${recipe.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    {/* Recipe Image */}
                    <div className="relative bg-black aspect-video overflow-hidden">
                      <img
                        src={`https://i.ytimg.com/vi/${recipe.videoId}/hqdefault.jpg`}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg
                            className="w-7 h-7 text-primary-foreground ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Recipe Info */}
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {recipe.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {recipe.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                        <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                          {recipe.category}
                        </span>
                        <span className="inline-block bg-secondary/10 text-secondary text-xs px-2 py-1 rounded">
                          {recipe.difficulty}
                        </span>
                        <span className="inline-block bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                          {recipe.time}
                        </span>
                      </div>

                      {/* Ingredients Preview */}
                      <div className="text-xs text-muted-foreground">
                        <p className="font-semibold mb-1">Key ingredients:</p>
                        <p className="line-clamp-1">{recipe.ingredients.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No recipes found matching your filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}