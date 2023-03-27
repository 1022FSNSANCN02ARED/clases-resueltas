const { Series, Genres } = require("../database/models");

//async / await
module.exports = {
  list: async (req, res) => {
    res.render("series/list", {
      series: await Series.findAll(),
    });
  },

  detail: async (req, res) => {
    const serie = await Series.findByPk(req.params.id, {
      include: [
        {
          association: "seasons",
          include: ["episodes"],
        },
        "genre",
      ],
    });
    res.render("series/detail", {
      serie: serie,
    });
  },

  add: async (req, res) => {
    res.render("series/form", {
      genres: await Genres.findAll(),
    });
  },
  create: async (req, res) => {
    const serie = await Series.create(req.body);
    res.redirect("/series/" + serie.id);
  },

  edit: async (req, res) => {
    res.render("series/form", {
      genres: await Genres.findAll(),
      serie: await Series.findByPk(req.params.id, {
        include: [
          {
            association: "seasons",
            include: ["episodes"],
          },
          "genre",
        ],
      }),
    });
  },
  update: async (req, res) => {
    const serie = await Series.findByPk(req.params.id);
    await serie.update(req.body);
    res.redirect("/series/" + serie.id);
  },

  delete: async (req, res) => {
    const serie = await Series.findByPk(req.params.id, {
      include: [
        {
          association: "seasons",
          include: ["episodes"],
        },
      ],
    });
    for (season in serie.seasons) {
      for (episode in season.episodes) {
        await episode.setActors([]); //remuevo la relación con actores.
        await episode.destroy(); //destruyo cada episodio de la temporada
      }
      await season.destroy(); //destruyo cada temporada de la serie
    }
    await serie.destroy(); //al fin puedo destruir la serie
  },

  //SEASON & EPISODE
  addSeason: (req, res) => {},
  createSeason: (req, res) => {},
  editSeason: (req, res) => {},
  updateSeason: (req, res) => {},
  addEpisode: (req, res) => {},
  createEpisode: (req, res) => {},
  editEpisode: (req, res) => {},
  updateEpisode: (req, res) => {},
  deleteSeason: (req, res) => {},
  deleteEpisode: (req, res) => {},
};
