import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import CardDisplay from "./CardDisplay";

function Search({setSearch, search}) {
  const [searchBar, setSearchBar] = useState("");
  const [query, setQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [color, setColor] = useState("");
  const { data: cards, error, loading } = useFetch(query);

  useEffect(() => {
    if (cards) {
        setSearch(cards.data)
    }
    console.log(search);
  }, [cards]);

  return (
    <>
      <h1 className="textCenter">Search</h1>
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
                if(query !== searchBar)
                {
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
      <div className="flex rowWrap searchContainer marginCenter">
        {search.map((card) => {
          return <CardDisplay cardUrl={card.images.small} cardName={card.name} />;
        })}
      </div>
    </>
  );
}

export default Search;
