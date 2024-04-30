# project_lamda_23

> Hello Guysss!!! All the best for Hackathon 

## We are gonna Rock It!!!

## Preffered IDE to use:
* WebStorm 

## Tech Stack used:
* Angular
* Node JS (With express)

## Prerequisites:

* Node JS Install

## How to setup on local machine:

* Clone this Repo 

* The project has 2 components->

1)Client (client_angular):
* cd into client_angular/project_lambda
* run npm install
* run npm start/ng serve

2)Server:
* cd into server
* npm install 
* run the start script from package.json (nodemon start)

## Some useful promts:

### Portfolio Section:

Analyze the financials for [ticker] and provide a concise report on its profitability and financial health.

Analyze the industry trends for [ticker] and provide a concise report on its competitive positioning.

Analyze the management team for [ticker] and provide a concise report on their leadership and track record.

Analyze the market sentiment for [ticker] and provide a concise report on the public perception of the company.

Analyze the regulatory environment for [ticker] and provide a concise report on any potential risks or opportunities.

Analyze the technical analysis for [ticker] and provide a concise report on the stock's price trends and momentum.

Analyze the valuation metrics for [ticker] and provide a concise report on its current valuation and potential upside.

Analyze the dividend history for [ticker] and provide a concise report on its dividend growth and sustainability.

Analyze the risk factors for [ticker] and provide a concise report on any potential risks to the investment.

Analyze the macroeconomic environment for [ticker] and provide a concise report on any potential impact on the stock.

## Fine Tuning Details:
Google Colab Notebook link https://colab.research.google.com/drive/1BT5FFEd1H4ftVmz0AJ_jzhqGch1JBBna?usp=sharing
Also uploading the file fine_tuning_prepared.jsonl which contains the prompts

* Add your prompts in the jsonl
* Open the google colab link and upload your prompts file 
* Run the google colab cells one by one 

## Details for FAQ generator:

```const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/generate-faq', async (req, res) => {
const inputText = req.body.inputText;

const faqPairs = await generateFaqPairs(inputText);

res.json(faqPairs);
});

async function generateFaqPairs(inputText) {
const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
prompt: `What are the frequently asked questions about ${inputText}?`,
max_tokens: 50,
n: 10,
stop: ['\n']
}, {
headers: {
'Content-Type': 'application/json',
'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
}
});

const completions = response.data.choices.map(choice => choice.text.trim());

const faqPairs = completions.map((completion, index) => ({
question: completion,
answer: `Answer for ${index+1}`
}));

return faqPairs;
}

app.listen(3000, () => {
console.log('Server listening on port 3000');
});
```
