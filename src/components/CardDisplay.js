import React from "react";
import favOn from "../favoriteOn.png"
import favOff from "../favoriteOff.png"

function CardDisplay({cardUrl, cardName, cardId, isFav, setFavList}) {

  return (
    
    <div className="half marginCenter cardContainer">
        <div>
          <h2>{cardName}</h2>
        </div>
        {isFav && (
          <img src={favOn} alt="Remove favorite" onClick={()=>
            {
              setFavList(current=> current.filter((fav)=>{
                return cardId !== fav.id;
              }))
              
            }
          }
           className="float favButton" />

        )}
        {!isFav && (
          <img src={favOff} alt="Add Favorite" onClick={()=>
            {
              setFavList(current=> [...current, {name: cardName, id: cardId, url: cardUrl}]);
            }
          }
           className="float favButton" />

        )}
        <img src={cardUrl} alt={`${cardName} card`}/>
    </div>

  );
}

export default CardDisplay;
