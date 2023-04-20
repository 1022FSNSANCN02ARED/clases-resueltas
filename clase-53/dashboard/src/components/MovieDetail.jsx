import React, { Component } from "react";

class MovieDetail extends Component {
  constructor(props) {
    super(props);

    const id = props.match.params.id;
    console.log("Match:", props.match);

    this.state = {
      id,
      movie: null,
    };
  }

  componentDidMount() {
    const id = this.state.id;

    fetch(`http://localhost:3001/api/movies/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const movie = result.data;
        this.setState({
          id,
          movie,
        });
      });
  }

  render() {
    const movie = this.state.movie;
    if (movie) {
      //tengo movie
      return (
        <>
          <h1>{movie.title}</h1>
          <p>Genre: {movie.genre.name}</p>
          <p>Length: {movie.length}</p>
        </>
      );
    } else {
      //No tengo movie todavía
      return <p>Cargando...</p>;
    }
  }
}

export default MovieDetail;
