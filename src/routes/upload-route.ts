import { Router } from "express";
import { multerMiddlware } from "../middleware/multer.middleware";
import limiter from "../middleware/limiter.middleware";
import { uploadController } from "../controller/upload-controller";

const Upload = Router();

Upload.post("/upload", limiter, multerMiddlware.single("image"), uploadController);



export default Upload;
