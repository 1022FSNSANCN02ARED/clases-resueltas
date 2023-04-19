import React, { Component } from "react";

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchAllMovies();
  }

  fetchAllMovies() {
    fetch("http://localhost:3001/api/movies")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          movies: result.data,
        });
      });
  }

  deleteMovie(movie) {
    fetch("http://localhost:3001/api/movies/delete/" + movie.id, {
      method: "delete",
    }).then(() => {
      this.fetchAllMovies();
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Premios</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map((movie) => {
            return (
              <tr key={movie.id}>
                <th>{movie.id}</th>
                <th>{movie.title}</th>
                <th>{movie.awards}</th>
                <th>{movie.length}</th>
                <th>
                  <button
                    className="btn text-danger"
                    onClick={() => this.deleteMovie(movie)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesList;
