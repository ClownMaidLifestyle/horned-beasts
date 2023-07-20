import React from 'react'

export default function ImagePopup(imageSrc, closeModal) {
    const imageSrcImsotired = imageSrc
    console.log(imageSrc["imageSrc"])
    console.log("i'm so tired + " +imageSrcImsotired);
  return (
    <div>
        <img className="popUpImage" src={`${imageSrc["imageSrc"]}`} alt="a Horned beast!!!" onclick={closeModal}/>
    </div>
  )
}
