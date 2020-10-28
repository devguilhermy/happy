import multer from "multer";
import path from "path";
import sanitizer from "sanitize-filename";

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, "..", "..", "uploads"),
        filename: (request, file, callback) => {
            const name = `${Date.now()}-${file.originalname.replace(
                " ",
                ""
            )}`;

            callback(null, name);
        },
    }),
};
