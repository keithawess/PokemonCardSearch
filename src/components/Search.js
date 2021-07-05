import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import CardDisplay from "./CardDisplay";

function Search({ setSearch, search, favIds, setFavIds, favList, setFavList }) {
  const [searchBar, setSearchBar] = useState("");
  const [query, setQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [color, setColor] = useState("");
  const { data: cards, error, loading } = useFetch(query);

  useEffect(() => {
    if (cards) {
      setSearch(cards.data);
    }
  }, [cards]);

  return (
    <>
      <h1 className="textCenter">Search</h1>
      <div className="flex marginCenter justifyCenter wrap">
        <input
          placeholder="Search"
          value={searchBar}
          onChange={(e) => setSearchBar(e.target.value)}
        ></input>
        <button
          onClick={() => {
            if (searchBar.length > 0) {
              if (color !== "" && showOptions) {
                setQuery(`${searchBar}&colors=${color}`);
              } else {
                if (query !== searchBar) {
                  setSearch([]);
                  setQuery(searchBar);
                }
              }
            }
          }}
        >
          Search
        </button>{" "}
        <button onClick={() => setShowOptions(!showOptions)}>
          Advanced Search Options
        </button>
        {showOptions && (
          <div>
            <label htmlFor="color">Color: </label>
            <input
              type="color"
              id="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
        )}
      </div>

      {error && <div className="textCenter margin5">{error}</div>}

      {loading && <div className="textCenter">Loading...</div>}

      {search && (
        <div className="flex rowWrap displayContainer marginCenter">
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
