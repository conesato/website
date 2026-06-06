// アニメーション終了時操作
const container = document.querySelector('.animation-container');
const fusumaLeft = document.querySelector('.fusuma-left');
const fusumaRight = document.querySelector('.fusuma-right');

fusumaLeft.addEventListener('animationend', () => {
    container.style.display = 'none';
});


// マウスストーカー
const stalk = document.getElementById('stalker');

// ストーカーアニメーション用
// let lastX = 0;

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    stalk.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('mouseenter', () => {
    stalk.classList.add('active');
});

document.addEventListener('mouseleave', () => {
    stalk.classList.remove('active');
});