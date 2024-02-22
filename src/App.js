import styled from "styled-components";
import "./App.css";
import NameCard from "./components/name_card";
import { Options } from "./components/options";
import { NamesProvider, useNames } from "./context/names";
import { useEffect, useState } from "react";
import Header from "./components/header";

function App() {
  return (
    <NamesProvider>
      <AppContent />
    </NamesProvider>
  );
}

function AppContent() {
  const [currentName, setCurrentName] = useState("");

  const { AddToFavoriteNames, deleteName, getRandomName, addMaybeName } =
    useNames();

  const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90%;
  `;

  useEffect(() => {
    handleGetRandomName();
  }, []);

  const handleGetRandomName = () => {
    setCurrentName(getRandomName());
  };

  const handleAddToFavorite = () => {
    console.log("app.js add to favorite" + currentName);
    AddToFavoriteNames(currentName);
    handleGetRandomName();
  };

  const handleDeleteName = () => {
    deleteName(currentName);
    handleGetRandomName();
  };

  const handleAddMaybeName = () => {
    addMaybeName(currentName);
    handleGetRandomName();
  };

  return (
    <div className="App">
      <Header></Header>
      <AppContainer>
        <NameCard name={currentName}></NameCard>
        <Options
          addMaybeName={handleAddMaybeName}
          AddToFavoriteNames={handleAddToFavorite}
          deleteName={handleDeleteName}
        ></Options>
      </AppContainer>
    </div>
  );
}

export default App;
