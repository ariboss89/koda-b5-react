import { useState, useEffect } from "react";
import ShowRickMorty from "../components/ShowRickMorty";

function RickMorty() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState();
  const [species, setSpecies] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    if (search != "" || species != "0") {
      filterAndSearch();
    }

    setSearch("");
    setSpecies("");
  };

  const filterAndSearch = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?name=${search}&species=${species}`
      );
      if (!response.ok)
        throw new Error(`${response.status}: ${response.statusText}`);

      const data = await response.json();
      const ricks = data.results;
      const newCharacters = ricks.map((item, idx) => {
        return {
          id: idx,
          image: item.image,
        };
      });
      setCharacters(newCharacters);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      const url = "https://rickandmortyapi.com/api/character";
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw new Error(`${response.status}: ${response.statusText}`);
        const data = await response.json();
        const ricks = data.results;
        const newCharacters = ricks.map((item, idx) => {
          return {
            id: idx,
            image: item.image,
          };
        });
        setCharacters(newCharacters);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <header className="p-5 h-[15vh] bg-sky-400 text-2xl font-bold select-none">
        Rick & Morty Fetching Data
      </header>
      <main>
        <section>
          <form noValidate onSubmit={submitHandler}>
            <div className="flex flex-col p-5 items-center md:flex-row">
              <label className="text-left mr-5 min-w-30">Find character</label>
              <input
                name="yourName"
                type="text"
                placeholder="Find character"
                className="pl-5 border-2 border-solid p-1 border-black rounded-md min-w-80"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <label className="text-left ml-5 mr-5 min-w-30">
                Choose Species
              </label>
              <select
                value={species}
                onChange={(e) => setSpecies(e.target.value)}
                name="species"
                className="border-black border-2 border-solid rounded-md p-1 min-w-80"
              >
                <option selected value="0">
                  Choose Species
                </option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Humanoid">Humanoid</option>
                <option value="Animal">Animal</option>
                <option value="Mythological Creature">
                  Mythological Creature
                </option>
                <option value="Robot">Robot</option>
                <option value="Cronenberg">Cronenberg</option>
              </select>
              <button className="border-2 border-solid border-black rounded-md p-1 ml-5 w-full cursor-pointer bg-sky-400 text-white font-bold">
                Search
              </button>
            </div>
          </form>
        </section>
        <div className="grid grid-cols-3 grid-rows-3 gap-2 p-2">
          <ShowRickMorty arrChar={characters} />
        </div>
      </main>
    </div>
  );
}

export default RickMorty;
