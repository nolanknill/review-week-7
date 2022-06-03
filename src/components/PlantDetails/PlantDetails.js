import "./PlantDetails.css";
import React from "react";

function PlantDetails(props) {
  return (
    <div>
      <h2>Plan Details</h2>
      <h3>Name: {props.plant.name}</h3>
      <h3>Type of plant: {props.plant.type}</h3>
      <h3>
        How Often does this plant need water: {props.plant.water_frequency}
      </h3>
      <img className="plant" src={props.plant.image_url} alt={props.plant.name} />
    </div>
  );
}

export default PlantDetails;
