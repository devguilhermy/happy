import React from "react";
import { Link } from "react-router-dom";
import { Popup } from "react-leaflet";
import { FiArrowRight } from "react-icons/fi";

import "./styles.css";

interface PopupProps {
    content: any;
    id: number;
}

export default function MarkerPopup(props: PopupProps) {
    return (
        <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="marker-popup"
        >
            {props.content}

            <Link to={`/places/${props.id}`}>
                <FiArrowRight size={25} color="#FFF" />
            </Link>
        </Popup>
    );
}
