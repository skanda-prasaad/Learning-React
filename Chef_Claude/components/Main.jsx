import React  from "react"

export default function Main(){

    const [ingredient , setIngredient] = React.useState([])

    const ingredientList = ingredient.map((ing) => {
        return <li key={ing}>{ing}</li>
    })

    function addIngredient(formData){
        const inpValue = formData.get("ingredient");
        setIngredient(
            (prev) => [...prev, inpValue]
        )
    }
    return (
        <main>
            <form action = {addIngredient} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}