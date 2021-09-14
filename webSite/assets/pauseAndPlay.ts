import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads/indext'

const video = document.querySelector('video')
const buttonPlay: HTMLMediaElement = document.querySelector('#play_pause')
const buttonMute: HTMLMediaElement = document.querySelector('#mute_unmute')

const player = new MediaPlayer({el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads() ]});
buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}