module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Actors",
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.DECIMAL,
      rating: DataTypes.INTEGER,
    },
    {
      tableName: "actors",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Model.associate = (models) => {
    Model.belongsToMany(models.Movies, {
      as: "movies",
      through: "actor_movie",
      foreignKey: "actor_id",
      otherKey: "movie_id",
      timestamps: false,
    });
  };

  return Model;
};
