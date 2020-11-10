import Leaflet from "leaflet";
import mapMarkerImg from "../images/map-marker.svg";

const mapMarker = Leaflet.icon({
    iconUrl: mapMarkerImg,

    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 4],
});

export default mapMarker;
