window.onload = () => {
  const titleInput = document.getElementById("title");

  let movie = {};

  fetch("http://localhost:3001/api/movies/5")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      titleInput.value = json.data.title;
      movie = json.data;
    });

  const form = document.getElementById("form");
  form.onsubmit = (evt) => {
    evt.preventDefault();
    movie.title = titleInput.value;

    updateMovie(movie);
  };

  const deleteBtn = document.getElementById("botonBorrar");
  deleteBtn.onclick = () => {
    fetch("http://localhost:3001/api/movies/delete/5", {
      method: "DELETE",
    });
  };
};

function updateMovie(movie) {
  return fetch("http://localhost:3001/api/movies/update/" + movie.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  });
}
