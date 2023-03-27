const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Series",
    {
      title: DataTypes.STRING,
      release_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      tableName: "series",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  model.associate = (db) => {
    model.hasMany(db.Seasons, {
      as: "seasons",
      foreignKey: "serie_id",
    });
    model.belongsTo(db.Genres, {
      as: "genre",
      foreignKey: "genre_id",
    });
  };

  return model;
};
