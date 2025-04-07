import express from "express";
import multer from "multer";
import Merging from "./merger.js";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import clearUploads from "./clearUploads.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mergedPdf = path.join(__dirname, "merged.pdf");

const upload = multer({ dest: "uploads/" });

const port = 5500;
const app = express();

app.post("/upload", upload.array("photos", 2), function (req, res, next) {
  try {
    console.log("Received Files:", req.files);
    Merging(
      path.join(__dirname, req.files[0].path),
      path.join(__dirname, req.files[1].path)
    );
    res.sendFile(mergedPdf);
    res.on("finish", () => {
      clearUploads();
    });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
