import React from "react";
import '../App.css';
import Navbar from "../Navbar";
import pp from "../images/aliosman.png"

function AliOsman(){

    const localStorage = window.localStorage;
    localStorage.setItem("char4", "aliosman");

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
                <p class="storyParag">Hizir Reis, born in 1953 in Istanbul, Turkey, is an esteemed scholar who has made substantial contributions to the field of history. With a particular focus on pyramids, he has earned recognition for his profound research and extensive knowledge in this area.

After completing his undergraduate studies in the History Department at Istanbul University, Hizir Reis embarked on an academic journey that led him to pursue a doctoral degree at the renowned Georgetown University in the United States. His doctoral studies provided him with a comprehensive understanding of pyramid architecture, construction techniques, and their cultural significance.

Hizir Reis's research on pyramids has been highly regarded within the academic community. His scholarly publications, which have appeared in esteemed scientific journals, shed light on the mysteries surrounding these ancient structures. His meticulous investigations and analytical prowess have yielded valuable insights into the historical context, engineering marvels, and symbolic implications of pyramids.

Beyond his academic achievements, Hizir Reis has also thrived financially as a result of his research endeavors. The financial success he has achieved has not only afforded him a more prosperous lifestyle but has also facilitated his ongoing exploration and further studies.

Hizir Reis possesses a multifaceted personality characterized by his conservative worldview, unwavering courage, and the ability to make critical decisions. His unwavering dedication to his research, coupled with his fearless approach to tackling challenges, has propelled him to the forefront of his field.

Outside the realm of academia, Hizir Reis finds solace and inspiration in various hobbies. He is an avid reader, drawing knowledge from diverse literary sources, and enjoys taking long walks immersed in nature's beauty. His passion for capturing moments through photography, particularly in natural landscapes, further enriches his life.

Furthermore, Hizir Reis is an ardent lover of feline companionship. His deep affection for cats is exemplified by his cherished pet named Duman, who accompanies him on his journeys. The presence of Duman brings him comfort and companionship during his travels, providing a respite from the rigors of academic pursuits.

Despite his accomplishments, Hizir Reis remains grounded and exhibits a few phobias that he navigates with resilience. He experiences a mild fear of flying during long-haul flights, but this does not deter his passion for exploration. Additionally, he occasionally experiences slight claustrophobia when traversing dimly lit environments. Nevertheless, he manages these fears with composure and continues to venture into new territories.

In his personal life, Hizir Reis cherishes his role as a father and takes pride in nurturing his daughter with love, guidance, and an emphasis on education. He encourages her to be bold, independent in thought, and to pursue her aspirations wholeheartedly.

Hizir Reis's academic achievements and passion for historical research have culminated in the establishment of a research center in Brazil. Through this institution, he actively mentors aspiring scholars and fosters international collaborations, embodying his commitment to knowledge dissemination and academic growth.

In conclusion, Hizir Reis stands as an esteemed academic figure, renowned for his contributions to the field of history, particularly in relation to pyramids. His diligent research, courageous decision-making, and unwavering dedication to education and exploration have solidified his position as a respected authority in his domain.</p>
            </div>
        </div>
    </div>

        </>
);
};

export default AliOsman;