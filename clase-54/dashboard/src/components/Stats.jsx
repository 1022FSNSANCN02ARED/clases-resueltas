import React from "react";
import SmallCard from "./SmallCard.jsx";

const myStats = [
  {
    id: 2,
    title: "Movies in Data Base",
    value: "21",
    color: "primary",
    icon: "fa-film",
  },
  {
    id: 3,
    title: "Actors quantity",
    value: "49",
    color: "warning",
    icon: "fa-user",
  },
  {
    id: 1,
    title: "Total awards",
    value: "79",
    color: "success",
    icon: "fa-award",
  },
];

function Stats() {
  return (
    <div className="row flex-wrap">
      {myStats.map((stat) => {
        return (
          <SmallCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            color={stat.color}
            icon={stat.icon}
          />
          // <SmallCard
          //   key={stat.id}
          //   {...stat}
          // />
        );
      })}
      {/* [ SmallCard,SmallCard,SmallCard ] */}
    </div>
  );
}

export default Stats;
