import multer from "multer";
import path from "path";

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, "..", "..", "uploads"),
        filename: (request, file, callback) => {
            const name = `${Date.now()}-${file.originalname}`;

            callback(null, name);
        },
    }),
};
