import mongoose from "mongoose";

// Define the Ingredient schema
// Each ingredient has a name.
const ingredientSchema = mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });

// Export the Ingredient model
export default mongoose.model("Ingredient", ingredientSchema);