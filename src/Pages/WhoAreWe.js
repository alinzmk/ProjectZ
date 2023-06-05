import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import Footer from "../Footer";

function WhoAreWe(){
    return (
        <>
        <Navbar/>
        <div class="container pt-lg-5 whoarewe">
            <div class="row">
                <div class="col-lg-9">
                    <h2>Who Are We</h2>
                    <p class="storyParag">Greetings! We are a team of students from ALKU, working together on a graduation project to create a side-scrolling RPG game. 
                        Our team consists of <a class="names" target="blank" href="https://www.linkedin.com/in/ali-nazım-küçük/">Ali Nazım</a>, 
                        who specializes in web development and user experience design, 
                        and <a class="names" target="blank" href="https://www.linkedin.com/in/ümit-numan-duman-bb7176228/">Ümit Numan</a> and 
                        <a class="names" target="blank" href="https://www.linkedin.com/in/halil-ibrahim-özdemir-280542223/"> Halil İbrahim</a>, who are experienced game developers.
                        Our goal is to create an exciting and engaging game that will appeal to players of all ages. We are committed to pushing the boundaries of gaming and are always eager
                        to learn and improve. We value collaboration, creativity, and hard work, and we are enthusiastic about bringing our vision to life.
                        Thank you for considering our team, and we look forward to sharing our progress with you as we continue to develop this exciting project. You can
                        contact us just with clicking our names.</p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
);
};

export default WhoAreWe;