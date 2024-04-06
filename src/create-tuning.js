import { fileId } from "./file-id.js";
import { openai } from "./instance.js";

async function createFineTuning() {
  try {
    const fineTune = await openai.fineTuning.jobs.create({
      training_file: fileId,
      model: "gpt-3.5-turbo",
    });

    console.log(fineTune);
    console.log(
      "Check Status in platform: ",
      `https://platform.openai.com/finetune/${fineTune.id}`
    );
  } catch (err) {
    console.error("[create-tuning]: ", err);
  }
}

createFineTuning();
