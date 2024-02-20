import styled from "styled-components";

const OptionButton = styled.li`
  margin: 0 10px;
`;

export function Options() {
  return (
    <div>
      <ul>
        <OptionButton>a</OptionButton>
        <OptionButton>b</OptionButton>
        <OptionButton>b</OptionButton>
      </ul>
    </div>
  );
}
