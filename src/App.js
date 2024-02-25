import styled from "styled-components";
import "./App.css";
import NameCard from "./components/name_card";
import { Options } from "./components/options";
import { NamesProvider, useNames } from "./context/names";
import { useEffect, useState } from "react";
import Header from "./components/header";
import { CloseButton } from "./components/modal";
import { Name } from "./components/name_card";
function App() {
  return (
    <NamesProvider>
      <AppContent />
    </NamesProvider>
  );
}

function AppContent() {
  const [currentName, setCurrentName] = useState("");
  const [endOfTheNames, setEndOfTheNames] = useState(false);
  const {
    AddToFavoriteNames,
    deleteName,
    getRandomName,
    addMaybeName,
    restart,
  } = useNames();

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
    if (!getRandomName()) {
      setCurrentName("");
      setEndOfTheNames(true);
    } else {
      setCurrentName(getRandomName());
    }
  };

  const handleAddToFavorite = () => {
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

  const handleRestart = () => {
    setEndOfTheNames(true);
    restart();
  };

  return (
    <div className="App">
      <Header></Header>
      <AppContainer>
        {endOfTheNames ? (
          <>
            <Name>All names have been used!</Name>
            <CloseButton onClick={handleRestart}>Restart</CloseButton>
          </>
        ) : (
          <>
            <NameCard name={currentName}></NameCard>
            <Options
              addMaybeName={handleAddMaybeName}
              AddToFavoriteNames={handleAddToFavorite}
              deleteName={handleDeleteName}
            ></Options>
          </>
        )}
      </AppContainer>
    </div>
  );
}

export default App;
