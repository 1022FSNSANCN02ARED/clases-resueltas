module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Movies",
    {
      title: DataTypes.STRING,
      rating: DataTypes.DECIMAL,
      awards: DataTypes.INTEGER,
      release_date: DataTypes.DATE,
      length: DataTypes.INTEGER,
    },
    {
      tableName: "movies",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  Model.associate = (models) => {
    Model.belongsTo(models.Genres, {
      as: "genre",
      foreignKey: "genre_id",
    });
    Model.belongsToMany(models.Actors, {
      as: "actors",
      through: "actor_movie",
      foreignKey: "movie_id",
      otherKey: "actor_id",
      timestamps: false,
    });
  };

  return Model;
};
