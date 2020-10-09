export function playMusic() {
    const buttonPlay = document.querySelector('.musicPlayer');
    const music = document.querySelector('.audio');
    buttonPlay.addEventListener('click', function() {

        const audio = new Audio;
        audio.src = music.src;
        audio.play();
    });
}
