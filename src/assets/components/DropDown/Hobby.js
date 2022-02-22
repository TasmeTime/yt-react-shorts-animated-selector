import styled from "styled-components";
import { Colors } from "../../Theme";
const HobbyEl = styled.article`
  padding: 0.5rem 1rem;
  background-color: ${Colors.GrayHighlight};
  border-radius: 5px;
  cursor: pointer;
`;

export default function Hobby({ hobby, updateHobby }) {
  const { Id, Text } = hobby;
  return (
    <HobbyEl
      onClick={() => {
        updateHobby(Id, false);
      }}
    >
      {Text}
    </HobbyEl>
  );
}
