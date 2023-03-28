const { Movies, Genres, Actors } = require("../database/models");
const fetch = require("node-fetch");
const Sequelize = require("sequelize");
const dayjs = require("dayjs");

const OMDB_API_KEY = "4083683d";
const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

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
  recommended: (req, res) => {
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
      Genres.findByPk(movie.genre_id).then((genre) => {
        Actors.findAll({
          include: [
            {
              association: "movies",
              where: {
                id: movie.id,
              },
            },
          ],
        }).then((actors) => {
          res.render("moviesDetail", {
            movie: {
              ...movie.get(),
              release_date: movie.release_date.toLocaleDateString(),
              genre: genre?.name ?? "Sin género",
              actors: actors.map((actor) => actor.get()),
            },
          });
        });
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
          ...movie.dataValues,
          release_date: dayjs(movie.release_date).format("YYYY-MM-DD"),
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
  search: async (req, res) => {
    //1. Buscar la película en nuestra base de datos
    // 1b. Si está mostramos el detalle de la película
    //2. Buscar la película en la API de OMDB
    // 2b. Si está mostramos el detalle de la película con los datos de OMDB
    //3. Mostramos mensaje de error 404

    const searchString = req.query.search;
    //searchString = "Doctor Strange Multiverse";
    const termList = searchString.split(" ");
    //["Doctor","Strange","Madness"]

    const termListLikeOperations = termList.map((term) => {
      return {
        title: {
          [Sequelize.Op.like]: "%" + term + "%",
        },
      };
    });
    //[{
    //     title: {
    //       [Sequelize.Op.like]: "%" + "Doctor" + "%",
    //     },
    //   },{
    //     title: {
    //       [Sequelize.Op.like]: "%" + "Strange" + "%",
    //     },
    //   },{
    //     title: {
    //       [Sequelize.Op.like]: "%" + "Madness" + "%",
    //     },
    //   }
    // ]

    let movie = await Movies.findOne({
      where: {
        [Sequelize.Op.and]: termListLikeOperations,
      },
      include: ["actors", "genre"],
    });
    if (movie) {
      res.render("moviesDetail", {
        movie,
      });
      return;
    }

    const response = await fetch(OMDB_API_URL + `s=${searchString}`);
    const result = await response.json();

    if (result.Search) {
      movie = result.Search[0];
      res.render("moviesOMDBDetail", {
        movie,
      });
      return;
    }

    res.send(result.Error);
  },
};
