import "./App.css";
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import GetDataFromApi from "./hooks/GetDataFromApi";
import PlacesRawList from "./components/PlacesRawList";
import PlacesList from "./components/PlacesList";
import PlaceListItemDetails from "./components/PlaceListItemDetails";

function App() {
  const { appState } = GetDataFromApi();
  console.log("FromApi", appState);

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="//*"
            element={<PlacesRawList appState={appState} />}
          ></Route>
          <Route
            path="/places/:placeId"
            element={<PlaceListItemDetails appState={appState} />}
          />
        </Routes>
        {/* <PlacesRawList appState={appState} /> */}
      </div>
    </>
  );
}

export default App;
