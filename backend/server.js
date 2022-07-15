import express, { response } from "express";
import data from "./data.js";
import mongose from 'mongose';
import dotenv from 'dotenv';
//connect to db
dotenv.config();

mongose.connect(process.env.MONGODB_URL).then(()=>
{console.log("connected to db")
.catch((err) =>{
  console.log(err.message)
})})

const app = express();
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product Not Found" });
  }
});
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params._id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product Not Found" });
  }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
