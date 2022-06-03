import React from "react";
import PlantDetails from "../../components/PlantDetails/PlantDetails";
import PlantNav from "../../components/PlantNav/PlantNav";
import axios from "axios";
import { Link } from "react-router-dom";

class Plant extends React.Component {
  state = {
    plants: [],
    selectedPlant: null,
    hadFetchingError: false,
  };

  componentDidMount() {
    axios
      .get("https://plant-server-2022.herokuapp.com/plants?api_key=grogu")
      .then((response) => {
        this.setState({
          plants: response.data,
        });

        let plantId;
        if (this.props.match.params.id) {
          // specific plant page (has an id) -> its in the URL
          plantId = this.props.match.params.id;
        } else {
          // two cases: home page (no id)
          plantId = response.data[0].id;
        }

        return this.fetchPlantById(plantId);
      })
      .then((response) => {
        this.setState({
          selectedPlant: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          hasFetchingError: true,
        });
      });
  }

  componentDidUpdate(prevProps) {
    // plantId is undefined!
    const plantId = this.props.match.params.id;
    // prevPlantId is some id
    const prevPlantId = prevProps.match.params.id;

    if (typeof plantId === 'undefined') {
        const defaultPlantId = this.state.plants[0].id;

        this.fetchPlantById(defaultPlantId)
            .then(response => {
                this.setState({
                    selectedPlant: response.data
                })
            });
    } else if (plantId !== prevPlantId) {
        this.fetchPlantById(plantId)
            .then(response => {
                this.setState({
                    selectedPlant: response.data
                })
            });
    }
  }

  fetchPlantById = (plantId) => {
    return axios
      .get(
        `https://plant-server-2022.herokuapp.com/plants/${plantId}?api_key=grogu`
      );
  };

  render() {
    if (this.state.hasFetchingError) {
      return <p>Error loading data from server</p>;
    }

    if (!this.state.selectedPlant) {
      return <p>Loading...</p>;
    }

    // this.state.selectedPlant.id
    // Do NOT show any plants that have that id ^

    const filteredPlants = this.state.plants.filter(plant => {
        return plant.id !== this.state.selectedPlant.id;
    });

    return (
      <div>
        <Link to="/">Plant Tracker</Link>
        <PlantNav plants={filteredPlants} />
        <PlantDetails plant={this.state.selectedPlant} />
      </div>
    );
  }
}

export default Plant;
