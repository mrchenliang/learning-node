import express from "express";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get("/", function (req, res) {
  res.send(`Welcome to our site, you are home!`);
});

router.get("/about", function (request, response) {
  response.sendFile(path.join(__dirname, "../index.html"));
});

export default router;