var musicList = [
    "../music/forever by ilyTOMMY.mp3",
    "../music/i like the way you kiss me by Artemas.mp3",
    "../music/if you think i'm pretty by Artemas.mp3"
]

function toggleMusic(){
    const music = document.getElementById("music")
    const musicToggle = document.getElementById("musicToggle")
    const isPlaying = !music.paused
    if (isPlaying){
        music.pause()
        musicToggle.src = "img/muted.png"
    }
    else{
        var randomMusic = Math.floor(Math.random() * musicList.length)
        music.src = musicList[randomMusic]
        music.play()
        musicToggle.src = "img/unmuted.png"
    }
}