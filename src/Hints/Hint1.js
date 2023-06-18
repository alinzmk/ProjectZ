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
                <h2>Welcome Player</h2>
                <p>This is your first ever hint, <br></br>
                You must know hints are imporant in this game to understand and get into the story<br></br>
                and also get hints about that spesific level that makes you complete quite easier but...<br></br>
                do not trust anything blindly (an advice from a friend)
                    </p>
            </div>
        </div>
    </div>

        </>
);
};

export default Hint1;