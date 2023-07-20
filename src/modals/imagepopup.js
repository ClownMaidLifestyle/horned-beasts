import React from 'react'
import { useState } from 'react';

export default function ImagePopup({imageSrc, closeModal}) {
    console.log(closeModal)
    const imageSrcImsotired = imageSrc
    console.log(imageSrc["imageSrc"])
    console.log("i'm so tired + " +imageSrcImsotired);



  return (
    <div>
        <img className="popUpImage" src={`${imageSrc}`} alt="a Horned beast!!!" onClick={() => closeModal()}/>
    </div>
  )
}
