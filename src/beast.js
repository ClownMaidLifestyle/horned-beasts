import React from 'react';
import { useState } from 'react';



export default function Beast({title,imageUrl,description, beastNumber}) {
  let [favourites, setFavourites] = useState([0,0]);


  function HandleFavourites(imageIndex){
    console.log(imageIndex);
    console.log(favourites);
    setFavourites(favourites.map((favourite) => favourite + 1));
    console.log("favourites function running!!!!!!!!!!");
  }
  return (
    <div>
        <h2>{title}</h2>
        <div>
            <img className="hornImage" onClick={() =>HandleFavourites(beastNumber)} src={imageUrl} alt="a horned beast!"/>
        </div>
        <span>{description} {beastNumber}</span>
        <div>❤Favourites❤ = {favourites[beastNumber]}</div>
    </div>
  )
}
