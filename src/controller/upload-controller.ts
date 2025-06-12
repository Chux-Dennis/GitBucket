import { Request, Response } from "express";
import dotenv from "dotenv"
dotenv.config()
import axios from "axios";
export const uploadController = async (req: Request, res: Response): Promise<any> => {
  try {
    if (!req.file) throw new Error("No file uploaded.");

    const { originalname, buffer } = req.file;
    const base64Content = buffer.toString("base64");
    const fileName = `${Date.now()}-${originalname}`;
    const githubPath = `${process.env.FOLDER_NAME}/${fileName}`

    const url = `https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${process.env.REPO_NAME}/contents/${githubPath}`;

    const response = await axios.put(
      url,
      {
        message: `Upload ${fileName}`,
        content: base64Content,
        branch: process.env.BRANCH,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          "Content-Type": "application/json",
          "User-Agent": process.env.GITHUB_USERNAME,
        },
      }
    );

    const rawUrl = `https://raw.githubusercontent.com/${process.env.GITHUB_USERNAME}/${process.env.REPO_NAME}/${process.env.BRANCH}/${githubPath}`;

    return res.status(200).json({
      message: "Image uploaded successfully",
      url: rawUrl,
    });
  } catch (err: any | unknown) {
    console.log(err)
    return res.status(400).json({
      error: err.message || "Something went wrong.",
    });
  }
}