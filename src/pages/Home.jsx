import React from "react";
import Header from "../components/Header";
import AddReview from "../components/AddReview";
import Footer from "../components/Footer";
import { useState } from "react";

function Home() {
  const [, setReviews] = useState([]);
  let data = JSON.parse(localStorage.getItem("review"));

  return (
    <div>
      <main className="flex flex-col ">
        <div className="flex flex-row justify-center items-center p-20 gap-5 gallery min-w-200 select-none">
          <div className="gallery-cell ">
            <img
              src="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
              width="100vw"
              height={"100vh"}
            />
          </div>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/8.jpeg"
            width="150vw"
            height={"100vh"}
          />

          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            width="200vw"
            height={"100%"}
          />
          <img
            src="https://rickandmortyapi.com/api/character/avatar/8.jpeg"
            width="150vw"
            height={"100vh"}
          />
          <img
            src="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
            width="100vw"
            height={"100vh"}
          />
        </div>
        <div className="px-50 min-w-200">
          <AddReview changeReviews={setReviews} />
        </div>
        <div className="grid grid-cols-3 mt-20 gap-2 p-20 w-full bg-gray-600">
          <>
            {data != null &&
              data.map((item, idx) => {
                return (
                  <>
                    <div
                      className="place-items-start bg-sky-300 p-5 rounded-md hover:bg-sky-600"
                      id={idx}
                    >
                      <p className="font-bold text-2xl mb-5 text-asap first-letter:text-3xl">
                        Review
                      </p>

                      <p className="text-left">{item.name}</p>
                      <p className="text-left">{item.email}</p>
                      <p className="text-left">{item.review}</p>
                    </div>
                  </>
                );
              })}
          </>
        </div>
      </main>
    </div>
  );
}

export default Home;
