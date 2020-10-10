 export function addMusic() {
    const musicList = document.querySelector('#musicList');
    const music = document.querySelectorAll('.audio');
    const text = document.createElement('span');
    text.classList.add(`numberOfMusic`);
    musicList.append(text);
    const musicNum = document.querySelectorAll('.numberOfMusic');
    for(let i = 0; i < 1; i++) {
        musicNum[i].textContent = (music[i].src).toString();
    }
}

