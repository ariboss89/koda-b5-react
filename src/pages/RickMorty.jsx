import { useState } from "react";
import ShowRickMorty from "../components/ShowRickMorty";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useSearchParams } from "react-router";
import useFetch from "../hooks/useFetch";

function RickMorty() {
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("0");
  const [_, setSearchParam] = useSearchParams();

  const url = import.meta.env.VITE_MORTY_API;
  const { data, isLoading, error } = useFetch(url);

  const submitHandler = (event) => {
    event.preventDefault();

    if (search != "" || species != "0") {
      setSearchParam(
        new URLSearchParams({ [event.target.name]: event.target.value })
      );
      filterAndSearch();
    }

    setSearch("");
    setSpecies("");
  };

  const filterAndSearch = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_MORTY_API}?name=${search}&species=${species}`
      );
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);

      const data = await response.json();
      const ricks = data.results;
      const newCharacters = ricks.map((item, idx) => {
        return {
          id: idx,
          idChar: item.id,
          image: item.image,
          name: item.name,
        };
      });
      setCharacters(newCharacters);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <main>
        <section>
          <form
            noValidate
            onSubmit={submitHandler}
            className="flex flex-row justify-between items-center p-5 gap-2"
          >
            <div className="flex justify-between items-center w-full h-4">
              <label className="text-left mr-5">Find character</label>
              <input
                name="search"
                type="text"
                placeholder="Find character"
                className="pl-5 border-2 border-solid p-1 border-black rounded-md"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <label className="text-left mr-5">Choose Species</label>
              <select
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                name="species"
                className="border-black border-2 border-solid rounded-md p-1"
              >
                <option disabled>Choose Species</option>
                <option value={""}>All</option>
                <option value={"Human"}>Human</option>
                <option value={"Alien"}>Alien</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Animal">Animal</option>
                <option value="Mythological Creature">
                  Mythological Creature
                </option>
                <option value="Robot">Robot</option>
                <option value="Cronenberg">Cronenberg</option>
              </select>
            </div>
            <button className="flex justify-center items-center w-full border-2 cursor-pointer rounded-sm p-1 bg-primary font-bold border-white">
              Search
            </button>
          </form>
        </section>
        <div className="grid grid-cols-3 grid-rows-3 gap-2 px-5 pb-5">
          <ShowRickMorty arrChar={data} />
        </div>
      </main>
    </div>
  );
}

export default RickMorty;
