let clickCount = 0;
let profitPerClick = 2;
let nextLevel = 25000;
let profitPerHour = 0;
let level = 1;

document.getElementById('click-circle').addEventListener('click', () => {
    clickCount += profitPerClick;
    document.getElementById('profit-per-click').innerText = `+${profitPerClick}`;
    document.getElementById('next-level').innerText = `${nextLevel - clickCount}к`;
    document.getElementById('profit-per-hour').innerText = profitPerHour;
    document.getElementById('level').innerText = level;
    if (clickCount >= nextLevel) {
        level++;
        clickCount = 0;
        profitPerClick += 2;
        nextLevel *= 2;
        document.getElementById('level').innerText = level;
        document.getElementById('next-level').innerText = `${nextLevel - clickCount}к`;
    }
});
