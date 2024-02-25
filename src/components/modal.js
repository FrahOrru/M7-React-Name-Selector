import { faClose, faHeart, faWarning } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import { HeaderOptionButton } from "./header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List } from "./options";
import { useNames } from "../context/names";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 80%;
`;

const ModalList = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  max-height: 70vh;
  overflow: scroll;
`;

const ModalListElement = styled.li`
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &::marker {
    color: #50d8d7;
  }
`;

export const CloseButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: rgb(80, 216, 215);
  border: 0;
  border-radius: 16px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #44b2b1;
  }
`;

const Modal = ({
  isOpen,
  onClose,
  children,
  listElement,
  type,
  onUpdate,
  onManageDelete,
  onManageFavorite,
  onManageMaybe,
}) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
        {children}
        <ModalList>
          {listElement.map((elem, index) => (
            <ModalListElement key={index}>
              <p>{elem}</p>

              <List>
                <HeaderOptionButton onClick={() => onManageDelete(elem)}>
                  <FontAwesomeIcon
                    color="#50d8d7"
                    icon={faClose}
                  ></FontAwesomeIcon>
                </HeaderOptionButton>
                {type === "maybe" ? (
                  <HeaderOptionButton onClick={() => onManageFavorite(elem)}>
                    <FontAwesomeIcon
                      color="#50d8d7"
                      icon={faHeart}
                    ></FontAwesomeIcon>
                  </HeaderOptionButton>
                ) : (
                  <HeaderOptionButton onClick={() => onManageMaybe(elem)}>
                    <FontAwesomeIcon
                      color="#50d8d7"
                      icon={faWarning}
                    ></FontAwesomeIcon>
                  </HeaderOptionButton>
                )}
              </List>
            </ModalListElement>
          ))}
        </ModalList>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
