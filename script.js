// ハートと花びらのアニメーション
const colors = ["#ff79c6", "#ffb6c1", "#f1fa8c", "#8be9fd"];
const emojis = ["💖","🌸","✨","🎈"];

function createFloatingEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('floating-emoji');
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
    emoji.style.fontSize = Math.random() * 24 + 24 + 'px';
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

setInterval(createFloatingEmoji, 500);

const style = document.createElement('style');
style.innerHTML = `
.floating-emoji {
    position: fixed;
    bottom: -50px;
    animation-name: floatUp;
    animation-timing-function: linear;
    color: ${colors[Math.floor(Math.random() * colors.length)]};
}

@keyframes floatUp {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh);
        opacity: 0;
    }
}

@media (max-width: 600px) {
    .floating-emoji {
        font-size: 16px;
    }
}
`;

document.head.appendChild(style);

// ポップアップと音楽の制御
function revealMessage() {
    document.getElementById('popup').classList.remove('hidden');
    document.getElementById('music').play();
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('music').pause();
}

// アニメーションをクリックで開始するように調整
document.getElementById('start-animation').addEventListener('click', () => {
    setInterval(createFloatingEmoji, 500);
});
