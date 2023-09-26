import { ask } from 'node-gpt-api'
import { writeFileSync } from 'fs'
import express from 'express'

// async function main() {
//   // ask GPT a question and wait for complete response
//   let task = await ask('Can I call GPT API from Typescript?')
//   console.log(task.text)
//   writeFileSync(`task-${task.id}.html`, task.html)

//   // ask GPT a question and process the partial response in realtime
//   task = await ask('What can I do with GPT?', task => {
//     console.clear()
//     console.log(task.question)
//     console.log('='.repeat(32))
//     console.log(task.text)
//   })
//   console.log('text:', task.text.length, 'html:', task.html.length)
// }
// main()

// const express = require('express');
// const { ask } = require('node-gpt-api');
const app = express();
const port = 5000;

app.use(express.json());

app.post('/ask-gpt', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await ask(userMessage);
    res.json({ botResponse: response.text });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
