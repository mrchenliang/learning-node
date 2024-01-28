import express from "express";
import home from "./home.js";
import products from "./products.js";

const app = express();
const port = 3000;

// Routers

app.use("/", home);
app.use("/products", products);

app.listen(port, function () {
  console.log(`🚀 Fire app listening on port ${port}!`);
});