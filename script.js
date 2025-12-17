const chatBox = document.getElementById('chat-box');
const input = document.getElementById('user-input');
const button = document.getElementById('send-btn');

button.addEventListener('click', async () => {
  const question = input.value;
  if (!question) return;

  chatBox.innerHTML += `<p><b>You:</b> ${question}</p>`;
  input.value = '';

  try {
    const res = await fetch('https://amarai-backend.yourrepl.co/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question })
    });

    const data = await res.json();
    chatBox.innerHTML += `<p><b>AmarAI:</b> ${data.answer}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

  } catch (err) {
    chatBox.innerHTML += `<p><b>AmarAI:</b> Error connecting to backend</p>`;
  }
});

