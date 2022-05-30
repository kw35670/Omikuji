`use strict`;

{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        const n = Math.random() * 100;

        if (n < 5) {
            btn.textContent = '大吉';
        } else if (n < 20) {
            btn.textContent = '中吉';
        } else {
            btn.textContent ='凶';
        }
    });
}