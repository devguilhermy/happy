import React from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import leaflet from "leaflet";

import { FiArrowRight, FiPlus } from "react-icons/fi";
import logoIcon from "../../images/logo.svg";
import mapMarker from "../../images/map-marker.svg";

import "./styles.css";
import "leaflet/dist/leaflet.css";
import "dotenv/config";

const mapIcon = leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [180, 4],
});

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
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                ></TileLayer>

                <Marker
                    icon={mapIcon}
                    position={[-16.6748433, -49.2527972]}
                >
                    <Popup
                        closeButton={false}
                        minWidth={240}
                        maxWidth={240}
                        className="marker-popup"
                    >
                        Casa da Esperança
                        <Link to="">
                            <FiArrowRight size={24} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/" className="add-place">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default PlacesMap;
