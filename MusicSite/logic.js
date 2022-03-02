var myMusic = document.getElementById('music');
var playButton = document.getElementById('play')

playButton.onclick = () => {
    if(myMusic.paused){
        myMusic.play();
        playButton.src = "resources/pause.png";
    }else{
        myMusic.pause();
        playButton.src = "resources/play.png";
        playButton.style = 'filter: invert(0)'
    }
}