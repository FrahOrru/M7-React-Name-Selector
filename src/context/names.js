import { createContext, useContext, useState } from "react";

const allNames = [
  "Sophia",
  "Jackson",
  "Olivia",
  "Liam",
  "Emma",
  "Noah",
  "Ava",
  "Lucas",
  "Isabella",
  "Oliver",
  "Mia",
  "Ethan",
  "Amelia",
  "Aiden",
  "Harper",
  "Elijah",
  "Evelyn",
  "James",
  "Charlotte",
  "Benjamin",
  "Abigail",
  "William",
  "Emily",
  "Alexander",
  "Madison",
  "Michael",
  "Elizabeth",
  "Mason",
  "Sofia",
  "Logan",
  "Avery",
  "Matthew",
  "Ella",
  "Daniel",
  "Scarlett",
  "Henry",
  "Grace",
  "Joseph",
  "Lily",
  "Samuel",
  "Chloe",
  "David",
  "Victoria",
  "Carter",
  "Riley",
  "Wyatt",
  "Aria",
  "Jayden",
  "Zoey",
  "Gabriel",
];
const NamesContext = createContext();

export const useNames = () => useContext(NamesContext);

export const NamesProvider = ({ children }) => {
  const [favoriteNames, setFavoriteNames] = useState([]);
  const [availableNames, setAvailableNames] = useState(allNames);
  const [maybeNames, setMaybeNames] = useState([]);

  const AddToFavoriteNames = (name) => {
    setFavoriteNames([...favoriteNames, name]);
    setAvailableNames(availableNames.filter((namex) => namex !== name));

    if (maybeNames.includes(name)) {
      setMaybeNames(maybeNames.filter((namex) => namex !== name));
    }
  };

  const deleteName = (name) => {
    setAvailableNames(availableNames.filter((namex) => namex !== name));
    if (maybeNames.includes(name)) {
      setMaybeNames(maybeNames.filter((namex) => namex !== name));
    }
    if (favoriteNames.includes(name)) {
      setFavoriteNames(favoriteNames.filter((namex) => namex !== name));
    }
  };

  const getRandomName = () => {
    if (availableNames.length > 0) {
      return availableNames[Math.floor(Math.random() * availableNames.length)];
    } else {
      return false;
    }
  };

  const addMaybeName = (name) => {
    if (!maybeNames.includes(name)) {
      setMaybeNames([...maybeNames, name]);
    }
    if (favoriteNames.includes(name)) {
      setFavoriteNames(favoriteNames.filter((namex) => namex !== name));
    }
  };

  const getMaybeNames = () => {
    return maybeNames;
  };
  const getFavoriteNames = () => favoriteNames;

  const restart = () => {
    setAvailableNames(allNames);
    setFavoriteNames([]);
    setMaybeNames([]);
  };

  return (
    <NamesContext.Provider
      value={{
        AddToFavoriteNames,
        deleteName,
        getRandomName,
        addMaybeName,
        getMaybeNames,
        getFavoriteNames,
        restart,
      }}
    >
      {children}
    </NamesContext.Provider>
  );
};
