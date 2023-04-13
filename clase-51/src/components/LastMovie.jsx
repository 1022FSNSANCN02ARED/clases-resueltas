import React from "react";
import BigCard from "./BigCard.jsx";
import imgMandalorian from "../images/mandalorian.jpg";
import MovieDetail from "./MovieDetail.jsx";

function LastMovie() {
  return (
    <BigCard title="Last movie in Data Base">
      <MovieDetail
        img={imgMandalorian}
        title="Star Wars - Mandalorian"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        consequatur explicabo officia inventore libero veritatis iure voluptate
        reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem
        culpa citationem ratione aperiam voluptatum non corporis ratione aperiam
        voluptatum quae dolorem culpa ratione aperiam voluptatum?"
        url="/"
      />
    </BigCard>
  );
}

export default LastMovie;
