import { faHeart, faWarning } from "@fortawesome/free-solid-svg-icons";
import { List, OptionButton } from "./options";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNames } from "../context/names";
import Modal from "./modal";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const { getMaybeNames, getFavoriteNames } = useNames();

  const HeaderOptionButton = styled(OptionButton)`
    height: 30px;
    width: 30px;
    background-color: #ffffff;
    font-size: 12px;
    &:hover {
      background-color: #50d8d766;
    }
  `;

  const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `;

  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Header>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>{modalType === "maybe" ? "Maybe" : "Favorite"} Names</h1>
      </Modal>
      <List>
        <HeaderOptionButton onClick={openModal("maybe")}>
          <FontAwesomeIcon color="#50d8d7" icon={faWarning}></FontAwesomeIcon>
        </HeaderOptionButton>
        <HeaderOptionButton onClick={openModal("favorite")}>
          <FontAwesomeIcon color="#50d8d7" icon={faHeart}></FontAwesomeIcon>
        </HeaderOptionButton>
      </List>
    </Header>
  );
}
