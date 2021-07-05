import React from "react";

function CardDisplay({cardUrl, cardName}) {

  return (
    
    <div className="half marginCenter">
        <h1>{cardName}<button>Add Favorite</button></h1>
        <img src={cardUrl}/>
    </div>

  );
}

export default CardDisplay;
