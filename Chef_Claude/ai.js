import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

const huggingFaceToken = import.meta.env.VITE_HF_ACCESS_TOKEN;

if (!huggingFaceToken) {
    console.error("❌ Missing Hugging Face API key! Check your .env file.");
}

const hf = new HfInference(huggingFaceToken);

export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const ingredientsString = ingredientsArr.join(", ");
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        });

        return response?.choices?.[0]?.message?.content || "No recipe received.";
    } catch (error) {
        console.error("❌ Error fetching recipe from Mistral:", error.message);
        return "Error fetching recipe.";
    }
}
