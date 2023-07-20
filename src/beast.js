import React from 'react';
import { useState } from 'react';

import ImagePopup from './modals/imagepopup.js';


export default function Beast({title,imageUrl,description, beastId}) {
  let [favourites, setFavourites] = useState(0);
  let [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
    console.log(showModal);
  }

  function closeModal() {
    setShowModal(false);
    console.log(showModal);
  }

  function HandleFavourites(imageIndex){
    console.log(imageIndex);
    console.log(favourites);
    setFavourites(favourites => favourites + 1);
    console.log("favourites function running!!!!!!!!!!");
  }
  return (
    <div>
        <h2>{title}</h2>
        <div>
            <img className="hornImage" onClick={() => {HandleFavourites(); openModal() }} src={imageUrl} alt="a horned beast!" />
            {console.log(imageUrl)}
        </div>
        <span>{description}</span>
        <div>❤Favourites❤ = {favourites}</div>

        {showModal && <ImagePopup imageSrc={beastId} closeModal={closeModal}/>}
    </div>
  )
}
