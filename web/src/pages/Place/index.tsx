import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    images: Array<{
        id: number;
        url: string;
    }>;
}

interface PlaceParams {
    id: string;
}

export default function Place() {
    const params = useParams<PlaceParams>();
    const { id } = params;
    const [place, setPlace] = useState<Place>();
    const [bannerIndex, setBannerIndex] = useState(0);

    useEffect(() => {
        api.get(`/places/${id}`).then((response) => {
            if (response.request.status === 200) {
                setPlace(response.data.place);
            } else {
                console.log(response.data.error);
            }
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
                    <img src={place.images[bannerIndex].url} alt={place.name} />

                    <div className="images">
                        {place.images.map((image, index) => {
                            return (
                                <button
                                    type="button"
                                    key={image.id}
                                    onClick={() => {
                                        setBannerIndex(index);
                                    }}
                                    className={
                                        bannerIndex === index ? "active" : ""
                                    }
                                >
                                    <img src={image.url} alt={place.name} />
                                </button>
                            );
                        })}
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
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${place.latitude},${place.longitude}`}
                                >
                                    Ver rotas no Google Maps
                                </a>
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
                            {place.working_weekends ? (
                                <div className="open-on-weekends">
                                    <FiInfo size={32} color="#39CC83" />
                                    Atendemos <br />
                                    fim de semana
                                </div>
                            ) : (
                                <div className="open-on-weekends not-open">
                                    <FiInfo size={32} color="#FF669D" />
                                    Não atendemos <br />
                                    fim de semana
                                </div>
                            )}
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
