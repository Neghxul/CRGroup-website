import React from "react";
import "../styles/GridHoverEffect.scss";
import { FaPlusCircle } from 'react-icons/fa'

const GridHoverEffect = () => {
  const gridItems = [
    { id: 1, text: "GRID 1", img: "https://robuspack.com/images/ff_main/table_01.png" },
    { id: 2, text: "GRID 2", img: "https://robuspack.com/images/ff_main/table_01.png" },
    { id: 3, text: "GRID 3", img: "https://robuspack.com/images/ff_main/table_01.png" },
    { id: 4, text: "GRID 4", img: "https://robuspack.com/images/ff_main/table_01.png" },
    { id: 5, text: "GRID 5", img: "https://robuspack.com/images/ff_main/table_01.png" },
    { id: 6, text: "GRID 6", img: "https://robuspack.com/images/ff_main/table_01.png" },
  ];

  return (
    <div className="container grid-container">
      {gridItems.map((item) => (
        <div key={item.id} className="grid">
          <img src={item.img} alt={item.text} />
          <div className="overlay">
            <FaPlusCircle className="faplus-icon" />
            <h3>{item.text}</h3>
            <span>Subtitle</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridHoverEffect;
