function toggleMusic(){
    const music = document.getElementById("music")
    const toggleBtn = document.getElementById("musicToggle")
    const isPlaying = !music.paused

    if (isPlaying){
        music.pause()
        toggleBtn.src = "img/muted.png"
    }
    else{
        music.play()
        toggleBtn.src = "img/unmuted.png"
    }
}

function toggleBlog(){
    const blog = document.getElementById("blog")
    const toggleBtn = document.getElementById("viewBlog")
    const isHidden = blog.style.display === "none"

    if (isHidden){
        blog.style.display = "block"
        toggleBtn.innerHTML = "Hide Blog Posts"
    }
    else{
        blog.style.display = "none"
        toggleBtn.innerHTML = "View Blog Posts"
    }
}