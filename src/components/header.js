import { faHeart, faWarning } from "@fortawesome/free-solid-svg-icons";
import { List, OptionButton } from "./options";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNames } from "../context/names";
import Modal from "./modal";

export const HeaderOptionButton = styled(OptionButton)`
  height: 30px;
  width: 30px;
  background-color: #ffffff;
  font-size: 12px;
  &:hover {
    background-color: #50d8d766;
  }
`;

export const HeaderCSS = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalContent, setModalContent] = useState([]);

  const {
    getMaybeNames,
    getFavoriteNames,
    AddToFavoriteNames,
    deleteName,
    addMaybeName,
  } = useNames();

  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type);
    if (type === "maybe") {
      setModalContent(getMaybeNames());
    } else {
      setModalContent(getFavoriteNames());
    }
  };

  const updateModalContent = () => {
    if (modalType === "maybe") {
      setModalContent(getMaybeNames());
    } else {
      setModalContent(getFavoriteNames());
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onManageDelete = (elem) => {
    deleteName(elem);
  };

  const onManageFavorite = (elem) => {
    AddToFavoriteNames(elem);
  };

  const onManageMaybe = (elem) => {
    addMaybeName(elem);
  };

  useEffect(() => {
    updateModalContent();
  });

  return (
    <HeaderCSS>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        listElement={modalContent}
        type={modalType}
        onUpdate={updateModalContent}
        onManageDelete={(elem) => onManageDelete(elem)}
        onManageFavorite={(elem) => onManageFavorite(elem)}
        onManageMaybe={(elem) => onManageMaybe(elem)}
      >
        <h1>{modalType === "maybe" ? "Maybe" : "Favorite"} Names</h1>
      </Modal>
      <List>
        <HeaderOptionButton onClick={() => openModal("maybe")}>
          <FontAwesomeIcon color="#50d8d7" icon={faWarning}></FontAwesomeIcon>
        </HeaderOptionButton>
        <HeaderOptionButton onClick={() => openModal("favorite")}>
          <FontAwesomeIcon color="#50d8d7" icon={faHeart}></FontAwesomeIcon>
        </HeaderOptionButton>
      </List>
    </HeaderCSS>
  );
}
