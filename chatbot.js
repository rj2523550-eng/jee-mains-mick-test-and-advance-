// PW-Inspired Attractive Chatbot Design
const CHAT_API_KEY = "YAHAN_APNI_KEY_DALEIN"; 

const chatUI = `
<div id="pw-chat-wrapper" style="position: fixed; bottom: 25px; right: 25px; z-index: 99999; font-family: 'Poppins', sans-serif;">
    <div id="pw-chat-window" style="display: none; width: 350px; height: 500px; background: #fff; border-radius: 20px; box-shadow: 0 15px 50px rgba(0,0,0,0.15); flex-direction: column; overflow: hidden; margin-bottom: 15px; border: 1px solid #f0f0f0; transition: 0.3s ease-in-out;">
        
        <div style="background: linear-gradient(135deg, #00468c, #0072ff); color: white; padding: 20px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 40px; height: 40px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-robot" style="font-size: 20px;"></i>
                </div>
                <div>
                    <div style="font-weight: bold; font-size: 16px;">JEE Master AI</div>
                    <div style="font-size: 11px; opacity: 0.8;">● Online | 24x7 Help</div>
                </div>
            </div>
            <i class="fas fa-times" onclick="toggleChat()" style="cursor:pointer; font-size: 20px; opacity: 0.8;"></i>
        </div>

        <div id="pw-msg-box" style="flex: 1; padding: 20px; overflow-y: auto; background: #f8f9fc; display: flex; flex-direction: column; gap: 15px;">
            <div style="background: #fff; color: #444; padding: 12px 16px; border-radius: 15px 15px 15px 0; align-self: flex-start; max-width: 80%; font-size: 14px; box-shadow: 0 3px 10px rgba(0,0,0,0.03); line-height: 1.5;">
                Namaste student! 👋 <br>Main aapka AI Guru hoon. Physics, Chem ya Maths mein koi bhi doubt ho, bina dare puchiye!
            </div>
        </div>

        <div style="padding: 15px; background: white; border-top: 1px solid #eee; display: flex; align-items: center; gap: 10px;">
            <input type="text" id="pw-input" placeholder="Type your doubt here..." style="flex: 1; border: none; background: #f1f3f6; border-radius: 30px; padding: 12px 20px; outline: none; font-size: 14px; color: #333;">
            <button onclick="sendToAI()" style="background: #0072ff; color: white; border: none; border-radius: 50%; width: 45px; height: 450x; cursor: pointer; display: flex; align-items: center; justify-content: center; width: 45px; height: 45px; box-shadow: 0 4px 10px rgba(0,114,255,0.3); transition: 0.2s;">
                <i class="fas fa-paper-plane"></i>
            </button>
        </div>
    </div>

    <div id="pw-toggle-btn" onclick="toggleChat()" style="width: 65px; height: 65px; background: linear-gradient(135deg, #00468c, #0072ff); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 8px 25px rgba(0,70,140,0.4); border: 3px solid #fff; transition: 0.3s transform;">
        <i class="fas fa-comment-dots" style="font-size: 30px;"></i>
    </div>
</div>
`;

document.body.insertAdjacentHTML('beforeend', chatUI);

function toggleChat() {
    const win = document.getElementById('pw-chat-window');
    const btn = document.getElementById('pw-toggle-btn');
    if(win.style.display === 'none' || win.style.display === '') {
        win.style.display = 'flex';
        btn.style.transform = 'scale(0.8) rotate(90deg)';
    } else {
        win.style.display = 'none';
        btn.style.transform = 'scale(1) rotate(0deg)';
    }
}

async function sendToAI() {
    const input = document.getElementById('pw-input');
    const box = document.getElementById('pw-msg-box');
    const txt = input.value.trim();
    if(!txt) return;

    // User Message Bubble
    box.innerHTML += `
        <div style="background: #0072ff; color: white; padding: 12px 16px; border-radius: 15px 15px 0 15px; align-self: flex-end; max-width: 80%; font-size: 14px; box-shadow: 0 4px 12px rgba(0,114,255,0.2);">
            ${txt}
        </div>
    `;
    input.value = "";
    box.scrollTop = box.scrollHeight;

    // Typing Animation / Thinking
    const loaderId = "loader-" + Date.now();
    box.innerHTML += `
        <div id="${loaderId}" style="background: #eef2f7; color: #666; padding: 10px 15px; border-radius: 15px; align-self: flex-start; font-size: 13px;">
            AI is thinking... 🧠
        </div>
    `;

    if(CHAT_API_KEY === "YAHAN_APNI_KEY_DALEIN") {
        setTimeout(() => {
            document.getElementById(loaderId).innerHTML = "<b>Bhai, API Key connect nahi hai!</b><br>Google AI Studio se key lekar code ki pehli line mein daalein.";
            document.getElementById(loaderId).style.background = "#ffebee";
            document.getElementById(loaderId).style.color = "#c62828";
        }, 1000);
        return;
    }

    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${CHAT_API_KEY}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ contents: [{ parts: [{ text: "You are a JEE Expert. Answer: " + txt }] }] })
        });
        const data = await res.json();
        document.getElementById(loaderId).innerHTML = data.candidates[0].content.parts[0].text.replace(/\n/g, "<br>");
        document.getElementById(loaderId).style.background = "#fff";
        document.getElementById(loaderId).style.color = "#333";
    } catch(e) {
        document.getElementById(loaderId).innerText = "Connection failed! ⚠️";
    }
    box.scrollTop = box.scrollHeight;
}
