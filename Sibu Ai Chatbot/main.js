const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Predefined responses for Sibu
const responses = {
  greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon'],
  farewell: ['bye', 'goodbye', 'see you', 'take care'],
  generalInfo: {
    'who are you': 'I am Sibu, your personal assistant! How can I help?',
    'what is your name': 'My name is Sibu!',
    'how are you': 'I am doing great, thank you for asking! How about you?',
    'who created this chatbot': 'Sibu is the founder and creator of this chatbot!',
    'what is the current year': `The current year is ${new Date().getFullYear()}.`,
    'help': 'You can ask me anything like "What time is it?", "Who created you?", "Tell me a joke!", and many more!',
  },
  time: {
    'what time is it': () => {
      const timeInSouthAfrica = new Date().toLocaleString('en-US', {
        timeZone: 'Africa/Johannesburg', // South Africa timezone
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      return `The current time in South Africa is ${timeInSouthAfrica}.`;
    },
  },
  date: {
    'what is today': () => `Today is ${new Date().toLocaleDateString()}.`,
  },
  weather: {
    'what is the weather': 'I am currently unable to check the weather, but you can always check it on your phone or through a weather app!',
  },
  jokes: {
    'tell me a joke': 'Why don\'t skeletons fight each other? They don\'t have the guts!',
    'can you tell me a joke': 'Sure! Why don\'t oysters donate to charity? Because they are shellfish!',
  },
  math: {
    'what is 2 plus 2': '2 + 2 equals 4.',
    'what is 5 times 3': '5 * 3 equals 15.',
    'what is 100 divided by 4': '100 / 4 equals 25.',
    'what is 9 minus 5': '9 - 5 equals 4.',
  },
  inspiration: {
    'give me an inspirational quote': '“The only way to do great work is to love what you do.” – Steve Jobs',
    'inspire me': '“It always seems impossible until it’s done.” – Nelson Mandela',
  },
  unknown: 'Sorry, I didn\'t understand that. Could you rephrase it?',
};

// Function to generate bot message
function botResponse(message) {
  const botMessage = document.createElement('div');
  botMessage.classList.add('bot-message');
  botMessage.innerHTML = `<p>${message}</p>`;
  chatBox.appendChild(botMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to generate user message
function userMessage(message) {
  const userMsg = document.createElement('div');
  userMsg.classList.add('user-message');
  userMsg.innerHTML = `<p>${message}</p>`;
  chatBox.appendChild(userMsg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle the user's input and find a suitable response
function handleInput() {
  const userText = userInput.value.trim().toLowerCase();

  if (userText) {
    userMessage(userText);
    userInput.value = '';

    // Process the response
    let response = responses.unknown;

    // Check for greetings
    if (responses.greetings.some(greeting => userText.includes(greeting))) {
      response = 'Hello! How can I assist you today?';
    }

    // Check for farewells
    else if (responses.farewell.some(farewell => userText.includes(farewell))) {
      response = 'Goodbye! Have a great day ahead!';
    }

    // Check for general information
    else if (responses.generalInfo[userText]) {
      response = responses.generalInfo[userText];
    }

    // Check for time (South Africa)
    else if (responses.time[userText]) {
      response = responses.time[userText]();
    }

    // Check for date
    else if (responses.date[userText]) {
      response = responses.date[userText]();
    }

    // Check for weather
    else if (responses.weather[userText]) {
      response = responses.weather[userText];
    }

    // Check for jokes
    else if (responses.jokes[userText]) {
      response = responses.jokes[userText];
    }

    // Check for math questions
    else if (responses.math[userText]) {
      response = responses.math[userText];
    }

    // Check for inspirational quotes
    else if (responses.inspiration[userText]) {
      response = responses.inspiration[userText];
    }

    // Return response
    setTimeout(() => {
      botResponse(response);
    }, 1000); // Simulate thinking time
  }
}

// Event listeners
sendBtn.addEventListener('click', handleInput);
userInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    handleInput();
  }
});
