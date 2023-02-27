const { Genres } = require("../database/models");

module.exports = {
  list: (req, res) => {
    Genres.findAll().then((genresArray) => {
      res.render("genresList", {
        genres: genresArray,
      });
    });
  },
  detail: (req, res) => {
    Genres.findByPk(req.params.id).then((genre) => {
      res.render("genresDetail", {
        genre,
      });
    });
  },
};
