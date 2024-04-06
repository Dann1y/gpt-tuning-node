import { openai } from "./instance.js";
import fs from "fs";

async function uploadData() {
  try {
    const res = await openai.files.create({
      file: fs.createReadStream("./data-preset.jsonl"),
      purpose: "fine-tune",
    });
    const fileId = res.id;

    console.log("Uploaded File", fileId);

    fs.writeFileSync("./src/file-id.js", `export const fileId = "${fileId}"`);
  } catch (err) {
    console.log("[upload-data]", err);
  }
}

uploadData();
