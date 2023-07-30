function guessNum() {
    var number = Math.floor(Math.random()*100 + 1);
    var highest = 101;
    var attempt = 0;
    var chk = 1;

    while (chk == 1) {
        var i = prompt("Please enter a number from 1 to 100: [Press Q to quit]");
        attempt += 1;
        if (i < number) {
            alert("Your number is smaller than the number.");
        } else if (i > number) {
            alert("Your number is larger than the number");
        } else if (i == number) {
            alert("You got it!");
            chk = 0;
        } else if (i.toUpperCase() == "Q") {
            alert("Lucky number was " + number);
            alert("Goodbye :3");
            attempt = 0;
            chk = 0;
        }
    }
    document.getElementById("count").innerHTML = attempt
    if (attempt < highest) {
        document.getElementById("highest").innerHTML = attempt
    }
}