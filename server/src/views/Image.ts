import ImageModel from "../models/Image";

export default {
    render(image: ImageModel) {
        const { id, path } = image;

        return { id, url: `http://localhost:1234/uploads/${path}` };
    },

    renderMany(images: ImageModel[]) {
        return images.map((image) => this.render(image));
    },
};
