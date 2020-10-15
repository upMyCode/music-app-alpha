import { addMusic } from "../addMusic.js";

const addInf = document.querySelector("#addButton");
addInf.addEventListener("click", addMusic);
const buttonPlay = document.querySelector(".musicPlayer");
const playSize = document.querySelector('.playSize');
const audio = new Audio();
let count = 0;
buttonPlay.addEventListener("click", () => {
  count = 1;
  const music = document.querySelector(".audio");
  audio.src = music.src;
  console.dir(audio);
  audio.play();
  addMusic();
  buttonPlay.style.background = 'url(/assets/img/Stop.png) no-repeat';
  buttonPlay.style.backgroundSize = '22px';
  buttonPlay.style.padding = 0;
  playSize.style.width = '26px';
  playSize.style.height = '100%';
  playSize.style.margin = '12px 0 0 14px';

  
  audio.onloadedmetadata = function () {
    const musicDuration = this.duration;
    const time = Math.round(musicDuration);
    let prograssBarItem1 = document.querySelector(".prograss__bar-item");
    const width = prograssBarItem1.offsetWidth;
    const pixelPerSecond = width / time;
    console.log(pixelPerSecond);
    let prograssBar = document.querySelector(".prograss__bar-item-2");
    function timeCollaps(prograssBar, pixelPerSecond) {
      let sumTime = 0;
      const a = setInterval(() => {
        if (sumTime <= 350) {
          console.log(prograssBar.style.width);
          sumTime += pixelPerSecond;
          prograssBar.style.width = sumTime + "px";
        }
        if(count == 2){
            clearInterval(a);
        }
      }, 1000);
    }

    timeCollaps(prograssBar, pixelPerSecond);
  };
});

buttonPlay.addEventListener("dblclick", () => {
  count = 2;
  const musicNum = document.querySelectorAll(".numberOfMusic");
  const music = document.querySelector(".audio");
  music.classList.add('stop');
  audio.src = music.src;
  audio.pause();
  buttonPlay.style.background = 'url(/assets/img/Play.svg) no-repeat';
  buttonPlay.style.backgroundSize = '26px';
  buttonPlay.style.padding = 0;
  playSize.style.width = '26px';
  console.log(playSize.style.width);
  playSize.style.height = '100%';
  playSize.style.margin = '12px 0 0 16px';
  

  for (let i = 0; i < 1; i++) {
    musicNum[i].textContent = "";
  }
});
