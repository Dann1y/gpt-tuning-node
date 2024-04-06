# GPT Tuning Node

[GPT Fine-tuning](https://platform.openai.com/docs/guides/fine-tuning) with node.js. Easy to use with scripts 🔥

## Install

This project use `pnpm` as package manager.

```
pnpm i
```

## Get Started

### 0. Config

#### OPEN_API_KEY

- Create `.env` in the root to use `OPENAI_API_KEY` env variable.
- You can create your own API KEY in [here](https://platform.openai.com/api-keys).

#### Prepare data for fine-tuning

- Create jsonl file in root. `data-preset.jsonl`
- Check data format [here](https://platform.openai.com/docs/guides/fine-tuning/example-format).

### 1. Upload data

```
pnpm upload
```

- Upload data to OpenAI.
- After uploading, a `fileId` is created and stored in `file-id.js`.

### 2. Fine Tuning

```
pnpm tuning
```
<img width="825" alt="Screenshot 2024-04-06 at 4 12 25 PM" src="https://github.com/Dann1y/gpt-tuning-node/assets/29726020/793d74a8-abfd-4e69-a7a9-c0dfcce91ee4">


- Fine-tuning starts based on the uploaded file.
- Also, you can check the progress on the OpenAI platform website, and easily access the website by clicking returned URL.




### 3. Completion

```
pnpm complete
```
<img width="668" alt="Screenshot 2024-04-06 at 4 17 21 PM" src="https://github.com/Dann1y/gpt-tuning-node/assets/29726020/e65b60b0-1ae5-4c03-b5c5-3b06f6e95908">

- Finally, when fine-tuning is completed, the results will arrive at the email you logged in to gpt.
- Check ‘Output model’ in the URL and copy.
- Paste the 'Output model' in the `create-completion.js` model field.
- Enter your questions in `content` field.

Check the results to see if your tuning was successful 😁.
