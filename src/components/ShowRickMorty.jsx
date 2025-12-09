import React from "react";
import GridRickMorty from "./GridRickMorty";

function ShowRickMorty({ arrChar }) {
  return (
    <>
      {arrChar.map((character, idx) => {
        return (
          <GridRickMorty
            id={character.id}
            name={character.name}
            img={character.image}
            key={idx}
          />
        );
      })}
    </>
  );
}

export default ShowRickMorty;
