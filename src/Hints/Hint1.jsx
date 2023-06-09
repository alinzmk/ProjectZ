import React from "react";
import '../App.css';
import Navbar from "../Navbar";

function Hint1(){
    
    const localStorage = window.localStorage;
    localStorage.setItem("hint1", "n7YJ9KdPmX");

    return (
        <>
        <Navbar/>
        <div class="container pt-5">
        <div class="row">
            <div class="col-lg-9">
                <h2>My Dearest Son,</h2>
                <p>
                    As I write these words, a mixture of pride and sorrow fills my heart.<br></br>
                    Though I won't be by your side, I want you to know that you have my unwavering <br></br>
                    love and support. Stay strong, my son, and face life's challenges with determination. <br></br>
                    Take good care of your mother, for her love and strength are immeasurable. Carry my love <br></br>
                    within you, and let it guide you through each step of your journey.<br></br>

                    With all my love,<br></br>

                    Your Father, Michael</p>
            </div>
        </div>
    </div>

        </>
);
};

export default Hint1;