// アニメーション終了時操作
// const container = document.querySelector('.fusuma-container');
// const fusumaLeft = document.querySelector('.fusuma-left');

// fusumaLeft.addEventListener('animationend', () => {
//     container.style.display = 'none';
// });


// マウスストーカー
const stalker = document.getElementById('coneta');

// ストーカーアニメーション用
// let lastX = 0;

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    stalker.style.transform = `translate(${x}px, ${y}px) scale(0.25)`;
});

document.addEventListener('mouseenter', () => {
    stalker.classList.add('active');
});

document.addEventListener('mouseleave', () => {
    stalker.classList.remove('active');
});
