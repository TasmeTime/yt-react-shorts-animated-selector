import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { Colors } from "../../Theme";

const ListItemEl = styled.article`
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-in-out;
  transition-delay: 0.1s;

  background: linear-gradient(
    45deg,
    ${Colors.Gradient.G1[0]},
    ${Colors.Gradient.G1[1]}
  );

  border-radius: 5px;
  color: ${Colors.White};
  transform: translateY(${(p) => (p.visible ? "0" : "50%")});
  opacity: ${(p) => (p.visible ? "1" : "0")};
  cursor: pointer;
  width: fit-content;
`;

export default function ListItem({ hobby, removeItem, updateHobbie }) {
  const { Id, Text } = hobby;
  const [Visible, setVisible] = useState(false);
  const ItemRef = useRef(null);

  var observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) setVisible(true);
      else setVisible(false);
    },
    { threshold: [0] }
  );

  useEffect(() => {
    observer.observe(ItemRef.current);
    return () => {
      observer.disconnect();
    };
  }, [hobby]);

  const AddHobbie = () => {
    updateHobbie(Id, true);
    removeItem(Id);
  };

  return (
    <ListItemEl visible={Visible} ref={ItemRef} onClick={AddHobbie}>
      {Text}
    </ListItemEl>
  );
}
