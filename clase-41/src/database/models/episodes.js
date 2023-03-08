const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const model = sequelize.define(
    "Episodes",
    {
      title: DataTypes.STRING,
      number: DataTypes.INTEGER,
    },
    {
      tableName: "episodes",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  model.associate = (db) => {
    model.belongsToMany(db.Actors, {
      as: "actors",
      foreignKey: "actor_id",
      otherKey: "episode_id",
      through: "actor_episode",
    });
  };

  return model;
};
