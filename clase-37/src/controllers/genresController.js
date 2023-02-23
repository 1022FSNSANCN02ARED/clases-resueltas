const { Genres } = require("../database/models");

module.exports = {
  list: (req, res) => {
    Genres.findAll().then((genresArray) => {
      res.render("genresList", {
        genres: genresArray,
      });
    });
  },
};
