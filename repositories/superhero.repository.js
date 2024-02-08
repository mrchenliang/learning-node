import Superhero from "../models/superhero.model.js";

export const getSuperheroesFromRepository = async (query) => {
  try {
    const superheroes = await Superhero.find(query);
    return superheroes;
  } catch (e) {
    throw Error("Error while fetching superheroes");
  }
}


export const updateSuperheroesInRepository = async (query, update) => {
  try {
    const superhero = await Superhero.findOneAndUpdate(
      { ...query },
      { ...update },
      { new: true }
    ).lean();
    return superhero;
  } catch (e) {
    throw Error("Error while updating superhero");
  } 
}

export const deleteSuperHeroFromRepository = async (query) => {
  try {
    const superhero = await Superhero.findOneAndDelete({ ...query });
    return superhero;
  } catch (e) {
    throw Error("Error while deleting a superhero");
  }
}

export const createSuperheroesInRepository = async (payload) => {
  try {
    const newSuperhero = new Superhero(payload);
    const savedSuperhero = await newSuperhero.save();
    return savedSuperhero;
  } catch (e) {
    throw Error("Error while creating a superhero");
  }
}