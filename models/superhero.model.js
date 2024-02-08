import mongoose from "mongoose";

const SuperheroSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    power: { type: String },
    age: { type: Number },
  },
  { timestamps: true, strictQuery: true }
);

const Superhero = mongoose.model("Superhero", SuperheroSchema);

export default Superhero;
