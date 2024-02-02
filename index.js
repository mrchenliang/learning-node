import express from "express";
import bodyParser from "body-parser";
import home from "./routes/home.route.js";
import products from "./routes/product.route.js";

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// routes
app.use("/", home);
app.use("/products", products);

app.listen(port, function () {
  console.log(`🚀 Fire app listening on port ${port}!`);
});