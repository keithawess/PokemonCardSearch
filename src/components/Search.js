import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import CardDisplay from "./CardDisplay";

function Search({ setSearch, search, favIds, setFavIds, favList, setFavList }) {
  const [searchBar, setSearchBar] = useState("");
  const [query, setQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [type, setType] = useState("");
  const { data: cards, error, loading } = useFetch(query);

  useEffect(() => {
    if (cards) {
      setSearch(cards.data);
    }
  }, [cards, setSearch]);

  return (
    <>
      <h1 className="textCenter">Search</h1>
      <div className="flex marginCenter justifyCenter wrap">
        <input
          placeholder="Search"
          value={searchBar}
          onChange={(e) =>
            !showOptions ? setSearchBar(e.target.value) : setSearchBar("")
          }
        ></input>
        <button
          onClick={() => {
            if (true) {
              if (type !== "" && showOptions) {
                setQuery(`q=types:${type}`);
              } else {
                if (query !== searchBar) {
                  setSearch([]);
                  setQuery(`q=name:${searchBar}*`);
                }
              }
            }
          }}
        >
          Search
        </button>{" "}
        <button
          onClick={() => {
            setShowOptions(!showOptions);
            setSearchBar("");
          }}
        >
          Advanced Search Options
        </button>
        {showOptions && (
          <div>
            <label htmlFor="type">Type: </label>
            <select
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              <option>Colorless</option>
              <option>Fire</option>
              <option>Water</option>
              <option>Lightning</option>
              <option>Fighting</option>
              <option>Psychic</option>
              <option>Colorless</option>
              <option>Darkness</option>
              <option>Metal</option>
              <option>Dragon</option>
              <option>Fairy</option>
            </select>
          </div>
        )}
      </div>

      {error && <div className="textCenter margin5">{error}</div>}

      {loading && <div className="textCenter">Loading...</div>}

      {search && (
        <div className="flex rowWrap displayContainer marginCenter justifyCenter">
          {search.map((card) => {
            return (
              <CardDisplay
                key={card.id}
                cardUrl={card.images.small}
                cardName={card.name}
                isFav={favIds.includes(card.id)}
                setFavIds={setFavIds}
                setFavList={setFavList}
                cardId={card.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default Search;
