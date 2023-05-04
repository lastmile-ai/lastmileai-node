# LastMile AI Node.js Library

This library provides access to the LastMile AI API from Node.js. The code should reflect the same API endpoints documented here: https://lastmileai.dev/docs/api

# API Token
This library requires a LastMile AI API Token, which can be obtained from https://lastmileai.dev/settings?page=tokens.

**Important note: this library should only be used from a server-side context, where the API key can be securely accessed. Using this library from client-side browser code will expose your private API key!**

# Installation
```
npm install lastmileai
```

# Usage

## Initialize Library with API Key
This library needs to be configured with your API Token (aka API key) obtained above. You can store the API key in an environment variable or alternative secure storage that can be accessed in your server-side code. For example, to initialize the library with the API key loaded from environment variable:
```
import { Configuration, LastMileAIApi } from "lastmileai";
import * as dotenv from 'dotenv'

dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.LASTMILEAI_API_KEY ?? "",
});

const lastmile = new LastMileAIApi(configuration);
```

## Completions -- Open AI Models
OpenAI completions are supported out-of the box for ChatGPT and GPT3 models:
```
const completion = await lastmile.createOpenAICompletion({
  completionParams: {
    model: "text-davinci-003",
    prompt: "Your prompt here",
  },
});
const responseText = completion.choices[0]?.text;
```
```
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

