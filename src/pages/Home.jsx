import React from "react";
import Header from "../components/Header";
import AddReview from "../components/AddReview";

function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col p-5">
        <div className="flex flex-row justify-center items-center p-20 gap-5">
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
        <div>
          <AddReview addReviews={""} />
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Home;
