import mongoose from "mongoose";

// Define the Meal schema
// Each meal has a name, description, and a list of ingredients referenced by their ObjectIds.
const mealSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient", required: true }],
}, { timestamps: true });

// Export the Meal model
export default mongoose.model("Meal", mealSchema);