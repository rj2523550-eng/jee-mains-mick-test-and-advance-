function shareToWhatsApp() {
    const currentURL = window.location.href;
    const pageTitle = document.title;
    let message = "";

    // Page-wise Dynamic Messages
    if (currentURL.includes("weekly-test") || currentURL.includes("mock-test")) {
        message = "🔥 Maine JEE Mains Weekly Mock Test diya! Kya tum mere score ko beat kar sakte ho? Dum hai toh try karo: ";
    } else if (currentURL.includes("physics")) {
        message = "🚀 Physics ke ye Short Notes aur Visualizations dekho! JEE 2026 crack karne ki best jagah: ";
    } else if (currentURL.includes("chemistry")) {
        message = "🧪 Organic Chemistry ki reactions ab ek click mein! Maine toh taiyari shuru kar di, tum kab karoge? ";
    } else if (currentURL.includes("maths")) {
        message = "📐 Maths ke tough sawaal ab honge solve! Ye amazing resources check karo: ";
    } else {
        message = "🎯 JEE Mains 2026 Crack karne ka PERFECT Game Plan mil gaya! Jaldi dekho warna peeche reh jaoge: ";
    }

    const finalText = encodeURIComponent(message + "\n\n🔗 Link: " + currentURL);
    window.open(`https://api.whatsapp.com/send?text=${finalText}`, '_blank');
}

function copyToClipboard() {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
        const btn = document.getElementById('copyBtnText');
        const originalText = btn.innerText;
        btn.innerText = "Link Copied! ✅";
        setTimeout(() => {
            btn.innerText = originalText;
        }, 2000);
    });
}
