import React from "react";
import Card from "./Card";

const CardList = ({ dogs, onClick }) => {
  return (
    <div>
      {dogs.map((dog) => {
		//   console.log('dog :>> ', dog);
        return (
          <Card
            key={dog.id}
            id={dog.id}
            breeds={dog.breeds}
			coat={dog.coat}
			info={dog.info}
            character={dog.character}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};

export default CardList;
