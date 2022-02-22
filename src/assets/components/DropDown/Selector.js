import styled from "styled-components";
import { RiSearch2Line } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Colors } from "../../Theme";
import ListItem from "./ListItem";
import { useState, useEffect } from "react";

const SelectorEl = styled.article`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.CardBg};
  padding: 1rem;
  gap: 1rem;
  border-radius: 10px;
  transform: all 0.3s ease-in-out;
  height: ${(p) => (p.open ? "200px" : "3.75rem")};
  overflow: hidden;
`;

const InputSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  padding-bottom: ${(p) => (p.open ? "1rem" : "0")};
  height: 2.5rem;

  > svg {
    color: ${Colors.White};
    font-size: 1.5rem;
  }

  ::after {
    content: "";
    transition: all 0.2s ease-in-out;
    width: ${(p) => (p.open ? "100%" : "0")};
    height: 3px;
    border-radius: 20px;
    background-color: ${Colors.White};
    position: absolute;
    opacity: ${(p) => (p.open ? "1" : "0")};
    left: 0;
    bottom: 0;
  }
`;

const CloseBtn = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  color: ${Colors.White};
  cursor: pointer;
  font-size: 1.5rem;
  opacity: ${(p) => (p.open ? "1" : "0")};
`;

const Input = styled.input`
  all: unset;
  flex: 1;
  font-size: 1.2rem;
  font-weight: 600;
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-height: 200px;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #212121;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(43, 43, 43);
  }
`;

export default function Selector({ hobbiesHandle }) {
  const { Hobbies, UpdateHobbieState } = hobbiesHandle;
  const [SearchList, setSearchList] = useState([]);
  const [SearchInp, setSearchInp] = useState("");
  const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSearchList(Hobbies);
  }, [Hobbies]);

  const RemoveItem = (Id) => {
    setSearchList((SearchList) => SearchList.filter((x) => x.Id !== Id));
    if (SearchInp !== "") setSearchInp("");
  };

  const Search = (value) => {
    setSearchInp(value);
    if (value) {
      setSearchList(
        Hobbies.filter((x) => {
          if (!x.Selected) {
            return x.Text.toLocaleLowerCase().includes(
              value.toLocaleLowerCase()
            );
          } else return false;
        })
      );
    } else {
      setSearchList(Hobbies);
    }
  };

  return (
    <SelectorEl open={IsOpen}>
      <InputSection open={IsOpen}>
        <RiSearch2Line />
        <Input
          onFocus={() => {
            setIsOpen(true);
          }}
          value={SearchInp}
          onChange={(e) => {
            Search(e.target.value);
          }}
          placeholder="type at least 3 letter"
        />
        <CloseBtn
          open={IsOpen}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <IoCloseCircleOutline />
        </CloseBtn>
      </InputSection>
      <List>
        {SearchList.map((h) => {
          if (!h.Selected) {
            return (
              <ListItem
                key={h.Id}
                hobby={h}
                removeItem={RemoveItem}
                updateHobbie={UpdateHobbieState}
              />
            );
          }
        })}
      </List>
    </SelectorEl>
  );
}
