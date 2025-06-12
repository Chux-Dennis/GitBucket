import { Router } from "express";
import { multerMiddlware } from "../middleware/multer.middleware";
import { uploadController } from "../controller/upload-controller";

const Upload = Router();

Upload.post("/upload",multerMiddlware.single("image"), uploadController);

export default Upload;
