
// bai 1

let firtsName = prompt("ho")
let surName = prompt("ten dem")
let lastName = prompt("ten")

console.log("ho + ten: ", firtsName +" "+ lastName)
console.log("ten dem + ten:", surName +" "+ lastName)

console.log(`ho + ten: ${firtsName +" "+ lastName}`)
console.log(`ten dem + ten: ${surName +" "+ lastName}`)

console.log("ho + ten: " +(firtsName+" "+lastName))
console.log("ten dem + ten: " +(surName+" "+lastName))

alert(`ho + ten: ${firtsName +" "+ lastName}`) 
alert(`ten dem + ten: ${surName +" "+ lastName}`)

alert("ho + ten: " +(firtsName +" "+ lastName))
alert("ten dem + ten: " +(surName +" "+ lastName))

// bai 2

let a_ = prompt("nhap a: ")
let a = parseInt(a_)

let b_ = prompt("nhap b: ")
let b = parseInt(b_)

console.log(`${a} chia ${b} du ${a%b}`)
alert(`${a} chia ${b} du ${a%b}`)

// bai 3

console.log("do dai cua string ho + ten la: ", firtsName.length+lastName.length)
console.log("do dai cua string ten dem + ten la: ", surName.length+lastName.length)

console.log(`do dai cua string ho + ten la: ${firtsName.length+lastName.length}`)
console.log(`do dai cua string ten dem + ten la: ${surName.length+lastName.length}`)

alert(`do dai cua string ho + ten la: ${firtsName.length+lastName.length}`)
alert(`do dai cua string ten dem + ten la: ${surName.length+lastName.length}`)


