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
                
Ettore Soprano, a distinguished archaeologist, dedicated his life to the exploration and study of the pyramids in Egypt. As an expert in his field, he immersed himself in the mysteries and wonders of these ancient structures, unraveling their historical significance and shedding light on their construction techniques. His passion for archaeology and unwavering commitment to understanding the secrets of the pyramids made him a respected figure within the academic community.

Tragically, Ettore's life was cut short by a devastating event. While pursuing his research in the vast desert surrounding the pyramids, he fell victim to a group of ruthless bandits. The bandits, notorious for their illicit activities in the area, saw an opportunity to exploit Ettore's valuable knowledge and resources. His untimely demise sent shockwaves through the archaeological community, leaving a void that would be deeply felt by his colleagues and loved ones.

Ettore's legacy as an archaeologist lives on through his groundbreaking research and contributions to the understanding of the pyramids. His work not only expanded our knowledge of ancient civilizations but also inspired countless others to delve into the mysteries of Egypt's iconic landmarks. Although his life was tragically cut short, Ettore Soprano's passion and dedication continue to inspire future generations of archaeologists who strive to follow in his footsteps and uncover the secrets of the past.    
                    </p>
            </div>
        </div>
    </div>

        </>
);
};

export default Ettore;