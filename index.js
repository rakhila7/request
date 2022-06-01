console.clear();
const PORT = 3200;
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "Product 1", price: 7, amount: 50 },
  { id: 2, name: "Product 2", price: 9, amount: 150 },
  { id: 3, name: "Product 3", price: 3, amount: 71 },
  { id: 4, name: "Product 4", price: 0.8, amount: 870 },
  { id: 5, name: "Product 5", price: 60, amount: 28 },
  { id: 6, name: "Product 6", price: 55, amount: 125 },
  { id: 7, name: "Product 7", price: 90, amount: 346 },
  { id: 8, name: "Product 8", price: 82, amount: 927 },
  { id: 9, name: "Product 9", price: 60, amount: 790 },
  { id: 10, name: "Product 10", price: 540, amount: 78 },
  { id: 11, name: "Product 11", price: 8.9, amount: 105 },
];

  app.get("/", (req, res) => {
    res.send("hello products service");
});


app.get("/products", (req, res) => {
  const count = +req.query.count;
  const offset = +req.query.offset;
  
  res.send(isNaN(count + offset) ? products : products.slice(offset, (offset + count)))
  });
  
  app.post("/products", (req, res) => {
    products = [...products, req.body];
    res.send(products);
});

app.get("/products/:id", (req, res) => {
  res.send(JSON.stringify(products.find((p) => p.id == req.params.id)));
});

app.listen(PORT, () => console.log(`Your port: http://localhost:${PORT}`));
