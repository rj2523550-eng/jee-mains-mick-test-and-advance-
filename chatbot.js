// ==================================================
// JEE MAINS MASTER HUB - AI CHATBOT (chatbot.js)
// ==================================================

(function() { // Wrap in an IIFE to avoid global scope pollution

    // --- CONFIGURATION ---
    // DHYAN DEIN: Ye key ab safe hai kyunki aapne Repo ko PRIVATE kar diya hai.
    const CHAT_API_KEY = "AIzaSyD9mpQ9ulwg5JgO4YGB_xJgS-91YqyNbhY"; // Aapki Nayi Key
    const GEMINI_MODEL = "gemini-1.5-flash"; // Fast and efficient model
    const INITIAL_WELCOME_MSG = "Hello! Main aapka Jee Mains Master Hub mein swagat karta hoon. 🎓\n\nAap Physics, Chemistry ya Maths se juda koi bhi sawal puch sakte hain.";

    // --- HTML STRUCTURE & CSS (Attractive UI & Logo) ---
    const chatStyles = `
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      :root { --jee-blue: #1e3c72; --jee-light-blue: #2a5298; --jee-bg: #f4f7f6; }
      #jee-chat-container { font-family: 'Poppins', sans-serif; position: fixed; bottom: 20px; right: 20px; z-index: 9999; }
      #jee-chat-window { width: 380px; height: 550px; background: #fff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.15); overflow: hidden; display: flex; flex-direction: column; transition: all 0.3s ease; border: 1px solid #eee; }
      /* Header Design with Logo */
      .jee-chat-header { background: linear-gradient(135deg, var(--jee-blue), var(--jee-light-blue)); color: white; padding: 16px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
      .jee-logo-area { display: flex; align-items: center; gap: 12px; }
      .jee-logo-wrapper { background: rgba(255,255,255,0.2); padding: 8px; border-radius: 50%; display: flex;align-items: center;justify-content: center; height: 40px; width: 40px;}
      .jee-logo-icon { font-size: 24px; } /* Attractive Graduation Cap Logo */
      .jee-title-box { display: flex; flex-direction: column; }
      .jee-title { font-weight: 600; font-size: 17px; letter-spacing: 0.5px; }
      .jee-subtitle { font-size: 12px; opacity: 0.85; font-weight: 400; }
      .jee-close-btn { cursor: pointer; font-size: 22px; opacity: 0.8; transition: 0.2s; padding: 5px; }
      .jee-close-btn:hover { opacity: 1; transform: rotate(90deg); }
      /* Message Area */
      #jee-msg-box { flex: 1; padding: 20px; overflow-y: auto; background: var(--jee-bg); scroll-behavior: smooth; }
      .message { margin-bottom: 15px; max-width: 85%; padding: 12px 16px; border-radius: 18px; font-size: 14px; line-height: 1.5; word-wrap: break-word; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
      .bot-msg { background: #fff; color: #333; border-bottom-left-radius: 4px; align-self: flex-start; float: left; clear: both; border: 1px solid #e0e0e0;}
      .user-msg { background: linear-gradient(135deg, var(--jee-blue), var(--jee-light-blue)); color: white; border-bottom-right-radius: 4px; align-self: flex-end; float: right; clear: both; }
      /* Input Area */
      .jee-input-area { padding: 15px; background: white; border-top: 1px solid #eee; display: flex; align-items: center; gap: 10px; }
      #jee-input { flex: 1; padding: 14px; border: 2px solid #e0e0e0; border-radius: 30px; outline: none; transition: 0.3s; font-family: inherit; font-size: 14px; }
      #jee-input:focus { border-color: var(--jee-blue); }
      #jee-send-btn { width: 50px; height: 50px; background: linear-gradient(135deg, var(--jee-blue), var(--jee-light-blue)); color: white; border: none; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.3s; box-shadow: 0 4px 10px rgba(30,60,114,0.3); }
      #jee-send-btn:hover { transform: scale(1.05); box-shadow: 0 6px 15px rgba(30,60,114,0.4); }
      #jee-send-btn i { font-size: 18px; margin-left: -2px; }
      /* Toggle Button */
      #jee-toggle-btn { position: fixed; bottom: 20px; right: 20px; width: 65px; height: 65px; background: linear-gradient(135deg, var(--jee-blue), var(--jee-light-blue)); border-radius: 50%; display: none; align-items: center; justify-content: center; color: white; font-size: 30px; cursor: pointer; box-shadow: 0 5px 20px rgba(30,60,114,0.4); z-index: 9998; transition: 0.3s; }
      #jee-toggle-btn:hover { transform: scale(1.1) rotate(10deg); }
      /* Typing Indicator Styles */
      .typing-indicator { display: flex; gap: 6px; padding: 15px; background: #fff; border-radius: 18px; width: fit-content; border-bottom-left-radius: 4px; float: left; clear: both; border: 1px solid #e0e0e0; }
      .typing-dot { width: 8px; height: 8px; background: #b0b0b0; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both; }
      .typing-dot:nth-child(1) { animation-delay: -0.32s; }
      .typing-dot:nth-child(2) { animation-delay: -0.16s; }
      @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
      /* Responsive */
      @media (max-width: 450px) { #jee-chat-window { width: 100%; height: 100%; bottom: 0; right: 0; border-radius: 0; } #jee-chat-container { bottom: 0; right: 0; } }
    </style>
    `;

    const chatHTML = `
    <div id="jee-chat-container">
      <div id="jee-chat-window">
        <div class="jee-chat-header">
          <div class="jee-logo-area">
            <div class="jee-logo-wrapper">
                <span class="jee-logo-icon">🎓</span> </div>
            <div class="jee-title-box">
              <div class="jee-title">Jee Mains Master Hub</div>
              <div class="jee-subtitle">AI Study Assistant • Online</div>
            </div>
          </div>
          <div class="jee-close-btn" id="jee-close-action">✕</div>
        </div>

        <div id="jee-msg-box"></div>

        <div class="jee-input-area">
          <input type="text" id="jee-input" placeholder="Physics, Maths ya Chemistry ka sawal puchein..." autocomplete="off" />
          <button id="jee-send-btn"><i class="fas fa-paper-plane">➤</i></button>
        </div>
      </div>
    </div>

    <div id="jee-toggle-btn">💬</div>
    `;

    // Inject CSS and HTML
    document.head.insertAdjacentHTML('beforeend', chatStyles);
    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // --- JAVASCRIPT LOGIC ---

    const chatWindow = document.getElementById('jee-chat-window');
    const toggleBtn = document.getElementById('jee-toggle-btn');
    const closeBtn = document.getElementById('jee-close-action');
    const msgBox = document.getElementById('jee-msg-box');
    const inputField = document.getElementById('jee-input');
    const sendBtn = document.getElementById('jee-send-btn');

    // Toggle Chat Window
    function toggleJeeChat() {
        const isHidden = chatWindow.style.display === 'none';
        chatWindow.style.display = isHidden ? 'flex' : 'none';
        toggleBtn.style.display = isHidden ? 'none' : 'flex';
        if (isHidden) {
             setTimeout(() => inputField.focus(), 300); // Focus input on open
        }
    }

    toggleBtn.addEventListener('click', toggleJeeChat);
    closeBtn.addEventListener('click', toggleJeeChat);

    // Append Message to Chat
    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender === 'user' ? 'user-msg' : 'bot-msg');
        // Basic formatting: convert newlines to <br> and bold markers ** to <b>
        let formattedText = text.replace(/\n/g, '<br>');
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        msgDiv.innerHTML = formattedText;
        msgBox.appendChild(msgDiv);
        msgBox.scrollTo({ top: msgBox.scrollHeight, behavior: 'smooth' });
    }

    // Typing Indicators
    let typingIndicatorDiv = null;
    function showTypingIndicator() {
        if (typingIndicatorDiv) return;
        typingIndicatorDiv = document.createElement('div');
        typingIndicatorDiv.classList.add('typing-indicator');
        typingIndicatorDiv.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
        msgBox.appendChild(typingIndicatorDiv);
        msgBox.scrollTo({ top: msgBox.scrollHeight, behavior: 'smooth' });
    }

    function removeTypingIndicator() {
        if (typingIndicatorDiv) {
            typingIndicatorDiv.remove();
            typingIndicatorDiv = null;
        }
    }

    // Send Message to Gemini API
    async function sendToJeeAI() {
        const userText = inputField.value.trim();
        if (!userText) return;

        appendMessage(userText, 'user');
        inputField.value = '';
        // Reset height if using textarea, not needed for input type=text but good practice
        inputField.style.height = 'auto'; 

        showTypingIndicator();

        try {
            // Gemini API Endpoint
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${CHAT_API_KEY}`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "contents": [{
                        "parts": [{"text": userText}]
                    }],
                    // Strict Instructions for the AI
                    "system_instruction": {
                        "parts": [{"text": "You are Jee Mains Master Hub AI. Your role is to act as a friendly and expert tutor for JEE Mains aspirants. Answer questions related to Physics, Chemistry, and Mathematics clearly and concisely in Hinglish (Hindi+English mixture). Use bullet points and bold text for important formulas or concepts. Always be encouraging."}]
                    }
                })
            });

            if (!response.ok) {
                 throw new Error(`API request failed with status ${response.status}`);
            }

            const data = await response.json();
            removeTypingIndicator();

            if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts[0].text) {
                const aiText = data.candidates[0].content.parts[0].text;
                appendMessage(aiText, 'bot');
            } else {
                 // Handle safety blocks or empty responses
                 let blockedMsg = "Maaf karein, main is sawal ka jawab nahi de sakta.";
                 if (data.promptFeedback && data.promptFeedback.blockReason) {
                     blockedMsg += ` (Reason: ${data.promptFeedback.blockReason})`;
                 }
                 appendMessage(blockedMsg, 'bot');
            }

        } catch (error) {
            removeTypingIndicator();
            console.error("Jee Chatbot Error:", error);
            appendMessage("⚠️ Network error ya API issue. Kripya internet check karein ya thodi der baad try karein.", 'bot');
        }
    }

    // Event Listeners for Sending
    sendBtn.addEventListener('click', sendToJeeAI);
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendToJeeAI();
    });

    // --- INITIALIZATION ---
    // Initialize: Chat window is OPEN by default.
    chatWindow.style.display = 'flex'; 
    toggleBtn.style.display = 'none';

    // Show welcome message after a short delay for effect
    setTimeout(() => {
        appendMessage(INITIAL_WELCOME_MSG, 'bot');
    }, 600);

})(); // End IIFE
