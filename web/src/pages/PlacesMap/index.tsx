import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import logoIcon from "../../images/logo.svg";

import "./styles.css";
import mapMarker from "../../utils/mapMarker";
import api from "../../services/api";
import MarkerPopup from "../../components/MarkerPopup";

interface Place {
    id: number;
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
    const [places, setPlaces] = useState<Place[]>([]);

    useEffect(() => {
        api.get("/places").then((response) => {
            setPlaces(response.data.places);
        });
    }, []);

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

                {places.map((place) => {
                    return (
                        <Marker
                            icon={mapMarker}
                            position={[place.latitude, place.longitude]}
                            key={place.id}
                        >
                            <MarkerPopup content={place.name} id={555} />
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
