const products = require("../data/products");

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render("products/list", { products });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        const product = products.find((p) => p.id == req.params.id);
        res.render("products/detail", { product });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("products/create-form");
    },

    // Create -  Method to store
    store: (req, res) => {
        const product = req.body;
        res.send(product);
    },

    // Update - Form to edit
    edit: (req, res) => {
        const product = products.find((p) => p.id == req.params.id);
        res.render("products/edit-form", { product });
    },
    // Update - Method to update
    update: (req, res) => {
        const product = req.body;
        res.send(product);
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        res.send(`deleting ${req.params.id}`);
    },
};

module.exports = controller;
