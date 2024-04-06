import { openai } from "./instance.js";

async function createCompletion() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: "책님, 이번 시즌 맨시티 챔스 우승할 수 있나요?!",
        },
      ],
      model: "",
    });

    console.log(completion.choices[0]);
  } catch (err) {
    console.log("[create-complettion]: ", err);
  }
}

createCompletion();
