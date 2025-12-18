import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  surveys: [],
  nextId: 1,
};

const surveySlice = createSlice({
  initialState,
  name: "surveys",
  reducers: {
    addSurveys: (prevState, action) => {
      prevState.surveys.push({
        id: prevState.nextId,
        ...action.payload,
      });
      prevState.nextId++;
    },

    deleteSurveys: (prevState, action) => {
      const newSurveys = prevState.surveys.filter((survey) => {
        return survey.id !== action.payload;
      });
      prevState.surveys = newSurveys;
    },
  },
  extraReducers: {},
});

export const { addSurveys, deleteSurveys } = surveySlice.actions;
export default surveySlice.reducer;
