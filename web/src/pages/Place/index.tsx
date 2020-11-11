import React, { useEffect, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";

import "./styles.css";
import Sidebar from "../../components/Sidebar";
import mapMarker from "../../utils/mapMarker";
import api from "../../services/api";

interface Place {
    name: string;
    about: string;
    instructions: string;
    working_hours: string;
    working_weekends: boolean;
    latitude: number;
    longitude: number;
}

export default function Place() {
    const [place, setPlace] = useState<Place>();

    useEffect(() => {
        api.get("/places/36").then((response) => {
            setPlace(response.data.place);
        });
    }, []);

    if (!place) {
        return <div>Carregando...</div>;
    }

    return (
        <div id="page-orphanage">
            <Sidebar />

            <main>
                <div className="orphanage-details">
                    <img
                        src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                        alt={place.name}
                    />

                    <div className="images">
                        <button className="active" type="button">
                            <img
                                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                                alt="Lar das meninas"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                                alt="Lar das meninas"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                                alt="Lar das meninas"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                                alt="Lar das meninas"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                                alt="Lar das meninas"
                            />
                        </button>
                        <button type="button">
                            <img
                                src="https://www.gcd.com.br/wp-content/uploads/2020/08/safe_image.jpg"
                                alt="Lar das meninas"
                            />
                        </button>
                    </div>

                    <div className="orphanage-details-content">
                        <h1>{place.name}</h1>
                        <p>{place.about}</p>

                        <div className="map-container">
                            <Map
                                center={[place.latitude, place.longitude]}
                                zoom={16}
                                style={{ width: "100%", height: 280 }}
                            >
                                <TileLayer
                                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                />
                                <Marker
                                    interactive={false}
                                    icon={mapMarker}
                                    position={[place.latitude, place.longitude]}
                                />
                            </Map>

                            <footer>
                                <a href="#">Ver rotas no Google Maps</a>
                            </footer>
                        </div>

                        <hr />

                        <h2>Instruções para visita</h2>
                        <p>{place.instructions}</p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6D6" />
                                {place.working_hours}
                            </div>
                            <div className="open-on-weekends">
                                <FiInfo size={32} color="#39CC83" />
                                {place.working_weekends
                                    ? `Atendemos <br />
                                fim de semana`
                                    : `Não atendemos <br />
                                fim de semana`}
                            </div>
                        </div>

                        <button type="button" className="contact-button">
                            <FaWhatsapp size={20} color="#FFF" />
                            Entrar em contato
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
