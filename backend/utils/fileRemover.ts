import fs from "fs";
import path from "path";

const fileRemover = (filename) => {
  fs.unlink(path.join(__dirname, `../public/uploads/${filename}`), (err) => {
    if (err && err.code === "ENOENT") {
      // FILE DOESN'T EXIST
      console.info(`File ${filename} doesn't exist, won't remove it.`);
    } else if (err) {
      // OTHER ERROR
      console.error(`Error occurred while trying to remove file ${filename}`);
    } else {
      console.info(`Removed file ${filename}`);
    }
  });
};

export default fileRemover;
