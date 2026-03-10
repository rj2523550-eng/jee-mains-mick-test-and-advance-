// ==================================================
// JEE MAINS MASTER HUB - AI CHATBOT (chatbot.js)
// ==================================================

// --- CONFIGURATION ---
// DHYAN DEIN: Ye API Key public code mein hai. Ise sirf testing ke liye use karein.
const CHAT_API_KEY = "AIzaSyDV0tNxYoiancgLEYS7usI3U4txxL1Oj6g"; // Aapki di hui key
const INITIAL_WELCOME_MSG = "Hello! Main aapka Jee Mains Master Hub mein swagat karta hoon. Aap Physics, Chemistry ya Maths se juda koi bhi sawal puch sakte hain. 🎓";

// --- HTML STRUCTURE & CSS (Attractive UI) ---
const chatUI = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
  #jee-chat-container { font-family: 'Poppins', sans-serif; position: fixed; bottom: 20px; right: 20px; z-index: 9999; }
  #jee-chat-window { width: 380px; height: 500px; background: #fff; border-radius: 15px; box-shadow: 0 5px 25px rgba(0,0,0,0.2); overflow: hidden; display: flex; flex-direction: column; transition: all 0.3s ease; }
  /* Header Design */
  .jee-chat-header { background: linear-gradient(135deg, #1e3c72, #2a5298); color: white; padding: 15px; display: flex; align-items: center; justify-content: space-between; }
  .jee-logo-area { display: flex; align-items: center; gap: 10px; }
  .jee-logo-icon { font-size: 24px; } /* Graduation Cap Icon */
  .jee-title { font-weight: 600; font-size: 16px; }
  .jee-subtitle { font-size: 11px; opacity: 0.8; }
  .jee-close-btn { cursor: pointer; font-size: 20px; opacity: 0.7; transition: 0.2s; }
  .jee-close-btn:hover { opacity: 1; transform: scale(1.1); }
  /* Message Area */
  #jee-msg-box { flex: 1; padding: 15px; overflow-y: auto; background: #f4f7f6; scroll-behavior: smooth; }
  .message { margin-bottom: 12px; max-width: 85%; padding: 10px 14px; border-radius: 15px; font-size: 14px; line-height: 1.4; word-wrap: break-word; }
  .bot-msg { background: #e1ecfc; color: #1e3c72; border-top-left-radius: 2px; align-self: flex-start; float: left; clear: both; }
  .user-msg { background: #1e3c72; color: white; border-bottom-right-radius: 2px; align-self: flex-end; float: right; clear: both; }
  /* Input Area */
  .jee-input-area { padding: 10px; background: white; border-top: 1px solid #eee; display: flex; align-items: center; gap: 10px; }
  #jee-input { flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 25px; outline: none; transition: 0.3s; }
  #jee-input:focus { border-color: #1e3c72; }
  #jee-send-btn { width: 45px; height: 45px; background: #1e3c72; color: white; border: none; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
  #jee-send-btn:hover { background: #2a5298; transform: scale(1.05); }
  /* Toggle Button (Collapsed State) */
  #jee-toggle-btn { position: fixed; bottom: 20px; right: 20px; width: 60px; height: 60px; background: linear-gradient(135deg, #1e3c72, #2a5298); border-radius: 50%; display: none; align-items: center; justify-content: center; color: white; font-size: 28px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.3); z-index: 9998; transition: 0.3s; }
  #jee-toggle-btn:hover { transform: scale(1.1); }
  /* Typing Indicator */
  .typing-indicator { display: flex; gap: 5px; padding: 10px 14px; background: #e1ecfc; border-radius: 15px; width: fit-content; border-top-left-radius: 2px; float: left; clear: both;}
  .typing-dot { width: 8px; height: 8px; background: #90a4ae; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; }
  .typing-dot:nth-child(1) { animation-delay: -0.32s; }
  .typing-dot:nth-child(2) { animation-delay: -0.16s; }
  @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
</style>

<div id="jee-chat-container">
  <div id="jee-chat-window">
    <div class="jee-chat-header">
      <div class="jee-logo-area">
        <span class="jee-logo-icon">🎓</span> <div>
          <div class="jee-title">JEE Mains Master Hub</div>
          <div class="jee-subtitle">AI Study Assistant • Online</div>
        </div>
      </div>
      <i class="fas fa-times jee-close-btn" onclick="toggleJeeChat()"></i>
    </div>

    <div id="jee-msg-box"></div>

    <div class="jee-input-area">
      <input type="text" id="jee-input" placeholder="Apna doubt yahan puchein..." autocomplete="off" />
      <button id="jee-send-btn" onclick="sendToJeeAI()"><i class="fas fa-paper-plane"></i></button>
    </div>
  </div>
</div>

<div id="jee-toggle-btn" onclick="toggleJeeChat()">
  <i class="fas fa-comment-dots"></i>
</div>
`;

// Inject UI into the body
document.body.insertAdjacentHTML('beforeend', chatUI);

// --- JAVASCRIPT LOGIC ---

// Elements references
const chatWindow = document.getElementById('jee-chat-window');
const toggleBtn = document.getElementById('jee-toggle-btn');
const msgBox = document.getElementById('jee-msg-box');
const inputField = document.getElementById('jee-input');

// Function to open/close chat
function toggleJeeChat() {
  if (chatWindow.style.display === 'none') {
    chatWindow.style.display = 'flex';
    toggleBtn.style.display = 'none';
  } else {
    chatWindow.style.display = 'none';
    toggleBtn.style.display = 'flex';
  }
}

// Helper function to add messages to chat box
function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-msg' : 'bot-msg');
    // Convert line breaks to <br> for cleaner output
    msgDiv.innerHTML = text.replace(/\n/g, '<br>');
    msgBox.appendChild(msgDiv);
    // Auto scroll to bottom
    msgBox.scrollTop = msgBox.scrollHeight;
}

// Helper function to show typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'typing-indicator';
    typingDiv.classList.add('typing-indicator');
    typingDiv.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    msgBox.appendChild(typingDiv);
    msgBox.scrollTop = msgBox.scrollHeight;
}

// Helper function to remove typing indicator
function removeTypingIndicator() {
    const typingDiv = document.getElementById('typing-indicator');
    if (typingDiv) typingDiv.remove();
}

// Main function to handle sending messages
async function sendToJeeAI() {
    const user Text = inputField.value.trim();
    if (!userText) return;

    // 1. Show User Message
    appendMessage(userText, 'user');
    inputField.value = '';
    showTypingIndicator();

    try {
        // 2. Call Gemini API (Using fetch for simplicity in a single file)
        // Using gemini-1.5-flash model for faster responses
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${CHAT_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "contents": [{
                    "parts": [{"text": userText}]
                }],
                // Optional: System instruction to keep it focused on JEE
                "system_instruction": {
                    "parts": [{"text": "You are an expert AI assistant for JEE Mains Master Hub. Your goal is to help students with Physics, Chemistry, and Mathematics questions in Hinglish. Be polite, encouraging, and accurate."}]
                }
            })
        });

        const data = await response.json();
        removeTypingIndicator();

        // 3. Display AI Response
        if (data.candidates && data.candidates[0].content) {
            const aiText = data.candidates[0].content.parts[0].text;
            appendMessage(aiText, 'bot');
        } else {
             appendMessage("Maaf kijiye, mujhe samajh nahi aaya. Kripya dobara puchein.", 'bot');
        }

    } catch (error) {
        removeTypingIndicator();
        console.error("Error connecting to Gemini:", error);
        appendMessage("Internet connection error ya API issue. Thodi der baad try karein.", 'bot');
    }
}

// --- INITIALIZATION ---

// 1. Enable "Enter" key to send
inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendToJeeAI();
});

// 2. Show Welcome Message Automatically on Load
setTimeout(() => {
    appendMessage(INITIAL_WELCOME_MSG, 'bot');
}, 500); // Half-second delay for smooth appearance

// Note: Chat window is OPEN by default in the CSS above.
// If you want it closed by default, uncomment the next line:
// toggleJeeChat(); 
    
