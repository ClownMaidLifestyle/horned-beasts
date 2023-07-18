import React from 'react';
import Beast from './beast.js';
import Beetle from './images/Beetle.jpg';
import Elf from './images/Elk.jpg';

import { useState } from 'react';

export default function Main() {

    let [favourites, setFavourites] = useState([0,0]);
    function handleFavourites(imageIndex){
        console.log(imageIndex);
        console.log(favourites);
        setFavourites(favourites.map((favourite) => favourite + 1));
        console.log("favourites function running!!!!!!!!!!");
    }
  return (
    <main>
        <Beast 
        title="The Rhino Beetle" 
        imageUrl={Beetle} 
        description="These insects use their horns to fight rivals and display their prowess to mates" 
        handleFavourites={handleFavourites} 
        favourites={favourites}
        beastNumber={0}/>

        <Beast 
        title="The Elk" 
        imageUrl={Elf} 
        description="The majestic stag's antlers are a kind of horn that can grow up to 9kg in weight each"
         handleFavourites={handleFavourites} 
         favourites={favourites}
         beastNumber={1}/> 
    </main>
  )
}
