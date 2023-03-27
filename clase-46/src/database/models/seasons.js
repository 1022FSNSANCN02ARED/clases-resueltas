const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Seasons",
    {
      title: DataTypes.STRING,
      number: DataTypes.INTEGER,
      release_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      tableName: "seasons",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  model.associate = (db) => {
    model.belongsTo(db.Series, {
      as: "serie",
      foreignKey: "serie_id",
    });
    model.hasMany(db.Episodes, {
      as: "episodes",
      foreignKey: "season_id",
    });
  };

  return model;
};
