import React from "react";
import { useSelector } from "react-redux";
import RowSurvey from "../components/RowSurvey";

function ShowSurvey() {
  const surveyState = useSelector((state) => state.surveys);

  return (
    <section className="flex-1 pl-5 pr-5">
      <table className="w-full">
        <thead className="border-2 border-collapse border-black">
          <tr className="text-center">
            <th>Nama Lengkap</th>
            <th>Umur</th>
            <th>Jenis Kelamin</th>
            <th>Apakah Anda Perokok ? </th>
            <th>Brand </th>
            <th>Action </th>
          </tr>
        </thead>
        <tbody className="border-2 border-solid border-black">
          {surveyState.surveys.map((survey, idx) => {
            return (
              <RowSurvey
                key={idx}
                id={survey.id}
                name={survey.fullName}
                age={survey.age}
                gender={survey.gender}
                isSmoker={survey.isSmoker}
                brand={survey.brand}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default ShowSurvey;
