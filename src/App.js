import PlantPage from "./pages/Plant/Plant";
import NotFoundPage from "./pages/NotFound/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PlantPage} />
        <Route path="/plants/:id" component={PlantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
