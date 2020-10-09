 export function addMusic() {
    const addMusic = document.querySelector('#addButton');
    const musicList = document.querySelector('#musicList');
    const music = document.querySelector('.audio');
    addMusic.addEventListener('click', musicAdder);
    
    
    function musicAdder() {
            const text = document.createElement('span');
            text.classList.add(`numberOfMusic`);
            musicList.append(text);
            const musicNum = document.querySelectorAll('.numberOfMusic');
            console.log(musicNum);
            const audio = document.querySelectorAll('.audio');
            for(let i = 0; i < audio.length; i++) {
                musicNum[i].textContent = audio[i].src;
            }
    }
}

