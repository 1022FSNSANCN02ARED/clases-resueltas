const { Genres, Movies } = require("../database/models");

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
      Movies.findAll({
        where: {
          genre_id: req.params.id,
        },
      }).then((movies) => {
        res.render("genresDetail", {
          genre: {
            id: genre.id,
            name: genre.name,
            ranking: genre.ranking,
            movies: movies,
          },
        });
      });
    });
  },
};
