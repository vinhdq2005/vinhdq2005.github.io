// Bài 1

let arrFruits = [
    ["grape", 15],
    ["apple", 30],
    ["orange", 10]
]

// console.table(arrFruits)
console.log("I have" + " " + arrFruits[0][1] + " " + arrFruits[0][0]);

// Bài 1 for...of

for (let [fruits, quantity] of arrFruits) {
    console.log("I have" + " " + quantity + " " + fruits);
}

for (let fruits of arrFruits) {
    console.log("I have "+ fruits[1] + " " +fruits[0]);
}


// for...in: for(var in object)
let game = {
    1: "pubg",
    2: "LoL",
    3: "Csgo"
}

for (let x in game) {
    console.log(x + " " + game[x]);
}

for (let x in game) {
    console.log(x);
}

for (let x in game) {
    console.log(game[x]);
}

// for...of: 

for (let [fruits, quantity] of arrFruits) {
    console.log(fruits);
    console.log(quantity);
}

// Bài 2

// cách 1
console.log("I have" + " " + arrFruits[0][1] + " " + arrFruits[0][0]);
console.log("I have" + " " + arrFruits[1][1] + " " + arrFruits[1][0]);
console.log("I have" + " " + arrFruits[2][1] + " " + arrFruits[2][0]);

// cách 2 for...in
let fruits = {
    grape: 15,
    apple: 30,
    orange: 10
} 

for (let name in fruits) {
    console.log("I have " + fruits[name] + " " + name);
}

// cách 3 for...of
for (let [fruits, quantity] of arrFruits) {
    console.log("I have " + quantity + " " + fruits);
}

// Bài 3

var myDog = {
    "name": "ngáo",
    "legs": 4,
    "friends": ["everything!"]

}

let Husky = myDog

console.log(Husky);

Husky.color = "Brown"

delete Husky.friends