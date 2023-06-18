import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/aliosman.png"

function AliOsman(){

    const localStorage = window.localStorage;
    localStorage.setItem("char5", "aliosman");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Ali Osman Kurtoğlu </h2>
                <p class="storyParag">Ali Osman, born in 1953, is a renowned historian specializing in pyramids. He earned recognition for his extensive research and contributions to the field. After studying history at Istanbul University, he pursued a doctorate at Georgetown University, deepening his knowledge of pyramid architecture and cultural significance.

Ali Osman's scholarly publications in esteemed journals shed light on the mysteries surrounding ancient pyramids. His meticulous investigations provide valuable insights into their historical context, engineering marvels, and symbolic implications.

Beyond academia, Ali Osman enjoys reading, nature walks, and photography, particularly capturing landscapes. He has a deep affection for his cat companion, Duman, who accompanies him on his journeys.

Despite a mild fear of flying and occasional claustrophobia, Ali Osman remains resilient, continuing to explore new territories. He takes pride in being a loving and guiding father, encouraging his daughter to pursue her aspirations.

Ali Osman's achievements led to the establishment of a research center in Brazil, where he mentors scholars and fosters international collaborations, furthering knowledge dissemination.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default AliOsman;