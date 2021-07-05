import React from "react";

function CardDisplay({cardUrl, cardName, cardId, isFav, setFavList}) {

  return (
    
    <div className="half marginCenter cardContainer">
        <div>
          <h2>{cardName}</h2>
        </div>
        {isFav && (
          <button onClick={()=>
            {
              setFavList(current=> current.filter((fav)=>{
                return cardId !== fav.id;
              }))
              
            }
          }
           className="float favButton"></button>

        )}
        {!isFav && (
          <button onClick={()=>
            {
              setFavList(current=> [...current, {name: cardName, id: cardId, url: cardUrl}]);
            }
          }
           className="float favButton">A</button>

        )}
        <img src={cardUrl} alt={`${cardName} card`}/>
    </div>

  );
}

export default CardDisplay;
