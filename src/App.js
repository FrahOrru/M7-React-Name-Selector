import styled, { keyframes } from "styled-components";
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
    gap: 2rem;
  `;

  const shadows = keyframes`
  0% {
    text-shadow: none;
  }
  10% {
    text-shadow: 3px 3px 0 var(--color-secondary);
  }
  20% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary);
  }
  30% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
  }
  40% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
  }
  50% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
  }
  60% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
  }
  70% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
  }
  80% {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary);
  }
  90% {
    text-shadow: 3px 3px 0 var(--color-secondary);
  }
  100% {
    text-shadow: none;
  }
`;

  const move = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  40% {
    transform: translate(-12px, -12px);
  }
  50% {
    transform: translate(-12px, -12px);
  }
  60% {
    transform: translate(-12px, -12px);
  }
  100% {
    transform: translate(0px, 0px);
  }
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
    setEndOfTheNames(false);
    restart();
  };

  const EndGameName = styled(Name)`
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
    font-weight: 400;
    text-transform: uppercase;
    font-size: calc(2rem + 2vw);
    text-align: center;
    margin: 0;
    color: var(--color-primary);

    animation: ${shadows} 1.2s ease-in infinite, ${move} 1.2s ease-in infinite;
    letter-spacing: 0.4rem;
  `;

  return (
    <div className="App">
      <Header></Header>
      <AppContainer>
        {endOfTheNames ? (
          <>
            <EndGameName>All names have been used!</EndGameName>
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
