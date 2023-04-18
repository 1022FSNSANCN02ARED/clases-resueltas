import React, { Component } from "react";

class MoviesList extends Component {
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
          {/* MAP con los datos de cada película */}
          <tr>
            <th>Id</th>
            <th>Titulo</th>
            <th>Premios</th>
            <th>Duración</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MoviesList;
