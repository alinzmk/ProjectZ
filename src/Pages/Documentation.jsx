import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from 'axios'
import fileDownload from 'js-file-download'


function Documentation(){
    const handleDownload = async () => {
        const fileUrl = 'https://m.media-amazon.com/images/M/MV5BOWRiMzRlZGUtNjA1Zi00OGJlLTg3Y2QtYjQ3MDNhOTQ1OWVjXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_FMjpg_UX1000_.jpg'; // Replace with the actual file URL
        const response = await fetch(fileUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ıcandoit';
        link.click();
        window.URL.revokeObjectURL(url);
    };
    return (
        <>
        <Navbar/>
        <div class="container pt-5 documentation">
        <div class="row">
            <div class="col-lg-9">
                <h2>Documentation</h2>
                <div class="col-10 m-3 d-none">
                    <button class="btn btn-dark" onClick={handleDownload}>Download Image</button>
                </div>
                <div class="col-10 m-3">
                    <a target="_blank" href="https://ogralanyaedutr-my.sharepoint.com/:w:/g/personal/180254033_ogr_alanya_edu_tr/EX8fmsv2c5pLpoW0qYTxXnMBLfydEbkR4OX2MrxicsEwsA?e=38gvAH"><button class="btn btn-lg btn-secondary me-4 mb-3">Documentation</button></a>
                    <a target="_blank" href="https://ogralanyaedutr-my.sharepoint.com/:w:/g/personal/180254033_ogr_alanya_edu_tr/EX8fmsv2c5pLpoW0qYTxXnMBLfydEbkR4OX2MrxicsEwsA?e=38gvAH"><button class="btn btn-lg btn-secondary mb-3">Thesis</button></a>
                </div>
                <div class="col-10 m-3">
                </div>
                <div class="col-10 m-3">
                    <p>You can contact us for more details<button class="btn btn-dark m-3"><Link className="nav-link" to="/WhoAreWe">Who Are We</Link></button></p>
                </div>
            </div>
            
            
        </div>
    </div>
        <Footer/>
        </>
);
};

export default Documentation;