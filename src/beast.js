import React from 'react'

export default function beast({title,imageUrl,description, handleFavourites, favourites, beastNumber}) {
  return (
    <div>
        <h2>{title}</h2>
        <img onClick={() => handleFavourites(beastNumber)} src={imageUrl} alt="a horned beast!"/>
        <span>{description} {beastNumber}</span>
        <div>❤Favourites❤ = {favourites[beastNumber]}</div>
    </div>
  )
}
