const products = require("../data/products");

const controller = {
    index: (req, res) => {
        const visitedProducts = products.filter(
            (product) => product.category == "visited"
        );
        const inSaleProducts = products.filter(
            (product) => product.category == "in-sale"
        );
        res.render("index", {
            visitedProducts,
            inSaleProducts,
        });
    },
    search: (req, res) => {
        // Do the magic
    },
};

module.exports = controller;
