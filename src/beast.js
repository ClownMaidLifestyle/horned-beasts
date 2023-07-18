import React from 'react'

export default function beast({title,imageUrl,description, handleFavourites, favourites}) {
  return (
    <div>
        <h2>{title}</h2>
        <img onclick={handleFavourites()} src={imageUrl} alt="a horned beast!"/>
        <span>{description}</span>
        <div>❤Favourites❤ = {favourites}</div>
    </div>
  )
}
