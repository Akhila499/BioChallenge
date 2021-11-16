import "./App.css";
import { Route, Routes } from "react-router-dom";
import GetDataFromApi from "./hooks/GetDataFromApi";
import PlacesRawList from "./components/PlacesRawList";
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
      </div>
    </>
  );
}

export default App;
