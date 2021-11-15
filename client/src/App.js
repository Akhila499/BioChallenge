import "./App.css";
import { GetDataFromApi } from "./hooks/GetDataFromApi";
import PlacesRawList from "./components/PlacesRawList";

function App() {
  const { appState } = GetDataFromApi();
  console.log("GetDataFromApi", appState);

  return (
    <>
      <div>Hello</div>
      <PlacesRawList appState={appState} />
    </>
  );
}

export default App;
