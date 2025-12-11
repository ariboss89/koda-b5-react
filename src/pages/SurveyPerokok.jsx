import React from "react";
import AddSurvey from "../components/AddSurvey";
import Header from "../components/Header";
import ShowSurvey from "../components/ShowSurvey";
import Footer from "../components/Footer";

function SurveyPerokok() {
  return (
    <div>
      <main className="flex min-h-[85vh] p-5">
        <ShowSurvey />
        <AddSurvey />
      </main>
    </div>
  );
}

export default SurveyPerokok;
