import { faClose, faHeart, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

export const OptionButton = styled.li`
  margin: 0 10px;
  background-color: #50d8d7;
  border-radius: 25px;
  height: 50px;
  width: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #44b2b1;
  }
`;

export function Options({ AddToFavoriteNames, deleteName, addMaybeName }) {
  return (
    <div>
      <List>
        <OptionButton onClick={deleteName}>
          <FontAwesomeIcon color="white" icon={faClose}></FontAwesomeIcon>
        </OptionButton>
        <OptionButton onClick={addMaybeName}>
          <FontAwesomeIcon color="white" icon={faWarning}></FontAwesomeIcon>
        </OptionButton>
        <OptionButton onClick={AddToFavoriteNames}>
          <FontAwesomeIcon color="white" icon={faHeart}></FontAwesomeIcon>
        </OptionButton>
      </List>
    </div>
  );
}
