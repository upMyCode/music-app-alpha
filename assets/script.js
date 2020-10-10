import {addMusic} from '../addMusic.js';

const addInf = document.querySelector('#addButton');
addInf.addEventListener('click',addMusic);
const buttonPlay = document.querySelector('.musicPlayer');
const audio = new Audio;

buttonPlay.addEventListener('click', () => {
    const music = document.querySelector('.audio');
    audio.src = music.src;
    audio.play();
    addMusic();

 })

 buttonPlay.addEventListener('dblclick', () => {
    const musicNum = document.querySelectorAll('.numberOfMusic');
    const music = document.querySelector('.audio');
    audio.src = music.src;
    console.log(audio);
    audio.pause();
    for(let i = 0; i < 1; i++) {
        musicNum[i].textContent = '';
    }
 })

