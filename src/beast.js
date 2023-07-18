import React from 'react'

export default function beast({title,imageUrl,description}) {
  return (
    <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="a horned beast!"/>
        <span>{description}</span>
    </div>
  )
}
