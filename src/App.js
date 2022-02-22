import styled from "styled-components";
import DropDown from "./assets/components/DropDown/DropDown";
import { Colors } from "./assets/Theme";

const AllHobbies = [
  { Id: 1, Text: "Swimming 🏊‍♂️", Selected: true },
  { Id: 2, Text: "Gaming 🎮", Selected: true },
  { Id: 3, Text: "Cooking 🍳", Selected: false },
  { Id: 4, Text: "Dancing 💃", Selected: false },
  { Id: 5, Text: "Fashion 👗", Selected: false },
  { Id: 6, Text: "Martial Arts 🥋", Selected: false },
  { Id: 7, Text: "Soccer ⚽", Selected: false },
  { Id: 8, Text: "Basketball 🏀", Selected: false },
  { Id: 9, Text: "Volleyball 🏐", Selected: false },
  { Id: 10, Text: "Reading 📖", Selected: false },
  { Id: 11, Text: "Painting 👩‍🎨", Selected: false },
  { Id: 12, Text: "Music 🎵", Selected: false },
  { Id: 13, Text: "Gardening 🌿", Selected: false },
  { Id: 14, Text: "Chess ♟", Selected: false },
  { Id: 15, Text: "Workout 🏋️‍♂️", Selected: false },
  { Id: 16, Text: "Photography 📷", Selected: false },
  { Id: 17, Text: "Video Gaming 🕹️", Selected: false },
  { Id: 18, Text: "Crafting ⚒️", Selected: false },
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
