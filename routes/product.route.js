  // Create the express router to handle our products requests
  import express from "express";
  // import { getProducts } from "../controllers/product.controller.js";
  const router = express.Router();

  router.get("/", function (req, res) {
    res.status(404).send(
      JSON.stringify({ 
        status: 200, 
        data: `On this call, we show all of our products`, 
        message: 'succesfully retrived all of the products'
      })
    );
  });

  router.get("/:id", function (req, res) {
    console.log(req.params.id, 'id')
    console.log(req.query, 'query')
    res.send(`On this call, we show a product of ${req.params.id}`);
  });

  router.post("/", function (req, res) {
    console.log(req.body);
    res.send(`On this call, we create a product`);
  });

  router.patch("/:id", function (req, res) {
    console.log(req.body, 'body');
    console.log(req.params.id, 'id');
    res.send("On this call, we update a product");
  });

  router.delete("/:id", function (req, res) {
    console.log(req.params.id, 'id')
    res.send("On this call, we delete a product");
  });

  export default router;