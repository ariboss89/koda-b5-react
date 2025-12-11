import React from "react";
import { Link, Navigate, useNavigate } from "react-router";

function GridRickMorty(props) {
  //const { id, slug } = useParams();
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/rickmorty/${props.id}/${props.name}`);
  };

  return (
    <div className="place-items-center bg-primary py-5">
      <div
        className="flex flex-col rounded-sm bg-white hover:bg-amber-50 cursor-pointer"
        onClick={clickHandler}
      >
        <img
          src={props.img}
          alt={props.name}
          className="w-full pl-5 pr-5 pt-5"
        />
        <p className="first-letter:text-2xl text-black font-bold pt-5 pb-5 cursor-pointer">
          {props.name}
        </p>
      </div>
    </div>

    /* <Link to={"'/"} replace=true></Link> */
  );
}

export default GridRickMorty;
