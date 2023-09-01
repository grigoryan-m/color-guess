function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", () => {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");

    const randColor = document.getElementsByClassName("background")[0];
    const guessedColor = document.getElementsByClassName("background")[1];

    const randRed = getRandomInt(256);
    const randGreen = getRandomInt(256);
    const randBlue = getRandomInt(256);

    randColor.style.backgroundColor =  'rgb(' + randRed + ', ' + randGreen + ', ' + randBlue + ')';

    red.addEventListener("input", () => {
        guessedColor.style.backgroundColor =  'rgb(' + red.value + ', ' + green.value + ', ' + blue.value + ')';
    });
    green.addEventListener("input", () => {
        guessedColor.style.backgroundColor =  'rgb(' + red.value + ', ' + green.value + ', ' + blue.value + ')';
    });
    blue.addEventListener("input", () => {
        guessedColor.style.backgroundColor =  'rgb(' + red.value + ', ' + green.value + ', ' + blue.value + ')';
    });
});