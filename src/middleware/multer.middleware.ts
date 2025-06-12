import multer from "multer";
import { Request } from "express";


export const multerMiddlware = multer({
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter(req:Request, file, cb) {
    const allowed = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowed.includes(file.mimetype)) {
      return cb(
        new Error("Only image files are allowed (jpeg, png, gif, webp)")
      );
    }
    cb(null, true);
  },
});