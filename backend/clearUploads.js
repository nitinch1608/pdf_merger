import { readdirSync, unlinkSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadsPath = join(__dirname, "uploads");

const clearUploads = () => {
  try {
    const files = readdirSync(uploadsPath);
    for (const file of files) {
      const filePath = join(uploadsPath, file);
      unlinkSync(filePath);
      console.log("Deleted:", filePath);
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

export default clearUploads;
