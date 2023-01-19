const products = require("../data/products");

const controller = {
  // Root - Show all products
  index: (req, res) => {
    // Do the magic
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    // Do the magic
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    const product = req.body;
    res.send(product);
  },

  // Update - Form to edit
  edit: (req, res) => {
    // Do the magic
  },
  // Update - Method to update
  update: (req, res) => {
    // Do the magic
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Do the magic
  },
};

module.exports = controller;
