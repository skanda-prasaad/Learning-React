import React from "react";
import IngredientsList from "./IngredientList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    async function getRecipe() {
        setLoading(true);  // <-- Show loader
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
        setLoading(false);  // <-- Hide loader
    }

    function addIngredient(event) {
        event.preventDefault();
        const inpValue = event.target.ingredient.value.trim();
        if (!inpValue) return;
        setIngredients(prev => [...prev, inpValue]);
        event.target.reset();
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
            }
            {loading && <p className="loader">Generating recipe, please wait...</p>}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    );
}
