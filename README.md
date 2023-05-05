# LastMile AI Node.js Library

This library provides access to the LastMile AI API from Node.js. The code should reflect the same API endpoints documented here: https://lastmileai.dev/docs/api

# API Token
This library requires a LastMile AI API Token, which can be obtained from https://lastmileai.dev/settings?page=tokens.

**Important note: this library should only be used from a server-side context, where the API key can be securely accessed. Using this library from client-side browser code will expose your private API key!**

# Installation

```shell
npm install lastmileai
```

# Usage

## Initialize Library with API Key
This library needs to be configured with your API Token (aka API key) obtained above. You can store the API key in an environment variable or alternative secure storage that can be accessed in your server-side code. For example, to initialize the library with the API key loaded from environment variable:

```javascript
import { LastMile } from "lastmileai";

const lastmile = new LastMile({apiKey: process.env.LASTMILEAI_API_KEY ?? ""});
```

## Completions -- Open AI Models
OpenAI completions are supported out-of the box for ChatGPT and GPT3 models:

```javascript
const completion = await lastmile.createOpenAICompletion({
  completionParams: {
    model: "text-davinci-003",
    prompt: "Your prompt here",
  },
});
const responseText = completion.choices[0]?.text;
```

```javascript
const completion = await lastmile.createOpenAIChatCompletion({
  completionParams: {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: "Your prompt here" },
    ],
  },
});
const responseText = completion.choices[0].message?.content;
```


## Completions -- Custom Models
If you've tuned any GPT3-based custom models in [LastMile](https://lastmileai.dev/models) or by using this library, you can easily perform inference/completions against the context of their associated datasets (stored in the model's embeddings):

```javascript
const model = await lastmile.readModel("Your model ID");

const completion = await lastmile.createOpenAICompletion({
  completionParams: {
    model: "text-davinci-003",
    prompt: "Your prompt here",
  },
  embeddingCollectionId: model.embeddingCollections[0]?.id,
});
const responseText = completion.choices[0]?.text;


