import React from "react";
import { Link } from "react-router-dom";

function PlantNav({ plants }) {
  return (
    <ul>
      {plants.map((plant) => {
        return (
          <li key={plant.id}>
            <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PlantNav;
