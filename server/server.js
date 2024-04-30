import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
import multer from "multer";
import fs from "fs";

import {PdfReader} from "pdfreader";
//const axios = require('axios');
//dotenv.config()
const upload = multer({ dest: 'uploads/' });
const puppeteer = import('puppeteer');
const configuration = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(configuration);
//require('dotenv').config();

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello the server is up and running!'
  })
})
app.get("/getFaq", async  (req,res) => {
  var content = "";
  fs.readFile("/Users/ishanarora/Downloads/sample_wiki.pdf", (err, pdfBuffer) => {
    // pdfBuffer contains the file content
     content = ""
    new PdfReader().parseBuffer(pdfBuffer, (err, item) => {
      if (err) console.error("error:", err);
      else if (!item) generateFAQ(content)
      else if (item.text) {
        content = content + item.text
      }
    });

res.status(200).send("sent");
  });


})
app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const model_to_use = req.body.model;

    const response = await openai.createCompletion({
      model: `${model_to_use}`,
      prompt: `${prompt}`,
       // Higher values means the model will take more risks.
      temperature: 0.18,
      max_tokens: 523,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["END"],
    });

    res.status(200).send({
      bot: response.data.choices[0].text
    });

  } catch (error) {
    console.error(error)
    res.status(500).send(error || 'Something went wrong');
  }
})


async function generateFAQ(content) {

  const prompt = `generate FAQ's for following content:\n${content}`;
  console.log(prompt);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${prompt}`,
    // Higher values means the model will take more risks.
    temperature: 0.7,
    max_tokens: 402,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  const faq = response.data.choices[0].text.trim().split('\n');
console.log(faq)
  return faq;
}






    app.listen(5004, () => console.log('AI server started on http://localhost:5004'))
