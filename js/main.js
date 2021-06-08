let x = "Always stick together";

var whispersObj = [
    "Be the best version of yourself",
    "Don't stop, believing",
    "she took that midnight train",
    "Love what you have.",
    "Seek happiness. Surround yourself with happy people",
    "Find positivity in everything you do.", 
    "Be present in your life.",
    "Keep a healthy positive mindset."
]

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function somethingGood(){
    document.getElementById("tltCompliment").innerHTML = whispersObj[randomNum(0, 5)];
}