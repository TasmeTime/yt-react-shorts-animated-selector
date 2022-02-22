import styled from "styled-components";
import { useState } from "react";
import Hobby from "./Hobby";
import Selector from "./Selector";

const DropDownEl = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  z-index: 1;
  position: relative;
`;

const Title = styled.h2``;
const HobbiesEl = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export default function DropDown({ HobbyList }) {
  const [Hobbies, setHobbies] = useState(HobbyList);

  const UpdateHobbieState = (hobbyId, newState) => {
    if (hobbyId) {
      setHobbies((Hobbies) =>
        Hobbies.map((h) => {
          if (h.Id === hobbyId) return { ...h, Selected: newState };
          else return h;
        })
      );
    }
  };

  //   const RemoveHobbie = (hobbyId) => {
  //     if (hobbyId) {
  //       setHobbies((Hobbies) =>
  //         Hobbies.map((h) => {
  //           if (h.Id === hobbyId) return { ...h, Selected: false };
  //           else return h;
  //         })
  //       );
  //     }
  //   };

  return (
    <DropDownEl>
      <Title>Hobbies</Title>
      <HobbiesEl>
        {Hobbies.map((h) => {
          if (h.Selected) {
            return (
              <Hobby hobby={h} key={h.Id} updateHobby={UpdateHobbieState} />
            );
          }
        })}
      </HobbiesEl>
      <Selector hobbiesHandle={{ Hobbies, UpdateHobbieState }} />
    </DropDownEl>
  );
}
