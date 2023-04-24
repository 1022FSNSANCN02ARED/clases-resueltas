import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        console.log("[MOVIES LIST] Cambió el estado");
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
                  <Link to={`/movies/${movie.id}`}>
                    <button className="btn text-success">
                      <i className="fas fa-eye"></i>
                    </button>
                  </Link>
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
