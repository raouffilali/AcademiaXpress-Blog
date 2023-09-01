import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      return cb(new Error("Only support .jpg, .jpeg, .png"));
    }

    // const fileTypes = /jpeg|jpg|png/;
    // const extName = fileTypes.test(
    //   file.originalname.split(".")[file.originalname.split(".").length - 1]
    // );
    // const mimeType = fileTypes.test(file.mimetype);
    // if (extName && mimeType) {
    //   cb(null, true);
    // } else {
    //   cb(new Error("Only support .jpg, .jpeg, .png"));
    // }
  },
});

export default uploadPicture;
