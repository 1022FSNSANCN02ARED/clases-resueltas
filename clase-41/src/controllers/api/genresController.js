const { Genres } = require("../../database/models");

const pageSize = 5;

module.exports = {
  list: async (req, res) => {
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;

    const { count, rows } = await Genres.findAndCountAll({
      limit: pageSize,
      offset: offset,
    });

    res.json({
      meta: {
        status: 200,
        total: count,
        url: req.originalUrl,
      },
      data: rows,
    });
  },

  detail: async (req, res) => {
    const genre = await Genres.findByPk(req.params.id, {
      include: ["movies"],
    });
    res.json({
      meta: {
        status: !genre ? 404 : 200,
        url: req.originalUrl,
      },
      data: genre,
    });
  },
};
