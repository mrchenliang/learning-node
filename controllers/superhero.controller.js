import { getSuperheroesFromRepository, updateSuperheroesInRepository, deleteSuperHeroFromRepository, createSuperheroesInRepository } from '../repositories/superhero.repository.js';

export const getSuperheroes = async (req, res) => {
  try {
    const superheroes = await getSuperheroesFromRepository();
    res.status(200).send(superheroes);
  } catch (e) {
    res.status(500).send(e.message, 'failed to fetch a list of superheroes');
  }
}

export const getSuperhero = async (req, res) => {
  const { id } = req.params;
  try {
    const superhero = await getSuperheroesFromRepository({ _id: id });
    res.status(200).send(superhero);
  } catch (e) {
    res.status(500).send(e.message, `failed to fetch superhero ${id}`);
  }
}

export const updateSuperHero = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const superhero = await updateSuperheroesInRepository({ _id: id }, body);
    res.status(200).send(superhero);
  } catch (e) {
    res.status(500).send(e.message, `failed to fetch superhero ${id}`);
  }
}

export const deleteSuperHero = async (req, res) => {
  const { id } = req.params;
  try {
    const superhero = await deleteSuperHeroFromRepository({ _id: id });
    if (superhero) {
      res.status(204).send();
    } else {
      res.status(404).send(e.message, `failed to delete superhero ${id}`);
    };
  } catch (e) {
    res.status(500).send(e.message, `failed to delete superhero ${id}`);
  }
};

export const createSuperHero = async (req, res) => {
  const { body } = req;
  try {
    const superhero = await createSuperheroesInRepository(body);
    console.log(superhero);
    res.status(200).send(superhero);
  } catch (e) {
    res.status(500).send(e.message, `failed to fetch superhero ${id}`);
  }
}