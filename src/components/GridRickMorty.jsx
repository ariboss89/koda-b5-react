import React from "react";

function GridRickMorty(props) {
  return (
    <div className="place-items-center">
      <img src={props.img} alt={props.img} className="w-full" />
    </div>
  );
}

export default GridRickMorty;
