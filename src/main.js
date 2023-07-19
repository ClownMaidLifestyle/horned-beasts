import React from 'react';
import Beast from './beast.js';
import Beetle from './images/Beetle.jpg';
import Elf from './images/Elk.jpg';


export default function Main(){
  return (
    <main>
        <Beast 
        title="The Rhino Beetle" 
        imageUrl={Beetle} 
        description="These insects use their horns to fight rivals and display their prowess to mates" 
        beastNumber={0}/>

        <Beast 
        title="The Elk" 
        imageUrl={Elf} 
        description="The majestic stag's antlers are a kind of horn that can grow up to 9kg in weight each"
         beastNumber={1}/> 
    </main>
  )
}
