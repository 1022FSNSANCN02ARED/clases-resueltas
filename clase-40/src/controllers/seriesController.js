module.exports = {
  list: (req, res) => {
    res.render("series/list", {
      series: [],
    });
  },

  detail: (req, res) => {
    res.render("series/detail", {
      serie: {
        seasons: [],
      },
    });
  },

  add: (req, res) => {
    res.render("series/form", {
      genres: [],
    });
  },
  create: (req, res) => {
    res.send(req.body);
  },

  edit: (req, res) => {
    const serieToEdit = {};
    res.render("series/form", {
      genres: [],
      serie: serieToEdit,
    });
  },
  update: (req, res) => {
    res.send(req.body);
  },

  delete: (req, res) => {
    res.send("DELETED: " + req.params.id);
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
