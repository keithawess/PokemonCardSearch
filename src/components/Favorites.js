import React from "react";
import CardDisplay from "./CardDisplay";

function Favorites({ favList, setFavList }) {
  return (
    <>
      <h1>Favorites</h1>
      <div>
          {favList.map((fav) => {
            return (
              <CardDisplay
                key={fav.id}
                isFav={true}
                cardUrl={fav.url}
                cardName={fav.name}
                cardId={fav.id}
                setFavList={setFavList}
              />
            );
          })}
      </div>
    </>
  );
}

export default Favorites;
