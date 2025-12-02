import React from "react";
import GridRickMorty from "./GridRickMorty";

function ShowRickMorty({ arrChar }) {
  return (
    <>
      {arrChar.map((character, idx) => {
        return <GridRickMorty img={character.image} key={idx} />;
      })}
    </>
  );
}

export default ShowRickMorty;
