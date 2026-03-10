// chatbot.js
const CHAT_API_KEY = "YAHAN_APNI_KEY_DALEIN"; // Jab key mil jaye tab yahan paste karna

const injectChatHTML = `
<div id="ai-chat-master" style="position: fixed; bottom: 20px; right: 20px; z-index: 99999;">
    <div id="ai-chat-win" style="display: none; width: 320px; height: 450px; background: white; border-radius: 15px; box-shadow: 0 10px 25px rgba(0,0,0,0.2); flex-direction: column; overflow: hidden; margin-bottom: 10px; border: 1px solid #ddd; font-family: sans-serif;">
        <div style="background: #003366; color: white; padding: 15px; font-weight: bold; display: flex; justify-content: space-between;">
            <span><i class="fas fa-robot"></i> JEE Master AI</span>
            <span onclick="toggleChat()" style="cursor:pointer;">&times;</span>
        </div>
        <div id="ai-msg-box" style="flex: 1; padding: 15px; overflow-y: auto; background: #f9f9f9; font-size: 14px; display: flex; flex-direction: column; gap: 10px;">
            <div style="background: #e1f5fe; padding: 10px; border-radius: 10px; align-self: flex-start;">
                Namaste! Main JEE Master AI hoon. Physics, Chem ya Maths ka koi bhi doubt puchiye.
            </div>
        </div>
        <div style="padding: 10px; border-top: 1px solid #eee; display: flex; background: white;">
            <input type="text" id="ai-msg-input" placeholder="Yahan sawal likhein..." style="flex: 1; border: 1px solid #ddd; border-radius: 20px; padding: 8px 15px; outline: none;">
            <button onclick="sendMsgToAI()" style="background: #003366; color: white; border: none; border-radius: 50%; width: 35px; height: 35px; margin-left: 5px; cursor: pointer;">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    </div>
    <div onclick="toggleChat()" style="width: 60px; height: 60px; background: #003366; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.3); float: right;">
        <i class="fas fa-comment-dots" style="font-size: 28px;"></i>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', injectChatHTML);

function toggleChat() {
    const w = document.getElementById('ai-chat-win');
    w.style.display = (w.style.display === 'none' || w.style.display === '') ? 'flex' : 'none';
}

async function sendMsgToAI() {
    const input = document.getElementById('ai-msg-input');
    const box = document.getElementById('ai-msg-box');
    const text = input.value.trim();
    if(!text) return;

    box.innerHTML += `<div style="background: #003366; color: white; padding: 10px; border-radius: 10px; align-self: flex-end;">${text}</div>`;
    input.value = "";
    box.scrollTop = box.scrollHeight;

    const loaderId = "loading-" + Date.now();
    box.innerHTML += `<div id="${loaderId}" style="background: #eee; padding: 10px; border-radius: 10px; align-self: flex-start;">Thinking... 🧠</div>`;

    if(CHAT_API_KEY === "YAHAN_APNI_KEY_DALEIN") {
        setTimeout(() => { document.getElementById(loaderId).innerText = "Bhai, API Key connect nahi hai! Google AI Studio se key lekar code mein daalein."; }, 1000);
        return;
    }

    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${CHAT_API_KEY}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ contents: [{ parts: [{ text: "You are a JEE Expert. Answer: " + text }] }] })
        });
        const data = await res.json();
        document.getElementById(loaderId).innerText = data.candidates[0].content.parts[0].text;
    } catch(e) { document.getElementById(loaderId).innerText = "Connection error!"; }
    box.scrollTop = box.scrollHeight;
}

