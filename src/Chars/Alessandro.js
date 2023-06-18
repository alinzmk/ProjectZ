import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/alessandro.png"

function Alessandro(){
    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-3">                
                <img src={pp} class="char-img"/>
            </div>
            <div class="col-lg-9 mt-5 mt-lg-0">
                <h2>Alessandro Soprano</h2>
                <p class="storyParag">
Alessandro Soprano, a 30-year-old Italian archaeologist, has dedicated his life to unraveling the truth behind a deeply personal tragedy. At the age of 15, his father, also an esteemed archaeologist, was tragically killed, leaving Alessandro devastated. This heartbreaking event ignited an unwavering determination within him to seek justice and uncover the circumstances surrounding his father's untimely demise.

Driven by his passion for archaeology and armed with his academic background, Alessandro has embarked on an exhaustive investigation into his father's murder. With meticulous attention to detail, he delves into historical records, explores archaeological sites, and tirelessly seeks out individuals who may hold vital information. Alessandro's pursuit is not only fueled by a quest for justice but also by a profound desire to honor his father's memory and ensure his legacy lives on.

Despite the emotional weight he carries, Alessandro remains resolute and unwavering in his pursuit of the truth. Through his relentless dedication, he has expanded his knowledge of ancient civilizations and forged connections with fellow scholars and experts in the field. Alessandro Soprano's life is a testament to the power of determination and resilience as he tirelessly works towards bringing closure to his father's murder, honoring his legacy, and seeking justice for the untimely loss that forever changed his life.                </p>
            </div>
        </div>
    </div>

        </>
);
};

export default Alessandro;