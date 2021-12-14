// bai 1
console.log("Bai 1: ");

function findEven(number) {
    for (let i = 4; i <= number; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
findEven(20)

// bai 2
console.log("Bai 2: ");

// bai 3
console.log("bai 3: ");

let one = "";
function numberOneTriangle (line) {
    for (let i = 1; i <= line; i++) {
        for (let k = 0; k < i; k++) {
            one += "1"
        }
        one += "\n"
    }
    console.log(one);
}
numberOneTriangle(5)

// bai 4
console.log("bai 4: ");

function time() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    var clock = hours + ":" + minutes + ":" + seconds
    document.getElementById("time").innerHTML = clock
}
setInterval(time, 1000)