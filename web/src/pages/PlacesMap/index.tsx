import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import { FiArrowRight, FiPlus } from "react-icons/fi";
import logoIcon from "../../images/logo.svg";

import "./styles.css";
import mapMarker from "../../utils/mapMarker";

interface PlaceInterface {
    name: string;
    about: string;
    instructions: string;
    working_hours: string;
    working_weekends: boolean;
    latitude: number;
    longitude: number;
    images?: Array<{
        id: number;
        url: string;
    }>;
}

function PlacesMap() {
    const [places, setPlaces] = useState([]);

    axios.get("http://localhost:3333/places").then((response) => {
        setPlaces(response.data.places);
    });

    return (
        <div id="places-map">
            <aside>
                <header>
                    <img src={logoIcon} alt="" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
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

                {places.map((place: PlaceInterface) => {
                    return (
                        <Marker
                            icon={mapMarker}
                            position={[place.latitude, place.longitude]}
                        >
                            <Popup
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="marker-popup"
                            >
                                {place.name}
                                <Link to="/places/1">
                                    <FiArrowRight size={25} color="#FFF" />
                                </Link>
                            </Popup>
                        </Marker>
                    );
                })}
            </Map>

            <Link to="/places/new" className="add-place">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default PlacesMap;
