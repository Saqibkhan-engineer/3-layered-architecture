// Simulating a database of products
const products = [
    { id: 1, name: 'Laptop', price: 1200, description: 'A high-performance laptop', image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Smartphone', price: 800, description: 'A smartphone with excellent features', image: 'https://via.placeholder.com/200' },
];

function getProduct(productId) {
    return products.find(product => product.id === productId) || null;
}

module.exports = { getProduct };
