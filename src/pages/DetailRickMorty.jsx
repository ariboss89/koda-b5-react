import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DetailRickMorty() {
  const { id, slug } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `${import.meta.env.VITE_MORTY_API}/${id}`;
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`${response.status}: ${response.statusText}`);
        const data = await response.json();

        data.name != slug
          ? setCharacters("DATA NOT FOUND")
          : setCharacters(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id, slug]);

  return (
    <>
      <div>
        <main>
          {characters != "DATA NOT FOUND" ? (
            <section className=" flex justify-around items-center gap-10 p-10">
              <div className="flex justify-center items-center w-full">
                <img src={characters.image} alt={characters.name} />
              </div>
              <div className="flex flex-col justify-center items-start w-full">
                <div className="flex flex-col justify-between items-start gap-5">
                  <p className="text-left first-letter:text-2xl">
                    {characters.name}
                  </p>
                  <p className="text-left first-letter:text-2xl">
                    {characters.gender}
                  </p>
                  <p className="text-left first-letter:text-2xl">
                    {characters.species}
                  </p>
                  <p className="text-left first-letter:text-2xl">
                    {characters.status}
                  </p>
                </div>
                <p></p>
              </div>
            </section>
          ) : (
            <section className=" flex justify-around items-center gap-10 p-10 min-h-screen">
              <div className="flex justify-center items-center w-full ">
                <p className="h-full text-9xl">{characters}</p>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}

export default DetailRickMorty;
