## Routes

<Route path="/" exact component={PlantPage}> 
<Route path="/plants/:id" component={PlantPage}>


# What to do when converting from json file to axios (to retrieve data from API)?

- Initialize state:
{
    plants: [], 
    selectedPlant: null,
    hadFetchingError: false
}

- fetch the data
    -> componentDidMount
        -> install axios
        -> inside of axios.get.then(set state here)
        -> axios
            .get(https://plant-server-2022.herokuapp.com/plants?api_key=grogu)
            .then(response => {
                this.setState({
                    plants: response.data
                })

// two cases: home page (no id) 
                const plantId = response.data[0].id
// specific plant page (has an id) -> its in the URL
                const plantId = 

                // fetch the selected plant
                return axios
                    .get(`https://plant-server-2022.herokuapp.com/plants/${plantId}?api_key=grogu`);

            })
            .then(response => {
                this.setState({
                    selectedPlant: response.data
                })
            })
            .catch(error => {
                this.setState({
                    hasFetchingError: true
                })
            })  

render() {
    if (this.state.hasFetchingError) {
        return (<p>Error loading data from server</p>);
    }

    // regular render method down here with JSX
}



## Phase Two

- How to link to specific pages

- Navigating to different plants, does not update selectedPlant
    -> props.match.params.id has changed
    -> componentDidUpdate will be triggered
        -> fetch the new selected plant and ONLY if its new
        -> call function that gets the plant information from the API and sets it on state

- Filtering? How do