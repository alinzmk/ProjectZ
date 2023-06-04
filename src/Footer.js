import React from "react";
import './App.css';
import Navbar from "./Navbar";
import { Link, NavLink, useNavigate}
    from 'react-router-dom';

function Footer(){
    return (
        <>
        <div class="text-center justify-content-center m-4">
            <a id="footer" href="https://www.alanya.edu.tr" target="_blank"><p>ALANYA ALAADDIN KEYKUBAT UNIVERSITY</p></a>
        </div>
        </>
);
};

export default Footer;