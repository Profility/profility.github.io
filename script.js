function dayGreeting() {
    var date = new Date();
    var currentHours = date.getHours();

    var greeting = ""

    if (currentHours < 12) {
        greeting = "Good morning,"
    } else if (currentHours < 18) {
        greeting = "Good afternoon,"
    } else {
        greeting = "Good evening,"
    }
    
    document.getElementById("greeting").innerHTML = greeting 
}

function randomQuotes(){
    const quotes = [
        '"I always manage to forget how to code sometimes."',
        '"Curly hair is so hard to manage!"',
        '"Submit your pending assignments!"',
        '"Masters in Procrastination"',
        '"I just want clear skin!"',
        '"I like girls with short hair."'
    ]
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}

function openLink(link){
    window.open(link, "_blank");
}

window.onload = function(){
    dayGreeting();
    randomQuotes();
}