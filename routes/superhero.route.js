  import express from "express";
  import { getSuperheroes, getSuperhero, createSuperHero, updateSuperHero, deleteSuperHero } from "../controllers/superhero.controller.js";
  const router = express.Router();

  router.get("/", getSuperheroes);
  router.get("/:id", getSuperhero);
  router.post("/", createSuperHero);
  router.patch("/:id", updateSuperHero);
  router.delete("/:id", deleteSuperHero);

  export default router;