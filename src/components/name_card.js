import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 60%;
  height: 50%;
`;

export const Name = styled.p`
  font-size: 40px;
  color: #50d8d7;
  font-weight: bold;
  text-align: center;
`;
export default function NameCard({ name }) {
  return (
    <Card>
      <Name>{name}</Name>
    </Card>
  );
}
