import React from "react";

import { FiArrowRight } from "react-icons/fi";
import "./styles.css";
import logoImg from "../../images/logo.svg";

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
                <a href="" className="enter-app">
                    <FiArrowRight size={24} color="black" />
                </a>
            </div>
        </div>
    );
}
