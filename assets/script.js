import {addMusic} from '../addMusic.js';

const addInf = document.querySelector('#addButton');
addInf.addEventListener('click',addMusic);
const buttonPlay = document.querySelector('.musicPlayer');
const audio = new Audio;
buttonPlay.addEventListener('click', () => {
    const music = document.querySelector('.audio');
    audio.src = music.src;
    console.dir(audio);
    audio.play();
    addMusic();

    audio.onloadedmetadata = function () {
            const musicDuration = this.duration;
            const time = Math.round(musicDuration);
            let prograssBarItem1 = document.querySelector('.prograss__bar-item');
            const width = prograssBarItem1.offsetWidth;
            const pixelPerSecond = width/time;
            console.log(pixelPerSecond);
            let prograssBar = document.querySelector('.prograss__bar-item-2');
            
            

            function timeCollaps(prograssBar, pixelPerSecond){   
                let sumTime = 0;
                setInterval(() => {
                    sumTime +=  pixelPerSecond;
                    prograssBar.style.width = sumTime + 'px';
                },1000);

                
                prograssBar.style.width = pixelPerSecond;   
            }

            timeCollaps(prograssBar, pixelPerSecond);
        }
        
})

 buttonPlay.addEventListener('dblclick', () => {
    const musicNum = document.querySelectorAll('.numberOfMusic');
    const music = document.querySelector('.audio');
    audio.src = music.src;
    audio.pause();
        
    for(let i = 0; i < 1; i++) {
        musicNum[i].textContent = '';
    }
 })

