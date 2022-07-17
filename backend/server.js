import express, { response } from "express";
import data from "./data.js";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });
  //create express server 
const app = express();
app.get("/api/products", (req, res) => {
  res.send(data.products);
});
//define port 
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
//backend api to return product infos
app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product Not Found" });
  }
});
///api 
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params._id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product Not Found" });
  }
});

