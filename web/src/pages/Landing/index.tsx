import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../images/logo.svg";
import { FiArrowRight } from "react-icons/fi";
import "./styles.css";

export default function Landing() {
    return (
        <div id="landing-page">
            <div className="content-wrapper">
                <img src={logoImg} alt="Logo Happy" />
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>
                        Visite orfanatos e mude o dia de muitas
                        crianças
                    </p>
                </main>
                <div className="location">
                    <strong>Goiânia</strong>
                    <span>Goiás</span>
                </div>
                <Link to="/places" className="enter-app">
                    <FiArrowRight size={24} color="black" />
                </Link>
            </div>
        </div>
    );
}
