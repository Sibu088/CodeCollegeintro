const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)

app.post('/ask', async (req, res) => {
  const userInput = req.body.userInput;

  if (!userInput) {
    return res.status(400).json({ error: "Input is required" });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: "text-davinci-003",
        prompt: userInput,
        max_tokens: 100,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const aiResponse = response.data.choices[0].text.trim();
    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
