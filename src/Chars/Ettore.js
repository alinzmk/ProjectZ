import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/ettore.png"

function Ettore(){

    const localStorage = window.localStorage;
    localStorage.setItem("char1", "ettore");
    
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Ettore Soprano </h2>
                <p class="storyParag">
                
Ettore Soprano, a distinguished archaeologist, devoted his life to studying the Egyptian pyramids, unraveling their historical significance and construction techniques. Tragically, he met his demise at the hands of ruthless bandits who sought to exploit his valuable knowledge. Ettore's legacy lives on, inspiring others to explore the mysteries of the pyramids. However, whispers suggest that his unwavering pursuit of truth may have contributed to his downfall. His tragic fate serves as a cautionary reminder of the delicate balance between passion and obsession in the quest for knowledge.

Ettore's groundbreaking research and contributions continue to inspire future generations of archaeologists. His untimely demise stands as a reminder of the risks faced by those driven by a relentless thirst for discovery. Despite the circumstances surrounding his death, Ettore Soprano's legacy endures, fueling the curiosity of scholars who seek to uncover the secrets of the ancient world.
                    </p>
            </div>
        </div>
    </div>

        </>
);
};

export default Ettore;