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
        movie,
      });
    });
  },
};
