const Product = require("../model/ProductModel");

const createProduct = async (req, res) => {
    try {
        const { nom, description, prix, quantite } = req.body;
        const product = new Product({ nom, description, prix, quantite });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createProduct };
