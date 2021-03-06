import styled from "styled-components";
import DropDown from "./assets/components/DropDown/DropDown";
import { Colors } from "./assets/Theme";

const AllHobbies = [
  { Id: 1, Text: "Swimming đââī¸", Selected: true },
  { Id: 2, Text: "Gaming đŽ", Selected: true },
  { Id: 3, Text: "Cooking đŗ", Selected: false },
  { Id: 4, Text: "Dancing đ", Selected: false },
  { Id: 5, Text: "Fashion đ", Selected: false },
  { Id: 6, Text: "Martial Arts đĨ", Selected: false },
  { Id: 7, Text: "Soccer âŊ", Selected: false },
  { Id: 8, Text: "Basketball đ", Selected: false },
  { Id: 9, Text: "Volleyball đ", Selected: false },
  { Id: 10, Text: "Reading đ", Selected: false },
  { Id: 11, Text: "Painting đŠâđ¨", Selected: false },
  { Id: 12, Text: "Music đĩ", Selected: false },
  { Id: 13, Text: "Gardening đŋ", Selected: false },
  { Id: 14, Text: "Chess â", Selected: false },
  { Id: 15, Text: "Workout đī¸ââī¸", Selected: false },
  { Id: 16, Text: "Photography đˇ", Selected: false },
  { Id: 17, Text: "Video Gaming đšī¸", Selected: false },
  { Id: 18, Text: "Crafting âī¸", Selected: false },
];

const AppEl = styled.div`
  z-index: 0;
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.Background};
  color: ${Colors.White};
`;

function App() {
  return (
    <AppEl>
      <DropDown HobbyList={AllHobbies} />
    </AppEl>
  );
}

export default App;
