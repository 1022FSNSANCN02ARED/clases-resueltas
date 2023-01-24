const products = require("../data/products");

const controller = {
    // Root - Show all products
    index: (req, res) => {
        res.render("products/list", { products: products.findAll() });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        const product = products.findById(req.params.id);
        res.render("products/detail", { product });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("products/create-form");
    },

    // Create -  Method to store
    store: (req, res) => {
        // [x] resolver los valores numéricos del producto
        // [x] resolver un id para el producto nuevo
        // [x] resolver la imagen del producto nuevo
        // [x] persistir los datos de este nuevo producto

        // otra opción: (UUIDv4)
        // const lastProduct = products[products.length - 1];
        const product = {
            id: Date.now(),
            // id: lastProduct ? lastProduct.id + 1 : 1,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: Number(req.body.price),
            discount: Number(req.body.discount),
            image: req.file ? req.file.filename : "default-image.png",
        };
        // res.send(product);
        products.saveProduct(product);

        res.redirect("/products");
    },

    // Update - Form to edit
    edit: (req, res) => {
        const product = products.findById(req.params.id);
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
