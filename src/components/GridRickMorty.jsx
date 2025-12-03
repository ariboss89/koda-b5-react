import React from "react";
import { Link } from "react-router";

function GridRickMorty(props) {
  return (
    <div className="place-items-center">
      <img src={props.img} alt={props.img} className="w-full" />
    </div>

    /* <Link to={"'/"} replace=true></Link> */
  );
}

export default GridRickMorty;
