import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer } from "react-leaflet";

import { FiPlus } from "react-icons/fi";
import logoIcon from "../../images/logo-icon.svg";

import "./styles.css";
import "leaflet/dist/leaflet.css";

function PlacesMap() {
    return (
        <div id="places-map">
            <aside>
                <header>
                    <img src={logoIcon} alt="" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>
                        Muitas crianças estão esperando sua visita :)
                    </p>
                </header>
                <footer>
                    <strong>Goiânia</strong>
                    <span>Goiás</span>
                </footer>
            </aside>

            <Map
                center={[-16.6748433, -49.2527972]}
                zoom={13}
                style={{ width: "100%", height: "100%" }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */}
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                ></TileLayer>
            </Map>

            <Link to="/" className="add-place">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default PlacesMap;
