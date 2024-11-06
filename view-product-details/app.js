const express = require('express');
const productService = require('./productService'); // Importing the data layer

const app = express();
const PORT = 3000;

app.get('/api/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = productService.getProduct(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
