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

  return Model;
};
