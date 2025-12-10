import React from "react";
import { useDispatch } from "react-redux";
import { deleteSurveys } from "../redux/slices/surveys.slice";

function RowSurvey(props) {
  const dispatch = useDispatch();
  return (
    <tr className="text-center border-2 border-solid border-black">
      <td className="p-2">{props.name}</td>
      <td className="p-2">{props.age}</td>
      <td className="p-2">{props.gender}</td>
      <td className="p-2">{props.isSmoker}</td>
      <td className="p-2">{`${props.brand} `}</td>
      <td className="flex justify-center items-center p-2">
        <button
          className="flex justify-center items-center text-white bg-red-500 border px-5 p-2 rounded-md"
          onClick={() => {
            dispatch(deleteSurveys(props.id));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RowSurvey;
