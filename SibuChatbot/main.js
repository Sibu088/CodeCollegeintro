function respond() {
    const userInput = document.getElementById('user-input').value;
    const aiResponse = document.getElementById('ai-response');
  
    if (!userInput.trim()) {
      aiResponse.textContent = "Please ask me something related to coding!";
    } else {
      aiResponse.textContent = `You asked: ${userInput}. How can I assist with that?`;
    }
  
    // Clear the input field after response
    document.getElementById('user-input').value = '';
  }
  