import express from "express";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", function (req, res) {
  res.send("Request using POST");
});

app.put("/", function (req, res) {
  res.send("Request using PUT");
});

app.delete("/", function (req, res) {
  res.send("Request using DELETE");
});

app.all("/", function (req, res) {
  res.send("Request using GET, POST, PUT or DELETE");
});

app.listen(port, function () {
  console.log(`🚀 Fire app listening on port ${port}!`);
});