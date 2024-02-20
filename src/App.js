import "./App.css";
import NameCard from "./components/name_card";
import { Options } from "./components/options";
import { NamesProvider, useNames } from "./context/names";

function App() {
  const {
    AddToFavoriteNames,
    deleteName,
    getRandomName,
    addMaybeName,
    getMaybeNames,
    getFavoriteNames,
  } = useNames();

  return (
    <NamesProvider>
      <div className="App">
        <header className="App-header">aaaaaaaaaa</header>
        <NameCard name={getRandomName}></NameCard>
        <Options></Options>
      </div>
    </NamesProvider>
  );
}

export default App;
