function randomQuotes(){
    const quotes = [
        '"I always manage to forget how to code sometimes."',
        '"Curly hair is so hard to manage!"',
        '"Submit your pending assignments!"',
        '"Masters in Procrastination"',
        '"I just want clear skin!"',
        '"I like girls with short hair."',
        '"Liking someone that likes someone else is crazy."'
    ]
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function openLink(link){
    window.open(link, "_blank");
}

window.onload = function(){
    document.getElementById("quote").innerHTML = randomQuotes();
}