window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  const favoritesStorage = localStorage.getItem("favorites");
  let favoriteMovies = [];
  if (favoritesStorage) {
    favoriteMovies = JSON.parse(favoritesStorage);
  }

  // Aqui debemos agregar nuestro fetch
  fetch("http://localhost:3001/api/movies")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      json.data
        .filter((movie) => {
          return favoriteMovies.includes(movie.id);
        })
        .forEach((movie) => {
          const card = document.createElement("div");
          card.setAttribute("class", "card");

          const h1 = document.createElement("h1");
          h1.textContent = movie.title;

          const p = document.createElement("p");
          p.textContent = `Rating: ${movie.rating}`;

          const favoriteButton = document.createElement("button");
          favoriteButton.textContent = "Agregar a favoritas";
          favoriteButton.onclick = () => {
            favoriteMovies.push(movie.id);
            favoriteButton.style.display = "none";
            localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
          };

          if (favoriteMovies.includes(movie.id)) {
            favoriteButton.style.display = "none";
          }

          const duracion = document.createElement("p");
          duracion.textContent = `Duración: ${movie.length}`;

          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre?.name || "-"}`;

          container.appendChild(card);
          card.appendChild(h1);
          card.appendChild(p);
          card.appendChild(genero);
          card.appendChild(duracion);
          card.appendChild(favoriteButton);
        });
    });
};
