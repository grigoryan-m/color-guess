function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener("DOMContentLoaded", () => {
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const blue = document.getElementById("blue");

    const randColor = document.getElementsByClassName("background")[0];
    const guessedColor = document.getElementsByClassName("background")[1];

    let randRed = getRandomInt(256);
    let randGreen = getRandomInt(256);
    let randBlue = getRandomInt(256);

    const button = document.getElementsByClassName("submit")[0];

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

    button.addEventListener("click", () => {
        let redPerc = 100 - ((Math.abs(red.value - randRed) / 255) * 100); // Red accuracy %;
        let bluePerc = 100 - ((Math.abs(blue.value - randBlue) / 255) * 100);
        let greenPerc = 100 - ((Math.abs(green.value - randGreen) / 255) * 100);
    
        let accuracy = Math.ceil((redPerc + greenPerc + bluePerc) / 3);


        alert("Your guess was: (" + red.value.toString() + ", " + green.value.toString() + ", " + blue.value.toString() + ")\n"
        + "Secret color was: (" + randRed.toString() + ", " + randGreen.toString() + ", " + randBlue.toString() + ")\n"
        + "Your accuracy is " + accuracy.toString() + "%"
        );
        randRed = getRandomInt(256);
        randGreen = getRandomInt(256);
        randBlue = getRandomInt(256);

        randColor.style.backgroundColor =  'rgb(' + randRed + ', ' + randGreen + ', ' + randBlue + ')';
        red.value = 127;
        green.value = 127;
        blue.value = 127;
    });
});