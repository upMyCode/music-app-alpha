import { addMusic } from "../addMusic.js";
// import { loadData } from "../loadData";
const addInf = document.querySelector("#addButton");
const buttonPlay = document.querySelector(".musicPlayer");
let prograssBar = document.querySelector(".prograss__bar-item-2");
const prograssBarItem1 = document.querySelector(".prograss__bar-item");
const musicNum = document.querySelectorAll(".numberOfMusic");
const playSize = document.querySelector('.playSize');
const music = document.querySelectorAll(".audio");
const audio = new Audio();
let count = 0;
let musCount = 0;
audio.src = music[musCount].src;

addInf.addEventListener("click", () => {
  audio.src = music[musCount + 1].src;
});

audio.onloadedmetadata = function () {
  const musicDuration = this.duration;
  console.log(musicDuration);
  const time = Math.round(musicDuration);
  const width = prograssBarItem1.offsetWidth;
  const pixelPerSecond = width / time;
  console.log(pixelPerSecond);


buttonPlay.addEventListener("click", () => {
  count = 1;
  audio.play();
  addMusic();
  buttonPlay.style.background = 'url(/assets/img/Stop.png) no-repeat';
  buttonPlay.style.backgroundSize = '22px';
  buttonPlay.style.padding = 0;
  playSize.style.width = '26px';
  playSize.style.height = '100%';
  playSize.style.margin = '12px 0 0 14px';

  

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
 
});

buttonPlay.addEventListener("dblclick", () => {
  count = 2;

  for(let i = 0; i < 1; i++){
    music[i].classList.add('stop');
  }
  audio.pause();
  buttonPlay.style.background = 'url(/assets/img/Play.svg) no-repeat';
  buttonPlay.style.backgroundSize = '26px';
  buttonPlay.style.padding = 0;
  playSize.style.width = '26px';
  playSize.style.height = '100%';
  playSize.style.margin = '12px 0 0 16px';
  

  for (let i = 0; i < musicNum.length; i++) {
    musicNum[i].textContent = "";
  }
});

}