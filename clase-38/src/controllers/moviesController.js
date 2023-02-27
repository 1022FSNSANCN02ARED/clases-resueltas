const { Movies } = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
  list: (req, res) => {
    Movies.findAll().then((movies) => {
      res.render("moviesList", {
        movies,
      });
    });
  },
  new: (req, res) => {
    Movies.findAll({
      order: [["release_date", "DESC"]],
      limit: 5,
    }).then((movies) => {
      res.render("newestMovies", {
        movies,
      });
    });
  },
  recomended: (req, res) => {
    Movies.findAll({
      where: {
        rating: { [Sequelize.Op.gte]: 8 },
      },
      order: [["rating", "DESC"]],
    }).then((movies) => {
      res.render("recommendedMovies", {
        movies,
      });
    });
  },
  detail: (req, res) => {
    Movies.findByPk(req.params.id).then((movie) => {
      res.render("moviesDetail", {
        movie: {
          ...movie.get(),
          release_date: movie.release_date.toLocaleDateString(),
        },
      });
    });
  },
  add: function (req, res) {
    res.render("moviesAdd");
  },
  create: function (req, res) {
    const movie = req.body;
    Movies.create(movie).then((movie) => {
      res.redirect("/movies");
    });
  },
  edit: function (req, res) {
    Movies.findByPk(req.params.id).then((movie) => {
      res.render("moviesEdit", {
        movie: {
          ...movie.get(),
          release_date: movie.release_date.toISOString().substring(0, 10),
        },
      });
    });
  },
  update: function (req, res) {
    const movie = req.body;
    Movies.update(movie, {
      where: {
        id: req.params.id,
      },
    }).then((movie) => {
      res.redirect("/movies");
    });
  },
  delete: function (req, res) {
    Movies.findByPk(req.params.id).then((movie) => {
      const { id, title } = movie;
      res.render("moviesDelete", {
        movie: {
          id,
          title,
        },
      });
    });
  },
  destroy: function (req, res) {
    Movies.destroy({
      where: {
        id: req.params.id,
      },
    }).then((movie) => {
      res.redirect("/movies");
    });
  },
};
