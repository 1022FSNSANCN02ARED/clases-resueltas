import React from "react";
import GenreItem from "./GenreItem.jsx";
import BigCard from "./BigCard.jsx";

const genres = [
  { id: 1, name: "Acción" },
  { id: 2, name: "Animación" },
  { id: 3, name: "Aventura" },
  { id: 4, name: "Ciencia Ficción" },
];

function GenresList() {
  return (
    <BigCard title="Genres in Data Base">
      <div className="row">
        {genres.map((genre) => {
          return <GenreItem key={genre.id} name={genre.name} />;
        })}
      </div>
    </BigCard>
  );
}

export default GenresList;
