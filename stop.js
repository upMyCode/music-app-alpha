export function stop() {
    const music = document.querySelector('.audio');
    const audio = new Audio;
    audio.src = music.src;
    audio.pause();
}