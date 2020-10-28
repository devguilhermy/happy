import PlaceModel from "../models/Place";
import ImageView from "./Image";

export default {
    render(place: PlaceModel) {
        const {
            id,
            name,
            about,
            instructions,
            working_hours,
            working_weekends,
            latitude,
            longitude,
            images,
        } = place;

        return {
            id,
            name,
            about,
            instructions,
            working_hours,
            working_weekends,
            latitude,
            longitude,
            images: ImageView.renderMany(images),
        };
    },

    renderMany(places: PlaceModel[]) {
        return places.map((place) => this.render(place));
    },
};
